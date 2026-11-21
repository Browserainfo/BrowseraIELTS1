/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_06: TestItem[] = [
  // =========================================================================
  // PRACTICE 26: Wildlife Rescue Sanctuary Volunteer Induction
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p26',
    testNumber: 26,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 26: Wildlife Rescue Sanctuary Volunteer Induction',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Wildlife Rescue Sanctuary Volunteer Induction.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Signing Up as a Wildlife Hospital Volunteer',
        audioScenario:
          'An ecology graduate phones the Oakwood Wildlife Rehabilitation Center coordinator to enroll in weekend animal-care shifts.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Oakwood Wildlife Sanctuary Office]
Coordinator: Good morning, Oakwood Wildlife Rescue Sanctuary, Tessa speaking. How can I help?
Applicant: Hello Tessa, I finished my zoology finals last month and would love to help feed injured hedgehogs and waterfowl on weekends.
Coordinator: [[Q1]] Marvelous! Let me enter your contact profile first—what is your surname? It is Gallagher—wait no, excuse me, Thornton, spelled T-H-O-R-N-T-O-N.
Coordinator: [[Q2]] Got you, Ms. Thornton. Before entering hospital pens around owls or foxes, every adult volunteer must show proof of an up-to-date tetanus booster injection!
Applicant: Check—I updated mine last summer prior to field work. Which weekend shift fits new hands best?
Coordinator: [[Q3]] Sunday morning intake shifts run from eight sharp until twelve thirty, pairing newcomers beside experienced veterinary nurses cleaning cages and weighing underweight autumn hoglets.
Applicant: [[Q4]] Sounds wonderful! Do trainees pay an upfront kit charge for sanctuary work gear? Zero administration fees apply, though you buy a washable navy sanctuary cotton tunic at cost for fourteen pounds to leave muddy kennel germs behind inside lockers!
Applicant: [[Q5]] Fair enough! What footwear handles slippery scrubbed concrete corridors safely indoors? Pack pull-on rubber wellington boots dedicated strictly to sanctuary floors—never wear farm boots worn earlier in backyard barns!
Coordinator: [[Q6]] Notice our iron handling boundary during month one: fresh volunteers observe quietly while vets administer antibiotics—only seasoned carers cleared after twelve weeks lift stressed adult swans or badgers!
Applicant: [[Q7]] Totally understand—patient welfare comes first. Do rural bus stops serve Oakwood Lane directly on sleepy Sunday mornings? Village bus 44 skips Sunday runs before eleven, so volunteer carpools leave Central Station Taxi Rank at seven thirty-five cleanly—reserve seat access via our lift WhatsApp group!
Coordinator: [[Q8]] Also remember strict quiet confidentiality around rare owls and kestrels inside Barn Three: selfies near open recovery crates stay strictly prohibited because camera clicks stress wild birds back into shock!
Applicant: [[Q9]] Should volunteers pack packed lunch boxes inside main hospital fridges? Never store human snacks inside clinical specimen fridges containing raw mice or fish! A sunlit kettle break hut stands right beside our herb greenhouse with separate clean lunchboxes.
Coordinator: [[Q10]] Let us book your mandatory two-hour Sunday induction workshop—bring printed immunization proof and register under Volunteer ID WL-908.`,
        questions: [
          {
            id: 'cd_listening_p26_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'THORNTON',
            explanation: 'Spelled T-H-O-R-N-T-O-N.'
          },
          {
            id: 'cd_listening_p26_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Mandatory vaccination required before entering hospital animal pens: ______ booster',
            correctAnswer: 'TETANUS',
            explanation: 'Requires proof of an up-to-date tetanus booster.'
          },
          {
            id: 'cd_listening_p26_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Closing hour of the Sunday morning volunteer shift:',
            correctAnswer: 'TWELVE THIRTY',
            explanation: 'Sunday shifts run eight until twelve thirty.'
          },
          {
            id: 'cd_listening_p26_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'At-cost price of the washable navy sanctuary work tunic: £ ______',
            correctAnswer: 'FOURTEEN',
            explanation: 'Sanctuary tunic costs fourteen pounds.'
          },
          {
            id: 'cd_listening_p26_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Waterproof footwear required strictly indoors along wet kennel tiles: ______ boots',
            correctAnswer: 'WELLINGTON',
            explanation: 'Bring clean rubber wellington boots kept strictly on site.'
          },
          {
            id: 'cd_listening_p26_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Weeks of experience required before volunteers may handle badgers or adult swans: ______ weeks',
            correctAnswer: 'TWELVE',
            explanation: 'Carers wait twelve weeks before lifting stressed large wildlife.'
          },
          {
            id: 'cd_listening_p26_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why do Sunday early volunteers arrange rides from Central Station?',
            options: [
              'A. Route 44 village buses do not run before 11 AM on Sundays',
              'B. Sanctuary car parks close until midday',
              'C. Narrow oak lanes flood seasonally after heavy rain',
              'D. Carpool drivers collect frozen fish supplies en route'
            ],
            correctAnswer: 'A',
            explanation: 'Bus 44 skips early Sunday morning service before eleven.'
          },
          {
            id: 'cd_listening_p26_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Why are volunteer selfies near Barn Three crates strictly forbidden?',
            options: [
              'A. Flash reflection scares nocturnal bats outdoors',
              'B. Camera clicks and intrusion stress recovering birds into shock',
              'C. Donors retain exclusive media publication rights',
              'D. Phones distract trainees checking weight charts'
            ],
            correctAnswer: 'B',
            explanation: 'Noise and proximity around recovery crates drive wild birds into shock.'
          },
          {
            id: 'cd_listening_p26_lq9',
            number: 9,
            type: 'short_answer',
            questionText: 'Where do volunteers store and eat personal snacks cleanly away from specimen fridges?',
            correctAnswer: 'BREAK HUT',
            explanation: 'Sunlit kettle break hut stands beside the herb greenhouse.'
          },
          {
            id: 'cd_listening_p26_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Volunteer induction registration code: ______',
            correctAnswer: 'WL-908',
            explanation: 'Register under Volunteer ID WL-908.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Sanctuary Quarantine & Flight Aviary Walkthrough',
        audioScenario:
          'A senior wildlife nurse guides inducted volunteers past triage wards, oiled-seabird wash pools, and silent owl flight tunnels.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Wildlife Sanctuary Grounds Tour]
Nurse: Stay closely inside green footpath markers everyone! Wildlife rehabilitation succeeds solely when rescued animals retain wild wariness rather than bonding lazily onto humans like backyard pets!
Nurse: [[Q11]] Glance silently through one-way darkened Perspex windows into Isolation Ward Alpha: newly rescued barn owls sit wrapped inside heated towels atop non-slip astro-turf pads recovering smoothly from roadside collision concussions!
Nurse: [[Q12]] Outside the door sits a steaming shallow disinfectant footbath tray refreshed every dawn—scrub boot soles cleanly each time entering OR exiting wards so avian flu never crosses doors!
Nurse: [[Q13]] Behind us lies the Seabird Wash Shed: oiled coastal guillemots receive gentle liquid dish-soap baths warmed precisely to forty-one degrees before soft blow-drying restores natural interlocking feather waterproofing!
Nurse: [[Q14]] Never offer bread crusts or cow milk to starved autumn hedgehogs brought in by neighbors—wild hedgehogs lack enzymes to digest cow lactose, developing fatal dehydration swiftly!
Nurse: [[Q15]] Instead, nursing volunteers serve meaty dog-loaf pellets beside tiny lukewarm tap-water bowls inside quiet dark newspaper-lined cardboard kennels.
Nurse: [[Q16]] Down past willows stretches our forty-metre curved Mesh Flight Tunnel—here healed sparrowhawks build wing stamina dodging natural branch perches silently while automatic overhead sprinklers mimic soft autumn rain showers!
Nurse: [[Q17]] Notice every release badger clan leaves strictly back onto identical recorded map grids within five hundred metres of rescue bridges so existing territorial packs don’t ambush strangers!
Nurse: [[Q18]] Check our bright chalkboard beside Triage Door One: orange magnets track underweight babies demanding four-hourly syringe feeds overnight until weights climb past six hundred grams!
Nurse: [[Q19]] If injured bats arrive coiled neatly inside shoe boxes at reception, summon licensed rabies-vaccinated bat handlers promptly rather than touching tiny razor-sharp wing claws barefoot!
Nurse: [[Q20]] Pick up waterproof laminated triage checklist cards from our brass weather-box outside Workshop Gate Two right after applause!`,
        questions: [
          {
            id: 'cd_listening_p26_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'One-way material letting volunteers watch concussed owls silently unseen: ______ windows',
            correctAnswer: 'PERSPEX',
            explanation: 'One-way darkened Perspex windows hide observers.'
          },
          {
            id: 'cd_listening_p26_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which hygiene tray must boots step through entering or exiting every ward?',
            correctAnswer: 'DISINFECTANT FOOTBATH',
            explanation: 'Scrub soles in the disinfectant footbath tray.'
          },
          {
            id: 'cd_listening_p26_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Protective feather trait restored after soap washing and blow-drying oiled seabirds: ______',
            correctAnswer: 'WATERPROOFING',
            explanation: 'Restores natural interlocking feather waterproofing.'
          },
          {
            id: 'cd_listening_p26_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why must neighbors never feed milk to rescued wild hedgehogs?',
            options: [
              'A. Milk attracts wasps into dark sleeping nests',
              'B. Dairy coats spines and chills night burrows',
              'C. Hedgehogs cannot digest lactose, triggering lethal dehydration',
              'D. Hedgehogs prefer crunchy raw sunflower kernels'
            ],
            correctAnswer: 'C',
            explanation: 'Wild hedgehogs lack lactase, causing fatal dehydration.'
          },
          {
            id: 'cd_listening_p26_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Hospital kennels feed hedgehogs plain lukewarm water alongside meaty ______ pellets.',
            correctAnswer: 'DOG-LOAF',
            explanation: 'Nurses serve meaty dog-loaf pellets.'
          },
          {
            id: 'cd_listening_p26_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Length of curved Mesh Flight Tunnel strengthening recovering hawks: ______ metres',
            correctAnswer: 'FORTY',
            explanation: 'Curved Mesh Flight Tunnel spans forty metres.'
          },
          {
            id: 'cd_listening_p26_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'Why must healed badgers be returned within 500 metres of their original rescue spot?',
            options: [
              'A. Soil types differ sharply across neighboring valleys',
              'B. Rural bus passes only cover local parish fields',
              'C. Neighboring badger packs violently attack unfamiliar intruders',
              'D. Cubs forget foraging scents beyond half a kilometre'
            ],
            correctAnswer: 'C',
            explanation: 'Resident packs ambush unfamiliar strangers.'
          },
          {
            id: 'cd_listening_p26_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Minimum release weight threshold in grams for autumn hedgehogs leaving syringe care: ______ hundred',
            correctAnswer: 'SIX',
            explanation: 'Care continues until weight passes six hundred grams.'
          },
          {
            id: 'cd_listening_p26_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Which immunization qualifies specialist handlers to examine incoming rescued bats?',
            correctAnswer: 'RABIES-VACCINATED',
            explanation: 'Wait solely for rabies-vaccinated bat handlers.'
          },
          {
            id: 'cd_listening_p26_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Gate number beside the brass checklist weather-box: Gate ______',
            correctAnswer: 'TWO',
            explanation: 'Collect cards outside Workshop Gate Two.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Tracking Post-Release Survival of Juvenile Hedgehogs',
        audioScenario:
          'Conservation students Maya and Jack review VHF radio-collar telemetry logs with field ecologist Dr. Cross.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Wildlife Telemetry Seminar]
Dr. Cross: Good afternoon Maya and Jack. Did lightweight radio tags on thirty winter-released hedgehogs confirm good survival once hospital doors swung open?
Maya: [[Q21]] Encouraging overall—seventy-six percent thrived past eight weeks outdoors, though juveniles released directly into sleek manicured golf-edge lawns lost weight twice faster than peers placed beside scruffy messy bramble ditches!
Jack: [[Q22]] Also, lightweight epoxy-glued back-spine radio transmitters fell off harmlessly after natural spring spine-shedding rather than irritating burrowing movements under dense garden sheds!
Dr. Cross: Clean welfare engineering! Were nocturnal badgers or speeding country traffic the deadlier threat?
Maya: [[Q23]] Surprisingly, badgers took barely two tagged animals along upland meadows, whereas unlit B-road rush-hour commuters crossing village corners accounted for two-thirds of winter mortalities!
Dr. Cross: [[Q24]] Sobering road-ecology signal! How did you verify surviving hedgehogs gained real beetle foraging mass rather than just lounging near generous backyard homeowner cat-food bowls? Nighttime footprint ink tunnels spaced five hundred metres out along pasture hedgerows proved eighty percent hunted natural earthworms independently!
Jack: [[Q25]] Wait—one technical bug jarred signal tracking during wet November mist: tall wet fern fronds bounced deceptive double VHF reflections off limestone crags, making lone sleeping nests seem to sprint thirty yards uphill!
Dr. Cross: [[Q26]] Note that directional multi-path reflection caveat clearly beside Map Three so GIS readers distrust stray single-point ping outliers!
Maya: [[Q27]] Another quirk appeared in body weight thresholds: autumn orphans released above seven hundred grams weathered sudden February frosts smoothly, whereas lighter five-hundred-gram releases woke prematurely starving mid-snow!
Dr. Cross: [[Q28]] Emphasize updating our sanctuary discharge cutoff to six-hundred-fifty minimum grams directly inside policy recommendations!
Jack: [[Q29]] For Tuesday’s trustees seminar, should we animate daily nocturnal walking tracks across garden alleys or chart average nest distances?
Dr. Cross: [[Q30]] Overlay five actual nighttime tracks straight onto village housing aerial maps—revealing precisely which garden fence gravel-boards villagers should trim square hedgehog tunnels underneath!`,
        questions: [
          {
            id: 'cd_listening_p26_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Wild habitat beside ditches where newly released hedgehogs retained healthy body mass: ______ ditches',
            correctAnswer: 'BRAMBLE',
            explanation: 'Animals placed near messy bramble ditches thrived far better.'
          },
          {
            id: 'cd_listening_p26_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Natural spring process letting epoxy spine radio tags drop harmlessly:',
            correctAnswer: 'SPINE-SHEDDING',
            explanation: 'Transmitters dropped off naturally during spring spine-shedding.'
          },
          {
            id: 'cd_listening_p26_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What accounted for two-thirds of winter post-release hedgehog deaths?',
            options: [
              'A. Early commuting traffic on unlit country village roads',
              'B. Nocturnal badger predation on upland pastures',
              'C. Garden slug chemical pellets in suburban estates',
              'D. Prolonged February snow floods inside hibernation nests'
            ],
            correctAnswer: 'A',
            explanation: 'Two-thirds perished along unlit B-road village rush-hour corners.'
          },
          {
            id: 'cd_listening_p26_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Passive tracking tool along hedgerows verifying independent earthworm foraging: ______ tunnels',
            correctAnswer: 'INK',
            explanation: 'Nighttime footprint ink tunnels confirmed natural foraging.'
          },
          {
            id: 'cd_listening_p26_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Wet tall fern fronds bounced deceptive ______ reflections off crags during misty signal checks.',
            correctAnswer: 'VHF',
            explanation: 'Caused deceptive double VHF reflections off limestone crags.'
          },
          {
            id: 'cd_listening_p26_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Graphic caption where GPS/GIS error caveats must appear cleanly: Map ______',
            correctAnswer: 'THREE',
            explanation: 'Note reflection caveats beside Map Three.'
          },
          {
            id: 'cd_listening_p26_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What happened to lighter 500-gram hedgehogs during sudden February frosts?',
            options: [
              'A. They shifted burrows toward warm garage doors',
              'B. They survived smoothly by sharing communal nests',
              'C. They stayed dormant two weeks longer than peers',
              'D. They woke prematurely from hibernation starving during snow'
            ],
            correctAnswer: 'D',
            explanation: 'Lighter 500-gram juveniles woke prematurely starving mid-snow.'
          },
          {
            id: 'cd_listening_p26_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Updated sanctuary winter release minimum weight recommended in policy:',
            correctAnswer: 'SIX-HUNDRED-FIFTY',
            explanation: 'Raise discharge cutoff to six-hundred-fifty grams.'
          },
          {
            id: 'cd_listening_p26_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Day set for presenting findings to sanctuary trustees: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Presented at Tuesday’s trustees seminar.'
          },
          {
            id: 'cd_listening_p26_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Dr. Cross want five nocturnal routes overlaid on village housing aerials?',
            options: [
              'A. To secure road speed cameras from parish councils',
              'B. To inspire residents to cut small fence gaps connecting gardens',
              'C. To compare transmitter signal radii across rooftops',
              'D. To map toxic lawn treatment hotspots'
            ],
            correctAnswer: 'B',
            explanation: 'Shows homeowners where to cut small fence tunnels underneath barriers.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Urban Wildlife Corridors & Reconnecting Fragmented Habitats',
        audioScenario:
          'An urban ecologist lectures on how multi-lane highways sever genetic wildlife populations and how green overpasses restore woodland gene flow.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Urban Landscape Ecology Lecture]
Lecturer: Viewed from high satellites, modern nations appear woven cleanly by glossy highway ribbons—yet for frogs, pine martens, and foxes, four-lane expressways loom virtually like vertical sheer cliff walls.
Lecturer: [[Q31]] Ecologists warn that chopping spacious forests into tiny isolated woodland islands triggers rapid genetic inbreeding bottlenecks even when total protected woodland acreage looks generous on regional zoning charts!
Lecturer: [[Q32]] Amphibians suffer deadliest seasonal vulnerability: every soggy March dusk, thousands of migrating common toads march doggedly across busy asphalt commuter roads strictly toward ancestral birth ponds!
Lecturer: [[Q33]] Clever European highway engineers began burying smooth corrugated steel underpass culverts straight beneath tarmac strips—guided by knee-high curved plastic drift fences funneling crawling frogs cleanly safely underground!
Lecturer: [[Q34]] Crucially, dry bare galvanized steel pipes startled shy woodland voles until designers laid moist soil strips and damp mossy tree logs down culvert centers, creating dark welcoming forest tunnels!
Lecturer: [[Q35]] For bold canopy dwellers like red squirrels and dormice leaping high across sunny highway gaps, simple woven hemp rope sky-bridges suspended between tall oak crowns slash roadkill swiftly for pennies!
Lecturer: [[Q36]] Most impressive visually are sprawling landscaped wildlife land-bridges—fifty-metre-wide archways carpeted with living wild shrubs and buried boulders arching smoothly high above roaring lorry lanes!
Lecturer: [[Q37]] Long-term infrared camera traps monitoring Banff’s famous land-bridges logged over two hundred thousand safe crossings by elk, wolves, and grizzly bears—proving wary predators adapt confidently within just three winters!
Lecturer: [[Q38]] Even modest suburban backyard dwellers hold decisive leverage: swapping solid six-foot concrete garden walls for clipped hawthorn hedgerows restores continuous dark hunting highways cleanly across dense towns!
Lecturer: [[Q39]] Equally destructive is relentless blinding LED street-lamp floodlight spilling straight across dark stream banks—scaring foraging nocturnal moths and horseshoe bats cleanly away from vital safe bridges!
Lecturer: [[Q40]] Future city transport planning therefore combines shaded dark-sky highway fixtures alongside interconnected green bridges—treating wildlife mobility not as sentimental afterthought, but essential continental ecological infrastructure.`,
        questions: [
          {
            id: 'cd_listening_p26_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Long-term biological harm caused by splitting habitats into tiny woodland islands: genetic ______',
            correctAnswer: 'INBREEDING',
            explanation: 'Fragmentation sparks rapid genetic inbreeding bottlenecks.'
          },
          {
            id: 'cd_listening_p26_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Month when migrating common toads face fatal commuter road traffic:',
            correctAnswer: 'MARCH',
            explanation: 'Migrate every soggy March dusk.'
          },
          {
            id: 'cd_listening_p26_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Low barriers funneling frogs cleanly toward sunken highway pipes: ______ fences',
            correctAnswer: 'DRIFT',
            explanation: 'Curved plastic drift fences funnel amphibians underground.'
          },
          {
            id: 'cd_listening_p26_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What modification made shy woodland voles willing to cross steel road tunnels?',
            options: [
              'A. Laying damp soil strips and mossy logs down tunnel interiors',
              'B. Dim solar lamps mounted inside tunnel ceilings',
              'C. Installing acoustic sound shields around pipe mouths',
              'D. Spraying natural pine scent across metal walls'
            ],
            correctAnswer: 'A',
            explanation: 'Soil strips and mossy logs simulated familiar dark woodland floors.'
          },
          {
            id: 'cd_listening_p26_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Low-cost canopy crossing material helping squirrels bridge roads between oaks: woven ______ rope',
            correctAnswer: 'HEMP',
            explanation: 'Simple woven hemp rope bridges span tree crowns.'
          },
          {
            id: 'cd_listening_p26_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Banff’s landmark vegetated wildlife land-bridges measure ______ metres across.',
            correctAnswer: 'FIFTY',
            explanation: 'Landscaped land-bridges span fifty metres wide.'
          },
          {
            id: 'cd_listening_p26_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Winters required before wary Banff predators grew confident using overpasses: ______',
            correctAnswer: 'THREE',
            explanation: 'Predators adapted cleanly within three winters.'
          },
          {
            id: 'cd_listening_p26_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'What living backyard boundary replaces solid concrete fences to connect town gardens?',
            correctAnswer: 'HAWTHORN HEDGEROWS',
            explanation: 'Clipped hawthorn hedgerows restore continuous urban corridors.'
          },
          {
            id: 'cd_listening_p26_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Why must street-lamp lighting stay shaded away from wildlife bridge crossings?',
            options: [
              'A. Glare blinds drivers spotting deer shapes overhead',
              'B. Lamp insects clog bridge drainage channels',
              'C. Extra nighttime heat dries out planted shrubs rapidly',
              'D. Artificial glare drives away nocturnal bats and foraging moths'
            ],
            correctAnswer: 'D',
            explanation: 'Bright LED spill scares bats and nocturnal moths away.'
          },
          {
            id: 'cd_listening_p26_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How does the lecturer view wildlife bridges in future urban planning?',
            options: [
              'A. Expensive luxuries suitable strictly for national alpine parks',
              'B. Temporary experiments superseded by GPS tracking collars',
              'C. Essential continental ecological infrastructure alongside dark-sky lighting',
              'D. Tourism viewpoints funded by highway toll fees'
            ],
            correctAnswer: 'C',
            explanation: 'Treated as essential infrastructure uniting dark skies and green bridges.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 27: Graduate Alumni Mentorship Program Application
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p27',
    testNumber: 27,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 27: Graduate Alumni Mentorship Program Application',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Graduate Alumni Mentorship Program Application.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Enrolling in the Alumni Career Mentorship Scheme',
        audioScenario:
          'A final-year mechanical engineering student phones the Alumni Engagement Office to apply for industry mentoring and confirm matching criteria.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Alumni Mentorship Office]
Officer: Good afternoon, University Alumni Mentorship Desk, Priya speaking. How may I assist?
Student: Hi Priya, I am entering my final master’s semester and want to apply before next Friday’s closing deadline for an automotive engineering mentor!
Officer: [[Q1]] Excellent timing—matching opens Monday week! Could I pull up your student enrollment profile using your surname? Yes, it is Gallagher—sorry, my flatmate’s card! Mine is Henderson, spelled H-E-N-D-E-R-S-O-N.
Officer: [[Q2]] Glad we caught that, Mr. Henderson! Which exact specialization branch matches your career goal: electric powertrain manufacturing, commercial wind aerodynamics, or supply-chain procurement? Powertrain manufacturing fits my dissertation squarely.
Student: [[Q3]] Great—we hold twelve verified engineering mentors inside Midlands battery plants. Remember first: mentees pledge strict commitment to at least four structured monthly check-in meetings running forty minutes apiece via video or coffee across autumn and spring!
Student: [[Q4]] Easy commitment. Wait—how does algorithm pairing decide between two applicants wanting identical senior company mentors? Selection panelists grade a short three-hundred-word personal motivation paragraph rather than cumulative GPA transcripts alone!
Officer: [[Q5]] Good news—I thrive better explaining projects than reciting transcripts! Does the Alumni Office charge any joining fee, or cover train expenses if my matched mentor invites me touring a Coventry battery factory? Membership costs zero pounds, and verified student rail receipts up to thirty-five pounds per semester qualify straight under Career Travel Micro-Grants!
Student: [[Q6]] Terrific! Are student applicants permitted to pitch mentors explicitly for paid summer job contracts on call one? Strictly prohibited! Explicit job solicitation breaks program ethics codes cleanly—mentors advise portfolio gaps, review LinkedIn wording, and run mock technical questions rather than functioning as direct recruitment shortcuts!
Officer: [[Q7]] Understood clearly! Once matched, does a mentor-mentee pair stay bound exclusively online, or attend an in-person campus launch dinner? Our formal Keynote Speed-Networking Supper runs inside Senate Oak Room on Wednesday, November twelfth starting promptly at six thirty!
Student: [[Q8]] Check—November twelfth fits nicely. What happens if personality friction or unexpected international relocation stops my matched partner replying smoothly halfway through January? Simply flag our Match Support Coordinator within fourteen days of silence and we assign a standby backup alum immediately without harming future eligibility!
Officer: [[Q9]] Also note our mandatory sixty-minute online boundary webinar before matching: students log into Moodle Module MT-101 covering confidential nondisclosure secrets inside commercial prototypes!
Student: [[Q10]] Thanks Priya! Where should I email my polished three-hundred-word statement before Friday’s five o’clock portal shutdown? Upload directly through AlumniConnect portal tagging Reference AM-504.`,
        questions: [
          {
            id: 'cd_listening_p27_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student applicant surname: ______',
            correctAnswer: 'HENDERSON',
            explanation: 'Spelled H-E-N-D-E-R-S-O-N.'
          },
          {
            id: 'cd_listening_p27_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Chosen industry career branch: electric ______ manufacturing',
            correctAnswer: 'POWERTRAIN',
            explanation: 'Student selects powertrain manufacturing.'
          },
          {
            id: 'cd_listening_p27_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Minimum pledged monthly mentorship check-ins: ______ meetings',
            correctAnswer: 'FOUR',
            explanation: 'Mentees pledge at least four monthly check-ins.'
          },
          {
            id: 'cd_listening_p27_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'How long is the personal motivation essay deciding mentor matches?',
            correctAnswer: 'THREE-HUNDRED-WORD',
            explanation: 'Panelists review a three-hundred-word motivation statement.'
          },
          {
            id: 'cd_listening_p27_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Semester student rail reimbursement ceiling for factory site tours: £ ______',
            correctAnswer: 'THIRTY-FIVE',
            explanation: 'Travel grants reimburse rail fares up to thirty-five pounds.'
          },
          {
            id: 'cd_listening_p27_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What behavior strictly violates mentorship scheme ethics on opening calls?',
            options: [
              'A. Requesting feedback on graduate portfolio resumes',
              'B. Asking mentors directly for paid job placements',
              'C. Conducting mock technical engineering interviews',
              'D. Discussing general automotive factory work culture'
            ],
            correctAnswer: 'B',
            explanation: 'Explicit job solicitation breaks scheme ethics rules.'
          },
          {
            id: 'cd_listening_p27_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Hall hosting the November 12th Speed-Networking Supper: Senate ______ Room',
            correctAnswer: 'OAK',
            explanation: 'Hosted inside Senate Oak Room.'
          },
          {
            id: 'cd_listening_p27_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Silence window after which unresponsive mentor pairs get reassigned: ______ days',
            correctAnswer: 'FOURTEEN',
            explanation: 'Alert coordinator within fourteen days of silence.'
          },
          {
            id: 'cd_listening_p27_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why must applicants complete online Moodle Module MT-101 prior to matching?',
            options: [
              'A. To test English video-call audio microphone quality',
              'B. To upload certified engineering degree transcripts',
              'C. To score compatibility personality quizzes',
              'D. To review privacy and commercial nondisclosure rules'
            ],
            correctAnswer: 'D',
            explanation: 'Covers confidential nondisclosure expectations around prototypes.'
          },
          {
            id: 'cd_listening_p27_lq10',
            number: 10,
            type: 'short_answer',
            questionText: 'Portal upload reference code due before Friday 5 PM:',
            correctAnswer: 'AM-504',
            explanation: 'Tag upload with Reference AM-504.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: How to Lead Productive Alumni Mentoring Calls',
        audioScenario:
          'An alumni director coaches matched undergraduates on agenda setting, professional etiquette, and making mentoring partnerships work.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Mentee Preparation Seminar]
Director: Congratulations to all two hundred incoming mentees! Having paired thousands of enthusiastic graduates over ten years, one rule divides transformative partnerships from awkward fizzles: you drive the agenda cleanly!
Director: [[Q11]] Never join video Room One expecting busy senior hospital directors or venture partners to guess what puzzles you—email three crisp bullet questions forty-eight hours beforehand!
Director: [[Q12]] Skip asking broad lazy textbook riddles easily solved via Google, like "what does your firm do?"—ask instead how your mentor navigated their very first rocky team restructure or awkward supervisor disagreement!
Director: [[Q13]] Notice time discipline: always wrap meetings smoothly at minute thirty-eight unless your mentor explicitly stretches the clock—respecting calendars guarantees eager yeses next month!
Director: [[Q14]] Within twenty-four hours afterwards, fire off a crisp four-line thank-you recap summarizing two concrete actions you are executing this week rather than hollow generic flattery!
Director: [[Q15]] If your mentor generously introduces you to a design colleague at another firm, treat warm email referrals like solid gold—reply promptly and loop your original mentor politely once when closing the loop!
Director: [[Q16]] Avoid hiding setbacks: admitting honestly that you botched a quantitative screening test invites tailored honest coaching far quicker than pretending everything sails smoothly!
Director: [[Q17]] Notice international timezone trap: six percent of matched mentors dial in from Singapore, Dubai, or Toronto—verify exact UTC offsets carefully on calendar invites so nobody waits inside empty lobbies!
Director: [[Q18]] Every second Thursday lunchtime, drop into our Alumni Lounge Drop-In Clinic beside Careers Window Four if an unexpected awkward mentor dilemma surfaces mid-term!
Director: [[Q19]] Remember our optional end-of-year "Reverse Mentoring Spotlight" in June where graduating mentees teach veteran executives sharp emerging university habits around zero-waste tech or AI research verification!
Director: [[Q20]] Pick up cream pocket Agenda-Checklist foldouts beside Auditorium Pillar Two right after applause!`,
        questions: [
          {
            id: 'cd_listening_p27_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Number of clear agenda questions to email mentors 48 hours early: ______',
            correctAnswer: 'THREE',
            explanation: 'Send three crisp bullet questions beforehand.'
          },
          {
            id: 'cd_listening_p27_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Which type of question makes the strongest impression during mentoring calls?',
            options: [
              'A. Asking how mentors handled tough past conflicts or career pivots',
              'B. Asking company annual revenue figures',
              'C. Asking what entry salaries the mentor’s department pays',
              'D. Listing all university module coursework titles'
            ],
            correctAnswer: 'A',
            explanation: 'Ask how they navigated tricky restructures or disagreements.'
          },
          {
            id: 'cd_listening_p27_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'At what minute mark should mentees wrap up forty-minute meetings politely?',
            correctAnswer: 'MINUTE THIRTY-EIGHT',
            explanation: 'Wrap cleanly by minute thirty-eight unless mentors extend.'
          },
          {
            id: 'cd_listening_p27_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'Post-call thank-you notes sent within 24 hours should list two concrete ______ planned that week.',
            correctAnswer: 'ACTIONS',
            explanation: 'Summarize two concrete actions being executed.'
          },
          {
            id: 'cd_listening_p27_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Communication habit recommended when mentors refer colleagues: ______ the loop',
            correctAnswer: 'CLOSING',
            explanation: 'Update original mentor once when closing the loop.'
          },
          {
            id: 'cd_listening_p27_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'Why should mentees tell their mentors honestly about failed job tests?',
            options: [
              'A. Mentors can request retests directly with HR departments',
              'B. Candor unlocks targeted practical coaching instead of empty praise',
              'C. Failed tests trigger automatic program bonus hours',
              'D. Career counselors notify professors for extra tutoring'
            ],
            correctAnswer: 'B',
            explanation: 'Honesty invites tailored coaching far faster than pretending perfection.'
          },
          {
            id: 'cd_listening_p27_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Calendar hazard affecting six percent of mentors in Singapore or Toronto: ______ offsets',
            correctAnswer: 'UTC',
            explanation: 'Check exact UTC timezone offsets carefully.'
          },
          {
            id: 'cd_listening_p27_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Window next to the Thursday lunchtime mentee help drop-in clinic: Careers Window ______',
            correctAnswer: 'FOUR',
            explanation: 'Located beside Careers Window Four.'
          },
          {
            id: 'cd_listening_p27_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Name of the June wrap-up event where students coach experienced executives:',
            correctAnswer: 'REVERSE MENTORING SPOTLIGHT',
            explanation: 'June features the Reverse Mentoring Spotlight.'
          },
          {
            id: 'cd_listening_p27_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Foldout colour stacked beside Auditorium Pillar Two: ______',
            correctAnswer: 'CREAM',
            explanation: 'Pick up cream pocket Agenda-Checklist foldouts.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring First-Generation Student Outcomes in Alumni Mentoring',
        audioScenario:
          'Higher education researchers Sarah and Tariq analyze graduate employment gaps among mentored first-generation students with Dr. Grant.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Higher Education Policy Tutorial]
Dr. Grant: Welcome back, Sarah and Tariq. Did matching first-generation college leavers against alumni professionals narrow career confidence gaps cleanly?
Sarah: [[Q21]] Markedly yes—within two semesters, mentored first-generation graduates applied for graduate leadership schemes thirty-four percent more frequently than matched peers lacking alumni partners!
Tariq: [[Q22]] Qualitative diaries showed why: students lacking corporate family networks previously thought elite consultancies selected solely Oxbridge insiders rather than mastering hidden competency-interview wording!
Dr. Grant: Classic decoded hidden curriculum! Wait—did matching alumni exclusively by identical academic major outperform matching by personal hometown background?
Sarah: [[Q23]] Surprisingly, first-generation pairs matched across slightly different professions yet sharing rural upbringing stayed thirty percent closer emotionally than stiff formal major matches!
Dr. Grant: Intriguing psychological kinship! How did you stop selection self-bias skewing your statistical results when ambitious students joined mentoring first?
Tariq: [[Q24]] Overcommitted demand gave us an ethical lottery waitlist: comparing accepted winners against nearly identical waitlisted applicants isolated genuine mentorship gains cleanly!
Dr. Grant: [[Q25]] Textbook clean randomized control! Now tighten Chapter Three definitions: differentiate spontaneous informal coffee chats cleanly from structured curriculum-guided sessions inside your typology matrix.
Sarah: [[Q26]] Done—couples meeting randomly without monthly prompt prompts showed weak retention after month two compared to goal-tracked logs!
Tariq: [[Q27]] One sad bottleneck still hit arts and humanities mentees: senior media mentors felt guilty coaching enthusiastic storytellers while entry internships inside London newsrooms remained largely unpaid!
Dr. Grant: [[Q28]] Pair those funding gaps directly alongside the university’s alumni bursary stipend recommendation in Chapter Six so senior trustees spot tangible policy leverage!
Sarah: For Friday’s Education Research Showcase, should we play audio student quotes or project network growth bar graphs?
Dr. Grant: [[Q29]] Lead with anonymized student voice quotes revealing imposter syndrome melting away!
Sarah: [[Q30]] Agreed—numbers persuade committees, yet human candor drives endowment fundraising!`,
        questions: [
          {
            id: 'cd_listening_p27_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Increase in first-generation students applying for leadership graduate schemes: ______ percent',
            correctAnswer: 'THIRTY-FOUR',
            explanation: 'Applications rose thirty-four percent.'
          },
          {
            id: 'cd_listening_p27_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which practical application barrier had previously intimidated students without corporate relatives?',
            correctAnswer: 'COMPETENCY-INTERVIEW WORDING',
            explanation: 'Mentors demystified hidden competency-interview wording.'
          },
          {
            id: 'cd_listening_p27_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Which matching attribute produced 30% stronger emotional rapport in pairs?',
            options: [
              'A. Matching strictly within the exact academic degree code',
              'B. Pairing recent 2-year graduates rather than senior managers',
              'C. Sharing comparable rural hometown backgrounds even across fields',
              'D. Matching common second spoken languages'
            ],
            correctAnswer: 'C',
            explanation: 'Shared rural upbringing fostered 30% closer emotional rapport.'
          },
          {
            id: 'cd_listening_p27_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Fair allocation mechanism providing an unbiased control comparison group: ______ waitlist',
            correctAnswer: 'LOTTERY',
            explanation: 'Overcommitted demand created an ethical lottery waitlist control group.'
          },
          {
            id: 'cd_listening_p27_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Chapter Three’s typology matrix must separate casual coffees from ______-guided sessions.',
            correctAnswer: 'CURRICULUM',
            explanation: 'Differentiate informal chats from structured curriculum-guided sessions.'
          },
          {
            id: 'cd_listening_p27_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Month when unguided casual pairs frequently lost momentum: month ______',
            correctAnswer: 'TWO',
            explanation: 'Pairs without prompts dropped steeply after month two.'
          },
          {
            id: 'cd_listening_p27_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What frustration troubled media mentors paired with humanities students?',
            options: [
              'A. Humanities CVs lacked statistical portfolio software',
              'B. Busy TV broadcast schedules clashed with academic terms',
              'C. Entry London newsroom internships remained predominantly unpaid',
              'D. Students hesitated leaving regional hometowns'
            ],
            correctAnswer: 'C',
            explanation: 'Entry newsroom internships remained largely unpaid.'
          },
          {
            id: 'cd_listening_p27_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which institutional solution in Chapter Six tackles unpaid arts internship barriers?',
            correctAnswer: 'ALUMNI BURSARY STIPEND',
            explanation: 'Link gaps to the alumni bursary stipend recommendation.'
          },
          {
            id: 'cd_listening_p27_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Psychological hurdle student quotes help visualize melting away: ______ syndrome',
            correctAnswer: 'IMPOSTER',
            explanation: 'Quotes show imposter syndrome melting away.'
          },
          {
            id: 'cd_listening_p27_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'University goal especially energized by authentic human student stories: endowment ______',
            correctAnswer: 'FUNDRAISING',
            explanation: 'Human candor drives endowment fundraising.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Evolution of Guild Mentorship & Social Capital Networks',
        audioScenario:
          'A sociology professor lectures on weak-tie network theory and how organized mentoring democratizes career access once restricted to closed clubs.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Social Capital & Mentoring Theory]
Lecturer: Most ambitious graduates carefully polish solitary examination grades—yet labor sociology reveals job breakthroughs travel overwhelmingly through subtle human social networks rather than lonely internet portals alone.
Lecturer: [[Q31]] In 1973, sociologist Mark Granovetter unveiled a counterintuitive landmark discovery: white-collar workers landed new positions far less often through intimate best friends than via distant casual acquaintances—dubbed "the strength of weak ties"!
Lecturer: [[Q32]] Why did casual weak acquaintances triumph over loyal closest friends? Close friends inhabit identical neighborhoods, sharing identical rumors—whereas distant mentors bridge outside industries carrying fresh uncrowded opportunity leads!
Lecturer: [[Q33]] Sociologist Pierre Bourdieu cautioned darkly that elite cultural capital—effortless dinner confidence, subtle accent habits, inherited insider jargon—quietly reproduces family privilege unless schools unpack unspoken norms openly.
Lecturer: [[Q34]] Compare classic twentieth-century private university alumni societies: informal wood-paneled smoking clubs subtly filtered Wall Street apprenticeships exclusively toward prep-school rowing companions!
Lecturer: [[Q35]] Notice also the psychological difference between passive role modeling and active "sponsorship"—mentors advise privately behind closed café doors, whereas sponsors stake personal workplace credibility championing juniors directly inside promotion boards!
Lecturer: [[Q36]] Modern digital mentorship portals automate transparent matching across thousands of graduates, neutralizing unfair "who you met at family weddings" luck!
Lecturer: [[Q37]] Yet longitudinal company evaluations warn against toxic "clone-mentoring": busy executives subconsciously favor ambitious protégés mirroring their exact childhood sports or alma mater, freezing workplace diversity!
Lecturer: [[Q38]] Structured rubric matching counteracts unconscious bias by evaluating concrete skills curiosity rather than nostalgic hobby matches before assigning partners!
Lecturer: [[Q39]] Fascinatingly, formal mentoring benefits aging corporate veterans equally steeply—executives guiding inquisitive twenty-two-year-olds report sharper fresh strategic awareness and measurably lower mid-career burnout!
Lecturer: [[Q40]] Ultimately, democratic mentoring bridges invisible social chasms cleanly when structured sponsorship turns inherited insider secrets into transparent shared public maps.`,
        questions: [
          {
            id: 'cd_listening_p27_lq31',
            number: 31,
            type: 'short_answer',
            questionText: 'Sociological phrase coined by Mark Granovetter describing helpful distant acquaintances:',
            correctAnswer: 'WEAK TIES',
            explanation: 'Published "The Strength of Weak Ties" in 1973.'
          },
          {
            id: 'cd_listening_p27_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why do distant mentors unlock better career leads than close family friends?',
            options: [
              'A. Distant contacts connect separate outside industries with fresh openings',
              'B. Best friends lack honest interview feedback skills',
              'C. Distant acquaintances earn referral hiring bonuses',
              'D. Mentors hold older managerial hiring titles exclusively'
            ],
            correctAnswer: 'A',
            explanation: 'Weak ties bridge outside circles sharing non-overlapping job leads.'
          },
          {
            id: 'cd_listening_p27_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Concept analyzed by Pierre Bourdieu describing subtle insider jargon and social poise: ______ capital',
            correctAnswer: 'CULTURAL',
            explanation: 'Bourdieu examined inherited elite cultural capital.'
          },
          {
            id: 'cd_listening_p27_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Exclusive 20th-century alumni spaces filtering early finance fellowships silently: ______ clubs',
            correctAnswer: 'SMOKING',
            explanation: 'Wood-paneled smoking clubs reserved paths informally.'
          },
          {
            id: 'cd_listening_p27_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'How does active "sponsorship" go further than gentle private mentoring?',
            options: [
              'A. Sponsors loan interest-free tuition grants privately',
              'B. Sponsors guarantee relocation flights upon graduation',
              'C. Sponsors assign graded weekly leadership quizzes',
              'D. Sponsors risk personal reputation championing juniors in promotion rooms'
            ],
            correctAnswer: 'D',
            explanation: 'Sponsors actively spend credibility advocating juniors inside boards.'
          },
          {
            id: 'cd_listening_p27_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Transparent digital portals replace lucky accidental family ______ introductions cleanly.',
            correctAnswer: 'WEDDINGS',
            explanation: 'Neutralizes unfair accidental family wedding introductions.'
          },
          {
            id: 'cd_listening_p27_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Workplace bias trap where executives champion juniors resembling themselves: ______-mentoring',
            correctAnswer: 'CLONE',
            explanation: 'Subconscious bias creates self-replicating "clone-mentoring".'
          },
          {
            id: 'cd_listening_p27_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which matching tool prioritizes skill curiosity over nostalgic shared hobbies?',
            correctAnswer: 'RUBRIC MATCHING',
            explanation: 'Structured rubric matching fights unconscious bias.'
          },
          {
            id: 'cd_listening_p27_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Psychological perk reported by senior executives actively coaching youths: lower ______',
            correctAnswer: 'BURNOUT',
            explanation: 'Veterans report measurably lower mid-career burnout.'
          },
          {
            id: 'cd_listening_p27_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What marks successful institutional mentoring in the lecturer’s conclusion?',
            options: [
              'A. Replacing online job portals entirely with personal phone calls',
              'B. Turning closed insider career shortcuts into shared transparent maps',
              'C. Grouping senior graduates strictly with regional school alumni',
              'D. Auditing mentoring attendance against graduate salary raises'
            ],
            correctAnswer: 'B',
            explanation: 'Turns inherited insider secrets into transparent public maps.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 28: Renewable Solar Panel Installation Consultation
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p28',
    testNumber: 28,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 28: Renewable Solar Panel Installation Consultation',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Renewable Solar Panel Installation Consultation.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Home Rooftop Solar Survey Booking',
        audioScenario:
          'A homeowner calls SunGrid Domestic Renewables to arrange a structural roof inspection and battery sizing quotation.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: SunGrid Domestic Solar Inquiries]
Surveyor: Good morning, SunGrid Clean Energy Consultants, Arthur speaking. How may I assist?
Homeowner: Hello Arthur, we just moved into a 1930s brick semi-detached house and want to book a rooftop solar panel plus home battery survey.
Surveyor: [[Q1]] Gladly! Let me open a property folder first—could you spell your surname? Yes, it is Gallagher—no, excuse me, Whittaker, spelled W-H-I-T-T-A-K-E-R. Wait—did you check street number? Yes, 42 Oakridge Avenue.
Surveyor: [[Q2]] Noted cleanly, Ms. Whittaker! What roof tile type sits over your upper loft: interlocking concrete tiles, fragile natural Welsh slate, or standing seam metal? We have pitched dark grey Welsh slate tiles—does that bump labor pricing?
Surveyor: [[Q3]] Careful inspection note: drilling delicate slate tiles demands custom stainless lead-flashed slate hooks adding a modest hardware allowance of two hundred eighty pounds—worth every penny stopping winter leaks!
Homeowner: [[Q4]] Definitely keep zero leaks! Which roof aspect faces sunlight cleanly without tall neighbor oaks shading winter rays? Our rear garden extension slopes cleanly due south at thirty-five degrees—our architect flagged zero shade past nine in the morning!
Surveyor: [[Q5]] Textbook south-facing yield! Are you leaning toward solar panels strictly for daytime appliances, or adding a garage wall battery storing surplus noon kilowatts for evening dishwashers? Add a five-kilowatt-hour lithium battery unit inside our attached brick garage!
Surveyor: [[Q6]] Smart sizing! Notice our free structural surveyor visit includes a calibrated compass shade check plus electrical fuse-box amperage inspection—do you recall whether your main street utility intake carries sixty or a hundred amps? Let our surveyor check physically; our hallway fuse box wears a brass 1990s sticker!
Homeowner: [[Q7]] Fair enough! Does installing twelve panels require lengthy municipal town-hall planning permission first? Ordinary residential sloped roofs qualify automatically under Permitted Development exemptions unless sitting inside historic conservation estates or listed manor zones!
Surveyor: [[Q8]] Wonderful! What warranty protection guarantees long-term panel efficiency once scaffolding drops down? Tier-one monocrystalline panels carry a twelve-year physical defect replacement warranty alongside a twenty-five-year power output guarantee remaining above eighty-five percent!
Homeowner: [[Q9]] Should I clear narrow side alley flower pots before scaffolders arrive later in autumn? Keeping one metre clear along side passageways helps aluminium ladder crews bypass delicate glass conservatory panes safely!
Surveyor: [[Q10]] Let us pencil in Tuesday morning inspection at 10:20—keep survey confirmation code SG-742 handy for our roof engineer.`,
        questions: [
          {
            id: 'cd_listening_p28_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Homeowner surname: ______',
            correctAnswer: 'WHITTAKER',
            explanation: 'Spelled W-H-I-T-T-A-K-E-R.'
          },
          {
            id: 'cd_listening_p28_lq2',
            number: 2,
            type: 'short_answer',
            questionText: 'Fragile historic roof covering installed on the 1930s house:',
            correctAnswer: 'WELSH SLATE',
            explanation: 'House carries dark grey Welsh slate tiles.'
          },
          {
            id: 'cd_listening_p28_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Extra waterproofing bracket hardware charge on delicate slate roofs: £ ______',
            correctAnswer: 'TWO HUNDRED EIGHTY',
            explanation: 'Custom hooks add two hundred eighty pounds.'
          },
          {
            id: 'cd_listening_p28_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Pitch angle facing due south above the rear garden: ______ degrees',
            correctAnswer: 'THIRTY-FIVE',
            explanation: 'Roof slopes cleanly due south at thirty-five degrees.'
          },
          {
            id: 'cd_listening_p28_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Room selected to house the five-kilowatt-hour battery unit safely: brick ______',
            correctAnswer: 'GARAGE',
            explanation: 'Install unit inside the attached brick garage.'
          },
          {
            id: 'cd_listening_p28_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Which two electrical checks run alongside shading tests during free surveys?',
            correctAnswer: 'FUSE-BOX AMPERAGE',
            explanation: 'Inspects compass shading plus electrical fuse-box amperage.'
          },
          {
            id: 'cd_listening_p28_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'When are homeowners forced to seek special town-hall planning approval for rooftop panels?',
            options: [
              'A. Only inside conservation zones or listed heritage properties',
              'B. Whenever installing arrays exceeding eight panels',
              'C. When garages lie adjacent to pedestrian lanes',
              'D. Whenever dark grey slate tiles replace clay ridges'
            ],
            correctAnswer: 'A',
            explanation: 'Standard roofs enjoy Permitted Development unless conservation or listed.'
          },
          {
            id: 'cd_listening_p28_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Power guarantee duration ensuring output holds above 85%: ______ years',
            correctAnswer: 'TWENTY-FIVE',
            explanation: 'Carries a twenty-five-year power output guarantee.'
          },
          {
            id: 'cd_listening_p28_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why must side alley flower pots be shifted one metre aside prior to installation?',
            options: [
              'A. Heavy rain runoff puddles near gutter trenches',
              'B. Soil dust settles onto fresh inverter cooling vents',
              'C. Scaffolding poles clamp onto side brick gates',
              'D. Crews carrying aluminium ladders need safe clearance past glass panes'
            ],
            correctAnswer: 'D',
            explanation: 'Gives ladder crews clearance past delicate glass conservatory panes.'
          },
          {
            id: 'cd_listening_p28_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Tuesday 10:20 survey booking reference: ______',
            correctAnswer: 'SG-742',
            explanation: 'Survey confirmation code SG-742.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Understanding Solar Inverters, Export Tariffs & Upkeep',
        audioScenario:
          'A community clean-energy advisor hosts a town-hall evening talk explaining grid export meters, micro-inverters, and bird-mesh guards.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Clean Energy Town Hall Briefing]
Advisor: Welcome neighbors! Before signing any shiny doorstep solar flyers, let us untangle four technical details separating tidy twenty-five-year savings from costly buyer regrets.
Advisor: [[Q11]] First, examine how individual panels chain together: cheap traditional "string inverters" tie twelve modules like holiday fairy lights—if one chimney shadow hits panel three, whole-roof wattage plunges identically!
Advisor: [[Q12]] Homes surrounded by waving birch trees or awkward gable dormers gain dramatically from panel-level optimizers or micro-inverters letting unshaded sunny panels produce full watts independently!
Advisor: [[Q13]] Second, confirm Export Metering registration early: grid utilities only pay smart surplus export tariffs once certified installers file official DNO grid-connection paperwork unlocking unique MPAN export numbers!
Advisor: [[Q14]] Beware glossy salesman brochures promising annual cleaning sprays: gentle steep winter rainfall sweeps dust naturally down pitched glass—unless thick coastal seagull droppings bake solidly atop flat carport frames!
Advisor: [[Q15]] If nesting urban pigeons threaten your warm attic solar gaps, always commission clipped galvanized black steel perimeter wire mesh DURING original scaffolding assembly rather than paying double scaffolding fees two springs later!
Advisor: [[Q16]] Check fire isolation safety switches carefully: mount prominent red rotary emergency DC isolator switches clearly beside ground utility cupboards rather than scrambling into cramped dusty loft hatches!
Advisor: [[Q17]] Notice also smart EV integration: newer home wall chargers dynamically sip strictly free spare noon solar trickle rather than pulling peak winter coal grid power whenever clouds drift across roofs!
Advisor: [[Q18]] Check attic thermal air flow around string inverters—cramped hot summer lofts past forty Celsius silently force inverters into thermal throttling protection, slashing sunny July kilowatts needlessly!
Advisor: [[Q19]] Therefore choose shaded cool hallway utility cupboards or shaded north garage brick walls whenever sizing wall-mounted conversion boxes!
Advisor: [[Q20]] Pick up independent council-vetted installer checklists off our green clipboard stand beside Village Hall Entrance B before heading into rain!`,
        questions: [
          {
            id: 'cd_listening_p28_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Comparison illustrating how traditional string inverters drop whole-roof yield from one shaded panel: ______ lights',
            correctAnswer: 'FAIRY',
            explanation: 'Ties modules together like holiday fairy lights.'
          },
          {
            id: 'cd_listening_p28_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which electrical hardware helps partially shaded roofs yield peak power cleanly?',
            correctAnswer: 'MICRO-INVERTERS',
            explanation: 'Panel-level optimizers or micro-inverters keep unshaded panels running.'
          },
          {
            id: 'cd_listening_p28_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Unique grid identifier unlocked by installer DNO paperwork for paid electricity exports: ______ number',
            correctAnswer: 'MPAN',
            explanation: 'Paperwork unlocks a unique MPAN export number.'
          },
          {
            id: 'cd_listening_p28_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'When is manual solar glass scrubbing genuinely worth paying for?',
            options: [
              'A. Every four months across all pitched residential tiles',
              'B. Following autumn garden leaf shedding seasons',
              'C. Only where stubborn gull droppings accumulate on flat low carports',
              'D. Prior to annual winter inverter firmware checks'
            ],
            correctAnswer: 'C',
            explanation: 'Rain cleans pitched glass unless coastal droppings stick onto flat carports.'
          },
          {
            id: 'cd_listening_p28_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Pigeon-blocking black ______ wire skirts should be clipped cleanly while original scaffolding stands.',
            correctAnswer: 'STEEL',
            explanation: 'Install galvanized black steel mesh during initial scaffolding.'
          },
          {
            id: 'cd_listening_p28_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Location recommended for red emergency rotary DC isolator switches: utility ______',
            correctAnswer: 'CUPBOARDS',
            explanation: 'Mount near accessible ground utility cupboards.'
          },
          {
            id: 'cd_listening_p28_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Home electric appliance dynamically matching surplus noon rooftop power: ______ chargers',
            correctAnswer: 'EV',
            explanation: 'Smart EV wall chargers sip spare solar power.'
          },
          {
            id: 'cd_listening_p28_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why do inverters lose July sunny yield inside poorly vented summer lofts?',
            options: [
              'A. Loft spiders weave dust webs into exhaust grilles',
              'B. Temperatures above 40°C trigger protective thermal throttling',
              'C. Attic copper roof nails disturb wireless Wi-Fi routers',
              'D. Hot roof slates expand DC conduit plastic sleeves'
            ],
            correctAnswer: 'B',
            explanation: 'Overheating past 40°C triggers thermal throttling.'
          },
          {
            id: 'cd_listening_p28_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Which exterior compass-facing garage brick wall stays coolest for wall inverters?',
            correctAnswer: 'NORTH',
            explanation: 'Choose shaded cool hallways or north garage brick walls.'
          },
          {
            id: 'cd_listening_p28_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Exit door holding independent council-vetted installer checklists: Entrance ______',
            correctAnswer: 'B',
            explanation: 'Sit beside Village Hall Entrance B.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Community Solar Microgrid Sharing Economics',
        audioScenario:
          'Energy economics postgraduates Priya and Sam evaluate school-versus-housing rooftop sharing curves with supervisor Dr. Hassan.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Community Energy Research Tutorial]
Dr. Hassan: Come in Priya and Sam. How cleanly did neighborhood solar load profiles align between suburban primary schools and surrounding retired bungalows?
Priya: [[Q21]] Startling complementarity! Suburban primary schools consumed peak electric dishwashers and science computers precisely across mid-week sunny periods when neighboring commuter terraces sat empty exporting wasted surplus!
Sam: [[Q22]] Sadly, school rooftops plunged completely dead idle across long six-week August summer holidays—the exact brightest peak radiation stretch when village cooling fans and corner supermarkets hungered hardest!
Dr. Hassan: Perfect match for localized peer-to-peer sharing rules! Wait—did outdated municipal grid distribution tariffs punish sharing across single street transformers?
Priya: [[Q23]] Ridiculously steep fee blocks! Utility accounting billed identical high long-distance transmission tolls even when rooftop electrons merely hopped twenty metres across one garden fence to next-door bakeries!
Dr. Hassan: [[Q24]] Classic regulatory bottleneck! Did surveying sixty village pensioners uncover worries over smart-meter billing complexity? Nearly half feared obscure fluctuating half-hourly prices might blow winter heating bills abruptly until flat ceiling caps reassured families cleanly!
Sam: [[Q25]] When modeling twenty-year panel decay in Excel Chapter Four, replace linear steady straight depreciation lines with gradual early warranty drops followed by realistic moisture seal wear past year eighteen!
Dr. Hassan: [[Q26]] Sharp engineering realism! Check also whether hail-impact snow loads in upland valley districts demanded beefier forty-millimetre extruded aluminium frames than coastal models!
Priya: [[Q27]] Verified—upgrading rail thickness trimmed wind-uplift rattling complaints completely across exposed moorland barns without bloating project budgets past two percent!
Sam: [[Q28]] One ethical snag surfaced in rural social housing blocks: landlords happily bagged rooftop export subsidies while low-income tenants beneath still shouldered steep standard daytime meters!
Dr. Hassan: [[Q29]] Spotlight split-incentive tenant clauses prominently inside Policy Section Five—sharing fifty percent midday surplus bills directly unlocks fierce homeowner enthusiasm overnight!
Priya: [[Q30]] Got it—we will embed comparative tenant-bill bar graphs cleanly and email our working executive report ahead of Monday’s Ministry Consultation.`,
        questions: [
          {
            id: 'cd_listening_p28_lq21',
            number: 21,
            type: 'short_answer',
            questionText: 'Which daytime local institutions consumed midday electricity best during mid-week sunny weeks?',
            correctAnswer: 'PRIMARY SCHOOLS',
            explanation: 'Suburban primary schools consumed peak midday power while homes sat empty.'
          },
          {
            id: 'cd_listening_p28_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Peak sunshine month when school rooftops went completely idle during closures: ______',
            correctAnswer: 'AUGUST',
            explanation: 'Six-week August holidays hit peak solar radiation.'
          },
          {
            id: 'cd_listening_p28_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What regulatory rule crippled local street-to-street solar electricity sharing?',
            options: [
              'A. Export transformers maxed out past ten kilowatts',
              'B. Smart meters failed synchronizing within five-minute loops',
              'C. Local bakeries ran incompatible industrial phase voltages',
              'D. Utilities charged full national grid transport fees on 20-metre street hops'
            ],
            correctAnswer: 'D',
            explanation: 'Utilities charged long-distance tolls on 20-metre hops across fences.'
          },
          {
            id: 'cd_listening_p28_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Protection calming pensioners worried about variable half-hourly bills: flat ceiling ______',
            correctAnswer: 'CAPS',
            explanation: 'Flat ceiling caps reassured nervous older households.'
          },
          {
            id: 'cd_listening_p28_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Chapter Four depreciation models must account for realistic ______ seal wear beyond year eighteen.',
            correctAnswer: 'MOISTURE',
            explanation: 'Models must reflect realistic moisture seal wear late in life.'
          },
          {
            id: 'cd_listening_p28_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Sturdier frame thickness protecting windy upland barn arrays safely: ______ millimetres',
            correctAnswer: 'FORTY',
            explanation: 'Adopted sturdier forty-millimetre aluminium frames.'
          },
          {
            id: 'cd_listening_p28_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'How much did thicker storm-rated mounting rails add to project costs?',
            options: [
              'A. Less than two percent',
              'B. Roughly six percent',
              'C. Almost ten percent',
              'D. Fifteen percent'
            ],
            correctAnswer: 'A',
            explanation: 'Upgrading frames kept budget hikes under two percent.'
          },
          {
            id: 'cd_listening_p28_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'What fairness issue emerged inside rented rural social housing schemes?',
            options: [
              'A. Roof repairs delayed winter heating upgrades',
              'B. Landlords kept export income while tenants still paid high daytime meters',
              'C. Tenants lacked garage space for heavy inverters',
              'D. Shaded courtyard trees blocked morning arrays'
            ],
            correctAnswer: 'B',
            explanation: 'Landlords pocketed export revenue while tenants still paid retail tariffs.'
          },
          {
            id: 'cd_listening_p28_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Economic dilemma addressed cleanly inside Policy Section Five:',
            correctAnswer: 'SPLIT-INCENTIVE',
            explanation: 'Spotlight split-incentive tenant clauses prominently.'
          },
          {
            id: 'cd_listening_p28_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Deadline day for emailing the report prior to Ministry Consultation: ______',
            correctAnswer: 'MONDAY',
            explanation: 'Email report ahead of Monday’s Ministry Consultation.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Beyond Silicon—Perovskite Tandem Photovoltaics',
        audioScenario:
          'A solid-state physics professor lectures on how crystalline silicon limits spark next-generation stacked perovskite solar coatings.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Next-Generation Solar Physics Lecture]
Lecturer: Over seventy years since Bell Labs lit a tiny calculator chip beside sunny New Jersey rooftops, ninety-five percent of global solar arrays still rely strictly on purified crystalline silicon wafers!
Lecturer: [[Q31]] Yet ordinary silicon obeys an unforgiving thermodynamic glass wall—known since 1961 as the Shockley-Queisser limit—capping ideal single-layer panel efficiency firmly near twenty-nine percent!
Lecturer: [[Q32]] Why is over two-thirds of dazzling solar beam energy lost quietly as waste heat? Silicon absorbs cozy red light smoothly yet squanders energetic blue-violet photons warming panel aluminium!
Lecturer: [[Q33]] Materials physicists unlock dramatic efficiency leaps using "tandem stacking"—painting a paper-thin crystal perovskite coat directly atop conventional silicon wafers so blue light turns instantly electrical upstairs while gentler red rays shine straight downward!
Lecturer: [[Q34]] Named honorably after nineteenth-century Russian mineralogist Lev Perovski, synthetic halide perovskites print remarkably cheaply from liquid laboratory inks at room temperatures rather than baking silicon inside fourteen-hundred-degree quartz furnaces!
Lecturer: [[Q35]] Tandem laboratory test cells surged cleanly past thirty-three percent conversion efficiency recently—unlocking huge extra roof kilowatts for cramped urban schools lacking wide open meadows!
Lecturer: [[Q36]] Yet one stubborn industrial hurdle stalled rapid commercial store rollouts for a decade: unlike rock-steady quartz silicon enduring thirty blizzards serenely, moist tropical rain silently dissolves delicate ionic perovskite crystals in months!
Lecturer: [[Q37]] Worse still, many record-breaking laboratory perovskite formulas depend upon microscopic traces of water-soluble toxic lead salts—demanding foolproof hail-resistant double-glass edge encapsulation!
Lecturer: [[Q38]] Engineers tackle humidity fragility via ultra-thin atomic oxide vapor barriers sealing edges tighter than submarine hulls, passing severe damp-heat accelerated thousand-hour oven testing recently!
Lecturer: [[Q39]] Equally exciting are featherweight flexible perovskite foils rolled neatly onto curved delivery van roofs or warehouse corrugated plastic skylights too frail to carry stiff twenty-kilogram glass plates!
Lecturer: [[Q40]] Once long-term multi-decade outdoor durability matches crystal silicon cleanly, tandem coatings promise doubling rooftop clean energy harvest across existing cramped cities without claiming single fresh farmland acres!`,
        questions: [
          {
            id: 'cd_listening_p28_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Physical cap limiting ordinary single-layer silicon cells near 29%: ______-Queisser limit',
            correctAnswer: 'SHOCKLEY',
            explanation: 'Termed the Shockley-Queisser limit.'
          },
          {
            id: 'cd_listening_p28_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which colourful part of sunlight wastes energy mostly as unwanted panel heat in plain silicon?',
            correctAnswer: 'BLUE-VIOLET PHOTONS',
            explanation: 'Silicon squanders high-energy blue-violet photons as heat.'
          },
          {
            id: 'cd_listening_p28_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'How does tandem cell layering exceed single-silicon conversion limits?',
            options: [
              'A. Mirrors reflect red heat back toward top wafers',
              'B. Double-sided glass captures snowy ground reflections',
              'C. A top perovskite film harvests blue photons while red passes into silicon below',
              'D. Micro-fans cool silicon crystals during noon sun'
            ],
            correctAnswer: 'C',
            explanation: 'Top perovskite absorbs blue photons; red passes down to silicon.'
          },
          {
            id: 'cd_listening_p28_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Liquid carrier letting labs print perovskite films cheaply at room temperature: laboratory ______',
            correctAnswer: 'INKS',
            explanation: 'Printed cheaply from liquid laboratory inks.'
          },
          {
            id: 'cd_listening_p28_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Conversion efficiency mark recently surpassed by tandem laboratory test cells: ______ percent',
            correctAnswer: 'THIRTY-THREE',
            explanation: 'Surged cleanly past thirty-three percent efficiency.'
          },
          {
            id: 'cd_listening_p28_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Uncoated ionic perovskite crystals deteriorate swiftly outdoors whenever exposed to humid ______.',
            correctAnswer: 'RAIN',
            explanation: 'Moist tropical rain dissolves delicate ionic crystals.'
          },
          {
            id: 'cd_listening_p28_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which hazardous soluble metal demands airtight hail-proof glass sealing?',
            correctAnswer: 'LEAD SALTS',
            explanation: 'Formulas contain traces of water-soluble toxic lead salts.'
          },
          {
            id: 'cd_listening_p28_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Hours survived inside severe damp-heat stress ovens using atomic oxide edge barriers: ______ hours',
            correctAnswer: 'THOUSAND',
            explanation: 'Passed severe thousand-hour damp-heat oven testing.'
          },
          {
            id: 'cd_listening_p28_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Which lightweight vehicles or buildings benefit uniquely from flexible foil solar coats?',
            options: [
              'A. Offshore ocean research buoys',
              'B. Steep historic slate cathedral spires',
              'C. Curved delivery van roofs and weak warehouse skylights',
              'D. Desert ground-mounted tracking racks'
            ],
            correctAnswer: 'C',
            explanation: 'Ideal for curved van roofs and fragile plastic warehouse skylights.'
          },
          {
            id: 'cd_listening_p28_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What ecological land-use advantage follows commercial tandem rollout?',
            options: [
              'A. Doubles city rooftop output without consuming fresh farmland',
              'B. Eliminates utility grid batteries nationwide',
              'C. Recycles old automotive windshields directly',
              'D. Stops mining pure quartz sand permanently'
            ],
            correctAnswer: 'A',
            explanation: 'Doubles city rooftop harvest without taking farmland.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 29: Campus Astronomy Club Stargazing Event Logistics
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p29',
    testNumber: 29,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 29: Campus Astronomy Club Stargazing Event Logistics',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Campus Astronomy Club Stargazing Event Logistics.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Joining an Autumn Observatory Night Trip',
        audioScenario:
          'A physics freshman phones the Campus Astronomy Society secretary to reserve a minibus seat for an away-from-town dark-sky stargazing evening.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Astronomy Society Inquiries]
Secretary: Good evening, Halley Campus Astronomy Society, Lucas speaking. How can I help?
Student: Hi Lucas, I spotted your poster about Saturday’s away dark-sky meteor watch and wanted to reserve two spots plus ask about tripod rules!
Secretary: [[Q1]] Great timing—only four minibus cushions stay open! Let me take your surname first? It is Kowalczyk—wait, spelled S-H-E-P-H-E-R-D, Shepherd! Sorry, Kowalczyk was my lab partner!
Secretary: [[Q2]] Glad we sorted that, Shepherd! Our away field site sits atop Beacon Moor Meadow twelve miles outside city glow—society members pay nine pounds covering heated shuttle transport and hot thermos cocoa!
Student: [[Q3]] Bargain! Can newcomers without personal telescopes still view Saturn’s rings cleanly? Absolutely—committee astronomers haul three towering ten-inch Dobsonian reflector mirrors giving every visitor crisp turns spotting lunar craters and star clusters!
Student: [[Q4]] What about bringing personal camera lenses—do guests need special equipment tags? Heavy long telephoto DSLRs sit welcome on manual wooden tripods beside East Hedge, yet leave green laser pointers strictly inside dorm rooms—nearby civil airport flight approaches ban outdoor pointers flatly!
Secretary: [[Q5]] Vital sky safety tip! Also prepare clothing seriously: clear autumn pasture grass dips toward zero frost once winds drop—wear two thermal sock layers plus wool mittens rather than light campus hoodies!
Student: [[Q6]] Good warning! Wait—how do astronomers read star maps outdoors without blinding night-adapted vision every two minutes? Use ONLY dim red-cellophane-filtered pocket torches—never tap bright white smartphone screens across the meadow, since white glare wipes thirty minutes of natural dark eye sensitivity!
Secretary: [[Q7]] Smart! Where exactly does Saturday’s minibus gather ahead of sunset? Departing sharply at 19:15 outside Science Courtyard Archway—arrive ten minutes early lugging dry boots cleanly aboard!
Student: [[Q8]] What happens if solid thick rain clouds roll inland off the coast by five o’clock? Whenever weather apps forecast above eighty percent opaque cloud ceiling, trips swap effortlessly onto the campus Rooftop Planetarium Dome for an indoor Milky Way digital laser show!
Secretary: [[Q9]] Nifty indoor backup! One delicate tea note: drop rinsed ceramic mugs back into volunteer wash crates by ten thirty so zero broken china lingers in grazing pasture grass tomorrow!
Student: [[Q10]] Thanks Lucas! Let me pay our eighteen pounds online right now quoting Trip Pass AS-831.`,
        questions: [
          {
            id: 'cd_listening_p29_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student caller surname: ______',
            correctAnswer: 'SHEPHERD',
            explanation: 'Spelled S-H-E-P-H-E-R-D.'
          },
          {
            id: 'cd_listening_p29_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Member ticket fee including minibus ride and cocoa: £ ______',
            correctAnswer: 'NINE',
            explanation: 'Members pay nine pounds.'
          },
          {
            id: 'cd_listening_p29_lq3',
            number: 3,
            type: 'short_answer',
            questionText: 'Type of large shared reflector telescopes brought by committee staff:',
            correctAnswer: 'DOBSONIAN',
            explanation: 'Committee brings three ten-inch Dobsonian reflector mirrors.'
          },
          {
            id: 'cd_listening_p29_lq4',
            number: 4,
            type: 'multiple_choice',
            questionText: 'Why are green laser pointers banned at Beacon Moor Meadow?',
            options: [
              'A. Cold batteries flicker erratically below zero',
              'B. Cattle inside adjoining hedges scatter abruptly',
              'C. Stray green rays smudge long-exposure DSLR photos',
              'D. Flight paths into the nearby civil airport forbid ground lasers'
            ],
            correctAnswer: 'D',
            explanation: 'Nearby civil airport approaches ban laser pointers completely.'
          },
          {
            id: 'cd_listening_p29_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Clothing essential recommended alongside thermal socks for frosty meadow wind: wool ______',
            correctAnswer: 'MITTENS',
            explanation: 'Pack two thermal sock layers plus wool mittens.'
          },
          {
            id: 'cd_listening_p29_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Only safe torch tint preserving dark-adapted astronomical night vision: ______-filtered',
            correctAnswer: 'RED',
            explanation: 'Use dim red-cellophane torches; bright white resets 30 minutes of dark adaptation.'
          },
          {
            id: 'cd_listening_p29_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Exact evening departure time from Science Courtyard Archway:',
            correctAnswer: '19:15',
            explanation: 'Minibus departs at 19:15.'
          },
          {
            id: 'cd_listening_p29_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What happens when forecasts predict over 80% thick rain clouds?',
            options: [
              'A. Members keep nine-pound deposits for November trips',
              'B. Groups shift inside the Campus Rooftop Planetarium Dome',
              'C. Guides drive further inland seeking clearer hills',
              'D. Telescope tuning clinics run inside the physics foyer'
            ],
            correctAnswer: 'B',
            explanation: 'Swaps onto the Rooftop Planetarium Dome for an indoor digital show.'
          },
          {
            id: 'cd_listening_p29_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Safety hazard avoided by rinsing and returning mugs into crates by 10:30: broken ______',
            correctAnswer: 'CHINA',
            explanation: 'Prevents broken china resting in grazing pasture grass.'
          },
          {
            id: 'cd_listening_p29_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Online trip booking pass code: ______',
            correctAnswer: 'AS-831',
            explanation: 'Quote Trip Pass AS-831.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Walkthrough of the Historic Campus Observatory Dome',
        audioScenario:
          'An observatory director welcomes autumn visitors inside the nineteenth-century brass refractor dome and explains instrument care.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Campus Observatory Tour]
Director: Welcome guests beneath our copper-clad 1892 Transit Dome! Mind deep stone stairsteps while we dim overhead tungsten bulbs softly down toward warm twilight glow.
Director: [[Q11]] Towering across center pier sits our historic eight-inch Cooke brass refractor telescope—note it mounts atop isolated deep brick bedrock columns passing untouched cleanly underneath creaky floorboards so bouncing student footsteps never blur distant nebulae!
Director: [[Q12]] Walk cautiously clear of heavy dangling lead clock-drive counterweights hanging behind polar axis gears—never yank hanging steel cords because delicate brass clockwork dates back one hundred thirty years!
Director: [[Q13]] Notice why we never blow warm winter heaters inside open viewing domes: rushing warm air waves boiling past slit openings twist clear pinprick stars into shimmering wobbly jellyfish blurs!
Director: [[Q14]] Consequently, technicians open heavy steel dome shutters ninety full minutes prior to sunset so indoor glass lenses settle gracefully into crisp ambient outside cold!
Director: [[Q15]] Peek into our side glass archive cabinet storing fragile blue-tinted nineteenth-century glass photographic astrometry plates—early Victorian women astronomers measured millions of faint faint star magnitudes patiently across these plates using brass microscopes!
Director: [[Q16]] For modern campus spectroscopy classes downstairs, cooled CCD cameras capture invisible sulfur and hydrogen nebula wavelengths far crisper than human retinas can ever perceive live!
Director: [[Q17]] On clear first Friday nights monthly, public neighborhood open-sky hours let school pupils queue beside our portable courtyard solar hydrogen scopes viewing shimmering red solar prominences cleanly safely filtered!
Director: [[Q18]] Check safety warning signs near telescope focus wheels: never brace heavy palms tightly around rubber eyecups while climbing viewing ladders—one heavy lean knocks delicate finder-scope alignments miles off Orion!
Director: [[Q19]] Down on the stone foyer coat rack, clip dark felt adhesive pads neatly onto bright phone flashlight lenses before venturing upstairs onto dark observation roofs!
Director: [[Q20]] Collect glowing constellation wheel planispheres clipped neatly beside Wooden Door Four before climbing dome stairs!`,
        questions: [
          {
            id: 'cd_listening_p29_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Structural reason bouncing wooden floorboards fail to blur star views through the refractor: brick ______ columns',
            correctAnswer: 'BEDROCK',
            explanation: 'Mounted on isolated deep brick bedrock columns.'
          },
          {
            id: 'cd_listening_p29_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which heavy hanging parts behind the telescope gears must guests avoid touching?',
            correctAnswer: 'COUNTERWEIGHTS',
            explanation: 'Steer clear of heavy hanging lead clock-drive counterweights.'
          },
          {
            id: 'cd_listening_p29_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why are cozy room heaters forbidden inside the telescope viewing dome?',
            options: [
              'A. Rising warm currents distort sharp starlight into shimmering blurs',
              'B. Dry air cracks antique painted dome timber slats',
              'C. Heat expands heavy brass gears asymmetrically',
              'D. Heating coils trip ancient fuse breakers'
            ],
            correctAnswer: 'A',
            explanation: 'Turbulent warm air streams blur sharp pinprick stars.'
          },
          {
            id: 'cd_listening_p29_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Minutes ahead of sunset when technicians slide open dome shutters for thermal balance: ______ minutes',
            correctAnswer: 'NINETY',
            explanation: 'Shutters open ninety minutes before sunset.'
          },
          {
            id: 'cd_listening_p29_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Victorian archival sky photographs were preserved on glass ______ plates inside side cabinets.',
            correctAnswer: 'ASTROMETRY',
            explanation: 'Fragile glass photographic astrometry plates.'
          },
          {
            id: 'cd_listening_p29_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Chemical gas alongside hydrogen captured crisply by cooled modern CCD sensors: ______',
            correctAnswer: 'SULFUR',
            explanation: 'Sensors capture sulfur and hydrogen wavelengths.'
          },
          {
            id: 'cd_listening_p29_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Monthly public evening featuring courtyard telescopes for school pupils:',
            correctAnswer: 'FIRST FRIDAY',
            explanation: 'Held on clear first Friday nights monthly.'
          },
          {
            id: 'cd_listening_p29_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why must ladder climbers avoid gripping the telescope rubber eyecup for balance?',
            options: [
              'A. Finger grease smudges delicate flint lenses',
              'B. Ladders tilt backward beneath shifting arms',
              'C. Eyecups unclip cleanly off brass drawtubes',
              'D. Heavy weight knocks delicate finder-scope alignments off target'
            ],
            correctAnswer: 'D',
            explanation: 'Leaning knocks delicate finder-scope alignments off target.'
          },
          {
            id: 'cd_listening_p29_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Protective cover attached onto phone flashlights in the stone lobby: ______ pads',
            correctAnswer: 'FELT',
            explanation: 'Attach dark felt pads over bright phone lights.'
          },
          {
            id: 'cd_listening_p29_lq20',
            number: 20,
            type: 'short_answer',
            questionText: 'Rotating constellation maps stored beside Wooden Door Four:',
            correctAnswer: 'PLANISPHERES',
            explanation: 'Collect glowing constellation wheel planispheres.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Measuring Urban Streetlight Skyglow Impact',
        audioScenario:
          'Astrophysics undergraduates Nia and Kiran review light-pollution meter surveys with atmospheric tutor Prof. Walsh.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Light Pollution Survey Tutorial]
Prof. Walsh: Good afternoon Nia and Kiran. How clear were your handheld sky-quality brightness measurements across twenty campus parks versus dark rural hills?
Nia: [[Q21]] Dramatic divergence! Bare white streetlights along suburban dual carriageways washed sky contrast twenty-four times brighter than national moorland benchmarks—hiding everything fainter than third-magnitude stars effortlessly!
Kiran: [[Q22]] Worse still, switching municipal sodium orange lamps hastily into broad white LED fixtures boosted harsh short-wave blue scatter sharply across damp winter cloud ceilings!
Prof. Walsh: Critical Rayleigh scattering physics! Did downward-shielded amber cutoff lamps along Riverwalk Park noticeably protect dark horizon vistas?
Nia: [[Q23]] Stunning fix—replacing old round glass globe lamps with flat horizontal hoods emitting zero upward stray beams dropped localized canopy skyglow sixty percent inside two city blocks!
Prof. Walsh: [[Q24]] Neat municipal evidence! How did your handheld photometric tubes compensate for passing damp fog or wispy cirrus veil distorting zenith readings accidentally? We paired sky tubes simultaneously alongside a campus rooftop infrared cloud sensor discarding cloudy sweeps strictly above ten percent opacity!
Kiran: [[Q25]] One annoying human timing trap hit campus rooftops: stadium floodlights on rugby practice nights bled horizontal glare straight across north horizons until automatic curfew switches cut power cleanly at nine thirty!
Prof. Walsh: [[Q26]] Flag stadium night dates clearly inside Appendix Table One so civic lighting officials avoid blaming commuter cars for rugby match spikes!
Nia: [[Q27]] Regarding wildlife spillover, our nocturnal bug-net collaborators showed dim cool-white bulbs lured four times more dying moths than warm narrow-amber fixtures!
Prof. Walsh: [[Q28]] Cite insect declines prominently inside your closing municipal justification—saving moths convinces environmental park councillors twice faster than telescope clarity alone!
Kiran: [[Q29]] For Friday’s Planetary Colloquium poster, should we print dense brightness tables or map smooth street glow contour lines?
Prof. Walsh: [[Q30]] Overlay false-color sky-brightness contours cleanly onto familiar campus walking streets—seeing red glow shrinking beside shielded Riverwalk persuades municipal engineers instantaneously!`,
        questions: [
          {
            id: 'cd_listening_p29_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Factor by which city carriageway lamps washed out skies vs rural benchmarks: ______ times',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Skies read twenty-four times brighter than rural moorlands.'
          },
          {
            id: 'cd_listening_p29_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which harmful light colour surged into cloudy air after swapping sodium lamps for plain white LEDs?',
            correctAnswer: 'SHORT-WAVE BLUE',
            explanation: 'White LEDs increased short-wave blue atmospheric scatter.'
          },
          {
            id: 'cd_listening_p29_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Hood shape cutting horizontal Riverwalk canopy skyglow by 60%: ______ hoods',
            correctAnswer: 'FLAT HORIZONTAL',
            explanation: 'Flat horizontal hoods stopped stray upward beams.'
          },
          {
            id: 'cd_listening_p29_lq24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Rooftop ______ cloud detectors filtered out damp hazy sweeps exceeding 10% opacity.',
            correctAnswer: 'INFRARED',
            explanation: 'Used an infrared cloud sensor to drop cloudy readings.'
          },
          {
            id: 'cd_listening_p29_lq25',
            number: 25,
            type: 'short_answer',
            questionText: 'Which evening sports facility skewed north rooftop horizon brightness until 9:30 PM?',
            correctAnswer: 'STADIUM FLOODLIGHTS',
            explanation: 'Rugby stadium floodlights distorted north readings until 9:30.'
          },
          {
            id: 'cd_listening_p29_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why must rugby floodlight match nights be flagged inside Appendix Table One?',
            options: [
              'A. To request automated dimmers on stadium roof towers',
              'B. To adjust spectrometer lens gains retrospectively',
              'C. So municipal staff don’t mistake rugby spikes for highway car glare',
              'D. Because student observers missed clear weather windows'
            ],
            correctAnswer: 'C',
            explanation: 'Prevents city officers misattributing sports spikes to commuter traffic.'
          },
          {
            id: 'cd_listening_p29_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Multiplier of nocturnal moths fatally trapped by cool-white lamps vs narrow amber: ______ times',
            correctAnswer: 'FOUR',
            explanation: 'Cool-white lamps lured four times more moths.'
          },
          {
            id: 'cd_listening_p29_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'Why does Prof. Walsh advise stressing nocturnal insect losses in civic reports?',
            options: [
              'A. Astronomy society budgets lack municipal lobbying leverage',
              'B. Wildlife conservation appeals to city park councillors strongly',
              'C. Biology departments fund shared photometric equipment',
              'D. Streetlamp vendors guarantee warm-amber swaps for parks'
            ],
            correctAnswer: 'B',
            explanation: 'Saving moths convinces environmental councillors faster than stargazing alone.'
          },
          {
            id: 'cd_listening_p29_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Graphic format selected for Friday’s colloquium map overlay: ______ lines',
            correctAnswer: 'CONTOUR',
            explanation: 'Overlay false-color glow contour lines on campus maps.'
          },
          {
            id: 'cd_listening_p29_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Campus path showcased by glowing colour reduction on the contour map: ______',
            correctAnswer: 'RIVERWALK',
            explanation: 'Seeing red glow shrink beside shielded Riverwalk persuades engineers.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Rise of Global Dark-Sky Reserves & Orbital Crowding',
        audioScenario:
          'An astrophysics professor lectures on how high-altitude desert observatories grapple with encroaching city lights and proliferating satellite constellations.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Modern Observational Astronomy Challenges]
Lecturer: For centuries, astronomers solved city smoke effortlessly simply by hauling heavier glass mirrors higher up lonely alpine ridges—yet nowhere on Earth escapes modern sky congestion any longer.
Lecturer: [[Q31]] Consider Los Angeles’s legendary Mount Wilson Observatory where Edwin Hubble proved galaxies expand in 1929: within fifty brisk decades, suburban neon billboards swallowed faint galaxies smoothly back into urban haze!
Lecturer: [[Q32]] Escaping sprawling coastal metropolises drove modern consortia onto barren Atacama Desert crests across northern Chile, pairing ultra-dry bone humidity with zero surrounding towns across two hundred miles!
Lecturer: [[Q33]] Notice why dry desert altitude matters cleanly: atmospheric water vapor swallows faint infrared heat radiating across baby star-nursery dust cocoons before waves ever graze primary telescope mirrors!
Lecturer: [[Q34]] Remarkably, international dark-sky charters protect neighboring towns like Flagstaff Arizona by mandating low-pressure amber street fixtures—preserving clear research skies while slashing municipal electricity bills cleanly!
Lecturer: [[Q35]] Even atop pristine Chilean peaks, however, engineers wrestle adaptive optics turbulence: fast laser beacons fire artificial orange stars ninety kilometres overhead into high sodium layers so flexible mirrors bend thousands of times per second canceling air twinkle!
Lecturer: [[Q36]] Yet an unforeseen celestial hurdle erupted after 2019: commercial satellite mega-constellations launching tens of thousands of reflective spacecraft cleanly across low Earth orbit!
Lecturer: [[Q37]] Catching twilight sunbeams hours after sunset below, shiny solar wings streak bright jagged white scratches right across deep-exposure twilight survey cameras hunting hazardous near-Earth asteroids!
Lecturer: [[Q38]] Software streaks don’t merely look messy on photographs—bright satellite glints overload ultra-sensitive pixel wells, leaking ghostly horizontal readout bleeding across neighboring innocent stars!
Lecturer: [[Q39]] Encouragingly, aerospace coalitions now trial matte dark antireflective sunshields and roll spacecraft wings edge-on during twilight climbs, cutting apparent satellite glare substantially!
Lecturer: [[Q40]] Ultimately, safeguarding Humanity’s ancient window into deep cosmic origins demands urgent global sky stewardship uniting dark city lamps below with disciplined orbital traffic rules above!`,
        questions: [
          {
            id: 'cd_listening_p29_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'California observatory where Edwin Hubble discovered cosmic expansion before suburbs brightened: Mount ______',
            correctAnswer: 'WILSON',
            explanation: 'Mount Wilson Observatory near Los Angeles.'
          },
          {
            id: 'cd_listening_p29_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'South American desert hosting isolated modern giant telescope summits: ______ Desert',
            correctAnswer: 'ATACAMA',
            explanation: 'Barren Atacama Desert crests in northern Chile.'
          },
          {
            id: 'cd_listening_p29_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'Which atmospheric substance blocks faint infrared radiation from cosmic dust nurseries?',
            correctAnswer: 'WATER VAPOR',
            explanation: 'Atmospheric water vapor absorbs faint infrared wavelengths.'
          },
          {
            id: 'cd_listening_p29_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'How does Flagstaff, Arizona shield local research observatories without darkening streets unsafely?',
            options: [
              'A. Switching off residential street poles past midnight',
              'B. Limiting airport landings near mountains',
              'C. Installing solid wooden roadside shade walls',
              'D. Mandating low-pressure narrow amber lamps saving municipal power too'
            ],
            correctAnswer: 'D',
            explanation: 'Low-pressure amber fixtures preserve skies while cutting municipal bills.'
          },
          {
            id: 'cd_listening_p29_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Adaptive optics fire orange laser stars ninety kilometres up to counteract star ______.',
            correctAnswer: 'TWINKLE',
            explanation: 'Flexible mirrors deform rapidly canceling atmospheric twinkle.'
          },
          {
            id: 'cd_listening_p29_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Year when commercial orbital satellite mega-constellations surged sharply skyward: ______',
            correctAnswer: '2019',
            explanation: 'Unexpected crowding erupted after 2019.'
          },
          {
            id: 'cd_listening_p29_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'Which vital twilight planetary-defense survey suffers streaks from bright low-orbit satellites?',
            correctAnswer: 'NEAR-EARTH ASTEROIDS',
            explanation: 'Spoils twilight searches for hazardous near-Earth asteroids.'
          },
          {
            id: 'cd_listening_p29_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Beyond ugly photographic lines, how do bright satellite flashes damage deep sensor frames?',
            options: [
              'A. Saturating pixel sensors, spilling horizontal glare over adjacent stars',
              'B. Heating telescope CCD chips out of focus',
              'C. Interfering with atomic clock GPS timing logs',
              'D. Causing adaptive laser systems to shut down'
            ],
            correctAnswer: 'A',
            explanation: 'Overloads pixel wells, leaking horizontal bleeding across stars.'
          },
          {
            id: 'cd_listening_p29_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Hardware upgrade cutting twilight orbital reflection off new spacecraft wings: dark ______',
            correctAnswer: 'SUNSHIELDS',
            explanation: 'Matte dark antireflective sunshields cut satellite glare.'
          },
          {
            id: 'cd_listening_p29_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What comprehensive policy safeguards future deep-sky observation?',
            options: [
              'A. Relocating every future observatory entirely onto lunar craters',
              'B. Combining shielded streetlamps below with disciplined orbital traffic standards',
              'C. Halting commercial twilight internet spacecraft launches permanently',
              'D. Switching entirely from glass optics to ground radio dishes'
            ],
            correctAnswer: 'B',
            explanation: 'Uniting dark city lamps below with disciplined orbital rules above.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 30: Student Radio Station Broadcasting Workshop
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p30',
    testNumber: 30,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 30: Student Radio Station Broadcasting Workshop',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Radio Station Broadcasting Workshop.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Joining Campus Radio & Technical Induction',
        audioScenario:
          'A journalism student calls the campus radio station producer to sign up for a weekly documentary show and book studio training.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Campus Radio Studio Desk]
Producer: Good afternoon, Spark FM Campus Radio, Leo speaking. How may I assist you?
Applicant: Hi Leo, I am starting my journalism degree and want to host a weekly campus sustainability show plus learn live desk mixing!
Producer: [[Q1]] Terrific initiative! Let me log your trainee details first—may I confirm your surname? Yes, it is Gallagher—sorry, not Gallagher! It is Gallagher’s cousin—no, really my own surname is Carmichael, spelled C-A-R-M-I-C-H-A-E-L.
Producer: [[Q2]] Sorted cleanly, Ms. Carmichael! Before stepping behind live microphones, every host completes a two-hour Studio Desk & Broadcast Law workshop—next sessions run Wednesday evenings at six inside Studio B.
Applicant: [[Q3]] Wednesday at six fits cleanly! Does the student radio station charge annual club membership fees? Yes, a flat twelve-pound yearly licence contribution unlocks twenty-four-hour keycard access and unlimited portable podcast recorder loans!
Applicant: [[Q4]] Twelve pounds is a steal! Should newcomers submit full polished audio episode demos when pitching show slots, or just paper outlines? Pitch purely a crisp two-hundred-word program format brief plus sample thirty-second microphone voice check—our committee scores fresh voices purely on curiosity rather than flashy editing!
Producer: [[Q5]] Glad to hear! When is our autumn broadcast schedule locking? Final program bids close next Tuesday at noon sharp, assigning live slots from October fourth onward!
Applicant: [[Q6]] Check—next Tuesday noon. Wait—can hosts stream their own commercial Spotify playlists live over FM airwaves during talk transitions? No! Music broadcast licensing requires spinning strictly tracks cataloged inside our clean radio station digital library so automatic royalty logs track every artist play legally!
Producer: [[Q7]] Lifesaving compliance tip! What about interviewing off-campus local council guests—do hosts escort visitors past dormitory security porters? Always sign external radio guests in at Union Reception Desk One twenty minutes early carrying valid photo badges, then guide them directly up Freight Lift Two!
Applicant: [[Q8]] Got it. What happens if my co-host catches flu an hour prior to Thursday afternoon airtime? Alert our on-call Broadcast Duty Editor instantly by phone so automated jukebox backup tracks step smoothly across dead silence—leaving airwaves dead silent triggers steep regulatory warnings!
Producer: [[Q9]] Also check acoustic studio etiquette: leave sticky coffee mugs outside wooden airlock doors—hot spills directly onto motorized fader channels cost nine hundred pounds per console bay!
Applicant: [[Q10]] Promise zero drinks inside Studio B! Register me cleanly for Wednesday’s six o’clock desk induction quoting Trainee ID SR-629.`,
        questions: [
          {
            id: 'cd_listening_p30_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'CARMICHAEL',
            explanation: 'Spelled C-A-R-M-I-C-H-A-E-L.'
          },
          {
            id: 'cd_listening_p30_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Workshop day for mandatory Studio Desk and Broadcast Law training: ______',
            correctAnswer: 'WEDNESDAY',
            explanation: 'Runs Wednesday evenings at six.'
          },
          {
            id: 'cd_listening_p30_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Annual student station membership covering equipment and studio keycards: £ ______',
            correctAnswer: 'TWELVE',
            explanation: 'Membership fee is twelve pounds yearly.'
          },
          {
            id: 'cd_listening_p30_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'How many words maximum are required in a program pitch brief?',
            correctAnswer: 'TWO-HUNDRED-WORD',
            explanation: 'Submit a two-hundred-word format brief plus 30s voice test.'
          },
          {
            id: 'cd_listening_p30_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Closing deadline day at noon sharp for autumn live show slots: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Program bids close next Tuesday at noon.'
          },
          {
            id: 'cd_listening_p30_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Why must DJs pick songs strictly from the station digital catalog instead of Spotify?',
            options: [
              'A. External consumer streams suffer random commercial ads',
              'B. Studio mixing consoles lack Bluetooth pairing jacks',
              'C. Station logs must automatically record legal artist royalty payouts',
              'D. Campus Wi-Fi throttles high-bitrate music streams'
            ],
            correctAnswer: 'C',
            explanation: 'Licensing mandates automatic royalty tracking from the internal library.'
          },
          {
            id: 'cd_listening_p30_lq7',
            number: 7,
            type: 'short_answer',
            questionText: 'Which lift brings escorted external interview guests smoothly up to radio studios?',
            correctAnswer: 'FREIGHT LIFT TWO',
            explanation: 'Sign in at Reception then take Freight Lift Two.'
          },
          {
            id: 'cd_listening_p30_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What happens if a host skips calling in sick and leaves dead silence over FM air?',
            options: [
              'A. Automated commercials fill gaps after twenty seconds',
              'B. Student society membership forfeits for one term',
              'C. Automatic station fines and regulatory broadcast warnings trigger',
              'D. Backup student reporters seize the weekly slot permanently'
            ],
            correctAnswer: 'C',
            explanation: 'Leaving dead silence triggers steep regulatory warnings.'
          },
          {
            id: 'cd_listening_p30_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Sensitive broadcast console hardware easily ruined by coffee spills: motorized ______',
            correctAnswer: 'FADER',
            explanation: 'Spills ruin motorized fader channels.'
          },
          {
            id: 'cd_listening_p30_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Trainee workshop registration ID: ______',
            correctAnswer: 'SR-629',
            explanation: 'Quote Trainee ID SR-629.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Mastering Live Broadcast Studio Consoles & Legal Ethics',
        audioScenario:
          'A station chief engineer tours incoming radio presenters around live broadcast desks, editing booths, and Ofcom legal red-lines.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Studio Technical & Legal Induction]
Engineer: Step smoothly inside our double-doored acoustic Sound Airlock everyone! Over the next hour you will tame our live Studio A console cleanly without sweating during breaking news broadcasts!
Engineer: [[Q11]] Glance up immediately above the glass guest window: bright glowing amber strobe lights flicker continuously whenever local fire alarms trigger, sparing studio headsets from deafening sirens directly mid-broadcast!
Engineer: [[Q12]] Walk closer toward the live mic arms—notice thin black circular nylon screens hovering two inches ahead of metal grilles: never unscrew pop filters, because abrupt explosive "P" and "B" breaths slam raw diaphragms audibly!
Engineer: [[Q13]] Check red "ON AIR" desk indicator safety: toggling microphone channels active mutes overhead studio speakers instantly—failing to plug tight closed-back headphones in before pushing faders leaves panicked presenters talking into eerie total silence!
Engineer: [[Q14]] Remember Broadcast Law Rule One regarding unverified court gossip: NEVER let live callers name suspected defendants ahead of criminal trials, or student presenters face harsh personal defamation lawsuits!
Engineer: [[Q15]] Consequently, our talk-back desk runs a mandatory seven-second digital Profanity Dump loop whenever live public phone callers dial into political debates—smash the glowing red Delay button instantly to purge reckless remarks cleanly before transmitters ever beam!
Engineer: [[Q16]] Inside adjoining News Edit Suites Three and Four, clean multitrack interviews inside free open-source Audacity consoles before exporting crisp stereo MP3 news clips under ninety seconds!
Engineer: [[Q17]] When taking handheld Marantz flash recorders outdoors across rainy sports touchlines, always slip furry fluffy grey windshield blimps over foam tips—wind thumps ruin crisp sports commentary ten times faster than faint voices!
Engineer: [[Q18]] Check our green emergency paper log binder sitting neatly under desk monitors: jot brief timestamp notes whenever fire bells sound or power surges flicker so compliance officers document outages transparently!
Engineer: [[Q19]] Remember student station sustainability campaigns: switch studio acoustic lamps and screen monitors onto standby off-positions cleanly before locking door keypads past midnight!
Engineer: [[Q20]] Pick up pocket yellow fader cheat-sheets neatly from the acrylic tray beside Mixing Rack Five!`,
        questions: [
          {
            id: 'cd_listening_p30_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Silent visual signal flashing above studio windows during fire drills without spoiling live mics: amber ______',
            correctAnswer: 'STROBE',
            explanation: 'Amber strobe lights replace noisy bell alarms.'
          },
          {
            id: 'cd_listening_p30_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'What protective mic screen blocks harsh explosive "P" and "B" vocal puffs?',
            correctAnswer: 'POP FILTERS',
            explanation: 'Thin circular nylon pop filters guard raw diaphragms.'
          },
          {
            id: 'cd_listening_p30_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What happens automatically the instant studio microphone channels flip live?',
            options: [
              'A. Overhead studio loudspeakers mute immediately, requiring headphones',
              'B. Studio doors lock magnetically from outside interruption',
              'C. Green royalty timers launch inside broadcast software',
              'D. Background station jingles fade to minus twenty decibels'
            ],
            correctAnswer: 'A',
            explanation: 'Overhead room speakers mute instantly so headphones are essential.'
          },
          {
            id: 'cd_listening_p30_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Personal legal risk if careless live radio hosts let callers slander unconvicted suspects: ______ lawsuits',
            correctAnswer: 'DEFAMATION',
            explanation: 'Presenters face strict defamation lawsuits.'
          },
          {
            id: 'cd_listening_p30_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Live phone debates run through a ______-second delay buffer so hosts can purge reckless remarks early.',
            correctAnswer: 'SEVEN',
            explanation: 'Mandatory seven-second digital delay loop.'
          },
          {
            id: 'cd_listening_p30_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Free open-source editing software installed inside News Edit Suites Three and Four: ______',
            correctAnswer: 'AUDACITY',
            explanation: 'Suites run free open-source Audacity.'
          },
          {
            id: 'cd_listening_p30_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'What furry outer accessory stops wind thumping ruins during rainy outdoor touchline interviews?',
            correctAnswer: 'WINDSHIELD BLIMPS',
            explanation: 'Slip furry grey windshield blimps over foam tips.'
          },
          {
            id: 'cd_listening_p30_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why must broadcasters jot brief notes in the green paper binder after minor outages?',
            options: [
              'A. Tech maintenance invoices track studio bulb swaps',
              'B. Advertisers receive automatic fee rebates',
              'C. Night DJs claim missed airplay hours',
              'D. Broadcast compliance officers require transparent outage logs'
            ],
            correctAnswer: 'D',
            explanation: 'Compliance officers document outages transparently.'
          },
          {
            id: 'cd_listening_p30_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Nighttime sustainability routine prior to locking studio doors after midnight: flick screens onto ______',
            correctAnswer: 'STANDBY',
            explanation: 'Switch lamps and monitors onto standby off-positions.'
          },
          {
            id: 'cd_listening_p30_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Location holding yellow fader cheat-sheet pockets: Mixing Rack ______',
            correctAnswer: 'FIVE',
            explanation: 'Beside Mixing Rack Five.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Listener Retention in Campus Podcast Documentaries',
        audioScenario:
          'Media studies postgraduates Amy and Jonah review audio drop-off charts from student documentary podcasts with Dr. Morris.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Audio Storytelling Supervision]
Dr. Morris: Come in Amy and Jonah. What surprised you inside podcast retention curves tracking three thousand student episode downloads?
Amy: [[Q21]] Startling opening cliff! Over thirty-five percent of mobile listeners quit within the first ninety seconds whenever hosts burned opening minutes reading boring formal sponsor credits or rambling throat-clearing small talk!
Jonah: [[Q22]] Conversely, episodes diving straight inside crisp natural field ambiance—say sizzling rainy market stalls or buzzing campus beekeepers—locked eighty-two percent past minute five cleanly!
Dr. Morris: Textbook acoustic scene setting! Did music underscore beds help narrative transitions or confuse headphone commuters?
Amy: [[Q23]] Mixed results! Gentle sparse solo cello pizzicato cues cleanly separated interview scenes seamlessly, whereas heavy lyric pop choruses fighting beneath spoken guest chatter forced listeners to crank volume strains constantly!
Dr. Morris: [[Q24]] Fatal frequency clash—never stack vocal lyrics underneath spoken interview answers! How cleanly did student listeners handle crisp two-speed playback acceleration on commuting trains? Almost half sped long forty-minute policy interviews up to one-point-five speed—forcing crisp crisp diction pauses rather than rushing mumbling sentences!
Jonah: [[Q25]] One technical flaw jumped out inside studio analytics: wild loudness swings between loud punchy studio narrators and quiet outdoor Zoom interviewees annoyed cyclists constantly reaching for phone volume toggles!
Dr. Morris: [[Q26]] Enforce strict minus-sixteen LUFS broadcast loudness normalization across all mixed final tracks before hitting publish!
Amy: [[Q27]] Another blind spot surfaced in transcript accessibility: adding accurate clickable chapter time-markers alongside full clean transcripts lifted international exchange listeners twenty-eight percent unexpectedly!
Jonah: [[Q28]] Even sighted readers skimmed transcripts first to locate exact dissertation citation timestamps effortlessly!
Amy: [[Q29]] For Friday’s Journalism Media Forum, should we show raw smartphone completion decay graphs or play thirty-second A-B mixed clips?
Dr. Morris: [[Q30]] Let rooms hear thirty seconds of messy un-leveled Zoom audio contrasted beside crisp normalized mixdown—listeners grasp broadcast engineering instantaneously when ears compare directly!`,
        questions: [
          {
            id: 'cd_listening_p30_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Time window where 35% of listeners exited episodes featuring dull small-talk intros: ______ seconds',
            correctAnswer: 'NINETY',
            explanation: 'Quit within the first ninety seconds.'
          },
          {
            id: 'cd_listening_p30_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which auditory opener helped keep 82% listening past minute five?',
            correctAnswer: 'FIELD AMBIANCE',
            explanation: 'Crisp natural field ambiance locked listener attention.'
          },
          {
            id: 'cd_listening_p30_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did heavy lyric pop songs undermine podcast spoken interviews?',
            options: [
              'A. Royalty license clips cut off after thirty seconds',
              'B. Competing sung lyrics clashed against spoken guest clarity',
              'C. Heavy bass drum beats distorted small laptop speakers',
              'D. Commuters skipped tracks expecting music playlists'
            ],
            correctAnswer: 'B',
            explanation: 'Sung vocal lyrics clashed with spoken guest chatter.'
          },
          {
            id: 'cd_listening_p30_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Playback speed commonly chosen by commuting listeners on long 40-minute interviews: ______ speed',
            correctAnswer: 'ONE-POINT-FIVE',
            explanation: 'Almost half used one-point-five speed.'
          },
          {
            id: 'cd_listening_p30_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Unbalanced audio volumes forced commuting ______ to constantly adjust phone volume.',
            correctAnswer: 'CYCLISTS',
            explanation: 'Loudness swings annoyed cyclists adjusting phone toggles.'
          },
          {
            id: 'cd_listening_p30_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Standardized broadcast loudness target mandated before track export: minus-sixteen ______',
            correctAnswer: 'LUFS',
            explanation: 'Normalize cleanly to minus-sixteen LUFS.'
          },
          {
            id: 'cd_listening_p30_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Percentage jump in international exchange listeners once transcripts and chapters launched: ______ percent',
            correctAnswer: 'TWENTY-EIGHT',
            explanation: 'Boosted international listeners twenty-eight percent.'
          },
          {
            id: 'cd_listening_p30_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Why did sighted student researchers check written transcripts quickly?',
            correctAnswer: 'CITATION TIMESTAMPS',
            explanation: 'Skimmed transcripts to find exact citation timestamps.'
          },
          {
            id: 'cd_listening_p30_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Day scheduled for presenting audio findings at the Journalism Media Forum: ______',
            correctAnswer: 'FRIDAY',
            explanation: 'Forum takes place Friday.'
          },
          {
            id: 'cd_listening_p30_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'Why does Dr. Morris advise contrasting un-leveled versus leveled audio clips live?',
            options: [
              'A. Audience ears spot technical polish immediately in thirty seconds',
              'B. Printed graphs render dimly on projector screens',
              'C. Sponsor rules require live station promo jingles',
              'D. Engineers evaluate microphone polar response curves'
            ],
            correctAnswer: 'A',
            explanation: 'Listeners hear normalization value instantly in direct comparison.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Cultural Durability of Live Radio in a Streaming Age',
        audioScenario:
          'A media historian lectures on why real-time linear radio survived television and automated music algorithms intact.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Broadcast Media History Lecture]
Lecturer: Every generation predicted glossy new visual gadgets would bury humble blind radio permanently—first talking cinema, next glowing lounge television, and recently infinite algorithmic song streams.
Lecturer: [[Q31]] Yet astonishingly, weekly radio reach across Europe holds rock-steady above eighty-five percent—because unlike demanding greedy screen viewing, pure audio lets cooks chop onions or builders paint ceilings hands-free!
Lecturer: [[Q32]] During early 1920s crystal-set evenings, critics scoffed that isolated mechanical receivers inside wooden living rooms destroyed intimate face-to-face family parlor storytelling.
Lecturer: [[Q33]] Ironically, live fireside radio voices sparked fierce shared national belonging—turning distant royal broadcasts and dramatic weather alerts into instantaneous simultaneous community hearthstones!
Lecturer: [[Q34]] When gleaming boxy television stole prime evening living-room dramas cleanly after 1953, pundits signed radio’s death warrant prematurely—overlooking a humble plastic transistor revolution slipping swiftly onto sunny beaches and dashboard dashboards!
Lecturer: [[Q35]] Notice that technical portability leap: shrinking fragile glowing vacuum glass tubes into rugged fingernail silicon transistors freed top-forty disc jockeys to soundtrack restless teenage summers out beyond parents’ parlors!
Lecturer: [[Q36]] Later, public car-commuter traffic patterns built radio’s golden economic fortress: stuck solo behind foggy morning tailbacks, commuters hungered warmly for witty regional morning banter reacting live to freezing bridge sleet!
Lecturer: [[Q37]] Crucially, psychology clarifies why digital streaming playlists still lose lonely ears to quirky local DJs: algorithms feed sterile predictable echo chambers cleanly matching yesterday’s likes, whereas human broadcasters surprise listeners with wild eccentric tracks!
Lecturer: [[Q38]] Even more striking during hurricanes or blackouts when glass fibre broadband towers fail dark, tiny wind-up battery AM-FM transistors survive cleanly as lifeline civic emergency beacons!
Lecturer: [[Q39]] Meanwhile, modern community campus and neighborhood low-power micro-FM stations champion neglected hyper-local voices—high-school poets, immigrant diaspora elders, neighborhood council hearings—ignored totally by global silicon giants!
Lecturer: [[Q40]] Ultimately, live voice radio thrives into its second bright century precisely through effortless synchronous human companionship—reminding solitary commuters they share one fragile living morning together.`,
        questions: [
          {
            id: 'cd_listening_p30_lq31',
            number: 31,
            type: 'short_answer',
            questionText: 'Key behavioral reason weekly European radio reach stays above 85% despite screens:',
            correctAnswer: 'HANDS-FREE',
            explanation: 'Audio permits listeners to work, cook, or drive hands-free.'
          },
          {
            id: 'cd_listening_p30_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Social pastime early 1920s critics feared living-room crystal radio receivers might ruin: ______ storytelling',
            correctAnswer: 'PARLOR',
            explanation: 'Feared destroying intimate family parlor storytelling.'
          },
          {
            id: 'cd_listening_p30_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What unexpected social bond did national radio broadcasts actually foster?',
            options: [
              'A. Cheaper political campaign pamphlet advertising',
              'B. Standardized regional dialect pronunciations overnight',
              'C. Faster rural agricultural commodity market auctions',
              'D. Shared real-time national belonging around simultaneous events'
            ],
            correctAnswer: 'D',
            explanation: 'Sparked instantaneous shared national belonging simultaneously.'
          },
          {
            id: 'cd_listening_p30_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Portable 1950s electronic invention rescuing radio after television stole lounge dramas: ______',
            correctAnswer: 'TRANSISTOR',
            explanation: 'Rugged portable transistors freed radio onto beaches and dashboards.'
          },
          {
            id: 'cd_listening_p30_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Shrinking bulky vacuum ______ tubes into rugged silicon freed pop broadcasts outdoors.',
            correctAnswer: 'GLASS',
            explanation: 'Shrinking fragile glowing vacuum glass tubes.'
          },
          {
            id: 'cd_listening_p30_lq36',
            number: 36,
            type: 'short_answer',
            questionText: 'Which daily commute routine solidified radio’s prime morning commercial strength?',
            correctAnswer: 'TRAFFIC PATTERNS',
            explanation: 'Car-commuter traffic patterns built morning radio.’'
          },
          {
            id: 'cd_listening_p30_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do quirky live music hosts still beat streaming recommendation playlists emotionally?',
            options: [
              'A. Live hosts broadcast uncompressed studio audio fidelity',
              'B. Free radio waves conserve smartphone mobile data caps',
              'C. Human hosts break predictable echo loops with charming surprise discoveries',
              'D. Stations host weekend festival ticket raffles'
            ],
            correctAnswer: 'C',
            explanation: 'Algorithms loop predictable likes while DJs spark surprise discoveries.'
          },
          {
            id: 'cd_listening_p30_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Crisis situations proving battery AM-FM sets stay vital civic lifelines after broadband failure: ______',
            correctAnswer: 'BLACKOUTS',
            explanation: 'Survive hurricanes or blackouts cleanly when fiber drops.'
          },
          {
            id: 'cd_listening_p30_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Underrepresented groups amplified uniquely by low-power local micro-FM stations: immigrant ______ elders',
            correctAnswer: 'DIASPORA',
            explanation: 'Champions poets, councils, and immigrant diaspora elders.'
          },
          {
            id: 'cd_listening_p30_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What core human strength carries radio effortlessly into its second century?',
            options: [
              'A. Cheaper advertising tariffs than digital social videos',
              'B. Synchronous live human companionship uniting solitary listeners',
              'C. High-speed satellite internet podcast downloads',
              'D. Archival heritage broadcasts archived publicly'
            ],
            correctAnswer: 'B',
            explanation: 'Thrives on synchronous live human companionship.'
          }
        ]
      }
    ]
  })
];
