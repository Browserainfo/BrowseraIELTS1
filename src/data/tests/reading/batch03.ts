/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_03: TestItem[] = [
  // =========================================================================
  // TEST 11 (MODERATE): cd_reading_p11 (Ancient Maya Hydraulic Reservoirs in Tikal)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p11',
    testNumber: 11,
    testType: 'practice',
    title: 'CD-IELTS Practice 11: Ancient Maya Hydraulic Reservoirs in Tikal',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on Classic Maya catchment paving, natural zeolite sand filters, and urban reservoir vulnerability.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Impermeable Plaza Pavements and Catchment Reservoirs at Tikal',
        subtitle: 'Turning porous limestone ridges into a high-yield urban water harvesting basin',
        text: `Paragraph A: Supporting tens of thousands of inhabitants during the Classic Maya zenith (600–800 CE), the urban core of Tikal in northern Guatemala faced an unforgiving hydrological paradox. Although seasonal rains dumped nearly one and a half meters of water annually between May and November, the city sat atop fractured karst limestone hills elevated far above surrounding swamps. Rather than resting beside a navigable river or shallow freshwater spring, Tikal's limestone bedrock drained rainfall underground within minutes unless intercepted deliberately at the surface.

Paragraph B: To survive a punishing five-month dry season from December through April, Maya architects transformed the monumental city center itself into a massive engineered catchment basin. Broad stone plazas, palace courtyards, and stepped pyramid terraces were meticulously graded at gentle slopes and sealed beneath burnished lime plaster—locally known as stucco. Rainwater striking impermeable plazas could no longer vanish into porous limestone crevices; instead, sheet runoff flowed swiftly through carved stone chutes directly into ten large earthen and stone reservoirs sculpted around the city perimeter.

Paragraph C: Excavations using airborne LiDAR laser mapping and sediment coring revealed the sheer storage capacity of this urban watershed. Collectively, Tikal's interconnected basins—including the Palace, Temple, and Perdido reservoirs—held more than nine hundred thousand cubic meters of water when filled after autumn storms. Engineered stone sluiceways allowed water managers to route surplus flow from higher hilltop tanks downward into agricultural terraces and lower residential neighborhoods during peak winter drought.

Paragraph D: Constructing durable reservoirs atop porous hills also demanded subtle geochemical sealing. Bedrock depressions alone would have leaked stored water steadily through underlying fissures. Geoarchaeologists sampling the base of the Perdido and Corriental reservoirs uncovered thick dark layers of fine smectite clay packed firmly atop exposed limestone. Because smectite swells significantly when saturated, this natural clay liner formed an almost watertight basin seal capable of retaining monsoon water through scorching April afternoons.

Paragraph E: Maintenance of these urban catchments formed a continuous civic enterprise tightly tied to royal authority. Regular dredging crews removed silt washed off neighboring limestone stairs, preventing suspended sediment from shrinking storage volume or burying spillway gates. By linking architectural splendor directly to dry-season drinking survival, Tikal's rulers turned hydraulic stewardship into a visible cornerstone of urban governance.`,
        questions: [
          {
            id: 'cd_reading_p11_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Tikal sat on fractured ______ hills that allowed natural rainwater to percolate downward quickly.',
            correctAnswer: 'LIMESTONE',
            explanation: 'Paragraph A notes Tikal sat atop fractured karst limestone hills.'
          },
          {
            id: 'cd_reading_p11_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Builders waterproofed monumental courtyards with smooth lime plaster called ______ to direct storm runoff.',
            correctAnswer: 'STUCCO',
            explanation: 'Paragraph B states plazas were sealed beneath burnished lime plaster locally known as stucco.'
          },
          {
            id: 'cd_reading_p11_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Airborne ______ scans helped archaeologists map the massive volume of Tikal\'s connected catchment tanks.',
            correctAnswer: 'LIDAR',
            explanation: 'Paragraph C cites excavations using airborne LiDAR laser mapping.'
          },
          {
            id: 'cd_reading_p11_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'When moistened, packed ______ expanded into a nearly watertight lining along tank floors.',
            correctAnswer: 'SMECTITE CLAY',
            explanation: 'Paragraph D explains smectite clay swells when saturated to form an almost watertight basin seal.'
          },
          {
            id: 'cd_reading_p11_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Laborers periodically cleared accumulated ______ from basin bottoms to maintain full seasonal capacity.',
            correctAnswer: 'SILT',
            explanation: 'Paragraph E notes dredging crews removed silt washed off neighboring limestone stairs.'
          },
          {
            id: 'cd_reading_p11_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Tikal enjoyed reliable year-round access to a major navigable river running through the city center.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states Tikal sat on limestone hills rather than beside a navigable river or shallow freshwater spring.'
          },
          {
            id: 'cd_reading_p11_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'All ten reservoirs at Tikal together held close to one million cubic meters of water at full capacity.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states the interconnected basins held more than 900,000 cubic meters of water when filled.'
          },
          {
            id: 'cd_reading_p11_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Corriental reservoir walls were reinforced using copper beams imported from western Mexico.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D discusses smectite clay lining in Perdido and Corriental without mentioning imported copper beams.'
          },
          {
            id: 'cd_reading_p11_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Gravity-fed sluice gates allowed water from upper basins to reach farms and houses lower down the slope.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C describes sluiceways routing surplus flow from higher hilltop tanks downward to terraces and neighborhoods.'
          },
          {
            id: 'cd_reading_p11_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'How many months did Tikal\'s severe annual dry season typically last?',
            correctAnswer: 'FIVE',
            explanation: 'Paragraph B specifies a punishing five-month dry season from December through April.'
          },
          {
            id: 'cd_reading_p11_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'How many large reservoirs collected rainwater around the perimeter of Tikal\'s urban core?',
            correctAnswer: 'TEN',
            explanation: 'Paragraph B notes sheet runoff flowed into ten large earthen and stone reservoirs.'
          },
          {
            id: 'cd_reading_p11_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why did Maya engineers grade and plaster ceremonial stone plazas at Tikal?',
            options: [
              'A. To prevent tropical rainfall from draining straight into porous limestone rock',
              'B. To make processional avenues softer for barefoot marathon runners',
              'C. To dry harvested maize crops above damp forest floors',
              'D. To reflect midday solar heat toward hillside salt marshes'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B explains plastered, graded plazas prevented water from vanishing into porous limestone and funneled runoff to reservoirs.'
          },
          {
            id: 'cd_reading_p11_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What property made smectite clay valuable for sealing Tikal\'s reservoir bottoms?',
            options: [
              'A. It hardened permanently into bright white marble when heated',
              'B. It absorbed toxic mercury compounds from palace workshops',
              'C. It killed surface mosquitoes before dry winter droughts began',
              'D. It swelled upon soaking with water to block subterranean bedrock cracks'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains smectite swells when saturated, forming an almost watertight seal over bedrock fissures.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Natural Zeolite Sand Filters and Ancient Water Purification',
        subtitle: 'Chemical evidence of volcanic mineral filtration in Corriental Reservoir',
        text: `Paragraph A: Storing warm stagnant rainwater in tropical open basins for five rainless months carries severe biological hazards. Left untreated, shallow reservoirs rapidly turn turbid with windblown dust, soil bacteria, harmful cyanobacteria blooms, and trace heavy metals washed off painted palace facades. Recent sediment excavations inside Tikal's Corriental reservoir—the city's cleanest municipal drinking source—uncovered surprising evidence that Maya engineers practiced sophisticated water purification centuries before modern filtration chemistry emerged in Europe.

Paragraph B: While examining sediment cores dating between roughly 200 BCE and 800 CE, interdisciplinary geoarchaeologist Kenneth Tankersley noticed unusual coarse layers of pale crystalline sand resting right at the reservoir's main inlet channel. Because Tikal sits inside a pure sedimentary limestone landscape devoid of volcanic rock, quartz pebbles and shiny crystalline minerals could not have washed off neighboring limestone hills naturally during rainstorms.

Paragraph C: X-ray diffraction mineralogy identified those exotic grains as a deliberate blend of clean crystalline quartz sand mixed with two volcanic zeolite minerals—clinoptilolite and mordenite. Modern industrial water-treatment plants still rely heavily on those exact zeolite minerals today because their porous, negatively charged microscopic crystal lattices behave like selective molecular sieves, trapping heavy metals, ammonia, and microscopic pathogens while allowing pure water molecules to pass unimpeded.

Paragraph D: Where did ancient Maya workers obtain volcanic filtration minerals inside a rock-poor limestone jungle? Petrographic trace-element matching traced the clinoptilolite and quartz deposits directly to weathered volcanic ash outcrops near Bajo de Azúcar, roughly thirty kilometers northeast of Tikal along an ancient upland ridge. Transporting tons of gritty volcanic sand across rugged forest trails without pack animals demanded coordinated labor gangs—demonstrating that city planners knowingly valued its purifying performance rather than scooping random riverbed gravel.

Paragraph E: Corriental's woven reed-mat barriers likely held coarse zeolite-quartz sand beds right where turbid urban runoff entered the tank. Water passing through these submerged mineral beds emerged clear, free of foul algal odors, and substantially lower in dissolved toxins. Sadly, other central basins such as the Palace reservoir lacked zeolite filtration beds—making Corriental a uniquely prized oasis of clean drinking water at the heart of the metropolis.`,
        questions: [
          {
            id: 'cd_reading_p11_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph identifies the specific thirty-kilometer supply source of volcanic minerals used in Tikal?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D traces the clinoptilolite and quartz deposits to Bajo de Azúcar, roughly 30 km northeast of Tikal.'
          },
          {
            id: 'cd_reading_p11_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph explains why modern water utilities use the same minerals found in Corriental?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes modern industrial treatment plants use clinoptilolite and mordenite as molecular sieves.'
          },
          {
            id: 'cd_reading_p11_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph explains why quartz sand could not have entered Corriental purely by natural local erosion?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains Tikal sits on sedimentary limestone devoid of volcanic rock, ruling out natural local washing.'
          },
          {
            id: 'cd_reading_p11_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph describes probable support structures holding mineral beds in place at the tank entrance?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E suggests woven reed-mat barriers held zeolite-quartz sand beds where urban runoff entered.'
          },
          {
            id: 'cd_reading_p11_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Stagnant tropical ponds risk turning cloudy with cyanobacteria and dissolved ______ washed from painted architecture.',
            correctAnswer: 'HEAVY METALS',
            explanation: 'Paragraph A notes trace heavy metals washed off painted palace facades.'
          },
          {
            id: 'cd_reading_p11_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Laboratory testing using ______ spectroscopy confirmed the presence of clinoptilolite and mordenite.',
            correctAnswer: 'X-RAY DIFFRACTION',
            explanation: 'Paragraph C identifies X-ray diffraction mineralogy.'
          },
          {
            id: 'cd_reading_p11_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Zeolite crystal networks carry negative electrical charges and act like microscopic ______ capturing dissolved contaminants.',
            correctAnswer: 'MOLECULAR SIEVES',
            explanation: 'Paragraph C states porous crystal lattices behave like selective molecular sieves.'
          },
          {
            id: 'cd_reading_p11_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Hauling heavy volcanic sand required organized human teams because the Classic Maya possessed no ______.',
            correctAnswer: 'PACK ANIMALS',
            explanation: 'Paragraph D states transporting sand without pack animals demanded coordinated labor gangs.'
          },
          {
            id: 'cd_reading_p11_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Unlike Corriental, central tanks such as the ______ reservoir did not include mineral filtration beds.',
            correctAnswer: 'PALACE',
            explanation: 'Paragraph E notes central basins such as the Palace reservoir lacked zeolite filtration beds.'
          },
          {
            id: 'cd_reading_p11_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'Volcanic quartz minerals occur abundantly underneath Tikal\'s limestone courtyards.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states Tikal sits inside a pure sedimentary limestone landscape devoid of volcanic rock.'
          },
          {
            id: 'cd_reading_p11_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'Chemical trace testing proved the filtration sand at Corriental originated northeast of the city.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D traces deposits to weathered volcanic ash outcrops near Bajo de Azúcar, 30 km northeast.'
          },
          {
            id: 'cd_reading_p11_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'Corriental workers imported clinoptilolite sand along coastal canoe routes from the Pacific Ocean.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D shows it came overland across forest trails from 30 km northeast near Bajo de Azúcar.'
          },
          {
            id: 'cd_reading_p11_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Modern tourists visiting Tikal are allowed to drink water directly from Corriental Reservoir.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Modern tourist drinking policies at Tikal are never discussed.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Cinnabar Contamination, Mega-Droughts, and Reservoir Abandonment',
        subtitle: 'Why Tikal\'s hydraulic lifeline buckled under compound climatic and cultural pressures',
        text: `Paragraph A: Despite centuries of ingenious hydraulic management, Tikal suffered rapid demographic collapse during the ninth century CE, its monumental plazas falling silent beneath advancing rainforest canopy. Early explanations often sought a single dramatic villain—foreign warfare, peasant rebellion, or sudden epidemic. Recent biochemical analyses of reservoir mud cores paint a more layered collapse narrative, revealing that cultural rituals, urban soil erosion, and prolonged climate instability intertwined fatally inside Tikal's central drinking basins.

Paragraph B: Surprisingly, chemical assays of Late Classic sediments inside the Palace and Temple reservoirs detected alarmingly elevated mercury concentrations—far above safe modern drinking limits. Maya artisans prized bright red cinnabar mineral pigment (mercuric sulfide) to adorn sacred jade carvings, royal tombs, and stucco temple facades. As torrential monsoon downpours scoured ceremonial plazas across decades, dissolved mercury leached steadily down plastered drainage chutes directly into elite central cisterns. Only residents relying on outlying zeolite-filtered Corriental escaped acute mercury exposure.

Paragraph C: Concurrently, paleoclimate stalagmite records from nearby Yucatan caves uncover severe multi-year precipitation droughts striking the southern Maya lowlands between roughly 820 and 910 CE. When consecutive summer monsoons failed to refill open shallow tanks, remaining ponded water warmed quickly, encouraging toxic blue-green algal blooms rich in microcystin liver toxins alongside concentrated mercury runoff.

Paragraph D: Rather than serving as an independent cause of societal collapse, contaminated central water eroded the symbolic legitimacy of Tikal's divine kingship. Maya rulers justified sacred tribute and monumental labor precisely as ritual stewards guaranteeing reliable harvests and clean rain. As royal cisterns turned toxic and dry while outlying commoner water sources proved insufficient for dense neighborhoods, public confidence dissolved, accelerating urban out-migration toward permanent rivers along coastal Belize and northern Yucatan.

Paragraph E: Tikal's experience offers sobering relevance for contemporary megacities confronting warming climates. Centralized infrastructure engineered brilliantly around predictable historical rainfall becomes dangerously brittle once multi-year droughts intersect with unmonitored urban runoff pollutants—reminding modern planners that resilient cities require decentralized backup sources alongside clean watershed protection.`,
        questions: [
          {
            id: 'cd_reading_p11_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Shifting from single-cause theories toward interlocking urban and climate stresses',
              'ii. How ceremonial red pigments poisoned central palace reservoirs',
              'iii. Modern cities warned against relying on fragile centralized runoff tanks',
              'iv. Multi-year droughts compounding water toxicity in late Classic times',
              'v. Why contaminated tanks undermined royal authority and sparked migration',
              'vi. Rebuilding ancient Tikal dams for modern agricultural irrigation'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A moves past single-villain collapse theories toward intertwined cultural, erosion, and climate factors.'
          },
          {
            id: 'cd_reading_p11_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Shifting from single-cause theories toward interlocking urban and climate stresses',
              'ii. How ceremonial red pigments poisoned central palace reservoirs',
              'iii. Modern cities warned against relying on fragile centralized runoff tanks',
              'iv. Multi-year droughts compounding water toxicity in late Classic times',
              'v. Why contaminated tanks undermined royal authority and sparked migration',
              'vi. Rebuilding ancient Tikal dams for modern agricultural irrigation'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B traces toxic mercury in Palace and Temple tanks to rain washing cinnabar red pigment off plazas.'
          },
          {
            id: 'cd_reading_p11_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Shifting from single-cause theories toward interlocking urban and climate stresses',
              'ii. How ceremonial red pigments poisoned central palace reservoirs',
              'iii. Modern cities warned against relying on fragile centralized runoff tanks',
              'iv. Multi-year droughts compounding water toxicity in late Classic times',
              'v. Why contaminated tanks undermined royal authority and sparked migration',
              'vi. Rebuilding ancient Tikal dams for modern agricultural irrigation'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C links stalagmite records of 820–910 CE droughts with algal microcystins and concentrated mercury.'
          },
          {
            id: 'cd_reading_p11_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Shifting from single-cause theories toward interlocking urban and climate stresses',
              'ii. How ceremonial red pigments poisoned central palace reservoirs',
              'iii. Modern cities warned against relying on fragile centralized runoff tanks',
              'iv. Multi-year droughts compounding water toxicity in late Classic times',
              'v. Why contaminated tanks undermined royal authority and sparked migration',
              'vi. Rebuilding ancient Tikal dams for modern agricultural irrigation'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph D shows toxic royal cisterns eroded kingship legitimacy and prompted out-migration toward coastal rivers.'
          },
          {
            id: 'cd_reading_p11_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Shifting from single-cause theories toward interlocking urban and climate stresses',
              'ii. How ceremonial red pigments poisoned central palace reservoirs',
              'iii. Modern cities warned against relying on fragile centralized runoff tanks',
              'iv. Multi-year droughts compounding water toxicity in late Classic times',
              'v. Why contaminated tanks undermined royal authority and sparked migration',
              'vi. Rebuilding ancient Tikal dams for modern agricultural irrigation'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph E warns contemporary cities that centralized runoff infrastructure turns brittle under multi-year drought and pollution.'
          },
          {
            id: 'cd_reading_p11_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'How did toxic mercury enter the Palace and Temple reservoirs at Tikal?',
            options: [
              'A. Enemy armies deliberately poured liquid mercury down hillside springs',
              'B. Rainwater washed red cinnabar pigment off decorated plazas and temple facades down drainage chutes',
              'C. Underground volcanic vents boiled natural ore beneath limestone beds',
              'D. Workers lined cracked clay filters with metallic mercury solder'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B states rain scoured bright red cinnabar pigment off plazas and temple facades down drainage chutes.'
          },
          {
            id: 'cd_reading_p11_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why did residents who depended on Corriental Reservoir suffer less mercury poisoning than Palace elites?',
            options: [
              'A. Corriental water stayed completely frozen inside stone caves',
              'B. Corriental sat outside Tikal\'s territory along Belizean sea cliffs',
              'C. Palace guards secretly traded pure water solely to coastal merchants',
              'D. Corriental utilized natural zeolite filtration beds lacking in central palace cisterns'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B notes only residents using outlying zeolite-filtered Corriental escaped acute mercury exposure.'
          },
          {
            id: 'cd_reading_p11_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'According to Paragraph D, how did failing reservoirs contribute politically to Tikal\'s abandonment?',
            options: [
              'A. Rulers\' inability to ensure clean dry-season water eroded sacred trust in royal leadership',
              'B. Farmers drowned royal engineers inside shallow silt beds',
              'C. Foreign kings offered free silver coins to residents who left Guatemala',
              'D. Heavy winter rainfall swept all stucco pyramids completely off hills'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains Maya rulers justified authority as stewards guaranteeing rain and water; failing cisterns broke public confidence.'
          },
          {
            id: 'cd_reading_p11_q35',
            number: 35,
            type: 'true_false_not_given',
            questionText: 'Ancient cave mineral formations in nearby Yucatan helped scientists date ninth-century regional droughts.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C mentions paleoclimate stalagmite records from nearby Yucatan caves documenting droughts between 820 and 910 CE.'
          },
          {
            id: 'cd_reading_p11_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Out-migrating Maya groups from Tikal avoided river valleys in Belize completely.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states urban out-migration moved toward permanent rivers along coastal Belize and northern Yucatan.'
          },
          {
            id: 'cd_reading_p11_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'Ancient Maya medical tablets explicitly recorded exact daily doses of microcystin liver toxins.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'The text mentions microcystin liver toxins detected via modern sediment/drought analysis, not ancient medical records.'
          },
          {
            id: 'cd_reading_p11_q38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which natural chemical mineral compound provided bright red cinnabar paint in Maya art?',
            correctAnswer: 'MERCURIC SULFIDE',
            explanation: 'Paragraph B defines cinnabar pigment as mercuric sulfide.'
          },
          {
            id: 'cd_reading_p11_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which harmful algal compounds flourished alongside concentrated mercury when shallow ponds warmed during droughts?',
            correctAnswer: 'MICROCYSTIN LIVER TOXINS',
            explanation: 'Paragraph C identifies toxic blue-green algal blooms rich in microcystin liver toxins.'
          },
          {
            id: 'cd_reading_p11_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'Besides coastal Belize, toward which region did many departing Tikal residents migrate?',
            correctAnswer: 'NORTHERN YUCATAN',
            explanation: 'Paragraph D names permanent rivers along coastal Belize and northern Yucatan.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 12 (MODERATE): cd_reading_p12 (Decision Fatigue and Behavioral Choice Heuristics)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p12',
    testNumber: 12,
    testType: 'practice',
    title: 'CD-IELTS Practice 12: Decision Fatigue and Behavioral Choice Heuristics',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on consumer trade-off exhaustion, empirical replication debates, and institutional choice architecture.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Choice Overload and Sequential Trade-Off Depletion',
        subtitle: 'Why making repeated minor selections erodes deliberate reasoning later in the day',
        text: `Paragraph A: Classical economic models long assumed that expanding consumer freedom—offering thirty varieties of jam or fifty mortgage options instead of two—strictly improves welfare by helping buyers locate optimal matches. Behavioral psychologists challenged that neat assumption throughout the late 1990s. When everyday decisions demand weighing unfamiliar trade-offs across price, durability, and subtle warranty clauses, each micro-choice draws slightly on finite conscious attention. Over dozens of consecutive selections, people increasingly fall back on effortless shortcuts rather than careful numerical analysis.

Paragraph B: Field studies inside large shopping centers illustrated how decision depletion unfolds over ordinary retail encounters. In controlled automotive showroom experiments, buyers configuring custom vehicles were asked to pick consecutively among dozens of interior trim shades, engine packages, and wheel designs. Consumers confronted first with complex forty-option trim menus grew noticeably less patient toward the end of the checklist—abruptly accepting expensive factory default packages instead of comparing modest upgrades rationally.

Paragraph C: Crucially, decision fatigue differs meaningfully from straightforward physical muscle tiredness or sleepiness. Walking briskly or sorting numbered cards effortlessly preserves executive reasoning sharp afterward. What selectively drains analytical capacity is resolving genuine value conflicts—moments where sacrificing one desirable attribute becomes unavoidable to secure another. Choosing between a slightly cheaper apartment with a noisy commute and a quiet flat straining one's monthly budget strains prefrontal comparison circuits far faster than mechanical clerical repetition.

Paragraph D: Retail marketers and software designers frequently exploit this cognitive rhythm through strategic menu sequencing. Online travel agencies and electronics retailers often place profitable add-on warranties, priority boarding fees, or deluxe accessories near the final checkout screen. By the time shoppers reach payment confirmation after selecting flights, seat rows, and luggage weights, mental vigilance is lowest—boosting impulse acceptance of high-margin default boxes left pre-checked on screen.

Paragraph E: Understanding trade-off depletion does not mean humans cannot make tough late-day decisions cleanly. Simple pre-commitment strategies—writing explicit maximum price thresholds beforehand, narrowing choices through objective filters early, or scheduling complex financial negotiations for fresh morning hours—dramatically curb mental fatigue before high-stakes deliberations begin.`,
        questions: [
          {
            id: 'cd_reading_p12_q1',
            number: 1,
            type: 'matching_information',
            questionText: 'Which paragraph cites a vehicle showroom experiment involving high-cost factory defaults?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B describes automotive showroom customers accepting expensive factory default packages after complex menus.'
          },
          {
            id: 'cd_reading_p12_q2',
            number: 2,
            type: 'matching_information',
            questionText: 'Which paragraph distinguishes conflict-heavy mental comparison from ordinary physical fatigue?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C contrasts genuine value conflicts against brisk walking and simple card sorting.'
          },
          {
            id: 'cd_reading_p12_q3',
            number: 3,
            type: 'matching_information',
            questionText: 'Which paragraph explains why e-commerce websites position lucrative extra options near final checkout?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains travel sites place add-on fees near final screens when shopper vigilance is lowest.'
          },
          {
            id: 'cd_reading_p12_q4',
            number: 4,
            type: 'matching_information',
            questionText: 'Which paragraph outlines practical planning methods to safeguard judgment during critical negotiations?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E recommends pre-commitment price caps, early filtering, and morning scheduling.'
          },
          {
            id: 'cd_reading_p12_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Traditional economic theory predicted that giving buyers thirty choices instead of two always raises satisfaction.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes classical models assumed expanding options strictly improves welfare.'
          },
          {
            id: 'cd_reading_p12_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Brisk walking drains prefrontal analytical judgment just as fast as picking between conflicting apartment leases.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states brisk walking or card sorting preserves executive reasoning sharp afterward, unlike genuine value conflicts.'
          },
          {
            id: 'cd_reading_p12_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Consumers exposed early to massive automotive option menus grew more likely to accept costly preset packages later.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states shoppers faced first with forty-option menus later accepted expensive factory default packages.'
          },
          {
            id: 'cd_reading_p12_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'European consumer courts banned pre-checked add-on airline luggage boxes across all travel websites in 2012.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No court rulings or 2012 European bans appear in Passage 1.'
          },
          {
            id: 'cd_reading_p12_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Mental comparison exhaustion prevents shoppers from ever using early screening rules successfully.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E notes simple pre-commitment filters and morning scheduling dramatically curb fatigue.'
          },
          {
            id: 'cd_reading_p12_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Making dozens of consecutive trade-offs pushes fatigued shoppers toward effortless mental ______.',
            correctAnswer: 'SHORTCUTS',
            explanation: 'Paragraph A states people increasingly fall back on effortless shortcuts.'
          },
          {
            id: 'cd_reading_p12_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Resolving unavoidable ______ between price and comfort strains prefrontal circuits faster than mechanical tasks.',
            correctAnswer: 'VALUE CONFLICTS',
            explanation: 'Paragraph C specifies resolving genuine value conflicts.'
          },
          {
            id: 'cd_reading_p12_q12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Online checkout pages boost add-on purchases partly by leaving profitable optional extras ______.',
            correctAnswer: 'PRE-CHECKED',
            explanation: 'Paragraph D cites high-margin default boxes left pre-checked on screen.'
          },
          {
            id: 'cd_reading_p12_q13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Setting explicit written spending ______ beforehand reduces vulnerability to late-stage choice overload.',
            correctAnswer: 'THRESHOLDS',
            explanation: 'Paragraph E recommends writing explicit maximum price thresholds beforehand.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Re-Examining Ego Depletion and High-Profile Replication Disputes',
        subtitle: 'Testing biological blood-glucose claims against motivational and scheduling explanations',
        text: `Paragraph A: During the early 2000s, a broader psychological theory called "ego depletion" offered an alluring metabolic explanation for decision fatigue. Psychologist Roy Baumeister proposed that human willpower operated like a physical battery consuming measurable amounts of brain glucose during self-control exercises. Following an initial study where volunteers forced to resist freshly baked cookies quit geometry puzzles sooner than radish eaters, researchers briefly touted sugary lemonade as an instant cure for strained judgment.

Paragraph B: Within a decade, however, independent laboratories struggled to reproduce both the glucose miracle and the broader ego-depletion effect consistently. A massive 2016 multi-university replication project spanning over two thousand participants across twenty-four laboratories failed to confirm reliable stamina loss following brief five-minute restraint tasks—sparking fierce methodological soul-searching across social psychology.

Paragraph C: Reappraisals soon uncovered subtler distortions hiding inside early celebrated field papers as well. Take the famous 2011 judicial study showing parole boards approved conditional releases far more frequently at morning start times than right before lunch breaks—a finding initially hailed as dramatic proof that hungry fatigued judges defaulted mechanically to denying parole. Subsequent statistical audits by operations researchers revealed a crucial scheduling confounder: court clerks routinely booked routine, multi-prisoner attorney sessions late before lunch breaks, whereas well-prepared unrepresented applicants appeared early in morning slots.

Paragraph D: Rather than discarding mental fatigue altogether, contemporary cognitive scientists have shifted away from simplistic sugar-fuel metaphors toward attention-allocation models. Neuroscientist Michael Inzlicht contends that sustained effort rarely runs out of literal biological fuel; instead, prolonged monotonous evaluation shifts internal motivation away from tedious error monitoring toward seeking immediate mental rewards or effortless defaults.

Paragraph E: Crucially, realistic stakes reveal clear asymmetry between artificial five-minute university puzzles and genuine professional exhaustion. Emergency-room physicians nearing the end of twelve-hour hospital shifts—unlike well-rested students completing ten-minute computer screens—measurably prescribe unnecessary broad-spectrum antibiotics more often during final afternoon consultations, proving authentic cumulative fatigue warrants serious institutional safeguards.`,
        questions: [
          {
            id: 'cd_reading_p12_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Explaining early willpower claims based on glucose fuel reserves',
              'ii. Replacing energy-tank metaphors with shifting mental motivation',
              'iii. Real-world twelve-hour hospital shifts reveal genuine fatigue costs',
              'iv. Uncovering hidden schedule bias behind famous parole board patterns',
              'v. Large multi-lab replication projects challenge brief willpower studies',
              'vi. Mandating afternoon chocolate breaks across university exam halls'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A describes Baumeister\'s glucose battery model and cookie-vs-radish willpower studies.'
          },
          {
            id: 'cd_reading_p12_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Explaining early willpower claims based on glucose fuel reserves',
              'ii. Replacing energy-tank metaphors with shifting mental motivation',
              'iii. Real-world twelve-hour hospital shifts reveal genuine fatigue costs',
              'iv. Uncovering hidden schedule bias behind famous parole board patterns',
              'v. Large multi-lab replication projects challenge brief willpower studies',
              'vi. Mandating afternoon chocolate breaks across university exam halls'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph B outlines the 2016 24-lab project failing to replicate brief five-minute ego-depletion tasks.'
          },
          {
            id: 'cd_reading_p12_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Explaining early willpower claims based on glucose fuel reserves',
              'ii. Replacing energy-tank metaphors with shifting mental motivation',
              'iii. Real-world twelve-hour hospital shifts reveal genuine fatigue costs',
              'iv. Uncovering hidden schedule bias behind famous parole board patterns',
              'v. Large multi-lab replication projects challenge brief willpower studies',
              'vi. Mandating afternoon chocolate breaks across university exam halls'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C shows clerk scheduling—not just judicial hunger—helped explain pre-lunch parole declines.'
          },
          {
            id: 'cd_reading_p12_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Explaining early willpower claims based on glucose fuel reserves',
              'ii. Replacing energy-tank metaphors with shifting mental motivation',
              'iii. Real-world twelve-hour hospital shifts reveal genuine fatigue costs',
              'iv. Uncovering hidden schedule bias behind famous parole board patterns',
              'v. Large multi-lab replication projects challenge brief willpower studies',
              'vi. Mandating afternoon chocolate breaks across university exam halls'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph D introduces Michael Inzlicht\'s motivational attention-allocation model replacing fuel metaphors.'
          },
          {
            id: 'cd_reading_p12_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Explaining early willpower claims based on glucose fuel reserves',
              'ii. Replacing energy-tank metaphors with shifting mental motivation',
              'iii. Real-world twelve-hour hospital shifts reveal genuine fatigue costs',
              'iv. Uncovering hidden schedule bias behind famous parole board patterns',
              'v. Large multi-lab replication projects challenge brief willpower studies',
              'vi. Mandating afternoon chocolate breaks across university exam halls'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph E contrasts brief student tests against overworked physicians prescribing unnecessary antibiotics late in shifts.'
          },
          {
            id: 'cd_reading_p12_q19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What did later statistical audits reveal about the famous 2011 parole board study?',
            options: [
              'A. Judges drank sugary beverages secretly behind courtroom curtains',
              'B. Hungry judges approved ninety percent more releases immediately before lunch',
              'C. Parole board verdicts were typed mistakenly by summer university interns',
              'D. Court clerks systematically scheduled different case types across morning and pre-lunch slots'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C states clerks routinely scheduled complex/routine multi-prisoner attorney sessions right before lunch, confounding raw time trends.'
          },
          {
            id: 'cd_reading_p12_q20',
            number: 20,
            type: 'multiple_choice',
            questionText: 'How does neuroscientist Michael Inzlicht explain declining performance on prolonged tedious tasks?',
            options: [
              'A. Neurons run permanently out of blood sugar after twenty minutes',
              'B. Attention gradually shifts from careful error checking toward effortless defaults or mental rewards',
              'C. Human eyes lose peripheral focus during indoor afternoon light',
              'D. Participants deliberately boycott laboratory studies costing over one hour'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D states prolonged monotonous evaluation shifts internal motivation away from tedious error monitoring toward immediate rewards/defaults.'
          },
          {
            id: 'cd_reading_p12_q21',
            number: 21,
            type: 'multiple_choice',
            questionText: 'Why do late-shift emergency-room prescribing records matter to the debate in Paragraph E?',
            options: [
              'A. They demonstrate doctors never suffer fatigue after twelve-hour schedules',
              'B. They prove antibiotics improve cognitive willpower during night surgery',
              'C. They confirm radishes restore physician accuracy faster than sugary drinks',
              'D. They show prolonged high-stakes shifts produce real behavioral lapses missed by five-minute campus tests'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E contrasts five-minute computer screens with 12-hour ER shifts leading to unnecessary antibiotic prescriptions.'
          },
          {
            id: 'cd_reading_p12_q22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which sweet beverage was briefly promoted in early studies as a fast willpower remedy?',
            correctAnswer: 'SUGARY LEMONADE',
            explanation: 'Paragraph A notes researchers briefly touted sugary lemonade.'
          },
          {
            id: 'cd_reading_p12_q23',
            number: 23,
            type: 'short_answer',
            questionText: 'Across how many research laboratories was the major 2016 replication project conducted?',
            correctAnswer: 'TWENTY-FOUR',
            explanation: 'Paragraph B states the project spanned over 2,000 participants across twenty-four laboratories.'
          },
          {
            id: 'cd_reading_p12_q24',
            number: 24,
            type: 'short_answer',
            questionText: 'How long are the emergency-room doctor shifts cited in Paragraph E?',
            correctAnswer: 'TWELVE-HOUR',
            explanation: 'Paragraph E specifies twelve-hour hospital shifts.'
          },
          {
            id: 'cd_reading_p12_q25',
            number: 25,
            type: 'fill_blank',
            questionText: 'In Baumeister\'s early study, volunteers who resisted baked cookies gave up sooner on ______ tasks.',
            correctAnswer: 'GEOMETRY PUZZLES',
            explanation: 'Paragraph A states cookie resisters quit geometry puzzles sooner than radish eaters.'
          },
          {
            id: 'cd_reading_p12_q26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Late-shift physicians wrote more unnecessary prescriptions for broad-spectrum ______.',
            correctAnswer: 'ANTIBIOTICS',
            explanation: 'Paragraph E notes physicians prescribe unnecessary broad-spectrum antibiotics late in shifts.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Designing Safer Institutional Choice Architecture',
        subtitle: 'Using defaults, checklists, and algorithmic guardrails in medicine, retirement, and aviation',
        text: `Paragraph A: Since cognitive bandwidth remains stubbornly finite under real-world workload pressures, organizational psychologists advocate redesigning workplaces around human limitations rather than demanding superhuman willpower. Legal scholar Cass Sunstein and behavioral economist Richard Thaler coined the term "choice architecture" to describe how framing menus, establishing thoughtful defaults, and structuring decision sequences guide individuals toward safer outcomes without removing personal liberty.

Paragraph B: Retirement savings policy demonstrates the extraordinary power of benign defaults. When corporations traditionally required new employees to read dense investment brochures and manually submit enrollment forms, nearly half of eligible junior staff delayed signing up for years—not out of dislike for saving, but from inertia amid confusing fund menus. After nations including the United Kingdom and New Zealand instituted "automatic enrollment" placing hires by default into diversified low-fee funds while permitting effortless opt-out, participation surged past eighty-five percent overnight.

Paragraph C: Healthcare safety relies equally on restructuring repetitive critical checklists so exhausted clinicians never rely purely on late-night memory. Surgical safety protocols pioneered globally by Atul Gawande verify essential steps—antibiotic timing, patient identity, surgical site marking—aloud prior to incision. Rather than insulting medical expertise, standardized pauses preserve scarce mental attention for unexpected intraoperative complications.

Paragraph D: Similarly, clinical decision-support software inside modern hospitals combats late-shift antibiotic over-prescribing by nudging habits cleanly. Requiring physicians to type a concise one-sentence justification whenever selecting broad-spectrum antibiotics—instead of clicking one-touch defaults—reduced inappropriate prescriptions by nearly twenty percent in urban outpatient trials without blocking urgent treatment whenever doctors judged exceptions necessary.

Paragraph E: Ethical critics rightly caution that invisible choice architecture can slide smoothly from helpful guidance into manipulation—so-called "dark patterns" nudging consumers toward hidden bank fees or unwanted subscriptions. Transparent governance therefore forms an essential safeguard: humane choice design must keep opt-out exits effortless, align defaults strictly with users' stated welfare, and openly document every pre-selected policy option.`,
        questions: [
          {
            id: 'cd_reading_p12_q27',
            number: 27,
            type: 'summary_completion',
            questionText: 'Sunstein and Thaler introduced ______ to show how structured menus improve safety without removing freedom.',
            correctAnswer: 'CHOICE ARCHITECTURE',
            explanation: 'Paragraph A explains Sunstein and Thaler coined the term "choice architecture."'
          },
          {
            id: 'cd_reading_p12_q28',
            number: 28,
            type: 'summary_completion',
            questionText: 'Before enrollment reforms, confusing pension brochures often triggered procrastination through simple ______.',
            correctAnswer: 'INERTIA',
            explanation: 'Paragraph B states half of junior staff delayed saving due to inertia amid confusing fund menus.'
          },
          {
            id: 'cd_reading_p12_q29',
            number: 29,
            type: 'summary_completion',
            questionText: 'Operating teams verify essential safety checks verbally before beginning ______.',
            correctAnswer: 'INCISION',
            explanation: 'Paragraph C notes surgical checklists verify steps aloud prior to incision.'
          },
          {
            id: 'cd_reading_p12_q30',
            number: 30,
            type: 'summary_completion',
            questionText: 'Outpatient clinics curbed unneeded antibiotics by prompting physicians to enter a short written ______.',
            correctAnswer: 'JUSTIFICATION',
            explanation: 'Paragraph D describes requiring physicians to type a concise one-sentence justification.'
          },
          {
            id: 'cd_reading_p12_q31',
            number: 31,
            type: 'summary_completion',
            questionText: 'Deceptive interfaces steering buyers into concealed recurring charges are criticized as ______.',
            correctAnswer: 'DARK PATTERNS',
            explanation: 'Paragraph E refers to manipulative design practices called "dark patterns."'
          },
          {
            id: 'cd_reading_p12_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Automatic pension enrollment forces every employee to stay permanently in the default retirement fund.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B specifies automatic enrollment permits effortless opt-out.'
          },
          {
            id: 'cd_reading_p12_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Standardized surgical checklists free up mental attention so teams can handle surprise operating-room issues.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states standardized pauses preserve scarce mental attention for unexpected intraoperative complications.'
          },
          {
            id: 'cd_reading_p12_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Hospital justification prompts completely prohibited clinicians from prescribing urgent broad-spectrum drugs.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states the prompt reduced inappropriate orders without blocking urgent treatment when doctors judged exceptions necessary.'
          },
          {
            id: 'cd_reading_p12_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Atul Gawande authored all UK pension enrollment regulations enacted after 2010.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C associates Atul Gawande with surgical safety protocols, not UK pension legislation.'
          },
          {
            id: 'cd_reading_p12_q36',
            number: 36,
            type: 'yes_no_not_given',
            questionText: 'Ethical choice architects should ensure opt-out routes stay easy to locate and publicize preset defaults clearly.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E insists humane choice design keeps opt-out exits effortless and openly documents pre-selected options.'
          },
          {
            id: 'cd_reading_p12_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did junior employees often skip pension sign-ups before automatic enrollment laws?',
            options: [
              'A. Dense investment brochures and complex menus induced passive inertia',
              'B. Companies fined new workers who submitted paper forms during probation',
              'C. New Zealand banks refused deposits from workers under thirty',
              'D. Employees unanimously preferred private cryptocurrency accounts'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B explains half delayed signing up from inertia amid dense brochures and confusing fund menus.'
          },
          {
            id: 'cd_reading_p12_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How did requiring a short typed explanation affect outpatient antibiotic orders?',
            options: [
              'A. Hospital pharmacy wait times doubled across surgical departments',
              'B. Physicians stopped diagnosing bacterial infections altogether after noon',
              'C. Inappropriate orders dropped nearly twenty percent while emergency care stayed unobstructed',
              'D. Patients demanded one-click digital antibiotic prescriptions'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D reports inappropriate prescriptions fell nearly 20% without blocking urgent care.'
          },
          {
            id: 'cd_reading_p12_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What distinguishes ethical choice architecture from manipulative "dark patterns"?',
            options: [
              'A. Ethical design hides opt-out buttons deep inside annual tax contracts',
              'B. Ethical design keeps opt-out exits effortless, transparent, and centered on user welfare',
              'C. Ethical design bans all optional purchases across hospital websites',
              'D. Ethical design eliminates written menus completely'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E contrasts manipulative dark patterns against effortless opt-outs, alignment with user welfare, and transparency.'
          },
          {
            id: 'cd_reading_p12_q40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'Which overarching principle unites Paragraphs B, C, and D?',
            options: [
              'A. Complex checklists slow down retirement enrollment unnecessarily',
              'B. Training staff to skip sleep eliminates surgical errors completely',
              'C. Thoughtful structural nudges protect decision quality when human attention is taxed',
              'D. Governments must abolish personal choice in medicine and finance'
            ],
            correctAnswer: 'C',
            explanation: 'Across retirement, surgery, and prescribing, well-framed architecture guards judgment under limited attention without stripping autonomy.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 13 (MODERATE): cd_reading_p13 (Icelandic Geothermal Energy & Magma Drilling)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p13',
    testNumber: 13,
    testType: 'practice',
    title: 'CD-IELTS Practice 13: Icelandic Geothermal Energy & Magma Drilling',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on mid-ocean ridge heat harvesting, supercritical magma drilling, and Basaltic CO2 mineralization.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Tapping the Mid-Atlantic Ridge for Urban Heat and Power',
        subtitle: 'How Iceland transitioned from imported fossil fuels to subsurface steam networks',
        text: `Paragraph A: Few modern nations owe as much of their daily comfort to plate tectonics as Iceland. Straddling the divergent boundary where the North American and Eurasian tectonic plates steadily pull apart along the Mid-Atlantic Ridge, this sub-Arctic island sits atop thin volcanic crust pierced by countless fractures. Rainwater and glacial melt percolate miles downward through porous basaltic rock until encountering magma-heated chambers—emerging back upward as pressurized steam and scalding mineral water.

Paragraph B: Yet Iceland's contemporary geothermal infrastructure did not emerge effortlessly from abundant springs. Until the mid-twentieth century, nearly three-quarters of Icelandic homes still burned imported British coal and oil stoves for warmth through harsh Atlantic winters, leaving Reykjavik shrouded in thick winter soot. The abrupt shock of the 1973 international oil embargo accelerated long-standing municipal investments into deep steel pipelines linking suburban geothermal boreholes directly to urban apartment radiators.

Paragraph C: Today, roughly ninety percent of Icelandic households receive continuous space heating through clean district hot-water loops pumped from underground reservoirs beneath Nesjavellir and Hellisheidi. Beyond domestic heating, high-temperature steam turbines supply nearly a quarter of the nation's electricity alongside hydroelectric dams. Cheap, steady baseload power subsequently attracted energy-intensive industrial smelters producing aluminum from imported bauxite—making clean geothermal energy the backbone of Iceland's export economy.

Paragraph D: Engineering subterranean piping systems inside volcanically active terrain introduces distinct chemical challenges. Scalding geothermal brine rising from two-kilometer depths arrives saturated with dissolved silica, hydrogen sulfide gas, and corrosive chloride salts. As pressure and temperature drop suddenly inside surface turbines, dissolved silica precipitates rapidly into rock-hard opal scale capable of choking narrow valve pipes within weeks unless engineers carefully stabilize fluid pressure and acidity.

Paragraph E: Furthermore, Icelandic power operators discovered early that pumping steam recklessly out of a single reservoir causes underground water pressure to sag steadily over decades. Modern stations therefore treat geothermal fields as renewable loops rather than bottomless wells—re-injecting cooled condensed water back down peripheral boreholes to replenish reservoir pressure and sustain output across future generations.`,
        questions: [
          {
            id: 'cd_reading_p13_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Iceland sits along a tectonic boundary where two major crustal plates drift away from each other.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states Iceland straddles the divergent boundary where North American and Eurasian plates pull apart.'
          },
          {
            id: 'cd_reading_p13_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Reykjavik residents switched completely away from imported coal heating before 1900.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B notes until the mid-twentieth century nearly three-quarters of homes burned imported coal and oil stoves.'
          },
          {
            id: 'cd_reading_p13_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Geothermal turbines provide Iceland with nearly three-quarters of its total electrical power.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states geothermal steam turbines supply nearly a quarter of Iceland\'s electricity alongside hydroelectric dams.'
          },
          {
            id: 'cd_reading_p13_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Re-injecting cooled water back underground helps maintain reservoir steam pressure over long timescales.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph E explains stations re-inject cooled condensed water down peripheral boreholes to replenish reservoir pressure.'
          },
          {
            id: 'cd_reading_p13_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Hellisheidi engineers sell bottled geothermal mineral water to European supermarkets.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C mentions Hellisheidi district heating without mentioning commercial bottled water sales.'
          },
          {
            id: 'cd_reading_p13_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What historical event hastened Reykjavik\'s broad expansion of geothermal residential heating networks?',
            options: [
              'A. Discovery of giant domestic coal veins near Nesjavellir in 1920',
              'B. Sudden fuel supply disruptions during the 1973 global oil embargo',
              'C. Closure of every hydroelectric dam across northern Iceland',
              'D. European laws banning electric apartment heaters in winter'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B states the 1973 international oil embargo accelerated municipal investments into geothermal district pipelines.'
          },
          {
            id: 'cd_reading_p13_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why must turbine operators monitor fluid pressure and acidity carefully when geothermal brine cools?',
            options: [
              'A. Hydrogen sulfide gas freezes solid inside summer radiator loops',
              'B. Cold rainwater turns porous basalt instantly into soft clay mud',
              'C. Aluminum exports corrode nearby radiator steel through static charge',
              'D. Dissolved silica can solidify rapidly into hard scale that blocks valves and pipes'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D states cooling geothermal fluid causes dissolved silica to precipitate into rock-hard opal scale choking narrow pipes.'
          },
          {
            id: 'cd_reading_p13_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What export industry grew in Iceland largely due to affordable steady geothermal and hydro electricity?',
            options: [
              'A. Smelting imported bauxite into finished aluminum',
              'B. Deep-sea porcelain manufacturing',
              'C. Exporting high-purity silicon chips to North America',
              'D. Operating refrigerated glass greenhouses for tropical pineapples'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C notes cheap steady power attracted energy-intensive smelters producing aluminum from imported bauxite.'
          },
          {
            id: 'cd_reading_p13_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What happened when early Icelandic stations extracted geothermal steam rapidly without returning water?',
            options: [
              'A. Nearby volcanoes immediately erupted ash clouds over Reykjavik',
              'B. District apartment radiators warmed beyond safe boiling limits',
              'C. Underground reservoir pressure gradually declined over decades',
              'D. British oil importers lowered winter coal prices sharply'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E notes pumping recklessly out of one reservoir causes underground water pressure to sag steadily over decades.'
          },
          {
            id: 'cd_reading_p13_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Which porous volcanic rock allows surface meltwater to seep miles underground in Iceland?',
            correctAnswer: 'BASALTIC ROCK',
            explanation: 'Paragraph A describes porous basaltic rock.'
          },
          {
            id: 'cd_reading_p13_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Roughly what percentage of Icelandic homes today rely on geothermal water loops for heating?',
            correctAnswer: 'NINETY PERCENT',
            explanation: 'Paragraph C states roughly ninety percent of Icelandic households receive clean district hot-water heating.'
          },
          {
            id: 'cd_reading_p13_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which dissolved mineral forms hard opal deposits inside cooling geothermal pipes?',
            correctAnswer: 'SILICA',
            explanation: 'Paragraph D identifies dissolved silica precipitating rapidly into rock-hard opal scale.'
          },
          {
            id: 'cd_reading_p13_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Through which type of wells do modern geothermal plants return cooled water underground?',
            correctAnswer: 'PERIPHERAL BOREHOLES',
            explanation: 'Paragraph E specifies peripheral boreholes.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Drilling Into Supercritical Magma Zones (IDDP)',
        subtitle: 'Accidentally hitting molten rhyolite at Krafla and unlocking ultra-dense energy output',
        text: `Paragraph A: While conventional geothermal wells extract warm groundwater around 250 to 300 degrees Celsius from depths near two kilometers, engineers with the Iceland Deep Drilling Project (IDDP) pursued a bolder frontier in 2009: reaching four-to-five-kilometer depths to harvest "supercritical" water. Above 374 degrees Celsius and pressures exceeding 220 atmospheres, water enters a strange supercritical fluid phase—neither strictly liquid nor ordinary vapor—capable of packing nearly ten times more extractable thermal energy per borehole than conventional geothermal wells.

Paragraph B: Unexpectedly, the project's inaugural borehole at Krafla Caldera—IDDP-1—encountered far fiercer subterranean temperatures much earlier than seismic surveys predicted. At just 2,104 meters depth, rotary drill bits suddenly jammed as molten rhyolitic magma above nine hundred degrees Celsius surged up into the borehole bottom. Quickly quenching the melt with cold drilling water created glassy volcanic shards that sealed the chamber tip safely, turning an alarming accident into an unprecedented stationary magma laboratory.

Paragraph C: Careful pressure testing over the next two years astonished geothermal engineers. Even perched millimeters above solidifying magma, IDDP-1 discharged bone-dry superheated steam roaring upward at 450 degrees Celsius and extraordinary pressure—generating enough thermal capacity to drive roughly thirty-five megawatts of electrical generation from a single wellbore, compared with three to five megawatts from typical neighboring boreholes.

Paragraph D: Harnessing magma-adjacent energy nonetheless proved mechanically brutal. Acidic volcanic gases—particularly hydrogen chloride dissolved inside superheated steam—severely corroded standard carbon-steel wellhead valves whenever fluid cooled slightly toward condensation. In 2012, sustained thermal expansion stressed casing couplings beyond design limits, forcing engineers to seal IDDP-1 permanently before installing a full permanent power turbine.

Paragraph E: Lessons from Krafla directly reshaped IDDP-2 on the Reykjanes Peninsula, which successfully penetrated 4,659 meters in 2017 to reach authentic 426-degree-Celsius supercritical conditions. By employing flexible titanium-alloy wellhead linings alongside continuous high-rate cold injection cooling, researchers aim to convert risky volcanic anomalies into durable ultra-dense clean power plants applicable from Japan to East Africa's Rift Valley.`,
        questions: [
          {
            id: 'cd_reading_p13_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why extreme temperatures make supercritical water ten times richer in energy',
              'ii. Unexpected encounter with molten rock above two kilometers depth',
              'iii. Corrosive gases and metal stress force closure of the first experimental hole',
              'iv. Record output from one borehole perched just above crystallizing magma',
              'v. Deeper follow-up drilling and corrosion-resistant alloys on Reykjanes Peninsula',
              'vi. Abandoning deep drilling across Japan and East Africa'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A defines supercritical water above 374°C/220 atm packing ~10x the thermal energy per well.'
          },
          {
            id: 'cd_reading_p13_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why extreme temperatures make supercritical water ten times richer in energy',
              'ii. Unexpected encounter with molten rock above two kilometers depth',
              'iii. Corrosive gases and metal stress force closure of the first experimental hole',
              'iv. Record output from one borehole perched just above crystallizing magma',
              'v. Deeper follow-up drilling and corrosion-resistant alloys on Reykjanes Peninsula',
              'vi. Abandoning deep drilling across Japan and East Africa'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B recounts IDDP-1 jamming unexpectedly in 900°C rhyolitic magma at 2,104 meters depth.'
          },
          {
            id: 'cd_reading_p13_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why extreme temperatures make supercritical water ten times richer in energy',
              'ii. Unexpected encounter with molten rock above two kilometers depth',
              'iii. Corrosive gases and metal stress force closure of the first experimental hole',
              'iv. Record output from one borehole perched just above crystallizing magma',
              'v. Deeper follow-up drilling and corrosion-resistant alloys on Reykjanes Peninsula',
              'vi. Abandoning deep drilling across Japan and East Africa'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C reports 450°C superheated steam yielding ~35 megawatts from a single IDDP-1 well.'
          },
          {
            id: 'cd_reading_p13_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why extreme temperatures make supercritical water ten times richer in energy',
              'ii. Unexpected encounter with molten rock above two kilometers depth',
              'iii. Corrosive gases and metal stress force closure of the first experimental hole',
              'iv. Record output from one borehole perched just above crystallizing magma',
              'v. Deeper follow-up drilling and corrosion-resistant alloys on Reykjanes Peninsula',
              'vi. Abandoning deep drilling across Japan and East Africa'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D details hydrogen chloride corrosion and thermal expansion forcing permanent sealing of IDDP-1.'
          },
          {
            id: 'cd_reading_p13_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Cold drilling fluid rapidly cooled rising Krafla melt into solid ______ that sealed off the well base.',
            correctAnswer: 'VOLCANIC SHARDS',
            explanation: 'Paragraph B notes quenching the melt created glassy volcanic shards sealing the chamber tip.'
          },
          {
            id: 'cd_reading_p13_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'IDDP-1 discharged bone-dry superheated steam roughly equivalent to thirty-five ______ of electric output.',
            correctAnswer: 'MEGAWATTS',
            explanation: 'Paragraph C gives capacity equivalent to thirty-five megawatts from a single wellbore.'
          },
          {
            id: 'cd_reading_p13_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Aggressive ______ gas within cooling vapor ate away carbon-steel wellhead equipment.',
            correctAnswer: 'HYDROGEN CHLORIDE',
            explanation: 'Paragraph D names hydrogen chloride dissolved inside superheated steam.'
          },
          {
            id: 'cd_reading_p13_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Engineers closed IDDP-1 permanently in 2012 after heat strained outer ______.',
            correctAnswer: 'CASING COUPLINGS',
            explanation: 'Paragraph D explains sustained thermal expansion stressed casing couplings beyond design limits.'
          },
          {
            id: 'cd_reading_p13_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Follow-up well IDDP-2 incorporates flexible ______ wellhead linings to resist aggressive volcanic acids.',
            correctAnswer: 'TITANIUM-ALLOY',
            explanation: 'Paragraph E specifies flexible titanium-alloy wellhead linings.'
          },
          {
            id: 'cd_reading_p13_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph mentions two international volcanic regions outside Iceland that might benefit from IDDP techniques?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E names Japan and East Africa\'s Rift Valley.'
          },
          {
            id: 'cd_reading_p13_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph defines the exact temperature and pressure thresholds creating supercritical water?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A specifies above 374°C and pressures exceeding 220 atmospheres.'
          },
          {
            id: 'cd_reading_p13_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph contrasts normal well output of 3–5 MW against magma-heated steam capacity?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C contrasts 35 megawatts from IDDP-1 against 3–5 megawatts from typical neighboring boreholes.'
          },
          {
            id: 'cd_reading_p13_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph describes an unintentional drill encounter occurring shallower than pre-drill seismic forecasts?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B states IDDP-1 struck magma at 2,104 m, far shallower than the planned 4–5 km depth.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Turning Emissions Into Stone via Basaltic Carbon Mineralization',
        subtitle: 'Evaluating Iceland\'s Carbfix process for permanent carbon dioxide sequestration',
        text: `Paragraph A: Even renewable geothermal power stations emit non-trivial streams of volcanic carbon dioxide and noxious hydrogen sulfide lifted naturally from fractured bedrock alongside steam. At Hellisheidi power station southeast of Reykjavik, operators seeking to scrub emissions pioneered an unconventional geological shortcut called Carbfix. Instead of compressing purified CO2 gas into dry supercritical pipelines for long-distance storage in depleted oil reservoirs—a technology plagued by high leakage anxiety—Carbfix dissolves exhaust gases straight into copious water first.

Paragraph B: Pumping sparkling CO2-charged water half a kilometer underground into fractured porous basalt triggers rapid geochemical rock formation. Unlike chemically inert sandstone layers favored by classic oil-field carbon storage, fresh volcanic basalt abounds in reactive calcium, magnesium, and iron minerals. Dissolved carbonic acid slowly etches surrounding basalt grains, releasing positive metallic ions that immediately combine with dissolved carbonate to crystallize solid chalk-white calcite and dolomite minerals inside tiny rock pores.

Paragraph C: Core samples drilled two years after initial 2012 injections astounded earth scientists accustomed to thinking geological mineralization required millennia. Chemical isotopic tracing proved over ninety-five percent of injected CO2 had permanently solidified into stable stone carbonates within less than twenty-four months—eliminating risks of buoyant gas leaking backward up abandoned drill pipes.

Paragraph D: Critics nevertheless point to clear hydrological constraints restricting universal deployment. Dissolving each single ton of captured CO2 demands roughly twenty-five tons of water alongside abundant porous volcanic bedrock. While rainy coastal Iceland enjoys plentiful groundwater near vast basaltic shields, arid inland coal regions in interior continents lack both reactive basalt formations and excess freshwater supplies to replicate Carbfix directly—though offshore seawater injection beneath submarine basalt ridges offers an intriguing marine workaround.

Paragraph E: Rather than claiming volcanic mineralization alone can neutralize global fossil emissions, geologists view basaltic injection as a secure niche tool. Combined with direct air capture fans at installations like Orca and Mammoth near Hellisheidi, rapid carbonate mineralization demonstrates that greenhouse carbon can be locked solidly beneath stone roofs—provided energy inputs come exclusively from surplus zero-carbon power.`,
        questions: [
          {
            id: 'cd_reading_p13_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Geothermal power stations never release any carbon dioxide gas from deep volcanic rock.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states geothermal stations emit non-trivial streams of volcanic CO2 and hydrogen sulfide.'
          },
          {
            id: 'cd_reading_p13_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Carbfix injects CO2 dissolved in water rather than dry compressed carbon dioxide gas.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A contrasts dry supercritical gas pipelines against Carbfix dissolving exhaust gases straight into water.'
          },
          {
            id: 'cd_reading_p13_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Scientists expected volcanic carbon mineralization in Hellisheidi to require several thousand years before testing cores.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C notes earth scientists were accustomed to thinking geological mineralization required millennia, yet 95% solidified within 24 months.'
          },
          {
            id: 'cd_reading_p13_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Arid continental coal hubs possess abundant excess freshwater to replicate Carbfix cheaply on land.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D warns arid inland coal regions lack both reactive basalt formations and excess freshwater supplies.'
          },
          {
            id: 'cd_reading_p13_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Orca and Mammoth facilities in Iceland already capture more carbon annually than all European steel factories combined.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E names Orca and Mammoth without comparing their tonnage to European steel factories.'
          },
          {
            id: 'cd_reading_p13_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Volcanic basalt contains reactive calcium, iron, and ______ ions that react readily with dissolved acid.',
            correctAnswer: 'MAGNESIUM',
            explanation: 'Paragraph B states fresh basalt abounds in reactive calcium, magnesium, and iron minerals.'
          },
          {
            id: 'cd_reading_p13_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Dissolved carbonic acid helps grow solid ______ and dolomite crystals filling microscopic rock cavities.',
            correctAnswer: 'CALCITE',
            explanation: 'Paragraph B describes solid chalk-white calcite and dolomite minerals.'
          },
          {
            id: 'cd_reading_p13_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Scientists verified rapid mineral conversion within two years via specialized ______ tracing.',
            correctAnswer: 'ISOTOPIC',
            explanation: 'Paragraph C states chemical isotopic tracing proved over 95% solidified.'
          },
          {
            id: 'cd_reading_p13_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Dry inland regions might bypass groundwater scarcity through submarine ridges permitting ______ injection.',
            correctAnswer: 'SEAWATER',
            explanation: 'Paragraph D suggests offshore seawater injection beneath submarine basalt ridges.'
          },
          {
            id: 'cd_reading_p13_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why does basalt outperform classic sandstone reservoirs in preventing long-term gas leaks?',
            options: [
              'A. Basalt freezes carbon dioxide instantly into solid dry ice pellets',
              'B. Reactive minerals in basalt chemically lock dissolved CO2 into solid carbonate rock within two years',
              'C. Sandstone dissolves completely whenever touched by clean rainwater',
              'D. Basalt strata always lie directly under five kilometers of solid ocean ice'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraphs B–C show basalt\'s reactive metals turn 95% of dissolved CO2 into solid calcite/dolomite within 24 months.'
          },
          {
            id: 'cd_reading_p13_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How much water does the Carbfix dissolution step require for every metric ton of captured carbon dioxide?',
            options: [
              'A. Approximately five tons of boiling oil',
              'B. Nearly ninety-five tons of pure liquid silica',
              'C. Approximately twenty-five tons of water',
              'D. Less than one kilogram of distilled rainwater'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states dissolving each ton of captured CO2 demands roughly twenty-five tons of water.'
          },
          {
            id: 'cd_reading_p13_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What condition does Paragraph E emphasize as vital for pairing direct air capture with mineralization?',
            options: [
              'A. Powering capture facilities strictly with surplus zero-carbon electricity',
              'B. Using offshore diesel generators near Atlantic shipping lanes',
              'C. Replacing volcanic basalt gravel with imported quartz sand',
              'D. Pumping unpurified hydrogen sulfide gas straight into city radiators'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph E specifies energy inputs must come exclusively from surplus zero-carbon power.'
          },
          {
            id: 'cd_reading_p13_q39',
            number: 39,
            type: 'true_false_not_given',
            questionText: 'Carbfix solidifies carbon dioxide gas by compressing it dry into abandoned continental oil reservoirs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A contrasts Carbfix\'s water-dissolution basalt process against dry supercritical injection in depleted oil fields.'
          },
          {
            id: 'cd_reading_p13_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Over ninety-five percent of injected CO2 at the 2012 test site became solid stone carbonates in under two years.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C confirms over 95% permanently solidified within less than 24 months.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 14 (MODERATE): cd_reading_p14 (Coral Reef Thermal Resiliency & Symbiodinium Genetics)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p14',
    testNumber: 14,
    testType: 'practice',
    title: 'CD-IELTS Practice 14: Coral Reef Thermal Resiliency & Symbiodinium Genetics',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on algal symbiosis breakdown, heat-tolerant Durusdinium clades, and reef restoration trade-offs.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Cellular Stress and the Mechanics of Coral Bleaching',
        subtitle: 'Why rising sea surface temperatures sever an ancient marine symbiosis',
        text: `Paragraph A: Healthy tropical coral reefs rank among Earth's richest biological engines, supporting nearly a quarter of all marine fish species despite flourishing across nutrient-poor turquoise waters. That productivity rests on an intimate microscopic alliance: soft coral animals house millions of photosynthetic single-celled dinoflagellate algae—commonly grouped within the family Symbiodiniaceae—packed densely inside gastrodermal cells. Through daily photosynthesis, resident algae transfer up to ninety percent of fixed sugars and amino acids to their coral hosts in exchange for shelter and mineral nitrogen.

Paragraph B: Ironically, this life-sustaining partnership collapses rapidly under modest marine heatwaves. When local sea surface temperatures exceed seasonal summer averages by merely one to two degrees Celsius for several consecutive weeks, coral reefs experience acute oxidative stress. Contrary to older assumptions blaming coral hosts first, physiological chlorophyll fluorescence monitoring demonstrates that stress typically begins inside the algal symbiont's photosynthetic machinery.

Paragraph C: Under excessive warmth paired with intense tropical sunlight, algal chloroplasts struggle to process absorbed photons cleanly. Damaged electron transport chains leak unstable reactive oxygen species—chemically aggressive free radicals capable of puncturing delicate host cell membranes and damaging vital DNA. Faced with toxic internal leakage from its photosynthetic partner, the coral polyp executes a drastic emergency survival reflex: actively expelling the distressed algae from host tissue through cellular exocytosis.

Paragraph D: Stripped of brown-golden pigmented algae, coral colonies appear starkly white—resembling sun-bleached limestone skeletons showing cleanly through transparent animal tissue. Contrary to common media portrayals, a bleached coral is not immediately dead. Polyps continue breathing and capturing tiny drifting zooplankton with translucent tentacles, capable of re-acquiring fresh symbionts if coastal waters cool quickly within weeks.

Paragraph E: Prolonged marine heatwaves lasting months, however, starve host colonies of their primary energy pipeline. Weakened bleached skeletons rapidly succumb to white-band infectious diseases or become smothered beneath fast-growing fleshy macroalgae, transforming complex calcium architectures into flat, barren rubble banks within a single warm season.`,
        questions: [
          {
            id: 'cd_reading_p14_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Tropical coral ecosystems support roughly one-fourth of all marine fish species despite poor surrounding water nutrients.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states coral reefs support nearly a quarter of all marine fish species across nutrient-poor waters.'
          },
          {
            id: 'cd_reading_p14_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Thermal bleaching breakdowns originate inside coral host bones long before algal chloroplasts experience stress.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states chlorophyll fluorescence reveals stress typically begins inside the algal symbiont\'s photosynthetic machinery.'
          },
          {
            id: 'cd_reading_p14_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'A visibly white bleached coral colony is already completely dead.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D clarifies a bleached coral is not immediately dead; polyps continue breathing and capturing zooplankton.'
          },
          {
            id: 'cd_reading_p14_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Rapidly cooling oceans within weeks allow surviving bleached polyps to recruit replacement algae.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D confirms polyps are capable of re-acquiring fresh symbionts if coastal waters cool quickly.'
          },
          {
            id: 'cd_reading_p14_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Red Sea coral larvae routinely survive freezing temperatures down to minus five degrees Celsius.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No freezing tests or Red Sea larvae appear anywhere in Passage 1.'
          },
          {
            id: 'cd_reading_p14_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What prompts a coral polyp to eject its resident algae during prolonged marine warmth?',
            options: [
              'A. Resident algae consume all limestone minerals inside the coral skeleton',
              'B. High salt concentrations force polyps to shrink below seafloor mud',
              'C. Algae darken colony walls until ocean predators spot hidden polyps',
              'D. Heat-damaged algal photosynthesis leaks toxic reactive oxygen compounds into host tissue'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C explains overheated chloroplasts leak reactive oxygen species, prompting polyps to expel distressed algae to stop toxic leakage.'
          },
          {
            id: 'cd_reading_p14_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why do bleached coral colonies look bright white underwater?',
            options: [
              'A. Clear coral flesh reveals the white limestone skeleton after colored algae leave',
              'B. Fleshy seaweeds coat dying reefs in pale chalky mucus',
              'C. Host polyps secrete protective white zinc sunscreen across outer ridges',
              'D. Sunlight bleaches transparent zooplankton inside empty coral mouths'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains transparent animal tissue exposes underlying limestone skeletons once brown-golden algae are expelled.'
          },
          {
            id: 'cd_reading_p14_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What ecological shift commonly overwhelms starving coral skeletons during months-long heatwaves?',
            options: [
              'A. Burrowing lobsters convert coral heads into sandy deep-sea mud',
              'B. Cool abyssal currents bury tropical lagoons under heavy volcanic gravel',
              'C. Infectious diseases and fast-growing fleshy macroalgae smother weakened colonies',
              'D. Symbiodiniaceae algae transform instantly into predatory deep-sea jellyfish'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E notes weakened bleached skeletons succumb to white-band diseases or become smothered beneath fleshy macroalgae.'
          },
          {
            id: 'cd_reading_p14_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'According to Paragraph A, what do coral hosts supply in exchange for sugars produced by algae?',
            options: [
              'A. Reactive free radicals and floating ocean plastics',
              'B. Physical shelter and mineral nitrogen compounds',
              'C. Deep-sea barium sulfate minerals',
              'D. Warm nocturnal zooplankton eggs'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph A specifies algae provide sugars and amino acids in exchange for shelter and mineral nitrogen.'
          },
          {
            id: 'cd_reading_p14_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Up to what percentage of fixed sugars and amino acids can healthy algae pass to their coral host?',
            correctAnswer: 'NINETY PERCENT',
            explanation: 'Paragraph A states resident algae transfer up to ninety percent of fixed sugars and amino acids.'
          },
          {
            id: 'cd_reading_p14_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Inside which specialized layer of coral host cells do symbiotic algae live?',
            correctAnswer: 'GASTRODERMAL CELLS',
            explanation: 'Paragraph A specifies gastrodermal cells.'
          },
          {
            id: 'cd_reading_p14_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'By how many degrees Celsius above seasonal norms can marine heatwaves start triggering coral bleaching?',
            correctAnswer: 'ONE TO TWO',
            explanation: 'Paragraph B states merely one to two degrees Celsius above seasonal summer averages.'
          },
          {
            id: 'cd_reading_p14_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Through what cellular release process do corals actively eject damaged algae?',
            correctAnswer: 'CELLULAR EXOCYTOSIS',
            explanation: 'Paragraph C names cellular exocytosis.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Symbiont Shuffling and the Cost of Heat-Tolerant Durusdinium',
        subtitle: 'Why heat-resistant algal partners carry hidden growth and calcification penalties',
        text: `Paragraph A: Amid grim forecasts of warming oceans, reef biologists noticed puzzling resilience pockets where adjacent coral heads of the exact same species experienced starkly different bleaching fates during severe El Niño events. Genomic sequencing of algal partners soon revealed that "Symbiodinium" actually spans multiple genetically divergent genera—each adapted to distinct light levels, water temperatures, and host metabolic demands.

Paragraph B: Most heat-sensitive Indo-Pacific branching corals predominantly host symbionts from the genus Cladocopium, prized for rapid carbon fixation and generous sugar export that drive fast reef skeletal growth. Conversely, corals living along scorching shallow tidal flats often harbor stress-hardy algae belonging to the genus Durusdinium (formerly clade D). Membrane lipids in Durusdinium chloroplasts stay structurally stable at temperatures two degrees higher than Cladocopium can endure, preventing reactive-oxygen breakdown during warm summer peaks.

Paragraph C: Intriguingly, some coral species possess flexible partnerships allowing "symbiont shuffling." Following moderate sub-lethal bleaching episodes, recovering colonies occasionally replace dominant heat-sensitive Cladocopium populations with trace background cells of Durusdinium already lingering inside host tissue. Subsequent marine heatwaves hitting the exact same reef frequently spare those shuffled colonies—effectively raising short-term coral thermal tolerance without requiring slow multi-century coral evolution.

Paragraph D: Yet evolutionary resilience never arrives free of metabolic trade-offs. Multi-year reef monitoring across Palau and the Great Barrier Reef demonstrated that corals dominated by Durusdinium grow noticeably slower—depositing up to thirty to fifty percent less calcium carbonate skeleton annually than identical corals partnering with Cladocopium in cooler normal years. Tight-fisted Durusdinium strains retain substantially more fixed energy for cellular self-repair rather than exporting surplus nutrients to build coral frameworks.

Paragraph E: That physiological growth penalty poses urgent challenges for reefs buffering coastal storms. Slower-calcifying reefs struggle to rebuild wave-resistant outer ridges after hurricanes or keep pace with rising sea levels—showing that switching symbiont partners acts more like an emergency heat-survival compromise than a painless climate immunity pass.`,
        questions: [
          {
            id: 'cd_reading_p14_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Neighboring identical corals reveal hidden genetic diversity among algal partners',
              'ii. Rapid reef building versus high heat survival between two algal genera',
              'iii. Slower skeleton growth limits long-term storm recovery on heat-adapted reefs',
              'iv. Metabolic nutrient hoarding slows calcium construction by up to half',
              'v. How surviving colonies switch dominant algal partners after moderate heat',
              'vi. Releasing genetically modified kelp spores across Australian harbors'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A links contrasting bleaching fates of identical adjacent corals to genetically divergent Symbiodiniaceae genera.'
          },
          {
            id: 'cd_reading_p14_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Neighboring identical corals reveal hidden genetic diversity among algal partners',
              'ii. Rapid reef building versus high heat survival between two algal genera',
              'iii. Slower skeleton growth limits long-term storm recovery on heat-adapted reefs',
              'iv. Metabolic nutrient hoarding slows calcium construction by up to half',
              'v. How surviving colonies switch dominant algal partners after moderate heat',
              'vi. Releasing genetically modified kelp spores across Australian harbors'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B contrasts fast-growing Cladocopium against thermally hardy Durusdinium.'
          },
          {
            id: 'cd_reading_p14_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Neighboring identical corals reveal hidden genetic diversity among algal partners',
              'ii. Rapid reef building versus high heat survival between two algal genera',
              'iii. Slower skeleton growth limits long-term storm recovery on heat-adapted reefs',
              'iv. Metabolic nutrient hoarding slows calcium construction by up to half',
              'v. How surviving colonies switch dominant algal partners after moderate heat',
              'vi. Releasing genetically modified kelp spores across Australian harbors'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C defines symbiont shuffling after moderate bleaching events.'
          },
          {
            id: 'cd_reading_p14_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Neighboring identical corals reveal hidden genetic diversity among algal partners',
              'ii. Rapid reef building versus high heat survival between two algal genera',
              'iii. Slower skeleton growth limits long-term storm recovery on heat-adapted reefs',
              'iv. Metabolic nutrient hoarding slows calcium construction by up to half',
              'v. How surviving colonies switch dominant algal partners after moderate heat',
              'vi. Releasing genetically modified kelp spores across Australian harbors'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph D quantifies the 30–50% drop in calcium carbonate deposition caused by Durusdinium retaining energy.'
          },
          {
            id: 'cd_reading_p14_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Most fast-growing Indo-Pacific corals initially depend upon productive algal strains from the genus ______.',
            correctAnswer: 'CLADOCOPIUM',
            explanation: 'Paragraph B names Cladocopium as driving fast reef skeletal growth.'
          },
          {
            id: 'cd_reading_p14_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Tough ______ inside Durusdinium chloroplasts resist heat damage two degrees warmer than rival strains.',
            correctAnswer: 'MEMBRANE LIPIDS',
            explanation: 'Paragraph B states membrane lipids in Durusdinium chloroplasts stay structurally stable two degrees higher.'
          },
          {
            id: 'cd_reading_p14_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Rapid partner replacement known as ______ raises thermal endurance without waiting for slow host evolution.',
            correctAnswer: 'SYMBIONT SHUFFLING',
            explanation: 'Paragraph C defines this rapid adjustment as symbiont shuffling.'
          },
          {
            id: 'cd_reading_p14_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Corals reliant on Durusdinium build substantially less ______ each year during cooler periods.',
            correctAnswer: 'CALCIUM CARBONATE',
            explanation: 'Paragraph D reports 30–50% less calcium carbonate skeleton deposited annually.'
          },
          {
            id: 'cd_reading_p14_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Reduced skeletal expansion threatens coral structures protecting shores during intense tropical ______.',
            correctAnswer: 'HURRICANES',
            explanation: 'Paragraph E states slower-calcifying reefs struggle to rebuild outer ridges after hurricanes.'
          },
          {
            id: 'cd_reading_p14_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph cites long-term reef studies conducted in Palau alongside Australia?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D mentions multi-year reef monitoring across Palau and the Great Barrier Reef.'
          },
          {
            id: 'cd_reading_p14_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph mentions background trace algae waiting inside host tissues before heat strikes?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes trace background cells of Durusdinium lingering inside host tissue prior to shuffling.'
          },
          {
            id: 'cd_reading_p14_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph mentions tidal environments naturally supporting heat-hardy algal partnerships?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B cites corals living along scorching shallow tidal flats harboring Durusdinium.'
          },
          {
            id: 'cd_reading_p14_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph compares symbiont switching to an emergency survival trade-off rather than a full cure?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E calls symbiont switching an emergency heat-survival compromise rather than a painless climate immunity pass.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Assisted Evolution, Coral Nurseries, and Conservation Trade-Offs',
        subtitle: 'Evaluating selective breeding, algal heat conditioning, and climate policy priorities',
        text: `Paragraph A: Recognizing that global greenhouse emissions continue warming tropical seas faster than natural reefs can adapt, marine conservationists increasingly debate active biological intervention—often grouped under "assisted evolution." Pioneered by researchers at the Australian Institute of Marine Science and Hawaii's Marine Biology laboratory, these interventions attempt to boost reef heat thresholds artificially before fragile coastal ecosystems collapse altogether.

Paragraph B: One straightforward branch involves selective breeding: collecting sperm and egg bundles during annual mass coral spawning nights and cross-fertilizing heat-survivor colonies from warm equatorial bays with cooler downstream reef populations. Laboratory thermal stress assays demonstrate that offspring inheriting heat-hardy parent genes withstand simulated heatwaves noticeably longer than pure cool-water lineages. Parallel microbial efforts culture Durusdinium or evolved Cladocopium strains inside elevated-temperature flasks across hundreds of algal generations before inoculating young coral recruits.

Paragraph C: Yet ecological field trials expose daunting scaling hurdles. Underwater coral nurseries raising millions of outplanted nursery fragments across the Caribbean and Indo-Pacific remain highly labor-intensive, requiring teams of SCUBA divers to scrub choking algae and epoxy fragments one by one onto reef limestone—protecting at best localized tourist bays spanning tens of hectares across reefs stretching thousands of kilometers.

Paragraph D: Conservation geneticists also raise cautionary ecological risks regarding human meddling. Flooding local reefs with uniform selectively bred super-corals could inadvertently narrow genetic diversity—leaving restored populations vulnerable to unfamiliar fungal infections or sudden cold-water anomalies. Worse still, critics warn that flashy headlines celebrating "heat-proof coral farms" risk fostering dangerous political complacency, tempting coastal planners to delay curbing fossil fuel combustion and shoreline agricultural nutrient runoff.

Paragraph E: Most reef scientists consequently frame assisted evolution strictly as an ecological bridge rather than an isolated lifeboat. Restored thermal-tolerant coral nurseries buy precious evolutionary time for diverse local reef sanctuaries only when paired aggressively with rapid global emissions cuts and strict local reductions in sewage and fertilizer pollution.`,
        questions: [
          {
            id: 'cd_reading_p14_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Selective coral breeding combines genetic material from naturally warm-water survivor reefs and cooler reefs.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B describes cross-fertilizing heat-survivor colonies from warm equatorial bays with cooler downstream populations.'
          },
          {
            id: 'cd_reading_p14_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Manual coral fragment planting currently restores thousands of square kilometers of deep ocean reef effortlessly.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C emphasizes nursery planting is highly labor-intensive and protects at best localized bays spanning tens of hectares.'
          },
          {
            id: 'cd_reading_p14_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Over-relying on uniform selectively bred corals could accidentally heighten vulnerability to novel diseases or cold snaps.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D warns narrowing genetic diversity leaves populations vulnerable to unfamiliar infections or cold-water anomalies.'
          },
          {
            id: 'cd_reading_p14_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Hawaii\'s Marine Biology laboratory banned all Cladocopium flask cultivation programs in 2023.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No 2023 ban at Hawaii\'s Marine Biology laboratory is mentioned in Passage 3.'
          },
          {
            id: 'cd_reading_p14_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Heat-tolerant coral nurseries remove any urgent need to restrict shoreline fertilizer runoff or greenhouse gases.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E stresses nurseries buy time only when paired aggressively with rapid emissions cuts and reductions in sewage/fertilizer runoff.'
          },
          {
            id: 'cd_reading_p14_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Conservationists use the umbrella label ______ for techniques aiming to speed up reef heat adaptation.',
            correctAnswer: 'ASSISTED EVOLUTION',
            explanation: 'Paragraph A introduces interventions grouped under "assisted evolution."'
          },
          {
            id: 'cd_reading_p14_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Biologists collect floating gamete bundles during brief annual events called mass coral ______.',
            correctAnswer: 'SPAWNING NIGHTS',
            explanation: 'Paragraph B cites collecting sperm and egg bundles during annual mass coral spawning nights.'
          },
          {
            id: 'cd_reading_p14_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Nursery divers regularly clean smothering seaweeds and attach young fragments onto substrate using ______.',
            correctAnswer: 'EPOXY',
            explanation: 'Paragraph C notes SCUBA divers scrub choking algae and epoxy fragments onto reef limestone.'
          },
          {
            id: 'cd_reading_p14_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Critics worry optimistic news about heat-hardy farms might breed harmful ______ among policy makers.',
            correctAnswer: 'POLITICAL COMPLACENCY',
            explanation: 'Paragraph D warns headlines risk fostering dangerous political complacency.'
          },
          {
            id: 'cd_reading_p14_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'How do researchers condition symbiotic algae before introducing them to infant corals in Paragraph B?',
            options: [
              'A. By freezing algae briefly inside liquid nitrogen flasks',
              'B. By feeding raw calcium fertilizer directly into ocean currents',
              'C. By growing algal populations inside heated flasks over hundreds of generations',
              'D. By shielding nursery tanks completely from natural daylight'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B states researchers culture algal strains inside elevated-temperature flasks across hundreds of generations.'
          },
          {
            id: 'cd_reading_p14_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why can manual reef outplanting nurseries protect only small fractions of endangered coral coastlines?',
            options: [
              'A. Cleaning and hand-attaching millions of fragments by SCUBA teams is severely slow and labor-heavy',
              'B. Coral limestone dissolves quickly whenever divers touch epoxy paste',
              'C. Tourist resorts prohibit marine biologists from diving near coastal reefs',
              'D. All Indo-Pacific corals refuse to spawn inside indoor laboratories'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C describes divers scrubbing algae and epoxying fragments individually, scaling only to tens of hectares.'
          },
          {
            id: 'cd_reading_p14_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What ecological danger accompanies planting genetically identical "super-corals" across degraded reefs?',
            options: [
              'A. Native marine fish refuse to shelter near heat-tolerant branches',
              'B. Super-corals grow too tall and block passing cargo freighters',
              'C. Fast calcification drains oxygen entirely from tropical lagoons',
              'D. Lower genetic variation leaves restored patches exposed to new pathogens or cold anomalies'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D notes narrowing genetic diversity leaves restored populations vulnerable to unfamiliar infections or cold-water anomalies.'
          },
          {
            id: 'cd_reading_p14_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'How do most marine biologists characterize assisted evolution in Paragraph E?',
            options: [
              'A. A total replacement for global carbon emissions targets',
              'B. A temporary bridge buying time alongside urgent climate mitigation and local pollution cuts',
              'C. A costly hobby restricted strictly to museum aquariums',
              'D. An inevitable threat responsible for destroying Caribbean tourism'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E frames assisted evolution strictly as an ecological bridge paired with emissions cuts and reduced runoff.'
          },
          {
            id: 'cd_reading_p14_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Offspring bred from warm-bay corals lasted longer in laboratory heat tests than cool-water parent strains.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B confirms cross-bred offspring withstood simulated heatwaves noticeably longer than pure cool-water lineages.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 15 (MODERATE): cd_reading_p15 (Synthetic Aniline Dyes and Industrial Chemistry)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p15',
    testNumber: 15,
    testType: 'practice',
    title: 'CD-IELTS Practice 15: Synthetic Aniline Dyes and Industrial Chemistry',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on William Perkin\'s mauveine discovery, German coal-tar R&D labs, and textile dye toxicology.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Coal-Tar Waste, Mauveine, and the Birth of Synthetic Color',
        subtitle: 'How a teenager\'s failed malaria experiment reshaped nineteenth-century fashion and chemistry',
        text: `Paragraph A: Prior to the mid-nineteenth century, vibrant textile colors remained scarce luxuries extracted laboriously from plants, shellfish, or crushed insects. Producing rich Tyrian purple demanded thousands of Mediterranean murex sea snails, while brilliant crimson cochineal depended on dried cactus beetles imported at steep cost from Mesoamerica. Even prized vegetable indigo faded steadily when laundered repeatedly in harsh soap or hung beneath summer sunlight.

Paragraph B: That botanical monopoly broke unexpectedly during Easter vacation of 1856 inside a cramped home attic laboratory in London. Eighteen-year-old chemistry student William Henry Perkin was attempting to synthesize quinine—a precious anti-malarial alkaloid extracted solely from South American cinchona tree bark—under mentor August Wilhelm von Hofmann at the Royal College of Chemistry. Lacking clear knowledge of molecular geometry, Perkin tried oxidizing crude coal-tar aniline salts using potassium dichromate, yielding only a messy black sludge at the bottom of his glass flask.

Paragraph C: Instead of tossing the failed residue into a waste bucket immediately, Perkin washed the dark tar with ethanol alcohol and watched an astonishing intense violet glow bloom across the solution. Testing silk strips inside the purple liquid showed the dye clung tightly to protein fibers without washing pale or fading sharply under window light. Recognizing immense commercial promise, Perkin patented the synthetic compound—initially named aniline purple and famously marketed in Paris and London as "mauveine."

Paragraph D: Scaling mauveine from test-tube surprise to industrial vat demanded immense courage because coal tar—a noxious sticky by-product clogging London's coal-gas streetlights—was widely dismissed as smelly industrial garbage. Backed by his father's family savings, nineteen-year-old Perkin built a brick dye works along the Grand Union Canal at Greenford Green, inventing corrosion-resistant cast-iron nitration vessels from scratch to manufacture vibrant mauve silk cleanly by 1858.

Paragraph E: High-society adoption ignited rapid commercial mania after Queen Victoria wore a mauve silk gown to her daughter's royal wedding and French Empress Eugénie embraced matching lavender shades. Within a decade, British fashion magazines joked of "mauve measles," while chemists across Europe abandoned purely descriptive plant alchemy to race inside lucrative synthetic coal-tar laboratories.`,
        questions: [
          {
            id: 'cd_reading_p15_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Before synthetic dyes, brilliant red cochineal pigment came from harvested ______ imported from Mesoamerica.',
            correctAnswer: 'CACTUS BEETLES',
            explanation: 'Paragraph A identifies dried cactus beetles as the source of crimson cochineal.'
          },
          {
            id: 'cd_reading_p15_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Eighteen-year-old William Perkin originally hoped to synthesize the anti-malarial medicine ______.',
            correctAnswer: 'QUININE',
            explanation: 'Paragraph B states Perkin was attempting to synthesize quinine.'
          },
          {
            id: 'cd_reading_p15_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Washing dark flask residue with ______ unexpectedly revealed a vivid violet dye solution.',
            correctAnswer: 'ETHANOL ALCOHOL',
            explanation: 'Paragraph C notes Perkin washed the dark tar with ethanol alcohol.'
          },
          {
            id: 'cd_reading_p15_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Sticky ______ left behind by gasworks lighting had previously been treated as bothersome waste.',
            correctAnswer: 'COAL TAR',
            explanation: 'Paragraph D states coal tar clogging London\'s streetlights was widely dismissed as industrial garbage.'
          },
          {
            id: 'cd_reading_p15_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'To produce mauveine safely at scale, Perkin designed custom ______ vessels resistant to acid corrosion.',
            correctAnswer: 'CAST-IRON',
            explanation: 'Paragraph D mentions corrosion-resistant cast-iron nitration vessels built from scratch.'
          },
          {
            id: 'cd_reading_p15_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Natural plant dyes such as indigo kept completely permanent brightness through repeated harsh washing.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states vegetable indigo faded steadily when laundered repeatedly or hung in sunlight.'
          },
          {
            id: 'cd_reading_p15_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Perkin deliberately planned to create artificial textile colors before mixing potassium dichromate in 1856.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B confirms he was trying to synthesize quinine and got a messy black sludge by surprise.'
          },
          {
            id: 'cd_reading_p15_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Queen Victoria helped spark fashionable European demand by wearing mauve silk to a royal wedding.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph E cites Queen Victoria wearing a mauve silk gown to her daughter\'s wedding alongside Empress Eugénie.'
          },
          {
            id: 'cd_reading_p15_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Perkin later retired to South America to manage commercial cinchona tree plantations.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Cinchona bark is mentioned only as the natural source of quinine in Paragraph B, with no mention of Perkin retiring there.'
          },
          {
            id: 'cd_reading_p15_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Which Mediterranean shellfish supplied scarce ancient purple dye before coal-tar synthetics?',
            correctAnswer: 'MUREX SEA SNAILS',
            explanation: 'Paragraph A names Mediterranean murex sea snails.'
          },
          {
            id: 'cd_reading_p15_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Along which waterway did Perkin construct his Greenford Green brick factory?',
            correctAnswer: 'GRAND UNION CANAL',
            explanation: 'Paragraph D specifies along the Grand Union Canal at Greenford Green.'
          },
          {
            id: 'cd_reading_p15_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why did Perkin\'s new purple extract impress textile dyers immediately?',
            options: [
              'A. It bonded firmly to silk fibers and resisted fading in laundry and light',
              'B. It turned rough sheep wool instantly into smooth imported silk',
              'C. It cured tropical malaria symptoms when rubbed onto cotton shirts',
              'D. It eliminated the unpleasant coal smoke over downtown London'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C explains the violet dye clung tightly to silk fibers without washing pale or fading sharply under light.'
          },
          {
            id: 'cd_reading_p15_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'How did the 1856 mauveine breakthrough reshape European chemical practice?',
            options: [
              'A. Universities banned experimental attic workshops completely',
              'B. Glass flask makers closed due to cast-iron vat competition',
              'C. Chemists shifted rapidly toward profitable industrial synthesis from coal-tar feedstocks',
              'D. Fashion houses returned exclusively to shellfish and beetle extracts'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E notes chemists across Europe shifted away from descriptive plant alchemy into synthetic coal-tar laboratories.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: How Germany Captured the Coal-Tar Dye Monopoly',
        subtitle: 'University chemistry fellowships, structural benzene theory, and industrial research laboratories',
        text: `Paragraph A: Although Britain invented synthetic mauveine and sat atop Europe's largest coal-gas and textile industries, British firms astonishingly surrendered nearly ninety percent of the global synthetic dye market to German chemical giants—such as BASF, Bayer, and Hoechst—by 1900. Economic historians attribute this dramatic industrial shift less to natural mineral luck than to deep institutional divergence in science education, patent strategy, and corporate laboratory organization.

Paragraph B: Early trial-and-error aniline tinkering yielded only sporadic color discoveries because chemists still lacked accurate structural maps of carbon molecules. Everything transformed in 1865 when German chemist August Kekulé deduced the six-carbon hexagonal ring structure of benzene. Understanding exact atomic geometry allowed trained organic chemists to predict deliberately where chlorine, nitro, or amino groups attached—turning random kitchen-style boiling into systematic molecular architecture.

Paragraph C: German universities excelled at nurturing large cohorts of doctoral chemists trained specifically in structural synthesis—including returning stars like Hofmann, who left London for Berlin in 1865. Whereas British family-owned textile mills often viewed university professors as impractical theorists and promoted shop-floor foremen instead, German dye executives recruited dozens of PhD chemists straight into salaried, dedicated corporate research laboratories equipped with extensive reference libraries.

Paragraph D: Inside BASF's Ludwigshafen complex, organized team science triumphed brilliantly over lone eccentric inventors. Following seventeen years of coordinated corporate investment costing more than the company's entire original share capital, BASF chemists synthesized artificial indigo cleanly in 1897—undercutting British colonial indigo plantations across Bengal almost overnight and ruining traditional agricultural exporters worldwide.

Paragraph E: Strict German patent protection further locked in market dominance. Because German patent law protected unique chemical manufacturing processes rather than locking down broad finished compounds prematurely, rival domestic labs raced endlessly to invent cleaner catalytic routes—eventually expanding German coal-tar expertise seamlessly into synthetic pharmaceuticals, aspirin, and agricultural nitrogen fertilizers.`,
        questions: [
          {
            id: 'cd_reading_p15_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph describes an academic departure from London back to Berlin alongside diverging business hiring norms?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes Hofmann returned to Berlin in 1865 and contrasts British foreman promotion against German corporate hiring of PhD chemists.'
          },
          {
            id: 'cd_reading_p15_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph links dye process patent rules directly to later breakthroughs in medicines and farm chemicals?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E explains process patents fostered competing catalytic routes leading into pharmaceuticals, aspirin, and fertilizers.'
          },
          {
            id: 'cd_reading_p15_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph reveals a German corporate triumph that devastated traditional colonial plant growers in Asia?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D details BASF synthesizing artificial indigo in 1897 and undercutting colonial plantations across Bengal.'
          },
          {
            id: 'cd_reading_p15_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph describes the theoretical atomic insight that replaced blind trial-and-error boiling?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B highlights Kekulé\'s 1865 six-carbon benzene ring discovery turning tinkering into systematic molecular architecture.'
          },
          {
            id: 'cd_reading_p15_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'By 1900, British producers held barely ten percent of global synthetic color sales despite ample ______ coal feedstocks.',
            correctAnswer: 'COAL-GAS',
            explanation: 'Paragraph A notes Britain sat atop Europe\'s largest coal-gas and textile industries yet lost 90% of global share.'
          },
          {
            id: 'cd_reading_p15_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'August Kekulé unlocked targeted synthesis by identifying the hexagonal six-carbon ring of ______.',
            correctAnswer: 'BENZENE',
            explanation: 'Paragraph B explains Kekulé deduced the six-carbon hexagonal ring structure of benzene.'
          },
          {
            id: 'cd_reading_p15_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Unlike British mills favoring practical foremen, German companies staffed dedicated in-house labs with salaried ______.',
            correctAnswer: 'PHD CHEMISTS',
            explanation: 'Paragraph C states German dye executives recruited dozens of PhD chemists into dedicated research labs.'
          },
          {
            id: 'cd_reading_p15_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'German industrialists spent ______ years perfecting synthetic indigo before commercial launch in 1897.',
            correctAnswer: 'SEVENTEEN',
            explanation: 'Paragraph D states BASF synthesized artificial indigo following seventeen years of coordinated investment.'
          },
          {
            id: 'cd_reading_p15_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Protecting specific chemical ______ rather than broad compounds spurred rival German firms to engineer cleaner catalysts.',
            correctAnswer: 'MANUFACTURING PROCESSES',
            explanation: 'Paragraph E specifies German patent law protected unique chemical manufacturing processes.'
          },
          {
            id: 'cd_reading_p15_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'Germany overtook Britain in dye sales primarily because Britain lacked coal deposits and textile factories.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A notes Britain had Europe\'s largest coal-gas and textile industries; loss stemmed from education, patents, and R&D organization.'
          },
          {
            id: 'cd_reading_p15_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'Developing synthetic indigo required capital investment exceeding BASF\'s original share capital.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D explicitly states BASF spent more than the company\'s entire original share capital.'
          },
          {
            id: 'cd_reading_p15_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'British textile owners routinely offered Nobel Prize fellowships to German university laboratory assistants.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No Nobel fellowships appear anywhere in Passage 2.'
          },
          {
            id: 'cd_reading_p15_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Synthetic dye laboratories directly seeded modern German pharmaceutical and fertilizer industries.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E confirms coal-tar expertise expanded seamlessly into synthetic pharmaceuticals, aspirin, and fertilizers.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Dye Effluent Toxicology and Bio-Based Microbial Pigments',
        subtitle: 'Addressing azo dye carcinogenicity and engineering cleaner biological colorants',
        text: `Paragraph A: While cheap synthetic colors democratized colorful everyday wardrobes worldwide, rapid twentieth-century dye expansion also left troubling toxicological legacies. Today, global garment factories discharge tens of thousands of tons of unfixed synthetic dyes annually into Asian and European waterways—often dominated by brightly colored azo dyes accounting for over two-thirds of commercial textile pigments.

Paragraph B: Azo molecules derive their vivid reds, oranges, and yellows from strong nitrogen-to-nitrogen double bonds linking aromatic rings. Unfortunately, when industrial effluent flows into oxygen-poor river mud, anaerobic bacteria break those nitrogen bridges apart, generating colorless aromatic amines—several of which, such as benzidine derivatives, prove strongly carcinogenic in mammalian bladder cells and stubbornly resist natural biodegradation.

Paragraph C: Early workplace health disasters forced belated chemical regulation. German and Swiss factory physicians first documented shocking bladder cancer clusters among dye-vat workers handling raw aniline intermediates in the 1890s, prompting modern European Union bans on twenty-two hazardous benzidine-releasing azo formulations. Yet enforcement remains patchy across fragmented informal subcontracting mills worldwide, where untreated indigo and azo dye baths still stain rivers dark crimson downstream from denim laundries.

Paragraph D: Searching for benign alternatives without sacrificing colorfast brilliance, synthetic biologists now engineer harmless soil bacteria and brewer's yeast to ferment pure pigments inside closed bioreactors. Inserting plant or bacterial enzyme pathways allows microbes fed simple corn sugar to synthesize real biodegradable indigoid molecules or rich fungal reds at ambient room temperatures—eliminating toxic petroleum solvents, heavy-metal catalysts, and roaring coal boilers completely.

Paragraph E: Skeptical textile engineers point out clear cost hurdles before bio-pigments replace petrochemical vats across fast fashion shelves. Fermented microbial indigo currently sells at roughly two to three times the price of synthetic petroleum indigo, and extracting pure dye crystals from watery yeast broths demands intricate downstream purification. Even so, expanding zero-liquid-discharge wastewater membranes alongside microbial colorants offers realistic pathways toward cleaner textile chemistry.`,
        questions: [
          {
            id: 'cd_reading_p15_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Scale of synthetic dye discharge across contemporary garment waterways',
              'ii. How bacterial breakdown inside river mud creates cancer-causing compounds',
              'iii. Engineering yeast and bacteria to brew natural colors without toxic solvents',
              'iv. Pricing barriers and purification hurdles facing fermented bio-dyes',
              'v. Early worker illnesses spur strict bans yet gaps remain globally',
              'vi. Reintroducing sea-snail farms along Mediterranean industrial rivers'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A outlines global dye pollution scale led by azo dyes.'
          },
          {
            id: 'cd_reading_p15_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Scale of synthetic dye discharge across contemporary garment waterways',
              'ii. How bacterial breakdown inside river mud creates cancer-causing compounds',
              'iii. Engineering yeast and bacteria to brew natural colors without toxic solvents',
              'iv. Pricing barriers and purification hurdles facing fermented bio-dyes',
              'v. Early worker illnesses spur strict bans yet gaps remain globally',
              'vi. Reintroducing sea-snail farms along Mediterranean industrial rivers'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B explains anaerobic bacteria cleaving azo bonds into carcinogenic aromatic amines.'
          },
          {
            id: 'cd_reading_p15_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Scale of synthetic dye discharge across contemporary garment waterways',
              'ii. How bacterial breakdown inside river mud creates cancer-causing compounds',
              'iii. Engineering yeast and bacteria to brew natural colors without toxic solvents',
              'iv. Pricing barriers and purification hurdles facing fermented bio-dyes',
              'v. Early worker illnesses spur strict bans yet gaps remain globally',
              'vi. Reintroducing sea-snail farms along Mediterranean industrial rivers'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C connects 1890s bladder cancers to EU bans alongside ongoing enforcement gaps in informal mills.'
          },
          {
            id: 'cd_reading_p15_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Scale of synthetic dye discharge across contemporary garment waterways',
              'ii. How bacterial breakdown inside river mud creates cancer-causing compounds',
              'iii. Engineering yeast and bacteria to brew natural colors without toxic solvents',
              'iv. Pricing barriers and purification hurdles facing fermented bio-dyes',
              'v. Early worker illnesses spur strict bans yet gaps remain globally',
              'vi. Reintroducing sea-snail farms along Mediterranean industrial rivers'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D details genetically engineered soil microbes and yeast fermenting biodegradable dyes from corn sugar.'
          },
          {
            id: 'cd_reading_p15_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Scale of synthetic dye discharge across contemporary garment waterways',
              'ii. How bacterial breakdown inside river mud creates cancer-causing compounds',
              'iii. Engineering yeast and bacteria to brew natural colors without toxic solvents',
              'iv. Pricing barriers and purification hurdles facing fermented bio-dyes',
              'v. Early worker illnesses spur strict bans yet gaps remain globally',
              'vi. Reintroducing sea-snail farms along Mediterranean industrial rivers'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph E evaluates 2–3x higher pricing and downstream crystal purification costs delaying mass adoption.'
          },
          {
            id: 'cd_reading_p15_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why do bright azo dyes pose serious biological danger once discharged into muddy riverbeds?',
            options: [
              'A. Nitrogen bubbles strip breathable oxygen away from coastal surf beaches',
              'B. Oxygen-free mud bacteria split nitrogen bonds into persistent cancer-causing amines',
              'C. Color pigments reflect winter sunshine away from cold river fish',
              'D. Heavy cast-iron factory pipes leach pure sugar into trout nests'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B states anaerobic bacteria break nitrogen-to-nitrogen bonds, generating carcinogenic, persistent aromatic amines.'
          },
          {
            id: 'cd_reading_p15_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What limits European Union chemical restrictions from cleaning textile rivers worldwide according to Paragraph C?',
            options: [
              'A. Denim garments absorb zero synthetic indigo during industrial washing',
              'B. German physicians retracted all findings regarding bladder tumors',
              'C. Enforcement stays uneven across dispersed informal subcontracting mills',
              'D. Natural plant indigo always produces matching toxic benzidine residues'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C points out enforcement remains patchy across fragmented informal subcontracting mills globally.'
          },
          {
            id: 'cd_reading_p15_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What environmental advantage does fermenting microbial dyes in bioreactors provide over coal-tar synthesis?',
            options: [
              'A. Synthesis runs at room temperature from corn sugar without petroleum solvents or coal boilers',
              'B. Microbes double the brightness of toxic aromatic benzidines',
              'C. Brewer\'s yeast works exclusively inside polluted denim rivers',
              'D. Microbial pigments eliminate all electricity inside apparel sewing rooms'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states microbes fed simple corn sugar work at ambient room temperatures without petroleum solvents, heavy-metal catalysts, or coal boilers.'
          },
          {
            id: 'cd_reading_p15_q35',
            number: 35,
            type: 'true_false_not_given',
            questionText: 'Azo dyes account for more than two-thirds of commercial textile pigments used globally.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states azo dyes account for over two-thirds of commercial textile pigments.'
          },
          {
            id: 'cd_reading_p15_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Fermented biological indigo currently undercuts conventional petroleum indigo in wholesale market price.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E notes fermented microbial indigo sells at roughly two to three times the price of petroleum indigo.'
          },
          {
            id: 'cd_reading_p15_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'Zero-liquid-discharge wastewater membranes are legally mandatory in every denim laundry worldwide.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions expanding zero-liquid-discharge membranes as a promising pathway, not a mandatory worldwide law.'
          },
          {
            id: 'cd_reading_p15_q38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which human organ suffered severe cancer clusters among dye-vat laborers in the 1890s?',
            correctAnswer: 'BLADDER',
            explanation: 'Paragraph B and C refer to bladder cancer clusters in mammalian/human bladder cells.'
          },
          {
            id: 'cd_reading_p15_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'How many hazardous benzidine-releasing azo formulations has the European Union prohibited?',
            correctAnswer: 'TWENTY-TWO',
            explanation: 'Paragraph C states EU bans cover twenty-two hazardous benzidine-releasing azo formulations.'
          },
          {
            id: 'cd_reading_p15_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'What simple agricultural feedstock fuels engineered yeast and soil bacteria inside pigment bioreactors?',
            correctAnswer: 'CORN SUGAR',
            explanation: 'Paragraph D specifies microbes fed simple corn sugar.'
          }
        ]
      }
    ]
  })
];
