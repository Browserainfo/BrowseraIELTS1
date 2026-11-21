/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_08: TestItem[] = [
  // =========================================================================
  // MOCK 6: Student Counseling Intake & Medieval Trade Routes Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m6',
    testNumber: 6,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 6: Student Counseling Intake & Medieval Trade Routes Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Counseling Intake & Medieval Trade Routes Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking a Student Counseling Intake Appointment',
        audioScenario:
          'A university student phones the Campus Wellbeing and Counseling Reception Desk to schedule an initial intake consultation.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Student Counseling Intake Desk]
Receptionist: Good afternoon, University Wellbeing and Counseling Reception, Hannah speaking. How can I help you today?
Student: [[Q1]] Hi Hannah, I would like to arrange an initial consultation regarding pre-exam sleep anxiety. Let me spell my surname for your intake file: it is Gallagher, spelled G-A-L-L-A-G-H-E-R.
Receptionist: [[Q2]] Thank you, Mr. Gallagher. Which academic faculty and degree year are you enrolled in this semester? I am in second-year Civil Engineering inside the Faculty of Technology!
Receptionist: [[Q3]] Noted cleanly. First-time visitors meet with an intake advisor for twenty-five minutes before full counseling sessions begin—we have an opening tomorrow afternoon or Thursday morning at ten fifteen!
Student: [[Q4]] Thursday morning at ten fifteen fits right between my morning lab and lunch! Where is the reception lounge located? Head to the Birchwood Health Annex, entering quietly through the frosted courtyard side staircase rather than the noisy main campus cafe plaza!
Student: [[Q5]] Got it—Birchwood Health Annex via the courtyard side staircase. Do I need to bring my paper medical history card or GP referral letter? Neither is needed—just bring your plastic Student Identity Card plus a completed online sleep questionnaire submitted beforehand!
Receptionist: [[Q6]] Once you submit that brief form, our confidentiality policy keeps every note strictly separated from academic faculty transcripts unless severe immediate physical harm appears!
Student: [[Q7]] That reassurance really helps. Could I request a senior male advisor if one works Thursday mornings, or simply whoever is available? Our senior specialist Dr. Patel handles Thursday ten-fifteen intake slots specifically for engineering and science students!
Receptionist: [[Q8]] Also, please silence phones before stepping inside Waiting Pod Three—we offer warm lemon-ginger herbal water and noise-cancelling ear cushions there while you wait!
Student: [[Q9]] Should something urgent crop up overnight before Thursday, which direct number connects me with after-hours listeners? Save Nightline Peer Support directly on extension 4490—volunteers answer free every night from eight until dawn!
Receptionist: [[Q10]] Let me lock Thursday ten fifteen cleanly under Intake Reference Number WC-608.`,
        questions: [
          {
            id: 'cd_listening_m6_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname recorded on intake file: ______',
            correctAnswer: 'GALLAGHER',
            explanation: 'Spelled G-A-L-L-A-G-H-E-R.'
          },
          {
            id: 'cd_listening_m6_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Degree program: Second-year ______ Engineering',
            correctAnswer: 'CIVIL',
            explanation: 'Student studies second-year Civil Engineering.'
          },
          {
            id: 'cd_listening_m6_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Duration of initial intake advisor consultation: ______ minutes',
            correctAnswer: 'TWENTY-FIVE',
            explanation: 'Initial intake meeting lasts twenty-five minutes.'
          },
          {
            id: 'cd_listening_m6_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Which university building houses the counseling reception lounge?',
            correctAnswer: 'BIRCHWOOD HEALTH ANNEX',
            explanation: 'Reception is inside the Birchwood Health Annex.'
          },
          {
            id: 'cd_listening_m6_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Document required online prior to arriving: completed ______ questionnaire',
            correctAnswer: 'SLEEP',
            explanation: 'Submit the completed online sleep questionnaire beforehand.'
          },
          {
            id: 'cd_listening_m6_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'How does the counseling center handle session privacy relative to academic departments?',
            options: [
              'A. Faculty tutors receive brief attendance summaries monthly',
              'B. Exam boards review intake notes before approving extensions',
              'C. Notes remain strictly separate from academic records unless imminent harm exists',
              'D. Records stay archived openly on shared campus medical portals'
            ],
            correctAnswer: 'C',
            explanation: 'Confidentiality separates notes strictly from academic transcripts.'
          },
          {
            id: 'cd_listening_m6_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Assigned Thursday 10:15 AM intake specialist: Dr. ______',
            correctAnswer: 'PATEL',
            explanation: 'Dr. Patel handles Thursday ten-fifteen slots.'
          },
          {
            id: 'cd_listening_m6_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What amenity is available inside Waiting Pod Three before appointments?',
            options: [
              'A. Printed study-skills workbooks and pencils',
              'B. Herbal water and noise-cancelling ear cushions',
              'C. Espresso coffee machines and newspapers',
              'D. Individual desktop relaxation biofeedback monitors'
            ],
            correctAnswer: 'B',
            explanation: 'Waiting Pod Three offers lemon-ginger herbal water and ear cushions.'
          },
          {
            id: 'cd_listening_m6_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Nightline Peer Support campus telephone extension for urgent overnight calls: ______',
            correctAnswer: '4490',
            explanation: 'Save extension 4490 for Nightline Peer Support.'
          },
          {
            id: 'cd_listening_m6_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Thursday intake booking code: ______',
            correctAnswer: 'WC-608',
            explanation: 'Locked under Intake Reference Number WC-608.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Campus Wellbeing Workshops & Restorative Gardens',
        audioScenario:
          'A university wellbeing coordinator introduces first-year students to weekly peer workshops, sensory quiet zones, and mindfulness walks.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Student Wellbeing Program Tour]
Coordinator: Welcome, everyone, to the Campus Wellbeing Support Orientation! Today I want to introduce practical stress-relief workshops and quiet campus sanctuaries free for all enrolled students.
Coordinator: [[Q11]] First, look across our Monday evening workshop wall: instead of dry lectures, our most popular drop-in session teaches practical time-blocking inside ninety-minute Pomodoro study sprints!
Coordinator: [[Q12]] Second, international postgraduates arriving without nearby family often join Wednesday Tea & Chat tables upstairs in Conservatory Room Four—no pre-registration needed, simply bring a favorite ceramic mug!
Coordinator: [[Q13]] Outside behind the Chemistry Tower lies our hidden Willow Sensory Garden, redesigned last spring with fragrant lavender hedges specifically to calm exam-week nervous systems!
Coordinator: [[Q14]] Notice the garden seating rule clearly printed on oak benches: laptops and bright phone screens stay tucked inside backpacks so resting eyes recover cleanly from glowing blue display fatigue!
Coordinator: [[Q15]] Every Tuesday and Friday noon, certified therapy dogs—two gentle golden retrievers named Barnaby and Clover—visit the lawn pergola for twenty-minute petting rotations!
Coordinator: [[Q16]] For students balancing heavy part-time retail jobs alongside dissertations, our Emergency Hardship Bursary Desk distributes micro-grants covering winter heating bills or unexpected dental costs!
Coordinator: [[Q17]] Remember also our Sleep Hygiene Loan Library: students struggling with noisy shared dorm corridors can borrow white-noise bedside machines free for four full weeks!
Coordinator: [[Q18]] Check our green digital wallboard outside Dining Hall West for red cancellation alerts whenever icy weather shifts outdoor breathing walks indoors into Studio B!
Coordinator: [[Q19]] If you prefer anonymous online self-guided tools at midnight, download our licensed SilverCloud resilience modules using your university email domain!
Coordinator: [[Q20]] Finally, grab one folded pocket Crisis Wallet Card from the wooden tray beside Door Two before heading to afternoon tutorials.`,
        questions: [
          {
            id: 'cd_listening_m6_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Monday evening workshop technique practicing ninety-minute study sprints: ______',
            correctAnswer: 'POMODORO',
            explanation: 'Teaches practical time-blocking in ninety-minute Pomodoro study sprints.'
          },
          {
            id: 'cd_listening_m6_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Item attendees are encouraged to bring to Wednesday Tea & Chat tables: ceramic ______',
            correctAnswer: 'MUG',
            explanation: 'Simply bring a favorite ceramic mug.'
          },
          {
            id: 'cd_listening_m6_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Fragrant garden plant lining pathways behind Chemistry Tower: ______',
            correctAnswer: 'LAVENDER',
            explanation: 'Redesigned with fragrant lavender hedges.'
          },
          {
            id: 'cd_listening_m6_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why are phones and laptops banned from the Willow Sensory Garden benches?',
            options: [
              'A. Wi-Fi signal repeaters do not reach behind Chemistry Tower',
              'B. Wildlife photography disturbs nesting garden birds',
              'C. Rain sprinklers run automatically every half hour',
              'D. Students need eye rest from bright blue screen glare'
            ],
            correctAnswer: 'D',
            explanation: 'Resting eyes recover cleanly from glowing blue display fatigue.'
          },
          {
            id: 'cd_listening_m6_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'Which animal breed visits the lawn pergola on Tuesdays and Fridays?',
            correctAnswer: 'GOLDEN RETRIEVERS',
            explanation: 'Two gentle golden retrievers visit for petting rotations.'
          },
          {
            id: 'cd_listening_m6_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'What types of expenses does the Emergency Hardship Bursary Desk cover?',
            options: [
              'A. Winter heating bills and sudden dental expenses',
              'B. Overseas conference flight tickets and textbooks',
              'C. Campus parking fines and late library charges',
              'D. Graduation gown rentals and club dues'
            ],
            correctAnswer: 'A',
            explanation: 'Micro-grants cover winter heating bills or unexpected dental costs.'
          },
          {
            id: 'cd_listening_m6_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'What bedside device can dormitory students borrow free for four weeks?',
            correctAnswer: 'WHITE-NOISE',
            explanation: 'Borrow white-noise bedside machines free for four weeks.'
          },
          {
            id: 'cd_listening_m6_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Indoor backup room whenever icy weather cancels outdoor breathing walks: Studio ______',
            correctAnswer: 'B',
            explanation: 'Weather shifts walks indoors into Studio B.'
          },
          {
            id: 'cd_listening_m6_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Licensed online self-guided resilience toolset unlocked via student email: ______',
            correctAnswer: 'SILVERCLOUD',
            explanation: 'Download licensed SilverCloud resilience modules.'
          },
          {
            id: 'cd_listening_m6_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Exit door holding wooden trays of Crisis Wallet Cards: Door ______',
            correctAnswer: 'TWO',
            explanation: 'Wooden tray beside Door Two.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Reviewing a Seminar on Medieval Maritime Guild Ledgers',
        audioScenario:
          'History undergraduates Priya and Tomas meet with Dr. Vance to refine source citations and data maps for their seminar on late medieval trade routes.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: History Research Tutorial]
Dr. Vance: Morning, Priya and Tomas. I finished reading your seminar draft comparing Baltic Hanseatic shipping with Venetian spice fleets. Let us strengthen three weak spots before Thursday.
Priya: [[Q21]] Gladly! When sorting fourteenth-century Lubeck harbour tax rolls, we noticed weights listed in cryptic local barrels called lasts rather than modern metric tonnes!
Tomas: [[Q22]] To avoid misreading cargo volumes, we converted herring barrels using merchants’ handbook ratios compiled around 1380—though Baltic salt weights fluctuated twelve percent between coastal ports!
Dr. Vance: [[Q23]] Excellent archival awareness—add a crisp conversion appendix footnote explaining that port variance instead of hiding averages inside bar charts! What surprised you most comparing Mediterranean versus northern bulk shipping?
Priya: [[Q24]] Northern Hanseatic cogs hauled cheap heavy everyday commodities—timber, salted cod, and wool cloth—whereas Genoese galleys prioritized high-margin compact luxuries like saffron, silk, and cloves!
Dr. Vance: [[Q25]] Strong contrast! Yet look closely at Map Three: your red dotted shipping lines cross straight across winter alpine passes in January when snow shut caravan mule trails completely!
Tomas: [[Q26]] Good catch—we accidentally plotted summer Brenner Pass mule tracks onto our January winter timeline! I will re-route winter spice consignments down river barges along the Rhone valley instead!
Dr. Vance: [[Q27]] Smart fix! Also verify whether Florentine merchant bankers relied primarily on physical gold florin coin bags for cross-border wool settlements?
Priya: [[Q28]] Actually no—parchment bills of exchange signed across Bruges and Florence cleared huge balances safely without hauling heavy silver coin carts past highway bandits!
Dr. Vance: [[Q29]] Highlight one scanned parchment bill directly on Slide Six so peers immediately grasp early paper credit! Who presents the economic conclusion on Friday?
Tomas: [[Q30]] Priya opens with Baltic grain tariffs while I wrap up explaining how Black Death population drops pushed maritime sailor wages steeply upward!`,
        questions: [
          {
            id: 'cd_listening_m6_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Obscure northern harbour unit found on 14th-century Lubeck tax rolls: ______',
            correctAnswer: 'LASTS',
            explanation: 'Weights were listed in local barrels called lasts.'
          },
          {
            id: 'cd_listening_m6_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Percentage variation found in coastal Baltic salt weights across different ports: ______ percent',
            correctAnswer: 'TWELVE',
            explanation: 'Baltic salt weights fluctuated twelve percent between ports.'
          },
          {
            id: 'cd_listening_m6_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How does Dr. Vance advise handling port measurement discrepancies?',
            options: [
              'A. Delete ambiguous barrel entries from final totals',
              'B. Explain port-by-port conversion variance inside an appendix footnote',
              'C. Average weights uniformly across all Baltic harbours',
              'D. Restrict charts exclusively to Genoese spice invoices'
            ],
            correctAnswer: 'B',
            explanation: 'Add a crisp conversion appendix footnote explaining port variance.'
          },
          {
            id: 'cd_listening_m6_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'Besides timber and wool cloth, which northern food commodity filled Hanseatic cogs?',
            correctAnswer: 'SALTED COD',
            explanation: 'Hanseatic cogs hauled timber, salted cod, and wool cloth.'
          },
          {
            id: 'cd_listening_m6_lq25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'What historical error did Dr. Vance spot on the students’ Map Three?',
            options: [
              'A. Venice was mislabeled under Genoese naval borders',
              'B. Hanseatic towns were missing sea depth soundings',
              'C. Winter January shipping lines crossed snowbound alpine mule passes',
              'D. Spice routes bypassed Constantinople ports altogether'
            ],
            correctAnswer: 'C',
            explanation: 'Red lines crossed snowbound alpine passes in January.'
          },
          {
            id: 'cd_listening_m6_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'River corridor replacing snowbound alpine routes for winter barge plots: ______ valley',
            correctAnswer: 'RHONE',
            explanation: 'Re-route winter shipments down river barges along the Rhone valley.'
          },
          {
            id: 'cd_listening_m6_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Physical Venetian or Florentine gold currency avoided during hazardous road transfers: ______',
            correctAnswer: 'FLORIN',
            explanation: 'Avoided hauling heavy gold florin coin bags.'
          },
          {
            id: 'cd_listening_m6_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which parchment credit instruments replaced carting heavy silver coins between Bruges and Florence?',
            correctAnswer: 'BILLS OF EXCHANGE',
            explanation: 'Parchment bills of exchange cleared huge cross-border balances safely.'
          },
          {
            id: 'cd_listening_m6_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Slide number designated to show an archival scanned bill specimen: Slide ______',
            correctAnswer: 'SIX',
            explanation: 'Highlight one scanned parchment bill on Slide Six.'
          },
          {
            id: 'cd_listening_m6_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'What economic consequence of the Black Death will Tomas explain in the conclusion?',
            options: [
              'A. Immediate abandonment of wooden ship hulls',
              'B. Collapse of amber mining across coastal Poland',
              'C. Sharp rise in maritime sailor wages due to labor scarcity',
              'D. Lower grain prices across Atlantic port cities'
            ],
            correctAnswer: 'C',
            explanation: 'Black Death population drops pushed maritime sailor wages steeply upward.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Architecture & Economics of Medieval Trade Routes',
        audioScenario:
          'An economic historian lectures on overland Silk Road caravanserais, seasonal monsoon shipping calendars, and commercial trust networks from 1000 to 1450 CE.',
        audioDurationSeconds: 230,
        transcript: `[Audio Track 4 - Section 4: Economic History Lecture]
Lecturer: Popular adventure books often portray medieval long-distance commerce as solitary camel drivers wandering blindly across endless dunes—yet surviving customs ledgers prove medieval trade ran on astonishingly disciplined logistics!
Lecturer: [[Q31]] Take the overland Silk Road across Central Asia: neither merchants nor fragile silk bolts crossed whole continents inside single unbroken journeys; instead, goods changed hands through relay stages every few hundred miles!
Lecturer: [[Q32]] Anchoring those arid relay highways stood stone fortified inns called caravanserais, spaced precisely one daytime camel trek—roughly thirty kilometres—apart across Persia and Anatolia!
Lecturer: [[Q33]] Remarkably, rulers waived entry charges inside royal caravanserais for three consecutive days so travelling merchants received safe courtyard wells, horse fodder, and locked vaulted storerooms rent-free!
Lecturer: [[Q34]] Further south across the Indian Ocean, sailing captains avoided rowing blindly against open swells by obeying reversing seasonal monsoon winds cleanly!
Lecturer: [[Q35]] Between November and February, brisk northeastern monsoons pushed lateen-rigged dhows smoothly southwest toward East African ivory ports—before June southwest gales carried spiced cargoes swiftly homeward toward Gujarat!
Lecturer: [[Q36]] Because waiting captains spent months anchored in distant ports awaiting wind reversals, cosmopolitan port enclaves evolved self-governing merchant courts settling contract quarrels fairly across religions and languages!
Lecturer: [[Q37]] Crucially, overland silk tariffs never vanished uniformly across borders—yet predictable flat road tolls funded armed patrol garrisons that lowered robber losses far below solitary desert travel!
Lecturer: [[Q38]] When Mongol unified rule—the Pax Mongolica—linked Black Sea ports straight to Beijing around 1280, silver metal bars replaced bulky textiles as rapid standardized exchange money!
Lecturer: [[Q39]] Meanwhile in Europe, Flemish towns like Bruges and Champagne fairgrounds hosted quarterly cloth-credit fairs where notaries stamped binding payment treaties enforceable miles away!
Lecturer: [[Q40]] Ultimately, medieval trade infrastructure—combining roadside shelters, seasonal sea calendars, and notary courts—laid enduring legal blueprints still recognizable inside global maritime containers today.`,
        questions: [
          {
            id: 'cd_listening_m6_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Logistical system moving Silk Road merchandise via short hand-offs rather than continuous journeys: ______ stages',
            correctAnswer: 'RELAY',
            explanation: 'Goods changed hands through relay stages every few hundred miles.'
          },
          {
            id: 'cd_listening_m6_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Approximate spacing separating fortified Persian caravanserais: ______ kilometres',
            correctAnswer: 'THIRTY',
            explanation: 'Spaced one camel trek—roughly thirty kilometres—apart.'
          },
          {
            id: 'cd_listening_m6_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What free hospitality did royal caravanserais grant merchants for their first three days?',
            options: [
              'A. Stabled fodder, fresh water wells, and locked storage vaults',
              'B. Armed royal guards extending to the next kingdom border',
              'C. Free silk weaving repairs and customs stamp waivers',
              'D. Daily translation scribes for Persian and Arabic contracts'
            ],
            correctAnswer: 'A',
            explanation: 'Merchants received courtyard wells, fodder, and locked storerooms rent-free.'
          },
          {
            id: 'cd_listening_m6_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Predictable reversing sea winds dictating Indian Ocean cargo sailing schedules: ______',
            correctAnswer: 'MONSOON',
            explanation: 'Captains obeyed reversing seasonal monsoon winds.'
          },
          {
            id: 'cd_listening_m6_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Southwest ______ winds starting in June sped spice ships back home toward Gujarat harbors.',
            correctAnswer: 'GALES',
            explanation: 'June southwest gales carried spiced cargoes swiftly homeward.'
          },
          {
            id: 'cd_listening_m6_lq36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why did autonomous merchant courts emerge inside Indian Ocean port cities?',
            options: [
              'A. Local kings refused entry visas to foreign sailing crews',
              'B. Sailors rioted frequently over spoiled rice rations',
              'C. Harbor pilots lacked written tide tables across reefs',
              'D. Captains waiting months for monsoon reversals needed fair cross-cultural dispute rulings'
            ],
            correctAnswer: 'D',
            explanation: 'Captains stranded awaiting wind reversals needed fair dispute courts.'
          },
          {
            id: 'cd_listening_m6_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Security benefit funded directly through predictable caravan road tolls: armed patrol ______',
            correctAnswer: 'GARRISONS',
            explanation: 'Flat road tolls funded armed patrol garrisons.'
          },
          {
            id: 'cd_listening_m6_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Precious metal bars functioning as standardized exchange currency during the Pax Mongolica: ______',
            correctAnswer: 'SILVER',
            explanation: 'Silver metal bars replaced bulky textiles as exchange currency.'
          },
          {
            id: 'cd_listening_m6_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Legal officials stamping enforceable credit agreements at European Champagne fairs: ______',
            correctAnswer: 'NOTARIES',
            explanation: 'Notaries stamped binding payment treaties.'
          },
          {
            id: 'cd_listening_m6_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What is the lecturer’s overarching thesis about medieval commerce?',
            options: [
              'A. Desert bandits prevented reliable trade before steamships',
              'B. Early inns, wind calendars, and notary law built lasting global trade blueprints',
              'C. European guilds copied every contract format from China verbatim',
              'D. Overland routes collapsed permanently immediately after 1100 CE'
            ],
            correctAnswer: 'B',
            explanation: 'Medieval infrastructure laid enduring legal blueprints still recognizable today.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 7: Marine Park Conservation Survey & Cognitive Science Seminar
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m7',
    testNumber: 7,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 7: Marine Park Conservation Survey & Cognitive Science Seminar',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Marine Park Conservation Survey & Cognitive Science Seminar.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Volunteering for the Coastal Marine Park Survey',
        audioScenario:
          'An ecology volunteer telephones the Bayview Marine Reserve Office to register for weekend low-tide shore surveys.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Marine Park Survey Registration]
Officer: Bayview Marine Conservation Office, Liam speaking. Are you calling regarding Saturday’s kelp survey?
Caller: [[Q1]] Yes please! My surname is Callahan, spelled C-A-L-L-A-H-A-N, and I want to volunteer for next Saturday’s early shore count.
Officer: [[Q2]] Great—thank you, Ms. Callahan. Because low tide peaks early Saturday morning, volunteers assemble sharply at 6:45 AM beside the Red Lantern Slipway!
Caller: [[Q3]] 6:45 AM is fine—I live twenty minutes east. Should volunteers bring personal snorkeling masks or rubber chest waders? Bring sturdy grip-soled wellingtons if you own them; we supply insulated neoprene gloves and waterproof clipboards free!
Caller: [[Q4]] Wonderful. Could you record my neoprene glove size as Medium? Noted—Medium insulated pairs packed cleanly. Where will the afternoon kelp specimen sorting happen if coastal wind gusts pick up? Inside the heated Timber Boathouse beside Wharf Pier Two!
Officer: [[Q5]] Remember parking passes too: park strictly behind the Blue Oyster Cafe car-park bays rather than blocking Harbor Coastguard emergency boat lanes!
Caller: [[Q6]] Understood! Does signing up for four survey weekends earn any marine reserve certification? Yes—volunteers completing four logged counts earn an official Coastal Citizen Biologist certificate plus free island ferry vouchers!
Officer: [[Q7]] Quick medical check too: our rocky limestone kelp pools grow slick with green bladderwrack algae—do you carry any severe shellfish allergy or knee mobility issues? None at all, though I wear corrective lenses tied onto a floating glasses cord!
Caller: [[Q8]] Wise precaution! What lunch arrangement exists after morning quadrats finish around eleven thirty? Our field kitchen serves hot vegetable lentil soup and wholemeal rolls free inside the boathouse!
Officer: [[Q9]] Should thick sea fog roll in forcing cancellation on Friday evening, how do rangers notify registered volunteers? We broadcast live status updates before 8:00 PM Friday via our Marine Watch SMS alert group!
Caller: [[Q10]] Add my mobile cleanly—what is my volunteer shift confirmation code? Note down Survey Pass MP-714!`,
        questions: [
          {
            id: 'cd_listening_m7_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Volunteer applicant surname: ______',
            correctAnswer: 'CALLAHAN',
            explanation: 'Spelled C-A-L-L-A-H-A-N.'
          },
          {
            id: 'cd_listening_m7_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Meeting point at 6:45 AM Saturday: Red ______ Slipway',
            correctAnswer: 'LANTERN',
            explanation: 'Assemble beside the Red Lantern Slipway.'
          },
          {
            id: 'cd_listening_m7_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Besides insulated gloves, what weatherproof writing item does the reserve supply free?',
            correctAnswer: 'WATERPROOF CLIPBOARDS',
            explanation: 'Reserve supplies neoprene gloves and waterproof clipboards free.'
          },
          {
            id: 'cd_listening_m7_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Where does afternoon kelp sorting move if coastal winds rise?',
            correctAnswer: 'TIMBER BOATHOUSE',
            explanation: 'Heated Timber Boathouse beside Wharf Pier Two.'
          },
          {
            id: 'cd_listening_m7_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Designated volunteer parking lot behind the ______ Oyster Cafe',
            correctAnswer: 'BLUE',
            explanation: 'Park behind the Blue Oyster Cafe car-park bays.'
          },
          {
            id: 'cd_listening_m7_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What reward do volunteers earn after completing four weekend marine counts?',
            options: [
              'A. Citizen Biologist certificate and free island ferry vouchers',
              'B. Paid seasonal lifeguard summer preference',
              'C. Private kayak locker rental for one year',
              'D. Complimentary waterproof field binoculars'
            ],
            correctAnswer: 'A',
            explanation: 'Earn a Coastal Citizen Biologist certificate plus free ferry vouchers.'
          },
          {
            id: 'cd_listening_m7_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Slippery green coastal seaweed coating intertidal limestone rocks: ______ algae',
            correctAnswer: 'BLADDERWRACK',
            explanation: 'Rocks grow slick with green bladderwrack algae.'
          },
          {
            id: 'cd_listening_m7_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What hot meal is provided free at 11:30 AM after shore counts?',
            options: [
              'A. Grilled mackerel fillets and baked potatoes',
              'B. Spiced chickpea wraps and herbal tea',
              'C. Tomato pasta bowls and cheddar toasties',
              'D. Vegetable lentil soup with wholemeal rolls'
            ],
            correctAnswer: 'D',
            explanation: 'Field kitchen serves vegetable lentil soup and wholemeal rolls.'
          },
          {
            id: 'cd_listening_m7_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Evening notification channel broadcasting fog cancellations before 8:00 PM Friday: ______ alert group',
            correctAnswer: 'SMS',
            explanation: 'Broadcast via Marine Watch SMS alert group.'
          },
          {
            id: 'cd_listening_m7_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Volunteer Saturday shift pass code: ______',
            correctAnswer: 'MP-714',
            explanation: 'Confirmed under Survey Pass MP-714.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Marine Sanctuary Zones & Seabird Cliff Protocols',
        audioScenario:
          'A senior marine park ranger briefs eco-tourists and survey trainees on coastal zoning laws, wildlife distance boundaries, and rockpool conservation.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Bayview Marine Sanctuary Guidelines]
Ranger: Welcome along Granite Headland, everyone! Before climbing down onto low-tide kelp shelves, let us review three essential marine sanctuary boundaries protecting seals, birds, and tiny rockpool crabs.
Ranger: [[Q11]] First, look southwest across Seal Skerry reef: between May and August, harbour seals haul pupping calves onto warm dark basalt ledges—recreational kayaks and drone cameras must keep at least one hundred metres clear!
Ranger: [[Q12]] Why enforce strict drone bans overhead? Sudden buzzing rotor blades spook nursing mother seals into panicking off jagged ledges, often separating frightened newborn pups in rough surf!
Ranger: [[Q13]] Second, check our Shore Explorer Map marking Zone Red as our No-Take Core Reef—removing even empty spiral periwinkle shells hurts tiny hermit crabs hunting protective coastal homes!
Ranger: [[Q14]] Notice one gentle rule whenever lifting cool wet stones inside open rockpools: peek calmly underneath for five seconds, then tilt each heavy stone softly back into its exact original hollow!
Ranger: [[Q15]] Overhead along steep chalk fissures, colourful puffins nest cleanly inside clay burrows—never lean camera tripods past white chain ropes guarding fragile crumbling turf edges!
Ranger: [[Q16]] Our shore tidepool touch-tanks inside the Marine Discovery Lab run naturally chilled at nine degrees Celsius—matching cold North Atlantic winter waters so delicate sea anemones stay comfortable!
Ranger: [[Q17]] Look carefully at brightly painted orange marker buoys bobbing two hundred metres offshore: they define quiet speed lanes limiting pleasure boats strictly under five knots so spinning propellers spare basking sharks!
Ranger: [[Q18]] Anyone spotting washed-up tangled plastic fishing nets should leave heavy ropes untouched and snap quick GPS map pins onto our BeachWatch reporting app instead!
Ranger: [[Q19]] Guided fossil-hunting tide walks leave Lighthouse Steps every Sunday at two thirty sharp—no hammers needed since wind storms expose plenty of natural coiled ammonites freely!
Ranger: [[Q20]] Before stepping down muddy steps, rinse sandy shoe soles inside the copper disinfectant footbath outside Cabin Three to prevent spreading invasive marine pondweeds.`,
        questions: [
          {
            id: 'cd_listening_m7_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Minimum clearance distance boats and kayaks must maintain from pupping Seal Skerry reefs: ______ metres',
            correctAnswer: 'ONE HUNDRED',
            explanation: 'Keep at least one hundred metres clear.'
          },
          {
            id: 'cd_listening_m7_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why are hovering drones strictly prohibited above summer seal ledges?',
            options: [
              'A. Salt spray ruins magnetic compass sensors over ocean reefs',
              'B. Reserve wind turbines risk mid-air collisions',
              'C. Rotor buzz panics mothers into surf, separating newborn pups',
              'D. Harbour patrol radar blocks recreational radio channels'
            ],
            correctAnswer: 'C',
            explanation: 'Buzzing rotors spook mothers off ledges, separating pups.'
          },
          {
            id: 'cd_listening_m7_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Crustaceans harmed when tourists collect empty shells from No-Take Core Reefs: ______ crabs',
            correctAnswer: 'HERMIT',
            explanation: 'Empty shells serve as homes for tiny hermit crabs.'
          },
          {
            id: 'cd_listening_m7_lq14',
            number: 14,
            type: 'short_answer',
            questionText: 'What must visitors do immediately after peeking beneath a lifted rockpool boulder?',
            correctAnswer: 'TILT EACH HEAVY STONE SOFTLY BACK',
            explanation: 'Tilt each heavy stone softly back into its exact original hollow.'
          },
          {
            id: 'cd_listening_m7_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Boundary marker warning photographers away from fragile puffin cliff turf: white ______ ropes',
            correctAnswer: 'CHAIN',
            explanation: 'Never lean tripods past white chain ropes.'
          },
          {
            id: 'cd_listening_m7_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Chilled temperature maintained inside Marine Discovery Lab anemone touch-tanks: ______ degrees Celsius',
            correctAnswer: 'NINE',
            explanation: 'Naturally chilled at nine degrees Celsius.'
          },
          {
            id: 'cd_listening_m7_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'Why do orange offshore buoys cap recreational boats below five knots?',
            options: [
              'A. To reduce diesel fuel leaks over shallow coral beds',
              'B. To prevent high-speed propellers striking slow-moving basking sharks',
              'C. To avoid snapping crab-pot surface lines',
              'D. To minimize noisy wake crashing against sea caves'
            ],
            correctAnswer: 'B',
            explanation: 'Slow speeds spare surface-feeding basking sharks from propellers.'
          },
          {
            id: 'cd_listening_m7_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Mobile application used to log washed-up fishing nets cleanly via GPS: ______',
            correctAnswer: 'BEACHWATCH',
            explanation: 'Snap quick GPS pins onto the BeachWatch reporting app.'
          },
          {
            id: 'cd_listening_m7_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Ancient coiled marine fossils frequently revealed naturally after storms near Lighthouse Steps: ______',
            correctAnswer: 'AMMONITES',
            explanation: 'Storms expose natural coiled ammonites freely.'
          },
          {
            id: 'cd_listening_m7_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Location of copper disinfectant shoe footbath stopping invasive weeds: Cabin ______',
            correctAnswer: 'THREE',
            explanation: 'Footbath sits outside Cabin Three.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Cognitive Science Pilot Study on Divided Attention',
        audioScenario:
          'Cognitive science students Leo and Nadia evaluate eye-tracking data and pilot participant anomalies with Professor Sato.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Cognitive Lab Seminar]
Prof. Sato: Come on in, Leo and Nadia. How did the first thirty pilot runs of your dual-task driving-simulator attention study hold up?
Leo: [[Q21]] Mixed results initially! Measuring visual lane-drift while participants answered rapid mental math questions showed reaction latency jumped nearly 340 milliseconds compared to silent driving!
Nadia: [[Q22]] However, seven early student volunteers learned to game our predictable beep alerts—glancing straight toward dashboard warning corners ahead of actual stimulus onset!
Prof. Sato: [[Q23]] Classic anticipation bias! How did you strip out predictive eye movements without forcing trials to stretch endlessly longer?
Leo: [[Q24]] We shuffled warning intervals using random jitter delays spanning 900 to 2,400 milliseconds—suddenly false early corner glances dropped cleanly down to zero!
Prof. Sato: [[Q25]] Clean technical repair! Did infrared eye-trackers capture crisp pupil dilation readings from every volunteer equally well?
Nadia: [[Q26]] Almost everyone—except four heavy-mascara wearers and two tall participants wearing thick anti-glare blue-filter spectacles whose lenses bounced infrared beams sideways!
Prof. Sato: [[Q27]] Smart screening catch: advise morning participants beforehand to swap anti-glare coatings for simple clear contact lenses where possible, and note exclusion counts transparently inside Methods! What about fatigue across twenty-minute sessions?
Leo: [[Q28]] Interestingly, reaction error clusters didn’t climb steadily line-by-line—mistakes spiked abruptly inside minute fourteen right before recovery dips when participants grabbed water breaks!
Prof. Sato: [[Q29]] Inserting a mandatory two-minute blink break at minute ten will normalize alertness cleanly across Group A and Group B! Have you picked which journal graphs best illustrate pupil strain?
Nadia: [[Q30]] Rather than dense crowded scatter plots, we built smooth colour-shaded error ribbons comparing baseline drives against high cognitive-load curves cleanly!`,
        questions: [
          {
            id: 'cd_listening_m7_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Average jump in reaction latency recorded during dual-task mental math trials: ______ milliseconds',
            correctAnswer: '340',
            explanation: 'Latency jumped nearly 340 milliseconds.'
          },
          {
            id: 'cd_listening_m7_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'How did seven early pilot volunteers unintentionally skew dashboard glance measurements?',
            options: [
              'A. They closed one eye intentionally between audio tones',
              'B. They adjusted simulator steering sensitivity secretly',
              'C. They memorized arithmetic sequence answers beforehand',
              'D. They anticipated regular alert timings and glanced early'
            ],
            correctAnswer: 'D',
            explanation: 'They learned predictable beep alerts and glanced early.'
          },
          {
            id: 'cd_listening_m7_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'What methodological flaw did Professor Sato call early predictive glancing?',
            correctAnswer: 'ANTICIPATION BIAS',
            explanation: 'Prof. Sato calls it classic anticipation bias.'
          },
          {
            id: 'cd_listening_m7_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Randomized timing technique spanning 900–2,400 ms preventing early glances: random ______ delays',
            correctAnswer: 'JITTER',
            explanation: 'Shuffled warning intervals using random jitter delays.'
          },
          {
            id: 'cd_listening_m7_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Physiological eye metric tracked using lab infrared cameras alongside gaze targets: ______ dilation',
            correctAnswer: 'PUPIL',
            explanation: 'Captured crisp pupil dilation readings.'
          },
          {
            id: 'cd_listening_m7_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why did two glasses-wearing volunteers cause missing infrared eye-tracking data?',
            options: [
              'A. Anti-glare blue-filter lens coatings reflected infrared beams sideways',
              'B. Thick horn-rimmed frames blocked camera angles completely',
              'C. Bifocal lenses distorted pupil diameter measurements twofold',
              'D. Condensation misted lenses inside dark simulator booths'
            ],
            correctAnswer: 'A',
            explanation: 'Anti-glare blue-filter lenses bounced infrared beams sideways.'
          },
          {
            id: 'cd_listening_m7_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Report section where lens and makeup exclusions must be recorded transparently: ______',
            correctAnswer: 'METHODS',
            explanation: 'Note exclusion counts transparently inside Methods.'
          },
          {
            id: 'cd_listening_m7_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Session minute where participant mistake clusters unexpectedly peaked before hydration rests: minute ______',
            correctAnswer: 'FOURTEEN',
            explanation: 'Mistakes spiked abruptly inside minute fourteen.'
          },
          {
            id: 'cd_listening_m7_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'What two-minute scheduled pause at minute ten will normalize participant alertness?',
            correctAnswer: 'BLINK BREAK',
            explanation: 'Insert a mandatory two-minute blink break at minute ten.'
          },
          {
            id: 'cd_listening_m7_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Which chart layout did Nadia choose instead of dense scatter plots?',
            options: [
              'A. Stacked horizontal bar charts by age group',
              'B. Colour-shaded error ribbons comparing baseline and cognitive-load curves',
              'C. Three-dimensional dashboard gaze heatmaps',
              'D. Dual-axis pie charts of trial omission rates'
            ],
            correctAnswer: 'B',
            explanation: 'Built smooth colour-shaded error ribbons comparing baseline vs. high load.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Working Memory Architecture & Human Attentional Bottlenecks',
        audioScenario:
          'A cognitive neuroscientist lectures on working memory limits, chunking strategies, Baddeley’s model, and practical software interface design.',
        audioDurationSeconds: 230,
        transcript: `[Audio Track 4 - Section 4: Cognitive Science Lecture]
Lecturer: Walk across any busy airport terminal checking boarding gates while memorizing a six-digit security PIN and juggling gate announcements—you are pushing human working memory right against its tight biological ceiling!
Lecturer: [[Q31]] Unlike vast lifelong autobiographical storage tucked across cortical networks, active working memory acts like a tiny mental scratchpad retaining fragile impressions scarcely twenty seconds unless actively rehearsed!
Lecturer: [[Q32]] Way back in 1956, psychologist George Miller famously summarized capacity around seven plus-or-minus two items—though modern rigorous experiments excluding silent repetition place true raw visual slots closer to four distinct chunks!
Lecturer: [[Q33]] Thankfully, skilled brains bypass strict four-slot ceilings effortlessly through chunking: compressing separate chaotic digits 1-9-4-5 into one single meaningful historical year doubles immediate mental workspace cleanly!
Lecturer: [[Q34]] Alan Baddeley later proved working memory isn’t a single gray box at all, separating silent inner speech inside the phonological loop from rotating mental maps inside a visuospatial sketchpad!
Lecturer: [[Q35]] Notice everyday driving proof: motorists chat seamlessly while spotting red brake lights cleanly—yet reading silent street billboards scrambles driving lane tracking because two competing visual streams collide inside one shared sketchpad!
Lecturer: [[Q36]] Cognitive load researchers distinguish two opposite mental burdens: intrinsic load driven by genuinely difficult chemistry formulas versus extraneous load inflicted purely by cluttered, badly designed textbook layouts!
Lecturer: [[Q37]] Crucially, burying simple diagrams beneath redundant word-for-word slide paragraphs creates split-attention failure—forcing exhausted novices to jump eyes endlessly back and forth instead of grasping core links!
Lecturer: [[Q38]] Even stranger lies the attentional blink effect: when spotting one brief bold target flashed inside rapid streams, brains temporarily go blind for roughly 300 milliseconds while consolidating that first prize!
Lecturer: [[Q39]] Thankfully, disciplined mindfulness training and slow rhythmic breathing reduce impulsive mental wandering—freeing scarce executive control cleanly for tricky deductive reasoning!
Lecturer: [[Q40]] Understanding these fragile cognitive bottlenecks transforms teaching slides and airplane cockpits alike: crisp visual restraint always beats noisy informational abundance.`,
        questions: [
          {
            id: 'cd_listening_m7_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Approximate un-rehearsed lifespan of raw traces held inside active working memory: ______ seconds',
            correctAnswer: 'TWENTY',
            explanation: 'Retains fragile impressions scarcely twenty seconds without rehearsal.'
          },
          {
            id: 'cd_listening_m7_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'More conservative raw slot capacity measured by modern experiments barring silent repetition: ______',
            correctAnswer: 'FOUR',
            explanation: 'True raw visual slots sit closer to four distinct chunks.'
          },
          {
            id: 'cd_listening_m7_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Cognitive strategy compressing standalone numbers into meaningful dates or concepts: ______',
            correctAnswer: 'CHUNKING',
            explanation: 'Brains bypass four-slot limits through chunking.'
          },
          {
            id: 'cd_listening_m7_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'In Baddeley’s model, which subsystem handles silent spoken rehearsal?',
            correctAnswer: 'PHONOLOGICAL LOOP',
            explanation: 'Silent inner speech lives inside the phonological loop.'
          },
          {
            id: 'cd_listening_m7_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'Why does reading roadside signs disrupt steering more severely than casual conversation?',
            options: [
              'A. Spoken words use lower executive energy than silent reading',
              'B. Sign typography triggers involuntary pupil dilation fatigue',
              'C. Competing visual tasks overload the shared visuospatial sketchpad',
              'D. Conversation voices regulate rhythmic eye blink spacing'
            ],
            correctAnswer: 'C',
            explanation: 'Two competing visual streams collide inside one shared sketchpad.'
          },
          {
            id: 'cd_listening_m7_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Cluttered fonts and poor graphic layouts generate unnecessary ______ cognitive load.',
            correctAnswer: 'EXTRANEOUS',
            explanation: 'Extraneous load is inflicted by cluttered, badly designed layouts.'
          },
          {
            id: 'cd_listening_m7_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What error occurs when instructors place long duplicate paragraphs beside simple diagrams?',
            options: [
              'A. Permanent auditory masking of classroom speech',
              'B. Proactive interference wiping out earlier slide concepts',
              'C. Split-attention failure from jumping eyes between disconnected zones',
              'D. Emotional disengagement triggered by dense font sizes'
            ],
            correctAnswer: 'C',
            explanation: 'Redundant paragraphs create split-attention failure.'
          },
          {
            id: 'cd_listening_m7_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Brief window following target detection during which subsequent flashes go unseen: ______ milliseconds',
            correctAnswer: '300',
            explanation: 'Brains go temporarily blind for roughly 300 milliseconds.'
          },
          {
            id: 'cd_listening_m7_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Cognitive mental resource conserved when mindfulness minimizes aimless daydreaming: ______ control',
            correctAnswer: 'EXECUTIVE',
            explanation: 'Frees scarce executive control for deductive reasoning.'
          },
          {
            id: 'cd_listening_m7_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What practical lesson closes the lecturer’s talk for cockpit and classroom designers?',
            options: [
              'A. Crisp visual restraint outperforms noisy informational overload',
              'B. Display full troubleshooting manuals continuously alongside alerts',
              'C. Color-code every secondary menu button in bright shades',
              'D. Replace schematic charts with spoken voice prompts solely'
            ],
            correctAnswer: 'A',
            explanation: 'Crisp visual restraint beats noisy informational abundance.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 8: Local Library Digitization & Microclimate Architecture Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m8',
    testNumber: 8,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 8: Local Library Digitization & Microclimate Architecture Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Local Library Digitization & Microclimate Architecture Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Volunteering for the Local Library Heritage Digitization Desk',
        audioScenario:
          'A retired schoolteacher phones the Westgate Civic Library Archive to sign up as a digitization assistant for historic maps and newspapers.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Library Digitization Volunteers]
Archivist: Good morning, Westgate Civic Library Local Studies Desk, Arthur speaking. How may I assist?
Caller: [[Q1]] Morning Arthur! I saw your flyer seeking weekly volunteers to scan historic parish directories. My surname is Whitaker, spelled W-H-I-T-A-K-E-R.
Archivist: [[Q2]] Pleased to meet you, Mrs. Whitaker! We hold training shifts every Tuesday morning from 9:30 AM until 12:30 PM inside our basement Digitization Studio!
Caller: [[Q3]] Tuesday mornings suit me ideally. Should I buy crisp white cotton inspection gloves before my first training morning? Actually skip soft cotton—modern archivists handle dry paper strictly with bare washed hands or thin nitrile gloves so fibers never snag brittle edges!
Caller: [[Q4]] Good to know—no snagging cotton! What rare collections are currently queued on flatbed overhead scanners? Mostly 1920s street trade directories plus fragile hand-tinted railway construction blueprints!
Archivist: [[Q5]] Because the basement vault stays climate-cooled to protect old vellum bindings at sixteen degrees Celsius, remember to pack a warm cardigan or fleece jumper!
Caller: [[Q6]] Thank you for the tip! Could you check whether parking beneath Market Lane Square validates volunteer tickets cleanly? Simply scan your Volunteer Security Badge at Exit Kiosk B to enjoy four hours free daily!
Archivist: [[Q7]] Note one snack rule down in Basement Vault One: leave coffee flasks upstairs inside Staff Locker Nine—not a drop of liquid sits near hundred-year-old maps!
Caller: [[Q8]] Naturally! Will volunteers type full optical transcriptions by hand, or mainly verify automated character scans? Mainly correct funny OCR spelling mistakes—like old printer letter S looking like F!
Archivist: [[Q9]] Exactly! Whenever you need help decoding faded Victorian handwriting, tap Senior Cataloguer Evelyn on Desk Three!
Caller: [[Q10]] I cannot wait to begin Tuesday—could I have my induction confirmation number? Write down Archive Volunteer Code LD-829!`,
        questions: [
          {
            id: 'cd_listening_m8_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Volunteer applicant surname: ______',
            correctAnswer: 'WHITAKER',
            explanation: 'Spelled W-H-I-T-A-K-E-R.'
          },
          {
            id: 'cd_listening_m8_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Weekly volunteer shift day: ______ mornings (9:30 AM – 12:30 PM)',
            correctAnswer: 'TUESDAY',
            explanation: 'Training shifts run every Tuesday morning.'
          },
          {
            id: 'cd_listening_m8_lq3',
            number: 3,
            type: 'multiple_choice',
            questionText: 'Why do library archivists reject traditional white cotton gloves on brittle paper?',
            options: [
              'A. Cotton dye stains glossy Victorian ink',
              'B. Sweat builds up underneath thick woven cloth',
              'C. Gloves wear out scanner glass calibration sensors',
              'D. Loose cotton fibers risk catching and tearing fragile page edges'
            ],
            correctAnswer: 'D',
            explanation: 'Cotton fibers snag brittle edges; use clean bare hands or nitrile.'
          },
          {
            id: 'cd_listening_m8_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Besides 1920s trade directories, which hand-tinted documents await overhead scanning?',
            correctAnswer: 'RAILWAY CONSTRUCTION BLUEPRINTS',
            explanation: 'Hand-tinted railway construction blueprints await scanning.'
          },
          {
            id: 'cd_listening_m8_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Climate-controlled vault temperature requiring warm cardigan layers: ______ degrees Celsius',
            correctAnswer: 'SIXTEEN',
            explanation: 'Vault stays climate-cooled at sixteen degrees Celsius.'
          },
          {
            id: 'cd_listening_m8_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Kiosk validating four hours free volunteer parking at Market Lane Square: Exit Kiosk ______',
            correctAnswer: 'B',
            explanation: 'Scan badge at Exit Kiosk B.'
          },
          {
            id: 'cd_listening_m8_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Number of upstairs locker assigned for storing volunteer coffee flasks: Staff Locker ______',
            correctAnswer: 'NINE',
            explanation: 'Leave coffee flasks upstairs inside Staff Locker Nine.'
          },
          {
            id: 'cd_listening_m8_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What primary computer task occupies digitization volunteers after scanning pages?',
            options: [
              'A. Retyping whole multi-page parish columns from scratch',
              'B. Fixing automated OCR letter-recognition misreads',
              'C. Color-balancing yellowed newsprint digitally',
              'D. Cropping handwritten margin doodles out cleanly'
            ],
            correctAnswer: 'B',
            explanation: 'Volunteers mainly correct OCR spelling mistakes.'
          },
          {
            id: 'cd_listening_m8_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Senior Cataloguer assisting with faded Victorian script at Desk Three: ______',
            correctAnswer: 'EVELYN',
            explanation: 'Tap Senior Cataloguer Evelyn on Desk Three.'
          },
          {
            id: 'cd_listening_m8_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed archive induction reference code: ______',
            correctAnswer: 'LD-829',
            explanation: 'Archive Volunteer Code LD-829.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Inside the Civic Heritage Digitization Lab',
        audioScenario:
          'A library project manager gives trainees an introductory walk-through of non-contact book cradles, metadata workflows, and public gallery launches.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Digitization Lab Workflow Tour]
Manager: Welcome downstairs into Westgate Digitization Studio! Look along these three camera rigs—notice none use heavy squashing glass lid scanners!
Manager: [[Q11]] Instead, leather-bound parish registers rest delicately atop foam-padded V-shaped wooden cradles opening merely 110 degrees so fragile stitched spines never snap backward!
Manager: [[Q12]] Overhead dual-lens DSLR cameras illuminate pages using ultra-cool flicker-free LED lamps producing zero ultraviolet rays that otherwise fade handwritten iron-gall inks!
Manager: [[Q13]] Notice every digital master frame saves first as an uncompressed archival TIFF file before smaller lightweight JPEG thumbnails generate automatically for web searches!
Manager: [[Q14]] Never invent clever filename shortcuts on drives—each scan obeys strict standardized naming linking year, box code, and page sequence cleanly without spaces!
Manager: [[Q15]] Behind that red partition sit two vintage microfilm reader-scanners converting dusty 1950s shipping reels onto searchable cloud databases!
Manager: [[Q16]] Our tiniest local mystery remains the 1894 Mayor’s Guestbook—half its faded pencil signatures stayed unreadable until soft angled raking lights cast sharp tiny surface shadows!
Manager: [[Q17]] On Fridays between three and five, local school teenagers join our Crowdsourced Tagging Club clicking street occupations and bicycle shop adverts directly onto digital maps!
Manager: [[Q18]] Anyone wishing to borrow scanned family photo prints for genealogy exhibits pays solely minimal ink fees if printing larger than A3 size—ordinary USB transfers cost zero!
Manager: [[Q19]] Mark your diaries for November 14th too: our interactive digital street map table opens publicly inside the sunlit Reading Rotunda upstairs!
Manager: [[Q20]] Before logging off shifts, verify green checksum circles beside every uploaded batch folder—confirming zero corrupted pixels drifted during transfers.`,
        questions: [
          {
            id: 'cd_listening_m8_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Maximum opening angle allowed by V-shaped cradles protecting stitched leather spines: ______ degrees',
            correctAnswer: '110',
            explanation: 'Cradles open merely 110 degrees so spines never snap.'
          },
          {
            id: 'cd_listening_m8_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Harmful light spectrum eliminated by cool LED lamps to stop iron-gall ink fading: ______ rays',
            correctAnswer: 'ULTRAVIOLET',
            explanation: 'LED lamps produce zero ultraviolet rays.'
          },
          {
            id: 'cd_listening_m8_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Uncompressed master archival image file format stored prior to web thumbnails: ______',
            correctAnswer: 'TIFF',
            explanation: 'Master frames save first as uncompressed TIFF files.'
          },
          {
            id: 'cd_listening_m8_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What file-naming error must digitization assistants strictly avoid?',
            options: [
              'A. Inventing informal personal labels containing blank spaces',
              'B. Using four-digit publication years ahead of box numbers',
              'C. Adding leading zeros onto sequential page numbers',
              'D. Linking parent box codes to microfilm reel dates'
            ],
            correctAnswer: 'A',
            explanation: 'Never invent shortcuts; obey strict naming without spaces.'
          },
          {
            id: 'cd_listening_m8_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Decade of historic shipping reels undergoing conversion behind the red partition: ______',
            correctAnswer: '1950S',
            explanation: 'Converting dusty 1950s shipping reels.'
          },
          {
            id: 'cd_listening_m8_lq16',
            number: 16,
            type: 'short_answer',
            questionText: 'Which low-angle illumination technique exposed faint pencil names in the 1894 Guestbook?',
            correctAnswer: 'RAKING LIGHTS',
            explanation: 'Soft angled raking lights cast sharp tiny surface shadows.'
          },
          {
            id: 'cd_listening_m8_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'How do local teenagers contribute during Friday afternoon Crowdsourced Tagging Club?',
            options: [
              'A. Painting damaged wooden book cradles cleanly',
              'B. Interviewing retired city bakers outside Reading Rotunda',
              'C. Polishing microfilm reader glass lenses monthly',
              'D. Pinning historical trades and shop adverts onto digital street maps'
            ],
            correctAnswer: 'D',
            explanation: 'Teens pin street occupations and shop adverts onto digital maps.'
          },
          {
            id: 'cd_listening_m8_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Paper size threshold above which visiting genealogists pay modest ink fees: ______',
            correctAnswer: 'A3',
            explanation: 'Pay ink fees solely if printing larger than A3 size.'
          },
          {
            id: 'cd_listening_m8_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Upstairs hall hosting the public November 14th interactive street map exhibit: Reading ______',
            correctAnswer: 'ROTUNDA',
            explanation: 'Opens upstairs inside the sunlit Reading Rotunda.'
          },
          {
            id: 'cd_listening_m8_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Verification icon trainees must confirm green before logging off to catch corrupted pixels: ______ circles',
            correctAnswer: 'CHECKSUM',
            explanation: 'Verify green checksum circles beside every uploaded batch folder.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Architectural Wind-Tunnel & Courtyard Thermal Modeling',
        audioScenario:
          'Architecture students Farah and Ben consult Professor Keller about scale-model errors and thermal logger anomalies in their courtyard cooling thesis.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Architecture Studio Critique]
Prof. Keller: Take a seat, Farah and Ben. Your scale models comparing narrow shaded apartment alleys against open sunlit plazas look sharp—let us inspect thermal discrepancies carefully.
Farah: [[Q21]] Thanks! Testing balsa-wood 1:50 courtyard blocks inside our lab wind tunnel showed shaded alleys lowered peak afternoon air temperatures nearly 4.5 degrees Celsius cleanly!
Ben: [[Q22]] Yet during real downtown street monitoring last July, tiny white thermometer loggers bolted onto south brick walls read six degrees hotter than official airport weather vanes!
Prof. Keller: [[Q23]] Classic urban radiation trap! Did you shield miniature field loggers inside ventilated louvred radiation boxes, or bolt bare plastic cylinders straight against dark sunbaked brick?
Farah: [[Q24]] Caught red-handed—our cheap sensors lacked white louvred shields, so direct afternoon sunlight baked the sensor casings artificially higher!
Prof. Keller: [[Q25]] Good lesson—re-run August comparative logger checks inside reflective double-cup ventilated shields! What about wind speed across rooftop parapet heights?
Ben: [[Q26]] Surprisingly, adding small stepped cedar pergolas across fourth-floor roof terraces cut gusty winter corner downdrafts by thirty-eight percent without starving downstairs plants of morning sky light!
Prof. Keller: [[Q27]] Smart finding—check whether municipal wind planners already mandate porous timber canopies around new high-rise plinths! How did thermal infrared drones handle shiny stainless courtyard railings?
Farah: [[Q28]] Nightmarishly—polished metal acted like cold thermal mirrors reflecting blue chilly empty sky instead of true warm sidewalk surface heat!
Prof. Keller: [[Q29]] Mention emissivity glare directly inside your drone limitations paragraph—matting tape strips solve calibration checks cleanly! Who reviews structural wind loads on canvas sails?
Ben: [[Q30]] Structural lecturer Dr. Novak booked us Tuesday at three to audit steel tension cable anchors before Friday’s jury review!`,
        questions: [
          {
            id: 'cd_listening_m8_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Laboratory wind-tunnel scale used for testing balsa courtyard models: 1:______',
            correctAnswer: '50',
            explanation: 'Tested balsa-wood 1:50 courtyard blocks.'
          },
          {
            id: 'cd_listening_m8_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Temperature excess recorded by south-wall loggers compared to airport station sensors: ______ degrees',
            correctAnswer: 'SIX',
            explanation: 'Loggers read six degrees hotter than official airport vanes.'
          },
          {
            id: 'cd_listening_m8_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'What protective housing did Professor Keller ask about for outdoor wall loggers?',
            correctAnswer: 'VENTILATED LOUVRED RADIATION BOXES',
            explanation: 'Asked if loggers sat inside ventilated louvred radiation boxes.'
          },
          {
            id: 'cd_listening_m8_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'What mistake skewed Farah and Ben’s July downtown street thermometer readings?',
            options: [
              'A. Rainwater shorted out brick-mounted battery packs',
              'B. Brick exhaust vents blew hot kitchen air past sensors',
              'C. Direct sun heated unshielded plastic casings against dark walls',
              'D. Airport stations used Fahrenheit calibration software'
            ],
            correctAnswer: 'C',
            explanation: 'Sensors lacked shields so afternoon sunlight baked casings artificially higher.'
          },
          {
            id: 'cd_listening_m8_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Material prescribed for shielding August validation thermometers cleanly: double-cup ventilated ______',
            correctAnswer: 'SHIELDS',
            explanation: 'Re-run checks inside reflective double-cup ventilated shields.'
          },
          {
            id: 'cd_listening_m8_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Percentage reduction in rooftop corner downdrafts achieved via cedar pergolas: ______ percent',
            correctAnswer: 'THIRTY-EIGHT',
            explanation: 'Cut gusty winter downdrafts by thirty-eight percent.'
          },
          {
            id: 'cd_listening_m8_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Key structural adjective describing timber canopies preserving daylight below: ______',
            correctAnswer: 'POROUS',
            explanation: 'Check whether planners mandate porous timber canopies.'
          },
          {
            id: 'cd_listening_m8_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'Why did infrared drone cameras misread stainless courtyard steel railings?',
            options: [
              'A. Metal thickness absorbed battery signals mid-flight',
              'B. Shiny metal surfaces reflected cold open sky rather than true railing temperature',
              'C. Gusting rooftop breezes cooled steel tubing too fast',
              'D. Green ivy vines obscured railing junctions from cameras'
            ],
            correctAnswer: 'B',
            explanation: 'Polished metal acted like thermal mirrors reflecting cold empty sky.'
          },
          {
            id: 'cd_listening_m8_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which simple physical adhesive material calibrates shiny surfaces accurately for thermal cameras?',
            correctAnswer: 'MATTING TAPE STRIPS',
            explanation: 'Matting tape strips solve emissivity calibration cleanly.'
          },
          {
            id: 'cd_listening_m8_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Structural specialist auditing cable anchor loads Tuesday at three: Dr. ______',
            correctAnswer: 'NOVAK',
            explanation: 'Dr. Novak booked Tuesday at three.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Passive Cooling & Microclimate Urban Architecture',
        audioScenario:
          'An architectural physics professor explores traditional desert windcatchers, high-albedo surface finishes, thermal mass, and breathable street canyons.',
        audioDurationSeconds: 230,
        transcript: `[Audio Track 4 - Section 4: Microclimate Architecture Lecture]
Lecturer: Before noisy electrical air-conditioning compressors reshaped concrete skylines during the 1950s, master builders across arid civilizations cooled dense towns cleanly using nothing beyond local earth, shadow, and gentle air physics!
Lecturer: [[Q31]] Consider downtown asphalt hubs today: dark heat-trapping pavements soak intense solar noon rays all day, creating sprawling urban heat islands hovering up to five degrees warmer overnight than nearby meadows!
Lecturer: [[Q32]] Centuries earlier across Iranian desert cities like Yazd, brick towers called badgirs—or windcatchers—rose proudly above flat clay rooftops to scoop clean high-altitude breezes downward into shaded living quarters!
Lecturer: [[Q33]] Cleverly, hot dry gusts plunging inside vertical windcatcher shafts swept across porous clay water jugs or sunken courtyard pools, dropping room air temperatures effortlessly via rapid evaporative cooling!
Lecturer: [[Q34]] Equally vital lies surface reflectivity—known technically as albedo: simply brushing bright white chalk limewash onto dark stone terraces bounces eighty percent of blistering noon sunshine instantly skyward!
Lecturer: [[Q35]] Notice Mediterranean village alleys too: tightly packed narrow whitewashed canyons block harsh direct midday sunlight cleanly, casting crisp overlapping roof shadows across stone cobbles while preserving cool stagnant morning air pockets!
Lecturer: [[Q36]] Meanwhile, thick adobe mudbrick walls deploy high thermal mass—absorbing scorching daytime exterior heat so slowly that warmth peaks indoors around midnight when cool starry desert night air flushes rooms clean!
Lecturer: [[Q37]] Sadly, blind glass curtain skyscrapers built inside humid tropical capitals act oppositely like parked greenhouses—trapping shortwave glare indoors while dumping roaring exhaust heat back onto sweating sidewalk pedestrians!
Lecturer: [[Q38]] Modern pioneering cities like Medellin have reversed downtown warmth systematically by weaving shaded green corridors of native rainforest canopies along concrete avenue medians—cooling street corridors over two degrees cleanly!
Lecturer: [[Q39]] Rooftop structural engineers increasingly champion blue-green sponge roofs storing sudden storm cloudbursts inside lightweight porous mineral blankets that cool top apartments passively all week!
Lecturer: [[Q40]] Ultimately, climate-resilient urban architecture requires discarding universal glass blueprints in favor of bespoke local geometry tuned respectfully to sun angles, humidity, and neighborhood winds.`,
        questions: [
          {
            id: 'cd_listening_m8_lq31',
            number: 31,
            type: 'short_answer',
            questionText: 'What thermal phenomenon keeps dark-paved city cores markedly warmer at night than rural fields?',
            correctAnswer: 'URBAN HEAT ISLANDS',
            explanation: 'Dark pavements create sprawling urban heat islands.'
          },
          {
            id: 'cd_listening_m8_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Traditional Iranian rooftop breeze-catching towers observed across historic Yazd: ______',
            correctAnswer: 'BADGIRS',
            explanation: 'Brick towers called badgirs—or windcatchers—scooped clean breezes.'
          },
          {
            id: 'cd_listening_m8_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Physical cooling process activated when hot shaft winds sweep across damp clay jugs: ______ cooling',
            correctAnswer: 'EVAPORATIVE',
            explanation: 'Rapid evaporative cooling drops air temperatures cleanly.'
          },
          {
            id: 'cd_listening_m8_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Scientific measure of surface brightness indicating how much sunlight white limewash reflects: ______',
            correctAnswer: 'ALBEDO',
            explanation: 'Surface reflectivity is known technically as albedo.'
          },
          {
            id: 'cd_listening_m8_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'How do traditional narrow Mediterranean lanes maintain cool midday pavements?',
            options: [
              'A. Subterranean canal locks pump cold mountain spring water beneath flags',
              'B. Rooftop metal vanes force continuous downward draft streams',
              'C. Limestone cobbles release stored winter frost steadily until dusk',
              'D. Closely built tall walls cast mutually overlapping shadows across lanes'
            ],
            correctAnswer: 'D',
            explanation: 'Tightly packed alleys cast crisp overlapping roof shadows across cobbles.'
          },
          {
            id: 'cd_listening_m8_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Dense mudbrick adobe walls delay indoor heat arrival until cool night hours via strong ______ mass.',
            correctAnswer: 'THERMAL',
            explanation: 'Thick adobe walls deploy high thermal mass.'
          },
          {
            id: 'cd_listening_m8_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do full-glass skyscrapers worsen tropical sidewalk heat waves?',
            options: [
              'A. Glass traps solar glare indoors while chiller exhaust heats outdoor alleys',
              'B. Polished glass mirrors bounce sunlight downward onto bus shelters',
              'C. Tall facades block rainy monsoon sea breezes from reaching streets',
              'D. Structural steel columns conduct upper cloud warmth downward'
            ],
            correctAnswer: 'A',
            explanation: 'Glass acts like greenhouses and dumps roaring exhaust heat onto pedestrians.'
          },
          {
            id: 'cd_listening_m8_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'South American city lowering avenue warmth over 2°C via vegetated street canopy networks: ______',
            correctAnswer: 'MEDELLIN',
            explanation: 'Medellin wove shaded green corridors along avenue medians.'
          },
          {
            id: 'cd_listening_m8_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Architectural roof design soaking sudden storm rainwater into mineral blankets for slow cooling: ______ roofs',
            correctAnswer: 'SPONGE',
            explanation: 'Blue-green sponge roofs store storm cloudbursts passively.'
          },
          {
            id: 'cd_listening_m8_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What core architectural philosophy concludes the lecture?',
            options: [
              'A. Standardize air-conditioned glass cubes regardless of rainfall zones',
              'B. Tailor building geometry locally to sun arcs, wind streams, and climate',
              'C. Replace historic stone masonry globally with high-density polymers',
              'D. Mandate mechanical rooftop wind turbines on every public block'
            ],
            correctAnswer: 'B',
            explanation: 'Discard universal glass blueprints in favor of local climate-tuned geometry.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 9: Organic Community Farm Volunteer & Nanotech Materials Talk
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m9',
    testNumber: 9,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 9: Organic Community Farm Volunteer & Nanotech Materials Talk',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Organic Community Farm Volunteer & Nanotech Materials Talk.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Joining Greenvale Organic Community Farm Crew',
        audioScenario:
          'A university student calls Greenvale Organic Community Farm to register for Sunday morning weeding and greenhouse harvesting shifts.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Community Farm Volunteer Sign-up]
Coordinator: Good afternoon, Greenvale Community Farm Office, Grace speaking. Looking to join our Sunday volunteer crew?
Caller: [[Q1]] Hi Grace, yes! My surname is Sanderson, spelled S-A-N-D-E-R-S-O-N, and I would love to help harvest heritage tomatoes this weekend.
Coordinator: [[Q2]] Welcome aboard, Mr. Sanderson! Sunday crews gather at 8:45 AM sharp outside our timber Packing Barn at the north orchard lane!
Caller: [[Q3]] Great! Since muddy irrigation lines cross lower clay fields, should volunteers bring gardening gloves and rubber wellingtons? Yes please—wear sturdy waterproof boots and tough gloves; we provide sharp secateurs, kneeling mats, and sun hats!
Coordinator: [[Q4]] Also check tetanus health cover briefly: working closely with rich organic manure compost makes an up-to-date tetanus shot strongly advised before digging soil beds!
Caller: [[Q5]] Mine was updated last spring at campus health! How do cyclists or non-drivers reach the north orchard gate safely from town? Catch our yellow Minibus Shuttle departing Oak Market Bus Stop Two every Sunday at 8:20 AM sharp!
Coordinator: [[Q6]] Thank you—8:20 AM at Stop Two! Does our volunteer lunch break mean packing cold sandwiches, or is hot food available on-site? Stay after noon for complimentary wood-fired vegetable soup plus crusty farm sourdough!
Caller: [[Q7]] Sounds amazing! Can student helpers pack home surplus crooked carrots or bruised apples after shifting crates? Every helper takes home one complimentary 3-kilogram seasonal Harvest Tote Box!
Coordinator: [[Q8]] Before lifting heavy wooden kale crates, remember our rule near Polytunnel Six: keep glass water bottles outside polytunnels—pack stainless metal flasks solely!
Caller: [[Q9]] Understood cleanly. Should soaking heavy downpours flood clay beds Sunday morning, who messages us before leaving home? Field supervisor Marcus texts cancel alerts directly at 7:30 AM!
Coordinator: [[Q10]] Let me file your Sunday seat cleanly under Harvest Crew Code GF-905.`,
        questions: [
          {
            id: 'cd_listening_m9_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Volunteer caller surname: ______',
            correctAnswer: 'SANDERSON',
            explanation: 'Spelled S-A-N-D-E-R-S-O-N.'
          },
          {
            id: 'cd_listening_m9_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Sunday 8:45 AM assembly point: timber ______ Barn',
            correctAnswer: 'PACKING',
            explanation: 'Gather outside the timber Packing Barn.'
          },
          {
            id: 'cd_listening_m9_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Besides kneeling mats and sun hats, what cutting hand tools does the farm lend volunteers?',
            correctAnswer: 'SHARP SECATEURS',
            explanation: 'Farm supplies sharp secateurs, kneeling mats, and sun hats.'
          },
          {
            id: 'cd_listening_m9_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Recommended medical vaccination prior to handling organic manure beds: ______',
            correctAnswer: 'TETANUS',
            explanation: 'Up-to-date tetanus shot strongly advised.'
          },
          {
            id: 'cd_listening_m9_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Morning departure time of Oak Market volunteer shuttle minibus: ______ AM',
            correctAnswer: '8:20',
            explanation: 'Departs Stop Two every Sunday at 8:20 AM.'
          },
          {
            id: 'cd_listening_m9_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What complimentary lunch reward awaits volunteer crews after midday?',
            options: [
              'A. Herb roast potatoes and sweetcorn salad',
              'B. Fresh strawberry jam scones and orchard cider',
              'C. Wood-fired vegetable soup and farm sourdough',
              'D. Cold cheddar cheese rolls packed in kraft bags'
            ],
            correctAnswer: 'C',
            explanation: 'Complimentary wood-fired vegetable soup plus crusty farm sourdough.'
          },
          {
            id: 'cd_listening_m9_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Weight limit on free seasonal produce inside each volunteer Harvest Tote Box: ______-kilogram',
            correctAnswer: '3',
            explanation: 'Complimentary 3-kilogram seasonal Harvest Tote Box.'
          },
          {
            id: 'cd_listening_m9_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Permitted drink container material allowed inside crop polytunnels: ______ metal',
            correctAnswer: 'STAINLESS',
            explanation: 'Leave glass outside; pack stainless metal flasks.'
          },
          {
            id: 'cd_listening_m9_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Supervisor texting early wet-weather cancellations by 7:30 AM: ______',
            correctAnswer: 'MARCUS',
            explanation: 'Field supervisor Marcus texts cancel alerts at 7:30 AM.'
          },
          {
            id: 'cd_listening_m9_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Assigned Sunday shift confirmation code: ______',
            correctAnswer: 'GF-905',
            explanation: 'Filed under Harvest Crew Code GF-905.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Tour of Greenvale Organic Soil & Crop Plots',
        audioScenario:
          'A head grower leads new weekend volunteers along terraced vegetable beds, explaining biological pest barriers, drip-pipe watering, and tool hygiene.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Organic Farm Field Walk]
Grower: Morning, everyone! Let us walk past the wooden cold-frames so you see exactly how Greenvale farms six acres cleanly without synthetic chemical sprays.
Grower: [[Q11]] Glance down Row One: instead of drenching crisp cabbages in pesticides, we interplant bright orange marigold flowers whose spicy scent confuses cabbage moths while drawing helpful ladybirds!
Grower: [[Q12]] Behind our apple trees stand three steaming oak-plank compost bays—once internal centers hit sixty degrees Celsius, natural microbial heat kills stubborn dandelion weeds cleanly!
Grower: [[Q13]] Notice black punctured irrigation hoses lying right underneath straw mulch: low-pressure drip lines feed cool well-water directly onto roots, slashing evaporation waste forty-five percent!
Grower: [[Q14]] Never walk boots straight across raised purple onion beds—always keep weight cleanly along sunken woodchip paths so delicate soil pores stay fluffy and aerated!
Grower: [[Q15]] Inside Glasshouse Two, avoid touching fuzzy stinging nettles left deliberately in far clay pots—caterpillars feeding there mature into essential orchard peacock butterflies!
Grower: [[Q16]] Look over at our solar-powered egg-laying chicken tractor sliding weekly over harvested kale stubble: busy hens scratch out wireworm grubs while dropping rich natural fertilizer!
Grower: [[Q17]] When trimming tomato vines, dip pruning blades inside pine-oil trays between rows so fungal leaf blight never jumps quietly from infected stalks onto healthy neighbors!
Grower: [[Q18]] Check our chalkboard outside the Packing Shed every morning: red circles beside crates mean pick exclusively plump ripe fruit for Tuesday’s city hospital boxes!
Grower: [[Q19]] Local school families love our self-serve Roadside Honesty Stall beside Gate Four—simply drop coins into the padlocked green milk churn or tap contactless QR plaques!
Grower: [[Q20]] Finally, please scrape thick mud off spades with wire brushes before hanging handles inside Tool Rack C so clean dry steel survives winter rust-free.`,
        questions: [
          {
            id: 'cd_listening_m9_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Bright companion flowers planted beside cabbages to confuse moths and lure ladybirds: ______',
            correctAnswer: 'MARIGOLD',
            explanation: 'Interplant bright orange marigold flowers.'
          },
          {
            id: 'cd_listening_m9_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Core compost bay temperature required to neutralize stubborn weed seeds naturally: ______ degrees Celsius',
            correctAnswer: 'SIXTY',
            explanation: 'Internal centers hit sixty degrees Celsius.'
          },
          {
            id: 'cd_listening_m9_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Percentage reduction in water evaporation saved by buried mulched drip hoses: ______ percent',
            correctAnswer: 'FORTY-FIVE',
            explanation: 'Slashing evaporation waste forty-five percent.'
          },
          {
            id: 'cd_listening_m9_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why must farm volunteers stay strictly on woodchip alleys instead of stepping onto vegetable beds?',
            options: [
              'A. Buried plastic heating cables sit directly beneath seedlings',
              'B. Night frost makes raised edges dangerously slippery',
              'C. Heavy boots crush fluffy aerated pore spaces in soft soil',
              'D. Onion roots release irritating juices when bruised'
            ],
            correctAnswer: 'C',
            explanation: 'Keep soil pores fluffy and aerated by walking along woodchip paths.'
          },
          {
            id: 'cd_listening_m9_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'Which pollinators develop on potted stinging nettles inside Glasshouse Two?',
            correctAnswer: 'PEACOCK BUTTERFLIES',
            explanation: 'Nettles nourish caterpillars of essential peacock butterflies.'
          },
          {
            id: 'cd_listening_m9_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'How does the mobile chicken coop benefit recently harvested kale strips?',
            options: [
              'A. Hens devour buried wireworm grubs while dropping rich natural manure',
              'B. Hens trample coarse dry stalks down smoothly as green mulch',
              'C. Chickens chase away migrating wood pigeons from apple buds',
              'D. Coop wheels flatten irrigation trenches automatically'
            ],
            correctAnswer: 'A',
            explanation: 'Hens scratch out wireworm grubs while dropping fertilizer.'
          },
          {
            id: 'cd_listening_m9_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Disinfectant liquid used for cleaning pruning shears between tomato rows: ______ trays',
            correctAnswer: 'PINE-OIL',
            explanation: 'Dip pruning blades inside pine-oil trays.'
          },
          {
            id: 'cd_listening_m9_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Urban buyer destination marked by red circles on Packing Shed crate chalkboards: city ______',
            correctAnswer: 'HOSPITAL',
            explanation: 'Destined for Tuesday city hospital boxes.'
          },
          {
            id: 'cd_listening_m9_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Cash container inside the self-serve Roadside Honesty Stall beside Gate Four: green ______ churn',
            correctAnswer: 'MILK',
            explanation: 'Drop coins into the padlocked green milk churn.'
          },
          {
            id: 'cd_listening_m9_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Designated storage lettered rack for dry brushed garden spades: Tool Rack ______',
            correctAnswer: 'C',
            explanation: 'Hang handles inside Tool Rack C.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Testing Hydrophobic Nanocoating Coatings in Lab',
        audioScenario:
          'Materials engineering students Devon and Mei meet with Dr. Kapoor to troubleshoot erratic water-droplet angle checks and salt-spray corrosion results.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Materials Science Lab Consultation]
Dr. Kapoor: Morning, Devon and Mei. Let us look closely at your titanium-dioxide silica nanocoating tests meant to keep outdoor solar glass dust-free.
Devon: [[Q21]] Our first dip-coated glass slides looked amazing visually—water droplets balled right up at crisp 158-degree contact angles, rolling off specks effortlessly!
Mei: [[Q22]] Yet inside Tuesday’s humid accelerated salt-fog chamber, two test batches peeled loose within thirty-six hours, leaving dull chalky streaks across corners!
Dr. Kapoor: [[Q23]] Ouch—adhesion delamination! Did you scrub raw glass substrates solely with warm soap water before dipping, or run chemical plasma etching first?
Devon: [[Q24]] Soap plus simple acetone rinse—we skipped high-energy oxygen plasma cleaning thinking lab oven baking afterward would bond nanoparticles permanently!
Dr. Kapoor: [[Q25]] There lies your missing anchor—oxygen plasma stripping carves microscopic hydroxyl hooks onto silica glass so nano-layers grip permanently through harsh sea mist! How did UV aging lamps treat polymer binders?
Mei: [[Q26]] Silicone-modified binders stayed transparent cleanly after 400 lamp hours, whereas cheap acrylic resin binders yellowed badly, slashing solar light transmission nine percent!
Dr. Kapoor: [[Q27]] Drop acrylic controls completely from Prototype Two, benchmark silicone-silica coats cleanly, and use a motorized vertical lift set to two millimetres per second!
Devon: [[Q28]] Smart mechanical call—our early electron microscope images revealed slow manual hand-withdrawal left heavy wavy ripples along bottom rims!
Dr. Kapoor: [[Q29]] Textbook coating discipline! Remember when presenting next Thursday at the Industry Showcase, bring clear tilted video clips of muddy sand washing right off dipped glass rather than solely tiny SEM grayscale snaps!
Mei: [[Q30]] Smart idea—I also baked two tiny scratch-resistant titanium alloy coupons with our coating ready for cautious guest tactile checks beside Poster Four!`,
        questions: [
          {
            id: 'cd_listening_m9_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Peak water-repellent droplet contact angle measured on initial dipped glass slides: ______ degrees',
            correctAnswer: '158',
            explanation: 'Droplets balled up at 158-degree contact angles.'
          },
          {
            id: 'cd_listening_m9_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Hours elapsed inside salt-fog chambers before early poorly bonded batches peeled loose: ______ hours',
            correctAnswer: 'THIRTY-SIX',
            explanation: 'Batches peeled loose within thirty-six hours.'
          },
          {
            id: 'cd_listening_m9_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'What technical failure term did Dr. Kapoor apply to peeling coating corners?',
            correctAnswer: 'ADHESION DELAMINATION',
            explanation: 'Dr. Kapoor immediately identified adhesion delamination.'
          },
          {
            id: 'cd_listening_m9_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why did the students’ first batch detach inside humid salt mist?',
            options: [
              'A. Oven drying temperatures melted nanoparticle silica beads',
              'B. Laboratory humidity tripped dipping chamber timers early',
              'C. Excessive titanium content darkened water drop shapes',
              'D. Cleaning with acetone alone skipped crucial oxygen plasma glass prep'
            ],
            correctAnswer: 'D',
            explanation: 'Skipped oxygen plasma cleaning assuming oven baking alone sufficed.'
          },
          {
            id: 'cd_listening_m9_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Microscopic chemical glass hooks created via oxygen plasma stripping: ______ hooks',
            correctAnswer: 'HYDROXYL',
            explanation: 'Carves microscopic hydroxyl hooks onto silica glass.'
          },
          {
            id: 'cd_listening_m9_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Percentage loss in solar light clarity suffered by cheap acrylic resin binders after UV aging: ______ percent',
            correctAnswer: 'NINE',
            explanation: 'Yellowed acrylic binders slashed transmission nine percent.'
          },
          {
            id: 'cd_listening_m9_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What engineering change fixed wavy thick coatings along bottom glass rims?',
            options: [
              'A. Doubling nanoparticle solvent dilution viscosity',
              'B. Using a motorized vertical lift set to 2 mm per second',
              'C. Wiping lower wet edges manually with microfiber lint cloths',
              'D. Spray-coating glass horizontally under nitrogen vents'
            ],
            correctAnswer: 'B',
            explanation: 'Motorized vertical puller set at two millimetres per second smoothed films.'
          },
          {
            id: 'cd_listening_m9_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Microscopy tool mentioned that detected edge coating ripples: ______ microscope',
            correctAnswer: 'ELECTRON',
            explanation: 'Electron microscope images spotted uneven edge beading.'
          },
          {
            id: 'cd_listening_m9_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which live demonstration video should accompany dry grayscale scans at Thursday’s Industry Showcase?',
            correctAnswer: 'MUDDY SAND WASHING RIGHT OFF',
            explanation: 'Bring tilted clips of muddy sand washing right off dipped glass.'
          },
          {
            id: 'cd_listening_m9_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Exhibition display board displaying dipped titanium alloy tactile samples: Poster ______',
            correctAnswer: 'FOUR',
            explanation: 'Placed beside Poster Four.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Biomimetic Nanotechnology & Self-Cleaning Engineering',
        audioScenario:
          'A materials engineer lectures on lotus-leaf superhydrophobicity, carbon nanotube armor, gecko dry adhesives, and self-healing industrial polymers.',
        audioDurationSeconds: 230,
        transcript: `[Audio Track 4 - Section 4: Nanotech Materials Lecture]
Lecturer: Nature spent nearly four billion years perfecting microscopic material engineering at nanometer scales—a single billionth of a meter—inspiring scientists today to replicate biological brilliance inside factories!
Lecturer: [[Q31]] Take the humble sacred lotus leaf thriving spotless inside muddy Asian swamps: scanning microscopes in the 1970s revealed tiny waxy bumps topped by microscopic hairs trapping air cushions beneath droplets!
Lecturer: [[Q32]] Because spherical water pearls perch purely atop microscopic air peaks rather than wetting smooth flat skin, rolling raindrops sweep sticky mud grains cleanly off—known as the Lotus Effect!
Lecturer: [[Q33]] Elsewhere across coastal sea cliffs, shimmering blue shark skin exhibits ribbed diamond scales—called dermal denticles—disrupting turbulent water drag so swiftly that microscopic barnacles fail to grip hull paint!
Lecturer: [[Q34]] Inspired directly by shark denticles, marine cargo lines sticking grooved silicone riblet films across container hulls cut diesel ocean fuel consumption by roughly five percent!
Lecturer: [[Q35]] Equally astonishing are gecko toes clinging effortlessly upside-down across spotless laboratory glass—relying purely on billions of microscopic spatula tips exploiting weak electrical van der Waals forces without glue!
Lecturer: [[Q36]] Aerospace engineers are translating synthetic carbon-nanotube gecko pads onto orbital inspection robots gripping smooth satellite hulls where sticky chemical glues freeze stiff in vacuum cold!
Lecturer: [[Q37]] Beyond surface grips, polymer chemists embed microscopic brittle capsules loaded with liquid resin inside wind-turbine blades; whenever tiny fatigue cracks snap capsules open, healing glue hardens inside gaps automatically!
Lecturer: [[Q38]] Yet industrial nanoscience faces stern toxicity hurdles: microscopic airborne carbon nanotubes shaped like stiff needle fibers pose deep lung inflammation risks closely mimicking vintage asbestos dust!
Lecturer: [[Q39]] Furthermore, consumers distrust fragile nanocoatings scratched away easily by brisk car brushes—pushing labs toward durable ceramic-matrix composites embedding wear-resistant silica spheres deeply throughout coatings!
Lecturer: [[Q40]] Ultimately, successful nanotech manufacturing balances dazzling nanoscale magic carefully against rugged manufacturing cost, environmental recycling, and strict factory worker breathing safeguards.`,
        questions: [
          {
            id: 'cd_listening_m9_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Invisible supporting cushion trapped beneath water droplets by microscopic lotus-leaf bumps: ______',
            correctAnswer: 'AIR',
            explanation: 'Microscopic waxy hairs trap tiny air cushions beneath water.'
          },
          {
            id: 'cd_listening_m9_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Name the biological self-cleaning mechanism whereby rolling raindrops carry mud away from leaves:',
            correctAnswer: 'LOTUS EFFECT',
            explanation: 'Known technically as the Lotus Effect.'
          },
          {
            id: 'cd_listening_m9_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'What are microscopic ribbed diamond shark scales that deter ocean barnacles called?',
            correctAnswer: 'DERMAL DENTICLES',
            explanation: 'Ribbed diamond scales called dermal denticles disrupt drag and barnacles.'
          },
          {
            id: 'cd_listening_m9_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Approximate fuel reduction measured on cargo ships wrapped with grooved shark-inspired hull films: ______ percent',
            correctAnswer: 'FIVE',
            explanation: 'Cut diesel fuel consumption roughly five percent.'
          },
          {
            id: 'cd_listening_m9_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'What physical mechanism enables gecko feet to stick cleanly onto smooth vertical glass?',
            options: [
              'A. Billions of fine spatula hairs harnessing weak electrical van der Waals attraction',
              'B. Microscopic vacuum suction pores sealed by toe moisture',
              'C. Reversible microscopic keratin hooks biting invisible glass scratches',
              'D. Static charges accumulated while scurrying across dry rocks'
            ],
            correctAnswer: 'A',
            explanation: 'Billions of spatula tips exploit weak electrical van der Waals forces.'
          },
          {
            id: 'cd_listening_m9_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Space environment obstacle ruining ordinary wet chemical adhesives on orbital satellite repair robots: vacuum ______',
            correctAnswer: 'COLD',
            explanation: 'Chemical glues freeze stiff in vacuum cold.'
          },
          {
            id: 'cd_listening_m9_lq37',
            number: 37,
            type: 'summary_completion',
            questionText: 'When structural wind-turbine stress fractures embedded microcapsules, escaping liquid ______ seals cracks cleanly.',
            correctAnswer: 'RESIN',
            explanation: 'Microscopic capsules filled with liquid resin seal cracks.'
          },
          {
            id: 'cd_listening_m9_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Hazardous legacy mineral fiber whose inhalation lung risks mirror rigid raw airborne nanotubes: ______',
            correctAnswer: 'ASBESTOS',
            explanation: 'Pose deep lung risks closely mimicking vintage asbestos dust.'
          },
          {
            id: 'cd_listening_m9_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'How are materials engineers solving premature abrasion of fragile self-cleaning car coatings?',
            options: [
              'A. Applying thick removable waxed film layers annually',
              'B. Replacing silica droplets with flexible liquid fluorine seals',
              'C. Banning rotating bristle cleaners on nanocoated windscreens',
              'D. Embedding silica nanoparticles deep throughout tough ceramic composites'
            ],
            correctAnswer: 'D',
            explanation: 'Ceramic-matrix composites embed silica spheres throughout coatings.'
          },
          {
            id: 'cd_listening_m9_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which closing balance does the lecturer say dictates commercial success in nanotechnology?',
            options: [
              'A. Novel scientific patents paired with automated robot factories',
              'B. Military aerospace funding offsetting household consumer pricing',
              'C. Microscale performance weighed alongside cost, recycling, and worker safety',
              'D. Exclusively bio-degradable seaweed polymers replacing synthetics'
            ],
            correctAnswer: 'C',
            explanation: 'Balance nanoscale magic against cost, recycling, and breathing safeguards.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 10: University Fitness Center & Evolutionary Biology Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m10',
    testNumber: 10,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 10: University Fitness Center & Evolutionary Biology Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on University Fitness Center & Evolutionary Biology Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Registering at the University Sports & Fitness Center',
        audioScenario:
          'A postgraduate student phones the University Sports Pavilion Reception to choose a term swim-and-gym plan and schedule an induction check.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Sports Center Membership Desk]
Clerk: Good morning, Varsity Sports Pavilion, Connor speaking. How may I assist you?
Student: [[Q1]] Hi Connor! I am a newly arrived MSc student wanting an off-peak gym and pool pass. Could I give you my surname? Yes—it is Lindqvist, spelled L-I-N-D-Q-V-I-S-T.
Clerk: [[Q2]] Thank you, Ms. Lindqvist! Our Off-Peak Postgraduate Term Membership costs ninety-four pounds total, unlocking gyms weekdays from opening until 3:30 PM plus weekends anytime!
Student: [[Q3]] Ninety-four pounds fits my stipend well! What extra deposit unlocks waterproof digital locker wristbands? Simply leave a refundable fifteen-pound key deposit at Desk One—wristbands open turnstiles and changing lockers smoothly!
Clerk: [[Q4]] Before lifting free weights inside Strength Suite Two, every newcomer completes one quick twenty-minute safety induction—morning inductions start Tuesday at eight thirty or Thursday noon!
Student: [[Q5]] Thursday noon works brilliantly! Do I need a signed doctor’s note before joining gentle lap swimming? Only if checking “Yes” on chest pain or fainting boxes inside our digital health form—otherwise just bring indoor trainers and a cotton sweat towel!
Clerk: [[Q6]] Good reminder—outdoor muddy trail shoes stay strictly inside cubbies off blue rubber weights floors! Wait—does the ninety-four-pound tier include Saturday afternoon badminton courts? Court hire adds four pounds per hour shared between four friends!
Student: [[Q7]] Very reasonable! Is there any quiet lane specifically reserved for slower breaststroke swimmers avoiding racing butterfly athletes? Look for Slow Lane One right beside window curtains—marked clearly with green wall placards!
Clerk: [[Q8]] Notice our changing hall coin policy too: bring zero coins because wristbands latch lockers digitally—though forget wristbands overnight and security charges five pounds for spare lock overrides!
Student: [[Q9]] Should I fancy booking early-morning rowing machine clinics later, which staff member coordinates beginner sculling workshops? Ask Coach Miriam upstairs at Boathouse Reception!
Clerk: [[Q10]] Let me lock Thursday noon cleanly under Membership Reference SP-102.`,
        questions: [
          {
            id: 'cd_listening_m10_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Postgraduate applicant surname: ______',
            correctAnswer: 'LINDQVIST',
            explanation: 'Spelled L-I-N-D-Q-V-I-S-T.'
          },
          {
            id: 'cd_listening_m10_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Term fee for the Off-Peak Postgraduate Membership: £ ______',
            correctAnswer: 'NINETY-FOUR',
            explanation: 'Term membership costs ninety-four pounds total.'
          },
          {
            id: 'cd_listening_m10_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Refundable key deposit required for waterproof digital locker wristbands: £ ______',
            correctAnswer: 'FIFTEEN',
            explanation: 'Refundable fifteen-pound key deposit at Desk One.'
          },
          {
            id: 'cd_listening_m10_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Length of mandatory strength safety induction inside Strength Suite Two: ______ minutes',
            correctAnswer: 'TWENTY',
            explanation: 'Completes one twenty-minute safety induction.'
          },
          {
            id: 'cd_listening_m10_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'Besides clean indoor trainers, what cotton personal item must gym users carry onto equipment benches?',
            correctAnswer: 'COTTON SWEAT TOWEL',
            explanation: 'Bring indoor trainers and a cotton sweat towel.'
          },
          {
            id: 'cd_listening_m10_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What is the hourly charge for reserving Saturday badminton courts on an off-peak pass?',
            options: [
              'A. Included free during weekend afternoons',
              'B. Four pounds per hour split among players',
              'C. Eight pounds per half hour with rackets included',
              'D. Restricted solely to Full Peak Platinum holders'
            ],
            correctAnswer: 'B',
            explanation: 'Court hire adds four pounds per hour shared between friends.'
          },
          {
            id: 'cd_listening_m10_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Color of wall signs designating gentle breaststroke Slow Lane One: ______',
            correctAnswer: 'GREEN',
            explanation: 'Marked clearly with green wall placards.'
          },
          {
            id: 'cd_listening_m10_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Replacement security override charge if a locker wristband goes missing: £ ______',
            correctAnswer: 'FIVE',
            explanation: 'Security charges five pounds for spare lock overrides.'
          },
          {
            id: 'cd_listening_m10_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Coach overseeing beginner sculling and rowing clinics at Boathouse Reception: Coach ______',
            correctAnswer: 'MIRIAM',
            explanation: 'Ask Coach Miriam upstairs at Boathouse Reception.'
          },
          {
            id: 'cd_listening_m10_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Thursday gym induction code: ______',
            correctAnswer: 'SP-102',
            explanation: 'Confirmed under Membership Reference SP-102.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Orientation Walk Across the Varsity Athletic Pavilion',
        audioScenario:
          'A sports center supervisor guides new university members past indoor climbing walls, injury physio pods, squash galleries, and cycle lockers.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Sports Pavilion Facilities Guide]
Supervisor: Welcome through our glass atrium! Over the next eight minutes, let us walk quickly past five upgraded athletic wings so you feel right at home day one.
Supervisor: [[Q11]] Look straight ahead into our Olympic pool gallery: twenty-five-metre water stays heated to precisely twenty-eight degrees Celsius while rooftop heat-recovery pumps recycle shower warmth back underground!
Supervisor: [[Q12]] To your left climbs our fourteen-metre indoor bouldering wall—notice thick blue foam crash mats lining floors cleanly, meaning beginners climb freely without rope harnesses or heavy metal karabiners!
Supervisor: [[Q13]] Remember one footwear hygiene rule inside the bouldering pit: barefoot climbing stays strictly banned for skin safety—rent sanitized rubber climbing shoes at Desk Two for three pounds!
Supervisor: [[Q14]] Upstairs past Spin Studio Five stands our popular Ergometer Rowing Balcony hosting synchronized team screen races synced directly onto live lake-course avatars!
Supervisor: [[Q15]] Watch hallway etiquette around glass-backed Squash Courts One through Four: players wearing non-marking white rubber soles enter softly only when red court lights switch green between rallies!
Supervisor: [[Q16]] Need ankle strapping after muddy intramural rugby? Registered members get free fifteen-minute Tuesday injury triage assessments inside Physiotherapy Clinic Room 14!
Supervisor: [[Q17]] Outside near our sunlit courtyard, ninety sheltered vertical bicycle hooks lock inside fenced keycard cages monitored continuously by infrared CCTV security cameras!
Supervisor: [[Q18]] Check stainless steel refill fountains positioned beside every studio door—no disposable single-use water bottles sell anywhere inside pavilion vending corners!
Supervisor: [[Q19]] If late essay deadlines force overnight study crunches, note that Wednesday evening maintenance closes swimming pools cleanly early at eight thirty sharp for weekly chlorine balance checks!
Supervisor: [[Q20]] Grab printed seasonal timetable booklets from bright orange podium stands near Exit Gate B before joining afternoon stretching classes!`,
        questions: [
          {
            id: 'cd_listening_m10_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Steady water temperature kept inside the 25-metre Olympic pool: ______ degrees Celsius',
            correctAnswer: 'TWENTY-EIGHT',
            explanation: 'Heated precisely to twenty-eight degrees Celsius.'
          },
          {
            id: 'cd_listening_m10_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why do climbers omit ropes on the fourteen-metre indoor bouldering wall?',
            options: [
              'A. Overhead ceiling trusses hold exclusively vertical ropes',
              'B. Auto-belay magnetic tracks sit embedded inside resin holds',
              'C. Only certified club mountaineers gain keycard wall access',
              'D. Low traverse routes above deep foam mats make harnesses unnecessary'
            ],
            correctAnswer: 'D',
            explanation: 'Thick blue foam crash mats allow climbing freely without harnesses.'
          },
          {
            id: 'cd_listening_m10_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Hygiene rule prohibiting bare skin inside climbing pits: ______ climbing is banned',
            correctAnswer: 'BAREFOOT',
            explanation: 'Barefoot climbing stays strictly banned.'
          },
          {
            id: 'cd_listening_m10_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Exercise equipment filling the upstairs synchronized screen balcony: ______ machines',
            correctAnswer: 'ERGOMETER',
            explanation: 'Ergometer Rowing Balcony hosts synchronized races.'
          },
          {
            id: 'cd_listening_m10_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'Which shoe sole feature is mandatory for squash court players?',
            correctAnswer: 'NON-MARKING WHITE RUBBER',
            explanation: 'Players wear non-marking white rubber soles.'
          },
          {
            id: 'cd_listening_m10_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Weekday offering free 15-minute student sports injury checks in Room 14: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Free fifteen-minute Tuesday injury triage assessments.'
          },
          {
            id: 'cd_listening_m10_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Number of vertical bicycle storage hooks secured inside keycard courtyard cages: ______',
            correctAnswer: 'NINETY',
            explanation: 'Ninety sheltered vertical bicycle hooks.'
          },
          {
            id: 'cd_listening_m10_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why do pavilion vending machines sell no bottled drinking water?',
            options: [
              'A. Stainless refill fountains replace single-use disposable bottles across halls',
              'B. Plastic wrappers jammed athletic locker drainage pipes',
              'C. Sports nutritionists banned sugary drinks alongside bottled water',
              'D. Local tap pressure stays restricted to changing room showers'
            ],
            correctAnswer: 'A',
            explanation: 'Refill fountains replace disposable single-use water bottles.'
          },
          {
            id: 'cd_listening_m10_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Evening time swimming pools shut early on Wednesdays for chemical balancing: ______',
            correctAnswer: 'EIGHT THIRTY',
            explanation: 'Closes early at eight thirty sharp on Wednesdays.'
          },
          {
            id: 'cd_listening_m10_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Color of timetable brochure stands near Exit Gate B: bright ______',
            correctAnswer: 'ORANGE',
            explanation: 'Bright orange podium stands near Exit Gate B.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Island Finch Beak Evolution Field Datasets',
        audioScenario:
          'Biology undergraduates Chloe and Tariq review measurement discrepancies and museum voucher specimens with Professor Aldridge.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Evolutionary Biology Data Critique]
Prof. Aldridge: Welcome back, Chloe and Tariq. Comparing 1977 drought finch beak shifts against wet 1983 recovery cohorts looks deeply promising—let us catch measurement errors early.
Chloe: [[Q21]] Thanks! Auditing sixty dusty museum drawer specimens first revealed mean beak depth jumped nearly 0.5 millimetres immediately after soft small grass seeds vanished!
Tariq: [[Q22]] However, when pairing our fresh measurements with archived 1978 student field sheets, five bird IDs varied wildly—by nearly two full millimetres across exact identical rings!
Prof. Aldridge: [[Q23]] Suspicious leap! Check first whether two recorders pinched soft fleshy nostril corners instead of crisp rigid keratin bases when locking vernier calipers!
Chloe: [[Q24]] Bingo—1978 notebook margins specifically warned rookie summer interns slipped brass caliper jaws past keratin bases onto soft feathers!
Prof. Aldridge: [[Q25]] Flag those five fuzzy intern rows inside an outlier table rather than deleting original museum records silently! How did cactus spine wear affect winter seed cracking?
Tariq: [[Q26]] Surprisingly, probing sweet cactus pulp chipped narrow pointed beak tips slightly shorter during dry months—making birds appear micro-evolved unless checked under twenty-power hand lenses!
Prof. Aldridge: [[Q27]] Brilliant morphological nuance! Include one close-up macro photo comparing blunt worn tips against natural juvenile shapes! What statistical model checks rainfall lag cleanly?
Chloe: [[Q28]] Rather than grouping whole calendar years clumsily together, sliding three-month lagged rainfall predictors explained sixty-four percent of offspring survival cleanly!
Prof. Aldridge: [[Q29]] Impressive fit! Remember our Department Poster Symposium falls next Thursday afternoon—print crisp high-contrast black-and-yellow finch silhouettes above your regression graph so busy judges spot island lineages fast!
Tariq: [[Q30]] Already drafted—and I uploaded cleaned CSV data scripts onto our department GitHub folder for peer code review tonight!`,
        questions: [
          {
            id: 'cd_listening_m10_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Average beak depth increase measured immediately after soft grass seeds vanished: ______ millimetres',
            correctAnswer: '0.5',
            explanation: 'Mean beak depth jumped nearly 0.5 millimetres.'
          },
          {
            id: 'cd_listening_m10_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Number of archived 1978 ringed finch IDs showing suspicious two-millimetre disparities: ______',
            correctAnswer: 'FIVE',
            explanation: 'Five bird IDs varied wildly by two millimetres.'
          },
          {
            id: 'cd_listening_m10_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Hand measurement instrument prone to misplacement against soft bird feathers: vernier ______',
            correctAnswer: 'CALIPERS',
            explanation: 'Recorders pinched corners when locking vernier calipers.'
          },
          {
            id: 'cd_listening_m10_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'What error did 1978 summer interns make while measuring archived finches?',
            options: [
              'A. Confused juvenile females with mature dark males',
              'B. Slipped brass caliper jaws too far onto soft facial feathers',
              'C. Recorded metric measurements mistakenly in imperial inches',
              'D. Damaged dried beak specimens during drawer transport'
            ],
            correctAnswer: 'B',
            explanation: 'Interns slipped caliper jaws past keratin bases onto soft feathers.'
          },
          {
            id: 'cd_listening_m10_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Recommended statistical table handling suspect 1978 measurements transparently: ______ table',
            correctAnswer: 'OUTLIER',
            explanation: 'Flag five rows inside an outlier table.'
          },
          {
            id: 'cd_listening_m10_lq26',
            number: 26,
            type: 'short_answer',
            questionText: 'Which optical field tool distinguished mechanical tip chipping from genetic beak evolution?',
            correctAnswer: 'TWENTY-POWER HAND LENSES',
            explanation: 'Checked under twenty-power hand lenses.'
          },
          {
            id: 'cd_listening_m10_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Recommended photographic visual contrasting chipped tips with un-chipped juvenile beaks: ______ photo',
            correctAnswer: 'MACRO',
            explanation: 'Include one close-up macro photo.'
          },
          {
            id: 'cd_listening_m10_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Percentage of fledgling survival variance explained by 3-month lagged rainfall figures: ______ percent',
            correctAnswer: 'SIXTY-FOUR',
            explanation: 'Explained sixty-four percent of offspring survival.'
          },
          {
            id: 'cd_listening_m10_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'What graphic detail should crown the students’ symposium poster regression chart?',
            options: [
              'A. Color-coded drought wind maps across three islands',
              'B. Annotated brass caliper measurement diagrams',
              'C. High-contrast black-and-yellow finch silhouettes',
              'D. QR video links showing live seed cracking'
            ],
            correctAnswer: 'C',
            explanation: 'Print crisp high-contrast black-and-yellow finch silhouettes above the graph.'
          },
          {
            id: 'cd_listening_m10_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Shared online code repository holding Tariq’s cleaned CSV analysis scripts: ______',
            correctAnswer: 'GITHUB',
            explanation: 'Uploaded scripts onto department GitHub folder.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Adaptive Radiation, Convergent Evolution & Island Ecology',
        audioScenario:
          'An evolutionary biologist lectures on rapid island diversification, unrelated continental look-alikes, insular dwarfism, and modern conservation pressures.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Evolutionary Biology Lecture]
Lecturer: Stepping ashore on volcanic oceanic islands separated by hundreds of miles of empty blue sea, nineteenth-century naturalists stumbled upon nature’s most vivid evolutionary laboratories!
Lecturer: [[Q31]] When a handful of stray ancestral mainland finches or honeycreepers blown off course by tropical cyclones settle empty volcanic valleys, descendants diversify explosively into distinct feeding specialists—a process termed adaptive radiation!
Lecturer: [[Q32]] Freed from tough mainland woodpeckers and hawks, isolated colonists evolve radical tools cleanly—witness Hawaii’s akiapolaau honeycreeper wielding one stubby lower chisel to pound bark while probing grubs with its curved upper needle!
Lecturer: [[Q33]] Yet equally startling lies the opposite mirror image—convergent evolution: unrelated marsupial gliders across Australian gum forests evolved silky gliding skin membranes virtually identical to placental flying squirrels across Canadian pines!
Lecturer: [[Q34]] Why paint unrelated mammals into nearly identical bodies? Unforgiving physical laws of aerodynamics reward precisely matching wing shapes whenever climbing tree canopy dwellers leap between scattered branches!
Lecturer: [[Q35]] Stranger still is the weird Island Rule shaping animal size extremes: hungry stranded elephants shrink down toward pony stature—known as insular dwarfism—because barren island pastures cannot sustain giant herds!
Lecturer: [[Q36]] Conversely, timid tiny island rodents freed from hunting mainland foxes swell surprisingly toward rabbit proportions—termed insular gigantism—allowing safe plump bodies to hoard winter fat comfortably!
Lecturer: [[Q37]] Crucially, modern genomic sequencing confirms rapid evolution isn’t confined strictly to million-year fossils: heavy ivory poaching pressure drove African elephant populations toward high tuskless birth percentages inside barely forty years!
Lecturer: [[Q38]] Similarly, polluted urban harbour killifish evolved genetic tolerance surviving toxic chemical concentrations eight thousand times deadlier than rural river cousins could endure!
Lecturer: [[Q39]] Sadly, ultra-specialized island birds pay fatal vulnerability bills whenever humans drop climbing ship rats ashore—having lost fearful escape instincts over calm predator-free millennia!
Lecturer: [[Q40]] Protecting genetic variation across wild corridors thus safeguards raw evolutionary toolkits letting living creatures continuously rewrite survival blueprints on a warming planet.`,
        questions: [
          {
            id: 'cd_listening_m10_lq31',
            number: 31,
            type: 'short_answer',
            questionText: 'What evolutionary process describes isolated colonists branching rapidly into diverse specialist forms?',
            correctAnswer: 'ADAPTIVE RADIATION',
            explanation: 'Diversify explosively into specialists—termed adaptive radiation.'
          },
          {
            id: 'cd_listening_m10_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Mainland bird family missing from Hawaii whose empty tree-drilling niche a honeycreeper claimed: ______',
            correctAnswer: 'WOODPECKERS',
            explanation: 'Freed from tough mainland woodpeckers and hawks.'
          },
          {
            id: 'cd_listening_m10_lq33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Australian marsupials and North American squirrels independently developed gliding membranes via ______ evolution.',
            correctAnswer: 'CONVERGENT',
            explanation: 'Mirror image known as convergent evolution.'
          },
          {
            id: 'cd_listening_m10_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Unchanging scientific constraints shaping identical glider skin folds across separated continents: ______',
            correctAnswer: 'AERODYNAMICS',
            explanation: 'Physical laws of aerodynamics reward matching wing shapes.'
          },
          {
            id: 'cd_listening_m10_lq35',
            number: 35,
            type: 'short_answer',
            questionText: 'What term describes stranded large mammals shrinking over generations due to scarce island forage?',
            correctAnswer: 'INSULAR DWARFISM',
            explanation: 'Shrinking toward pony stature is called insular dwarfism.'
          },
          {
            id: 'cd_listening_m10_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Resource reserve advantage encouraging predator-free island mice to grow unusually plump: winter ______',
            correctAnswer: 'FAT',
            explanation: 'Allows safe plump bodies to hoard winter fat comfortably.'
          },
          {
            id: 'cd_listening_m10_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What contemporary example proves large mammals can shift anatomically within human lifetimes?',
            options: [
              'A. Polar bears shifting paw webbing width across melting pack ice',
              'B. Urban red foxes shrinking snout proportions around concrete alleys',
              'C. Heavy poaching increasing tuskless births in African elephants within forty years',
              'D. Arctic caribou speeding antler shedding schedules forward two weeks'
            ],
            correctAnswer: 'C',
            explanation: 'Poaching drove high tuskless elephant births inside forty years.'
          },
          {
            id: 'cd_listening_m10_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Fish species in polluted industrial harbours evolving massive toxin resistance: ______',
            correctAnswer: 'KILLIFISH',
            explanation: 'Polluted urban harbour killifish evolved extreme toxin tolerance.'
          },
          {
            id: 'cd_listening_m10_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Why do unique flightless or specialist island birds perish so swiftly when ship rats invade?',
            options: [
              'A. Calm predator-free centuries erased natural fearful escape instincts',
              'B. Ship rats spread viral avian parasites resistant to saltwater air',
              'C. Rats outcompete island nectar birds directly for tree blossoms',
              'D. Introduced rodents alter cliff soil pH beneath ground burrows'
            ],
            correctAnswer: 'A',
            explanation: 'Lost fearful escape instincts over calm predator-free millennia.'
          },
          {
            id: 'cd_listening_m10_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What final conservation argument summarizes the lecturer’s closing remarks?',
            options: [
              'A. Prioritize reintroducing ancestral foxes onto isolated volcanic atolls',
              'B. Focus island conservation strictly on relocating reptiles onto mainland zoos',
              'C. Engineer artificial predator drones guarding coastal bird cliffs',
              'D. Preserve genetic diversity so species retain adaptive potential during rapid global change'
            ],
            correctAnswer: 'D',
            explanation: 'Safeguards raw evolutionary toolkits for rewriting survival blueprints on a warming planet.'
          }
        ]
      }
    ]
  })
];
