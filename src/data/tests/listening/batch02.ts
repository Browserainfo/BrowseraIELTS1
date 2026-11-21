/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_02: TestItem[] = [
  // =========================================================================
  // PRACTICE 6: Campus Sports Complex & Fitness Class Enrollment
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p6',
    testNumber: 6,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 6: Campus Sports Complex & Fitness Class Enrollment',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Campus Sports Complex & Fitness Class Enrollment.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Sports Center Membership & Class Sign-Up',
        audioScenario:
          'An undergraduate speaks with a receptionist at the campus athletic complex to compare off-peak gym memberships and swimming classes.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Sports Reception Desk]
Receptionist: Welcome to Westgate Sports Complex. How can I get you started today?
Student: Hi, I would like to sign up for the gym and join an evening badminton or swimming coaching group.
Receptionist: [[Q1]] Great! Let me enter your personal profile first—what is your surname? It is Callahan, spelled C-A-L-L-A-H-A-N.
Receptionist: [[Q2]] Thanks. We offer two student plans: Peak Access covers any hour, whereas Off-Peak limits entry to weekdays before 16:30 and all day Sundays for 115 pounds per term.
Student: Off-Peak fits my timetable nicely since most of my lectures wrap up by two. Can I still add intermediate lap-swimming coaching?
Receptionist: [[Q3]] Yes, coach-led lane sessions run on Wednesday evenings at seven inside the fifty-metre Olympic pool.
Student: [[Q4]] Perfect. Should I book an equipment orientation before touching the Olympic free-weights floor? Yes, every new member completes a mandatory twenty-minute safety induction—our next open slot is Friday morning in Studio Two.
Student: [[Q5]] What kind of lock do changing-room lockers require? Please bring your own padlock with a seven-millimetre shackle, or hire a digital wristband at reception for two pounds.
Receptionist: [[Q6]] If you wish to book indoor squash courts with a friend, online reservations unlock precisely seven days ahead at midnight.
Student: [[Q7]] Is there a charge if my flatmate accompanies me as an external non-student guest? Guests pay a day pass of nine pounds when signed in at the turnstile.
Receptionist: [[Q8]] Before you swim, remember that street trainers must stay in the lobby cubbies; only clean indoor non-marking shoes are permitted inside court halls.
Student: [[Q9]] Good to know. What happens if I injure my knee mid-semester and cannot attend for two months? Present a campus clinic medical note and we pause your subscription without administrative fees.
Receptionist: [[Q10]] To complete activation right now, please enter your emergency contact phone and medical clearance tick on the white tablet beside my desk.`,
        questions: [
          {
            id: 'cd_listening_p6_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Member surname: ______',
            correctAnswer: 'CALLAHAN',
            explanation: 'Spelled C-A-L-L-A-H-A-N.'
          },
          {
            id: 'cd_listening_p6_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Term fee for the Off-Peak student gym plan: £ ______',
            correctAnswer: '115',
            explanation: 'The Off-Peak student plan costs 115 pounds per term.'
          },
          {
            id: 'cd_listening_p6_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Evening of coach-led lap-swimming classes: ______',
            correctAnswer: 'WEDNESDAY',
            explanation: 'Sessions run on Wednesday evenings at seven.'
          },
          {
            id: 'cd_listening_p6_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Studio hosting Friday’s free-weights safety induction: Studio ______',
            correctAnswer: 'TWO',
            explanation: 'The next safety induction slot is in Studio Two.'
          },
          {
            id: 'cd_listening_p6_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'What size padlock shackle fits changing-room lockers?',
            correctAnswer: 'SEVEN-MILLIMETRE',
            explanation: 'Lockers take a padlock with a seven-millimetre shackle.'
          },
          {
            id: 'cd_listening_p6_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'How many days ahead do squash court bookings open: ______ days',
            correctAnswer: 'SEVEN',
            explanation: 'Online bookings unlock seven days in advance.'
          },
          {
            id: 'cd_listening_p6_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Turnstile guest day-pass fee for external friends: £ ______',
            correctAnswer: 'NINE',
            explanation: 'Non-student guests pay nine pounds per visit.'
          },
          {
            id: 'cd_listening_p6_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What footwear rule applies inside the indoor court halls?',
            options: [
              'A. Barefoot play only on wooden surfaces',
              'B. Running trainers worn strictly from the car park',
              'C. Clean indoor shoes with non-marking soles',
              'D. Plastic overshoes rented at reception'
            ],
            correctAnswer: 'C',
            explanation: 'Only clean indoor non-marking shoes are permitted inside courts.'
          },
          {
            id: 'cd_listening_p6_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'How can a member freeze their membership during a two-month knee recovery?',
            options: [
              'A. Submit a campus clinic medical note',
              'B. Transfer the pass temporarily to a sibling',
              'C. Pay a half-price dormant holding fee',
              'D. Switch manually to an annual billing cycle'
            ],
            correctAnswer: 'A',
            explanation: 'Presenting a clinic medical note freezes the subscription fee-free.'
          },
          {
            id: 'cd_listening_p6_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'What must the student do immediately at the desk to finish enrollment?',
            options: [
              'A. Have a passport photograph printed',
              'B. Collect a magnetic locker band',
              'C. Pay the first term in cash before leaving',
              'D. Complete emergency contact and medical fields on the white tablet'
            ],
            correctAnswer: 'D',
            explanation: 'Fill in emergency contact and medical clearance on the white tablet.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Upgraded Athletics Pavilion & Aquatic Safety',
        audioScenario:
          'A sports center manager welcomes clubs to the newly built trackside pavilion and highlights pool rules and physiotherapy clinics.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Athletics Complex Welcome]
Manager: Welcome captains and society presidents to the expanded Westgate Athletic Village!
Manager: [[Q11]] Outside, our eight-lane running track was resurfaced with recycled rubber granules designed to lower shin impact during winter sprint training.
Manager: [[Q12]] Inside the aquatic hall, slow, medium, and fast swimming lanes circulate clockwise during mornings and reverse every Friday for triathlon drills.
Manager: [[Q13]] Notice that underwater photography—even with waterproof action cameras—remains strictly prohibited across all public swim hours for privacy protection.
Manager: [[Q14]] Climb to the balcony level and you enter our indoor bouldering wall, featuring colour-coded climbing routes reset completely every six weeks.
Manager: [[Q15]] Qualified belay partners are unnecessary on the bouldering side because four-metre high walls sit over deep shock-absorbing foam mats.
Manager: [[Q16]] Down the eastern passage lies the student sports-injury clinic, offering subsidised thirty-minute physiotherapy assessments on Monday and Thursday mornings.
Manager: [[Q17]] Athletes preparing for inter-varsity rowing finals may reserve high-altitude hypoxia masks inside the physiology suite by submitting coach authorization.
Manager: [[Q18]] Remember our nutrition kiosk only stocks glassless sports bottles—cans and breakable glass flasks are banned inside every weight room.
Manager: [[Q19]] On match Saturdays when external visiting teams arrive, general student parking closes at eight so shuttle coaches can unload safely near Pitch One.
Manager: [[Q20]] Before heading down to the courts, collect your yellow team captain swipe-keys from the equipment cage behind the café.`,
        questions: [
          {
            id: 'cd_listening_p6_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Recycled surface material lowering shin impact on the track: ______ granules',
            correctAnswer: 'RUBBER',
            explanation: 'Resurfaced using recycled rubber granules.'
          },
          {
            id: 'cd_listening_p6_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Weekly day when pool lane direction switches for triathlon practice: ______',
            correctAnswer: 'FRIDAY',
            explanation: 'Lanes reverse every Friday for triathlon drills.'
          },
          {
            id: 'cd_listening_p6_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why are waterproof action cameras banned during public pool hours?',
            options: [
              'A. Chlorine corrodes electronic batteries',
              'B. Swimmer privacy protection rules prohibit underwater filming',
              'C. Camera housings crack tiled lane floors',
              'D. Lifeguards cannot monitor tripod mounts'
            ],
            correctAnswer: 'B',
            explanation: 'Underwater photography is banned for privacy protection.'
          },
          {
            id: 'cd_listening_p6_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'Bouldering routes on the balcony climbing wall are reset every ______ weeks.',
            correctAnswer: 'SIX',
            explanation: 'Routes are reset completely every six weeks.'
          },
          {
            id: 'cd_listening_p6_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'What cushions climbers beneath the four-metre bouldering wall?',
            correctAnswer: 'FOAM MATS',
            explanation: 'Deep shock-absorbing foam mats sit below.'
          },
          {
            id: 'cd_listening_p6_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Injury clinic treatment available Monday and Thursday mornings: ______',
            correctAnswer: 'PHYSIOTHERAPY',
            explanation: 'Subsidised physiotherapy assessments run Monday and Thursday mornings.'
          },
          {
            id: 'cd_listening_p6_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Approval needed to book hypoxia masks in the physiology suite: ______ authorization',
            correctAnswer: 'COACH',
            explanation: 'Requires formal coach authorization.'
          },
          {
            id: 'cd_listening_p6_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'Besides metal cans, what container material is banned from weight rooms?',
            correctAnswer: 'GLASS FLASKS',
            explanation: 'Cans and breakable glass flasks are banned.'
          },
          {
            id: 'cd_listening_p6_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Why does general parking close at 8 AM on match Saturdays?',
            options: [
              'A. Visiting team shuttle coaches need unloading space by Pitch One',
              'B. Track officials conduct outdoor timer checks',
              'C. Groundkeepers repaint parking lane boundaries',
              'D. Local marathons close access streets'
            ],
            correctAnswer: 'A',
            explanation: 'Shuttle coaches unload visiting squads near Pitch One.'
          },
          {
            id: 'cd_listening_p6_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Location where team captains pick up yellow swipe-keys: equipment ______',
            correctAnswer: 'CAGE',
            explanation: 'Keys sit at the equipment cage behind the café.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring Recovery in Student Rowers',
        audioScenario:
          'Sports science students Keira and Jonah present resting heart-rate tracking protocols to Dr. Okafor.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Sports Physiology Research Meeting]
Dr. Okafor: Good afternoon Keira and Jonah. How are your baseline heart-rate logs shaping up across the university rowing squad?
Keira: [[Q21]] Wearing chest-strap monitors overnight gave far cleaner variability readings than optical wristwatches, which slipped whenever athletes rolled onto their elbows.
Jonah: [[Q22]] We compared morning wellness diaries against sprint power tests across thirty-two rowers over an eight-week winter training block.
Dr. Okafor: Impressive retention! Did midterm exam stress distort physiological markers independently of physical boat mileage?
Keira: [[Q23]] Yes—during essay submission week, resting heart rates stayed elevated by five beats per minute even when coaches cut water sessions in half.
Dr. Okafor: [[Q24]] How are you standardizing hydration before morning blood lactate pinpricks? Every athlete drinks four hundred millilitres of plain water thirty minutes prior to lab entry.
Jonah: [[Q25]] One technical flaw surfaced early: two coxed-four crews trained on windy river bends while heavyweights stayed indoors on ergometers, skewing external workload metrics.
Dr. Okafor: Smart observation. How did you reconcile river wind resistance with stationary rowing machine watts?
Keira: [[Q26]] Dr. Patel lent us oarlock telemetry sensors that measure actual paddle blade force directly on the water.
Jonah: [[Q27]] Regarding dietary tracking, paper food logs proved hopeless—compliance plunged after day ten until we switched to quick meal photos on a private app.
Dr. Okafor: [[Q28]] Even with meal photographs, watch out for hidden portion-size inaccuracies in evening pasta dishes cooked at shared dormitories.
Keira: [[Q29]] For our dissertation presentation slides, should we chart all thirty-two athletes individually or cluster them into novice versus varsity tiers?
Dr. Okafor: [[Q30]] Group them cleanly by novice and varsity tier, reserving individual trace anomalies for your technical appendix table.`,
        questions: [
          {
            id: 'cd_listening_p6_lq21',
            number: 21,
            type: 'short_answer',
            questionText: 'Which wearable sensor produced cleaner overnight heart data than wristwatches?',
            correctAnswer: 'CHEST-STRAP MONITORS',
            explanation: 'Chest-strap monitors avoided wrist slippage overnight.'
          },
          {
            id: 'cd_listening_p6_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Duration of the winter rowing study block: ______ weeks',
            correctAnswer: 'EIGHT',
            explanation: 'Studied thirty-two rowers across an eight-week winter block.'
          },
          {
            id: 'cd_listening_p6_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What happened to athletes’ resting heart rates during academic essay deadlines?',
            options: [
              'A. They fell sharply due to reduced river practice',
              'B. Monitors recorded missing data due to overnight studying',
              'C. They stayed unchanged regardless of study hours',
              'D. They rose by five beats per minute despite halved water sessions'
            ],
            correctAnswer: 'D',
            explanation: 'Resting heart rates rose five beats per minute even with reduced rowing.'
          },
          {
            id: 'cd_listening_p6_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Blood test standardized by pre-lab water intake: ______ test',
            correctAnswer: 'LACTATE',
            explanation: 'Hydration was standardized before morning blood lactate pinpricks.'
          },
          {
            id: 'cd_listening_p6_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Indoor training machines used by heavyweight rowers: ______',
            correctAnswer: 'ERGOMETERS',
            explanation: 'Heavyweights trained indoors on stationary ergometers.'
          },
          {
            id: 'cd_listening_p6_lq26',
            number: 26,
            type: 'summary_completion',
            questionText: 'Oarlock telemetry sensors directly measured ______ force out on the river.',
            correctAnswer: 'BLADE',
            explanation: 'Oarlock sensors measure actual paddle blade force.'
          },
          {
            id: 'cd_listening_p6_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'Why did Jonah drop written nutrition diaries after ten days?',
            options: [
              'A. Coaches prohibited calorie tracking mid-season',
              'B. Paper forms went missing at the boathouse',
              'C. Compliance plummeted until switching to quick meal photos',
              'D. Athletes misunderstood protein gram conversions'
            ],
            correctAnswer: 'C',
            explanation: 'Compliance dropped after day ten until switching to meal photos.'
          },
          {
            id: 'cd_listening_p6_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Dietary estimation risk noted in dorm pasta meals: ______ inaccuracies',
            correctAnswer: 'PORTION-SIZE',
            explanation: 'Meal photos still mask hidden portion-size inaccuracies.'
          },
          {
            id: 'cd_listening_p6_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'How will Keira and Jonah organize main presentation charts?',
            options: [
              'A. One separate chart for each athlete',
              'B. Grouped by novice versus varsity experience tiers',
              'C. Ordered by athlete height and weight',
              'D. Split by male versus female dormitory halls'
            ],
            correctAnswer: 'B',
            explanation: 'Dr. Okafor advises clustering into novice and varsity tiers.'
          },
          {
            id: 'cd_listening_p6_lq30',
            number: 30,
            type: 'short_answer',
            questionText: 'Where should exceptional individual data anomalies be placed?',
            correctAnswer: 'APPENDIX TABLE',
            explanation: 'Keep anomalies inside the technical appendix table.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Biomechanics of Modern Athletic Surfaces',
        audioScenario:
          'A materials science lecturer traces how stadium track and court surfaces shifted from cinder dirt to tuned synthetic polymers.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Sports Surface Engineering]
Lecturer: Athletes rarely ponder what sits directly beneath their spikes, yet surface engineering explains half the drop in modern sprint times.
Lecturer: [[Q31]] Before 1960, championship tracks consisted of crushed coal cinders mixed with clay, turning into sticky ruts after heavy afternoon rain.
Lecturer: [[Q32]] Ground crews spent hours rolling and watering cinder ovals between heats, meaning finalists often ran on vastly uneven compaction compared to morning qualifiers.
Lecturer: [[Q33]] The turning point came at the 1968 Mexico City Olympics, where polyurethane synthetic tracks delivered identical energy return regardless of torrential cloudbursts.
Lecturer: [[Q34]] Biomechanists soon noticed a delicate balance: overly soft foam steals valuable push-off elasticity, slowing sprint cadence by precious milliseconds.
Lecturer: [[Q35]] Conversely, rigid concrete-hard surfaces maximize energy bounce yet trigger painful stress fractures across shins and metatarsal bones during long workouts.
Lecturer: [[Q36]] Modern vulcanized rubber sheets solve this paradox using dual-layer geometry: dense dimpled tops supply spike grip above cushioned honeycomb bases.
Lecturer: [[Q37]] Meanwhile, artificial turf evolved far beyond abrasive green nylon carpet welded over asphalt used in 1970s baseball stadiums.
Lecturer: [[Q38]] Contemporary third-generation pitches embed tall polyethylene grass blades inside elastic infill made of cork or crushed walnut shells rather than crumb rubber.
Lecturer: [[Q39]] Organic cork infill lowers summer pitch surface temperatures by up to twelve degrees while stopping microplastic fragments washing down city storm drains.
Lecturer: [[Q40]] Future indoor arenas are even trialing embedded piezoelectric floor tiles capable of capturing athlete footstep kinetics for real-time stride diagnostics.`,
        questions: [
          {
            id: 'cd_listening_p6_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Primary pre-1960 track material mixed with clay: coal ______',
            correctAnswer: 'CINDERS',
            explanation: 'Early tracks were crushed coal cinders mixed with clay.'
          },
          {
            id: 'cd_listening_p6_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why were morning qualifiers and evening finalists disadvantaged unevenly on old tracks?',
            options: [
              'A. Electronic timing gates drifted in evening cool air',
              'B. Starting blocks sank deeper on outer tracks',
              'C. Morning sun blinded runners on back straightaways',
              'D. Rolling and rain left uneven soil compaction across lanes'
            ],
            correctAnswer: 'D',
            explanation: 'Rolling and weather left uneven compaction between morning and final heats.'
          },
          {
            id: 'cd_listening_p6_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Polymer introduced at the 1968 Mexico City Olympic oval: ______',
            correctAnswer: 'POLYURETHANE',
            explanation: 'Polyurethane tracks delivered steady weather-resistant performance.'
          },
          {
            id: 'cd_listening_p6_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'What property do overly soft foam surfaces steal from sprinters?',
            correctAnswer: 'ELASTICITY',
            explanation: 'Soft surfaces steal valuable push-off elasticity.'
          },
          {
            id: 'cd_listening_p6_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Overuse injury linked to excessively rigid tracks: stress ______',
            correctAnswer: 'FRACTURES',
            explanation: 'Rigid tracks elevate shin and metatarsal stress fractures.'
          },
          {
            id: 'cd_listening_p6_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Vulcanized track sheets pair dimpled grip layers with cushioned ______ bases.',
            correctAnswer: 'HONEYCOMB',
            explanation: 'Dual-layer geometry rests on cushioned honeycomb bases.'
          },
          {
            id: 'cd_listening_p6_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Abrasive fibre used in 1970s stadium carpets: ______',
            correctAnswer: 'NYLON',
            explanation: 'Early artificial turf was abrasive nylon carpet.'
          },
          {
            id: 'cd_listening_p6_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Besides cork, what natural material serves as modern turf infill?',
            correctAnswer: 'WALNUT SHELLS',
            explanation: 'Third-generation turf increasingly uses cork or crushed walnut shells.'
          },
          {
            id: 'cd_listening_p6_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Which dual benefit comes from switching crumb rubber to organic cork infill?',
            options: [
              'A. Cools pitch surfaces and prevents microplastic drainage pollution',
              'B. Doubles winter grass blade growth and saves mowing',
              'C. Cuts stadium floodlight glare by half',
              'D. Eliminates synthetic drainage pipes underground'
            ],
            correctAnswer: 'A',
            explanation: 'Cork lowers pitch temperatures by 12 degrees and stops microplastic runoff.'
          },
          {
            id: 'cd_listening_p6_lq40',
            number: 40,
            type: 'fill_blank',
            questionText: 'Sensor-equipped arena flooring measuring footstep kinetics: ______ tiles',
            correctAnswer: 'PIEZOELECTRIC',
            explanation: 'Arenas are trialing embedded piezoelectric floor tiles.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 7: Academic Writing Center One-on-One Tutoring
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p7',
    testNumber: 7,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 7: Academic Writing Center One-on-One Tutoring',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Academic Writing Center One-on-One Tutoring.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking a Writing Center Tutorial',
        audioScenario:
          'A humanities undergraduate telephones the Academic Writing Center to schedule a thesis consultation and grammar editing workshop.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Writing Center Front Desk]
Coordinator: Good morning, Academic Writing Center, Helena speaking. How may I assist you?
Student: Hi Helena, I have a draft history essay due next Friday and want to book a one-on-one session with an advisor.
Coordinator: [[Q1]] Certainly. Let me look up your booking quota—may I take your student family name? It is Kowalski, spelled K-O-W-A-L-S-K-I.
Coordinator: [[Q2]] Thank you. Each registered undergraduate receives three complimentary forty-five-minute consultations every semester.
Student: That is great. Do I send my complete essay file beforehand, or print pages on the day?
Coordinator: [[Q3]] Upload up to two thousand words as an editable Word document no later than twenty-four hours prior so your tutor can read ahead.
Student: [[Q4]] Understood. Could we review citation style specifically? Our department switched from footnotes to Harvard referencing this autumn.
Coordinator: [[Q5]] Perfect—our specialist advisor for history and citations is Dr. Benson, who works in Tutorial Cubicle Seven on Tuesday afternoons.
Student: Tuesday at three fifteen fits neatly between my lectures! Does Dr. Benson also proofread spelling mistakes across the bibliography?
Coordinator: [[Q6]] Clarifying expectation early: tutors teach self-editing strategies and structural flow rather than proofreading whole drafts line by line.
Student: [[Q7]] Got it. Should I attach the original grading rubric from my seminar syllabus? Yes, uploading your lecturer’s marking rubric helps your tutor verify whether you answered the prompt directly.
Student: [[Q8]] Do you also offer drop-in clinics for quick questions about thesis statements without a week-long booking? Yes, short fifteen-minute drop-in desks operate every morning inside the Humanities Commons café area.
Coordinator: [[Q9]] Should something urgent crop up and you cannot make Tuesday, cancel online at least six hours ahead or you temporarily lose one weekly booking token.
Student: [[Q10]] Thanks! Before hanging up, where exactly is the main center entrance? Head up the curved staircase inside Paxton Hall and turn right past the photocopy room.`,
        questions: [
          {
            id: 'cd_listening_p7_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname: ______',
            correctAnswer: 'KOWALSKI',
            explanation: 'Spelled K-O-W-A-L-S-K-I.'
          },
          {
            id: 'cd_listening_p7_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Free individual tutoring sessions allowed per semester: ______',
            correctAnswer: 'THREE',
            explanation: 'Students get three free sessions each semester.'
          },
          {
            id: 'cd_listening_p7_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Maximum draft word count to upload before a session:',
            correctAnswer: 'TWO THOUSAND WORDS',
            explanation: 'Upload up to two thousand words 24 hours ahead.'
          },
          {
            id: 'cd_listening_p7_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Citation format the student’s department adopted this autumn: ______',
            correctAnswer: 'HARVARD',
            explanation: 'Department switched to Harvard referencing.'
          },
          {
            id: 'cd_listening_p7_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'History writing specialist assigned on Tuesdays: Dr. ______',
            correctAnswer: 'BENSON',
            explanation: 'Dr. Benson works in Cubicle Seven on Tuesdays.'
          },
          {
            id: 'cd_listening_p7_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What service do Writing Center tutors explicitly NOT provide?',
            options: [
              'A. Feedback on argument structure',
              'B. Line-by-line grammar proofreading of full drafts',
              'C. Help interpreting citation guides',
              'D. Techniques for cutting wordiness'
            ],
            correctAnswer: 'B',
            explanation: 'Tutors teach self-editing rather than proofreading whole drafts line by line.'
          },
          {
            id: 'cd_listening_p7_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Course attachment requested alongside the draft essay: marking ______',
            correctAnswer: 'RUBRIC',
            explanation: 'Attach the lecturer’s marking rubric.'
          },
          {
            id: 'cd_listening_p7_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'Duration of morning drop-in thesis consultations:',
            correctAnswer: 'FIFTEEN-MINUTE',
            explanation: 'Drop-in desks run fifteen-minute sessions every morning.'
          },
          {
            id: 'cd_listening_p7_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What happens if a student cancels less than six hours before an appointment?',
            options: [
              'A. A five-pound fine is added to library fees',
              'B. Their history lecturer is notified automatically',
              'C. One weekly booking token is temporarily forfeited',
              'D. All future bookings are suspended for the term'
            ],
            correctAnswer: 'C',
            explanation: 'Late cancellations forfeit one weekly booking token temporarily.'
          },
          {
            id: 'cd_listening_p7_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Where is the main Writing Center located?',
            options: [
              'A. Basement of the Science Library',
              'B. Ground floor of the Humanities Commons',
              'C. Paxton Hall above the curved staircase past the photocopy room',
              'D. Top floor of the Student Union building'
            ],
            correctAnswer: 'C',
            explanation: 'Inside Paxton Hall past the photocopy room.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Graduate Thesis Bootcamp Schedule',
        audioScenario:
          'The Writing Center director introduces a three-day intensive dissertation bootcamp for doctoral and master’s writers.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Thesis Bootcamp Orientation]
Director: Good morning researchers, and welcome to our winter Dissertation Writing Bootcamp in Seminar Hall Four!
Director: [[Q11]] Over three structured days, each participant pledges to block out social messaging and aim for at least fifteen hundred clean draft words daily.
Director: [[Q12]] Every morning opens with a crisp goal-setting circle at nine sharp before silent writing sprints run in forty-five-minute timed intervals.
Director: [[Q13]] Remember: turn laptop Wi-Fi off during morning sprints unless you downloaded offline PDF articles yesterday, because citation rabbit-holes derail momentum quickly.
Director: [[Q14]] On Day One afternoon, librarian Samira hosts a practical session configuring Zotero folders to output journal bibliography entries effortlessly.
Director: [[Q15]] Throughout Day Two, quantitative scientists work alongside editorial coaches on translating statistical output tables into crisp prose takeaways without repeating every decimal.
Director: [[Q16]] In the courtyard lounge, fresh herbal tea and walnut flapjacks are refreshed hourly, though hot lunches are served upstairs in the Faculty Bistro.
Director: [[Q17]] Any writer hitting stubborn blank-page paralysis may step into our quiet reflection conservatory for a ten-minute reverse-outlining exercise with a facilitator.
Director: [[Q18]] By four o'clock on Day Three, pairs swap three-page sample sections for constructive reader-response reviews evaluating signpost clarity rather than grammar.
Director: [[Q19]] Participants completing all three sprint logs unlock priority admission to our spring oral-defense rehearsal workshops held in May.
Director: [[Q20]] Please clip your lanyard colour-tag onto your bag right now—amber tags indicate writers drafting methodology chapters while navy marks literature reviews.`,
        questions: [
          {
            id: 'cd_listening_p7_lq11',
            number: 11,
            type: 'short_answer',
            questionText: 'Minimum daily drafting target encouraged during bootcamp:',
            correctAnswer: 'FIFTEEN HUNDRED',
            explanation: 'Participants aim for fifteen hundred clean words per day.'
          },
          {
            id: 'cd_listening_p7_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Length of each silent timed writing sprint: ______ minutes',
            correctAnswer: 'FORTY-FIVE',
            explanation: 'Silent sprints run in forty-five-minute timed intervals.'
          },
          {
            id: 'cd_listening_p7_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why are writers advised to switch Wi-Fi off during morning sprints?',
            options: [
              'A. Searching online citations breaks continuous drafting momentum',
              'B. Hall routers struggle with thirty connected laptops',
              'C. Automatic cloud backups slow word-processing files',
              'D. Bootcamp rules forbid electronic PDF readers'
            ],
            correctAnswer: 'A',
            explanation: 'Looking up citations mid-sprint pulls writers into distracting rabbit-holes.'
          },
          {
            id: 'cd_listening_p7_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Reference manager taught by Samira on Day One: ______',
            correctAnswer: 'ZOTERO',
            explanation: 'Samira runs a practical clinic configuring Zotero.'
          },
          {
            id: 'cd_listening_p7_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Day Two coaching focuses on summarizing statistical tables cleanly without listing every ______.',
            correctAnswer: 'DECIMAL',
            explanation: 'Writers avoid repeating every decimal in prose.'
          },
          {
            id: 'cd_listening_p7_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Campus venue serving hot lunches upstairs: Faculty ______',
            correctAnswer: 'BISTRO',
            explanation: 'Hot lunches run upstairs in the Faculty Bistro.'
          },
          {
            id: 'cd_listening_p7_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Which outlining technique helps writers overcome blank-page paralysis?',
            correctAnswer: 'REVERSE-OUTLINING',
            explanation: 'Facilitators guide a ten-minute reverse-outlining exercise.'
          },
          {
            id: 'cd_listening_p7_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What do peer pairs evaluate during Day Three sample swaps?',
            options: [
              'A. Formatting of footnotes and page numbers',
              'B. Spelling consistency between UK and US English',
              'C. Accuracy of statistical calculations',
              'D. Signpost clarity and logical flow'
            ],
            correctAnswer: 'D',
            explanation: 'Peers assess signpost clarity rather than grammar.'
          },
          {
            id: 'cd_listening_p7_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Spring workshop unlocked by completing all three sprint logs: ______ rehearsal',
            correctAnswer: 'ORAL-DEFENSE',
            explanation: 'Completing logs grants priority for oral-defense rehearsals.'
          },
          {
            id: 'cd_listening_p7_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Lanyard tag colour worn by writers working on literature reviews: ______',
            correctAnswer: 'NAVY',
            explanation: 'Navy marks literature reviews while amber marks methodology.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Peer Feedback in Undergraduate Writing',
        audioScenario:
          'Education postgraduates Rachel and Tariq review survey data from first-year writing workshops with Professor Shaw.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Writing Pedagogy Research]
Prof. Shaw: Come in, Rachel and Tariq. How did your comparison of tutor versus peer essay feedback go?
Rachel: [[Q21]] Over twelve weeks, freshmen receiving structured checklist rubrics gave sixty percent more actionable macro-structural comments than peers using blank sheets.
Tariq: [[Q22]] Without guided checklists, untrained students hovered almost exclusively over commas, typos, and minor font spacing.
Prof. Shaw: Classic novice pattern! Did student confidence differ when receiving written edits versus five-minute audio voice notes?
Rachel: [[Q23]] Surprisingly, international students rated recorded voice notes noticeably warmer and less intimidating than red margin highlights.
Prof. Shaw: Fascinating. Why did voice feedback score higher on uptake?
Tariq: [[Q24]] Tutors explained why a paragraph dragged naturally in tone, whereas brief margin words like "unclear" left students guessing how to fix transitions.
Prof. Shaw: [[Q25]] When coding transcripts for your thematic chapter, verify inter-rater reliability by having both coders grade twenty percent of essays independently.
Rachel: [[Q26]] We computed a kappa score of zero point eight four last night, which clears standard social science agreement thresholds cleanly.
Tariq: [[Q27]] One confounding snag appeared in Economics seminar essays: grades climbed late in term largely because students visited faculty office hours before finals.
Prof. Shaw: [[Q28]] Control carefully for office-hour attendance in your regression, or reviewers will argue your peer-group intervention gets credit for professor coaching.
Rachel: [[Q29]] For our journal manuscript target, Tariq suggested Higher Education Studies since they love mixed-methods classroom trials under seven thousand words.
Prof. Shaw: [[Q30]] Good match—strip out raw workshop attendance spreadsheets into online supplementary files so your discussion section breathes clearly.`,
        questions: [
          {
            id: 'cd_listening_p7_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Share increase in actionable macro-structural peer comments using rubrics: ______ percent',
            correctAnswer: 'SIXTY',
            explanation: 'Checklists boosted actionable structural comments by sixty percent.'
          },
          {
            id: 'cd_listening_p7_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'What did unguided freshman reviewers focus on almost exclusively?',
            options: [
              'A. Thesis originality and historical sourcing',
              'B. Punctuation, spelling typos, and formatting',
              'C. Logical counterarguments across sections',
              'D. Academic tone and hedging verbs'
            ],
            correctAnswer: 'B',
            explanation: 'Without checklists they hovered over commas, typos, and spacing.'
          },
          {
            id: 'cd_listening_p7_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Feedback format international students perceived as warmer and less intimidating: ______ notes',
            correctAnswer: 'VOICE',
            explanation: 'Recorded audio voice notes felt warmer than red highlights.'
          },
          {
            id: 'cd_listening_p7_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'Which vague written comment left students confused about fixing transitions?',
            correctAnswer: 'UNCLEAR',
            explanation: 'Brief margin tags like "unclear" left writers guessing.'
          },
          {
            id: 'cd_listening_p7_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Share of essays double-graded to verify inter-rater reliability: ______ percent',
            correctAnswer: 'TWENTY',
            explanation: 'Both coders grade twenty percent independently.'
          },
          {
            id: 'cd_listening_p7_lq26',
            number: 26,
            type: 'summary_completion',
            questionText: 'The achieved inter-rater ______ statistic of 0.84 cleared agreement thresholds.',
            correctAnswer: 'KAPPA',
            explanation: 'They computed a kappa score of 0.84.'
          },
          {
            id: 'cd_listening_p7_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Confounding extra help sought by Economics undergraduates: ______ hours',
            correctAnswer: 'OFFICE',
            explanation: 'Students attended faculty office hours before finals.'
          },
          {
            id: 'cd_listening_p7_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'Why must office-hour visits be separated statistically?',
            options: [
              'A. Reviewers might attribute professor coaching gains to peer workshops',
              'B. Economics markers graded more leniently in spring',
              'C. Economics essays had shorter word limits',
              'D. Attendance logs were handwritten inconsistently'
            ],
            correctAnswer: 'A',
            explanation: 'Peer interventions might otherwise steal credit from faculty office-hour coaching.'
          },
          {
            id: 'cd_listening_p7_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Maximum word cap of their target academic journal:',
            correctAnswer: 'SEVEN THOUSAND WORDS',
            explanation: 'Journal accepts mixed-methods papers under seven thousand words.'
          },
          {
            id: 'cd_listening_p7_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Destination for bulky raw attendance spreadsheets: ______ files',
            correctAnswer: 'SUPPLEMENTARY',
            explanation: 'Move spreadsheets to online supplementary files.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Evolution of Scientific Prose Style',
        audioScenario:
          'A linguistics professor lectures on how academic scientific prose transitioned from ornate seventeenth-century narratives to structured modern research papers.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: History of Scientific Writing]
Lecturer: Many graduate students assume impersonal academic phrasing has existed forever, yet scientific prose style was fiercely contested over three centuries.
Lecturer: [[Q31]] When Robert Boyle published air-pump trials in the 1660s, essays read almost like intimate travel diaries written explicitly in the first-person singular.
Lecturer: [[Q32]] Boyle intentionally described cracked glass jars and spilled mercury so distant gentlemen could witness mishaps honestly and trust experimental realism.
Lecturer: [[Q33]] During the nineteenth century, exploding research specialization gave rise to compact abstract summaries so overwhelmed chemists could scan findings rapidly.
Lecturer: [[Q34]] Around the 1920s, editors popularized the IMRaD sequence—organizing reports cleanly into Introduction, Methods, Results, and Discussion compartments.
Lecturer: [[Q35]] Alongside standardized headings came heavy reliance on passive voice constructions, designed to signal universal objectivity by removing human researchers from center stage.
Lecturer: [[Q36]] Linguists tracking four million published abstracts note a dramatic rise in noun stacks, packing five technical nouns consecutively to maximize brevity.
Lecturer: [[Q37]] Unfortunately, dense noun stacks often obscure causal agency, forcing even specialist referees to re-read convoluted opening sentences twice.
Lecturer: [[Q38]] Over the past twenty years, leading biomedical journals have reversed course, actively encouraging crisp active verbs to restore clarity across interdisciplinary teams.
Lecturer: [[Q39]] Equally striking is the rise of mandatory plain-language lay summaries, ensuring taxpaying patients and policy makers grasp implications without jargon barriers.
Lecturer: [[Q40]] Today’s most effective academic writers pair disciplined standardized section signposts with vivid energetic verbs rather than lifeless bureaucratic nouns.`,
        questions: [
          {
            id: 'cd_listening_p7_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Genre style resembling Robert Boyle’s 1660s experiment narratives: ______ diaries',
            correctAnswer: 'TRAVEL',
            explanation: 'Boyle’s reports read almost like intimate travel diaries.'
          },
          {
            id: 'cd_listening_p7_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why did Boyle deliberately include spilled mercury and cracked glassware in his reports?',
            options: [
              'A. To warn apprentices about laboratory safety',
              'B. To fill remaining blank printer column inches',
              'C. To justify grant expenses to the Royal Society',
              'D. To build reader trust through candid experimental realism'
            ],
            correctAnswer: 'D',
            explanation: 'Honest reporting of mishaps fostered trust in experimental realism.'
          },
          {
            id: 'cd_listening_p7_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Concise nineteenth-century invention helping busy chemists scan articles: ______ summaries',
            correctAnswer: 'ABSTRACT',
            explanation: 'Compact abstract summaries helped specialists scan findings.'
          },
          {
            id: 'cd_listening_p7_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'Which decade popularized the four-part IMRaD report template?',
            correctAnswer: '1920S',
            explanation: 'Editors popularized IMRaD around the 1920s.'
          },
          {
            id: 'cd_listening_p7_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Grammatical structure once favored to convey impersonal objectivity: ______ voice',
            correctAnswer: 'PASSIVE',
            explanation: 'Heavy reliance on passive voice removed human authors from center stage.'
          },
          {
            id: 'cd_listening_p7_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Corpus analyses reveal dense ______ stacks packed together to save journal space.',
            correctAnswer: 'NOUN',
            explanation: 'Authors packed five technical nouns consecutively into noun stacks.'
          },
          {
            id: 'cd_listening_p7_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'What logical link do over-compressed noun clusters often hide from referees?',
            correctAnswer: 'CAUSAL AGENCY',
            explanation: 'Dense noun stacks obscure causal agency.'
          },
          {
            id: 'cd_listening_p7_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How have prominent biomedical journals changed style guidelines recently?',
            options: [
              'A. Banning mathematical formulas in abstracts',
              'B. Doubling article word limits for methods sections',
              'C. Recommending active verbs to aid cross-disciplinary readability',
              'D. Returning exclusively to chronological diary formats'
            ],
            correctAnswer: 'C',
            explanation: 'Biomedical journals actively encourage crisp active verbs.'
          },
          {
            id: 'cd_listening_p7_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Mandatory accessible feature aiding policymakers and patients: ______ summaries',
            correctAnswer: 'LAY',
            explanation: 'Plain-language lay summaries explain findings without jargon.'
          },
          {
            id: 'cd_listening_p7_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What characterizes the strongest contemporary scientific writing according to the talk?',
            options: [
              'A. Lengthy passive clauses avoiding pronouns',
              'B. Clear standardized section structure paired with energetic verbs',
              'C. Minimalist bibliographies under ten sources',
              'D. Ornate historical metaphors throughout discussions'
            ],
            correctAnswer: 'B',
            explanation: 'Strong writers combine clear signposts with vivid energetic verbs.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 8: Botanical Gardens Guided Walking Tour Booking
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p8',
    testNumber: 8,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 8: Botanical Gardens Guided Walking Tour Booking',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Botanical Gardens Guided Walking Tour Booking.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking a Botanical Guided Tour',
        audioScenario:
          'A community group organizer phones the Royal Regional Botanical Gardens to book a private seasonal walk and conservatory tea.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Botanical Gardens Visitor Desk]
Clerk: Good morning, Ashcombe Botanical Gardens Bookings, Oliver speaking. How may I help?
Organizer: Hello Oliver, I am organizing an outing next month for our local photographic and gardening society and want to book a private guided tour.
Clerk: [[Q1]] Splendid! May I take your contact surname first? Yes, it is Bellamy, spelled B-E-L-L-A-M-Y.
Clerk: [[Q2]] Lovely, Ms. Bellamy. How many visitors will join the group? Right now we have confirmed eighteen confirmed participants, including two wheelchair users.
Clerk: [[Q3]] Noted—every paved loop along the Medicinal Herb Garden and Alpine Terrace is fully step-free. Which tour theme appeals most? Our Autumn Seed-Pod and Canopy walk runs ninety minutes, priced at eleven pounds fifty per visitor.
Organizer: [[Q4]] Sounds ideal. We would prefer Saturday morning, October the sixteenth, starting around ten thirty if possible. That date is clear! Wait—one small note: the Victorian Palm Glasshouse opens slightly later at eleven during roof-gutter maintenance.
Organizer: [[Q5]] Eleven fits well if we explore the outdoor woodland trail first and end inside the warm glasshouse! Do you charge extra for handheld magnifying lenses? Lenses are complimentary, though macro-tripod permits inside glasshouse aisles cost four pounds per photographer.
Clerk: [[Q6]] Can anyone require dietary adjustments for the optional Conservatory Tea? Yes, we have three members who strictly avoid gluten-containing pastries.
Clerk: [[Q7]] I will flag three gluten-free fruit scones directly with the catering pavilion—just ensure final guest numbers are locked forty-eight hours ahead.
Organizer: [[Q8]] Where should our hired minibus drop passengers cleanly without blocking city bus lanes? Pull into Gate Two Coach Bay right beside the stone ticket kiosk, where parking stays free for two hours.
Clerk: [[Q9]] Should torrential rain force the walk indoors early, your guide shifts seamlessly into our Rare Herbarium Collection room for a seed-vault handling demonstration.
Organizer: [[Q10]] Fantastic backup plan! How should we pay the fifty-pound booking deposit? I will email a secure card link—just quote reservation reference BG-714 before Thursday afternoon.`,
        questions: [
          {
            id: 'cd_listening_p8_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Group organizer surname: ______',
            correctAnswer: 'BELLAMY',
            explanation: 'Spelled B-E-L-L-A-M-Y.'
          },
          {
            id: 'cd_listening_p8_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Confirmed group size: ______ participants',
            correctAnswer: 'EIGHTEEN',
            explanation: 'Group has eighteen confirmed visitors.'
          },
          {
            id: 'cd_listening_p8_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Length of the Autumn Seed-Pod and Canopy walk: ______ minutes',
            correctAnswer: 'NINETY',
            explanation: 'Tour runs ninety minutes.'
          },
          {
            id: 'cd_listening_p8_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Morning opening time of the Victorian Palm Glasshouse during maintenance:',
            correctAnswer: 'ELEVEN',
            explanation: 'The glasshouse opens slightly later at eleven.'
          },
          {
            id: 'cd_listening_p8_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Fee per photographer for indoor tripod permits: £ ______',
            correctAnswer: 'FOUR',
            explanation: 'Macro-tripod permits cost four pounds.'
          },
          {
            id: 'cd_listening_p8_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Dietary restriction affecting three members: ______',
            correctAnswer: 'GLUTEN',
            explanation: 'Three members avoid gluten.'
          },
          {
            id: 'cd_listening_p8_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'How many hours prior to the tour must final headcounts be locked?',
            correctAnswer: 'FORTY-EIGHT HOURS',
            explanation: 'Final numbers are needed forty-eight hours ahead.'
          },
          {
            id: 'cd_listening_p8_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Where should the group’s minibus unload passengers?',
            options: [
              'A. Beside the Main Street tram stop',
              'B. Lower riverside car park',
              'C. Rear staff delivery yard behind the café',
              'D. Gate Two Coach Bay next to the stone kiosk'
            ],
            correctAnswer: 'D',
            explanation: 'Unload at Gate Two Coach Bay beside the stone kiosk.'
          },
          {
            id: 'cd_listening_p8_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What indoor alternative runs if heavy rain interrupts the walk?',
            options: [
              'A. A seed-vault demonstration in the Herbarium room',
              'B. An illustrated botanical film in the café',
              'C. Voucher refunds valid for any weekday',
              'D. Houseplant potting lessons in the shed'
            ],
            correctAnswer: 'A',
            explanation: 'The guide moves into the Rare Herbarium Collection room for a seed-vault demo.'
          },
          {
            id: 'cd_listening_p8_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Reservation reference to quote when paying online: ______',
            correctAnswer: 'BG-714',
            explanation: 'Quote reservation reference BG-714.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Welcome to the Seasonal Glasshouse Exhibition',
        audioScenario:
          'A senior curator introduces visitors at the entrance gate to conservation zones, pollinator meadows, and garden etiquette.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Gardens Courtyard Orientation]
Curator: Good morning everyone, and welcome to Ashcombe Botanical Gardens during our annual Autumn Pollination Week!
Curator: [[Q11]] Founded in 1824 originally to train apothecary apprentices, our forty-acre sanctuary now shelters over seven thousand living plant species.
Curator: [[Q12]] Walk straight across the limestone bridge and you reach our newly planted Chalk Meadow, blooming solely with drought-hardy wildflowers requiring zero summer irrigation.
Curator: [[Q13]] Beside the eastern rockery sits the Cedar Apiary, where glass observation panels allow visitors to inspect honeybee hives safely from behind mesh screens.
Curator: [[Q14]] Inside the Humid Cloud-Forest Dome, mist nozzles fire every twenty minutes, so safeguard non-waterproof camera lenses inside plastic pouches.
Curator: [[Q15]] Do not touch glossy spotted leaves along the Tropical Border—several spurge varieties exude milky sap capable of irritating sensitive skin.
Curator: [[Q16]] For families with young explorers, yellow brass rubbing plaques hidden near ancient oak roots let children stamp tree-leaf impressions onto trail booklets.
Curator: [[Q17]] Our composting showcase behind the potting sheds converts all café coffee grounds and pruned shrub clippings into fertile potting mulch within sixteen weeks.
Curator: [[Q18]] Dogs remain welcome along outer woodland gravel paths on short fixed leads, though only certified assistance dogs may enter covered glasshouse domes.
Curator: [[Q19]] At two thirty sharp, volunteer arborists demonstrate safe heritage-apple grafting beside the walled orchard—bring questions about backyard pruning!
Curator: [[Q20]] Before departing, browse our plant nursery stall by Gate One, where every potted perennial sold directly funds rare orchid conservation overseas.`,
        questions: [
          {
            id: 'cd_listening_p8_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Profession originally trained when the gardens opened in 1824: ______ apprentices',
            correctAnswer: 'APOTHECARY',
            explanation: 'Originally founded to train apothecary apprentices.'
          },
          {
            id: 'cd_listening_p8_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'How much summer artificial watering does the Chalk Meadow require?',
            correctAnswer: 'ZERO',
            explanation: 'Drought-hardy meadow requires zero summer irrigation.'
          },
          {
            id: 'cd_listening_p8_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Protective barrier letting visitors view the Cedar Apiary hives safely: ______ screens',
            correctAnswer: 'MESH',
            explanation: 'Glass and mesh screens let guests inspect hives safely.'
          },
          {
            id: 'cd_listening_p8_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Frequency of misting inside the Cloud-Forest Dome: every ______ minutes',
            correctAnswer: 'TWENTY',
            explanation: 'Mist nozzles fire every twenty minutes.'
          },
          {
            id: 'cd_listening_p8_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Visitors must avoid touching Tropical Border plants because their milky ______ can irritate skin.',
            correctAnswer: 'SAP',
            explanation: 'Spurge plants exude irritating milky sap.'
          },
          {
            id: 'cd_listening_p8_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Metal used for children’s trail rubbing plaques near oak trees: ______',
            correctAnswer: 'BRASS',
            explanation: 'Yellow brass plaques sit near ancient oak roots.'
          },
          {
            id: 'cd_listening_p8_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'How long does the garden’s composting bay need to convert café grounds into mulch?',
            options: [
              'A. Eight weeks',
              'B. Sixteen weeks',
              'C. Twelve weeks',
              'D. Twenty-four weeks'
            ],
            correctAnswer: 'B',
            explanation: 'Compost finishes converting within sixteen weeks.'
          },
          {
            id: 'cd_listening_p8_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Where are pet dogs prohibited inside the grounds?',
            options: [
              'A. Outer woodland gravel walks',
              'B. Limestone bridge lawns',
              'C. Covered glasshouse domes',
              'D. Gate One picnic benches'
            ],
            correctAnswer: 'C',
            explanation: 'Only certified assistance dogs may enter covered glasshouse domes.'
          },
          {
            id: 'cd_listening_p8_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Which fruit tree propagation skill is demonstrated at 2:30 PM?',
            correctAnswer: 'APPLE GRAFTING',
            explanation: 'Arborists demonstrate heritage-apple grafting.'
          },
          {
            id: 'cd_listening_p8_lq20',
            number: 20,
            type: 'multiple_choice',
            questionText: 'What do proceeds from the Gate One plant stall directly support?',
            options: [
              'A. Heating fuel for Victorian greenhouses',
              'B. Children’s summer art stipends',
              'C. Rare overseas orchid conservation projects',
              'D. Restoring limestone footpath bridges'
            ],
            correctAnswer: 'C',
            explanation: 'Sales directly fund rare orchid conservation overseas.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Mapping Urban Pollinator Visitation',
        audioScenario:
          'Ecology undergraduates Sam and Nina discuss bee-tracking protocols and weather calibration with their tutor Dr. Green.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Pollinator Ecology Seminar]
Dr. Green: Morning Sam and Nina. How did your summer transect counts across the botanical beds turn out?
Sam: [[Q21]] We logged over fourteen hundred insect visits across twelve wildflower plots, and solitary mason bees outnumbered honeybees by nearly two to one on native clover.
Nina: [[Q22]] Oddly, brightly bred ornamental dahlias barely attracted bumblebees at all—doubled petal layers effectively blocked access to the inner nectar ring.
Dr. Green: Great botanical insight! Did wind gusts skew aerial sweep-netting along exposed hilltop terraces?
Sam: [[Q23]] Yes, whenever wind speed passed fifteen knots, hoverflies sheltered inside hedges rather than hovering above blossoms, creating false midday zeroes.
Dr. Green: Good adjustment. How did you capture flower colour visibility realistically from an insect eye perspective rather than human vision?
Nina: [[Q24]] We borrowed a portable ultraviolet spectrophotometer from Botany Lab Three because bees perceive ultraviolet nectar guides invisible to people.
Dr. Green: [[Q25]] When graphing diurnal foraging peaks, separate cloudy mornings from bright sun—soil ambient warmth triggers bumblebee flights earlier than air temperature alone suggests.
Sam: [[Q26]] Understood—we noticed ground-nesting mining bees emerged forty minutes sooner on south-facing sandy banks than shaded clay slopes.
Nina: [[Q27]] Regarding specimen preservation, Dr. Green asked us to photograph live captured bees inside cooled glass vials and release them unharmed rather than pinning specimens.
Dr. Green: [[Q28]] How clean were smartphone macro shots for separating closely matched bumblebee tail-band species?
Sam: [[Q29]] Fine for common garden species, though tricky cryptics required two entomology curators to cross-check wing-vein shapes manually.
Dr. Green: [[Q30]] Document that identification uncertainty clearly in Table Three, then aim to submit your botanical conservation summary before the monthly trustees board meets.`,
        questions: [
          {
            id: 'cd_listening_p8_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Insect group outnumbering honeybees 2:1 on native clover: ______ bees',
            correctAnswer: 'MASON',
            explanation: 'Solitary mason bees outnumbered honeybees nearly two to one.'
          },
          {
            id: 'cd_listening_p8_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'Why did ornamental dahlias attract very few bumblebees?',
            options: [
              'A. Doubled petal layers physically blocked access to nectar',
              'B. Their soil lacked organic nitrogen',
              'C. Sprayed fungicides repelled flying insects',
              'D. Dahlias bloomed only after sunset'
            ],
            correctAnswer: 'A',
            explanation: 'Doubled petal layers blocked access to the inner nectar ring.'
          },
          {
            id: 'cd_listening_p8_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Threshold wind speed above which hoverflies hid inside hedges: ______ knots',
            correctAnswer: 'FIFTEEN',
            explanation: 'Above fifteen knots hoverflies sheltered inside hedges.'
          },
          {
            id: 'cd_listening_p8_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'What optical instrument measured petal patterns invisible to human eyes?',
            correctAnswer: 'ULTRAVIOLET SPECTROPHOTOMETER',
            explanation: 'Nina used a portable ultraviolet spectrophotometer.'
          },
          {
            id: 'cd_listening_p8_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Local ______ warmth triggers early foraging sooner than surrounding air temperature alone.',
            correctAnswer: 'SOIL',
            explanation: 'Soil ambient warmth sparks earlier bumblebee flights.'
          },
          {
            id: 'cd_listening_p8_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Slope material preferred earlier in the morning by mining bees: ______ banks',
            correctAnswer: 'SANDY',
            explanation: 'Mining bees emerged earlier on south-facing sandy banks.'
          },
          {
            id: 'cd_listening_p8_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Method used to slow bees gently before photographing and releasing them: ______ vials',
            correctAnswer: 'COOLED',
            explanation: 'Photographed safely inside cooled glass vials and released.'
          },
          {
            id: 'cd_listening_p8_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'How did the team resolve borderline cryptic bumblebee photo identifications?',
            options: [
              'A. Running automatic AI image classifiers',
              'B. Performing DNA swabs on flower pollen',
              'C. Discarding uncertain observations from the count',
              'D. Asking two entomology curators to inspect wing-vein geometry'
            ],
            correctAnswer: 'D',
            explanation: 'Two entomology curators checked wing-vein shapes manually.'
          },
          {
            id: 'cd_listening_p8_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which anatomical feature did curators examine to separate cryptic species?',
            correctAnswer: 'WING-VEIN SHAPES',
            explanation: 'Curators cross-checked wing-vein shapes.'
          },
          {
            id: 'cd_listening_p8_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Target audience awaiting their conservation summary: ______ board',
            correctAnswer: 'TRUSTEES',
            explanation: 'Submit before the monthly trustees board meets.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Global Role of Millennium Seed Banks',
        audioScenario:
          'A plant conservation biologist lectures on seed dormancy physiology, cryopreservation, and why living gardens complement frozen seed vaults.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Plant Conservation Biology Lecture]
Lecturer: Facing accelerating habitat fragmentation, conservationists increasingly rely on ex-situ plant preservation—safeguarding threatened biodiversity outside wild ecosystems.
Lecturer: [[Q31]] For nearly eighty-five percent of flowering flora, survival hinges on orthodox seeds capable of enduring severe dehydration without cell rupture.
Lecturer: [[Q32]] At facilities like Wakehurst, incoming seed batches sit inside silica-gel drying chambers kept at fifteen percent relative humidity before deep freezing.
Lecturer: [[Q33]] Once safely desiccated, seeds sealed inside airtight foil-laminate jars remain viable for decades inside minus-twenty-degree vaults.
Lecturer: [[Q34]] Crucially, conservation teams test a tiny sample every ten years on warm agar plates to confirm germination vigor has not silently collapsed.
Lecturer: [[Q35]] Yet roughly eight percent of tropical rainforest flora—notably wild oaks, mangoes, and cacao—produce stubborn recalcitrant seeds that perish immediately if dried or frozen.
Lecturer: [[Q36]] Preserving those tropical species demands either living conservatory orchards or liquid-nitrogen cryopreservation of microscopic excised shoot tips.
Lecturer: [[Q37]] Beyond preserving DNA letters, seed banks face a subtle ecological catch: stored seeds remain frozen in time while wild climates and soil pathogens keep mutating.
Lecturer: [[Q38]] When dormant seeds gathered in 1980 are reintroduced forty years later, seedlings sometimes struggle against warmer droughts or unfamiliar fungal blights.
Lecturer: [[Q39]] Consequently, botanic gardens serve an irreplaceable living role—cultivating small adaptive populations outdoors so natural selection slowly updates drought tolerance.
Lecturer: [[Q40]] True plant resilience therefore unites underground sub-zero vaults with vibrant living gardens sharing wild seed stewardship across continents.`,
        questions: [
          {
            id: 'cd_listening_p8_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Term for majority seeds that survive deep drying without damage: ______ seeds',
            correctAnswer: 'ORTHODOX',
            explanation: 'Roughly 85% of flora yield desiccation-tolerant orthodox seeds.'
          },
          {
            id: 'cd_listening_p8_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'What chemical drying agent lowers seed moisture prior to freezing?',
            correctAnswer: 'SILICA-GEL',
            explanation: 'Batches dry inside silica-gel chambers at 15% humidity.'
          },
          {
            id: 'cd_listening_p8_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Vault storage temperature after sealing seeds in foil-laminate jars: minus ______ degrees',
            correctAnswer: 'TWENTY',
            explanation: 'Held inside minus-twenty-degree cold vaults.'
          },
          {
            id: 'cd_listening_p8_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why do seed-bank technicians sprout tiny subsamples every ten years?',
            options: [
              'A. To sell surplus heritage herbs in gift shops',
              'B. To verify stored germination viability has not failed silently',
              'C. To extract essential oils for pharmaceutical trials',
              'D. To train student gardeners on winter propagation'
            ],
            correctAnswer: 'B',
            explanation: 'Warm agar tests confirm germination vigor remains intact.'
          },
          {
            id: 'cd_listening_p8_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Seed type like oaks and mangoes that die if dried or frozen: ______ seeds',
            correctAnswer: 'RECALCITRANT',
            explanation: 'Recalcitrant seeds perish when dehydrated or frozen.'
          },
          {
            id: 'cd_listening_p8_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Cryopreservation protects recalcitrant tropical flora by freezing excised ______ tips in liquid nitrogen.',
            correctAnswer: 'SHOOT',
            explanation: 'Microscopic excised shoot tips are cryopreserved.'
          },
          {
            id: 'cd_listening_p8_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which natural adversaries continue evolving while frozen seeds remain unchanged?',
            correctAnswer: 'SOIL PATHOGENS',
            explanation: 'Wild climates and soil pathogens keep mutating while vaults stay frozen.'
          },
          {
            id: 'cd_listening_p8_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why might 1980-collected seeds struggle when replanted decades later?',
            options: [
              'A. Warmer droughts and newer fungal blights challenge older genetics',
              'B. Foil storage jars leach aluminium salts',
              'C. Pollinating birds migrate across different routes',
              'D. Modern tractors compact topsoil layers'
            ],
            correctAnswer: 'A',
            explanation: 'Reintroduced seedlings struggle against warmer droughts and unfamiliar fungal blights.'
          },
          {
            id: 'cd_listening_p8_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Evolutionary advantage of growing outdoor botanical collections: updates drought ______',
            correctAnswer: 'TOLERANCE',
            explanation: 'Outdoor living gardens let natural selection update drought tolerance.'
          },
          {
            id: 'cd_listening_p8_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What overall conclusion does the biologist draw about plant conservation?',
            options: [
              'A. Cryogenic freezers should replace outdoor public parks',
              'B. Rainforest trees cannot be conserved outside native jungles',
              'C. Only staple cereal crops merit ten-year vault audits',
              'D. Frozen vaults work best when paired with adaptive living gardens'
            ],
            correctAnswer: 'D',
            explanation: 'Resilience requires combining underground vaults with living outdoor gardens.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 9: Student Union Volunteering & Community Outreach
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p9',
    testNumber: 9,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 9: Student Union Volunteering & Community Outreach',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Union Volunteering & Community Outreach.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Community Outreach Volunteer Application',
        audioScenario:
          'A computer science undergraduate telephones the Student Union Volunteering Hub to join a neighborhood school mentoring and IT literacy initiative.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Volunteering Hub Reception]
Coordinator: Good afternoon, Student Union Volunteer Hub, Maya speaking. How can I help?
Applicant: Hi Maya, I saw your poster seeking student mentors for local secondary homework clubs and weekend tech literacy classes.
Coordinator: [[Q1]] Wonderful! Let me start an application sheet—what is your surname? It is Gallagher, spelled G-A-L-L-A-G-H-E-R.
Coordinator: [[Q2]] Thanks. Which program fits your interests better: primary reading buddies on Wednesdays, or our Senior Citizen Digital Café on Saturday mornings? Saturday mornings work best because I have lab tutorials all Wednesday afternoon.
Applicant: Could you tell me where the Digital Café gathers each Saturday?
Coordinator: [[Q3]] We meet inside St. Jude’s Community Annex on Baker Street—only twelve minutes on foot from the campus arch.
Applicant: [[Q4]] Great. Since that venue serves older adults rather than children, do I still need a background clearance check? Yes, every outreach volunteer completes an online identity and criminal record vetting check before their first shift.
Applicant: [[Q5]] How long does that vetting typically clear, and does the student pay? The Student Union subsidizes the entire vetting fee, and clearances generally finalize within ten working days.
Coordinator: [[Q6]] Once cleared, you will attend a mandatory ninety-minute safeguarding and patience briefing with trainer Paul Reid on Tuesday evening.
Applicant: [[Q7]] Do volunteers cover their own local bus tickets when transporting outreach tablets? No, retain paper tickets and our treasurer reimburses travel fares up to eight pounds weekly.
Applicant: [[Q8]] Also, I want to log verified volunteer hours toward my graduate employability award—do supervisors track attendance manually? Simply scan the hub’s orange QR code when signing in and out at the community desk.
Coordinator: [[Q9]] Should an exam deadline arise unexpectedly, post shift-swap notices on the volunteer Slack channel at least twenty-four hours prior so pairs stay covered.
Applicant: [[Q10]] One final detail: what should I bring on my very first Saturday shift? Wear your blue volunteer hoodie provided after training and pack your campus student card for venue sign-in.`,
        questions: [
          {
            id: 'cd_listening_p9_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'GALLAGHER',
            explanation: 'Spelled G-A-L-L-A-G-H-E-R.'
          },
          {
            id: 'cd_listening_p9_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Selected outreach program: Senior Citizen ______ Café',
            correctAnswer: 'DIGITAL',
            explanation: 'Applicant picks the Senior Citizen Digital Café.'
          },
          {
            id: 'cd_listening_p9_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Street location of St. Jude’s Community Annex: ______ Street',
            correctAnswer: 'BAKER',
            explanation: 'Situated on Baker Street.'
          },
          {
            id: 'cd_listening_p9_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'What mandatory clearance must finish before the first shift?',
            correctAnswer: 'CRIMINAL RECORD VETTING',
            explanation: 'Requires online identity and criminal record vetting.'
          },
          {
            id: 'cd_listening_p9_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Working days typically needed for clearance approval: ______',
            correctAnswer: 'TEN',
            explanation: 'Clearances finalize within ten working days.'
          },
          {
            id: 'cd_listening_p9_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Coordinator running Tuesday’s safeguarding training: Paul ______',
            correctAnswer: 'REID',
            explanation: 'Trainer Paul Reid hosts the Tuesday session.'
          },
          {
            id: 'cd_listening_p9_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Weekly travel reimbursement cap for outreach bus tickets: £ ______',
            correctAnswer: 'EIGHT',
            explanation: 'Travel fares are reimbursed up to eight pounds weekly.'
          },
          {
            id: 'cd_listening_p9_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How are volunteer hours officially logged for employability awards?',
            options: [
              'A. Submitting signed timesheets to the Union office monthly',
              'B. Sending weekly attendance selfies to Maya',
              'C. Scanning the orange QR code when signing in and out',
              'D. Having senior guests email feedback ratings'
            ],
            correctAnswer: 'C',
            explanation: 'Scan the orange QR code on arrival and departure.'
          },
          {
            id: 'cd_listening_p9_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Where should volunteers arrange a shift replacement before exam weeks?',
            options: [
              'A. Phone the community center directly on Friday night',
              'B. Post shift-swap notices on the volunteer Slack channel',
              'C. Email the academic department tutor',
              'D. Fill out a paper board in the Union foyer'
            ],
            correctAnswer: 'B',
            explanation: 'Post swaps on the volunteer Slack channel 24 hours ahead.'
          },
          {
            id: 'cd_listening_p9_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Which clothing item identifies volunteers on their first Saturday shift?',
            options: [
              'A. A yellow high-visibility safety vest',
              'B. A green laminated armband',
              'C. A formal university crest tie',
              'D. A blue volunteer hoodie'
            ],
            correctAnswer: 'D',
            explanation: 'Wear the blue volunteer hoodie alongside your student card.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Campus Sustainability & Repair Café Launch',
        audioScenario:
          'A Student Union vice-president briefs newcomers on campus charity food pantries, repair workshops, and community allotment days.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Union Sustainability Briefing]
Speaker: Welcome volunteers! Before breaking into project teams, let us review three flagship Student Union community campaigns running this term.
Speaker: [[Q11]] First, our zero-waste Student Pantry rescues surplus supermarket bread and vegetables every Monday and Thursday, distributing free crates outside Hall Basement B.
Speaker: [[Q12]] To respect guest dignity, shoppers carry plain woven tote bags rather than branded charity plastic sacks, and no proof of financial hardship is asked.
Speaker: [[Q13]] Second is our monthly Campus Repair Café inside the Engineering Foyer, where volunteer mechanics mend broken toaster switches and frayed charger cables free.
Speaker: [[Q14]] Note that safety regulations forbid volunteers from rewiring microwave ovens or high-voltage heaters due to electrical shock liability.
Speaker: [[Q15]] Every other Sunday morning, our Canal Towpath Clean-up teams launch bright red rowing skiffs to fish floating plastic bottles out of reed beds.
Speaker: [[Q16]] Gloves and steel litter grabbers are provided at the boathouse dock, though participants must wear sturdy waterproof boots—open sandals are turned away.
Speaker: [[Q17]] Over at the Orchard Allotment, volunteers supply freshly harvested courgettes and kale straight to two neighborhood homeless day shelters.
Speaker: [[Q18]] Anyone wishing to champion a brand-new local partnership can pitch small seed-grant bids of up to four hundred pounds to the Union Student Council.
Speaker: [[Q19]] Lastly, log every completed outreach reflection inside your online Civic Skills Portfolio before March fifteenth to qualify for graduation transcript recognition.
Speaker: [[Q20]] Meet your respective team leaders beside the tall cork noticeboard outside the coffee bar directly after applause.`,
        questions: [
          {
            id: 'cd_listening_p9_lq11',
            number: 11,
            type: 'short_answer',
            questionText: 'Which two days does the zero-waste Student Pantry distribute rescued food?',
            correctAnswer: 'MONDAY AND THURSDAY',
            explanation: 'Food distribution takes place every Monday and Thursday.'
          },
          {
            id: 'cd_listening_p9_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Bags given to pantry visitors to preserve dignity: ______ tote bags',
            correctAnswer: 'WOVEN',
            explanation: 'Shoppers carry plain woven tote bags.'
          },
          {
            id: 'cd_listening_p9_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Building foyer hosting the monthly Campus Repair Café: ______ Foyer',
            correctAnswer: 'ENGINEERING',
            explanation: 'Held inside the Engineering Foyer.'
          },
          {
            id: 'cd_listening_p9_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Which appliances cannot be repaired at the student clinic for safety reasons?',
            options: [
              'A. Microwave ovens and high-voltage heaters',
              'B. Desk lamps and hairdryers',
              'C. Torn winter jackets and zip fasteners',
              'D. Bicycle brakes and tyre punctures'
            ],
            correctAnswer: 'A',
            explanation: 'Safety rules prohibit repairing microwave ovens or high-voltage heaters.'
          },
          {
            id: 'cd_listening_p9_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Boats used on alternate Sundays to clear canal reed beds: red rowing ______',
            correctAnswer: 'SKIFFS',
            explanation: 'Volunteers launch bright red rowing skiffs.'
          },
          {
            id: 'cd_listening_p9_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Canal clean-up volunteers wearing open ______ are turned away for safety.',
            correctAnswer: 'SANDALS',
            explanation: 'Sturdy waterproof boots are required; open sandals are rejected.'
          },
          {
            id: 'cd_listening_p9_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Recipients of fresh greens from the Orchard Allotment: ______ day shelters',
            correctAnswer: 'HOMELESS',
            explanation: 'Harvest supplies two neighborhood homeless day shelters.'
          },
          {
            id: 'cd_listening_p9_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'Maximum Student Council seed-grant funding for new community partnerships:',
            correctAnswer: 'FOUR HUNDRED POUNDS',
            explanation: 'Students may pitch grants up to four hundred pounds.'
          },
          {
            id: 'cd_listening_p9_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What is required by March 15th to gain official graduation transcript recognition?',
            options: [
              'A. Submitting two written employer testimonials',
              'B. Uploading completed reflection logs to the Civic Skills Portfolio',
              'C. Logging at least one hundred Sunday clean-up hours',
              'D. Presenting slides to the Union Student Council'
            ],
            correctAnswer: 'B',
            explanation: 'Log completed reflections inside the Civic Skills Portfolio by March 15th.'
          },
          {
            id: 'cd_listening_p9_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Landmark near the coffee bar where team leaders gather: ______ noticeboard',
            correctAnswer: 'CORK',
            explanation: 'Gather beside the tall cork noticeboard.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring Impact in Student Civic Volunteering',
        audioScenario:
          'Social policy students Zara and Luke review interview transcripts from community charity partners with tutor Dr. Norris.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Community Impact Tutorial]
Dr. Norris: Good morning Zara and Luke. What stood out when you interviewed local charity managers about hosting student volunteers?
Zara: [[Q21]] Virtually every manager praised student enthusiasm, yet seventy percent complained that campus volunteers vanish abruptly during January and May exam blocks.
Luke: [[Q22]] That seasonal drop forced small food banks to hire temporary paid drivers just to keep elderly meal deliveries running on schedule.
Dr. Norris: Honest organizational critique! Did longer induction programs improve student retention across the full academic year?
Zara: [[Q23]] Yes—teams completing joint orientation with permanent charity staff stayed nearly twice as long as students recruited solely via autumn freshers fairs.
Dr. Norris: Intriguing correlation. How did charity directors measure success beyond simple headcounts?
Luke: [[Q24]] Rather than counting volunteer hours logged, directors favored tracking measurable outcomes—such as older residents independently filing online council forms afterwards.
Dr. Norris: [[Q25]] Be careful when quoting anonymised school teachers about tutoring clubs; secure parental photo consent before appending classroom seating maps.
Zara: [[Q26]] Agreed—we stripped out every classroom sketch and kept only aggregate pupil reading-age progress scores.
Luke: [[Q27]] Another snag surfaced in municipal funding: short twelve-month university community grants blocked charities from planning multi-year mentorship ladders.
Dr. Norris: [[Q28]] Suggest rotating overlapping officers on student committees across academic years in your policy recommendations section.
Zara: [[Q29]] Luke also analyzed why engineering undergraduates rarely joined humanities literacy hubs—they assumed non-technical roles held minimal career value.
Dr. Norris: [[Q30]] Highlight project-management transferables clearly, then wrap up your policy brief slides ready for Monday’s Civic Forum.`,
        questions: [
          {
            id: 'cd_listening_p9_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Share of charity managers citing volunteer drop-offs during exam blocks: ______ percent',
            correctAnswer: 'SEVENTY',
            explanation: 'Seventy percent cited sudden absences during exam weeks.'
          },
          {
            id: 'cd_listening_p9_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which meal service had to hire temporary paid drivers when students vanished?',
            correctAnswer: 'ELDERLY MEAL DELIVERIES',
            explanation: 'Food banks hired drivers to maintain elderly meal deliveries.'
          },
          {
            id: 'cd_listening_p9_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Which recruitment pathway yielded twice the volunteer retention?',
            options: [
              'A. Mass campus email newsletters in October',
              'B. Mandatory academic credit courses',
              'C. Joint orientations alongside permanent charity staff',
              'D. Social media giveaways at freshers fairs'
            ],
            correctAnswer: 'C',
            explanation: 'Joint orientations with permanent charity staff doubled retention.'
          },
          {
            id: 'cd_listening_p9_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'What preferred metric did directors value over total logged volunteer hours?',
            options: [
              'A. Social media shares from outreach posts',
              'B. Number of campus hoodies distributed per event',
              'C. Residents independently completing tasks like online council forms',
              'D. Monetary donations raised at summer fetes'
            ],
            correctAnswer: 'C',
            explanation: 'Directors tracked tangible independence outcomes for beneficiaries.'
          },
          {
            id: 'cd_listening_p9_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Diagram removed from appendices for pupil privacy: seating ______',
            correctAnswer: 'MAPS',
            explanation: 'They stripped out classroom seating maps.'
          },
          {
            id: 'cd_listening_p9_lq26',
            number: 26,
            type: 'summary_completion',
            questionText: 'Report retains only aggregate pupil ______ progress scores.',
            correctAnswer: 'READING-AGE',
            explanation: 'Kept only aggregate pupil reading-age progress scores.'
          },
          {
            id: 'cd_listening_p9_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Funding length preventing charities from building multi-year mentoring plans: ______ months',
            correctAnswer: 'TWELVE',
            explanation: 'Short twelve-month grants blocked long-term planning.'
          },
          {
            id: 'cd_listening_p9_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'What student committee reform does Dr. Norris suggest for continuity?',
            correctAnswer: 'ROTATING OVERLAPPING OFFICERS',
            explanation: 'Suggest rotating overlapping student committee officers across years.'
          },
          {
            id: 'cd_listening_p9_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'Why did engineering students seldom volunteer at literacy workshops?',
            options: [
              'A. They doubted non-technical roles carried CV value',
              'B. Workshops overlapped with laboratory classes',
              'C. Reading clubs only accepted education majors',
              'D. Commute distances exceeded campus shuttle routes'
            ],
            correctAnswer: 'A',
            explanation: 'They assumed non-technical outreach held little career value.'
          },
          {
            id: 'cd_listening_p9_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Event scheduled for Monday where the policy brief will be presented: ______ Forum',
            correctAnswer: 'CIVIC',
            explanation: 'Slides must be ready for Monday’s Civic Forum.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Origins of Civic Settlement Houses',
        audioScenario:
          'A social history lecturer examines how late-nineteenth-century university settlement houses pioneered modern community outreach.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Social Reform & Settlement History]
Lecturer: Student engagement with urban neighborhoods may feel distinctly twenty-first-century, yet its organizational roots trace directly back to Victorian university settlement houses.
Lecturer: [[Q31]] Before the 1880s, middle-class philanthropy mostly relied on distant charitable checks mailed across town without personal contact between donors and factory workers.
Lecturer: [[Q32]] Inspired by reformist tutor Samuel Barnett, graduates founded Toynbee Hall in East London in 1884, moving directly into crowded working-class wards to live as neighbors.
Lecturer: [[Q33]] Residents did not hand out emergency bread baskets; instead, Toynbee Hall organized evening adult trade classes, public art exhibits, and free legal clinics.
Lecturer: [[Q34]] Crucially, female graduates replicated and expanded the model globally—most famously Jane Addams at Hull House in Chicago—pioneering neighborhood nurseries and playground reforms.
Lecturer: [[Q35]] Beyond teaching, Hull House women drafted meticulous door-to-door wage maps, exposing sweatshop exploitation and unsafe tenement plumbing to reluctant city aldermen.
Lecturer: [[Q36]] Those colour-coded tenement street maps laid the empirical blueprint for modern urban sociology and municipal housing inspection departments.
Lecturer: [[Q37]] Over subsequent decades, however, settlement houses drew sharp scrutiny for subtle paternalism—assuming young elite visitors intuitively understood migrant families' priorities.
Lecturer: [[Q38]] By the mid-twentieth century, newly established welfare states absorbed core health clinics and evening schools, pushing settlements toward specialized youth recreation.
Lecturer: [[Q39]] Contemporary university civic programs seek to repair that legacy through genuine co-design, paying community elders directly as salaried co-educators rather than passive subjects.
Lecturer: [[Q40]] Ultimately, effective campus outreach depends on reciprocal listening—measuring transformation not by graduate self-improvement alone, but by enduring civic trust.`,
        questions: [
          {
            id: 'cd_listening_p9_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Pre-1880s middle-class charity method lacking personal contact: mailed ______',
            correctAnswer: 'CHECKS',
            explanation: 'Early philanthropy relied on distant checks mailed across town.'
          },
          {
            id: 'cd_listening_p9_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'East London settlement house established in 1884: ______ Hall',
            correctAnswer: 'TOYNBEE',
            explanation: 'Graduates founded Toynbee Hall in 1884.'
          },
          {
            id: 'cd_listening_p9_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'How did Toynbee Hall differ from conventional emergency relief charities?',
            options: [
              'A. It offered low-interest loans to textile mills',
              'B. It ran weekly steamship excursions to coastal resorts',
              'C. It built suburban cottages for factory foremen',
              'D. It hosted adult education, art exhibitions, and free legal clinics'
            ],
            correctAnswer: 'D',
            explanation: 'Organized trade classes, art exhibits, and legal clinics instead of handouts.'
          },
          {
            id: 'cd_listening_p9_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'Which Chicago settlement pioneer championed nurseries and public playgrounds?',
            correctAnswer: 'JANE ADDAMS',
            explanation: 'Jane Addams founded Hull House in Chicago.'
          },
          {
            id: 'cd_listening_p9_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Data tool used by Hull House investigators to expose sweatshops: ______ maps',
            correctAnswer: 'WAGE',
            explanation: 'Residents drafted door-to-door wage maps.'
          },
          {
            id: 'cd_listening_p9_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Tenement street charts helped establish modern urban ______ and municipal housing oversight.',
            correctAnswer: 'SOCIOLOGY',
            explanation: 'Maps laid the blueprint for modern urban sociology.'
          },
          {
            id: 'cd_listening_p9_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Historical criticism directed against well-meaning Victorian settlement visitors: ______',
            correctAnswer: 'PATERNALISM',
            explanation: 'Critics cited subtle paternalism.'
          },
          {
            id: 'cd_listening_p9_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why did traditional settlement functions narrow during the mid-twentieth century?',
            options: [
              'A. Suburban commuter trains scattered student housing',
              'B. Public welfare states took over core clinics and adult classes',
              'C. Municipal councils banned private volunteer charters',
              'D. Rising property taxes forced historic halls to close'
            ],
            correctAnswer: 'B',
            explanation: 'Public welfare states absorbed core health clinics and evening schools.'
          },
          {
            id: 'cd_listening_p9_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'In what paid role do modern civic universities invite local elders?',
            correctAnswer: 'CO-EDUCATORS',
            explanation: 'Programs pay neighborhood elders as salaried co-educators.'
          },
          {
            id: 'cd_listening_p9_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'According to the speaker, how should true campus outreach be evaluated?',
            options: [
              'A. Enduring civic trust shaped by reciprocal listening',
              'B. Total volunteer attendance hours per faculty',
              'C. Media coverage across regional newspapers',
              'D. Annual fundraising receipts collected by graduates'
            ],
            correctAnswer: 'A',
            explanation: 'Measured by enduring civic trust built on reciprocal listening.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 10: University Careers Service & Summer Internship Fair
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p10',
    testNumber: 10,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 10: University Careers Service & Summer Internship Fair',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on University Careers Service & Summer Internship Fair.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Employer Booth & Career Fair Registration',
        audioScenario:
          'A graduate student calls the University Careers Service to register for next week’s Summer Internship Fair and reserve a CV clinic check.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Careers Service Desk]
Advisor: Good morning, University Careers and Employability Hub, Jordan speaking. How can I help?
Student: Hi Jordan, I am hoping to attend Thursday’s STEM Summer Internship Fair and book a quick resume review beforehand.
Advisor: [[Q1]] Delighted to help. Could you give me your surname to check registration eligibility? Yes, it is Whitaker, spelled W-H-I-T-A-K-E-R.
Advisor: [[Q2]] Thank you, Ms. Whitaker. The Internship Fair opens inside the Great Assembly Hall from ten in the morning until half past three.
Student: Do I need to print paper resumes, or do recruiters scan badges digitally?
Advisor: [[Q3]] Bring five printed copies in a tidy folder, because technical booth engineers frequently jot notes directly across margins after brief chats.
Student: [[Q4]] Good tip. Also, is there a dedicated quiet entry hour for neurodivergent students or anxious first-time attendees? Yes—quiet sensory-friendly admission runs from nine thirty to ten fifteen before crowds surge.
Student: [[Q5]] Could I book a twenty-minute CV critique with an engineering careers coach tomorrow? We have an opening at 11:40 with adviser Priya Nair in Pod Four.
Advisor: [[Q6]] Note that the main careers lounge also offers a free formal blazer lending rack if your internship suit has not arrived yet.
Student: [[Q7]] Really? How many days may students borrow an interview outfit? You can borrow a jacket or shirt free for seventy-two hours using your campus ID card.
Student: [[Q8]] Will graduate recruiters conduct live screening interviews inside the hall itself? Most take resumes for online coding tests, though four civil engineering consultancies hold rapid fifteen-minute coffee chats in Balcony Rooms A and B.
Advisor: [[Q9]] Should you run late between morning lectures, remember bag storage sits beside Coat Check West because bulky rucksacks are barred from narrow exhibition aisles.
Student: [[Q10]] Got it. Lastly, how do I view the live employer stall map before Thursday? Download the CareerBridge campus app and select Map Code SF-22 under Events.`,
        questions: [
          {
            id: 'cd_listening_p10_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname: ______',
            correctAnswer: 'WHITAKER',
            explanation: 'Spelled W-H-I-T-A-K-E-R.'
          },
          {
            id: 'cd_listening_p10_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Venue hosting Thursday’s Internship Fair: Great ______ Hall',
            correctAnswer: 'ASSEMBLY',
            explanation: 'Held inside the Great Assembly Hall.'
          },
          {
            id: 'cd_listening_p10_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Recommended number of printed CV copies to carry: ______',
            correctAnswer: 'FIVE',
            explanation: 'Bring five printed copies.'
          },
          {
            id: 'cd_listening_p10_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'When does quiet sensory-friendly early admission close?',
            correctAnswer: 'TEN FIFTEEN',
            explanation: 'Quiet admission runs from 9:30 to 10:15.'
          },
          {
            id: 'cd_listening_p10_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Location of tomorrow’s CV critique with Priya Nair: Pod ______',
            correctAnswer: 'FOUR',
            explanation: 'Appointment sits in Pod Four.'
          },
          {
            id: 'cd_listening_p10_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Clothing item loaned free at the careers lounge: formal ______',
            correctAnswer: 'BLAZER',
            explanation: 'Students can borrow from the formal blazer rack.'
          },
          {
            id: 'cd_listening_p10_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Maximum complimentary clothing loan period: ______ hours',
            correctAnswer: 'SEVENTY-TWO',
            explanation: 'Outfits may be borrowed for seventy-two hours.'
          },
          {
            id: 'cd_listening_p10_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Where do four engineering firms hold short coffee chats?',
            options: [
              'A. At the central exhibition atrium stage',
              'B. At the Student Union café booths',
              'C. Inside Careers Lounge Pod Four',
              'D. In Balcony Rooms A and B'
            ],
            correctAnswer: 'D',
            explanation: 'Consultancies host rapid chats in Balcony Rooms A and B.'
          },
          {
            id: 'cd_listening_p10_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why must visitors drop large rucksacks at Coat Check West?',
            options: [
              'A. Bags conceal unauthorized promotional flyers',
              'B. Insurance policies forbid bags inside historic halls',
              'C. Exhibition aisles are too narrow for bulky backpacks',
              'D. Floor space is needed for photo booths'
            ],
            correctAnswer: 'C',
            explanation: 'Bulky rucksacks are barred from narrow exhibition aisles.'
          },
          {
            id: 'cd_listening_p10_lq10',
            number: 10,
            type: 'short_answer',
            questionText: 'Event map code to open the stall floorplan inside the CareerBridge app:',
            correctAnswer: 'SF-22',
            explanation: 'Select Map Code SF-22 under Events.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Making the Most of the Summer Internship Fair',
        audioScenario:
          'A senior careers consultant addresses final-year students on employer booth etiquette, visa work-rights badges, and rural placement stipends.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Careers Preparation Briefing]
Consultant: Welcome everyone! With seventy-five visiting employers setting up tomorrow, smart preparation separates memorable applicants from passive flyer collectors.
Consultant: [[Q11]] First, skip waiting in thirty-minute queues at three household tech brands while overlooking fast-growing mid-sized firms along the west mezzanine where senior hiring managers stand idle.
Consultant: [[Q12]] Before stepping up to any table, read their current annual sustainability report or product release so your opening question proves genuine curiosity beyond asking "what roles do you offer?"
Consultant: [[Q13]] International candidates holding student visas should look for green globe stickers displayed on sponsor banners indicating employers licensed to back skilled graduate visas.
Consultant: [[Q14]] To aid first-generation students taking unpaid charity internships, our university bursary awards competitive living stipends worth up to eighteen hundred pounds over eight weeks.
Consultant: [[Q15]] Need a sharp headshot for your LinkedIn profile? Stop by our studio corner behind Booth Twelve where a campus photographer shoots complimentary portraits until two.
Consultant: [[Q16]] Avoid blocking aisle traffic for fifteen minutes while chatting—ask instead for the graduate recruiter’s name, jot a single memorable detail, and follow up concisely within forty-eight hours.
Consultant: [[Q17]] If an employer invites you to an online numerical reasoning test later this week, visit our Practice Software Terminal Room to try timed mock assessments under realistic pressure.
Consultant: [[Q18]] Check noticeboards near the hall fountain for paid micro-placements—two-week spring research sprints with local civic councils starting next term.
Consultant: [[Q19]] Remember that every candidate stepping onto the fair floor can request complimentary feedback on mock assessment-center group exercises held next Tuesday evening.
Consultant: [[Q20]] Grab a cream pocket notebook at the door right now so your hand stays off your phone screen when taking recruiter notes!`,
        questions: [
          {
            id: 'cd_listening_p10_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Hall zone where fast-growing mid-sized employers are located: west ______',
            correctAnswer: 'MEZZANINE',
            explanation: 'Mid-sized firms wait along the west mezzanine.'
          },
          {
            id: 'cd_listening_p10_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Besides new product launches, which company document should students skim beforehand?',
            correctAnswer: 'SUSTAINABILITY REPORT',
            explanation: 'Read the annual sustainability report or product release.'
          },
          {
            id: 'cd_listening_p10_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Banner marker identifying companies licensed to sponsor graduate visas: green ______ sticker',
            correctAnswer: 'GLOBE',
            explanation: 'Green globe stickers denote visa-sponsoring employers.'
          },
          {
            id: 'cd_listening_p10_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'University bursaries pay up to £ ______ for eight-week unpaid charity internships.',
            correctAnswer: 'EIGHTEEN HUNDRED',
            explanation: 'Stipends reach up to eighteen hundred pounds.'
          },
          {
            id: 'cd_listening_p10_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Booth beside the complimentary LinkedIn photography corner: Booth ______',
            correctAnswer: 'TWELVE',
            explanation: 'Located directly behind Booth Twelve.'
          },
          {
            id: 'cd_listening_p10_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'Why does the consultant warn against holding fifteen-minute chats at crowded stalls?',
            options: [
              'A. Recruiters charge overtime per booth visitor',
              'B. Blocking narrow aisles disrupts traffic; short notes and follow-ups work better',
              'C. Badges deactivate automatically after ten minutes',
              'D. Background auditorium noise ruins conversations'
            ],
            correctAnswer: 'B',
            explanation: 'Long chats block traffic; note details and follow up within 48 hours.'
          },
          {
            id: 'cd_listening_p10_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Aptitude test type students can practice inside the Terminal Room: ______ reasoning',
            correctAnswer: 'NUMERICAL',
            explanation: 'Practice timed online numerical reasoning tests.'
          },
          {
            id: 'cd_listening_p10_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'How long do paid spring micro-placements with local civic councils last?',
            correctAnswer: 'TWO-WEEK',
            explanation: 'Micro-placements run as two-week research sprints.'
          },
          {
            id: 'cd_listening_p10_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Which evening coaching event helps candidates prepare for group assessments?',
            options: [
              'A. A panel talk with tech CEOs on Thursday',
              'B. Online cover-letter peer clinics on Sunday',
              'C. Salary negotiation speed rounds on Friday',
              'D. Mock assessment-center exercises next Tuesday'
            ],
            correctAnswer: 'D',
            explanation: 'Mock assessment-center exercises run next Tuesday evening.'
          },
          {
            id: 'cd_listening_p10_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Stationery handed out at the door to keep students off phones: cream pocket ______',
            correctAnswer: 'NOTEBOOK',
            explanation: 'Take a cream pocket notebook at the entrance.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Graduate Internship Outcomes',
        audioScenario:
          'Business undergraduates Asha and Cole discuss placement satisfaction metrics with careers researcher Dr. Park.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Employability Research Supervision]
Dr. Park: Come in Asha and Cole. What patterns emerged from your longitudinal study of paid versus unpaid summer internships?
Asha: [[Q21]] Tracking four hundred alumni one year post-graduation showed graduates from paid internships started at salaries nineteen percent higher than peers without placements.
Cole: [[Q22]] Crucially, students who took unpaid summer roles showed no statistically meaningful wage lift compared against peers working ordinary retail jobs.
Dr. Park: Sobering contrast! Did company size predict whether interns received genuine technical mentorship?
Asha: [[Q23]] Actually, small startups gave interns broader client exposure early on, whereas multinational banks locked students into narrow spreadsheet compliance duties.
Dr. Park: [[Q24]] How cleanly did students separate structured feedback reviews from casual weekly chats in your questionnaire? Once we added a strict definition—written mid-point appraisal signed by a line manager—consistent score gaps emerged clearly.
Cole: [[Q25]] One worrying gender split appeared around salary negotiation: sixty-four percent of male interviewees negotiated final graduate job offers compared to barely a third of female interviewees.
Dr. Park: [[Q26]] Check whether university major accounts for part of that negotiation gap before concluding it reflects confidence alone, since finance cohorts negotiate far more often than journalism classes.
Asha: [[Q27]] Right—we ran an intra-discipline check within Computer Science alone and found the confidence gap narrowed sharply after our department introduced mock bargaining workshops.
Cole: [[Q28]] Turning to commute barriers, rural students without cars turned down nearly half of industrial manufacturing placements located outside city bus routes.
Dr. Park: [[Q29]] Recommend subsidised campus car-pool vouchers inside your policy recommendations section rather than assuming every firm can move labs downtown.
Asha: [[Q30]] Lastly, we will strip employer names from anonymized salary histograms and submit our executive briefing paper to the Vice-Chancellor’s Employment Board.`,
        questions: [
          {
            id: 'cd_listening_p10_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Starting salary boost observed among alumni completing paid internships: ______ percent',
            correctAnswer: 'NINETEEN',
            explanation: 'Paid interns earned nineteen percent higher starting salaries.'
          },
          {
            id: 'cd_listening_p10_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'How did unpaid summer interns compare financially after graduation against peers in ordinary retail jobs?',
            options: [
              'A. Unpaid interns saw no statistically meaningful wage advantage',
              'B. Unpaid interns earned slightly more within finance',
              'C. Unpaid interns received faster managerial promotions',
              'D. Retail workers suffered higher short-term unemployment'
            ],
            correctAnswer: 'A',
            explanation: 'Unpaid interns showed no statistically meaningful wage lift over retail workers.'
          },
          {
            id: 'cd_listening_p10_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'What did interns at small startups gain earlier than peers at large banks?',
            correctAnswer: 'CLIENT EXPOSURE',
            explanation: 'Small startups offered broader client exposure early.'
          },
          {
            id: 'cd_listening_p10_lq24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Formal feedback was defined strictly as a written mid-point ______ signed by a manager.',
            correctAnswer: 'APPRAISAL',
            explanation: 'Defined as a written mid-point appraisal signed by a line manager.'
          },
          {
            id: 'cd_listening_p10_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Share of male interviewees who negotiated starting job offers: ______ percent',
            correctAnswer: 'SIXTY-FOUR',
            explanation: 'Sixty-four percent of male interviewees negotiated offers.'
          },
          {
            id: 'cd_listening_p10_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Which variable does Dr. Park ask the students to control inside negotiation scores?',
            options: [
              'A. Parent educational background',
              'B. University academic major such as finance versus journalism',
              'C. Geographical region of the employer',
              'D. Final degree GPA tier'
            ],
            correctAnswer: 'B',
            explanation: 'Academic major affects negotiation norms across disciplines.'
          },
          {
            id: 'cd_listening_p10_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Workshop type that narrowed negotiation gaps in Computer Science: mock ______ workshops',
            correctAnswer: 'BARGAINING',
            explanation: 'Mock bargaining workshops narrowed the gap.'
          },
          {
            id: 'cd_listening_p10_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Industry whose placements rural non-driving students frequently declined: ______',
            correctAnswer: 'MANUFACTURING',
            explanation: 'Industrial manufacturing sites off bus routes were declined.'
          },
          {
            id: 'cd_listening_p10_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'What transport perk does Dr. Park suggest in policy recommendations?',
            correctAnswer: 'CAR-POOL VOUCHERS',
            explanation: 'She recommends subsidised campus car-pool vouchers.'
          },
          {
            id: 'cd_listening_p10_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Body receiving the final anonymized briefing paper: ______ Board',
            correctAnswer: 'EMPLOYMENT',
            explanation: 'Submitted to the Vice-Chancellor’s Employment Board.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Evolution of Structured Apprenticeships and Internships',
        audioScenario:
          'An organizational sociology lecturer traces youth workplace training from medieval guild indentures through modern degree apprenticeships.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Workplace Learning History]
Lecturer: Long before university careers offices existed, societies confronted a timeless dilemma: how do novices turn classroom theory into trusted craftsmanship?
Lecturer: [[Q31]] Across medieval Europe, craft guilds bound teenagers under legal seven-year indentures—masters provided food, shelter, and trade secrets while apprentices supplied unpaid labour.
Lecturer: [[Q32]] At contract conclusion, candidates submitted a physical masterpiece before senior aldermen to earn full guild citizenship and independent shop rights.
Lecturer: [[Q33]] Industrial factories shattered that intimate workshop bond, replacing holistic training with repetitive assembly lines requiring weeks rather than years to master.
Lecturer: [[Q34]] Modern collegiate internships emerged around 1906 at the University of Cincinnati, where Dean Herman Schneider alternated engineering weeks between classrooms and foundries.
Lecturer: [[Q35]] Schneider observed that students returning from shop-floor terms grasped abstract thermodynamics far faster because textbook formulas suddenly anchored physical turbines.
Lecturer: [[Q36]] By the 1980s, corporate management tracks popularized short ten-week summer internships primarily as low-risk extended job auditions for elite finance and media firms.
Lecturer: [[Q37]] Critics soon highlighted an equity trap: unpaid summer roles inside expensive capital cities filtered professions toward wealthy families able to bankroll summer rent.
Lecturer: [[Q38]] Recently, regulatory reforms in several European nations restricted unpaid internships strictly to enrolled students earning verified academic degree credit.
Lecturer: [[Q39]] Simultaneously, structured degree apprenticeships merge salaried full-time employment with day-release university tuition, erasing student loan debt while training nursing and software specialists.
Lecturer: [[Q40]] Looking forward, sustainable workforce pipelines demand clear mentorship contracts ensuring trainees rotate through genuine tasks rather than endless administrative filing.`,
        questions: [
          {
            id: 'cd_listening_p10_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Standard duration of medieval European guild indentures: ______ years',
            correctAnswer: 'SEVEN',
            explanation: 'Guilds bound apprentices under seven-year indentures.'
          },
          {
            id: 'cd_listening_p10_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Final qualifying object evaluated by guild aldermen: physical ______',
            correctAnswer: 'MASTERPIECE',
            explanation: 'Candidates presented a physical masterpiece to earn guild status.'
          },
          {
            id: 'cd_listening_p10_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'How did industrialization undermine traditional workshop apprenticeships?',
            options: [
              'A. Printing presses published trade secrets publicly',
              'B. Urban rents drove craft masters to rural villages',
              'C. Repetitive assembly lines needed weeks instead of years to learn',
              'D. Railways transported foreign manufactured goods cheaply'
            ],
            correctAnswer: 'C',
            explanation: 'Factory assembly lines displaced long holistic training.'
          },
          {
            id: 'cd_listening_p10_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Industrial workplace paired with Cincinnati engineering classrooms in 1906: ______',
            correctAnswer: 'FOUNDRIES',
            explanation: 'Schneider alternated students between classrooms and foundries.'
          },
          {
            id: 'cd_listening_p10_lq35',
            number: 35,
            type: 'short_answer',
            questionText: 'Which engineering subject became easier once students saw shop-floor turbines?',
            correctAnswer: 'THERMODYNAMICS',
            explanation: 'Students grasped abstract thermodynamics much faster.'
          },
          {
            id: 'cd_listening_p10_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: '1980s ten-week summer internships functioned largely as low-risk job ______ for elite firms.',
            correctAnswer: 'AUDITIONS',
            explanation: 'Summer schemes operated as extended job auditions.'
          },
          {
            id: 'cd_listening_p10_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did unpaid urban internships widen social inequality?',
            options: [
              'A. Universities charged extra tuition for off-site weeks',
              'B. Commuter rail cards excluded corporate trainees',
              'C. Only wealthy families could afford unpaid summer city housing',
              'D. Visa rules disqualified international trainees'
            ],
            correctAnswer: 'C',
            explanation: 'Unpaid roles favored families able to fund high city rents.'
          },
          {
            id: 'cd_listening_p10_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Prerequisite required by European laws allowing unpaid placements: verified ______ credit',
            correctAnswer: 'DEGREE',
            explanation: 'Restricted strictly to students earning verified degree credit.'
          },
          {
            id: 'cd_listening_p10_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Financial burden eliminated by salaried degree apprenticeships: ______ debt',
            correctAnswer: 'LOAN',
            explanation: 'Degree apprenticeships erase student loan debt.'
          },
          {
            id: 'cd_listening_p10_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What safeguard ensures future internships remain educational rather than menial?',
            options: [
              'A. Strict mentorship contracts rotating trainees across genuine tasks',
              'B. Mandatory three-month unpaid observation windows',
              'C. Government limits restricting intakes to five per company',
              'D. Online multiple-choice ethics tests at graduation'
            ],
            correctAnswer: 'A',
            explanation: 'Clear mentorship contracts guarantee rotation through genuine work.'
          }
        ]
      }
    ]
  })
];
