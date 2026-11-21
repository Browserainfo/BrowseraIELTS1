/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_05: TestItem[] = [
  // =========================================================================
  // PRACTICE 21: Psychology Department Research Experiment Participation
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p21',
    testNumber: 21,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 21: Psychology Department Research Experiment Participation',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Psychology Department Research Experiment Participation.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Enrolling in a Cognitive Memory Study',
        audioScenario:
          'A first-year undergraduate phones the Behavioral Neuroscience Lab coordinator to book an experiment slot and verify participation credit.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Psychology Research Booking Desk]
Assistant: Good afternoon, Perception & Memory Lab, Noah speaking. How may I assist?
Student: Hi Noah, I signed up on the department board to join your visual attention study and wanted to book my test hour.
Assistant: [[Q1]] Great! Let me verify your participant record first—may I take your surname? It is Gallagher—wait, no, spelled C-H-A-M-B-E-R-L-A-I-N, Chamberlain.
Assistant: [[Q2]] Got that, Chamberlain! Next, check visual eligibility: do you wear prescription contact lenses or tinted colour-blind glasses? Plain reading lenses are welcome, though tinted migraine filters disqualify eye-tracker cameras—no, I have twenty-twenty vision with zero glasses.
Student: [[Q3]] Perfect! And will we receive course credit or voucher reimbursement? External student volunteers choose either two undergraduate psychology credits or a fifteen-pound bookshop voucher emailed straight after session wrap-up.
Assistant: [[Q4]] Bookshop voucher sounds ideal. How long does a full computer session run inside the booth? Expect sixty-five minutes total, broken into three twenty-minute visual blocks with short eye-rest breaks.
Student: [[Q5]] Does coffee before morning testing distort reaction-speed scores? Please skip strong espresso or energy drinks within four hours beforehand, since caffeine spikes blink rates artificially on infrared cameras.
Assistant: [[Q6]] Good tip! Can I book Thursday afternoon at 14:40 inside Testing Cubicle Five on Floor Two of Sherrington Hall?
Student: [[Q7]] Thursday at 14:40 is free! Wait—how should I alert the team if an unexpected lab seminar forces a late cancellation? Text our dedicated lab cancellation pager at least twelve hours prior so standby volunteers take your cube cleanly.
Assistant: [[Q8]] Do I need to read complex neuroscience instructions beforehand, or do researchers brief volunteers on arrival? Arrive five minutes early; your experimenter gives hands-on practice screen trials and signs confidential consent papers right beside the monitor.
Student: [[Q9]] Wait—are participants filmed continuously during facial-expression checks? No facial photos leave encrypted lab disks, and this particular task logs strictly infrared pupil dilation curves and keyboard spacebar reaction times.
Assistant: [[Q10]] Before signing off, note your lab door keypad access PIN: enter PB-118 cleanly when walking up to Cubicle Five.`,
        questions: [
          {
            id: 'cd_listening_p21_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Participant surname: ______',
            correctAnswer: 'CHAMBERLAIN',
            explanation: 'Spelled C-H-A-M-B-E-R-L-A-I-N.'
          },
          {
            id: 'cd_listening_p21_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Visual device disqualifying infrared eye-tracking: tinted ______ glasses',
            correctAnswer: 'MIGRAINE',
            explanation: 'Tinted migraine filters interfere with eye-tracker cameras.'
          },
          {
            id: 'cd_listening_p21_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Cash equivalent offered in lieu of psychology credits: £ ______ bookshop voucher',
            correctAnswer: 'FIFTEEN',
            explanation: 'Volunteers can opt for a fifteen-pound bookshop voucher.'
          },
          {
            id: 'cd_listening_p21_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Total appointment duration inside the testing booth: ______ minutes',
            correctAnswer: 'SIXTY-FIVE',
            explanation: 'Sessions run sixty-five minutes total.'
          },
          {
            id: 'cd_listening_p21_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Hours beforehand to avoid strong coffee and energy drinks: ______ hours',
            correctAnswer: 'FOUR',
            explanation: 'Skip caffeine within four hours prior.'
          },
          {
            id: 'cd_listening_p21_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Building housing Testing Cubicle Five on Floor Two: ______ Hall',
            correctAnswer: 'SHERRINGTON',
            explanation: 'Located in Sherrington Hall.'
          },
          {
            id: 'cd_listening_p21_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Minimum advance hours required to text cancellations:',
            correctAnswer: 'TWELVE HOURS',
            explanation: 'Text the cancellation pager at least twelve hours prior.'
          },
          {
            id: 'cd_listening_p21_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What happens immediately upon arriving five minutes early?',
            options: [
              'A. A written vision quiz checks colour blindness',
              'B. Experimenters walk through practice trials and consent forms',
              'C. Technicians clean keyboard switches with alcohol',
              'D. Participants receive cash vouchers upfront'
            ],
            correctAnswer: 'B',
            explanation: 'Experimenters explain practice trials and guide consent signatures.'
          },
          {
            id: 'cd_listening_p21_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Which two quantitative measurements are actually saved during the task?',
            options: [
              'A. Facial smile footage and skin pulse rate',
              'B. Spoken memory recalls and vocal pitch',
              'C. Pupil dilation curves and spacebar reaction timing',
              'D. Handwritten survey scores and heart beat graphs'
            ],
            correctAnswer: 'C',
            explanation: 'Logs infrared pupil dilation curves and spacebar reaction timing.'
          },
          {
            id: 'cd_listening_p21_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Door keypad access code for Testing Cubicle Five: ______',
            correctAnswer: 'PB-118',
            explanation: 'Use PIN PB-118.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Orientation for Volunteer Experiment Panelists',
        audioScenario:
          'A senior behavioral lab manager explains participant rights, debriefing rules, and MRI suite safety to incoming university students.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Psychology Volunteer Orientation]
Manager: Welcome undergraduates! Over four thousand student volunteers help our department investigate attention, speech perception, and sleep habits annually.
Manager: [[Q11]] Fundamental principle number one: voluntary consent remains strictly ongoing—meaning you may walk out mid-task anytime without explaining why or losing promised travel vouchers!
Manager: [[Q12]] Walk down Corridor North and notice our bright quiet waiting alcoves stocked with complimentary herbal infusions and charging lockers—keep smartphones completely inside Faraday lockers during actual EEG cap sessions!
Manager: [[Q13]] Anyone scheduling brain-imaging scans inside the Basement Magnet Suite completes a rigorous metallic screening sheet covering dental implants, old braces, or stray metallic welding flecks.
Manager: [[Q14]] Note that during auditory speech-noise listening trials, thick acoustic double-doors drop corridor sound cleanly below twenty decibels—press the brass emergency buzzer beside your elbow immediately if claustrophobia ever strikes!
Manager: [[Q15]] For infants visiting our Toddler Play Lab downstairs on Wednesday mornings, carpeted floor puzzles undergo non-toxic fragrance-free steam sterilization directly between every family session.
Manager: [[Q16]] After certain attention illusions require hiding real hypothesis goals temporarily to avoid biased guessing, ethics rules mandate a detailed five-minute face-to-face debrief before departure.
Manager: [[Q17]] Remember also: first-year undergraduates completing research credits via our online SONA scheduling hub may substitute short two-page journal article summaries if medical conditions prevent lab participation.
Manager: [[Q18]] Check noticeboards beside the lift lobby before November fifth for paid longitudinal sleep diary cohorts paying eighty pounds for wearing actigraphy watches cleanly over fourteen straight nights!
Manager: [[Q19]] If you ever feel uneasy about a study’s handling after leaving a booth, email our Independent Departmental Ethics Ombudsperson directly—their confidential address sits on every laminated corridor badge.
Manager: [[Q20]] Grab an almond snack bar and printed participant ethics passport from the wooden bowl beside Exit Door Three!`,
        questions: [
          {
            id: 'cd_listening_p21_lq11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'What happens if a volunteer stops an experiment halfway through?',
            options: [
              'A. Credits are prorated according to minutes completed',
              'B. They must reschedule within seven days to retain vouchers',
              'C. They keep promised reimbursement without needing to justify leaving',
              'D. Course tutors receive an automated withdrawal notice'
            ],
            correctAnswer: 'C',
            explanation: 'Consent is strictly ongoing; volunteers withdraw anytime without losing vouchers.'
          },
          {
            id: 'cd_listening_p21_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Lockers holding mobile phones safely clear of EEG headsets: ______ lockers',
            correctAnswer: 'FARADAY',
            explanation: 'Leave phones inside Faraday lockers during EEG sessions.'
          },
          {
            id: 'cd_listening_p21_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which hidden dental hardware must be disclosed prior to MRI magnet scans?',
            correctAnswer: 'DENTAL IMPLANTS',
            explanation: 'Screening covers metallic dental implants, braces, or flecks.'
          },
          {
            id: 'cd_listening_p21_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Fixture located by the participant elbow inside booths in case of discomfort: brass ______',
            correctAnswer: 'BUZZER',
            explanation: 'Press the brass emergency buzzer beside your elbow.'
          },
          {
            id: 'cd_listening_p21_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Toddler Play Lab floor puzzles undergo chemical-free ______ cleaning between family visits.',
            correctAnswer: 'STEAM',
            explanation: 'Puzzles undergo fragrance-free steam sterilization.'
          },
          {
            id: 'cd_listening_p21_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Post-task explanation required when tasks withhold true hypotheses initially: face-to-face ______',
            correctAnswer: 'DEBRIEF',
            explanation: 'Ethics rules require a five-minute debrief.'
          },
          {
            id: 'cd_listening_p21_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'What academic assignment substitutes for in-person lab credits when needed?',
            correctAnswer: 'ARTICLE SUMMARIES',
            explanation: 'Students may write two-page journal article summaries.'
          },
          {
            id: 'cd_listening_p21_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Payment offered to sleep diary participants wearing watches for 14 nights: £ ______',
            correctAnswer: 'EIGHTY',
            explanation: 'Paid sleep cohort awards eighty pounds.'
          },
          {
            id: 'cd_listening_p21_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Where can students find contact details for the Independent Ethics Ombudsperson?',
            options: [
              'A. Printed on every laminated corridor hall badge',
              'B. Posted inside the university student union magazine',
              'C. Sent inside confirmation vouchers two weeks later',
              'D. Stored inside SONA online FAQ links only'
            ],
            correctAnswer: 'A',
            explanation: 'Their confidential address is printed on every laminated corridor badge.'
          },
          {
            id: 'cd_listening_p21_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Booklet placed alongside snacks beside Exit Door Three: ethics ______',
            correctAnswer: 'PASSPORT',
            explanation: 'Pick up a printed participant ethics passport.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Demand Characteristics in Social Psychology Trials',
        audioScenario:
          'Psychology undergraduates Claire and Omar discuss hidden bias artifacts inside smartphone notification studies with supervisor Dr. Klein.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Experimental Methods Seminar]
Dr. Klein: Come in Claire and Omar. How clean were response curves from your first-year smartphone interruption trial?
Claire: [[Q21]] Embarrassingly skewed! Nearly a third of student volunteers noticed our research poster headline mentioning "phone addiction," prompting them to hide phones silently in bags instead of acting naturally!
Omar: [[Q22]] Textbook observer awareness—worse still, morning sessions tested cheerful paid volunteers while afternoon slots drew exhausted credits-desperate students rushing right before Friday deadlines!
Dr. Klein: Crucial sample timing trap! How can you camouflage study purpose authentically without violating ethics honesty rules?
Claire: [[Q23]] Re-titling study portals broadly as "Everyday Student Focus Check" alongside dummy puzzle tasks keeps participants unaware we time subtle glance intervals toward silenced screens!
Dr. Klein: [[Q24]] Neat cover task—just ensure full debrief disclosure runs clearly afterwards. Did keyboard reaction variances differ noticeably across quiet desks versus bustling café booths?
Omar: [[Q25]] Huge spread! Ambient espresso machine hisses slowed word-recall accuracy twelve percent even among self-confessed frequent coffeehouse studiers.
Dr. Klein: [[Q26]] Control that caffeine timing cleanly too—yesterday Omar forgot logging whether espresso-drinker subgroups drank tea prior to booth check-ins.
Claire: [[Q27]] Right—we updated intake sheets to timestamp exact hours since last hot drink alongside self-reported sleep hours.
Omar: [[Q28]] One tricky ethics headache remains: when sharing anonymized anonymized eye-blink Excel tables online, could unique combinations of birthdate plus rare major accidentally reveal a specific undergraduate?
Dr. Klein: [[Q29]] Yes! Replace exact majors with broad faculty bands and strip ages into five-year cohorts before uploading data to Open Science repositories.
Claire: [[Q30]] Smart safety step—we will finalize new de-identified dummy tables by tomorrow noon ahead of ethics committee review.`,
        questions: [
          {
            id: 'cd_listening_p21_lq21',
            number: 21,
            type: 'short_answer',
            questionText: 'Which recruitment poster phrase inadvertently caused volunteers to behave artificially?',
            correctAnswer: 'PHONE ADDICTION',
            explanation: 'Seeing "phone addiction" led volunteers to hide phones unnaturally.'
          },
          {
            id: 'cd_listening_p21_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'What motivational distortion split morning and Friday-afternoon participants?',
            options: [
              'A. Afternoon students held smartphones with low battery charges',
              'B. Morning tutors dismissed lectures fifteen minutes early',
              'C. Booth overhead bulbs flickered later in the day',
              'D. Relaxed paid participants came mornings while credit-rushed students crowded Friday afternoons'
            ],
            correctAnswer: 'D',
            explanation: 'Morning paid guests differed from exhausted Friday credit-seekers.'
          },
          {
            id: 'cd_listening_p21_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Decoy tasks added alongside neutral title to mask study focus: ______ tasks',
            correctAnswer: 'PUZZLE',
            explanation: 'Dummy puzzle tasks masked subtle screen glance measurements.'
          },
          {
            id: 'cd_listening_p21_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Mandatory post-study explanation step balancing temporary mild concealment: ______',
            correctAnswer: 'DEBRIEF',
            explanation: 'Full debrief disclosure runs clearly afterward.'
          },
          {
            id: 'cd_listening_p21_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Background coffeehouse espresso noise reduced word-recall performance by ______ percent.',
            correctAnswer: 'TWELVE',
            explanation: 'Espresso machine hisses cut word-recall accuracy twelve percent.'
          },
          {
            id: 'cd_listening_p21_lq26',
            number: 26,
            type: 'short_answer',
            questionText: 'Which common beverage did Omar overlook recording during early booth intakes?',
            correctAnswer: 'TEA',
            explanation: 'Forgot logging whether subgroups drank tea.'
          },
          {
            id: 'cd_listening_p21_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Additional daily recovery detail recorded on revised intake checklists: ______ hours',
            correctAnswer: 'SLEEP',
            explanation: 'Logged hours since last drink alongside sleep hours.'
          },
          {
            id: 'cd_listening_p21_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'What privacy risk threatens public anonymized spreadsheets?',
            options: [
              'A. Commercial advertisers scrape participant email domains',
              'B. Combining rare university majors and exact birthdates might identify students',
              'C. Typographical notes reveal booth numbers accidentally',
              'D. Spreadsheets retain deleted edit histories'
            ],
            correctAnswer: 'B',
            explanation: 'Unique birthdate plus rare major combinations risk re-identification.'
          },
          {
            id: 'cd_listening_p21_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Broad anonymized substitute replacing exact student degree majors: ______ bands',
            correctAnswer: 'FACULTY',
            explanation: 'Replace exact majors with broad faculty bands.'
          },
          {
            id: 'cd_listening_p21_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Target deadline tomorrow noon for finalized de-identified tables: ______ review',
            correctAnswer: 'COMMITTEE',
            explanation: 'Ahead of ethics committee review.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Replication Crisis & Pre-Registered Science',
        audioScenario:
          'A methodology professor lectures on how failed replication checks reshaped statistical rigor and data transparency in modern psychology.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Psychological Methodology Lecture]
Lecturer: Around 2011, experimental psychology weathered an agonizing credibility earthquake whose reforms have since reshaped clinical medicine and behavioral economics alike.
Lecturer: [[Q31]] For decades, academic journals prized dazzling counterintuitive "eureka" findings—quietly burying dull negative null trials inside unexamined wooden office filing cabinets, a distortion dubbed the file-drawer effect.
Lecturer: [[Q32]] Under intense pressure to publish positive statistical results under the classic five-percent threshold, well-meaning researchers occasionally tinkered endlessly with sample cutoffs—a subtle trap known as p-hacking.
Lecturer: [[Q33]] Alarm bells rang loudly in 2015 when a monumental international consortium attempted repeating one hundred textbook peer-reviewed studies under identical conditions—succeeding clearly in scarcely forty percent!
Lecturer: [[Q34]] Crucially, tiny sample sizes of eighteen or twenty undergraduates lacked statistical muscle, yielding wild random noise spikes mistaken for genuine human mental laws.
Lecturer: [[Q35]] Furthermore, authors routinely invented neat post-hoc explanations after glimpsing noisy tables, retrofitting clever hypotheses as though predicted firmly beforehand!
Lecturer: [[Q36]] Psychology responded boldly by championing Registered Reports—where editorial boards commit to publishing studies based strictly on watertight experimental design BEFORE single data rows are collected.
Lecturer: [[Q37]] Locked public study pre-registrations timestamp exact primary outcomes, eliminating sneaky mid-trial goalpost shifts when messy numbers arrive.
Lecturer: [[Q38]] Equally transformative are collaborative multi-lab networks uniting sixty global universities to test cross-cultural memory effects across ten thousand diverse speakers rather than fifty campus freshmen.
Lecturer: [[Q39]] Critics occasionally worry strict pre-registration chills playful accidental discovery, yet transparent labels cleanly let scientists publish serendipitous exploratory clues without faking confirmatory certainty.
Lecturer: [[Q40]] Today, sharing raw open code alongside null findings builds far sturdier scientific foundations than polished sensational claims built upon brittle tiny samples.`,
        questions: [
          {
            id: 'cd_listening_p21_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Informal term describing journals hiding dull null experiments unpublished: ______ effect',
            correctAnswer: 'FILE-DRAWER',
            explanation: 'Termed the file-drawer effect.'
          },
          {
            id: 'cd_listening_p21_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'What questionable practice occurs when analysts adjust cutoffs repeatedly to hit 5% significance?',
            correctAnswer: 'P-HACKING',
            explanation: 'Endless cutoff tinkering is called p-hacking.'
          },
          {
            id: 'cd_listening_p21_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Share of 100 landmark studies replicated cleanly in 2015 consortium trials: ______ percent',
            correctAnswer: 'FORTY',
            explanation: 'Replications succeeded clearly in barely forty percent.'
          },
          {
            id: 'cd_listening_p21_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why did classic experiments with twenty college volunteers mislead researchers?',
            options: [
              'A. Tiny underpowered samples mistook random swings for reliable truths',
              'B. Student participants guessed hypotheses ahead of tests',
              'C. Undergraduates scored differently from older adults',
              'D. Manual stopwatches introduced human rounding errors'
            ],
            correctAnswer: 'A',
            explanation: 'Tiny sample sizes produced noisy spikes mistaken for laws.'
          },
          {
            id: 'cd_listening_p21_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Retrofitting neat stories after seeing surprise results is known as ______ explanation.',
            correctAnswer: 'POST-HOC',
            explanation: 'Authors invented tidy post-hoc explanations after spotting noise.'
          },
          {
            id: 'cd_listening_p21_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Journal format approving publication strictly before any laboratory data runs: Registered ______',
            correctAnswer: 'REPORTS',
            explanation: 'Editors review Registered Reports on design prior to collecting data.'
          },
          {
            id: 'cd_listening_p21_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'What deceitful mid-trial research behavior do timestamped registrations block?',
            correctAnswer: 'GOALPOST SHIFTS',
            explanation: 'Eliminates sneaky mid-trial goalpost shifts.'
          },
          {
            id: 'cd_listening_p21_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How do global multi-lab research networks overcome regional bias?',
            options: [
              'A. Running automatic online browser games only',
              'B. Excluding undergraduate students entirely',
              'C. Doubling monetary cash prizes per participant',
              'D. Testing ten thousand varied participants across sixty global universities'
            ],
            correctAnswer: 'D',
            explanation: 'Sixty universities test diverse cross-cultural cohorts.'
          },
          {
            id: 'cd_listening_p21_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Honest label preserving unexpected discoveries transparently without hype: ______ clues',
            correctAnswer: 'EXPLORATORY',
            explanation: 'Label surprise insights clearly as exploratory clues.'
          },
          {
            id: 'cd_listening_p21_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What takeaway defines stronger modern behavioral science in the conclusion?',
            options: [
              'A. Rejecting any finding with subtle effect margins',
              'B. Restricting neuroscience exclusively to brain imaging studies',
              'C. Sharing raw scripts and null findings openly over flashy small claims',
              'D. Requiring journal peers to run identical tests first'
            ],
            correctAnswer: 'C',
            explanation: 'Open raw code and null findings build sturdier science.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 22: Architecture Field Study: Historical City Walking Tour
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p22',
    testNumber: 22,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 22: Architecture Field Study: Historical City Walking Tour',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Architecture Field Study: Historical City Walking Tour.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Reserving an Architectural Sketching Walk',
        audioScenario:
          'A design student telephones the Historic Civic Trust to book a Saturday heritage walking study tour and request special interior access.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Civic Heritage Walks Booking]
Guide: Good morning, Guildhall Architectural Walks, Simon speaking. How can I help?
Student: Hello Simon, I am taking an urban restoration studio and want to reserve a spot on Saturday’s Georgian stonework walking field trip.
Guide: [[Q1]] Splendid timing—two spaces remain open! May I record your surname on the Saturday register? Yes, it is Whitaker—no, sorry, Alderson, spelled A-L-D-E-R-S-O-N.
Guide: [[Q2]] Noted, Alderson. Our morning walk inspects Georgian merchant townhouses and cast-iron market arcades, departing promptly at nine fifteen from beside the Brass Fountain on Cathedral Green.
Student: What is the student concession price, and does it include entry inside the closed Merchant Guildhall courtyard?
Guide: [[Q3]] Full adult tickets cost twenty-two pounds, while student badge holders pay thirteen pounds fifty—covering special keyholder access inside Merchant Guildhall’s curved stair landing.
Student: [[Q4]] Worth every penny! Are tripod sketches or watercolor pads welcome along pavements, or does the trust restrict stopping times? Hand-drawn pocket sketchbooks and graphite pencils are warmly encouraged during ten-minute façade stops, though folding stools block narrow shop pavements.
Guide: [[Q5]] Remember to pack a compact folding windbreaker—wind whistles sharply down Limestone Street alleys even under bright sunshine!
Student: [[Q6]] Understood. Do guides use portable radio earpieces along noisy bus streets so back-row walkers catch masonry explanations cleanly? Yes, every guest collects a sanitized single-ear FM receiver clipped comfortably onto coat collars—just bring wired personal three-millimetre earphones if preferred.
Guide: [[Q7]] Notice one structural conservation alert: inside St. Barnabas Church cloister, heavy wooden scaffolding protects newly repointed sandstone arches, skipping nave entry temporarily this fortnight.
Student: [[Q8]] Will we still see early Victorian industrial cast-iron warehouse columns? Yes, we wrap up around 11:45 beneath the Glass Canopy Corn Exchange where artisan bakers sell hot cardamom buns afterwards.
Guide: [[Q9]] Should torrential rain strike Saturday morning, check our Twitter/portal status banner at eight sharp—heavy storms shift the lecture indoors into Old Chapter House using archival lantern slides instead of refunds.
Student: [[Q10]] Thanks Simon! How should I finalize my discounted ticket online before tonight’s cutoff? Enter student booking voucher code ARCH-207 at checkout.`,
        questions: [
          {
            id: 'cd_listening_p22_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Participant surname: ______',
            correctAnswer: 'ALDERSON',
            explanation: 'Spelled A-L-D-E-R-S-O-N.'
          },
          {
            id: 'cd_listening_p22_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Departure gathering landmark on Cathedral Green: Brass ______',
            correctAnswer: 'FOUNTAIN',
            explanation: 'Departs from beside the Brass Fountain.'
          },
          {
            id: 'cd_listening_p22_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Discounted student walking tour fee:',
            correctAnswer: 'THIRTEEN POUNDS FIFTY',
            explanation: 'Student badge holders pay thirteen pounds fifty.'
          },
          {
            id: 'cd_listening_p22_lq4',
            number: 4,
            type: 'multiple_choice',
            questionText: 'Why are folding sketching stools discouraged on the Saturday tour?',
            options: [
              'A. Cobblestones tip narrow metal legs easily',
              'B. Stools obstruct pedestrian passage on narrow shopping pavements',
              'C. Moisture from wet streets rusts iron frames',
              'D. Guildhall carpets ban metal furniture tips'
            ],
            correctAnswer: 'B',
            explanation: 'Folding stools block narrow shop pavements.'
          },
          {
            id: 'cd_listening_p22_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Chilly narrow avenue noted for strong wind gusts: ______ Street',
            correctAnswer: 'LIMESTONE',
            explanation: 'Wind gusts sharply down Limestone Street.'
          },
          {
            id: 'cd_listening_p22_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Audio hardware provided to ensure commentary stays clear near traffic: ______ receiver',
            correctAnswer: 'FM',
            explanation: 'Guests collect single-ear FM radio receivers.'
          },
          {
            id: 'cd_listening_p22_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'What restoration barrier temporarily restricts nave access at St. Barnabas Church?',
            correctAnswer: 'WOODEN SCAFFOLDING',
            explanation: 'Heavy wooden scaffolding shields repointed sandstone arches.'
          },
          {
            id: 'cd_listening_p22_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Covered Victorian hall where the tour ends at 11:45: ______ Exchange',
            correctAnswer: 'CORN',
            explanation: 'Ends beneath the Glass Canopy Corn Exchange.'
          },
          {
            id: 'cd_listening_p22_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What happens if heavy rain strikes on Saturday morning?',
            options: [
              'A. Guides distribute waterproof ponchos at Cathedral Green',
              'B. Tickets convert into shop gift vouchers',
              'C. Bookings roll automatically to Sunday afternoon',
              'D. The talk moves indoors to Old Chapter House with archival slides'
            ],
            correctAnswer: 'D',
            explanation: 'Heavy storms move the session indoors to Old Chapter House.'
          },
          {
            id: 'cd_listening_p22_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Student checkout discount code: ______',
            correctAnswer: 'ARCH-207',
            explanation: 'Enter voucher code ARCH-207.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Walkthrough of the Mercers Market Quarter',
        audioScenario:
          'A conservation architect introduces undergraduate field students to historic street paving, facade brickwork, and adaptive loft conversions.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Mercers Quarter Street Lecture]
Architect: Gather cleanly under the iron archway out of scooter lanes everyone! Look upward carefully as we inspect four centuries of urban stone adaptation along Mercers Lane.
Architect: [[Q11]] Glance first below your boots: weathered bluish granite cobbles remain grooved intentionally along cart ramps so heavy Victorian brewery drays never slid backwards during icy dawns.
Architect: [[Q12]] Facing east stands the 1790 Wool Factor Warehouse—spot why upper attic loft windows shrink progressively narrower above ground arches: rising Georgia brick window taxes penalized extra glass panes!
Architect: [[Q13]] Notice how modern conservation masons rebuilt soft crumbling lime mortar joints using breathable putty rather than rigid grey Portland cement, which otherwise locks rainwater behind red bricks until frost shatters faces cleanly off!
Architect: [[Q14]] Peek inside the alley beside Number Fourteen: cast-iron corner bollard cannons were literally forged from retired naval ordnance buried muzzle-down to shield plaster walls against runaway wagon hubs.
Architect: [[Q15]] Overhead, notice gleaming bronze rain gutters along the Corn Guild cornice—modern zinc replacements look tinny, whereas hand-soldered copper weatherings patina smoothly into moss green over twenty winters.
Architect: [[Q16]] Walking past the sunlit Clocktower arcade reveals one classic 1980s conservation blunder: glossy tinted mirror-glass infill clashed painfully against warm honey-toned sandstone pillars!
Architect: [[Q17]] Today’s planning guidelines demand "quietly reversible modern inserts," letting sleek glass café canopies bolt gently onto hidden steel sleeves without chiseling historic lintels.
Architect: [[Q18]] Check small oval blue ceramic plaques fixed above door lintels: green numerals mark seventeenth-century merchant fire-insurance guilds guaranteeing private hose pumps responded quickly only to paying subscribers!
Architect: [[Q19]] Around the square corner sits our showcase adaptive reuse mill, converting smoky nineteenth-century flax weaving sheds into zero-carbon architectural student co-working studios heated passively by deep river water pumps.
Architect: [[Q20]] Sketch two contrasting roof drainage spouts cleanly inside your field pads during the next ten minutes before reconvening beside the bronze weighbridge plaque!`,
        questions: [
          {
            id: 'cd_listening_p22_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Historic horse-drawn vehicle saved from icy slipping by grooved blue cobbles: brewery ______',
            correctAnswer: 'DRAYS',
            explanation: 'Grooved cobbles kept Victorian brewery drays from sliding.'
          },
          {
            id: 'cd_listening_p22_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which 18th-century fiscal policy caused upper townhouse panes to shrink smaller?',
            correctAnswer: 'WINDOW TAXES',
            explanation: 'Georgian window taxes penalized extra glass panes.'
          },
          {
            id: 'cd_listening_p22_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why do restoration masons reject rigid Portland cement on historic brick walls?',
            options: [
              'A. Cement traps moisture inside walls, shattering bricks during frost',
              'B. Grey mortar dries pale against warm clay tones',
              'C. Lime putty hardens four times faster in winter rain',
              'D. Heritage statutes restrict industrial sand sources'
            ],
            correctAnswer: 'A',
            explanation: 'Rigid cement locks moisture behind faces until frost shatters bricks.'
          },
          {
            id: 'cd_listening_p22_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Retired military objects buried upright as cast-iron wall corner protectors: naval ______',
            correctAnswer: 'ORDNANCE',
            explanation: 'Forged from retired naval ordnance buried muzzle-down.'
          },
          {
            id: 'cd_listening_p22_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Colour acquired gradually by traditional weathered copper gutters over twenty years: moss ______',
            correctAnswer: 'GREEN',
            explanation: 'Hand-soldered copper patinas into moss green.'
          },
          {
            id: 'cd_listening_p22_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'A regrettable 1980s Clocktower infill inserted glossy ______ glass against sandstone pillars.',
            correctAnswer: 'MIRROR-GLASS',
            explanation: 'Tinted mirror-glass clashed with honey-toned sandstone.'
          },
          {
            id: 'cd_listening_p22_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Which mounting hardware lets sleek canopies attach cleanly without chiseling old stone?',
            correctAnswer: 'STEEL SLEEVES',
            explanation: 'Bolted smoothly onto hidden steel sleeves.'
          },
          {
            id: 'cd_listening_p22_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What did historic green-numbered oval door plaques signify?',
            options: [
              'A. Master stone carver trade union workshops',
              'B. Merchant properties covered by private fire-brigade insurance',
              'C. Houses exempt from royal municipal window taxes',
              'D. Coaching inns approved for mail delivery horses'
            ],
            correctAnswer: 'B',
            explanation: 'Marked private fire-insurance subscribers protected by company pumps.'
          },
          {
            id: 'cd_listening_p22_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Renewable heat source warming the converted textile weaving studios: ______ water',
            correctAnswer: 'RIVER',
            explanation: 'Heated by deep river water pumps.'
          },
          {
            id: 'cd_listening_p22_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Gathering spot after sketching roof drainage spouts for ten minutes: bronze ______ plaque',
            correctAnswer: 'WEIGHBRIDGE',
            explanation: 'Reconvene beside the bronze weighbridge plaque.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring Thermal Comfort Inside Heritage Stone Rowhouses',
        audioScenario:
          'Architecture master’s students Sana and Toby discuss winter wall-insulation retrofits with building-physics tutor Prof. Patel.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Historic Retrofit Supervision]
Prof. Patel: Come in Sana and Toby. What showed up inside your infrared thermal camera surveys across twenty historic stone terraces?
Sana: [[Q21]] Dramatic surprises! Solid lime-rendered stone walls did leak heat steadily outdoors, yet triple-glazing plastic replacement casements trapped silent indoor bathroom damp, sparking ugly mould behind oak wardrobes within months!
Toby: [[Q22]] Also, thick medieval granite masonry behaved like gigantic thermal mass sponges—staying remarkably cool during hot July afternoons long after lightweight glass apartments next door turned unbearable!
Prof. Patel: Valuable balance! How did installing breathable cork-lime interior plaster compare against standard foil-backed polystyrene foam sheets?
Sana: [[Q23]] Polystyrene boards cut radiator gas bills quickest on spreadsheets, yet blocked vapor transmission completely, soaking hidden joist timber ends dangerously where cold beams sat inside masonry sockets!
Prof. Patel: [[Q24]] Fatal rot risk if unchecked! Did ultrasonic wood moisture probes detect early timber beam decay reliably without chiseling historic wainscoting apart? Yes—tiny twin brass needles slipped cleanly past baseboards measured nineteen-percent moisture pockets precisely.
Toby: [[Q25]] When modeling payback economics in Chapter Five, remember homeowner occupancy habits matter hugely: two identical insulated cottages showed double heating variation!
Prof. Patel: [[Q26]] Crucial rebound-effect caveat—always log household hours beside gas readings when retired couples keep bedrooms constantly at twenty-two degrees!
Sana: [[Q27]] Another headache arose along narrow listed streetfronts prohibiting exterior wrap—internal insulation steals six precious centimetres along cramped narrow Victorian hallways!
Prof. Patel: [[Q28]] Note subtle aerogel slimline mineral strips inside your cost-comparison matrix; expensive per square metre, yet indispensable beside cramped winding staircases!
Toby: [[Q29]] For Friday’s Conservation Jury critique, should we animate hourly condensation curves or show split thermal heat-loss snapshots cleanly side by side?
Prof. Patel: [[Q30]] Pair dramatic winter thermal rainbow frames beside crisp cross-section moisture arrows—practical conservation officers love clear visual diagnosis instantly!`,
        questions: [
          {
            id: 'cd_listening_p22_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Problem emerging behind oak wardrobes after airtight plastic glazing sealed old terraces: ______',
            correctAnswer: 'MOULD',
            explanation: 'Airtight windows trapped indoor humidity, causing mould.'
          },
          {
            id: 'cd_listening_p22_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Building-physics benefit shown by thick granite walls during hot July afternoons:',
            correctAnswer: 'THERMAL MASS',
            explanation: 'Massive masonry stayed cool like giant thermal sponges.'
          },
          {
            id: 'cd_listening_p22_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did foil-backed polystyrene sheets threaten old floor timbers?',
            options: [
              'A. Glue compounds dissolved soft nineteenth-century bricks',
              'B. Insects nested warmly inside expanded foam panels',
              'C. Blocked moisture vapor soaked wooden joist ends inside wall pockets',
              'D. Rigid slabs cracked during house foundation shifts'
            ],
            correctAnswer: 'C',
            explanation: 'Foil polystyrene trapped vapor, soaking embedded timber joist ends.'
          },
          {
            id: 'cd_listening_p22_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Percentage dampness threshold pinpointed harmlessly behind baseboards via brass needles: ______ percent',
            correctAnswer: 'NINETEEN',
            explanation: 'Needles detected nineteen-percent damp spots cleanly.'
          },
          {
            id: 'cd_listening_p22_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Identical insulated cottages consumed twice the gas depending purely on resident ______ schedules.',
            correctAnswer: 'OCCUPANCY',
            explanation: 'Professor Patel notes household occupancy hours shape real gas use.'
          },
          {
            id: 'cd_listening_p22_lq26',
            number: 26,
            type: 'short_answer',
            questionText: 'Thermostat setting kept constantly by one retired household:',
            correctAnswer: 'TWENTY-TWO DEGREES',
            explanation: 'Couples maintained twenty-two degrees constantly.'
          },
          {
            id: 'cd_listening_p22_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Interior floor depth sacrificed when lining cramped Victorian hallways internally: ______ centimetres',
            correctAnswer: 'SIX',
            explanation: 'Internal lining steals six centimetres off narrow hallways.'
          },
          {
            id: 'cd_listening_p22_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Ultra-thin high-performance insulation suggested for tight winding stairs: ______ strips',
            correctAnswer: 'AEROGEL',
            explanation: 'Include slimline aerogel mineral strips.'
          },
          {
            id: 'cd_listening_p22_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'Which presentation visuals does Prof. Patel recommend for Friday’s Conservation Jury?',
            options: [
              'A. Animated hourly spreadsheet graphs',
              'B. Video clips cutting open damp plasterboards',
              'C. Winter thermal camera frames beside cross-section moisture arrows',
              'D. Physical brick sample blocks stacked beside desks'
            ],
            correctAnswer: 'C',
            explanation: 'Show rainbow thermal photos paired with cross-section moisture arrows.'
          },
          {
            id: 'cd_listening_p22_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Who forms the primary target audience for Friday’s presentation?',
            options: [
              'A. Conservation heritage jury officers',
              'B. Municipal housing estate plumbers',
              'C. Polymer insulation factory engineers',
              'D. Undergraduate architectural history first-years'
            ],
            correctAnswer: 'A',
            explanation: 'Visual clarity persuades practical conservation officers.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Evolution of Urban Pedestrian Squares',
        audioScenario:
          'An architectural historian lectures on how European civic piazzas resisted mid-century parking lots to become vibrant social anchors.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Civic Space Design Lecture]
Lecturer: Public urban squares stand among humanity’s oldest shared rooms—part market floor, part open parliament, and part sunny neighborhood living room.
Lecturer: [[Q31]] Across Renaissance Italy, civic statues and arcade loggias were arranged rigorously along pedestrian sightlines rather than geometric blueprint symmetry—what planner Camillo Sitte praised in 1889 as picturesque visual enclosure.
Lecturer: [[Q32]] Crucially, medieval market squares succeeded because lively ground-floor workshops—cobblers, bakers, silversmiths—spilled benches onto edges while upper timber windows watched silently overhead.
Lecturer: [[Q33]] Yet by the roaring 1950s, booming automobile ownership converted magnificent baroque cobble squares worldwide into boiling asphalt parking lots ringed by exhaust fumes.
Lecturer: [[Q34]] Remarkably, Danish urbanist Jan Gehl ignited a quiet spatial revolution in 1962 simply by persuading Copenhagen councillors to shut Strøget—one bustling shopping spine—strictly to motor traffic.
Lecturer: [[Q35]] Skeptical shopkeepers predicted swift bankruptcy, assuming suburban drivers never strolled freely outdoors inside chilly Baltic winters; instead pedestrian footfall and boutique receipts soared thirty-five percent within twelve months!
Lecturer: [[Q36]] Gehl realized healthy plazas obey strict micro-scale comfort rules: "sticky edges"—benches tucked securely beneath recessed stone pillars rather than exposed bald tarmac centers—invite lingering conversations effortlessly.
Lecturer: [[Q37]] Similarly, subtle three-step stone plinths work better than isolated park benches, effortlessly accommodating solitary lunch readers beside lively guitar circles simultaneously.
Lecturer: [[Q38]] Beware the 1970s modernist concrete plaza trap: sweeping wind-tunnel forecourts sunk below windy office towers consistently stand eerily barren because blank marble glass walls offer zero sidewalk doorways!
Lecturer: [[Q39]] Contemporary climate planners now rip out impervious granite slabs across thirsty plazas, embedding sunken bioswale tree pits that absorb flash summer cloudbursts while cooling noon air six degrees!
Lecturer: [[Q40]] Ultimately, timeless city squares thrive neither on monumental marble fountains nor costly festivals alone, but on humble porous active edges welcoming lingering daily encounters.`,
        questions: [
          {
            id: 'cd_listening_p22_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Architectural quality praised by Camillo Sitte in 1889: visual ______',
            correctAnswer: 'ENCLOSURE',
            explanation: 'Sitte celebrated picturesque visual enclosure.'
          },
          {
            id: 'cd_listening_p22_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'What enlivened borders along successful medieval market squares?',
            correctAnswer: 'GROUND-FLOOR WORKSHOPS',
            explanation: 'Active ground-floor workshops spilled benches onto square edges.'
          },
          {
            id: 'cd_listening_p22_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: '1950s urban trend degrading baroque cobbled piazzas: asphalt ______ lots',
            correctAnswer: 'PARKING',
            explanation: 'Squares became asphalt parking lots.'
          },
          {
            id: 'cd_listening_p22_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'City pioneering Europe’s 1962 flagship car-free street transformation: ______',
            correctAnswer: 'COPENHAGEN',
            explanation: 'Jan Gehl persuaded Copenhagen councillors on Strøget.'
          },
          {
            id: 'cd_listening_p22_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'What actually happened to merchant retail sales one year after Copenhagen banned street cars?',
            options: [
              'A. Shops lost fifteen percent of suburban drivers',
              'B. Merchants switched entirely to summer weekend pop-ups',
              'C. Department stores relocated near outer beltways',
              'D. Footfall and sales grew thirty-five percent unexpectedly'
            ],
            correctAnswer: 'D',
            explanation: 'Footfall and boutique receipts jumped thirty-five percent within one year.'
          },
          {
            id: 'cd_listening_p22_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Sheltered perimeter niches with pillars and benches create inviting ______ edges for conversation.',
            correctAnswer: 'STICKY',
            explanation: 'Termed "sticky edges" inviting people to linger.'
          },
          {
            id: 'cd_listening_p22_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which low sloped seating design serves both solitary readers and informal musicians flexibly?',
            correctAnswer: 'THREE-STEP STONE PLINTHS',
            explanation: 'Subtle three-step stone amphitheater plinths.'
          },
          {
            id: 'cd_listening_p22_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why do wind-swept concrete forecourts beside modern glass skyscrapers stay deserted?',
            options: [
              'A. Harsh building bylaws forbid public sitting',
              'B. Blank facade walls lack small doorways and wind breaks',
              'C. Elevators direct workers straight into underground garages',
              'D. Polished marble slabs blind walkers at midday'
            ],
            correctAnswer: 'B',
            explanation: 'Blank glass facades offer zero sidewalk doorways and create wind tunnels.'
          },
          {
            id: 'cd_listening_p22_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Sunken green drainage feature absorbing flash storms in modern plazas: ______ pits',
            correctAnswer: 'BIOSWALE',
            explanation: 'Embedded sunken bioswale tree pits absorb flash rain.'
          },
          {
            id: 'cd_listening_p22_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'According to the lecturer, what truly brings a city square to life?',
            options: [
              'A. Porous active borders inviting casual daily encounters',
              'B. Monumental illuminated marble statues',
              'C. Free annual winter music festivals',
              'D. Underground tram corridors underneath cobbles'
            ],
            correctAnswer: 'A',
            explanation: 'Healthy plazas rely on humble porous active edges encouraging daily stops.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 23: Student Travel Society: Lake District Excursion
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p23',
    testNumber: 23,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 23: Student Travel Society: Lake District Excursion',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Travel Society: Lake District Excursion.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking the Autumn Weekend Lake District Coach Trip',
        audioScenario:
          'A graduate student phones the Student Travel Society secretary to sign up for a hostel ridge-hiking weekend in Cumbria.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Student Travel Society Desk]
Secretary: Hi there, University Alpine & Travel Society, Ben speaking. How can I help?
Traveler: Hello Ben, I heard spots are still open for next weekend’s three-day Lake District excursion and want to book myself plus a friend.
Secretary: [[Q1]] Spot on—only three bunk beds remain! Let me open your registration sheet first: could you spell your surname? Yes, it is Kendrick, spelled K-E-N-D-R-I-C-K.
Secretary: [[Q2]] Thanks, Kendrick! Society members pay eighty-four pounds covering round-trip chartered coach transit, two nights hostel bunks in Ambleside, and Saturday hot buffet stew.
Traveler: [[Q3]] Not bad! My friend isn’t an official club member yet—does she pay extra? Non-members simply add a six-pound temporary weekend guest pass onto the base rate.
Secretary: [[Q4]] Easy! What time and campus pickup bay should we reach on Friday afternoon? Our bright blue charter coach loads gear outside Sports Pavilion Gate North at 13:45, pulling onto the motorway precisely at two.
Traveler: [[Q5]] Got it. Does the Ambleside hostel supply bed linen and shower towels cleanly, or must walkers haul heavy sleeping bags? Hostel sheets and wool blankets come washed on bunks, though every guest packs a personal microfibre bath towel and flat slip-on slippers for timber dorm floors.
Secretary: [[Q6]] Crucial equipment rule for Saturday’s ridge scramble: denim jeans and flat canvas sneakers are strictly rejected on trailhead inspections—waterproof ankle walking boots plus windproof shell trousers are mandatory!
Traveler: [[Q7]] Understood—we both own Gore-Tex boots and gaiters. Should newcomers worry if misty hill clouds make faster climbers race ahead? Never! We divide into two distinct pace teams: Scenic Valley Strollers stay beside lakeside gravel tarns under guide Priya, while High Ridge Scramblers tackle steep scree paths behind experienced mountaineer Tom.
Secretary: [[Q8]] Do walkers buy sandwiches in Ambleside village Saturday morning before setting out? No time needed—pack two airtight reusable Tupperware snack tubs Friday evening because hostel kitchens fill fresh oat flapjacks and cheese wraps directly at breakfast!
Traveler: [[Q9]] Super thoughtful! What if foul November gales shut high mountain peaks completely? Guides switch cleanly onto low oakwood waterfalls and historic slate quarry museum walks without cutting weekend itinerary hours.
Secretary: [[Q10]] To lock both final bunks today, transfer deposits via Union Pay quoting Trip Tag LD-319 before five o'clock!`,
        questions: [
          {
            id: 'cd_listening_p23_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Traveler surname: ______',
            correctAnswer: 'KENDRICK',
            explanation: 'Spelled K-E-N-D-R-I-C-K.'
          },
          {
            id: 'cd_listening_p23_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Member weekend package rate covering coach, hostel, and dinner: £ ______',
            correctAnswer: 'EIGHTY-FOUR',
            explanation: 'Member cost is eighty-four pounds.'
          },
          {
            id: 'cd_listening_p23_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Extra weekend guest pass charge for a non-member companion: £ ______',
            correctAnswer: 'SIX',
            explanation: 'Non-members add six pounds.'
          },
          {
            id: 'cd_listening_p23_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Coach loading time at Sports Pavilion Gate North on Friday:',
            correctAnswer: '13:45',
            explanation: 'Coach loads at 13:45 ahead of a 2 PM exit.'
          },
          {
            id: 'cd_listening_p23_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'Besides a microfibre bath towel, what must guests pack for wooden dorm floors?',
            correctAnswer: 'SLIPPERS',
            explanation: 'Bring a towel and flat slip-on slippers.'
          },
          {
            id: 'cd_listening_p23_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Which clothing items fail mandatory trailhead inspection?',
            options: [
              'A. Wool hiking socks and knit hats',
              'B. Padded synthetic down coats',
              'C. Nylon gaiters and fleece vests',
              'D. Denim trousers and flat canvas sneakers'
            ],
            correctAnswer: 'D',
            explanation: 'Denim jeans and flat canvas sneakers are rejected.'
          },
          {
            id: 'cd_listening_p23_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Experienced mountaineer leading the steep High Ridge Scramblers pace group: ______',
            correctAnswer: 'TOM',
            explanation: 'Tom leads the High Ridge Scramblers.'
          },
          {
            id: 'cd_listening_p23_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Container campers should bring from home for packing trail lunches at breakfast: ______ tubs',
            correctAnswer: 'TUPPERWARE',
            explanation: 'Pack two reusable Tupperware snack tubs.'
          },
          {
            id: 'cd_listening_p23_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What backup plan replaces high ridge peaks during hazardous winter gales?',
            options: [
              'A. Early afternoon coach departures back to campus',
              'B. Map-reading board games inside hostel dining halls',
              'C. Sheltered woodland waterfall hikes and a slate quarry museum visit',
              'D. Shopping excursions in Windermere station malls'
            ],
            correctAnswer: 'C',
            explanation: 'Guides pivot to oakwood waterfalls and historic slate quarry museum walks.'
          },
          {
            id: 'cd_listening_p23_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Payment trip reference tag due before 5 PM: ______',
            correctAnswer: 'LD-319',
            explanation: 'Quote Trip Tag LD-319.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Hostel Orientation & Mountain Conservation Etiquette',
        audioScenario:
          'A senior excursion leader welcomes student hikers aboard the Lake District coach and details upland trail protocols.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Excursion Safety & Etiquette]
Leader: Good afternoon walkers! Once we unload beside Ambleside Beck shortly, notice our snug nineteenth-century stone hostel adheres strictly to quiet ecological mountain habits.
Leader: [[Q11]] Upon entering reception porch flags, unlace muddy trail boots immediately onto slatted drying racks—mud clogs hostel drain traps rapidly!
Leader: [[Q12]] Inside our self-catering pantry beside Stair Two, red shelf stickers mark strict nut-free vegetarian pans—never cook bacon or peanuts across shared red surfaces!
Leader: [[Q13]] Remember Upland Rule One tomorrow morning: latch every rusted iron farm sheep gate firmly shut behind the final sweeper walker, even if you found it sagging partly open—lambs wander straight into valley highways silently!
Leader: [[Q14]] Notice fragile emerald sphagnum moss bogs along saddle ridges: step strictly along pitched grey slate stepping stones rather than widening muddy side scars thirty metres wide!
Leader: [[Q15]] Every six-person hiking pod carries one bright orange emergency bivouac survival shelter sack inside the leader’s top lid—never discard crisp wrappers or even biodegradable apple cores in rocky cairns, because cold misty frost prevents fruit peels rotting for three years!
Leader: [[Q16]] When approaching grazing Herdwick sheep flocks with lambs along narrow wall stiles, halt calmly five paces back and keep chatter gentle rather than darting forward with selfie sticks!
Leader: [[Q17]] Beware drinking straight from crystal sparkling mountain fell becks without water purification tablets—upslope sheep grazing introduces hidden microscopic intestinal parasites rapidly!
Leader: [[Q18]] At dusk Saturday, drop soaking gaiters cleanly inside our warm basement boiler room numbered precisely matching your dorm bunk tag so nobody swaps damp socks accidentally before Sunday’s dawn!
Leader: [[Q19]] If low foggy cloud drops visibility suddenly below thirty metres atop ridges, stay strictly within voice sightline of blue-vested assistant sweepers holding GPS beacons—never cut downhill solo toward shiny valley roads!
Leader: [[Q20]] Check out our laminated waterproof trail map pinned neatly onto Corridor Door B right after unloading!`,
        questions: [
          {
            id: 'cd_listening_p23_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'First arrival task in the porch to protect hostel drains: unlace muddy ______',
            correctAnswer: 'BOOTS',
            explanation: 'Unlace muddy boots immediately onto drying racks.'
          },
          {
            id: 'cd_listening_p23_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which restricted cooking zone sits marked with red stickers beside Stair Two?',
            correctAnswer: 'VEGETARIAN PANS',
            explanation: 'Red stickers designate nut-free vegetarian pans.'
          },
          {
            id: 'cd_listening_p23_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why must walkers shut every iron farm gate firmly behind the last group member?',
            options: [
              'A. Gusting valley winds snap rusty hinges',
              'B. Livestock can stray unnoticed onto valley roads',
              'C. Trail wardens issue fines on unlatched footpaths',
              'D. Wild deer enter planted woodland seedlings'
            ],
            correctAnswer: 'B',
            explanation: 'Sheep and lambs stray onto valley highways.'
          },
          {
            id: 'cd_listening_p23_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Stones hikers must follow to avoid eroding delicate mountain moss bogs: ______ stones',
            correctAnswer: 'STEPPING',
            explanation: 'Step along pitched grey slate stepping stones.'
          },
          {
            id: 'cd_listening_p23_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Even discarded apple cores survive up to ______ years without decaying in cold upland rock.',
            correctAnswer: 'THREE',
            explanation: 'Cold frost keeps fruit peels intact for three years.'
          },
          {
            id: 'cd_listening_p23_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Local heritage upland sheep breed hikers must not crowd near stiles: ______ sheep',
            correctAnswer: 'HERDWICK',
            explanation: 'Keep calm five paces back from Herdwick sheep.'
          },
          {
            id: 'cd_listening_p23_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'What must walkers carry before sipping sparkling stream water safely?',
            correctAnswer: 'PURIFICATION TABLETS',
            explanation: 'Never drink from streams without water purification tablets.'
          },
          {
            id: 'cd_listening_p23_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Warm downstairs room numbered by bunk tag for drying soaked gaiters: ______ room',
            correctAnswer: 'BOILER',
            explanation: 'Place gear inside the warm basement boiler room.'
          },
          {
            id: 'cd_listening_p23_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What rule applies immediately if ridge fog shrinks visibility under thirty metres?',
            options: [
              'A. Descend individually toward visible tarmac highways',
              'B. Switch phone flashlights onto rapid distress strobe',
              'C. Wait inside stone cairn shelters until winds shift',
              'D. Keep within hearing range of blue-vested GPS sweepers'
            ],
            correctAnswer: 'D',
            explanation: 'Stay within sightline/voice range of blue-vested GPS sweepers.'
          },
          {
            id: 'cd_listening_p23_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Door location pinning tomorrow’s waterproof trail map: Corridor Door ______',
            correctAnswer: 'B',
            explanation: 'Pinned onto Corridor Door B.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Footpath Erosion Recovery in National Parks',
        audioScenario:
          'Environmental geography students Ella and Ravi review upland footfall surveys and sheep grazing maps with Dr. Bennett.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Upland Conservation Supervision]
Dr. Bennett: Welcome back, Ella and Ravi. How did your autumn resurvey of repaired stone-pitched Lakeland footpaths turn out?
Ella: [[Q21]] Encouraging overall—heather shoots reclaimed eighty percent of bare peat braids within four years wherever volunteers installed wooden drainage bars every twenty steep metres to divert sheet rain!
Ravi: [[Q22]] However, heavily publicized Instagram summit viewpoints saw scar widening jump forty percent again simply because hikers detoured off jagged wet stones onto soft grassy verges beside them.
Dr. Bennett: Subtle behavioral trap! Why did tired walkers avoid freshly repaired granite flagstone steps?
Ella: [[Q23]] Tall irregular riser stones forced unnatural long strides downhill—masons fixing smoother low-angled risers cut verge trespassing nearly in half immediately!
Dr. Bennett: Brilliant ergonomics! How did you quantify walker density accurately along misty mountain cols lacking mains power?
Ravi: [[Q24]] National Park rangers shared concealed infrared thermal beam counters buried inside drystone gateposts, logging clean hourly footfalls without capturing identifiable camera silhouettes.
Dr. Bennett: [[Q25]] Clean non-intrusive data! Now check your grazing control plots: when plotting seedling birch regrowth inside fenced plots, isolate red deer browsing from upland sheep impacts cleanly.
Ella: [[Q26]] Caught that yesterday—tall two-metre steel wire deer fences protected vibrant downy birch saplings rapidly, whereas knee-high sheep hurdles let agile stags leap cleanly inside every winter night!
Ravi: [[Q27]] Regarding financing endless mountain repairs, local rural parish councils struggle funding helicopter boulder airlifts purely from shrinking municipal parking levies.
Dr. Bennett: [[Q28]] Contrast Cumbria’s voluntary "Pennies for Peaks" tourist coffee-shop donations against compulsory mountain access toll cards used in Patagonia inside Chapter Six!
Ella: [[Q29]] For Thursday’s regional conservation briefing, should we spotlight steep drainage statistics or compare stone airlift budgets cleanly?
Dr. Bennett: [[Q30]] Lead with cost-per-metre comparisons proving low-angle stone steps pay back three times quicker than repeated eroding peat reseeding drops!`,
        questions: [
          {
            id: 'cd_listening_p23_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Spacing of wooden drainage bars helping heather reclaim 80% of peat scars: ______ metres',
            correctAnswer: 'TWENTY',
            explanation: 'Drainage bars placed every twenty steep metres.'
          },
          {
            id: 'cd_listening_p23_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Increase in trailside verge erosion around famous summit viewpoints: ______ percent',
            correctAnswer: 'FORTY',
            explanation: 'Scar widening jumped forty percent around viral viewpoints.'
          },
          {
            id: 'cd_listening_p23_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did hikers walk beside repaired mountain steps onto soft grass?',
            options: [
              'A. Steeply spaced jagged stones stretched natural downhill steps awkwardly',
              'B. Fresh wet moss coated stone slabs slickly',
              'C. Sheep herds slept regularly across central paths',
              'D. Mud splashes stained light hiking boots'
            ],
            correctAnswer: 'A',
            explanation: 'Tall irregular steps forced awkward strides until smooth low risers were built.'
          },
          {
            id: 'cd_listening_p23_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'Where were solar-free thermal beam counters hidden to track hiker numbers discreetly?',
            correctAnswer: 'DRYSTONE GATEPOSTS',
            explanation: 'Concealed inside drystone gateposts.'
          },
          {
            id: 'cd_listening_p23_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Seedling regeneration plots must separate upland sheep grazing from wild red ______ browsing.',
            correctAnswer: 'DEER',
            explanation: 'Isolate deer browsing from sheep grazing impacts.'
          },
          {
            id: 'cd_listening_p23_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Native tree saplings thriving inside tall two-metre deer enclosures: ______',
            correctAnswer: 'BIRCH',
            explanation: 'Tall steel fences protected vibrant downy birch saplings.'
          },
          {
            id: 'cd_listening_p23_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Transport method costing rural parishes heavily to haul heavy stones uphill: ______ boulder airlifts',
            correctAnswer: 'HELICOPTER',
            explanation: 'Rural parishes struggle funding helicopter boulder airlifts.'
          },
          {
            id: 'cd_listening_p23_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Foreign region inspiring compulsory access toll comparisons in Chapter Six: ______',
            correctAnswer: 'PATAGONIA',
            explanation: 'Contrast voluntary cafe donations against Patagonia toll cards.'
          },
          {
            id: 'cd_listening_p23_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'What argument should lead Thursday’s conservation policy briefing?',
            options: [
              'A. Banning social media location geotags on summits',
              'B. Cost-per-metre data proving low-angle stone paving saves triple reseeding costs',
              'C. Installing plastic walkway grids near car parks',
              'D. Expanding weekend volunteer heather seed-spreading'
            ],
            correctAnswer: 'B',
            explanation: 'Show low-angle steps pay back three times faster than peat drops.'
          },
          {
            id: 'cd_listening_p23_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'How many times more economical are durable low-angle stone paths over repeated peat reseeding?',
            options: [
              'A. Twice',
              'B. Four times',
              'C. Three times',
              'D. Five times'
            ],
            correctAnswer: 'C',
            explanation: 'Pay back three times quicker.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Cultural Invention of Scenic Landscape Tourism',
        audioScenario:
          'A cultural geography lecturer traces how industrial writers transformed dreaded craggy wilderness mountains into romantic sanctuaries.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: History of Mountain Tourism]
Lecturer: Stepping off an excursion coach into rugged misty peaks today feels inherently uplifting—yet before 1750, barely any wealthy European traveled toward steep mountains willingly.
Lecturer: [[Q31]] Throughout medieval centuries, educated city dwellers recoiled from jagged alpine crags as hideous stony blisters ruining fertile farmland, rushing over passes blindfolded inside sedan curtains!
Lecturer: [[Q32]] That aesthetic reversal ignited during the late eighteenth century when philosopher Edmund Burke separated gentle soothing prettiness from the terrifying thrill of "the Sublime."
Lecturer: [[Q33]] Shortly afterward, romantic poets Samuel Taylor Coleridge and William Wordsworth moved permanently beside Cumberland lakes, turning modest slate villages into celebrated artistic shrines.
Lecturer: [[Q34]] Ironically, Wordsworth fiercely campaigned against extending steam railway lines into Windermere during 1844, fearing smoky excursion trains would bring noisy factory crowds trampling quiet sheep valleys.
Lecturer: [[Q35]] Yet cheap Sunday rail excursions democratized outdoor air swiftly—empowering smoky northern textile mill weavers to hike fresh mountain ridges for sixpence return!
Lecturer: [[Q36]] Meanwhile, Victorian painter William Gilpin popularized handheld convex Claude Glasses—tinted pocket mirrors letting tourists frame crooked mountain reflections backward like neatly varnished oil paintings!
Lecturer: [[Q37]] Crucially, outdoor leisure sparks fierce access struggles: northern English quarry workers staged the historic 1932 Kinder Scout Mass Trespass across closed aristocratic moorlands, winning legal National Parks twenty years onward.
Lecturer: [[Q38]] Modern outdoor economics brings fresh irony: picture-postcard stone cottages once inhabited by sheep shearers convert steadily into holiday rentals pricing young local nurses out of mountain valleys!
Lecturer: [[Q39]] Concurrently, overtourism concentrates seventy percent of summer trail crowds onto barely ten famous ridge peaks while serene valleys fifteen miles away remain blissfully peaceful.
Lecturer: [[Q40]] Sustainable mountain stewardship today therefore balances joyous open foot access with thriving affordable rural housing and gentle dispersed trail wayfinding.`,
        questions: [
          {
            id: 'cd_listening_p23_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Way wealthy travelers crossed scary pre-1750 alpine passes inside sedan chairs: ______',
            correctAnswer: 'BLINDFOLDED',
            explanation: 'Travelers crossed passes blindfolded inside sedan curtains.'
          },
          {
            id: 'cd_listening_p23_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Philosophical category introduced by Edmund Burke celebrating terrifying wild scenery:',
            correctAnswer: 'THE SUBLIME',
            explanation: 'Burke distinguished soothing beauty from the thrilling "Sublime".'
          },
          {
            id: 'cd_listening_p23_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'County lakes settled by poets Coleridge and Wordsworth: ______',
            correctAnswer: 'CUMBERLAND',
            explanation: 'Poets settled beside Cumberland lakes.'
          },
          {
            id: 'cd_listening_p23_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why did poet William Wordsworth publicly oppose an 1844 Windermere rail line?',
            options: [
              'A. Locomotive smoke blackened rare alpine ferns',
              'B. Iron rail viaducts blocked grazing sheep lanes',
              'C. Cheap trains would flood serene valleys with noisy factory excursionists',
              'D. Hotel speculators planned oversized stone pavilions'
            ],
            correctAnswer: 'C',
            explanation: 'Feared excursion crowds from smoky towns would overwhelm peaceful valleys.'
          },
          {
            id: 'cd_listening_p23_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Industrial laborers enabled to hike uplands cheaply via Sunday rail excursions: ______ weavers',
            correctAnswer: 'TEXTILE',
            explanation: 'Enabled northern textile mill weavers to hike fresh ridges.'
          },
          {
            id: 'cd_listening_p23_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Pocket tinted Claude Glasses served as curved ______ mirrors framing scenic landscapes cleanly.',
            correctAnswer: 'POCKET',
            explanation: 'Tinted pocket mirrors framed mountains backward like oil paintings.'
          },
          {
            id: 'cd_listening_p23_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Decisive 1932 hiking rights protest leading eventually to UK National Parks: Mass ______',
            correctAnswer: 'TRESPASS',
            explanation: 'Workers staged the historic 1932 Kinder Scout Mass Trespass.'
          },
          {
            id: 'cd_listening_p23_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which vital local workers struggle affording housing as cottages convert to holiday lets?',
            correctAnswer: 'LOCAL NURSES',
            explanation: 'Short-term holiday rentals price out young local nurses.'
          },
          {
            id: 'cd_listening_p23_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What spatial pattern drives modern mountain overtourism stress?',
            options: [
              'A. Seventy percent of walkers pack onto ten famous peaks leaving neighboring valleys empty',
              'B. Visitors hike strictly during crisp winter frosts',
              'C. Coach tour parking bays run out outside historic inns',
              'D. Smartphone battery drain forces repeated summit calls'
            ],
            correctAnswer: 'A',
            explanation: 'Seventy percent crowd ten famous peaks while calm valleys nearby sit quiet.'
          },
          {
            id: 'cd_listening_p23_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What twin goals anchor sustainable modern upland stewardship?',
            options: [
              'A. Building mountain cable cars and closing minor paths',
              'B. Limiting summit visits through lotteries year-round',
              'C. Replacing stone stiles with paved coach turnarounds',
              'D. Keeping open hiking access while protecting affordable rural homes'
            ],
            correctAnswer: 'D',
            explanation: 'Balances open foot access with affordable rural community homes.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 24: Campus Bookstore Course Textbooks & Digital Access Codes
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p24',
    testNumber: 24,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 24: Campus Bookstore Course Textbooks & Digital Access Codes',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Campus Bookstore Course Textbooks & Digital Access Codes.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Ordering Course Textbooks & Refunding Unused Codes',
        audioScenario:
          'A biochemistry freshman phones the Campus Academic Bookshop customer desk to order a semester textbook bundle and ask about digital key returns.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Campus Bookshop Orders Desk]
Clerk: Good morning, University Blackwell Academic Bookshop, Tanya speaking. How may I assist?
Student: Hi Tanya, I just switched degree seminars this morning and need to order my Cell Biology reader plus check returning an unwrapped workbook!
Clerk: [[Q1]] No problem! Let me pull up your reservation profile first—what is your surname? It is McGowan, spelled M-C-G-O-W-A-N.
Clerk: [[Q2]] Got it, McGowan. Your syllabus lists Organic Molecular Principles Ninth Edition—we stock brand-new paperbacks at sixty-four pounds, OR verified secondhand library-surplus copies downstairs for thirty-nine pounds!
Student: Secondhand at thirty-nine sounds brilliant! Does it still satisfy online homework portal quizzes though?
Clerk: [[Q3]] Careful catch! Secondhand textbooks never contain valid online quiz licenses—you must buy a standalone digital publisher access card separately at Counter B for nineteen pounds!
Student: [[Q4]] Good thing I asked! Also, yesterday I dropped Sociology 101 and still hold a cellophane-wrapped workbook bought Tuesday—can I swap it cleanly? Full cash or card refunds apply smoothly for fourteen days provided shrink-wrap foil seals remain intact and you carry your printed till receipt!
Clerk: [[Q5]] Once you scratch off foil security panels revealing digital course keys inside paperback covers, publishers block all store returns automatically!
Student: [[Q6]] Makes total sense. My biochemistry paperback shows "Backordered" online—how fast do rush publisher warehouse orders arrive on campus? Express distributor vans replenish missing science texts twice weekly, landing by Thursday morning at ten sharp for desk collection!
Student: [[Q7]] Perfect! Could I reserve our department’s required waterproof spiral laboratory safety manual simultaneously? Yes, let me lock copy reservation CB-615 onto Hold Shelf Four beside the coffee staircase!
Clerk: [[Q8]] Wait—do students save extra ordering semester lab coat packages alongside textbooks? Mention enrolled course code BIO-12 at checkout for a complimentary pocket millimeter stencil ruler and ten percent off lab goggles!
Student: [[Q9]] Nifty perk! When does extended freshers-week queue-free click-and-collect evening pickup close? Store doors stay open until seven thirty weekday evenings throughout October before shifting back to normal five thirty hours!
Clerk: [[Q10]] One last check: bring physical campus ID cards when collecting paid Click & Collect bundles—screenshots alone aren’t accepted by parcel counter scanners.`,
        questions: [
          {
            id: 'cd_listening_p24_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname: ______',
            correctAnswer: 'MCGOWAN',
            explanation: 'Spelled M-C-G-O-W-A-N.'
          },
          {
            id: 'cd_listening_p24_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Price of verified secondhand edition downstairs: £ ______',
            correctAnswer: 'THIRTY-NINE',
            explanation: 'Secondhand copies cost thirty-nine pounds.'
          },
          {
            id: 'cd_listening_p24_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Cost of a separate standalone digital online quiz key at Counter B: £ ______',
            correctAnswer: 'NINETEEN',
            explanation: 'Standalone digital access card costs nineteen pounds.'
          },
          {
            id: 'cd_listening_p24_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Return time window for sealed textbooks accompanied by paper receipts:',
            correctAnswer: 'FOURTEEN DAYS',
            explanation: 'Refunds apply within fourteen days cleanly.'
          },
          {
            id: 'cd_listening_p24_lq5',
            number: 5,
            type: 'multiple_choice',
            questionText: 'What voids store return eligibility automatically on digital bundle editions?',
            options: [
              'A. Highlighting margins inside chapter introductions',
              'B. Scratching open the protective foil panel over digital access codes',
              'C. Losing cardboard outer shipping boxes',
              'D. Paying originally via campus student discount cards'
            ],
            correctAnswer: 'B',
            explanation: 'Scratching off foil panels revealing keys cancels return rights.'
          },
          {
            id: 'cd_listening_p24_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Arrival day for urgent publisher warehouse restocks: ______ morning',
            correctAnswer: 'THURSDAY',
            explanation: 'Distributor deliveries land by Thursday morning at ten.'
          },
          {
            id: 'cd_listening_p24_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Hold reservation number for the waterproof lab safety manual:',
            correctAnswer: 'CB-615',
            explanation: 'Held under reservation CB-615.'
          },
          {
            id: 'cd_listening_p24_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Free biochemistry tool awarded when quoting course code BIO-12: stencil ______',
            correctAnswer: 'RULER',
            explanation: 'Includes a pocket millimeter stencil ruler.'
          },
          {
            id: 'cd_listening_p24_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Closing time on October weekday evenings during extended pickup hours: ______ thirty',
            correctAnswer: 'SEVEN',
            explanation: 'Open until seven thirty weekdays in October.'
          },
          {
            id: 'cd_listening_p24_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why must students bring plastic ID cards rather than phone snapshots at Click & Collect?',
            options: [
              'A. Parcel counter barcode scanners reject mobile screens',
              'B. Basement Wi-Fi drops signals at till checkout',
              'C. Student numbers must match engraved card chips',
              'D. Privacy guidelines forbid photographing student badges'
            ],
            correctAnswer: 'A',
            explanation: 'Screenshots aren’t accepted by parcel counter scanners.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Campus Course-Pack Printing & Buyback Guide',
        audioScenario:
          'A university bookstore manager introduces incoming freshmen to affordable print course packs, rental programs, and year-end book buyback stalls.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Bookshop Commons Briefing]
Manager: Welcome freshers! Before spending six hundred pounds needlessly on glossy brand-new hardbacks first week, learn four clever ways students slash semester reading costs safely.
Manager: [[Q11]] First, stop by our Semester Rental Desk beside Blue Pillar Three: borrowing thick engineering or law hardbacks for sixteen weeks trims sticker prices sixty-five percent!
Manager: [[Q12]] While using rented editions, light pencil notes along blank margin lines are fine—yet soaking pages with thick neon yellow ink markers invalidates return deposits!
Manager: [[Q13]] Second, check our Custom Course-Pack Print Counter downstairs where department readers bundle journal articles at nonprofit penny-per-page print tariffs rather than full retail prices.
Manager: [[Q14]] Notice many professors now migrate foundation modules onto OER—Open Educational Resources—meaning complete free peer-reviewed PDF chemistry chapters download straight from our university repository!
Manager: [[Q15]] For humanities novels assigned across seminar weeks, inspect our green "Alumni Swap Shelf" right inside the foyer entrance: graduating seniors donate clean paperbacks capped strictly at three pounds apiece!
Manager: [[Q16]] When selling unwanted hardbacks back during May Exam Buyback Week, remember publisher edition switches kill resale value—always check next autumn’s updated syllabus code before hoarding outdated titles!
Manager: [[Q17]] Beware online peer marketplace traps charging extra postage fees on bulky chemistry books missing crucial fold-out spectral charts tucked inside back cover sleeves!
Manager: [[Q18]] Check student grant access too: learners holding University Opportunity Bursaries receive automated seventy-five-pound digital textbook credits linked quietly onto library barcards every September!
Manager: [[Q19]] Need specialist fountain inks, millimeter graph pads, or architectural scalpel blades? Look down the wooden basement Stationery Gallery open seven days weekly during studio pin-up season!
Manager: [[Q20]] Pick up a crimson textbook comparison bookmark from Reception Desk Two before wandering toward module aisles!`,
        questions: [
          {
            id: 'cd_listening_p24_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Average retail saving when borrowing engineering textbooks through Semester Rental: ______ percent',
            correctAnswer: 'SIXTY-FIVE',
            explanation: 'Semester rentals save sixty-five percent off sticker prices.'
          },
          {
            id: 'cd_listening_p24_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which type of margin marking voids rental deposit refunds?',
            correctAnswer: 'YELLOW INK MARKERS',
            explanation: 'Thick neon yellow ink markers ruin return eligibility.'
          },
          {
            id: 'cd_listening_p24_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Location of low-cost nonprofit Custom Course-Pack printing: ______ counter',
            correctAnswer: 'DOWNSTAIRS',
            explanation: 'Custom Course-Pack Print Counter sits downstairs at nonprofit tariffs.'
          },
          {
            id: 'cd_listening_p24_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What advantage do Open Educational Resources (OER) provide incoming freshmen?',
            options: [
              'A. Automated audio reading apps on phones',
              'B. Extra weekly quiz answer hints',
              'C. Printed spiral copies mailed home every summer',
              'D. Free peer-reviewed PDF textbooks downloadable straight from university servers'
            ],
            correctAnswer: 'D',
            explanation: 'Free peer-reviewed chapters download from the campus repository.'
          },
          {
            id: 'cd_listening_p24_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Maximum price cap on novels donated to the Alumni Swap Shelf: £ ______',
            correctAnswer: 'THREE',
            explanation: 'Books are capped strictly at three pounds each.'
          },
          {
            id: 'cd_listening_p24_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Publisher ______ switches wipe out resale demand during May Buyback Week.',
            correctAnswer: 'EDITION',
            explanation: 'Edition switches kill used book resale value.'
          },
          {
            id: 'cd_listening_p24_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Which folded back-pocket inserts often vanish inside casual online secondhand copies?',
            correctAnswer: 'SPECTRAL CHARTS',
            explanation: 'Fold-out spectral charts frequently go missing.'
          },
          {
            id: 'cd_listening_p24_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Annual automated textbook credit given to Opportunity Bursary holders: £ ______',
            correctAnswer: 'SEVENTY-FIVE',
            explanation: 'Linked seventy-five-pound digital credit onto cards.'
          },
          {
            id: 'cd_listening_p24_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Where are drafting blades and millimeter graph pads stocked?',
            options: [
              'A. Architecture department vending machine',
              'B. Ground foyer Alumni Swap shelf',
              'C. Basement wooden Stationery Gallery',
              'D. Click & Collect parcel lockers'
            ],
            correctAnswer: 'C',
            explanation: 'Look in the basement Stationery Gallery.'
          },
          {
            id: 'cd_listening_p24_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Colour of comparison bookmarks waiting at Reception Desk Two: ______',
            correctAnswer: 'CRIMSON',
            explanation: 'Grab a crimson comparison bookmark.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Evaluating Open-Access Textbooks vs Commercial Digital Platforms',
        audioScenario:
          'Education economics students Liam and Maya evaluate student comprehension scores across free OER readers and commercial digital courseware with Dr. Patel.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Textbook Economics Tutorial]
Dr. Patel: Hello Liam and Maya. Did comparing three hundred first-year Chemistry grades expose measurable score gaps between paid online platforms and free OER manuals?
Liam: [[Q21]] Startling parity—students studying free open-access PDF chapters achieved indistinguishable midterm averages while dropping courses nineteen percent less frequently during September cash crunches!
Maya: [[Q22]] Crucially, interviews revealed commercial single-semester expiring rental codes panicked low-income students whenever slow grant payments blocked week-two quiz homework deadlines!
Dr. Patel: Sobering accessibility finding! Wait—did automated adaptive practice homework quizzes inside commercial portals improve weak math students faster than static open PDFs?
Liam: [[Q23]] Actually yes—diagnostic instant algebra hints boosted weakest quartiles noticeably, yet once lecturers embedded identical open-source H5P interactive quizzes onto Moodle free, that gap evaporated cleanly!
Dr. Patel: Brilliant controlled comparison! Did screen-reading versus paper print influence heavy retention across complex organic reaction diagrams?
Maya: [[Q24]] Nearly seventy-four percent of surveyed chemistry students scrolled PDFs strictly for quick search lookups yet printed messy spiral booklets before final revision because flipping physical spreads spatialized enzyme maps better!
Dr. Patel: [[Q25]] Fascinating cognitive spatial insight! Watch one statistical risk in your Chapter Four ANOVA table: adjust clearly for honors lecture section timing, since honors freshmen opted heavily into early free trials.
Liam: [[Q26]] Fixed cleanly last night—stratifying baseline high-school math entry scores balanced both lecture streams fairly before running final covariance regressions.
Maya: [[Q27]] Another snag hit inclusive design: visually impaired readers praised clean open HTML web textbooks scaling effortlessly on braille readers, whereas locked commercial DRM viewers broke screen zoom!
Dr. Patel: [[Q28]] Emphasize that digital rights accessibility barrier prominently inside your executive summary—university procurement committees act fast on legal equality risks!
Liam: For our Senate Library Committee presentation, should we display detailed regression coefficients or real student cost-per-credit savings bars?
Dr. Patel: [[Q29]] Lead cleanly with cumulative cohort savings exceeding forty thousand pounds per single intro course!
Liam: [[Q30]] Concrete budget impact opens eyes fast—we will present that clearly Friday!`,
        questions: [
          {
            id: 'cd_listening_p24_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Drop-rate reduction seen when freshmen used free open-access chemistry manuals: ______ percent',
            correctAnswer: 'NINETEEN',
            explanation: 'Course withdrawals fell nineteen percent.'
          },
          {
            id: 'cd_listening_p24_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which administrative delay blocked poorer students from week-two commercial quizzes?',
            correctAnswer: 'GRANT PAYMENTS',
            explanation: 'Slow grant payments blocked buying expiring digital codes.'
          },
          {
            id: 'cd_listening_p24_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Open-source Moodle quiz tool matching commercial math practice boosts for free: ______',
            correctAnswer: 'H5P',
            explanation: 'Embedding H5P interactive quizzes closed the gap.'
          },
          {
            id: 'cd_listening_p24_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why did 74% of students still print physical booklets before final revision exams?',
            options: [
              'A. Laptop batteries died inside quiet libraries',
              'B. Turning physical pages improved spatial memory of complex diagrams',
              'C. Free campus printing quotas expired each December',
              'D. PDF viewer apps lacked dark mode brightness'
            ],
            correctAnswer: 'B',
            explanation: 'Flipping physical pages spatialized enzyme reaction maps better.'
          },
          {
            id: 'cd_listening_p24_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'ANOVA models must control for ______ section timing because strong entrants picked early free trials.',
            correctAnswer: 'HONORS',
            explanation: 'Honors freshmen opted disproportionately into early free trials.'
          },
          {
            id: 'cd_listening_p24_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Baseline student record balanced prior to running covariance checks: high-school ______ scores',
            correctAnswer: 'MATH',
            explanation: 'Stratified baseline high-school math entry scores.'
          },
          {
            id: 'cd_listening_p24_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What advantage did open HTML texts offer visually impaired learners?',
            options: [
              'A. Automated spoken audiobooks built into websites',
              'B. High-contrast yellow page borders',
              'C. Tactile embossing shipped free via postal mail',
              'D. Clean text scaling and braille-reader compatibility vs locked DRM apps'
            ],
            correctAnswer: 'D',
            explanation: 'Open HTML scaled smoothly on braille readers unlike locked DRM viewers.'
          },
          {
            id: 'cd_listening_p24_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which institutional governance group responds quickly to legal accessibility barriers?',
            correctAnswer: 'PROCUREMENT COMMITTEES',
            explanation: 'University procurement committees act fast on equality risks.'
          },
          {
            id: 'cd_listening_p24_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Annual student cohort savings highlighted for a single intro course: ______ thousand pounds',
            correctAnswer: 'FORTY',
            explanation: 'Savings exceeded forty thousand pounds per single course.'
          },
          {
            id: 'cd_listening_p24_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Day scheduled for presenting to the Senate Library Committee: ______',
            correctAnswer: 'FRIDAY',
            explanation: 'Presentation happens Friday.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Economic Transformation of Academic Publishing',
        audioScenario:
          'An economic historian lectures on how college textbook markets shifted from modest professor-written monographs to subscription-locked digital platforms.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Textbook Publishing Economics]
Lecturer: Between 1980 and 2020, undergraduate textbook prices across North America rose nearly four times faster than everyday household inflation—outpacing even hospital fees and gasoline!
Lecturer: [[Q31]] Economists pinpoint a textbook textbook flaw: unlike ordinary retail shoes where shoppers compare value directly, academic faculty choose assigned books while broke freshmen bear payment invoices passively.
Lecturer: [[Q32]] That buyer-chooser split left commercial publishers zero incentive to cut cover tags, letting top introductory calculus hardbacks climb quietly past two hundred dollars!
Lecturer: [[Q33]] Notice how used bookshops once kept inflation mildly in check: whenever campus students resold sturdy stitched bindings three or four times down student dorms, fresh print demand cooled rapidly.
Lecturer: [[Q34]] Seeking predictable recurring profits, publishers launched rapid "new editions" every thirty-six months—often merely shuffling end-of-chapter homework problem numbers while keeping fundamental calculus physics wholly untouched!
Lecturer: [[Q35]] Digital technology delivered the ultimate resale knockout punch: bundling single-use scratch access keys onto online homework grading portals permanently kills secondhand handover altogether!
Lecturer: [[Q36]] Once digital leases replaced physical property, students effectively rented chapters for sixteen weeks before accounts locked shut cleanly upon final exam night—preventing alumni keeping reference guides into early careers!
Lecturer: [[Q37]] In defense, major publishers argue interactive simulation labs, automated instant essay feedback, and anti-piracy encryption require armies of full-time software engineers absent in 1990s print shops.
Lecturer: [[Q38]] Challenging that monopoly, philanthropic grants built cooperative nonprofit open publishing presses like OpenStax, releasing rigorous peer-reviewed manuals free online alongside cheap twenty-dollar at-cost paperbacks!
Lecturer: [[Q39]] Yet university "Inclusive Access" blanket tuition-billing schemes spark fresh debate: rolling digital rental fees invisibly onto student bills trims list prices slightly yet strips students of free choice to shop cheaper used editions!
Lecturer: [[Q40]] Ultimately, sustainable academic publishing requires transparent pricing separating optional adaptive grading tools cleanly from open-licensed foundational human knowledge.`,
        questions: [
          {
            id: 'cd_listening_p24_lq31',
            number: 31,
            type: 'multiple_choice',
            questionText: 'What classic economic quirk weakens price competition in university textbooks?',
            options: [
              'A. Lecturers pick mandatory editions while students pay bills separately',
              'B. Paper pulp tariffs spike every August',
              'C. Campus bookstores pay monopoly university rents',
              'D. Printers restrict edition quantities seasonally'
            ],
            correctAnswer: 'A',
            explanation: 'Instructors choose titles while students pay invoices.'
          },
          {
            id: 'cd_listening_p24_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Subject whose thick intro textbook surpassed $200 under split buyer incentives: ______',
            correctAnswer: 'CALCULUS',
            explanation: 'Introductory calculus hardbacks surpassed $200.'
          },
          {
            id: 'cd_listening_p24_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'Which older retail trade once cooled annual new print runs across dormitories?',
            correctAnswer: 'USED BOOKSHOPS',
            explanation: 'Used bookshops resold sturdy editions down classes.'
          },
          {
            id: 'cd_listening_p24_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Interval at which publishers often rolled out slightly shuffled editions: ______ months',
            correctAnswer: 'THIRTY-SIX',
            explanation: 'New editions appeared every thirty-six months.'
          },
          {
            id: 'cd_listening_p24_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Bundling single-use access keys with digital homework portals destroys ______ resale value completely.',
            correctAnswer: 'SECONDHAND',
            explanation: 'Kills secondhand handover altogether.'
          },
          {
            id: 'cd_listening_p24_lq36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What long-term career drawback hits graduates under temporary 16-week digital book rentals?',
            options: [
              'A. Printing quotes rise after final grades release',
              'B. Locked expired accounts strip graduates of future workplace reference texts',
              'C. Alumni discounts vanish off campus store shelves',
              'D. Course transcripts withhold citation appendices'
            ],
            correctAnswer: 'B',
            explanation: 'Accounts lock shut after exams, keeping alumni from keeping reference books.'
          },
          {
            id: 'cd_listening_p24_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Modern staff group cited by commercial publishers to justify digital subscription costs: software ______',
            correctAnswer: 'ENGINEERS',
            explanation: 'Maintaining interactive platforms requires full-time software engineers.'
          },
          {
            id: 'cd_listening_p24_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Price of optional physical at-cost paperback copies from nonprofit OpenStax: $ ______',
            correctAnswer: 'TWENTY',
            explanation: 'Nonprofit paperbacks sell near twenty dollars.'
          },
          {
            id: 'cd_listening_p24_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'What billing scheme folds digital fees invisibly onto automatic university tuition statements?',
            correctAnswer: 'INCLUSIVE ACCESS',
            explanation: 'Blanket "Inclusive Access" tuition billing stirs debate.'
          },
          {
            id: 'cd_listening_p24_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How should universities balance fair book pricing with helpful digital quizzes?',
            options: [
              'A. Ban digital codes strictly across undergraduate departments',
              'B. Pay publisher royalties directly out of municipal library budgets',
              'C. Separate optional digital grading subscriptions cleanly from open textbooks',
              'D. Freeze textbook covers unchanged for ten consecutive years'
            ],
            correctAnswer: 'C',
            explanation: 'Separate optional grading tools cleanly from open foundational knowledge.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 25: Cookery School: Nutrition & Culinary Arts Evening Classes
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p25',
    testNumber: 25,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 25: Cookery School: Nutrition & Culinary Arts Evening Classes',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Cookery School: Nutrition & Culinary Arts Evening Classes.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Enrolling in Mediterranean & Plant-Protein Cookery',
        audioScenario:
          'A home cook phones the Culinary Nutrition School coordinator to register for a Thursday evening culinary workshop and clarify allergy rules.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Culinary School Registration Line]
Receptionist: Good afternoon, Saffron & Hearth Cookery School, Nadia speaking. How may I assist you?
Caller: Hello Nadia, I saw your autumn brochure and want to book a Thursday evening nutrition and Mediterranean knife-skills class.
Receptionist: [[Q1]] Lovely choice! Let me start a student enrolment card—could you confirm your surname? It is Davenport, spelled D-A-V-E-N-P-O-R-T.
Receptionist: [[Q2]] Thank you, Mr. Davenport. Our six-week Thursday evening series runs from 18:15 to 20:45, priced at 185 pounds including fresh organic market produce every session!
Caller: [[Q3]] Fantastic—are chef knives, steel peelers, and linen aprons supplied cleanly at benches, or should students pack tools? Commercial German paring knives and cast-iron skillets sit sterilized beside each burner, though students pack two airtight glass food jars each evening to carry simmered curries or sauces home!
Caller: [[Q4]] Easy enough! Wait—I carry a severe allergy to tree nuts, especially toasted almonds and cashews. Can kitchens isolate stations safely? Glad you alerted us early: our Teaching Kitchen strictly bans raw tree nuts and peanuts from all Thursday evening nutrition syllabi, substituting toasted sunflower or pumpkin seeds seamlessly!
Receptionist: [[Q5]] Note one non-negotiable footwear rule before stepping onto greasy tiled kitchen floors: wear flat closed-leather shoes with textured rubber soles—canvas flats or sandals fail kitchen health checks!
Caller: [[Q6]] Good reminder. Will recipe cards cover carbohydrate-glycemic swapping for guests cooking for diabetic family members? Yes, registered clinical nutritionist Chef Marco leads Week Three focusing squarely on slow-release wholegrain pulses and roasted root balancing!
Receptionist: [[Q7]] Where do evening learners park bicycles or unload bags cleanly without crossing busy downtown tram tracks? Pull round our rear delivery lane into Kitchen Gate Four where floodlit covered cycle hoops stand beside herb planters.
Caller: [[Q8]] Also, if flu strikes one Thursday mid-course, can a friend step into my empty stove spot cleanly? Simply phone our desk before midday Wednesday to transfer your seat cleanly free of rebooking charges!
Receptionist: [[Q9]] Should anyone crave extra knife-sharpening practice, arrive twenty minutes ahead of Week One for a complimentary whetstone honing demonstration beside Station A!
Caller: [[Q10]] Thanks Nadia! Which confirmation code should I type onto your evening online invoice? Enter Course Reference CK-452 before Friday at four.`,
        questions: [
          {
            id: 'cd_listening_p25_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'DAVENPORT',
            explanation: 'Spelled D-A-V-E-N-P-O-R-T.'
          },
          {
            id: 'cd_listening_p25_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Six-week Thursday workshop tuition including organic ingredients: £ ______',
            correctAnswer: '185',
            explanation: 'Tuition costs 185 pounds.'
          },
          {
            id: 'cd_listening_p25_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'What containers must cooks bring from home to carry leftover dishes safely?',
            correctAnswer: 'GLASS FOOD JARS',
            explanation: 'Bring two airtight glass food jars.'
          },
          {
            id: 'cd_listening_p25_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Crunchy seeds substituted in recipes banning almonds and peanuts: sunflower or ______',
            correctAnswer: 'PUMPKIN',
            explanation: 'Substitutes sunflower or pumpkin seeds cleanly.'
          },
          {
            id: 'cd_listening_p25_lq5',
            number: 5,
            type: 'multiple_choice',
            questionText: 'Why are flat canvas sneakers rejected in teaching kitchens?',
            options: [
              'A. Spilled olive oil stains cotton fabric quickly',
              'B. Canvas laces drag near low oven heaters',
              'C. Only closed leather shoes with grip rubber soles pass safety checks',
              'D. Uniform rules specify plain dark clogs exclusively'
            ],
            correctAnswer: 'C',
            explanation: 'Flat closed-leather shoes with textured rubber soles are mandatory.'
          },
          {
            id: 'cd_listening_p25_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Week led by nutritionist Chef Marco focusing on slow-release wholegrain pulses: Week ______',
            correctAnswer: 'THREE',
            explanation: 'Chef Marco leads Week Three.'
          },
          {
            id: 'cd_listening_p25_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Where do floodlit cycle racks sit along the rear kitchen lane?',
            correctAnswer: 'KITCHEN GATE FOUR',
            explanation: 'Beside herb planters at Kitchen Gate Four.'
          },
          {
            id: 'cd_listening_p25_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How can an enrolled cook transfer an unused class seat when ill?',
            options: [
              'A. Call the desk prior to Wednesday noon to reassign free',
              'B. Send a friend directly holding your printed receipt',
              'C. Pay a ten-pound kitchen insurance swap fee',
              'D. Switch automatically into Saturday afternoon leftovers classes'
            ],
            correctAnswer: 'A',
            explanation: 'Phone before Wednesday midday to transfer seats free.'
          },
          {
            id: 'cd_listening_p25_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Free pre-session skill taught twenty minutes early on Week One: ______ honing',
            correctAnswer: 'WHETSTONE',
            explanation: 'Complimentary whetstone sharpening demo beside Station A.'
          },
          {
            id: 'cd_listening_p25_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Online course reference required before Friday 4 PM: ______',
            correctAnswer: 'CK-452',
            explanation: 'Enter Course Reference CK-452.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Kitchen Hygiene Standards & Culinary Station Tour',
        audioScenario:
          'A head culinary instructor briefs new evening cooks on food temperature zones, colour-coded chopping boards, and induction safety.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Teaching Kitchen Briefing]
Chef: Welcome everyone! Tie long hair neatly behind clean linen caps and wash palms thoroughly at the warm pedal-tap basins right beside Station One before sliding aprons over shirts.
Chef: [[Q11]] Glance down along every stainless prep table: color-coded chopping boards prevent sneaky cross-contamination—green boards strictly slice washed salad herbs, whereas red plastic marks exclusively raw poultry!
Chef: [[Q12]] Walk carefully around our gleaming glass induction cooktops—because ceramic rings warm iron pan bottoms magically without glowing red flames, careless cooks frequently lay printed recipes straight atop residual hot zones!
Chef: [[Q13]] Notice every spice jar shelf carries stainless magnetic digital meat thermometers—verify roasted chicken thighs climb squarely past seventy-five Celsius core heat rather than guessing by pale juice colour!
Chef: [[Q14]] Inside Pantry Corridor West, organic dried chickpeas and heirloom black lentils sit sealed inside airtight mason canisters marked clearly with soaking dates so starches cook evenly in half the gas minutes.
Chef: [[Q15]] Remember the golden knife-carry rule when crossing bustling aisles toward sinks: hold pointed tips pointing squarely downward pressed cleanly beside your thigh while shouting clear "Knife Behind!" warnings!
Chef: [[Q16]] Our Zero-Waste Broth Pot simmers quietly beside Sink Four all evening—tuck crisp celery leaves, garlic skins, and carrot trimmings inside rather than tipping flavour straight into municipal compost buckets!
Chef: [[Q17]] Never toss hot frying oil down stainless sink drains—cool cooking grease completely inside stoneware pouring jugs before pouring cleanly into biofuel collection drums beside Back Porch Door B!
Chef: [[Q18]] Every Tuesday lunch hour, apprentice learners invite campus staff members in for five-pound tasting buffets showcasing crisp zero-waste seasonal soup bowls!
Chef: [[Q19]] If minor steam burns or knuckle nicks occur mid-chopping, cold antiseptic burns gel sits cleanly inside the marked blue steel first-aid box mounted directly above the ice machine.
Chef: [[Q20]] Collect clean muslin herb bouquet twine from brass spool dispensers along Center Island before stepping over to your assigned induction station!`,
        questions: [
          {
            id: 'cd_listening_p25_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Chopping board colour assigned exclusively to raw poultry: ______',
            correctAnswer: 'RED',
            explanation: 'Red plastic marks raw poultry exclusively.'
          },
          {
            id: 'cd_listening_p25_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'What hazard arises unexpectedly on modern glass induction cooktops?',
            options: [
              'A. Gas pilot flames blow out when overhead vents surge',
              'B. Induction coils interfere with pacemaker batteries',
              'C. Non-magnetic aluminum pots crack glass plates immediately',
              'D. Residual heat lingers quietly without glowing red coils, scorching paper notes'
            ],
            correctAnswer: 'D',
            explanation: 'Zones stay hot invisibly without glowing red, tempting cooks to set paper down.'
          },
          {
            id: 'cd_listening_p25_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Safe core temperature Celsius confirming chicken thighs are fully cooked: ______',
            correctAnswer: 'SEVENTY-FIVE',
            explanation: 'Confirm cores climb past seventy-five Celsius.'
          },
          {
            id: 'cd_listening_p25_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'Mason pantry canisters list exact ______ dates so dried lentils cook rapidly.',
            correctAnswer: 'SOAKING',
            explanation: 'Canisters list clear soaking dates.'
          },
          {
            id: 'cd_listening_p25_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'Verbal warning cooks call aloud while walking behind peers carrying blades:',
            correctAnswer: 'KNIFE BEHIND',
            explanation: 'Warn loudly by calling "Knife Behind!".'
          },
          {
            id: 'cd_listening_p25_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Kitchen feature turning onion peels and carrot trimmings into stock rather than rubbish: ______ Pot',
            correctAnswer: 'BROTH',
            explanation: 'Zero-Waste Broth Pot sits beside Sink Four.'
          },
          {
            id: 'cd_listening_p25_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'What happens to cooled waste cooking oil at the school?',
            options: [
              'A. Flushed through grease-trap sink grinders',
              'B. Poured into stoneware jugs for biofuel collection drums',
              'C. Blended into winter birdseed fat blocks',
              'D. Sealed inside cardboard cartons for general bins'
            ],
            correctAnswer: 'B',
            explanation: 'Cooled grease enters biofuel drums via Back Porch Door B.'
          },
          {
            id: 'cd_listening_p25_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Price charged to campus staff at Tuesday apprenticeship soup tasting buffets: £ ______',
            correctAnswer: 'FIVE',
            explanation: 'Five-pound tasting buffets showcase zero-waste soups.'
          },
          {
            id: 'cd_listening_p25_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Which kitchen appliance sits directly below the blue steel first-aid box?',
            correctAnswer: 'ICE MACHINE',
            explanation: 'Mounted directly above the ice machine.'
          },
          {
            id: 'cd_listening_p25_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Cooking material picked up from brass spools along Center Island: muslin ______',
            correctAnswer: 'TWINE',
            explanation: 'Grab muslin herb bouquet twine.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Testing Salt Reduction Without Flavour Loss',
        audioScenario:
          'Food science undergraduates Omar and Chloe present blind soup-tasting trials exploring potassium salt swaps and umami herbs to Dr. Gordon.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Culinary Food Science Supervision]
Dr. Gordon: Good morning Omar and Chloe. Did sixty blind volunteer tasters spot which vegetable broth batches trimmed forty percent of table sodium?
Omar: [[Q21]] Barely one in five noticed! Replacing ordinary salt cleanly with roasted dried shiitake mushroom powder and toasted tomato paste fooled taste buds effortlessly through natural umami glutamate!
Chloe: [[Q22]] Conversely, simple twenty-percent potassium chloride salt substitute alone left sharp metallic bitter aftertastes across thin clear potato broths until squeezed lemon juice masked harsh edges!
Dr. Gordon: Brilliant sensory balance between acidity and glutamate! Did serving soup temperature accidentally skew volunteer sweetness ratings across testing rooms?
Omar: [[Q23]] Dramatic trap! Batches served lukewarm near forty-five Celsius tasted noticeably saltier than identical scalding-hot pots straight off burners—human tongue taste receptors peak near warm mild temperatures!
Dr. Gordon: [[Q24]] Smart control! Make sure digital infrared probe loggers confirm identical sixty-degree ladle temperatures across every tasting cup before Tuesday’s panel begins!
Chloe: [[Q25]] One annoying psychological interference surfaced on feedback forms: naming recipes "Low-Sodium Heart Soup" made tasters expect cardboard blandness immediately, trimming liking scores eighteen points versus identical broths labeled "Herb Kitchen Reserve!"
Dr. Gordon: Classic expectation framing bias! How are you sequencing cup order cleanly so salty lingering aftertaste doesn’t contaminate mild broths next?
Omar: [[Q26]] Every volunteer rinses palates thoroughly using unsalted water plus plain crisp rice crackers across mandatory ninety-second neutral gaps between small cups!
Chloe: [[Q27]] Regarding industrial shelf costs, dried wild mushroom extracts priced steeply compared to roasted onion skins rescued free from cafeteria prep bins!
Dr. Gordon: [[Q28]] Include waste-upcycled roasted onion skin infusions directly beside mushroom granules in your commercial feasibility cost matrix!
Omar: [[Q29]] For Friday’s Hospitality Faculty poster session, should we share chemical amino-acid spectra or serve tiny sample demitasse tasting flights?
Dr. Gordon: [[Q30]] Bring small thermos flasks pouring both unlabeled control and reduced-sodium broths live—one spoonful convinces stubborn catering directors far quicker than charts!`,
        questions: [
          {
            id: 'cd_listening_p25_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Umami ingredient alongside tomato paste masking 40% sodium cuts seamlessly: ______ powder',
            correctAnswer: 'SHIITAKE',
            explanation: 'Roasted dried shiitake mushroom powder fooled taste buds.'
          },
          {
            id: 'cd_listening_p25_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which citrus ingredient hid the metallic bitterness of potassium chloride substitutes?',
            correctAnswer: 'LEMON JUICE',
            explanation: 'Squeezed lemon juice masked bitter metallic edges.'
          },
          {
            id: 'cd_listening_p25_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How did serving temperature alter tasters’ salt perception?',
            options: [
              'A. Moderately warm 45°C soup tasted saltier than scalding-hot samples',
              'B. Ice-cold gazpacho tasted doubly acidic',
              'C. Boiling soup stripped volatile herb aromas cleanly',
              'D. Cool liquids dulled bitter metallic aftertastes'
            ],
            correctAnswer: 'A',
            explanation: 'Luke-warm 45°C samples tasted noticeably saltier than scalding pots.'
          },
          {
            id: 'cd_listening_p25_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Standardized serving temperature fixed for Tuesday’s tasting panel: ______ degrees',
            correctAnswer: 'SIXTY',
            explanation: 'Maintain identical sixty-degree ladle temperatures.'
          },
          {
            id: 'cd_listening_p25_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Descriptive menus reading "Low-______ Heart Soup" lowered liking scores strictly via negative bias.',
            correctAnswer: 'SODIUM',
            explanation: 'Calling bowls "Low-Sodium Heart Soup" dropped scores 18 points.'
          },
          {
            id: 'cd_listening_p25_lq26',
            number: 26,
            type: 'short_answer',
            questionText: 'Which bland solid snack clears salty taste between tasting cups?',
            correctAnswer: 'RICE CRACKERS',
            explanation: 'Volunteers ate plain crisp rice crackers between cups.'
          },
          {
            id: 'cd_listening_p25_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Cheap zero-waste flavour alternative salvaged from cafeteria prep waste: ______ skins',
            correctAnswer: 'ONION',
            explanation: 'Roasted onion skins salvaged free from prep bins.'
          },
          {
            id: 'cd_listening_p25_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Section where cheap upcycled infusions belong beside extracts: feasibility ______ matrix',
            correctAnswer: 'COST',
            explanation: 'Place inside commercial feasibility cost matrix.'
          },
          {
            id: 'cd_listening_p25_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'What live element will accompany Friday’s poster charts?',
            options: [
              'A. Microscope slides showing dried mushroom cells',
              'B. Ingredient takeaway packs for professors',
              'C. Video clips timing cafeteria prep speeds',
              'D. Thermos pours comparing control and low-salt soups live'
            ],
            correctAnswer: 'D',
            explanation: 'Pour control and reduced-sodium broths live from small flasks.'
          },
          {
            id: 'cd_listening_p25_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Industry leaders won over instantly by live tasting spoonfuls: ______ directors',
            correctAnswer: 'CATERING',
            explanation: 'Convinces stubborn catering directors swiftly.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Science and History of Microbial Food Fermentation',
        audioScenario:
          'A food microbiology professor lectures on how ancient fermentation practices tamed spoilage microbes without electricity and now power urban nutrition.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Microbiology of Fermentation Lecture]
Lecturer: Thousands of years before mechanical refrigerators hummed inside corner kitchens, human survival across harsh frozen winters hinged upon cultivating invisible microscopic partners cleanly.
Lecturer: [[Q31]] Fresh raw milk, cabbage leaves, and barley porridge spoil destructively within days—unless ancient cooks salted or warmed batches deliberately, steering harmless lactic acid bacteria to outrace deadly pathogens!
Lecturer: [[Q32]] As lactobacilli feast peacefully on plant sugars, lactic acid floods brine rapidly downward below pH four, locking out dangerous botulism spores permanently without boiling away delicate vitamin C!
Lecturer: [[Q33]] Notice geographic culinary elegance: coastal Roman towns relied upon salted anchovy barrels fermented inside clay amphorae under blistering Mediterranean sun to brew rich liquid umami seasoning called garum!
Lecturer: [[Q34]] Remarkably, nineteenth-century sourdough bakers guarded prized mother starter pastes carefully inside wooden flour chests, never knowing invisible wild yeasts partnered alongside sour bacteria inside every loaf!
Lecturer: [[Q35]] Louis Pasteur cracked that mystery during the 1850s under brass microscopes, proving living yeast cells drove bubbly brewery fermentation—sparking pure sterile monoculture yeast strains cleanly afterwards!
Lecturer: [[Q36]] Yet hyper-industrialized supermarket bread traded slow eighteen-hour microbial magic for harsh chemical dough improvers and frantic instant baker’s yeast, leaving heavy gluten chains barely broken down!
Lecturer: [[Q37]] Nutritionists rediscovered recently why leisurely sourdough proofing wins gut comfort: wild bacteria digest tricky phytic acid crusts surrounding wheat bran, unlocking trapped dietary iron and zinc minerals effortlessly!
Lecturer: [[Q38]] Similarly, traditional Japanese miso pastes pair steamed soybeans alongside hardy koji mold—Aspergillus oryzae—splitting complex bean proteins patiently across twenty-four oak-barrel months into sweet savory amino soups!
Lecturer: [[Q39]] Beware amateur safety myths: fermenting fresh crisp vegetables demands strictly zero oxygen beneath briny cabbage weights—floaters exposed above liquid risk fuzzy surface kahm mold ruining crunchy jars!
Lecturer: [[Q40]] Today’s precision bio-fermentation unites ancient cellar microbial choreography with modern clinical nutrition—crafting vibrant probiotic staples effortlessly without synthetic chemical preservatives.`,
        questions: [
          {
            id: 'cd_listening_p25_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Beneficial bacteria multiplying rapidly in salted cabbage brine: ______ acid bacteria',
            correctAnswer: 'LACTIC',
            explanation: 'Harmless lactic acid bacteria outcompete deadly pathogens.'
          },
          {
            id: 'cd_listening_p25_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which fragile nutrient survives inside fermented cabbage without heat pasteurization?',
            correctAnswer: 'VITAMIN C',
            explanation: 'Locks out botulism without boiling away vitamin C.'
          },
          {
            id: 'cd_listening_p25_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Ancient fermented Roman anchovy liquid seasoning brewed inside sun-warmed jars: ______',
            correctAnswer: 'GARUM',
            explanation: 'Brewed rich liquid umami seasoning called garum.'
          },
          {
            id: 'cd_listening_p25_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What did nineteenth-century sourdough bakers fail to understand about guarded flour starters?',
            options: [
              'A. Wooden chests leached protective oaks tannins',
              'B. Warm winter hearths killed off wild rye enzymes',
              'C. Living wild yeasts worked invisibly alongside sour acid bacteria',
              'D. Sea salt slowed flour swelling overnight'
            ],
            correctAnswer: 'C',
            explanation: 'Bakers didn’t know invisible wild yeasts partnered with sour bacteria.'
          },
          {
            id: 'cd_listening_p25_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Decade when Louis Pasteur proved microscopic living yeast powered fermentation: ______',
            correctAnswer: '1850S',
            explanation: 'Louis Pasteur solved the mystery during the 1850s.'
          },
          {
            id: 'cd_listening_p25_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Speedy supermarket breads skip long fermentation by relying on instant yeast and ______ improvers.',
            correctAnswer: 'CHEMICAL',
            explanation: 'Relies on chemical dough improvers and instant yeast.'
          },
          {
            id: 'cd_listening_p25_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which two essential dietary minerals become absorbable when sourdough bacteria dissolve phytic acid?',
            correctAnswer: 'IRON AND ZINC',
            explanation: 'Unlocks trapped dietary iron and zinc.'
          },
          {
            id: 'cd_listening_p25_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Noble starter mold cultivated on soybeans to craft aged Japanese miso: ______',
            correctAnswer: 'KOJI',
            explanation: 'Steamed soybeans combine with hardy koji mold.'
          },
          {
            id: 'cd_listening_p25_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Why must amateur home fermenters submerge cabbage leaves completely below liquid brine?',
            options: [
              'A. Submerged jars maintain cooler brine temperatures',
              'B. Vegetables exposed to air above brine risk unwanted surface mold',
              'C. Glass lids crack under buoyant rising bubbles',
              'D. Salt crystals settle only along top layers'
            ],
            correctAnswer: 'B',
            explanation: 'Pieces floating into oxygen risk fuzzy surface mold.'
          },
          {
            id: 'cd_listening_p25_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What benefit unites modern bio-fermentation with traditional food cellars?',
            options: [
              'A. Eliminating cold freight refrigeration costs globally',
              'B. Replacing bakeries with modular automated tanks',
              'C. Compressing vegetable harvests into dry military rations',
              'D. Creating nutritious probiotic staples naturally without synthetic preservatives'
            ],
            correctAnswer: 'D',
            explanation: 'Crafts probiotic staples cleanly without synthetic preservatives.'
          }
        ]
      }
    ]
  })
];
