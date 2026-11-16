/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Play, 
  Clock, 
  Award, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Headphones, 
  BookOpen, 
  Edit3, 
  Mic, 
  Monitor, 
  ChevronRight, 
  Calendar,
  AlertCircle,
  Eye,
  Keyboard,
  Target
} from 'lucide-react';
import { User, TestSubmission, DailyAssignment, ExamModule } from '../../types';
import { DataService } from '../../services/dataService';
import { ComputerCoursesView } from './ComputerCoursesView';
import { SpokenEnglishView } from './SpokenEnglishView';
import { apiService } from '../../services/apiService';

interface StudentDashboardProps {
  currentUser: User;
  refreshTrigger?: number;
  onLaunchCdIelts: (module?: ExamModule, testId?: string, assignmentId?: string) => void;
  onLaunchPte: (testId?: string, assignmentId?: string) => void;
  onOpenMistakeAnalysis: (submission: TestSubmission) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  currentUser,
  refreshTrigger = 0,
  onLaunchCdIelts,
  onLaunchPte,
  onOpenMistakeAnalysis
}) => {
  const [activeTab, setActiveTab] = useState<'practice' | 'assignments' | 'history' | 'computer' | 'spoken'>('practice');
  const [asgCategoryFilter, setAsgCategoryFilter] = useState<'all' | 'practice' | 'mock'>('all');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [assignments, setAssignments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStudentData = async () => {
    setIsLoading(true);
    try {
      // Server-side enforcement: /api/assignments and /api/submissions return ONLY this student's records!
      const [asgData, subData] = await Promise.all([
        apiService.getAssignments(),
        apiService.getSubmissions()
      ]);
      setAssignments(Array.isArray(asgData) ? asgData : []);
      setSubmissions(Array.isArray(subData) ? subData : []);
      setIsLoading(false);
    } catch (e) {
      console.warn('Notice fetching student portal data:', e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [activeTab, refreshTrigger]);

  const mySubmissions = submissions;

  // Target vs Current Band calculation
  const targetBand = currentUser.targetBand || 7.5;
  const currentBand = currentUser.currentBand || 6.5;
  const progressPercent = Math.min(100, Math.round((currentBand / targetBand) * 100));

  // Determine student's exact enrolled exam category
  const userCourseType = (currentUser as any).courseType || 
    ((currentUser as any).course && (currentUser as any).course.toLowerCase().includes('general') ? 'ielts_general' : 
     (currentUser as any).course === 'PTE Academic' ? 'pte_academic' : 'ielts_academic');

  const isGeneralTraining = userCourseType === 'ielts_general';
  const isPte = userCourseType === 'pte_academic';
  const isAcademic = !isGeneralTraining && !isPte;

  const completedTestIds = new Set(
    mySubmissions.map(s => s.testId).filter((id: any) => typeof id === 'string' && id !== 'test_generic')
  );

  const isAssignmentCompleted = (a: any): boolean => {
    if (!a) return false;
    if (a.status === 'completed' || a.status === 'reviewed' || a.status === 'submitted') return true;
    if (a.testId && completedTestIds.has(a.testId) && !a.allowDuplicate) return true;
    return false;
  };

  // Find actually assigned active (non-completed) test per module for this candidate
  const getModuleAssignmentState = (modName: string) => {
    const modLower = modName.toLowerCase();
    const matches = assignments.filter(a => (a.module || '').toLowerCase() === modLower);
    const active = matches.find(a => !isAssignmentCompleted(a)) || null;
    const completed = !active ? (matches.find(a => isAssignmentCompleted(a)) || null) : null;
    return { active, completed };
  };

  const readingState = getModuleAssignmentState('reading');
  const listeningState = getModuleAssignmentState('listening');
  const writingState = getModuleAssignmentState('writing');
  const speakingState = getModuleAssignmentState('speaking');

  const mockMatches = assignments.filter(a => a.testType === 'mock' || (a.module || '').toLowerCase() === 'full');
  const activeMock = mockMatches.find(a => !isAssignmentCompleted(a)) || null;
  const completedMock = !activeMock ? (mockMatches.find(a => isAssignmentCompleted(a)) || null) : null;

  // PTE active assignment helpers
  const activePteAny = assignments.find(a => !isAssignmentCompleted(a)) || null;
  const pteListeningMatches = assignments.filter(a => (a.module || '').toLowerCase() === 'listening');
  const activePteListeningAcademic = pteListeningMatches.find(a =>
    !isAssignmentCompleted(a) &&
    !((a.courseType || '') + ' ' + (a.testId || '')).toLowerCase().includes('ukvi') &&
    !((a.courseType || '') + ' ' + (a.testId || '')).toLowerCase().includes('core')
  ) || null;
  const activePteListeningUkvi = pteListeningMatches.find(a =>
    !isAssignmentCompleted(a) &&
    ((a.courseType || '') + ' ' + (a.testId || '')).toLowerCase().includes('ukvi')
  ) || null;
  const activePteListeningCore = pteListeningMatches.find(a =>
    !isAssignmentCompleted(a) &&
    ((a.courseType || '') + ' ' + (a.testId || '')).toLowerCase().includes('core')
  ) || null;
  const activePteSpeaking = assignments.find(a =>
    !isAssignmentCompleted(a) &&
    (a.module || '').toLowerCase() !== 'listening'
  ) || null;

  return (
    <div className="min-h-screen bg-slate-100/70 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Student Profile & Goal Tracker Banner */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatarUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80'}
              alt={currentUser.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Candidate Portal • Batch: {(currentUser as any).batch || currentUser.batchName || (isGeneralTraining ? 'CD-IELTS_General_Training_default' : 'CD-IELTS_Academic_default')}</span>
              </div>
              <h1 className="text-2xl font-bold text-white mt-0.5">{currentUser.name}</h1>
              <div className="text-xs text-slate-400 flex flex-wrap items-center gap-2 mt-1">
                <span className="font-mono text-slate-300">ID: {(currentUser as any).studentId || currentUser.candidateNumber || 'CR41'}</span>
                <span>•</span>
                <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${
                  isGeneralTraining 
                    ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30'
                    : isPte
                      ? 'bg-sky-400/10 text-sky-300 border-sky-400/30'
                      : 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                }`}>
                  {isGeneralTraining ? 'CD-IELTS General Training' : isPte ? 'PTE Academic' : 'CD-IELTS Academic'}
                </span>
                <span>•</span>
                <span>Official Exam Date: <strong className="text-white">{currentUser.targetExamDate || 'Nov 20, 2026'}</strong></span>
              </div>
            </div>
          </div>

          {/* Band Score Progress Meter */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 min-w-[280px]">
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-[11px] font-bold uppercase text-slate-400 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-500" />
                <span>Target Band Goal</span>
              </span>
              <span className="text-xs font-bold text-slate-200">
                <span className="text-amber-400 text-base">{currentBand}</span> / {targetBand} Band
              </span>
            </div>

            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-[10px] text-slate-400 mt-2">
              <span>Listening: 7.5</span>
              <span>Reading: 7.0</span>
              <span>Writing: 6.0</span>
              <span>Speaking: 6.5</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl border border-slate-200 p-1.5 shadow-sm flex flex-wrap gap-1">
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'practice' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Official Exam Simulators</span>
          </button>

          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'assignments' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Daily Assigned Tests ({assignments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'history' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Test History & Mistake Analysis ({mySubmissions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('spoken')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'spoken' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Spoken English Drills</span>
          </button>

          <button
            onClick={() => setActiveTab('computer')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'computer' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Keyboard className="w-3.5 h-3.5" />
            <span>Computer Courses & Typing Test</span>
          </button>
        </div>

        {/* TAB 1: OFFICIAL EXAM SIMULATORS */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            
            {/* CD-IELTS Module Suite (Academic or General Training) */}
            {!isPte && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                      isGeneralTraining 
                        ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                        : 'text-amber-700 bg-amber-50 border-amber-200'
                    }`}>
                      Official Computer-Delivered IELTS Lab • {isGeneralTraining ? 'General Training' : 'Academic'}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-1">
                      {isGeneralTraining ? 'CD-IELTS General Training Exam Suite' : 'CD-IELTS Academic Exam Suite'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {isGeneralTraining 
                        ? 'Practice under authentic British Council / IDP screen conditions for General Training candidates.' 
                        : 'Practice under authentic British Council / IDP screen conditions for Academic candidates.'}
                    </p>
                  </div>

                  {activeMock ? (
                    <button
                      onClick={() => {
                        const mod = (activeMock.module ? activeMock.module.toLowerCase() : 'reading') as ExamModule;
                        onLaunchCdIelts(mod, activeMock.testId, activeMock.id);
                      }}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Assigned Mock</span>
                    </button>
                  ) : completedMock ? (
                    <button
                      disabled
                      title="Assigned mock test already completed."
                      className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 cursor-not-allowed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mock Completed</span>
                    </button>
                  ) : (
                    <button
                      disabled
                      title="No official mock test currently assigned. Please contact your instructor."
                      className="bg-slate-100 text-slate-400 border border-slate-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 cursor-not-allowed"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-slate-300" />
                      <span>No Mock Assigned</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Reading Card */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-amber-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                        <BookOpen className="w-5 h-5 text-amber-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {isGeneralTraining ? 'General Training Reading' : 'Academic Reading'}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {isGeneralTraining 
                          ? '3 Sections • 40 Questions • Social Survival, Workplace Context & General Articles' 
                          : '3 Passages • 40 Questions • Academic Research, Empirical Studies & Epistemology'}
                      </p>
                      {readingState.active ? (
                        <div className="mt-2.5 text-[11px] text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded border border-amber-200">
                          <span className="font-bold">Assigned:</span> <span className="line-clamp-1">{readingState.active.testTitle || readingState.active.testId}</span>
                        </div>
                      ) : readingState.completed ? (
                        <div className="mt-2.5 text-[11px] text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-200">
                          <span className="font-bold">Completed:</span> <span className="line-clamp-1">{readingState.completed.testTitle || readingState.completed.testId}</span>
                        </div>
                      ) : (
                        <div className="mt-2.5 text-[11px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                          No reading test assigned
                        </div>
                      )}
                    </div>
                    {readingState.active ? (
                      <button
                        onClick={() => onLaunchCdIelts('reading', readingState.active.testId, readingState.active.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test ({readingState.active.testType === 'mock' ? 'Mock' : '60m'})</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : readingState.completed ? (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                  {/* Listening Card (Shared) */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-sky-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
                        <Headphones className="w-5 h-5 text-sky-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm">IELTS Listening</h3>
                      <p className="text-xs text-slate-500 mt-1">4 Sections • 40 Questions • Simulated audio player with note completion (Shared standard)</p>
                      {listeningState.active ? (
                        <div className="mt-2.5 text-[11px] text-sky-700 bg-sky-50/80 px-2.5 py-1 rounded border border-sky-200">
                          <span className="font-bold">Assigned:</span> <span className="line-clamp-1">{listeningState.active.testTitle || listeningState.active.testId}</span>
                        </div>
                      ) : listeningState.completed ? (
                        <div className="mt-2.5 text-[11px] text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-200">
                          <span className="font-bold">Completed:</span> <span className="line-clamp-1">{listeningState.completed.testTitle || listeningState.completed.testId}</span>
                        </div>
                      ) : (
                        <div className="mt-2.5 text-[11px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                          No listening test assigned
                        </div>
                      )}
                    </div>
                    {listeningState.active ? (
                      <button
                        onClick={() => onLaunchCdIelts('listening', listeningState.active.testId, listeningState.active.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test ({listeningState.active.testType === 'mock' ? 'Mock' : '30m'})</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : listeningState.completed ? (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                  {/* Writing Card (Academic Report vs GT Letter) */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-rose-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
                        <Edit3 className="w-5 h-5 text-rose-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {isGeneralTraining ? 'GT Writing (Letter & Essay)' : 'Academic Writing (Task 1 & 2)'}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {isGeneralTraining 
                          ? 'Task 1 Formal/Semi-formal Letter & Task 2 250-word Discursive Essay' 
                          : 'Task 1 Data/Chart/Process Report & Task 2 250-word Academic Discursive Essay'}
                      </p>
                      {writingState.active ? (
                        <div className="mt-2.5 text-[11px] text-rose-700 bg-rose-50/80 px-2.5 py-1 rounded border border-rose-200">
                          <span className="font-bold">Assigned:</span> <span className="line-clamp-1">{writingState.active.testTitle || writingState.active.testId}</span>
                        </div>
                      ) : writingState.completed ? (
                        <div className="mt-2.5 text-[11px] text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-200">
                          <span className="font-bold">Completed:</span> <span className="line-clamp-1">{writingState.completed.testTitle || writingState.completed.testId}</span>
                        </div>
                      ) : (
                        <div className="mt-2.5 text-[11px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                          No writing test assigned
                        </div>
                      )}
                    </div>
                    {writingState.active ? (
                      <button
                        onClick={() => onLaunchCdIelts('writing', writingState.active.testId, writingState.active.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test ({writingState.active.testType === 'mock' ? 'Mock' : '60m'})</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : writingState.completed ? (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                  {/* Speaking Card (Shared) */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-emerald-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                        <Mic className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm">IELTS Speaking Part 1, 2, 3</h3>
                      <p className="text-xs text-slate-500 mt-1">1-min cue card preparation timer • Mic waveform • Speech transcription (Shared standard)</p>
                      {speakingState.active ? (
                        <div className="mt-2.5 text-[11px] text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-200">
                          <span className="font-bold">Assigned:</span> <span className="line-clamp-1">{speakingState.active.testTitle || speakingState.active.testId}</span>
                        </div>
                      ) : speakingState.completed ? (
                        <div className="mt-2.5 text-[11px] text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-200">
                          <span className="font-bold">Completed:</span> <span className="line-clamp-1">{speakingState.completed.testTitle || speakingState.completed.testId}</span>
                        </div>
                      ) : (
                        <div className="mt-2.5 text-[11px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                          No speaking test assigned
                        </div>
                      )}
                    </div>
                    {speakingState.active ? (
                      <button
                        onClick={() => onLaunchCdIelts('speaking', speakingState.active.testId, speakingState.active.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test ({speakingState.active.testType === 'mock' ? 'Mock' : '15m'})</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : speakingState.completed ? (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* PTE Suite (Shown for PTE students) */}
            {isPte && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#002d62] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      Official Pearson PTE Simulation Engine • Academic, UKVI & Core
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-1">
                      Pearson PTE Examination & Diagnostic Suite
                    </h2>
                    <p className="text-xs text-slate-500">
                      Practice under authentic Pearson timed conditions. Listening tests require audio playback confirmation only (no microphone needed).
                    </p>
                  </div>

                  {activePteAny ? (
                    <button
                      onClick={() => onLaunchPte(activePteAny.testId, activePteAny.id)}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Launch Assigned PTE</span>
                    </button>
                  ) : assignments.length > 0 ? (
                    <button
                      disabled
                      className="bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 cursor-not-allowed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Assigned PTE Completed</span>
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-slate-100 text-slate-400 border border-slate-200 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 cursor-not-allowed"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-slate-300" />
                      <span>No PTE Test Assigned</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Category 1: PTE Academic Listening */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-sky-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-3">
                        <Headphones className="w-5 h-5 text-sky-600" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        No Mic Required
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mt-1">PTE Academic Listening</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Summarize Spoken Text (50-70 words), Highlight Correct Summary & Write from Dictation.
                      </p>
                    </div>
                    {activePteListeningAcademic ? (
                      <button
                        onClick={() => onLaunchPte(activePteListeningAcademic.testId, activePteListeningAcademic.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test ({activePteListeningAcademic.testType === 'mock' ? 'Mock' : '30m'})</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                  {/* Category 2: PTE Academic UKVI Listening */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-indigo-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center mb-3">
                        <Headphones className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        No Mic Required
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mt-1">PTE Academic UKVI Listening</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        UK Visa compliance briefings, university induction transcripts & passport dictations.
                      </p>
                    </div>
                    {activePteListeningUkvi ? (
                      <button
                        onClick={() => onLaunchPte(activePteListeningUkvi.testId, activePteListeningUkvi.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test (30m)</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                  {/* Category 3: PTE Core Listening */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-teal-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3">
                        <Headphones className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                        No Mic Required
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mt-1">PTE Core Listening</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Canadian immigration & vocational communication: workplace voice messages, safety notices & notes.
                      </p>
                    </div>
                    {activePteListeningCore ? (
                      <button
                        onClick={() => onLaunchPte(activePteListeningCore.testId, activePteListeningCore.id)}
                        className="mt-4 w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Test (30m)</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                  {/* Category 4: PTE Speaking Lab (Requires Mic) */}
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-amber-400 transition bg-slate-50/50 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                        <Mic className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Microphone Required
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm mt-1">PTE Speaking Lab</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Read Aloud (35s prep), Describe Image with chart graphs & live acoustic transcription.
                      </p>
                    </div>
                    {activePteSpeaking ? (
                      <button
                        onClick={() => onLaunchPte(activePteSpeaking.testId, activePteSpeaking.id)}
                        className="mt-4 w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition flex items-center justify-center gap-1.5"
                      >
                        <span>Start Speaking ({activePteSpeaking.testType === 'mock' ? 'Mock' : '15m'})</span>
                      </button>
                    ) : speakingState.completed ? (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed font-bold rounded-lg text-xs flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="mt-4 w-full py-2 bg-slate-200 text-slate-400 cursor-not-allowed font-bold rounded-lg text-xs transition"
                      >
                        No Test Assigned
                      </button>
                    )}
                  </div>

                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: DAILY ASSIGNED TESTS */}
        {activeTab === 'assignments' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">Today's Assigned Practice & Mock Modules</h2>
                <p className="text-xs text-slate-500">Scheduled by your master trainers for your enrolled course and batch.</p>
              </div>

              {/* Practice vs Mock Sub-Filters */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setAsgCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    asgCategoryFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All ({assignments.length})
                </button>
                <button
                  onClick={() => setAsgCategoryFilter('practice')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    asgCategoryFilter === 'practice'
                      ? 'bg-amber-500 text-slate-950 shadow-xs font-black'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Practice ({assignments.filter(a => a.testType === 'practice').length})
                </button>
                <button
                  onClick={() => setAsgCategoryFilter('mock')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    asgCategoryFilter === 'mock'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Official Mocks ({assignments.filter(a => a.testType === 'mock').length})
                </button>
              </div>
            </div>

            {/* Assignments List */}
            {assignments.filter(a => asgCategoryFilter === 'all' || a.testType === asgCategoryFilter).length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                <AlertCircle className="w-9 h-9 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">
                  No {asgCategoryFilter === 'all' ? '' : asgCategoryFilter === 'mock' ? 'official mock' : 'practice'} tests currently assigned.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Tests assigned by your trainers will appear here automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {assignments
                  .filter(a => asgCategoryFilter === 'all' || a.testType === asgCategoryFilter)
                  .map(assign => {
                    const completed = isAssignmentCompleted(assign);
                    const displayStatus = completed ? (assign.status === 'reviewed' ? 'reviewed' : 'completed') : (assign.status || 'Assigned');
                    return (
                    <div key={assign.id} className="p-4 border border-slate-200 rounded-xl hover:border-amber-400 transition bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                            assign.testType === 'mock'
                              ? 'bg-purple-100 text-purple-800 border-purple-200'
                              : 'bg-amber-100/70 text-amber-700 border-amber-200'
                          }`}>
                            {assign.testType === 'mock' ? 'Official Mock' : 'Practice Test'}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200/80 px-2 py-0.5 rounded">
                            {(assign.courseType || assign.courseProgram || '').replace(/_/g, ' ')} • {assign.module}
                          </span>
                          <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                            ID: {assign.testId}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Assigned by {assign.assignedBy || assign.teacherName || 'Faculty'}
                          </span>
                        </div>

                        <h3 className="font-bold text-slate-900 text-sm mt-1">
                          {assign.testTitle || assign.title || 'Assigned Examination Module'}
                        </h3>
                        <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-3">
                          <span>
                            Duration: {assign.durationMinutes || ((assign.module || '').toLowerCase() === 'listening' ? 30 : (assign.module || '').toLowerCase() === 'speaking' ? 15 : 60)} minutes
                          </span>
                          <span>•</span>
                          <span>Due Date: <strong className="text-slate-700">{assign.dueDate || assign.assignedDate || 'Active'}</strong></span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase ${
                          displayStatus === 'reviewed' ? 'bg-emerald-100 text-emerald-800' :
                          displayStatus === 'submitted' || displayStatus === 'completed' ? 'bg-sky-100 text-sky-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {displayStatus}
                        </span>

                        {completed ? (
                          <button
                            disabled
                            className="bg-slate-200 text-slate-500 font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1 cursor-not-allowed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Completed</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              if ((assign.courseType || assign.courseProgram || '').toLowerCase().includes('pte')) {
                                onLaunchPte(assign.testId, assign.id);
                              } else {
                                const mod = assign.module ? (assign.module.toLowerCase() as ExamModule) : 'reading';
                                onLaunchCdIelts(mod, assign.testId, assign.id);
                              }
                            }}
                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition flex items-center gap-1 cursor-pointer"
                          >
                            <span>Start Test</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                    );
                  })}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: TEST HISTORY & MISTAKE ANALYSIS */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">Completed Test History & Diagnostics</h2>
                <p className="text-xs text-slate-500">Click any attempt to inspect question-by-question mistakes, correct answers, and teacher remarks.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Test Title</th>
                    <th className="py-3 px-4">Module</th>
                    <th className="py-3 px-4">Band Score</th>
                    <th className="py-3 px-4">Submitted At</th>
                    <th className="py-3 px-4">Teacher Review</th>
                    <th className="py-3 px-4 text-right">Mistake Analysis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mySubmissions.map(sub => (
                    <tr key={sub.id} className="hover:bg-slate-50 transition">
                      <td className="py-3.5 px-4 font-bold text-slate-900">{sub.testTitle}</td>
                      <td className="py-3.5 px-4 uppercase text-[10px] font-bold text-slate-600">{sub.module}</td>
                      <td className="py-3.5 px-4 font-extrabold text-amber-600">
                        {typeof sub.teacherAdjustedBand === 'number' ? `Band ${sub.teacherAdjustedBand}` :
                         typeof sub.rawBandScore === 'number' ? `Band ${sub.rawBandScore}` :
                         typeof sub.aiReport?.overallBand === 'number' ? `Band ${sub.aiReport.overallBand}` : 'Pending'}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-mono text-[11px]">{sub.submittedAt}</td>
                      <td className="py-3.5 px-4">
                        {sub.teacherReviewed ? (
                          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Verified by {sub.teacherName?.split(' ')[1] || 'Teacher'}</span>
                          </span>
                        ) : (
                          <span className="text-[11px] text-amber-700 font-medium">
                            Provisional AI Score
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => onOpenMistakeAnalysis(sub)}
                          className="bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Analysis</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {mySubmissions.length === 0 && (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-slate-400 text-xs">
                        No tests completed yet. Start an exam from the Official Exam Simulators tab!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: SPOKEN ENGLISH */}
        {activeTab === 'spoken' && (
          <SpokenEnglishView />
        )}

        {/* TAB 5: COMPUTER COURSES & TYPING SPEED */}
        {activeTab === 'computer' && (
          <ComputerCoursesView />
        )}

      </div>
    </div>
  );
};
