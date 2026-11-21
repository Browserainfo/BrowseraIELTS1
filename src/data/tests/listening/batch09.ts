/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_09: TestItem[] = [
  // =========================================================================
  // MOCK 11: Travel Insurance Inquiries & Urban Hydrology Seminar
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m11',
    testNumber: 11,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 11: Travel Insurance Inquiries & Urban Hydrology Seminar',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Travel Insurance Inquiries & Urban Hydrology Seminar.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Campus Field-Trip Travel Insurance Inquiry',
        audioScenario:
          'A postgraduate geography student phones the University Risk and Travel Insurance Office to arrange expedition cover for overseas mountain fieldwork.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Travel Insurance Inquiries]
Advisor: Good morning, University Travel Insurance Desk, Martin speaking. How can I assist you?
Student: [[Q1]] Hi Martin! I am departing next month for three weeks of glacier stream fieldwork in Peru and need to register under the university expedition policy. My surname is Donnelly, spelled D-O-N-N-E-L-L-Y.
Advisor: [[Q2]] Thank you, Ms. Donnelly. University core student cover is free for approved dissertation travel—provided you declare exact trek altitudes because standard policies cap trekking strictly below three thousand metres!
Student: [[Q3]] Ah—our valley sampling huts sit at 3,800 metres! Does adding the High-Altitude Rider carry an extra fee? Yes—adding mountain altitude extension up to 4,500 metres costs twenty-six pounds flat for the full trip!
Advisor: [[Q4]] Worth every penny! Should I list our department’s waterproof flow-meter laptop and DSLR lens separately? Personal electronics cap at £750 unless you upload serial receipts to cover lab equipment up to £2,500!
Student: [[Q5]] I will upload those receipts tonight. What happens if muddy hillside buses delay internal flights—does the policy cover alternative jeep hire? Yes—delay compensation activates automatically after six documented consecutive hours!
Advisor: [[Q6]] Check one medical detail too: remember our 24-hour emergency evacuation hotline operates out of Zurich—save international collect number +41 44 500 9210 inside your offline phone wallet!
Student: [[Q7]] Saving that straightaway! Can students settle local clinic prescriptions upfront on personal credit cards and submit scans later? Keep itemized stamped pharmacy receipts under £150; anything larger requires pre-authorization before discharge!
Advisor: [[Q8]] Notice baggage rules on domestic propeller flights too: unattended equipment locked inside canvas backpacks on open bus roofs voids theft claims—use hard padlocked Pelican cases inside cabins!
Student: [[Q9]] Good advice—I already packed our yellow hard case! Who signs my final departmental travel risk sheet before certificates email through? Your Faculty Safety Officer, Dr. Alvarez, signs Room 304 waivers Tuesday afternoons!
Advisor: [[Q10]] Let me hold your provisional Peru expedition file open under Policy Code TI-114.`,
        questions: [
          {
            id: 'cd_listening_m11_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Postgraduate student applicant surname: ______',
            correctAnswer: 'DONNELLY',
            explanation: 'Spelled D-O-N-N-E-L-L-Y.'
          },
          {
            id: 'cd_listening_m11_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Standard baseline elevation limit before high-altitude cover riders become mandatory: ______ metres',
            correctAnswer: 'THREE THOUSAND',
            explanation: 'Standard policies cap trekking strictly below three thousand metres.'
          },
          {
            id: 'cd_listening_m11_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Flat surcharge fee adding high-altitude trek protection up to 4,500 metres: £ ______',
            correctAnswer: 'TWENTY-SIX',
            explanation: 'Mountain altitude extension costs twenty-six pounds flat.'
          },
          {
            id: 'cd_listening_m11_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Document required online to raise lab electronics insurance limits to £2,500: serial ______',
            correctAnswer: 'RECEIPTS',
            explanation: 'Upload serial receipts to extend equipment cover.'
          },
          {
            id: 'cd_listening_m11_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Minimum flight delay duration triggering alternative jeep reimbursement: ______ hours',
            correctAnswer: 'SIX',
            explanation: 'Activates after six documented consecutive hours.'
          },
          {
            id: 'cd_listening_m11_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'European city hosting the 24-hour emergency evacuation response desk: ______',
            correctAnswer: 'ZURICH',
            explanation: 'Emergency evacuation hotline operates out of Zurich.'
          },
          {
            id: 'cd_listening_m11_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What rule applies when claiming overseas outpatient clinic charges above £150?',
            options: [
              'A. Claims require original translated embassy stamps afterward',
              'B. Students must obtain pre-authorization prior to clinic discharge',
              'C. Local pharmacies bill the university bursary directly',
              'D. Reimbursements split evenly across academic faculty accounts'
            ],
            correctAnswer: 'B',
            explanation: 'Anything larger than £150 requires pre-authorization before discharge.'
          },
          {
            id: 'cd_listening_m11_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'Which protective luggage container ensures theft coverage for expedition gear in transit?',
            correctAnswer: 'HARD PADLOCKED PELICAN CASES',
            explanation: 'Use hard padlocked Pelican cases inside cabins.'
          },
          {
            id: 'cd_listening_m11_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Faculty Safety Officer approving risk sheets in Room 304: Dr. ______',
            correctAnswer: 'ALVAREZ',
            explanation: 'Dr. Alvarez signs Room 304 waivers Tuesday afternoons.'
          },
          {
            id: 'cd_listening_m11_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Provisional Peru fieldwork travel insurance code: ______',
            correctAnswer: 'TI-114',
            explanation: 'Held under Policy Code TI-114.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Walking Tour of the Elmbridge Floodplain Detention Park',
        audioScenario:
          'A municipal water engineer guides neighborhood residents through a newly opened urban stormwater retention park designed to absorb flash floods.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Municipal Flood Park Briefing]
Engineer: Good afternoon, neighbors! Welcome to Elmbridge Detention Park—once a muddy concrete warehouse yard, now our town’s chief storm shield holding thirty million litres safely away from terraced basements!
Engineer: [[Q11]] Notice the speckled driveway bricks underfoot at Park Entrance North: wide sandy gaps filled with crushed granite gravel drain heavy downpours straight underground rather than shooting greasy street puddles down gutters!
Engineer: [[Q12]] Walk beside the sunken pebble ditch along Oak Crescent: rather than ugly concrete drains, terraced bioswale channels packed with deep-rooted yellow iris plants filter oily road soot naturally out of rainwater!
Engineer: [[Q13]] Glance across that low sunken baseball meadow ahead: during dry August weekends children kick soccer balls cleanly across sunny turf—while heavy November winter storms fill the bowl gently into a safe temporary lake!
Engineer: [[Q14]] Never mistake smooth grassy embankment slopes around Sluice Bridge for sunny picnic lawns after yellow sirens sound—stay uphill past blue steel marker posts whenever automatic flood gates open!
Engineer: [[Q15]] Overhead on the library roof terrace sit bright silver rainwater cisterns watering summer street trees while relieving downstream Victorian brick sewers during sudden afternoon cloudbursts!
Engineer: [[Q16]] Look carefully into our crystal clearing pond beside Reed Deck: floating foam-anchored raft planters hold hungry marsh sedges whose dangling roots strip excess garden lawn nitrogen out of storm water!
Engineer: [[Q17]] Local primary classes love inspecting our Brass Tide Gauge bolted onto Bridge Pillar Two—notching marks showing how smoothly 2022 winter floods subsided twenty-four hours faster than old culvert days!
Engineer: [[Q18]] Cyclists riding commuting commuter lanes must slow below ten miles per hour along wet wooden boardwalk ramps where autumn willow leaves occasionally turn slick!
Engineer: [[Q19]] Remember our volunteer Stream-Watch Saturdays every first morning of each month: neighbors clear floating plastic drink bottles trapped cleanly behind metal leaf screens!
Engineer: [[Q20]] Pick up folded drainage engineering flyers inside weatherproof cedar boxes beside Bench Seven before strolling homeward.`,
        questions: [
          {
            id: 'cd_listening_m11_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Permeable stone aggregate packing driveway brick joints at Park Entrance North: crushed ______ gravel',
            correctAnswer: 'GRANITE',
            explanation: 'Wide gaps filled with crushed granite gravel drain downpours.'
          },
          {
            id: 'cd_listening_m11_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Deep-rooted flowering wetland species cleaning oily street runoff in Oak Crescent bioswales: yellow ______',
            correctAnswer: 'IRIS',
            explanation: 'Channels packed with yellow iris plants filter road soot.'
          },
          {
            id: 'cd_listening_m11_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What dual function serves the sunken grassy sports bowl in the park center?',
            options: [
              'A. Dry sunny recreation turf doubling as a storm floodwater detention basin',
              'B. Permanent winter skating pond and summer concert terrace',
              'C. Emergency helicopter landing pad and municipal compost bed',
              'D. Soil testing laboratory plot and community dog-agility field'
            ],
            correctAnswer: 'A',
            explanation: 'Serves as soccer turf in dry weather and fills as a temporary storm lake.'
          },
          {
            id: 'cd_listening_m11_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Safety boundary markers visitors must stay above whenever yellow flood sirens sound: ______ steel posts',
            correctAnswer: 'BLUE',
            explanation: 'Stay uphill past blue steel marker posts.'
          },
          {
            id: 'cd_listening_m11_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Rooftop rainwater vessels mounted atop the nearby library easing sewer peaks: silver ______',
            correctAnswer: 'CISTERNS',
            explanation: 'Silver rainwater cisterns water trees and relieve Victorian sewers.'
          },
          {
            id: 'cd_listening_m11_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Chemical lawn pollutant stripped cleanly by dangling sedge roots under floating wetland rafts: ______',
            correctAnswer: 'NITROGEN',
            explanation: 'Marsh sedge roots strip excess garden nitrogen out of water.'
          },
          {
            id: 'cd_listening_m11_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Which measuring fixture attached to Bridge Pillar Two lets school groups inspect past flood drop speeds?',
            correctAnswer: 'BRASS TIDE GAUGE',
            explanation: 'Brass Tide Gauge bolted onto Bridge Pillar Two shows 2022 water drop.'
          },
          {
            id: 'cd_listening_m11_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Maximum cyclist speed limit advised along slick wooden boardwalk ramps: ______ miles per hour',
            correctAnswer: 'TEN',
            explanation: 'Slow below ten miles per hour along wet ramps.'
          },
          {
            id: 'cd_listening_m11_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What practical task do Stream-Watch volunteers handle on the first Saturday monthly?',
            options: [
              'A. Replanting eroded willow stakes along creek bends',
              'B. Recording dissolved oxygen readings in pond outlets',
              'C. Repainting depth scale numerals along concrete bridge piers',
              'D. Clearing trapped litter bottles from metal stormwater screens'
            ],
            correctAnswer: 'D',
            explanation: 'Clear floating plastic bottles trapped behind metal leaf screens.'
          },
          {
            id: 'cd_listening_m11_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Bench number locating the cedar flyer box holding drainage guides: Bench ______',
            correctAnswer: 'SEVEN',
            explanation: 'Weatherproof cedar boxes beside Bench Seven.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Troubleshooting Urban Stormwater Gauge Sensors',
        audioScenario:
          'Civil engineering students Zara and Owen consult Dr. Morris regarding clogged tipping-bucket rain gauges and sudden peak-discharge errors.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Hydrology Lab Review]
Dr. Morris: Sit down, Zara and Owen. Your hydrographs comparing asphalt schoolyards against gravel park alleys look crisp—yet Tuesday’s September storm curve displays a weird flat plateau!
Zara: [[Q21]] We spotted that flat line too! Across four hours of pouring Tuesday rain, Tipping Gauge Three along Market High Street logged zero extra rainfall tips past midnight!
Owen: [[Q22]] Cycling back Wednesday morning to inspect its funnel cylinder, I pulled out two soggy plane-tree autumn leaves wedged tightly across the brass mesh filter cone!
Dr. Morris: Classic leaf-choke failure! Never guess smooth fake numbers into clogged gauge gaps—how should you reconstruct true midnight storm intensity honestly?
Zara: [[Q23]] Can we interpolate rainfall rates using the pristine municipal Met Office radar station standing 600 metres north at the fire hall?
Dr. Morris: [[Q24]] Exactly right—cross-calibrate missing hours against that nearby radar grid and print subtle hatched bars clearly showing imputed intervals inside Figure Two! How did underground sewer pipe ultrasonic flow meters behave?
Owen: [[Q25]] Our ceiling ultrasonic flow meters worked wonderfully during gentle drizzle!
Owen: [[Q26]] Yet inside roaring peak thunderstorm surges, floating cardboard boxes fooled echoes into reporting shallower water heights!
Dr. Morris: Smart physical catch: explain surface debris scatter directly under Instrument Limitations! Did permeable car-park pavers slow peak runoff meaningfully compared to sealed asphalt?
Zara: [[Q27]] Dramatically—sealed tarmac dumped ninety percent of cloudburst water straight toward drains within eighteen minutes!
Zara: [[Q28]] Meanwhile, permeable gravel pavers cut peak storm surge volume nearly fifty-five percent cleanly!
Dr. Morris: [[Q29]] Lead your engineering slide talk with that striking eighteen-minute surge gap! Which validation chart closes Friday’s twenty-minute colloquium presentation?
Owen: [[Q30]] A side-by-side cost curve proving shallow soil bioswales save city councils forty percent compared to digging giant concrete overflow tunnels!`,
        questions: [
          {
            id: 'cd_listening_m11_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Street location of Tipping Gauge Three that froze silently past midnight during Tuesday storms: ______ High Street',
            correctAnswer: 'MARKET',
            explanation: 'Tipping Gauge Three along Market High Street logged zero tips.'
          },
          {
            id: 'cd_listening_m11_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'What physical blockage jammed the brass funnel filter screen of Gauge Three?',
            correctAnswer: 'SOGGY PLANE-TREE AUTUMN LEAVES',
            explanation: 'Pulled out two soggy plane-tree autumn leaves.'
          },
          {
            id: 'cd_listening_m11_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Distance north separating the reliable Met Office fire-hall radar gauge from Market Street: ______ metres',
            correctAnswer: '600',
            explanation: 'Met Office radar station stands 600 metres north.'
          },
          {
            id: 'cd_listening_m11_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'How must Zara and Owen visually represent reconstructed midnight rainfall bars on Figure Two?',
            options: [
              'A. Leave four empty blank hourly spaces to avoid estimation bias',
              'B. Average Tuesday night rainfall evenly with neighboring Wednesday hours',
              'C. Use distinct hatched shading marking values imported from nearby radar',
              'D. Smooth curves manually with dashed trend lines ignoring peak bursts'
            ],
            correctAnswer: 'C',
            explanation: 'Print subtle hatched bars clearly showing imputed intervals inside Figure Two.'
          },
          {
            id: 'cd_listening_m11_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Sewer ceiling instrument confused by floating cardboard trash during thunderstorm peaks: ______ flow meters',
            correctAnswer: 'ULTRASONIC',
            explanation: 'Debris fooled ceiling ultrasonic flow meters.'
          },
          {
            id: 'cd_listening_m11_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why did ultrasonic pipe gauges underreport storm surge heights during severe downpours?',
            options: [
              'A. High water submergence shorted ceiling electrical probes',
              'B. Floating cardboard debris bounced ultrasonic beams early',
              'C. Mud silt settled across floor calibration reflectors',
              'D. Rapid thunder pressure waves scrambled acoustic software'
            ],
            correctAnswer: 'B',
            explanation: 'Floating cardboard boxes fooled ultrasonic echoes into reporting shallower water.'
          },
          {
            id: 'cd_listening_m11_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Minutes elapsed before sealed tarmac dumped ninety percent of storm water toward municipal drains: ______ minutes',
            correctAnswer: 'EIGHTEEN',
            explanation: 'Dumped ninety percent straight toward drains within eighteen minutes.'
          },
          {
            id: 'cd_listening_m11_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Percentage drop in peak storm runoff delivered by gravel car-park pavers: ______ percent',
            correctAnswer: 'FIFTY-FIVE',
            explanation: 'Gravel pavers cut peak surge volume nearly fifty-five percent.'
          },
          {
            id: 'cd_listening_m11_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Scheduled duration of Friday’s hydrology department colloquium talk: ______ minutes',
            correctAnswer: 'TWENTY',
            explanation: 'Friday twenty-minute colloquium presentation.'
          },
          {
            id: 'cd_listening_m11_lq30',
            number: 30,
            type: 'multiple_choice',
            questionText: 'What concluding economic point will Owen highlight on the final slide?',
            options: [
              'A. Annual vacuum cleaning keeps porous pavements viable for twenty years',
              'B. Private developers fund half of downtown green roof retrofits',
              'C. Basement backflow valves halve municipal flood insurance claims',
              'D. Shallow surface bioswales cost 40% less than deep concrete overflow tunnels'
            ],
            correctAnswer: 'D',
            explanation: 'Bioswales save city councils forty percent compared to giant concrete tunnels.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Urban Hydrology & Designing Flood-Resilient Sponge Cities',
        audioScenario:
          'A hydrologist lectures on sealed urban catchment dynamics, burying historical creeks in culverts, China’s Sponge City pilots, and stream daylighting.',
        audioDurationSeconds: 230,
        transcript: `[Audio Track 4 - Section 4: Urban Hydrology Lecture]
Lecturer: Walk outside into a lush mossy woodland during a roaring summer thunderstorm—scarcely ten percent of falling rain races sideways over leaf litter; the rest sinks quietly underground replenishing springs!
Lecturer: [[Q31]] Now pave that identical hillside beneath sealed asphalt driveways, tiled supermarket roofs, and concrete plazas: impervious surfaces prevent soaking completely, turning mild storms into roaring muddy flash torrents within minutes!
Lecturer: [[Q32]] Nineteenth-century Victorian municipal engineers fought smelly industrial streams using one ruthless recipe: straighten curving reed beds inside buried brick pipes—known technically as culverting—so grey factories could pave safely overhead!
Lecturer: [[Q33]] Sadly, trapped streams jammed neatly inside smooth underground concrete tubes shoot flood crests downstream three times faster—causing violent explosive river rises wherever constricted exit mouths clog with timber branches!
Lecturer: [[Q34]] Worse still, sealing suburban landscapes starves deep underground aquifers cleanly of seasonal winter recharge, leaving summer wells parched precisely during July droughts!
Lecturer: [[Q35]] Recognizing dual flood-and-drought threats, Chinese landscape planner Yu Kongjian pioneered the global Sponge City blueprint—treating rainfall not as nuisance waste to expel rapidly, but precious blue treasure to slow, cleanse, and store locally!
Lecturer: [[Q36]] Take Seoul’s celebrated Cheonggyecheon restoration in South Korea: bold urban planners tore down a crumbling multi-lane elevated highway slab—exposing or daylighting six miles of buried concrete river back into sunlit stone trails!
Lecturer: [[Q37]] Beyond stopping downtown floods, daylighting Cheonggyecheon cooled neighboring street heat by three degrees while tripling native fish and water-bird counts inside five short years!
Lecturer: [[Q38]] Even dense flat apartment courtyards deploy porous concrete—specially mixed cement omitting fine sand particles so interconnected pebble voids drink cloudburst water rapidly straight down into stone gravel beds!
Lecturer: [[Q39]] Yet sponge engineering faces one mundane municipal obstacle: porous pavements choke fast with sticky autumn mud unless city crews run specialized high-pressure vacuum sweepers twice yearly!
Lecturer: [[Q40]] Ultimately, shifting from rigid grey concrete drainpipes toward living blue-green sponge networks turns hostile storm weather into thriving neighborhood cooling sanctuaries.`,
        questions: [
          {
            id: 'cd_listening_m11_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Hydrological adjective describing watertight asphalt roofs and roads blocking ground rainwater infiltration: ______',
            correctAnswer: 'IMPERVIOUS',
            explanation: 'Impervious surfaces prevent soaking completely.'
          },
          {
            id: 'cd_listening_m11_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Victorian engineering practice burying curving natural urban creeks inside straight brick sewer tubes: ______',
            correctAnswer: 'CULVERTING',
            explanation: 'Known technically as culverting.'
          },
          {
            id: 'cd_listening_m11_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why do concrete underground pipes heighten downstream river flood danger?',
            options: [
              'A. Smooth narrow tubes accelerate flood crests downstream threefold before clogging',
              'B. Brick mortar leaches salts accelerating winter riverbank erosion',
              'C. Underground darkness destroys algae oxygenating tributary waters',
              'D. Heavy street traffic cracks shallow subterranean pipe arches'
            ],
            correctAnswer: 'A',
            explanation: 'Smooth concrete tubes shoot flood crests three times faster before clogging.'
          },
          {
            id: 'cd_listening_m11_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Underground fresh groundwater reserves starved of winter recharge by sealed pavements: ______',
            correctAnswer: 'AQUIFERS',
            explanation: 'Starves deep underground aquifers of winter recharge.'
          },
          {
            id: 'cd_listening_m11_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'What philosophical shift defines Yu Kongjian’s Sponge City urban drainage approach?',
            options: [
              'A. Pump stormwater uphill to distant rural irrigation reservoirs',
              'B. Treat rainfall as a local asset to slow, cleanse, and retain rather than eject quickly',
              'C. Double diameter of Victorian deep storm interceptors underneath avenues',
              'D. Mandate waterproof household flood barriers across ground-floor shops'
            ],
            correctAnswer: 'B',
            explanation: 'Treat rainfall not as nuisance waste to expel, but treasure to slow, cleanse, and store.'
          },
          {
            id: 'cd_listening_m11_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Restoration term for demolishing elevated roads above Seoul’s Cheonggyecheon creek to expose flowing water: ______',
            correctAnswer: 'DAYLIGHTING',
            explanation: 'Exposing or daylighting six miles of buried concrete river.'
          },
          {
            id: 'cd_listening_m11_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Average urban street cooling achieved alongside Seoul’s restored sunlit river corridor: ______ degrees',
            correctAnswer: 'THREE',
            explanation: 'Cooled neighboring street heat by three degrees.'
          },
          {
            id: 'cd_listening_m11_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which raw mortar ingredient is omitted when mixing fast-draining porous concrete?',
            correctAnswer: 'FINE SAND PARTICLES',
            explanation: 'Cement omits fine sand particles to leave interconnected pebble voids.'
          },
          {
            id: 'cd_listening_m11_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'What specialized maintenance vehicle must clean porous pavements twice annually to clear clogging mud?',
            correctAnswer: 'HIGH-PRESSURE VACUUM SWEEPERS',
            explanation: 'City crews run high-pressure vacuum sweepers twice yearly.'
          },
          {
            id: 'cd_listening_m11_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How does the lecturer summarize replacing rigid concrete pipes with living sponge networks?',
            options: [
              'A. Cuts municipal water utility bills evenly across suburbs',
              'B. Eliminates winter snow ploughing across commercial boulevards',
              'C. Transforms damaging flood storms into cool thriving city sanctuaries',
              'D. Allows residential towers near low riverbanks without piling'
            ],
            correctAnswer: 'C',
            explanation: 'Turns hostile storm weather into thriving neighborhood cooling sanctuaries.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 12: Film Festival Volunteer Booking & Deep Sea Robotics Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m12',
    testNumber: 12,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 12: Film Festival Volunteer Booking & Deep Sea Robotics Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Film Festival Volunteer Booking & Deep Sea Robotics Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Volunteering for the Civic Independent Film Festival',
        audioScenario:
          'A media student phones the Civic Cinema Box Office Coordinator to schedule volunteer front-of-house and projection runner shifts.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Film Festival Volunteer Booking]
Coordinator: Hello, Civic Independent Film Festival Crew Desk, Tessa speaking. How can I help?
Caller: [[Q1]] Hi Tessa! I would love to sign up for three evening screening shifts next week. My surname is Kovacs, spelled K-O-V-A-C-S.
Coordinator: [[Q2]] Lovely, Ms. Kovacs! Have you worked live cinema ushering before, or would you prefer managing our courtyard Q&A guest pass desk? Actually, I speak fluent Polish and German—so assisting bilingual subtitle booth coordinators sounds super exciting!
Coordinator: [[Q3]] Fantastic bonus! Our Festival Opening Week runs Tuesday through Sunday, and volunteers work minimum shifts of four continuous hours starting either at 1:00 PM or 5:30 PM!
Caller: [[Q4]] Put me down for the 5:30 PM evening blocks Tuesday, Thursday, and Friday please! Should volunteers follow a strict black suit dress code? Nothing formal—just wear comfortable dark trainers plus the bright marigold cotton T-shirt we issue at induction!
Coordinator: [[Q5]] Note one non-negotiable booth rule near screen doors: silence phones onto airplane mode before stepping inside screening auditoriums—even faint screen glow triggers automatic director complaints!
Caller: [[Q6]] Naturally! Does volunteer service include complimentary tickets to watch morning documentary premieres off-shift? Yes—every completed shift earns two standby screening vouchers plus free toasted paninis at our Green Room cafe!
Coordinator: [[Q7]] Wonderful perk! Where should incoming crew collect laminated lanyard passes ahead of Tuesday evening doors? Pop past Box Office Window Four at the Art Deco Arcade entrance between eleven and four Monday!
Caller: [[Q8]] Got it—Arcade Window Four on Monday! What if late festival buses strand helpers after midnight closing galas? Show your volunteer lanyard on Festival Night Shuttle Route 9 for free doorstep rides home!
Coordinator: [[Q9]] Who serves as immediate shift supervisor if confused guests misplace printed passes during sold-out screenings? Call Floor Lead Hassan straight on backstage radio Channel Two!
Caller: [[Q10]] Saving Channel Two cleanly—could I grab my crew confirmation reference? Jot down Festival Shift ID FF-126!`,
        questions: [
          {
            id: 'cd_listening_m12_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Film festival volunteer applicant surname: ______',
            correctAnswer: 'KOVACS',
            explanation: 'Spelled K-O-V-A-C-S.'
          },
          {
            id: 'cd_listening_m12_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Specialized festival crew role suited to the caller’s Polish and German fluency: ______ booth coordinator assistant',
            correctAnswer: 'SUBTITLE',
            explanation: 'Assisting bilingual subtitle booth coordinators.'
          },
          {
            id: 'cd_listening_m12_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Minimum continuous length required per festival volunteer shift: ______ hours',
            correctAnswer: 'FOUR',
            explanation: 'Minimum shifts of four continuous hours.'
          },
          {
            id: 'cd_listening_m12_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Color of cotton festival volunteer T-shirt distributed at induction: bright ______',
            correctAnswer: 'MARIGOLD',
            explanation: 'Wear the bright marigold cotton T-shirt issued at induction.'
          },
          {
            id: 'cd_listening_m12_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'What phone setting is mandatory before stepping inside dark cinema auditoriums?',
            correctAnswer: 'AIRPLANE MODE',
            explanation: 'Silence phones onto airplane mode before entering.'
          },
          {
            id: 'cd_listening_m12_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What rewards do volunteers collect for completing each four-hour festival shift?',
            options: [
              'A. Signed festival posters and £15 cash meal stipends',
              'B. Free VIP afterparty gallery access plus cinema parking',
              'C. Two standby film vouchers and complimentary Green Room paninis',
              'D. Printed director masterclass DVDs and souvenir mugs'
            ],
            correctAnswer: 'C',
            explanation: 'Earns two standby screening vouchers plus free toasted paninis.'
          },
          {
            id: 'cd_listening_m12_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Box Office window issuing volunteer lanyards on Monday at the Arcade entrance: Window ______',
            correctAnswer: 'FOUR',
            explanation: 'Pop past Box Office Window Four Monday between 11 and 4.'
          },
          {
            id: 'cd_listening_m12_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Late-night bus service providing complimentary rides home for lanyard-holding volunteers: Route ______',
            correctAnswer: '9',
            explanation: 'Show lanyard on Festival Night Shuttle Route 9.'
          },
          {
            id: 'cd_listening_m12_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Floor supervisor reachable on backstage radio Channel Two for ticketing snags: ______',
            correctAnswer: 'HASSAN',
            explanation: 'Call Floor Lead Hassan on Channel Two.'
          },
          {
            id: 'cd_listening_m12_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Assigned volunteer shift confirmation code: ______',
            correctAnswer: 'FF-126',
            explanation: 'Festival Shift ID FF-126.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Cinema Operations Briefing for Screening Stewards',
        audioScenario:
          'A cinema operations director briefs incoming festival stewards on rapid hall turnarounds, sensory screenings, Q&A etiquette, and archive reels.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Festival Cinema Steward Briefing]
Director: Welcome inside Screen One, everyone! With sixty-eight indie films squeezed across six days, crisp twenty-minute hall turnovers keep our entire festival running like clockwork.
Director: [[Q11]] Remember first how our standby queue works outside Lobby Doors: empty reserved press seats unlock precisely ten minutes before curtain time—never hold aisle corners open later for stragglers!
Director: [[Q12]] Walk calmly down center stair treads scanning under plush velvet seats after credits roll—last autumn stewards rescued nineteen dropped glasses cases plus three lost passports!
Director: [[Q13]] Notice Thursday morning’s special Sensory-Friendly screening of animated shorts: overhead ceiling spotlights stay dimmed gently at thirty percent brightness while sharp booming subwoofer speakers dial noticeably lower!
Director: [[Q14]] During live director Q&A sessions afterward, stewards jogging up tiered balcony rows must mute handheld cordless microphones cleanly whenever handing grips between eager audience questioners!
Director: [[Q15]] Never let eager smartphone reviewers block Side Fire Corridor C to film live stage monologues—tripods and selfie sticks stay outside heavy oak lobby curtains permanently!
Director: [[Q16]] Look up briefly toward Projection Booth Glass: Friday night’s classic noir retrospective runs straight from rare vintage 35-millimetre nitrate-safe celluloid reels—so report flickering audio pops instantly!
Director: [[Q17]] Outside inside Courtyard Pavilion stands our Acoustic Listening Corner where guests hear isolated Foley studio demonstrations—tapping frozen cabbages and crinkling cellophane for storm sounds!
Director: [[Q18]] Check our green QR-code wall cards beside coat check booths: encourage guests to scan instant star ratings before stepping onto street pavements rather than clogging foyer exit stairs!
Director: [[Q19]] Drop unclaimed umbrellas, gloves, or cinema scarves cleanly into the locked Oak Chest behind Reception Counter B rather than propping items loosely atop radiator ledges!
Director: [[Q20]] Before clocking out each midnight, sign green clipboard attendance sheets inside Staff Alcove Six so shuttle drivers match passenger headcounts smoothly.`,
        questions: [
          {
            id: 'cd_listening_m12_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Minutes prior to film start when unclaimed press seats release to standby queues: ______ minutes',
            correctAnswer: 'TEN',
            explanation: 'Reserved seats unlock precisely ten minutes before curtain time.'
          },
          {
            id: 'cd_listening_m12_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Important personal travel documents rescued under velvet theater seats last autumn: ______',
            correctAnswer: 'PASSPORTS',
            explanation: 'Stewards rescued nineteen glasses cases and three lost passports.'
          },
          {
            id: 'cd_listening_m12_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'How does Thursday morning’s Sensory-Friendly animation showcase differ technically?',
            options: [
              'A. Ambient ceiling lights remain softly at 30% while bass volume lowers',
              'B. Narration plays live via wireless earpieces without screen captions',
              'C. Short intermission breaks pause every fifteen minutes cleanly',
              'D. Ushers close acoustic hallway doors tightly during trailers'
            ],
            correctAnswer: 'A',
            explanation: 'Spotlights stay at thirty percent while subwoofer bass dials lower.'
          },
          {
            id: 'cd_listening_m12_lq14',
            number: 14,
            type: 'short_answer',
            questionText: 'What button check must Q&A microphone runners perform while passing mics across balcony seats?',
            correctAnswer: 'MUTE HANDHELD CORDLESS MICROPHONES CLEANLY',
            explanation: 'Mute handheld cordless microphones cleanly between questioners.'
          },
          {
            id: 'cd_listening_m12_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Corridor stewards must keep strictly clear of camera tripods and selfie sticks: Side Fire Corridor ______',
            correctAnswer: 'C',
            explanation: 'Keep Side Fire Corridor C clear permanently.'
          },
          {
            id: 'cd_listening_m12_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Physical archival film format screened Friday night for the classic noir retrospective: 35-millimetre ______ reels',
            correctAnswer: 'CELLULOID',
            explanation: 'Runs straight from vintage 35-millimetre celluloid reels.'
          },
          {
            id: 'cd_listening_m12_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Sound-effects craft studio demonstrated inside Courtyard Acoustic Listening Corner: ______',
            correctAnswer: 'FOLEY',
            explanation: 'Guests hear isolated Foley studio sound demonstrations.'
          },
          {
            id: 'cd_listening_m12_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why are QR rating placards placed beside coat check booths instead of screen exit doors?',
            options: [
              'A. Brighter lobby lighting speeds up camera barcode scanning',
              'B. Festival sponsors inspect paper coat tickets at the same counter',
              'C. Screen exit Wi-Fi repeaters lack steady mobile bandwidth',
              'D. Encouraging votes at coat check stops departing crowds jamming exit stairs'
            ],
            correctAnswer: 'D',
            explanation: 'Prevents departing guests from clogging foyer exit stairs.'
          },
          {
            id: 'cd_listening_m12_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Where must stewards securely lock recovered audience scarves and umbrellas?',
            correctAnswer: 'OAK CHEST',
            explanation: 'Drop unclaimed items into the locked Oak Chest behind Counter B.'
          },
          {
            id: 'cd_listening_m12_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Staff area housing midnight clipboard sign-out sheets for shuttle headcounts: Staff Alcove ______',
            correctAnswer: 'SIX',
            explanation: 'Sign attendance sheets inside Staff Alcove Six.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Designing Autonomous Deep-Water Thruster Prototypes',
        audioScenario:
          'Marine robotics undergraduates Kieran and Mei discuss deep-tank pressure seals and acoustic telemetry loss with Professor Wu.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Ocean Robotics Design Critique]
Prof. Wu: Come in, Kieran and Mei. How did your autonomous submarine’s maiden three-hour pool dive perform inside our deep pressure tank yesterday?
Kieran: [[Q21]] Encouraging start mechanically—our brushed aluminium hull survived twenty atmospheres cleanly without leaking a single salt drop past double rubber O-ring seals!
Mei: [[Q22]] However, twenty minutes into steady figure-eight navigation sweeps, forward sonar video packets kept freezing intermittently whenever our vertical lift thrusters fired full reverse!
Prof. Wu: [[Q23]] Classic electromagnetic motor interference! Did you route delicate shielded data cables inside the exact same aluminum conduit beside noisy high-current battery power lines?
Kieran: Right together inside one tight sleeve—thruster current spikes scrambled telemetry commands whenever both lift motors surged simultaneously!
Prof. Wu: [[Q24]] Split high-amperage thruster power along opposite outer port tubes cleanly from optic signal ribbons! What about trim buoyancy underwater once lithium battery modules cooled down?
Mei: [[Q25]] Cheap compressible rubber foam sleeves crushed flat past fifteen metres, sinking our tail six degrees!
Mei: [[Q26]] By contrast, our yellow hollow ceramic-glass syntactic foam blocks kept neutral buoyancy dead steady!
Prof. Wu: Toss rubber sleeves out permanently—stick strictly with hollow ceramic-glass syntactic foam blocks! How did emergency drop-weight recovery perform during simulated blackout checks?
Kieran: [[Q27]] Magnificently—cutting electromagnet power released a two-kilogram steel keel slab cleanly!
Kieran: [[Q28]] That instant keel drop floated the yellow drone safely back toward ceiling floodlights inside fourteen seconds!
Prof. Wu: [[Q29]] Crucial safety proof for next month’s harbor dock demonstration! Remember when submitting Friday’s hardware diagram, color-code failsafe burn-wire release links prominently in crisp scarlet orange!
Mei: [[Q30]] Done—and I already emailed technician Dave to machine spare brass propeller shear-pins before next Monday’s sea-pier trial!`,
        questions: [
          {
            id: 'cd_listening_m12_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Test pressure endured safely by double rubber O-ring hull seals: ______ atmospheres',
            correctAnswer: 'TWENTY',
            explanation: 'Hull survived twenty atmospheres cleanly without leaks.'
          },
          {
            id: 'cd_listening_m12_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'When did forward sonar telemetry packets freeze during the pool trial?',
            options: [
              'A. Whenever tank filtration pumps switched on hourly',
              'B. Whenever vertical lift thrusters fired at maximum reverse power',
              'C. Whenever water temperature dropped below eight degrees',
              'D. Whenever submarines turned sharply near concrete corners'
            ],
            correctAnswer: 'B',
            explanation: 'Packets froze whenever vertical lift thrusters fired full reverse.'
          },
          {
            id: 'cd_listening_m12_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'What physical wiring flaw caused thruster motor surges to scramble submarine data?',
            correctAnswer: 'ELECTROMAGNETIC MOTOR INTERFERENCE',
            explanation: 'Prof. Wu diagnosed electromagnetic motor interference from shared sleeves.'
          },
          {
            id: 'cd_listening_m12_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Design fix separating noisy power leads away from delicate data lines: outer ______ tubes',
            correctAnswer: 'PORT',
            explanation: 'Split high-amperage thruster power along opposite outer port tubes.'
          },
          {
            id: 'cd_listening_m12_lq25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why did tail buoyancy sag six degrees downward past fifteen metres depth?',
            options: [
              'A. Ordinary compressible rubber foam sleeves collapsed under pressure',
              'B. Water leaked gradually through rear rudder shaft bushings',
              'C. Rear steel ballast pins slipped forward along frame rails',
              'D. Lithium battery casings shrank slightly inside chilled water'
            ],
            correctAnswer: 'A',
            explanation: 'Cheap rubber foam sleeves crushed flat past fifteen metres.'
          },
          {
            id: 'cd_listening_m12_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Compression-proof rigid flotation foam containing hollow ceramic-glass spheres: ______ foam',
            correctAnswer: 'SYNTACTIC',
            explanation: 'Stick strictly with hollow ceramic-glass syntactic foam blocks.'
          },
          {
            id: 'cd_listening_m12_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Mass of emergency steel keel slab dropped cleanly during simulated blackout rises: ______-kilogram',
            correctAnswer: 'TWO',
            explanation: 'Released a two-kilogram steel keel slab.'
          },
          {
            id: 'cd_listening_m12_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Seconds elapsed floating the dead robot safely to surface during drop-weight testing: ______ seconds',
            correctAnswer: 'FOURTEEN',
            explanation: 'Floated back toward lights inside fourteen seconds.'
          },
          {
            id: 'cd_listening_m12_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Diagram color requested to highlight emergency burn-wire failsafes clearly: scarlet ______',
            correctAnswer: 'ORANGE',
            explanation: 'Color-code failsafe release links in scarlet orange.'
          },
          {
            id: 'cd_listening_m12_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Metal alloy chosen for machining spare disposable propeller shear-pins before harbor trials: ______',
            correctAnswer: 'BRASS',
            explanation: 'Asked technician Dave to machine spare brass propeller shear-pins.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Engineering Soft & Autonomous Deep-Sea Exploration Robots',
        audioScenario:
          'An oceanography engineer lectures on crushing hadal trenches, untethered AUV mapping, acoustic navigation, and gentle soft silicone tentacles.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Deep-Sea Robotics Lecture]
Lecturer: Plunge four miles straight down beneath sunlit ocean waves into crushing pitch-black abyssal plains, and ambient water squeezes hulls harder than fifty stacked jumbo jets resting upon your thumbnail!
Lecturer: [[Q31]] Remarkably, because thick seawater absorbs ordinary Wi-Fi radio waves and GPS satellite beams within mere metres, submerged robots operate totally blind to surface radio links unless trailing miles of heavy fiber tether!
Lecturer: [[Q32]] Early heavy remotely operated vehicles dangled nervously beneath expensive research ships on multi-kilometre steel cables—vulnerable whenever sudden surface gales snapped tethers or tangled propellers!
Lecturer: [[Q33]] Modern untethered autonomous underwater vehicles—AUVs—discard trailing umbilicals completely, cruising freely above jagged volcanic seafloors using onboard lithium banks and clever pre-programmed survey grids!
Lecturer: [[Q34]] How do untethered explorers avoid slamming blindly into black basalt spires without GPS? They bounce crisp underwater acoustic sonar chimes toward anchored seafloor beacon transponders—calculating exact position cleanly via sound speed!
Lecturer: [[Q35]] Protecting delicate camera chips under eleven-kilometre trench pressures demands sleek curved titanium spheres—because spherical metal walls distribute brutal crushing external load uniformly without flat weak plate corners!
Lecturer: [[Q36]] Yet rigid steel mechanical pinchers deployed on classic submersibles turned out clumsily brutal—routinely snapping fragile glass sea sponges and rare translucent jellyfish samples right in half!
Lecturer: [[Q37]] To solve clumsy claw trauma, Harvard marine engineers molded squishy soft silicone robotic grippers inflated gently with seawater pumps—scooping delicate coral polyps gently upward completely unharmed!
Lecturer: [[Q38]] Stranger still are bionic swimming fish bots modeled seamlessly after flexible rubber manta-ray wings rather than noisy whirring metal propellers—gliding silently inches past shy octopus dens!
Lecturer: [[Q39]] Meanwhile, hovering robotic explorers hunting smoking deep black-smoker hydrothermal vents carry onboard mass spectrometers sniffing hot copper sulfide clouds directly inside icy midnight waters!
Lecturer: [[Q40]] Ultimately, uniting spherical titanium toughness with jellyfish-soft silicone touch transforms remote robotic probes into respectful silent witnesses across Earth’s least mapped frontier.`,
        questions: [
          {
            id: 'cd_listening_m12_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Surface wireless navigation signals absorbed cleanly within metres beneath seawater: ______',
            correctAnswer: 'GPS',
            explanation: 'Seawater absorbs radio waves and GPS beams within metres.'
          },
          {
            id: 'cd_listening_m12_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'What operational hazard plagued traditional ship-tethered underwater submersibles?',
            options: [
              'A. Salt deposits corroded copper sonar amplifiers swiftly',
              'B. Deep ocean currents spun stationary mother ships uncontrollably',
              'C. Giant squids mistook yellow umbilical pipes for luminous prey',
              'D. Rough ocean storms risked snapping or tangling heavy mile-long cables'
            ],
            correctAnswer: 'D',
            explanation: 'Surface gales could snap tethers or tangle ship propellers.'
          },
          {
            id: 'cd_listening_m12_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Characteristic distinguishing modern AUV drones that cruise independently above deep ocean ridges: ______',
            correctAnswer: 'UNTETHERED',
            explanation: 'Untethered autonomous vehicles discard trailing umbilicals.'
          },
          {
            id: 'cd_listening_m12_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'Which underwater reference hardware answers sonar pings to pinpoint an AUV’s exact abyssal path?',
            correctAnswer: 'SEAFLOOR BEACON TRANSPONDERS',
            explanation: 'Bounce acoustic chimes toward anchored seafloor beacon transponders.'
          },
          {
            id: 'cd_listening_m12_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'Why are deep-sea electronic housings fabricated as curved titanium spheres rather than rectangular boxes?',
            options: [
              'A. Spheres reduce horizontal hydrodynamic drag during rapid dives',
              'B. Cylindrical shapes trap rising warm thermal pockets cleanly',
              'C. Smooth spheres spread crushing external water forces uniformly without weak corners',
              'D. Curved surfaces deflect passing acoustic sonar waves upward'
            ],
            correctAnswer: 'C',
            explanation: 'Spherical walls distribute crushing load uniformly without flat weak corners.'
          },
          {
            id: 'cd_listening_m12_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Traditional hard steel mechanical claws often crushed fragile translucent jellyfish and glass sea ______.',
            correctAnswer: 'SPONGES',
            explanation: 'Rigid claws routinely snapped glass sea sponges right in half.'
          },
          {
            id: 'cd_listening_m12_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Flexible squishy synthetic rubber material inflated gently via seawater to cradle delicate deep coral: ______',
            correctAnswer: 'SILICONE',
            explanation: 'Soft silicone robotic grippers scoop fragile coral unharmed.'
          },
          {
            id: 'cd_listening_m12_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Silent flapping ocean fish copied by engineers replacing noisy whirling submersible propellers: ______-ray',
            correctAnswer: 'MANTA',
            explanation: 'Modeled seamlessly after flexible rubber manta-ray wings.'
          },
          {
            id: 'cd_listening_m12_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which onboard chemical instrument analyzes hot copper plumes erupting around black-smoker vents?',
            correctAnswer: 'MASS SPECTROMETERS',
            explanation: 'Vent probes carry onboard mass spectrometers sniffing sulfide plumes.'
          },
          {
            id: 'cd_listening_m12_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What concluding vision describes next-generation deep-ocean robotics?',
            options: [
              'A. Automated robotic dredging arms mining rare manganese nodules continuously',
              'B. Combining armored pressure durability with gentle touch for non-destructive study',
              'C. Permanent seabed recharging stations powered by tidal propellers',
              'D. Swarms of miniature laser drones mapping coral reefs weekly'
            ],
            correctAnswer: 'B',
            explanation: 'Unites titanium toughness with gentle silicone touch to explore respectfully.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 13: Student Entrepreneurship Grant & Solar Physics Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m13',
    testNumber: 13,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 13: Student Entrepreneurship Grant & Solar Physics Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Entrepreneurship Grant & Solar Physics Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Applying for a Student Seed Micro-Grant',
        audioScenario:
          'A computer science undergraduate calls the University Innovation Enterprise Desk regarding prototype funding deadlines and mentor pairing.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Entrepreneurship Seed Grant Desk]
Advisor: Good afternoon, Foundry Enterprise Innovation Desk, Claire speaking. How can I assist?
Student: [[Q1]] Hi Claire! I want to enter my smart braille-labeling app prototype into this spring’s Seed Micro-Grant track. My surname is Brennan, spelled B-R-E-N-N-A-N.
Advisor: [[Q2]] Lovely concept, Mr. Brennan! Let me clarify tiers first: early Idea Discovery awards grant £500, whereas live working Proof-of-Concept software teams apply up to £2,500 maximum!
Student: [[Q3]] We already have working beta users, so we will apply for the £2,500 tier! Can student grants spend money on overseas social media advertisements? No—hardware sensors, cloud servers, and usability accessibility testing qualify cleanly, whereas paid consumer ad campaigns sit excluded!
Advisor: [[Q4]] Fair enough—cloud servers and user testing are our biggest costs anyway! When is the absolute deadline for uploading our concise 4-page business budget PDF? Portal locks automatically at five o’clock sharp on Friday, March 19th!
Student: [[Q5]] March 19th gives us twelve full days! Do sole student founders qualify, or must teams include at least two enrolled co-founders? Solo founders qualify freely—though pairing one design or finance peer lifts judge rubric scores noticeably!
Advisor: [[Q6]] Good tip—my classmate Priya handles UX design! Once shortlisted, how many crisp minutes do finalists get on stage during Demo Pitch Evening? You pitch smoothly for four minutes flat, followed strictly by three minutes of rapid investor questions!
Student: [[Q7]] Four minutes pitch, three minutes Q&A! Does winning grant cash require handing ten percent company equity straight back to the university? Zero equity taken—non-dilutive civic enterprise funds let founders retain 100 percent intellectual ownership!
Advisor: [[Q8]] Amazing! Could we book free legal review regarding software open-source licensing ahead of pitching? Drop past Patent Clinic Room 208 any Wednesday afternoon between two and four for thirty-minute legal checks!
Student: [[Q9]] Definitely visiting Wednesday! Who can pair us with one alumni product mentor familiar with assistive accessibility software? Email Hub Coordinator Sanjay—he matches founders across ninety alumni executives!
Advisor: [[Q10]] Let me open your provisional application portal under Grant Reference EG-138.`,
        questions: [
          {
            id: 'cd_listening_m13_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student founder applicant surname: ______',
            correctAnswer: 'BRENNAN',
            explanation: 'Spelled B-R-E-N-N-A-N.'
          },
          {
            id: 'cd_listening_m13_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Maximum award ceiling for the Proof-of-Concept software track: £ ______',
            correctAnswer: '2,500',
            explanation: 'Working software teams apply up to £2,500 maximum.'
          },
          {
            id: 'cd_listening_m13_lq3',
            number: 3,
            type: 'multiple_choice',
            questionText: 'Which proposed startup expense is strictly barred under Seed Micro-Grant funding rules?',
            options: [
              'A. Remote cloud database hosting subscriptions',
              'B. Prototype electronic sensor chip components',
              'C. Accessibility usability testing incentives for testers',
              'D. Paid consumer social media advertising campaigns'
            ],
            correctAnswer: 'D',
            explanation: 'Paid consumer ad campaigns sit excluded.'
          },
          {
            id: 'cd_listening_m13_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Final calendar date for uploading the 4-page budget PDF by 5:00 PM: March ______',
            correctAnswer: '19TH',
            explanation: 'Portal locks Friday, March 19th at 5:00 PM.'
          },
          {
            id: 'cd_listening_m13_lq5',
            number: 5,
            type: 'multiple_choice',
            questionText: 'What advice does Claire offer single student applicants?',
            options: [
              'A. Partner with a complementary design or finance classmate to boost scores',
              'B. Incorporate a registered company prior to submitting budgets',
              'C. Submit signed customer preorder pledges totaling £500',
              'D. Attach prototype source code documentation onto appendices'
            ],
            correctAnswer: 'A',
            explanation: 'Pairing one design or finance peer lifts judge rubric scores.'
          },
          {
            id: 'cd_listening_m13_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Allowed stage speaking duration before investor Q&A on Pitch Evening: ______ minutes',
            correctAnswer: 'FOUR',
            explanation: 'Pitch smoothly for four minutes flat.'
          },
          {
            id: 'cd_listening_m13_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Percentage of intellectual ownership retained by student founders winning non-dilutive grants: ______ percent',
            correctAnswer: '100',
            explanation: 'Founders retain 100 percent intellectual ownership.'
          },
          {
            id: 'cd_listening_m13_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Room number hosting free Wednesday afternoon legal software licensing reviews: Room ______',
            correctAnswer: '208',
            explanation: 'Patent Clinic Room 208 Wednesdays 2–4 PM.'
          },
          {
            id: 'cd_listening_m13_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Enterprise Hub coordinator matching teams with ninety alumni product mentors: ______',
            correctAnswer: 'SANJAY',
            explanation: 'Email Hub Coordinator Sanjay.'
          },
          {
            id: 'cd_listening_m13_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Provisional startup grant portal reference code: ______',
            correctAnswer: 'EG-138',
            explanation: 'Opened under Grant Reference EG-138.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Orientation Tour of the Foundry Student Incubator',
        audioScenario:
          'An enterprise hub manager guides incoming startup fellows around prototyping workshops, quiet pitch recording booths, and hot-desk policies.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Enterprise Incubator Walkthrough]
Manager: Welcome inside Foundry Enterprise Hub! Everything on these three sunlit floors helps student ideas sprint cleanly from crumpled coffee-shop sketches toward testable commercial realities.
Manager: [[Q11]] Glance left into our open Rapid Maker Lab: six enclosed resin 3D printers run continuously overnight—remember every build print exceeding five hours requires a green heat-safety sticker signed beforehand!
Manager: [[Q12]] Behind that frosted partition sit two soundproofed video Pitch Pods fitted with warm key lights and lapel microphones so founders record crisp crisp customer demo clips smoothly!
Manager: [[Q13]] Notice our clean-desk policy across shared Oak Co-Working Tables: clear mugs and laptop chargers before leaving at six so evening coding workshops slide tables cleanly together!
Manager: [[Q14]] Need quick candid feedback on cluttered app buttons before paying real recruiters? Every Thursday lunch features open Pizza & Prototype critique circles upstairs on Mezzanine Two!
Manager: [[Q15]] Check our green User Research Fund drawer behind Reception: shortlisted teams borrow twenty-pound bookstore gift tokens smoothly to thank campus volunteers testing beta software!
Manager: [[Q16]] Look carefully at the glass noticeboard outside Boardroom One: our resident patent attorney reserves quiet one-on-one trademark naming audits every Tuesday morning!
Manager: [[Q17]] Keep strict privacy etiquette around whiteboards in Shared Project Bays—never photograph neighboring teams’ financial customer charts posted near glass walls!
Manager: [[Q18]] Every third Friday night hosts Founder Failure Stories where real local CEOs walk candidly through embarrassing early product mistakes—far richer lessons than glossy magazine profiles!
Manager: [[Q19]] Cyclists commuting late enjoy heated battery charging lockers beneath Stairwell East exclusively for electric cargo bikes and folding scooters!
Manager: [[Q20]] Pick up magnetic blue access fobs at Security Desk C after signing short workshop soldering pledges.`,
        questions: [
          {
            id: 'cd_listening_m13_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Duration limit beyond which overnight 3D resin builds require a signed green heat-safety sticker: ______ hours',
            correctAnswer: 'FIVE',
            explanation: 'Every build exceeding five hours requires a signed safety sticker.'
          },
          {
            id: 'cd_listening_m13_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Soundproofed incubator booths furnished with key lights and lapel mics for filming demos: ______ Pods',
            correctAnswer: 'PITCH',
            explanation: 'Two soundproofed video Pitch Pods.'
          },
          {
            id: 'cd_listening_m13_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why must fellows clear Oak Co-Working desks completely before 6:00 PM?',
            options: [
              'A. Building cleaners sanitize oak surfaces with citrus oil nightly',
              'B. Evening coding clubs rearrange the open tables into seminar rows',
              'C. Night security locks power strips off automatically at dusk',
              'D. External corporate sponsors book co-working rooms evenings'
            ],
            correctAnswer: 'B',
            explanation: 'Evening coding workshops slide tables cleanly together.'
          },
          {
            id: 'cd_listening_m13_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Weekday hosting informal Mezzanine Two Pizza & Prototype user-interface critiques: ______',
            correctAnswer: 'THURSDAY',
            explanation: 'Thursday lunch features Pizza & Prototype critique circles.'
          },
          {
            id: 'cd_listening_m13_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'What twenty-pound reward vouchers can teams draw from Reception to compensate beta test volunteers?',
            correctAnswer: 'BOOKSTORE GIFT TOKENS',
            explanation: 'Borrow twenty-pound bookstore gift tokens to thank volunteers.'
          },
          {
            id: 'cd_listening_m13_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Specialized legal brand naming checks offered Tuesday mornings outside Boardroom One: ______ audits',
            correctAnswer: 'TRADEMARK',
            explanation: 'Patent attorney reserves trademark naming audits Tuesday mornings.'
          },
          {
            id: 'cd_listening_m13_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'What strict courtesy rule protects privacy inside Shared Project Bays?',
            options: [
              'A. Whisper phone investor negotiations behind acoustic curtains',
              'B. Password-lock communal monitor screens when stepping away',
              'C. Refrain from photographing other teams’ financial whiteboard charts',
              'D. Erase sticky notes daily into shredded security bins'
            ],
            correctAnswer: 'C',
            explanation: 'Never photograph neighboring teams’ financial charts on glass walls.'
          },
          {
            id: 'cd_listening_m13_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Candor-focused monthly evening series examining early local CEO blunders: Founder ______ Stories',
            correctAnswer: 'FAILURE',
            explanation: 'Hosts Founder Failure Stories every third Friday night.'
          },
          {
            id: 'cd_listening_m13_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Stairwell housing heated charging bays dedicated to electric cargo bikes and scooters: Stairwell ______',
            correctAnswer: 'EAST',
            explanation: 'Heated battery lockers beneath Stairwell East.'
          },
          {
            id: 'cd_listening_m13_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Security desk letter issuing magnetic blue hub access fobs after soldering pledges: Desk ______',
            correctAnswer: 'C',
            explanation: 'Collect access fobs at Security Desk C.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Rooftop Hydrogen-Alpha Solar Telescope Frames',
        audioScenario:
          'Astrophysics undergraduates Mateo and Freya review sunspot tracking artifacts and solar flare timestamps with Dr. Singh.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Astrophysics Observatory Seminar]
Dr. Singh: Morning, Mateo and Freya. Let us examine those crisp magenta hydrogen-alpha solar telescope frames you stacked across Monday’s active sunspot belt!
Mateo: [[Q21]] Good news first—using rapid lucky-imaging bursts of five hundred frames per minute let software pick the sharpest five percent unaffected by shimmering warm roof air!
Freya: [[Q22]] Yet comparing Monday’s big bright filament surge against satellite GOES X-ray flare spikes revealed an annoying eighteen-minute clock shift across all timestamps!
Dr. Singh: Oops—computer clock drift! Did your rooftop dome laptop sync against atomic internet NTP servers beforehand, or run off sleepy internal BIOS batteries?
Mateo: [[Q23]] Internal clock battery—observatory dome Wi-Fi dropped right before morning transit, leaving our laptop lagging behind Universal Time!
Dr. Singh: [[Q24]] Plug a cheap USB GPS dongle straight onto telescope laptops next month for sub-second atomic satellite ticks!
Dr. Singh: [[Q25]] Those atomic satellite ticks stamp every raw FITS header accurately! How did flare brightness saturation behave?
Freya: [[Q26]] Roughly four core flare pixels maxed out white at 65,535 counts—clipping peak explosion radiance curves flat right during impulsive burst rise!
Dr. Singh: [[Q27]] Drop camera exposure down smoothly from twelve milliseconds toward four milliseconds whenever bright active beta-gamma sunspot clusters twist tightly together! What did radio antenna logs show?
Mateo: [[Q28]] Thrillingly, our backyard dipole radio dish picked up sweeping Type II solar shock static bursts four minutes after peak optical brightening—matching outward shockwaves ripping across solar plasma!
Dr. Singh: [[Q29]] Textbook multi-wavelength evidence! Stack optical hydrogen frames cleanly above aligned radio waterfall plots on Poster Two so astronomy judges trace cause-to-shock sequence instantaneously!
Freya: [[Q30]] Done—and Mateo wrote Python dark-frame subtraction notes clearly inside Appendix B to clean hot camera pixel noise cleanly!`,
        questions: [
          {
            id: 'cd_listening_m13_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Percentage of sharpest solar frames retained via rapid lucky-imaging bursts free of roof shimmer: ______ percent',
            correctAnswer: 'FIVE',
            explanation: 'Software picked the sharpest five percent.'
          },
          {
            id: 'cd_listening_m13_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Clock mismatch discovered between rooftop solar frames and GOES X-ray satellite flare charts: ______ minutes',
            correctAnswer: 'EIGHTEEN',
            explanation: 'Revealed an annoying eighteen-minute clock shift.'
          },
          {
            id: 'cd_listening_m13_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did the rooftop telescope laptop fall eighteen minutes behind Universal Time?',
            options: [
              'A. Lucky-imaging batch stacking delayed frame header file writes',
              'B. GOES telemetry used daylight savings time offsets by mistake',
              'C. Observatory Wi-Fi outage cut automatic clock sync ahead of solar transit',
              'D. Sunlight heated roof cables slowing USB transfer speeds'
            ],
            correctAnswer: 'C',
            explanation: 'Dome Wi-Fi dropped so laptop relied on drifting internal BIOS batteries.'
          },
          {
            id: 'cd_listening_m13_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Low-cost hardware dongle Dr. Singh prescribes for sub-second atomic FITS file timestamping: USB ______ dongle',
            correctAnswer: 'GPS',
            explanation: 'Plug a cheap USB GPS dongle straight onto telescope laptops.'
          },
          {
            id: 'cd_listening_m13_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Astronomical raw image container format storing accurate satellite timestamps in headers: ______',
            correctAnswer: 'FITS',
            explanation: 'Stamps every raw FITS header accurately.'
          },
          {
            id: 'cd_listening_m13_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What measurement flaw occurred when four flare pixels reached 65,535 brightness counts?',
            options: [
              'A. Detector saturation flattened true peak explosive brightness graphs',
              'B. Camera shutter blinds jammed open permanently',
              'C. Background night skylight halos flooded neighboring sunspots',
              'D. Hot infrared pixels inverted dark umbra contrast ratios'
            ],
            correctAnswer: 'A',
            explanation: 'Pixels maxed out white, clipping peak explosion radiance curves flat.'
          },
          {
            id: 'cd_listening_m13_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Shorter camera exposure recommended for tightly twisted beta-gamma flares: ______ milliseconds',
            correctAnswer: 'FOUR',
            explanation: 'Drop exposure down toward four milliseconds.'
          },
          {
            id: 'cd_listening_m13_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Minutes after bright flare peak when backyard dipole antennae caught sweeping Type II radio bursts: ______ minutes',
            correctAnswer: 'FOUR',
            explanation: 'Radio dish picked up static bursts four minutes after optical brightening.'
          },
          {
            id: 'cd_listening_m13_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Symposium board displaying aligned optical-radio waterfall evidence cleanly: Poster ______',
            correctAnswer: 'TWO',
            explanation: 'Stack optical frames above radio plots on Poster Two.'
          },
          {
            id: 'cd_listening_m13_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Document appendix detailing Python subtraction scripts eliminating camera sensor pixel speckles: Appendix ______',
            correctAnswer: 'B',
            explanation: 'Wrote subtraction notes clearly inside Appendix B.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Solar Storms, Magnetic Reconnection & Space Weather Risk',
        audioScenario:
          'A heliophysicist lectures on sunspot magnetism, magnetic reconnection, the 1859 Carrington Event, and electrical grid transformer protections.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Solar Physics Lecture]
Lecturer: Gazing lazily through eclipse filters, Earth’s bright Sun appears like one calm golden lamp—yet beneath dazzling photosphere clouds rages a churning magnetized plasma furnace capable of knocking terrestrial power grids completely dark!
Lecturer: [[Q31]] Unlike solid spinning rocky worlds like Earth, the gaseous Sun rotates faster along its bulging waist equator—roughly twenty-five days—than sluggish icy poles needing thirty-four days, tangling magnetic ropes like twisted rubber bands!
Lecturer: [[Q32]] Wherever tangled magnetic loops poke aggressively outward through boiling surface plasma, intense magnetic pressure chokes rising hot convective heat—etching cool dark charcoal craters famously spotted by astronomers as sunspots!
Lecturer: [[Q33]] Every eleven years or so, twisted solar magnetic polarity flips smoothly north-for-south—producing the classic solar cycle alternating between sleepy spotless calm and stormy explosive sunspot maximums!
Lecturer: [[Q34]] When strained magnetic arch loops bend too sharply over crowded sunspots, opposite magnetic lines suddenly snap and splice cleanly together—an explosive energy blast termed magnetic reconnection!
Lecturer: [[Q35]] Violent reconnection hurls billion-ton glowing plasma bubbles called coronal mass ejections—CMEs—hurtling outward past planets faster than two thousand kilometres per second!
Lecturer: [[Q36]] Most famously in September 1859, British amateur astronomer Richard Carrington sketched a dazzling white solar flare; barely seventeen hours later, fiery auroral curtains shimmered brightly above tropical Cuba while telegraph keys sparked paper fires!
Lecturer: [[Q37]] Why worry inside modern digital cities? Surging geomagnetic currents induced silently along mile-long copper high-voltage transmission towers overheat multi-ton step-up substation transformers—melting copper windings slowly over hours!
Lecturer: [[Q38]] Even worse, harsh high-energy solar protons slam directly into GPS navigation satellites orbiting twenty thousand kilometres up—triggering phantom computer memory bit-flips and swelling upper atmospheric air drag on orbital craft!
Lecturer: [[Q39]] Fortunately, space weather sentinel probes parked cleanly at Lagrange Point L1 one million miles sunward grant terrestrial electrical operators roughly forty minutes’ magnetic polarity warning ahead of impact!
Lecturer: [[Q40]] Armed with real-time L1 magnetic previews, grid dispatchers calmly split linked circuits and drop transformer stress safely until violent solar gusts sweep harmlessly past our protective planetary shield.`,
        questions: [
          {
            id: 'cd_listening_m13_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Solar latitude zone spinning substantially faster than sluggish high solar poles, twisting magnetic fields: ______',
            correctAnswer: 'EQUATOR',
            explanation: 'Sun rotates faster along its waist equator than at poles.'
          },
          {
            id: 'cd_listening_m13_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why do active magnetic sunspots look noticeably darker than surrounding solar surfaces?',
            options: [
              'A. Cold rocky asteroid debris shades upper solar atmosphere layers',
              'B. Dark iron clouds settle temporarily atop cool equatorial bands',
              'C. Violent hydrogen bursts evacuate photosphere gas away sideways',
              'D. Dense magnetic pressure blocks hot convective plasma from rising upward'
            ],
            correctAnswer: 'D',
            explanation: 'Intense magnetic pressure chokes rising hot convective heat.'
          },
          {
            id: 'cd_listening_m13_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Approximate number of years separating peaks of twisted solar polarity flipping cycles: ______ years',
            correctAnswer: 'ELEVEN',
            explanation: 'Every eleven years twisted solar magnetic polarity flips smoothly.'
          },
          {
            id: 'cd_listening_m13_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'Name the sudden snapping and splicing of strained magnetic lines powering solar storms:',
            correctAnswer: 'MAGNETIC RECONNECTION',
            explanation: 'Explosive energy blast termed magnetic reconnection.'
          },
          {
            id: 'cd_listening_m13_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Coronal mass ejections propel billion-ton magnetized ______ clouds past planets above 2,000 km/s.',
            correctAnswer: 'PLASMA',
            explanation: 'Hurls billion-ton glowing plasma bubbles called CMEs.'
          },
          {
            id: 'cd_listening_m13_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Historical Victorian communication machines seen sparking paper fires during the 1859 Carrington storm: ______ keys',
            correctAnswer: 'TELEGRAPH',
            explanation: 'Telegraph keys sparked paper fires across stations.'
          },
          {
            id: 'cd_listening_m13_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Which vulnerable city power component suffers severe melting risk from storm-induced ground currents?',
            options: [
              'A. Rooftop photovoltaic silicon inverter panels',
              'B. Heavy high-voltage substation step-up transformers',
              'C. Underground insulated household copper fuse boxes',
              'D. Coastal wind-turbine aluminum rotor gearboxes'
            ],
            correctAnswer: 'B',
            explanation: 'Geomagnetic currents overheat multi-ton step-up substation transformers.'
          },
          {
            id: 'cd_listening_m13_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Besides expanding upper atmospheric drag, what software glitch do solar protons trigger inside orbital GPS chips?',
            correctAnswer: 'PHANTOM COMPUTER MEMORY BIT-FLIPS',
            explanation: 'Triggers phantom computer memory bit-flips.'
          },
          {
            id: 'cd_listening_m13_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Minutes of advance grid warning provided by sentinel spacecraft stationed sunward at Point L1: ______ minutes',
            correctAnswer: 'FORTY',
            explanation: 'Grants operators roughly forty minutes magnetic polarity warning.'
          },
          {
            id: 'cd_listening_m13_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How can grid engineers protect equipment once L1 sentinels issue severe storm alerts?',
            options: [
              'A. Decouple linked long lines and reduce transformer electrical load cleanly',
              'B. Shut down coastal nuclear cooling turbines permanently for 48 hours',
              'C. Redirect excess power outward into battery storage farms',
              'D. Activate copper lightning rods along suburban utility poles'
            ],
            correctAnswer: 'A',
            explanation: 'Split linked circuits and drop transformer stress safely.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 14: Community Center Room Hire & Forest Ecology Seminar
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m14',
    testNumber: 14,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 14: Community Center Room Hire & Forest Ecology Seminar',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Community Center Room Hire & Forest Ecology Seminar.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking Weekly Rehearsal Space at Harborview Center',
        audioScenario:
          'A community choir conductor calls Harborview Civic Center to book an acoustic hall for weekly Wednesday evening rehearsals.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Harborview Room Hire Desk]
Steward: Good afternoon, Harborview Community Center Office, Nadia speaking. How may I assist?
Caller: [[Q1]] Hi Nadia! I lead our 35-member community chamber choir and want to hire a bright room Wednesday evenings starting October. My surname is Kowalski, spelled K-O-W-A-L-S-K-I.
Steward: [[Q2]] Nice to speak with you, Mr. Kowalski! Our Cedar Assembly Hall seats eighty comfortably with warm wooden wall baffles ideal for acoustic choral blend at fifty-two pounds per evening!
Caller: [[Q3]] Fifty-two pounds fits our subscription budget! Do regular Wednesday hirers gain access to an upright acoustic piano inside Cedar Hall? Yes—our Yamaha upright rolls easily off stage, and we tune strings freshly every September and February!
Caller: [[Q4]] Wonderful! May our librarian lock folding wire sheet-music stands safely inside a hallway cupboard overnight rather than lugging bags weekly? Regular term hirers rent dedicated lockable Locker Cabinet Five free when booking twelve weeks upfront!
Steward: [[Q5]] Note one flooring rule inside Cedar Hall: keep sharp pointed stiletto shoe heels and muddy hiking boots cleanly off the newly varnished maple floor!
Caller: [[Q6]] Understood—choir members wear clean flats anyway! What deposit secures instant Wednesday kitchen urn kettle use for interval chamomile tea? Simply leave a refundable twenty-five-pound kitchen fob bond cleanly—plus pack your own biodegradable paper cups!
Steward: [[Q7]] Check acoustic evening times carefully too: singing must wind down cleanly by 9:45 PM so elderly caretakers lock gates quietly ahead of ten o’clock neighborhood limits!
Caller: [[Q8]] 9:45 PM wraps us tidily with fifteen minutes spare! Is free bicycle parking available close to the bright lit lobby? Twenty illuminated sheltered stands sit directly opposite Main Ramp B beside CCTV lamps!
Steward: [[Q9]] Should December frost force sudden evening storm cancellation, how many hours’ advance call refunds weekly room rental cleanly? Notify Duty Steward Graham at least forty-eight hours beforehand for full credit rollovers!
Caller: [[Q10]] Saving Graham’s note cleanly—what booking number holds our Wednesday Cedar Hall slot? Note Term Hire Reference HC-142!`,
        questions: [
          {
            id: 'cd_listening_m14_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Chamber choir conductor surname: ______',
            correctAnswer: 'KOWALSKI',
            explanation: 'Spelled K-O-W-A-L-S-K-I.'
          },
          {
            id: 'cd_listening_m14_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Wednesday evening hire charge for Cedar Assembly Hall: £ ______',
            correctAnswer: 'FIFTY-TWO',
            explanation: 'Rents at fifty-two pounds per evening.'
          },
          {
            id: 'cd_listening_m14_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Months when Cedar Hall’s Yamaha upright piano receives fresh string tuning: September and ______',
            correctAnswer: 'FEBRUARY',
            explanation: 'Tuned freshly every September and February.'
          },
          {
            id: 'cd_listening_m14_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Minimum consecutive weeks booked to unlock free Locker Cabinet Five music storage: ______ weeks',
            correctAnswer: 'TWELVE',
            explanation: 'Free when booking twelve weeks upfront.'
          },
          {
            id: 'cd_listening_m14_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'Which timber covers the newly varnished Cedar Hall stage floor requiring shoe protection?',
            correctAnswer: 'MAPLE',
            explanation: 'Protect the newly varnished maple floor.'
          },
          {
            id: 'cd_listening_m14_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Refundable kitchen tea-urn fob security bond required: £ ______',
            correctAnswer: 'TWENTY-FIVE',
            explanation: 'Refundable twenty-five-pound kitchen fob bond.'
          },
          {
            id: 'cd_listening_m14_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Exact evening time singing must conclude inside Cedar Hall ahead of curfew: ______ PM',
            correctAnswer: '9:45',
            explanation: 'Singing must wind down cleanly by 9:45 PM.'
          },
          {
            id: 'cd_listening_m14_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What security benefits cyclists locking bikes beside Main Ramp B?',
            options: [
              'A. Keycard locker cages guarded by overnight gate porters',
              'B. Indoor ground-floor corridor racks facing box office glass',
              'C. Free chain padlocks lent out by Reception Stewards',
              'D. Sheltered illuminated racks positioned directly beneath CCTV cameras'
            ],
            correctAnswer: 'D',
            explanation: 'Twenty illuminated sheltered stands sit directly opposite Main Ramp B beside CCTV.'
          },
          {
            id: 'cd_listening_m14_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Minimum advance notice hours required by Steward Graham to credit winter weather cancellations: ______ hours',
            correctAnswer: 'FORTY-EIGHT',
            explanation: 'Notify at least forty-eight hours beforehand.'
          },
          {
            id: 'cd_listening_m14_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Wednesday Cedar Hall term booking code: ______',
            correctAnswer: 'HC-142',
            explanation: 'Term Hire Reference HC-142.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Walkthrough of Harborview Sustainable Amenities',
        audioScenario:
          'A community steward introduces newly joined neighborhood group leaders to zero-waste recycling stations, solar heating controls, and weekend gardens.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Harborview Center Eco-Guide]
Steward: Welcome around Harborview Civic Center! Before picking up room swipe keys, let me point out five neighborhood green amenities added during last year’s solar refit.
Steward: [[Q11]] First, glance beside Reception Desk A: rather than old harsh fluorescent strips, crisp motion-dimming skylight tubes harvest natural grey daylight down into our ground-floor windowless arts corridor!
Steward: [[Q12]] Walk calmly into our shared Community Kitchenette: skip disposable plastic bottled milk—we partner locally with Clover Dairy delivering reusable glass cream bottles returned straight into blue doorstep crates!
Steward: [[Q13]] Check carefully above sink recycling bins: greasy leftover pizza boxes spoil crisp paper recycling bales—flatten greasy cardboard strictly into brown garden food-waste compost tubs instead!
Steward: [[Q14]] Outside past Sliding Patio Two blooms our volunteer Apothecary Herb Patio—choir groups and seniors freely snip sprigs of fragrant rosemary and peppermint for evening hot mugs!
Steward: [[Q15]] Need heavy acoustic folding screens moved for weekend portrait workshops? Never drag rubber casters forcefully over carpet tiles—lift safety lever pins cleanly first so brakes release smoothly!
Steward: [[Q16]] Notice our quiet Tool Lending Shed beside Alley Gate Four: neighborhood apartment dwellers borrow electric cordless drills and wallpaper steamers weekends for just two pounds!
Steward: [[Q17]] On rainy Saturday mornings, our Main Foyer hosts a zero-packaging Book & Boardgame Swap Shelf—bring one crisp unread paperback home free without swiping cards!
Steward: [[Q18]] Check green thermometer plaques beside radiators before cranking dial knobs wildly upward: automated ground-source heat pumps balance hall warmth steadily at twenty degrees Celsius!
Steward: [[Q19]] Remember strict parking ethics along narrow Maple Terrace outside: reserve front curb bays strictly for community minibus drop-offs carrying wheelchair passengers safely!
Steward: [[Q20]] Drop your room evaluation postcards cleanly inside the bright yellow Feedback Postbox mounted beside Front Porch Pillar One before departing tonight.`,
        questions: [
          {
            id: 'cd_listening_m14_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Roof hardware channeling natural daylight down into windowless ground arts corridors: ______ tubes',
            correctAnswer: 'SKYLIGHT',
            explanation: 'Motion-dimming skylight tubes harvest natural daylight.'
          },
          {
            id: 'cd_listening_m14_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which reusable dairy packaging drops directly into blue doorstep crates?',
            correctAnswer: 'GLASS CREAM BOTTLES',
            explanation: 'Clover Dairy delivers reusable glass cream bottles.'
          },
          {
            id: 'cd_listening_m14_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Where must greasy leftover cardboard pizza boxes be discarded inside the kitchenette?',
            options: [
              'A. Blue dry mixed office-paper recycling sacks',
              'B. Black non-recyclable general landfill compactors',
              'C. Brown organic garden food-waste compost tubs',
              'D. Green flattened corrugated cardboard yard skips'
            ],
            correctAnswer: 'C',
            explanation: 'Flatten greasy cardboard into brown garden food-waste compost tubs.'
          },
          {
            id: 'cd_listening_m14_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Fragrant patio herbs alongside rosemary guests freely snip for evening herbal tea: ______',
            correctAnswer: 'PEPPERMINT',
            explanation: 'Snip fragrant rosemary and peppermint.'
          },
          {
            id: 'cd_listening_m14_lq15',
            number: 15,
            type: 'short_answer',
            questionText: 'What mechanism must workshop helpers lift prior to rolling heavy folding partition screens?',
            correctAnswer: 'SAFETY LEVER PINS',
            explanation: 'Lift safety lever pins cleanly first so wheel brakes release.'
          },
          {
            id: 'cd_listening_m14_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Weekend rental charge per item at the Tool Lending Shed beside Alley Gate Four: ______ pounds',
            correctAnswer: 'TWO',
            explanation: 'Borrow drills and wallpaper steamers for just two pounds.'
          },
          {
            id: 'cd_listening_m14_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Zero-waste swap items featured alongside paperbacks on Saturday lobby shelves: ______',
            correctAnswer: 'BOARDGAME',
            explanation: 'Hosts a Book & Boardgame Swap Shelf.'
          },
          {
            id: 'cd_listening_m14_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Automated steady room warmth kept across center halls by ground-source heat pumps: ______ degrees Celsius',
            correctAnswer: 'TWENTY',
            explanation: 'Balances hall warmth steadily at twenty degrees Celsius.'
          },
          {
            id: 'cd_listening_m14_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Why must regular drivers avoid parking along narrow Maple Terrace curb bays?',
            options: [
              'A. Weekly street-cleaning sweepers ticket Tuesday morning cars',
              'B. Curb bays stay reserved for wheelchair community minibus access',
              'C. Overhanging cedar branches drop sticky sap onto car roofs',
              'D. Delivery trucks require turning room beside kitchen exits'
            ],
            correctAnswer: 'B',
            explanation: 'Reserved strictly for community minibus drop-offs carrying wheelchair guests.'
          },
          {
            id: 'cd_listening_m14_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Color of Feedback Postbox bolted beside Front Porch Pillar One: bright ______',
            correctAnswer: 'YELLOW',
            explanation: 'Bright yellow Feedback Postbox.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Oak Sapling Survival & Deer Exclosure Plots',
        audioScenario:
          'Forestry undergraduates Tara and Jonas review seedling herbivory data and fungal soil core records with Dr. Brooks.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Forestry Field Research Critique]
Dr. Brooks: Come in, Tara and Jonas. Your forest regeneration surveys comparing fenced deer-exclosure oak groves against open grazed woodland look rich—let us spot tricky sampling quirks.
Tara: [[Q21]] Gladly! Measuring thirty paired forest plots showed young oak saplings inside two-metre wire deer fences grew forty-two centimetres taller after just two springs!
Jonas: [[Q22]] However, checking dry south-facing ridge plots, nearly a third of protected fenced oaks still browned fatally during June heatwaves—even without hungry roe deer nipping shoots!
Dr. Brooks: [[Q23]] Classic moisture stress paradox! Did fenced south-ridge plots carry thick thorny blackberry bramble thickets competing beside seedlings, or bare mineral clay?
Tara: [[Q24]] Thick knee-high bramble! Without hungry deer nibbling fast weeds down gently, wild blackberry runners exploded upward—smothering tiny oak saplings out of midday light and summer soil rain!
Dr. Brooks: [[Q25]] Brilliant biological trade-off—highlight unwanted weed release squarely inside your management discussion rather than preaching blind fencing everywhere! What showed up in root fungus slides?
Jonas: [[Q26]] Checking 200 rinsed fine oak root tips beneath microscopes, saplings growing within ten metres of ancient mother oaks showed double ectomycorrhizal fungal collars compared to distant meadow seedlings!
Dr. Brooks: [[Q27]] Fascinating fungal boost! Remember when reporting distance correlations, verify whether deep canopy leaf shade alone—not strictly fungal webs—shielded nearby seedlings from scorching noon sun!
Tara: [[Q28]] Smart control check—fortunately our six felled wind-gap clearings with open sun still showed brisk growth wherever buried old stump roots remained alive underground!
Dr. Brooks: [[Q29]] Mention clear sunlit wind-gaps explicitly inside Chapter Three to isolate underground fungal aid cleanly! How will you display grazing versus weed competition visually Friday?
Jonas: [[Q30]] Dual stacked bar graphs paired with crisp autumn drone orthophotos contrasting lush bramble mats against clean grazed fern turf!`,
        questions: [
          {
            id: 'cd_listening_m14_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Extra height gained by young oaks inside fenced deer exclosures across two springs: ______ centimetres',
            correctAnswer: 'FORTY-TWO',
            explanation: 'Grew forty-two centimetres taller.'
          },
          {
            id: 'cd_listening_m14_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Month when unprotected dry ridge oak saplings suffered fatal browning despite deer fences: ______',
            correctAnswer: 'JUNE',
            explanation: 'Browned fatally during June heatwaves.'
          },
          {
            id: 'cd_listening_m14_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Wild thorny understory plant choking enclosed oak saplings out of rain and light: blackberry ______',
            correctAnswer: 'BRAMBLE',
            explanation: 'Thick knee-high blackberry bramble exploded upward.'
          },
          {
            id: 'cd_listening_m14_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why did protective wire fences backfire unintentionally on dry sunny ridges?',
            options: [
              'A. Wire mesh cast chilly frost shadows killing spring buds',
              'B. Voles burrowed safely underneath fences to chew oak bark',
              'C. Fence posts diverted mountain rainwater runoff sideways',
              'D. Excluding grazing deer allowed fast bramble weeds to smother young oaks'
            ],
            correctAnswer: 'D',
            explanation: 'Without deer nibbling weeds down, wild blackberry runners smothered saplings.'
          },
          {
            id: 'cd_listening_m14_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Report section prescribed to evaluate unintended weed-growth side effects of total deer exclusion: ______',
            correctAnswer: 'DISCUSSION',
            explanation: 'Highlight unwanted weed release squarely inside your management discussion.'
          },
          {
            id: 'cd_listening_m14_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Symbiotic underground fungal sheaths doubled on young oaks within ten metres of ancient trees: ______ collars',
            correctAnswer: 'ECTOMYCORRHIZAL',
            explanation: 'Showed double ectomycorrhizal fungal collars.'
          },
          {
            id: 'cd_listening_m14_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What confounding woodland variable did Dr. Brooks warn might mimic underground fungal growth benefits?',
            options: [
              'A. Cooler leaf-canopy shade shielding nearby seedlings from June heat',
              'B. Thicker earthworm tunneling beneath decaying acorn husks',
              'C. Higher nitrogen runoff dripping down smooth beech bark',
              'D. Lower wind drying rates inside dense central groves'
            ],
            correctAnswer: 'A',
            explanation: 'Check whether canopy shade alone shielded seedlings from noon sun.'
          },
          {
            id: 'cd_listening_m14_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Sunlit clearing areas proving root-fungus support independently of leafy shade: wind-______ clearings',
            correctAnswer: 'GAP',
            explanation: 'Felled wind-gap clearings with open sun showed brisk growth.'
          },
          {
            id: 'cd_listening_m14_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Thesis chapter chosen to isolate sunlit wind-gap fungal survival evidence clearly: Chapter ______',
            correctAnswer: 'THREE',
            explanation: 'Mention sunlit wind-gaps explicitly inside Chapter Three.'
          },
          {
            id: 'cd_listening_m14_lq30',
            number: 30,
            type: 'short_answer',
            questionText: 'Which aerial visuals will sit beside Jonas’s stacked bar graphs during Friday’s seminar?',
            correctAnswer: 'AUTUMN DRONE ORTHOPHOTOS',
            explanation: 'Paired with crisp autumn drone orthophotos.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Underground Fungal Networks & Old-Growth Forest Resilience',
        audioScenario:
          'A forest ecologist lectures on wood-wide mycorrhizal carbon exchange, nurse logs, wildfire adaptations, and diverse age-structured canopies.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Forest Ecology Lecture]
Lecturer: Walk beneath soaring thousand-year-old coastal firs and mossy redwoods, and most hikers gaze upward at cathedral green crowns—overlooking an equally vast living economy bustling unseen right beneath their boots!
Lecturer: [[Q31]] Across nearly ninety percent of forest trees, fine root hairs weave tightly into microscopic hair-thin fungal filaments called hyphae—forging a glowing two-way trade network popularly nicknamed the Wood-Wide Web!
Lecturer: [[Q32]] Why strike underground bargains with soil mushrooms? Sunlit towering trees manufacture surplus liquid carbon sugars cleanly via photosynthesis and pump carbon downward—receiving scarce rocky phosphorus and water mined skillfully from microscopic stone pores in return!
Lecturer: [[Q33]] Fascinating isotope-tracing trials led by Canadian ecologist Suzanne Simard proved shaded birch saplings actually receive measurable winter carbon donations pumped straight from sunlit Douglas fir neighbors!
Lecturer: [[Q34]] Yet cautious biologists remind students not to romanticize peaceful woodland harmony too blindly—aggressive root fungi routinely hoard nutrients greedily whenever drought stress sharpens competition!
Lecturer: [[Q35]] Equally vital atop mossy floors sit decaying fallen giants known as nurse logs: acting like soggy damp sponges, rotting cedar trunks shield tiny sprouting hemlock seedlings far above freezing clay puddles and hungry soil beetles!
Lecturer: [[Q36]] Meanwhile across dry western pine plateaus, century-old suppression of harmless patchy low ground fires accidentally crammed dense young ladder saplings beneath giant trees—turning gentle brush flames into catastrophic crown infernos!
Lecturer: [[Q37]] Native mature Ponderosa pines counter natural periodic flames effortlessly through thick puzzle-piece flaky orange bark shedding dead lower twigs cleanly high above grass fires!
Lecturer: [[Q38]] Contrast fragile single-species timber plantations lined cleanly like army soldiers: identical monoculture pine rows invite sweeping bark-beetle plagues and howling domino windfalls simultaneously!
Lecturer: [[Q39]] Multi-layered mixed forests weaving deep taproots beside shallow birch mats lock towering soil carbon securely for centuries while buffering raging spring floodwater peaks effortlessly!
Lecturer: [[Q40]] Ultimately, smart woodland stewardship shifts away from tidy uniform tree farms toward wild messy age-diverse ecosystems bursting with rotting logs, soil fungi, and uneven sunlit gaps.`,
        questions: [
          {
            id: 'cd_listening_m14_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Microscopic hair-thin fungal threads linking tree roots inside the Wood-Wide Web: ______',
            correctAnswer: 'HYPHAE',
            explanation: 'Microscopic hair-thin fungal filaments called hyphae.'
          },
          {
            id: 'cd_listening_m14_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Scarce mineral nutrient alongside water mined by soil fungi in trade for tree carbon sugars: ______',
            correctAnswer: 'PHOSPHORUS',
            explanation: 'Receive scarce rocky phosphorus and water mined from stone pores.'
          },
          {
            id: 'cd_listening_m14_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Research technique used by Suzanne Simard confirming carbon transfer between fir and shaded birch trees: ______-tracing',
            correctAnswer: 'ISOTOPE',
            explanation: 'Isotope-tracing trials proved carbon donations.'
          },
          {
            id: 'cd_listening_m14_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What scientific caution does the lecturer add regarding idealized woodland cooperation?',
            options: [
              'A. Soil mushrooms transfer exclusively toxic alkaloids between alien species',
              'B. Fungal networks may selfishly hoard resources during harsh water droughts',
              'C. Deep roots sever fungal connections permanently once canopy trees mature',
              'D. Subterranean insect larvae consume half of winter sugar channels'
            ],
            correctAnswer: 'B',
            explanation: 'Fungi hoard nutrients greedily whenever drought stress sharpens competition.'
          },
          {
            id: 'cd_listening_m14_lq35',
            number: 35,
            type: 'short_answer',
            questionText: 'What ecological term names decaying fallen cedar trunks nurturing sprouting seedlings above soggy soil?',
            correctAnswer: 'NURSE LOGS',
            explanation: 'Decaying fallen giants known as nurse logs.'
          },
          {
            id: 'cd_listening_m14_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Dangerous crowded vertical fuel layer created when total fire suppression lets dense saplings clutter pine trunks: ______ saplings',
            correctAnswer: 'LADDER',
            explanation: 'Crammed dense young ladder saplings turning brush fires into crown infernos.'
          },
          {
            id: 'cd_listening_m14_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Protective physical shield enabling mature Ponderosa pines to shrug off gentle surface fires: thick orange ______',
            correctAnswer: 'BARK',
            explanation: 'Thick puzzle-piece flaky orange bark shields trees.'
          },
          {
            id: 'cd_listening_m14_lq38',
            number: 38,
            type: 'summary_completion',
            questionText: 'Uniform single-species timber ______ suffer catastrophically from sweeping beetle infestations and windfall.',
            correctAnswer: 'PLANTATIONS',
            explanation: 'Single-species timber plantations invite sweeping beetle plagues.'
          },
          {
            id: 'cd_listening_m14_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Besides buffering spring floods, what long-term climatic benefit marks diverse mixed-root forests?',
            options: [
              'A. Slow cooling breezes along arid southern mountain slopes',
              'B. Faster seasonal leaf decay boosting spring creek alkalinity',
              'C. Reliable multi-century deep soil carbon storage stability',
              'D. Higher cloud condensation reflectance over winter tundra'
            ],
            correctAnswer: 'C',
            explanation: 'Lock towering soil carbon securely for centuries.'
          },
          {
            id: 'cd_listening_m14_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which management philosophy closes the forest ecology lecture?',
            options: [
              'A. Clear fallen rotting cedar wood cleanly to block woodland fungi',
              'B. Replant clear-cuts rapidly using identical fast-growing hybrid pines',
              'C. Foster wild, uneven-aged ecosystems rich in logs, fungi, and light gaps',
              'D. Fence all river corridors permanently away from woodland deer'
            ],
            correctAnswer: 'C',
            explanation: 'Shift toward wild messy age-diverse ecosystems bursting with logs, fungi, and gaps.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 15: Veterinary Clinic Internship & Paleolithic Archaeology Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m15',
    testNumber: 15,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 15: Veterinary Clinic Internship & Paleolithic Archaeology Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Veterinary Clinic Internship & Paleolithic Archaeology Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Arranging a Summer Veterinary Clinic Placement',
        audioScenario:
          'A veterinary science sophomore calls Meadowbrook Small Animal Hospital to finalize documentation for her four-week summer clinical shadowing internship.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Meadowbrook Veterinary Placement Desk]
Manager: Good morning, Meadowbrook Veterinary Hospital Administration, Clara speaking. How may I assist?
Student: [[Q1]] Morning Clara! I was accepted onto your July undergraduate shadowing rota and want to verify paperwork ahead of Monday. My surname is Morrison, spelled M-O-R-R-I-S-O-N.
Manager: [[Q2]] Glad you called, Ms. Morrison! First, remember clinical shifts run Tuesday through Saturday starting sharply at 7:45 AM for morning kennel rounds!
Student: [[Q3]] 7:45 AM works well—I catch the early commuter train. Should summer interns purchase dark green scrub tunics beforehand? Simply pick your size at Reception—we lend crisp teal cotton scrubs free provided you bring washable closed-toe rubber clogs!
Manager: [[Q4]] Perfect—already own washable theatre clogs! Check one mandatory vaccine detail too: our county veterinary safety board requires verified pre-exposure rabies protection dates uploaded before handling stray wildlife!
Student: [[Q5]] My university nurse emailed my signed rabies certificate yesterday! Will shadowing students assist inside sterile operating theaters, or stick mostly to morning triage reception? You observe orthopedic and dental surgeries cleanly every morning from sterile green corner stools—though never touch draped tables unless scrubbed!
Manager: [[Q6]] Exciting! Could I request joining at least two calm afternoon exotic rabbit and tortoise clinics if space opens? Dr. Patel runs Pocket-Pet Consults Wednesdays between two and five—I will pencil you right onto his schedule!
Student: [[Q7]] Wonderful! Are overnight midnight emergency shifts expected from undergraduate shadows? Strictly optional—senior students wanting acute crisis exposure occasionally pair Saturday night vets till midnight, though never mandatory!
Manager: [[Q8]] Good to know! Check lunch options during forty-five-minute midday breaks: leave packed sandwiches inside Staff Kitchen Fridge Two—avoid mixing animal diagnostic urine tubes near kitchen shelves obviously!
Student: [[Q9]] Definitely keeping lab samples well clear! Who welcomes incoming summer trainees at Back Staff Door Four at 7:45 AM sharp Monday? Head Nurse Simon meets newcomers with digital X-ray radiation badges!
Manager: [[Q10]] Let me lock your July start cleanly under Placement Code MV-159.`,
        questions: [
          {
            id: 'cd_listening_m15_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Veterinary internship applicant surname: ______',
            correctAnswer: 'MORRISON',
            explanation: 'Spelled M-O-R-R-I-S-O-N.'
          },
          {
            id: 'cd_listening_m15_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Morning kennel round start time Tuesday through Saturday: ______ AM',
            correctAnswer: '7:45',
            explanation: 'Shifts start sharply at 7:45 AM.'
          },
          {
            id: 'cd_listening_m15_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Color of complimentary cotton clinical scrubs lent out by clinic reception: ______',
            correctAnswer: 'TEAL',
            explanation: 'Lend crisp teal cotton scrubs free.'
          },
          {
            id: 'cd_listening_m15_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Mandatory immunization certificate required before handling rescued wildlife intakes: ______',
            correctAnswer: 'RABIES',
            explanation: 'Requires pre-exposure rabies protection dates.'
          },
          {
            id: 'cd_listening_m15_lq5',
            number: 5,
            type: 'multiple_choice',
            questionText: 'What clinical boundary governs summer students inside morning operating rooms?',
            options: [
              'A. Trainees watch from corner stools and never touch sterile draped tables un-scrubbed',
              'B. Students observe behind outer observation glass corridors only',
              'C. Undergraduates monitor patient pulse oximeters beside anesthesia trolleys',
              'D. Observers record handwritten surgical instrument inventory counts'
            ],
            correctAnswer: 'A',
            explanation: 'Observe from green corner stools—never touch draped tables unless scrubbed.'
          },
          {
            id: 'cd_listening_m15_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Weekday afternoon Dr. Patel runs exotic Pocket-Pet Consults (2–5 PM): ______',
            correctAnswer: 'WEDNESDAYS',
            explanation: 'Dr. Patel runs Pocket-Pet Consults Wednesdays 2–5 PM.'
          },
          {
            id: 'cd_listening_m15_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What policy applies to overnight weekend emergency hospital hours for shadows?',
            options: [
              'A. Interns complete two mandatory Friday midnight shifts per month',
              'B. Students cover telephone triage desks until ten weekly',
              'C. Night shifts open exclusively to licensed fourth-year graduates',
              'D. Midnight emergency sessions remain completely optional for extra experience'
            ],
            correctAnswer: 'D',
            explanation: 'Overnight shifts remain strictly optional.'
          },
          {
            id: 'cd_listening_m15_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Designated kitchen refrigerator storing clean trainee packed lunches: Fridge ______',
            correctAnswer: 'TWO',
            explanation: 'Leave lunches inside Staff Kitchen Fridge Two.'
          },
          {
            id: 'cd_listening_m15_lq9',
            number: 9,
            type: 'short_answer',
            questionText: 'Which safety item will Head Nurse Simon hand incoming students at Door Four?',
            correctAnswer: 'DIGITAL X-RAY RADIATION BADGES',
            explanation: 'Meets newcomers with digital X-ray radiation badges.'
          },
          {
            id: 'cd_listening_m15_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed July clinical internship booking code: ______',
            correctAnswer: 'MV-159',
            explanation: 'Locked under Placement Code MV-159.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Hospital Ward Orientation & Biosecurity Rules',
        audioScenario:
          'A head veterinary nurse guides new trainees through infectious isolation suites, avian recovery rooms, radiography shields, and dispensary logs.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Veterinary Biosecurity Tour]
Head Nurse: Welcome behind Reception, trainees! Meadowbrook treats forty furry and feathered patients daily—so strict quiet hygiene stops nervous kennel stress and contagious germs cold.
Head Nurse: [[Q11]] Glance left down Glass Corridor One: that sealed purple-door Isolation Ward treats contagious parvovirus puppies—step strictly onto chlorine disinfectant shoe mats before and after unlocking latches!
Head Nurse: [[Q12]] Walk calmly past our Feline Cat-Only Recovery Suite: notice subtle lavender pheromone wall diffusers keeping tense cats calm away from barking terrier wards downstairs!
Head Nurse: [[Q13]] Check white laminated Dry-Erase Cages carefully before opening latch doors—red star magnets warn handlers gently when frightened injured strays bite impulsively!
Head Nurse: [[Q14]] Inside Digital Radiography Suite Three, never hang heavy lead rubber protective aprons carelessly over sharp hooks—lay panels flat on padded steel racks so protective inner lead never cracks!
Head Nurse: [[Q15]] Walk quietly around our dim Avian & Tortoise Wing upstairs: injured hawks and budgies suffer dangerous heart shock easily from sudden noisy shouting or clattering steel bowls!
Head Nurse: [[Q16]] Notice two color-coded laundry baskets outside Surgery Wash: toss blood-stained theater sheets straight inside crimson biohazard sacks rather than ordinary soapy towel drums!
Head Nurse: [[Q17]] Peek quickly at our locked Controlled Pharmacy Cabinet beside Dispensary Scale B: two certified nurses always co-sign painkiller vials cleanly inside bound green ledgers!
Head Nurse: [[Q18]] Remember safe client reception etiquette: never share private owner billing balances or bad lab test previews softly across busy waiting chairs—invite families gently inside Consultation Room Five!
Head Nurse: [[Q19]] Every Friday noon hosts quick twenty-minute Case-Study Coffee Rounds where vets review tricky heart ultrasound clips honestly across teams!
Head Nurse: [[Q20]] Clip your personal radiation dosimeter badge cleanly onto left scrub collars before stepping past Line Yellow into diagnostics.`,
        questions: [
          {
            id: 'cd_listening_m15_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Contagious puppy illness isolated behind purple-door Corridor One behind disinfectant shoe mats: ______',
            correctAnswer: 'PARVOVIRUS',
            explanation: 'Isolation Ward treats contagious parvovirus puppies.'
          },
          {
            id: 'cd_listening_m15_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Calming scent emitted by wall diffusers inside the Feline Cat-Only Recovery Suite: ______ pheromone',
            correctAnswer: 'LAVENDER',
            explanation: 'Subtle lavender pheromone wall diffusers keep cats calm.'
          },
          {
            id: 'cd_listening_m15_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which kennel door symbol alerts staff that a frightened patient may bite?',
            correctAnswer: 'RED STAR MAGNETS',
            explanation: 'Red star magnets warn handlers gently when strays bite.'
          },
          {
            id: 'cd_listening_m15_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why must lead X-ray protective aprons rest flat on padded racks rather than hanging on wall hooks?',
            options: [
              'A. Heavy rubber buckles tear thin scrub room plasterboard',
              'B. Folded creases crack internal shielding lead linings over time',
              'C. Hanging shadows block radiology room ultraviolet sterilizers',
              'D. Wet disinfectant drains downward into sleeve velcro cuffs'
            ],
            correctAnswer: 'B',
            explanation: 'Lay flat on padded racks so protective inner lead never cracks.'
          },
          {
            id: 'cd_listening_m15_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Upstairs patient wing requiring extreme silence to prevent fatal heart shock in stressed hawks and budgies: ______ Wing',
            correctAnswer: 'AVIAN',
            explanation: 'Walk quietly around dim Avian & Tortoise Wing.'
          },
          {
            id: 'cd_listening_m15_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Sack color designated strictly for blood-stained surgical linens outside Surgery Wash: ______',
            correctAnswer: 'CRIMSON',
            explanation: 'Toss stained theater sheets inside crimson biohazard sacks.'
          },
          {
            id: 'cd_listening_m15_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Ledger color requiring dual-nurse co-signatures whenever dispensing controlled painkiller vials: ______',
            correctAnswer: 'GREEN',
            explanation: 'Co-sign vials cleanly inside bound green ledgers.'
          },
          {
            id: 'cd_listening_m15_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'How should veterinary staff deliver worrying diagnostic lab news to waiting pet owners?',
            options: [
              'A. Guide families privately inside Consultation Room Five away from waiting crowds',
              'B. Wait until closing hours to call owners safely from Reception',
              'C. Hand sealed printed test graphs before vets follow up by text',
              'D. Ask senior practice managers to deliver results at payment desks'
            ],
            correctAnswer: 'A',
            explanation: 'Invite families gently inside private Consultation Room Five.'
          },
          {
            id: 'cd_listening_m15_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Duration of Friday midday veterinary Case-Study Coffee Rounds reviewing heart clips: ______ minutes',
            correctAnswer: 'TWENTY',
            explanation: 'Quick twenty-minute Case-Study Coffee Rounds Fridays at noon.'
          },
          {
            id: 'cd_listening_m15_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Floor line color marking entry into imaging diagnostics requiring collar dosimeter badges: ______',
            correctAnswer: 'YELLOW',
            explanation: 'Clip badge before stepping past Line Yellow.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Inspecting Stone Micro-Wear Striations on Flint Scrapers',
        audioScenario:
          'Archaeology undergraduates Amira and Declan consult Dr. Grant about experimental stone tool replica marks and cave floor contamination.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Lithics Lab Seminar]
Dr. Grant: Welcome back, Amira and Declan. Your microscope polish photographs comparing fresh experimental flint replicas against 18,000-year-old cave blades look remarkably crisp—let us check anomalies!
Amira: [[Q21]] Thank you! After scraping dried elk hides forty minutes using hand-knapped Wiltshire chalk flint, tiny bright greasy bevel polishes matched our Upper Paleolithic blade Number Twelve almost stroke for stroke!
Declan: [[Q22]] Yet two freshly knapped control blades stored neatly inside blue foam museum drawers somehow showed strange silvery streaks across clean glassy edges before ever touching bone or hide!
Dr. Grant: Ah—beware sneaky modern handling polish! Did undergraduate volunteers accidentally rub bare flint flakes inside crowded canvas collecting sacks, or inspect them with brass metal calipers?
Amira: [[Q23]] Both—actually I used pointed stainless steel tweezers to lift flakes out of ultrasonic acetone baths, leaving microscopic metallic scratch lines!
Dr. Grant: [[Q24]] Classic laboratory metal-on-stone false streak! Swap metal tweezers permanently for padded silicone bamboo forceps and note metal artifacts cleanly inside your Methods box! What about starch grains trapped inside stone pores?
Declan: [[Q25]] Checking deep hairline flint cracks under polarized microscopes turned up six crisp wild grass starch granules!
Declan: [[Q26]] Those residues prove hunters harvested starchy wild barley seeds alongside bison meat!
Dr. Grant: [[Q27]] Hold on—verify carefully whether dusty medieval badger tunnels mixed modern field wheat dust straight down into deep Upper Paleolithic cave layers!
Amira: [[Q28]] Good warning—fortunately clean sterile dirt samples scooped two centimetres away from each blade held zero wild grass starch, confirming genuine prehistoric plant grinding!
Dr. Grant: [[Q29]] Air-tight stratigraphic control check! Lead Tuesday’s seminar talk with those paired soil-control counts cleanly ahead of stone polish slides! Have you settled macro photography lighting?
Declan: [[Q30]] Yes—using dual diffused ring lights eliminated harsh glare sparkles off glassy dark flint ridges completely!`,
        questions: [
          {
            id: 'cd_listening_m15_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Minutes of experimental elk-hide scraping required to reproduce Upper Paleolithic greasy bevel polishes: ______ minutes',
            correctAnswer: 'FORTY',
            explanation: 'Scraping dried elk hides forty minutes matched Paleolithic blade Twelve.'
          },
          {
            id: 'cd_listening_m15_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Unused laboratory stone controls displaying puzzling silvery surface streaks prior to cutting tests: ______ blades',
            correctAnswer: 'TWO',
            explanation: 'Two freshly knapped control blades showed strange silvery streaks.'
          },
          {
            id: 'cd_listening_m15_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What accidentally scratched metallic marks onto Amira’s clean stone blades?',
            options: [
              'A. Sharp metal drawer latches rubbing edges during storage transport',
              'B. Vibrating sieve wire screens sifting wet cave mud',
              'C. Coarse sandpaper used to smooth wooden tool handles',
              'D. Stainless steel tweezers lifting flakes from ultrasonic cleaning baths'
            ],
            correctAnswer: 'D',
            explanation: 'Stainless steel tweezers left microscopic metallic scratch lines.'
          },
          {
            id: 'cd_listening_m15_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'Which scratch-free handling tool must replace steel tweezers inside the lithics laboratory?',
            correctAnswer: 'PADDED SILICONE BAMBOO FORCEPS',
            explanation: 'Swap metal tweezers for padded silicone bamboo forceps.'
          },
          {
            id: 'cd_listening_m15_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Microscopic plant food residues trapped inside hairline flint crevices confirming prehistoric harvest: ______ granules',
            correctAnswer: 'STARCH',
            explanation: 'Turned up six crisp wild grass starch granules.'
          },
          {
            id: 'cd_listening_m15_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Wild prehistoric grain identified alongside hunted bison residue on cave stone blades: wild ______',
            correctAnswer: 'BARLEY',
            explanation: 'Proving hunters harvested starchy wild barley seeds.'
          },
          {
            id: 'cd_listening_m15_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'Why did Dr. Grant question whether grass starch granules truly dated back 18,000 years?',
            options: [
              'A. Boiling water destroys ancient starch cell walls rapidly',
              'B. Polarized microscope bulbs warp cellulose grain dimensions',
              'C. Burrowing animals like badgers could drop modern field seeds into older dirt',
              'D. Acidic limestone caves dissolve plant sugars within centuries'
            ],
            correctAnswer: 'C',
            explanation: 'Warned medieval badger tunnels might mix modern wheat dust downward.'
          },
          {
            id: 'cd_listening_m15_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Distance beside each excavated blade where sterile negative soil controls were sampled cleanly: ______ centimetres',
            correctAnswer: 'TWO',
            explanation: 'Dirt scooped two centimetres away held zero starch.'
          },
          {
            id: 'cd_listening_m15_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Scheduled presentation day for Amira and Declan’s lithics seminar: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Lead Tuesday seminar talk with soil-control counts.'
          },
          {
            id: 'cd_listening_m15_lq30',
            number: 30,
            type: 'short_answer',
            questionText: 'What lighting setup removed harsh sparkles off glassy dark flint photographs?',
            correctAnswer: 'DUAL DIFFUSED RING LIGHTS',
            explanation: 'Using dual diffused ring lights eliminated harsh glare sparkles.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Stone Tool Evolution & Prehistoric Paleolithic Innovation',
        audioScenario:
          'A prehistoric archaeologist lectures on Acheulean symmetrical handaxes, Levallois stone-core planning, birch-tar adhesives, and coastal shellfishing.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Paleolithic Archaeology Lecture]
Lecturer: Museum cabinets stuffed neatly with chipped grey flint triangles often strike modern visitors as crude rocks—yet each flake scar encodes astonishing mental geometry, planning discipline, and fire chemistry spanning two million years!
Lecturer: [[Q31]] Around 1.7 million years ago across East Africa, early human ancestors sculpted the iconic Acheulean handaxe: a teardrop-shaped symmetrical stone cobble flaked patiently on both faces rather than randomly smashed!
Lecturer: [[Q32]] Maintaining bilateral teardrop symmetry required holding clear mental blueprints dozens of hammerstone strikes ahead—demonstrating surprising prehistoric working memory and patient hand-eye restraint!
Lecturer: [[Q33]] By 300,000 years past emerged an even subtler intellectual leap called the Levallois technique—where stone knappers carefully sculpted convex dome ridges onto tortoise-shaped flint cores beforehand!
Lecturer: [[Q34]] Why invest twenty minutes trimming a rough core dome? One final decisive hammer strike popped off a razor-sharp predetermined oval spear point cleanly in a single instant—maximizing precious stone economy!
Lecturer: [[Q35]] Even cleverer was prehistoric composite hafting—lashing tiny triangular flint blades onto smooth ash wood shafts using waterproof natural birch-bark tar cooked underground in low-oxygen ash pits!
Lecturer: [[Q36]] Experimental archaeologists recently proved distilling waterproof black birch pitch cleanly without clay pottery required careful two-hundred-degree temperature balance—proving Neanderthal pyrotechnologists mastered complex low-oxygen fire chemistry!
Lecturer: [[Q37]] Beyond large mammoth hunts, coastal South African caves like Pinnacle Point reveal 160,000-year-old hearths packed with roasted brown mussels and red ochre—showing early humans mastered monthly ocean low-tide calendars!
Lecturer: [[Q38]] Meanwhile, microscopic tooth-plaque DNA and bone needles carved finely from mammoth ivory around 35,000 BCE tell stories of tailored fitted parkas keeping Ice Age hunters cozy through howling tundra blizzards!
Lecturer: [[Q39]] Sadly, ancient bone-pit survival leaned almost totally toward durable rock and ivory—hiding ninety percent of fragile woven rush baskets, wooden digging sticks, and sinew fishing nets destroyed silently by time!
Lecturer: [[Q40]] Studying Paleolithic stone remnants humbly reminds us that early toolmakers were never clumsy brutes, but resourceful engineers writing brilliant mechanical chapters using nothing beyond flame, bone, and stone.`,
        questions: [
          {
            id: 'cd_listening_m15_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Distinctive geometric shape characterizing symmetrical 1.7-million-year-old Acheulean handaxes: ______',
            correctAnswer: 'TEARDROP',
            explanation: 'Teardrop-shaped symmetrical stone cobble flaked on both faces.'
          },
          {
            id: 'cd_listening_m15_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Cognitive skill demonstrated by holding stone shaping goals dozens of strikes ahead: working ______',
            correctAnswer: 'MEMORY',
            explanation: 'Demonstrating surprising prehistoric working memory.'
          },
          {
            id: 'cd_listening_m15_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'Which animal’s domed back resembles the pre-shaped core sculpted in the Levallois method?',
            correctAnswer: 'TORTOISE',
            explanation: 'Sculpted convex dome ridges onto tortoise-shaped flint cores.'
          },
          {
            id: 'cd_listening_m15_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What major advantage rewarded stoneworkers who spent time shaping Levallois cores beforehand?',
            options: [
              'A. Softened brittle edges against frost cracking',
              'B. Allowed one final strike to release a finished razor-sharp spear point cleanly',
              'C. Reduced flying sharp stone splinters near children',
              'D. Enabled round core blocks to double as hammering stones'
            ],
            correctAnswer: 'B',
            explanation: 'One final decisive strike popped off a predetermined sharp point.'
          },
          {
            id: 'cd_listening_m15_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Neanderthal toolmakers glued stone points onto wooden spears using waterproof ______-bark tar.',
            correctAnswer: 'BIRCH',
            explanation: 'Waterproof natural birch-bark tar cooked underground.'
          },
          {
            id: 'cd_listening_m15_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Environmental condition controlled inside ash pits to distill sticky birch pitch without pottery jars: low-______',
            correctAnswer: 'OXYGEN',
            explanation: 'Cooked underground in low-oxygen ash pits.'
          },
          {
            id: 'cd_listening_m15_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What knowledge do roasted mussel shells at coastal South African Pinnacle Point prove?',
            options: [
              'A. Early humans sailed wooden outrigger canoes to offshore reefs',
              'B. Coastal communities traded dried mussels inland for obsidian flakes',
              'C. Red ochre pigments preserved shellfish meats over winter journeys',
              'D. Ancient groups tracked monthly ocean low-tide harvesting schedules accurately'
            ],
            correctAnswer: 'D',
            explanation: 'Proves early humans mastered monthly ocean low-tide calendars.'
          },
          {
            id: 'cd_listening_m15_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Durable fossil material carved finely into Ice Age sewing needles around 35,000 BCE: mammoth ______',
            correctAnswer: 'IVORY',
            explanation: 'Needles carved finely from mammoth ivory.'
          },
          {
            id: 'cd_listening_m15_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Why does the surviving Ice Age archaeological record misrepresent prehistoric daily gear?',
            options: [
              'A. Durable rocks survive while woven baskets, wood sticks, and nets rot away',
              'B. Glacial ice sheets crushed coastal cave layers uniformly flat',
              'C. Early museum collectors discarded broken shell spoons as rubble',
              'D. Nomadic groups burned wooden tools ritually before abandoning camps'
            ],
            correctAnswer: 'A',
            explanation: 'Hides ninety percent of fragile woven baskets, wooden sticks, and nets.'
          },
          {
            id: 'cd_listening_m15_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What concluding portrait of Paleolithic toolmakers ends the lecture?',
            options: [
              'A. Isolated hunters relying purely on lucky accidental river stones',
              'B. Inventive mechanical engineers commanding stone geometry and fire chemistry',
              'C. Conservative tribes repeating identical stone blades unchanged over millennia',
              'D. Seasonal artists carving ceremonial ivory ahead of practical traps'
            ],
            correctAnswer: 'B',
            explanation: 'Resourceful engineers writing brilliant mechanical chapters using flame, bone, and stone.'
          }
        ]
      }
    ]
  })
];
