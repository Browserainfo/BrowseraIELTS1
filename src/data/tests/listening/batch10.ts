/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_10: TestItem[] = [
  // =========================================================================
  // MOCK 16: Regional Tourism Office & Biofuel Synthesis Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m16',
    testNumber: 16,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 16: Regional Tourism Office & Biofuel Synthesis Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Regional Tourism Office & Biofuel Synthesis Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking Regional Coastal Rail-and-Ferry Passes',
        audioScenario:
          'A holiday visitor phones Northshore Regional Tourism Information Center to reserve a three-day coastal rail, ferry, and trail pass.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Regional Tourism Information Desk]
Officer: Good morning, Northshore Regional Tourism Office, Megan speaking. How may I assist your trip?
Caller: [[Q1]] Hi Megan! I am visiting next weekend with my sister and want to reserve two Coastal Explorer Passes covering buses and island ferries. My surname is Ferguson, spelled F-E-R-G-U-S-O-N.
Officer: [[Q2]] Happy to arrange that, Ms. Ferguson! Our Three-Day Explorer Pass costs forty-eight pounds per adult and covers unlimited coastal trains, village shuttle vans, and harbour passenger boats!
Caller: [[Q3]] Forty-eight pounds sounds wonderful! Does that standard rail pass also cover tickets aboard the vintage Sunday Steam Locomotive up Pine Valley? Standard passes ride regular green diesel trains; riding the vintage coal steam carriages requires a flat nine-pound heritage supplement!
Officer: [[Q4]] Definitely adding the nine-pound steam supplement too! Are sturdy waterproof walking cliff maps included free when collecting passes? Yes—every Explorer wallet includes our laminated 1:25,000 Cliff Path Map free!
Caller: [[Q5]] Where can early train arrivals stow rolling suitcases before island ferry check-in opens at noon? Drop bags cleanly inside smart coinless Luggage Lockers inside Harbour Quay Hall Two for three pounds daily!
Officer: [[Q6]] Good tip! Notice my sister follows a strict coeliac gluten-free diet—can we preorder seaside boat picnic hampers safely? Order our Gluten-Free Harbor Hamper twenty-four hours ahead and pick wicker baskets up straight from Harbor Bakery Pier Four!
Caller: [[Q7]] Perfect! My sister also twists an ankle easily on steep wet steps—do the Seal Island passenger launches carry flat roll-on access ramps? Yes—every afternoon yellow launch docks alongside wide flat hydraulic ramps with zero steep stair climbing!
Officer: [[Q8]] Notice weather ferry checks too: if brisk autumn Force Six gales halt open-bay crossings Sunday morning, passes switch smoothly onto scenic cliff-top Coastliner buses at zero surcharge!
Caller: [[Q9]] Should we arrive slightly ahead of kiosk hours Saturday at 7:50 AM, where do pre-booked QR tickets scan quickest? Collect printed pass sleeves from the green self-service kiosks facing Station Platform One!
Officer: [[Q10]] Let me lock two weekend passes cleanly under Tourism Booking Code NT-163.`,
        questions: [
          {
            id: 'cd_listening_m16_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Tourism pass applicant surname: ______',
            correctAnswer: 'FERGUSON',
            explanation: 'Spelled F-E-R-G-U-S-O-N.'
          },
          {
            id: 'cd_listening_m16_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Adult fare for the Three-Day Coastal Explorer Pass: £ ______',
            correctAnswer: 'FORTY-EIGHT',
            explanation: 'Three-Day Explorer Pass costs forty-eight pounds per adult.'
          },
          {
            id: 'cd_listening_m16_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Extra heritage supplement fee required to ride the vintage Pine Valley steam train: £ ______',
            correctAnswer: 'NINE',
            explanation: 'Requires a flat nine-pound heritage supplement.'
          },
          {
            id: 'cd_listening_m16_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Finish protecting complimentary 1:25,000 Cliff Path walking maps inside every pass wallet: ______',
            correctAnswer: 'LAMINATED',
            explanation: 'Every wallet includes a laminated 1:25,000 Cliff Path Map free.'
          },
          {
            id: 'cd_listening_m16_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'Which waterfront hall houses daily £3 rolling luggage lockers for early train arrivals?',
            correctAnswer: 'HARBOUR QUAY HALL TWO',
            explanation: 'Luggage Lockers sit inside Harbour Quay Hall Two.'
          },
          {
            id: 'cd_listening_m16_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Minimum advance hours required to reserve Gluten-Free Harbor Picnic Hampers at Pier Four: ______ hours',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Order Gluten-Free Harbor Hamper twenty-four hours ahead.'
          },
          {
            id: 'cd_listening_m16_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'How do Seal Island boat operators assist passengers who struggle with steep stairs?',
            options: [
              'A. Crew hoist wheelchairs manually via stern timber winches',
              'B. Passengers board calm morning launches strictly at high tide',
              'C. Afternoon yellow boats deploy wide flat hydraulic boarding ramps',
              'D. Floating pontoon chairs transfer guests cleanly from wooden piers'
            ],
            correctAnswer: 'C',
            explanation: 'Yellow launches dock alongside flat hydraulic ramps with zero stairs.'
          },
          {
            id: 'cd_listening_m16_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Backup cliff-top scenic transit available free whenever Force Six autumn winds halt ferries: ______ buses',
            correctAnswer: 'COASTLINER',
            explanation: 'Switches smoothly onto scenic Coastliner buses.'
          },
          {
            id: 'cd_listening_m16_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Train station location of green self-service QR ticket printing kiosks: Platform ______',
            correctAnswer: 'ONE',
            explanation: 'Green kiosks face Station Platform One.'
          },
          {
            id: 'cd_listening_m16_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Coastal Explorer Pass booking code: ______',
            correctAnswer: 'NT-163',
            explanation: 'Locked under Tourism Booking Code NT-163.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Welcome Briefing for Northshore Scenic Trail Visitors',
        audioScenario:
          'A regional park tourism guide introduces weekend visitors to tidal causeway schedules, heritage wool mills, dark-sky viewpoints, and coastal craft stamps.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Northshore Trail Visitor Guide]
Guide: Welcome aboard our Saturday Northshore Scenic Briefing! Before hopping onto shuttle vans across these limestone cliffs, check five seasonal coastal highlights plus two essential safety bells.
Guide: [[Q11]] Stop Two pauses right beside historic Blackrock Lighthouse—climbers ascending 140 spiral iron steps reward tired knees with free panoramic brass telescopes scanning gannet sea stacks offshore!
Guide: [[Q12]] Walk calmly along sand dunes toward Gull Island Causeway only when digital tide beacons flash calm green arrows—whenever roaring brass warning bells ring thirty minutes ahead of rising floodwaters, retreat upland swiftly!
Guide: [[Q13]] Halfway inland stands heritage Elmwood Wool Mill where towering 1880s waterwheel looms weave cozy heather check blankets—remember spinning gallery tours close Sundays for machine oiling!
Guide: [[Q14]] Hungry cyclists refuel cheerfully at Pebble Cove Smoke Shed serving warm oak-smoked kippers cleanly beside outdoor driftwood tables—dogs stay welcome outside on canvas patio cushions!
Guide: [[Q15]] Note strict drone courtesy over windswept Tern Lagoon marshes: radio-controlled cameras stay barred year-round because hovering whirring rotors scatter shy nesting terns off sandy shingle bars!
Guide: [[Q16]] After sunset skies clear cleanly over Moorland Ridge, join guided stargazing walks borrowing red-filtered LED torches from Ranger Cabin Four so bright white beams never spoil dark Milky Way eyes!
Guide: [[Q17]] Local pottery fans love collecting ink stamps inside free Coastal Heritage Passports—fill six village ink stamps across any weekend to claim one glazed ceramic harbour magnet free!
Guide: [[Q18]] Check mud warning chalkboards outside Orchard Gate whenever autumn rains soak cliff meadows—hikers wearing smooth leather urban sneakers slip easily down steep wet clay slopes!
Guide: [[Q19]] Remember mobile cell reception drops completely inside deep Smuggler’s Gorge valley—download offline route maps inside Visitor Harbor Wi-Fi before leaving pier coffee stalls!
Guide: [[Q20]] Drop spare paper shuttle maps cleanly inside wooden Recycling Hoppers beside Terminal Exit B so weekend walkers reuse crisp guides sustainably.`,
        questions: [
          {
            id: 'cd_listening_m16_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Number of spiral iron steps rising inside Blackrock Lighthouse toward free panoramic telescopes: ______',
            correctAnswer: '140',
            explanation: 'Climbers ascend 140 spiral iron steps.'
          },
          {
            id: 'cd_listening_m16_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Advance minutes given by ringing brass bells before rising flood tides cover Gull Island Causeway: ______ minutes',
            correctAnswer: 'THIRTY',
            explanation: 'Brass warning bells ring thirty minutes ahead of rising tides.'
          },
          {
            id: 'cd_listening_m16_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Weekday when Elmwood Wool Mill suspends weaving gallery tours for historic loom oiling: ______',
            correctAnswer: 'SUNDAYS',
            explanation: 'Gallery tours close Sundays for machine oiling.'
          },
          {
            id: 'cd_listening_m16_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Signature hot oak-smoked fish specialty served outside Pebble Cove Smoke Shed: ______',
            correctAnswer: 'KIPPERS',
            explanation: 'Serves warm oak-smoked kippers beside driftwood tables.'
          },
          {
            id: 'cd_listening_m16_lq15',
            number: 15,
            type: 'multiple_choice',
            questionText: 'Why are recreational drones permanently outlawed above Tern Lagoon marshes?',
            options: [
              'A. Gusting cliff winds crash battery rigs into tidal pools',
              'B. Coastguard radar beacons scramble unmanned flight signals',
              'C. Hovering rotor noise frightens nesting coastal terns off shingle nests',
              'D. Overhead power cables span narrow tidal reed channels'
            ],
            correctAnswer: 'C',
            explanation: 'Hovering rotors scatter shy nesting terns off shingle bars.'
          },
          {
            id: 'cd_listening_m16_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Torch filter color lent from Ranger Cabin Four protecting night stargazing eyes: ______',
            correctAnswer: 'RED',
            explanation: 'Borrow red-filtered LED torches from Cabin Four.'
          },
          {
            id: 'cd_listening_m16_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'What complimentary souvenir rewards visitors who collect six village ink stamps inside Coastal Passports?',
            correctAnswer: 'GLAZED CERAMIC HARBOUR MAGNET',
            explanation: 'Claim one glazed ceramic harbour magnet free.'
          },
          {
            id: 'cd_listening_m16_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why do guides caution hikers arriving in flat leather sneakers near Orchard Gate?',
            options: [
              'A. Rain-soaked clay meadows become treacherous and slippery',
              'B. Sharp limestone shingle cuts delicate urban shoe uppers',
              'C. Bog puddles leave dark peat stains along white laces',
              'D. Loose boardwalk nails catch soft thin rubber treads'
            ],
            correctAnswer: 'A',
            explanation: 'Smooth urban sneakers slip easily down wet clay slopes.'
          },
          {
            id: 'cd_listening_m16_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Valley stretch lacking mobile cell reception where offline downloaded maps are vital: Smuggler’s ______',
            correctAnswer: 'GORGE',
            explanation: 'Cell reception drops inside Smuggler’s Gorge valley.'
          },
          {
            id: 'cd_listening_m16_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Terminal drop-off exit holding wooden Recycling Hoppers for clean reused trail maps: Exit ______',
            correctAnswer: 'B',
            explanation: 'Wooden Recycling Hoppers beside Terminal Exit B.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Microalgae Lipid Biofuel Reactor Trials',
        audioScenario:
          'Chemical engineering students Amir and Lucy consult Professor Chen regarding sluggish photobioreactor lipid yields and harvesting costs.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Biofuel Process Design Critique]
Prof. Chen: Come in, Amir and Lucy. Your glass tube photobioreactor growing algae looked impressively bright green yesterday—yet dry oil lipid extractions disappointed slightly!
Amir: [[Q21]] Exactly right—biomass doubled briskly every sixteen hours at first, yet extracted biodiesel lipid stayed stubbornly flat at fourteen percent dry weight rather than hitting forty!
Lucy: [[Q22]] Digging through nutrient feed valves last night, I caught why: automated dosing pumps fed continuous lush nitrogen fertilizer straight through Week Two!
Prof. Chen: Classic metabolic luxury trap! Explain gently for Friday’s panel why choking off fertilizer nitrogen mid-cycle suddenly sparks thick golden fuel-oil buildup inside algae cells?
Amir: [[Q23]] When plenty of nitrogen feeds cells, algae pump energy wildly into splitting fast green protein walls—starve nitrogen sharply, and stressed algae stop dividing and pack dense triglyceride oil droplets cleanly instead!
Prof. Chen: [[Q24]] Textbook biochemical stress switching! Drop nitrogen feed cleanly off on Day Six inside Run Four—watch lipid density leap swiftly past thirty-five percent! How did harvesting separation energy add up?
Lucy: [[Q25]] Spinning watery green soup inside high-speed lab centrifuges ate nearly twenty-eight percent of total energy generated by the finished biofuel itself—completely wrecking net energy balance!
Prof. Chen: [[Q26]] Crucial commercial reality check—avoid energy-hogging spinning centrifuges! Try gentle food-grade chitosan powder coagulation first so heavy clumped green algae sink quietly downward overnight under plain gravity!
Amir: [[Q27]] Smart low-watt fix—skimming settled green sludge off tank bottoms cuts dewatering pump wattage nearly eighty percent! What about glass bioreactor biofilm shading?
Lucy: [[Q28]] Sticky green algae crusts smeared along sunny inner tube walls after Day Ten until circulating tiny soft sponge foam balls with air bubbles scrubbed tubes sparkling clear automatically!
Prof. Chen: [[Q29]] Clever mechanical self-scrubbing! Showcase one side-by-side comparison slide contrasting centrifuge kilowatts versus calm chitosan settling cleanly during next Thursday’s symposium!
Amir: [[Q30]] Ready to showcase—our green Chlorella algae strain slides and dewatering cost charts are all finalized!`,
        questions: [
          {
            id: 'cd_listening_m16_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Disappointing dry-weight algal biodiesel lipid yield logged during early continuous runs: ______ percent',
            correctAnswer: 'FOURTEEN',
            explanation: 'Extracted biodiesel lipid stayed flat at fourteen percent.'
          },
          {
            id: 'cd_listening_m16_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Nutrient continuously pumped through Week Two that prevented algal lipid accumulation: ______',
            correctAnswer: 'NITROGEN',
            explanation: 'Automated pumps fed continuous nitrogen fertilizer through Week Two.'
          },
          {
            id: 'cd_listening_m16_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why does shutting off nitrogen mid-culture boost cellular biofuel oil synthesis?',
            options: [
              'A. Nitrogen starvation kills contaminating bacteria eating floating oil',
              'B. Lack of nitrogen widens fragile green wall pores for easier extraction',
              'C. Lower dissolved fertilizer brightens tube sunlight penetration swiftly',
              'D. Nutrient-stressed cells halt cell division and store dense triglyceride oil'
            ],
            correctAnswer: 'D',
            explanation: 'Starving nitrogen stops division so stressed algae pack triglyceride oil droplets.'
          },
          {
            id: 'cd_listening_m16_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Scheduled cultivation day selected to halt nitrogen feed inside Run Four: Day ______',
            correctAnswer: 'SIX',
            explanation: 'Drop nitrogen feed cleanly off on Day Six.'
          },
          {
            id: 'cd_listening_m16_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Share of total biofuel output consumed solely by running high-speed dewatering centrifuges: ______ percent',
            correctAnswer: 'TWENTY-EIGHT',
            explanation: 'Centrifuges ate nearly twenty-eight percent of total energy generated.'
          },
          {
            id: 'cd_listening_m16_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Natural food-grade coagulant powder causing suspended algae to clump and settle under gravity: ______',
            correctAnswer: 'CHITOSAN',
            explanation: 'Try gentle food-grade chitosan powder coagulation.'
          },
          {
            id: 'cd_listening_m16_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Percentage wattage drop achieved by switching from centrifuges to bottom sludge skimming: ______ percent',
            correctAnswer: 'EIGHTY',
            explanation: 'Cuts dewatering pump wattage nearly eighty percent.'
          },
          {
            id: 'cd_listening_m16_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'How did Lucy clear sticky algae film clouding sunny inner glass tubes after Day Ten?',
            options: [
              'A. Flushed tubes periodically with dilute citric acid washes',
              'B. Circulated small soft sponge balls inside rising air-bubble streams',
              'C. Pulled magnetized bristle collars along exterior glass runs',
              'D. Switched from natural sunlight to interior submersible LED rods'
            ],
            correctAnswer: 'B',
            explanation: 'Circulating soft sponge foam balls scrubbed tubes sparkling clear.'
          },
          {
            id: 'cd_listening_m16_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Presentation day scheduled for Amir and Lucy’s comparative dewatering slide: ______',
            correctAnswer: 'THURSDAY',
            explanation: 'Showcase cleanly during next Thursday’s symposium.'
          },
          {
            id: 'cd_listening_m16_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Species genus of fast-growing microalgae tested inside the students’ glass photobioreactor: ______',
            correctAnswer: 'CHLORELLA',
            explanation: 'Photobioreactor growing green Chlorella algae.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Next-Generation Algal Biofuels & Sustainable Aviation Jet Synthesis',
        audioScenario:
          'A chemical engineering professor compares first-generation crop ethanol against third-generation microalgae biorefineries and aviation jet fuel synthesis.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Chemical Engineering Biofuel Lecture]
Lecturer: Decarbonizing tiny electric neighborhood city cars moves swiftly toward battery packs—yet powering sprawling jumbo passenger jets across Pacific oceans demands high-density liquid hydrocarbon fuel drops that batteries simply cannot match safely!
Lecturer: [[Q31]] Early first-generation biofuels fermented corn kernels and tropical palm oil cleanly—yet triggered an agonizing ethical food-versus-fuel crisis driving tortilla prices upward while burning pristine rainforest habitats!
Lecturer: [[Q32]] Second-generation cellulosic fuels avoided dinner plates by cooking tough woody corn stalks and sawdust—still requiring harsh expensive corrosive enzymes to crack stubborn wood lignin cages!
Lecturer: [[Q33]] Enter third-generation microalgae: microscopic sunny saltwater pond plants requiring zero fertile wheat soil and zero precious freshwater springs—doubling wet oily biomass astonishingly fast within twenty-four hours!
Lecturer: [[Q34]] Better still, hungry algae scrub thick industrial carbon dioxide smokestack fumes bubbling straight up through concrete cement factory chimneys—converting waste smokestack exhaust directly into crisp liquid aviation hydrocarbons!
Lecturer: [[Q35]] Two opposing industrial cultivation setups battle globally today: sprawling cheap sunny outdoor paddle-wheel raceway ponds versus sparkling closed clear plastic tubular reactors!
Lecturer: [[Q36]] While open outdoor dirt raceways cost fractions per acre to dig, stray dust storms, wild hungry rotifer microbes, and summer pond evaporation plague steady harvests—whereas enclosed glass tubes protect sterile pure cultures safely at steep capital cost!
Lecturer: [[Q37]] Crucially, raw green pressed algal crude cannot pour directly into freezing jet engines—chemists pass it through hydrotreating reactors packing hydrogen gas over metal catalysts to strip oxygen atoms cleanly away!
Lecturer: [[Q38]] Unfortunately, standalone fuel profits alone collapse whenever crude petroleum prices dip—forcing clever algal startups toward integrated biorefineries harvesting valuable vegan omega oils first!
Lecturer: [[Q39]] By selling pricey health supplements such as pink astaxanthin pigments alongside jet fuel droplets, diversified algal refineries turn sluggish fuel margins brightly profitable without endless government bailouts!
Lecturer: [[Q40]] Ultimately, scalable green aviation fuel relies equally on breeding rugged oil-rich marine strains and pairing industrial carbon capture exhaust beside calm sunlit coastal deserts.`,
        questions: [
          {
            id: 'cd_listening_m16_lq31',
            number: 31,
            type: 'multiple_choice',
            questionText: 'What major drawback plagued early corn and palm-oil first-generation biofuels?',
            options: [
              'A. Competing cropland inflated food staples while spurring forest clearance',
              'B. Low freezing points stalled winter diesel engines unexpectedly',
              'C. Fermented plant ethanol corroded aluminum car radiator fins',
              'D. Heavy fertilizer runoff spoiled deep underground water reservoirs'
            ],
            correctAnswer: 'A',
            explanation: 'Triggered a food-versus-fuel crisis raising prices and burning rainforests.'
          },
          {
            id: 'cd_listening_m16_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Tough woody plant armor requiring costly enzymes to unlock sugars in second-generation straw fuels: ______',
            correctAnswer: 'LIGNIN',
            explanation: 'Expensive enzymes needed to crack stubborn wood lignin cages.'
          },
          {
            id: 'cd_listening_m16_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Approximate time required for thriving microalgae populations to double total biomass: ______ hours',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Doubling wet oily biomass within twenty-four hours.'
          },
          {
            id: 'cd_listening_m16_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'Which industrial factory exhaust gas feeds directly into algal ponds to grow liquid aviation fuel?',
            correctAnswer: 'CARBON DIOXIDE',
            explanation: 'Scrub thick industrial carbon dioxide smokestack fumes.'
          },
          {
            id: 'cd_listening_m16_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Open circular outdoor cultivation channels stirred gently with rotating mechanical blades: ______ ponds',
            correctAnswer: 'RACEWAY',
            explanation: 'Outdoor paddle-wheel raceway ponds.'
          },
          {
            id: 'cd_listening_m16_lq36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do commercial producers weigh enclosed tubular photobioreactors cautiously against open ponds?',
            options: [
              'A. Enclosed plastic tubes block ultraviolet photosynthesis wavelengths',
              'B. Paddle wheels break enclosed tubes more often than windy ditches',
              'C. Tubular channels overheat green algae swiftly past 45 degrees',
              'D. Closed systems stop dust and predators safely yet demand high upfront capital cost'
            ],
            correctAnswer: 'D',
            explanation: 'Enclosed tubes protect sterile cultures safely yet carry steep capital cost.'
          },
          {
            id: 'cd_listening_m16_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Element chemically stripped off raw algal oils via catalytic hydrogen gas before jet engine use: ______',
            correctAnswer: 'OXYGEN',
            explanation: 'Hydrotreating reactors strip oxygen atoms cleanly away.'
          },
          {
            id: 'cd_listening_m16_lq38',
            number: 38,
            type: 'summary_completion',
            questionText: 'Modern integrated ______ improve thin jet-fuel profit margins by harvesting pink pigments and omega supplements.',
            correctAnswer: 'BIOREFINERIES',
            explanation: 'Forcing startups toward integrated biorefineries harvesting high-value coproducts.'
          },
          {
            id: 'cd_listening_m16_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'High-value natural pink antioxidant pigment harvested alongside algal health oils: ______',
            correctAnswer: 'ASTAXANTHIN',
            explanation: 'Harvesting high-value pink astaxanthin pigments first.'
          },
          {
            id: 'cd_listening_m16_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which dual strategy closes the lecture on scaling future green aviation fuels?',
            options: [
              'A. Subsidize domestic corn farmers while piping freshwater inland',
              'B. Mandate blending 50% woody sawdust oils into maritime freight engines',
              'C. Breed sturdy coastal marine strains next to factory carbon sources in sunlit deserts',
              'D. Shift short regional passenger flights onto electric solar blimps'
            ],
            correctAnswer: 'C',
            explanation: 'Breed rugged marine strains and pair carbon exhaust beside sunlit coastal deserts.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 17: University Art Gallery Tour & Quantum Sensor Seminar
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m17',
    testNumber: 17,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 17: University Art Gallery Tour & Quantum Sensor Seminar',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on University Art Gallery Tour & Quantum Sensor Seminar.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Booking a Private Evening University Art Gallery Tour',
        audioScenario:
          'A community sketch-club secretary phones the University Fine Art Gallery Desk to book an evening curator tour for adult members.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: University Gallery Bookings Desk]
Clerk: Good afternoon, Beaumont University Art Gallery Desk, Simon speaking. How can I assist?
Caller: [[Q1]] Hi Simon! I organize our neighborhood watercolor sketching society and want to arrange an evening curator-led visit next month. My surname is Reynolds, spelled R-E-Y-N-O-L-D-S.
Clerk: [[Q2]] Delighted to help, Mrs. Reynolds! Private curator-led tours run Thursday evenings after public hours from 6:15 PM until 7:45 PM for groups capped comfortably at twenty-four visitors!
Caller: [[Q3]] Twenty-four fits all eighteen regulars cleanly! What is the flat evening group booking fee including curator honorarium? Private evening tours cost seventy-five pounds flat per society—splitting smoothly under five pounds each!
Clerk: [[Q4]] Very reasonable indeed! Two senior painters use motorized folding wheelchairs—is the historic sculpture courtyard step-free cleanly? Yes—simply buzz brass Reception Intercom Two at West Courtyard Door for instant hydraulic glass lift access!
Caller: [[Q5]] Wonderful! May our artists carry pocket graphite drawing pencils and dry sketchbooks inside the Impressionist rooms? Soft dry graphite pencils are welcome—simply lock messy liquid fountain ink pens and damp paint tubes inside Reception Coat Lockers!
Clerk: [[Q6]] Fair enough—dry graphite pencils only! Are silent non-flash smartphone reference snapshots permitted beside bronze sculptures? Non-flash photography works freely across permanent wings, though red loan markers beside borrowed private portraits ban camera shutters altogether!
Caller: [[Q7]] Got it—watch closely for red loan tags! Does our evening museum ticket allow ordering coffee inside the Rotunda Tea Balcony afterward? Gallery tea counters shut at five sharp—though discounted hot scones sit waiting right across the courtyard at Old Quad Bistro until nine!
Clerk: [[Q8]] Check cloakroom sizing too before Thursday evening arrives: bulky damp umbrella tubes and oversized backpack frames stay safely inside ten-inch brass umbrella racks outside Gallery Door One!
Caller: [[Q9]] Should stormy evening weather delay our group train slightly past 6:15 PM, who answers our direct front-desk alert line? Call Evening Security Duty Warden Oliver straight on 020 7946 0381!
Clerk: [[Q10]] Let me lock Thursday the 24th cleanly under Gallery Group Code AG-175.`,
        questions: [
          {
            id: 'cd_listening_m17_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Watercolor society organizer surname: ______',
            correctAnswer: 'REYNOLDS',
            explanation: 'Spelled R-E-Y-N-O-L-D-S.'
          },
          {
            id: 'cd_listening_m17_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Maximum group headcount permitted on Thursday evening curator-led tours: ______ visitors',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Groups capped comfortably at twenty-four visitors.'
          },
          {
            id: 'cd_listening_m17_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Flat Thursday after-hours group tour fee per society: £ ______',
            correctAnswer: 'SEVENTY-FIVE',
            explanation: 'Costs seventy-five pounds flat per society.'
          },
          {
            id: 'cd_listening_m17_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Side door equipped with Reception Intercom Two for instant wheelchair lift entry: ______ Courtyard Door',
            correctAnswer: 'WEST',
            explanation: 'Buzz Intercom Two at West Courtyard Door.'
          },
          {
            id: 'cd_listening_m17_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'Which dry drawing tool is allowed inside Impressionist rooms while liquid ink and wet paint stay locked away?',
            correctAnswer: 'SOFT DRY GRAPHITE PENCILS',
            explanation: 'Soft dry graphite pencils are welcome.'
          },
          {
            id: 'cd_listening_m17_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Color of wall tags forbidding even non-flash photos next to borrowed private artworks: ______',
            correctAnswer: 'RED',
            explanation: 'Red loan markers ban camera shutters altogether.'
          },
          {
            id: 'cd_listening_m17_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Where can evening art society guests buy refreshments after 5:00 PM?',
            options: [
              'A. Rotunda Tea Balcony upstairs next to bronze rooms',
              'B. Old Quad Bistro situated directly across the courtyard',
              'C. Ground-floor print shop vending espresso bar',
              'D. Conservatory Patio tables adjacent to West Doors'
            ],
            correctAnswer: 'B',
            explanation: 'Discounted scones wait across the courtyard at Old Quad Bistro until nine.'
          },
          {
            id: 'cd_listening_m17_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Doorway locating brass racks for holding damp umbrellas and big packs outside galleries: Gallery Door ______',
            correctAnswer: 'ONE',
            explanation: 'Racks sit outside Gallery Door One.'
          },
          {
            id: 'cd_listening_m17_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Evening Duty Warden reachable on 020 7946 0381 if commuter trains run late: ______',
            correctAnswer: 'OLIVER',
            explanation: 'Call Security Duty Warden Oliver.'
          },
          {
            id: 'cd_listening_m17_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed Thursday evening gallery society code: ______',
            correctAnswer: 'AG-175',
            explanation: 'Gallery Group Code AG-175.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Gallery Conservation Protocols & Tactile Visitor Guides',
        audioScenario:
          'A senior museum curator introduces visitors to hidden climate monitors, low-lux textile lighting, foundry sculpture touches, and Sunday sketch desks.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Gallery Curator Orientation]
Curator: Welcome into Beaumont Hall! Before exploring five centuries of oils, tapestries, and cast bronze, let us look behind silent museum walls at clever conservation science guarding fragile artworks.
Curator: [[Q11]] Glance beside ornate wooden picture frames: tiny ivory-colored digital hygrometers record ambient room moisture relentlessly—maintaining relative humidity close to fifty percent so dry winter radiators never split painted oak panels!
Curator: [[Q12]] Walk inside our dimly lit Seventeenth-Century Silk Tapestry Alcove: notice motion-triggered roof shutters wake softly only as footsteps cross carpets, shielding delicate cochineal crimson plant dyes from irreversible sun fading!
Curator: [[Q13]] Unlike fragile glass paintings barring human touch, step straight toward our polished black basalt sculpture pedestal in Room Four: guests are warmly invited to feel cool hand-cast bronze textures cleanly—notice signs reading “Please Touch Gently”!
Curator: [[Q14]] Check our Audio-Tactile Access Kiosk near Main Stairs: blind and low-vision visitors borrow slim embossed raised-line relief booklets plus crisp descriptive earpieces completely free!
Curator: [[Q15]] Watch small energetic children closely inside our Ceramic Porcelain Wing: low open plinth pedestals sit intentionally at waist height, so sling heavy shoulder tote bags cleanly forward against your chest rather than swinging backward!
Curator: [[Q16]] Look up smoothly toward ceiling corners inside North Gallery Six: ultraviolet skylight baffles clip harsh blue noon radiation cleanly downward before sunlight kisses antique watercolour ink washes!
Curator: [[Q17]] On alternate Sunday afternoons, museum conservators unpack raw lapis lazuli mineral stones and crushed walnut oils onto Public Restoration Bench Two so families witness historical paint grinding firsthand!
Curator: [[Q18]] Check our green digital wall display beside Gift Shop Counters: QR badges reveal unseen infrared X-ray underdrawings showing where nervous masters repainted hidden extra hands beneath oil skies!
Curator: [[Q19]] Need calm quiet reflection away from buzzing school field trips? Climb narrow spiral stairs onto Mezzanine Study Landing Eight where padded green velvet reading benches overlook quiet cedar lawns!
Curator: [[Q20]] Leave feedback slips cleanly inside slotted walnut boxes beside Exit Archway Three before walking into town.`,
        questions: [
          {
            id: 'cd_listening_m17_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Target relative air humidity monitored by tiny ivory wall hygrometers to stop oak panels splitting: ______ percent',
            correctAnswer: 'FIFTY',
            explanation: 'Maintain relative humidity close to fifty percent.'
          },
          {
            id: 'cd_listening_m17_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Natural crimson tapestry pigment shielded from permanent light fading by motion-activated ceiling shutters: ______',
            correctAnswer: 'COCHINEAL',
            explanation: 'Shielding delicate cochineal crimson dyes from sun fading.'
          },
          {
            id: 'cd_listening_m17_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Gallery room inviting tactile exploration of cool cast bronze surfaces atop black basalt pedestals: Room ______',
            correctAnswer: 'FOUR',
            explanation: 'Pedestal in Room Four invites visitors to feel bronze.'
          },
          {
            id: 'cd_listening_m17_lq14',
            number: 14,
            type: 'short_answer',
            questionText: 'Besides descriptive earpieces, what printed resource does the gallery lend low-vision guests free?',
            correctAnswer: 'EMBOSSED RAISED-LINE RELIEF BOOKLETS',
            explanation: 'Borrow slim embossed raised-line relief booklets free.'
          },
          {
            id: 'cd_listening_m17_lq15',
            number: 15,
            type: 'multiple_choice',
            questionText: 'How must visitors carry shoulder tote bags inside the Ceramic Porcelain Wing?',
            options: [
              'A. Check all handbags mandatory inside Reception metal racks',
              'B. Carry clear gallery plastic bags lent by floor guards',
              'C. Fasten side pockets closed with Velcro safety straps',
              'D. Hold bags tucked forward against the chest away from low pedestals'
            ],
            correctAnswer: 'D',
            explanation: 'Sling shoulder bags forward against your chest rather than swinging backward.'
          },
          {
            id: 'cd_listening_m17_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Delicate water-based wall medium shielded from harsh ceiling skylight UV radiation inside North Gallery Six: ______',
            correctAnswer: 'WATERCOLOUR',
            explanation: 'Shields antique watercolour ink washes.'
          },
          {
            id: 'cd_listening_m17_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Vibrant blue mineral pigment stone demonstrated live during Sunday family paint-grinding afternoons: ______ lazuli',
            correctAnswer: 'LAPIS',
            explanation: 'Conservators unpack raw lapis lazuli stones and walnut oils.'
          },
          {
            id: 'cd_listening_m17_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What hidden artistic detail can guests explore using Gift Shop QR badges?',
            options: [
              'A. Infrared X-ray scans exposing painted-over original artist sketches',
              'B. Auction price histories across European collections',
              'C. Voice recordings of Victorian studio assistants mixing varnish',
              'D. Microscopic oil brush fiber comparisons across canvases'
            ],
            correctAnswer: 'A',
            explanation: 'Infrared X-ray underdrawings reveal repainted hidden extra details.'
          },
          {
            id: 'cd_listening_m17_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Quiet green velvet reading zone overlooking cedar lawns away from loud tour groups: Landing ______',
            correctAnswer: 'EIGHT',
            explanation: 'Mezzanine Study Landing Eight offers quiet benches.'
          },
          {
            id: 'cd_listening_m17_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Gallery exit number holding slotted walnut feedback suggestion boxes: Archway ______',
            correctAnswer: 'THREE',
            explanation: 'Slotted walnut boxes beside Exit Archway Three.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Calibrating Rubidium Atomic Magnetometer Bench Noise',
        audioScenario:
          'Physics undergraduates Sam and Priya consult Dr. Patel regarding mysterious midday magnetic spikes inside their basement quantum optics lab.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Quantum Optics Bench Review]
Dr. Patel: Morning, Sam and Priya! Your optically pumped rubidium vapor magnetometer hit incredible femtotesla sensitivity at three in the morning—why did noon scans drown cleanly inside messy zigzag spikes?
Sam: [[Q21]] Weirdest puzzle ever! Every weekday between nine and five, baseline readings jumped wildly every four minutes by sixty picoteslas before calming abruptly overnight!
Priya: [[Q22]] Walking out into our basement corridor holding a handheld magnetic meter solved it instantly—steel cables inside the building’s North Freight Elevator surged past our brickwork wall every time delivery trolleys rode downstairs!
Dr. Patel: [[Q23]] Classic basement neighbor interference! Even heavy triple-layer nickel-iron mu-metal shielding cans struggle against slow moving steel beams right next door—how can you isolate subtle sample pulses cleanly?
Sam: [[Q24]] Can we deploy a second twin reference rubidium glass cell sitting just five centimetres higher inside one differential gradiometer arrangement?
Dr. Patel: Brilliant move! Subtracting twin sensor signals cancels common distant elevator hum instantaneously while preserving local crisp magnetic signals inches from samples! How did oven heating elements avoid ruining measurements?
Priya: [[Q25]] Ordinary copper wire cell heaters induced ugly stray DC magnetic fields directly inside vapor bulbs until we wound opposing twisted-pair non-inductive foil ribbons cleanly around ovens!
Dr. Patel: [[Q26]] Smart non-inductive winding! Remember also: verify optical glass cell purity because lingering traces of oxygen air molecules bounce polarized rubidium spin alignments dead within milliseconds!
Sam: [[Q27]] Checked—our cells sit cleanly filled with ultra-pure nitrogen buffer gas plus inert neon coatings holding spin states steady past forty milliseconds!
Dr. Patel: [[Q28]] Impressive spin coherence! When writing Friday’s apparatus summary, include one crisp circuit sketch labeling active Helmholtz cancellation coils distinctly outside passive mu-metal walls!
Priya: [[Q29]] Will do—and I will attach the corridor doorway trace recorded on our handheld fluxgate meter alongside the schematic!
Sam: [[Q30]] Plus I calibrated our sampling oscilloscope triggers cleanly onto 50-hertz mains synchronization lines overnight!`,
        questions: [
          {
            id: 'cd_listening_m17_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Weekday baseline jump magnitude recorded every four minutes during daytime sensor runs: ______ picoteslas',
            correctAnswer: 'SIXTY',
            explanation: 'Readings jumped wildly by sixty picoteslas.'
          },
          {
            id: 'cd_listening_m17_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'What caused the mysterious daytime magnetic interference spikes inside the basement optics lab?',
            options: [
              'A. Subway electric commuter rail lines rumbling under adjacent blocks',
              'B. Moving steel cables in the North Freight Elevator past corridor brick walls',
              'C. Roof chiller fan motors turning on automatically around midday',
              'D. Nearby chemistry nuclear magnetic resonance magnets ramping up'
            ],
            correctAnswer: 'B',
            explanation: 'Steel cables in the North Freight Elevator surged past corridor walls.'
          },
          {
            id: 'cd_listening_m17_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Nickel-iron passive magnetic shielding cylinders used around delicate lab glass cells: ______-metal cans',
            correctAnswer: 'MU',
            explanation: 'Triple-layer nickel-iron mu-metal shielding cans.'
          },
          {
            id: 'cd_listening_m17_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Vertical distance separating the twin rubidium vapor cells in Sam’s noise-canceling gradiometer: ______ centimetres',
            correctAnswer: 'FIVE',
            explanation: 'Second reference cell sitting five centimetres higher.'
          },
          {
            id: 'cd_listening_m17_lq25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'How did Priya eliminate stray magnetic fields produced by cell-oven heating elements?',
            options: [
              'A. Switched from wire heaters onto warm silicone oil circulating jackets',
              'B. Replaced continuous power with short pulsed infrared heating flashes',
              'C. Wrapped opposing twisted-pair non-inductive foil ribbons around ovens',
              'D. Moved heating coils completely outside shielding cylinder lids'
            ],
            correctAnswer: 'C',
            explanation: 'Wound opposing twisted-pair non-inductive foil ribbons.'
          },
          {
            id: 'cd_listening_m17_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Unwanted residual gas impurity whose molecules scramble polarized rubidium atomic spin rapidly: ______',
            correctAnswer: 'OXYGEN',
            explanation: 'Lingering traces of oxygen air molecules bounce spin alignments dead.'
          },
          {
            id: 'cd_listening_m17_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Spin coherence duration held inside sealed nitrogen-and-neon buffered cells: ______ milliseconds',
            correctAnswer: 'FORTY',
            explanation: 'Holding spin states steady past forty milliseconds.'
          },
          {
            id: 'cd_listening_m17_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Which active zeroing hardware sits outside passive shielding on Friday’s apparatus schematic?',
            correctAnswer: 'HELMHOLTZ CANCELLATION COILS',
            explanation: 'Label active Helmholtz cancellation coils outside mu-metal walls.'
          },
          {
            id: 'cd_listening_m17_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Instrument used by Priya in the basement hallway to track down moving elevator cable noise: ______ meter',
            correctAnswer: 'FLUXGATE',
            explanation: 'Holding a handheld fluxgate meter solved it instantly.'
          },
          {
            id: 'cd_listening_m17_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Power grid frequency used to synchronize oscilloscope sampling triggers overnight: ______-hertz',
            correctAnswer: '50',
            explanation: 'Calibrated triggers onto 50-hertz mains lines.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Quantum Sensors — Mapping Underground Worlds & Living Brains',
        audioScenario:
          'An applied physics lecturer explains cold-atom gravity interferometers, diamond crystal biosensors, magnetoencephalography helmets, and GPS-free submarine navigation.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Quantum Sensor Physics Lecture]
Lecturer: Headlines rave endlessly about elusive billion-dollar quantum computers—yet quietly right now across construction roadsides and neurology wards, simpler rugged Quantum Sensors already rewrite what human instruments can detect!
Lecturer: [[Q31]] Unlike brittle laboratory silicon qubits chilled near absolute zero that collapse instantaneously when bumped, practical quantum sensors deliberately exploit delicate atomic sensitivity—turning fragile environmental wobbles straight into ultra-sharp measurements!
Lecturer: [[Q32]] Take urban civil engineers drilling expensive test trenches blindly to dodge forgotten Victorian sewer mains and hidden limestone sinkholes—old ground-penetrating radar rays bounce back uselessly off thick wet street clay!
Lecturer: [[Q33]] Enter cold-atom quantum gravity gradiometers: laser beams chill tiny floating clouds of rubidium atoms nearly motionless, drop them smoothly down vacuum tubes, and measure microscopic gravity pulls cleanly!
Lecturer: [[Q34]] Because dense stone soil pulls atoms slightly harder than hollow underground air cavities, portable quantum gravimeters already spot hidden Victorian brick tunnels two metres beneath busy city tarmac without digging a single spade!
Lecturer: [[Q35]] Beyond roads, wearable quantum helmets transform hospital neurology: classic superconducting brain scanners required patients holding heads rigid inside liquid-helium cooled giant steel buckets!
Lecturer: [[Q36]] Newer lightweight bicycle-style helmets studded with warm optically pumped atomic magnetometers hug restless toddlers’ heads softly—mapping faint electrical neuron storms freely while children play!
Lecturer: [[Q37]] Stranger still are synthetic pink diamond crystals holding deliberate nitrogen-vacancy defects: glowing green lasers turn single diamond impurities into room-temperature microscopic compass needles imaging living heartbeat currents cleanly!
Lecturer: [[Q38]] Meanwhile across deep ocean trenches, military submarines cruise silently months completely cut off from skyward GPS signals—causing clunky spinning mechanical gyroscopes to drift miles off course!
Lecturer: [[Q39]] Compact atomic accelerometers tracking quantum matter-wave interference inside submarines steer beneath Arctic ice shelves effortlessly with pinpoint metre accuracy totally immune to satellite jamming!
Lecturer: [[Q40]] Ultimately, turning nature’s finest atomic clocks and wave interference rulers into rugged weatherproof field instruments unlocks hidden worlds beneath street cobbles, stormy oceans, and human skulls alike.`,
        questions: [
          {
            id: 'cd_listening_m17_lq31',
            number: 31,
            type: 'multiple_choice',
            questionText: 'How do quantum sensors differ conceptually from delicate quantum computers?',
            options: [
              'A. Sensors eliminate vacuum tubes entirely using room-temperature superconductors',
              'B. Quantum computers rely purely on glowing optical photon fibers',
              'C. Sensors harness extreme atomic sensitivity to measure subtle outside wobbles',
              'D. Sensors amplify signals solely inside subterranean chilled tanks'
            ],
            correctAnswer: 'C',
            explanation: 'Sensors deliberately exploit delicate atomic sensitivity as sharp measurements.'
          },
          {
            id: 'cd_listening_m17_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Subsurface soil layer that blocks traditional ground-penetrating road radar echoes cleanly: wet ______',
            correctAnswer: 'CLAY',
            explanation: 'Old ground-penetrating radar bounces back uselessly off wet street clay.'
          },
          {
            id: 'cd_listening_m17_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Atomic element chilled near standstill by laser beams inside portable gravity gradiometers: ______',
            correctAnswer: 'RUBIDIUM',
            explanation: 'Laser beams chill tiny floating clouds of rubidium atoms.'
          },
          {
            id: 'cd_listening_m17_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Buried urban obstacle spotted reliably two metres beneath tarmac without excavating test pits: brick ______',
            correctAnswer: 'TUNNELS',
            explanation: 'Already spot hidden Victorian brick tunnels beneath tarmac.'
          },
          {
            id: 'cd_listening_m17_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Legacy hospital superconducting brain scanners confined stiff heads inside massive liquid-______-cooled buckets.',
            correctAnswer: 'HELIUM',
            explanation: 'Required patients inside liquid-helium cooled steel buckets.'
          },
          {
            id: 'cd_listening_m17_lq36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What clinical advantage distinguishes new atomic magnetometer neurology helmets?',
            options: [
              'A. Lightweight soft caps track active brainwaves comfortably while children move',
              'B. Magnetic dyes inject silently before non-invasive ultrasound bursts',
              'C. Portable lithium batteries recharge within twelve minutes between patients',
              'D. Superheated plasma mirrors eliminate metal hospital bed interference'
            ],
            correctAnswer: 'A',
            explanation: 'Hug restless toddlers heads softly while mapping neuron storms as children play.'
          },
          {
            id: 'cd_listening_m17_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Synthetic crystal defects acting like room-temperature atomic compasses for biological heartbeat currents: nitrogen-vacancy ______',
            correctAnswer: 'DIAMOND',
            explanation: 'Synthetic diamond crystals holding nitrogen-vacancy defects.'
          },
          {
            id: 'cd_listening_m17_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Classic submarine navigation instrument prone to steady directional drift during long GPS blackouts: spinning ______',
            correctAnswer: 'GYROSCOPES',
            explanation: 'Clunky spinning mechanical gyroscopes drift miles off course.'
          },
          {
            id: 'cd_listening_m17_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Why do maritime navigators favor quantum matter-wave accelerometers beneath polar ice sheets?',
            options: [
              'A. Cold ocean currents automatically calibrate atomic sensor lasers',
              'B. Matter waves detect floating iceberg density kilometres ahead',
              'C. Sonar pulses reflect cleanly upward off crystalline ice shelves',
              'D. Self-contained steering delivers pinpoint navigation completely immune to GPS jamming'
            ],
            correctAnswer: 'D',
            explanation: 'Steer with pinpoint metre accuracy totally immune to satellite jamming.'
          },
          {
            id: 'cd_listening_m17_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What core achievement summarizes modern practical quantum sensing in the closing summary?',
            options: [
              'A. Replacing hospital MRI suites worldwide within two decades',
              'B. Packaging atomic interference physics into tough instruments for field, sea, and clinic',
              'C. Doubling wireless internet speeds across subterranean rail systems',
              'D. Discovering unknown dense iron minerals near planetary mantles'
            ],
            correctAnswer: 'B',
            explanation: 'Turns atomic clocks and interference rulers into rugged field instruments.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 18: City Bicycle Scheme Support & Circadian Biology Lecture
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m18',
    testNumber: 18,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 18: City Bicycle Scheme Support & Circadian Biology Lecture',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on City Bicycle Scheme Support & Circadian Biology Lecture.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: MetroBike City Cycle Hire Support & Student Membership',
        audioScenario:
          'A commuting student telephones MetroBike City Cycle Support to resolve a dock billing query and set up a discounted semester pass.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: City Bicycle Scheme Customer Desk]
Agent: Good morning, MetroBike Support Center, Dylan speaking. How may I assist?
Caller: [[Q1]] Hi Dylan! I docked a blue commuter bike outside Central Station last night yet my phone app still shows an active ongoing trip charge! My surname is Dawson, spelled D-A-W-S-O-N.
Agent: [[Q2]] Let me clear that smoothly right away, Mr. Dawson! I see your dock click registered late at 9:42 PM—occasionally icy brass latches stick unless you wait for the steady green LED light before walking off! I have closed your ride and refunded seven pounds!
Caller: [[Q3]] Massive relief—thanks! While calling, how do university students unlock discounted monthly passes? Enter your student “.edu” email to unlock our Semester Student Pass at twenty-two pounds monthly—half our standard forty-four-pound adult tier!
Agent: [[Q4]] Brilliant! Does every MetroBike journey include unlimited short hops, or is there an overtime penalty clock? Every single ride stays free up to forty-five consecutive minutes—dock briefly for two minutes at any hub, and your free forty-five-minute clock resets fresh!
Caller: [[Q5]] Good to know! What happens if I spot a slow rear tire puncture or squeaky brake pad while rolling across parks? Simply press the red mechanical Wrench Button on the solar dock post after locking it in—mechanic vans flag the frame locked out immediately!
Agent: [[Q6]] Smart quick button! Can riders upgrade occasionally to battery-assisted teal electric MetroBikes on rainy windy climbs? Yes—electric pedal-assist unlocks seamlessly at fifteen pence per active minute atop normal passes!
Caller: [[Q7]] Very affordable on steep hills! Where can nervous first-time riders borrow bright reflective safety vests and folding helmets near campus? Drop by Mobility Kiosk Six facing South Library Steps with your student ID card!
Agent: [[Q8]] Notice commuter rush-hour dock rules too: if every rack slot sits full outside Hospital Square at 8:50 AM, tap “Dock Full” on the kiosk screen for fifteen free bonus minutes pedaling smoothly to neighboring Market Docks!
Caller: [[Q9]] Clever cushion! Who oversees disputed overnight missing-bike fines should street vandals ever tamper with parked frames? Email Claims Supervisor Monica cleanly within twenty-four hours attaching dock receipt screenshots!
Agent: [[Q10]] Let me verify your upgraded student account under Support Ticket MB-187.`,
        questions: [
          {
            id: 'cd_listening_m18_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'MetroBike caller surname: ______',
            correctAnswer: 'DAWSON',
            explanation: 'Spelled D-A-W-S-O-N.'
          },
          {
            id: 'cd_listening_m18_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Dock indicator light riders must verify before walking away from locked bikes: steady ______ LED',
            correctAnswer: 'GREEN',
            explanation: 'Wait for the steady green LED light before walking off.'
          },
          {
            id: 'cd_listening_m18_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Discounted monthly fee for the MetroBike Semester Student Pass: £ ______',
            correctAnswer: 'TWENTY-TWO',
            explanation: 'Costs twenty-two pounds monthly for students.'
          },
          {
            id: 'cd_listening_m18_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Included consecutive ride limit per trip before overtime charges begin: ______ minutes',
            correctAnswer: 'FORTY-FIVE',
            explanation: 'Free up to forty-five consecutive minutes.'
          },
          {
            id: 'cd_listening_m18_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'Which dock button automatically alerts repair vans and locks out punctured bikes?',
            correctAnswer: 'RED MECHANICAL WRENCH BUTTON',
            explanation: 'Press the red mechanical Wrench Button on the dock post.'
          },
          {
            id: 'cd_listening_m18_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Per-minute surcharge for unlocking teal pedal-assist electric bicycles: ______ pence',
            correctAnswer: 'FIFTEEN',
            explanation: 'Unlocks at fifteen pence per active minute.'
          },
          {
            id: 'cd_listening_m18_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Kiosk lending reflective vests and folding helmets beside South Library Steps: Kiosk ______',
            correctAnswer: 'SIX',
            explanation: 'Drop by Mobility Kiosk Six.'
          },
          {
            id: 'cd_listening_m18_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What benefit triggers when cyclists press "Dock Full" on a crowded morning kiosk screen?',
            options: [
              'A. Riders gain fifteen free bonus minutes to reach neighboring stations',
              'B. Remote valet vans dispatch portable racks within ten minutes',
              'C. Bikes lock temporarily onto nearby handrails using digital cable loops',
              'D. Full overtime penalties waive permanently for the remainder of the day'
            ],
            correctAnswer: 'A',
            explanation: 'Grants fifteen free bonus minutes to pedal to neighboring docks.'
          },
          {
            id: 'cd_listening_m18_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'MetroBike Claims Supervisor handling disputed overnight fines via screenshot emails: ______',
            correctAnswer: 'MONICA',
            explanation: 'Email Claims Supervisor Monica within twenty-four hours.'
          },
          {
            id: 'cd_listening_m18_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Verified MetroBike support account ticket code: ______',
            correctAnswer: 'MB-187',
            explanation: 'Verified under Support Ticket MB-187.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Urban Cycling Infrastructure & Winter Commuter Workshop',
        audioScenario:
          'A city active-travel trainer briefs university students on navigating streetcar rails, Dutch roundabouts, winter lithium batteries, and free tune-ups.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Urban Cycle Safety Orientation]
Trainer: Welcome along to City Cycle Readiness! Cycling cuts cross-town campus commutes under twelve minutes—provided new riders master five urban street habits first!
Trainer: [[Q11]] First, watch closely along Cathedral Boulevard where steel streetcar tram tracks slice diagonally across tarmac: never glide sideways along narrow metal grooves—cross crisp wet tram lines cleanly at ninety-degree right angles so narrow tires never snag!
Trainer: [[Q12]] Second, test our town’s brand-new painted Dutch-style roundabout beside River Gate: painted crimson asphalt outer rings grant cyclists right-of-way over exiting cars—yet always catch direct eye contact with van drivers before rolling past side mirrors!
Trainer: [[Q13]] Notice seasonal autumn hazards along shady Oak Park shortcuts: thick soggy fallen plane leaves hide greasy wet clay slicks underneath—feather gentle rear brakes earlier ahead of tight wooden bridge bends!
Trainer: [[Q14]] E-bike commuters riding private folding folders during freezing January weeks should bring removable lithium frame batteries indoors overnight—charging icy frozen battery cells below zero permanently scars internal electrodes!
Trainer: [[Q15]] Check front handlebar beam alignment too: bright blinking white LED strobes angled bluntly upward into oncoming eyes blind fellow path cyclists—tilt beams downward twenty degrees illuminating asphalt cracks three metres ahead!
Trainer: [[Q16]] Need greasy commuter chains cleaned or slack brake cables tightened before winter storms arrive? Free Dr. Bike mechanic pop-up tents tune gears every Tuesday lunch outside Engineering Quad!
Trainer: [[Q17]] Look carefully at metal U-locks inside downtown racks: thread sturdy hardened steel U-shackles cleanly through BOTH rear wheel triangle spokes AND main frames—locking lonely quick-release front wheels leaves thieves walking away with bikes!
Trainer: [[Q18]] Check city Bike Register stickers free at Student Union Reception Desk Four: invisible micro-dot UV ink markings let recovered stolen frames reunite cleanly with rightful student owners!
Trainer: [[Q19]] Remember polite shared towpath etiquette beside canal anglers: ring crisp brass warning bells gently twenty metres behind strollers rather than startling headphones off walkers with angry screams!
Trainer: [[Q20]] Pick up waterproof pocket high-vis spoke reflectors inside plastic bins beside Workshop Tent Door One before cycling home.`,
        questions: [
          {
            id: 'cd_listening_m18_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Safe angle cyclists must cross steel streetcar tram rails along Cathedral Boulevard to stop tires jamming: ______-degree',
            correctAnswer: 'NINETY',
            explanation: 'Cross tram lines cleanly at ninety-degree right angles.'
          },
          {
            id: 'cd_listening_m18_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Color of outer Dutch roundabout cycle ring giving bike commuters right of way near River Gate: ______',
            correctAnswer: 'CRIMSON',
            explanation: 'Painted crimson asphalt outer rings grant cyclists right-of-way.'
          },
          {
            id: 'cd_listening_m18_lq13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why must cyclists brake softly early before bridges inside shady Oak Park during autumn?',
            options: [
              'A. Tree roots buckle gravel trails unpredictably after frost',
              'B. Narrow pedestrian fences pinch sharp corner steering angles',
              'C. Morning irrigation sprinklers dampen plank corners daily',
              'D. Wet fallen plane leaves disguise slippery clay layers underneath'
            ],
            correctAnswer: 'D',
            explanation: 'Soggy fallen leaves hide greasy wet clay slicks underneath.'
          },
          {
            id: 'cd_listening_m18_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why do instructors warn commuters against charging removable e-bike batteries inside freezing sheds?',
            options: [
              'A. Sub-zero wall chargers trip domestic apartment circuit breakers',
              'B. Condensation drips rust onto alloy frame electrical pins',
              'C. Charging lithium cells below zero permanently damages internal electrodes',
              'D. Freezing winds discharge full charge cycles overnight automatically'
            ],
            correctAnswer: 'C',
            explanation: 'Charging icy cells below zero permanently scars internal electrodes.'
          },
          {
            id: 'cd_listening_m18_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Recommended downward tilt angle for bicycle headlights to illuminate asphalt cracks without dazzling oncoming riders: ______ degrees',
            correctAnswer: 'TWENTY',
            explanation: 'Tilt beams downward twenty degrees.'
          },
          {
            id: 'cd_listening_m18_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Weekday hosting free lunchtime Dr. Bike gear and brake repairs outside Engineering Quad: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Pop-up tents tune gears every Tuesday lunch.'
          },
          {
            id: 'cd_listening_m18_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Which two bicycle components must steel U-locks pass through simultaneously to stop quick-release theft?',
            correctAnswer: 'REAR WHEEL TRIANGLE SPOKES AND MAIN FRAMES',
            explanation: 'Pass U-shackles through both rear wheel triangle spokes and main frames.'
          },
          {
            id: 'cd_listening_m18_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Invisible anti-theft frame marking security fluid offered free at Student Union Desk Four: micro-dot ______ ink',
            correctAnswer: 'UV',
            explanation: 'Invisible micro-dot UV ink markings.'
          },
          {
            id: 'cd_listening_m18_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Courteous distance behind canal path pedestrians to ring bicycle bells gently: ______ metres',
            correctAnswer: 'TWENTY',
            explanation: 'Ring brass warning bells twenty metres behind strollers.'
          },
          {
            id: 'cd_listening_m18_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Pocket safety clips distributed inside Workshop Tent Door One bins: spoke ______',
            correctAnswer: 'REFLECTORS',
            explanation: 'Pick up waterproof pocket spoke reflectors.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Nocturnal Wheel-Running Actograms in Chronobiology',
        audioScenario:
          'Biology undergraduates Maya and Dylan consult Professor Lind regarding erratic rodent circadian clock drift inside basement constant-dark cages.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Chronobiology Lab Critique]
Prof. Lind: Come in, Maya and Dylan! Plotting continuous running-wheel rotations across constant darkness looked crisp—until Week Two suddenly jumped forward weirdly in Chamber Four!
Maya: [[Q21]] Weirdest anomaly! Healthy nocturnal hamsters ordinarily drift smoothly twenty minutes earlier daily inside total darkness—yet Chamber Four animals suddenly synced starkly right at noon every Thursday!
Dylan: [[Q22]] Checking corridor access card logs solved it: new night facility cleaners flipped bright overhead white hallway switches open every Thursday afternoon, letting thin light slivers seep beneath cracked door frames!
Prof. Lind: Classic light-leak phase reset! Mammalian retinas respond acutely even to tiny blue-white photons leaking across bedroom gaps—what lamp color lets lab helpers inspect water bottles cleanly without resetting clocks?
Maya: [[Q23]] Dim deep red LED headlamps above 650 nanometres—rodent circadian blue-sensitive photoreceptors sit totally blind to long-wavelength red!
Prof. Lind: [[Q24]] Spot-on! Tape thick black neoprene weatherstripping around Door Four hinges and swap white inspection strips for dim red lanterns! What showed up in blood melatonin test tubes?
Dylan: [[Q25]] Surprisingly, nocturnal melatonin hormone levels peaked three hours lower in older twenty-month cages compared to vigorous young three-month hamsters!
Prof. Lind: [[Q26]] Fascinating aging decay—remember to verify whether dusty brass wheel switches jammed sluggishly in older cages so aging muscles weren’t solely blamed for flat curves!
Maya: [[Q27]] Smart mechanical control—we already oiled squeaky stainless bearings across all sixteen racks using silent medical silicone grease and verified rotation triggers electronically!
Prof. Lind: [[Q28]] Air-tight mechanical check! When laying out your Friday conference poster, print crisp double-plotted circadian actograms wrapping forty-eight horizontal hours cleanly across rows so sloped drift lines stand out instantaneously!
Dylan: [[Q29]] Done—and Maya checked statistical periodogram scripts cleanly with biostatistician Dr. Gomez yesterday!
Maya: [[Q30]] Every cleaned wheel trace across our full twenty-one days of constant darkness is now archived for Friday!`,
        questions: [
          {
            id: 'cd_listening_m18_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Normal daily circadian drift observed in healthy dark-housed hamsters prior to Thursday room disturbance: ______ minutes earlier',
            correctAnswer: 'TWENTY',
            explanation: 'Ordinarily drift smoothly twenty minutes earlier daily.'
          },
          {
            id: 'cd_listening_m18_lq22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'What accidentally reset Chamber Four rodent clocks sharply to midday every Thursday?',
            options: [
              'A. Ultrasonic floor scrubbers vibrating cage shelves weekly',
              'B. Bright white hallway lights seeping beneath loose door gaps during cleaning',
              'C. Warm fresh tap water bottles shocking sleeping thermostats',
              'D. Automated pellet dispensers jamming loudly every seventh noon'
            ],
            correctAnswer: 'B',
            explanation: 'Cleaners flipped overhead white switches, letting light seep beneath door frames.'
          },
          {
            id: 'cd_listening_m18_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Minimum safe LED lamp wavelength above which nocturnal rodent internal clocks ignore inspection light: ______ nanometres',
            correctAnswer: '650',
            explanation: 'Dim deep red LED headlamps above 650 nanometres.'
          },
          {
            id: 'cd_listening_m18_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'Which flexible sealing material must line Door Four edges to block stray corridor photons completely?',
            correctAnswer: 'BLACK NEOPRENE WEATHERSTRIPPING',
            explanation: 'Tape thick black neoprene weatherstripping around hinges.'
          },
          {
            id: 'cd_listening_m18_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Nocturnal sleep-regulating hormone measured noticeably weaker inside aging twenty-month hamsters: ______',
            correctAnswer: 'MELATONIN',
            explanation: 'Nocturnal melatonin hormone levels peaked three hours lower.'
          },
          {
            id: 'cd_listening_m18_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why did Professor Lind tell students to verify hardware wheel switches in aging cages?',
            options: [
              'A. Heavy aging rodents bend aluminum wheel axles noticeably',
              'B. Older hamsters prefer chewing plastic water valves rather than running',
              'C. Magnetic counter wires wear brittle inside damp room air',
              'D. Rusty dusty wheel bearings could artificially mimic biological lethargy'
            ],
            correctAnswer: 'D',
            explanation: 'Verify brass switches didn’t jam sluggishly and mimic old-age weakness.'
          },
          {
            id: 'cd_listening_m18_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Silent medical-grade lubricant applied cleanly across all sixteen wheel racks: ______ grease',
            correctAnswer: 'SILICONE',
            explanation: 'Oiled bearings using silent medical silicone grease.'
          },
          {
            id: 'cd_listening_m18_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Horizontal time span wrapped cleanly across each double-plotted actogram poster row: ______ hours',
            correctAnswer: 'FORTY-EIGHT',
            explanation: 'Double-plotted actograms wrapping forty-eight horizontal hours.'
          },
          {
            id: 'cd_listening_m18_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Biostatistician verifying the periodogram analytical code before Friday’s conference: Dr. ______',
            correctAnswer: 'GOMEZ',
            explanation: 'Checked scripts cleanly with Dr. Gomez yesterday.'
          },
          {
            id: 'cd_listening_m18_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Duration of constant darkness monitoring across the main wheel-running trial: ______ days',
            correctAnswer: 'TWENTY-ONE',
            explanation: 'Across twenty-one days of constant darkness.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Circadian Clocks, Blue Photoreceptors & Chronomedicine',
        audioScenario:
          'A chronobiology professor lectures on the brain’s master SCN clock, melanopsin eye sensors, peripheral liver clocks, and timed cancer chronotherapy.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Circadian Biology Lecture]
Lecturer: Lock curious human volunteers deep inside sunless underground limestone caves free of wristwatches, radios, or window blinds—and miraculously, human waking and sleeping rhythms don’t scatter randomly; they tick steadily near twenty-four point two hours!
Lecturer: [[Q31]] Driving that uncanny internal accuracy sits one microscopic cluster of twenty thousand neurons tucked right above optic nerve crossroads inside the hypothalamus—called the suprachiasmatic nucleus, or SCN!
Lecturer: [[Q32]] Because internal human clocks run slightly sluggishly beyond exact twenty-four-hour solar rotation, daily dawn sunshine must nudge our master SCN gently forward every morning—preventing us drifting gradually round the clock!
Lecturer: [[Q33]] Remarkably, neuroscientists discovered eyes carry specialized light sensors totally separate from sight rods and cones—retinal cells brimming with blue-sky pigment called melanopsin that detect sky brightness even in many visually blind eyes!
Lecturer: [[Q34]] Why worry about checking backlit glowing laptops past eleven at night? Bright blue 480-nanometre phone glow fools innocent melanopsin sky sensors into screaming noon daylight—slamming evening pineal melatonin release brakes hard!
Lecturer: [[Q35]] Crucially, circadian biology isn’t locked exclusively inside your skull: virtually every living liver, heart, pancreas, and stomach tissue ticks its own local cellular clock tuned tightly to meal timing!
Lecturer: [[Q36]] Munching greasy late-night snacks at two in the morning splits internal harmony painfully—jerking sleepy liver sugar clocks sharply out of sync against your resting dark brain SCN, raising long-term diabetes vulnerability!
Lecturer: [[Q37]] Forward-looking architects now redesign sterile intensive-care hospital wards using dynamic ceiling skylights shifting from crisp invigorating blue-white morning tones toward cozy amber hearth warmth after dusk—slashing post-surgery delirium steeply!
Lecturer: [[Q38]] Even stranger shines rising clinical Chronotherapy: toxic chemotherapy doses or common blood-pressure tablets given precisely at specific body-clock hours cut side-effect nausea nearly half while killing tumor spikes cleaner!
Lecturer: [[Q39]] Sadly, rotating midnight shift workers flipping endlessly between early dawn and graveyard hospital rotations endure chronic social jetlag matching continuous transatlantic flight fatigue without crossing oceans!
Lecturer: [[Q40]] Respecting circadian timing—bright morning sun outdoors, warm amber dusk indoors, and consistent daytime meal windows—aligns modern urban schedules harmoniously with four billion years of solar evolution.`,
        questions: [
          {
            id: 'cd_listening_m18_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Approximate number of master pacemaker neurons forming the brain’s suprachiasmatic nucleus (SCN): ______ thousand',
            correctAnswer: 'TWENTY',
            explanation: 'Cluster of twenty thousand neurons inside the hypothalamus.'
          },
          {
            id: 'cd_listening_m18_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why do humans require daily morning daylight exposure despite possessing an internal biological pacemaker?',
            options: [
              'A. Without sunlight, natural internal cycles run slightly longer than 24 hours and slowly drift',
              'B. Pituitary hormone production stalls entirely without direct morning warmth',
              'C. Daytime blue wavelengths synthesize vitamin precursors inside optic nerves',
              'D. Internal timers reset exclusively during active midday muscle exercise'
            ],
            correctAnswer: 'A',
            explanation: 'Internal clocks run near 24.2 hours so dawn sunshine nudges the SCN forward daily.'
          },
          {
            id: 'cd_listening_m18_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Specialized sky-brightness pigment inside non-visual retinal eye cells triggering circadian alignment: ______',
            correctAnswer: 'MELANOPSIN',
            explanation: 'Retinal cells brimming with blue-sky pigment called melanopsin.'
          },
          {
            id: 'cd_listening_m18_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Peak blue screen wavelength (in nanometres) that fools retinal sensors into suppressing bedtime melatonin: ______',
            correctAnswer: '480',
            explanation: 'Bright blue 480-nanometre phone glow fools melanopsin sensors.'
          },
          {
            id: 'cd_listening_m18_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Beyond the central brain pacemaker, local molecular clocks inside liver and gut tissues align strongly to ______ timing.',
            correctAnswer: 'MEAL',
            explanation: 'Organ clocks tick tuned tightly to meal timing.'
          },
          {
            id: 'cd_listening_m18_lq36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What metabolic risk arises when people routinely eat heavy meals at 2:00 AM?',
            options: [
              'A. Stomach acid destroys helpful nocturnal gut probiotic bacteria',
              'B. Organ sugar clocks fall out of phase with the sleeping brain, raising diabetes risk',
              'C. Digestion diverts oxygen away from deep dream sleep cycles',
              'D. Cold overnight body temperatures halt digestive enzyme chemistry'
            ],
            correctAnswer: 'B',
            explanation: 'Jerks liver sugar clocks out of sync with the dark brain SCN, raising diabetes vulnerability.'
          },
          {
            id: 'cd_listening_m18_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Hospital patient recovery hazard lowered sharply by shifting ICU lighting from cool blue mornings to warm amber evenings: ______',
            correctAnswer: 'DELIRIUM',
            explanation: 'Dynamic lighting slashes post-surgery delirium steeply.'
          },
          {
            id: 'cd_listening_m18_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Medical timing discipline administering blood-pressure or cancer doses at optimal body-clock hours: ______',
            correctAnswer: 'CHRONOTHERAPY',
            explanation: 'Clinical Chronotherapy cuts side effects nearly half.'
          },
          {
            id: 'cd_listening_m18_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'What everyday travel-inspired term describes chronic biological disruption suffered by rotating shift workers?',
            correctAnswer: 'SOCIAL JETLAG',
            explanation: 'Endure chronic social jetlag matching continuous flight fatigue.'
          },
          {
            id: 'cd_listening_m18_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What practical recipe concludes the lecture for harmonizing urban schedules with human biology?',
            options: [
              'A. Take supplemental melatonin capsules consistently ahead of short flights',
              'B. Replace standard office ceiling fixtures with red monochrome strips',
              'C. Combine bright morning outdoor sun, warm amber dusk, and steady daytime meals',
              'D. Exercise vigorously immediately prior to sleeping inside cool dark rooms'
            ],
            correctAnswer: 'C',
            explanation: 'Bright morning sun, warm amber dusk, and consistent daytime meal windows.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 19: Student Exchange Orientation & Volcanology Research Talk
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m19',
    testNumber: 19,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 19: Student Exchange Orientation & Volcanology Research Talk',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Student Exchange Orientation & Volcanology Research Talk.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Planning an Autumn Semester Student Exchange Placement',
        audioScenario:
          'A second-year environmental science student phones the University Global Exchange Office to confirm host accommodation and credit transfer rules.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Global Exchange Mobility Desk]
Advisor: Good morning, University Global Exchange Office, Elena speaking. How may I assist?
Student: [[Q1]] Hi Elena! I was nominated for next autumn’s semester exchange and want to wrap up housing forms. My surname is Henderson, spelled H-E-N-D-E-R-S-O-N.
Advisor: [[Q2]] Congratulations, Mr. Henderson! Uppsala University in Sweden is a fantastic choice! First, check tuition billing rules carefully: exchange scholars pay regular home university tuition directly here—zero extra international tuition bills go to Uppsala!
Student: [[Q3]] Fantastic! What about Swedish student dormitory rent and winter heating—does our Global Mobility Bursary help cover travel flights? Yes—every outgoing European exchange nominee automatically receives an eight-hundred-pound green travel grant—plus two hundred extra pounds if travelling overland by rail!
Advisor: [[Q4]] Oh, definitely booking sleeper trains across Germany! Should I lock my module selections now inside our Learning Agreement sheet? Yes—have your Academic Coordinator Dr. Shaw sign four approved course equivalents before June 30th so credits transfer back seamlessly!
Student: [[Q5]] I will meet Dr. Shaw tomorrow morning. Wait—will intensive Swedish beginner language classes during late August add extra tuition fees? Partner host orientation weeks include a free forty-hour Crash Swedish Survival course plus forest berry-picking walks!
Advisor: [[Q6]] Sounds amazing! Does housing priority guarantee private studio kitchens, or do nominees usually share hall corridors? Nominated incoming exchange fellows secure single lockable bedrooms inside corridor clusters sharing big friendly communal kitchens!
Student: [[Q7]] Shared corridor kitchens sound brilliant for cooking pasta with new friends! Must incoming travelers verify personal health insurance cards beforehand? Carry both your valid European Global Health Card plus free university travel certificates emailed next Tuesday!
Advisor: [[Q8]] Check baggage luggage hints too before packing winter coats: Uppsala thrift swap sheds lend bulky winter sledges, thick snow boots, and desk lamps practically free during Arrival Week!
Student: [[Q9]] Huge suitcase saver! Who pairs outbound nervous first-timers with returning alumni mentors who actually lived in Uppsala last year? Contact Peer Ambassador Coordinator Tariq in Room 108!
Advisor: [[Q10]] Let me log your autumn rail preference cleanly under Exchange File EX-193.`,
        questions: [
          {
            id: 'cd_listening_m19_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Outgoing student exchange nominee surname: ______',
            correctAnswer: 'HENDERSON',
            explanation: 'Spelled H-E-N-D-E-R-S-O-N.'
          },
          {
            id: 'cd_listening_m19_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Country hosting the caller’s autumn Uppsala University exchange placement: ______',
            correctAnswer: 'SWEDEN',
            explanation: 'Uppsala University in Sweden.'
          },
          {
            id: 'cd_listening_m19_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Bonus travel grant topped onto the £800 bursary if traveling sustainably overland by train: £ ______',
            correctAnswer: 'TWO HUNDRED',
            explanation: 'Two hundred extra pounds if travelling overland by rail.'
          },
          {
            id: 'cd_listening_m19_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Calendar deadline for Dr. Shaw to sign the four-course Learning Agreement sheet: June ______',
            correctAnswer: '30TH',
            explanation: 'Sign four approved course equivalents before June 30th.'
          },
          {
            id: 'cd_listening_m19_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Hours included inside Uppsala’s complimentary August Crash Swedish language bootcamp: ______ hours',
            correctAnswer: 'FORTY',
            explanation: 'Free forty-hour Crash Swedish Survival course.'
          },
          {
            id: 'cd_listening_m19_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What residential accommodation setup awaits nominated Uppsala exchange students?',
            options: [
              'A. Subsidized shared off-campus city apartments along bus corridors',
              'B. Studio apartments reserved exclusively for international science majors',
              'C. Single lockable corridor bedrooms sharing communal kitchens',
              'D. Local homestay guest suites hosted by retired faculty'
            ],
            correctAnswer: 'C',
            explanation: 'Single lockable bedrooms inside corridor clusters sharing communal kitchens.'
          },
          {
            id: 'cd_listening_m19_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Weekday next week when free university supplementary travel certificates arrive by email: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Free travel certificates emailed next Tuesday.'
          },
          {
            id: 'cd_listening_m19_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'Besides sledges and desk lamps, what cold-weather footwear can exchange arrivals get cheaply at Uppsala thrift sheds?',
            correctAnswer: 'THICK SNOW BOOTS',
            explanation: 'Uppsala thrift swap sheds lend winter sledges, thick snow boots, and lamps.'
          },
          {
            id: 'cd_listening_m19_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Peer Ambassador Coordinator in Room 108 linking travelers with returning Uppsala alumni mentors: ______',
            correctAnswer: 'TARIQ',
            explanation: 'Contact Peer Ambassador Coordinator Tariq in Room 108.'
          },
          {
            id: 'cd_listening_m19_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed autumn Uppsala student exchange code: ______',
            correctAnswer: 'EX-193',
            explanation: 'Logged under Exchange File EX-193.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Pre-Departure Cross-Cultural Exchange Briefing',
        audioScenario:
          'An international mobility officer prepares outbound university students for cultural adjustment dips, overseas banking, academic grading, and embassy safety.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Pre-Departure Mobility Workshop]
Officer: Welcome, outbound explorers! Packing crisp thermals and valid passports stays easy—thriving smoothly inside unfamiliar university cultures takes honest preparation across five crucial points.
Officer: [[Q11]] First, anticipate the famous W-Curve emotional rollercoaster: exciting Week One honeymoon wonder frequently dips cleanly around Week Six into gray homesickness once rainy winter dusk hits early—join campus rowing or pottery clubs early to bridge lonely mid-terms!
Officer: [[Q12]] Second, skip airport currency kiosks charging sneaky ten-percent conversion markups—open digital fee-free multi-currency debit cards at home beforehand and pack twenty euros emergency paper cash strictly tucked inside zipper pockets!
Officer: [[Q13]] Notice academic surprises abroad too: continental European oral exam panels often test crisp spoken defense live across chalkboards rather than silent multiple-choice bubble sheets—rehearse speaking definitions aloud with study partners!
Officer: [[Q14]] Check smartphone SIM compatibility ahead of boarding trains: verify phones stand unlocked by your domestic carrier beforehand so local monthly student data SIMs snap straight in cheaply!
Officer: [[Q15]] Remember strict local bicycle laws if studying across Netherlands or Scandinavian towns: cycling home evenings missing working front headlights triggers instant sixty-euro police street fines!
Officer: [[Q16]] Log your overseas hostel address voluntarily onto our Travel Registry Portal before unpacking bags—if severe regional rail strikes or winter storms erupt, our emergency welfare team reaches travelers fast!
Officer: [[Q17]] Check host pharmacy allergies honestly before stepping onto planes: bring generic chemical ingredient names—not brand box logos—written cleanly by your home doctor in case familiar labels vanish abroad!
Officer: [[Q18]] Never translate local grades naively straight across spreadsheets—an honest Swedish “Pass with Distinction” often translates top-tier honours back home despite looking plain on unfamiliar parchment!
Officer: [[Q19]] Remember returning home culture-shock surprises next January too: closest domestic friends may smile politely yet nod off after ten minutes of foreign train stories—lean gladly onto returning alumni mixers!
Officer: [[Q20]] Collect embossed green Emergency Contact Fridge Cards outside Lecture Hall Door Two before heading to visa desks.`,
        questions: [
          {
            id: 'cd_listening_m19_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Roughly which week of overseas terms does early exchange excitement frequently dip into quiet winter homesickness: Week ______',
            correctAnswer: 'SIX',
            explanation: 'Honeymoon wonder frequently dips cleanly around Week Six.'
          },
          {
            id: 'cd_listening_m19_lq12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why does the officer discourage exchanging cash at airport currency booths?',
            options: [
              'A. Airport counters impose steep hidden conversion markups around 10%',
              'B. Airport kiosks dispense torn regional banknotes rejected by buses',
              'C. Digital hostel apps refuse all physical currency deposits',
              'D. Student banks lock international ATM withdrawals for 48 hours'
            ],
            correctAnswer: 'A',
            explanation: 'Airport kiosks charge sneaky ten-percent conversion markups.'
          },
          {
            id: 'cd_listening_m19_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Assessment format common in continental European faculties requiring aloud spoken problem defense: ______ exam panels',
            correctAnswer: 'ORAL',
            explanation: 'Oral exam panels test crisp spoken defense live across chalkboards.'
          },
          {
            id: 'cd_listening_m19_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Device status travelers must confirm with domestic phone providers before foreign data SIMs work abroad: ______',
            correctAnswer: 'UNLOCKED',
            explanation: 'Verify phones stand unlocked by domestic carrier beforehand.'
          },
          {
            id: 'cd_listening_m19_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Missing bicycle equipment earning instant sixty-euro evening police fines in Scandinavia or Holland: working front ______',
            correctAnswer: 'HEADLIGHTS',
            explanation: 'Missing working front headlights triggers instant sixty-euro fines.'
          },
          {
            id: 'cd_listening_m19_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'Why should students upload host addresses onto the Travel Registry Portal on arrival?',
            options: [
              'A. Automated postal systems forward printed scholarship checks cleanly',
              'B. Partner mentors schedule surprise welcome food basket deliveries',
              'C. City tax offices waive annual foreign resident waste fees',
              'D. University emergency welfare teams can locate travelers during transport strikes or storms'
            ],
            correctAnswer: 'D',
            explanation: 'Lets welfare teams reach travelers fast if strikes or storms erupt.'
          },
          {
            id: 'cd_listening_m19_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Which type of medical name—not brand marketing boxes—should doctors write down for foreign pharmacy visits?',
            correctAnswer: 'GENERIC CHEMICAL INGREDIENT NAMES',
            explanation: 'Bring generic chemical ingredient names written cleanly by your doctor.'
          },
          {
            id: 'cd_listening_m19_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What academic misunderstanding happens when interpreting foreign exchange grade transcripts literally?',
            options: [
              'A. Pass-fail language credits fail to match numerical GPA weighting',
              'B. Top foreign honours labels look plain compared to domestic number scales',
              'C. Laboratory attendance marks drop overall credit totals accidentally',
              'D. Autumn exam resits appear silently as missing semester grades'
            ],
            correctAnswer: 'B',
            explanation: 'Top foreign honours often look plain on unfamiliar parchment.'
          },
          {
            id: 'cd_listening_m19_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Campus group providing empathetic ears when domestic friends grow tired of travel tales next January: ______ mixers',
            correctAnswer: 'ALUMNI',
            explanation: 'Lean gladly onto returning alumni mixers.'
          },
          {
            id: 'cd_listening_m19_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Door number locating embossed green Emergency Contact Fridge Cards outside Lecture Hall: Door ______',
            correctAnswer: 'TWO',
            explanation: 'Outside Lecture Hall Door Two.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Microscopic Dating of Volcanic Lake-Core Ash Tephra Shards',
        audioScenario:
          'Geology undergraduates Nora and Liam analyze microscopic volcanic glass slivers extracted from mud lake beds with Professor Hale.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Geochronology Tephra Seminar]
Prof. Hale: Welcome in, Nora and Liam! Let us audit the microprobe and radiocarbon numbers from your volcanic ash lake core!
Nora: [[Q21]] Thrilling news—our glassy pale-grey volcanic ash band pulled cleanly from Core Four at 4.2 metres depth matches distant Icelandic eruptions remarkably tightly!
Liam: [[Q22]] However, firing narrow electron microprobe beams across tiny delicate glass shards suddenly showed puzzling low totals—almost seven percent missing sodium metal inside thin flake rims!
Prof. Hale: Classic electron beam boil-off! Thin wet volcanic glass sweats volatile mobile sodium ions sideways instantaneously if crisp narrow stationary electron beams burn one spot too fiercely!
Nora: [[Q23]] Caught it—switching from a tight two-micron pinpoint spot outward toward a softer sweeping ten-micron defocused beam locked sodium counts steady at exact textbook Icelandic percentages!
Prof. Hale: Clean instrument mastery! Before probing, how did you wash those fragile glass shards free of dark lake peat first?
Nora: [[Q24]] Washing muddy organic peat smoothly through twenty-five-micron brass sieves isolated forty crisp clear bubble-wall glass shards shining cleanly beneath polarized slides!
Prof. Hale: Brilliant preparation! Also remember checking lake sediment compaction—how did carbon-14 dating hold up right beside that ash stripe?
Liam: [[Q25]] Watch out—two dark aquatic moss twigs just above the ash dated 600 years TOO OLD compared to neighboring dry shoreline seeds sitting at identical depth!
Prof. Hale: [[Q26]] Wait—why do underwater lake mosses look centuries older than real calendar sunlight? Submerged lake moss drinks dissolved ancient limestone bedrock carbon—whereas floating shoreline leaves breathe fresh pure sky air!
Nora: [[Q27]] Exactly—we tossed submerged aquatic moss twigs out cleanly from age-depth graphs and anchored chronological curves exclusively onto wind-blown terrestrial birch seeds!
Prof. Hale: [[Q28]] Brilliant catch of a classic reservoir offset—always watch carefully for underwater carbon distortion!
Prof. Hale: [[Q29]] Highlight that 600-year aquatic moss bias prominently on Slide Seven ahead of Friday’s Geological Colloquium so examiners spot critical discipline immediately!
Liam: [[Q30]] Added clearly—and Nora verified all secondary rhyolite glass standard tables cleanly against Museum Reference Vial 12!`,
        questions: [
          {
            id: 'cd_listening_m19_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Depth inside Core Four muddy lake sediment where clear Icelandic volcanic ash bands appeared: ______ metres',
            correctAnswer: '4.2',
            explanation: 'Pulled from Core Four at 4.2 metres depth.'
          },
          {
            id: 'cd_listening_m19_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Alkali metal element mysteriously underestimated by seven percent under initial narrow electron beams: ______',
            correctAnswer: 'SODIUM',
            explanation: 'Showed almost seven percent missing sodium metal.'
          },
          {
            id: 'cd_listening_m19_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How did Nora fix electron microprobe beam depletion of delicate glass ash rims?',
            options: [
              'A. Widened the sharp 2-micron beam to a gentler 10-micron defocused spot',
              'B. Coated slides twice with thicker conductive carbon vapor layers',
              'C. Chilled sample holders inside liquid nitrogen vacuum mounts',
              'D. Lowered accelerating probe voltages strictly by fifty percent'
            ],
            correctAnswer: 'A',
            explanation: 'Switched to a softer sweeping ten-micron defocused beam.'
          },
          {
            id: 'cd_listening_m19_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Fine brass sieve opening size used to wash muddy peat away cleanly from volcanic glass bubbles: ______-micron',
            correctAnswer: 'TWENTY-FIVE',
            explanation: 'Washed peat smoothly through twenty-five-micron brass sieves.'
          },
          {
            id: 'cd_listening_m19_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Apparent false extra age shown by submerged lake moss twigs relative to shoreline birch seeds: ______ years',
            correctAnswer: '600',
            explanation: 'Aquatic moss twigs dated 600 years too old.'
          },
          {
            id: 'cd_listening_m19_lq26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why did submerged aquatic moss specimens yield misleadingly ancient radiocarbon dates?',
            options: [
              'A. Acidic volcanic ash dissolved recent carbon isotopes out of stems',
              'B. Cold bottom water slowed cellular bacterial decay by five centuries',
              'C. Deep lake mud compaction compressed fossil cellulose rings falsely',
              'D. Underwater plants absorbed dissolved ancient carbon from old limestone lake beds'
            ],
            correctAnswer: 'D',
            explanation: 'Submerged moss drinks dissolved ancient limestone bedrock carbon.'
          },
          {
            id: 'cd_listening_m19_lq27',
            number: 27,
            type: 'short_answer',
            questionText: 'Which reliable wind-blown plant fossils anchored Nora and Liam’s clean radiocarbon depth curve?',
            correctAnswer: 'TERRESTRIAL BIRCH SEEDS',
            explanation: 'Anchored curves exclusively onto terrestrial birch seeds.'
          },
          {
            id: 'cd_listening_m19_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Technical term Professor Hale used for the aquatic moss carbon error: ______ offset',
            correctAnswer: 'RESERVOIR',
            explanation: 'Brilliant textbook reservoir offset catch.'
          },
          {
            id: 'cd_listening_m19_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Colloquium presentation slide designated to spotlight the 600-year moss bias explicitly: Slide ______',
            correctAnswer: 'SEVEN',
            explanation: 'Highlight bias prominently on Slide Seven.'
          },
          {
            id: 'cd_listening_m19_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Museum reference control glass standard vial checked by Nora to verify rhyolite probe accuracy: Vial ______',
            correctAnswer: '12',
            explanation: 'Checked cleanly against Museum Reference Vial 12.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Magma Chemistry, Caldera Dynamics & Modern Volcano Warnings',
        audioScenario:
          'A volcanologist lectures on silica viscosity, trapped volcanic gases, radar satellite ground swelling, and lahar mudflow alerts.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Volcanology Lecture]
Lecturer: Tourists snapping cheerful photos beside glowing red Hawaiian rivers of runny basalt lava rarely grasp why sleeping grey conical mountains like Mount St. Helens or Vesuvius suddenly shatter skyward in cataclysmic explosions!
Lecturer: [[Q31]] That explosive personality split hinges cleanly on two subterranean molten ingredients: sticky silicon-oxygen chain richness—called silica viscosity—paired with trapped pressurized dissolved water steam!
Lecturer: [[Q32]] Hot runny Hawaiian basalt carries low silica chains, letting underground steam bubbles rise and burp peacefully outward as bright glowing fountains—creating broad gentle sloping shield volcanoes!
Lecturer: [[Q33]] By stark contrast, stiff doughy sticky rhyolite magma chokes volcanic throats shut like thick cold honey—trapping scalding steam upward until mountain domes blow sideways faster than supersonic jetliner speeds!
Lecturer: [[Q34]] Crucially, violent blast size never kills purely via red flowing lava—towering ash clouds rain abrasive microscopic rock glass capable of clogging jetliner turbine engines mid-flight across entire continents!
Lecturer: [[Q35]] Closer down wooded valleys lurks an even deadlier volcanic silent killer called a lahar: scorching pyroclastic ash melting summit glaciers instantaneously into raging concrete-thick mud rivers burying downstream towns in minutes!
Lecturer: [[Q36]] Fortunately, restless volcanoes rarely detonate totally silently anymore—modern observatories watch swelling slopes sharply from orbital radar satellites deploying InSAR interferometry! Comparing orbital radar echoes weeks apart reveals centimetre-scale mountain dome swelling long before bare human eyes notice a single cracked asphalt road!
Lecturer: [[Q37]] Meanwhile below clouds, brave field volcanologists drive along dusty flank roads tracking rising plumes of pungent sulfur dioxide gas escaping deep fresh magma!
Lecturer: [[Q38]] To measure that invisible gas continuously even under mountain cloud decks, patrol trucks carry lightweight portable ultraviolet spectrometers!
Lecturer: [[Q39]] Yet early forecasting faces agonizing human false-alarm traps: evacuating half a million coastal families unnecessarily costs fortunes and breeds fatal evacuation fatigue when slow lava chambers quietly stall underground!
Lecturer: [[Q40]] Combining continuous seismic tremor networks, satellite radar bulge maps, and calm community lahar drills turns lethal unpredictable volcanoes into manageable watchable neighbors.`,
        questions: [
          {
            id: 'cd_listening_m19_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Molten mineral property governed by long silicon-oxygen chains dictating magma stickiness: silica ______',
            correctAnswer: 'VISCOSITY',
            explanation: 'Hinges cleanly on silica viscosity and trapped steam.'
          },
          {
            id: 'cd_listening_m19_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Broad gently sloping volcanic mountain profiles formed by low-silica runny basalt lava: ______ volcanoes',
            correctAnswer: 'SHIELD',
            explanation: 'Creates broad gentle sloping shield volcanoes.'
          },
          {
            id: 'cd_listening_m19_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why do high-silica sticky rhyolite domes erupt explosively rather than pouring smoothly outward?',
            options: [
              'A. Cold ocean rainwater seeps deep into shallow coastal magma conduits',
              'B. Iron-heavy basalt sinks beneath buoyant rhyolite crusts rapidly',
              'C. Thick viscous lava plugs gas vents until soaring steam shatters mountain rocks',
              'D. Rapid mountain cooling contracts dome pillars into brittle fractures'
            ],
            correctAnswer: 'C',
            explanation: 'Sticky rhyolite traps pressurized steam until domes blow sideways.'
          },
          {
            id: 'cd_listening_m19_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Modern high-altitude mechanical danger posed across continents by airborne microscopic abrasive volcanic glass ash: ______ engines',
            correctAnswer: 'JETLINER',
            explanation: 'Capable of clogging jetliner turbine engines mid-flight.'
          },
          {
            id: 'cd_listening_m19_lq35',
            number: 35,
            type: 'short_answer',
            questionText: 'What rapid concrete-thick mudflood tears down valleys when hot eruptions melt snowy mountain caps?',
            correctAnswer: 'LAHAR',
            explanation: 'Deadlier volcanic killer called a lahar.'
          },
          {
            id: 'cd_listening_m19_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Spaceborne radar technique capable of spotting subtle centimetre-scale swelling across dormant volcano slopes: ______ interferometry',
            correctAnswer: 'INSAR',
            explanation: 'Satellites deploying InSAR interferometry.'
          },
          {
            id: 'cd_listening_m19_lq37',
            number: 37,
            type: 'summary_completion',
            questionText: 'Field roadside optical spectrometers measure rising plumes of pungent ______ gas ascending from fresh deep magma.',
            correctAnswer: 'SULFUR DIOXIDE',
            explanation: 'Tracking rising plumes of pungent sulfur dioxide gas.'
          },
          {
            id: 'cd_listening_m19_lq38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Light wavelength spectrum analyzed by portable roadside gas spectrometers beneath cloudy mountain flanks: ______',
            correctAnswer: 'ULTRAVIOLET',
            explanation: 'Drive lightweight portable ultraviolet spectrometers along roads.'
          },
          {
            id: 'cd_listening_m19_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What major social setback complicates ordering mass city evacuations whenever volcanoes first rumble?',
            options: [
              'A. Mountain railway bridges close automatically during mild seismic tremors',
              'B. Repeated false evacuations cause severe public cynicism and compliance fatigue',
              'C. Satellite radar images stall behind humid equatorial rainclouds',
              'D. Toxic sulfur vapors disable gasoline rescue coach engines quickly'
            ],
            correctAnswer: 'B',
            explanation: 'Evacuating millions unnecessarily breeds fatal evacuation fatigue.'
          },
          {
            id: 'cd_listening_m19_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which combination closes the lecture as the key to saving lives beside active volcanoes?',
            options: [
              'A. Concrete mountain-base diversion walls plus ocean cooling sprays',
              'B. Drilling controlled relief vents along stable shield crater rims',
              'C. Restricting human housing permanently beyond twenty kilometres of ridges',
              'D. Integrating seismic tremors, satellite radar deformation, and rehearsed community alerts'
            ],
            correctAnswer: 'D',
            explanation: 'Seismic tremor networks, satellite radar maps, and calm community lahar drills.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 20: Environmental Charity Fundraiser & Space Astronomy Seminar
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_m20',
    testNumber: 20,
    testType: 'mock',
    title: 'CD-IELTS Listening Mock 20: Environmental Charity Fundraiser & Space Astronomy Seminar',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Environmental Charity Fundraiser & Space Astronomy Seminar.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Organizing a Campus Environmental Charity Fun-Run',
        audioScenario:
          'A university student committee president calls GreenHorizon Wildlife Trust Events Office to reserve marquee tents and marshalling gear for a charity 5K.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 1 - Section 1: Wildlife Charity Fundraiser Desk]
Officer: Good afternoon, GreenHorizon Wildlife Trust Events Support, Sophie speaking. How can I help?
Caller: [[Q1]] Hi Sophie! Our campus eco-society is organizing a Saturday morning 5K park run raising money for otter habitats and needs starter banners plus charity collection buckets. My surname is Whitaker, spelled W-H-I-T-A-K-E-R.
Officer: [[Q2]] Wonderful energy, Mr. Whitaker! First, check our marquee pitch loan service: our charity lends sturdy four-by-four-metre green canvas pop-up tents completely free—provided you book van delivery ten days beforehand!
Caller: [[Q3]] Ten days beforehand gives us plenty of time! How does the Trust handle race entry water bottles so zero plastic cups blow into park hedges? Rather than paper throwaways, ask runners beforehand to carry refill pouches past two large stainless water bowser tanks—or hire our washable bamboo finisher cups!
Officer: [[Q4]] Definitely borrowing the washable bamboo cups! Could we set up a silent charity cake raffle table beside finish lines to boost donations? Homemade cakes sell brilliantly—simply display clear laminated allergy ingredient cards flagging nuts, dairy, and wheat beside every tray!
Caller: [[Q5]] Good allergy reminder! Do volunteers also borrow wireless contactless card-tap readers from headquarters for cashless walkers? Yes—we pack two fully charged SumUp card readers cleanly inside your kit box—simply connect via venue 4G phone hotspots!
Officer: [[Q6]] Awesome! What minimum age qualifies runners for the main woodland five-kilometre loop? Runners aged sixteen and over join solo freely, whereas lively juniors aged eleven to fifteen must jog closely beside one registered adult guardian!
Caller: [[Q7]] Fair safety balance! Should sudden sprained ankles happen along gravel park bends, must student committees hire private paramedics? For runs under 300 entries, certified campus St. John First-Aid student volunteers satisfy charity insurance rules cleanly!
Officer: [[Q8]] Check park sound permits too before queuing celebratory upbeat dance loudspeakers at 9:00 AM: Park Ranger rules allow low portable acoustic megaphones solely for start announcements until 9:30 AM!
Caller: [[Q9]] Easily respected—acoustic megaphones till 9:30 AM! Where should returning student vans drop muddy tents back Monday morning? Unload dry kit neatly inside GreenHorizon Warehouse Bay Three facing Station Road!
Officer: [[Q10]] Let me lock your otter fun-run event kit cleanly under Charity Permit Code GH-204.`,
        questions: [
          {
            id: 'cd_listening_m20_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student eco-society organizer surname: ______',
            correctAnswer: 'WHITAKER',
            explanation: 'Spelled W-H-I-T-A-K-E-R.'
          },
          {
            id: 'cd_listening_m20_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Minimum advance days needed to reserve free 4x4m green charity marquee delivery vans: ______ days',
            correctAnswer: 'TEN',
            explanation: 'Book van delivery ten days beforehand.'
          },
          {
            id: 'cd_listening_m20_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Sustainable reusable material of finish-line drink cups available for charity hire: ______',
            correctAnswer: 'BAMBOO',
            explanation: 'Hire our washable bamboo finisher cups.'
          },
          {
            id: 'cd_listening_m20_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'What laminated documentation must sit beside homemade charity cake trays?',
            correctAnswer: 'ALLERGY INGREDIENT CARDS',
            explanation: 'Display clear laminated allergy ingredient cards flagging nuts, dairy, and wheat.'
          },
          {
            id: 'cd_listening_m20_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Mobile network link needed on race day to operate the charity’s two contactless SumUp card readers: ______',
            correctAnswer: '4G',
            explanation: 'Connect via venue 4G phone hotspots.'
          },
          {
            id: 'cd_listening_m20_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Minimum solo entry age for joining the main 5K park run without an adult companion: ______',
            correctAnswer: 'SIXTEEN',
            explanation: 'Runners aged sixteen and over join solo freely.'
          },
          {
            id: 'cd_listening_m20_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What medical cover satisfies charity insurance rules for fun-runs below 300 entries?',
            options: [
              'A. Certified campus St. John First-Aid student volunteers on course',
              'B. One hired municipal ambulance crew waiting near finish banners',
              'C. Two off-duty hospital nurses staffing refreshment marquees',
              'D. Automated park defibrillators mounted every kilometre'
            ],
            correctAnswer: 'A',
            explanation: 'Certified campus St. John First-Aid student volunteers satisfy rules cleanly.'
          },
          {
            id: 'cd_listening_m20_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Morning hour until which Park Rangers restrict start-line sound solely to low portable megaphones: ______ AM',
            correctAnswer: '9:30',
            explanation: 'Allow low megaphones solely for start announcements until 9:30 AM.'
          },
          {
            id: 'cd_listening_m20_lq9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Warehouse drop-off bay number for returning clean dry charity kit Monday morning: Bay ______',
            correctAnswer: 'THREE',
            explanation: 'Unload neatly inside GreenHorizon Warehouse Bay Three.'
          },
          {
            id: 'cd_listening_m20_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Confirmed otter charity fun-run permit code: ______',
            correctAnswer: 'GH-204',
            explanation: 'Charity Permit Code GH-204.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Course Steward Briefing for the Woodland 5K Charity Run',
        audioScenario:
          'An event safety marshal briefs student stewards along woodland race junctions on eco-friendly trail paint, cyclist lead sweeps, and sweep-team cleanup.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 2 - Section 2: Charity Fun-Run Marshal Briefing]
Coordinator: Morning, marshals! Thanks for turning out bright and early for GreenHorizon’s Otter 5K—let us review five trail habits keeping runners safe and ancient woodland spotless!
Coordinator: [[Q11]] First, walk straight past toxic spray paint tins inside equipment crates: mark crisp hairpin fork turns strictly using bright white washable playground chalk powder or tie fluttering cotton bunting ribbons cleanly!
Coordinator: [[Q12]] Second, watch our Lead Escort Cyclist riding quietly five metres ahead of speeding front sprinters—she carries a clear ringing brass thumb bell warning surprised weekend dog walkers gently off narrow clay paths!
Coordinator: [[Q13]] Stand alert at Checkpoint Four by Old Stone Bridge: slippery damp moss patches narrow railings there cleanly single-file, so call out “Keep Left, Single File!” loudly ahead of approaching runner packs!
Coordinator: [[Q14]] Check our eco-friendly Finisher Medal basket beside Tent Two: rather than heavy zinc metal medallions flown halfway round Earth, every finisher receives one pressed wildflower seed-paper badge ready to sprout bluebells in backyard flowerpots!
Coordinator: [[Q15]] Watch timing chip rules closely if excited participants cross finish arches carrying sleeping dogs or babies in strollers: push strollers cleanly inside relaxed Wave Two starting four minutes behind competitive front athletes!
Coordinator: [[Q16]] Remember hydration table courtesy at Three-Kilometre Pond Bend: crush dropped bamboo drink cups softly sideways into wire hoops rather than scattering empty stacks across grassy frog ditches!
Coordinator: [[Q17]] Look carefully out for Tail-Walker Steward Tariq strolling calmly behind the absolute slowest walker—never pack down yellow direction arrows until Tariq’s bright orange vest clears your post!
Coordinator: [[Q18]] Check official park lost-property baskets inside Registration Tent One before leaving: runners endlessly drop fleece zip-ups and wireless earbud cases beside bag-drop benches!
Coordinator: [[Q19]] Remember our zero-waste sweep pledge at eleven thirty: pairs walking backward along gravel bends carry woven hessian sacks catching stray hairbands or dropped gel wrappers cleanly!
Coordinator: [[Q20]] Clip laminated yellow Marshal Whistle Lanyards onto hi-vis vests at Table Five before marching to stations.`,
        questions: [
          {
            id: 'cd_listening_m20_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Washable natural trail marker powder replacing permanent paint sprays at woodland hairpin bends: white ______ powder',
            correctAnswer: 'CHALK',
            explanation: 'Mark hairpin turns using washable playground chalk powder.'
          },
          {
            id: 'cd_listening_m20_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Distance maintained by the bell-ringing Lead Escort Cyclist ahead of fast front-running sprinters: ______ metres',
            correctAnswer: 'FIVE',
            explanation: 'Rides five metres ahead of speeding front sprinters.'
          },
          {
            id: 'cd_listening_m20_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Landmark at Checkpoint Four where marshals warn approaching packs into single file over slippery moss: Old Stone ______',
            correctAnswer: 'BRIDGE',
            explanation: 'Checkpoint Four stands by Old Stone Bridge.'
          },
          {
            id: 'cd_listening_m20_lq14',
            number: 14,
            type: 'short_answer',
            questionText: 'Which plantable keepsake replaces heavy imported metal medals for 5K charity finishers?',
            correctAnswer: 'PRESSED WILDFLOWER SEED-PAPER BADGE',
            explanation: 'Every finisher receives one pressed wildflower seed-paper badge.'
          },
          {
            id: 'cd_listening_m20_lq15',
            number: 15,
            type: 'multiple_choice',
            questionText: 'Why are parents pushing jogging strollers placed into Wave Two four minutes later?',
            options: [
              'A. Registration desks inspect stroller wheel locks before entry',
              'B. Separates wider strollers cleanly from fast sprinting athletic packs',
              'C. Allows photographers extra light along shaded start banners',
              'D. Keeps timing chips from double-scanning paired family runners'
            ],
            correctAnswer: 'B',
            explanation: 'Starts relaxed strollers behind competitive front athletes safely.'
          },
          {
            id: 'cd_listening_m20_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Location of Three-Kilometre Pond hydration station requiring bamboo cup wire-hoop sorting: ______ Bend',
            correctAnswer: 'POND',
            explanation: 'Hydration table at Three-Kilometre Pond Bend.'
          },
          {
            id: 'cd_listening_m20_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Signal apparel indicating Tail-Walker Tariq has swept past so marshals may safely gather yellow course arrows: bright ______ vest',
            correctAnswer: 'ORANGE',
            explanation: 'Never pack arrows until Tariq’s bright orange vest clears your post.'
          },
          {
            id: 'cd_listening_m20_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Tent hosting the official charity lost-property basket for dropped ear-buds and fleeces: Tent ______',
            correctAnswer: 'ONE',
            explanation: 'Lost-property baskets inside Registration Tent One.'
          },
          {
            id: 'cd_listening_m20_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Woven natural material of sweep sacks carried at 11:30 AM to collect stray litter wrappers: ______',
            correctAnswer: 'HESSIAN',
            explanation: 'Sweep pairs carry woven hessian sacks.'
          },
          {
            id: 'cd_listening_m20_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Setup table number issuing yellow Marshal Whistle Lanyards ahead of departure: Table ______',
            correctAnswer: 'FIVE',
            explanation: 'Collect lanyards at Table Five.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Auditing Exoplanet Transit Light Curves in Astrophysics Lab',
        audioScenario:
          'Astrophysics students Elena and Marcus consult Professor Sato on eliminating false-positive eclipsing binary stars from space-telescope light curves.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 3 - Section 3: Exoplanet Transit Data Critique]
Prof. Sato: Welcome back, Elena and Marcus! Your automated light-curve pipeline flagged seven tantalizing rhythmic starlight dips—yet two candidates look suspiciously tricky upon zooming tightly inward!
Elena: [[Q21]] Spot on! Candidate Star Four dipped crisply 1.2 percent every three days—looking initially like a classic gas-giant planet orbiting closely around an orange dwarf sun!
Marcus: [[Q22]] However, checking sharp high-resolution archival plates exposed one tiny faint red background star lurking less than two arcseconds away right inside our camera pixel aperture!
Prof. Sato: Classic blended eclipsing binary impostor! Explain clearly for Thursday’s examiners how one giant dark companion star eclipsing a dim distant neighbor creates fake miniature dips inside blurry pixels?
Elena: [[Q23]] Because bright foreground light dilutes that faint hidden background eclipse down cleanly—shrinking a massive fifty-percent binary eclipse into an innocent tiny one-percent drop mimicking a cozy planet!
Prof. Sato: Crystal clear physics! What did inspecting the transit shape and odd-versus-even dip depths reveal?
Marcus: [[Q24]] Inspecting the transit profile exposed shallow V-shaped notches rather than flat-bottomed U-shaped planetary transits!
Elena: [[Q25]] Plus zooming tenfold vertically exposed alternating odd-versus-even dips differing slightly by 0.08 percent!
Prof. Sato: [[Q26]] Smart diagnostic check! For your genuine top candidate Star Two, how did you confirm it using radial-velocity Doppler wobble spectra from La Palma Observatory?
Elena: [[Q27]] Already queried those spectra—Star Two’s tiny periodic wobble matches a crisp warm Neptune weighing twenty-two Earth masses without any nearby blending neighbors!
Prof. Sato: [[Q28]] Thrilling real exoplanet confirmation! Lead Friday’s seminar showcase with side-by-side U-shape versus V-shape dip overlays clearly labeled on Slide Three so classmates grasp visual vetting fast!
Marcus: [[Q29]] And we logged rejected Candidate Star Four transparently inside our False-Positive Appendix Table!
Elena: [[Q30]] Done—and Marcus uploaded clean Python phase-folding notebooks onto our Astronomy SharePoint Archive tonight!`,
        questions: [
          {
            id: 'cd_listening_m20_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Initial rhythmic starlight dip depth recorded for suspicious Candidate Star Four: ______ percent',
            correctAnswer: '1.2',
            explanation: 'Star Four dipped crisply 1.2 percent every three days.'
          },
          {
            id: 'cd_listening_m20_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Angular separation masking a hidden faint background neighbor within camera apertures: two ______',
            correctAnswer: 'ARCSECONDS',
            explanation: 'Lurking less than two arcseconds away inside pixel apertures.'
          },
          {
            id: 'cd_listening_m20_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How does a blended background eclipsing binary star mimic a tiny exoplanet dip?',
            options: [
              'A. Foreground bright dust rings scatter alternating infrared star hues',
              'B. Rapid pixel tracking drift smears long-exposure star trails evenly',
              'C. Bright foreground starlight dilutes deep background stellar eclipses into tiny drops',
              'D. Dark cool starspots spin identically beside bright equatorial bands'
            ],
            correctAnswer: 'C',
            explanation: 'Bright foreground light dilutes a fifty-percent eclipse down into a 1% drop.'
          },
          {
            id: 'cd_listening_m20_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Geometric dip letter shape betraying unequal grazing eclipsing stars vs flat-bottomed planetary U-transits: ______-shaped',
            correctAnswer: 'V',
            explanation: 'Shallow V-shaped notches rather than flat U-shaped transits.'
          },
          {
            id: 'cd_listening_m20_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Magnitude discrepancy separating alternating odd-even stellar dips after tenfold vertical zoom: ______ percent',
            correctAnswer: '0.08',
            explanation: 'Alternating dips differed slightly by 0.08 percent.'
          },
          {
            id: 'cd_listening_m20_lq26',
            number: 26,
            type: 'short_answer',
            questionText: 'Which observatory supplied radial-velocity Doppler wobble spectra verifying genuine planet Star Two?',
            correctAnswer: 'LA PALMA OBSERVATORY',
            explanation: 'Confirm using Doppler spectra from La Palma Observatory.'
          },
          {
            id: 'cd_listening_m20_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Measured planetary mass of warm Neptune candidate Star Two: ______ Earth masses',
            correctAnswer: 'TWENTY-TWO',
            explanation: 'Matches a warm Neptune weighing twenty-two Earth masses.'
          },
          {
            id: 'cd_listening_m20_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Seminar slide comparing flat planetary U-transits directly beside grazing stellar V-notches: Slide ______',
            correctAnswer: 'THREE',
            explanation: 'Side-by-side overlays clearly labeled on Slide Three.'
          },
          {
            id: 'cd_listening_m20_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'File section prescribed for documenting rejected Candidate Star Four transparently: ______ Table',
            correctAnswer: 'FALSE-POSITIVE APPENDIX',
            explanation: 'Drop Star Four into False-Positive Appendix Table.'
          },
          {
            id: 'cd_listening_m20_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Shared department repository storing Marcus’s Python phase-folding notebooks: Astronomy ______ Archive',
            correctAnswer: 'SHAREPOINT',
            explanation: 'Uploaded onto Astronomy SharePoint Archive.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Space Infrared Telescopes & Sniffing Alien Exoplanet Air',
        audioScenario:
          'An observational astronomer lectures on infrared space sunshields at Lagrange Point L2, transmission spectroscopy, and oxygen biosignature false alarms.',
        audioDurationSeconds: 235,
        transcript: `[Audio Track 4 - Section 4: Space Astronomy Lecture]
Lecturer: [[Q31]] Barely thirty years back, textbooks wondered quietly whether distant stars hosted any planets whatsoever beyond our cozy solar neighborhood—today astronomers have catalogued over five thousand alien worlds spinning across dusty galaxies! Yet merely ticking planetary orbits off checklists feels tame now; modern space telescopes pivot toward one breathtaking frontier: decoding chemical fingerprints drifting inside distant alien planetary atmospheres!
Lecturer: [[Q32]] Why flee dusty blue Earth skies entirely to read faint alien starlight? Earth’s own wet water vapor clouds soak infrared molecular colors greedily before ground mountaintop dishes catch single faint whispers!
Lecturer: [[Q33]] Consequently, delicate space infrared mirrors—like James Webb unfolding five shiny silver-coated Kapton sunshield kites across cold vacuum—park gracefully a million miles sunward at gravitationally balanced Point L2!
Lecturer: [[Q34]] Facing permanently away from blazing solar heat behind those papery kite sails, gold-plated beryllium telescope segments stay naturally chilled near minus 230 degrees Celsius without burning heavy liquid cryogens!
Lecturer: [[Q35]] How on Earth can distant blurry star spots reveal methane or carbon dioxide drifting ten light-years off? During split-second planetary crossings, thin fringes of starlight graze softly through outer planet skies—termed transmission spectroscopy!
Lecturer: [[Q36]] Specific airborne gas molecules steal tiny distinct rainbow wavelength notches cleanly out of passing starlight—printing unmistakable dark barcode absorption bands onto onboard spectrograph detectors!
Lecturer: [[Q37]] Early infrared sweeps already detected dazzling bizarre chemistries—including scorching molten-hot Jupiter giants shrouded in floating glass-silicate clouds plus boiling ocean worlds wrapped in thick carbon dioxide blankets!
Lecturer: [[Q38]] Yet sniffing tiny rocky Earth-sized twins poses brutal caution traps: finding faint oxygen gas barcodes alone isn’t instant slam-dunk alien tree proof—fierce stellar ultraviolet flares split lifeless ocean steam violently into false abiotic oxygen plumes!
Lecturer: [[Q39]] True astrobiologists therefore hunt rare simultaneous chemical imbalances—like seeing delicate unstable methane gas sparkling actively alongside abundant oxygen, which lifeless sterile volcanic geology swiftly extinguishes!
Lecturer: [[Q40]] Ultimately, uniting giant origami infrared space mirrors with humble atmospheric chemistry guards science cleanly against hasty miracles as humanity decodes distant pale blue horizons.`,
        questions: [
          {
            id: 'cd_listening_m20_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Approximate number of verified alien exoplanets now catalogued across distant stellar systems: ______ thousand',
            correctAnswer: 'FIVE',
            explanation: 'Catalogued over five thousand alien worlds.'
          },
          {
            id: 'cd_listening_m20_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why must astronomers launch infrared planet-hunting telescopes far beyond mountaintop ground domes?',
            options: [
              'A. Earth city streetlights saturate sensitive silicon sky pixels',
              'B. Planetary wind turbulence shakes wide thirty-metre mirrors unsteadily',
              'C. Terrestrial atmospheric water clouds absorb faint alien infrared gas wavelengths',
              'D. Radio broadcast satellites jam faint deep-space telemetry bands'
            ],
            correctAnswer: 'C',
            explanation: 'Earth water vapor clouds soak infrared colors before ground dishes catch whispers.'
          },
          {
            id: 'cd_listening_m20_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Foldable reflective polymer film forming five giant origami sunshield layers aboard Webb: ______',
            correctAnswer: 'KAPTON',
            explanation: 'Unfolding five shiny silver-coated Kapton sunshield kites.'
          },
          {
            id: 'cd_listening_m20_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Lightweight metal alloy coated with gold shaping Webb’s chilled cryogenic mirror segments: ______',
            correctAnswer: 'BERYLLIUM',
            explanation: 'Gold-plated beryllium telescope segments stay chilled near -230°C.'
          },
          {
            id: 'cd_listening_m20_lq35',
            number: 35,
            type: 'short_answer',
            questionText: 'Name the observational method reading chemical notches inside starlight filtering through planetary sky fringes:',
            correctAnswer: 'TRANSMISSION SPECTROSCOPY',
            explanation: 'Grazing starlight through planet skies is termed transmission spectroscopy.'
          },
          {
            id: 'cd_listening_m20_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Atmospheric gases carve unique dark absorption ______ bands from passing rainbow starlight wavelengths.',
            correctAnswer: 'BARCODE',
            explanation: 'Printing unmistakable dark barcode absorption bands.'
          },
          {
            id: 'cd_listening_m20_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Exotic rock-vapor cloud material detected swirling high inside scorching hot Jupiter skies: glass-______ clouds',
            correctAnswer: 'SILICATE',
            explanation: 'Shrouded in floating glass-silicate clouds.'
          },
          {
            id: 'cd_listening_m20_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why might detecting oxygen alone inside an alien atmosphere mislead excited life-hunters?',
            options: [
              'A. Intense star ultraviolet flares can split dead ocean steam into non-biological oxygen',
              'B. Cosmic dust grains mimic oxygen spectra across infrared channels',
              'C. Cold icy comets continually drop frozen oxygen rocks onto crater plains',
              'D. Internal planetary rock weathering absorbs nitrogen rapidly leaving pure air'
            ],
            correctAnswer: 'A',
            explanation: 'Ultraviolet flares split lifeless ocean steam violently into false oxygen plumes.'
          },
          {
            id: 'cd_listening_m20_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Unstable companion gas sought simultaneously alongside abundant oxygen as living chemical disequilibrium proof: ______',
            correctAnswer: 'METHANE',
            explanation: 'Hunt unstable methane gas sparkling actively alongside abundant oxygen.'
          },
          {
            id: 'cd_listening_m20_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What concluding stance does the astronomer recommend while decoding alien planetary horizons?',
            options: [
              'A. Prioritize visible sunlight imaging over slower infrared spectroscopy probes',
              'B. Launch automated interstellar radio beacons ahead of optical surveys',
              'C. Focus exclusively on gas giants rather than faint dim Earth-sized dots',
              'D. Pair giant space mirrors with rigorous atmospheric chemistry to avoid false claims'
            ],
            correctAnswer: 'D',
            explanation: 'Humble atmospheric chemistry guards cleanly against hasty miracles.'
          }
        ]
      }
    ]
  })
];
