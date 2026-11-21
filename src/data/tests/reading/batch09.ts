/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_09: TestItem[] = [
  // =========================================================================
  // MOCK 11 (MODERATE): cd_reading_m11 (The History of Epidemic Quarantine in Venetian Maritime Ports)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m11',
    testNumber: 11,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 11: The History of Epidemic Quarantine in Venetian Maritime Ports',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on Dubrovnik\'s trentino detention, Venice\'s island lazarettos, and early epidemiological bureaucracy.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: From Thirty-Day Trentino to Forty-Day Quarantena',
        subtitle: 'How Adriatic maritime republics invented structured port isolation against bubonic plague',
        text: `Paragraph A: When the Black Death swept along Mediterranean spice and silk shipping corridors in 1347–1348, bustling maritime hubs faced an existential economic trap. Cities like Venice, Genoa, and Ragusa (modern Dubrovnik) relied utterly on constant Levantine galley traffic for grain, pepper, alum, and silk; closing harbors permanently spelled urban starvation, yet admitting infected crews indiscriminately unleashed terrifying pestilence killing up to half a city's population within months.

Paragraph B: Rather than relying purely on panic-driven border bans, Adriatic port magistrates pioneered systematic temporal detention. In 1377, the Great Council of Ragusa passed Europe's earliest surviving maritime quarantine statute, forbidding ships arriving from plague-stricken ports from unloading directly at city wharves. Instead, sailors, passengers, and bales of Levantine cloth had to spend thirty days—termed "trentino" from the Italian word for thirty—encamped cleanly across exposed coastal limestone islands outside city walls to confirm nobody fell sick.

Paragraph C: Neighboring Venice soon adopted and extended Ragusa's temporal barrier. Harbor physicians noticed that although thirty days caught most acute pneumonic infections, occasional delayed plague outbreaks still flared weeks after sailors disembarked. Whether acting from empirical observation of stubborn incubation intervals or blending biblical and medical traditions associating forty days with bodily purification, Venetian magistrates lengthened port isolation to forty days—known in local dialect as "quarantena," giving modern languages the term quarantine.

Paragraph D: Enforcing strict forty-day isolation on unruly merchant fleets demanded unprecedented coastal policing. Armed patrol galleys shadowed incoming spice ships down Venetian lagoon channels, anchoring suspect crews offshore while customs clerks inspected notarized bills of health signed by overseas Venetian consuls in Alexandria or Constantinople. Falsifying cargo origins or sneaking contraband bolts of Egyptian linen ashore carried brutal statutory penalties including vessel burning.

Paragraph E: Far from halting Mediterranean trade, predictable quarantine schedules stabilized maritime commerce. Merchants could calculate storage losses and forty-day anchoring fees upfront in marine insurance contracts, balancing commercial continuity against public biological defense centuries before nineteenth-century bacteriologists isolated the plague bacillus Yersinia pestis.`,
        questions: [
          {
            id: 'cd_reading_m11_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Adriatic trading cities could afford to shut all sea ports permanently without risking local starvation.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states Venice, Genoa, and Ragusa relied utterly on galley traffic for grain and supplies, so closing harbors permanently spelled starvation.'
          },
          {
            id: 'cd_reading_m11_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Ragusa enacted a mandatory thirty-day maritime isolation statute in 1377.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B notes Ragusa passed Europe\'s earliest surviving maritime quarantine statute ("trentino") in 1377.'
          },
          {
            id: 'cd_reading_m11_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Venetian port authorities knew the exact bacterial microbe Yersinia pestis when setting forty-day detention rules.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E notes quarantine balanced trade and safety centuries before bacteriologists isolated Yersinia pestis.'
          },
          {
            id: 'cd_reading_m11_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Merchants could factor forty-day anchoring waiting costs directly into maritime insurance agreements.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph E states predictable schedules let merchants calculate waiting fees upfront in marine insurance contracts.'
          },
          {
            id: 'cd_reading_m11_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Genoese lawmakers forced Venetian sailors to pay twice as much silver port tax as Greek captains.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A names Genoa as a maritime hub, with no comparison of Genoese silver taxes.'
          },
          {
            id: 'cd_reading_m11_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Why did Ragusa require arriving crews and goods to remain on coastal islands for thirty days in 1377?',
            options: [
              'A. To unload heavy grain sacks smoothly without blocking narrow downtown canals',
              'B. To dry wet Mediterranean timber before Venetian shipbuilders inspected planks',
              'C. To test whether travelers or cargo carried hidden plague symptoms before entering the city',
              'D. To collect annual marine insurance premiums from foreign captains'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B explains crews and cargo stayed on outside limestone islands for 30 days to confirm nobody fell sick.'
          },
          {
            id: 'cd_reading_m11_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What two possible explanations does Paragraph C offer for Venice lengthening isolation from thirty to forty days?',
            options: [
              'A. Faster galley speeds across the Adriatic and heavier winter storms',
              'B. Delayed symptom flare-ups alongside traditional beliefs linking forty days to purification',
              'C. Shortages of coastal lighthouse fuel and overloaded dock warehouses',
              'D. Demands from Egyptian spice merchants seeking cheaper island rent'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C cites both delayed outbreaks after 30 days and biblical/medical traditions associating forty days with purification.'
          },
          {
            id: 'cd_reading_m11_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How did Venetian customs agents check whether an arriving merchant ship had visited plague-infected eastern ports?',
            options: [
              'A. By examining microscopic blood smears inside floating lagoon hospitals',
              'B. By weighing silver ingots locked inside ship chests',
              'C. By auditing signed health certificates issued by Venetian consuls abroad',
              'D. By counting live sheep carried aboard returning galleys'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states customs clerks inspected notarized bills of health signed by overseas Venetian consuls in Alexandria or Constantinople.'
          },
          {
            id: 'cd_reading_m11_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What severe penalty confronted smugglers caught landing uninspected goods in Venice?',
            options: [
              'A. Destruction of the smuggler\'s vessel by burning',
              'B. Compulsory service inside Ragusa limestone quarries',
              'C. Permanent banishment from Genoa spice markets',
              'D. Confiscation of silk garments for palace guards'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D mentions brutal statutory penalties including vessel burning.'
          },
          {
            id: 'cd_reading_m11_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'By what modern city name is medieval Adriatic Ragusa known today?',
            correctAnswer: 'DUBROVNIK',
            explanation: 'Paragraph A gives Ragusa (modern Dubrovnik).'
          },
          {
            id: 'cd_reading_m11_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'From which Venetian dialect word did modern English derive the term "quarantine"?',
            correctAnswer: 'QUARANTENA',
            explanation: 'Paragraph C cites the local dialect word "quarantena."'
          },
          {
            id: 'cd_reading_m11_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which two eastern Mediterranean ports are named in Paragraph D as issuing notarized health bills?',
            correctAnswer: 'ALEXANDRIA OR CONSTANTINOPLE',
            explanation: 'Paragraph D specifies Venetian consuls in Alexandria or Constantinople.'
          },
          {
            id: 'cd_reading_m11_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which plague-causing bacterium was isolated centuries later by nineteenth-century scientists?',
            correctAnswer: 'YERSINIA PESTIS',
            explanation: 'Paragraph E names the plague bacillus Yersinia pestis.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Island Lazarettos, Cargo Disinfection, and Miasma Medicine',
        subtitle: 'Inside the permanent quarantine hospitals of the Venetian Lagoon',
        text: `Paragraph A: Anchoring crowded ships offshore for forty days soon revealed grim flaws: infectious disease spread rapidly among sailors packed tightly inside damp wooden hulls, while pirates raided unprotected anchorages. In 1423, Venice solved both problems permanently by repurposing an isolated lagoon island—Santa Maria di Nazareth—into the world's first permanent state plague hospital and quarantine complex, nicknamed the "Lazzaretto Vecchio." When harbor demands swelled further in 1468, Venice opened a second preventive screening hub, the "Lazzaretto Nuovo," near the lagoon entrance.

Paragraph B: Architectural archaeology reveals surprisingly thoughtful hospital layouts designed around strict spatial separation. Long vaulted brick warehouses bordered central stone courtyards, flanked by walled isolation wards housing symptomatic sick travelers at the Lazzaretto Vecchio while healthy suspected arrivals waited out forty days separately on the Lazzaretto Nuovo. Guard boats patrolled perimeter waters day and night to ensure recovering patients never mingled prematurely with newly arrived merchant passengers.

Paragraph C: Even cargo bales received systematic "purification" under prevailing Renaissance miasma theory—the medical belief that foul, poisonous air droplets clung invisibly inside porous merchandise. Porters known as "bastazi" carried heavy sacks of Cypriot cotton, Turkish wool carpets, and Syrian silk up into breezy open-sided colonnade sheds, slicing burlap wrappings open and turning raw fibers over daily with long wooden poles so brisk Adriatic sea breezes could ventilate trapped "miasmatic vapors."

Paragraph D: High-risk garments, furs, and paper diplomatic letters faced harsher chemical cleansing. Clerks routinely passed arriving dispatches through roaring juniper, sulfur, and rosemary smoke fires using iron tongs, punched holes cleanly through folded envelopes to admit purifying fumes, and submerged metal Venetian ducat coins inside bowls of sharp wine vinegar—inadvertently killing skin bacteria and repelling fleas even while acting on completely mistaken miasmatic physics.

Paragraph E: Strikingly, archaeological excavations beneath Lazzaretto Nuovo warehouses uncovered faint charcoal tally sketches, merchant guild emblems, and personal prayers scratched into plaster walls by detained porters—offering vivid human testimony of tedious weeks spent watching city bell towers glisten tantalizingly close across lagoon waters.`,
        questions: [
          {
            id: 'cd_reading_m11_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why Venice established two permanent lagoon quarantine islands',
              'ii. Separate layouts dividing confirmed sick travelers from healthy suspects',
              'iii. Smoking letters and soaking coins under mistaken air-poison beliefs',
              'iv. Uncovering etched drawings and inscriptions left by detained workers',
              'v. Airing porous wool and silk textiles beneath breezy port colonnades',
              'vi. Abandoning Lazzaretto Nuovo due to sixteenth-century lagoon storms'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A explains Venice opening Lazzaretto Vecchio (1423) and Lazzaretto Nuovo (1468) to overcome shipboard crowding and piracy.'
          },
          {
            id: 'cd_reading_m11_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why Venice established two permanent lagoon quarantine islands',
              'ii. Separate layouts dividing confirmed sick travelers from healthy suspects',
              'iii. Smoking letters and soaking coins under mistaken air-poison beliefs',
              'iv. Uncovering etched drawings and inscriptions left by detained workers',
              'v. Airing porous wool and silk textiles beneath breezy port colonnades',
              'vi. Abandoning Lazzaretto Nuovo due to sixteenth-century lagoon storms'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B contrasts isolation wards on Vecchio for sick cases against preventive holding on Nuovo for healthy arrivals.'
          },
          {
            id: 'cd_reading_m11_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why Venice established two permanent lagoon quarantine islands',
              'ii. Separate layouts dividing confirmed sick travelers from healthy suspects',
              'iii. Smoking letters and soaking coins under mistaken air-poison beliefs',
              'iv. Uncovering etched drawings and inscriptions left by detained workers',
              'v. Airing porous wool and silk textiles beneath breezy port colonnades',
              'vi. Abandoning Lazzaretto Nuovo due to sixteenth-century lagoon storms'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C describes bastazi porters opening cotton, wool, and silk inside open-sided colonnade sheds to air out miasma.'
          },
          {
            id: 'cd_reading_m11_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why Venice established two permanent lagoon quarantine islands',
              'ii. Separate layouts dividing confirmed sick travelers from healthy suspects',
              'iii. Smoking letters and soaking coins under mistaken air-poison beliefs',
              'iv. Uncovering etched drawings and inscriptions left by detained workers',
              'v. Airing porous wool and silk textiles beneath breezy port colonnades',
              'vi. Abandoning Lazzaretto Nuovo due to sixteenth-century lagoon storms'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D details smoking letters with sulfur/rosemary and dipping coins in wine vinegar under miasma physics.'
          },
          {
            id: 'cd_reading_m11_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Dockside cargo handlers called ______ turned bales over daily using long wooden poles.',
            correctAnswer: 'BASTAZI',
            explanation: 'Paragraph C states porters known as "bastazi" aired cargo bales daily.'
          },
          {
            id: 'cd_reading_m11_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Renaissance medical authorities blamed infectious outbreaks on foul airborne droplets called ______.',
            correctAnswer: 'MIASMATIC VAPORS',
            explanation: 'Paragraph C explains the miasma theory belief in trapped "miasmatic vapors."'
          },
          {
            id: 'cd_reading_m11_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Clerks punctured incoming envelopes and held them with ______ over aromatic herb and sulfur smoke.',
            correctAnswer: 'IRON TONGS',
            explanation: 'Paragraph D specifies clerks passed dispatches through smoke using iron tongs.'
          },
          {
            id: 'cd_reading_m11_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Metal Venetian ducats were rinsed thoroughly inside bowls filled with sharp ______.',
            correctAnswer: 'WINE VINEGAR',
            explanation: 'Paragraph D notes clerks submerged metal coins inside bowls of sharp wine vinegar.'
          },
          {
            id: 'cd_reading_m11_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Archaeologists found personal prayers and ______ drawn by detained workers on plastered storeroom walls.',
            correctAnswer: 'TALLY SKETCHES',
            explanation: 'Paragraph E mentions faint charcoal tally sketches, guild emblems, and prayers scratched into plaster walls.'
          },
          {
            id: 'cd_reading_m11_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph mentions two distinct risks of confining crews aboard moored ships offshore?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A notes disease spreading inside damp hulls and pirate raids on unprotected anchorages.'
          },
          {
            id: 'cd_reading_m11_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph explains why mistaken medical customs still reduced real biological pests?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D points out sulfur smoke and vinegar inadvertently killed bacteria and repelled fleas.'
          },
          {
            id: 'cd_reading_m11_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph describes guard patrols blocking contact between recovered patients and fresh ship arrivals?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B states guard boats patrolled perimeter waters day and night.'
          },
          {
            id: 'cd_reading_m11_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph notes physical emotional traces carved onto island walls by isolated workers?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E discusses tally sketches, emblems, and prayers scratched into Lazzaretto Nuovo plaster.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Health Boards, Intelligence Networks, and Early Epidemiology',
        subtitle: 'How Renaissance quarantine institutions pioneered public statistics and European disease alerts',
        text: `Paragraph A: Beyond stone island wards, Venice bequeathed an enduring administrative invention to modern public health: permanent salaried civic health boards. Established formally in 1486 as the Magistrato alla Sanità, Venice's Health Office transitioned plague response from hurried emergency town-hall decrees toward continuous year-round disease surveillance backed by judicial authority, dedicated tax funds, and permanent port inspectors.

Paragraph B: Effective maritime defense demanded early warning long before infected vessels ever entered lagoon waters. Venetian embassies and resident merchants stationed from Syria to London mailed urgent coded plague dispatches whenever mortality spiked abroad—establishing an informal continental epidemic intelligence network. Neighboring Italian states including Milan, Florence, and Genoa regularly exchanged courier bulletins, temporarily imposing coordinated trade cordons whenever eastern outbreaks surfaced.

Paragraph C: Simultaneously, the Sanità pioneered systematic urban death registration. Parish priests across Venice were legally obligated to report every single burial alongside the deceased's age, symptoms, and neighborhood—creating thick bound "necrology" ledgers still preserved in Venetian archives. By comparing weekly deaths against seasonal baseline averages, clerks spotted silent early plague clusters weeks before panic emptied city markets.

Paragraph D: Critics nonetheless observe sharp social inequalities embedded inside Renaissance quarantine governance. Wealthy Venetian nobles frequently fled to tranquil mainland countryside villas around Padua as soon as port alarms rang, leaving impoverished textile weavers and dockworkers trapped inside sealed tenement alleys—subject to abrupt domestic house lockups, confiscation of soiled bedding, and harsh fines for concealing sick relatives.

Paragraph E: Yet over three centuries, coordinated Adriatic lazarettos, international consular alerts, and death registries gradually curbed epidemic devastation across western Europe. While plague vanished entirely from British shores after London's 1665 outbreak and from western Mediterranean ports after Marseille's tragic 1720 breach—triggered when a merchant captain briefly bypassed quarantine checks—the administrative architecture forged in Venice's lagoon still shapes modern border health surveillance today.`,
        questions: [
          {
            id: 'cd_reading_m11_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Venice\'s 1486 Health Office operated year-round rather than forming solely during sudden plague emergencies.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states the Magistrato alla Sanità transitioned response toward continuous year-round disease surveillance.'
          },
          {
            id: 'cd_reading_m11_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Italian city-states kept outbreak intelligence strictly secret from rivals such as Milan and Florence.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states Milan, Florence, and Genoa regularly exchanged courier bulletins and imposed coordinated cordons.'
          },
          {
            id: 'cd_reading_m11_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'All Venetian social classes experienced quarantine lockdowns inside identical crowded urban tenements.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D contrasts wealthy nobles fleeing to Padua country villas against poor weavers trapped in sealed tenement alleys.'
          },
          {
            id: 'cd_reading_m11_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Parish priests received triple silver bonuses for compiling burial necrology books accurately.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C notes parish priests were legally obligated to report burials with no mention of silver bonuses.'
          },
          {
            id: 'cd_reading_m11_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Marseille\'s 1720 plague disaster began after standard port quarantine rules were briefly circumvented.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E notes Marseille\'s tragic 1720 breach was triggered when a merchant captain briefly bypassed quarantine checks.'
          },
          {
            id: 'cd_reading_m11_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Venice founded a permanent administrative agency called the ______ alla Sanità in 1486.',
            correctAnswer: 'MAGISTRATO',
            explanation: 'Paragraph A names the Magistrato alla Sanità.'
          },
          {
            id: 'cd_reading_m11_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Merchants and diplomatic posts abroad sent ______ alerts whenever plague mortality rose overseas.',
            correctAnswer: 'CODED',
            explanation: 'Paragraph B states embassies and merchants mailed urgent coded plague dispatches.'
          },
          {
            id: 'cd_reading_m11_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Systematic parish death ledgers known as ______ records helped clerks spot abnormal mortality spikes early.',
            correctAnswer: 'NECROLOGY',
            explanation: 'Paragraph C specifies thick bound "necrology" ledgers still preserved in Venetian archives.'
          },
          {
            id: 'cd_reading_m11_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Affluent elites escaped urban quarantines by retreating to peaceful rural estates near ______.',
            correctAnswer: 'PADUA',
            explanation: 'Paragraph D notes wealthy nobles fled to mainland countryside villas around Padua.'
          },
          {
            id: 'cd_reading_m11_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'How did parish burial tracking aid Venetian health officials mechanically?',
            options: [
              'A. It trained parish clergy to perform antiseptic surgery inside docks',
              'B. It identified which nobles owned villas near Padua',
              'C. It automatically refunded marine insurance losses to Syrian spice traders',
              'D. Comparing weekly burial counts against normal seasonal baselines caught outbreaks early'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C explains comparing weekly deaths against seasonal baseline averages spotted early clusters weeks ahead of panic.'
          },
          {
            id: 'cd_reading_m11_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What dark social inequality characterized Renaissance plague measures in Paragraph D?',
            options: [
              'A. Sailors from England paid zero anchoring taxes while French captains went to jail',
              'B. Wealthy nobles departed to country villas while poor urban artisans suffered locked tenements and fines',
              'C. Priests stayed immune inside Lazzaretto hospitals while merchants rebuilt ships',
              'D. Only textile merchants could consult surviving archival death ledgers'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D contrasts wealthy nobles fleeing to Padua villas against poor weavers/dockworkers facing house lockups and bedding confiscation.'
          },
          {
            id: 'cd_reading_m11_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why does Paragraph E mention London (1665) and Marseille (1720)?',
            options: [
              'A. To prove quarantine islands never blocked maritime plague in western Europe',
              'B. To argue modern air travel ignores port screening lessons entirely',
              'C. To celebrate British sailors inventing permanent health boards before 1486',
              'D. To mark the final major western plague disasters alongside an example showing what happened when quarantine failed'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E notes plague vanished from Britain after 1665 and western Mediterranean ports after Marseille\'s 1720 quarantine breach.'
          },
          {
            id: 'cd_reading_m11_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What central legacy did Venice\'s lagoon health system leave for modern civilization?',
            options: [
              'A. Combining permanent surveillance offices, international warnings, and port checks',
              'B. Burning suspect spice hulls inside wooden harbor canals',
              'C. Replacing diplomatic embassies worldwide with parish priests',
              'D. Soaking modern airport currency in heated wine vinegar'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraphs A–E highlight permanent health boards, coded alerts, death tracking, and border health surveillance.'
          },
          {
            id: 'cd_reading_m11_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Venice\'s parish priests had to record the age and symptoms of every person buried in the city.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states priests were legally obligated to report every burial alongside age, symptoms, and neighborhood.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 12 (MODERATE): cd_reading_m12 (Renewable Ammonia as Zero-Carbon Shipping Fuel)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m12',
    testNumber: 12,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 12: Renewable Ammonia as Zero-Carbon Shipping Fuel',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on deep-sea freight decarbonization, green Haber-Bosch synthesis, and marine engine toxicity engineering.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Why Transoceanic Freight Cannot Simply Run on Batteries',
        subtitle: 'Energy density physics driving maritime carriers toward carbon-free nitrogen fuels',
        text: `Paragraph A: Global merchant shipping carries nearly ninety percent of international traded merchandise while burning sludgy heavy bunker oil responsible for roughly three percent of global carbon dioxide emissions. Whereas commuter ferries navigating short Scandinavian fjords recharge lithium-ion battery banks cleanly between twenty-minute dockings, massive ultra-large container vessels crossing the Pacific from Shanghai to Rotterdam operate at sea for three consecutive weeks without touching port power cables.

Paragraph B: Basic volumetric physics rules out batteries for transoceanic freighters. Heavy fuel oil stores roughly thirty-eight megajoules of chemical energy per liter; even next-generation marine battery packs yield barely two megajoules per liter. Equipping a twenty-thousand-container freighter with enough lithium-ion cells to cross the Pacific nonstop would consume nearly the vessel's entire cargo hold weight and displacement—leaving virtually zero deck capacity for profitable commercial containers.

Paragraph C: Liquid hydrogen initially looked like an enticing carbon-free marine alternative, burning cleanly with oxygen to emit pure water vapor. However, keeping hydrogen liquefied demands chilling fuel tanks continuously down to minus 253 degrees Celsius—just twenty degrees above absolute zero—and still occupies four times the tank volume of marine oil for equivalent voyage range. Insulating gigantic cryogenic spheres across pitch-black ocean swells proves ruinously expensive for cargo shipyards.

Paragraph D: Consequently, naval architects increasingly focus on anhydrous ammonia (NH3)—a simple nitrogen-hydrogen molecule already traded at scale globally as agricultural fertilizer feedstock. Ammonia stores easily as a liquid under mild refrigeration near minus thirty-three degrees Celsius or modest tank pressure at ambient air temperatures, utilizing decades-old coastal port refrigeration plumbing already built beside bulk chemical terminals worldwide.

Paragraph E: Crucially, ammonia contains zero carbon atoms inside its chemical formula. When burned inside high-compression marine diesel engines—paired with a tiny five-percent pilot spray of biodiesel to ignite sluggish ammonia droplets cleanly—exhaust funnels emit zero carbon dioxide, shifting decarbonization hurdles away from onboard tank bulk toward clean shore production.`,
        questions: [
          {
            id: 'cd_reading_m12_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Large ocean freighters currently burn thick residual ______ responsible for roughly 3% of global CO2 output.',
            correctAnswer: 'BUNKER OIL',
            explanation: 'Paragraph A names sludgy heavy bunker oil.'
          },
          {
            id: 'cd_reading_m12_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Crossing the Pacific nonstop on batteries would swallow a container ship\'s profitable ______ space.',
            correctAnswer: 'CARGO HOLD',
            explanation: 'Paragraph B states batteries would consume nearly the vessel\'s entire cargo hold weight and displacement.'
          },
          {
            id: 'cd_reading_m12_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Liquid hydrogen demands bulky cryogenic storage chilled to minus 253 degrees ______.',
            correctAnswer: 'CELSIUS',
            explanation: 'Paragraph C specifies chilling fuel tanks to minus 253 degrees Celsius.'
          },
          {
            id: 'cd_reading_m12_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Existing port refrigeration terminals already manage bulk ______ destined for farm fertilizer markets.',
            correctAnswer: 'AMMONIA',
            explanation: 'Paragraph D explains ammonia (NH3) is already traded globally as fertilizer feedstock using coastal refrigeration terminals.'
          },
          {
            id: 'cd_reading_m12_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Marine ammonia engines inject a slight ignition ______ of biodiesel because pure ammonia burns reluctantly.',
            correctAnswer: 'PILOT SPRAY',
            explanation: 'Paragraph E specifies a tiny five-percent pilot spray of biodiesel to ignite sluggish ammonia droplets.'
          },
          {
            id: 'cd_reading_m12_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Short-route fjord passenger ferries have already adopted electric battery propulsion successfully.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes commuter ferries navigating short Scandinavian fjords recharge lithium-ion banks between dockings.'
          },
          {
            id: 'cd_reading_m12_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Modern marine battery packs store roughly the same energy per liter as heavy bunker fuel oil.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B contrasts 38 megajoules/liter for heavy fuel oil against barely 2 megajoules/liter for batteries.'
          },
          {
            id: 'cd_reading_m12_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Liquid hydrogen requires four times larger ship fuel tanks than marine oil to sail equal distances.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states liquid hydrogen occupies four times the tank volume of marine oil for equivalent range.'
          },
          {
            id: 'cd_reading_m12_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Rotterdam harbor banned all non-electric container ships from docking after January 2024.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Rotterdam is named solely as a Pacific-Europe shipping destination in Paragraph A; no 2024 ban is mentioned.'
          },
          {
            id: 'cd_reading_m12_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Roughly how much of global traded merchandise moves by merchant shipping?',
            correctAnswer: 'NEARLY NINETY PERCENT',
            explanation: 'Paragraph A states global merchant shipping carries nearly ninety percent of international traded merchandise.'
          },
          {
            id: 'cd_reading_m12_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'At what mild freezing temperature does liquid ammonia stay stored cleanly under normal pressure?',
            correctAnswer: 'MINUS THIRTY-THREE',
            explanation: 'Paragraph D specifies mild refrigeration near minus thirty-three degrees Celsius.'
          },
          {
            id: 'cd_reading_m12_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why do shipyards regard cryogenic liquid hydrogen tanks as impractical for long cargo voyages?',
            options: [
              'A. Burning pure hydrogen generates dangerous carbon monoxide exhaust',
              'B. Ultra-cold minus 253°C cooling and fourfold tank bulk impose prohibitive costs and lost space',
              'C. Port terminals lack clean drinking water to refill marine steam boilers',
              'D. Hydrogen freezes solid whenever ships cross warm equatorial currents'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C cites minus 253°C refrigeration, 4x tank volume, and ruinous cryogenic insulation costs.'
          },
          {
            id: 'cd_reading_m12_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why does ammonia require a small five-percent biodiesel injection inside marine piston engines?',
            options: [
              'A. To lubricate leaking bronze propeller bearings at sea',
              'B. To dye invisible exhaust plumes bright orange for port inspectors',
              'C. To reliably ignite sluggish ammonia fuel droplets inside compression chambers',
              'D. To raise fuel tank storage pressures above 250 atmospheres'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E explains pure ammonia droplets are sluggish to ignite cleanly, requiring a 5% pilot spray.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Green Synthesis Versus Fossil Methane in Ammonia Production',
        subtitle: 'Decarbonizing the century-old Haber-Bosch process with renewable electrolyzers',
        text: `Paragraph A: Calling ammonia a "zero-carbon marine fuel" carries an awkward chemical catch: today's global ammonia output is fiercely carbon-intensive. Almost all of the roughly 180 million metric tons manufactured yearly for crop fertilizers relies on the century-old Haber-Bosch process powered by fossil methane (natural gas) or coal—releasing nearly two metric tons of carbon dioxide into the sky for every ton of ammonia produced.

Paragraph B: Conventional "gray" ammonia plants generate industrial hydrogen cheaply through steam methane reforming: reacting natural gas with scalding steam over nickel catalysts before scrubbing out leftover carbon dioxide into the atmosphere. Replacing fossil fuel oil in ocean freighters with gray ammonia would therefore worsen global emissions rather than reduce them, merely shifting smokestacks from ocean shipping lanes onto continental chemical parks.

Paragraph C: Producing authentic climate-friendly "green" ammonia skips coal and methane completely. Massive alkaline or proton-exchange membrane electrolyzers driven strictly by dedicated wind parks or desert solar arrays split ordinary purified seawater into clean hydrogen gas. Concurrently, industrial air separation towers chill surrounding atmosphere to harvest pure nitrogen gas before compressing both clean gases over iron catalysts to form zero-emission green ammonia.

Paragraph D: Scaling green ammonia faces sharp economic hurdles alongside bright solar geography. Because continuous Haber-Bosch synthesis towers operate optimally under steady pressures near two hundred atmospheres and 450 degrees Celsius, variable afternoon clouds or evening wind lulls destabilize catalyst beds unless factories build costly hydrogen buffer caverns and giant battery smoothing stations. Consequently, remote sunny regions combining strong steady wind and cheap solar—such as Western Australia, Chile's Atacama coast, and Namibia—emerge as prime export fueling hubs.

Paragraph E: Even at prime renewable hubs, green ammonia currently costs roughly two to three times more per ton than fossil gray ammonia. Closing that cost gap depends heavily on falling electrolyzer hardware prices alongside upcoming International Maritime Organization (IMO) carbon levies penalizing dirty fossil marine fuels.`,
        questions: [
          {
            id: 'cd_reading_m12_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph names three sun- and wind-rich regions favored as future green fuel export hubs?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D identifies Western Australia, Chile\'s Atacama coast, and Namibia.'
          },
          {
            id: 'cd_reading_m12_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph explains why using conventional fertilizer-grade ammonia would actually raise total emissions?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B states burning gray ammonia made via steam methane reforming shifts smokestacks onshore and worsens total emissions.'
          },
          {
            id: 'cd_reading_m12_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph details how water splitting and chilled air capture supply ingredients for clean fuel?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C explains renewable electrolyzers splitting water for hydrogen and air separation towers chilling air for nitrogen.'
          },
          {
            id: 'cd_reading_m12_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph mentions international shipping fees that could help eliminate green fuel price gaps?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E cites International Maritime Organization (IMO) carbon levies penalizing fossil marine fuels.'
          },
          {
            id: 'cd_reading_m12_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Roughly 180 million tons of ammonia yearly still rely on the century-old ______ process fueled by coal or methane.',
            correctAnswer: 'HABER-BOSCH',
            explanation: 'Paragraph A identifies the century-old Haber-Bosch process.'
          },
          {
            id: 'cd_reading_m12_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Conventional plants produce hydrogen via steam methane reforming across heated ______ catalysts.',
            correctAnswer: 'NICKEL',
            explanation: 'Paragraph B specifies reacting natural gas with steam over nickel catalysts.'
          },
          {
            id: 'cd_reading_m12_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Zero-carbon marine fuel plants use solar-powered ______ to split purified seawater cleanly.',
            correctAnswer: 'ELECTROLYZERS',
            explanation: 'Paragraph C describes alkaline or proton-exchange membrane electrolyzers splitting purified seawater.'
          },
          {
            id: 'cd_reading_m12_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Cold cryogenic ______ harvest pure nitrogen gas directly from ambient outdoor air.',
            correctAnswer: 'SEPARATION TOWERS',
            explanation: 'Paragraph C states industrial air separation towers chill surrounding atmosphere to harvest nitrogen.'
          },
          {
            id: 'cd_reading_m12_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Fluctuating wind and clouds disturb continuous synthesis unless sites invest in underground ______ reserves.',
            correctAnswer: 'HYDROGEN BUFFER',
            explanation: 'Paragraph D cites costly hydrogen buffer caverns and battery smoothing stations.'
          },
          {
            id: 'cd_reading_m12_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'Every ton of traditional fossil ammonia releases almost two tons of atmospheric carbon dioxide during manufacturing.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A explicitly reports nearly two metric tons of CO2 released per ton of ammonia produced.'
          },
          {
            id: 'cd_reading_m12_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'Haber-Bosch reactors perform smoothly even if incoming electrical supplies swing erratically every hour.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states variable clouds or wind lulls destabilize catalyst beds unless buffer caverns smooth supply.'
          },
          {
            id: 'cd_reading_m12_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'Green ammonia already sells at half the wholesale price of natural-gas fertilizer ammonia.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E notes green ammonia costs roughly two to three times more per ton than fossil gray ammonia.'
          },
          {
            id: 'cd_reading_m12_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Chile\'s Atacama export terminals currently load more green ammonia onto tankers than Rotterdam imports.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D lists Atacama as a prime potential export hub with no tonnage comparison against Rotterdam imports.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Engine Toxicity, Nitrous Oxide Risks, and Crew Safety Engineering',
        subtitle: 'Managing lethal leaks and unexpected potent greenhouse exhaust gases at sea',
        text: `Paragraph A: Even after securing affordable solar ammonia supplies, marine safety regulators face a sobering engineering hurdle inside ship engine rooms: anhydrous ammonia is acutely toxic and corrosive. Unlike diesel oil spills that coat beaches visibly yet rarely kill sleeping sailors instantly, inhaling even three hundred parts per million of escaping ammonia vapor triggers severe respiratory airway spasms and fatal pulmonary edema within minutes.

Paragraph B: Protecting merchant crews aboard rolling deep-sea vessels therefore requires thorough naval redesigns. Shipbuilders isolating ammonia tanks behind double-walled stainless-steel fuel pipes route all engine valves inside negatively pressurized ventilation trunks equipped with continuous laser gas-sniffers. Should even a pinhole gasket leak occur miles from shore, automated deluge water-mist curtains instantly absorb soluble escaping vapor into harmless alkaline wash tanks rather than venting lethal clouds across crew decks.

Paragraph C: Beyond acute poison risks, combustion chemists warn of an insidious climate trap inside engine exhaust stacks. Burning nitrogen-rich ammonia imperfectly at excessively cool piston temperatures can generate stray nitrous oxide (N2O)—a potent long-lived greenhouse gas nearly three hundred times stronger at trapping atmospheric heat per kilogram than carbon dioxide. Even a tiny two-percent unburned N2O slip could quietly erase much of ammonia's promised climate benefit.

Paragraph D: Fortunately, marine engine manufacturers including MAN Energy Solutions and WinGD address N2O and nitrogen-oxide emissions cleanly using selective catalytic reduction (SCR) exhaust scrubbers—metal honeycomb filters coated with vanadium-titanium catalysts that inject trace urea mist to convert harmful nitrogen oxides into harmless ordinary atmospheric nitrogen gas and pure water steam before exiting vessel funnels.

Paragraph E: Meanwhile, prudent port authorities hesitate before granting open harbor bunkering permits until uniform international seafarer training manuals standardize emergency gas-mask drills alongside clear marine spill protocols. Just as shipping overcame nineteenth-century anxieties over pressurized high-pressure steam boilers and twentieth-century LNG methane tankers through rigorous double-hull discipline, rigorous engineering turns hazardous green ammonia into a safe workhorse of clean maritime trade.`,
        questions: [
          {
            id: 'cd_reading_m12_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Severe lethal inhalation risks posed by leaking ammonia vapor aboard ships',
              'ii. Double pipes, vacuum trunks, and water-mist curtains isolate engine leaks',
              'iii. Exhaust scrubbers break down stray emissions into harmless atmospheric gases',
              'iv. Building international crew training rules inspired by past maritime breakthroughs',
              'v. Imperfect piston combustion risks emitting potent nitrous oxide greenhouse gas',
              'vi. Banning steel engine valves aboard Pacific container vessels'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A highlights acute toxicity and fatal pulmonary edema at 300 ppm.'
          },
          {
            id: 'cd_reading_m12_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Severe lethal inhalation risks posed by leaking ammonia vapor aboard ships',
              'ii. Double pipes, vacuum trunks, and water-mist curtains isolate engine leaks',
              'iii. Exhaust scrubbers break down stray emissions into harmless atmospheric gases',
              'iv. Building international crew training rules inspired by past maritime breakthroughs',
              'v. Imperfect piston combustion risks emitting potent nitrous oxide greenhouse gas',
              'vi. Banning steel engine valves aboard Pacific container vessels'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B details double-walled pipes, negative-pressure trunks, laser sensors, and deluge water-mist curtains.'
          },
          {
            id: 'cd_reading_m12_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Severe lethal inhalation risks posed by leaking ammonia vapor aboard ships',
              'ii. Double pipes, vacuum trunks, and water-mist curtains isolate engine leaks',
              'iii. Exhaust scrubbers break down stray emissions into harmless atmospheric gases',
              'iv. Building international crew training rules inspired by past maritime breakthroughs',
              'v. Imperfect piston combustion risks emitting potent nitrous oxide greenhouse gas',
              'vi. Banning steel engine valves aboard Pacific container vessels'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C warns cool incomplete combustion produces N2O, nearly 300x stronger than CO2.'
          },
          {
            id: 'cd_reading_m12_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Severe lethal inhalation risks posed by leaking ammonia vapor aboard ships',
              'ii. Double pipes, vacuum trunks, and water-mist curtains isolate engine leaks',
              'iii. Exhaust scrubbers break down stray emissions into harmless atmospheric gases',
              'iv. Building international crew training rules inspired by past maritime breakthroughs',
              'v. Imperfect piston combustion risks emitting potent nitrous oxide greenhouse gas',
              'vi. Banning steel engine valves aboard Pacific container vessels'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains SCR exhaust scrubbers converting nitrogen oxides into harmless nitrogen and steam.'
          },
          {
            id: 'cd_reading_m12_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Severe lethal inhalation risks posed by leaking ammonia vapor aboard ships',
              'ii. Double pipes, vacuum trunks, and water-mist curtains isolate engine leaks',
              'iii. Exhaust scrubbers break down stray emissions into harmless atmospheric gases',
              'iv. Building international crew training rules inspired by past maritime breakthroughs',
              'v. Imperfect piston combustion risks emitting potent nitrous oxide greenhouse gas',
              'vi. Banning steel engine valves aboard Pacific container vessels'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph E links future port bunkering standards and gas-mask drills to earlier steam and LNG tanker safety transitions.'
          },
          {
            id: 'cd_reading_m12_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'How do marine safety engineers prevent small fuel-pipe pinhole leaks from reaching crew quarters?',
            options: [
              'A. Pipes run inside negatively ventilated double walls equipped with water-mist absorption curtains',
              'B. Crew cabins sit on towed barges trailed behind container freighters',
              'C. Sailors ignite any escaping vapor continuously with pilot diesel torches',
              'D. Tanks remain completely unpressurized inside open outdoor cargo bays'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B outlines double-walled pipes, negative-pressure trunks, laser sensors, and deluge water-mist curtains absorbing soluble ammonia.'
          },
          {
            id: 'cd_reading_m12_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why does even a small two-percent nitrous oxide exhaust leak pose serious climate concern?',
            options: [
              'A. Nitrous oxide immediately corrodes solar arrays installed on ship bridges',
              'B. Exhaust scrubbers stop working altogether above zero degrees Celsius',
              'C. N2O converts clean ocean rainwater into heavy bunker fuel sludge',
              'D. Molecule for molecule, N2O traps roughly three hundred times more atmospheric heat than CO2'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C states N2O is nearly three hundred times stronger at trapping heat per kilogram than carbon dioxide.'
          },
          {
            id: 'cd_reading_m12_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What historical precedent does Paragraph E invoke to argue ammonia safety barriers are solvable?',
            options: [
              'A. Nineteenth-century sailing galleys carrying wooden barrels of Ragusa grain',
              'B. Earlier adoption of safety engineering for pressurized steam boilers and LNG methane ships',
              'C. Replacing ocean container hulls permanently with Scandinavian fjord batteries',
              'D. Prohibiting all chemical cargo shipments across Asian shipping ports'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E compares ammonia transitions to past marine safety engineering for pressurized steam boilers and LNG tankers.'
          },
          {
            id: 'cd_reading_m12_q35',
            number: 35,
            type: 'true_false_not_given',
            questionText: 'Water sprays quickly dissolve leaking ammonia gas into alkaline wash tanks because ammonia is water-soluble.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B notes deluge water-mist curtains absorb soluble escaping vapor into harmless alkaline wash tanks.'
          },
          {
            id: 'cd_reading_m12_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Selective catalytic reduction filters convert exhaust nitrogen oxides back into liquid diesel fuel.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states SCR scrubbers convert nitrogen oxides into harmless atmospheric nitrogen gas and pure water steam.'
          },
          {
            id: 'cd_reading_m12_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'All international ports already permit unrestricted commercial ammonia fueling without special crew drills.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E states port authorities hesitate before granting open harbor bunkering permits until international training manuals standardize drills.'
          },
          {
            id: 'cd_reading_m12_q38',
            number: 38,
            type: 'short_answer',
            questionText: 'At how many parts per million can inhaled ammonia vapor trigger lethal lung swelling within minutes?',
            correctAnswer: 'THREE HUNDRED',
            explanation: 'Paragraph A specifies even three hundred parts per million.'
          },
          {
            id: 'cd_reading_m12_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which trace liquid mist is sprayed inside vanadium-titanium exhaust scrubbers to neutralize nitrogen oxides?',
            correctAnswer: 'UREA MIST',
            explanation: 'Paragraph D specifies injecting trace urea mist inside SCR honeycombs.'
          },
          {
            id: 'cd_reading_m12_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'Besides LNG methane tankers, which nineteenth-century marine technology overcame earlier safety fears?',
            correctAnswer: 'STEAM BOILERS',
            explanation: 'Paragraph E cites pressurized high-pressure steam boilers.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 13 (MODERATE): cd_reading_m13 (The Psychology of Flow State and High Performance Cognition)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m13',
    testNumber: 13,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 13: The Psychology of Flow State and High Performance Cognition',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on Csikszentmihalyi\'s challenge-skill equilibrium, transient hypofrontality neuroscience, and workplace interruptions.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Autotelic Immersion and the Challenge-Skill Channel',
        subtitle: 'Mapping the subjective conditions enabling deep effortless absorption',
        text: `Paragraph A: Most psychological theories of motivation emphasize external rewards: paychecks, trophies, grades, or applause. Yet during the late 1960s, Hungarian-American psychologist Mihaly Csikszentmihalyi grew intrigued by painters, rock climbers, surgeons, and chess masters who poured exhausting concentration into demanding tasks yielding neither reliable money nor fame. Interviewing hundreds of performers across continents, he identified a remarkably uniform mental state he named "flow"—complete absorption where action unfolds seamlessly and self-conscious anxiety vanishes.

Paragraph B: Flow depends critically on a delicate equilibrium between perceived task difficulty and personal capability. When an assignment sits well below an individual's skill threshold—such as an experienced violinist repeating elementary scales—boredom rapidly intrudes and attention wanders toward everyday worries. Conversely, when a challenge dwarfs current mastery—such as an intermediate climber confronting an icy vertical cliff—panic and self-doubt overwhelm focus. Deep immersion blossoms solely inside a narrow diagonal "flow channel" stretching slightly above routine comfort.

Paragraph C: Beyond balanced challenge, Csikszentmihalyi documented two immediate structural triggers sustaining effortless absorption. First, the activity must furnish crystal-clear moment-to-moment goals: a surgeon sealing an artery or a tennis player returning a fast serve never pauses mid-action wondering what comes next. Second, performers receive instantaneous unambiguous feedback—hearing a cello note ring flat or watching a chess pawn fall tells the actor precisely how to adjust within milliseconds.

Paragraph D: Once inside flow, human time perception warps strikingly. Absorbed writers or coders regularly glance up amazed that four unbroken hours evaporated like twenty minutes—or conversely experience high-speed mountain-bike descents unfolding in lucid slow motion. Csikszentmihalyi described such intrinsically rewarding tasks as "autotelic" (from Greek roots meaning self-goal), undertaken primarily because intense focus itself feels deeply fulfilling.

Paragraph E: To capture real-time daily flow outside artificial labs, Csikszentmihalyi pioneered the Experience Sampling Method (ESM), equipping volunteers with electronic beepers that pinged randomly eight times daily for prompted mood logs. Surprisingly, ESM datasets spanning thousands of office employees revealed people reported experiencing authentic flow far more frequently at challenging work tasks than during passive evening television leisure—challenging folk assumptions about where human happiness grows best.`,
        questions: [
          {
            id: 'cd_reading_m13_q1',
            number: 1,
            type: 'matching_information',
            questionText: 'Which paragraph explains why tasks far harder or far easier than current ability block deep focus?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains mismatch yields boredom or panic while the diagonal "flow channel" balances skill and challenge.'
          },
          {
            id: 'cd_reading_m13_q2',
            number: 2,
            type: 'matching_information',
            questionText: 'Which paragraph outlines how random daily electronic prompts measured real-world work versus leisure moods?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E describes the Experience Sampling Method (ESM) showing flow happened more often at challenging work than passive TV viewing.'
          },
          {
            id: 'cd_reading_m13_q3',
            number: 3,
            type: 'matching_information',
            questionText: 'Which paragraph describes distorted awareness of clock duration alongside the Greek origin of "autotelic"?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D covers hours passing like minutes (or slow motion) and defines "autotelic" from Greek self-goal roots.'
          },
          {
            id: 'cd_reading_m13_q4',
            number: 4,
            type: 'matching_information',
            questionText: 'Which paragraph highlights two practical triggers involving immediate next steps and split-second performance signals?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C identifies crystal-clear moment-to-moment goals and instantaneous unambiguous feedback.'
          },
          {
            id: 'cd_reading_m13_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Csikszentmihalyi originally studied artists and climbers whose intense dedication lacked guaranteed financial payouts.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes he studied painters, climbers, surgeons, and chess masters pouring focus into tasks yielding neither reliable money nor fame.'
          },
          {
            id: 'cd_reading_m13_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Deep flow states thrive best when an activity stays completely easy and comfortably predictable.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explains tasks well below skill trigger boredom, whereas flow sits slightly above routine comfort.'
          },
          {
            id: 'cd_reading_m13_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Experience Sampling volunteers generally experienced higher flow during evening television watching than at challenging jobs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E reports volunteers felt flow far more frequently during challenging work than passive evening television leisure.'
          },
          {
            id: 'cd_reading_m13_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Csikszentmihalyi distributed electronic beepers exclusively to hospital surgeons across Chicago.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions thousands of office employees using beepers, with no Chicago-surgeon-only restriction.'
          },
          {
            id: 'cd_reading_m13_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'People deeply immersed inside flow lose heightened worry about outside onlookers judging them.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes self-conscious anxiety vanishes during flow.'
          },
          {
            id: 'cd_reading_m13_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Effortless absorption emerges strictly inside a narrow balanced ______ perched just above routine mastery.',
            correctAnswer: 'FLOW CHANNEL',
            explanation: 'Paragraph B terms this sweet spot the narrow diagonal "flow channel."'
          },
          {
            id: 'cd_reading_m13_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Hearing a sour string tone or spotting a dropped serve supplies immediate unambiguous ______ guiding instant correction.',
            correctAnswer: 'FEEDBACK',
            explanation: 'Paragraph C identifies instantaneous unambiguous feedback.'
          },
          {
            id: 'cd_reading_m13_q12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Tasks performed purely for internal enjoyment rather than external cash rewards are described as ______.',
            correctAnswer: 'AUTOTELIC',
            explanation: 'Paragraph D defines intrinsically rewarding tasks as "autotelic."'
          },
          {
            id: 'cd_reading_m13_q13',
            number: 13,
            type: 'fill_blank',
            questionText: 'In Csikszentmihalyi\'s field studies, participants carried paged ______ buzzing eight random times daily.',
            correctAnswer: 'BEEPERS',
            explanation: 'Paragraph E notes volunteers carried electronic beepers pinging randomly eight times daily.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Transient Hypofrontality and the Neurochemistry of Effortless Focus',
        subtitle: 'Why silencing inner self-criticism feels paradoxically light during intense mental output',
        text: `Paragraph A: Subjective reports of flow highlight an intriguing brain paradox: musicians improvising complex jazz solos or sprinters hitting peak stride report soaring mental clarity alongside a strange absence of labored conscious calculation. Early neuroscience guesses assumed intense flow must light up the prefrontal cortex—the brain's executive headquarters—like an overheated engine. Neuroimaging experiments since 2005 point toward almost the exact opposite mechanism.

Paragraph B: Neuroscientist Arne Dietrich formulated the "transient hypofrontality" hypothesis to explain why high flow feels effortless. Functional MRI scans of experienced jazz pianists improvising freely inside darkened MRI scanners—conducted by Charles Limb and Allen Braun—revealed sharp down-regulation across the dorsolateral prefrontal cortex, a region closely tied to explicit rule monitoring, long-term self-criticism, and worrying over social embarrassment. Meanwhile, sensorimotor and expressive auditory zones fired vigorously unobstructed.

Paragraph C: Temporarily quieting the brain's inner executive critic brings distinct speed dividends. Explicit conscious analysis relies on slow sequential working memory capable of handling only a handful of deliberate rules simultaneously. Once well-rehearsed motor skills hand control smoothly to subcortical implicit networks—specifically the basal ganglia and cerebellum—actions execute far faster without verbal self-second-guessing interrupting muscle timing.

Paragraph D: Neurochemistry reinforces this silent efficiency. Animal and human pharmacological assays indicate intense threat-balanced engagement releases bursts of norepinephrine—sharpening alert focus—paired alongside tonic dopamine reinforcing pattern anticipation and subtle endorphin compounds dulling mild physical discomfort. Crucially, excessive stress cortisol spikes ruin that delicate neurochemical cocktail, dropping performers out of fluid focus straight into rigid conscious panic ("choking under pressure").

Paragraph E: Researchers nevertheless caution against simplifying flow into a crude "prefrontal switch-off." Beginners attempting complex chess openings without deeply drilled subcortical memory cannot achieve effortless automaticity by relaxing prefrontal focus; transient hypofrontality unlocks seamless fluency strictly atop years of deliberate structured practice that etched reliable subroutines inside basal ganglia circuits.`,
        questions: [
          {
            id: 'cd_reading_m13_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Challenging early assumptions that deep focus maximizes prefrontal engine activity',
              'ii. Jazz pianist brain scans expose silenced self-monitoring regions',
              'iii. Why years of hard practice remain required before smooth automaticity emerges',
              'iv. Alerting and reward neurochemicals contrasted against panic hormones',
              'v. Faster implicit basal ganglia routines bypass slow conscious working memory',
              'vi. Training beginner chess players to meditate inside darkened scanners'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A contrasts expectations of an overheated prefrontal engine against neuroimaging findings.'
          },
          {
            id: 'cd_reading_m13_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Challenging early assumptions that deep focus maximizes prefrontal engine activity',
              'ii. Jazz pianist brain scans expose silenced self-monitoring regions',
              'iii. Why years of hard practice remain required before smooth automaticity emerges',
              'iv. Alerting and reward neurochemicals contrasted against panic hormones',
              'v. Faster implicit basal ganglia routines bypass slow conscious working memory',
              'vi. Training beginner chess players to meditate inside darkened scanners'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B explains Dietrich\'s transient hypofrontality and Limb/Braun\'s jazz pianist fMRI scans.'
          },
          {
            id: 'cd_reading_m13_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Challenging early assumptions that deep focus maximizes prefrontal engine activity',
              'ii. Jazz pianist brain scans expose silenced self-monitoring regions',
              'iii. Why years of hard practice remain required before smooth automaticity emerges',
              'iv. Alerting and reward neurochemicals contrasted against panic hormones',
              'v. Faster implicit basal ganglia routines bypass slow conscious working memory',
              'vi. Training beginner chess players to meditate inside darkened scanners'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C describes subcortical basal ganglia and cerebellum executing actions faster than sequential working memory.'
          },
          {
            id: 'cd_reading_m13_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Challenging early assumptions that deep focus maximizes prefrontal engine activity',
              'ii. Jazz pianist brain scans expose silenced self-monitoring regions',
              'iii. Why years of hard practice remain required before smooth automaticity emerges',
              'iv. Alerting and reward neurochemicals contrasted against panic hormones',
              'v. Faster implicit basal ganglia routines bypass slow conscious working memory',
              'vi. Training beginner chess players to meditate inside darkened scanners'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph D covers norepinephrine, dopamine, and endorphins versus excess stress cortisol triggering choking.'
          },
          {
            id: 'cd_reading_m13_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Challenging early assumptions that deep focus maximizes prefrontal engine activity',
              'ii. Jazz pianist brain scans expose silenced self-monitoring regions',
              'iii. Why years of hard practice remain required before smooth automaticity emerges',
              'iv. Alerting and reward neurochemicals contrasted against panic hormones',
              'v. Faster implicit basal ganglia routines bypass slow conscious working memory',
              'vi. Training beginner chess players to meditate inside darkened scanners'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph E warns beginners lack drilled basal ganglia subroutines needed before transient hypofrontality yields fluency.'
          },
          {
            id: 'cd_reading_m13_q19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What surprised Charles Limb and Allen Braun when scanning improvising jazz pianists inside MRI machines?',
            options: [
              'A. Auditory cortex areas went totally silent whenever improvisers played fast scales',
              'B. Pianists produced high cortisol levels identical to choking athletes',
              'C. Self-monitoring dorsolateral prefrontal zones dimmed down while sensory and expressive networks lit up',
              'D. Cerebellar motor maps vanished during complex musical solos'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B states scans showed sharp down-regulation across the dorsolateral prefrontal cortex while sensorimotor/auditory zones fired vigorously.'
          },
          {
            id: 'cd_reading_m13_q20',
            number: 20,
            type: 'multiple_choice',
            questionText: 'Why does handing execution over to the basal ganglia and cerebellum speed up athletic or artistic flow?',
            options: [
              'A. Subcortical circuits skip slow, limited verbal rules handled by conscious working memory',
              'B. Basal ganglia bypass muscle fibers completely during fast movement',
              'C. Working memory shuts off eye tracking completely during jazz concerts',
              'D. Endorphins double physical nerve electrical voltage inside fingers'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C contrasts slow sequential working memory against smooth fast execution via implicit subcortical basal ganglia and cerebellum.'
          },
          {
            id: 'cd_reading_m13_q21',
            number: 21,
            type: 'multiple_choice',
            questionText: 'Why can novices rarely replicate expert flow simply by trying to stop overthinking?',
            options: [
              'A. Novices produce zero dopamine during new board games',
              'B. Choking under pressure only occurs among veteran concert musicians',
              'C. MRI scanners temporarily freeze prefrontal growth in people under twenty',
              'D. Smooth subcortical fluency only runs atop years of deliberate prior training etching reliable routines'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E warns beginners cannot gain effortless fluency without years of structured practice storing subroutines in basal ganglia.'
          },
          {
            id: 'cd_reading_m13_q22',
            number: 22,
            type: 'short_answer',
            questionText: 'Who coined the "transient hypofrontality" theory describing prefrontal quietness during flow?',
            correctAnswer: 'ARNE DIETRICH',
            explanation: 'Paragraph B credits neuroscientist Arne Dietrich.'
          },
          {
            id: 'cd_reading_m13_q23',
            number: 23,
            type: 'short_answer',
            questionText: 'Which stress hormone triggers rigid choking when present in excessive amounts?',
            correctAnswer: 'CORTISOL',
            explanation: 'Paragraph D states excessive stress cortisol spikes drop performers into rigid conscious panic.'
          },
          {
            id: 'cd_reading_m13_q24',
            number: 24,
            type: 'short_answer',
            questionText: 'Besides dopamine and norepinephrine, which chemical compounds blunt minor physical aches during intense focus?',
            correctAnswer: 'ENDORPHIN COMPOUNDS',
            explanation: 'Paragraph D notes subtle endorphin compounds dulling mild physical discomfort.'
          },
          {
            id: 'cd_reading_m13_q25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Excessive executive rule checking relies on constrained sequential ______ rather than fast intuition.',
            correctAnswer: 'WORKING MEMORY',
            explanation: 'Paragraph C states explicit conscious analysis relies on slow sequential working memory.'
          },
          {
            id: 'cd_reading_m13_q26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Sudden excessive pressure causes fluent automated motion to collapse into rigid panic termed ______.',
            correctAnswer: 'CHOKING',
            explanation: 'Paragraph D refers to dropping into rigid conscious panic ("choking under pressure").'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Digital Fragmentation, Open-Plan Offices, and Structured Deep Work',
        subtitle: 'Why modern knowledge workplaces systematically dismantle the preconditions of flow',
        text: `Paragraph A: Although contemporary technology corporations preach relentlessly about employee "creative flow," daily office reality routinely undermines cognitive immersion. Observational time-motion studies tracked by informatics professor Gloria Mark across corporate software teams revealed employees rarely spend more than eleven uninterrupted minutes on a single complex analytical document before an email pop-up, chat ping, or colleague tap fractures attention.

Paragraph B: Crucially, recovering cognitive depth after even a brief thirty-second instant-message interruption costs far more than thirty lost seconds. Laboratory task-switching metrics demonstrate an average "re-orientation lag" exceeding twenty minutes before engineers rebuild fragile mental models of software code or legal arguments. Worse still, Mark documented that roughly half of daily workplace interruptions are self-inflicted: restless employees spontaneously switch tabs to check news feeds or inboxes every few minutes even when nobody pings them.

Paragraph C: Architectural trends compounded digital noise throughout the early twenty-first century. Driven primarily by real-estate square-footage savings disguised behind slogans praising "spontaneous hallway collaboration," firms demolished quiet enclosed offices in favor of vast glass-and-concrete open-plan halls. Empirical before-and-after studies at Fortune 500 headquarters by Harvard Business School researchers proved open-plan layouts actually slashed face-to-face talking by roughly seventy percent—because harassed workers plugged in noise-canceling headphones and hid silently behind Slack and email threads instead.

Paragraph D: Some progressive engineering firms now treat deep uninterrupted focus as a scarce collective asset rather than an individual character trait. Interventions range from instituting organization-wide "no-meeting Wednesdays" and silent morning blocks before noon, to encouraging asynchronous digital messaging etiquette that frees programmers from feeling obligated to answer routine chat bubbles within ninety seconds.

Paragraph E: Skeptics nonetheless observe an uncomfortable cultural catch: employees who retreat offline for three hours to enter deep flow often feel anxious appearing "unresponsive" to hurried managers judging productivity by glowing green chat dots. Restoring sustainable cognitive flow in knowledge industries therefore demands visible leadership reform—rewarding completed analytical quality rather than instantaneous inbox agility.`,
        questions: [
          {
            id: 'cd_reading_m13_q27',
            number: 27,
            type: 'summary_completion',
            questionText: 'Observational field data by Gloria Mark showed office workers average barely ______ minutes before experiencing an interruption.',
            correctAnswer: 'ELEVEN',
            explanation: 'Paragraph A states employees rarely spend more than eleven uninterrupted minutes on a single complex document.'
          },
          {
            id: 'cd_reading_m13_q28',
            number: 28,
            type: 'summary_completion',
            questionText: 'Rebuilding complex code models after brief interruptions causes an average ______ exceeding twenty minutes.',
            correctAnswer: 'RE-ORIENTATION LAG',
            explanation: 'Paragraph B quantifies an average "re-orientation lag" exceeding twenty minutes.'
          },
          {
            id: 'cd_reading_m13_q29',
            number: 29,
            type: 'summary_completion',
            questionText: 'Nearly half of observed office distractions prove ______ rather than arriving from external colleagues.',
            correctAnswer: 'SELF-INFLICTED',
            explanation: 'Paragraph B reports roughly half of daily workplace interruptions are self-inflicted tab switches.'
          },
          {
            id: 'cd_reading_m13_q30',
            number: 30,
            type: 'summary_completion',
            questionText: 'Contrary to corporate hype, vast ______ floor plans drove workers into silent headphone isolation.',
            correctAnswer: 'OPEN-PLAN',
            explanation: 'Paragraph C examines vast glass-and-concrete open-plan halls slashing face-to-face talk.'
          },
          {
            id: 'cd_reading_m13_q31',
            number: 31,
            type: 'summary_completion',
            questionText: 'Progressive organizations institute silent morning work blocks and shared ______ messaging rules.',
            correctAnswer: 'ASYNCHRONOUS',
            explanation: 'Paragraph D cites encouraging asynchronous digital messaging etiquette.'
          },
          {
            id: 'cd_reading_m13_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Checking a quick thirty-second message usually costs workers only thirty seconds of total productivity.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B emphasizes recovering fragile mental models imposes an average re-orientation lag exceeding twenty minutes.'
          },
          {
            id: 'cd_reading_m13_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Harvard Business School studies found removing office walls actually reduced in-person conversations.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states open-plan layouts slashed face-to-face talking by roughly 70%.'
          },
          {
            id: 'cd_reading_m13_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Gloria Mark found software coders interrupt themselves spontaneously just as often as outsiders interrupt them.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B states roughly half of daily workplace interruptions are self-inflicted.'
          },
          {
            id: 'cd_reading_m13_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Noise-canceling headphone sales doubled inside Harvard Business School bookstores after 2018.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Headphones are mentioned only as worker armor inside open-plan Fortune 500 headquarters.'
          },
          {
            id: 'cd_reading_m13_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'According to Paragraph C, what hidden corporate motivation largely drove open-plan office renovations?',
            options: [
              'A. Improving fresh outdoor air circulation inside glass factories',
              'B. Cutting commercial real-estate floor expenses under slogans praising collaboration',
              'C. Encouraging workers to stop wearing noise-canceling headphones',
              'D. Lowering weekly electricity bills for computer chat apps'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C notes renovations were driven primarily by real-estate square-footage savings disguised behind collaboration slogans.'
          },
          {
            id: 'cd_reading_m13_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did open-plan offices unexpectedly decrease face-to-face staff interactions by roughly seventy percent?',
            options: [
              'A. Employers strictly outlawed speaking aloud before lunch breaks',
              'B. Half of corporate employees permanently relocated to outdoor parks',
              'C. Glass walls blocked wireless internet routers between desks',
              'D. Distracted workers used headphones and digital chat apps to carve out privacy'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C explains harassed workers plugged in noise-canceling headphones and hid silently behind Slack and email.'
          },
          {
            id: 'cd_reading_m13_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What social anxiety stops workers from silencing chat apps for multi-hour stretches in Paragraph E?',
            options: [
              'A. Managers often mistake rapid chat replies and green active status icons for real productivity',
              'B. Software apps delete unsaved files if keyboards pause for two hours',
              'C. Co-workers refuse to invite silent colleagues to Wednesday meetings',
              'D. Human basal ganglia require ninety-second notification pings to stay alert'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph E describes fear of appearing "unresponsive" to hurried managers judging productivity by glowing green chat dots.'
          },
          {
            id: 'cd_reading_m13_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What change does Paragraph E identify as crucial for enabling deep flow in knowledge firms?',
            options: [
              'A. Mandating open-plan desks across remote home offices',
              'B. Installing electronic Csikszentmihalyi beepers on employee laptops',
              'C. Evaluating completed analytical output quality instead of instant message responsiveness',
              'D. Requiring employees to read news feeds every eleven minutes'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E concludes leadership must reward completed analytical quality rather than instantaneous inbox agility.'
          },
          {
            id: 'cd_reading_m13_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Eliminating meetings on specific weekdays is one structural strategy firms test to safeguard deep focus.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D cites instituting organization-wide "no-meeting Wednesdays" and silent morning blocks.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 14 (MODERATE): cd_reading_m14 (Agricultural Domestication of Einkorn and Emmer Wheats)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m14',
    testNumber: 14,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 14: Agricultural Domestication of Einkorn and Emmer Wheats',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on Fertile Crescent shatter-resistant rachis traits, botanical genetics of modern bread wheat, and ancient cereal trade.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Non-Shattering Ears and the Drawn-Out Dawn of Farming',
        subtitle: 'Why domesticating wild einkorn and emmer took millennia rather than a sudden invention',
        text: `Paragraph A: Modern bakeries depend overwhelmingly on wheat fields covering more global acreage than any other cereal crop. Yet wild grasses growing across rocky oak woodlands in the ancient Fertile Crescent—curving from Israel and Jordan northward across southeastern Turkey into Iraq—scarcely resembled uniform golden harvest fields. Ten to twelve millennia ago, hunter-forager bands gathered wild einkorn (Triticum monococcum) and wild emmer (Triticum dicoccoides) with flint-bladed sickles long before systematic sowing reshaped human societies.

Paragraph B: Wild cereal survival hinges on an adaptive reproductive mechanism fatal to hungry human harvesters: brittle seed stalks. When wild wheat ears ripen in dry late spring, tiny connective stem joints along the central ear axis—termed the rachis—fracture cleanly at the slightest breeze, scattering individual hulled grains across rocky ground to self-sow next autumn. Wait a few days past peak ripeness, and wild stands spill most edible calories into unreachable soil cracks.

Paragraph C: Very rarely—perhaps one spike in several million wild stalks—a spontaneous genetic mutation toughened the rachis joints so ripe grains remained locked firmly atop upright stems awaiting harvest. Early gatherers sweeping woven baskets through nearly ripe stands knocked loose brittle wild ears right onto soil before harvesting tougher non-shattering mutants intact! When people later saved leftover harvested grain and sowed cleared riverbank plots, tough-rachis mutants gradually rose from genetic rarities into dominant domestic harvests.

Paragraph D: Archaeological archaeobotany—identifying charred seed remains sifted carefully from ancient hearth ashes—overturned older textbook claims of a rapid "Neolithic Revolution" occurring inside a single village lifetime. Excavations at Tell Aswad and Abu Hureyra reveal tough-rachis domesticated wheat frequencies creeping upward haltingly over two to three millennia alongside persistent wild foraging.

Paragraph E: Why did full genetic fixation drag across millennia? Ancient farmers repeatedly harvested slightly under-ripe green stands to prevent seed loss, mixed newly domesticated seeds with wild roadside grasses during lean droughts, and traded seed stocks casually between neighboring valleys—proving plant domestication unfolded gradually as an unconscious evolutionary partnership rather than an abrupt agricultural blueprint.`,
        questions: [
          {
            id: 'cd_reading_m14_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Prehistoric Fertile Crescent foragers cut early wild grasses using stone ______ before permanent farms appeared.',
            correctAnswer: 'SICKLES',
            explanation: 'Paragraph A notes bands gathered wild einkorn and emmer with flint-bladed sickles.'
          },
          {
            id: 'cd_reading_m14_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'In wild wheat species, brittle joints along the central stem axis—called the ______—snap easily in spring winds.',
            correctAnswer: 'RACHIS',
            explanation: 'Paragraph B identifies tiny connective joints along the central axis termed the rachis.'
          },
          {
            id: 'cd_reading_m14_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Studying burned grain specimens recovered from old ______ layers revealed slow timelines of early crop change.',
            correctAnswer: 'HEARTH ASHES',
            explanation: 'Paragraph D states archaeobotany examines charred seed remains sifted from ancient hearth ashes.'
          },
          {
            id: 'cd_reading_m14_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Harvesting slightly green ______ fields helped early farmers minimize shattering losses of wild grains.',
            correctAnswer: 'UNDER-RIPE',
            explanation: 'Paragraph E explains ancient farmers harvested slightly under-ripe green stands to prevent seed loss.'
          },
          {
            id: 'cd_reading_m14_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Mixing saved domestic seed with wild roadside grasses slowed complete ______ fixation across millennia.',
            correctAnswer: 'GENETIC',
            explanation: 'Paragraph E asks why full genetic fixation dragged across millennia.'
          },
          {
            id: 'cd_reading_m14_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Wheat currently occupies more global farmland area than any other cereal grain.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states wheat fields cover more global acreage than any other cereal crop.'
          },
          {
            id: 'cd_reading_m14_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Wild wheat grasses drop their mature kernels onto soil naturally without waiting for human farmers.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states brittle rachis joints fracture in the slightest breeze, scattering grains to self-sow.'
          },
          {
            id: 'cd_reading_m14_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Domesticated tough-rachis wheat completely replaced wild wheat harvests within fifty years at Abu Hureyra.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D reports tough-rachis frequencies crept upward slowly over 2,000 to 3,000 years alongside persistent wild foraging.'
          },
          {
            id: 'cd_reading_m14_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Southeastern Turkey\'s ancient farmers recorded einkorn harvest weights on clay cylinder seals.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Southeastern Turkey is named geographically in Paragraph A with no mention of clay cylinder seals.'
          },
          {
            id: 'cd_reading_m14_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Besides Israel, Jordan, and Iraq, which modern country forms the northern arc of the Fertile Crescent named in Paragraph A?',
            correctAnswer: 'SOUTHEASTERN TURKEY',
            explanation: 'Paragraph A traces the Fertile Crescent from Israel and Jordan northward across southeastern Turkey into Iraq.'
          },
          {
            id: 'cd_reading_m14_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'How many millennia did tough-rachis frequencies take to rise gradually at Tell Aswad and Abu Hureyra?',
            correctAnswer: 'TWO TO THREE',
            explanation: 'Paragraph D states frequencies rose haltingly over two to three millennia.'
          },
          {
            id: 'cd_reading_m14_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'How did early gatherers accidentally increase rare non-shattering wheat mutants when harvesting and replanting?',
            options: [
              'A. Brittle wild ears dropped early before collection, leaving intact tough-stemmed seeds disproportionately inside saved sowing baskets',
              'B. Gatherers burned all tough stems intentionally on forest hilltops',
              'C. River floods sorted heavier wild stems separately from mutant reeds',
              'D. Wild goats refused to graze near fertile riverbanks'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C explains brittle ears shattered before harvest while tough mutants stayed attached for baskets and subsequent replanting.'
          },
          {
            id: 'cd_reading_m14_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What broader view of the "Neolithic Revolution" emerges from Paragraph D and E?',
            options: [
              'A. A lone visionary invented systematic wheat genetics inside a single harvest season',
              'B. Climate droughts wiped out every wild wheat relative before 8000 BCE',
              'C. Hunter-gatherers abandoned stone sickles permanently before gathering wild barley',
              'D. Plant domestication was a gradual, multi-millennial evolutionary interaction shaped by mixed harvesting habits'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraphs D–E emphasize gradual 2,000–3,000 year unconscious co-evolution rather than a sudden blueprint.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Hulled Einkorn, Emmer, and the Hybrid Birth of Free-Threshing Bread Wheat',
        subtitle: 'Tracing polyploid chromosomal leaps from gritty ancient porridges to airy leavened loaves',
        text: `Paragraph A: Even after tough-rachis einkorn and emmer stabilized across early Bronze Age farms, baking light, fluffy modern loaves remained physically impossible. Both ancient founder wheats possessed tightly clinging chaff husks—tough fibrous glumes fused stubbornly around every single grain kernel. Unlike modern wheat crops that drop naked berries cleanly under mild breeze winnowing, hulled einkorn and emmer demanded tedious repetitive mortar-and-pestle pounding—or roasting over clay hearths—simply to free kernels for gruel or flatbread.

Paragraph B: That stubborn husked biology changed forever through an extraordinary botanical accident occurring south of the Caspian Sea roughly eight thousand years ago. Cultivated tetraploid emmer wheat (carrying four sets of chromosomes, labeled genomes AABB) accidentally cross-pollinated with an unremarkable wild goatgrass weed (Aegilops tauschii, genome DD) invading irrigated farm margins. Instead of producing sterile mule-like seed pods, rare chromosomal doubling fused all three genomes together, spawning hexaploid bread wheat (Triticum aestivum, AABBDD).

Paragraph C: Inheriting the wild goatgrass D genome transformed baking physics overnight. First, additional genetic mutations loosened fibrous chaff glumes, producing "free-threshing" wheat ears whose plump naked kernels fell cleanly off stalks during simple cattle trampling and wooden pitchfork winnowing—slashing post-harvest kitchen labor by hours daily.

Paragraph D: Equally revolutionary was gluten chemistry encoded inside the newly acquired D genome. When baker's yeast ferments wheat dough, special elastic protein complexes—gliadin and glutenin—trap microscopic carbon dioxide gas bubbles inside stretchy structural networks. Neither diploid einkorn nor tetraploid emmer forms enough resilient elastic gluten to puff tall crusty loaves cleanly; only hexaploid bread wheat blends the extensibility and rubbery elasticity enabling high-volume yeast-leavened bread.

Paragraph E: Ironically, global triumph of high-yield hexaploid bread wheat pushed ancient hulled grains nearly to extinction across twentieth-century industrial farms. Only in recent decades have Mediterranean artisanal bakers and climate agronomists begun reviving drought-hardy einkorn and emmer—prized once again for deep nutty aromas, rich trace mineral profiles, and genetic resistance against fungal rust plagues.`,
        questions: [
          {
            id: 'cd_reading_m14_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph explains the accidental wild grass cross-breeding event near the Caspian Sea?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B describes tetraploid emmer crossing with wild goatgrass Aegilops tauschii south of the Caspian Sea.'
          },
          {
            id: 'cd_reading_m14_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph details how two seed proteins work together to trap yeast gas bubbles in dough?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D names elastic proteins gliadin and glutenin trapping carbon dioxide gas bubbles.'
          },
          {
            id: 'cd_reading_m14_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph explains why preparing ancient hulled wheat originally demanded tiring mortar pounding?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A notes tight fibrous glumes clung stubbornly around each kernel, requiring mortar-and-pestle pounding or roasting.'
          },
          {
            id: 'cd_reading_m14_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph discusses modern culinary and disease-resistance motives for planting ancient wheats again?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E cites nutty aromas, trace minerals, and resistance against fungal rust plagues.'
          },
          {
            id: 'cd_reading_m14_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Early founder grains wore tough outer ______ fused tightly around individual seeds.',
            correctAnswer: 'CHAFF HUSKS',
            explanation: 'Paragraph A refers to tightly clinging chaff husks (tough fibrous glumes).'
          },
          {
            id: 'cd_reading_m14_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Hybridizing emmer with roadside ______ added the extra DD genome creating six-set bread wheat.',
            correctAnswer: 'GOATGRASS',
            explanation: 'Paragraph B identifies wild goatgrass weed Aegilops tauschii.'
          },
          {
            id: 'cd_reading_m14_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Looser outer coverings enabled ______ crops to release naked kernels quickly under cattle hooves.',
            correctAnswer: 'FREE-THRESHING',
            explanation: 'Paragraph C defines "free-threshing" wheat ears whose naked kernels fell cleanly during cattle trampling.'
          },
          {
            id: 'cd_reading_m14_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Fermented loaves rise tall because gliadin and ______ form resilient elastic protein bubbles.',
            correctAnswer: 'GLUTENIN',
            explanation: 'Paragraph D specifies gliadin and glutenin trapping carbon dioxide.'
          },
          {
            id: 'cd_reading_m14_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Breeders now revisit ancient einkorn partly to retrieve wild resistance against crop ______ diseases.',
            correctAnswer: 'FUNGAL RUST',
            explanation: 'Paragraph E notes genetic resistance against fungal rust plagues.'
          },
          {
            id: 'cd_reading_m14_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'Hulled einkorn and emmer drop naked seeds cleanly without needing mortar pounding or roasting.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states hulled einkorn and emmer demanded tedious mortar pounding or roasting to free kernels.'
          },
          {
            id: 'cd_reading_m14_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'Ancient goatgrass cross-pollination occurred near irrigated farms roughly eight thousand years ago.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B dates the accidental cross south of the Caspian Sea roughly eight thousand years ago.'
          },
          {
            id: 'cd_reading_m14_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'Pure diploid einkorn produces taller, fluffier yeast bread loaves than hexaploid bread wheat.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D explicitly states neither diploid einkorn nor tetraploid emmer forms enough elastic gluten to puff tall crusty loaves.'
          },
          {
            id: 'cd_reading_m14_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Italian government subsidies cover seventy percent of artisanal einkorn bakery rents.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No Italian subsidies or bakery rents appear anywhere in Paragraph E.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Durum Pasta, Green Revolution Dwarfing, and Narrowing Gene Pools',
        subtitle: 'Balancing booming twentieth-century grain yields against genetic vulnerability',
        text: `Paragraph A: While hexaploid bread wheat conquered leavened baking, ancient tetraploid emmer spun off its own enduring culinary branch: durum wheat (Triticum durum), whose amber glassy kernels yield coarse golden semolina ideal for dense Mediterranean pasta and North African couscous. Together, bread and durum lineages sustained Eurasian empires—yet remained perilously vulnerable whenever summer winds toppled tall waving stalks flat into muddy fields before sickle crews arrived.

Paragraph B: During the mid-twentieth century, agronomist Norman Borlaug triggered the famed "Green Revolution" by breeding high-yielding semi-dwarf wheat lines. Crossing Mexican and Japanese dwarf genetics (Norin 10) created sturdy short-stemmed stalks barely waist-high. When supplied generously with synthetic nitrogen fertilizer and river irrigation, squat sturdy plants poured nutritional energy straight into heavy golden grain heads without snapping sideways in summer rainstorms—multiplying Asian and Latin American wheat harvests dramatically within two decades.

Paragraph C: Yet extraordinary breeding triumph carried an unintended evolutionary cost: stark genetic homogenization. Replacing thousands of quirky, regionally adapted peasant "landraces" across Anatolia, Ethiopia, and northern India with a handful of uniform elite Green Revolution varieties stripped global wheat fields of diverse inherited defense alleles—rendering vast continental monocultures acutely vulnerable whenever rapidly mutating airborne pathogens evolve new strains.

Paragraph D: That vulnerability flashed sharply in 1999 when Ugandan plant pathologists identified "Ug99"—a virulent wind-borne stem-rust fungus race capable of piercing protective resistance genes guarding roughly eighty percent of the world's standing bread wheat crops. Only frantic international screening across ancient wild goatgrass collections and dusty Turkish emmer seed vaults uncovered fresh immune variants before spores marched across East Africa toward Asian breadbaskets.

Paragraph E: Modern seed conservationists—guarding half a million wheat accessions inside the Svalbard Global Seed Vault and Mexico's CIMMYT archives—therefore reject treating heirloom einkorn and emmer as nostalgic museum curiosities. Those ancient ragged hillside grasses act as living genetic spare-parts libraries essential to safeguarding global bread security in hotter, pathogen-rich futures.`,
        questions: [
          {
            id: 'cd_reading_m14_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Pasta-making emmer descendants and the old problem of wind-flattened stalks',
              'ii. How dwarf genetics prevented flattened harvests and boosted world output',
              'iii. Wiping out thousands of local farm strains heightened uniform disease exposure',
              'iv. Why global seed banks preserve heirloom wild grasses for future security',
              'v. A newly mutated fungal threat nearly bypassed global wheat immunity in 1999',
              'vi. Shipping North African couscous straight into Svalbard freezing tunnels'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A introduces durum pasta wheat alongside tall stalks flattening in summer winds.'
          },
          {
            id: 'cd_reading_m14_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Pasta-making emmer descendants and the old problem of wind-flattened stalks',
              'ii. How dwarf genetics prevented flattened harvests and boosted world output',
              'iii. Wiping out thousands of local farm strains heightened uniform disease exposure',
              'iv. Why global seed banks preserve heirloom wild grasses for future security',
              'v. A newly mutated fungal threat nearly bypassed global wheat immunity in 1999',
              'vi. Shipping North African couscous straight into Svalbard freezing tunnels'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B explains Borlaug\'s semi-dwarf Norin 10 crosses bearing heavier heads without toppling.'
          },
          {
            id: 'cd_reading_m14_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Pasta-making emmer descendants and the old problem of wind-flattened stalks',
              'ii. How dwarf genetics prevented flattened harvests and boosted world output',
              'iii. Wiping out thousands of local farm strains heightened uniform disease exposure',
              'iv. Why global seed banks preserve heirloom wild grasses for future security',
              'v. A newly mutated fungal threat nearly bypassed global wheat immunity in 1999',
              'vi. Shipping North African couscous straight into Svalbard freezing tunnels'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph C warns replacing diverse landraces with uniform monocultures left vast acreage exposed to new pathogens.'
          },
          {
            id: 'cd_reading_m14_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Pasta-making emmer descendants and the old problem of wind-flattened stalks',
              'ii. How dwarf genetics prevented flattened harvests and boosted world output',
              'iii. Wiping out thousands of local farm strains heightened uniform disease exposure',
              'iv. Why global seed banks preserve heirloom wild grasses for future security',
              'v. A newly mutated fungal threat nearly bypassed global wheat immunity in 1999',
              'vi. Shipping North African couscous straight into Svalbard freezing tunnels'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph D recounts Ug99 stem rust threatening 80% of bread wheat until wild goatgrass/emmer genes rescued immunity.'
          },
          {
            id: 'cd_reading_m14_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Pasta-making emmer descendants and the old problem of wind-flattened stalks',
              'ii. How dwarf genetics prevented flattened harvests and boosted world output',
              'iii. Wiping out thousands of local farm strains heightened uniform disease exposure',
              'iv. Why global seed banks preserve heirloom wild grasses for future security',
              'v. A newly mutated fungal threat nearly bypassed global wheat immunity in 1999',
              'vi. Shipping North African couscous straight into Svalbard freezing tunnels'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph E frames Svalbard and CIMMYT seed vaults as vital spare-parts libraries for food security.'
          },
          {
            id: 'cd_reading_m14_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why did Norman Borlaug breed shorter semi-dwarf wheat plants during the Green Revolution?',
            options: [
              'A. Short stems grew comfortably beneath shaded dense oak canopies',
              'B. Sturdy short stalks supported fertilizer-heavy grain heads without collapsing in rainstorms',
              'C. Waist-high wheat completely repelled hungry East African locust swarms',
              'D. Tall wheat roots poisoned local irrigation canals with excess starch'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B states sturdy short-stemmed stalks poured nitrogen energy into heavy grain heads without snapping sideways in rainstorms.'
          },
          {
            id: 'cd_reading_m14_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'How did the Ug99 outbreak demonstrate the danger of Green Revolution crop uniformity?',
            options: [
              'A. Farmers burned every traditional seed vault in Mexico after 1999',
              'B. Only synthetic nitrogen tanks in Japan stayed immune to Ugandan stem rust',
              'C. Coarse Mediterranean pasta loaves became toxic to livestock overnight',
              'D. Nearly four-fifths of commercial wheat lacked resistance until ancient emmer and goatgrass archives supplied fresh immunity'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D states Ug99 pierced resistance guarding ~80% of world wheat, requiring urgent screening of wild goatgrass and Turkish emmer vaults.'
          },
          {
            id: 'cd_reading_m14_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What phrase best summarizes the author\'s view of ancient heirloom grasses in Paragraph E?',
            options: [
              'A. Living genetic spare-parts libraries vital to breeding future resilient crops',
              'B. Obsolete medieval weeds better replaced entirely by hybrid barley',
              'C. Unprofitable curiosities fit strictly for tourist museum exhibits',
              'D. Fragile Arctic herbs requiring artificial indoor heaters to grow'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph E explicitly describes heirloom grasses as living genetic spare-parts libraries safeguarding future bread security.'
          },
          {
            id: 'cd_reading_m14_q35',
            number: 35,
            type: 'true_false_not_given',
            questionText: 'Japanese Norin 10 dwarf varieties contributed to Norman Borlaug\'s short-stemmed wheat crosses.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B specifies crossing Mexican and Japanese dwarf genetics (Norin 10).'
          },
          {
            id: 'cd_reading_m14_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Durum wheat produces golden semolina valued primarily for airy yeast sandwich bread rather than pasta.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states durum yields coarse golden semolina ideal for dense Mediterranean pasta and couscous.'
          },
          {
            id: 'cd_reading_m14_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'Svalbard Global Seed Vault stores samples exclusively gathered from Mexican mountain farms.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E mentions half a million wheat accessions across Svalbard and Mexico\'s CIMMYT, preserving diverse global lines.'
          },
          {
            id: 'cd_reading_m14_q38',
            number: 38,
            type: 'short_answer',
            questionText: 'What collective name do botanists give regionally adapted traditional peasant crop varieties?',
            correctAnswer: 'LANDRACES',
            explanation: 'Paragraph C identifies regionally adapted peasant "landraces."'
          },
          {
            id: 'cd_reading_m14_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'In which country was the dangerous Ug99 stem-rust fungus race first identified?',
            correctAnswer: 'UGANDA',
            explanation: 'Paragraph D states Ugandan plant pathologists identified "Ug99" (from Uganda).'
          },
          {
            id: 'cd_reading_m14_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'Roughly how many wheat seed accessions are conserved across Svalbard and CIMMYT collections?',
            correctAnswer: 'HALF A MILLION',
            explanation: 'Paragraph E states conservationists guard half a million wheat accessions.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 15 (MODERATE): cd_reading_m15 (Permafrost Thawing and Thermokarst Lake Methane Dynamics)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m15',
    testNumber: 15,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 15: Permafrost Thawing and Thermokarst Lake Methane Dynamics',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on Yedoma ice-rich soils, winter lake bubble emissions, and Arctic infrastructure stabilization.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Frozen Pleistocene Carbon Vaults Beneath Boreal Landscapes',
        subtitle: 'Understanding ice-rich Yedoma permafrost and abrupt thermokarst slumping',
        text: `Paragraph A: Stretching across nearly one-quarter of the Northern Hemisphere's landmass—from Alaskan spruce valleys across Canadian tundra to vast Siberian river basins—lies ground that has remained continuously frozen at or below zero degrees Celsius for at least two consecutive years: permafrost. Unlike sterile Antarctic rock sheets, northern permafrost acts as Earth's largest terrestrial organic deep freezer. For tens of thousands of years since the Pleistocene Ice Age, cold wet soils prevented dead mammoth-steppe roots, mosses, and peat from decaying completely.

Paragraph B: Soil carbon inventories compiled by polar geochemists estimate northern permafrost currently locks away roughly 1,400 to 1,600 billion metric tons of ancient organic carbon—nearly twice the total carbon presently circulating in Earth's entire atmosphere. As Arctic air temperatures warm three to four times faster than the global average, summer seasonal thaw depths penetrate deeper into frozen layers, awakening dormant soil microbes that eagerly feast on newly thawed Pleistocene vegetation.

Paragraph C: Climate models traditionally represented permafrost thaw as a tidy top-down gradual process—centimeter-by-centimeter warming creeping downward over centuries. Satellite field observations across Siberia and Alaska reveal a far more sudden collapse mechanism known as "abrupt thaw" or thermokarst slumping. Many Ice Age permafrost formations, called Yedoma soils, contain massive buried underground ice wedges accounting for up to eighty percent of total soil volume.

Paragraph D: Once a hot Arctic summer melts the top of a buried ice wedge, heavy overlying thawed soil loses solid structural scaffolding and caves dramatically inward—forming flooded craters, mudslides, and sunken thaw ponds within just a few seasons. Warm dark water pooling inside growing depressions absorbs far more solar radiation than bright white snow cover, melting surrounding ice walls laterally and chewing deeply into millennia-old carbon banks decades earlier than gentle top-down models forecast.

Paragraph E: Yet permafrost scientists reject panic claims predicting instantaneous "methane bombs" blowing off the entire Arctic overnight. Frozen mineral soils across drier rocky uplands release carbon mostly as slower-acting carbon dioxide over decades rather than explosive methane gas, underscoring why geography and soil moisture dictate polar climate feedbacks.`,
        questions: [
          {
            id: 'cd_reading_m15_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Ground is scientifically classified as permafrost only after staying frozen for at least ten consecutive decades.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A defines permafrost as ground frozen at or below 0°C for at least two consecutive years.'
          },
          {
            id: 'cd_reading_m15_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Northern permafrost soils store nearly double the carbon currently present in Earth\'s atmosphere.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B notes permafrost locks away 1,400–1,600 billion tons, nearly twice atmospheric carbon.'
          },
          {
            id: 'cd_reading_m15_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Ice wedges inside Siberian Yedoma formations can make up as much as eighty percent of underground soil volume.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states Yedoma soils contain buried ice wedges accounting for up to 80% of total soil volume.'
          },
          {
            id: 'cd_reading_m15_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Every thawing Arctic hillside releases carbon strictly as explosive methane gas regardless of moisture.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E explains frozen mineral soils across drier rocky uplands release carbon mostly as slower-acting carbon dioxide.'
          },
          {
            id: 'cd_reading_m15_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Canadian federal agencies installed underground refrigeration pipes beneath every highway in Alberta in 2019.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Canadian tundra is mentioned in Paragraph A, with no Alberta highway refrigeration pipes in Passage 1.'
          },
          {
            id: 'cd_reading_m15_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Why did cold wet Pleistocene conditions build up vast organic carbon deposits in northern soils?',
            options: [
              'A. Mammoth herds buried forest branches deliberately beneath snow dunes',
              'B. Ancient volcanoes coated Alaskan valleys in heat-resistant ash shields',
              'C. Ice-sheet rock crushed pure limestone directly into dark liquid oil',
              'D. Persistent sub-zero cold prevented dead plants and roots from decomposing completely'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph A explains cold wet soils prevented dead mammoth-steppe roots, mosses, and peat from decaying completely.'
          },
          {
            id: 'cd_reading_m15_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why does abrupt thermokarst slumping outpace traditional gradual top-down thaw simulations?',
            options: [
              'A. River tides continuously sweep thick warm tropical sands northward into Alaska',
              'B. Melting buried ice wedges triggers collapsing pits filled with heat-absorbing dark water that speeds lateral melting',
              'C. Dormant soil microbes radiate intense visible heat lamps underneath moss carpets',
              'D. Bright white winter snow absorbs far more solar radiation than bare summer soil'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D explains melting ice wedges cause ground collapse; dark pooled water absorbs sunlight and melts surrounding ice rapidly.'
          },
          {
            id: 'cd_reading_m15_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How does the author characterize extreme "methane bomb" media scenarios in Paragraph E?',
            options: [
              'A. Proven by recent winter drilling along Alaskan oil shelves',
              'B. Restricted solely to Antarctic glacial valleys',
              'C. Unavoidable once Arctic air reaches zero degrees Celsius in July',
              'D. Exaggerated, because dry upland soils emit mostly slower carbon dioxide across decades'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E notes scientists reject instantaneous "methane bomb" panic because dry uplands release mostly slower CO2 over decades.'
          },
          {
            id: 'cd_reading_m15_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Roughly what fraction of the Northern Hemisphere\'s land area is underlain by permafrost?',
            options: [
              'A. Nearly one-quarter',
              'B. Almost eighty percent',
              'C. Barely three percent',
              'D. Over one-half'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A specifies nearly one-quarter of the Northern Hemisphere\'s landmass.'
          },
          {
            id: 'cd_reading_m15_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'How much faster are Arctic air temperatures warming compared with the global planetary average?',
            correctAnswer: 'THREE TO FOUR',
            explanation: 'Paragraph B states Arctic air warms three to four times faster than the global average.'
          },
          {
            id: 'cd_reading_m15_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Which geological epoch produced the ancient un-rotted steppe grasses preserved inside northern permafrost?',
            correctAnswer: 'PLEISTOCENE ICE AGE',
            explanation: 'Paragraph A cites tens of thousands of years since the Pleistocene Ice Age.'
          },
          {
            id: 'cd_reading_m15_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'What specialized name do scientists give ice-rich Ice Age Siberian permafrost soils prone to collapsing?',
            correctAnswer: 'YEDOMA SOILS',
            explanation: 'Paragraph C names Ice Age formations called Yedoma soils.'
          },
          {
            id: 'cd_reading_m15_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What biological organisms wake up inside thawing permafrost soil to digest ancient plant matter?',
            correctAnswer: 'DORMANT SOIL MICROBES',
            explanation: 'Paragraph B states deeper thaw awakens dormant soil microbes.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Ebullition Bubbling and Frozen Methane Traps in Thermokarst Lakes',
        subtitle: 'Measuring winter gas pockets beneath clear Arctic lake ice',
        text: `Paragraph A: Across coastal lowland Alaska and northeastern Siberia, thermokarst ponds expand until thousands of deep oval lakes dot the flat tundra like scattered coins. Unlike sunlit dry peatlands where oxygen-breathing bacteria turn decaying roots mostly into carbon dioxide, waterlogged lake bottoms strip away dissolved oxygen rapidly. Under completely anaerobic bottom sediment, specialized archaea microbes—methanogens—digest ancient Ice Age carbon into methane (CH4), a greenhouse gas nearly thirty times more potent over a century than carbon dioxide.

Paragraph B: Ecologists monitoring northern lakes face tricky field measurements because methane escapes water through multiple distinct pathways. A small fraction diffuses smoothly molecule by molecule across liquid lake surfaces, often consumed along the way by hungry oxygen-zone methanotrophic bacteria before ever reaching skyward. Far larger volumes shoot straight upward from muddy lake beds in rapid pressurized gas streams—a dramatic bubbling phenomenon called ebullition.

Paragraph C: During frosty October freezes, expanding thermokarst lakes preserve a striking natural gas ledger inside transparent lake ice. As rising methane bubbles hit freshly frozen underside ice sheets, flat silvery coin-shaped gas pancakes freeze cleanly into stacked layered columns beneath snow-free black ice. Field hydrologists led by Katey Walter Anthony walk frozen Alaskan and Kolyma lowland lakes with ice picks and upturned funnels—literally piercing stacked white gas pockets to measure bubble volume and ignite escaping flares for demonstration.

Paragraph D: Radiocarbon dating performed on captured methane bubbles confirms how profoundly ancient lake bottoms reach. Rather than recycling purely recent summer moss, bubbling "hotspot" chimneys clustered along eroding muddy lake banks expel Pleistocene carbon sealed away twenty thousand to forty thousand years earlier. Moreover, once water depth exceeds roughly two meters, dark bottom sediment resists freezing completely solid through winter, creating an unfrozen "talik" bulb that feeds continuous year-round microbial gas production even under minus-forty-degree January winds.

Paragraph E: Fortunately, nature builds in long-term ecological brakes across aging tundra landscapes. After centuries of lateral erosion, thermokarst lakes frequently breach low gravelly ridges and drain suddenly into neighboring river valleys—exposing wet mudflats to drying air and pioneering sedge meadows that gradually shift ecosystems back from intense methane bubbling toward slower aerobic carbon capture.`,
        questions: [
          {
            id: 'cd_reading_m15_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Oxygen-free muddy lake beds switch microbial decay toward potent methane',
              'ii. Sudden natural lake drainage can eventually slow tundra methane bubbling',
              'iii. Tracing bubbling chimneys back tens of thousands of years inside unfrozen mud bulbs',
              'iv. Clear autumn ice freezes rising gas streams into measurable stacked columns',
              'v. Comparing gentle surface diffusion against sudden pressurized underwater bubbling',
              'vi. Pumping oxygen down Siberian rivers to freeze deep lake taliks'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A contrasts aerobic carbon dioxide decay against anaerobic archaea producing potent methane beneath lake bottoms.'
          },
          {
            id: 'cd_reading_m15_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Oxygen-free muddy lake beds switch microbial decay toward potent methane',
              'ii. Sudden natural lake drainage can eventually slow tundra methane bubbling',
              'iii. Tracing bubbling chimneys back tens of thousands of years inside unfrozen mud bulbs',
              'iv. Clear autumn ice freezes rising gas streams into measurable stacked columns',
              'v. Comparing gentle surface diffusion against sudden pressurized underwater bubbling',
              'vi. Pumping oxygen down Siberian rivers to freeze deep lake taliks'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph B contrasts slow molecular diffusion eaten by bacteria against rapid upward ebullition streams.'
          },
          {
            id: 'cd_reading_m15_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Oxygen-free muddy lake beds switch microbial decay toward potent methane',
              'ii. Sudden natural lake drainage can eventually slow tundra methane bubbling',
              'iii. Tracing bubbling chimneys back tens of thousands of years inside unfrozen mud bulbs',
              'iv. Clear autumn ice freezes rising gas streams into measurable stacked columns',
              'v. Comparing gentle surface diffusion against sudden pressurized underwater bubbling',
              'vi. Pumping oxygen down Siberian rivers to freeze deep lake taliks'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C describes transparent October ice trapping coin-shaped methane pancakes sampled by Katey Walter Anthony.'
          },
          {
            id: 'cd_reading_m15_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Oxygen-free muddy lake beds switch microbial decay toward potent methane',
              'ii. Sudden natural lake drainage can eventually slow tundra methane bubbling',
              'iii. Tracing bubbling chimneys back tens of thousands of years inside unfrozen mud bulbs',
              'iv. Clear autumn ice freezes rising gas streams into measurable stacked columns',
              'v. Comparing gentle surface diffusion against sudden pressurized underwater bubbling',
              'vi. Pumping oxygen down Siberian rivers to freeze deep lake taliks'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D dates escaping bubbles to 20,000–40,000 years ago and explains year-round production inside deep unfrozen taliks.'
          },
          {
            id: 'cd_reading_m15_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Under oxygen-starved lake silt, specialized archaea called ______ convert decayed organic carbon into CH4.',
            correctAnswer: 'METHANOGENS',
            explanation: 'Paragraph A identifies anaerobic archaea microbes called methanogens.'
          },
          {
            id: 'cd_reading_m15_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Rapid pressurized streams of gas shooting straight off muddy lake bottoms are known as ______.',
            correctAnswer: 'EBULLITION',
            explanation: 'Paragraph B terms this bubbling escape "ebullition."'
          },
          {
            id: 'cd_reading_m15_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Slow diffusing methane molecules are frequently eaten in upper water by ______ bacteria before escaping.',
            correctAnswer: 'METHANOTROPHIC',
            explanation: 'Paragraph B names oxygen-zone methanotrophic bacteria.'
          },
          {
            id: 'cd_reading_m15_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Deep lakes avoid freezing completely solid, forming a permanently unfrozen bottom sediment zone called a ______.',
            correctAnswer: 'TALIK',
            explanation: 'Paragraph D defines the unfrozen bottom sediment bulb as a "talik."'
          },
          {
            id: 'cd_reading_m15_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'When old lakes empty down river valleys, colonizing ______ gradually resume aerobic carbon absorption.',
            correctAnswer: 'SEDGE MEADOWS',
            explanation: 'Paragraph E notes exposed mudflats support pioneering sedge meadows.'
          },
          {
            id: 'cd_reading_m15_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph mentions radiocarbon dates reaching back twenty to forty millennia?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D notes radiocarbon dating of hotspots traces back 20,000 to 40,000 years.'
          },
          {
            id: 'cd_reading_m15_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph describes researchers using upturned funnels and ice picks on black autumn ice?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C depicts Walter Anthony\'s teams walking frozen lakes with ice picks and upturned funnels.'
          },
          {
            id: 'cd_reading_m15_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph explains a natural drainage landscape reset curbing long-term methane release?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E explains lakes breaching ridges and draining into rivers, shifting back toward aerobic capture.'
          },
          {
            id: 'cd_reading_m15_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph compares methane\'s century-long heat potency against carbon dioxide?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A notes methane is nearly thirty times more potent over a century than carbon dioxide.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Buckling Railways, Thermosyphon Pipelines, and Arctic Adaptation',
        subtitle: 'Engineering northern cities and industrial corridors atop softening icy ground',
        text: `Paragraph A: Beyond global climate feedbacks, thawing permafrost inflicts staggering immediate structural damage across Arctic communities. Across northern Russia, Alaska, and Canada, millions of residents live in cities—including Yakutsk, Norilsk, and Utqiagvik—resting upon thick networks of buried ground ice. As long as subsurface soil stayed rock-hard year-round, permafrost supported concrete apartment pilings, airport runways, and steel pipelines as reliably as solid granite bedrock.

Paragraph B: Once unusually hot summers soften frozen silt into watery mud, concrete support piles lose friction and sink unevenly. Buildings warp visibly into grotesque "drunken" tilt angles, municipal water mains snap in mid-winter, and paved highways ripple into hazardous roller-coaster waves. Geotechnical engineers warn that roughly seventy percent of existing Arctic roads, railways, and oil pipelines sit atop permafrost zones projected to suffer moderate-to-severe surface instability before 2050.

Paragraph C: Keeping heavy heated infrastructure standing over icy ground demands passive cooling wizardry rather than conventional concrete pads. When builders constructed the 1,280-kilometer Trans-Alaska Oil Pipeline across permafrost valleys during the 1970s, circulating hot crude oil near sixty degrees Celsius through buried pipes would have instantly liquefied surrounding frozen earth into a catastrophic landslide trench. Instead, engineers suspended over half the pipeline aboveground on specialized vertical support posts embedded with passive heat pipes called "thermosyphons."

Paragraph D: Each sealed thermosyphon tube holds pressurized liquid carbon dioxide or ammonia inside an aluminum finned post rising cleanly into freezing winter winds. Whenever Arctic air drops colder than underground mud, warm subsurface heat boils liquid CO2 at the post base; rising vapor climbs silently to the cold radiator fins, condenses back into chilly liquid, and drips downward—continuously pumping sub-zero winter cold deep into soil pilings using zero electricity or moving motors.

Paragraph E: Yet passively chilled thermosyphons only operate efficiently while long bitter winters outlast mild Arctic summers. As autumn freeze-up arrives weeks later each decade across warming tundra hubs, civil engineers increasingly accept that vulnerable coastal villages like Newtok, Alaska face costly planned relocation onto solid coastal bedrock—illustrating how physical infrastructure across the far North must adapt decisively alongside urgent emissions cuts.`,
        questions: [
          {
            id: 'cd_reading_m15_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Rock-solid frozen permafrost originally supported northern apartments and runways almost as firmly as solid bedrock.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A notes intact permafrost supported pilings, runways, and pipelines as reliably as solid granite bedrock.'
          },
          {
            id: 'cd_reading_m15_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Burying hot crude oil pipes directly underground across Alaskan permafrost safely kept frozen mud stable.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C warns burying 60°C hot crude oil pipes would have liquefied frozen earth into a catastrophic landslide trench.'
          },
          {
            id: 'cd_reading_m15_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Passive thermosyphon posts need continuous diesel electric pumps to pull winter cold underground.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states thermosyphons circulate CO2 vapor and liquid cold continuously using zero electricity or moving motors.'
          },
          {
            id: 'cd_reading_m15_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'All residents of Yakutsk have already permanently evacuated south toward Moscow.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A names Yakutsk as resting upon buried ground ice, with no evacuation toward Moscow mentioned.'
          },
          {
            id: 'cd_reading_m15_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Longer mild Arctic autumns reduce the seasonal winter cooling window available to passive thermosyphon pipes.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E explains thermosyphons depend on long winters outlasting summers; later freeze-up limits efficiency.'
          },
          {
            id: 'cd_reading_m15_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Softening silt causes concrete apartment supports to lose friction, twisting structures into ______ angles.',
            correctAnswer: 'DRUNKEN',
            explanation: 'Paragraph B states buildings warp visibly into grotesque "drunken" tilt angles.'
          },
          {
            id: 'cd_reading_m15_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Around ______ of existing northern roads and pipelines cross zones facing instability by mid-century.',
            correctAnswer: 'SEVENTY PERCENT',
            explanation: 'Paragraph B states roughly seventy percent of existing Arctic roads, railways, and pipelines face instability before 2050.'
          },
          {
            id: 'cd_reading_m15_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Engineers elevated over half of the Trans-Alaska Oil Pipeline atop vertical posts fitted with cooling ______.',
            correctAnswer: 'THERMOSYPHONS',
            explanation: 'Paragraph C identifies passive heat pipes called "thermosyphons."'
          },
          {
            id: 'cd_reading_m15_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Subsurface soil warmth boils pressurized fluid inside posts up toward exposed aluminum ______ cooling fins.',
            correctAnswer: 'RADIATOR',
            explanation: 'Paragraph D notes vapor climbs silently to cold radiator fins before condensing downward.'
          },
          {
            id: 'cd_reading_m15_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'How does a vertical thermosyphon cool underground soil pilings without drawing electric grid power?',
            options: [
              'A. Subterranean solar fans push snowy river water downward in July',
              'B. Thick concrete jackets absorb summer sunlight before oil touches steel',
              'C. Natural boiling-condensation loops carry ground heat up to cold winter air fins via gravity',
              'D. Ammonia pellets chemically freeze liquid water inside city mains permanently'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D explains warm soil boils pressurized CO2/ammonia up to freezing radiator fins where it condenses and drips back.'
          },
          {
            id: 'cd_reading_m15_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did Trans-Alaska designers suspend over half of the oil line aboveground during the 1970s?',
            options: [
              'A. To allow caribou herds to graze cleanly inside buried cement trenches',
              'B. Because warm sixty-degree oil would melt surrounding ice-rich dirt into unstable mudslides',
              'C. Because solid granite ridges blocked trench digging across northern cities',
              'D. To reduce aluminum radiator maintenance fees along snowy tundra rivers'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C notes hot crude oil near 60°C would have instantly liquefied surrounding frozen earth into a landslide trench.'
          },
          {
            id: 'cd_reading_m15_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What hard reality faces vulnerable coastal settlements like Newtok, Alaska in Paragraph E?',
            options: [
              'A. Installing electric thermostats keeps soft silt completely dry year-round',
              'B. Thermosyphon pipes turn unusable tundra mud into rich wheat fields',
              'C. Relocating entire communities onto firm coastal bedrock becomes necessary as warming erodes frozen foundations',
              'D. Draining coastal thermokarst lakes solves runway buckling instantly'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E cites Newtok facing costly planned relocation onto solid coastal bedrock as winters shorten.'
          },
          {
            id: 'cd_reading_m15_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Which northern Russian cities are mentioned in Paragraph A as standing directly over thick ground ice?',
            options: [
              'A. Yakutsk and Norilsk',
              'B. Kolyma and Newtok',
              'C. Utqiagvik and Svalbard',
              'D. Anchorage and Moscow'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A names Yakutsk, Norilsk (Russia), and Utqiagvik (Alaska).'
          },
          {
            id: 'cd_reading_m15_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Inside sealed thermosyphon posts, either pressurized liquid carbon dioxide or ammonia can serve as the working cooling fluid.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states each sealed thermosyphon tube holds pressurized liquid carbon dioxide or ammonia.'
          }
        ]
      }
    ]
  })
];
