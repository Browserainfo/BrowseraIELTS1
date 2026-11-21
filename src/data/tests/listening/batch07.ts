/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_07: TestItem[] = [
  // =========================================================================
  // MOCK 1: City Community Center & Wildlife Habitat Talk
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m1',
    testNumber: 1,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 1: City Community Center & Wildlife Habitat Talk',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on City Community Center & Wildlife Habitat Talk.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking a Room at the City Community Center',
        audioScenario:
          'A neighborhood association secretary phones Elmwood City Community Center to book an evening lecture room for a local wildlife talk.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: City Community Center Bookings]
Clerk: Good morning, Elmwood City Community Center, Samira speaking. How may I assist you?
Caller: Hi Samira, I am arranging an evening guest slide talk on urban hedgehogs and need to reserve an accessible hall for about fifty guests.
Clerk: [[Q1]] Gladly! Let me note your organizer details first—could you spell your surname? Yes, it is Penrose, spelled P-E-N-R-O-S-E.
Clerk: [[Q2]] Thank you, Ms. Penrose. Our Oakleaf Seminar Room seats up to sixty guests comfortably and rents out on Thursday evenings between seven and nine thirty for sixty-eight pounds per session.
Caller: [[Q3]] Sixty-eight sounds very fair. Does that hourly fee include access to the ceiling digital projector and lapel microphones? Built-in projectors and cordless hand mics are included free, though hiring an HDMI adapter laptop clicker plus technician setup adds a flat twelve pounds!
Caller: [[Q4]] Perfect—add the clicker setup too please. Can our treasurer serve simple boxed chocolate biscuits and herbal tea inside Oakleaf Seminar Room? External tea urns stay neatly inside the lobby pantry corridor, whereas cold drinks in spill-proof jugs and dry wrapped snacks sit welcome inside classrooms!
Clerk: [[Q5]] Good to know! Where should elderly wheelchair-using neighbors park cars close to step-free entrances? Tell drivers to enter via Maple Gate Rear Lane where four broad blue-badge spaces sit three metres beside automatic glass courtyard doors!
Caller: [[Q6]] Splendid! Also, if forty local leaflets advertise the event ahead, may our club clip an A3 printed flyer inside your street notice window? Drop two printed colour posters at Reception Desk One before Monday noon—our caretaker updates street glass frames cleanly every week!
Caller: [[Q7]] Wait—do evening hirers stack folding wooden chairs onto wheeled racks afterwards? Yes, slide stacked chairs cleanly into the mirrored alcove behind Stage Curtain Left before locking lights!
Clerk: [[Q8]] Remember our acoustic neighborhood rule too: evening events must wind down music or mic speeches sharply at 21:30 so apartment residents sleeping upstairs face zero late hall rattle!
Caller: [[Q9]] Easily done—we finish Q&A by nine sharp. What notice window cancels room hire cleanly without losing the twenty-pound holding deposit? Cancellations notified at least seven calendar days prior earn full deposit refunds straight to charity cards!
Clerk: [[Q10]] Let me lock Thursday next fortnight cleanly under Civic Booking Code CC-104!`,
        questions: [
          {
            id: 'cd_listening_m1_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Event organizer surname: ______',
            correctAnswer: 'PENROSE',
            explanation: 'Spelled P-E-N-R-O-S-E.'
          },
          {
            id: 'cd_listening_m1_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Thursday evening rental charge for the Oakleaf Seminar Room: £ ______',
            correctAnswer: 'SIXTY-EIGHT',
            explanation: 'Rents for sixty-eight pounds per evening.'
          },
          {
            id: 'cd_listening_m1_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Optional extra fee covering clicker hardware and technician setup: £ ______',
            correctAnswer: 'TWELVE',
            explanation: 'Technician setup and clicker add twelve pounds.'
          },
          {
            id: 'cd_listening_m1_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Where must hot tea urns remain instead of entering Oakleaf Seminar Room?',
            correctAnswer: 'LOBBY PANTRY CORRIDOR',
            explanation: 'Hot urns remain inside the lobby pantry corridor.'
          },
          {
            id: 'cd_listening_m1_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Rear vehicle entrance providing blue-badge bays three metres from automatic doors: ______ Gate',
            correctAnswer: 'MAPLE',
            explanation: 'Enter via Maple Gate Rear Lane.'
          },
          {
            id: 'cd_listening_m1_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Day and deadline hour to hand posters into Reception for glass street displays: ______ noon',
            correctAnswer: 'MONDAY',
            explanation: 'Drop posters before Monday noon.'
          },
          {
            id: 'cd_listening_m1_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Where should stacked folding chairs be placed after the meeting finishes?',
            correctAnswer: 'MIRRORED ALCOVE',
            explanation: 'Tuck stacked racks into the mirrored alcove behind Stage Curtain Left.'
          },
          {
            id: 'cd_listening_m1_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Why must all amplified audio end precisely at 21:30?',
            options: [
              'A. Caretaker security locks main gate doors at ten',
              'B. Local streetlamp power timers switch off car-park lamps',
              'C. Night cleaning crews begin vacuuming hallways at 21:35',
              'D. Apartment households live directly overhead on upper floors'
            ],
            correctAnswer: 'D',
            explanation: 'Residents live directly upstairs above the community hall.'
          },
          {
            id: 'cd_listening_m1_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What condition refunds the £20 deposit in full if the wildlife talk cancels?',
            options: [
              'A. Notifying the center at least seven calendar days early',
              'B. Rebooking within the same calendar month',
              'C. Presenting a printed medical doctor letter',
              'D. Switching the room fee to gift shop vouchers'
            ],
            correctAnswer: 'A',
            explanation: 'Cancellations seven calendar days ahead restore full deposits.'
          },
          {
            id: 'cd_listening_m1_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Thursday room hire booking code: ______',
            correctAnswer: 'CC-104',
            explanation: 'Locked under Civic Booking Code CC-104.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Welcoming Citizens to the Urban Meadow Reserve',
        audioScenario:
          'A community ranger introduces local visitors to a newly restored inner-city canal wildlife corridor and pond sanctuary.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Urban Wildlife Reserve Orientation]
Ranger: Good morning neighbors! Step across our brand-new timber footbridge into Kingfisher Canal Meadow—reclaimed from abandoned Victorian railway sidings!
Ranger: [[Q11]] Notice the dusty white gravel paths weaving between cowslips: crushed recycled building limestone keeps winter boots spotless while naturally raising soil alkalinity that chalk-loving wildflower seeds adore!
Ranger: [[Q12]] Glance across our southern shallow pond shelf: rather than mowing marsh reeds cleanly off like park grass, rangers leave ragged winter stems standing until March so tiny hibernating lacewings shelter warmly inside hollow stalks!
Ranger: [[Q13]] Beside Willow Corner stands our tiered Brick Hibernaculum—essentially a hollow sunlit stone hotel crammed loosely with rotting apple logs and perforated tiles welcoming sleepy winter slow-worms and frogs!
Ranger: [[Q14]] Remember strict pet rules along wooden pond boardwalks: keep energetic dogs cleanly clipped onto fixed short leads rather than splashing into shallow tadpole reed zones!
Ranger: [[Q15]] Watch children eagerly around feeding time too: tossing soggy white bread crusts into canal shallows rots water oxygen and triggers dangerous duck wing deformities called angel-wing—bring crisp thawed frozen peas or crushed oats instead!
Ranger: [[Q16]] High overhead along concrete canal bridge arches, twenty narrow wooden crevices house summer maternity roosts for tiny urban pipistrelle bats devouring three thousand midges nightly!
Ranger: [[Q17]] On alternate Saturday mornings between ten and noon, volunteer families join scything parties cutting lush tall grass gently by hand rather than roaring petrol strimmers—cutting grass cleanly away builds wild orchid meadows smoothly!
Ranger: [[Q18]] Beware touching bright tall purple-spotted hemlock growing near muddy ditch bottoms—every hollow green stem carries lethal plant toxins, though fenced timber railings mark wet ditches clearly!
Ranger: [[Q19]] Report rare otter footprints or colorful kingfisher darts inside our waterproof chalk tally notebook bolted beneath the Wooden Bird Hide window!
Ranger: [[Q20]] Pick up illustrated wildflower spotter wheels from the painted green postbox beside Gate Three before walking out!`,
        questions: [
          {
            id: 'cd_listening_m1_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Recycled path stone creating clean drainage and alkaline flower soil: crushed ______',
            correctAnswer: 'LIMESTONE',
            explanation: 'Crushed recycled building limestone suits chalk wildflowers.'
          },
          {
            id: 'cd_listening_m1_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which garden insects shelter safely inside unmown hollow marsh stems until March?',
            correctAnswer: 'LACEWINGS',
            explanation: 'Tiny hibernating lacewings winter inside hollow stems.'
          },
          {
            id: 'cd_listening_m1_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Reptiles sheltered alongside frogs inside the rotting-log Brick Hibernaculum: ______',
            correctAnswer: 'SLOW-WORMS',
            explanation: 'Welcomes sleepy slow-worms and frogs.'
          },
          {
            id: 'cd_listening_m1_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What pet control rule protects shallow canal tadpole zones?',
            options: [
              'A. Dogs may swim strictly east of the wooden bridge',
              'B. Dogs must stay clipped on short fixed leads away from reed shallows',
              'C. Dogs are barred completely during spring breeding months',
              'D. Owners must attach small warning collar bells'
            ],
            correctAnswer: 'B',
            explanation: 'Keep dogs on short fixed leads off shallow boardwalk reed zones.'
          },
          {
            id: 'cd_listening_m1_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Instead of stale bread crusts, visitors should feed ducks crushed oats or thawed frozen ______.',
            correctAnswer: 'PEAS',
            explanation: 'Bring thawed frozen peas or crushed oats.'
          },
          {
            id: 'cd_listening_m1_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Flying nocturnal mammals occupying twenty narrow crevices under bridge arches: ______ bats',
            correctAnswer: 'PIPISTRELLE',
            explanation: 'Houses summer maternity roosts for pipistrelle bats.'
          },
          {
            id: 'cd_listening_m1_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Traditional quiet hand cutting tool volunteers use instead of petrol strimmers:',
            correctAnswer: 'SCYTHING',
            explanation: 'Families join quiet scything parties.'
          },
          {
            id: 'cd_listening_m1_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why must visitors stay behind wooden fences near muddy canal ditches?',
            options: [
              'A. Deep peat sinks boots swiftly underwater',
              'B. Nesting swans charge visitors near water bends',
              'C. Wild poisonous hemlock grows inside the wet ditch margins',
              'D. Underground electricity conduits remain uninsulated'
            ],
            correctAnswer: 'C',
            explanation: 'Lethal toxic hemlock grows near muddy ditch bottoms.'
          },
          {
            id: 'cd_listening_m1_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Observation book tucked under the Bird Hide window: waterproof ______ tally notebook',
            correctAnswer: 'CHALK',
            explanation: 'Waterproof chalk tally notebook sits under the Bird Hide window.'
          },
          {
            id: 'cd_listening_m1_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Gate number beside the green postbox holding wildflower spotter wheels: Gate ______',
            correctAnswer: 'THREE',
            explanation: 'Located beside Gate Three.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Designing Backyard Hedgehog Highway Citizen Surveys',
        audioScenario:
          'Ecology undergraduates Nina and Carl review urban mammal tunnel data collected by 120 neighborhood families with Dr. Reid.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Citizen Ecology Research Seminar]
Dr. Reid: Welcome Nina and Carl. Did organizing 120 suburban terrace households into cutting backyard fence gaps actually boost hedgehog visits cleanly?
Nina: [[Q21]] Dramatic rebound! Within ten rainy summer weeks, gardens linked across four consecutive fence tunnels recorded triple the paw-print frequency of isolated walled lawns!
Carl: [[Q22]] However, nearly twenty percent of enthusiastic residents placed noisy mechanical camera traps aimed inches above shiny glass garden water bowls—triggering empty midnight false shots from fluttering pond ripples!
Dr. Reid: Classic amateur trigger pitfall! How did you fix volunteer citizen-science setups quickly without driving round knocking on doors?
Nina: [[Q23]] Carl filmed one crisp ninety-second phone clip showing knee-height wooden tent angles aiming cleanly down shaded hedge base alleys away from swaying shrub leaves!
Dr. Reid: [[Q24]] Smart instructional design! Did domestic neighborhood pet cats chase wild hedgehogs away from shared backyard feeding stations? Rarely—motion clips confirmed bulky domestic cats routinely sniffed cautiously and stepped calmly aside while bristled hedgehogs chewed mealworms calmly!
Carl: [[Q25]] One genuine ecological snag surfaced in pesticide logs: well-meaning flower growers still scattering blue slug pellets along vegetable plots poisoned earthworm diets silently—skewing garden health maps!
Dr. Reid: [[Q26]] Flag garden slug-pellet households clearly as a distinct covariate inside Chapter Four so chemical impacts separate cleanly from physical concrete fence barriers!
Nina: [[Q27]] Also surprising: modern artificial plastic roll-out fake lawns drove zero insect visits compared to patchy ragged dandelion grass borders!
Dr. Reid: [[Q28]] Quantify earthworm drop-off percentages under plastic turf concisely inside your municipal planning summary!
Carl: [[Q29]] For Tuesday’s Civic Ecology Festival talk, should we bring raw motion-camera video loops or colorful street-connectivity maps?
Dr. Reid: [[Q30]] Play twenty seconds of an awkward hedgehog squeezing triumphantly through a square brick arch—heartwarming footage rallies skeptical neighbors twice quicker than dry density grids!`,
        questions: [
          {
            id: 'cd_listening_m1_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Duration over which four linked fenced gardens tripled hedgehog pawprints: ______ weeks',
            correctAnswer: 'TEN',
            explanation: 'Observed within ten rainy summer weeks.'
          },
          {
            id: 'cd_listening_m1_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'What triggered false midnight motion camera captures in 20% of volunteers’ yards?',
            options: [
              'A. Swaying tall ornamental bamboos in winds',
              'B. Neighborhood streetlamps flickering on timers',
              'C. Shimmering water ripples in shallow glass bowls',
              'D. Passing suburban delivery vans'
            ],
            correctAnswer: 'C',
            explanation: 'Cameras aimed near glass bowls fired on fluttering water ripples.'
          },
          {
            id: 'cd_listening_m1_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'What brief visual aid corrected volunteer camera angling remotely?',
            correctAnswer: 'PHONE CLIP',
            explanation: 'Carl filmed a ninety-second phone clip demonstrating proper angles.'
          },
          {
            id: 'cd_listening_m1_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'High-protein dried snack chewed calmly by hedgehogs alongside domestic neighborhood cats: ______',
            correctAnswer: 'MEALWORMS',
            explanation: 'Hedgehogs chewed mealworms calmly while cats stepped back.'
          },
          {
            id: 'cd_listening_m1_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Blue chemical garden ______ pellets poisoned natural earthworm food webs along vegetable beds.',
            correctAnswer: 'SLUG',
            explanation: 'Scattering blue slug pellets poisoned earthworm diets.'
          },
          {
            id: 'cd_listening_m1_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Analytical factor category flagging slug-pellet gardens separately inside Chapter Four: ______',
            correctAnswer: 'COVARIATE',
            explanation: 'Flag as a distinct statistical covariate.'
          },
          {
            id: 'cd_listening_m1_lq27',
            number: 27,
            type: 'short_answer',
            questionText: 'Which modern yard landscaping trend yielded zero nocturnal insect foraging visits?',
            correctAnswer: 'FAKE LAWNS',
            explanation: 'Artificial plastic roll-out fake lawns drove zero insect visits.'
          },
          {
            id: 'cd_listening_m1_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Targeted public readers awaiting artificial turf earthworm figures: ______ planners',
            correctAnswer: 'MUNICIPAL',
            explanation: 'Summarize cleanly inside the municipal planning report.'
          },
          {
            id: 'cd_listening_m1_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Day scheduled for presenting at the Civic Ecology Festival: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Festival talk runs Tuesday.'
          },
          {
            id: 'cd_listening_m1_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Dr. Reid advise opening the public festival talk with 20 seconds of tunnel video?',
            options: [
              'A. Endearing live footage recruits neighborhood cooperation far faster than charts',
              'B. Videos verify camera trap night-vision lens clarity',
              'C. Festival organizers limit PowerPoint slide text ratios',
              'D. Video noise masks quiet microphone hall hum'
            ],
            correctAnswer: 'A',
            explanation: 'Heartwarming tunnel video rallies skeptical neighbors twice faster.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Acoustic Adaptation of Urban Songbirds',
        audioScenario:
          'An evolutionary behavioral ecologist lectures on how urban sparrows and blackbirds shift vocal pitch, song speed, and dawn timing to outshout city traffic.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Urban Bioacoustics Lecture]
Lecturer: Stepping off a noisy downtown bus, pedestrians casually admire chirping songbirds perched atop traffic signals—rarely suspecting those feathery vocalists are executing real-time evolutionary signal warfare!
Lecturer: [[Q31]] Across woodland forests, low-pitched bass trills travel far smoothly around oak tree trunks—yet inside asphalt metropolises, heavy diesel lorry engines flood ambient skies below two kilohertz with rumbling acoustic fog!
Lecturer: [[Q32]] Pioneering Dutch ornithologist Hans Slabbekoorn discovered around 2003 that male great tits nesting near roaring highways sang dramatically higher minimum-frequency notes than woodland cousins barely three miles outside town!
Lecturer: [[Q33]] Raising fundamental vocal pitch lifts romantic territorial melodies cleanly above low truck rumbles, ensuring distant females catch courtship invitations clearly across bustling intersections!
Lecturer: [[Q34]] Remarkably, careful cross-fostering nest experiments proved urban birds don’t solely inherit mutant high-pitch genes—nestlings actively imitate clearer unobstructed treble phrases heard overhead while discarding muffled low verses masked by traffic!
Lecturer: [[Q35]] Beyond pitch shifts, European robins bathed beneath harsh glowing shopping-center LED streetlamps shifted entire singing timetables drastically—serenading empty midnight alleys hours ahead of normal dawn choruses strictly to escape daytime rush-hour roar!
Lecturer: [[Q36]] Yet vocal adaptation carries hidden physiological price tags: squeaking unnaturally high treble exhausts tiny syrinx muscles faster and unintentionally portrays males as smaller weaker rivals to stubborn competitors!
Lecturer: [[Q37]] Stranger still, sudden pandemic spring traffic lockdowns in 2020 triggered a stunning acoustic experiment inside San Francisco bays: almost instantaneously, quieted streets allowed golden-crowned sparrows to drop pitch back downward into lush low melodies absent since 1970!
Lecturer: [[Q38]] Not every feathered resident manages flexible improvisation: specialized forest wrens carrying rigid genetically locked song scripts simply vanish permanently whenever suburban ring roads split quiet valleys!
Lecturer: [[Q39]] Encouragingly, subtle low-cost streetscape changes—such as planting dense evergreen privet buffers and resurfacing coarse granite alleys with porous quiet asphalt—restore lost mid-band bird hearing radius swiftly!
Lecturer: [[Q40]] Listening closely at dawn thus turns urban city sparrows into sensitive living acoustic barometers measuring genuine sonic livability for wildlife and weary human ears alike.`,
        questions: [
          {
            id: 'cd_listening_m1_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Frequency ceiling below which urban heavy lorry traffic floods air with acoustic noise: ______ kilohertz',
            correctAnswer: 'TWO',
            explanation: 'Engine noise swamps airwaves below two kilohertz.'
          },
          {
            id: 'cd_listening_m1_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Year Hans Slabbekoorn published findings on pitch-shifting urban great tits: ______',
            correctAnswer: '2003',
            explanation: 'Discovered around 2003.'
          },
          {
            id: 'cd_listening_m1_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What survival advantage drives highway songbirds to sing at higher pitches?',
            options: [
              'A. Higher notes bounce cleanly off glass tower façades',
              'B. Higher notes use less breath inside dry smog air',
              'C. Predatory hawks hear higher whistles poorly',
              'D. Higher pitches sit audibly above low-frequency lorry engine rumble'
            ],
            correctAnswer: 'D',
            explanation: 'Lifts courtship songs cleanly above low truck rumble.'
          },
          {
            id: 'cd_listening_m1_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Action nestlings perform to adopt unobstructed treble phrases heard overhead: ______',
            correctAnswer: 'IMITATE',
            explanation: 'Nestlings actively imitate clearer treble phrases.'
          },
          {
            id: 'cd_listening_m1_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Bright nighttime shopping-street lights prompted urban ______ to sing cleanly during quiet midnight hours.',
            correctAnswer: 'ROBINS',
            explanation: 'European robins shifted singing to quiet midnight alleys.'
          },
          {
            id: 'cd_listening_m1_lq36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What hidden social disadvantage do males face when singing high above truck rumble?',
            options: [
              'A. Winter cold cracks delicate syrinx membranes faster',
              'B. Rivals mistake shrill singers for smaller, weaker competitors',
              'C. Higher pitches attract nocturnal urban owls',
              'D. Females migrate away toward quieter suburban orchards'
            ],
            correctAnswer: 'B',
            explanation: 'Unnaturally high voices unintentionally signal smaller body size to rivals.'
          },
          {
            id: 'cd_listening_m1_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'City where 2020 quiet lockdown streets let sparrows recover rich 1970s low tones immediately: ______',
            correctAnswer: 'SAN FRANCISCO',
            explanation: 'Recorded across quieted San Francisco bays.'
          },
          {
            id: 'cd_listening_m1_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Rigid forest bird species disappearing quickly when roads enter quiet valleys: ______',
            correctAnswer: 'WRENS',
            explanation: 'Specialized forest wrens carry fixed genetic song scripts.'
          },
          {
            id: 'cd_listening_m1_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Besides planting thick hedges, which quiet paving material restores bird song reach?',
            correctAnswer: 'POROUS QUIET ASPHALT',
            explanation: 'Evergreen buffers and porous quiet asphalt restore hearing radius.'
          },
          {
            id: 'cd_listening_m1_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What broader civic role do urban songbird choruses play in the lecturer’s closing message?',
            options: [
              'A. Acting as living acoustic barometers of healthy city soundscapes',
              'B. Controlling street mosquito swarms organically',
              'C. Guiding seasonal municipal park watering schedules',
              'D. Proving trees survive downtown exhaust plumes'
            ],
            correctAnswer: 'A',
            explanation: 'Sparrows serve as sensitive living acoustic barometers of sonic livability.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 2: University Housing Office & Ocean Acoustics Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m2',
    testNumber: 2,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 2: University Housing Office & Ocean Acoustics Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on University Housing Office & Ocean Acoustics Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Postgraduate Family Apartment Application',
        audioScenario:
          'A visiting doctoral researcher telephones the University Family Housing Office to apply for a two-bedroom terrace flat near campus.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: University Housing Allocation Desk]
Officer: Good afternoon, University Family & Postgraduate Housing Office, Clara speaking. How may I assist?
Applicant: Hi Clara, I start my marine physics fellowship next month alongside my spouse and toddler and want to reserve a quiet campus-owned flat.
Officer: [[Q1]] Warm welcome! Let me pull up available family terraces—what is your surname? Yes, it is Lindquist, spelled L-I-N-D-Q-U-I-S-T.
Officer: [[Q2]] Got you cleanly, Lindquist! We currently hold a sunny ground-floor two-bedroom garden flat on Cedar Courtyard priced at 890 pounds monthly—heating and municipal council tax already bundled in cleanly!
Applicant: [[Q3]] Fantastic! Is there a safe covered outdoor shed storing our child cargo-bike trailer near Cedar Courtyard? Every courtyard block provides keyed timber cycle bays, though motorized scooters stay outside along Perimeter Fence Six!
Applicant: [[Q4]] Understood—pedals only! Does the tenancy require a full six-week private deposit upfront, or reduced postgraduate terms? Campus leases collect a capped one-month security retainer of 890 pounds refunded via bank wire within ten days of spotless key handover!
Officer: [[Q5]] Nice fairness! Are major kitchen white goods—washing machine and frost-free fridge—installed cleanly before landing? Yes, electric induction cookers and fridge-freezers come fitted; just pack personal bed duvets, kettle, and dinner crockery!
Applicant: [[Q6]] Wait—our three-year-old starts nursery nearby; how far does Cedar Courtyard sit from Campus Early Years Preschool? Literally five minutes walking past pedestrian duck-pond gates along completely car-free shaded pavements!
Officer: [[Q7]] Perfect! What if sudden academic fieldwork sends me overseas next August—can families exit leases two months ahead cleanly? Providing written sixty-day academic release notice alongside your head-of-department travel letter waves standard early-break penalties cleanly!
Applicant: [[Q8]] Huge peace of mind! When do maintenance caretakers fit child window safety catches onto bedroom sashes? Every Cedar ground apartment ships with brass restrictor latches pre-locked to ten-centimetre vents—never unscrew brass pins manually!
Officer: [[Q9]] Should anyone visit overnight by car during move-in Saturday, grab temporary pink dashboard drop-off permits at Porter Desk B free for ninety minutes!
Applicant: [[Q10]] Thanks Clara! Which housing reference code uploads cleanly onto the encrypted visa sponsorship portal tonight? Use Allocation Tag UH-420.`,
        questions: [
          {
            id: 'cd_listening_m2_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Researcher surname: ______',
            correctAnswer: 'LINDQUIST',
            explanation: 'Spelled L-I-N-D-Q-U-I-S-T.'
          },
          {
            id: 'cd_listening_m2_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Monthly bundled rent for Cedar Courtyard two-bedroom flat: £ ______',
            correctAnswer: '890',
            explanation: 'Rent is 890 pounds monthly including heating and council tax.'
          },
          {
            id: 'cd_listening_m2_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Which type of vehicle must stay outdoors along Perimeter Fence Six?',
            correctAnswer: 'MOTORIZED SCOOTERS',
            explanation: 'Motorized scooters remain outside along Perimeter Fence Six.'
          },
          {
            id: 'cd_listening_m2_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Working days to refund the £890 security retainer after spotless key return: ______ days',
            correctAnswer: 'TEN',
            explanation: 'Refunded within ten days of key handover.'
          },
          {
            id: 'cd_listening_m2_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Bedding item incoming tenants must supply themselves: ______',
            correctAnswer: 'DUVETS',
            explanation: 'Bring personal bed duvets, kettle, and crockery.'
          },
          {
            id: 'cd_listening_m2_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Walking time separating Cedar Courtyard from the Campus Preschool:',
            correctAnswer: 'FIVE MINUTES',
            explanation: 'Five walking minutes via car-free paths.'
          },
          {
            id: 'cd_listening_m2_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What avoids early lease exit charges if overseas research intervenes next August?',
            options: [
              'A. Subletting the flat to a departmental PhD student',
              'B. Requesting an automated transfer inside the housing portal',
              'C. Forfeiting half of the refundable monthly retainer',
              'D. Giving sixty days written notice plus a supervisor department letter'
            ],
            correctAnswer: 'D',
            explanation: 'Sixty-day notice plus department head travel letter waives penalties.'
          },
          {
            id: 'cd_listening_m2_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Safety opening gap locked onto bedroom sashes by brass latches: ______-centimetre',
            correctAnswer: 'TEN',
            explanation: 'Pre-locked safely to ten-centimetre vents.'
          },
          {
            id: 'cd_listening_m2_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'How long may move-in cars stay with free pink permits from Porter Desk B?',
            options: [
              'A. Forty-five minutes',
              'B. Sixty minutes',
              'C. Ninety minutes',
              'D. Two hours'
            ],
            correctAnswer: 'C',
            explanation: 'Permits allow ninety minutes free drop-off.'
          },
          {
            id: 'cd_listening_m2_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Housing allocation code uploaded onto visa portal tonight: ______',
            correctAnswer: 'UH-420',
            explanation: 'Use Allocation Tag UH-420.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Moving Into Postgraduate Campus Residences',
        audioScenario:
          'A university accommodation officer welcomes newly arrived international families to Cedar Village amenities and heating guides.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Cedar Village Orientation]
Officer: Welcome families to Cedar Postgraduate Village! Let us walk past five essential courtyard services ensuring your first cold British autumn stays comfortable.
Officer: [[Q11]] First, look directly ahead at our brick Utility Valve Wall: learn how to bleed trapped air pockets gently out of cast-iron bedroom radiators using small brass square radiator keys hanging beside every kitchen pantry peg!
Officer: [[Q12]] Remember also: never drape soaked damp wool sweaters directly atop electric corridor storage heaters—blocking air convection louvres risks household overheating alarms overnight!
Officer: [[Q13]] Outside near Stone Archway West sits our heated Toy & Prams Buggy Locker Shed: leave muddy twin strollers safely chained downstairs rather than hauling wet wheels up narrow wooden apartment stairs!
Officer: [[Q14]] Inside Cedar Community Laundrette beside Stair Four, quiet heat-pump tumble dryers spin silently twenty-four hours—yet kindly scoop out dense damp lint traps cleanly after every wash load!
Officer: [[Q15]] For young toddlers burning rainy Saturday cabin fever, our bright ground-floor Toy Lending Library lends wooden train tracks and picture board books free for fortnightly checkouts!
Officer: [[Q16]] Beware one tricky garbage rule along underground bin chutes: flatten corrugated Amazon cardboard cartons thinly before feeding hatches—jammed square flaps trigger Sunday maintenance callout fees split across floor lobbies!
Officer: [[Q17]] On alternate Tuesday evenings, English-practice Tea Circles meet warmly inside Cedar Sunroom so accompanying graduate partners make friendly local friends effortlessly!
Officer: [[Q18]] Check our green outdoor Compost Exchange Box beside Community Raised Herbs: trade kitchen banana peels freely anytime for sweet fresh mint or thyme twigs for evening stews!
Officer: [[Q19]] If parcel drivers miss apartment doors mid-afternoon, never ask neighbors across corridors indefinitely—scan digital barcode passes neatly onto heated Smart-Parcel Wall Lockers beside Main Gate Arch!
Officer: [[Q20]] Pick up illustrated radiator-bleeding pocket guides neatly stacked beside Porter Mail Slot Two right before heading upstairs!`,
        questions: [
          {
            id: 'cd_listening_m2_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Small brass tool hanging in kitchen pantries to fix cold radiator air pockets: radiator ______',
            correctAnswer: 'KEYS',
            explanation: 'Brass radiator keys hang beside pantry pegs.'
          },
          {
            id: 'cd_listening_m2_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why must residents avoid drying wet sweaters directly on electric hallway heaters?',
            options: [
              'A. Damp dye transfers permanently onto cream wall paint',
              'B. Blocking ventilation louvres risks overnight overheating alarms',
              'C. Corridors fail municipal narrow fire-width checks',
              'D. Clothes dry unevenly near stairwell draughts'
            ],
            correctAnswer: 'B',
            explanation: 'Blocking air louvres risks overheating alarms.'
          },
          {
            id: 'cd_listening_m2_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Where should families park wet strollers instead of carrying them upstairs?',
            correctAnswer: 'LOCKER SHED',
            explanation: 'Leave muddy strollers inside the heated Locker Shed.'
          },
          {
            id: 'cd_listening_m2_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'Users finishing quiet 24-hour dryers must always clear damp ______ screens cleanly.',
            correctAnswer: 'LINT',
            explanation: 'Scoop out dense damp lint traps cleanly.'
          },
          {
            id: 'cd_listening_m2_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Checkout duration for free wooden toys and picture books: ______ checkouts',
            correctAnswer: 'FORTNIGHTLY',
            explanation: 'Lent free for fortnightly checkouts.'
          },
          {
            id: 'cd_listening_m2_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'What happens if tenants shove unflattened wide cardboard boxes down bin chutes?',
            options: [
              'A. Recycling collectors dump the whole chute load to landfill',
              'B. Basement sorting bins lock until Monday mornings',
              'C. Automatic alarms alert building fire marshals',
              'D. Jammed chute flaps incur emergency callout fees split across lobbies'
            ],
            correctAnswer: 'D',
            explanation: 'Jammed chutes trigger Sunday maintenance fees split across flats.'
          },
          {
            id: 'cd_listening_m2_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Evening social sessions connecting accompanying partners over tea: ______ Circles',
            correctAnswer: 'TEA',
            explanation: 'English-practice Tea Circles meet Tuesday evenings.'
          },
          {
            id: 'cd_listening_m2_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'Which fresh cooking herbs can families snip free beside the Compost Box?',
            correctAnswer: 'MINT OR THYME',
            explanation: 'Cut sweet fresh mint or thyme twigs.'
          },
          {
            id: 'cd_listening_m2_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Missed delivery storage wall beside Main Gate Arch: Smart-______ Lockers',
            correctAnswer: 'PARCEL',
            explanation: 'Scan codes onto heated Smart-Parcel Wall Lockers.'
          },
          {
            id: 'cd_listening_m2_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Porter slot holding illustrated heating guides before walking upstairs: Mail Slot ______',
            correctAnswer: 'TWO',
            explanation: 'Beside Porter Mail Slot Two.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring Acoustic Comfort in Timber Student Housing',
        audioScenario:
          'Building engineering postgraduates Maya and Isaac discuss floor-impact noise damping across cross-laminated timber halls with Dr. Singh.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Timber Acoustics Seminar]
Dr. Singh: Come in Maya and Isaac. Did living inside the new Cross-Laminated Timber dormitory expose real acoustic trade-offs versus old brick halls?
Maya: [[Q21]] Dramatic findings! Exposed honey-pine timber beams warmed room ambiance beautifully and sequestered carbon cleanly, yet light rigid pine slabs transmitted heavy heel thuds straight down into ceilings below like booming drumheads!
Isaac: [[Q22]] Standard laboratory tapping machines caught high-pitched heel clicks nicely, yet utterly missed annoying eighty-hertz bass thumps caused by barefoot dorm residents padding softly across rooms at two in the morning!
Dr. Singh: Famous low-frequency timber weakness! Did pouring three-centimetre dry silica sand screed over floating neoprene mats silence thumping footsteps cheaply?
Maya: [[Q23]] Stunning improvement—heavy dry sand beds damped booming fifty-hertz resonances by eleven decibels instantly while remaining wholly dry and removable for future building disassembly!
Dr. Singh: [[Q24]] Smart circular engineering! How did you isolate genuine ceiling thumps from exterior late-night courtyard laughter on bathroom ventilation logs? We paired synchronized indoor floor accelerometers directly against outdoor courtyard window mics, trimming external crowd transients automatically in MATLAB!
Isaac: [[Q25]] One unexpected human discovery popped up inside occupant diaries: students forgave quiet audible footsteps swiftly whenever hallway chatter sounded soft and warm, yet went crazy over sharp erratic fridge motor rattles humming through shared timber kitchen spines!
Dr. Singh: [[Q26]] Crucial distinction between predictable intermittent footsteps versus continuous low tonal hum—highlight appliance isolation pads inside Chapter Five recommendations!
Maya: [[Q27]] Speaking of kitchen plumbing, plastic PVC waste drain pipes hidden behind pale pine cupboard fronts hissed loudly during midnight showers until plumbers wrapped pipes cleanly inside heavy mass-loaded vinyl sleeves!
Dr. Singh: [[Q28]] Note mass-loaded vinyl retrofit thickness neatly in Table Three so estate surveyors budget upgrades accurately across Phase Two blocks!
Isaac: [[Q29]] For Thursday’s Structural Timber Colloquium, should we present full floor structural span blueprints or play synthesized thump audio comparisons?
Dr. Singh: [[Q30]] Play low-frequency headphone recordings comparing bare CLT floors beside sand-screed mockups—engineers remember visceral chest-thump differences permanently!`,
        questions: [
          {
            id: 'cd_listening_m2_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Musical analogy describing how rigid lightweight pine ceilings transmitted footsteps downward: booming ______',
            correctAnswer: 'DRUMHEADS',
            explanation: 'Pine slabs transmitted steps like booming drumheads.'
          },
          {
            id: 'cd_listening_m2_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Footwear condition causing annoying 80-Hz bass thumps missed by standard tapping rigs: ______ padding',
            correctAnswer: 'BAREFOOT',
            explanation: 'Barefoot residents padding softly caused 80-Hz bass thumps.'
          },
          {
            id: 'cd_listening_m2_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Inexpensive dry heavy floor filler dropping 50-Hz boom by 11 decibels: silica ______',
            correctAnswer: 'SAND',
            explanation: 'Three-centimetre dry silica sand screed damped resonances.'
          },
          {
            id: 'cd_listening_m2_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Software platform used by Isaac and Maya to filter outdoor courtyard voices automatically: ______',
            correctAnswer: 'MATLAB',
            explanation: 'Trimmed courtyard noise automatically in MATLAB.'
          },
          {
            id: 'cd_listening_m2_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Residents felt far less annoyed by gentle footsteps than continuous tonal rattles from kitchen ______.',
            correctAnswer: 'FRIDGE',
            explanation: 'Sharp erratic fridge motor rattles drove complaints.'
          },
          {
            id: 'cd_listening_m2_lq26',
            number: 26,
            type: 'short_answer',
            questionText: 'Cheap Chapter Five hardware addition silencing noisy vibrating appliances:',
            correctAnswer: 'ISOLATION PADS',
            explanation: 'Recommend appliance isolation pads in Chapter Five.'
          },
          {
            id: 'cd_listening_m2_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Wrap material quietening noisy PVC midnight bathroom drainage pipes: mass-loaded ______',
            correctAnswer: 'VINYL',
            explanation: 'Wrapped PVC drains inside mass-loaded vinyl sleeves.'
          },
          {
            id: 'cd_listening_m2_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'Why must exact vinyl retrofit thicknesses appear inside Table Three?',
            options: [
              'A. University estate surveyors need precise figures to price Phase Two buildings',
              'B. Fire marshals approve only dual-layer sleeves',
              'C. Pipe diameters vary widely between bathrooms',
              'D. Timber contractors supply free leftover vinyl rolls'
            ],
            correctAnswer: 'A',
            explanation: 'Helps estate surveyors budget upgrades accurately for Phase Two.'
          },
          {
            id: 'cd_listening_m2_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Day scheduled for presenting at the Structural Timber Colloquium: ______',
            correctAnswer: 'THURSDAY',
            explanation: 'Colloquium presentation runs Thursday.'
          },
          {
            id: 'cd_listening_m2_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'How will listeners experience the acoustic contrast during Thursday’s talk?',
            options: [
              'A. Walking across two physical mock floorboards in the foyer',
              'B. Listening on headphones to bare timber versus sand-damped bass thumps',
              'C. Inspecting vibration graphs projected on dual screens',
              'D. Watching slow-motion footage of steel hammer rigs'
            ],
            correctAnswer: 'B',
            explanation: 'Play low-frequency headphone recordings comparing both floors.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Science of Ocean Acoustics & Undersea Sound Channels',
        audioScenario:
          'A physical oceanographer delivers a formal lecture explaining why deep seawater carries whale calls and acoustic telemetry cleanly across entire ocean basins.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Ocean Acoustics Lecture]
Lecturer: Beneath crashing waves, murky sunlight dies away completely within two hundred vertical metres—turning Earth’s vast ocean basins permanently dark while turning acoustic sound waves into Nature’s premier underwater superhighway!
Lecturer: [[Q31]] Unlike sunlight photons absorbed rapidly by seawater plankton, pressure sound waves travel nearly five times faster through liquid ocean—racing at fifteen hundred metres per second compared to sluggish air!
Lecturer: [[Q32]] Remarkably, seawater acoustic velocity bends gently along two competing physical levers: scorching sunlit surface warmth accelerates sound briskly downward, whereas crushing deep abyssal water pressure squeezes sound back upward briskly near ocean floors!
Lecturer: [[Q33]] Right between sunny warmth above and freezing crushing depths below sits a magic minimum-speed horizontal corridor around one thousand metres deep—discovered during 1944 by oceanographer Maurice Ewing as the SOFAR sound channel!
Lecturer: [[Q34]] Inside that SOFAR duct, escaping sound rays bend continuously back inward whenever grazing warmer roofs or denser deep basements—acting cleanly like optical glass fibre cables guiding whisper pings twenty thousand kilometres across oceans without hitting rocky beds!
Lecturer: [[Q35]] Baleen fin and blue whales exploited this astonishing acoustic physics millions of years ahead of naval submarines—dropping booming twenty-hertz bass pulses straight down ocean channels to coordinate seasonal migrations half a hemisphere apart!
Lecturer: [[Q36]] Sadly, giant steel container freighters turning humming propellers relentlessly across shipping lanes flood precisely those same low frequencies between ten and one hundred hertz—shrinking modern baleen whale calling territory by eighty percent since 1950!
Lecturer: [[Q37]] Crucially, oceanographers measure underwater climate warming directly through acoustic tomography: because warmer water speeds acoustic travel time measurably faster, timing crisp subsea sound beacons across Pacific trenches tracks deep-sea temperature rise effortlessly!
Lecturer: [[Q38]] Even underwater seismic hydrophone arrays originally built covertly for submarine defense now save marine wildlife smoothly—recording distant undersea volcanic eruptions and illegal dynamite reef blasts automatically in real time!
Lecturer: [[Q39]] Hopeful engineering redesigns already curb shipping roar: reshaping streamlined five-blade propeller tips slashes damaging vacuum cavitation bubble explosions while saving container fleets twelve percent bunker diesel simultaneously!
Lecturer: [[Q40]] Protecting oceanic acoustic stillness therefore safeguards marine migration highways just as urgently as stopping coastal plastic nets or industrial thermal warming.`,
        questions: [
          {
            id: 'cd_listening_m2_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Approximate acoustic wave velocity through liquid ocean water: ______ metres per second',
            correctAnswer: 'FIFTEEN HUNDRED',
            explanation: 'Sound races through ocean at fifteen hundred metres per second.'
          },
          {
            id: 'cd_listening_m2_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which deep abyssal force speeds acoustic rays sharply upward near ocean trenches?',
            correctAnswer: 'WATER PRESSURE',
            explanation: 'Crushing deep water pressure increases acoustic speed below.'
          },
          {
            id: 'cd_listening_m2_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Depth near 1944’s discovered SOFAR minimum-speed sound duct: one ______ metres',
            correctAnswer: 'THOUSAND',
            explanation: 'Corridor sits around one thousand metres deep.'
          },
          {
            id: 'cd_listening_m2_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why do signals inside the SOFAR duct travel 20,000 km with barely any loss?',
            options: [
              'A. Deep cold water freezes surface ripples flat',
              'B. Dissolved seabed salt amplifies low-pitch harmonics',
              'C. Refracted rays curve gently back inside the layer, skipping rough seabeds',
              'D. Whale pods echo signals between neighboring canyons'
            ],
            correctAnswer: 'C',
            explanation: 'Rays bend continuously inward like optical fibre without striking floor or surface.'
          },
          {
            id: 'cd_listening_m2_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Low acoustic frequency used by blue and fin whales across ocean basins: ______ hertz',
            correctAnswer: 'TWENTY',
            explanation: 'Whales broadcast booming twenty-hertz bass pulses.'
          },
          {
            id: 'cd_listening_m2_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Global commercial shipping propellers have shrunk baleen whale communication range by ______ percent since 1950.',
            correctAnswer: 'EIGHTY',
            explanation: 'Ambient freighter noise cut calling territory by eighty percent.'
          },
          {
            id: 'cd_listening_m2_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'What climate metric do scientists measure directly by timing fast long-distance Pacific acoustic pings?',
            correctAnswer: 'TEMPERATURE RISE',
            explanation: 'Acoustic tomography tracks deep-sea temperature rise effortlessly.'
          },
          {
            id: 'cd_listening_m2_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How have retired military subsea hydrophone arrays been repurposed safely today?',
            options: [
              'A. Guiding autonomous mining vehicles near trenches',
              'B. Steering oil tanker hulls past seasonal icebergs',
              'C. Monitoring submarine volcanic eruptions and illegal blast fishing',
              'D. Mapping surface wind gusts for meteorologists'
            ],
            correctAnswer: 'C',
            explanation: 'Networks detect undersea volcanoes and illegal dynamite blasting.'
          },
          {
            id: 'cd_listening_m2_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Noisy propeller bubble phenomenon curbed cleanly by five-blade tips: ______',
            correctAnswer: 'CAVITATION',
            explanation: 'Streamlined tips stop vacuum cavitation bubble bursts.'
          },
          {
            id: 'cd_listening_m2_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What overarching message concludes the ocean acoustics lecture?',
            options: [
              'A. Protecting quiet acoustic sea corridors matches preventing plastics and warming in urgency',
              'B. Submarine sonar holds greater value than optical satellites',
              'C. Deep Pacific whales adapt quickly by raising vocal frequencies',
              'D. Electric cargo ships remain impossible at oceanic scales'
            ],
            correctAnswer: 'A',
            explanation: 'Preserving acoustic stillness is as urgent as stopping plastic pollution and warming.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 3: Public Transport Inquiries & Geothermal Plant Tour
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m3',
    testNumber: 3,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 3: Public Transport Inquiries & Geothermal Plant Tour',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Public Transport Inquiries & Geothermal Plant Tour.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Planning a Cross-Region Bus & Ferry Excursion',
        audioScenario:
          'A visitor calls the Regional Public Transport Travel Desk to plan a Sunday rail-ferry loop ticket and bike booking.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Regional Transport Travel Inquiries]
Clerk: Good morning, Coast & Valley Transport Enquiries, Dylan speaking. How can I help?
Traveler: Hello Dylan, I am planning a scenic day loop out toward Harbour Island next Sunday using train, rural hopper bus, and car ferry—could I confirm combined passes?
Clerk: [[Q1]] Gladly! Let me pull up your itinerary sheet—may I take your surname? Yes, it is Holloway, spelled H-O-L-L-O-W-A-Y.
Clerk: [[Q2]] Got you cleanly, Holloway! Our combined Sunday "Sea-Link Explorer" rover pass covers unlimited coastal trains, valley buses, and passenger ferry decks all day for nineteen pounds fifty!
Traveler: [[Q3]] Nineteen fifty covers everything? Even the open timber foot-passenger ferry crossing Sandy Sound? Yes, though carrying an un-folded bicycle onto deck space adds a three-pound deck luggage token bought at the pier turnstile!
Traveler: [[Q4]] Easy! What time does Sunday’s earliest rail-connect bus leave Platform Six outside Westgate Rail Terminus? Wait—on normal weekdays it leaves at 08:20, yet Sunday winter timetable pushes Route 71 first departure back to 09:10 cleanly!
Traveler: [[Q5]] Glad I checked! Where should we wait near Harbour Quay if sudden rain delays the afternoon return ferry past five? Step inside the glazed Oak Pier Waiting Shelter right beside Lighthouse Cafe—live orange text screens announce any harbour fog delays promptly!
Clerk: [[Q6]] Also, are guide dogs and foldable shopping trolleys permitted cleanly aboard Route 71 rural minibuses? Both travel free every trip, though narrow coach aisles restrict rigid hard surfboards or bulky petrol lawn cans!
Traveler: [[Q7]] Understood! Can mobile QR passes scan straight off tablet glass screens onto old rural bus ticket boxes without patchy village signal? Save downloaded PDF passes into offline phone wallets BEFORE leaving town—coastal cliffs north of Sandy Sound drop mobile cellular masts!
Clerk: [[Q8]] Wise tech reminder! Wait—does the nineteen-fifty Explorer pass stay valid back on late evening commuter trains stopping past ten? Covers every regional diesel train until the final 23:15 coast express cleanly!
Traveler: [[Q9]] Wait—my teenage niece aged fifteen might tag along too; what age qualifies for half-price youth explorer discounts? Youth Explorer passes cover riders aged five through seventeen cleanly for nine pounds seventy-five!
Clerk: [[Q10]] Let me reserve two Explorer rover vouchers for Sunday pickup at Westgate Kiosk Three quoting Travel Ref PT-519!`,
        questions: [
          {
            id: 'cd_listening_m3_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Traveler surname: ______',
            correctAnswer: 'HOLLOWAY',
            explanation: 'Spelled H-O-L-L-O-W-A-Y.'
          },
          {
            id: 'cd_listening_m3_lq2',
            number: 2,
            type: 'short_answer',
            questionText: 'Adult fare for the Sunday Sea-Link Explorer combined rover ticket:',
            correctAnswer: 'NINETEEN POUNDS FIFTY',
            explanation: 'Combined day pass costs nineteen pounds fifty.'
          },
          {
            id: 'cd_listening_m3_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Pier turnstile bike supplement charged for an un-folded bicycle on ferries: £ ______',
            correctAnswer: 'THREE',
            explanation: 'Carrying an un-folded bike adds a three-pound token.'
          },
          {
            id: 'cd_listening_m3_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'First Sunday morning departure time for connecting Bus Route 71:',
            correctAnswer: '09:10',
            explanation: 'Sunday winter service pushes first departure to 09:10.'
          },
          {
            id: 'cd_listening_m3_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Landmark directly next to the glazed Oak Pier shelter displaying fog notices: ______ Cafe',
            correctAnswer: 'LIGHTHOUSE',
            explanation: 'Waiting shelter sits right beside Lighthouse Cafe.'
          },
          {
            id: 'cd_listening_m3_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Which bulky personal items are barred from narrow Route 71 rural minibuses?',
            options: [
              'A. Folding shopping trolleys',
              'B. Certified assistance animals',
              'C. Small canvas camping packs',
              'D. Rigid surfboards and petrol containers'
            ],
            correctAnswer: 'D',
            explanation: 'Narrow aisles prohibit rigid surfboards and petrol cans.'
          },
          {
            id: 'cd_listening_m3_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why should travelers download mobile QR passes before leaving Westgate?',
            options: [
              'A. Ferry booths do not issue printed receipts',
              'B. Coastal cliffs north of Sandy Sound lose phone signal',
              'C. Discount fares expire ten minutes after purchase',
              'D. Bus ticket scanners read only offline blue screens'
            ],
            correctAnswer: 'B',
            explanation: 'Coastal cliffs drop cellular coverage past Sandy Sound.'
          },
          {
            id: 'cd_listening_m3_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'Latest evening regional train covered by the Sea-Link Explorer ticket:',
            correctAnswer: '23:15',
            explanation: 'Valid up to the final 23:15 express.'
          },
          {
            id: 'cd_listening_m3_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Maximum age eligible for half-price Youth Explorer passes: ______',
            correctAnswer: 'SEVENTEEN',
            explanation: 'Covers riders aged five through seventeen.'
          },
          {
            id: 'cd_listening_m3_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Westgate Kiosk pickup booking reference: ______',
            correctAnswer: 'PT-519',
            explanation: 'Quote Travel Ref PT-519.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Safety Briefing at the Deep Geothermal Energy Station',
        audioScenario:
          'A power plant guide introduces engineering tourists around hot-brine wellheads, turbine halls, and district heating heat-exchangers.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Geothermal Plant Public Tour]
Guide: Welcome engineering visitors to Redstone Deep Geothermal Generating Station! Slip crisp yellow helmets tightly before stepping past double airlock doors into our main turbine yard!
Guide: [[Q11]] Beneath our steel boots, twin precision directional boreholes plunge nearly four point five kilometres straight down into fractured warm Triassic granite crust—producing steady clean heat rain, frost, or windless fog!
Guide: [[Q12]] Walk cleanly inside green walkway lines beside Pipe Loop A: superheated mineral brine rises roaring past two hundred degrees under intense hydrostatic head pressure—never crack red flange bolts!
Guide: [[Q13]] Because deep subterranean groundwater carries fierce dissolved corrosive salts and trace sulfur fumes, volcanic brine NEVER touches shiny delicate brass turbine spinning fins directly!
Guide: [[Q14]] Instead, gleaming titanium plate heat-exchangers instantly pass geothermal warmth into clean sealed organic pentane vapor inside a closed secondary turbine cycle called a binary power plant!
Guide: [[Q15]] Glance outside through north yard glass toward our green district heating pumping bay: leftover lukewarm sixty-degree exhaust water travels calmly underneath municipal tarmac warming fourteen hundred nearby council apartments and greenhouse tomatoes virtually carbon-free!
Guide: [[Q16]] Notice why zero tall plumes of white cloud billow continuously across our yard roof like older volcanic steam geysers: cooled spent brine injects cleanly straight back underground via Borehole Two!
Guide: [[Q17]] Reinjecting cool water three kilometres away maintains stable subterranean rock pressure cleanly while stopping salty waste streams polluting salmon rivers!
Guide: [[Q18]] Check mandatory acoustic ear protection clips pinned beside Turbine Bay Doors: shrill turbine gear whine peaks past eighty-eight decibels indoors—insert foam earplugs firmly throughout Balcony Walkthrough Two!
Guide: [[Q19]] Remember strict pacemaker and smartcard metal-detector checks inside Central Control Room C where dense magnetic generator coils spin rapidly!
Guide: [[Q20]] Return yellow helmets onto Rack Four before receiving free hot roasted coffee inside the Visitors’ Observation Porch!`,
        questions: [
          {
            id: 'cd_listening_m3_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Deep rock formation tapped 4.5 km down by precision directional boreholes: ______ granite',
            correctAnswer: 'TRIASSIC',
            explanation: 'Boreholes plunge down into fractured Triassic granite.'
          },
          {
            id: 'cd_listening_m3_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Minimum temperature Celsius of pressurized brine climbing Pipe Loop A: two ______ degrees',
            correctAnswer: 'HUNDRED',
            explanation: 'Superheated brine exceeds two hundred degrees Celsius.'
          },
          {
            id: 'cd_listening_m3_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why is deep geothermal groundwater kept separate from main turbine blades?',
            options: [
              'A. Heavy dissolved salts and sulfur fumes corrode turbine parts fast',
              'B. Muddy clay grains wear edges unevenly',
              'C. Brine temperature freezes during winter maintenance pauses',
              'D. Government water laws forbid boiling natural spring steam'
            ],
            correctAnswer: 'A',
            explanation: 'Corrosive salts and sulfur fumes keep dirty brine off turbine blades.'
          },
          {
            id: 'cd_listening_m3_lq14',
            number: 14,
            type: 'short_answer',
            questionText: 'Which corrosion-resistant metal builds heat-exchangers passing heat to closed pentane loops?',
            correctAnswer: 'TITANIUM',
            explanation: 'Gleaming titanium plate heat-exchangers transfer heat safely.'
          },
          {
            id: 'cd_listening_m3_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Warm 60°C discharge water heats 1,400 local homes alongside glasshouse ______.',
            correctAnswer: 'TOMATOES',
            explanation: 'Heats municipal council flats and greenhouse tomatoes.'
          },
          {
            id: 'cd_listening_m3_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Destination of cooled spent geothermal brine via Borehole Two: back ______',
            correctAnswer: 'UNDERGROUND',
            explanation: 'Reinjected cleanly back underground.'
          },
          {
            id: 'cd_listening_m3_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'What two benefits stem from returning cooled brine three kilometres underground?',
            options: [
              'A. Saves pump costs and avoids limestone scale',
              'B. Eliminates backup diesel power towers',
              'C. Heats municipal drinking reservoirs and feeds town fountains',
              'D. Sustains rock pressure and keeps salty waste out of salmon rivers'
            ],
            correctAnswer: 'D',
            explanation: 'Maintains rock pressure and shields nearby salmon streams from salt.'
          },
          {
            id: 'cd_listening_m3_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'Peak noise level inside Turbine Balcony Two requiring foam earplugs:',
            correctAnswer: 'EIGHTY-EIGHT DECIBELS',
            explanation: 'Gear whine peaks past eighty-eight decibels.'
          },
          {
            id: 'cd_listening_m3_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Hazard inside Control Room C near rapidly spinning generator coils: ______ coils',
            correctAnswer: 'MAGNETIC',
            explanation: 'Strong magnetic generator coils demand pacemaker checks.'
          },
          {
            id: 'cd_listening_m3_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Numbered rack where guests return helmets before coffee: Rack ______',
            correctAnswer: 'FOUR',
            explanation: 'Return helmets onto Rack Four.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Rural Heat-Network Adoption Among Homeowners',
        audioScenario:
          'Energy policy students Ava and Leo review survey reactions toward geothermal district heating pipes with supervisor Prof. Nair.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: District Heating Adoption Seminar]
Prof. Nair: Come in Ava and Leo. Why did barely forty percent of eligible village stone cottages hook onto clean municipal geothermal district heat pipes during Phase One?
Ava: [[Q21]] Financial cash shock upfront! Even with generous council boiler grants covering half the street trenching cost, elderly residents balked at tearing tidy flowered front rosebeds open for noisy mechanical diggers!
Leo: [[Q22]] Worse still, confusing press rumours misled villagers into assuming lukewarm district heat delivered chilly baths compared to blasting red-hot gas combi boilers!
Prof. Nair: Classic technical misconception! How did successful neighboring demonstration homes flip skeptical street attitudes quickly?
Ava: [[Q23]] Opening three cheerful retrofitted cottage kitchens over snowy December Open-House Saturdays—letting neighbors feel toasty silent cast-iron radiators firsthand—tripled sign-ups straightaway!
Prof. Nair: [[Q24]] Seeing beats spreadsheets effortlessly! Did small corner heat interface plate-boxes fit snugly beneath old Victorian pantry stairs without swallowing tight hallways? Mostly yes—compact slimline wall heat-units replaced chunky attic copper hot-water tanks, actually giving modest cottages extra airing-cupboard shelf space cleanly!
Leo: [[Q25]] One genuine pricing complaint echoed loud across every focus group: fixed annual standing-charge service fees stayed stiff even when mindful frugal families turned radiators down low across warm March weeks!
Prof. Nair: [[Q26]] Flag fixed-versus-volumetric tariff reform bluntly inside Policy Section Four—households reward tariffs mirroring actual conserved kilowatt usage visibly!
Ava: [[Q27]] Another snag surfaced in older leaky terrace walls: switching cleanly to lower fifty-five-degree district water exposed undersized single-panel bedroom radiators unable to heat drafty uninsulated spare corners fast enough!
Prof. Nair: [[Q28]] Emphasize pairing free home heat-loss radiator audits before linking pre-1920 solid brick homes onto mild geothermal water mains!
Leo: For Friday’s Energy Economics Symposium poster, should we chart annual gas cost savings or dwell on street-disruption survey quotes?
Prof. Nair: [[Q29]] Contrast the lifetime twenty-year bill drop clearly on the main chart!
Leo: [[Q30]] Got it—plus one concise box detailing dustless directional street micro-trenching that saves front gardens completely!`,
        questions: [
          {
            id: 'cd_listening_m3_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Household garden feature villagers hated digging up for geothermal street trenches: ______',
            correctAnswer: 'ROSEBEDS',
            explanation: 'Elderly residents balked at tearing open front rosebeds.'
          },
          {
            id: 'cd_listening_m3_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'What mistaken domestic comfort fear slowed villagers connecting to district heat?',
            correctAnswer: 'CHILLY BATHS',
            explanation: 'Rumors falsely claimed lukewarm pipes meant chilly baths.'
          },
          {
            id: 'cd_listening_m3_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What community action tripled neighborhood pipe connection sign-ups?',
            options: [
              'A. Doubling municipal street trench subsidies',
              'B. Mailing bilingual engineering booklets door to door',
              'C. Hosting snowy Saturday Open-House tours inside warm converted cottages',
              'D. Offering free radiator valves to early landlords'
            ],
            correctAnswer: 'C',
            explanation: 'Feeling warm radiators inside Open-House kitchens tripled sign-ups.'
          },
          {
            id: 'cd_listening_m3_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Bulky plumbing hardware removed from homes when installing compact wall heat units: ______ tanks',
            correctAnswer: 'WATER',
            explanation: 'Replaced chunky attic copper hot-water tanks.'
          },
          {
            id: 'cd_listening_m3_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Frugal families objected to steep fixed annual ______ fees unchanged when thermostats stayed low.',
            correctAnswer: 'STANDING-CHARGE',
            explanation: 'Fixed standing-charge service fees frustrated frugal users.'
          },
          {
            id: 'cd_listening_m3_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Chapter targeting volumetric utility tariff reform recommendations: Section ______',
            correctAnswer: 'FOUR',
            explanation: 'Flag tariff reform inside Policy Section Four.'
          },
          {
            id: 'cd_listening_m3_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What comfort snag appeared in uninsulated pre-1920 brick homes switched to 55°C heat mains?',
            options: [
              'A. Old iron pipes leaked slowly under cellar floors',
              'B. Undersized single-panel bedroom radiators heated poorly in drafts',
              'C. Lime wall plaster cracked unevenly from dry air',
              'D. Hot taps took ninety seconds reaching upstairs showers'
            ],
            correctAnswer: 'B',
            explanation: 'Mild 55°C water exposed undersized single-panel radiators in drafty rooms.'
          },
          {
            id: 'cd_listening_m3_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Free assessment advised before linking pre-1920 terraces to district mains: heat-loss ______ audits',
            correctAnswer: 'RADIATOR',
            explanation: 'Pair free home heat-loss radiator audits prior to linking.'
          },
          {
            id: 'cd_listening_m3_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Projection horizon shown on Friday’s Energy Economics lifetime savings chart: ______ years',
            correctAnswer: 'TWENTY',
            explanation: 'Contrast the twenty-year lifetime bill drop.'
          },
          {
            id: 'cd_listening_m3_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Low-impact engineering method preserving rose gardens during street pipe installation: ______',
            correctAnswer: 'MICRO-TRENCHING',
            explanation: 'Box detailing dustless directional street micro-trenching.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Closed-Loop Geothermal Engineering Beyond Volcanic Belts',
        audioScenario:
          'A geophysics professor lectures on how Enhanced Geothermal Systems unlock earth heat beneath ordinary continental cities far outside Iceland.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Geophysics & Deep Geothermal Engineering]
Lecturer: Most students visualize geothermal electricity exclusively beside steaming Icelandic lava geysers or bubbling New Zealand mud pools—places where tectonic plates pull molten rock conveniently close beneath mossy turf!
Lecturer: [[Q31]] Yet astonishingly, beneath virtually every flat quiet city from Paris to Melbourne, deep basement stone temperatures still march steadily hotter by twenty-five to thirty degrees with every downward vertical kilometre!
Lecturer: [[Q32]] Why didn’t nineteenth-century industrial cities sink power wells everywhere cleanly? Ordinary continental deep granite stays stubbornly solid dry rock lacking natural porous underground aquifers to carry blazing warmth upstairs!
Lecturer: [[Q33]] Consider Paris’s remarkable geological fluke first: since 1969, municipal engineers tapped warm seventy-degree natural Dogger limestone brine resting peacefully just eighteen hundred metres straight beneath southern apartment suburbs—warming half a million French homes silently today!
Lecturer: [[Q34]] To bring steady geothermal kilowatts to dry impermeable basement cities elsewhere, engineers perfected Enhanced Geothermal Systems—EGS—pumping cold surface water gently downward to reopen hairline micro-cracks across hot dry subterranean rock!
Lecturer: [[Q35]] Early Swiss urban EGS trials near Basel during 2006 triggered an unwelcome public tremor: high-pressure hydraulic rock splitting startled nervous residents with magnitude three-point-four earthquakes—forcing immediate project shutdowns!
Lecturer: [[Q36]] Modern geophysical engineering learned hard lessons cleanly: contemporary multi-stage zoned stimulation monitors acoustic micro-crack needles instantaneously in real time, cutting fluid injection pressures swiftly milliseconds before noticeable ground quakes form!
Lecturer: [[Q37]] Even bolder are next-generation closed-loop radiator tubes—drilling U-shaped twin steel pipelines looped hermetically through scorching three-kilometre rock beds, acting essentially like massive buried car radiators transferring pure heat cleanly without cracking open deep fault geology at all!
Lecturer: [[Q38]] Remarkably, oil-and-gas directional rotary drillers bring ready precision steerable diamond drill bits straight into deep clean geothermal holes, slashing decades off costly aerospace learning curves!
Lecturer: [[Q39]] Equally transformative is grid reliability: while snowy frozen calm January nights freeze wind turbines motionless and hide solar arrays, underground earth heat supplies unwavering steady baseload megawatts twenty-four hours daily!
Lecturer: [[Q40]] Tapping quiet deep planetary warmth thus offers crowded cities compact invisible power plants sitting cleanly inside tiny suburban basketball-court footprints rather than sprawling across treasured farmland meadows.`,
        questions: [
          {
            id: 'cd_listening_m3_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Upper typical temperature jump per downward kilometre beneath ordinary continents: ______ degrees',
            correctAnswer: 'THIRTY',
            explanation: 'Temperatures climb twenty-five to thirty degrees per kilometre.'
          },
          {
            id: 'cd_listening_m3_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'What natural porous water reservoir is missing inside solid dry deep continental granite?',
            correctAnswer: 'AQUIFERS',
            explanation: 'Dry rock lacks porous underground aquifers to carry warmth upward.'
          },
          {
            id: 'cd_listening_m3_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Geological rock layer warming half a million Parisian homes smoothly since 1969: ______ limestone',
            correctAnswer: 'DOGGER',
            explanation: 'Paris taps warm brine in Dogger limestone.'
          },
          {
            id: 'cd_listening_m3_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'How do Enhanced Geothermal Systems (EGS) harvest heat from dry hot basement granite?',
            options: [
              'A. Dropping solid copper heat-conductor rods underground',
              'B. Lowering steam condensers directly down coal mines',
              'C. Mixing chemical solvents into coastal clay seams',
              'D. Pumping water downward to open tiny hairline circulation fractures'
            ],
            correctAnswer: 'D',
            explanation: 'Pumps surface water down to reopen hairline micro-cracks.'
          },
          {
            id: 'cd_listening_m3_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Swiss city where 2006 pressure fracturing caused worrying 3.4 earthquakes halting work: ______',
            correctAnswer: 'BASEL',
            explanation: 'Trials near Basel in 2006 sparked 3.4 tremors.'
          },
          {
            id: 'cd_listening_m3_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Modern acoustic sensors throttle pump pressure down ______ before noticeable earthquakes develop.',
            correctAnswer: 'MILLISECONDS',
            explanation: 'Cut fluid pressure swiftly milliseconds before tremors form.'
          },
          {
            id: 'cd_listening_m3_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do U-shaped closed-loop geothermal pipes eliminate fault-splitting earthquake risks?',
            options: [
              'A. Fluid circulates sealed inside metal coils without pressurizing rock fractures',
              'B. Pipes run shallowly under topsoil',
              'C. Geothermal wells operate strictly near coastal tides',
              'D. Rubber expansion liners absorb seismic vibrations'
            ],
            correctAnswer: 'A',
            explanation: 'Closed loops work like buried car radiators without cracking fault zones.'
          },
          {
            id: 'cd_listening_m3_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Steerable cutter bits transferred directly from petroleum rigs into geothermal wells: ______ drill bits',
            correctAnswer: 'DIAMOND',
            explanation: 'Precision steerable diamond drill bits slash development curves.'
          },
          {
            id: 'cd_listening_m3_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which grid stability output does geothermal maintain round-the-clock on frozen calm nights?',
            correctAnswer: 'BASELOAD MEGAWATTS',
            explanation: 'Supplies unwavering steady baseload megawatts 24 hours.'
          },
          {
            id: 'cd_listening_m3_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What spatial land-use benefit concludes the lecture?',
            options: [
              'A. Plants eliminate regional electrical transmission pylons',
              'B. Deep plants fit unobtrusively inside compact urban footprints sparing farmland',
              'C. Surface solar fields run hotter beside geothermal vents',
              'D. Existing coal yards turn straight into recreational lakes'
            ],
            correctAnswer: 'B',
            explanation: 'Plants occupy compact basketball-court footprints saving farmland meadows.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 4: Heritage Railway Volunteering & Antarctic Expedition Talk
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m4',
    testNumber: 4,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 4: Heritage Railway Volunteering & Antarctic Expedition Talk',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Heritage Railway Volunteering & Antarctic Expedition Talk.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Signing Up as a Steam Heritage Railway Volunteer',
        audioScenario:
          'A retired mechanic calls the Severndale Preservation Railway volunteer secretary to join weekend carriage restoration and platform stewarding.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Heritage Railway Volunteer Desk]
Secretary: Good morning, Severndale Steam Preservation Trust, Fiona speaking. How may I assist you?
Applicant: Hello Fiona, I recently retired after thirty years machining diesels and would love to volunteer on weekend restoration carriages or ticket gates!
Secretary: [[Q1]] Splendid—experienced metalhands are worth pure gold! Let me jot down your applicant record first: could you spell your surname? Yes, it is Calderwood, spelled C-A-L-D-E-R-W-O-O-D.
Secretary: [[Q2]] Got you cleanly, Mr. Calderwood! New volunteers begin smoothly in one of two starter sections: Platform Passenger Hospitality or our busy Carriage & Wagon Paint Barn beside Bridgenorth Depot.
Applicant: [[Q3]] Put me squarely in Carriage & Wagon Carpentry & Paint Barn if benches sit free! Easy slot—our restoration foreman runs Saturday working parties from nine sharp until half past four with complimentary hot mugs of tea at eleven!
Applicant: [[Q4]] Do incoming volunteers pay an annual society trust subscription for public liability coverage? Standard working members pay twenty-six pounds annually, covering trust newsletters, museum admission, and workshop accident coverage!
Secretary: [[Q5]] What protective workshop clothing must I bring on my very first Saturday shift? Please bring sturdy steel-toed work boots and tough navy cotton overalls—we supply wrap-around safety goggles, ear defenders, and heavy leather gauntlets inside lockers!
Applicant: [[Q6]] Understood—steel caps and overalls ready. Are medical fitness certificates needed before working strictly on stationary grounded carriages rather than firing moving steam footplates? Ground paint-shed stewards face zero medical hoops—only volunteers stepping onto live coal fireboxes or signalbox levers pass triennial railway colour-vision eyesight checks!
Secretary: [[Q7]] Good clarity! Where should weekend car volunteers park quietly outside visitor customer fields during busy steam gala weekends? Pass straight past public ticket gates into Crew Gravel Yard C behind the water tower—displaying your green volunteer dash pass!
Applicant: [[Q8]] Do volunteer passes grant discounted travel rides to visiting grandchildren along the sixteen-mile valley line? Active volunteers logging twelve annual shifts unlock four complimentary return guest family tickets every summer season!
Secretary: [[Q9]] Nifty family treat! One strict Heritage Depot Yard rule: never step casually across iron rails directly between coupled wooden coaches—always cross via the painted white timber bridge spanning Track Two!
Applicant: [[Q10]] Crystal clear safety habit! Confirm my Saturday morning induction day referencing Trust Card HR-602.`,
        questions: [
          {
            id: 'cd_listening_m4_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'CALDERWOOD',
            explanation: 'Spelled C-A-L-D-E-R-W-O-O-D.'
          },
          {
            id: 'cd_listening_m4_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Location of Carriage & Wagon restoration shed: ______ Depot',
            correctAnswer: 'BRIDGENORTH',
            explanation: 'Located beside Bridgenorth Depot.'
          },
          {
            id: 'cd_listening_m4_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Closing time for Saturday volunteer restoration parties:',
            correctAnswer: 'HALF PAST FOUR',
            explanation: 'Run from nine sharp until half past four.'
          },
          {
            id: 'cd_listening_m4_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Annual working membership subscription covering workshop liability: £ ______',
            correctAnswer: 'TWENTY-SIX',
            explanation: 'Subscription costs twenty-six pounds annually.'
          },
          {
            id: 'cd_listening_m4_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Workwear item volunteers must pack alongside steel-toed boots: cotton ______',
            correctAnswer: 'OVERALLS',
            explanation: 'Pack sturdy steel-toed boots and navy cotton overalls.'
          },
          {
            id: 'cd_listening_m4_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Which vision test do signalbox lever operators and live train footplate staff pass?',
            correctAnswer: 'COLOUR-VISION EYESIGHT',
            explanation: 'Pass triennial railway colour-vision eyesight checks.'
          },
          {
            id: 'cd_listening_m4_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Crew car-park landmark inside Yard C separated from tourist parking: ______ tower',
            correctAnswer: 'WATER',
            explanation: 'Crew Gravel Yard C behind the water tower.'
          },
          {
            id: 'cd_listening_m4_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What summer perk unlocks once volunteers log twelve annual shifts?',
            options: [
              'A. Free hot workshop lunches year-round',
              'B. Priority seat reservations inside luxury dining cars',
              'C. Four free return guest family tickets on the line',
              'D. Commemorative brass pocket watches'
            ],
            correctAnswer: 'C',
            explanation: 'Earn four complimentary return family tickets for guests.'
          },
          {
            id: 'cd_listening_m4_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'How must yard staff cross live rails safely between platforms?',
            options: [
              'A. Wait until signal arms glow red',
              'B. Look both ways behind rear guard vans',
              'C. Climb via the white painted wooden bridge spanning Track Two',
              'D. Request whistle signals from yard lookouts'
            ],
            correctAnswer: 'C',
            explanation: 'Use the white timber footbridge spanning Track Two.'
          },
          {
            id: 'cd_listening_m4_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Volunteer induction confirmation code: ______',
            correctAnswer: 'HR-602',
            explanation: 'Trust Card HR-602.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Walkthrough of the Railway Signalbox & Engine Shed',
        audioScenario:
          'A senior chief mechanical officer explains antique brass block-telegraph signalling, boiler coal care, and heritage safety to new trainees.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Steam Engine Shed Briefing]
Officer: Welcome new apprentices onto our spotless red-brick Bridgenorth Engine Shed! Keep yellow safety vests zipped cleanly while coal locomotives simmer beside Inspection Pit Two!
Officer: [[Q11]] Glance downward across Inspection Pit One: notice warm oil baths glistening underneath heavy steel coupling rods—fitters refill brass needle oilers hourly using heavy mineral steam oil so scorching journals never seize mid-grade!
Officer: [[Q12]] Above us sits our restored 1904 Timber Signalbox—walk calmly up steep wooden treads remembering railway Golden Rule One: ONLY one moving steam locomotive ever occupies any single track block between green distant stations!
Officer: [[Q13]] Signallers enforce absolute block separation using ornate mahogany brass bell-telegraph boxes plus locking heavy physical metal "Single-Line Token Staffs" passed hand-to-hand cleanly inside leather hoop pouches straight onto passing cab drivers!
Officer: [[Q14]] Notice why antique mechanical signal arms hang downward only after clearing heavy cast-iron counterweights cleanly: if rusted wire cables snap violently during frost, counterweights automatically fling semaphore arms back onto red Horizontal STOP!
Officer: [[Q15]] Behind the oil shop stands our stacked Coal Stage storing shimmering Welsh anthracite smokeless coal lumps—never scoop powdery wet garden slack, which smothers roaring fireboxes rapidly in grey ash!
Officer: [[Q16]] Inside the Timber Upholstery Shop upstairs, skilled seamstresses hand-tuft durable authentic moquette wool seat velvet patterned precisely from 1952 archive swatch books rather than hot modern vinyl!
Officer: [[Q17]] Beware walking swiftly past open locomotive cylinder exhaust cocks when engine drivers release warm condensed steam bursts sideways—hot white plumes hiss noisily at boot height!
Officer: [[Q18]] Check our green painted water cranes guarding platform ends: municipal mains pipes fill overhead tank columns softly, dosed gently with softening chemicals preventing white calcium kettle scale fouling narrow copper boiler firetubes!
Officer: [[Q19]] Remember tidy housekeeping inside shared restoration tool racks: dip wooden paintbrushes cleanly inside airtight linseed-oil jars rather than letting expensive natural hog bristles harden overnight!
Officer: [[Q20]] Collect illustrated yard clearance whistles from Foreman Ben beside Steel Gate Five before heading back toward tea cabins!`,
        questions: [
          {
            id: 'cd_listening_m4_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Lubricant refilled hourly in brass needle oilers to prevent overheated axles: ______ steam oil',
            correctAnswer: 'MINERAL',
            explanation: 'Refill hourly with heavy mineral steam oil.'
          },
          {
            id: 'cd_listening_m4_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Maximum moving locomotives permitted inside any single track block simultaneously: ______',
            correctAnswer: 'ONE',
            explanation: 'Strictly one moving locomotive occupies any single block.'
          },
          {
            id: 'cd_listening_m4_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'What protective pouch carries physical single-line token staffs to passing cab crews?',
            correctAnswer: 'LEATHER HOOP POUCHES',
            explanation: 'Passed cleanly inside leather hoop pouches.'
          },
          {
            id: 'cd_listening_m4_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'What safety mechanism happens automatically if a frosty semaphore signal wire snaps?',
            options: [
              'A. Heavy iron counterweights swing the signal arm horizontally to STOP',
              'B. Electronic warning horns buzz inside the station office',
              'C. Track brakes clamp wheels near platform ends',
              'D. Auxiliary station bells alert passing guards'
            ],
            correctAnswer: 'A',
            explanation: 'Fail-safe counterweights fling arms straight back to Horizontal STOP.'
          },
          {
            id: 'cd_listening_m4_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Ash risk preventing firemen from burning cheap wet garden slack coal: smothers ______',
            correctAnswer: 'FIREBOXES',
            explanation: 'Wet slack smothers roaring fireboxes in grey ash.'
          },
          {
            id: 'cd_listening_m4_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Carriage upholstery weavers match historic 1952 seat swatches using sturdy woven wool ______.',
            correctAnswer: 'MOQUETTE',
            explanation: 'Seamstresses hand-tuft authentic wool moquette velvet.'
          },
          {
            id: 'cd_listening_m4_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'What boot-level hazard escapes beside stationary steam cylinders prior to departure?',
            options: [
              'A. Sharp glowing cinders dropping onto platform ballast',
              'B. Heavy cast-iron brake shoes releasing suddenly',
              'C. Slippery spilled lubricating grease pools',
              'D. Hot sideways gusts of condensed white steam'
            ],
            correctAnswer: 'D',
            explanation: 'Hot condensed steam plumes hiss sideways at boot height.'
          },
          {
            id: 'cd_listening_m4_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'What mineral fouling inside delicate copper firetubes do water softeners block?',
            correctAnswer: 'CALCIUM',
            explanation: 'Softeners stop white calcium kettle scale fouling copper tubes.'
          },
          {
            id: 'cd_listening_m4_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Oil bath preserving expensive natural hog-hair paintbrushes overnight: ______-oil',
            correctAnswer: 'LINSEED',
            explanation: 'Submerge brushes safely inside linseed-oil jars.'
          },
          {
            id: 'cd_listening_m4_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Gate number beside Foreman Ben distributing clearance whistles: Gate ______',
            correctAnswer: 'FIVE',
            explanation: 'Wait beside Steel Gate Five.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Heritage Rail Tourist Spending Spillover',
        audioScenario:
          'Economics students Zara and Theo evaluate local village shop spending driven by preserved steam branch trains with Dr. Grant.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Rural Tourism Economics Tutorial]
Dr. Grant: Come in Zara and Theo. Did your summer passenger questionnaires confirm whether steam excursion riders spend real money inside rural valley shops?
Zara: [[Q21]] Striking divide! Families stepping off standard excursion trains at Bridgenorth lingered three hours visiting independent bakeries and wool shops—yet coach-tour package riders shuffled straight off trains onto waiting motor coaches without buying a single postcard!
Theo: [[Q22]] Also, shopkeepers beside tiny flag-stop countryside halts reported virtually zero weekday uplift until the trust printed walking loop maps connecting stations cleanly to riverside woodland tea barns!
Dr. Grant: Crucial spatial link between stops and strolls! Did seasonal winter Santa Specials generate disproportionate annual ticket cash?
Zara: [[Q23]] Overwhelmingly yes—four festive December weeks brought thirty-eight percent of total heritage trust cash reserves, funding boiler tube overhauls smoothly through quiet misty February workshops!
Dr. Grant: [[Q24]] Vital cashflow buffer! How did you prevent double-counting souvenir spending across repeat enthusiast families riding monthly galas? We added unique household postcode plus visit-frequency weighting filters before multiplying annual regional economic impact!
Theo: [[Q25]] One urgent succession threat alarmed railway directors during open interviews: average skilled volunteer boiler welder age climbed past sixty-seven while local college engineering apprentices flocked away toward digital IT firms!
Dr. Grant: [[Q26]] Highlight paid accredited heritage welding apprenticeships loudly inside Chapter Six rather than framing volunteer recruitment purely around nostalgic hobbyists!
Zara: [[Q27]] Another headache squeezed coal budgets abruptly: closing traditional domestic coal seams forced lines to import high-cost foreign Polish steam coal by heavy container lorry, tripling fuel invoices overnight!
Dr. Grant: [[Q28]] Note trial evaluations burning compressed waste biomass briquettes cleanly beside coal cost sensitivity bars inside Table Four!
Theo: [[Q29]] For Friday’s Rural Council Tourism Committee presentation, should we display track mileage maps or contrast independent shop tills on gala days?
Dr. Grant: [[Q30]] Present anonymized village bakery till jumps on steam weekends—local councilors grant station footpath funding immediately when Main Street shopkeepers smile!`,
        questions: [
          {
            id: 'cd_listening_m4_lq21',
            number: 21,
            type: 'multiple_choice',
            questionText: 'Which rail visitors contributed least to Bridgenorth high-street village shops?',
            options: [
              'A. Weekend hiking clubs taking morning return trains',
              'B. Package coach-tour riders transferring directly onto parked tour coaches',
              'C. Local county families arriving on bank holidays',
              'D. Enthusiast photographers trailing locomotives'
            ],
            correctAnswer: 'B',
            explanation: 'Package coach groups moved straight onto motor coaches spending zero.'
          },
          {
            id: 'cd_listening_m4_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which printed trust aid connected remote rural halts cleanly to woodland tea barns?',
            correctAnswer: 'WALKING LOOP MAPS',
            explanation: 'Printed walking loop maps sparked rural spending.'
          },
          {
            id: 'cd_listening_m4_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Share of yearly cash earned by December Santa Specials to fund winter repairs: ______ percent',
            correctAnswer: 'THIRTY-EIGHT',
            explanation: 'Four festive weeks yielded thirty-eight percent of annual reserves.'
          },
          {
            id: 'cd_listening_m4_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Identifier combined with visit frequency to avoid counting repeat gala fans twice: household ______',
            correctAnswer: 'POSTCODE',
            explanation: 'Applied postcode plus frequency weighting filters.'
          },
          {
            id: 'cd_listening_m4_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Skilled boiler welder average age passed ______ while younger trainees entered IT sectors.',
            correctAnswer: 'SIXTY-SEVEN',
            explanation: 'Average boiler welder age surpassed sixty-seven.'
          },
          {
            id: 'cd_listening_m4_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Policy workforce fix urged inside Chapter Six instead of purely older hobbyists: paid ______',
            correctAnswer: 'APPRENTICESHIPS',
            explanation: 'Highlight paid accredited heritage welding apprenticeships.'
          },
          {
            id: 'cd_listening_m4_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Origin of pricey imported steam coal tripling heritage rail fuel invoices: ______ steam coal',
            correctAnswer: 'POLISH',
            explanation: 'Imported pricey Polish steam coal by heavy container lorry.'
          },
          {
            id: 'cd_listening_m4_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which sustainable solid fuel substitute should sit beside coal costs in Table Four?',
            correctAnswer: 'BIOMASS BRIQUETTES',
            explanation: 'Include trials burning compressed biomass briquettes.'
          },
          {
            id: 'cd_listening_m4_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Day scheduled for presenting evidence to the Rural Council Tourism Committee: ______',
            correctAnswer: 'FRIDAY',
            explanation: 'Presentation takes place Friday.'
          },
          {
            id: 'cd_listening_m4_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Dr. Grant prioritize showcasing Main Street bakery cash-register jumps?',
            options: [
              'A. Tangible local merchant profits convince councils to back path grants quickly',
              'B. Bakers sponsor steam station hanging flower baskets',
              'C. Bakery delivery vans cross heritage railway bridges',
              'D. Newspaper stories spotlight heritage tearoom recipes'
            ],
            correctAnswer: 'A',
            explanation: 'Local shopkeeper profits persuade councils swiftly.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Science Logistics on Early Heroic Antarctic Expeditions',
        audioScenario:
          'A polar history lecturer examines how Scott and Shackleton balanced harrowing geographical races alongside pioneering Antarctic meteorology and glacier science.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Antarctic Polar Expedition Lecture]
Lecturer: Popular cinema celebrates Edwardian Antarctic explorers almost exclusively as frozen bearded adventurers marching gallantly across blank ice fields toward the South Pole—yet their ships sailed equally as floating research laboratories!
Lecturer: [[Q31]] When Robert Falcon Scott’s wooden barque Discovery wintered inside McMurdo Sound during 1902, naval officers hauled delicate brass barographs, tide gauges, and moored magnetic variometers onto barren volcanic basalt beaches!
Lecturer: [[Q32]] Remarkably, polar meteorologist George Simpson kept continuous spinning clockwork anemometers logging blizzards cleanly at minus forty-five Celsius simply by bathing delicate gears inside non-freezing kerosene oil!
Lecturer: [[Q33]] Notice also an astonishing 1911 mid-winter trek often hailed as Earth’s hardest zoological mission: three weary expedition scientists walked sixty miles through pitch-black minus-sixty polar winter darkness solely to collect three unhatched Emperor penguin eggs from Cape Crozier!
Lecturer: [[Q34]] Why risk triple frostbite over penguin eggs? Biologists mistakenly hoped reptile-to-bird evolutionary clues slept tucked inside unincubated penguin embryos—nearly costing Apsley Cherry-Garrard every tooth chattering out inside blown-away canvas tents!
Lecturer: [[Q35]] Equally tragic irony sealed Scott’s famous returning sledge party in 1912: starving just eleven miles short of One Ton Food Depot, exhausted men dragged sixteen heavy kilograms of fossil Glossopteris seed-fern coal boulders cleanly right to their final tent!
Lecturer: [[Q36]] Those jagged black Glossopteris leaf rocks hauled on dying backs proved dramatically afterwards that frozen Antarctica once cradled lush mild temperate swamps connected smoothly across ancient Gondwana supercontinents!
Lecturer: [[Q37]] Logistic failures taught harsh dietary lessons too: canned ship pemmican boiled meats stripped natural fresh vitamin C out cleanly—exposing sledgers gradually to bleeding gum scurvy whenever rare fresh seal steaks ran dry inland!
Lecturer: [[Q38]] Similarly, early expedition wool tweed coats soaked swiftly in heavy snow blizzards, freezing solid like tin armour until Norwegian explorer Roald Amundsen adopted airy loose Inuit caribou reindeer parkas venting sweaty body vapor freely outdoors!
Lecturer: [[Q39]] Astonishingly, original glass weather thermometers and handwritten sea-ice logbooks recovered intact inside Cape Evans wooden huts help modern climate oceanographers extend Ross Sea melting baselines cleanly back past 1901!
Lecturer: [[Q40]] Heroic-era polar expeditions thus leave an enduring dual legacy: sobering logistical humility in deadly frost paired alongside priceless century-old planetary baseline science!`,
        questions: [
          {
            id: 'cd_listening_m4_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Year Scott’s wooden ship Discovery anchored to establish McMurdo Sound weather posts: ______',
            correctAnswer: '1902',
            explanation: 'Discovery wintered inside McMurdo Sound in 1902.'
          },
          {
            id: 'cd_listening_m4_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Non-freezing oil keeping Simpson’s spinning wind instruments working at -45°C: ______',
            correctAnswer: 'KEROSENE',
            explanation: 'Clockwork gears were bathed cleanly in kerosene oil.'
          },
          {
            id: 'cd_listening_m4_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'Biological specimens sought during the dangerous 1911 dark mid-winter trek to Cape Crozier:',
            correctAnswer: 'EMPEROR PENGUIN EGGS',
            explanation: 'Walked sixty miles through winter darkness for Emperor penguin eggs.'
          },
          {
            id: 'cd_listening_m4_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why did biologists risk deadly darkness to obtain unhatched embryos at Cape Crozier?',
            options: [
              'A. Museum curators paid high cash bounties for polar specimens',
              'B. Eggshell thickness tracked southern ocean cooling trends',
              'C. Fresh yolks prevented expedition sledgers developing winter scurvy',
              'D. Scientists thought penguin embryos preserved bird-reptile evolutionary links'
            ],
            correctAnswer: 'D',
            explanation: 'Biologists hoped to discover reptile-to-bird evolutionary links inside embryos.'
          },
          {
            id: 'cd_listening_m4_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Weight of heavy fossil rock samples Scott’s exhausted sledgers refused abandoning: ______ kilograms',
            correctAnswer: 'SIXTEEN',
            explanation: 'Men carried sixteen kilograms of fossil rocks cleanly to the end.'
          },
          {
            id: 'cd_listening_m4_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Fossil leaf impressions proved Antarctica once stood joined to mild ancient ______ swamps.',
            correctAnswer: 'GONDWANA',
            explanation: 'Connected smoothly across ancient Gondwana supercontinents.'
          },
          {
            id: 'cd_listening_m4_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Fresh coastal protein source protecting inland sailors against gum scurvy when accessible: ______ steaks',
            correctAnswer: 'SEAL',
            explanation: 'Scarcity of fresh seal steaks inland brought on scurvy.'
          },
          {
            id: 'cd_listening_m4_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why did Roald Amundsen’s reindeer parkas outperform British wool coats in polar blizzards?',
            options: [
              'A. Fur deflected coastal hurricane winds better',
              'B. Inuit jackets weighed three kilograms less per sleeve',
              'C. Loose airy hides vented sweat cleanly instead of freezing stiff like armour',
              'D. Dark fur absorbed scarce polar noon sunshine'
            ],
            correctAnswer: 'C',
            explanation: 'Airy loose caribou/reindeer parkas vented body vapor freely instead of freezing stiff.'
          },
          {
            id: 'cd_listening_m4_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which modern ocean climate indicator gains historical baselines from 1901 Cape Evans huts?',
            correctAnswer: 'SEA-ICE',
            explanation: 'Handwritten sea-ice logbooks extend Ross Sea melting baselines.'
          },
          {
            id: 'cd_listening_m4_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What dual heritage marks the heroic Antarctic era according to the professor?',
            options: [
              'A. Mechanical tractor advances alongside sea charts',
              'B. Hard logistical lessons alongside priceless century-old scientific baselines',
              'C. Territorial flag treaties paired with mining claims',
              'D. Modern cruise tourism routes along coastal glaciers'
            ],
            correctAnswer: 'B',
            explanation: 'Unites logistical humility with priceless early baseline climate science.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 5: Campus Language Clinic & Ancient Agriculture Seminar
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m5',
    testNumber: 5,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 5: Campus Language Clinic & Ancient Agriculture Seminar',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Campus Language Clinic & Ancient Agriculture Seminar.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Enrolling at the University Academic Language Clinic',
        audioScenario:
          'A master’s engineering student calls the Campus Academic Language Clinic secretary to register for thesis proofreading workshops and speaking drop-ins.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Campus Language Clinic Desk]
Advisor: Good morning, Academic English & Language Support Clinic, Hannah speaking. How may I assist?
Student: Hi Hannah, I started my structural engineering dissertation this month and want to register for academic seminar fluency clinics plus pronunciation coaching.
Advisor: [[Q1]] Gladly! Let me create a clinic profile first—could you spell your surname? Yes, it is Takahashi, spelled T-A-K-A-H-A-S-H-I.
Advisor: [[Q2]] Thank you, Ms. Takahashi! Every full-time postgraduate qualifies free for up to six individual thirty-minute diagnostic consultations every taught semester!
Student: [[Q3]] Free? Brilliant! What about weekly evening group workshops polishing academic hedging verbs and literature synthesis? Our popular Wednesday evening Academic Writing Salon meets inside Arts Wing Seminar 204 from five thirty to seven!
Student: [[Q4]] Perfect window after studio! Do learners bring printed paper essay pages to individual speaking appointments, or screen drafts digitally? Email up to six hundred sample words twenty-four hours prior so tutors spot recurring passive-voice or preposition habits beforehand!
Advisor: [[Q5]] Nice structured setup! Also, I struggle catching rapid British idiomatic jokes during lab group coffee chats—do clinics run informal listening speed workshops? Yes! Our Friday Lunchtime Regional Accents & Idiom Studio helps newcomers decode Yorkshire, Scottish, and fast everyday phrasing comfortably over herbal tea!
Student: [[Q6]] Count me in for Fridays! Wait—what if a student misses a booked one-on-one tutorial without alerting staff? Remember our fair booking clause: two consecutive uncancelled no-shows pause self-booking privileges automatically for fourteen days so peers never lose scarce chairs!
Advisor: [[Q7]] Fair rule. Do language clinic tutors sign official English proficiency waivers needed for PhD scholarships? No—clinics offer non-credit developmental support strictly rather than certified exam exemptions or visa assessment certificates!
Student: [[Q8]] Got it. Also, where can I check out self-study phonetic accent CDs or quiet bilingual technical dictionaries? Borrow graded engineering glossaries right inside our clinic landing nook beside Blue Lockers Three using ordinary student library cards!
Advisor: [[Q9]] Should anyone want peer grammar buddies between workshops, pin yellow index contact notes onto our Exchange Match Board beside Vending Corner South!
Student: [[Q10]] Thanks Hannah! Confirm my Wednesday evening slot referencing Clinic Booking ID LC-715.`,
        questions: [
          {
            id: 'cd_listening_m5_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname: ______',
            correctAnswer: 'TAKAHASHI',
            explanation: 'Spelled T-A-K-A-H-A-S-H-I.'
          },
          {
            id: 'cd_listening_m5_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Maximum free 30-minute one-on-one consultations per semester: ______',
            correctAnswer: 'SIX',
            explanation: 'Up to six individual thirty-minute sessions.'
          },
          {
            id: 'cd_listening_m5_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Room hosting Wednesday Academic Writing Salons: Seminar ______',
            correctAnswer: '204',
            explanation: 'Meets in Arts Wing Seminar 204.'
          },
          {
            id: 'cd_listening_m5_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Word cap for sample prose emailed 24 hours ahead of consultations: ______ sample words',
            correctAnswer: 'SIX HUNDRED',
            explanation: 'Email up to six hundred sample words beforehand.'
          },
          {
            id: 'cd_listening_m5_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Weekday hosting the informal Regional Accents & Idiom listening circle: ______',
            correctAnswer: 'FRIDAY',
            explanation: 'Runs Friday lunchtime.'
          },
          {
            id: 'cd_listening_m5_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Suspension length following two uncancelled clinic absences: ______ days',
            correctAnswer: 'FOURTEEN',
            explanation: 'No-shows pause booking access for fourteen days.'
          },
          {
            id: 'cd_listening_m5_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What official document can Language Clinic tutors NOT issue?',
            options: [
              'A. Attendance logs for departmental supervisors',
              'B. Reading lists for technical engineering vocabularies',
              'C. Customized feedback sheets on thesis citations',
              'D. Certified English waivers for PhD scholarships or visas'
            ],
            correctAnswer: 'D',
            explanation: 'Clinics give developmental support strictly, not formal waivers.'
          },
          {
            id: 'cd_listening_m5_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'Which cards check out technical engineering dictionaries beside Blue Lockers Three?',
            correctAnswer: 'LIBRARY CARDS',
            explanation: 'Borrow via standard student library cards.'
          },
          {
            id: 'cd_listening_m5_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Where should learners pin yellow cards seeking casual peer grammar buddies?',
            options: [
              'A. Exchange Match Board near Vending Corner South',
              'B. Seminar 204 corkboard door',
              'C. Reception Desk Two acrylic box',
              'D. Arts Wing stairwell banner wall'
            ],
            correctAnswer: 'A',
            explanation: 'Pin onto the Exchange Match Board beside Vending Corner South.'
          },
          {
            id: 'cd_listening_m5_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Wednesday clinic booking code: ______',
            correctAnswer: 'LC-715',
            explanation: 'Booking ID LC-715.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Walkthrough of the Speech Fluency & Phonetics Lab',
        audioScenario:
          'A senior speech coach introduces newcomers to sound-booth equipment, breathing posture stations, and oral presentation rehearsal rooms.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Speech Studio Orientation]
Coach: Welcome inside the Campus Speech & Pronunciation Conservatory! Whether preparing crisp viva examinations or tackling everyday confidence, explore five specialist stations open freely weekdays.
Coach: [[Q11]] Walking past foyer plants reveals Sound Mirrors A through C—acoustic curving Perspex domes letting speakers listen cleanly back to authentic throat vocal resonance rather than distorted internal jaw bone vibrations!
Coach: [[Q12]] Inside adjoining Pitch Curve Station Two, laptops graph real-time vocal melody lines onto bright blue curves so learners practice steady warm downward statement intonation rather than nervous upward inflections!
Coach: [[Q13]] Notice green cushioned yoga mats stored cleanly beside Cabinet D: oral coaches lead morning diaphragmatic breathing drills helping hurried presenters drop raised tight shoulders before facing terrifying lecture juries!
Coach: [[Q14]] On Tuesday afternoons at three sharp, volunteer drama seniors facilitate playful tongue-twister vowel gyms untangling crisp minimal English distinctions like "ship" versus "sheep" without awkward lecturing!
Coach: [[Q15]] Behind frosted glass sits Presentation Rehearsal Theater Eight equipped with authentic podium lights, slide remote clickers, and timed amber warning clocks flashing gently at minute nine!
Coach: [[Q16]] Remember strict digital cleanliness whenever borrowing shared tabletop studio headsets: peel fresh blue single-use hygienic fabric ear covers off dispenser rolls before dropping phones into trays!
Coach: [[Q17]] Never leave chewing gum or rattling hard mints inside vocal checkups—whispered dry clicking sounds roar loudly through ultra-sensitive studio condenser diaphragms!
Coach: [[Q18]] Check our monthly "Three-Minute Thesis Lightning Challenge" board by Coffee Alcove Four: brave scientists earn fifty-pound book tokens simplifying dense jargon clearly onto lay ears!
Coach: [[Q19]] If any computer microphone meter freezes muted abruptly mid-drill, toggle the small brushed aluminium mute switch tucked underneath desk monitors rather than yanking thick braided USB cables!
Coach: [[Q20]] Pick up pocket phonemic vowel chart magnets neatly beside Wooden Coat Shelf One!`,
        questions: [
          {
            id: 'cd_listening_m5_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Sound Mirrors let speakers hear true voice tone without confusing internal ______ bone vibrations.',
            correctAnswer: 'JAW',
            explanation: 'Curving domes bypass internal jaw bone vibrations.'
          },
          {
            id: 'cd_listening_m5_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which anxious speaking habit do blue screen pitch graphs help learners replace smoothly?',
            correctAnswer: 'UPWARD INFLECTIONS',
            explanation: 'Learners replace nervous upward questioning inflections.'
          },
          {
            id: 'cd_listening_m5_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Physical skill coached on green cushions beside Cabinet D to calm raised shoulders: diaphragmatic ______',
            correctAnswer: 'BREATHING',
            explanation: 'Coaches guide morning diaphragmatic breathing drills.'
          },
          {
            id: 'cd_listening_m5_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Who hosts Tuesday afternoon playful pronunciation vowel contrast games?',
            options: [
              'A. Applied phonetics professors',
              'B. Volunteer senior drama students',
              'C. External broadcast radio newsreaders',
              'D. Postgraduate engineering peers'
            ],
            correctAnswer: 'B',
            explanation: 'Volunteer drama seniors lead vowel gyms Tuesdays at three.'
          },
          {
            id: 'cd_listening_m5_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Rehearsal Theater Eight flashes gentle ______ warning clocks politely at minute nine.',
            correctAnswer: 'AMBER',
            explanation: 'Timed amber warning clocks flash at minute nine.'
          },
          {
            id: 'cd_listening_m5_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Hygiene disposable item mounted on dispenser rolls for shared headsets: fabric ______ covers',
            correctAnswer: 'EAR',
            explanation: 'Slip fresh blue fabric ear covers over pads.'
          },
          {
            id: 'cd_listening_m5_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Besides chewing gum, what common throat-clearing snack ruins condenser recordings?',
            correctAnswer: 'HARD MINTS',
            explanation: 'Gum and rattling hard mints roar loudly on studio mics.'
          },
          {
            id: 'cd_listening_m5_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Prize awarded to winning jargon-free Three-Minute Thesis speakers: £ ______ tokens',
            correctAnswer: 'FIFTY',
            explanation: 'Victorious presenters receive fifty-pound book tokens.'
          },
          {
            id: 'cd_listening_m5_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What should a learner check first if a desktop microphone abruptly shows silent levels?',
            options: [
              'A. Unplug and reset rear braided USB cords',
              'B. Restart the Windows vocal recording application',
              'C. Check the aluminium mute switch beneath the desk screen',
              'D. Fetch spare handheld mics from Reception'
            ],
            correctAnswer: 'C',
            explanation: 'Toggle the small brushed aluminium mute switch under the monitor.'
          },
          {
            id: 'cd_listening_m5_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Souvenir pocket fridge magnet stacked by Wooden Shelf One: phonemic ______ chart',
            correctAnswer: 'VOWEL',
            explanation: 'Pick up phonemic vowel chart magnets.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Non-Native Lecture Listening Strategies',
        audioScenario:
          'Education postgraduates Nadia and Ben discuss university lecture note-taking habits across international cohorts with Prof. Lin.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Academic Listening Supervision]
Prof. Lin: Good afternoon Nadia and Ben. What emerged from eye-tracking sixty incoming master’s students watching fast economics lectures?
Nadia: [[Q21]] Startling contrast! Struggling listeners stared rigidly at presenter PowerPoint bullet lists word-for-word, trying silently to copy verbatim prose—leaving zero mental bandwidth whenever lecturers improvised crucial verbal examples off-slide!
Ben: [[Q22]] Conversely, top-scoring listeners sketched rapid two-column skeleton arrows—capturing bare causal relationships quickly while pausing neatly to tag confused timestamps with bold purple question marks for later replay!
Prof. Lin: Neat cognitive load mastery! Did live automated classroom captions help or distract non-native freshmen?
Nadia: [[Q23]] Mixed sword! Whenever complex technical terms like "monopsony" appeared cleanly typed onscreen, captions boosted comprehension fast—yet half the freshmen stopped glancing upward at speaker hand gestures altogether, losing sarcastic ironic warnings cleanly!
Prof. Lin: [[Q24]] Vital nuance around multimodal cues! How did students behave once recorded lecture replay videos unlocked afterwards? Almost seventy percent replayed confusing technical segments at slower speed, yet spent three hours rewinding single lectures linearly until learning two-minute keyword search bookmarks!
Ben: [[Q25]] Notice also one subtle instructor habit ruining comprehension abruptly: dropping verbal signpost phrases cleanly! When lecturers murmured casually without saying "however, three flaws undermine this model," non-native listeners missed crisp conceptual pivots altogether!
Prof. Lin: [[Q26]] Recommend explicit structural signpost training workshops straight inside faculty induction manuals inside Chapter Five!
Nadia: [[Q27]] Another cultural barrier surprised students during lively seminar Q&A rounds: polite international speakers waited patiently for tidy silence gaps before jumping in, whereas fast domestic peers interrupted smoothly mid-breath!
Prof. Lin: [[Q28]] Suggest rotating visible chair speaking-queue hand-tokens during messy mixed-nationality group discussions inside recommendations!
Ben: [[Q29]] For Tuesday’s Language Education Symposium, should we share eye-heatmap screenshots or show anonymized skeleton versus verbatim notebook spreads?
Prof. Lin: [[Q30]] Display real student notebook spreads side by side—educators spot verbatim transcription overload instantly in two glances!`,
        questions: [
          {
            id: 'cd_listening_m5_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Staring at PowerPoint bullet lists trying to copy verbatim ______ starved attention for spoken examples.',
            correctAnswer: 'PROSE',
            explanation: 'Trying to copy verbatim prose left zero attention for spoken examples.'
          },
          {
            id: 'cd_listening_m5_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'What coloured margin mark did strong listeners drop beside unclear timestamps to revisit later?',
            correctAnswer: 'PURPLE QUESTION MARKS',
            explanation: 'Tagged confused spots with bold purple question marks.'
          },
          {
            id: 'cd_listening_m5_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What subtle communication channel did over-reliance on automated captions hide from students?',
            options: [
              'A. Spoken mathematical equations on side chalkboards',
              'B. Subtle volume rises highlighting exam tips',
              'C. Speaker hand gestures signaling sarcasm or caution',
              'D. Background classmate whisper exchanges'
            ],
            correctAnswer: 'C',
            explanation: 'Eye fixation on text hid speaker gestures signaling irony.'
          },
          {
            id: 'cd_listening_m5_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Playback shortcut cutting three-hour video scrubbing dramatically: keyword ______ bookmarks',
            correctAnswer: 'SEARCH',
            explanation: 'Saved hours using two-minute keyword search bookmarks.'
          },
          {
            id: 'cd_listening_m5_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Omitting explicit verbal ______ phrases left non-native listeners missing major lecture pivots.',
            correctAnswer: 'SIGNPOST',
            explanation: 'Missing verbal signpost phrases obscured transitions.'
          },
          {
            id: 'cd_listening_m5_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'University training document proposed for adding signpost guidance in Chapter Five: faculty ______ manuals',
            correctAnswer: 'INDUCTION',
            explanation: 'Target faculty induction manuals.'
          },
          {
            id: 'cd_listening_m5_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'Why did international postgraduates speak less often during lively group debates?',
            options: [
              'A. Polite listeners waited for clear pauses while fluent peers cut in mid-breath',
              'B. Complex academic idioms scared shy newcomers silent',
              'C. Lecturers graded participation unequally across tables',
              'D. Seminar circle seating pushed quieter visitors to corners'
            ],
            correctAnswer: 'A',
            explanation: 'Waiting politely for silence failed when peers jumped in mid-breath.'
          },
          {
            id: 'cd_listening_m5_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which practical classroom chair device balances chaotic mixed-cohort discussions?',
            correctAnswer: 'HAND-TOKENS',
            explanation: 'Suggest rotating visible speaking-queue hand-tokens.'
          },
          {
            id: 'cd_listening_m5_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Day scheduled for presenting notebook comparisons at the Symposium: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Symposium happens Tuesday.'
          },
          {
            id: 'cd_listening_m5_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Prof. Lin favor pairing real notebook pages side by side on presentation slides?',
            options: [
              'A. Paper ink photos look warmer than digital eye tracks',
              'B. Sample pages provide handy templates for seminar handouts',
              'C. Eye-tracking privacy ethics forbid showing gaze plots',
              'D. Educators recognize verbatim transcription overload instantly'
            ],
            correctAnswer: 'D',
            explanation: 'Educators spot verbatim transcription overload instantly.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Ancient Agricultural Terracing & Sustainable Water Systems',
        audioScenario:
          'An environmental archaeologist lectures at an Ancient Agriculture Seminar explaining pre-industrial desert flood-farming and mountain terrace engineering.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Ancient Agriculture Engineering Seminar]
Lecturer: Modern agribusiness frequently views pre-industrial peasant farming as primitive hand-to-mouth guesswork—yet archaeological excavations reveal astonishing hydraulic intelligence sustaining dense ancient civilizations across blistering dry lands!
Lecturer: [[Q31]] High along steep Peruvian Andes granite canyons, pre-Inca engineers sculpted monumental dry-stone agricultural step terraces—andenes—trapping rushing muddy mountain snowmelt gently instead of letting monsoons wash shallow hillside topsoil straight into ocean valleys!
Lecturer: [[Q32]] Remarkably, cross-section digs inside Moray’s famous sunken circular amphitheater terraces show clever stratified stone fill: coarse gravel drainage below dark fertile river silt holds soil temperatures up to fifteen degrees warmer between bottom bowls and wind-swept upper rims—effectively creating stacked vertical crop climate incubators!
Lecturer: [[Q33]] Across scorching Iranian plateaus lacking mighty surface rivers altogether, ancient Persian qanat builders engineered slightly sloped underground water tunnels stretching thirty miles straight into deep foothills gravel—flowing silently by gentle gravity without burning single evaporation watts!
Lecturer: [[Q34]] Crucially, keeping qanats buried cleanly deep underground halted blistering summer sun from evaporating precious snowmelt while guaranteeing sparkling cool clean drinking springs straight into desert mud-brick towns!
Lecturer: [[Q35]] Meanwhile, around swampy shallow Lake Texcoco outside medieval Mexico City, Aztec farmers wove rectangular floating garden islands—chinampas—out of woven reed mats staked carefully inside nitrogen-rich shallow lake mud beside quick-rooting willow trees!
Lecturer: [[Q36]] Continuously spooning rich decayed duckweed canal sludge upward onto narrow chinampa beds delivered seven lush vegetable harvests yearly without ever exhausting soil phosphorus!
Lecturer: [[Q37]] Similarly, dry Nabataean city dwellers at Petra carved rock cisterns and desert hillside gravel mounds catching rare three-inch winter flash cloudbursts—channeling sudden storm floods neatly down stepped limestone wadi dams straight onto thriving fig orchards!
Lecturer: [[Q38]] Sadly, twentieth-century mechanical tractors tore down countless delicate dry-stone walls across Mediterranean hills to widen straight diesel plow lanes—unleashing catastrophic winter mudslides and dried sunken village wells!
Lecturer: [[Q39]] Encouragingly, Andean rural communities today resurrect abandoned stone terrace canals alongside climate agronomists, buffering extreme dry El Niño droughts far reliably than imported chemical nitrogen bags alone!
Lecturer: [[Q40]] Ancient farming marvels therefore prove true ecological permanence grows not by overpowering desert hills with brute steel, but listening gently to slope, stone, gravity, and seasonal rain!`,
        questions: [
          {
            id: 'cd_listening_m5_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Pre-Inca stepped stone hillside walls trapping snowmelt cleanly in Peru: ______',
            correctAnswer: 'ANDENES',
            explanation: 'Dry-stone step terraces known as andenes.'
          },
          {
            id: 'cd_listening_m5_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Maximum temperature difference engineered inside Moray’s circular sunken crop bowls:',
            correctAnswer: 'FIFTEEN DEGREES',
            explanation: 'Terrace depth shifts soil temperature up to fifteen degrees.'
          },
          {
            id: 'cd_listening_m5_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Natural driving force powering thirty-mile underground Persian qanat tunnels silently: ______',
            correctAnswer: 'GRAVITY',
            explanation: 'Sloped tunnels carry snowmelt gently via gravity.'
          },
          {
            id: 'cd_listening_m5_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What crucial advantage gained by burying Persian water channels deep underground?',
            options: [
              'A. Blocked mountain landslides tearing aqueduct bridges',
              'B. Eliminated rapid desert surface evaporation in scorching summer air',
              'C. Prevented rival kingdoms diverting rivers cleanly',
              'D. Added dissolved iron minerals into orchard water'
            ],
            correctAnswer: 'B',
            explanation: 'Keeping qanats buried halted scorching desert evaporation losses.'
          },
          {
            id: 'cd_listening_m5_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Fast-growing lakeside trees anchoring Aztec chinampa garden banks firmly: ______',
            correctAnswer: 'WILLOW',
            explanation: 'Staked beside quick-rooting willow trees.'
          },
          {
            id: 'cd_listening_m5_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Scooping rich lakebed ______ sludge onto chinampas supported seven lush annual harvests.',
            correctAnswer: 'DUCKWEED',
            explanation: 'Decayed duckweed canal sludge replenished fertility continuously.'
          },
          {
            id: 'cd_listening_m5_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which fruit orchards thrived around ancient Petra using stepped wadi storm dams?',
            correctAnswer: 'FIG ORCHARDS',
            explanation: 'Flash cloudbursts irrigated thriving fig orchards.'
          },
          {
            id: 'cd_listening_m5_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What environmental harm followed clearing old Mediterranean hillside stone walls for tractors?',
            options: [
              'A. Violent winter mudslides washed slopes bare and wells ran dry',
              'B. Locust swarms nested across flat fields',
              'C. Clay drainage pipes rusted rapidly underground',
              'D. Olive tree blossoms froze earlier in springs'
            ],
            correctAnswer: 'A',
            explanation: 'Demolishing walls triggered severe mudslides and dried village wells.'
          },
          {
            id: 'cd_listening_m5_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Specialists helping rural Andean towns restore abandoned terrace canals today: climate ______',
            correctAnswer: 'AGRONOMISTS',
            explanation: 'Communities rebuild canals alongside climate agronomists.'
          },
          {
            id: 'cd_listening_m5_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What overarching agricultural principle closes the seminar?',
            options: [
              'A. Giant concrete river reservoirs always eclipse traditional earth canals',
              'B. Floating marsh farming outperforms dryland cereals globally',
              'C. Subterranean wells dry up permanently past three centuries',
              'D. Enduring harvests work gently alongside local slope, stone, gravity, and rain'
            ],
            correctAnswer: 'D',
            explanation: 'Permanence grows by working harmoniously with slope, stone, gravity, and rain.'
          }
        ]
      }
    ]
  })
];
