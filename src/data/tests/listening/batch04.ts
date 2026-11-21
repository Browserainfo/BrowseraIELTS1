/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_04: TestItem[] = [
  // =========================================================================
  // PRACTICE 16: Language Exchange Program & Peer Tutoring Matching
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p16',
    testNumber: 16,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 16: Language Exchange Program & Peer Tutoring Matching',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Language Exchange Program & Peer Tutoring Matching.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Joining the Tandem Language Exchange',
        audioScenario:
          'An undergraduate phones the Global Languages Center coordinator to pair up with a native Mandarin speaker for mutual weekly conversation practice.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Global Languages Desk]
Coordinator: Good afternoon, Tandem Language Exchange Desk, Elena speaking. How may I assist?
Student: Hi Elena, I am studying international law and want to sign up for the student-to-student conversation partner program this semester.
Coordinator: [[Q1]] Lovely! Let me open a partner profile—what is your surname? It is McIntyre, spelled M-C-I-N-T-Y-R-E.
Coordinator: [[Q2]] Got it, Mr. McIntyre. Which target language are you practicing, and what is your current proficiency tier? I am learning Mandarin Chinese and reached lower-intermediate level last summer.
Student: [[Q3]] And I speak fluent English plus native Welsh, if any incoming exchange student wants extra practice. Brilliant—matching pairs pledge one uninterrupted hour weekly, splitting thirty minutes strictly per language without lapsing into hybrid mixtures.
Coordinator: [[Q4]] Which day and venue suits your weekly meetings? Thursday evenings after five inside the Humanities Atrium Tea Bar work cleanly between seminars.
Student: [[Q5]] Do you charge an administration fee for matching partners and issuing prompt flashcards? Membership is free for degree students, though optional workbook pocket decks cost five pounds at reception.
Student: [[Q6]] What happens if my paired exchange partner moves home early in December? Simply log a quick rematch request on our LanguageHub portal and we prioritize reassigning you within forty-eight hours.
Coordinator: [[Q7]] We also host informal Friday Board-Game Nights in Room 312 where mixed pairs play cooperative word games over free roasted tea.
Student: [[Q8]] Sounds fun! Can I count completed tandem conversation hours toward the university Global Citizen Certificate? Yes—completing sixteen logged partner hours alongside a short two-page reflection essay qualifies directly for silver badge credit.
Coordinator: [[Q9]] Notice one matching safeguard: never schedule first meetups in private off-campus flats; always hold opening two weeks inside sunlit campus lounges or cafés.
Student: [[Q10]] Smart rule. When do initial partner match emails land in student inboxes? Expect your automated introduction card on Monday morning carrying confirmation code LX-512.`,
        questions: [
          {
            id: 'cd_listening_p16_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'MCINTYRE',
            explanation: 'Spelled M-C-I-N-T-Y-R-E.'
          },
          {
            id: 'cd_listening_p16_lq2',
            number: 2,
            type: 'short_answer',
            questionText: 'Student’s current Mandarin proficiency level:',
            correctAnswer: 'LOWER-INTERMEDIATE',
            explanation: 'Applicant reached lower-intermediate level.'
          },
          {
            id: 'cd_listening_p16_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Time split pledged per language during weekly one-hour sessions: ______ minutes',
            correctAnswer: 'THIRTY',
            explanation: 'Pairs split thirty minutes strictly per language.'
          },
          {
            id: 'cd_listening_p16_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Chosen campus meeting location on Thursday evenings: Humanities ______',
            correctAnswer: 'ATRIUM',
            explanation: 'Meetings sit in the Humanities Atrium Tea Bar.'
          },
          {
            id: 'cd_listening_p16_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Price for optional printed conversation prompt decks: £ ______',
            correctAnswer: 'FIVE',
            explanation: 'Pocket decks cost five pounds at reception.'
          },
          {
            id: 'cd_listening_p16_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'How quickly are interrupted pairs rematched online?',
            correctAnswer: 'FORTY-EIGHT HOURS',
            explanation: 'Rematch requests are reassigned within forty-eight hours.'
          },
          {
            id: 'cd_listening_p16_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Room hosting Friday cooperative board-game evenings: Room ______',
            correctAnswer: '312',
            explanation: 'Hosted in Room 312.'
          },
          {
            id: 'cd_listening_p16_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What earns credit toward the Global Citizen silver badge?',
            options: [
              'A. Hosting three cultural food stalls',
              'B. Passing an oral vocabulary exam at term end',
              'C. Logging sixteen partner hours plus a two-page reflection essay',
              'D. Tutoring two different language pairs simultaneously'
            ],
            correctAnswer: 'C',
            explanation: 'Sixteen logged hours plus a two-page reflection qualify.'
          },
          {
            id: 'cd_listening_p16_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What safety rule governs the opening two weeks of partner meetings?',
            options: [
              'A. Campus language tutors must sit beside every table',
              'B. Avoid exchanging personal mobile phone numbers',
              'C. Meet strictly in public sunlit campus lounges or cafés',
              'D. Register seating tables with security porters'
            ],
            correctAnswer: 'C',
            explanation: 'Hold initial meetings inside sunlit campus lounges or cafés.'
          },
          {
            id: 'cd_listening_p16_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmation code appearing in Monday’s match email: ______',
            correctAnswer: 'LX-512',
            explanation: 'Automated introduction carries code LX-512.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Inside the Multimedia Language Resource Hub',
        audioScenario:
          'A languages center manager gives a practical tour of pronunciation booths, subtitled cinema pods, and bilingual news archives.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Languages Hub Orientation]
Manager: Welcome everyone to the Global Languages Commons on Floor Two! Here are the tools waiting for your independent study hours.
Manager: [[Q11]] Walking past reception, notice six soundproof glass booths equipped with dual condenser microphones for recording accent self-checks cleanly.
Manager: [[Q12]] Inside our International Film Vault, students stream over four thousand foreign documentaries loaded with toggles for dual-language synchronized transcripts.
Manager: [[Q13]] For spoken fluency drills, ignore robotic flashcards and test our role-play scenario cards—simulating real pharmacy, train-ticket, or landlord phone negotiations.
Manager: [[Q14]] In the Quiet Newspaper Corner, racks carry fresh morning print editions shipped twice weekly from Madrid, Tokyo, and Cairo alongside graded reader magazines.
Manager: [[Q15]] Need grammar rescue on tricky subjunctive verbs? Check the teal binder shelves beside Window Three for quick-reference laminated verb cheat sheets.
Manager: [[Q16]] On Wednesday lunchtimes at twelve thirty, volunteer graduate hosts lead lively "Coffee & Idioms" circles where strictly zero textbooks may open on tables!
Manager: [[Q17]] Our listening bar hosts wireless bone-headsets pre-tuned to live European and Asian public radio broadcasts for effortless background ear immersion.
Manager: [[Q18]] Be mindful when printing parallel bilingual essays at Booth Seven: double-sided ink quotas deduct double credits for glossy colour cover pages.
Manager: [[Q19]] If you discover broken audio headphones at any viewing pod, clip the red repair ribbon stored beneath each desk lamp so technicians swap pairs overnight.
Manager: [[Q20]] Remember the hub shifts to silent exam listening hours throughout the final three weeks of May, so reserve spoken practice rooms well beforehand.`,
        questions: [
          {
            id: 'cd_listening_p16_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Microphone type inside the six glass pronunciation booths: ______ microphones',
            correctAnswer: 'CONDENSER',
            explanation: 'Booths carry dual condenser microphones.'
          },
          {
            id: 'cd_listening_p16_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Useful learning toggle included across four thousand foreign documentaries:',
            correctAnswer: 'SYNCHRONIZED TRANSCRIPTS',
            explanation: 'Streams toggle dual-language synchronized transcripts.'
          },
          {
            id: 'cd_listening_p16_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Everyday role-play situations beside trains and landlords tested in practice cards: ______ visits',
            correctAnswer: 'PHARMACY',
            explanation: 'Cards simulate pharmacy, train-ticket, or landlord calls.'
          },
          {
            id: 'cd_listening_p16_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'How often do foreign print newspapers arrive in the Quiet Corner?',
            options: [
              'A. Twice weekly',
              'B. Daily at dawn',
              'C. Weekly on Fridays',
              'D. Once per academic month'
            ],
            correctAnswer: 'A',
            explanation: 'Fresh editions ship twice weekly.'
          },
          {
            id: 'cd_listening_p16_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Binder colour holding laminated grammar quick-reference sheets by Window Three: ______',
            correctAnswer: 'TEAL',
            explanation: 'Look inside the teal binder shelves.'
          },
          {
            id: 'cd_listening_p16_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Wednesday’s "Coffee & Idioms" lunch circles strictly prohibit bringing open ______ to the table.',
            correctAnswer: 'TEXTBOOKS',
            explanation: 'Strictly zero textbooks may open during Coffee & Idioms.'
          },
          {
            id: 'cd_listening_p16_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Broadcast streams tuned continuously at the listening bar: public ______',
            correctAnswer: 'RADIO',
            explanation: 'Tuned to live European and Asian public radio broadcasts.'
          },
          {
            id: 'cd_listening_p16_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What printing rule applies at Booth Seven for bilingual essay cover sheets?',
            options: [
              'A. Maximum print batches are capped at ten sheets',
              'B. Single-sided monochrome printing is prohibited on cardstock',
              'C. Language tutors must authorize colour print jobs',
              'D. Double ink credits are deducted for glossy colour cover pages'
            ],
            correctAnswer: 'D',
            explanation: 'Double-sided ink quotas deduct double credits for glossy colour cover pages.'
          },
          {
            id: 'cd_listening_p16_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Ribbon colour used to flag broken desk headphones overnight: ______',
            correctAnswer: 'RED',
            explanation: 'Clip the red repair ribbon beneath each desk lamp.'
          },
          {
            id: 'cd_listening_p16_lq20',
            number: 20,
            type: 'short_answer',
            questionText: 'During which final three-week window must oral practice pods be booked far ahead?',
            correctAnswer: 'MAY',
            explanation: 'Silent exam listening hours run the final three weeks of May.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Researching Peer Pronunciation Correction',
        audioScenario:
          'Applied linguistics students Noor and Ethan consult Dr. Kovacs on peer-tutoring error-correction experiments.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Applied Linguistics Supervision]
Dr. Kovacs: Come in Noor and Ethan. What surprised you most in your classroom trial comparing peer feedback versus instructor recasts?
Noor: [[Q21]] Contrary to anxiety predictions, adult intermediate learners self-corrected tonal pronunciation mistakes more frequently when paired with fellow advanced students than with native professors.
Ethan: [[Q22]] Interviews explained why—learners felt less embarrassed slowing peers down to ask for three slow syllable repeats without worrying about exam grades.
Dr. Kovacs: Powerful affective insight! Did peer tutors miss subtle fossilized consonant swaps that trained teachers caught instantly?
Noor: [[Q23]] Yes, peers reliably spotted vowel-length errors yet overlooked subtle aspiration distinctions unless given simplified acoustic waveform bars on tablets.
Dr. Kovacs: [[Q24]] How cleanly did audio-recorded conversation logs transcribe when two partners spoke loudly in an open café? Terrible echo clutter! We moved weeks four through eight into small glass study booths fitted with tabletop boundary microphones.
Ethan: [[Q25]] When coding conversation turns for hesitations, should brief thinking fillers count as communicative pauses or fluency breakdowns?
Dr. Kovacs: [[Q26]] Separate natural lexical planning fillers cleanly from mid-phrase word-search stalls in your coding rubric before tallying speech rates.
Noor: [[Q27]] Another quirk appeared in vocabulary retention: pairs discussing shared hobbies remembered double the colloquial phrases retained by pairs drilling scripted textbook dialogues.
Dr. Kovacs: [[Q28]] Control carefully for partner personality compatibility—outgoing extroverts naturally steer topic swaps faster regardless of teaching method.
Ethan: [[Q29]] For our linguistics seminar handout next Tuesday, we will plot syllable-rate progress curves across all twenty-four matched dyads.
Dr. Kovacs: [[Q30]] Keep individual speaker anonymity strict on handouts, and verify ethical archive deletion dates inside your bibliography appendix.`,
        questions: [
          {
            id: 'cd_listening_p16_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Pronunciation errors learners corrected more freely with peer tutors: ______ mistakes',
            correctAnswer: 'TONAL',
            explanation: 'Learners self-corrected tonal mistakes more often with peers.'
          },
          {
            id: 'cd_listening_p16_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'Why were learners less hesitant interrupting peer partners for repeats?',
            options: [
              'A. Peer sessions ran twice as long',
              'B. Learners feared zero grading judgment when asking for slow repeats',
              'C. Peers spoke at slower baseline speeds',
              'D. Professors prohibited interruption during grammar segments'
            ],
            correctAnswer: 'B',
            explanation: 'Learners were less embarrassed asking peers without grade pressure.'
          },
          {
            id: 'cd_listening_p16_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'Which visual aid on tablets helped peer tutors spot tricky aspiration contrasts?',
            correctAnswer: 'WAVEFORM BARS',
            explanation: 'Simplified acoustic waveform bars helped peers detect aspiration.'
          },
          {
            id: 'cd_listening_p16_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Microphone hardware placed inside glass booths to tame café echo: ______ microphones',
            correctAnswer: 'BOUNDARY',
            explanation: 'Switched to booths with tabletop boundary microphones.'
          },
          {
            id: 'cd_listening_p16_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Ethan wonders whether natural thinking ______ count as fluency failures.',
            correctAnswer: 'FILLERS',
            explanation: 'Questioned how to categorize brief thinking fillers.'
          },
          {
            id: 'cd_listening_p16_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Pause type contrasted with natural planning pauses in the coding rubric: word-search ______',
            correctAnswer: 'STALLS',
            explanation: 'Separate lexical planning fillers from word-search stalls.'
          },
          {
            id: 'cd_listening_p16_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What produced double the retention of everyday colloquial idioms?',
            options: [
              'A. Chatting freely about genuine shared hobbies',
              'B. Memorizing daily audio flashcards',
              'C. Translating scripted newspaper editorials',
              'D. Repeating formal textbook dialogues aloud'
            ],
            correctAnswer: 'A',
            explanation: 'Pairs discussing shared hobbies recalled twice as many idioms.'
          },
          {
            id: 'cd_listening_p16_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Individual trait Dr. Kovacs advises controlling statistically across pairs: ______ compatibility',
            correctAnswer: 'PERSONALITY',
            explanation: 'Control for partner personality compatibility.'
          },
          {
            id: 'cd_listening_p16_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'How many total partner pairs will appear on Tuesday’s progress graph?',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Plot curves across all twenty-four matched dyads.'
          },
          {
            id: 'cd_listening_p16_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Ethics detail required alongside speaker anonymity inside the appendix: archive ______ dates',
            correctAnswer: 'DELETION',
            explanation: 'Verify ethical archive deletion dates.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Cognitive Neuroscience of Bilingual Immersion',
        audioScenario:
          'A psycholinguistics professor lectures on how alternating two languages reshapes executive attention and phonetic perception.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Bilingual Brain Lecture]
Lecturer: For decades, mid-twentieth-century educators warned immigrant parents that speaking two languages confused children’s vocabulary growth.
Lecturer: [[Q31]] Modern neuroimaging overturned that myth thoroughly, proving bilingual speakers activate both lexicons simultaneously inside cortical networks—even when listening strictly inside one language room.
Lecturer: [[Q32]] Rather than passively shutting one dictionary off, bilingual minds engage prefrontal inhibitory control to suppress rival translations within milliseconds.
Lecturer: [[Q33]] Consider phonetic tuning in infancy: six-month-old babies distinguish subtle consonant sounds from every world language, gradually pruning unused distinctions around ten months unless ambient speech reinforces them.
Lecturer: [[Q34]] Crucially, laboratory playback studies demonstrated that infants exposed solely to foreign-language television monitors failed to retain novel contrasts, whereas live interactive human speakers preserved full sensitivity.
Lecturer: [[Q35]] Social eye-gaze and live turn-taking therefore serve as biological triggers telling the human brain which sound categories deserve permanent neural wiring.
Lecturer: [[Q36]] Among adult learners, balanced code-switching exercises—alternating topics briskly without mixing clauses mid-word—strengthen attentional flexibility across unrelated non-verbal tasks.
Lecturer: [[Q37]] Meanwhile, late adult learners struggle less with vocabulary memorization than with entrenched motor-articulatory habits locking tongue muscles onto native vowel postures.
Lecturer: [[Q38]] Ultrasound tongue-imaging biofeedback trials help learners visually reshape tricky consonant placements far quicker than abstract written dictionary phonetics ever achieved.
Lecturer: [[Q39]] Equally encouraging, lifelong conversational dual-language use builds cognitive reserve, delaying clinical memory symptoms by four to five years in epidemiological neurology cohorts.
Lecturer: [[Q40]] Far from overcrowding mental storage, exercising two living communication codes keeps neural highways nimble across an entire lifespan.`,
        questions: [
          {
            id: 'cd_listening_p16_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Bilingual brain finding overturned old myths: speakers keep both ______ active simultaneously',
            correctAnswer: 'LEXICONS',
            explanation: 'Both lexicons remain active at the same time.'
          },
          {
            id: 'cd_listening_p16_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which prefrontal mental mechanism suppresses the non-target word?',
            correctAnswer: 'INHIBITORY CONTROL',
            explanation: 'Engages prefrontal inhibitory control to suppress rival words.'
          },
          {
            id: 'cd_listening_p16_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Age when infants start pruning unreinforced non-native sound contrasts: ______ months',
            correctAnswer: 'TEN',
            explanation: 'Infants prune unused distinctions around ten months.'
          },
          {
            id: 'cd_listening_p16_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What did laboratory infant studies reveal about recorded foreign-language videos?',
            options: [
              'A. Videos worked equally well as live nannies',
              'B. Recorded audio slowed native-language babbling',
              'C. Subtitles helped nine-month-olds learn nouns faster',
              'D. Passive video screens failed to preserve phonetic discrimination'
            ],
            correctAnswer: 'D',
            explanation: 'Television playback failed; live human interaction preserved sensitivity.'
          },
          {
            id: 'cd_listening_p16_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Social turn-taking and shared ______ act as neural triggers confirming useful sound contrasts.',
            correctAnswer: 'EYE-GAZE',
            explanation: 'Social eye-gaze and live turn-taking trigger neural wiring.'
          },
          {
            id: 'cd_listening_p16_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Cognitive skill strengthened by balanced adult code-switching: attentional ______',
            correctAnswer: 'FLEXIBILITY',
            explanation: 'Strengthens attentional flexibility on non-verbal tasks.'
          },
          {
            id: 'cd_listening_p16_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'What stubborn physical habit limits adult accent mastery more than memory?',
            correctAnswer: 'TONGUE MUSCLES',
            explanation: 'Entrenched motor-articulatory habits lock tongue muscles onto native postures.'
          },
          {
            id: 'cd_listening_p16_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Medical imaging tool adapted to guide adult tongue placement visually: ______',
            correctAnswer: 'ULTRASOUND',
            explanation: 'Ultrasound tongue-imaging biofeedback accelerates retraining.'
          },
          {
            id: 'cd_listening_p16_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What neurological benefit appears in lifelong active bilingual cohorts?',
            options: [
              'A. Faster visual reaction times during video games',
              'B. Higher auditory sharpness past age eighty',
              'C. Clinical dementia memory symptoms delayed by four to five years',
              'D. Lower childhood stuttering rates'
            ],
            correctAnswer: 'C',
            explanation: 'Builds cognitive reserve delaying memory symptoms by four to five years.'
          },
          {
            id: 'cd_listening_p16_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What overarching conclusion closes the lecture?',
            options: [
              'A. Second languages should only be taught after age twelve',
              'B. Dual-language use keeps neural networks nimble lifelong without cluttering memory',
              'C. Grammar drills matter more than social dialogue in adulthood',
              'D. Children retain three vocabularies slower than monolinguals'
            ],
            correctAnswer: 'B',
            explanation: 'Dual communication codes keep neural highways nimble across life.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 17: Student Drama Society Audition & Rehearsal Schedule
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p17',
    testNumber: 17,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 17: Student Drama Society Audition & Rehearsal Schedule',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Drama Society Audition & Rehearsal Schedule.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Drama Audition & Technical Crew Sign-Up',
        audioScenario:
          'A student calls the Student Drama Society producer to book a winter play audition and ask about backstage lighting roles.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Drama Society Audition Line]
Producer: Hello, Garrick Student Theatre Company, Claire speaking. How can I help?
Applicant: Hi Claire, I would love to audition for your winter modern tragedy staging and possibly shadow the backstage lighting crew.
Producer: [[Q1]] Terrific enthusiasm! Let me open a candidate sheet first—what is your surname? It is Whittaker—sorry, Wait, let me spell it clearly: S-T-A-N-H-O-P-E, Stanhope.
Producer: [[Q2]] Thank you, Stanhope—glad I checked! Auditions happen inside the Old Assembly Studio on Wednesday evening starting from six thirty.
Applicant: Do actors memorize a classic Shakespeare speech, or do you supply contemporary scripts?
Producer: [[Q3]] Bring one prepared two-minute modern monologue of your choice, then panelists hand out short cold-read scenes paired on stage.
Applicant: [[Q4]] Great. Also, do backstage apprentices need prior theater engineering credentials to run spotlights? Zero formal experience is required—lighting designer Samira runs a full three-hour safety induction next Sunday morning.
Producer: [[Q5]] Note that society membership carries a modest annual subscription of eighteen pounds covering insurance and script printing across all three term shows.
Applicant: [[Q6]] Understood. Could you tell me when evening rehearsals typically wrap up once casting finishes next week? Core weekday rehearsals run from seven until nine forty-five so students never miss late campus buses.
Applicant: [[Q7]] Are there extra weekend sessions during final production week? Yes, technical cue-to-cue dress rehearsals occupy Saturday and Sunday afternoons exclusively before opening curtain.
Producer: [[Q8]] Also note cast clothing rules for auditions: skip rigid boots or sweeping capes—wear plain flexible dark trainers and comfortable movement trousers so panels assess physical blocking easily.
Applicant: [[Q9]] Should I bring printed availability calendars highlighting science lab clashes? Definitely—mark immovable evening tutorials clearly onto the blue rehearsal grid card at check-in so directors plan split-scene calls accurately.
Producer: [[Q10]] Before signing off, note your audition check-in slot number: arrive fifteen minutes early holding candidate tag DR-304.`,
        questions: [
          {
            id: 'cd_listening_p17_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'STANHOPE',
            explanation: 'Spelled S-T-A-N-H-O-P-E.'
          },
          {
            id: 'cd_listening_p17_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Audition venue on Wednesday evening: Old ______ Studio',
            correctAnswer: 'ASSEMBLY',
            explanation: 'Held inside Old Assembly Studio.'
          },
          {
            id: 'cd_listening_p17_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Maximum length of prepared modern audition monologue: ______ minutes',
            correctAnswer: 'TWO',
            explanation: 'Prepare a two-minute modern monologue.'
          },
          {
            id: 'cd_listening_p17_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Day of Samira’s three-hour lighting safety induction: ______',
            correctAnswer: 'SUNDAY',
            explanation: 'Runs next Sunday morning.'
          },
          {
            id: 'cd_listening_p17_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Annual Drama Society membership fee covering insurance and scripts: £ ______',
            correctAnswer: 'EIGHTEEN',
            explanation: 'Membership fee is eighteen pounds annually.'
          },
          {
            id: 'cd_listening_p17_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'End time for weekday evening rehearsals:',
            correctAnswer: 'NINE FORTY-FIVE',
            explanation: 'Weekdays run from seven until nine forty-five.'
          },
          {
            id: 'cd_listening_p17_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'What intensive weekend rehearsals occur right before opening night?',
            correctAnswer: 'DRESS REHEARSALS',
            explanation: 'Cue-to-cue dress rehearsals occupy final weekends.'
          },
          {
            id: 'cd_listening_p17_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What clothing should candidates wear to auditions?',
            options: [
              'A. Period costumes fitting the winter tragedy',
              'B. Colour-coded team jerseys',
              'C. Smart business suits and dress shoes',
              'D. Flexible dark trainers and comfortable movement trousers'
            ],
            correctAnswer: 'D',
            explanation: 'Wear flexible dark trainers and movement trousers.'
          },
          {
            id: 'cd_listening_p17_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why must candidates mark inflexible evening labs on the blue grid card?',
            options: [
              'A. Directors schedule split-scene calls around clashes cleanly',
              'B. Society treasurers discount late arrival fees',
              'C. Insurance requires verified attendance rosters',
              'D. Stagehands reserve matching costume fittings'
            ],
            correctAnswer: 'A',
            explanation: 'Helps directors schedule split-scene calls accurately.'
          },
          {
            id: 'cd_listening_p17_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Candidate audition tag reference: ______',
            correctAnswer: 'DR-304',
            explanation: 'Candidate tag number is DR-304.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Backstage Safety & Black-Box Studio Orientation',
        audioScenario:
          'A resident theater technician guides incoming stage crew through rigging catwalks, prop storage, and backstage cue rules.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Black-Box Stage Tour]
Technician: Welcome new stage managers, riggers, and wardrobe hands to our Black-Box Theatre Workspace!
Technician: [[Q11]] Overhead, notice steel catwalk bridges fixed six metres above stage timber—nobody climbs ladder hatches without tying tools cleanly onto wrist safety lanyards first.
Technician: [[Q12]] Beneath stage wings, luminous white glow-tape outlines steep trapdoor hatches so quick blackout transitions never trip hurried actors carrying chairs.
Technician: [[Q13]] Behind the velvet cyclorama curtain lies our Props Cage: fragile glass wine bottles used in banquet fights are actually molded cast sugar-resin props safe to smash safely on cue!
Technician: [[Q14]] In the Paint Workshop across the courtyard, flat canvas stage backdrops receive water-based fire-retardant sprays before leaving trestle tables for stage clamps.
Technician: [[Q15]] Note the strict dressing-room rule: aerosol hairspray and smoky incense sticks remain banned indoors because ultra-sensitive optical smoke heads link straight to municipal fire engines.
Technician: [[Q16]] For authentic costume periods, our Wardrobe Attic preserves three hundred vintage wool coats sorted strictly by decade rather than play title so designers pull options rapidly.
Technician: [[Q17]] On show nights, sound cues run inside the enclosed glass control booth upstairs, while the Deputy Stage Manager calls lighting drops via wired headset intercoms from stage-left prompt corner.
Technician: [[Q18]] Watch out during midnight scene clear-outs: wheeled wooden flats tip easily in hallway drafts unless two crew members steer opposite edges together.
Technician: [[Q19]] If any actor sustains a minor scrape or ankle twist mid-performance, cold packs and sterile dressings rest inside the green metal cabinet beside stage door exit.
Technician: [[Q20]] Grab a laminated black-box floorplan from the orange clip-tray before walking up into the lighting booth!`,
        questions: [
          {
            id: 'cd_listening_p17_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Safety gear required on all tools carried onto overhead catwalks: wrist ______',
            correctAnswer: 'LANYARDS',
            explanation: 'Tie tools cleanly onto wrist safety lanyards.'
          },
          {
            id: 'cd_listening_p17_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'What marks steep floor openings cleanly during pitch-black scene changes?',
            correctAnswer: 'GLOW-TAPE',
            explanation: 'Luminous white glow-tape marks trapdoor hatches.'
          },
          {
            id: 'cd_listening_p17_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Breakable safe material replacing real glass in stage fight bottles: ______',
            correctAnswer: 'SUGAR-RESIN',
            explanation: 'Props are molded sugar-resin.'
          },
          {
            id: 'cd_listening_p17_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'Painted canvas flats undergo water-based ______ coating before reaching stage clamps.',
            correctAnswer: 'FIRE-RETARDANT',
            explanation: 'Treated with water-based fire-retardant spray.'
          },
          {
            id: 'cd_listening_p17_lq15',
            number: 15,
            type: 'multiple_choice',
            questionText: 'Why are aerosol hairsprays forbidden inside backstage dressing rooms?',
            options: [
              'A. Mirrors cloud quickly in small chambers',
              'B. Mist triggers sensitive optical alarms linked to city fire engines',
              'C. Chemical fumes ruin vintage velvet coats',
              'D. Spray droplets stain wooden makeup counters'
            ],
            correctAnswer: 'B',
            explanation: 'Ultra-sensitive optical smoke detectors connect to municipal fire engines.'
          },
          {
            id: 'cd_listening_p17_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Classification system organizing 300 coats inside the Wardrobe Attic: by ______',
            correctAnswer: 'DECADE',
            explanation: 'Coats are sorted strictly by decade.'
          },
          {
            id: 'cd_listening_p17_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Position from which the Deputy Stage Manager calls lighting cues: ______ corner',
            correctAnswer: 'PROMPT',
            explanation: 'Calls cues from stage-left prompt corner.'
          },
          {
            id: 'cd_listening_p17_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'How must tall wheeled scenic flats be rolled during midnight strike?',
            options: [
              'A. Folded flat onto carpet trolleys',
              'B. Pushed single-file ahead of sound racks',
              'C. Steered by two crew members gripping opposite sides',
              'D. Anchored using stage sandbags while moving'
            ],
            correctAnswer: 'C',
            explanation: 'Two crew members steer opposite edges against drafts.'
          },
          {
            id: 'cd_listening_p17_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Colour of the metal first-aid cabinet near stage door exit: ______',
            correctAnswer: 'GREEN',
            explanation: 'Cold packs sit inside the green metal cabinet.'
          },
          {
            id: 'cd_listening_p17_lq20',
            number: 20,
            type: 'short_answer',
            questionText: 'Where are laminated black-box floorplans stacked?',
            correctAnswer: 'ORANGE CLIP-TRAY',
            explanation: 'Pick floorplans from the orange clip-tray.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Designing Spatial Soundscapes for Experimental Drama',
        audioScenario:
          'Drama students Tessa and Ryan meet theater acoustics lecturer Prof. Adams to refine multi-speaker cue realism.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Theater Sound Design Tutorial]
Prof. Adams: Come in Tessa and Ryan. How did yesterday’s spatial speaker dress-rehearsal sound inside our black-box hall?
Tessa: [[Q21]] Moving thunder speakers out from front balconies into corners underneath audience risers gave storms eerie physical vibration—listeners actually turned round expecting open doors.
Ryan: [[Q22]] However, our pre-recorded coastal seagull track sounded flat and tinny whenever played simultaneously alongside live actor speech over dry wooden planks.
Prof. Adams: Classic studio versus stage dry-room mismatch! Why did the seaside ambient track jar against live speech?
Tessa: [[Q23]] Outdoor condenser samples contained crisp breeze hiss while actors stood inside an acoustically dead curtained studio, splitting two imaginary worlds cleanly apart!
Prof. Adams: Spot on! How can Ryan blend external room acoustics with live dialogue without muddying consonant clarity?
Ryan: [[Q24]] Dr. Adams suggested applying gentle impulse-response room reverb calibrated precisely to our hall dimensions while trimming mid-range mud around four hundred hertz.
Prof. Adams: [[Q25]] Smart EQ surgical fix! Now let us inspect cue timing: manual button pushes lagged half a second whenever Tessa waited for improvised comedic pauses.
Tessa: [[Q26]] Exactly—switching to dynamic cross-fade macros lets stage operators trigger gradual twilight crickets on visual actor footsteps rather than rigid countdown clocks.
Ryan: [[Q27]] One worry remains around audience hearing clarity: two front-row visitors with hearing aids flagged feedback whistle near our hidden under-stage induction coil loop.
Prof. Adams: [[Q28]] Run an electrical test sweep tomorrow afternoon with our resident campus accessibility technician before opening previews begin Friday.
Tessa: For our graded production portfolio, should we attach full frequency decibel plots alongside annotated cue prompt scripts?
Prof. Adams: [[Q29]] Keep graphic waveform sheets concise at two pages maximum!
Tessa: [[Q30]] Understood—we will center our creative rationale cleanly on why silence heightened Act Three tension.`,
        questions: [
          {
            id: 'cd_listening_p17_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Speaker placement delivering realistic thunder vibrations: beneath audience ______',
            correctAnswer: 'RISERS',
            explanation: 'Speakers moved underneath audience risers.'
          },
          {
            id: 'cd_listening_p17_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which recorded natural sound track clashed with live actors on stage?',
            correctAnswer: 'SEAGULL TRACK',
            explanation: 'Pre-recorded coastal seagull track sounded flat.'
          },
          {
            id: 'cd_listening_p17_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did the recorded ocean clip clash perceptually with live actors?',
            options: [
              'A. Speaker cables carried low-level electrical hum',
              'B. Playback volume exceeded actors’ voices during key lines',
              'C. Outdoor breeze recordings clashed against an acoustically dead curtained room',
              'D. Different sampling rates slowed pitch timing'
            ],
            correctAnswer: 'C',
            explanation: 'Outdoor wind hiss jarred against the dry curtained room.'
          },
          {
            id: 'cd_listening_p17_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Cluttered audio frequency trimmed cleanly to preserve speech clarity: ______ hertz',
            correctAnswer: 'FOUR HUNDRED',
            explanation: 'Trimming mid-range mud around four hundred hertz.'
          },
          {
            id: 'cd_listening_p17_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Timing delay on manual button cues during comedic pauses: lagged ______ a second',
            correctAnswer: 'HALF',
            explanation: 'Manual button pushes lagged half a second.'
          },
          {
            id: 'cd_listening_p17_lq26',
            number: 26,
            type: 'summary_completion',
            questionText: 'Dynamic cross-fade macros let sound operators sync cricket cues cleanly to actor ______.',
            correctAnswer: 'FOOTSTEPS',
            explanation: 'Cues trigger on visual actor footsteps.'
          },
          {
            id: 'cd_listening_p17_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What accessibility snag affected two front-row visitors wearing hearing aids?',
            options: [
              'A. Feedback whistle occurred near the under-stage induction loop',
              'B. Balcony spots blocked subtitle projector sightlines',
              'C. Loud thunder cues overloaded digital implants',
              'D. Wheelchair aisles sat too close to bass speakers'
            ],
            correctAnswer: 'A',
            explanation: 'Visitors heard feedback whistle from the under-stage induction coil loop.'
          },
          {
            id: 'cd_listening_p17_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Day scheduled to run an accessibility coil test sweep before Friday previews: ______',
            correctAnswer: 'TOMORROW',
            explanation: 'Test sweep tomorrow afternoon.'
          },
          {
            id: 'cd_listening_p17_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Maximum page limit for frequency waveform charts inside the portfolio:',
            correctAnswer: 'TWO PAGES',
            explanation: 'Keep waveform sheets concise at two pages maximum.'
          },
          {
            id: 'cd_listening_p17_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'What aspect deserves primary emphasis inside Tessa and Ryan’s written rationale?',
            options: [
              'A. How microphone prices fit student society budgets',
              'B. Comparing analog tape loops to digital mixing desks',
              'C. How wiring looms mounted overhead onto catwalks',
              'D. How deliberate silence sharpened dramatic tension in Act Three'
            ],
            correctAnswer: 'D',
            explanation: 'Emphasize why silence heightened Act Three dramatic tension.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The History of Stage Lighting From Candles to LEDs',
        audioScenario:
          'A theater design professor lectures on how illumination breakthroughs reshaped playwriting mood, makeup, and auditorium safety.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Stage Illumination Evolution Lecture]
Lecturer: Before electricity arrived, stepping into an indoor playhouse meant breathing smoky tallow fumes while straining across dim flickering shadows.
Lecturer: [[Q31]] Sixteenth-century Italian court theatres suspended beeswax chandeliers directly above both audience stalls and actors—meaning aristocratic spectators sat equally illuminated as performers.
Lecturer: [[Q32]] Consequently, playwrights wrote direct conversational soliloquies openly addressing seated friends rather than pretending an invisible fourth wall separated stage from crowd.
Lecturer: [[Q33]] A fiery technological jump arrived in 1816 with piped coal gas lamps, empowering operators backstage to dim whole auditoriums cleanly before curtains rose using brass valve tables.
Lecturer: [[Q34]] Suddenly darkening audience seats focused every gaze intensely onto illuminated painted scenery, birthing nineteenth-century psychological realism on stage.
Lecturer: [[Q35]] Yet open gas jets devoured oxygen rapidly and ignited fluttering muslin costumes—destroying nearly two hundred timber playhouses globally across fifty catastrophic years.
Lecturer: [[Q36]] Meanwhile, focused lime blocks heated inside oxyhydrogen flames—coining the phrase "in the limelight"—cast crisp moonlight beams onto solo stars across smoky wings.
Lecturer: [[Q37]] Safe incandescent carbon-filament bulbs arrived at London’s Savoy Theatre in 1881, eliminating toxic heat fumes while triggering an overnight revolution in costume cosmetics.
Lecturer: [[Q38]] Under unforgiving bright electric bulbs, clumsy thick white chalk facepaint looked ghostly artificial, forcing actors to adopt subtle blended greasepaint hues.
Lecturer: [[Q39]] Today, cool digital LED arrays mix sixteen million amber, teal, and violet colour cues silently from solid-state chips without hauling heavy plastic gelatin gels onto ladders.
Lecturer: [[Q40]] Paradoxically, modern directors still recreate shaky candle-warm palettes digitally when staging classic tragedies—proving ancient firelight aesthetics remain timeless even behind cold circuitry.`,
        questions: [
          {
            id: 'cd_listening_p17_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Shared lighting fixtures illuminating both guests and performers in 1500s Italy: beeswax ______',
            correctAnswer: 'CHANDELIERS',
            explanation: 'Beeswax chandeliers lit both audience and performers.'
          },
          {
            id: 'cd_listening_p17_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which dramatic speech convention thrived when auditoriums remained brightly lit?',
            correctAnswer: 'SOLILOQUIES',
            explanation: 'Playwrights wrote direct conversational soliloquies.'
          },
          {
            id: 'cd_listening_p17_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: '1816 fuel network letting operators dim house lights via backstage brass valves: coal ______',
            correctAnswer: 'GAS',
            explanation: 'Piped coal gas lamps introduced centralized dimming.'
          },
          {
            id: 'cd_listening_p17_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What artistic shift resulted from plunging audiences into darkness before curtains rose?',
            options: [
              'A. Orchestra pits expanded beneath forestages',
              'B. Theatres embraced intimate psychological realism',
              'C. Play scripts shortened drastically to ninety minutes',
              'D. Heavy marble columns replaced wooden stage flats'
            ],
            correctAnswer: 'B',
            explanation: 'Darkening audiences focused attention tightly, birthing psychological realism.'
          },
          {
            id: 'cd_listening_p17_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Flammable fabric frequently ignited by open stage gas flames: fluttering ______',
            correctAnswer: 'MUSLIN',
            explanation: 'Gas jets ignited fluttering muslin costumes.'
          },
          {
            id: 'cd_listening_p17_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Heated calcium ______ blocks created intense beams, inspiring the idiom "in the limelight".',
            correctAnswer: 'LIME',
            explanation: 'Lime blocks heated inside flames coined "in the limelight".'
          },
          {
            id: 'cd_listening_p17_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'London venue debuting fully electric stage lighting safely in 1881: ______ Theatre',
            correctAnswer: 'SAVOY',
            explanation: 'Safe bulbs debuted at London’s Savoy Theatre.'
          },
          {
            id: 'cd_listening_p17_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why did bright electric filaments force performers to abandon old chalk facepaint?',
            options: [
              'A. Harsh electric glare exposed coarse white paint as ghostly artificial',
              'B. Chalk melted quickly under warm stage spots',
              'C. Unions banned lead-based theatre pigments',
              'D. Bright stages required shiny metallic eye powders'
            ],
            correctAnswer: 'A',
            explanation: 'Bright electric glare made heavy white chalk look ghostly artificial.'
          },
          {
            id: 'cd_listening_p17_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which cumbersome colour accessories became unnecessary with digital LED colour-mixing?',
            correctAnswer: 'GELATIN GELS',
            explanation: 'LEDs remove heavy plastic gelatin gels.'
          },
          {
            id: 'cd_listening_p17_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What ironic trend appears in contemporary classical tragedy lighting?',
            options: [
              'A. Returning permanently to open tallow candles',
              'B. Removing colour filters completely in favor of pure white',
              'C. Turning auditorium chandeliers back onto full brightness',
              'D. Using modern LEDs to imitate warm flickering firelight aesthetics'
            ],
            correctAnswer: 'D',
            explanation: 'Modern directors simulate shaky warm candle palettes digitally.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 18: Community Art Workshop & Ceramic Sculpture Course
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p18',
    testNumber: 18,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 18: Community Art Workshop & Ceramic Sculpture Course',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Community Art Workshop & Ceramic Sculpture Course.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Pottery Evening Course Enrollment',
        audioScenario:
          'A resident phones the Neighborhood Arts Collective to enroll in an eight-week stoneware wheel-throwing workshop.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Community Arts Studio Reception]
Coordinator: Good afternoon, Riverside Pottery & Arts Guild, Sam speaking. How can I assist?
Caller: Hello Sam, I noticed posters for your autumn beginner ceramic wheel classes and wanted to check space on Tuesday evenings.
Coordinator: [[Q1]] Glad you rang—we have two electric potter’s wheels still free! May I take your surname for the waiting folder? Yes, it is Morales, spelled M-O-R-A-L-E-S.
Coordinator: [[Q2]] Thanks, Ms. Morales. The eight-week Tuesday evening term runs from six thirty until nine, priced at 165 pounds total.
Caller: Does that tuition include raw stoneware clay blocks and studio kiln firings, or are materials billed by weight?
Coordinator: [[Q3]] Basic transparent dip-glazes and communal studio tools are included, while bags of buff stoneware clay sell at cost for twelve pounds per ten-kilogram slab.
Caller: [[Q4]] Very fair. Should complete beginners buy a personal apron and clean sponge before session one? Pack an old cotton apron plus two hand towels—our damp clay washes right out cleanly at forty degrees, though skip hand jewellery or long sleeve cuffs!
Coordinator: [[Q5]] Remember also: studio policy restricts students to trimming and glazing pieces shaped purely inside workshop hours rather than drying external backyard clay inside our electric kilns.
Caller: [[Q6]] Makes sense. What happens if work travel forces me to miss one Tuesday evening mid-course? Drop a note in the office ledger forty-eight hours prior and book a complimentary open-bench catch-up hour on Saturday mornings.
Caller: [[Q7]] Nice flexibility! Where should bikes or compact cars park safely in the evening? Free visitor bicycle hoops sit beneath floodlights behind the Loading Annex, while main courtyard parking requires a blue council scratch-card after six.
Coordinator: [[Q8]] Also note our kiln room reaches twelve hundred sixty degrees during stoneware vitrification—so fired mugs take up to ten working days before moving onto the green collection shelf.
Caller: [[Q9]] Should I label bowl bottoms early? Stamp your initials cleanly under wet bases using brass stamps so finished dark celadon pots never mix with classmates’ glazes.
Coordinator: [[Q10]] To hold Wheel Seat Six right now, complete the online registration cart before Thursday noon quoting Course Code CR-805.`,
        questions: [
          {
            id: 'cd_listening_p18_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'MORALES',
            explanation: 'Spelled M-O-R-A-L-E-S.'
          },
          {
            id: 'cd_listening_p18_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Tuition fee for the eight-week Tuesday pottery course: £ ______',
            correctAnswer: '165',
            explanation: 'Course tuition is 165 pounds.'
          },
          {
            id: 'cd_listening_p18_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Price per 10-kilogram slab of buff stoneware clay: £ ______',
            correctAnswer: 'TWELVE',
            explanation: 'Ten-kilogram slabs cost twelve pounds.'
          },
          {
            id: 'cd_listening_p18_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Besides a cotton apron, what should new potters pack from home?',
            correctAnswer: 'HAND TOWELS',
            explanation: 'Bring an apron plus two hand towels.'
          },
          {
            id: 'cd_listening_p18_lq5',
            number: 5,
            type: 'multiple_choice',
            questionText: 'Why does the guild forbid firing clay sculptures molded at home?',
            options: [
              'A. Home clay lacks studio barcoding labels',
              'B. Backyard earth clays shrink unevenly and melt shelves',
              'C. Kilns fire solely pieces sculpted during registered workshop hours',
              'D. Extra firing electricity bills surpass course tuition'
            ],
            correctAnswer: 'C',
            explanation: 'Policy restricts kilns strictly to pieces sculpted during class hours.'
          },
          {
            id: 'cd_listening_p18_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Morning offering complimentary catch-up bench hours for missed sessions: ______',
            correctAnswer: 'SATURDAY',
            explanation: 'Catch-up sessions open Saturday mornings.'
          },
          {
            id: 'cd_listening_p18_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Location of floodlit visitor bicycle parking racks: Loading ______',
            correctAnswer: 'ANNEX',
            explanation: 'Bicycle hoops sit behind the Loading Annex.'
          },
          {
            id: 'cd_listening_p18_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'How many working days do finished glazed mugs take before collection?',
            correctAnswer: 'TEN WORKING DAYS',
            explanation: 'Fired mugs appear within ten working days.'
          },
          {
            id: 'cd_listening_p18_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'How do potters distinguish similar celadon bowls after dark kiln firing?',
            options: [
              'A. Attaching waterproof paper luggage tags',
              'B. Stamping initials into damp bases with brass stamps',
              'C. Sketching wheel numbers on a shared notebook',
              'D. Painting bright acrylic dots along cup handles'
            ],
            correctAnswer: 'B',
            explanation: 'Stamp initials under wet bases using brass stamps.'
          },
          {
            id: 'cd_listening_p18_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Course registration reference code due by Thursday noon: ______',
            correctAnswer: 'CR-805',
            explanation: 'Quote Course Code CR-805.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Ceramics Studio Safety & Kiln Workshop Walkthrough',
        audioScenario:
          'A lead studio potter introduces open-access members to dust controls, plaster trap sinks, and glazing booths.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Pottery Studio Tour]
Potter: Welcome new open-studio members! Before wedging your first ball of clay, let us walk cleanly through studio safety routines protecting everyone’s lungs and drains.
Potter: [[Q11]] Number one rule across every ceramics hall: NEVER dry-sweep dusty clay trimmings using stiff bristles—always wipe tables with wet sponges so silica dust never becomes airborne.
Potter: [[Q12]] Walk straight to our twin rinsing sinks and notice deep white settling buckets underneath: heavy clay slip sinks neatly inside plaster traps rather than solidifying like concrete inside city sewage pipes!
Potter: [[Q13]] Next door stands our Pugmill Clay Recycler, kneading clean dry scraps back into moist throwing cylinders—strictly keep dried glaze flakes or paper towels out of scrap bins!
Potter: [[Q14]] Inside the Spray Glazing Alcove, flick on noisy industrial wall extractor fans before opening powder oxide tubs containing cobalt blue or copper green stains.
Potter: [[Q15]] Do not touch glossy finished pottery stacks resting atop electric kiln lids—glaze drips stick dangerously onto brittle brick shelves if pieces lack dry wiped foot-rings.
Potter: [[Q16]] When wedging tall hollow sculptures over three centimetres thick, puncture discreet air-vent pinholes underneath thick joints so expanding kiln steam cannot burst sculptures apart at six hundred degrees.
Potter: [[Q17]] On Friday nights, volunteer monitor Nadia hosts silent "Throw-Down" challenges building uniform match-sized espresso cups for charitable neighborhood café auctions.
Potter: [[Q18]] Check green wooden drying cupboards by the south boiler: drape loose plastic sheet corners neatly over rim edges so fast radiator draughts never warp tall bottle necks sideways.
Potter: [[Q19]] Remember our zero food-and-drink policy inside raw glaze mixing tables—store sealed water flasks safely back inside wooden locker cubbies along hallway tiles.
Potter: [[Q20]] Grab your personal laminated wipe-down checklist clipped onto the bronze ring beside Reception Desk One!`,
        questions: [
          {
            id: 'cd_listening_p18_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Hazardous airborne clay particle avoided by wet sponging instead of sweeping: ______ dust',
            correctAnswer: 'SILICA',
            explanation: 'Wet sponges keep silica dust from becoming airborne.'
          },
          {
            id: 'cd_listening_p18_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'What plumbing fixture stops clay residue solidifying inside municipal drains?',
            correctAnswer: 'PLASTER TRAPS',
            explanation: 'Settling buckets and plaster traps catch heavy clay slip.'
          },
          {
            id: 'cd_listening_p18_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What contaminants ruin batches fed into the Pugmill Clay Recycler?',
            options: [
              'A. Fresh soft earthenware scraps',
              'B. Buff stoneware grog sand',
              'C. Cold tap water splashes',
              'D. Dried glaze flakes and paper towels'
            ],
            correctAnswer: 'D',
            explanation: 'Keep dried glaze flakes or paper towels out of scrap bins.'
          },
          {
            id: 'cd_listening_p18_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Equipment turned on before opening raw cobalt glaze powders: extractor ______',
            correctAnswer: 'FANS',
            explanation: 'Switch on industrial wall extractor fans first.'
          },
          {
            id: 'cd_listening_p18_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Potters must wipe glaze cleanly off bottom ______ so vessels never fuse to brick kiln shelves.',
            correctAnswer: 'FOOT-RINGS',
            explanation: 'Pieces require dry wiped foot-rings.'
          },
          {
            id: 'cd_listening_p18_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Hidden internal hazard bursting thick clay joints at 600°C: trapped ______',
            correctAnswer: 'STEAM',
            explanation: 'Pinholes release expanding kiln steam.'
          },
          {
            id: 'cd_listening_p18_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'What vessels do Friday "Throw-Down" challenges make for charity café auctions?',
            correctAnswer: 'ESPRESSO CUPS',
            explanation: 'Volunteers build uniform espresso cups.'
          },
          {
            id: 'cd_listening_p18_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why do potters drape plastic loosely over drying greenware rims?',
            options: [
              'A. To stop fast air currents warping slender bottle necks',
              'B. To trap warm radiator humidity cleanly',
              'C. To keep dark glaze speckles off wet clay',
              'D. To indicate pieces ready for first biscuit firing'
            ],
            correctAnswer: 'A',
            explanation: 'Plastic stops fast radiator draughts from warping vessel necks.'
          },
          {
            id: 'cd_listening_p18_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Hallway storage spot where personal drink flasks must remain: ______ cubbies',
            correctAnswer: 'LOCKER',
            explanation: 'Leave drink flasks safely in hallway locker cubbies.'
          },
          {
            id: 'cd_listening_p18_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Metal clip holding laminated studio cleanup checklists by Reception: ______ ring',
            correctAnswer: 'BRONZE',
            explanation: 'Clipped onto the bronze ring by Reception Desk One.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Testing Local Quarry Clays for Zero-Import Glazes',
        audioScenario:
          'Fine art students Priya and Oliver review experimental ash-glaze firing grids with ceramic tutor Dr. Hughes.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Ceramic Material Science Review]
Dr. Hughes: Come in Priya and Oliver. How did your local river-silt and wood-ash firing tiles survive Friday’s cone-ten reduction firing?
Priya: [[Q21]] Our river silt collected below the brickworks melted naturally into rich olive-green celadon glossy pools once fired past twelve hundred eighty degrees without buying single mined commercial felspars!
Oliver: [[Q22]] Oddly, though, washed oak fireplace ashes yielded satin matte cream glazes when blended forty-sixty with flint, whereas unwashed raw ash bubbled into sharp volcanic craters.
Dr. Hughes: Classic soluble alkali reaction! Why did unwashed wood ash blister smoothly out onto test rims?
Priya: [[Q23]] Potassium salts left unwashed burned vigorously at nine hundred Celsius, tearing molten glaze skins open before finishing coats ever relaxed flat.
Dr. Hughes: Great chemical detective work! Did drying coarse quarry clay bars expose tricky shrinkage cracking inside plaster molds?
Oliver: [[Q24]] Nearly half our initial pure silt bars warped like spoons until Dr. Hughes suggested wedging fifteen percent fired crushed brick grog into wet clay loaves cleanly.
Dr. Hughes: [[Q25]] Right—remember when photographing glossy tile grids for your exhibition dossier, angle diffuse softbox lamps forty-five degrees sideways or overhead glare blinds glaze texture details completely.
Priya: [[Q26]] Done—every thirty-tile triaxial blend grid now sits flat against neutral matte charcoal cardboard for uniform lens colour matching.
Oliver: [[Q27]] Speaking of environmental costs, our gas reduction firing used far more fossil fuel than solar electric oxidation kilns across town.
Dr. Hughes: [[Q28]] Run comparative colour swatches inside electric oxidation atmosphere using tiny red iron oxide additions before deciding reduction gas offers non-negotiable beauty.
Priya: For Tuesday’s Materials Symposium poster, should we ship frail test tiles in foam boxes or stick purely to macro photographs?
Dr. Hughes: [[Q29]] Pack five signature glaze shards safely inside corrugated honeycomb slots!
Priya: [[Q30]] Smart idea—touching authentic tactile stoneware surfaces convinces craft curators instantly!`,
        questions: [
          {
            id: 'cd_listening_p18_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Natural glaze hue produced by brickworks river silt above 1,280°C: ______ celadon',
            correctAnswer: 'OLIVE-GREEN',
            explanation: 'Silt melted into rich olive-green celadon glaze.'
          },
          {
            id: 'cd_listening_p18_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'What surface flaw marred test tiles coated with unwashed fireplace wood ash?',
            correctAnswer: 'VOLCANIC CRATERS',
            explanation: 'Unwashed raw ash bubbled into sharp volcanic craters.'
          },
          {
            id: 'cd_listening_p18_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did unwashed ash spoil smooth molten test finishes?',
            options: [
              'A. Charcoal flakes absorbed kiln gas unevenly',
              'B. Soluble potassium salts boiled vigorously at 900°C, rupturing skins',
              'C. Coarse flint sands settled unevenly along cup bases',
              'D. River silt dried too slowly prior to loading'
            ],
            correctAnswer: 'B',
            explanation: 'Soluble potassium salts burned vigorously around 900°C.'
          },
          {
            id: 'cd_listening_p18_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Recycled stabilizer added at 15% to stop pure silt test bars warping: brick ______',
            correctAnswer: 'GROG',
            explanation: 'Added crushed fired brick grog.'
          },
          {
            id: 'cd_listening_p18_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Softbox studio lights must hit glossy ceramic grids at ______ degrees to avoid surface glare.',
            correctAnswer: 'FORTY-FIVE',
            explanation: 'Angle softbox lights forty-five degrees sideways.'
          },
          {
            id: 'cd_listening_p18_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Neutral matte card colour chosen for uniform photography backgrounds: ______',
            correctAnswer: 'CHARCOAL',
            explanation: 'Mounted against neutral matte charcoal cardboard.'
          },
          {
            id: 'cd_listening_p18_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What sustainability concern does Oliver note regarding cone-ten gas kilns?',
            options: [
              'A. Exhaust chimneys vent local wood ash soot',
              'B. Broken test tiles generate landfill ceramics',
              'C. Gas reduction cycles consume high fossil energy vs solar electric kilns',
              'D. Quarry mud collection erodes riverbanks'
            ],
            correctAnswer: 'C',
            explanation: 'Gas reduction used far more fossil fuel than solar electric kilns.'
          },
          {
            id: 'cd_listening_p18_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which metal additive does Dr. Hughes suggest testing inside electric oxidation kilns?',
            correctAnswer: 'RED IRON OXIDE',
            explanation: 'Test small red iron oxide additions inside electric kilns.'
          },
          {
            id: 'cd_listening_p18_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Packing insert securing five real ceramic shards for Tuesday’s symposium: ______ slots',
            correctAnswer: 'HONEYCOMB',
            explanation: 'Pack inside corrugated honeycomb slots.'
          },
          {
            id: 'cd_listening_p18_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Dr. Hughes prefer bringing five real shards alongside poster slides?',
            options: [
              'A. Photograph colors mismatch auditorium projectors',
              'B. Physical samples earn bonus exhibition marks',
              'C. Touching genuine stoneware glaze surfaces persuades curators directly',
              'D. Attendees keep small shards as keepsakes'
            ],
            correctAnswer: 'C',
            explanation: 'Touching authentic tactile stoneware persuades curators immediately.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Cultural Legacy of Bauhaus Ceramics Workshops',
        audioScenario:
          'An art history lecturer traces how early twentieth-century Bauhaus pottery workshops fused medieval craft guilds with industrial mass production.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Modern Design & Ceramic History]
Lecturer: Walk past sleek stackable espresso dishes in virtually any contemporary café and you are touching design principles hammered out inside a tiny German rural pottery town.
Lecturer: [[Q31]] When Walter Gropius opened the Bauhaus school in 1919, students rejected dusty nineteenth-century porcelain swans painted with fussy gold scrollwork.
Lecturer: [[Q32]] Unable to afford industrial gas kilns downtown in Weimar, ceramics master Gerhard Marcks relocated his studio twenty miles east to Dornburg beside cheap wood forests and local clay pits.
Lecturer: [[Q33]] Inside Dornburg’s dilapidated stables, pioneering potter Marguerite Friedlaender forced apprentices through rigorous dual training—pairing hands-on guild wheel mastery alongside spare geometric proportion theory.
Lecturer: [[Q34]] Crucially, Bauhaus potters stopped treating spouts, lids, and cup handles as decorative ribbons, engineering cylinders directly out of pure spinning cones and spheres.
Lecturer: [[Q35]] Theodor Bogler’s famous 1923 modular combination teapot assembled interchangeable slip-cast plaster segments—allowing one clay mold to yield pouring pitchers, cream jugs, or lidded teapots seamlessly.
Lecturer: [[Q36]] Slip-casting poured liquid clay slurry into porous gypsum molds, which sucked water cleanly from rims within twenty minutes to duplicate razor-thin identical walls endlessly.
Lecturer: [[Q37]] Commercial porcelain magnates initially scoffed at unadorned white cylinders, assuming housewives demanded floral decals hiding minor firing flaws.
Lecturer: [[Q38]] Yet clinical hospital canteens and modernist train dining cars snapped up hygienic seamless Bauhaus crockery because sturdy rolled rims resisted mechanical dishwasher chipping.
Lecturer: [[Q39]] Sadly, political persecution dispersed Bauhaus ceramicists across continents in the 1930s, planting studio-pottery workshops from California redwood coasts to Japanese craft villages.
Lecturer: [[Q40]] Today, minimalist ceramic design endures because stripping away vanity ornament exposes tactile clay honesty paired cleanly with everyday kitchen utility.`,
        questions: [
          {
            id: 'cd_listening_p18_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Ornate feature Bauhaus ceramicists rejected from 19th-century porcelain: gold ______',
            correctAnswer: 'SCROLLWORK',
            explanation: 'Rejected fussy gold scrollwork.'
          },
          {
            id: 'cd_listening_p18_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Cheap fuel advantage pulling the Bauhaus pottery shop 20 miles east to Dornburg: ______ forests',
            correctAnswer: 'WOOD',
            explanation: 'Dornburg sat beside cheap wood forests and clay pits.'
          },
          {
            id: 'cd_listening_p18_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'Which pioneer paired guild wheel mastery with geometric theory in Dornburg?',
            correctAnswer: 'MARGUERITE FRIEDLAENDER',
            explanation: 'Marguerite Friedlaender paired guild craft with geometric theory.'
          },
          {
            id: 'cd_listening_p18_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'How did Bauhaus designers reshape traditional handles and teapot spouts?',
            options: [
              'A. Deriving vessel components purely from geometric cones and spheres',
              'B. Carving intricate botanical reliefs into lids',
              'C. Adding wide wooden brackets beside brass clips',
              'D. Importing Asian porcelain handles separately'
            ],
            correctAnswer: 'A',
            explanation: 'Derived parts cleanly from spinning cones and spheres.'
          },
          {
            id: 'cd_listening_p18_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Year Theodor Bogler designed his modular interchangeable combination teapot: ______',
            correctAnswer: '1923',
            explanation: 'Bogler created his 1923 modular combination teapot.'
          },
          {
            id: 'cd_listening_p18_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Porous ______ molds absorb water from liquid slurry to produce thin uniform slip-cast walls.',
            correctAnswer: 'GYPSUM',
            explanation: 'Porous gypsum molds draw moisture out rapidly.'
          },
          {
            id: 'cd_listening_p18_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Why did traditional manufacturers rely on floral decals on porcelain plates?',
            correctAnswer: 'FIRING FLAWS',
            explanation: 'Floral decals masked minor firing flaws.'
          },
          {
            id: 'cd_listening_p18_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why did hospital cafeterias and rail dining cars favor Bauhaus crockery?',
            options: [
              'A. Matte finishes disguised coffee stains cleanly',
              'B. Bright square bases saved tray luggage space',
              'C. Hollow handles kept porcelain cool during transport',
              'D. Sturdy rolled rims resisted chipping in mechanical dishwashers'
            ],
            correctAnswer: 'D',
            explanation: 'Sturdy rolled rims resisted dishwasher chipping.'
          },
          {
            id: 'cd_listening_p18_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Decade when political upheaval scattered Bauhaus ceramicists worldwide: ______',
            correctAnswer: '1930S',
            explanation: 'Dispersed globally across the 1930s.'
          },
          {
            id: 'cd_listening_p18_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What explains the enduring appeal of minimalist Bauhaus stoneware today?',
            options: [
              'A. Rising prices of hand-painted porcelain glaze gold',
              'B. Honesty of raw clay combined seamlessly with everyday utility',
              'C. Strict municipal recycling bans on decorative ceramics',
              'D. Scarcity of modern plaster casting molds'
            ],
            correctAnswer: 'B',
            explanation: 'Reveals tactile clay honesty united with kitchen utility.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 19: City Recycling Initiative & Household Waste Audit
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p19',
    testNumber: 19,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 19: City Recycling Initiative & Household Waste Audit',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on City Recycling Initiative & Household Waste Audit.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking a Bulky Item & E-Waste Curbside Pickup',
        audioScenario:
          'A householder telephones the City Council Environmental Services line to schedule a bulky appliance pickup and obtain garden compost bins.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Municipal Recycling Helpline]
Officer: Good morning, City Waste & Recycling Services, Owen speaking. How may I assist?
Resident: Hello Owen, we are clearing out our shared terraced house before moving and need to book a bulky electrical collection plus replace a cracked paper bin.
Officer: [[Q1]] Happy to sort both requests cleanly! Could I confirm your householder surname first? Yes, it is Pritchard, spelled P-R-I-T-C-H-A-R-D.
Officer: [[Q2]] Thank you, Ms. Pritchard. Let me check collection slots for the Southbank district—bulky collections run every Tuesday morning, and we charge a flat twenty-two-pound callout covering up to four large items.
Resident: Great! We have an old broken fridge-freezer, a damp mattress, and two bent metal shelving racks.
Officer: [[Q3]] Careful note on refrigeration appliances: never cut copper coolant pipes on old freezers—crews take fridges on a separate hazardous-gas van parked right behind the timber lorry!
Resident: [[Q4]] Understood—we will leave it completely intact. Should we wheel items out onto the pavement Monday evening after dusk? Place bulky goods neatly beside your front brick porch before seven in the morning on pickup day, leaving pedestrian tactile pavements unobstructed.
Resident: [[Q5]] What about half-used jars of household wall emulsion paint sitting under the cellar stairs? Liquid paint cans cannot go in green rubbish bins; drop sealed tins off at our Dockyard Civic Depot on Saturdays, where volunteers remix leftover colours for local youth club walls.
Officer: [[Q6]] Nice initiative! You mentioned a cracked blue paper-recycling wheelie bin—broken council bins are swapped free of charge within five working days; leave the cracked bin flipped upside down by the gate so delivery teams spot it effortlessly.
Resident: [[Q7]] Also, how should housemates dispose of dead lithium smoke-alarm batteries safely? Tape brass battery contacts with insulating sellotape and rest them in a clear sandwich bag atop your closed glass-caddy lid—never drop batteries inside crushed compacting trucks!
Officer: [[Q8]] Do you also offer subsidised backyard wooden composters for autumn garden leaves? Yes, council households purchase three-hundred-litre recycled-plastic wormeries or composters for just sixteen pounds online.
Resident: [[Q9]] Helpful! One quick check about cardboard moving boxes: should we flatten greasy pizza takeaway boxes alongside clean packing cartons? Greasy food grease spoils paper-pulp batches, so tear clean dry box lids into blue recycling and compost oily stained bases separately.
Officer: [[Q10]] Let me lock Tuesday morning pickup under reference WR-294—our crew driver sends an SMS twenty minutes prior to ringing your doorbell.`,
        questions: [
          {
            id: 'cd_listening_p19_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Resident surname: ______',
            correctAnswer: 'PRITCHARD',
            explanation: 'Spelled P-R-I-T-C-H-A-R-D.'
          },
          {
            id: 'cd_listening_p19_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Flat municipal fee covering up to four bulky items: £ ______',
            correctAnswer: 'TWENTY-TWO',
            explanation: 'Flat charge of twenty-two pounds.'
          },
          {
            id: 'cd_listening_p19_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Which metal tubing on old freezers must residents avoid cutting?',
            correctAnswer: 'COPPER COOLANT PIPES',
            explanation: 'Never cut copper coolant pipes on old freezers.'
          },
          {
            id: 'cd_listening_p19_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Earliest morning hour by which bulky goods must sit beside the front porch: ______',
            correctAnswer: 'SEVEN',
            explanation: 'Place items beside the front porch before seven in the morning.'
          },
          {
            id: 'cd_listening_p19_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Community buildings repainted using leftover remixed household paints: ______ clubs',
            correctAnswer: 'YOUTH',
            explanation: 'Volunteers remix leftovers for local youth club walls.'
          },
          {
            id: 'cd_listening_p19_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'How must residents display a cracked wheelie bin so replacement crews spot it?',
            options: [
              'A. Leave it flipped upside down beside the gate',
              'B. Tie a bright orange ribbon to the handle',
              'C. Attach a printed repair sticker over the lid',
              'D. Wheel it out only on alternate Fridays'
            ],
            correctAnswer: 'A',
            explanation: 'Leave the cracked bin flipped upside down by the gate.'
          },
          {
            id: 'cd_listening_p19_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Which municipal vehicles must never crush loose lithium batteries?',
            correctAnswer: 'COMPACTING TRUCKS',
            explanation: 'Tape contacts and leave atop glass lids so batteries never enter compacting trucks.'
          },
          {
            id: 'cd_listening_p19_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Subsidized council price for a 300-litre garden composter: £ ______',
            correctAnswer: 'SIXTEEN',
            explanation: 'Subsidised composters cost sixteen pounds.'
          },
          {
            id: 'cd_listening_p19_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What must residents do with greasy pizza delivery cartons?',
            options: [
              'A. Rinse them thoroughly in warm water before bin sorting',
              'B. Stack flat cartons beside yard garden trimmings',
              'C. Discard the whole box into regular residual sacks',
              'D. Put clean dry lids in blue recycling and compost oily stained bases'
            ],
            correctAnswer: 'D',
            explanation: 'Tear clean lids for recycling and compost stained oily bases.'
          },
          {
            id: 'cd_listening_p19_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Collection booking reference number: ______',
            correctAnswer: 'WR-294',
            explanation: 'Locked under reference WR-294.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Inside the Municipal Material Recovery Facility',
        audioScenario:
          'A plant operations director guides local school governors along the skywalk above optical recycling sorting conveyors.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Materials Recovery Plant Tour]
Director: Welcome guests to the Greenbank Material Recovery Plant! Please clip safety goggles snugly over glasses while walking our elevated glass observation corridor.
Director: [[Q11]] Down below, forty-ton articulated lorries tip mixed dry household bins onto giant steel hoppers moving twenty tons of cardboard, steel, and polymers every single hour.
Director: [[Q12]] Stage One employs massive spinning spiked star-screens lifting flat sheets of cardboard cleanly upward while dense cans and glass jars tumble swiftly down below.
Director: [[Q13]] Next, an industrial electromagnet hovering across belt three snatches tin soup cans cleanly away into overhead steel chutes without human hands touching sharp edges.
Director: [[Q14]] Aluminum drinks cans aren’t magnetic—so our clever eddy-current rotor spins violent magnetic fields backwards, repelling lightweight soda cans cleanly off the belt edge like invisible springs!
Director: [[Q15]] For plastics, near-infrared optical cameras scan clear milk jugs versus dark shampoo trays in milliseconds, firing tiny bursts of compressed air that flip sorted pellets across exact divider flaps.
Director: [[Q16]] Notice our plant’s biggest daily enemy: tangled garden hoses and plastic carrier sacks wrapping tightly around steel spinning shafts—forcing engineers to halt lines twice daily with pocket knives!
Director: [[Q17]] Look over to Bay Six where thick green emerald crushed glass cullet gleams beside brown beer shards—remelted at bottle foundries to save thirty percent furnace energy compared to raw quartz sand.
Director: [[Q18]] Every compacted two-ton bale of pure clean office white paper carries a barcoded quality sheet graded by trained inspectors before cargo trains ship directly toward paper mills.
Director: [[Q19]] Remember: keep black microwave meal trays out of household kerbside bins—carbon soot dye turns dark plastics completely invisible against dark rubber conveyor belts beneath infrared scanners!
Director: [[Q20]] Before walking downstairs, scan your visitor badge at the glass kiosk to download our free household "Wish-Cycling" audit guide!`,
        questions: [
          {
            id: 'cd_listening_p19_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Hourly tonnage processed across Greenbank sorting belts: ______ tons',
            correctAnswer: 'TWENTY',
            explanation: 'Belts move twenty tons every hour.'
          },
          {
            id: 'cd_listening_p19_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which mechanical screen lifts flat cardboard sheets away from heavy jars?',
            correctAnswer: 'STAR-SCREENS',
            explanation: 'Spinning spiked star-screens lift flat cardboard sheets.'
          },
          {
            id: 'cd_listening_p19_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Device suspending above belt three to capture tin steel cans: ______',
            correctAnswer: 'ELECTROMAGNET',
            explanation: 'Industrial electromagnet snatches tin cans into chutes.'
          },
          {
            id: 'cd_listening_p19_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Rotor system kicking non-magnetic aluminum soda cans off conveyors: ______ rotor',
            correctAnswer: 'EDDY-CURRENT',
            explanation: 'Eddy-current rotor repels lightweight aluminum cans.'
          },
          {
            id: 'cd_listening_p19_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Infrared plastic sorters eject targeted jugs across flaps using blasts of ______ air.',
            correctAnswer: 'COMPRESSED',
            explanation: 'Fires tiny bursts of compressed air.'
          },
          {
            id: 'cd_listening_p19_lq16',
            number: 16,
            type: 'short_answer',
            questionText: 'Besides plastic shopping bags, what tangler stops sorting shafts twice daily?',
            correctAnswer: 'GARDEN HOSES',
            explanation: 'Tangled garden hoses and sacks jam spinning shafts.'
          },
          {
            id: 'cd_listening_p19_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Furnace energy saved by melting recycled crushed glass cullet instead of sand: ______ percent',
            correctAnswer: 'THIRTY',
            explanation: 'Saves thirty percent furnace energy.'
          },
          {
            id: 'cd_listening_p19_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'How is finished pure white paper shipped after inspection at Greenbank?',
            options: [
              'A. Packed loose inside articulated barges',
              'B. Shredded into pulp tanks directly on site',
              'C. Compressed into barcoded two-ton bales shipped by freight train',
              'D. Sealed inside watertight shipping drums'
            ],
            correctAnswer: 'C',
            explanation: 'Barcoded two-ton bales ship via freight train.'
          },
          {
            id: 'cd_listening_p19_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Why do infrared plastic scanners miss black plastic food trays?',
            options: [
              'A. Sauce stains grease optical glass lenses',
              'B. Carbon soot dye blends invisibly against dark conveyor belts',
              'C. Black trays weigh too heavily for air-jet nozzles',
              'D. Microwave plastics contain metal foil flecks'
            ],
            correctAnswer: 'B',
            explanation: 'Carbon soot dye makes black trays invisible against dark rubber belts.'
          },
          {
            id: 'cd_listening_p19_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Digital booklet unlocked by scanning visitor badges downstairs: ______ audit guide',
            correctAnswer: 'WISH-CYCLING',
            explanation: 'Download the "Wish-Cycling" audit guide.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing "Wish-Cycling" Errors Across Student Estates',
        audioScenario:
          'Environmental science undergraduates Mia and Tariq present household waste-bin composition audits to Dr. Fletcher.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Household Waste Research Seminar]
Dr. Fletcher: Come in Mia and Tariq. Did lifting bin lids across sixty student streets expose predictable contamination spikes?
Mia: [[Q21]] Shockingly high—twenty-eight percent by weight inside blue recycling bins belonged in residual waste, led overwhelmingly by well-meaning "wish-cycling" of disposable takeaway coffee cups!
Tariq: [[Q22]] Most students spotted paper fibers on cup sleeves and guessed cardboard bins fit, overlooking thin polyethylene linings welded inside every paper rim.
Dr. Fletcher: Classic hidden composite trap! Did door-to-door leaflets cut contamination noticeably on follow-up checks?
Mia: [[Q23]] Actually, shiny tri-fold postal brochures changed virtually nothing—contamination dropped half only after council crews stuck bright amber "Contaminated: Not Emptied" tags directly onto offending handles!
Dr. Fletcher: Direct immediate feedback beats passive pamphlets every time! How did landlords’ rapid house-moveouts skew street audits?
Tariq: [[Q24]] During June moveout fortnight, frantic tenants dumped mixed bedding, unwashed dishes, and torn textbooks straight into open skips, spoiling four entire truckloads of clean cardboard.
Dr. Fletcher: [[Q25]] When publishing neighborhood scatterplots in Chapter Three, normalize rubbish weights per bedroom count rather than per street address—student five-bedroom houses dwarf single pensioners cleanly.
Mia: [[Q26]] Done—measuring grams per resident weekly revealed flatshares actually generated less total packaging waste per head than detached family homes!
Tariq: [[Q27]] Another blind spot surfaced in shared kitchen caddies: roommates peeled biodegradable cornstarch bags gladly until oily soup leaks tore thin bags, pushing cooks straight back to black bin liners.
Dr. Fletcher: [[Q28]] Suggest pairing vented mesh caddies with newspaper wrap sheets in your municipal pilot memo so liners breathe dry without splitting.
Mia: For Tuesday’s council sustainability showcase, should we photograph messy sorted tarp piles or display clean stacked jar weight bars?
Dr. Fletcher: [[Q29]] Lead with one stark photograph comparing twelve clean jars against one single unwashed oil jar ruining a ton of paper pulp!
Tariq: [[Q30]] Visual stories move city councillors fast!`,
        questions: [
          {
            id: 'cd_listening_p19_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Item most commonly mistakenly dropped into student paper recycling bins: ______ cups',
            correctAnswer: 'COFFEE',
            explanation: 'Takeaway coffee cups topped wish-cycling contamination.'
          },
          {
            id: 'cd_listening_p19_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'What hidden waterproof barrier inside paper cups blocks easy repulping?',
            correctAnswer: 'POLYETHYLENE LININGS',
            explanation: 'Thin polyethylene plastic linings fuse onto the inside.'
          },
          {
            id: 'cd_listening_p19_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Which municipal intervention actually cut household recycling mistakes in half?',
            options: [
              'A. Mailing glossy informational tri-fold brochures',
              'B. Hosting weekend campus sustainability talks',
              'C. Installing street-corner poster billboards',
              'D. Attaching bright amber warning tags when bins were left unemptied'
            ],
            correctAnswer: 'D',
            explanation: 'Bright amber non-collection tags slashed errors by half.'
          },
          {
            id: 'cd_listening_p19_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Calendar month when chaotic student house moveouts ruined four cardboard truckloads: ______',
            correctAnswer: 'JUNE',
            explanation: 'June house moveouts contaminated four truckloads.'
          },
          {
            id: 'cd_listening_p19_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Chapter Three scatterplots must measure rubbish per ______ count rather than per street house.',
            correctAnswer: 'BEDROOM',
            explanation: 'Normalize rubbish weights per bedroom count.'
          },
          {
            id: 'cd_listening_p19_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Surprising per-person waste finding: shared flats produced less packaging than ______ homes',
            correctAnswer: 'DETACHED',
            explanation: 'Flatshares generated less packaging per person than detached homes.'
          },
          {
            id: 'cd_listening_p19_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'Why did student kitchens abandon biodegradable cornstarch food caddy bags?',
            options: [
              'A. Warm oily food leaks tore delicate cornstarch walls',
              'B. Supermarkets stopped stocking biodegradable rolls',
              'C. Green council trucks rejected plant-plastic bags',
              'D. Compostable rolls cost double black sacks'
            ],
            correctAnswer: 'A',
            explanation: 'Oily soup leaks split weak cornstarch bags.'
          },
          {
            id: 'cd_listening_p19_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which simple wrap does Dr. Fletcher propose pairing with vented kitchen mesh caddies?',
            correctAnswer: 'NEWSPAPER',
            explanation: 'Pair vented mesh caddies with dry newspaper wrap sheets.'
          },
          {
            id: 'cd_listening_p19_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Contaminant item spotlighted inside Tuesday’s visual photograph ruining paper pulp: an unwashed ______ jar',
            correctAnswer: 'OIL',
            explanation: 'One unwashed oil jar spoiling clean paper pulp.'
          },
          {
            id: 'cd_listening_p19_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Decision-makers targeted by the stark comparison photograph: city ______',
            correctAnswer: 'COUNCILLORS',
            explanation: 'Visual stories persuade city councillors.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Chemical Recycling vs Circular Reuse Economics',
        audioScenario:
          'An industrial ecology lecturer examines why mechanical plastic remelting hits thermodynamic quality walls and how circular deposit return laws outperform downcycling.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Circular Economy Lecture]
Lecturer: Despite three decades of embossed triangle arrows printed underneath snack cartons, barely nine percent of cumulative plastics produced globally have ever been recycled twice.
Lecturer: [[Q31]] Unlike glass jars or aluminum cans—which remelt cleanly at high furnace heat indefinitely—every trip through an industrial shredder and extruder snaps delicate long polymer chains shorter.
Lecturer: [[Q32]] Consequently, glossy transparent beverage bottles rarely turn back into crystal bottles; instead they get "downcycled" once into coarse black fleece fabric or plastic park benches destined eventually for landfill.
Lecturer: [[Q33]] Even worse, blending trace residues of scented detergent caps with food-grade milk HDPE lowers tensile toughness, forcing packagers back onto virgin petroleum pellets.
Lecturer: [[Q34]] Hoping to break quality decay, chemical startups promote pyrolysis—superheating mixed waste plastics past five hundred degrees inside oxygen-free reactors to crack molecules back into synthetic crude oil.
Lecturer: [[Q35]] Yet independent lifecycle audits caution that pyrolysis consumes steep thermal energy while losing roughly a third of feedstock carbon directly to process fuels or soot char.
Lecturer: [[Q36]] Meanwhile, extended producer responsibility legislation shifts real sorting expenses off cash-strapped local councils directly onto beverage and cosmetics giants—charging steep penalties on unrecyclable multi-layer foil pouches.
Lecturer: [[Q37]] Strikingly, northern European bottle deposit return schemes prove simple refundable twenty-cent deposits unlock return rates soaring past ninety-two percent clean uncontaminated streams.
Lecturer: [[Q38]] Separating PET drinks bottles at supermarket reverse-vending machines before mixed kerbside crushing avoids broken glass chips embedding straight into soft plastic flakes.
Lecturer: [[Q39]] Ultimately, engineers recognize recycling remains merely the outer safety net: standardized refillable glass crate networks eliminate single-use shredding altogether across regional dairies and breweries.
Lecturer: [[Q40]] True circular economics thus prioritizes durable mono-material packaging designed cleanly for disassembly rather than complex multi-resin laminates doomed from manufacture.`,
        questions: [
          {
            id: 'cd_listening_p19_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Physical plastic defect caused by repeated shredding and melting: snapped polymer ______',
            correctAnswer: 'CHAINS',
            explanation: 'Each mechanical melt snaps long polymer chains shorter.'
          },
          {
            id: 'cd_listening_p19_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Into which outdoor timber-substitute items are melted plastic bottles commonly downcycled?',
            correctAnswer: 'PARK BENCHES',
            explanation: 'Turned once into fleece fabric or park benches.'
          },
          {
            id: 'cd_listening_p19_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why do manufacturers revert to virgin oil pellets instead of mixed recycled resins?',
            options: [
              'A. Virgin pellets cost half as much per metric ton',
              'B. Trace detergent contaminants weaken recycled food-grade strength',
              'C. Customers reject off-white milk jugs at supermarkets',
              'D. Extruder nozzles jam on recycled caps'
            ],
            correctAnswer: 'B',
            explanation: 'Trace detergent cap residues lower tensile toughness.'
          },
          {
            id: 'cd_listening_p19_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Reactor condition required for 500°C pyrolysis cracking waste back into oil: ______-free',
            correctAnswer: 'OXYGEN',
            explanation: 'Heated past 500°C inside oxygen-free reactors.'
          },
          {
            id: 'cd_listening_p19_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'What drawback appears in independent lifecycle audits of plastic pyrolysis?',
            options: [
              'A. Toxic fumes escape reactor seals into towns',
              'B. Synthetic crude oil cannot run modern diesel trucks',
              'C. High energy input loses about one third of feedstock carbon to fuel and soot',
              'D. Reactors accept strictly sorted monochrome polymers'
            ],
            correctAnswer: 'C',
            explanation: 'Consumes heavy energy while losing a third of carbon to process fuels or char.'
          },
          {
            id: 'cd_listening_p19_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Producer responsibility rules penalize unrecyclable multi-layer ______ pouches directly.',
            correctAnswer: 'FOIL',
            explanation: 'Fines hit unrecyclable multi-layer foil pouches.'
          },
          {
            id: 'cd_listening_p19_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Return share regularly surpassed by 20-cent refundable bottle deposits: ______ percent',
            correctAnswer: 'NINETY-TWO',
            explanation: 'Return rates exceed ninety-two percent.'
          },
          {
            id: 'cd_listening_p19_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which contamination inside kerbside trucks does store reverse-vending prevent?',
            correctAnswer: 'BROKEN GLASS CHIPS',
            explanation: 'Prevents broken glass chips embedding into soft plastics.'
          },
          {
            id: 'cd_listening_p19_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Businesses bypassing single-use shredding via durable glass crates: dairies and ______',
            correctAnswer: 'BREWERIES',
            explanation: 'Used across regional dairies and breweries.'
          },
          {
            id: 'cd_listening_p19_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which design philosophy defines truly circular packaging according to the talk?',
            options: [
              'A. Thinner plastic films weighing under two grams',
              'B. Labeling bags clearly as home compostable',
              'C. Durable single-material vessels built cleanly for easy disassembly',
              'D. Exporting sorted plastic bales to high-heat incinerators'
            ],
            correctAnswer: 'C',
            explanation: 'Prioritizes durable mono-material design built for disassembly.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 20: Music Department Instrument Hire & Practice Room Booking
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p20',
    testNumber: 20,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 20: Music Department Instrument Hire & Practice Room Booking',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Music Department Instrument Hire & Practice Room Booking.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Reserving an Orchestral Cello & Practice Studio',
        audioScenario:
          'A music minor student phones the Conservatory Instrument Curator to rent a student-grade cello and set up weekly rehearsal room access.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Music Conservatory Instrument Vault]
Curator: Good morning, Conservatory Instrument Vault, Ben speaking. How can I assist you?
Student: Hi Ben, I passed the Symphony Orchestra audition last night on borrowed gear and need to arrange a semester instrument hire plus keypad practice access.
Curator: [[Q1]] Congratulations! Let me look up your student audition file—what is your surname? It is Castellan, spelled C-A-S-T-E-L-L-A-N.
Curator: [[Q2]] Got you, Ms. Castellan. We hold two full-size laminated conservatory cellos ready for rental at forty-eight pounds per academic term, including rosin and padded gig bag.
Student: Does that forty-eight-pound fee include bow re-hairing if horsehair stretches halfway through autumn concerts?
Curator: [[Q3]] Routine quarterly luthier bow maintenance is covered, though accidental bridge snaps caused by dropping cases carry a twenty-five-pound workshop excess.
Student: [[Q4]] Reasonable. Now, how do practice room bookings work on weekdays? Registered orchestra players get eight complimentary sixty-minute solo bookings per week using our online ConservatoryRoom booking calendar—peak slots between four and seven vanish three days early!
Student: [[Q5]] Which upstairs chambers contain tuned baby grand pianos alongside extra music stands for cello-piano duet rehearsals? Studio Rooms Nine and Eleven carry freshly tuned Steinway grands maintained by Mr. Thorne every alternate Monday.
Curator: [[Q6]] Wait—where should I store my bulky hard cello flight case during morning chemistry lectures across town so I do not lug it through rain? Rent an assigned vertical instrument locker on the Ground Cloister for ten pounds refundable deposit—yours would be Cabinet C-14.
Student: [[Q7]] Lifesaver! Wait—is the basement locker wing humidity-controlled during dry winter radiator weeks? Yes, digital steam humidifiers lock basement lockers at steady forty-eight percent humidity to stop spruce soundboards cracking.
Student: [[Q8]] Also, if my ensemble performs a Sunday afternoon recital offsite, do I need written curator permission before carrying hired conservatory instruments off campus grounds? Any offsite trip beyond university city boundaries requires submitting an insurance travel slip at Desk One forty-eight hours prior.
Curator: [[Q9]] Notice one quiet studio courtesy rule: never practice amplified electric bass guitars or brass trombones inside glass-partitioned Vocal Booths Four to Six, because heavy frequencies bleed straight through vocal condenser mics!
Student: [[Q10]] Understood cleanly! When can I swing by Vault Three to test both student cellos for bow weight balance? Pop over tomorrow afternoon at 15:20 carrying ticket ID MI-709.`,
        questions: [
          {
            id: 'cd_listening_p20_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Auditioned student surname: ______',
            correctAnswer: 'CASTELLAN',
            explanation: 'Spelled C-A-S-T-E-L-L-A-N.'
          },
          {
            id: 'cd_listening_p20_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Term rental fee for a full-size cello including rosin and bag: £ ______',
            correctAnswer: 'FORTY-EIGHT',
            explanation: 'Rental costs forty-eight pounds per term.'
          },
          {
            id: 'cd_listening_p20_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'What accidental breakage incurs a £25 repair workshop excess?',
            correctAnswer: 'BRIDGE SNAPS',
            explanation: 'Accidental bridge snaps carry a £25 excess.'
          },
          {
            id: 'cd_listening_p20_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Weekly solo rehearsal slots allowed for orchestra players: ______ hours',
            correctAnswer: 'EIGHT',
            explanation: 'Players get eight complimentary sixty-minute weekly bookings.'
          },
          {
            id: 'cd_listening_p20_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Technician maintaining studio grand pianos alternate Mondays: Mr. ______',
            correctAnswer: 'THORNE',
            explanation: 'Maintained by Mr. Thorne every alternate Monday.'
          },
          {
            id: 'cd_listening_p20_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Assigned vertical instrument cabinet number on Ground Cloister:',
            correctAnswer: 'C-14',
            explanation: 'Cabinet number C-14.'
          },
          {
            id: 'cd_listening_p20_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Instrument wood layer protected by 48% humidity control: ______ soundboards',
            correctAnswer: 'SPRUCE',
            explanation: 'Prevents dry spruce soundboards from cracking.'
          },
          {
            id: 'cd_listening_p20_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What must musicians do before taking hired cellos to an out-of-town recital?',
            options: [
              'A. File an insurance travel slip at Desk One 48 hours ahead',
              'B. Purchase temporary commercial rail luggage policies',
              'C. Leave a second student card as double collateral',
              'D. Request signed letters from the orchestra conductor'
            ],
            correctAnswer: 'A',
            explanation: 'Submit an insurance travel slip 48 hours prior.'
          },
          {
            id: 'cd_listening_p20_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why are brass trombones barred from Vocal Booths Four to Six?',
            options: [
              'A. Condensation valves drip water onto studio carpets',
              'B. Chairs inside Vocal Booths lack armrests',
              'C. Vocal booths lack reinforced brass music stands',
              'D. Powerful low-frequency tones bleed into sensitive singing mics'
            ],
            correctAnswer: 'D',
            explanation: 'Heavy frequencies bleed through into vocal condenser mics.'
          },
          {
            id: 'cd_listening_p20_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Appointment ticket ID for testing cellos tomorrow at 15:20: ______',
            correctAnswer: 'MI-709',
            explanation: 'Carry ticket ID MI-709.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Welcome to the Acoustic Recital Conservatory',
        audioScenario:
          'A music building manager explains acoustic shutters, rare harpsichord care, and evening security keyfob curfews to new first-year performers.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Recital Hall Briefing]
Manager: Good morning performers! Congratulations on entering the Conservatory—here is how our new acoustic building preserves pure tone and safeguards historic instruments.
Manager: [[Q11]] Glance up along the Main Concert Hall walls: motorized walnut banners extend downward for dry solo cello recitals and retract smoothly upward when full brass bands demand booming church warmth.
Manager: [[Q12]] Walk carefully past the glassed Keyboard Gallery housing our 1785 Flemish harpsichord—only senior harpsichord scholars holding red magnetic keys may lift its painted cedar lid.
Manager: [[Q13]] Notice every rehearsal corridor floor rests upon floating rubber isolation springs preventing deep pipe-organ rumbles from vibrating upstairs violin studios.
Manager: [[Q14]] Inside Solo Practice Pods, leave personal coat hooks uncluttered—never wedge heavy winter umbrellas beside wall thermostats because damp drips fool acoustic sensors!
Manager: [[Q15]] Musicians recording audition videos borrow portable stereo field recorders free from Technician Window B, paired with tripod mounts storing uncompressed WAV files straight onto personal SD cards.
Manager: [[Q16]] For sheet music libraries on Floor Three, return chamber orchestra bowings spotless—use light soft two-B graphite pencil marks rather than permanent ballpoint pen across shared string parts!
Manager: [[Q17]] On rainy winter nights, keep student rehearsal swipe-access active until eleven thirty; after midnight security patrols disarm practice doors automatically until six sharp.
Manager: [[Q18]] Every second Wednesday at one o'clock, our free Lunchtime Showcase lets chamber duos test ungraded program pieces in front of supportive peer listeners inside Chapel Hall.
Manager: [[Q19]] Beware outside the south courtyard fountain: wet moss forms silently over limestone terrace flags after rainstorms, so carry instrument cases cautiously using shoulder straps rather than sprinting!
Manager: [[Q20]] Pick up green rubber practice mute samplers from the brass basket beside the water dispenser right after applause.`,
        questions: [
          {
            id: 'cd_listening_p20_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Retractable acoustic features adjusting concert hall echo warmth: ______ banners',
            correctAnswer: 'WALNUT',
            explanation: 'Motorized walnut banners extend or retract to adjust resonance.'
          },
          {
            id: 'cd_listening_p20_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Antique 1785 keyboard reserved solely for red-key scholars: Flemish ______',
            correctAnswer: 'HARPSICHORD',
            explanation: 'Houses a 1785 Flemish harpsichord.'
          },
          {
            id: 'cd_listening_p20_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'What hidden floor layer blocks downstairs organ rumble reaching upstairs rooms?',
            correctAnswer: 'ISOLATION SPRINGS',
            explanation: 'Floors rest upon floating rubber isolation springs.'
          },
          {
            id: 'cd_listening_p20_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why must musicians avoid hanging wet umbrellas beside studio wall thermostats?',
            options: [
              'A. Mold spores stain porous acoustic wall plaster',
              'B. Damp drips confuse climate and humidity sensors',
              'C. Umbrellas scratch varnished oak practice doors',
              'D. Hallways lack electrical socket covers below hooks'
            ],
            correctAnswer: 'B',
            explanation: 'Damp drips fool delicate acoustic/climate sensors.'
          },
          {
            id: 'cd_listening_p20_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Uncompressed audio format captured by loaned field recorders: ______ files',
            correctAnswer: 'WAV',
            explanation: 'Recorders write uncompressed WAV files to SD cards.'
          },
          {
            id: 'cd_listening_p20_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Ensemble sheet music bowings must be marked solely in soft ______ rather than ballpoint pen.',
            correctAnswer: 'PENCIL',
            explanation: 'Use soft two-B graphite pencil marks only.'
          },
          {
            id: 'cd_listening_p20_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'At what late-night hour do student rehearsal card readers lock automatically?',
            correctAnswer: 'MIDNIGHT',
            explanation: 'Practice doors disarm automatically after midnight.'
          },
          {
            id: 'cd_listening_p20_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What happens inside Chapel Hall every alternate Wednesday at 1 PM?',
            options: [
              'A. Informal ungraded Lunchtime Showcase for peer performers',
              'B. Mandatory instrument tuning clinic by Mr. Thorne',
              'C. Live broadcast recordings for campus radio',
              'D. Baroque musicology guest seminars'
            ],
            correctAnswer: 'A',
            explanation: 'Lunchtime Showcase lets chamber duos test pieces informally.'
          },
          {
            id: 'cd_listening_p20_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Slippery hazard growing over wet south courtyard stones: ______',
            correctAnswer: 'MOSS',
            explanation: 'Wet moss covers limestone courtyard flags.'
          },
          {
            id: 'cd_listening_p20_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Complimentary item waiting beside the water dispenser: practice ______',
            correctAnswer: 'MUTE',
            explanation: 'Take green rubber practice mute samplers.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring Acoustic Fatigue in Student Practice Rooms',
        audioScenario:
          'Music acoustics postgraduates Elena and Marcus evaluate reverberation measurements across campus rehearsal pods with Prof. Richter.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Musical Acoustics Seminar]
Prof. Richter: Hello Elena and Marcus. Did your impulse-sound balloon pops confirm why brass students complain of ear ringing inside Basement Practice Row C?
Elena: [[Q21]] Dramatic confirmation! Bare concrete plaster walls reflected trumpet blasts past a hundred and four decibels, bouncing back for nearly one point eight seconds inside tiny six-square-metre cubicles.
Marcus: [[Q22]] Worse still, parallel facing walls created harsh fluttering metallic echoes—known acoustically as "slapback"—whenever woodwind players practiced quick staccato arpeggios.
Prof. Richter: Painful on delicate cochleas! Did draping ordinary heavy stage curtains eliminate ear strain without ruining natural violin resonance?
Elena: [[Q23]] Partial success—velvet drapes absorbed shrill upper frequencies nicely yet left booming bass standing waves shaking lower cello notes muddily around eighty hertz.
Prof. Richter: Textbook low-frequency modal bulge! How did you tame corner bass booms cheaply without swallowing room space?
Marcus: [[Q24]] Building triangular corner bass traps packed with dense rockwool slabs trimmed eighty-hertz mud down cleanly by nine decibels while leaving spacious wall faces open.
Prof. Richter: [[Q25]] Brilliant DIY physics! Remember when surveying conservatory students afterwards: separate daily total practice hours from instantaneous room brightness ratings in Questionnaire Section Two.
Elena: [[Q26]] Verified—classical guitarists adored ultra-dead dry chambers for hearing subtle fingernail buzz, whereas opera singers hated singing inside padded boxes feeling starved of natural vocal glow!
Prof. Richter: Vital artistic trade-off! Did you also measure ambient ventilator fan noise when studio radiators ran in January?
Marcus: [[Q27]] Yes—overhead air ducts hummed at forty-two decibels constantly!
Prof. Richter: [[Q28]] Good thing facilities throttled duct dampers smoothly before recital exams!
Elena: [[Q29]] For Friday’s acoustics department colloquium, should we bring live brass decibel readings or play recorded dry-versus-treated trumpet scales?
Prof. Richter: [[Q30]] Play back-to-back A-B audio scales directly on studio monitors—judges hear harsh flutter vanish faster in ten seconds than across twenty spreadsheet rows!`,
        questions: [
          {
            id: 'cd_listening_p20_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Floor size of noisy concrete Row C rehearsal cubicles: ______ square metres',
            correctAnswer: 'SIX',
            explanation: 'Tiny six-square-metre concrete cubicles.'
          },
          {
            id: 'cd_listening_p20_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Acoustic name for metallic echoes bouncing between parallel bare walls:',
            correctAnswer: 'SLAPBACK',
            explanation: 'Known acoustically as "slapback".'
          },
          {
            id: 'cd_listening_p20_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What acoustic flaw remained even after hanging thick velvet curtains?',
            options: [
              'A. Shrill flute harmonics bounced even louder',
              'B. Voices sounded muffled through closed glass doors',
              'C. Curtains damped violin overtones completely',
              'D. Deep bass standing waves around 80 Hz remained muddy'
            ],
            correctAnswer: 'D',
            explanation: 'Drapes left booming 80 Hz bass standing waves.'
          },
          {
            id: 'cd_listening_p20_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Dense porous mineral filler packed inside triangular corner bass traps: ______',
            correctAnswer: 'ROCKWOOL',
            explanation: 'Packed triangular traps with dense rockwool slabs.'
          },
          {
            id: 'cd_listening_p20_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Survey Section Two must split daily rehearsal duration from perceived room ______.',
            correctAnswer: 'BRIGHTNESS',
            explanation: 'Separate practice hours from room brightness ratings.'
          },
          {
            id: 'cd_listening_p20_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Which student group preferred ultra-dry non-echoing rehearsal booths?',
            options: [
              'A. French horn quartets blending wide chords',
              'B. Opera sopranos practicing resonant projection',
              'C. Classical guitarists listening for subtle fingernail buzz',
              'D. Jazz drummers adjusting brush tempo'
            ],
            correctAnswer: 'C',
            explanation: 'Classical guitarists liked ultra-dead rooms to hear fingernail buzz.'
          },
          {
            id: 'cd_listening_p20_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Decibel hum recorded from January overhead air vents before adjustment: ______ decibels',
            correctAnswer: 'FORTY-TWO',
            explanation: 'Vents hummed constantly at forty-two decibels.'
          },
          {
            id: 'cd_listening_p20_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which mechanical airway parts did facilities adjust to silence duct noise?',
            correctAnswer: 'DUCT DAMPERS',
            explanation: 'Facilities throttled duct dampers smoothly.'
          },
          {
            id: 'cd_listening_p20_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Instrument recorded before and after treatment for Friday’s demonstration: ______ scales',
            correctAnswer: 'TRUMPET',
            explanation: 'Play back-to-back dry vs treated trumpet scales.'
          },
          {
            id: 'cd_listening_p20_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Prof. Richter recommend live studio speaker comparisons over tables?',
            options: [
              'A. Colloquium rooms forbid dense text slides',
              'B. Audio scales expose flutter removal cleanly in ten seconds',
              'C. Brass musicians volunteered to perform behind screens',
              'D. Judges distrust computer decibel calibration logs'
            ],
            correctAnswer: 'B',
            explanation: 'Judges hear flutter vanish faster in ten seconds than reading spreadsheets.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Architecture of World-Famous Symphony Halls',
        audioScenario:
          'A musicology and architectural acoustics professor lectures on why nineteenth-century shoebox concert halls remain acoustic gold standards.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Concert Hall Acoustics Lecture]
Lecturer: Engineers armed with sleek supercomputers build billion-dollar arts palaces routinely, yet performers frequently whisper that historic Vienna or Boston venues sound mysteriously richer.
Lecturer: [[Q31]] Before 1900, physicists barely understood room acoustics; builders simply copied classic rectangular palace ballrooms—dubbed "shoebox halls"—like Vienna’s iconic Musikverein opened in 1870.
Lecturer: [[Q32]] At Harvard around 1895, young physicist Wallace Sabine revolutionized science while fixing an unbearably echoey Fogg lecture theater using ordinary auditorium seat cushions!
Lecturer: [[Q33]] Measuring decaying organ-pipe echoes by stopwatch overnight, Sabine unveiled the foundational formula linking room volume directly against surface sound absorption to define reverberation time.
Lecturer: [[Q34]] Why do narrow Victorian shoebox halls still enchant violinists? Parallel upright side walls bounce musical notes sideways cleanly straight toward human ears just twenty milliseconds behind stage sound!
Lecturer: [[Q35]] Those rapid lateral early reflections make listeners feel luxuriously enveloped inside a shimmering acoustic stream—whereas sweeping wide fan-shaped halls shoot sound away weakly toward rear carpets.
Lecturer: [[Q36]] Notice also the ornate golden statues, plaster columns, and coffered balcony niches lining antique walls: intricate carvings scatter harsh treble waves randomly rather than focusing jagged echoes into single dead seats.
Lecturer: [[Q37]] Meanwhile, hollow oak orchestra platforms mounted over deep cellar air chambers act essentially like giant cello soundboxes—amplifying warm double-bass vibrations upward smoothly beneath players’ boots.
Lecturer: [[Q38]] Modern seating cushions solve a tricky attendance dilemma: tightly upholstered wool velvet seats absorb precisely as much energy when sitting empty during cold rehearsals as when dressed listeners occupy every chair.
Lecturer: [[Q39]] Yet soaring urban real estate tempted 1960s developers toward giant three-thousand-seat fan arenas—predictably creating flat clinical auditoriums requiring costly suspended fiberglass clouds to salvage clarity.
Lecturer: [[Q40]] Today, acclaimed contemporary venues like Hamburg’s Elbphilharmonie blend intimate vineyard terraces with ten thousand custom algorithmic carved gypsum wall dimples—uniting digital math with timeless Viennese acoustic warmth.`,
        questions: [
          {
            id: 'cd_listening_p20_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Architectural nickname for classic narrow 1870s rectangular concert rooms: ______ halls',
            correctAnswer: 'SHOEBOX',
            explanation: 'Builders copied rectangular "shoebox halls".'
          },
          {
            id: 'cd_listening_p20_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'What everyday object did Wallace Sabine pile inside Harvard halls to test absorption?',
            correctAnswer: 'SEAT CUSHIONS',
            explanation: 'Sabine hauled in ordinary auditorium seat cushions.'
          },
          {
            id: 'cd_listening_p20_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Instrument pipe timed overnight by Wallace Sabine to derive reverberation math: ______ pipe',
            correctAnswer: 'ORGAN',
            explanation: 'Sabine timed decaying organ-pipe echoes by stopwatch.'
          },
          {
            id: 'cd_listening_p20_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'How do narrow upright side walls enrich orchestral violin clarity?',
            options: [
              'A. Absorbing excessive timpani vibration early',
              'B. Concentrating low tones solely toward central aisles',
              'C. Channeling cool air currents beneath ceilings',
              'D. Reflecting rich sideways notes toward listeners just 20 ms behind direct stage sound'
            ],
            correctAnswer: 'D',
            explanation: 'Lateral early reflections arrive 20 milliseconds behind stage notes, wrapping listeners in sound.'
          },
          {
            id: 'cd_listening_p20_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Architectural layout criticized for shooting musical sound away from central ears: ______-shaped halls',
            correctAnswer: 'FAN',
            explanation: 'Wide fan-shaped halls direct sideways energy weakly.'
          },
          {
            id: 'cd_listening_p20_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Antique plaster statues and balcony columns ______ harsh treble waves cleanly across halls.',
            correctAnswer: 'SCATTER',
            explanation: 'Intricate carvings scatter treble waves randomly.'
          },
          {
            id: 'cd_listening_p20_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which warm low section gains natural acoustic boost from hollow wooden platforms?',
            correctAnswer: 'DOUBLE-BASS',
            explanation: 'Platforms act like giant soundboxes boosting double-bass vibrations.'
          },
          {
            id: 'cd_listening_p20_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why are concert hall chairs padded with plush wool velvet?',
            options: [
              'A. Empty seats absorb equal acoustic sound as seated human audiences',
              'B. Velvet resists fabric staining over fifty-year spans',
              'C. Cushions mute creaking floorboards underneath rows',
              'D. Fire ordinances require untreated thick wool fibers'
            ],
            correctAnswer: 'A',
            explanation: 'Velvet seats match human acoustic absorption cleanly during empty rehearsals.'
          },
          {
            id: 'cd_listening_p20_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Overhead retrofit hung inside huge 1960s fan arenas to rescue clarity: fiberglass ______',
            correctAnswer: 'CLOUDS',
            explanation: 'Costly suspended fiberglass clouds were hung to rescue clarity.'
          },
          {
            id: 'cd_listening_p20_lq40',
            number: 40,
            type: 'fill_blank',
            questionText: 'Carved material forming 10,000 algorithmic acoustic wall dimples in Hamburg: ______',
            correctAnswer: 'GYPSUM',
            explanation: 'Custom algorithmic carved gypsum wall panels.'
          }
        ]
      }
    ]
  })
];
