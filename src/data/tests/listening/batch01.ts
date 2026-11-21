/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_01: TestItem[] = [
  // =========================================================================
  // PRACTICE 1: Campus Facilities & Library Membership Registration
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p1',
    testNumber: 1,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 1: Campus Facilities & Library Membership Registration',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Campus Facilities & Library Membership Registration.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Main Library Membership Registration',
        audioScenario:
          'A postgraduate student speaks with a senior library assistant to activate a borrowing pass, archive permit, and evening study locker.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Library Membership Desk]
Librarian: Good morning, Radcliffe Library Member Services. How can I help you today?
Student: Hello, I started my postgraduate course this week and need to set up full borrowing access and a study locker.
Librarian: [[Q1]] Happy to help. Let me pull up your student record first—could you spell your surname for me? It is Aldridge, spelled A-L-D-R-I-D-G-E.
Librarian: [[Q2]] Got it, thank you. And which street address should we link for postal recall notices? Currently it lists 19 Willowbank Crescent, postcode Oxford.
Librarian: [[Q3]] Noted. Now, your standard library membership is covered by tuition, though the optional rare-manuscript reading room pass carries an annual deposit of 28 pounds.
Student: That sounds reasonable. Can I also book one of the overnight laptop lockers on the ground floor?
Librarian: [[Q4]] Yes, locker renewals run every semester, and your assigned cabinet number for the autumn term is K-17 near the north staircase.
Student: Thank you. Do I need an academic supervisor signature to borrow audiovisual microphones from the media desk?
Librarian: [[Q5]] No signature is required for standard kits, but you must attend a mandatory ten-minute equipment induction every Tuesday afternoon.
Student: [[Q6]] Understood. When is the latest hour I can return short-loan textbooks without paying a fine? Any item returned before 09:45 the following morning avoids overdue charges.
Student: And how many standard monographs can postgraduate readers keep checked out simultaneously?
Librarian: [[Q7]] Undergraduates are capped at twelve, whereas postgraduate cardholders may hold up to twenty-four volumes at any one time.
Student: [[Q8]] Brilliant. What if a chapter I need is held at a partner college? Our inter-library scanning team delivers digital chapters directly by email within forty-eight hours.
Librarian: [[Q9]] Also remember the main reading hall goes completely quiet after six o'clock, though group collaboration booths on level three stay bookable until midnight.
Student: [[Q10]] One last check: how should I activate my physical smartcard once the desk prints it? Just tap it once against the silver self-check kiosk beside the exit turnstile.`,
        questions: [
          {
            id: 'cd_listening_p1_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'ALDRIDGE',
            explanation: 'The surname is spelled A-L-D-R-I-D-G-E.'
          },
          {
            id: 'cd_listening_p1_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Street name for postal notices: 19 ______ Crescent',
            correctAnswer: 'WILLOWBANK',
            explanation: 'The address given is 19 Willowbank Crescent.'
          },
          {
            id: 'cd_listening_p1_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Annual deposit for rare-manuscript pass: £ ______',
            correctAnswer: '28',
            explanation: 'The rare-manuscript reading room deposit is 28 pounds.'
          },
          {
            id: 'cd_listening_p1_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Assigned autumn study locker code: ______',
            correctAnswer: 'K-17',
            explanation: 'The assigned locker cabinet number is K-17.'
          },
          {
            id: 'cd_listening_p1_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Day of weekly media equipment induction: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'The equipment induction runs every Tuesday afternoon.'
          },
          {
            id: 'cd_listening_p1_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Latest morning return time for short-loan books without fines:',
            correctAnswer: '09:45',
            explanation: 'Returning before 09:45 avoids overdue fees.'
          },
          {
            id: 'cd_listening_p1_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Maximum simultaneous books for postgraduates: ______',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Postgraduates may keep twenty-four volumes at one time.'
          },
          {
            id: 'cd_listening_p1_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How does the library deliver scanned partner-college chapters?',
            options: [
              'A. Digital email delivery within forty-eight hours',
              'B. Printed collection at the rare-books desk',
              'C. Weekly campus courier to department offices',
              'D. USB drive rental from the media desk'
            ],
            correctAnswer: 'A',
            explanation: 'Digital chapters arrive by email within forty-eight hours.'
          },
          {
            id: 'cd_listening_p1_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Where can students book group discussion rooms in the evening?',
            options: [
              'A. Basement archive wing',
              'B. Ground-floor turnstile zone',
              'C. Main quiet reading hall',
              'D. Group collaboration booths on level three'
            ],
            correctAnswer: 'D',
            explanation: 'Group booths on level three remain bookable until midnight.'
          },
          {
            id: 'cd_listening_p1_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'How is a newly printed smartcard activated?',
            options: [
              'A. Wait twenty-four hours for automatic activation',
              'B. Register the barcode at the IT helpdesk',
              'C. Tap it at the silver kiosk by the exit turnstile',
              'D. Sign the ledger at the rare-manuscript desk'
            ],
            correctAnswer: 'C',
            explanation: 'Readers tap the card against the silver kiosk beside the exit turnstile.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Orientation Tour of the Renovated North Library Wing',
        audioScenario:
          'A head facilities officer briefs new students during a guided walk through the recently refurbished campus study complex.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: North Wing Orientation]
Officer: Welcome everyone to the reopened North Study Wing, which completed its eighteen-month seismic and acoustic overhaul last month.
Officer: [[Q11]] As you enter the atrium, notice the timber baffles along the ceiling designed specifically to absorb footstep echoes from the upper walkways.
Officer: [[Q12]] To your immediate left sits our high-speed print hub, where double-sided colour jobs require a preloaded balance of at least three pounds.
Officer: [[Q13]] Walking down the central corridor brings you to the assistive technology suite, fitted with height-adjustable desks and braille tactile displays for registered users.
Officer: [[Q14]] On the mezzanine floor above us, food and uncovered coffee cups remain prohibited, though sealed stainless flasks containing plain water are permitted.
Officer: [[Q15]] Readers working with historical Ordnance Survey plates should head into the glass-walled map annex, where cotton gloves are provided free at the counter.
Officer: [[Q16]] For data science students, the visualisation lab hosts dual-monitor workstations preinstalled with ArcGIS and RStudio software packages.
Officer: [[Q17]] Outside the east patio doors you will find covered bicycle shelters protected by keypad gates, which remain monitored by CCTV throughout the night.
Officer: [[Q18]] Every Thursday at eleven, fire wardens test the courtyard alarms for thirty seconds, so you do not need to evacuate unless a continuous siren persists.
Officer: [[Q19]] If you wish to leave heavy reference books overnight in a reserved carrel, ask the floor monitor for a green ribbon slip valid for forty-eight hours.
Officer: [[Q20]] Finally, please drop feedback cards into the brass suggestion box beside the water fountain before heading back toward the main quadrangle.`,
        questions: [
          {
            id: 'cd_listening_p1_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Ceiling feature built to reduce echoes: timber ______',
            correctAnswer: 'BAFFLES',
            explanation: 'Timber baffles absorb footstep echoes along the ceiling.'
          },
          {
            id: 'cd_listening_p1_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'What is required to use double-sided colour printing at the print hub?',
            correctAnswer: 'THREE POUNDS',
            explanation: 'Users need a preloaded balance of at least three pounds.'
          },
          {
            id: 'cd_listening_p1_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What specialized hardware is inside the central corridor suite?',
            options: [
              'A. Laser etching printers',
              'B. Braille tactile displays and adjustable desks',
              'C. Analog film projectors',
              'D. Voice recording booths'
            ],
            correctAnswer: 'B',
            explanation: 'The assistive technology suite offers adjustable desks and braille tactile displays.'
          },
          {
            id: 'cd_listening_p1_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What drink policy applies on the mezzanine floor?',
            options: [
              'A. No liquids of any kind are allowed',
              'B. Open coffee mugs are allowed at tables',
              'C. Hot drinks are allowed only before noon',
              'D. Sealed water flasks are permitted'
            ],
            correctAnswer: 'D',
            explanation: 'Sealed stainless flasks containing plain water are permitted.'
          },
          {
            id: 'cd_listening_p1_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Visitors handling historical maps in the glass-walled annex receive free ______.',
            correctAnswer: 'COTTON GLOVES',
            explanation: 'Cotton gloves are provided free at the map annex counter.'
          },
          {
            id: 'cd_listening_p1_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Mapping software preinstalled in the visualisation lab: ______',
            correctAnswer: 'ARCGIS',
            explanation: 'The visualisation lab machines carry ArcGIS and RStudio.'
          },
          {
            id: 'cd_listening_p1_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Security feature on east patio bicycle shelters: ______ gates',
            correctAnswer: 'KEYPAD',
            explanation: 'Bicycle shelters are secured by keypad gates and CCTV.'
          },
          {
            id: 'cd_listening_p1_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'When should students ignore the thirty-second courtyard alarm test?',
            options: [
              'A. Every Thursday at eleven',
              'B. Every Monday at nine',
              'C. First Friday of each term',
              'D. Daily at midnight'
            ],
            correctAnswer: 'A',
            explanation: 'Fire wardens test the courtyard alarms every Thursday at eleven.'
          },
          {
            id: 'cd_listening_p1_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Colour of slip used to reserve overnight study carrel books: ______',
            correctAnswer: 'GREEN',
            explanation: 'A green ribbon slip reserves reference books for 48 hours.'
          },
          {
            id: 'cd_listening_p1_lq20',
            number: 20,
            type: 'short_answer',
            questionText: 'Where is the brass suggestion box positioned?',
            correctAnswer: 'WATER FOUNTAIN',
            explanation: 'It sits beside the water fountain.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Reviewing Campus Archive Digitization Methodology',
        audioScenario:
          'Two humanities students, Priya and Owen, meet Dr. Chambers to evaluate cataloguing methods for their university library archive project.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Archive Project Seminar]
Dr. Chambers: Come in, Priya and Owen. Let us review your progress indexing the 1920s campus architectural blueprints.
Priya: [[Q21]] We began photographing the rolled linen sheets yesterday, and our biggest headache so far has been curled parchment edges distorting the scale grid.
Owen: [[Q22]] Instead of pressing heavy books on top, which risks cracking dried ink, we requested acrylic weighting bars from the conservation studio.
Dr. Chambers: Wise decision. Have you standardized your file-naming taxonomy before uploading batches to the repository?
Priya: [[Q23]] Yes, every master TIFF file carries the building code, survey year, and sheet sequence number separated by underscores.
Dr. Chambers: What about optical character recognition on handwritten margin annotations?
Owen: [[Q24]] Automated OCR misread nearly forty percent of cursive notes, so we decided to perform manual transcription alongside peer cross-checking.
Dr. Chambers: [[Q25]] Sensible. When you reach the 1934 heating-plant expansion drawings, pay close attention to pencil revisions added by the borough surveyor.
Priya: We already spotted two conflicting boiler diagrams—should we flag both versions in the public metadata catalog or pick the later one?
Dr. Chambers: [[Q26]] Always preserve both variants cleanly and explain the discrepancy in the editorial provenance note.
Owen: Regarding storage redundancy, is one cloud mirror enough alongside the local RAID server in the library basement?
Dr. Chambers: [[Q27]] University policy mandates three geographically separate copies, meaning you must also write an annual LTO magnetic tape archive.
Priya: [[Q28]] Understood. For our undergraduate poster presentation next Friday, Dr. Chambers thinks we should focus on user search latency rather than camera calibration stats.
Dr. Chambers: [[Q29]] Exactly—your audience cares about how quickly future researchers retrieve plans by keyword rather than lens aperture tables.
Owen: [[Q30]] Lastly, before submitting the final portfolio, we should ask the campus copyright librarian to sign off on the public thumbnail license.`,
        questions: [
          {
            id: 'cd_listening_p1_lq21',
            number: 21,
            type: 'short_answer',
            questionText: 'What physical problem initially distorted scale measurements on the linen sheets?',
            correctAnswer: 'CURLED PARCHMENT EDGES',
            explanation: 'Priya says curled parchment edges distorted the scale grid.'
          },
          {
            id: 'cd_listening_p1_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Tool borrowed from conservation to flatten sheets safely: ______ weighting bars',
            correctAnswer: 'ACRYLIC',
            explanation: 'They requested acrylic weighting bars instead of heavy books.'
          },
          {
            id: 'cd_listening_p1_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How are the archival master image files formatted and separated?',
            options: [
              'A. Compressed JPEGs grouped by photographer initials',
              'B. Master TIFFs combining building code, year, and sheet number with underscores',
              'C. Single PDF folders named by donation date',
              'D. PNG files numbered sequentially by scanning hour'
            ],
            correctAnswer: 'B',
            explanation: 'Master TIFF filenames combine building code, survey year, and sequence separated by underscores.'
          },
          {
            id: 'cd_listening_p1_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why did Owen abandon automated OCR on the margin notes?',
            options: [
              'A. The university license expired mid-semester',
              'B. It was incompatible with Mac laptops',
              'C. It misread nearly forty percent of cursive handwriting',
              'D. It stripped colour layers from the TIFF scans'
            ],
            correctAnswer: 'C',
            explanation: 'Automated OCR misread nearly forty percent of cursive annotations.'
          },
          {
            id: 'cd_listening_p1_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Material used for late revisions on the 1934 heating-plant plans: ______',
            correctAnswer: 'PENCIL',
            explanation: 'The supervisor highlights pencil revisions added by the borough surveyor.'
          },
          {
            id: 'cd_listening_p1_lq26',
            number: 26,
            type: 'summary_completion',
            questionText: 'Conflicting boiler diagrams must both be kept and documented inside the editorial ______ note.',
            correctAnswer: 'PROVENANCE',
            explanation: 'Discrepancies must be explained in the editorial provenance note.'
          },
          {
            id: 'cd_listening_p1_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Required third backup medium under university retention policy: ______ tape',
            correctAnswer: 'MAGNETIC',
            explanation: 'Policy requires an annual LTO magnetic tape archive.'
          },
          {
            id: 'cd_listening_p1_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'What should Friday’s poster presentation emphasize?',
            options: [
              'A. Studio lighting tripods and shutter speed',
              'B. Budget breakdowns for ink restoration',
              'C. Researcher retrieval speed via keyword search',
              'D. History of the 1920s campus heating system'
            ],
            correctAnswer: 'C',
            explanation: 'Dr. Chambers advises focusing on user search latency and keyword retrieval.'
          },
          {
            id: 'cd_listening_p1_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Technical table to omit from the poster: lens ______ tables',
            correctAnswer: 'APERTURE',
            explanation: 'The audience does not need lens aperture tables.'
          },
          {
            id: 'cd_listening_p1_lq30',
            number: 30,
            type: 'short_answer',
            questionText: 'Who must approve the public thumbnail license before submission?',
            correctAnswer: 'COPYRIGHT LIBRARIAN',
            explanation: 'They will ask the campus copyright librarian to sign off.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Evolution of Open-Plan Academic Libraries',
        audioScenario:
          'A university architecture lecturer delivers a formal talk explaining how library design evolved from closed-stack vaults to civic learning commons.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Lecture on Academic Library Architecture]
Lecturer: Good afternoon. Today we examine how university library architecture has reinvented itself over the past two centuries.
Lecturer: [[Q31]] Until the mid-nineteenth century, major collegiate collections kept volumes chained or locked behind wire grilles, requiring a clerk to fetch each title.
Lecturer: [[Q32]] That closed model cracked when steel-frame engineering allowed architects to insert self-supporting multi-tier bookstacks deep inside narrow urban footprints.
Lecturer: [[Q33]] Another turning point came with electric tungsten lamps, which eliminated the dependence on towering skylights and allowed evening opening during winter semesters.
Lecturer: [[Q34]] Following the Second World War, soaring undergraduate enrolments forced planners toward modular concrete grids capable of holding heavier bookshelves anywhere on a floorplate.
Lecturer: [[Q35]] Yet modular openness brought an unforeseen side effect: wide concrete halls amplified chair scrapes and ventilation hum into fatiguing background glare.
Lecturer: [[Q36]] By the 1990s, many planners predicted that desktop internet terminals would render printed reading rooms obsolete within a single generation.
Lecturer: [[Q37]] Paradoxically, gate counts surged once campuses rebranded silent halls as collaborative learning commons equipped with movable whiteboards and charging rails.
Lecturer: [[Q38]] Crucially, behavioural surveys proved students still craved quiet visual companionship—studying alone yet feeling subtly motivated by visible peers nearby.
Lecturer: [[Q39]] Contemporary renovations therefore zone spaces strictly along an acoustic gradient, placing social cafés near lobbies and sealed contemplative chambers at upper corners.
Lecturer: [[Q40]] Looking ahead, automated robotic retrieval vaults beneath campuses free prime daylight rooms entirely for human seminar exchange rather than static paper storage.`,
        questions: [
          {
            id: 'cd_listening_p1_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Early barrier used to restrict student book access: wire ______',
            correctAnswer: 'GRILLES',
            explanation: 'Collections were locked behind wire grilles.'
          },
          {
            id: 'cd_listening_p1_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Structural innovation enabling compact multi-tier stacks: ______ engineering',
            correctAnswer: 'STEEL-FRAME',
            explanation: 'Steel-frame engineering enabled self-supporting stacks.'
          },
          {
            id: 'cd_listening_p1_lq33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Evening study became practical once electric ______ lamps reduced reliance on skylights.',
            correctAnswer: 'TUNGSTEN',
            explanation: 'Electric tungsten lamps allowed reliable evening illumination.'
          },
          {
            id: 'cd_listening_p1_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why did postwar architects adopt modular concrete floor grids?',
            options: [
              'A. To support heavy shelving flexibly across floorplates',
              'B. To reduce exterior brick decoration costs',
              'C. To shelter underground manuscript bunkers',
              'D. To simplify circular domed roof framing'
            ],
            correctAnswer: 'A',
            explanation: 'Modular grids handled heavy bookshelf loads anywhere on the floor.'
          },
          {
            id: 'cd_listening_p1_lq35',
            number: 35,
            type: 'short_answer',
            questionText: 'What nuisance noise did wide concrete halls amplify alongside chair scrapes?',
            correctAnswer: 'VENTILATION HUM',
            explanation: 'Open concrete halls amplified chair scrapes and ventilation hum.'
          },
          {
            id: 'cd_listening_p1_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: '1990s prediction assumed reading rooms would become ______.',
            correctAnswer: 'OBSOLETE',
            explanation: 'Planners thought desktop internet would make reading rooms obsolete.'
          },
          {
            id: 'cd_listening_p1_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Rebranded collaborative zone concept: learning ______',
            correctAnswer: 'COMMONS',
            explanation: 'Campuses rebranded spaces as collaborative learning commons.'
          },
          {
            id: 'cd_listening_p1_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What psychological factor still attracts individual students to physical libraries?',
            options: [
              'A. Free printing allowances for research essays',
              'B. Faster Wi-Fi than residential dormitories',
              'C. Mandatory attendance checks by tutors',
              'D. Motivation gained from seeing peers study nearby'
            ],
            correctAnswer: 'D',
            explanation: 'Students feel motivated by visible peers studying quietly around them.'
          },
          {
            id: 'cd_listening_p1_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Modern floor layouts organize zones along an acoustic ______.',
            correctAnswer: 'GRADIENT',
            explanation: 'Modern libraries zone floors along an acoustic gradient.'
          },
          {
            id: 'cd_listening_p1_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How do robotic underground vaults benefit modern campus libraries?',
            options: [
              'A. They eliminate the need for trained cataloguers',
              'B. They reserve sunlit upper rooms for human collaboration',
              'C. They replace digital journal subscriptions entirely',
              'D. They lower winter heating bills by fifty percent'
            ],
            correctAnswer: 'B',
            explanation: 'Robotic retrieval vaults free daylight upper rooms for human exchange.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 2: Student Accommodation & Tenancy Agreement
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p2',
    testNumber: 2,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 2: Student Accommodation & Tenancy Agreement',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Accommodation & Tenancy Agreement.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Off-Campus Flat Tenancy Inquiry',
        audioScenario:
          'A new master’s student phones a university-accredited letting agency to confirm rent terms, inventory checks, and deposit rules for a shared flat.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Accommodation Letting Office]
Agent: Good afternoon, Harborview Student Lettings, Louise speaking. How can I help?
Tenant: Hi Louise, I am flying in next Monday and would like to finalize the tenancy agreement for the two-bedroom flat in Elmwood Court.
Agent: [[Q1]] Lovely property. Let me pull up your file—could you confirm your first and middle initials plus surname? Yes, it is Jonas M. Lindholm, spelled L-I-N-D-H-O-L-M.
Agent: [[Q2]] Thank you, Mr. Lindholm. Your lease runs for forty-four weeks starting on the second of September.
Tenant: Could you remind me how much the monthly rent works out to per person once broadband is included?
Agent: [[Q3]] Fibre internet and cold water are covered, leaving your individual monthly share at 640 pounds.
Tenant: And how much is the refundable security deposit, and where is it held?
Agent: [[Q4]] The deposit equals five weeks of rent, protected inside an independent government custodial scheme rather than our company bank account.
Tenant: Great. Is electricity included on the same standing charge?
Agent: [[Q5]] No, gas and electricity are billed quarterly through an energy supplier, so you must take meter readings on move-in day.
Tenant: [[Q6]] Okay. Who should I notify if the kitchen washing machine leaks or a radiator stays cold? All urgent plumbing faults go straight to our round-the-clock maintenance line, extension 308.
Agent: [[Q7]] When you collect the keys from our High Street branch, remember to bring your passport and a printed copy of your university visa letter.
Tenant: [[Q8]] Will we receive a checklist for pre-existing marks on the carpets or walls? Yes, our clerk emails an illustrated digital inventory within twenty-four hours—you have seven days to add timestamped photos.
Agent: [[Q9]] One rule worth noting: bicycle frames cannot be chained inside the shared stairwell for fire-escape reasons, so please use the brick shed behind the garden gate.
Tenant: [[Q10]] Thanks! Before I sign online, what notice period applies if my flatmate leaves at Christmas? Neither tenant can end the fixed joint contract early unless you find an agency-approved replacement student.`,
        questions: [
          {
            id: 'cd_listening_p2_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Tenant surname: ______',
            correctAnswer: 'LINDHOLM',
            explanation: 'The surname is spelled L-I-N-D-H-O-L-M.'
          },
          {
            id: 'cd_listening_p2_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Tenancy duration: ______ weeks',
            correctAnswer: 'FORTY-FOUR',
            explanation: 'The lease runs for forty-four weeks.'
          },
          {
            id: 'cd_listening_p2_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Individual monthly rent including broadband: £ ______',
            correctAnswer: '640',
            explanation: 'Each tenant pays 640 pounds monthly.'
          },
          {
            id: 'cd_listening_p2_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Scheme protecting the five-week deposit: government ______ scheme',
            correctAnswer: 'CUSTODIAL',
            explanation: 'Deposits sit inside an independent government custodial scheme.'
          },
          {
            id: 'cd_listening_p2_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Action required on move-in day for gas and electricity: ______ readings',
            correctAnswer: 'METER',
            explanation: 'Tenants must take meter readings on move-in day.'
          },
          {
            id: 'cd_listening_p2_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Maintenance line extension for urgent plumbing faults:',
            correctAnswer: '308',
            explanation: 'Urgent faults go to extension 308.'
          },
          {
            id: 'cd_listening_p2_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Printed document required alongside passport at key pickup: ______ letter',
            correctAnswer: 'VISA',
            explanation: 'Tenants bring their passport and university visa letter.'
          },
          {
            id: 'cd_listening_p2_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How many days do tenants have to challenge or annotate the move-in inventory?',
            options: [
              'A. Seven days',
              'B. Five working days',
              'C. Forty-eight hours',
              'D. Fourteen days'
            ],
            correctAnswer: 'A',
            explanation: 'Tenants have seven days to append timestamped photos.'
          },
          {
            id: 'cd_listening_p2_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Where must residents store their bicycles?',
            options: [
              'A. Inside the ground-floor hallway',
              'B. On private bedroom balconies',
              'C. Attached to street lampposts outside',
              'D. In the brick shed behind the garden gate'
            ],
            correctAnswer: 'D',
            explanation: 'Bicycles belong in the brick shed behind the garden gate.'
          },
          {
            id: 'cd_listening_p2_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Under what condition can a tenant exit the joint fixed contract at Christmas?',
            options: [
              'A. Paying a one-month cancellation fee',
              'B. Providing thirty days written notice',
              'C. Finding an agency-approved replacement student',
              'D. Transferring the lease back to the university'
            ],
            correctAnswer: 'C',
            explanation: 'An early exit requires finding an agency-approved replacement student.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Welcome Briefing for Maple Hall Residents',
        audioScenario:
          'A residential hall warden introduces fire safety rules, laundry access, and communal dining policies to arriving first-year students.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Maple Hall Induction]
Warden: Welcome to Maple Hall! Over the next few minutes I will cover practical routines that keep three hundred residents comfortable all year.
Warden: [[Q11]] First, parcel deliveries are signed for at the porter lodge, where an automated text message alerts you as soon as a package enters a locker.
Warden: [[Q12]] In shared kitchens, please label chilled containers with your room number, because unlabelled dairy or leftovers are cleared out every Sunday evening.
Warden: [[Q13]] For safety reasons, private electric heaters and deep-fat fryers are banned from bedrooms because they frequently overload older circuit breakers.
Warden: [[Q14]] Should you accidentally lock yourself out after midnight, campus security patrols can issue a temporary spare fob after checking student ID—no fine applies on your first lock-out.
Warden: [[Q15]] Washing machines in the basement cellar operate solely via our smartphone app rather than loose coins, costing three pounds twenty per wash cycle.
Warden: [[Q16]] Overnight visitors may stay up to two nights per fortnight provided you register their name online before five o'clock on the arrival afternoon.
Warden: [[Q17]] Quiet study hours begin promptly at ten thirty on weeknights, meaning bass speakers and corridor calls must pause across all residential staircases.
Warden: [[Q18]] Maintenance requests for flickering bulbs or stiff window latches are logged through the resident portal and usually cleared within forty-eight hours.
Warden: [[Q19]] If a fire alarm sounds, leave bags behind, close bedroom doors cleanly, and assemble beside the oak statue on the south lawn.
Warden: [[Q20]] Finally, anyone wishing to join the autumn hall social committee should meet our senior mentor in the games lounge directly after dinner.`,
        questions: [
          {
            id: 'cd_listening_p2_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Notification method when parcels arrive at the porter lodge: ______ message',
            correctAnswer: 'TEXT',
            explanation: 'An automated text message alerts residents of parcels.'
          },
          {
            id: 'cd_listening_p2_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Evening when unlabelled fridge items are discarded: ______',
            correctAnswer: 'SUNDAY',
            explanation: 'Unlabelled items are cleared out every Sunday evening.'
          },
          {
            id: 'cd_listening_p2_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Besides deep-fat fryers, which appliance is banned from bedrooms?',
            correctAnswer: 'ELECTRIC HEATERS',
            explanation: 'Private electric heaters and deep-fat fryers are banned.'
          },
          {
            id: 'cd_listening_p2_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What happens on a student’s very first after-midnight lockout?',
            options: [
              'A. A fifteen-pound callout fee is billed immediately',
              'B. Security checks ID and issues a temporary fob free of charge',
              'C. Students must wait until reception opens at eight',
              'D. The student is permanently moved to a manual key'
            ],
            correctAnswer: 'B',
            explanation: 'No fine applies on the first lockout after checking ID.'
          },
          {
            id: 'cd_listening_p2_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Payment method required for basement washing machines: ______ app',
            correctAnswer: 'SMARTPHONE',
            explanation: 'Machines operate solely via the smartphone app.'
          },
          {
            id: 'cd_listening_p2_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Overnight guests may stay two nights per ______ if registered online before 5 PM.',
            correctAnswer: 'FORTNIGHT',
            explanation: 'Guests may stay up to two nights per fortnight.'
          },
          {
            id: 'cd_listening_p2_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'When do weeknight quiet study hours begin?',
            correctAnswer: 'TEN THIRTY',
            explanation: 'Quiet study hours begin promptly at ten thirty.'
          },
          {
            id: 'cd_listening_p2_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'How should residents report minor faults like flickering corridor lights?',
            options: [
              'A. Leave a handwritten slip at the porter lodge',
              'B. Wait for monthly room inspections',
              'C. Email the hall warden directly',
              'D. Log a ticket through the resident portal'
            ],
            correctAnswer: 'D',
            explanation: 'Faults are logged via the online resident portal.'
          },
          {
            id: 'cd_listening_p2_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Emergency fire assembly landmark on the south lawn: oak ______',
            correctAnswer: 'STATUE',
            explanation: 'Residents gather beside the oak statue on the south lawn.'
          },
          {
            id: 'cd_listening_p2_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Room where the social committee meeting takes place after dinner: ______ lounge',
            correctAnswer: 'GAMES',
            explanation: 'The meeting takes place in the games lounge.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Researching Student Rental Housing Affordability',
        audioScenario:
          'Sociology undergraduates Hannah and Dev consult their faculty advisor on a field study comparing student rents and commuting times.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Housing Survey Supervision]
Advisor: Hello Hannah and Dev. How did your pilot survey on private student rents go?
Hannah: [[Q21]] We got eighty completed questionnaires from second-year renters, and the steepest expense jump was not base rent but unexpected winter utility surcharges.
Dev: [[Q22]] Also, nearly two-thirds of respondents admitted signing leases without reading the guarantor liability clause carefully.
Advisor: Interesting finding. Did you separate purpose-built studio blocks from converted Victorian terrace houses in your regression model?
Hannah: [[Q23]] Yes, studio blocks averaged shorter walks to campus, yet tenants reported noticeably higher social isolation scores than flatsharers.
Advisor: How are you verifying commuting times instead of trusting rough guesses from interviewees?
Dev: [[Q24]] We mapped every postcode using daytime bus timetables combined with verified cycling-lane distances from city planning datasets.
Advisor: Good rigor. Are there any bias gaps in your sample so far?
Hannah: [[Q25]] Unfortunately, international postgraduate renters were heavily underrepresented because our flyers went up mainly outside undergraduate dining halls.
Advisor: [[Q26]] To balance the cohort before week eight, try distributing bilingual links through the International Student Society newsletter.
Dev: Next we plan to interview local estate agents—should we send written ethics consent forms before booking audio calls?
Advisor: [[Q27]] Definitely, and clarify upfront that agency names will be replaced with anonymous alphanumeric labels in your dissertation appendix.
Hannah: [[Q28]] When comparing dampness complaints across wards, Dev noticed older basement apartments showed twice the mould incidence of top-floor flats.
Advisor: [[Q29]] Check whether missing extractor fans or single-glazed sash windows explain that gap before concluding it is purely building age.
Dev: [[Q30]] Right—we will add heating ventilation scores as a control variable in next Monday’s statistical run.`,
        questions: [
          {
            id: 'cd_listening_p2_lq21',
            number: 21,
            type: 'short_answer',
            questionText: 'What unexpected household cost caused the sharpest budget jump for renters?',
            correctAnswer: 'UTILITY SURCHARGES',
            explanation: 'Unexpected winter utility surcharges drove the steepest cost jump.'
          },
          {
            id: 'cd_listening_p2_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Contract section most second-year students skipped reading: ______ liability clause',
            correctAnswer: 'GUARANTOR',
            explanation: 'Nearly two-thirds skipped reading the guarantor liability clause.'
          },
          {
            id: 'cd_listening_p2_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What drawback did purpose-built studio residents report more frequently?',
            options: [
              'A. Higher social isolation scores',
              'B. Longer walking commutes to lecture halls',
              'C. Unreliable broadband connectivity',
              'D. Strict curfews imposed by wardens'
            ],
            correctAnswer: 'A',
            explanation: 'Studio tenants reported noticeably higher social isolation scores.'
          },
          {
            id: 'cd_listening_p2_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'How did Dev calculate objective commuting durations?',
            options: [
              'A. Tracking GPS watches worn by volunteers',
              'B. Combining daytime bus timetables with official cycling-lane maps',
              'C. Timing personal taxi trips during peak traffic',
              'D. Copying straight-line distances from rental adverts'
            ],
            correctAnswer: 'B',
            explanation: 'He combined daytime bus timetables with verified cycling-lane distances.'
          },
          {
            id: 'cd_listening_p2_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'International ______ renters were initially missed because flyers targeted undergraduate halls.',
            correctAnswer: 'POSTGRADUATE',
            explanation: 'International postgraduate renters were underrepresented.'
          },
          {
            id: 'cd_listening_p2_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Channel suggested to reach missing respondents: society ______',
            correctAnswer: 'NEWSLETTER',
            explanation: 'They will share bilingual links via the society newsletter.'
          },
          {
            id: 'cd_listening_p2_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Protection promised to interviewed estate agents in the dissertation: ______ labels',
            correctAnswer: 'ALPHANUMERIC',
            explanation: 'Agency names will be replaced with anonymous alphanumeric labels.'
          },
          {
            id: 'cd_listening_p2_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Apartment level suffering double the rate of mould complaints: ______',
            correctAnswer: 'BASEMENT',
            explanation: 'Older basement apartments had twice the mould incidence.'
          },
          {
            id: 'cd_listening_p2_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'What two building features does the advisor suspect worsen dampness?',
            options: [
              'A. Flat concrete roofs and north-facing doors',
              'B. Thick brick walls and wooden staircases',
              'C. Missing extractor fans and single-glazed sash windows',
              'D. Shared boilers and external drainpipes'
            ],
            correctAnswer: 'C',
            explanation: 'Missing extractor fans and single-glazed sash windows may drive dampness.'
          },
          {
            id: 'cd_listening_p2_lq30',
            number: 30,
            type: 'short_answer',
            questionText: 'When will Dev run the updated statistical regression?',
            correctAnswer: 'NEXT MONDAY',
            explanation: 'They plan the updated run for next Monday.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Urban Micro-Apartments and Co-Living Architecture',
        audioScenario:
          'An urban planning professor lectures on demographic pressures driving compact co-living residences across high-density global cities.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Co-Living Housing Lecture]
Professor: Over the past decade, housing affordability crises in major university cities have sparked a surge in compact co-living developments.
Professor: [[Q31]] Unlike cramped nineteenth-century boarding houses, contemporary co-living blocks trade smaller private floorplates for generous shared kitchens and laundry lounges.
Professor: [[Q32]] One catalytic driver has been the sharp rise in single-person urban households, which now comprise over forty percent of residences in northern European capitals.
Professor: [[Q33]] Municipal planners initially resisted micro-units below twenty-two square metres, fearing developers might pack tenants into windowless shoeboxes.
Professor: [[Q34]] To gain zoning approval, architectural teams proved that high ceilings and recessed storage alcoves dramatically improve perceived daylight depth.
Professor: [[Q35]] In Tokyo and Seoul, sliding timber partitions allow one twelve-square-metre room to convert rapidly from a study studio into a dining nook.
Professor: [[Q36]] Acoustically, however, lightweight prefabricated partition walls often fail to block low-frequency impact noise from neighbouring kitchens.
Professor: [[Q37]] Field evaluations across London schemes revealed that residents socialize far more when mailrooms and coffee bars intersect along ground-floor thoroughfares.
Professor: [[Q38]] Conversely, oversized rooftop lounges placed high above residential floors frequently stood empty because tenants preferred effortless casual encounters on their daily routes.
Professor: [[Q39]] Critics warn that short flexible leases with bundled housekeeping risk pricing out lower-income service workers while attracting primarily transient mobile professionals.
Professor: [[Q40]] Future municipal codes will therefore likely pair minimum natural ventilation standards with mandatory quotas for long-term affordable family units.`,
        questions: [
          {
            id: 'cd_listening_p2_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Historical precedent contrasted with modern co-living: ______ houses',
            correctAnswer: 'BOARDING',
            explanation: 'Compared against cramped nineteenth-century boarding houses.'
          },
          {
            id: 'cd_listening_p2_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Demographic group forming over 40% of northern European capital homes: ______ households',
            correctAnswer: 'SINGLE-PERSON',
            explanation: 'Single-person urban households are a primary catalyst.'
          },
          {
            id: 'cd_listening_p2_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why did city planners originally hesitate to approve units under 22 square metres?',
            options: [
              'A. Structural elevators were too costly to inspect',
              'B. Insurance firms refused to cover timber frames',
              'C. Developers might build poorly lit, cramped rooms',
              'D. Sewage pipes could not serve high-density towers'
            ],
            correctAnswer: 'C',
            explanation: 'Planners feared developers would build windowless shoebox apartments.'
          },
          {
            id: 'cd_listening_p2_lq34',
            number: 34,
            type: 'summary_completion',
            questionText: 'High ceilings and recessed storage alcoves help expand perceived ______ depth.',
            correctAnswer: 'DAYLIGHT',
            explanation: 'Those features dramatically improve perceived daylight depth.'
          },
          {
            id: 'cd_listening_p2_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Adaptable interior feature in Tokyo and Seoul micro-units: sliding ______ partitions',
            correctAnswer: 'TIMBER',
            explanation: 'Sliding timber partitions let small rooms shift purpose quickly.'
          },
          {
            id: 'cd_listening_p2_lq36',
            number: 36,
            type: 'short_answer',
            questionText: 'What type of nuisance sound penetrates lightweight prefabricated partition walls?',
            correctAnswer: 'IMPACT NOISE',
            explanation: 'Lightweight walls often fail to block low-frequency impact noise.'
          },
          {
            id: 'cd_listening_p2_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'According to London studies, what boosts neighborly interaction?',
            options: [
              'A. Placing mailrooms and coffee bars along main ground walkways',
              'B. Mandatory weekly floor dinners',
              'C. Removing doors between kitchen suites',
              'D. Assigning randomized roommates each month'
            ],
            correctAnswer: 'A',
            explanation: 'Residents socialize more when mailrooms and coffee bars sit on ground thoroughfares.'
          },
          {
            id: 'cd_listening_p2_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Underused shared amenity in upper levels: ______ lounges',
            correctAnswer: 'ROOFTOP',
            explanation: 'Oversized rooftop lounges frequently stood empty.'
          },
          {
            id: 'cd_listening_p2_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Which concern do critics raise about flexible bundled co-living leases?',
            options: [
              'A. Long-term repair bills fall on municipal councils',
              'B. Tenants lose access to legal voter registration',
              'C. Internet speeds degrade during evening hours',
              'D. Lower-income local workers risk being priced out'
            ],
            correctAnswer: 'D',
            explanation: 'Short bundled leases attract mobile professionals and risk pricing out local workers.'
          },
          {
            id: 'cd_listening_p2_lq40',
            number: 40,
            type: 'fill_blank',
            questionText: 'Environmental standard expected in future co-living codes: natural ______',
            correctAnswer: 'VENTILATION',
            explanation: 'Codes will pair natural ventilation standards with affordable quotas.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 3: University Health Center & Medical Consultation Booking
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p3',
    testNumber: 3,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 3: University Health Center & Medical Consultation Booking',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on University Health Center & Medical Consultation Booking.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Registering at the Campus Medical Practice',
        audioScenario:
          'A student calls the campus health clinic receptionist to register as a new patient and schedule an immunization review.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Campus Clinic Reception]
Receptionist: Good morning, Bridgeford University Health Center, Samira speaking. How may I assist you?
Caller: Hello, I moved into student halls last Friday and need to register with a doctor plus arrange a vaccination check for my nursing placement.
Receptionist: [[Q1]] Certainly. Could I take your full name and date of birth first? My name is Clara Donovan, born on the nineteenth of April.
Receptionist: [[Q2]] Thank you, Ms. Donovan. Let me verify your current emergency contact phone number—do you have a UK mobile active yet? Yes, it is 07700 900412.
Caller: Great. Which clinic doctor handles occupational placement clearances for health-science students?
Receptionist: [[Q3]] Dr. Malik runs our student placement clinic every Wednesday morning between eight thirty and twelve noon.
Caller: [[Q4]] Perfect. Should I bring my childhood immunization records from home, or just verbal dates? You must bring certified translated certificates along with official photo identification.
Caller: [[Q5]] What is the fee for an overseas meningitis booster if my prior certificate is incomplete? Registered full-time students pay a subsidized clinic charge of 35 pounds.
Receptionist: [[Q6]] Let us book your intake appointment—we have an opening next Thursday at 10:15 in Consultation Room Four on the ground corridor.
Caller: [[Q7]] Is there any fasting blood screen required that morning? No fasting is needed, though you should complete the digital allergy questionnaire before Tuesday midnight.
Caller: [[Q8]] Also, I carry a regular asthma inhaler—can your pharmacy issue repeat prescriptions automatically? Yes, once Dr. Malik reviews your baseline dosage, refills sync directly with the Boots chemist on campus square.
Caller: [[Q9]] Good to know. What happens if I develop an acute fever on a Sunday when the university clinic doors are closed? Call the national non-emergency medical helpline on 111 for same-day local out-of-hours triage.
Receptionist: [[Q10]] One final detail: allow ten extra minutes before your first appointment to register your weight and blood pressure at our automated lobby kiosk.`,
        questions: [
          {
            id: 'cd_listening_p3_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Patient surname: ______',
            correctAnswer: 'DONOVAN',
            explanation: 'Caller gives her name as Clara Donovan.'
          },
          {
            id: 'cd_listening_p3_lq2',
            number: 2,
            type: 'short_answer',
            questionText: 'Caller mobile telephone number:',
            correctAnswer: '07700 900412',
            explanation: 'Active UK mobile is 07700 900412.'
          },
          {
            id: 'cd_listening_p3_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Doctor overseeing placement clinics: Dr. ______',
            correctAnswer: 'MALIK',
            explanation: 'Dr. Malik runs the placement clinic on Wednesday mornings.'
          },
          {
            id: 'cd_listening_p3_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Required format for overseas immunization proof: ______ certificates',
            correctAnswer: 'TRANSLATED',
            explanation: 'Certified translated certificates are required.'
          },
          {
            id: 'cd_listening_p3_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Subsidized student charge for meningitis booster: £ ______',
            correctAnswer: '35',
            explanation: 'Full-time students pay 35 pounds.'
          },
          {
            id: 'cd_listening_p3_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Scheduled appointment time next Thursday:',
            correctAnswer: '10:15',
            explanation: 'Booked for Thursday at 10:15 in Room Four.'
          },
          {
            id: 'cd_listening_p3_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Online form due before Tuesday midnight: ______ questionnaire',
            correctAnswer: 'ALLERGY',
            explanation: 'The digital allergy questionnaire is due before Tuesday midnight.'
          },
          {
            id: 'cd_listening_p3_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How will regular asthma inhaler refills be handled after the baseline review?',
            options: [
              'A. Posted to the student dormitory mailroom',
              'B. Sent electronically to the chemist on campus square',
              'C. Collected in person at Consultation Room Four',
              'D. Ordered monthly from the central city hospital'
            ],
            correctAnswer: 'B',
            explanation: 'Refills sync directly with the Boots chemist on campus square.'
          },
          {
            id: 'cd_listening_p3_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What should the student do if a sudden fever starts on a Sunday?',
            options: [
              'A. Call the national non-emergency helpline on 111',
              'B. Visit the campus sports first-aid room',
              'C. Leave a voicemail on the clinic reception phone',
              'D. Wait until Monday morning walk-in triage'
            ],
            correctAnswer: 'A',
            explanation: 'Call 111 for same-day out-of-hours triage.'
          },
          {
            id: 'cd_listening_p3_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why should new patients arrive ten minutes early?',
            options: [
              'A. To pay the annual registration fee in cash',
              'B. To watch an introductory hygiene video',
              'C. To pick up paper prescription forms',
              'D. To record weight and blood pressure at the lobby kiosk'
            ],
            correctAnswer: 'D',
            explanation: 'Arrive ten minutes early to log weight and blood pressure at the kiosk.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Campus Wellbeing & Seasonal Flu Campaign',
        audioScenario:
          'A university public health nurse explains the autumn preventive health services, mental wellness workshops, and mobile clinic schedule.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Student Health Outreach]
Nurse: Hello everyone, and welcome to this term’s Campus Wellbeing briefing from the Bridgeford Medical Team.
Nurse: [[Q11]] Starting next Monday, our pop-up vaccination marquee will operate outside the Student Union pavilion rather than inside the cramped medical annex.
Nurse: [[Q12]] Walk-in seasonal flu shots are free to every enrolled student carrying an undergraduate or postgraduate badge.
Nurse: [[Q13]] Beyond vaccinations, our sleep hygiene workshops address irregular study schedules caused by late-night screen exposure and excessive caffeine intake.
Nurse: [[Q14]] Students experiencing test anxiety can book confidential forty-minute mindfulness coaching sessions without needing a prior GP referral letter.
Nurse: [[Q15]] Every Tuesday afternoon at two, our registered dietician runs budget cooking demonstrations focusing on iron-rich plant meals inside the central refectory.
Nurse: [[Q16]] Notice also that our dental hygiene checkup van visits North Campus on alternate Thursdays—prebooking opens forty-eight hours in advance on the portal.
Nurse: [[Q17]] If you wear contact lenses, please pick up free sterile saline travel kits from the reception desk before leaving on winter field trips.
Nurse: [[Q18]] For wheelchair users and students recovering from sports sprains, accessible electric shuttle buggies run between residential halls and clinic doors every twenty minutes.
Nurse: [[Q19]] Remember that doctor sick notes for missed coursework require an assessment on the same day symptoms begin rather than retrospective requests weeks later.
Nurse: [[Q20]] Before you leave today, feel free to grab a pocket card listing our anonymous twenty-four-hour crisis helpline and peer support hours.`,
        questions: [
          {
            id: 'cd_listening_p3_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Location of pop-up vaccination tent starting Monday: Student Union ______',
            correctAnswer: 'PAVILION',
            explanation: 'It operates outside the Student Union pavilion.'
          },
          {
            id: 'cd_listening_p3_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Who qualifies for free walk-in seasonal flu vaccinations?',
            options: [
              'A. Only international first-year students',
              'B. Only students living in catered halls',
              'C. Any enrolled student showing a valid campus badge',
              'D. Medical and nursing students exclusively'
            ],
            correctAnswer: 'C',
            explanation: 'Walk-in flu shots are free to every enrolled student carrying a badge.'
          },
          {
            id: 'cd_listening_p3_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Besides caffeine intake, what factor is addressed in sleep hygiene sessions?',
            correctAnswer: 'SCREEN EXPOSURE',
            explanation: 'Workshops target late-night screen exposure and excessive caffeine.'
          },
          {
            id: 'cd_listening_p3_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Length of confidential mindfulness coaching slots: ______ minutes',
            correctAnswer: 'FORTY',
            explanation: 'Sessions last forty minutes with no GP referral needed.'
          },
          {
            id: 'cd_listening_p3_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Tuesday dietician sessions focus on cooking iron-rich ______ meals on a budget.',
            correctAnswer: 'PLANT',
            explanation: 'The dietician focuses on iron-rich plant meals.'
          },
          {
            id: 'cd_listening_p3_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Schedule of mobile dental checkup visits to North Campus: alternate ______',
            correctAnswer: 'THURSDAYS',
            explanation: 'The dental van visits on alternate Thursdays.'
          },
          {
            id: 'cd_listening_p3_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Complimentary kit offered to contact-lens wearers before field trips: ______ kits',
            correctAnswer: 'SALINE',
            explanation: 'Free sterile saline travel kits are available.'
          },
          {
            id: 'cd_listening_p3_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'How often do accessible electric shuttle buggies reach clinic doors?',
            correctAnswer: 'TWENTY MINUTES',
            explanation: 'Shuttles run every twenty minutes.'
          },
          {
            id: 'cd_listening_p3_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What condition applies when requesting a medical certificate for missed deadlines?',
            options: [
              'A. Students must obtain a tutor signature beforehand',
              'B. Assessment must happen on the day symptoms begin',
              'C. Certificates cost ten pounds for late submissions',
              'D. Blood tests are mandatory for every illness'
            ],
            correctAnswer: 'B',
            explanation: 'Medical notes require same-day assessment rather than retrospective requests.'
          },
          {
            id: 'cd_listening_p3_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Take-home item listing crisis helpline numbers: pocket ______',
            correctAnswer: 'CARD',
            explanation: 'Students can grab a pocket card at the end.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Designing a Telehealth Triage Trial',
        audioScenario:
          'Public health postgraduates Liam and Mei discuss data collection and patient triage accuracy with Dr. Brooks.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Telehealth Research Seminar]
Dr. Brooks: Welcome back, Liam and Mei. Let us look closely at your pilot audit of student video consultations.
Liam: [[Q21]] Over six weeks, video appointments resolved seventy-two percent of routine dermatology and cold queries without requiring an in-person visit.
Mei: [[Q22]] However, diagnostic clarity dropped sharply whenever callers logged in from dim dorm rooms using low-resolution webcams.
Dr. Brooks: Fascinating limitation. Did patient satisfaction differ significantly between undergraduate and doctoral users?
Liam: [[Q23]] Actually, waiting-time reduction pleased both groups equally, though first-year students valued late-afternoon slots far more than morning calls.
Dr. Brooks: How are you verifying whether online advice led to unintended repeat clinic visits within seven days?
Mei: [[Q24]] We linked anonymized appointment IDs to emergency drop-in logs so we can track rebound consultations accurately.
Dr. Brooks: [[Q25]] Remember that ethical approval strictly forbids storing recorded consultation video clips beyond twenty-four hours after diagnostic coding.
Liam: [[Q26]] Understood—our script automatically purges video streams overnight, leaving only text triage summaries on encrypted servers.
Mei: [[Q27]] Another surprise was language friction: non-native speakers found describing subtle pain symptoms far harder without physical clinician gestures.
Dr. Brooks: [[Q28]] Have you tested adding visual symptom slider cards on screen before the call connects? Not yet, though Mei proposed piloting illustrated pain scales next month.
Liam: [[Q29]] Regarding broadband stability, five rural off-campus students switched to standard voice audio midway through their skin checkups.
Dr. Brooks: [[Q30]] Document those bandwidth fallbacks carefully in your limitations table, then submit your interim statistical abstract before next Friday’s symposium deadline.`,
        questions: [
          {
            id: 'cd_listening_p3_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Share of routine queries solved via video without clinic visits: ______ percent',
            correctAnswer: 'SEVENTY-TWO',
            explanation: 'Seventy-two percent were resolved remotely.'
          },
          {
            id: 'cd_listening_p3_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'What environmental factor alongside poor cameras weakened video diagnosis?',
            correctAnswer: 'DIM DORM ROOMS',
            explanation: 'Dim dorm rooms and low-resolution webcams reduced clarity.'
          },
          {
            id: 'cd_listening_p3_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What scheduling preference stood out among first-year undergraduates?',
            options: [
              'A. Weekend morning calls',
              'B. Early 8 AM check-ins',
              'C. Midnight urgent triage',
              'D. Late-afternoon time slots'
            ],
            correctAnswer: 'D',
            explanation: 'First-year students strongly favored late-afternoon appointments.'
          },
          {
            id: 'cd_listening_p3_lq24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Mei tracked repeat visits by linking anonymized IDs to emergency ______ logs.',
            correctAnswer: 'DROP-IN',
            explanation: 'Anonymized IDs were cross-linked to emergency drop-in logs.'
          },
          {
            id: 'cd_listening_p3_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Maximum ethics retention window for video clips: ______ hours',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Video clips cannot be retained beyond twenty-four hours.'
          },
          {
            id: 'cd_listening_p3_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Data kept permanently on encrypted servers: text ______ summaries',
            correctAnswer: 'TRIAGE',
            explanation: 'Only text triage summaries are stored long-term.'
          },
          {
            id: 'cd_listening_p3_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What barrier affected non-native speakers during video checkups?',
            options: [
              'A. Describing subtle symptoms without physical clinician gestures',
              'B. Payment portal rejection errors',
              'C. Difficulty downloading clinic pharmacy vouchers',
              'D. Lack of automated subtitle translations'
            ],
            correctAnswer: 'A',
            explanation: 'Describing subtle pain symptoms without physical gestures proved harder.'
          },
          {
            id: 'cd_listening_p3_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'On-screen aid planned for next month’s pilot: illustrated ______ scales',
            correctAnswer: 'PAIN',
            explanation: 'Mei proposed testing illustrated pain scales.'
          },
          {
            id: 'cd_listening_p3_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'How did five rural students continue their appointments when bandwidth fell?',
            correctAnswer: 'VOICE AUDIO',
            explanation: 'They switched to standard voice audio.'
          },
          {
            id: 'cd_listening_p3_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Submission deadline next Friday: interim statistical ______',
            correctAnswer: 'ABSTRACT',
            explanation: 'They must submit the interim statistical abstract before next Friday.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Preventive Screening & University Epidemiology',
        audioScenario:
          'A medical historian and epidemiologist explains how student health clinics pioneered early mass preventive screening across twentieth-century campuses.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Campus Public Health History]
Lecturer: Universities have long served as unique laboratories for preventive medicine, uniting dense young populations under coordinated clinical oversight.
Lecturer: [[Q31]] Before 1910, campus infirmaries existed mostly as isolation cottages designed to nurse acute measles or scarlet fever outbreaks rather than prevent illness.
Lecturer: [[Q32]] A decisive shift occurred when American land-grant colleges introduced compulsory freshman posture and lung examinations during registration week.
Lecturer: [[Q33]] By the 1930s, portable miniature chest X-ray vans parked outside dining commons helped physicians detect early tuberculosis before students entered crowded dormitories.
Lecturer: [[Q34]] Crucially, clinic directors began archiving anonymous anthropometric ledgers—recording height, lung capacity, and resting pulse across tens of thousands of entrants.
Lecturer: [[Q35]] Decades later, cardiac epidemiologists realized those forgotten paper cohorts offered gold-standard longitudinal baselines tracking lifelong cardiovascular risk.
Lecturer: [[Q36]] Mental health entered formal campus medicine far more gradually, emerging in the 1950s primarily to diagnose acute exam exhaustion rather than chronic anxiety.
Lecturer: [[Q37]] Meanwhile, student clinics played an unsung role in vaccine field trials, verifying antibody duration through voluntary autumn blood donations.
Lecturer: [[Q38]] Modern digital health portals extend this tradition, though researchers must carefully guard against sampling bias since anxious students utilize booking apps more frequently.
Lecturer: [[Q39]] Equally pressing is interoperability: student health databases rarely synchronize smoothly with regional hospital emergency records after graduation.
Lecturer: [[Q40]] Today, preventative university centers focus heavily on lifestyle resilience, linking ergonomic study posture assessments with early metabolic screening.`,
        questions: [
          {
            id: 'cd_listening_p3_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Role of pre-1910 campus infirmaries: ______ cottages',
            correctAnswer: 'ISOLATION',
            explanation: 'Early infirmaries operated primarily as isolation cottages.'
          },
          {
            id: 'cd_listening_p3_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which new check did land-grant colleges introduce alongside posture exams?',
            correctAnswer: 'LUNG EXAMINATIONS',
            explanation: 'They mandated compulsory posture and lung examinations.'
          },
          {
            id: 'cd_listening_p3_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Disease screened by 1930s portable X-ray vans: ______',
            correctAnswer: 'TUBERCULOSIS',
            explanation: 'Portable vans helped detect early tuberculosis.'
          },
          {
            id: 'cd_listening_p3_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What records did early clinic directors store in anthropometric ledgers?',
            options: [
              'A. Student cafeteria meal spending',
              'B. Height, lung capacity, and resting pulse measurements',
              'C. Daily athletic sprint speeds',
              'D. Family income and hometown postcodes'
            ],
            correctAnswer: 'B',
            explanation: 'Ledgers recorded height, lung capacity, and resting pulse.'
          },
          {
            id: 'cd_listening_p3_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Forgotten campus paper cohorts provided baselines tracking lifelong ______ risk.',
            correctAnswer: 'CARDIOVASCULAR',
            explanation: 'They offered baselines for lifelong cardiovascular risk.'
          },
          {
            id: 'cd_listening_p3_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Decade when formal mental health care emerged on campuses: ______',
            correctAnswer: '1950S',
            explanation: 'Mental health care emerged formally in the 1950s.'
          },
          {
            id: 'cd_listening_p3_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How did students contribute to historic vaccine trials on campus?',
            options: [
              'A. Designing laboratory centrifuge prototypes',
              'B. Translating trial posters into foreign languages',
              'C. Giving voluntary autumn blood samples to track antibody longevity',
              'D. Managing cold-storage distribution trucks'
            ],
            correctAnswer: 'C',
            explanation: 'Voluntary autumn blood donations verified antibody duration.'
          },
          {
            id: 'cd_listening_p3_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Statistical distortion seen in modern clinic app logs: sampling ______',
            correctAnswer: 'BIAS',
            explanation: 'Researchers must guard against sampling bias.'
          },
          {
            id: 'cd_listening_p3_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which external records rarely synchronize smoothly with campus clinics after graduation?',
            correctAnswer: 'HOSPITAL EMERGENCY RECORDS',
            explanation: 'Campus databases rarely sync with regional hospital emergency records.'
          },
          {
            id: 'cd_listening_p3_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which two interventions are paired in modern campus preventive centers?',
            options: [
              'A. Dental whitening and dietary supplements',
              'B. Marathon training and mandatory sleep tracking',
              'C. Ergonomic posture checks and early metabolic screening',
              'D. Genetic testing and mandatory flu quarantine'
            ],
            correctAnswer: 'C',
            explanation: 'Centers link ergonomic posture assessments with early metabolic screening.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 4: International Student Orientation & Banking Setup
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p4',
    testNumber: 4,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 4: International Student Orientation & Banking Setup',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on International Student Orientation & Banking Setup.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Opening a Student Bank Account',
        audioScenario:
          'An incoming international student visits the university branch of Mercia Bank to open a current account and request an introductory letter.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Campus Bank Branch]
Advisor: Good morning, Mercia Bank University Branch, David speaking. Sit down please.
Student: Thank you. I arrived from Jakarta two days ago and would like to open a student current account before tuition installments come due.
Advisor: [[Q1]] Glad to assist. Let me verify your full surname from your passport—is it Santoso, spelled S-A-N-T-O-S-O? Yes, that is right.
Advisor: [[Q2]] Great. Beside your passport, we need an official university enrollment verification letter showing your residential term address.
Student: I downloaded the PDF certificate from my student portal this morning—will a digital copy work?
Advisor: [[Q3]] Our compliance desk requires a stamped paper printout signed by the Registry Desk in Senate House.
Student: [[Q4]] Understood, I will collect the stamped sheet this afternoon. Are there monthly maintenance fees on the International Student account? Zero monthly fees, though international wire transfers carry a flat inbound handling fee of six pounds.
Advisor: [[Q5]] Once approved, your contactless debit card arrives by recorded courier within four working days, while your security PIN follows in a separate envelope.
Student: [[Q6]] Can I activate mobile banking alerts immediately to monitor exchange rates and card spending? Yes, download our blue Mercia Mobile app and switch on instant transaction notifications.
Student: [[Q7]] What daily cash withdrawal cap applies to newly opened student accounts? Automated cash machines dispense up to three hundred pounds per day.
Advisor: [[Q8]] Also, we do not offer interest-free overdraft facilities on entry-level international accounts during your first academic term.
Student: [[Q9]] Fair enough. If my overseas card gets swallowed or lost over the weekend, is there a direct helpline? Call our twenty-four-hour fraud desk, whose number is printed on the back of your welcome folder.
Advisor: [[Q10]] Let us book your document verification slot for tomorrow afternoon at 14:30 right here at Counter Three.`,
        questions: [
          {
            id: 'cd_listening_p4_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'SANTOSO',
            explanation: 'Spelled S-A-N-T-O-S-O.'
          },
          {
            id: 'cd_listening_p4_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Detail needed on university verification letter: residential ______ address',
            correctAnswer: 'TERM',
            explanation: 'The letter must display the residential term address.'
          },
          {
            id: 'cd_listening_p4_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Which campus office must stamp the paper verification letter?',
            correctAnswer: 'REGISTRY DESK',
            explanation: 'A stamped sheet signed by the Registry Desk is mandatory.'
          },
          {
            id: 'cd_listening_p4_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Handling charge on inbound international wire transfers: £ ______',
            correctAnswer: 'SIX',
            explanation: 'Inbound wire transfers carry a six-pound flat fee.'
          },
          {
            id: 'cd_listening_p4_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Working days required for contactless debit card delivery: ______',
            correctAnswer: 'FOUR',
            explanation: 'Debit cards arrive within four working days.'
          },
          {
            id: 'cd_listening_p4_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'App feature recommended for tracking spending: instant ______ notifications',
            correctAnswer: 'TRANSACTION',
            explanation: 'Advisor recommends switching on instant transaction notifications.'
          },
          {
            id: 'cd_listening_p4_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Maximum daily cash machine withdrawal limit:',
            correctAnswer: 'THREE HUNDRED POUNDS',
            explanation: 'ATMs dispense up to three hundred pounds per day.'
          },
          {
            id: 'cd_listening_p4_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What policy applies to overdrafts during the first term?',
            options: [
              'A. Interest-free overdrafts are unavailable during term one',
              'B. Students receive an automatic £500 interest-free overdraft',
              'C. Overdrafts apply only with a UK homeowner guarantor',
              'D. Overdraft limits double after thirty days'
            ],
            correctAnswer: 'A',
            explanation: 'Entry-level accounts carry no interest-free overdraft in term one.'
          },
          {
            id: 'cd_listening_p4_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Where can the student find the emergency lost-card helpline?',
            options: [
              'A. Inside the campus student union handbook',
              'B. Posted on the branch entrance door',
              'C. Sent automatically by SMS after approval',
              'D. Printed on the back of the welcome folder'
            ],
            correctAnswer: 'D',
            explanation: 'The 24-hour fraud desk number is on the back of the welcome folder.'
          },
          {
            id: 'cd_listening_p4_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'When and where is the follow-up verification appointment scheduled?',
            options: [
              'A. Today at 16:00, Counter One',
              'B. Tomorrow at 14:30, Counter Three',
              'C. Monday at 09:30, Senate House',
              'D. Friday at 11:00, International Lounge'
            ],
            correctAnswer: 'B',
            explanation: 'Scheduled for tomorrow at 14:30 at Counter Three.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: International Welcome Week Briefing',
        audioScenario:
          'An international student coordinator outlines arrival paperwork, police/immigration checks, mobile SIM activation, and weekend city tours.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: International Welcome Auditorium]
Coordinator: A very warm welcome to all 650 new arrivals joining us from sixty-two countries this September!
Coordinator: [[Q11]] Before attending academic department welcomes, please scan your biometric residence permit at the Sports Hall check-in desks before Friday at four.
Coordinator: [[Q12]] If you brought cash to settle initial accommodation deposits, do not carry large sums across town—our campus cashiers accept debit transfers in Hall Two.
Coordinator: [[Q13]] Next door in Booth Five, volunteers are handing out free pre-activated SIM cards loaded with ten gigabytes of starter data for your first month.
Coordinator: [[Q14]] Several students asked about part-time work restrictions: full-time degree visas normally allow up to twenty hours weekly during taught semester weeks.
Coordinator: [[Q15]] To open utility or mobile contracts smoothly, remember to obtain a stamped proof-of-address certificate from our online student document hub.
Coordinator: [[Q16]] For weekend settling-in support, our Saturday supermarket shuttle coach departs from the Fountain Square bus bay every forty-five minutes.
Coordinator: [[Q17]] On Sunday morning, student ambassadors will lead walking heritage tours ending with a complimentary afternoon tea inside the Conservatory Garden.
Coordinator: [[Q18]] Be alert against telephone scams: legitimate customs or tax officials will never demand instant wire payments or cryptocurrency vouchers over the phone.
Coordinator: [[Q19]] Need winter coats or kitchen kettles cheaply? Visit Tuesday’s sustainable reuse market, where graduating alumni donated gently used appliances at low prices.
Coordinator: [[Q20]] Finally, download the official SafeCampus map app so emergency blue-light patrol phones and night bus stops show directly on your screen.`,
        questions: [
          {
            id: 'cd_listening_p4_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Deadline for biometric permit scan at the Sports Hall: Friday at ______',
            correctAnswer: 'FOUR',
            explanation: 'Desks close on Friday at four.'
          },
          {
            id: 'cd_listening_p4_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Where can students safely settle accommodation deposits on campus?',
            correctAnswer: 'HALL TWO',
            explanation: 'Campus cashiers accept debit transfers in Hall Two.'
          },
          {
            id: 'cd_listening_p4_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Starter mobile data included on Booth Five SIM cards: ______ gigabytes',
            correctAnswer: 'TEN',
            explanation: 'Free SIM cards include ten gigabytes of data.'
          },
          {
            id: 'cd_listening_p4_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'How many hours per week may degree-visa students usually work during term time?',
            options: [
              'A. Twenty hours',
              'B. Fifteen hours',
              'C. Ten hours',
              'D. Twenty-eight hours'
            ],
            correctAnswer: 'A',
            explanation: 'Degree visas typically permit up to twenty hours weekly during term.'
          },
          {
            id: 'cd_listening_p4_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Source for stamped address proof needed for utility contracts: student ______ hub',
            correctAnswer: 'DOCUMENT',
            explanation: 'Available from the online student document hub.'
          },
          {
            id: 'cd_listening_p4_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'The Saturday supermarket shuttle leaves Fountain Square every ______ minutes.',
            correctAnswer: 'FORTY-FIVE',
            explanation: 'Coaches depart every forty-five minutes.'
          },
          {
            id: 'cd_listening_p4_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Destination serving tea at the end of Sunday’s walking tour: ______ Garden',
            correctAnswer: 'CONSERVATORY',
            explanation: 'Tours conclude inside the Conservatory Garden.'
          },
          {
            id: 'cd_listening_p4_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What fraud warning does the coordinator give new arrivals?',
            options: [
              'A. Avoid using free public Wi-Fi inside cafés',
              'B. Destroy bank receipts before discarding rubbish',
              'C. Never show passports to private landlords',
              'D. Real officials never demand instant phone wire or crypto payments'
            ],
            correctAnswer: 'D',
            explanation: 'Legitimate officials never demand immediate phone transfers or crypto vouchers.'
          },
          {
            id: 'cd_listening_p4_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Day of the alumni secondhand appliance market: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'The sustainable reuse market happens on Tuesday.'
          },
          {
            id: 'cd_listening_p4_lq20',
            number: 20,
            type: 'multiple_choice',
            questionText: 'Which locations appear inside the SafeCampus map app?',
            options: [
              'A. Cheap grocery markets and laundrettes',
              'B. Lecture theater seating charts',
              'C. Emergency patrol phones and night bus stops',
              'D. Bank ATM exchange rate comparisons'
            ],
            correctAnswer: 'C',
            explanation: 'The app maps emergency blue-light patrol phones and night bus stops.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Cross-Border Remittance Fees',
        audioScenario:
          'Finance students Nadia and Ben consult Dr. Verma about their research paper comparing international student tuition remittance fees.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Finance Research Tutorial]
Dr. Verma: Good morning Nadia and Ben. Walk me through your findings on cross-border tuition payment costs.
Nadia: [[Q21]] Our sample of ninety international undergraduates showed that hidden exchange-rate markups cost students nearly three times more than advertised transfer fees.
Ben: [[Q22]] Traditional correspondent bank wires averaged four percent total cost, whereas specialized fintech platforms kept spreads closer to zero point six percent.
Dr. Verma: Surprising difference. Why did nearly half your respondents still rely on high-street bank wires despite higher costs?
Nadia: [[Q23]] Trust and unfamiliarity played a role, yet the main barrier was university finance portals rejecting third-party payer names on digital receipts.
Dr. Verma: Good catch! Did delivery delays differ notably across world regions?
Ben: [[Q24]] Wires routed from South America cleared in up to six business days because intermediate clearing banks held funds for manual compliance audits.
Dr. Verma: [[Q25]] When presenting fee savings in Chapter Four, normalize every remittance against exact mid-market interbank rates timestamped at dispatch.
Nadia: [[Q26]] We pulled historical hourly rate tables from the central bank repository so our calculations avoid cherry-picking favorable currency dips.
Ben: [[Q27]] Next week we want to interview university bursary managers about accepting multi-currency virtual card settlements directly.
Dr. Verma: [[Q28]] Ask specifically whether automated reconciliation software can match cryptic twelve-digit payment references without manual ledger sorting.
Nadia: [[Q29]] Also, Dr. Verma suggested trimming our literature review section on cryptocurrency stablecoins because no surveyed UK university accepted them for tuition.
Dr. Verma: [[Q30]] Keep one brief explanatory paragraph on stablecoin settlement limits, then devote the spare word count to bank fee transparency regulations.`,
        questions: [
          {
            id: 'cd_listening_p4_lq21',
            number: 21,
            type: 'short_answer',
            questionText: 'What hidden factor cost students three times more than upfront wire fees?',
            correctAnswer: 'EXCHANGE-RATE MARKUPS',
            explanation: 'Hidden exchange-rate markups tripled the real cost.'
          },
          {
            id: 'cd_listening_p4_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Average total cost percentage for traditional correspondent bank wires: ______ percent',
            correctAnswer: 'FOUR',
            explanation: 'Traditional bank wires averaged four percent.'
          },
          {
            id: 'cd_listening_p4_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What was the biggest obstacle preventing students from using cheaper fintech platforms?',
            options: [
              'A. Poor mobile app translation quality',
              'B. University payment portals rejecting third-party payer names',
              'C. Daily transaction limits under £1,000',
              'D. Lack of customer phone helplines'
            ],
            correctAnswer: 'B',
            explanation: 'University portals frequently rejected third-party payer names.'
          },
          {
            id: 'cd_listening_p4_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Reason intermediate clearing banks delayed South American transfers: compliance ______',
            correctAnswer: 'AUDITS',
            explanation: 'Funds were held for manual compliance audits.'
          },
          {
            id: 'cd_listening_p4_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Every fee benchmark must be compared against the mid-market ______ rate at dispatch.',
            correctAnswer: 'INTERBANK',
            explanation: 'Normalize transfers against mid-market interbank rates.'
          },
          {
            id: 'cd_listening_p4_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Source used for unbiased historical hourly currency data: central bank ______',
            correctAnswer: 'REPOSITORY',
            explanation: 'Data was pulled from the central bank repository.'
          },
          {
            id: 'cd_listening_p4_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'Who are Nadia and Ben planning to interview next week?',
            options: [
              'A. Overseas embassy scholarship officers',
              'B. Visa financial compliance inspectors',
              'C. High-street foreign exchange cashiers',
              'D. University bursary managers'
            ],
            correctAnswer: 'D',
            explanation: 'They plan to interview university bursary managers.'
          },
          {
            id: 'cd_listening_p4_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Length of payment reference strings bursary software must match: ______ digits',
            correctAnswer: 'TWELVE',
            explanation: 'Check whether software matches twelve-digit payment references.'
          },
          {
            id: 'cd_listening_p4_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which digital payment topic are they scaling down in the literature review?',
            correctAnswer: 'CRYPTOCURRENCY STABLECOINS',
            explanation: 'No surveyed UK university accepted cryptocurrency stablecoins.'
          },
          {
            id: 'cd_listening_p4_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'What topic should receive the newly freed word count?',
            options: [
              'A. Bank fee transparency regulations',
              'B. Historical gold standard treaties',
              'C. Student credit card debt defaults',
              'D. Tax exemptions for university endowments'
            ],
            correctAnswer: 'A',
            explanation: 'Dr. Verma suggests focusing on bank fee transparency regulations.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The History of Student Scholarships and Trust Banking',
        audioScenario:
          'An economics professor lectures on how medieval student chests and modern scholarship endowments evolved to finance cross-border education.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Economic History of Higher Education]
Lecturer: International scholarly mobility is far older than modern jet aviation, and financing travelers safely across kingdoms demanded early banking ingenuity.
Lecturer: [[Q31]] In medieval Paris and Oxford, travelling scholars confronted robbery along highways, prompting guilds to accept sealed letters of credit issued by hometown merchants.
Lecturer: [[Q32]] Locally, needy scholars relied on campus loan chests—ironbound strongboxes where books or silver goblets were pledged as temporary collateral without interest.
Lecturer: [[Q33]] Because church usury bans barred direct interest profits, trustees recovered administrative costs solely through overdue penalties on unclaimed pledges.
Lecturer: [[Q34]] During the Renaissance, mercantile cities launched formal civic stipends, obliging recipients to return home and teach grammar or law for five years.
Lecturer: [[Q35]] A monumental leap arrived in the twentieth century when national agencies created portable travel grants backed by bilateral diplomatic treaties.
Lecturer: [[Q36]] Yet cross-border currency controls of the 1960s meant foreign scholars often struggled to convert stipends until central banks issued specialized educational allowances.
Lecturer: [[Q37]] Modern digital payment clearing networks eliminate physical travelers cheques, yet sudden currency devaluations still erode fixed foreign scholarships overnight.
Lecturer: [[Q38]] To shelter students from exchange-rate shocks, progressive foundation boards now denominate living allowances in local host-city price indexes rather than home currency.
Lecturer: [[Q39]] Simultaneously, automated anti-money-laundering algorithms sometimes flag legitimate family tuition remittances simply because seasonal tuition spikes mirror irregular commercial flows.
Lecturer: [[Q40]] Ultimately, seamless international campus integration depends just as heavily on transparent financial plumbing as on visa reciprocity and academic credit recognition.`,
        questions: [
          {
            id: 'cd_listening_p4_lq31',
            number: 31,
            type: 'short_answer',
            questionText: 'What merchant document protected traveling medieval students from carrying coins?',
            correctAnswer: 'LETTERS OF CREDIT',
            explanation: 'Guilds accepted sealed letters of credit issued by merchants.'
          },
          {
            id: 'cd_listening_p4_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Items pledged as interest-free collateral in medieval chests: books or silver ______',
            correctAnswer: 'GOBLETS',
            explanation: 'Books or silver goblets served as temporary collateral.'
          },
          {
            id: 'cd_listening_p4_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'How did medieval loan chest trustees fund running expenses without charging interest?',
            options: [
              'A. Royal customs taxes on parchment',
              'B. Overdue fines on unredeemed pledges',
              'C. Annual fees paid by town bakers',
              'D. Mandatory donations at graduation'
            ],
            correctAnswer: 'B',
            explanation: 'Costs were recovered via overdue penalties on unclaimed pledges.'
          },
          {
            id: 'cd_listening_p4_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Years Renaissance stipend holders agreed to teach back home: ______',
            correctAnswer: 'FIVE',
            explanation: 'Recipients returned to teach for five years.'
          },
          {
            id: 'cd_listening_p4_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Twentieth-century portable grants expanded through bilateral ______ treaties.',
            correctAnswer: 'DIPLOMATIC',
            explanation: 'Backed by bilateral diplomatic treaties.'
          },
          {
            id: 'cd_listening_p4_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Decade when currency controls hampered student stipend conversions: ______',
            correctAnswer: '1960S',
            explanation: '1960s currency controls restricted stipend conversion.'
          },
          {
            id: 'cd_listening_p4_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which paper travel payment tool disappeared with digital clearing networks?',
            correctAnswer: 'TRAVELERS CHEQUES',
            explanation: 'Digital networks eliminated physical travelers cheques.'
          },
          {
            id: 'cd_listening_p4_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How do modern foundations shield scholars against sudden exchange-rate drops?',
            options: [
              'A. Paying tuition strictly in home-country bonds',
              'B. Requiring students to open offshore gold accounts',
              'C. Issuing allowances linked to local host-city price indexes',
              'D. Splitting grants across three commercial banks'
            ],
            correctAnswer: 'C',
            explanation: 'Stipends are indexed to local host-city price indexes.'
          },
          {
            id: 'cd_listening_p4_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Automated screening issue that accidentally freezes legitimate tuition wires: seasonal ______',
            correctAnswer: 'SPIKES',
            explanation: 'Seasonal tuition spikes resemble irregular commercial patterns.'
          },
          {
            id: 'cd_listening_p4_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'According to the lecturer, what underpins successful international education alongside visas?',
            options: [
              'A. Cheaper airline routes',
              'B. Shared single currencies across continents',
              'C. Transparent financial plumbing and credit recognition',
              'D. Privatized dormitory banking kiosks'
            ],
            correctAnswer: 'C',
            explanation: 'Depends on transparent financial plumbing alongside credit recognition and visas.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 5: Public Transport Card & Regional Train Subsidies
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p5',
    testNumber: 5,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 5: Public Transport Card & Regional Train Subsidies',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Public Transport Card & Regional Train Subsidies.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Commuter Smartcard & Railcard Application',
        audioScenario:
          'A student living off campus calls the regional transit helpline to compare season bus passes and student rail discounts.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Metro Transit Customer Line]
Agent: Good morning, Severn Valley Transit Enquiries, Marcus speaking. How can I help?
Passenger: Hi Marcus, I just moved out to Clifton Ridge and want to set up a discounted bus and rail travel pass for my college commute.
Agent: [[Q1]] Gladly. First, which residential fare zone covers Clifton Ridge? Let me check—yes, it sits just inside Fare Zone Three.
Passenger: Okay. Could I buy the combined Student Hopper smartcard online or at the station kiosk?
Agent: [[Q2]] Your first plastic card must be issued in person at Central Bus Terminal Booth B so our staff can verify your student identity card.
Passenger: [[Q3]] What is the current semester pass price covering all buses and trams across Zones One through Three? The sixteen-week term pass costs 195 pounds.
Passenger: And does that card include regional commuter rail journeys to the science park station?
Agent: [[Q4]] No, trains are ticketed separately, though purchasing an annual Student Railcard reduces peak and off-peak train fares by thirty percent.
Passenger: [[Q5]] Got it. Is there an administrative fee for uploading a photograph onto the Railcard portal? A one-time digital Railcard costs 24 pounds for twelve months.
Passenger: [[Q6]] Wait—does the thirty-percent discount apply on early-morning weekday commuter services before nine o'clock? Yes, provided the minimum single fare exceeds twelve pounds.
Passenger: [[Q7]] Where do I register my smartcard serial number in case I drop it on a train? Register inside our MetroGo app so we can freeze a lost balance immediately and issue a replacement.
Agent: [[Q8]] When tapping in at suburban railway platforms without ticket barriers, always tap the yellow reader post before boarding or inspectors issue an automatic penalty fare.
Passenger: [[Q9]] One more question: how late does the night express bus N4 run back toward Clifton Ridge on Fridays? Friday and Saturday departures run hourly until 02:30 from Platform Nine.
Agent: [[Q10]] Lastly, remember that term passes stay inactive during the four-week Christmas recess unless you top up pay-as-you-go credit separately.`,
        questions: [
          {
            id: 'cd_listening_p5_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Transit fare zone covering Clifton Ridge: Zone ______',
            correctAnswer: 'THREE',
            explanation: 'Clifton Ridge sits inside Fare Zone Three.'
          },
          {
            id: 'cd_listening_p5_lq2',
            number: 2,
            type: 'short_answer',
            questionText: 'Where must first-time applicants collect their plastic smartcard?',
            correctAnswer: 'BOOTH B',
            explanation: 'Staff verify ID at Central Bus Terminal Booth B.'
          },
          {
            id: 'cd_listening_p5_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Price of the sixteen-week bus and tram term pass: £ ______',
            correctAnswer: '195',
            explanation: 'The sixteen-week pass costs 195 pounds.'
          },
          {
            id: 'cd_listening_p5_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Train ticket savings offered by the Student Railcard: ______ percent',
            correctAnswer: 'THIRTY',
            explanation: 'Reduces train fares by thirty percent.'
          },
          {
            id: 'cd_listening_p5_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Annual cost of a digital Student Railcard: £ ______',
            correctAnswer: '24',
            explanation: 'A twelve-month digital Railcard costs 24 pounds.'
          },
          {
            id: 'cd_listening_p5_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Minimum fare threshold required for morning peak rail discounts:',
            correctAnswer: 'TWELVE POUNDS',
            explanation: 'Discounts apply before 9 AM when single fares exceed twelve pounds.'
          },
          {
            id: 'cd_listening_p5_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Mobile platform used to freeze lost card balances: ______ app',
            correctAnswer: 'METROGO',
            explanation: 'Register serial numbers inside the MetroGo app.'
          },
          {
            id: 'cd_listening_p5_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What must passengers do at open suburban platforms lacking ticket gates?',
            options: [
              'A. Tap the yellow reader post before stepping aboard',
              'B. Purchase a paper slip from the train conductor',
              'C. Show their mobile app only upon arrival',
              'D. Stand in the front carriage near the driver'
            ],
            correctAnswer: 'A',
            explanation: 'Tap the yellow reader post prior to boarding to avoid penalty fares.'
          },
          {
            id: 'cd_listening_p5_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Until what hour does the N4 express night bus operate on weekends?',
            options: [
              'A. Midnight exactly',
              'B. 01:15',
              'C. 03:45',
              'D. 02:30'
            ],
            correctAnswer: 'D',
            explanation: 'Friday and Saturday N4 buses depart until 02:30 from Platform Nine.'
          },
          {
            id: 'cd_listening_p5_lq10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why might a term pass fail to open bus readers in late December?',
            options: [
              'A. Smartcard chips expire annually on December 15',
              'B. Passes pause during the four-week Christmas break',
              'C. Buses switch to cash-only holiday fares',
              'D. Student IDs must be re-verified after exams'
            ],
            correctAnswer: 'B',
            explanation: 'Term passes remain inactive over the four-week Christmas recess.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Upgrades to the Regional Electric Rail Corridor',
        audioScenario:
          'A regional transport spokesperson briefs community passengers on new electric train timetables, bike carriage rules, and station accessibility upgrades.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Rail Corridor Public Briefing]
Spokesperson: Thank you for attending today’s preview of next month’s electric commuter service along the Severn Valley rail branch.
Spokesperson: [[Q11]] Replacing diesel units with quiet battery-hybrid trains cuts journey times between Riverside Junction and the university terminus by eleven minutes.
Spokesperson: [[Q12]] Accessibility has guided every station rebuild: tactile brass paving strips and step-free platform ramps now run continuously from car parks to carriage doors.
Spokesperson: [[Q13]] Passengers bringing full-sized bicycles aboard weekday morning trains must book a free hook inside Coach Three via our website before travel.
Spokesperson: [[Q14]] Folding commuter scooters and compact Brompton bicycles remain welcome at all hours without reservations provided they fold beneath luggage racks.
Spokesperson: [[Q15]] Inside stations, old paper departure posters are making way for solar-powered e-ink display boards showing live carriage crowding estimates.
Spokesperson: [[Q16]] Commuters transferring straight from regional rail onto campus electric buses benefit from through-ticketing, shaving fifteen percent off split single fares.
Spokesperson: [[Q17]] Beware during the opening fortnight of works: Sunday engineering maintenance means rail-replacement coaches will cover stops west of Meadowbrook until November ninth.
Spokesperson: [[Q18]] Cyclists riding to rural stations will find forty new heated drying lockers installed beside each covered bike compound.
Spokesperson: [[Q19]] If severe winter storms cancel any scheduled peak service for over thirty minutes, smartcard holders automatically receive delay-repay credit straight to their wallet within two days.
Spokesperson: [[Q20]] Maps showing exact station bus-bay transfers are available on the green leaflet table beside the auditorium exit.`,
        questions: [
          {
            id: 'cd_listening_p5_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Time saved between Riverside Junction and campus by new electric trains: ______ minutes',
            correctAnswer: 'ELEVEN',
            explanation: 'New battery-hybrid units cut trips by eleven minutes.'
          },
          {
            id: 'cd_listening_p5_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which tactile feature was added from car parks to carriage doors?',
            correctAnswer: 'BRASS PAVING STRIPS',
            explanation: 'Tactile brass paving strips and step-free ramps run continuously.'
          },
          {
            id: 'cd_listening_p5_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Carriage containing reserved hooks for full-sized bicycles: Coach ______',
            correctAnswer: 'THREE',
            explanation: 'Bicycle hooks are reserved inside Coach Three.'
          },
          {
            id: 'cd_listening_p5_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What rule governs folding commuter bikes on peak services?',
            options: [
              'A. Allowed anytime without booking if stored under luggage racks',
              'B. Prohibited between seven and ten in the morning',
              'C. Require a five-pound luggage supplement ticket',
              'D. Restricted exclusively to the driver’s rear vestibule'
            ],
            correctAnswer: 'A',
            explanation: 'Folding bikes travel anytime unbooked when tucked under luggage racks.'
          },
          {
            id: 'cd_listening_p5_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Display technology replacing paper timetables on rural platforms: ______ boards',
            correctAnswer: 'E-INK',
            explanation: 'Solar-powered e-ink display boards show live crowding.'
          },
          {
            id: 'cd_listening_p5_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Combined rail-and-bus through-ticketing trims ______ percent off separate ticket prices.',
            correctAnswer: 'FIFTEEN',
            explanation: 'Through-ticketing shaves fifteen percent off split single fares.'
          },
          {
            id: 'cd_listening_p5_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Station marking the start of Sunday bus-replacement works until Nov 9: ______',
            correctAnswer: 'MEADOWBROOK',
            explanation: 'Coaches cover stops west of Meadowbrook on Sundays.'
          },
          {
            id: 'cd_listening_p5_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What new cyclist facility was added at rural rail compounds?',
            options: [
              'A. Free puncture repair stations',
              'B. Attended valet bicycle check desks',
              'C. Overnight battery charging sockets',
              'D. Forty heated drying lockers'
            ],
            correctAnswer: 'D',
            explanation: 'Forty heated drying lockers were installed beside bike compounds.'
          },
          {
            id: 'cd_listening_p5_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Minimum delay triggering automatic smartcard compensation credit:',
            correctAnswer: 'THIRTY MINUTES',
            explanation: 'Delays exceeding thirty minutes trigger automatic wallet credit.'
          },
          {
            id: 'cd_listening_p5_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Colour of leaflets displaying bus-bay transfer maps: ______',
            correctAnswer: 'GREEN',
            explanation: 'Maps sit on the green leaflet table at the exit.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Evaluating Rural Bus Subsidy Policy',
        audioScenario:
          'Geography students Tarek and Chloe meet Dr. Evans to analyze passenger elasticity following a regional youth bus fare cap.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Transport Economics Supervision]
Dr. Evans: Hello Tarek and Chloe. Have your municipal fare-cap statistics yielded clear behavioral patterns yet?
Tarek: [[Q21]] Yes—cutting single village bus fares to two pounds lifted off-peak youth ridership by thirty-eight percent over six months.
Chloe: [[Q22]] Yet commuter morning peak usage scarcely shifted, showing that infrequent timetables matter far more than ticket cost for nine-to-five workers.
Dr. Evans: Crucial distinction between price elasticity and service frequency! Which rural demographic expanded fastest?
Tarek: [[Q23]] Part-time hospital cleaners and college apprentices living outside the ring road gained the most weekly savings.
Dr. Evans: [[Q24]] How did you control for rising petrol prices that occurred simultaneously during spring? We added regional diesel pump indices as a multivariate control variable in our regression.
Chloe: [[Q25]] One surprise from our roadside interviews was driver frustration: paper voucher scanning slowed boarding dwell times by twenty seconds per stop.
Dr. Evans: [[Q26]] Did bus operators adjust timetable slack to compensate? Only two rural routes padded running times—most fell steadily behind schedule during market days.
Tarek: [[Q27]] Looking at subsidy sustainability, county council audits warn that emergency central grants expire next April unless local parking levies fill the gap.
Chloe: [[Q28]] Should we include a fiscal projection chart comparing congestion-charge revenue against raised parking fees in Section Five?
Dr. Evans: [[Q29]] Yes, keep the comparison tightly focused on medium market towns like Stroud rather than borrowing London congestion statistics that distort local scale.
Tarek: [[Q30]] Got it—we will pull final county treasury tables tomorrow morning and circulate our revised draft on Wednesday.`,
        questions: [
          {
            id: 'cd_listening_p5_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Increase in off-peak youth bus trips after the £2 fare cap: ______ percent',
            correctAnswer: 'THIRTY-EIGHT',
            explanation: 'Off-peak youth ridership rose thirty-eight percent.'
          },
          {
            id: 'cd_listening_p5_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'Why did morning peak commuter ridership scarcely grow despite cheaper fares?',
            options: [
              'A. Parking near train stations remained free',
              'B. Mobile smartcards failed on rural buses',
              'C. Infrequent timetables mattered more than ticket prices',
              'D. Employers already paid employee fuel stipends'
            ],
            correctAnswer: 'C',
            explanation: 'Chloe notes service frequency mattered more than price for full-time commuters.'
          },
          {
            id: 'cd_listening_p5_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'Besides hospital cleaners, which group gained the greatest weekly fare savings?',
            correctAnswer: 'COLLEGE APPRENTICES',
            explanation: 'Hospital cleaners and college apprentices gained the most.'
          },
          {
            id: 'cd_listening_p5_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'External price factor controlled in the regression: regional ______ pump indices',
            correctAnswer: 'DIESEL',
            explanation: 'They controlled for regional diesel pump prices.'
          },
          {
            id: 'cd_listening_p5_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Slow paper voucher checks extended boarding ______ times by twenty seconds per stop.',
            correctAnswer: 'DWELL',
            explanation: 'Paper voucher checks slowed boarding dwell times.'
          },
          {
            id: 'cd_listening_p5_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Weekly days when unadjusted rural bus timetables slipped badly: ______ days',
            correctAnswer: 'MARKET',
            explanation: 'Most routes fell behind schedule during market days.'
          },
          {
            id: 'cd_listening_p5_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What financial risk looms over the rural bus subsidy next April?',
            options: [
              'A. Rail companies will claim monopoly damages',
              'B. Temporary central government grants will expire',
              'C. Bus driver unions plan a regional strike',
              'D. Smartcard licensing fees will double'
            ],
            correctAnswer: 'B',
            explanation: 'Central emergency grants expire next April without replacement revenue.'
          },
          {
            id: 'cd_listening_p5_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Local revenue source compared against congestion charges in Section Five: ______ levies',
            correctAnswer: 'PARKING',
            explanation: 'Comparing congestion charges against raised parking levies.'
          },
          {
            id: 'cd_listening_p5_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'Why does Dr. Evans warn against quoting London congestion data?',
            options: [
              'A. London data has not been publicly audited',
              'B. The dissertation word count cannot fit another appendix',
              'C. London excludes electric buses from charges',
              'D. London scale distorts comparisons for medium market towns'
            ],
            correctAnswer: 'D',
            explanation: 'London scale distorts analysis of smaller market towns.'
          },
          {
            id: 'cd_listening_p5_lq30',
            number: 30,
            type: 'short_answer',
            questionText: 'When will Tarek and Chloe circulate their revised draft?',
            correctAnswer: 'WEDNESDAY',
            explanation: 'They plan to circulate the draft on Wednesday.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Integrated Fare Systems & Mobility-as-a-Service',
        audioScenario:
          'An urban transport researcher lectures on the technical and political barriers to unified transit smartcards across metropolitan networks.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Urban Transit Integration Lecture]
Lecturer: Every bustling metropolis dreams of effortless seamless travel—tapping one payment token seamlessly from tram to ferry to suburban rail.
Lecturer: [[Q31]] For nearly a century, fragmented municipal franchises forced commuters to queue separately for cardboard tram booklets, railway season passes, and bus tokens.
Lecturer: [[Q32]] Hamburg broke that deadlock in 1965 by pioneering the world’s first integrated metropolitan transport union, pooling ticket revenue across rival operators.
Lecturer: [[Q33]] The technical backbone shifted dramatically in 1997 when Hong Kong rolled out Octopus, replacing brittle magnetic paper stripes with contactless radio-frequency chips.
Lecturer: [[Q34]] Contactless cards accelerated station turnstile throughput past forty passengers per minute, relieving bottlenecks at rush-hour escalators.
Lecturer: [[Q35]] Today, open-loop banking protocols let riders tap everyday bank cards directly, sparing city transit authorities millions in proprietary plastic printing costs.
Lecturer: [[Q36]] Beyond infrastructure, fare capping guarantees fairness: casual travelers automatically stop paying once their daily trips match a full day-pass rate.
Lecturer: [[Q37]] Yet true cross-modal Mobility-as-a-Service—bundling e-scooters, municipal bike hire, and trains into one monthly subscription—has stumbled surprisingly often in practice.
Lecturer: [[Q38]] Private micromobility startups frequently guard live scooter availability data fiercely, fearing shared platforms will strip away brand loyalty.
Lecturer: [[Q39]] Equally troubling is equity: moving wholly cashless locks out unbanked residents, senior citizens without smartphones, and occasional rural visitors.
Lecturer: [[Q40]] Successful metropolitan transit agencies therefore pair smartphone wallets with affordable anonymous preloaded plastic cards stocked at neighborhood corner shops.`,
        questions: [
          {
            id: 'cd_listening_p5_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Early fare format used on trams before integration: ______ booklets',
            correctAnswer: 'CARDBOARD',
            explanation: 'Commuters queued separately for cardboard tram booklets.'
          },
          {
            id: 'cd_listening_p5_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'City that launched the first integrated transit revenue union in 1965: ______',
            correctAnswer: 'HAMBURG',
            explanation: 'Hamburg pioneered the first integrated metropolitan union.'
          },
          {
            id: 'cd_listening_p5_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'What unreliable card medium did Hong Kong’s 1997 Octopus chip replace?',
            correctAnswer: 'MAGNETIC PAPER STRIPES',
            explanation: 'Contactless chips replaced brittle magnetic paper stripes.'
          },
          {
            id: 'cd_listening_p5_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Station gate throughput unlocked by contactless chips: over ______ riders per minute',
            correctAnswer: 'FORTY',
            explanation: 'Turnstile throughput exceeded forty passengers per minute.'
          },
          {
            id: 'cd_listening_p5_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'What major operational saving comes from open-loop bank card acceptance?',
            options: [
              'A. Saving millions in proprietary transit card production',
              'B. Eliminating train conductors altogether',
              'C. Removing fare zone boundaries across suburbs',
              'D. Reducing electricity demand at metro gates'
            ],
            correctAnswer: 'A',
            explanation: 'Open-loop bank cards spare agencies millions in proprietary plastic printing.'
          },
          {
            id: 'cd_listening_p5_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Daily ______ guarantees occasional travelers never pay above a standard day-pass ceiling.',
            correctAnswer: 'FARE CAPPING',
            explanation: 'Fare capping stops charges once daily trips reach a day-pass ceiling.'
          },
          {
            id: 'cd_listening_p5_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Payment model struggling to unify scooters, bikes, and rail: monthly ______',
            correctAnswer: 'SUBSCRIPTION',
            explanation: 'Bundled monthly subscriptions have struggled in practice.'
          },
          {
            id: 'cd_listening_p5_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why do private scooter firms hesitate to join unified city apps?',
            options: [
              'A. Battery charging docks cannot handle heavy loads',
              'B. Sharing data may erode customer brand loyalty',
              'C. Local laws forbid two-wheeled electric rentals',
              'D. Credit card processing fees become unpredictable'
            ],
            correctAnswer: 'B',
            explanation: 'Firms fear shared platforms will strip away brand loyalty.'
          },
          {
            id: 'cd_listening_p5_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which vulnerable resident group is excluded when buses go strictly cashless without plastic backups?',
            correctAnswer: 'UNBANKED RESIDENTS',
            explanation: 'Fully cashless policies exclude unbanked residents and non-smartphone seniors.'
          },
          {
            id: 'cd_listening_p5_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How do equitable cities protect riders without smartphones or bank cards?',
            options: [
              'A. Offering free weekday travel on suburban buses',
              'B. Installing coin boxes beside driver seats permanently',
              'C. Selling anonymous preloaded plastic cards at neighborhood corner shops',
              'D. Issuing printed vouchers at city libraries'
            ],
            correctAnswer: 'C',
            explanation: 'Agencies stock affordable anonymous preloaded plastic cards at local shops.'
          }
        ]
      }
    ]
  })
];
