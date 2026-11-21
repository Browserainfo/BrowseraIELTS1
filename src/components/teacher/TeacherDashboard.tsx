/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  UserCheck, 
  Users, 
  FileCheck, 
  Sparkles, 
  Award, 
  Clock, 
  CheckCircle, 
  Edit3, 
  Send, 
  MessageSquare, 
  ChevronRight, 
  AlertCircle,
  HelpCircle,
  Filter,
  Plus
} from 'lucide-react';
import { User, TestSubmission, ExamModule } from '../../types';
import { DataService } from '../../services/dataService';
import { apiService } from '../../services/apiService';

interface TeacherDashboardProps {
  currentTeacher: User;
  onOpenSubmissionModal: (sub: TestSubmission) => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  currentTeacher,
  onOpenSubmissionModal
}) => {
  const [submissions, setSubmissions] = useState<TestSubmission[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [availableTests, setAvailableTests] = useState<any[]>([]);
  const [selectedSubForReview, setSelectedSubForReview] = useState<TestSubmission | null>(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [reviewError, setReviewError] = useState<string | null>(null);
  const [assignStatus, setAssignStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSavingReview, setIsSavingReview] = useState(false);
  const [isAssigning, setIsAssigning] = useState(false);

  // Teacher Review inputs
  const [adjustedBand, setAdjustedBand] = useState<number>(7.0);
  const [teacherNotes, setTeacherNotes] = useState<string>('');

  // Quick Assign inputs
  const [assignModule, setAssignModule] = useState<ExamModule>('writing');
  const [assignTestId, setAssignTestId] = useState('');
  const [assignTargetType, setAssignTargetType] = useState<'batch' | 'student'>('batch');
  const [assignStudentId, setAssignStudentId] = useState('');
  const [assignBatch, setAssignBatch] = useState(currentTeacher.assignedBatches?.[0] || 'CD-IELTS_Academic_default');
  const [assignDueDate, setAssignDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });

  const loadTeacherData = async () => {
    try {
      const [stData, subData, testData] = await Promise.all([
        apiService.getStudents(),
        apiService.getSubmissions(),
        apiService.getTests()
      ]);
      const safeStudents = Array.isArray(stData) && stData.length > 0
        ? stData
        : DataService.getUsers().filter(u => u.role === 'student');
      const safeSubs = Array.isArray(subData) ? subData : DataService.getSubmissions();
      const safeTests = Array.isArray(testData) ? testData : [];

      setStudents(safeStudents);
      setSubmissions(safeSubs);
      setAvailableTests(safeTests);

      if (safeStudents.length > 0 && !assignStudentId) {
        setAssignStudentId(safeStudents[0].studentId || safeStudents[0].id);
      }
      const firstBatch = safeStudents.find((s: any) => s.batch)?.batch;
      if (firstBatch) {
        setAssignBatch(prev => prev === 'CD-IELTS_Academic_default' ? firstBatch : prev);
      }
    } catch (err) {
      console.warn('Notice loading teacher dashboard data:', err);
      setStudents(DataService.getUsers().filter(u => u.role === 'student'));
      setSubmissions(DataService.getSubmissions());
    }
  };

  useEffect(() => {
    loadTeacherData();
  }, []);

  const filteredModalTests = availableTests.filter(
    t => (t.module || '').toLowerCase() === assignModule.toLowerCase()
  );

  useEffect(() => {
    if (filteredModalTests.length > 0 && !filteredModalTests.some(t => t.id === assignTestId)) {
      setAssignTestId(filteredModalTests[0].id);
    }
  }, [assignModule, availableTests]);

  const batchOptions = Array.from(
    new Set([
      ...students.map((s: any) => s.batch || s.batchName).filter(Boolean),
      'CD-IELTS_Academic_default',
      'CD-IELTS_General_Training_default',
      ...(currentTeacher.assignedBatches || [])
    ])
  );

  const assignedStudents = students;
  const pendingSubmissions = submissions.filter(s => !s.teacherReviewed);
  const scoredSubs = submissions
    .map(s => s.teacherAdjustedBand ?? s.overallBand ?? s.rawBandScore ?? s.aiReport?.overallBand)
    .filter((v): v is number => typeof v === 'number' && v > 0 && v <= 9);
  const averageBandDisplay = scoredSubs.length > 0
    ? `${(scoredSubs.reduce((a, b) => a + b, 0) / scoredSubs.length).toFixed(1)} Band`
    : 'No scores yet';

  const handleOpenReview = (sub: TestSubmission) => {
    setReviewError(null);
    setSelectedSubForReview(sub);
    const initialBand = sub.teacherAdjustedBand ?? sub.overallBand ?? sub.rawBandScore ?? sub.aiReport?.overallBand ?? 6.5;
    setAdjustedBand(initialBand);
    setTeacherNotes(sub.teacherFeedbackNotes || sub.feedbackNotes || 'Commendable effort. Review the grammar upgrades and maintain structured paragraphing.');
  };

  const handleSaveTeacherReview = async () => {
    if (!selectedSubForReview || isSavingReview) return;
    setIsSavingReview(true);
    setReviewError(null);

    try {
      const updated = await apiService.reviewSubmission(selectedSubForReview.id, {
        adjustedBand,
        feedbackNotes: teacherNotes
      });
      setSubmissions(prev => prev.map(s => (s.id === selectedSubForReview.id ? { ...s, ...updated } : s)));
      setSelectedSubForReview(null);
    } catch (err: any) {
      setReviewError(err?.message || 'Could not save review to server.');
    } finally {
      setIsSavingReview(false);
    }
  };

  const handleCreateAssignment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignTestId || isAssigning) return;
    setIsAssigning(true);
    setAssignStatus(null);

    try {
      const selectedTest = availableTests.find(t => t.id === assignTestId);
      const res = await apiService.assignTest({
        targetType: assignTargetType,
        testId: assignTestId,
        studentId: assignTargetType === 'student' ? assignStudentId : undefined,
        batchName: assignTargetType === 'batch' ? assignBatch : undefined,
        courseType: selectedTest?.courseType || 'CD-IELTS',
        dueDate: assignDueDate,
        availability: 'Immediate',
        allowDuplicate: false
      });
      setAssignStatus({ type: 'success', text: res.message || 'Test assigned successfully.' });
      setTimeout(() => {
        setIsAssignModalOpen(false);
        setAssignStatus(null);
      }, 1000);
    } catch (err: any) {
      setAssignStatus({ type: 'error', text: err?.message || 'Failed to assign test.' });
    } finally {
      setIsAssigning(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Teacher Profile Banner */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={currentTeacher.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80'}
              alt={currentTeacher.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-amber-500 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Certified Master Trainer</span>
              </div>
              <h1 className="text-xl font-bold text-white mt-0.5">{currentTeacher.name}</h1>
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 mt-1">
                <span>{currentTeacher.email}</span>
                <span>•</span>
                <span className="text-amber-300 font-medium">
                  {currentTeacher.specialization?.join(' | ') || 'IELTS Specialist'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAssignModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition"
            >
              <Plus className="w-4 h-4" />
              <span>Assign Practice Test</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">Assigned Students</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">{assignedStudents.length}</div>
            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Across active batches</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">Submissions Awaiting Review</div>
            <div className="text-2xl font-bold text-amber-600 mt-1">{pendingSubmissions.length}</div>
            <div className="text-[10px] text-amber-700 font-semibold mt-0.5">AI pre-scored pending check</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">Average Student Band</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">{averageBandDisplay}</div>
            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Target: 7.5+ Band</div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-[11px] font-semibold text-slate-500 uppercase">Assigned Batches</div>
            <div className="text-xs font-bold text-slate-800 mt-1 line-clamp-1">
              {batchOptions[0] || currentTeacher.assignedBatches?.[0] || 'CD-IELTS_Academic_default'}
            </div>
            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Active Training Lab</div>
          </div>
        </div>

        {/* Main Content: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Assigned Students Roster (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Assigned Student Cohort</h2>
                <p className="text-xs text-slate-500">Monitor individual band targets vs actual performance trajectory.</p>
              </div>
              <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                {assignedStudents.length} Students
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {assignedStudents.map(student => (
                <div key={student.id} className="py-3 flex items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-xl transition">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="font-bold text-xs text-slate-900">{student.name}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{student.candidateNumber || student.studentId || student.email}</div>
                      <div className="text-[10px] text-amber-700 font-medium">{student.batchName || student.batch || student.course}</div>
                    </div>
                  </div>

                  <div className="text-right space-y-0.5">
                    <div className="text-xs font-bold text-slate-900">
                      Status: <span className={student.accountStatus === 'Active' ? 'text-emerald-600' : 'text-slate-500'}>{student.accountStatus || 'Active'}</span>
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Target: <span className="font-bold text-slate-700">{student.targetBand || 7.5} Band</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{student.course || 'CD-IELTS'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Submissions & AI Feedback Review (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Submissions & AI Reviews</h2>
                <p className="text-xs text-slate-500">Review provisional AI rubrics and provide faculty remarks.</p>
              </div>
              <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-lg">
                {submissions.length} Total
              </span>
            </div>

            <div className="space-y-3">
              {submissions.map(sub => (
                <div 
                  key={sub.id} 
                  className={`p-3.5 rounded-xl border transition ${
                    sub.teacherReviewed 
                      ? 'border-slate-200 bg-slate-50/50' 
                      : 'border-amber-300 bg-amber-50/30 shadow-sm'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {sub.courseType.replace(/_/g, ' ')} • {sub.module}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 mt-0.5">{sub.testTitle}</h4>
                      <div className="text-[11px] text-slate-600 font-medium mt-0.5">Candidate: {sub.studentName}</div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-extrabold text-amber-600">
                        {typeof sub.teacherAdjustedBand === 'number' ? `Band ${sub.teacherAdjustedBand}` :
                         typeof sub.rawBandScore === 'number' ? `Band ${sub.rawBandScore}` :
                         typeof sub.aiReport?.overallBand === 'number' ? `Band ${sub.aiReport.overallBand}` : 'Pending'}
                      </span>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">{sub.submittedAt.split(' ')[0]}</div>
                    </div>
                  </div>

                  {sub.aiReport && (
                    <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                      <div className="font-semibold text-slate-700 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>AI Diagnostic: {sub.aiReport.modelUsed}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-1 italic mt-0.5">
                        "{sub.aiReport.detailedFeedback}"
                      </p>
                    </div>
                  )}

                  <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between">
                    {sub.teacherReviewed ? (
                      <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Reviewed by {sub.teacherName?.split(' ')[1] || 'You'}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-amber-700 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Needs Teacher Approval</span>
                      </span>
                    )}

                    <div className="flex items-center gap-2">
                      {sub.questionAnalysis && sub.questionAnalysis.length > 0 && (
                        <button
                          onClick={() => onOpenSubmissionModal(sub)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-2.5 py-1.5 rounded-lg transition"
                        >
                          Answers
                        </button>
                      )}
                      <button
                        onClick={() => handleOpenReview(sub)}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
                      >
                        <span>{sub.teacherReviewed ? 'Inspect / Edit' : 'Review AI Feedback'}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* MODAL: TEACHER REVIEW & BAND OVERRIDE */}
      {selectedSubForReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 border border-slate-200 space-y-4 my-8">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Teacher Review & AI Override
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedSubForReview.testTitle}</h3>
                <p className="text-xs text-slate-500">Student: {selectedSubForReview.studentName} ({selectedSubForReview.candidateNumber})</p>
              </div>
              <button
                onClick={() => setSelectedSubForReview(null)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            {/* Candidate Submission Text */}
            {selectedSubForReview.writtenText && (
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-600">Candidate Written Essay</label>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-line font-serif">
                  {selectedSubForReview.writtenText}
                </div>
              </div>
            )}

            {/* AI Evaluation Criteria Breakdown */}
            {selectedSubForReview.aiReport && (
              <div className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>AI Provisional Evaluation ({selectedSubForReview.aiReport.modelUsed})</span>
                  </span>
                  <span className="font-extrabold text-amber-700 text-sm">
                    Band {selectedSubForReview.aiReport.overallBand}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedSubForReview.aiReport.criteriaScores.map((c, i) => (
                    <div key={i} className="bg-white p-2 rounded-lg border border-amber-200/50">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>{c.name}</span>
                        <span className="text-amber-600">{c.score}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">{c.description}</p>
                    </div>
                  ))}
                </div>

                {selectedSubForReview.aiReport.grammarFixes && selectedSubForReview.aiReport.grammarFixes.length > 0 && (
                  <div className="text-[11px] text-slate-700 bg-white p-2.5 rounded-lg border border-amber-200/50 space-y-1">
                    <span className="font-bold text-slate-900">Grammar Recommendation:</span>
                    <div className="text-slate-600">
                      Suggestion: <span className="font-medium text-emerald-700">{selectedSubForReview.aiReport.grammarFixes[0].suggestion}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Teacher Override Controls */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Teacher Certified Band (Score Override)
                  </label>
                  <select
                    value={adjustedBand}
                    onChange={(e) => setAdjustedBand(parseFloat(e.target.value))}
                    className="w-full text-xs font-bold px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="5.5">Band 5.5 (Modest User)</option>
                    <option value="6.0">Band 6.0 (Competent User)</option>
                    <option value="6.5">Band 6.5 (Competent Plus)</option>
                    <option value="7.0">Band 7.0 (Good User)</option>
                    <option value="7.5">Band 7.5 (Good User Plus)</option>
                    <option value="8.0">Band 8.0 (Very Good User)</option>
                    <option value="8.5">Band 8.5 (Expert User)</option>
                    <option value="9.0">Band 9.0 (Master User)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Examiner Verification
                  </label>
                  <div className="text-xs text-slate-600 bg-slate-100 p-2 rounded-lg font-medium">
                    Verified by {currentTeacher.name}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Personalized Feedback & Study Guidance for Candidate
                </label>
                <textarea
                  rows={3}
                  value={teacherNotes}
                  onChange={(e) => setTeacherNotes(e.target.value)}
                  placeholder="Provide targeted advice on vocabulary, sentence length or paragraph flow..."
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {reviewError && (
              <div className="text-xs text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                {reviewError}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedSubForReview(null)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isSavingReview}
                onClick={handleSaveTeacherReview}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-slate-950 font-bold text-xs rounded-lg shadow-sm"
              >
                {isSavingReview ? 'Saving...' : 'Approve & Publish to Student Report Card'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ASSIGN PRACTICE TEST */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Assign Practice Test</h3>
            
            <form onSubmit={handleCreateAssignment} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Module</label>
                  <select
                    value={assignModule}
                    onChange={(e) => setAssignModule(e.target.value as ExamModule)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  >
                    <option value="reading">Reading</option>
                    <option value="listening">Listening</option>
                    <option value="writing">Writing</option>
                    <option value="speaking">Speaking</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Due Date</label>
                  <input
                    type="date"
                    required
                    value={assignDueDate}
                    onChange={(e) => setAssignDueDate(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Select Curated Test</label>
                <select
                  required
                  value={assignTestId}
                  onChange={(e) => setAssignTestId(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                >
                  {filteredModalTests.map((t: any) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAssignTargetType('batch')}
                  className={`py-2 rounded-lg font-bold border ${assignTargetType === 'batch' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300'}`}
                >
                  Assign to Batch
                </button>
                <button
                  type="button"
                  onClick={() => setAssignTargetType('student')}
                  className={`py-2 rounded-lg font-bold border ${assignTargetType === 'student' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300'}`}
                >
                  Assign to Student
                </button>
              </div>

              {assignTargetType === 'batch' ? (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Target Batch</label>
                  <select
                    value={assignBatch}
                    onChange={(e) => setAssignBatch(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  >
                    {batchOptions.map((b: string) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Target Student</label>
                  <select
                    value={assignStudentId}
                    onChange={(e) => setAssignStudentId(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white"
                  >
                    {students.map((st: any) => (
                      <option key={st.id} value={st.studentId || st.id}>
                        {st.name} ({st.studentId || st.id}) • {st.course}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {assignStatus && (
                <div className={`p-2.5 rounded-lg text-xs font-medium ${assignStatus.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {assignStatus.text}
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsAssignModalOpen(false);
                    setAssignStatus(null);
                  }}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAssigning || !assignTestId}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-slate-950 font-bold rounded-lg"
                >
                  {isAssigning ? 'Assigning...' : 'Assign to Students'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
