/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_10: TestItem[] = [
  // =========================================================================
  // MOCK TEST 16 (VERY DIFFICULT): cd_reading_m16 (Byzantine Silk Production and Imperial Trade Monopolies)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m16',
    testNumber: 16,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 16: Byzantine Silk Production and Imperial Trade Monopolies',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on Justinianic sericulture historiography, guild segmentation in the Book of the Eparch, and Byzantine silk diaspora.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Breaking Persia\'s Silk Chokehold Under Emperor Justinian',
        subtitle: 'Reassessing Procopius\'s sixth-century espionage chronicle against Silk Road geopolitics',
        text: `Paragraph A: Throughout late antiquity, iridescent silk vestments stood at the visual center of Byzantine political theology. Consular diptychs, liturgical altar cloths, and imperial court uniforms depended relentlessly on lustrous Chinese filament imported westward along perilous continental caravan chains. Yet prior to the mid-sixth century, Constantinople did not harbor a single native silkworm inside its Mediterranean provinces. Every hank of unspun raw thread passed through hostile intermediaries—chief among them the Sassanid Persian Empire, whose frontier customs stations levied punitive transit tariffs and severed Roman merchant access cleanly whenever recurrent Mesopotamian border wars flared into open siege campaigns.

Paragraph B: Around 552 CE, Emperor Justinian I confronted an acute fiscal crisis exacerbated by prolonged Persian hostilities and the devastating Justinianic Plague, which thinned urban tax bases while driving silver bullion relentlessly eastward toward Sassanid brokers. Attempts to bypass Persia diplomatically by recruiting Christian Aksumite Ethiopian fleets across the Red Sea to intercept Indian Ocean silk cargos collapsed quickly: entrenched Persian merchants outbid Roman envoys directly inside Sri Lankan harbors long before African dhows arrived. Breaking Sassanid commercial coercion demanded relocating production knowledge rather than rerouting shipping lanes.

Paragraph C: Court historian Procopius of Caesarea famously preserved the colorful domestic origin story in his History of the Wars. Two anonymous Nestorian Christian monks returning from Central Asian "Serinda"—most plausibly Sogdian trading oases spanning modern Uzbekistan and western China—secretly briefed Justinian that silk originated neither from tropical tree bark nor combed fleece, as classical Roman geographers still half-believed, but from voracious domesticated moths feeding selectively upon white mulberry leaves. Promised handsome gold commissions, the monks journeyed eastward again and smuggled dormant winterized Bombyx mori eggs concealed inside hollowed bamboo pilgrim canes back to Constantinople.

Paragraph D: Modern economic historians scrutinize Procopius's cloak-and-dagger narrative with healthy critical skepticism while validating its biological plausibility. Unlike fragile adult moths or constantly grazing caterpillars—which starve rapidly across weeks of desert travel—overwintering Bombyx mori eggs endure prolonged cool dormancy lasting months inside dry bamboo tubes, hatching reliably once technicians incubate pinhead clusters atop stable manure warmth alongside fresh spring Syrian mulberry shoots. Still, rival Byzantine chronicle fragments by Theophanes of Byzantium hint that Central Asian Sogdian emissaries independently traded silkworm breeding expertise across northern Caucasus routes around the same decade, suggesting imperial sericulture emerged from converging diplomatic espionage rather than one lone pilgrim miracle.

Paragraph E: Agronomic adaptation across Mediterranean groves proved neither instantaneous nor effortless. White mulberry saplings (Morus alba) thrived slowly compared with annual grain harvests, demanding skilled seasonal pruning and humid indoor rearing rooms shielded carefully from summer drafts and fungal blight. Nevertheless, by the 570s, sprawling mulberry estates carpeted Syrian valleys, Bithynian hillsides across northwestern Anatolia, and Peloponnesian coastal plains—allowing Byzantine agents to show visiting Turkic ambassadors bustling imperial reeling sheds that astonished steppe envoys accustomed to viewing Persia as Eurasia's sole legitimate textile gatekeeper.

Paragraph F: Paradoxically, domestic raw cocoon cultivation never rendered Constantinople fully autarkic or eliminated eastern trade completely. High-grade Byzantine diplomatic brocades continued blending homegrown Levantine weft yarns with exceptionally fine Sogdian and Tang Chinese raw warp threads whenever frontier peace resumed—revealing Justinian's strategic triumph not as pure economic isolationism, but as decisive price leverage that permanently broke Sassanid wartime extortion.`,
        questions: [
          {
            id: 'cd_reading_m16_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Constantinople operated flourishing white mulberry cocoon farms centuries prior to Emperor Justinian\'s reign.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A specifies that prior to the mid-sixth century, Constantinople lacked a single native silkworm inside its Mediterranean provinces.'
          },
          {
            id: 'cd_reading_m16_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Justinian\'s attempt to bypass Persian overland brokers using Ethiopian Red Sea ships failed against entrenched market competitors.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B explains Aksumite Ethiopian Red Sea plans collapsed because Persian merchants outbid Roman envoys inside Sri Lankan harbors first.'
          },
          {
            id: 'cd_reading_m16_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Prior to sixth-century revelations, classical Roman geographical lore already accurately documented Bombyx mori moth metamorphosis.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C notes classical Roman geographers still half-believed silk grew from tropical tree bark or combed fleece before monks revealed larval origins.'
          },
          {
            id: 'cd_reading_m16_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Overwintering silkworm eggs can survive months of dry desert travel far better than hatched grazing caterpillars.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D confirms dormant Bombyx mori eggs endure prolonged cool dormancy lasting months inside dry tubes whereas live caterpillars starve quickly.'
          },
          {
            id: 'cd_reading_m16_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Theophanes of Byzantium attributed Central Asian silkworm expertise solely to Nestorian monks sailing down Persian Gulf ports.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states Theophanes hinted Sogdian emissaries traded breeding expertise via northern Caucasus routes independently.'
          },
          {
            id: 'cd_reading_m16_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Justinian later levied an emergency silk harvest tax across Peloponnesian estates to rebuild Hagia Sophia.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E describes mulberry groves covering Syrian valleys, Bithynia, and Peloponnesian plains without mentioning any Hagia Sophia tax.'
          },
          {
            id: 'cd_reading_m16_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why did smuggling live caterpillars from Serinda across Eurasia prove unworkable compared with winter eggs in Paragraph D?',
            options: [
              'A. Sassanid border customs scanned wooden pilgrim carts specifically for green oak stems',
              'B. Continuously feeding larvae starve rapidly over multi-week desert stages, whereas dormant eggs remain viable for months',
              'C. Stable manure warmth kills hatching moths instantly inside Byzantine rearing rooms',
              'D. Sogdian ambassadors confiscated young Bombyx larvae along northern Caucasus trails'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D contrasts grazing caterpillars starving across desert crossings against overwintering eggs enduring months of cool dry dormancy.'
          },
          {
            id: 'cd_reading_m16_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How does Paragraph F characterize the economic outcome of Byzantine domestic sericulture?',
            options: [
              'A. Total cessation of eastern silk purchases regardless of peaceful border treaties',
              'B. Rapid takeover of Sri Lankan port commerce by Ethiopian trading fleets',
              'C. Permanent impoverishment of Bithynian farmers forced to abandon annual wheat completely',
              'D. Strategic bargaining leverage eliminating wartime extortion while still selectively blending imported Sogdian warp yarns'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F notes Constantinople kept selectively blending fine Tang Chinese and Sogdian warp threads in peace, gaining strategic price leverage rather than pure autarky.'
          },
          {
            id: 'cd_reading_m16_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What broader historical point does contrasting Procopius with Theophanes of Byzantium illustrate in Paragraph D?',
            options: [
              'A. Byzantine silk cultivation likely arrived via overlapping Central Asian channels rather than one single dramatic courier',
              'B. Ancient pilgrim espionage tales are pure literary fiction without biological truth',
              'C. Procopius copied Ethiopian Red Sea shipping ledgers verbatim inside his History of the Wars',
              'D. White mulberry trees grew natively along Constantinople harbors centuries prior to Justinian'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D validates the egg-smuggling biology while citing Theophanes\' northern Caucasus account to suggest converging channels rather than one lone miracle.'
          },
          {
            id: 'cd_reading_m16_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Before domestic worms hatched, Byzantine buyers lost precious ______ steadily eastward toward Persian silk brokers.',
            correctAnswer: 'SILVER BULLION',
            explanation: 'Paragraph B describes the plague and trade draining silver bullion relentlessly eastward toward Sassanid brokers.'
          },
          {
            id: 'cd_reading_m16_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Procopius recounted dormant eggs smuggled west inside hollowed bamboo ______.',
            correctAnswer: 'PILGRIM CANES',
            explanation: 'Paragraph C notes dormant winterized Bombyx mori eggs concealed inside hollowed bamboo pilgrim canes.'
          },
          {
            id: 'cd_reading_m16_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which distant tropical island\'s markets saw Persian brokers outbid Roman efforts to hire Ethiopian traders?',
            correctAnswer: 'SRI LANKAN HARBORS',
            explanation: 'Paragraph B states Persian merchants outbid Roman envoys directly inside Sri Lankan harbors.'
          },
          {
            id: 'cd_reading_m16_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What two-word Central Asian geographical label did Procopius apply to the monastic silkworm source region?',
            correctAnswer: 'SERINDA',
            explanation: 'Paragraph C names Central Asian "Serinda," likely Sogdian trading oases near Uzbekistan and western China.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Imperial Gynaecea, Shellfish Purple, and the Book of the Eparch',
        subtitle: 'Analyzing vertical guild walls, sacred dye monopolies, and customs politics inside Constantinople',
        text: `Paragraph A: Acquiring raw domestic silk cocoons did not unleash laissez-faire Mediterranean capitalism; instead, Byzantine emperors welded textile production tightly inside fiscal state machinery. Nested inside Constantinople's sprawling Great Palace precincts operated closely guarded imperial weaving mills termed "gynaecea" alongside state-supervised dye works manufacturing "kekolymena"—literally "forbidden things." Monumental imperial vestments woven with flat beaten gold thread ("chrysoklabarioi") were restricted legally to royal dynastic bodies, patriarchal altars, and calibrated diplomatic gifts cementing nomadic alliances along Danubian and Caucasian frontiers.

Paragraph B: Even more exclusive than gold embroidery was genuine Tyrian murex purple ("blatta"), whose astronomical unit expense transformed royal silk into concentrated wearable treasury reserves. Harvested arduously from microscopic hypobranchial mucus glands inside hundreds of thousands of crushed coastal Hexaplex trunculus sea snails gathered along Levantine and Peloponnesian rocky shores, scarcely one gram of fast crystalline purple pigment demanded weeks of foul-smelling fermentation baths inside lead vats. Counterfeit vegetable or lichen substitutes faced immediate guild confiscation alongside harsh physical mutilation or lifetime banishment.

Paragraph C: Beyond palace precincts, private silk commerce across Constantinople functioned inside an astonishingly compartmentalized legal architecture preserved intact within the tenth-century Book of the Eparch—an administrative handbook compiled around 912 CE under Emperor Leo VI for the city's urban prefect. Rejecting vertical industrial monopolies, the Eparch carved silk processing into four hermetically segregated trade guilds forbidden strictly from poaching one another's tasks or merging under single merchant dynasties.

Paragraph D: At the supply gate stood the "vestiopratai" (importers and wholesale raw-yarn brokers called "metaxopratai"), barred legally from spinning or dyeing threads themselves; alongside sat "katartarioi" (raw-thread cleansers, boilers, and twisters), "serikarioi" (master pattern weavers and commercial dyers permitted ordinary scarlet or indigo tones), and retail finished-garment sellers ("vestiopratai") carefully audited against smuggling restricted imperial hues. Furthermore, guild statutes prohibited wealthy magnates from buying raw yarn directly at coastal countryside fairs, forcing outside Syrian caravans to sell transparently inside fixed metropolitan guild halls ("mitata") within strict seasonal windows.

Paragraph E: Classicist economic historians debate sharply whether these rigid guild walls stifled Byzantine commercial innovation or ingeniously stabilized urban tax revenues. By barring mighty aristocratic landlords from vertically swallowing every production link from rural mulberry estate to retail bazaar stall, Eparch oversight ensured modest independent artisans kept steady access to scarce raw yarn supplies at collective auction prices, while making fiscal customs checks vastly simpler across crowded Golden Horn wharves. Yet rigid statutory barriers against multi-step capital integration arguably starved large workshops of flexible economies of scale once agile Italian maritime republics later entered trade competition.

Paragraph F: Nowhere did Byzantine silk statecraft flash brighter diplomatic teeth than during Lombard bishop Liutprand of Cremona's famously acrimonious 968 CE embassy representing German emperor Otto I. Returning homeward overland, Liutprand packed five exquisite crimson-purple robes purchased privately inside capital markets—only for eagle-eyed frontier customs inspectors to rip open diplomatic trunks and seize every garment instantly. Scorning western outrage, Byzantine officials lectured Liutprand coldly that unmatched imperial silk splendor separated true Roman sovereigns visibly above uncouth Western upstarts!

Paragraph G: Exporting restricted "kekolymena" lengths outside empire borders without explicit imperial gold-bull seals incurred ferocious statutory penalties—total merchandise forfeiture, public flogging, tonsured humiliation, and severed hands under worst offenses. Silk therefore functioned simultaneously as sacred sacramental textile, fiscal anti-inflation bullion reserve, and calibrated geopolitical currency rarely matched in pre-industrial Eurasia.`,
        questions: [
          {
            id: 'cd_reading_m16_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph A introduces palace gynaecea weaving gold-threaded kekolymena restricted to dynastic, ecclesiastical, and diplomatic circles.'
          },
          {
            id: 'cd_reading_m16_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph B describes tiny murex sea-snail glands fermented for true Tyrian purple alongside harsh punishments for counterfeit vegetable dyes.'
          },
          {
            id: 'cd_reading_m16_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph C introduces Leo VI\'s Book of the Eparch dividing private silk craft into four hermetically segregated trade guilds.'
          },
          {
            id: 'cd_reading_m16_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph D specifies each guild\'s strict operational boundary plus rules forcing visiting caravans into supervised metropolitan mitata halls.'
          },
          {
            id: 'cd_reading_m16_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph E weighs benefits for modest artisans and easy tax collection against lost scale economies facing agile Italian rivals.'
          },
          {
            id: 'cd_reading_m16_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph F recounts 968 CE inspectors confiscating Liutprand of Cremona\'s five purple garments and asserting Roman imperial superiority.'
          },
          {
            id: 'cd_reading_m16_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Competing economic appraisals of anti-monopoly guild segregation',
              'ii. Royal palace workshops reserve gold-woven garments strictly for state and diplomacy',
              'iii. Dividing urban silk production across four legally walled specialist guilds',
              'iv. Confiscating unauthorized purple vestments during an acidic diplomatic clash',
              'v. Extracting precious coastal snail dye and outlawing cheap plant fakes',
              'vi. Severe bodily and financial penalties guarding imperial export borders',
              'vii. Splitting private silk brokers from centralized metropolitan auction rooms',
              'viii. How Peloponnesian farmers replaced sea-snail dye with imported indigo'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph G summarizes harsh punishments deterring unlicensed export of restricted kekolymena silk.'
          },
          {
            id: 'cd_reading_m16_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Guarded palace workshops wove forbidden vestments embellished with flat hammered ______.',
            correctAnswer: 'GOLD THREAD',
            explanation: 'Paragraph A notes monumental kekolymena vestments were woven with flat beaten gold thread.'
          },
          {
            id: 'cd_reading_m16_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Extracting tiny drops of genuine Tyrian pigment required pungent fermentation inside ______.',
            correctAnswer: 'LEAD VATS',
            explanation: 'Paragraph B describes weeks of foul-smelling fermentation baths inside lead vats.'
          },
          {
            id: 'cd_reading_m16_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Guild rules forced visiting Syrian traders to conduct raw-yarn auctions exclusively within supervised city ______.',
            correctAnswer: 'GUILD HALLS',
            explanation: 'Paragraph D states outside caravans sold transparently inside fixed metropolitan guild halls ("mitata").'
          },
          {
            id: 'cd_reading_m16_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Transporting unauthorized sacred lengths beyond imperial frontiers required explicit golden seals or invited severe ______.',
            correctAnswer: 'MERCHANDISE FORFEITURE',
            explanation: 'Paragraph G cites total merchandise forfeiture, public flogging, and mutilation for unlicensed exports.'
          },
          {
            id: 'cd_reading_m16_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'How did segregating urban silk guilds under the Book of the Eparch affect smaller workshops according to Paragraph E?',
            options: [
              'A. It enabled wealthy Syrian landowners to buy countryside cocoons privately prior to city fairs',
              'B. It gave Italian maritime guilds exclusive authority over Golden Horn customs docks',
              'C. It shielded modest independent weavers from aristocratic vertical monopolies while potentially restricting large-scale efficiency',
              'D. It forced retail vestiopratai dealers to boil and dye raw cocoons personally'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E explains preventing vertical mergers gave modest artisans fair collective yarn access yet arguably blocked large-scale integrated efficiency.'
          },
          {
            id: 'cd_reading_m16_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why did Byzantine customs officials reject Liutprand of Cremona\'s claim to keep robes purchased legitimately in 968 CE in Paragraph F?',
            options: [
              'A. The garments had been dyed with banned counterfeit vegetable lichen',
              'B. Restricted imperial purple functioned as an exclusive badge of Roman majesty forbidden to foreign courts',
              'C. Otto I owed unpaid Syrian raw-yarn transit duties along coastal Peloponnesian roads',
              'D. The robes lacked proper signatures from the metaxopratai wholesale guild hall'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph F notes inspectors confiscated every robe, insisting unmatched imperial purple splendor separated Romans visibly from foreign upstarts.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Silk Diaspora, Norman Raids, and the Waning of Imperial Monopoly',
        subtitle: 'Tracing how twelfth-century Aegean seizures and maritime treaties shifted European luxury looms westward',
        text: `Paragraph A: No imperial customs border wall could quarantine complex industrial craft secrets indefinitely once Byzantine territorial hegemony weakened across the eleventh and twelfth centuries. Long before Crusaders stormed Constantinople's sea walls in 1204, provincial production had migrated organically outward from tightly policed capital workshops toward vibrant provincial Aegean centers—chiefly Thebes, Corinth, and coastal Peloponnesian towns—whose dynamic Jewish and Greek master weavers turned out magnificent damasks and brocades outside immediate palace supervision.

Paragraph B: That provincial decentralization created catastrophic strategic vulnerability when maritime rivals tested Byzantine naval defenses. In 1147, ambitious Norman monarch Roger II of Sicily—seeking both skilled artisans for his multilingual Palermo royal court and commercial leverage over Mediterranean luxury markets—launched a devastating amphibious strike straight across the Gulf of Corinth. Bypassing heavily fortified Constantinople altogether, Norman war galleys sacked bustling Thebes and Corinth swiftly, rounding up entire families of expert Greek silk reelers, dyers, and pattern draw-loom weavers for forced deportation westward to Sicily!

Paragraph C: Settled inside Palermo's celebrated royal textile workshop—the Arabic-staffed Tiraz alongside newly installed Aegean captives—displaced Corinthian master weavers fused Christian figurative medallions with Islamic geometric kufic bands and North African metallic thread techniques. Within a single generation, Norman Sicily's bilingual ateliers pumped dazzling crimson-and-gold coronation mantles across Catholic cathedrals and royal treasuries throughout France, Germany, and England—snapping Constantinople's six-century monopoly over Western European prestige silk decisively forever.

Paragraph D: Meanwhile, internal diplomatic concessions crippled Constantinople's fiscal command over surviving Aegean trade from within. Seeking urgent naval transport against Norman invasion fleets and Anatolian advances, Emperor Alexios I Komnenos granted sweeping commercial chrysobulls in 1082 exempting Venetian merchant ships from the standard ten-percent kommerskion imperial harbor customs tax across Byzantine ports—privileges later extended competitively to Pisan and Genoese fleets. Exempt Italian syndicates quickly bypassed imperial mitata regulations, buying raw Peloponnesian silk cocoons directly off provincial estates and shipping bulk yarn straight back toward northern Italy!

Paragraph E: Fueled by cheap Levantine and Greek raw filaments plus displaced southern Italian weavers migrating northward after political upheavals in Sicily, thirteenth-century Tuscan and Emilian towns—first Lucca, then Bologna, Venice, and Florence—exploded into mechanized silk powerhouses. Italian hydraulic throwers pioneered multi-spindle water-powered twisting mills ("filatoi") capable of doubling and twisting delicate silk threads with mechanical uniformity vastly faster than slow hand spindles preserved inside stagnant late-Byzantine provincial guilds.

Paragraph F: Viewed across nearly a millennium, Byzantine sericulture illustrates the classic geopolitical cycle of technological diffusion: state-backed espionage first captured an exclusive Eastern craft, disciplined guild regulation transformed silk into centuries of soft diplomatic wealth, and eventual provincial leakage, maritime tax concessions, and mechanical water-mills elsewhere transferred Western Eurasian luxury dominance irrevocably from Bosphorus palaces toward Italian banking cities.`,
        questions: [
          {
            id: 'cd_reading_m16_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph describes an amphibious military strike kidnapping skilled provincial silk artisans for transplantation abroad?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B details King Roger II of Sicily\'s 1147 raid sacking Thebes and Corinth and deporting Greek silk workers to Sicily.'
          },
          {
            id: 'cd_reading_m16_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph explains how Byzantine wartime tax waivers allowed Italian merchants to export unprocessed provincial raw cocoons directly?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D shows Alexios I\'s 1082 customs exemption let Venetians bypass guild mitata rules and export bulk Peloponnesian yarn directly to Italy.'
          },
          {
            id: 'cd_reading_m16_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph documents technological mechanization in northern Italy that outpaced older hand-spun eastern traditions?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E describes Lucca, Bologna, and Venice deploying water-powered multi-spindle twisting mills (filatoi) faster than Byzantine hand spindles.'
          },
          {
            id: 'cd_reading_m16_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph highlights cross-cultural artistic blending inside Palermo\'s royal weaving atelier?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C shows displaced Corinthian weavers inside Palermo\'s Tiraz blending Christian medallions, Islamic kufic calligraphy bands, and African metallic threads.'
          },
          {
            id: 'cd_reading_m16_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Greek silk weaving never expanded outside Constantinople\'s central Great Palace district prior to the 1204 Crusader sack.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A emphasizes provincial silk centers like Thebes and Corinth operated vibrantly long before 1204.'
          },
          {
            id: 'cd_reading_m16_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Roger II captured Peloponnesian silk masters by storming heavily defended harbors directly inside Constantinople.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states Norman galleys bypassed fortified Constantinople completely, striking Thebes and Corinth across the Gulf of Corinth.'
          },
          {
            id: 'cd_reading_m16_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Byzantine naval concessions to Venice unintentionally weakened Constantinople\'s own urban silk-guild oversight.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D explains 1082 tax exemptions allowed Italian fleets to bypass mitata guild halls and purchase raw silk directly from provincial estates.'
          },
          {
            id: 'cd_reading_m16_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Florentine bankers financed Roger II\'s 1147 amphibious warships exclusively in exchange for Corinthian murex shells.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs B and E trace Roger II\'s raid and later Tuscan rise without attributing the 1147 Sicilian fleet to Florentine loans.'
          },
          {
            id: 'cd_reading_m16_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Northern Italian water-powered twisting mills improved yarn consistency far above traditional eastern hand spinning.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E notes Italian hydraulic filatoi mills twisted threads with mechanical uniformity vastly faster than slow eastern hand spindles.'
          },
          {
            id: 'cd_reading_m16_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why did provincial expansion to Thebes and Corinth unintentionally aid Western competitors in Paragraphs A and B?',
            options: [
              'A. Provincial Peloponnesian silkworms refused to eat white mulberry leaves outside Great Palace courtyards',
              'B. Theban weavers intentionally gave away royal murex dye formulas via Venetian merchant charters in 1082',
              'C. Master weavers in exposed Aegean cities could be raided and abducted far more easily than heavily walled Constantinople',
              'D. Jewish and Greek artisans burned Corinth silk sheds before Norman ships sailed up the Gulf'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraphs A–B explain provincial decentralization outside capital defenses left skilled weavers exposed to Roger II\'s 1147 Corinthian raids.'
          },
          {
            id: 'cd_reading_m16_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How did Emperor Alexios I\'s 1082 chrysobull tax waiver alter Italian participation in Mediterranean silk trade in Paragraph D?',
            options: [
              'A. Exempting Italian fleets from the ten-percent harbor tax let them bypass city guilds and export raw Greek silk directly homeward',
              'B. It restricted Venetian crews strictly to hauling raw grain out of southern Anatolia',
              'C. It banned Pisan and Genoese merchants permanently from purchasing Peloponnesian cocoons',
              'D. It subsidized Byzantine hand-spindle guilds inside Palermo and Lucca'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states exempt Italian syndicates ignored mitata rules, buying raw Peloponnesian cocoons directly off farms for northern Italy.'
          },
          {
            id: 'cd_reading_m16_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Which phrase captures the broad historical pattern highlighted by the author in Paragraph F?',
            options: [
              'A. Continuous decline caused solely by failing mulberry trees after Justinian\'s reign',
              'B. Complete independence of Italian silk banking from prior Mediterranean guild traditions',
              'C. Unbroken six-century continuity preserving Bosphorus loom supremacy through modern industrial eras',
              'D. Cyclical technological shift from early state-sponsored capture to eventual provincial leakage and rival mechanization abroad'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F traces state espionage, centuries of strict guild wealth, and eventual provincial leakage, maritime waivers, and rival water-mills shifting hegemony westward.'
          },
          {
            id: 'cd_reading_m16_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Abducted Greek masters settled inside Palermo\'s multilingual weaving workshop known as the ______.',
            correctAnswer: 'TIRAZ',
            explanation: 'Paragraph C names Palermo\'s Arabic-staffed royal textile workshop the Tiraz.'
          },
          {
            id: 'cd_reading_m16_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Northern Italian workshops achieved superior thread consistency by operating multi-spindle water-powered ______.',
            correctAnswer: 'TWISTING MILLS',
            explanation: 'Paragraph E specifies multi-spindle water-powered twisting mills ("filatoi").'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 17 (VERY DIFFICULT): cd_reading_m17 (Space Debris Remediation and Electrodynamic Tethers)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m17',
    testNumber: 17,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 17: Space Debris Remediation and Electrodynamic Tethers',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on orbital Kessler cascade thresholds, Lorentz plasma-tether deceleration physics, and international space liability governance.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Hypervelocity Crowding and the Physics of Kessler Cascading',
        subtitle: 'Why untrackable millimeter shrapnel threatens critical low Earth orbits even without new launches',
        text: `Paragraph A: High above Earth's weather clouds, across crowded low-Earth-orbit (LEO) highways spanning four hundred to two thousand kilometers aloft, ordinary paint flecks travel faster than armor-piercing tank shells. Moving at roughly seven-point-five to ten kilometers per second—over ten times rifle-bullet velocity—a stray ten-gram aluminum bolt carries explosive kinetic impact energy exceeding an oncoming midsize sedan slamming highway barriers at ninety kilometers per hour. Worse still, unlike dense atmospheric airspace where dropped wreckage plunges swiftly down to Earth's surface, near-vacuum tenuous drag above eight hundred kilometers allows dead rocket boosters and splintered solar panels to circle silently for centuries.

Paragraph B: As commercial broadband constellations multiply orbiting spacecraft from two thousand active probes in 2019 past ten thousand satellites today, orbital conjunction warnings flood national tracking networks nightly. Radar arrays operated by the US Space Surveillance Network routinely catalog roughly thirty-five thousand objects exceeding ten centimeters across—old upper stages, lost astronaut toolbags, and intact defunct weather craft. Yet aerodynamic impact sensors mounted onto returned Space Shuttle windshields revealed an alarming hidden iceberg underneath radar floors: over one million splintered fragments measuring between one and ten centimeters, alongside more than one hundred million sub-centimeter solder beads and exploded coolant droplets racing completely untracked!

Paragraph C: That size blindness creates an asymmetric operational dilemma for mission directors. When radar forecasts a collision probability exceeding one in ten thousand against a ten-centimeter booster husk, active satellites fire thrusters to sidestep safely. Against an invisible two-centimeter titanium fragment traveling sideways at twelve kilometers per second, however, operators possess zero advance notice—and thin Whipple aluminum bumper shields fitted onto armored crew stations offer barely partial survival margins against tumbling sharp-edged shards able to sever main batteries or split hydrazine propellant tanks wide open.

Paragraph D: In 1978, NASA astrophysicist Donald Kessler and Burton Cour-Palais published a sobering mathematical threshold now etched into space policy as the "Kessler syndrome." Beyond critical spatial object density in congested polar sun-synchronous belts around eight hundred to one thousand kilometers altitude, debris populations become self-sustaining through mutual grinding collisions: each catastrophic smash between two retired multi-ton rocket bodies blasts thousands of lethal hypervelocity fragments outward across neighboring shells, pushing downstream collision likelihoods steadily upward even if every nation halted rocket launches completely tomorrow!

Paragraph E: Historical events repeatedly proved how instantaneously single mishaps contaminate whole orbital altitudes. In 2007, a destructive anti-satellite (ASAT) kinetic test shattered an aging meteorological probe at 850 kilometers—scattering over three thousand cataloged pieces whose orbital altitudes spread downward into the International Space Station path and upward past twelve hundred kilometers for generations. Two years later, a defunct Russian Cosmos communications craft collided head-on over Siberia with an active commercial Iridium handset satellite at eleven kilometers per second, spawning two intersecting confetti clouds of fresh shrapnel overnight.

Paragraph F: Crucially, contemporary orbital modelers emphasize that debris cleanup cannot target tiny flying paint specks directly—their spread across trillions of cubic kilometers makes sweeping impossible. Instead, statistical risk forecasts highlight roughly fifty "high-priority massive derelicts"—hulking dead Envisat-class satellites and multi-ton spent rocket upper stages lingering permanently in dense polar corridors—whose immediate removal prevents huge exponential fragment explosions before they ever detonate.`,
        questions: [
          {
            id: 'cd_reading_m17_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Thin upper-atmosphere air friction quickly pulls discarded satellites orbiting above eight hundred kilometers back down to burn up.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A explicitly contrasts low airspace with tenuous drag above 800 km, where dead boosters circle silently for centuries.'
          },
          {
            id: 'cd_reading_m17_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Ground space radar catalogs currently track only a tiny minority of all hazardous debris larger than one centimeter.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states radar tracks ~35,000 objects >10 cm, while >1 million lethal fragments (1–10 cm) race completely untracked.'
          },
          {
            id: 'cd_reading_m17_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Whipple aluminum shields on modern spacecraft reliably withstand direct twelve-kilometer-per-second strikes from jagged two-centimeter metal shards.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states thin Whipple bumper shields offer barely partial survival margins against two-centimeter shards capable of splitting propellant tanks.'
          },
          {
            id: 'cd_reading_m17_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Once Kessler cascade densities are crossed, debris populations can continue expanding even if global rocket launches stop entirely.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states mutual grinding collisions become self-sustaining, pushing fragments upward even if every nation halted rocket launches completely tomorrow.'
          },
          {
            id: 'cd_reading_m17_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'The 2009 Cosmos-Iridium crash destroyed three active European meteorological probes within twenty-four hours.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E describes the Cosmos-Iridium collision spawning two intersecting debris clouds without claiming it destroyed three European probes.'
          },
          {
            id: 'cd_reading_m17_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'De-orbiting massive intact retired rocket bodies stops more future small fragments than trying to net microscopic paint flakes.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph F notes sweeping tiny specks across trillions of cubic km is impossible, so removing ~50 massive derelicts prevents exponential explosions beforehand.'
          },
          {
            id: 'cd_reading_m17_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why do orbital operators face extreme vulnerability specifically from debris sized between one and ten centimeters in Paragraphs B and C?',
            options: [
              'A. Fragments under ten centimeters emit invisible plasma plumes blocking radio steering signals',
              'B. Sub-ten-centimeter paint flecks decay inward toward the International Space Station within six days',
              'C. International treaties forbid active broadband satellites from maneuvering clear of objects under ten centimeters',
              'D. They remain too small for routine radar catalog warnings yet carry catastrophic kinetic energy exceeding spacecraft bumper limits'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraphs B–C highlight radar tracking floors (~10 cm) leaving >1 million 1–10 cm shards untracked—impossible to dodge via warnings yet fatal on impact.'
          },
          {
            id: 'cd_reading_m17_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What physical mechanism defines Donald Kessler\'s 1978 cascade threshold in Paragraph D?',
            options: [
              'A. Mutual collisions between large derelicts multiplying fragments faster than atmospheric drag removes them, even without new launches',
              'B. Rapid commercial launch booms filling four-hundred-kilometer orbits every spring equinox',
              'C. Solar flares expanding Earth\'s atmosphere abruptly to engulf active geosynchronous relays',
              'D. Static electricity pulling dead rocket stages together over polar magnetic poles'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains past critical density at 800–1000 km, derelict smash-ups multiply lethal shrapnel sustainably even if launches cease.'
          },
          {
            id: 'cd_reading_m17_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why do remediation engineers prioritize pulling down fifty huge dead hulks instead of collecting small loose shards in Paragraph F?',
            options: [
              'A. Large rocket stages burn cleaner fuels during slow orbital re-entry over Siberia',
              'B. Military anti-satellite radar only illuminates satellites heavier than five metric tons',
              'C. Vast empty orbital volume defeats micro-sweeping, whereas removing giant intact derelicts neutralizes future parent sources of thousands of shards',
              'D. Small paint flecks automatically evaporate out of sunlight within twelve months aloft'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph F contrasts impossible volume sweeping against removing ~50 massive Envisat-class and rocket-body hulks before collisions shatter them.'
          },
          {
            id: 'cd_reading_m17_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Returned ______ inspection plates alerted physicists to millions of tiny untracked impact shards circling orbit.',
            correctAnswer: 'SPACE SHUTTLE',
            explanation: 'Paragraph B cites impact sensors mounted onto returned Space Shuttle windshields.'
          },
          {
            id: 'cd_reading_m17_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Crew compartments attach protective aluminum ______ intended to shatter incoming micro-debris harmlessly.',
            correctAnswer: 'BUMPER SHIELDS',
            explanation: 'Paragraph C mentions thin Whipple aluminum bumper shields fitted onto armored crew stations.'
          },
          {
            id: 'cd_reading_m17_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which dense polar orbital band between eight hundred and one thousand kilometers faces highest Kessler risk?',
            correctAnswer: 'SUN-SYNCHRONOUS BELTS',
            explanation: 'Paragraph D pinpoints congested polar sun-synchronous belts around 800–1000 km altitude.'
          },
          {
            id: 'cd_reading_m17_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What two-word classification describes the fifty massive dead targets atop orbital cleanup priority lists?',
            correctAnswer: 'MASSIVE DERELICTS',
            explanation: 'Paragraph F highlights roughly fifty "high-priority massive derelicts" including Envisat-class satellites and rocket upper stages.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Electrodynamic Lorentz Tethers vs Harpoon and Robotic Grapplers',
        subtitle: 'Comparing propellantless magnetic braking against treacherous non-cooperative capture missions',
        text: `Paragraph A: Hauling multi-ton dead spacecraft downward out of eight-hundred-kilometer polar corridors demands brutal propellant physics if attempted conventionally. Matching velocity against an uncooperative three-ton rocket stage, bolting onto its thrust bell, and firing chemical retrorockets to dive safely inside Earth's atmosphere consumes nearly as much heavy fuel mass as lofting an entire extra launch vehicle skyward—rendering dedicated chemical tow-trucks economically absurd for cleaning dozens of scattered derelicts across varying orbital inclinations.

Paragraph B: Hoping to bypass propellant penalties cleanly, aerospace electrodynamicists champion an elegant propellantless alternative rooted in nineteenth-century Faraday induction: the bare Electrodynamic Tether (EDT). Extending several kilometers downward from a small host servicer or integrated satellite deployer hangs a thin, flat ribbon of braided aluminum tape weighing merely twenty kilograms. As that metallic conductor hurtles eastward at nearly eight kilometers per second across Earth's silent magnetic field lines, ambient geomagnetic flux slices straight through moving electrons, inducing steady multi-kilovolt electrical voltage along the ribbon!

Paragraph C: Completing an electrical circuit across near-empty outer space requires tapping Earth's upper atmosphere itself as a vast invisible conductive return wire. Sweeping through the surrounding sunlit ionosphere—sparse ionized oxygen atoms and free electrons floating naturally above three hundred kilometers—the positively biased upper bare-metal tape vacuums ambient electrons directly off passing plasma while a hollow xenon-gas plasma contactor or field-emission cathode mounted along the lower tip sprays electrons neatly back out into space.

Paragraph D: Once sustained electric current flows down the metallic ribbon across geomagnetic lines, classic Lorentz physics strikes back instantaneously: Earth's magnetic field exerts a continuous steady drag force opposing current motion (F = I L × B). Without firing a single drop of hydrazine fuel or scorching volatile oxidizers, gentle milli-newton electromagnetic friction brakes orbital altitude inexorably month after month—pulling multi-ton rocket husks downward toward blazing atmospheric cremation far faster than passive upper-air drag could ever manage.

Paragraph E: Yet bare electrodynamic tethers suffer an inescapable geometric limitation baked straight into cross-product vector physics. Lorentz braking maximizes gracefully along low-latitude equatorial orbits slicing perpendicularly across horizontal magnetic lines, yet drops sharply inside high-inclination polar sun-synchronous belts—precisely where vertical magnetic field lines near Earth's poles run nearly parallel to north-south satellite travel! Worse still, stretching fragile kilometer-wide metallic tapes vertically across congested debris shells converts a tiny derelict temporarily into a huge collision target likely to be snapped cleanly in half by stray millimeter bullets before finishing its multi-month descent.

Paragraph F: Recognizing tether vulnerabilities over polar orbits, agencies such as the European Space Agency (ClearSpace-1) and Surrey Space Centre (RemoveDEBRIS) simultaneously pursue agile active capture chasers deploying weighted capture nets, high-velocity harpoon spears, and four-limbed robotic pincers. Still, grabbing spinning unpowered hulks turns terrifyingly acrobatic when dead satellites tumble wildly at several revolutions per minute due to leaking residual tank gas or solar-radiation torque: one mistimed metallic robot wrist snap risks deflecting a tumbling giant sideways or triggering an instant breakup collision on contact!

Paragraph G: Innovative contactless remediation schemes attempt avoiding risky mechanical contact altogether—testing "ion-beam shepherds" blasting neutral plasma plumes gently onto tumbling boosters from safe standoff meters away, or ground-based pulsed lasers nudging perigee orbits fractionally downward via microscopic surface ablation puffs—though high-power orbital lasers immediately raise nervous diplomatic objections over covert weaponization.`,
        questions: [
          {
            id: 'cd_reading_m17_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph A demonstrates why conventional rocket-fuel de-orbit tugs demand crippling launch-vehicle fuel masses across scattered inclinations.'
          },
          {
            id: 'cd_reading_m17_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph B introduces bare aluminum electrodynamic tethers crossing geomagnetic lines at 8 km/s to generate multi-kilovolt potential via Faraday induction.'
          },
          {
            id: 'cd_reading_m17_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph C shows bare tether sections collecting electrons from ambient ionospheric plasma while lower cathodes spray them back out.'
          },
          {
            id: 'cd_reading_m17_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph D explains how Lorentz forces oppose current motion steadily without hydrazine fuel, spiraling heavy derelicts downward.'
          },
          {
            id: 'cd_reading_m17_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph E exposes weak polar Lorentz force angles in crowded sun-synchronous belts plus vulnerability of long ribbons to debris snips.'
          },
          {
            id: 'cd_reading_m17_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph F covers ESA ClearSpace-1 and RemoveDEBRIS net/harpoon/pincer chasers struggling with rapidly spinning targets.'
          },
          {
            id: 'cd_reading_m17_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Using surrounding upper-atmosphere plasma to close a spatial electrical loop',
              'ii. Polar field angles and snapping risks limit long conductive ribbons',
              'iii. Moving metal ribbon taps planetary magnetism to induce clean electric voltage',
              'iv. Why chemical fuel tow-trucks face severe mass and financial hurdles',
              'v. Standoff plasma beams and laser nudges aim to avoid hazardous contact',
              'vi. How continuous current triggers propellantless braking toward fiery re-entry',
              'vii. Harpoons and robot pincers struggle against wildly spinning hulks',
              'viii. Replacing aluminum tethers with solid diamond thruster bells'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph G profiles contactless standoff plasma ion-beam shepherds and pulsed orbital laser ablation alongside dual-use political unease.'
          },
          {
            id: 'cd_reading_m17_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Deploying bare ______ ribbons bypasses heavy hydrazine fuel penalties via electromagnetic induction.',
            correctAnswer: 'BRAIDED ALUMINUM',
            explanation: 'Paragraph B specifies a thin, flat ribbon of braided aluminum tape weighing twenty kilograms.'
          },
          {
            id: 'cd_reading_m17_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Upper conductive sections vacuum electrons directly out of Earth\'s sparse sunlit ______.',
            correctAnswer: 'IONOSPHERE',
            explanation: 'Paragraph C describes tapping free electrons from the surrounding sunlit ionosphere.'
          },
          {
            id: 'cd_reading_m17_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Leaking fuel tanks or sunlight pressure make dead hulks ______ wildly, complicating robotic wrist captures.',
            correctAnswer: 'TUMBLE',
            explanation: 'Paragraph F notes leaking tank gas or solar-radiation torque causes unpowered hulks to tumble wildly.'
          },
          {
            id: 'cd_reading_m17_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Contactless standoff cleanup concepts replace pincers with ground lasers or neutral-plume ______.',
            correctAnswer: 'ION-BEAM SHEPHERDS',
            explanation: 'Paragraph G identifies contactless "ion-beam shepherds" blasting neutral plasma plumes safely from standoff distances.'
          },
          {
            id: 'cd_reading_m17_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why do bare electrodynamic tethers brake satellites less efficiently over polar sun-synchronous belts in Paragraph E?',
            options: [
              'A. Polar solar panels freeze solid below three hundred kilometers altitude',
              'B. Vertical magnetic lines near Earth\'s poles align nearly parallel with north-south flight trajectories, slashing Lorentz drag force',
              'C. Free ionospheric electrons vanish entirely over equatorial Atlantic altitudes',
              'D. Aluminum ribbons melt immediately whenever crossing high-latitude sunlit skies'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E explains Lorentz braking drops over poles because vertical polar magnetic lines run almost parallel to north-south motion.'
          },
          {
            id: 'cd_reading_m17_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What hazard complicates sending robotic pincers toward dead Envisat-class satellites in Paragraph F?',
            options: [
              'A. Xenon plasma contactors blind robotic guidance cameras permanently on approach',
              'B. Braided aluminum tethers wrap tightly around ClearSpace-1 thruster nozzles',
              'C. Uncontrolled gas leaks and solar torque set dead craft tumbling rapidly, risking destructive collision if wrist grabs slip',
              'D. Dead satellites accelerate smoothly faster than twenty kilometers per second'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph F notes leaking tank gas or solar-radiation torque spins unpowered hulks at revolutions per minute, risking catastrophic collision on mistimed robot contact.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Outer Space Liability Treaties, Dual-Use Suspicion, and Cleanup Economics',
        subtitle: 'Why international governance and constellation balance sheets lag behind orbital remediation hardware',
        text: `Paragraph A: Even after ClearSpace test vehicles and braided plasma tethers demonstrate technical reliability aloft, orbital remediation confronts a tangle of legal paralysis often far thornier than orbital mechanics. Under foundational international law—specifically the 1967 Outer Space Treaty and the 1972 Space Liability Convention—every launched satellite and spent rocket casing remains permanently the sovereign legal property and ongoing liability of its original launching state, regardless of whether its commercial operator went bankrupt decades ago or its batteries died completely in 1984.

Paragraph B: That rigid sovereignty clause produces paralyzing legal custody traps. Under strict treaty reading, a Swiss or Japanese private cleanup craft cannot unilaterally grapple, tow, or even spray plasma gently onto a derelict Russian or American rocket hull drifting toward crowded sun-synchronous channels without securing explicit formal diplomatic consent beforehand—even if an imminent explosion threatens active communications infrastructure serving fifty nations! Securing state clearance often founders immediately over sensitive proprietary rocket propulsion patents and military telemetry hardware sealed inside aging carcasses.

Paragraph C: Compounding sovereign property disputes is deep geopolitical paranoia surrounding "dual-use" orbital rendezvous capabilities. Any agile autonomous chaser satellite capable of sneaking up beside an uncooperative tumbling rocket body, synchronizing spin rates in darkness, and snaring its nozzle with robotic claws or severing its flight path via pulsed ground lasers simultaneously possesses textbook military anti-satellite (ASAT) disablement capability! Without transparent real-time transponder telemetry, public trajectory registries, and diplomatic inspection protocols, civilian garbage collectors look alarmingly indistinguishable from covert orbital interceptors to rival defense ministries.

Paragraph D: Equally stubborn are misaligned commercial market incentives famously likened to terrestrial "tragedy of the commons" fisheries. Active Space Debris Removal (ADR) functions purely as a shared public good: removing one dangerous three-ton booster reduces catastrophic collision risk marginally for every satellite constellation overhead, yet generates zero direct revenue for any lone private startup unless national tax treasuries or global orbital-usage license fees foot multi-million-dollar bills per derelict tugged downward. Unsurprisingly, commercial constellation investors fight fiercely against fresh regulatory fees while profit margins tighten amidst fierce global broadband launches.

Paragraph E: Seeking pragmatic preventative brakes rather than retroactive multi-million-dollar salvage fleets, regulatory authorities increasingly tighten binding post-mission disposal mandates directly before launch licensing. In 2022, the United States Federal Communications Commission slashed maximum mandatory dead-satellite de-orbit windows sharply from lenient twenty-five-year guidelines down to five years—compelling constellation operators to reserve precious onboard propellant, integrate passive drag sails, or bolt standardized magnetic docking grapple fixtures onto every fresh hull before rocket liftoff.

Paragraph F: Sustainable orbital stewardship ultimately hinges on linking proactive pre-launch design-for-demise rules with funded multilateral derelict salvage funds and strict dual-use verification treaties. Without binding global norms tying orbital access licenses to mandatory end-of-life de-orbit hardware and sovereign salvage exemptions for verified hazards, humanity risks trapping its next generation beneath an unnavigable shimmering dome of self-grinding steel hail.`,
        questions: [
          {
            id: 'cd_reading_m17_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains why private cleanup firms cannot legally grab an abandoned foreign satellite without state permission?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B outlines how strict treaty ownership bars third-party states or firms from grappling foreign derelicts without explicit state consent.'
          },
          {
            id: 'cd_reading_m17_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph compares space cleanup funding shortages to classic shared public-resource economic dilemmas?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D likens active debris removal to a tragedy of the commons because shared risk reduction lacks private direct revenue streams.'
          },
          {
            id: 'cd_reading_m17_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph describes binding regulatory deadlines forcing manufacturers to include end-of-life disposal mechanisms before liftoff?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E cites the 2022 FCC ruling cutting de-orbit deadlines from 25 to 5 years and encouraging fuel reserves, drag sails, or docking fixtures.'
          },
          {
            id: 'cd_reading_m17_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph highlights military fears that civilian orbital repair and salvage craft could easily operate as covert weapons?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C warns autonomous rendezvous chasers and pulsed lasers mirror textbook dual-use ASAT interceptors without open telemetry protocols.'
          },
          {
            id: 'cd_reading_m17_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Once a private satellite company declares bankruptcy, international treaties automatically declare its dead spacecraft open unclaimed salvage.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states launched hardware remains permanently the sovereign property and liability of its original launching state even if private owners went bankrupt.'
          },
          {
            id: 'cd_reading_m17_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Proprietary engine secrets inside dead military boosters sometimes discourage launching states from granting foreign salvage clearance.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B confirms securing state consent frequently founders over sensitive propulsion patents and military hardware inside old hulls.'
          },
          {
            id: 'cd_reading_m17_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'The Federal Communications Commission extended commercial satellite de-orbit timelines from five years to twenty-five years in 2022.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E states the FCC slashed maximum disposal windows downward from twenty-five years to five years in 2022.'
          },
          {
            id: 'cd_reading_m17_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Russia and Japan ratified a joint binding UN court tribunal exclusively governing Envisat debris fines in 2023.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs A–F discuss existing 1967/1972 treaties and 2022 FCC policy without mentioning a 2023 Russia-Japan tribunal.'
          },
          {
            id: 'cd_reading_m17_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Mandatory pre-launch disposal rules tend to be more practical economically than relying purely on post-hoc rescue ships.',
            correctAnswer: 'YES',
            explanation: 'Paragraphs D–F frame pre-launch five-year disposal designs as pragmatic preventative brakes alongside far costlier retroactive salvage.'
          },
          {
            id: 'cd_reading_m17_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do rival defense ministries distrust civilian autonomous rendezvous debris chasers in Paragraph C?',
            options: [
              'A. Approaching and snaring uncooperative spinning objects in darkness closely replicates military anti-satellite weapon mechanics',
              'B. Braided aluminum tethers disrupt ground missile warning radars continuously across northern oceans',
              'C. Foreign salvage satellites automatically steal proprietary broadband radio encryption during flybys',
              'D. International treaties require private firms to install nuclear thrusters aboard chaser craft'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C notes any chaser able to sneak beside uncooperative targets and snare nozzles or use pulsed lasers shares textbook military ASAT capabilities.'
          },
          {
            id: 'cd_reading_m17_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What economic barrier stalls private investor funding for active space debris salvage startups in Paragraph D?',
            options: [
              'A. Salvaged rocket aluminum melts completely during fiery re-entry, leaving no metal profits',
              'B. Broadband operators already insure every sub-centimeter fragment collision profitably',
              'C. Ground radar arrays charge startups prohibitive tracking tolls per kilometer descended',
              'D. Lowering one booster\'s collision odds protects all competitors equally without generating direct revenue per removal unless public fees fund it'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains ADR acts as a public good (tragedy of the commons) generating zero private revenue per derelict removed without public or license-fee backing.'
          },
          {
            id: 'cd_reading_m17_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How does Paragraph E illustrate regulatory prevention targeting future space junk accumulation?',
            options: [
              'A. By paying orbital startups directly to catch defunct Soviet rocket hulls',
              'B. By cutting legal disposal periods to five years so new satellites incorporate fuel reserves, drag sails, or grapple hooks at assembly',
              'C. By banning private broadband satellite launches entirely above five hundred kilometers',
              'D. By stripping launching states of sovereign liability immediately once batteries drain'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E cites the 2022 FCC five-year disposal mandate prompting operators to reserve fuel, add passive drag sails, or bolt magnetic grapple fixtures.'
          },
          {
            id: 'cd_reading_m17_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Under 1967 and 1972 international space conventions, defunct stages remain forever under original ______ jurisdiction.',
            correctAnswer: 'LAUNCHING STATE',
            explanation: 'Paragraph A confirms satellites remain permanently sovereign property and liability of the original launching state.'
          },
          {
            id: 'cd_reading_m17_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Tighter five-year licensing terms press manufacturers to install passive drag sails or standardized magnetic ______ before launch.',
            correctAnswer: 'GRAPPLE FIXTURES',
            explanation: 'Paragraph E specifies standardized magnetic docking grapple fixtures.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 18 (VERY DIFFICULT): cd_reading_m18 (Animal Tool Use in New Caledonian Crows and Sea Otters)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m18',
    testNumber: 18,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 18: Animal Tool Use in New Caledonian Crows and Sea Otters',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on standardized Pandanus crow tool manufacture, Aesop\'s Fable causal reasoning limits, and matrilineal sea-otter anvil foraging.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Standardized Pandanus Craft and Cumulative Hints in New Caledonian Crows',
        subtitle: 'Challenging human exclusivity over sculpted tools through Grande Terre forest fieldwork',
        text: `Paragraph A: For generations, paleoanthropologists defended "Man the Toolmaker" as humanity's cleanest cognitive Rubicon—declaring that while captive primates might occasionally strip leaves off sticks to probe termite mounds, true deliberate sculpting of standardized, hooked, multi-step tools remained uniquely hominin. That neat boundary crumbled swiftly during the 1990s when New Zealand ecologist Gavin Hunt documented wild New Caledonian crows (Corvus moneduloides) foraging systematically across isolated South Pacific limestone forests on Grande Terre with crafted precision rivaling prehistoric Stone Age scrapers.

Paragraph B: Rather than grabbing whatever loose branch lay handy beneath dead logs, wild New Caledonian crows actively fabricate two remarkably sophisticated tool classes tailored to subterranean wood-boring longhorn beetle larvae. First come hooked wooden twig tools: snapping forked twigs selectively from woody saplings, crows strip secondary side shoots cleanly before painstakingly carving curved terminal wooden hooks downward via rapid, deft chisel-like beak snips. When wedged deep inside decaying candlenut trunks, those sturdy curved spurs hook fat beetle grubs sharply around protective mandibles—doubling extraction speeds tenfold relative to straight twigs!

Paragraph C: Even more astonishing to cultural anthropologists is the crows' second weapon: serrated stepped strips torn mechanically from stiff barbed Pandanus shrub fronds. Standing securely beside thorny sword-like Pandanus leaves, a crow rips cleanly parallel along fibrous leaf veins, makes abrupt perpendicular cross-cuts, and tears outward cleanly in repetitive staircases producing narrow, broad-bottomed, three-stepped tapered wedges lined naturally with backward-pointing marginal barbs that snare hidden insects effortlessly out of tight bark crevices.

Paragraph D: Mapping thousands of leftover clipped Pandanus leaf silhouettes—each leaf edge preserves an exact geometric photographic negative of the ripped tool!—Hunt and behavioral ecologist Russell Gray uncovered uncanny island-wide regional design divergence. Southern Grand Terre populations consistently manufactured single-notch wide strips, northern ridges specialized in narrow straight blades, while central zones sculpted intricate multi-stepped serrated profiles. Crucially, island geography and shared local Pandanus plant genetics failed completely to correlate with those sharp territorial tool borders—pointing powerfully toward socially transmitted regional cultural traditions!

Paragraph E: Strikingly, cross-comparing museum specimens collected decades apart suggested apparent historical design evolution across generations, sparking fierce debate over whether avian minds achieve "cumulative cultural evolution"—the human ratchet effect whereby small innovations stack cumulatively past what any lone naive bird could invent inside a single lifetime. Controlled aviary cross-fostering experiments soon introduced essential evolutionary nuance, however: hand-raised naive juvenile crows separated strictly from adult demonstrators spontaneously picked up Pandanus strips and carved recognizable rudimentary hooks purely through genetic predisposition!

Paragraph F: Contemporary field synthesis therefore avoids simplistic all-nature versus all-nurture extremes. Natural selection inside predator-free isolated island habitats endowed Corvus moneduloides with specialized forward-facing binocular depth vision, unusually straight rigid bills built like forceps, and deep neural wiring predisposing juveniles toward object manipulation—upon which social observation among tight family groups refines local step counts, hook sharpness, and specialized extraction mastery over two years of juvenile apprenticeship.`,
        questions: [
          {
            id: 'cd_reading_m18_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Prior to Gavin Hunt\'s Grande Terre research, scholars widely regarded standardized multi-step hooked tool manufacture as exclusively human.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes paleoanthropologists defended "Man the Toolmaker," viewing deliberate sculpted standardized hooked tools as uniquely hominin until the 1990s.'
          },
          {
            id: 'cd_reading_m18_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Wild crows on Grande Terre rely purely on naturally bent fallen twigs without modifying sapling shapes manually.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states crows snap forked twigs selectively, strip side shoots, and carve curved terminal wooden hooks via chisel-like beak snips.'
          },
          {
            id: 'cd_reading_m18_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Discarded Pandanus leaves retain precise geometric impressions showing which exact tool shape local crows previously crafted.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D explains clipped Pandanus leaf edges preserve exact geometric photographic negatives of ripped crow tools.'
          },
          {
            id: 'cd_reading_m18_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Regional tool variations across Grande Terre match local biological subspecies boundaries in Pandanus shrubs precisely.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states island geography and Pandanus plant genetics failed completely to correlate with sharp territorial tool design borders.'
          },
          {
            id: 'cd_reading_m18_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Hand-reared young New Caledonian crows isolated from adults require explicit parental training before touching Pandanus fronds or twigs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E notes naive hand-raised juveniles separated from adults spontaneously manipulated Pandanus strips and carved rudimentary hooks via genetic predisposition.'
          },
          {
            id: 'cd_reading_m18_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Captive ravens native to temperate European mountains easily surpass Grande Terre crows when tested on Pandanus stepping techniques.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Passages 1 describes Grande Terre crows without testing European mountain ravens on Pandanus techniques.'
          },
          {
            id: 'cd_reading_m18_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why did Gavin Hunt and Russell Gray argue that Pandanus tool variations across Grande Terre reflect social traditions in Paragraph D?',
            options: [
              'A. Sharp geographic tool-shape borders failed to align with ecological terrain or local Pandanus leaf differences',
              'B. Northern crows possessed radically longer straight bills incapable of making wide stepped strips',
              'C. Naive isolated chicks fabricated multi-stepped southern templates automatically without observing parents',
              'D. Southern beetle grubs lived exclusively beneath smooth bark rather than candlenut trunks'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D highlights how sharp regional tool boundaries ignored geography and local Pandanus genetics, pointing toward socially transmitted regional cultures.'
          },
          {
            id: 'cd_reading_m18_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How did isolated aviary rearing complicate claims of purely learned crow tool cultures in Paragraph E and F?',
            options: [
              'A. Isolated juveniles refused to eat candlenut beetle larvae unless fed by researchers',
              'B. Captive birds abandoned straight forceps beaks in favor of curved stone-chiseling mandibles',
              'C. Uninstructed young birds proved basic tool-carving instincts are partly innate, while prolonged parental observation sharpens specialized finesse',
              'D. Controlled aviary studies proved regional multi-step templates appeared solely by accidental genetic mutation'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraphs E–F show innate genetic predisposition launches basic manipulation and hooking, while two years of social observation refine local step counts and craftsmanship.'
          },
          {
            id: 'cd_reading_m18_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Which anatomical adaptation specifically supports Corvus moneduloides precision tool sculpting in Paragraph F?',
            options: [
              'A. Backward-pointing beak teeth matched closely to barbed Pandanus leaf margins',
              'B. Forward-facing binocular vision combined with unusually straight forceps-like bills',
              'C. Extended wing talons evolved specifically to pry loose heavy candlenut logs',
              'D. Flexible throat pouches capable of bending thick sapling forks overnight'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph F specifies specialized forward-facing binocular depth vision and unusually straight rigid bills built like forceps.'
          },
          {
            id: 'cd_reading_m18_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Wild crows employ sturdy hooked twigs primarily to haul plump beetle ______ rapidly out of rotting trunks.',
            correctAnswer: 'GRUBS',
            explanation: 'Paragraph B states curved spurs hook fat beetle grubs out of decaying candlenut trunks (also beetle larvae).'
          },
          {
            id: 'cd_reading_m18_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Stepped plant tools naturally carry backward-facing edge ______ useful for snagging hidden bark insects.',
            correctAnswer: 'BARBS',
            explanation: 'Paragraph C notes stepped wedges are lined naturally with backward-pointing marginal barbs.'
          },
          {
            id: 'cd_reading_m18_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'What two-word biological endowment allows New Caledonian crows precise depth judgment while carving hooks?',
            correctAnswer: 'BINOCULAR DEPTH VISION',
            explanation: 'Paragraph F cites specialized forward-facing binocular depth vision.'
          },
          {
            id: 'cd_reading_m18_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'How long does young crows\' post-fledging apprenticeship alongside family experts typically last?',
            correctAnswer: 'TWO YEARS',
            explanation: 'Paragraph F mentions specialized mastery develops across two years of juvenile apprenticeship.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Causal Reasoning, Meta-Tools, and the Limits of Aesop\'s Fable Probes',
        subtitle: 'Disentangling genuine physical understanding from clever trial-and-error conditioning in corvids',
        text: `Paragraph A: Once fieldwork verified wild corvids sculpting sophisticated wooden hooks, comparative psychologists hauled wild-caught and captive New Caledonian crows straight inside laboratory puzzle arenas to probe a far subtler question: do these birds genuinely grasp unseen mechanical cause-and-effect ("folk physics"), or do sharp corvid brains simply chain together clever associative habits rewarded repeatedly with meat pellets? Early headlines hailed seemingly human insight in Alex Kacelnik's famous Oxford laboratory when captive female crow "Betty" repeatedly bent straight aluminum wires ninety degrees inside plastic slots to fish buried bucket handles out of tall glass tubes.

Paragraph B: Skeptical follow-up biomechanics, however, deflated naive interpretations of Betty's celebrated "spontaneous metal-bending insight." Later field footage filmed by Christian Rutz revealed wild Grande Terre crows already bending tough dry plant stalks downward underneath foot grips using exact wire-bending motor routines during normal twig-hook fabrication! Betty had not invented metallurgy spontaneously out of abstract physical genius; rather, confronted by springy wire, she applied an ingrained natural woody twig-bending motor program straight onto compliant aluminum.

Paragraph C: Determined to separate blind reflex habits from forward mental planning, Russell Gray and Alex Taylor engineered daunting multi-step "meta-tool" obstacle puzzles demanding foresight devoid of immediate food rewards. Facing a tempting piece of meat sealed deep inside an inaccessible horizontal Plexiglas box, crows first had to notice a short stick suspended harmlessly off-reach—use that short useless stick solely as a "meta-tool" to drag a longer unreachable probing dowel out of a barred side cage, and finally wield that retrieved long dowel cleanly inside the meat box! Five out of seven wild-caught crows solved multi-stage tool transfer swiftly, several on their very first unrewarded test attempt.

Paragraph D: Subsequent researchers pushed causal testing directly against classic Greek folklore via "Aesop's Fable" water-displacement apparatuses developed by Sarah Jelbert and Nathan Emery. Presenting thirsty birds with floating meat cubes bobbing far down half-filled vertical clear cylinders beside piles of heavy rubber sinkers versus buoyant hollow foam blocks, investigators watched crows rapidly pass over light floating blocks and drop heavy stones selectively into water columns—raising liquid levels upward until snacks floated safely within beak reach.

Paragraph E: Yet ingenious trap variants exposed persistent subtle blind spots inside corvid intuitive fluid physics! When researchers piped hidden underground water U-tubes linking a decoy empty tube alongside a baited meat-bearing narrow tube—or painted deceptive opaque white sleeves masking the true connecting water channel beneath—even champion stone-dropping crows failed dismally, dropping stones fruitlessly into arbitrary adjacent openings whenever direct perceptual feedback disappeared between stone splash and upward meat drift.

Paragraph F: Controlled comparative trials across human toddlers illuminate exactly where avian causal cognition plateaus. While New Caledonian crows routinely match healthy five-to-seven-year-old human children on standard sink-versus-float stone tubes and solid-versus-hollow displacement tasks, human preschoolers leap sharply ahead once invisible concealed mechanisms (hidden U-tubes or unseen counterweights) interrupt direct visual feedback—revealing that corvids excel superbly via acute real-time visual-causal tracking ("does dropping THIS pebble visibly raise THAT prize closer right now?") rather than full abstract symbolic physics models.

Paragraph G: Far from diminishing avian intelligence, dissecting those nuanced boundaries enriches evolutionary neurobiology tremendously. Operating without layered mammalian neocortex folds, dense tiny neurons packed tightly inside the avian nidopallium support breathtaking multi-step tool planning, inhibitory patience, and real-time physical adjustment—proving convergent cognitive brilliance evolved independently across dinosaurian birds and primates.`,
        questions: [
          {
            id: 'cd_reading_m18_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph A frames the lab debate between abstract causal insight and associative habits via Oxford wire-bending crow "Betty."'
          },
          {
            id: 'cd_reading_m18_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph B cites Christian Rutz\'s field video showing Betty\'s wire hook matched natural wild twig-bending routines rather than novel metallurgy.'
          },
          {
            id: 'cd_reading_m18_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph C profiles Gray and Taylor\'s meta-tool puzzles where crows used a short stick to pull out a longer functional dowel.'
          },
          {
            id: 'cd_reading_m18_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D summarizes Jelbert and Emery\'s Aesop\'s Fable tasks where crows dropped heavy sinkers rather than floating foam to lift meat.'
          },
          {
            id: 'cd_reading_m18_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph E shows hidden U-tubes and opaque painted sleeves caused even star crows to fail once immediate visual displacement cues disappeared.'
          },
          {
            id: 'cd_reading_m18_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph F contrasts crows matching seven-year-olds on visible water displacement while human preschoolers beat them on concealed invisible linkages.'
          },
          {
            id: 'cd_reading_m18_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Using one short implement exclusively to retrieve a longer working tool',
              'ii. Comparing child versus corvid success where invisible mechanisms hide links',
              'iii. Dissecting intuitive water-level puzzles with heavy versus buoyant blocks',
              'iv. Probing whether lab metal-bending shows true insight or learned habit',
              'v. Concealed tube traps reveal limits once immediate visual results vanish',
              'vi. Reinterpreting celebrated laboratory wire hooks through wild twig-bending footage',
              'vii. Distinct bird brain anatomy rivals mammalian neocortex complexity',
              'viii. Proving five-year-old human toddlers fail floating stone cylinder tests'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph G celebrates convergent intelligence organized inside dense avian nidopallium neurons despite lacking mammalian neocortex layers.'
          },
          {
            id: 'cd_reading_m18_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Field recordings showed wild crows curving plant stalks underfoot via actions matching Betty\'s wire-bending ______.',
            correctAnswer: 'MOTOR ROUTINES',
            explanation: 'Paragraph B explains Christian Rutz filmed wild crows using natural twig-bending routines matching Betty\'s wire-bending motor routines.'
          },
          {
            id: 'cd_reading_m18_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Retrieving an out-of-reach stick solely to unlock a longer probing rod exemplifies two-stage ______ foresight.',
            correctAnswer: 'META-TOOL',
            explanation: 'Paragraph C describes using a short useless stick as a "meta-tool" to drag a longer dowel out.'
          },
          {
            id: 'cd_reading_m18_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'During Aesop cylinder tests, crows ignored light foam pieces and dropped ______ into water columns.',
            correctAnswer: 'HEAVY STONES',
            explanation: 'Paragraph D states crows passed over light floating blocks and dropped heavy stones selectively into water.'
          },
          {
            id: 'cd_reading_m18_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Advanced avian reasoning emerges inside packed neurons of the bird brain region called the ______.',
            correctAnswer: 'NIDOPALLIUM',
            explanation: 'Paragraph G names dense tiny neurons packed tightly inside the avian nidopallium.'
          },
          {
            id: 'cd_reading_m18_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'What did hidden U-tube and opaque white-sleeve controls reveal about crow water-displacement skill in Paragraphs E and F?',
            options: [
              'A. Crows understand abstract hydrostatic pressure equations better than human toddlers',
              'B. Painted white sleeves scared birds permanently away from clear plastic laboratory boxes',
              'C. Avian problem-solving relies heavily on visible step-by-step cause-effect feedback rather than invisible hidden fluid models',
              'D. Heavy rubber sinkers dissolved unevenly underneath hidden U-tube bends'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraphs E–F explain crows succeed via real-time visual-causal tracking (seeing water rise per stone) and fail once opaque/concealed U-tubes sever visible feedback.'
          },
          {
            id: 'cd_reading_m18_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why did Gray and Taylor prevent immediate food rewards when designing multi-step "meta-tool" tasks in Paragraph C?',
            options: [
              'A. Using one tool solely to unlock another tool proves deliberate planning rather than random food-rewarded repetition',
              'B. Meat snacks rusted springy aluminum wires inside Plexiglas boxes',
              'C. Wild-caught Grande Terre crows refused dead insect meat inside cages',
              'D. Barred cages kept shorter wooden twigs out of binocular vision focus'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C stresses multi-step meta-tool retrieval separates forward planning devoid of instant meat rewards from blind habit chaining.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Marine Anvils, Dental Trade-Offs, and Matrilineal Otter Cultures',
        subtitle: 'Examining stone-hammering sea otters off Monterey Bay alongside ecological costs of tool dependence',
        text: `Paragraph A: Half an ocean northward along frigid Californian kelp beds, marine mammalogists uncovered an equally illuminating parallel tradition far removed from forest twigs: wild southern sea otters (Enhydra lutris nereis) floating belly-up amidst coastal swells while balancing smooth granite cobbles across chest fur as portable dining anvils. Though lacking opposable thumbs or stiff bird forceps bills, nimble-pawed sea otters remain among earth's very few marine mammals integrating loose stone hammers routinely into daily calorie budgets—smashing iron-hard sea snails, purple urchins, and thick-shelled mussels wide open cleanly against belly rocks.

Paragraph B: Extensive telemetry tracking led by Katherine Ralls, Jessica Fujii, and Chris Law across Big Sur and Monterey Bay revealed extraordinary individual dietary specialization hidden underneath idyllic tourist postcards. Rather than hammering every shellfish indiscriminately, adult otters divide into startlingly faithful "foraging guilds": one neighbor dives exclusively for soft kelp crabs requiring zero rock tools, another hunts burrowing clams, while specialized snail-crackers grip favorite palm-sized chert pebbles cleanly inside loose underarm skin pockets across weeks—slamming rigid Turban snails rhythmically at chest level until shells splinter.

Paragraph C: Strikingly, archaeological bone-and-shell forensics documented a sharp biological paradox surrounding stone anvil mastery: female otters employ rock tools far more frequently and tenaciously than larger male counterparts, and heavy tool users carry visibly preserved dental wear rather than spotless teeth! Diving females burdened simultaneously by nursing ravenous pups—whose caloric toll pushes maternal intake toward twenty-five percent of body weight daily—cannot afford abandoning dwindling giant abalone beds. Switching downward onto tough armored rock-snails saves female populations from starvation whenever soft kelp urchins thin out, yet repeated clumsy grit impacts still chip fragile tooth enamel dangerously whenever stone alignment slips slightly!

Paragraph D: Detailed longitudinal observation across Monterey mothers and pups points cleanly toward matrilineal cultural inheritance rather than pure genetic hardwiring. Because sea otter fathers provide zero parental care, young pups spend six dependent months bobbing wrapped securely upon maternal bellies—watching intently inches away as mothers retrieve concealed stones, pound mussels sharply, and share cracked meat scraps directly across chest fur. Daughters grow up faithfully copying mothers' exact prey preferences and favorite chest-rock grips even when swimming directly beside unrelated neighbors hunting completely different soft-shelled crabs!

Paragraph E: Yet ecological surveys warn that specialized rock-anvil traditions incur serious adaptive fragility when oceans warm rapidly or kelp forests collapse under purple sea-urchin barrens. Once entrenched maternal tool guilds lock young otters onto specific hard-shelled prey profiles, stubbornly specialized populations struggle switching smoothly onto unfamiliar swimming squid or open-water fishes if native snail beds vanish—echoing evolutionary traps observed among narrowly specialized hominins clinging onto obsolete flaking technologies!

Paragraph F: Comparing Grande Terre pandanus crows beside California anvil otters fundamentally reshapes behavioral ecology. Tool manufacture arises neither exclusively out of giant primate neocortices nor uniform ecological necessity: across soaring island birds and floating coastal carnivores alike, ecological hardship, grasping limbs or forceps bills, and prolonged vulnerable juvenile dependency converge repeatedly to forge non-genetic cultural survival toolkits—preserving hard-won foraging wisdom across generations while introducing delicate behavioral specialization risks.`,
        questions: [
          {
            id: 'cd_reading_m18_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains why nursing maternal energy demands drive females toward stone-assisted armored prey despite dental wear hazards?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C shows calorie-hungry nursing mothers fall back on armored rock snails via chest rocks to prevent starvation even though slipped strikes chip enamel.'
          },
          {
            id: 'cd_reading_m18_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph demonstrates how pups learn prey choices directly from mothers despite mingling beside neighbors with contrasting habits?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D traces six months of belly-riding observation teaching daughters mothers\' exact prey and stone grips regardless of nearby neighbors.'
          },
          {
            id: 'cd_reading_m18_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph describes coastal otters storing preferred pounding rocks inside bodily folds between dives?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B notes snail-cracking otters grip favorite chert pebbles inside loose underarm skin pockets across weeks.'
          },
          {
            id: 'cd_reading_m18_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph warns that deeply ingrained prey-and-tool traditions can hinder swift adaptation when familiar coastal shellfish disappear?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E warns rigid maternal guilds struggle pivoting toward swimming squid or fishes if warming wipes out traditional snail beds.'
          },
          {
            id: 'cd_reading_m18_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Wild Monterey sea otters indiscriminately pound every crab and clam species they capture against chest stones.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states adult otters split into specialized guilds—some hunt soft kelp crabs requiring zero rock tools while others target armored snails.'
          },
          {
            id: 'cd_reading_m18_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Using rock anvils prevents all tooth enamel damage completely inside female Monterey otter populations.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C explicitly cautions that heavy tool users carry marked dental wear because grit and slipped strikes still chip fragile tooth enamel.'
          },
          {
            id: 'cd_reading_m18_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Male sea otters play an essential active role instructing juvenile sons how to locate granite cobbles along Big Sur reefs.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D explicitly states sea otter fathers provide zero parental care.'
          },
          {
            id: 'cd_reading_m18_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'California fisheries authorities stocked Monterey Bay kelp reefs with two million hatchery abalone specifically to feed nursing otters in 2021.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C notes dwindling giant abalone beds pushing mothers toward rock snails without mentioning any 2021 hatchery restocking.'
          },
          {
            id: 'cd_reading_m18_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Extended juvenile dependency helps sustain learned tool skills across both forest corvids and coastal sea otters.',
            correctAnswer: 'YES',
            explanation: 'Paragraph F ties ecological hardship, grasping limbs/bills, and prolonged vulnerable juvenile dependency together across both species.'
          },
          {
            id: 'cd_reading_m18_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do female Monterey otters rely disproportionately more on stone anvils than larger adult males in Paragraph C?',
            options: [
              'A. Female paws secrete extra chest fur oils protecting granite cobbles from saltwater erosion',
              'B. Male otters lack loose underarm skin pockets capable of storing smooth chert stones',
              'C. Larger male otters lose all canine teeth before six months of maternal dependency ends',
              'D. Exhausting nursing caloric demands prevent females from thriving on scarce giant abalone, forcing reliance on hard-armored snails'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C explains nursing pups demands intake ~25% of maternal body weight daily, forcing females onto armored snails via tools whenever soft prey dwindles.'
          },
          {
            id: 'cd_reading_m18_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How does Paragraph D strengthen the cultural transmission case over pure genetic determinism among Big Sur otters?',
            options: [
              'A. Pups separated from mothers spontaneously dive straight for smooth granite stones within two days of birth',
              'B. Daughters inherit mothers\' exact diet and tool grip despite growing up alongside neighboring otters hunting totally different crabs',
              'C. Male otters actively swim back after six months to teach daughters chert-pocket storage',
              'D. Unrelated neighbors copy female snail-crackers rapidly whenever kelp urchins vanish'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D stresses pups watch mothers intimately for six months and daughters faithfully replicate maternal prey and stone grips even beside crab-eating neighbors.'
          },
          {
            id: 'cd_reading_m18_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What shared evolutionary synthesis unites Passages 1 and 3 in Paragraph F?',
            options: [
              'A. Only creatures possessing mammalian primate neocortex layers sustain non-genetic tool traditions',
              'B. Marine carnivores invented chest hammering millions of years earlier than forest songbirds bent wooden twigs',
              'C. Bird Pandanus crafting completely protects wild crows against habitat disruptions, unlike fragile marine otters',
              'D. Scarcity pressure, anatomical grasping ability, and lengthy juvenile parenting repeatedly evolve cultural tool habits across wildly distant lineages'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F synthesizes crows and otters: hardship, manipulative anatomy, and prolonged juvenile apprenticeship converge to create non-genetic cultural toolkits.'
          },
          {
            id: 'cd_reading_m18_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Specialized snail-hunting otters tuck prized granite or ______ carefully inside loose underarm folds between dives.',
            correctAnswer: 'CHERT PEBBLES',
            explanation: 'Paragraph B notes specialized snail-crackers grip favorite palm-sized chert pebbles cleanly inside underarm pockets.'
          },
          {
            id: 'cd_reading_m18_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'When warming waters destroy traditional snail reefs, rigidly specialized otter guilds risk severe ______.',
            correctAnswer: 'ADAPTIVE FRAGILITY',
            explanation: 'Paragraph E warns specialized rock-anvil traditions incur serious adaptive fragility when kelp ecosystems collapse.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 19 (VERY DIFFICULT): cd_reading_m19 (Sustainable Concrete Formulations Using Pozzolanic Volcanic Ash)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m19',
    testNumber: 19,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 19: Sustainable Concrete Formulations Using Pozzolanic Volcanic Ash',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on clinker calcination emissions, Roman harbor pozzolana self-healing forensics, and LC3 calcined-clay decarbonization codes.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Clinker Chemistry, Roman Harbors, and Hot-Mixed Volcanic Self-Healing',
        subtitle: 'Deconstructing why Ordinary Portland Cement strains climate budgets while two-millennia-old piers harden underwater',
        text: `Paragraph A: Modern human urban civilization sits quite literally poured upon grey artificial stone: Ordinary Portland Cement (OPC) concrete ranks second solely behind fresh drinking water as humanity's single heaviest-consumed material, exceeding thirty billion metric tons annually. Yet OPC's triumph conceals an immense geochemical climate burden—responsible single-handedly for roughly eight percent of global carbon dioxide emissions, far surpassing worldwide commercial aviation. Roughly forty percent of that carbon footprint stems from burning coal, natural gas, or petroleum coke to heat rotary kilns past 1,450 degrees Celsius; the remaining stubborn sixty percent radiates chemically straight out of raw limestone rock (CaCO3) during thermal calcination into lime clinker (CaO), releasing unavoidable process CO2 regardless of whether kilns run purely on zero-carbon wind electricity!

Paragraph B: Seeking pathways out of cement's geochemical trap, forensic civil materials scientists looked backward twenty centuries toward colossal Roman harbor piers along Pozzuoli Bay and the unreinforced coffered concrete dome of Rome's Pantheon, still carrying loads intact after nearly two millennia bathed continuously in salty Mediterranean waves—far outliving coastal reinforced steel piers erected in the 1960s that routinely spall and rust apart inside sixty years.

Paragraph C: Using high-intensity synchrotron X-ray micro-diffraction at Berkeley Lab, structural geologist Marie Jackson and MIT chemist Admir Masic peeled back persistent nineteenth-century misconceptions surrounding ancient Vitruvian concrete recipes. Rather than simply pouring quick-setting limestone clinker mixed with inert river gravel, Roman builders ground porous volcanic tephra collected around Mount Vesuvius—later termed "pozzolana"—directly alongside dry reactive quicklime ("calx") and coastal seawater!

Paragraph D: Over centuries of salty tidal immersion, seawater percolation reacted slowly inside volcanic alumino-silicate glass pores, precipitating exotic, interlocking crystalline needles of aluminum-substituted tobermorite and fibrous phillipsite minerals—silicate crystal blankets that reinforced cement matrix voids internally rather than cracking cleanly under harbor wave fatigue! Paradoxically, while modern OPC engineers aim carefully toward chemically dead inert sand-matrix seals keeping salty seawater rigorously away from enclosed steel rebar rods, Roman unreinforced marine concrete actively recruited incoming marine brine to grow stronger across decades.

Paragraph E: Equally startling, Admir Masic's team discovered in 2023 that tiny white millimeter-sized "lime clasts" peppered throughout ancient Roman walls were not sloppy careless mixing blemishes at all, as generations of modern masons patronizingly presumed. High-temperature "hot mixing"—blending exothermic boiling quicklime straight onto dry volcanic ash and sparse water—intentionally locked crisp unhydrated calcium reservoirs inside cured rock matrices. Whenever hair-thin seismic or thermal cracks later admitted stray rainwater, those dormant quicklime pockets dissolved rapidly into saturated calcium solutions that crystallized instantly as solid calcium carbonate, autonomously welding narrow cracks watertight again!

Paragraph F: Still, engineers guard fiercely against nostalgic delusions of pouring slow-setting ancient Roman harbor paste across hectic twenty-first-century skyscrapers. Pure lime-pozzolana concretes take weeks or months reaching bare scaffolding stripping strength—unusable where commercial bridge decks demand crisp twenty-eight-day load readiness and strict shrinkage resistance. Modern green formulation seeks therefore not literal archaeological copying, but smart hybrid blends harnessing pozzolanic self-reinforcement alongside minimal high-efficiency hydraulic clinker.`,
        questions: [
          {
            id: 'cd_reading_m19_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Switching cement kilns completely from coal fuel to renewable electricity would eliminate virtually all carbon dioxide from Ordinary Portland Cement.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states roughly sixty percent of cement emissions radiate chemically straight from limestone calcination regardless of whether kilns run on zero-carbon electricity.'
          },
          {
            id: 'cd_reading_m19_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Modern steel-reinforced marine piers built during the mid-twentieth century often deteriorate far sooner than ancient unreinforced Roman sea walls.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B contrasts intact two-millennia-old Roman harbor piers against 1960s coastal steel piers rusting apart inside sixty years.'
          },
          {
            id: 'cd_reading_m19_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Marine waves rapidly dissolved Roman harbor piers because coastal seawater blocked crystal formation inside volcanic pores.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D explains seawater reacted with volcanic glass pores to grow interlocking tobermorite and phillipsite crystals that actively strengthened piers.'
          },
          {
            id: 'cd_reading_m19_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Until 2023 forensic chemistry, modern builders commonly dismissed white calcium flecks in Roman walls as signs of sloppy mixing.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph E notes generations of modern masons patronizingly presumed tiny white "lime clasts" were careless mixing blemishes before 2023 hot-mixing analysis.'
          },
          {
            id: 'cd_reading_m19_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Ancient Roman builders patented formal mathematical equations predicting tobermorite crystal needle angles under Vitruvius.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs C–D discuss Vitruvian concrete recipes and modern synchrotron X-ray discovery of tobermorite without claiming Romans derived needle-angle equations.'
          },
          {
            id: 'cd_reading_m19_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Pure historical lime-pozzolana blends harden fast enough to let modern bridge contractors strip highway scaffolding within hours.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph F notes pure lime-pozzolana concretes take weeks or months reaching bare scaffolding stripping strength.'
          },
          {
            id: 'cd_reading_m19_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why does Paragraph A identify thermal calcination as cement decarbonization\'s stubborn core bottleneck?',
            options: [
              'A. Limestone mines around coastal regions sit far too deep for renewable wind excavators',
              'B. Global commercial aviation consumes far more limestone rock annually than bridge piers',
              'C. Splitting carbon dioxide off calcium carbonate chemistry releases sixty percent of emissions intrinsically even using clean kiln heat',
              'D. Petroleum coke burns cleanly at lower temperatures than modern hydrogen furnaces'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph A stresses sixty percent of cement CO2 radiates chemically from breaking down CaCO3 into CaO regardless of kiln fuel source.'
          },
          {
            id: 'cd_reading_m19_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How did hot-mixed quicklime inclusions allow damaged ancient Roman walls to heal cracks autonomously in Paragraph E?',
            options: [
              'A. Molten volcanic glass flowed straight back downward into empty gravel cavities',
              'B. Seeping rainwater dissolved dormant calcium clasts into solutions that recrystallized cleanly across fractures',
              'C. Saltwater phillipsite fibers expanded thermally whenever kilns operated past 1,450 degrees Celsius',
              'D. Inert river gravel shifted inward to close narrow surface gaps before setting'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E states trapped lime clasts dissolved when stray rainwater entered cracks, recrystallizing as solid calcium carbonate to seal fractures watertight.'
          },
          {
            id: 'cd_reading_m19_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What sharp chemical contrast divides ancient Roman seawater concrete from modern Portland reinforced piers in Paragraph D?',
            options: [
              'A. Modern OPC formulations actively precipitate fibrous phillipsite needles around steel rebar rods',
              'B. Roman builders prohibited seawater mixing entirely across Mount Vesuvius harbors',
              'C. Modern engineers isolate internal steel strictly from seawater, whereas unreinforced Roman concrete grew stronger mineral crystals from invading brine',
              'D. Ancient piers collapsed quickly unless rebuilt inside sixty years with steel bars'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D contrasts modern OPC keeping salty seawater away from rebar against unreinforced Roman concrete recruiting brine to precipitate strengthening tobermorite.'
          },
          {
            id: 'cd_reading_m19_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Ancient Roman builders mixed quicklime with porous volcanic ash originally quarried near Vesuvius known as ______.',
            correctAnswer: 'POZZOLANA',
            explanation: 'Paragraph C identifies porous Mount Vesuvius volcanic tephra as "pozzolana."'
          },
          {
            id: 'cd_reading_m19_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Seawater infiltration reinforced ancient pier interiors by precipitating interlocking needles of aluminum-substituted ______.',
            correctAnswer: 'TOBERMORITE',
            explanation: 'Paragraph D specifies interlocking crystalline needles of aluminum-substituted tobermorite and fibrous phillipsite.'
          },
          {
            id: 'cd_reading_m19_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'What exact kiln temperature Celsius must modern manufacturers exceed when firing Ordinary Portland Cement clinker?',
            correctAnswer: '1,450 DEGREES CELSIUS',
            explanation: 'Paragraph A states rotary kilns burn fuel to heat limestone past 1,450 degrees Celsius.'
          },
          {
            id: 'cd_reading_m19_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What two-word ancient manufacturing method intentionally embedded reactive white calcium specks inside walls?',
            correctAnswer: 'HOT MIXING',
            explanation: 'Paragraph E identifies high-temperature "hot mixing"—blending boiling quicklime straight onto dry ash.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Pozzolanic Reactivity, Industrial Byproduct Bottlenecks, and LC3 Breakthroughs',
        subtitle: 'Why vanishing coal fly ash forces concrete engineers toward volcanic pumice and calcined clay blends',
        text: `Paragraph A: For over half a century, concrete engineers sidestepped pure high-clinker emissions quietly through "supplementary cementitious materials" (SCMs)—finely ground pozzolanic powders blended into wet mixes to replace twenty to fifty percent of energy-intensive Portland clinker. Unlike hydraulic clinker which hardens directly alongside plain water, classic pozzolans possess negligible cementing capacity alone. Instead, finely milled glassy silica and alumina inside pozzolans react chemically at ambient temperatures with leftover soluble calcium hydroxide ("portlandite")—a relatively weak, leachable byproduct shed naturally whenever Ordinary Portland Cement hydrates—transforming weak calcium waste into dense, ultra-durable calcium-silicate-hydrate (C-S-H) binding gel!

Paragraph B: Across booming postwar concrete industries, engineers rarely mined natural Mediterranean volcanic ash because two vast, virtually free industrial wastes flooded freight yards: pulverized coal fly ash swept straight out of coal-fired power-station smokestacks, alongside granulated blast-furnace slag skimmed from molten steel smelters. Replacing forty percent of clinker with dirt-cheap fly ash or slag slashed emissions cleanly while tightening concrete pores against highway de-icing salts—generating an illusion of effortless sustainable SCM abundance.

Paragraph C: Today, global decarbonization itself has triggered an acute SCM supply crunch starving concrete mixers nationwide. As wealthy grids shutter dirty coal power stations rapidly and shift electric-arc steel furnaces from coal blast-smelting toward scrap recycling, worldwide fly ash and slag production sits projected to plunge below ten percent of surging concrete volume before mid-century—especially across booming Indian, African, and Southeast Asian housing corridors lacking historic coal fleets completely.

Paragraph D: Faced with dwindling industrial slag, materials engineers turned urgently back toward abundant geological pozzolans—fresh volcanic tuffs across Rift Valley East Africa, Andean tephras, Indonesian pumice fields—alongside a game-changing synthetic mineral powerhouse: calcined kaolinite clay. Heating common impure kaolin clay beds mildly to just 700–850 degrees Celsius inside rotary flash calciners expels crystal hydroxyl water cleanly without emitting limestone calcination CO2, creating hyper-reactive amorphous metakaolin ready to bond portlandite rapidly!

Paragraph E: Yet swapping half of Portland clinker purely for metakaolin originally produced stiff, thirsty, prohibitively sticky pastes demanding expensive chemical superplasticizers. A historic materials breakthrough published by Karen Scrivener's EPFL laboratory unlocked an ingenious ternary synergy dubbed Limestone Calcined Clay Cement (LC3). Blending fifty percent clinker alongside thirty percent calcined metakaolin, fifteen percent finely ground unburned raw limestone, and five percent gypsum unlocked dramatic chemical teamwork: clay alumina reacts directly with uncalcined carbonate dust to grow space-filling carboaluminate crystals slashing pore permeability at fifty-percent clinker reductions!

Paragraph F: Crucially, natural volcanic tephras and calcined clays still confront stark regional mineralogy realities. Not every volcanic hill carries glassy silica active enough for structural girders: crystalline quartz-rich basalt ash behaves essentially as dead inert filler unless pulverized ultra-finely or mildly heated, forcing local quarry geologists to screen reactive amorphous glass fractions meticulously prior to highway structural batching.

Paragraph G: Early strength development poses a parallel engineering trade-off inside cold temperate climates. Because secondary pozzolanic reactions wait patiently until Portland clinker first sheds calcium hydroxide waste, high-pozzolan mixes gain strength more gradually during chilled winter pours—requiring either slightly longer thermal curing blankets or finer gypsum-sulfate optimization before precast beams achieve seven-day crane-lift stiffness.`,
        questions: [
          {
            id: 'cd_reading_m19_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph A defines pozzolans reacting with weak portlandite byproduct from OPC hydration to forge strong calcium-silicate-hydrate gel.'
          },
          {
            id: 'cd_reading_m19_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph B traces postwar reliance on abundant cheap coal fly ash and blast-furnace slag masking underlying SCM limits.'
          },
          {
            id: 'cd_reading_m19_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph C warns retiring coal plants and electric-arc steel shifts drop fly-ash/slag supply below 10% of global concrete needs.'
          },
          {
            id: 'cd_reading_m19_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph D covers natural Rift/Andean volcanic tuffs plus firing kaolin clay at 700–850°C to form CO2-free reactive metakaolin.'
          },
          {
            id: 'cd_reading_m19_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph E explains Scrivener\'s LC3 ternary formulation combining 50% clinker, 30% calcined clay, 15% raw limestone, and 5% gypsum.'
          },
          {
            id: 'cd_reading_m19_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph F notes crystalline quartz basalt ash acts inertly unless finely milled or warmed, demanding mineralogical glass assays.'
          },
          {
            id: 'cd_reading_m19_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Clean energy transition drains traditional power-plant and steel-mill concrete additives',
              'ii. Pairing calcined clay with unburned limestone overcomes paste stiffness at half clinker',
              'iii. Slower winter hardening challenges precast beam lifting schedules',
              'iv. How reactive silica converts weak cement waste into dense binding gel',
              'v. Why crystal-rich dark basalt ashes need careful screening beyond glassy tephras',
              'vi. Cheap postwar coal and steel wastes disguised upcoming supply limits',
              'vii. Heating common clays moderately unlocks reactive volcanic alternatives without lime CO2',
              'viii. Banning all Portland clinker inside Swiss bridge construction completely'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph G traces delayed early strength gain in cold winter concrete requiring longer thermal curing blankets or sulfate tuning.'
          },
          {
            id: 'cd_reading_m19_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Glassy volcanic additives upgrade cement by converting soluble calcium hydroxide ______ into tough binding gel.',
            correctAnswer: 'PORTLANDITE',
            explanation: 'Paragraph A identifies soluble calcium hydroxide byproduct as "portlandite."'
          },
          {
            id: 'cd_reading_m19_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Firing kaolinite mildly around 750 degrees Celsius drives off water to produce reactive amorphous ______.',
            correctAnswer: 'METAKAOLIN',
            explanation: 'Paragraph D explains heating kaolin expels hydroxyl water without lime CO2, producing hyper-reactive amorphous metakaolin.'
          },
          {
            id: 'cd_reading_m19_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Within ternary LC3 cements, clay alumina bonds directly alongside unburned carbonate to precipitate pore-blocking ______.',
            correctAnswer: 'CARBOALUMINATE CRYSTALS',
            explanation: 'Paragraph E specifies space-filling carboaluminate crystals slashing pore permeability at 50% clinker substitution.'
          },
          {
            id: 'cd_reading_m19_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'In chilly winters, high-pozzolan precast beams require gypsum tuning or protective ______ to reach early stiffness.',
            correctAnswer: 'CURING BLANKETS',
            explanation: 'Paragraph G cites slightly longer thermal curing blankets or finer gypsum-sulfate optimization during winter pours.'
          },
          {
            id: 'cd_reading_m19_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why will traditional supplementary cementitious powders soon fail to meet global construction demand in Paragraph C?',
            options: [
              'A. Coal fly ash and blast-furnace slag supplies shrink sharply as electricity grids and steelworks retire coal technologies',
              'B. Granulated smelter slag triggers destructive swelling inside marine seawall foundations',
              'C. Fast-growing Asian housing booms outlaw volcanic pumice quarries completely',
              'D. Fly ash mixes react too rapidly in cold winters without expensive gypsum retarders'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C notes shuttering coal plants and shifting to scrap electric-arc steelmaking drops fly-ash and slag supply below 10% of future concrete volume.'
          },
          {
            id: 'cd_reading_m19_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What critical chemical breakthrough separates LC3 formulas from simple high-dose clay blends in Paragraph E?',
            options: [
              'A. Roasting raw limestone inside 1,450-degree rotary kilns doubles gypsum crystallization speed',
              'B. Removing gypsum entirely cuts cement thermal shrinkage across bridge girders',
              'C. Pure metakaolin requires zero clinker hydration waste to harden underwater instantaneously',
              'D. Including fifteen percent uncalcined limestone reacts with clay alumina to fill pores cleanly without sticky superplasticizer excess'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E shows pairing 30% metakaolin with 15% raw limestone and 5% gypsum creates carboaluminate crystals while avoiding stiff, sticky pure-clay paste.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Rebar Corrosion Chemistry, Alkali-Silica Traps, and Performance Building Codes',
        subtitle: 'Addressing steel passivation durability and conservative regulatory barriers in modern low-carbon concrete',
        text: `Paragraph A: Even after university laboratories prove volcanic tuff and LC3 concretes crush compressive load tests and halve embodied CO2 footprints, real-world highway agencies hesitate stubbornly before approving low-clinker formulations for reinforced bridges. Behind cautious engineering resistance lies a genuine chemical paradox involving steel rebar durability: modern reinforced concrete survives decades precisely because ordinary high-clinker cement paste bathes embedded carbon-steel rods in an extraordinarily caustic alkaline fluid exceeding pH 13, forging an invisible microscopic iron-oxide "passive film" preventing oxygen and moisture from rusting bars inside columns!

Paragraph B: Replacing forty to sixty percent of alkaline Portland clinker with silica-rich volcanic ash systematically consumes excess soluble calcium hydroxide—which slightly lowers baseline pore alkalinity downward toward pH 11.5 to 12.2. Worse still, atmospheric carbon dioxide slowly diffuses inward through surface concrete pores ("carbonation"), neutralizing residual alkalinity over decades until steel passive films abruptly break down, swelling corroded rebar eightfold in volume and bursting concrete cover straight off highway overpasses.

Paragraph C: Careful forensic testing demonstrates, however, that well-formulated pozzolanic concretes typically *outlast* high-clinker OPC despite lower total caustic buffer reserves! By reacting loose leachable calcium hydroxide into ultra-fine tortuous C-S-H and carboaluminate pore networks, volcanic ash and LC3 blends slash overall gas and chloride-salt permeability tenfold—choking incoming corrosive ocean chlorides and atmospheric CO2 penetration at outer millimeter skins long before gases ever touch deeper steel bars. Yet verifying that subtle balance requires long-term chloride-diffusion tests rather than blind clinker-ratio shortcuts.

Paragraph D: Equally subtle material risks surface around trace mineral contaminants inside impure volcanic deposits. Certain glassy tuffs supply abundant reactive soluble alkalis (sodium and potassium) capable of triggering destructive "alkali-silica reaction" (ASR)—where caustic pore liquid slowly attacks reactive flint gravel aggregates, generating hungry swelling silica gels that fracture highways like internal frost heave. Conversely, finely milled low-alkali pumice actually *suppresses* destructive ASR across vulnerable quarry aggregates by tying loose alkalis harmlessly into solid pozzolanic crystals before gravel ever swells!

Paragraph E: Nevertheless, conservative regulatory plumbing blocks broad deployment even when mineralogy proves flawless. For generations, municipal building standards relied comfortably on rigid "prescriptive codes" mandating exact ingredient percentages ("minimum 350 kilograms of pure clinker per cubic meter") rather than testing actual engineering outputs. Prescriptive checklists shield overworked municipal inspectors from complex lab audits yet automatically outlaw high-performance fifty-percent volcanic or LC3 mixes simply for failing legacy minimum-clinker weights!

Paragraph F: Accelerating safe construction decarbonization therefore hinges on shifting engineering legislation cleanly from ingredient-dictating prescriptive rules toward rigorous "performance-based codes"—standards certifying fresh formulations based directly upon 28-day compressive strength, electrical resistivity against salt ingress, and accelerated carbonation durability regardless of volcanic source mineral ratios. Only when building standards judge concrete honestly by structural performance rather than nineteenth-century ingredient recipes will volcanic ashes and calcined clays scale across twenty-first-century infrastructure.`,
        questions: [
          {
            id: 'cd_reading_m19_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains how caustic alkalinity inside ordinary cement protects internal reinforcing steel from rust?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'A',
            explanation: 'Paragraph A describes high-clinker cement maintaining pore fluids past pH 13, forming an iron-oxide passive film guarding steel rebar.'
          },
          {
            id: 'cd_reading_m19_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph notes how volcanic additives can either provoke or suppress harmful swelling reactions inside aggregate gravel depending on chemistry?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D contrasts sodium/potassium-heavy tuffs triggering alkali-silica reaction (ASR) against low-alkali pumice tying alkalis harmlessly to block ASR.'
          },
          {
            id: 'cd_reading_m19_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph explains why legacy construction rules disqualify low-carbon concretes simply for lacking traditional clinker weights?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E explains rigid prescriptive codes mandate arbitrary minimum clinker kilograms per cubic meter regardless of actual performance.'
          },
          {
            id: 'cd_reading_m19_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph resolves the alkalinity durability puzzle by showing denser pore networks block invasive salt and gas entry?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C shows denser C-S-H and carboaluminate pore grids cut gas and chloride permeability tenfold, protecting rebar despite slightly lower alkalinity.'
          },
          {
            id: 'cd_reading_m19_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'High-pozzolan volcanic concretes invariably suffer faster internal rebar rusting than standard Portland cement bridges.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C explicitly states well-formulated pozzolanic and LC3 concretes typically outlast high-clinker OPC by cutting gas and chloride penetration tenfold.'
          },
          {
            id: 'cd_reading_m19_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Swelling corroded rebar inside bridges occupies vastly more physical volume than original unrusted steel rods.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B states corroded rebar swells eightfold in volume, bursting concrete cover off highway overpasses.'
          },
          {
            id: 'cd_reading_m19_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Every finely milled volcanic ash deposit raises the risk of destructive alkali-silica swelling when mixed with flint gravel.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states finely milled low-alkali pumice actually suppresses destructive ASR by locking loose alkalis safely inside crystals.'
          },
          {
            id: 'cd_reading_m19_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Swiss federal highway engineers permanently outlawed all prescriptive clinker minimums across Alpine bridge tunnels in 2019.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs E–F urge shifting toward performance-based codes generally without citing a 2019 Swiss Alpine tunnel decree.'
          },
          {
            id: 'cd_reading_m19_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Prescriptive ingredient checklists originally spared municipal inspectors from executing complex performance verification tests.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E acknowledges prescriptive checklists shield overworked municipal inspectors from complex lab audits even while blocking low-carbon mixes.'
          },
          {
            id: 'cd_reading_m19_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why did replacing forty to sixty percent of clinker initially alarm bridge durability engineers in Paragraphs A and B?',
            options: [
              'A. Volcanic ashes swell instantly by eightfold volume inside dry steel bridge forms',
              'B. Consuming portlandite slightly drops internal concrete pH, weakening alkaline armor against incoming carbonation rust',
              'C. Pure OPC mixtures never develop protective microscopic iron-oxide films around carbon-steel rods',
              'D. Atmospheric carbon dioxide turns steel bars straight into soluble calcium hydroxide gel'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraphs A–B explain consuming calcium hydroxide drops pH from >13 toward 11.5–12.2, raising concerns that carbonation could strip passive films off rebar.'
          },
          {
            id: 'cd_reading_m19_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How does Paragraph D illustrate the mineralogical precision needed before adopting local volcanic ash quarries?',
            options: [
              'A. Grinding volcanic rocks finely dissolves atmospheric nitrogen straight inside cement trucks',
              'B. Coarse flint quarry aggregates react safely with ocean chlorides without needing pozzolanic crystals',
              'C. Any glassy pumice lowers compressive concrete strength permanently whenever steel rods stay absent',
              'D. Sodium- and potassium-heavy volcanic tuffs promote ASR swelling gels, whereas low-alkali pumice blocks ASR across reactive gravel'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D contrasts soluble alkali-rich tuffs triggering swelling silica gels against finely ground low-alkali pumice binding alkalis harmlessly.'
          },
          {
            id: 'cd_reading_m19_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Which regulatory reform captures Paragraph F\'s solution to municipal code resistance?',
            options: [
              'A. Evaluating mixes via standardized strength, salt resistivity, and carbonation durability tests regardless of ingredient percentages',
              'B. Requiring a minimum 350 kilograms of Portland clinker alongside optional twenty-percent volcanic pumice',
              'C. Eliminating steel reinforcing bars altogether across twenty-first-century highway bridges',
              'D. Restricting volcanic LC3 formulations exclusively to dry desert pavements free of winter frost'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph F calls for "performance-based codes" certifying mixes via compressive strength, electrical resistivity against salt, and carbonation durability.'
          },
          {
            id: 'cd_reading_m19_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'High pore alkalinity normally coats steel rebar safely underneath an invisible protective ______.',
            correctAnswer: 'PASSIVE FILM',
            explanation: 'Paragraph A identifies the microscopic iron-oxide "passive film" guarding bars from rust.'
          },
          {
            id: 'cd_reading_m19_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Accelerating low-carbon volcanic mixtures requires replacing ingredient quotas with verified ______ judging strength and salt durability directly.',
            correctAnswer: 'PERFORMANCE-BASED CODES',
            explanation: 'Paragraph F urges replacing legacy prescriptive rules with rigorous "performance-based codes."'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 20 (VERY DIFFICULT): cd_reading_m20 (The Decipherment of Linear B and Mycenaean Administrative Records)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m20',
    testNumber: 20,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 20: The Decipherment of Linear B and Mycenaean Administrative Records',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on Aegean Bronze Age script debates, Ventris-Kober grid cryptanalysis, and clay palace archive historiography.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Knossos Clay Archives, Evans\'s Dogma, and the Bronze Age Script Triplet',
        subtitle: 'Why brilliant Aegean excavation discovery initially delayed Greek decipherment for half a century',
        text: `Paragraph A: Excavating weathered Bronze Age palace ruins atop Kephala Hill at Knossos in northern Crete during spring 1900, British archaeologist Sir Arthur Evans unearthed hardened baskets of fire-baked gray clay tablets incised cleanly with mysterious crisp strokes—confirming at last that prehistoric Aegean elites tracked grain and flocks long before classical Greek alphabetic writing. Rather than finding one uniform script, however, Evans classified three overlapping non-alphabetic Aegean writing traditions spanning the second millennium BCE: an ornate early pictographic "Cretan Hieroglyphic" preserved on carved seal stones, a widespread administrative script dubbed "Linear A" scattered across Minoan towns, and a neat, standardized tablet script designated "Linear B" appearing abundantly inside late Knossos rooms.

Paragraph B: Tragedy immediately stalled linguistic progress for decades behind Evans's formidable personal authority and restrictive publication monopoly. Convinced passionately that vibrant palace-building "Minoans" formed a sophisticated non-Greek pre-Hellenic civilization colonizing rustic mainland Mycenae from overseas Crete, Evans dismissed contemptuously any philologist hinting that Linear B tablets might record archaic spoken Greek! Guarding nearly three thousand Knossos tablets carefully inside private scholarly notebooks—releasing barely two hundred examples publicly before his death in 1941—Evans starved outside cryptographers of statistical sign patterns essential for structural codebreaking.

Paragraph C: Even without Evans's full Cretan corpus, physical arithmetic offered cryptanalysts sharp initial clues regarding Linear B's fundamental mechanics. Counting distinct recurring characters swiftly ruled out both extreme linguistic possibilities: pure alphabetic writing typically requires barely twenty to thirty discrete letters (mirroring twenty-four Greek signs), whereas sprawling logographic systems like classical Chinese or Egyptian hieroglyphs demand many hundreds or thousands of word pictures. Linear B settled cleanly around eighty-seven recurring phonetic symbols paired flexibly alongside unmistakable numerical tally marks and recognizable pictured "ideograms" depicting chariots, amphora jars, oxen, and swords—an unmistakable structural fingerprint of a syllabary where each sign represents an open vowel or consonant-plus-vowel syllable (such as *pa*, *te*, *ko*)!

Paragraph D: Breakthrough archival volume finally erupted in 1939 when American archaeologist Carl Blegen dug straight down into burnt Bronze Age palace ruins at Pylos along mainland southwestern Greece—uncovering over six hundred crisply preserved Linear B tablets inside what looked unmistakably like Homer's legendary Mycenaean stronghold of "sandy Pylos." Critically, Pylos tablets dated around 1200 BCE matched Knossos Linear B spellings sign-for-sign across hundreds of miles of Aegean Sea—shattering lingering claims of purely local Cretan isolation while prompting urgent methodological questions about how mainland Mycenaean scribes adapted an insular script.

Paragraph E: World War II stalled distribution of Blegen's mainland tablets until 1951, when Cincinnati epigrapher Emmett L. Bennett Jr. published meticulous paleographic transcriptions standardizing every messy scribal stroke variation into clear numeric sign lists. Bennett instantly distinguished Linear B structurally from older Minoan Linear A: while both shared dozens of graphic forms, Linear B eliminated complex fractional commodity ratios and introduced streamlined base-ten metric bookkeeping, confirming an abrupt administrative discontinuity rather than gradual island evolution.

Paragraph F: Crucially, neither Blegen nor Evans possessed a single bilingual monument comparable to Egypt's Rosetta Stone matching Linear B side-by-side against Babylonian Akkadian or classical Greek. Cracking an unreadable dead script carrying unknown phonetic values inside an unconfirmed underlying language looked close to mathematical impossibility without an extraordinary structural method bypassing bilingual translations entirely.`,
        questions: [
          {
            id: 'cd_reading_m20_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Arthur Evans promptly shared photographic editions of all three thousand Knossos tablets with cryptanalysts within five years of 1900.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B notes Evans guarded nearly three thousand Knossos tablets inside private notebooks, publishing scarcely two hundred before dying in 1941.'
          },
          {
            id: 'cd_reading_m20_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Counting roughly eighty-seven recurring phonetic symbols pointed analysts strongly toward a syllabary rather than an alphabet or pure logography.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C shows eighty-seven signs sit squarely between 20–30-letter alphabets and vast multi-hundred logographic systems, characteristic of open-syllable syllabaries.'
          },
          {
            id: 'cd_reading_m20_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Carl Blegen\'s 1939 Pylos mainland tablets shared virtually identical Linear B spelling conventions with distant Cretan Knossos archives.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states 1200 BCE Pylos tablets matched Knossos Linear B spellings sign-for-sign across hundreds of miles of Aegean Sea.'
          },
          {
            id: 'cd_reading_m20_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Emmett Bennett demonstrated that Linear B kept Minoan Linear A\'s intricate fractional arithmetic unchanged.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E explains Bennett showed Linear B eliminated complex fractional ratios and introduced streamlined base-ten metric bookkeeping.'
          },
          {
            id: 'cd_reading_m20_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Excavators uncovered an Akkadian-to-Linear-B diplomatic bilingual treaty tablet beneath Pylos\'s southwestern archive wall.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph F stresses neither Blegen nor Evans possessed a single bilingual Rosetta-Stone monument alongside Linear B.'
          },
          {
            id: 'cd_reading_m20_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Classical Greek scribes deliberately burned Cretan Hieroglyphic seals to conceal early Minoan religious songs.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A mentions Cretan Hieroglyphic seals and fire-baked clay baskets with zero mention of classical Greek burning campaigns.'
          },
          {
            id: 'cd_reading_m20_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'How did Sir Arthur Evans\'s personal historical convictions hinder Linear B decipherment in Paragraph B?',
            options: [
              'A. He burned damaged Knossos clay tablets before World War II bombings began',
              'B. He argued Linear B represented an imported twenty-four-letter Phoenician trading alphabet',
              'C. Insisting Minoans spoke a non-Greek imperial tongue discouraged Greek hypotheses while hoarding unpublished texts blocked codebreaking stats',
              'D. He refused Carl Blegen permission to excavate southwestern Pylos archives in 1939'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B explains Evans scorned suggestions of Greek language inside Linear B and withheld almost all three thousand Knossos texts until 1941.'
          },
          {
            id: 'cd_reading_m20_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Why did Linear B\'s ~87-sign inventory alongside ox and jar pictures prove revealing even before decipherment in Paragraph C?',
            options: [
              'A. It showed scribes drew realistic snapshots of every single Mycenaean noun without sound cues',
              'B. Sign quantity pinpointed a vowel/consonant-vowel syllabary paired with visual commodity ideograms',
              'C. It proved mainland Greeks abandoned spoken vowels entirely inside Bronze Age tallies',
              'D. Eighty-seven characters matched classical Chinese palace seal lexicons sign-for-sign'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C notes ~87 signs plus pictured commodity ideograms (chariots, amphoras, oxen, swords) signal a syllabary paired with counting tallies.'
          },
          {
            id: 'cd_reading_m20_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What did Emmett Bennett\'s structural comparison of Linear A and Linear B in Paragraph E suggest?',
            options: [
              'A. Linear B slowly evolved natively inside isolated Cretan mountain monasteries',
              'B. Scribes at Pylos could still read Cretan Hieroglyphic seal carvings effortlessly',
              'C. Adopting streamlined base-ten weights marked a sharp administrative break despite shared visual signs',
              'D. Linear A carried eighty-seven distinct vowel letters absent from Greek alphabets'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E highlights Linear B discarding Linear A fractional ratios in favor of base-ten bookkeeping—showing an abrupt administrative discontinuity.'
          },
          {
            id: 'cd_reading_m20_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Distinctive recognizable drawings picturing oxen, chariots, and jars next to Linear B numbers serve as ______.',
            correctAnswer: 'IDEOGRAMS',
            explanation: 'Paragraph C identifies recognizable pictured symbols depicting chariots, jars, oxen, and swords as "ideograms."'
          },
          {
            id: 'cd_reading_m20_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Instead of fractional Minoan accounting, Linear B standardized administrative records upon ______ metric weights.',
            correctAnswer: 'BASE-TEN',
            explanation: 'Paragraph E notes Linear B introduced streamlined base-ten metric bookkeeping.'
          },
          {
            id: 'cd_reading_m20_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which archaeological mainland site yielded over six hundred pristine Linear B tablets to Carl Blegen in 1939?',
            correctAnswer: 'PYLOS',
            explanation: 'Paragraph D credits Carl Blegen with uncovering over 600 Linear B tablets at mainland Pylos.'
          },
          {
            id: 'cd_reading_m20_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What famous Egyptian bilingual stone highlights what Aegean Linear B scholars crucially lacked?',
            correctAnswer: 'ROSETTA STONE',
            explanation: 'Paragraph F observes Aegean researchers lacked any bilingual equivalent to Egypt\'s Rosetta Stone.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Kober\'s Triplets, Ventris\'s Syllable Grid, and the Pylos Tripod Shock',
        subtitle: 'Inside the purely structural mathematical deduction that cracked Linear B without a bilingual key',
        text: `Paragraph A: Cracking an unknown script written inside an unknown tongue without bilingual clues required turning grammatical structure itself into pure algebraic geometry. Beginning during the 1940s, Brooklyn College classicist Alice Kober performed heroic pencil-and-cardboard indexing across published Linear B inscriptions without guessing a single sound aloud. Observing recurring noun groups differing solely across trailing end-signs alongside male, female, and tally ideograms, Kober isolated grammatical "triplets"—three closely parallel words sharing identical opening roots yet altering terminal endings predictably according to gender or grammatical case!

Paragraph B: Crucially, Kober realized those changing terminal syllables exposed shared consonant-or-vowel bridges inside an open-syllable grid. Whenever two different grammatical cases swapped final syllabic signs while keeping stem consonants intact (*do-e-ro* versus *do-e-ra*, or *a-no-wo-to* shapes), the alternating root-end and suffix signs had to share identical initial consonants paired with contrasting vowels (*r-o* versus *r-a*), whereas signs swapping horizontally between stems shared identical vowels! Tragically, Kober succumbed prematurely to cancer in 1950 before assembling enough Pylos nouns to lock those abstract rows into full interlocking grids.

Paragraph C: Carrying Kober's mathematical baton forward came Michael Ventris—a young British architect rather than an academic philologist, fascinated since boyhood after hearing Arthur Evans lecture in 1936! Treating decipherment explicitly like a wartime architectural blueprint problem, Ventris assembled a two-dimensional checkerboard ("the Grid"): arranging consonants along vertical columns against vowels spanning horizontal rows, plugging Kober's inflected triplets carefully inside interlocking coordinates even while still clinging doggedly to Evans's dogma that Linear B hid non-Greek Etruscan dialects!

Paragraph D: Noticeable symmetry inside Ventris's 1952 Grid demanded testing concrete sound guesses—starting not with risky dictionary guessing, but geographic names anchored on Crete itself! Identifying three recurring place-name patterns restricted strictly to Knossos tablets (*?-?-so*, *?-no-so*, *?-li-to*), Ventris tried plugging classic Cretan cities: Amnisos (*A-mi-ni-so*), Knossos (*Ko-no-so*), and Tylissos (*Tu-ri-so*). Remarkably, those place-name syllabic coordinates locked neatly into pre-built algebraic Grid rows linking consonant *n* across *ni/no* and *s* across *sa/so* without fudging a single coordinate!

Paragraph E: Half expecting nonsense non-Greek gibberish when transferring those newly unlocked sound values straight onto everyday accounting tablets, Ventris stared astonished as unmistakable archaic Greek words tumbled off clay ledgers cleanly: *po-me* ("poimen," shepherd), *ka-ke-u* ("chalkeus," bronzesmith), *ko-wo* ("korwos," boy), *ko-wa* ("korwa," girl)! Teaming swiftly with Cambridge Greek linguist John Chadwick to explain archaic Bronze Age sound oddities—such as lost initial *w-* sounds ("digamma") and omitted final consonants (*ko-no-so* for Knossos)—Ventris announced provisional Greek decipherment via BBC radio in July 1952 amidst skeptical classical uproar.

Paragraph F: Absolute irrefutable proof silencing stubborn doubters arrived months later through pure blind archaeological chance. Cleaning newly dug Pylos tablet Ta 641—completely unseen by Ventris when publishing his Grid!—Carl Blegen ran Ventris's tentative phonetic matrix across unfamiliar word clusters printed immediately ahead of clear three-legged cauldron and four-handled goblet drawings. Straight off unseen clay emerged *ti-ri-po-de ai-ke-u ke-re-si-jo we-ke* ("two tripods of Cretan craftsmanship") followed by *di-pa me-zo-e qe-to-ro-we* ("larger cup with four handles") matching every pictured vessel count—proving mathematical probability against random coincidence exceeded trillions to one!

Paragraph G: Far from mere ancient crossword puzzle brilliance, Kober, Bennett, Ventris, and Chadwick pushed genuine documented Greek literacy backward five full centuries before Homer's epics—proving Mycenaean citadel lords ruled Crete and southern Greece speaking archaic pre-classical Greek dialects around 1400–1200 BCE.`,
        questions: [
          {
            id: 'cd_reading_m20_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph A describes Alice Kober indexing recurring inflected triplets in the 1940s purely structurally without guessing sounds.'
          },
          {
            id: 'cd_reading_m20_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph B explains Kober\'s insight that alternating suffix syllables link shared initial consonants across contrasting vowels.'
          },
          {
            id: 'cd_reading_m20_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph C profiles architect Michael Ventris assembling the two-dimensional Grid while initially still expecting non-Greek Etruscan.'
          },
          {
            id: 'cd_reading_m20_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph D shows Ventris testing Cretan cities Amnisos, Knossos, and Tylissos to anchor consonants and vowels across pre-built Grid rows.'
          },
          {
            id: 'cd_reading_m20_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph E recounts recognizable archaic Greek words (shepherd, bronzesmith, boy, girl) emerging once Ventris and Chadwick paired up.'
          },
          {
            id: 'cd_reading_m20_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph F showcases Pylos tripod tablet Ta 641 matching unseen pictured cauldrons and four-handled goblets exactly.'
          },
          {
            id: 'cd_reading_m20_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Blind unseen Pylos vessel tallies shatter remaining academic skepticism',
              'ii. Deductive place-name substitutions populate structural grid rows with sounds',
              'iii. Tracking inflected word endings without assuming phonetic sounds first',
              'iv. How decoded syllabic values unexpectedly yielded archaic Greek trades and nouns',
              'v. Extending written Greek literary timelines five centuries prior to Homer',
              'vi. Architect maps grammatical links onto a two-dimensional checkerboard despite bias',
              'vii. Explaining how ending swaps reveal invisible shared vowel-consonant bridges',
              'viii. Translating Cretan palace poems straight from painted fresco inscriptions'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph G concludes the decipherment pushed documented Greek writing backward five centuries before Homer.'
          },
          {
            id: 'cd_reading_m20_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Alice Kober detected regular ending variations by isolating three-word grammatical ______ linked to case and gender.',
            correctAnswer: 'TRIPLETS',
            explanation: 'Paragraph A states Kober isolated grammatical "triplets" sharing roots while varying terminal suffixes.'
          },
          {
            id: 'cd_reading_m20_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'While constructing his vowel-consonant checkerboard, Ventris initially expected Linear B words to represent ______.',
            correctAnswer: 'ETRUSCAN DIALECTS',
            explanation: 'Paragraph C notes Ventris clung doggedly to Evans\'s dogma that Linear B hid non-Greek Etruscan dialects.'
          },
          {
            id: 'cd_reading_m20_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Philologist John Chadwick helped account for vanished early Greek consonant features including lost initial ______.',
            correctAnswer: 'DIGAMMA',
            explanation: 'Paragraph E mentions lost initial w- sounds ("digamma") and omitted final consonants.'
          },
          {
            id: 'cd_reading_m20_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Unseen tablet Ta 641 crushed doubt when Ventris\'s values read "two tripods" matching every pictured ______.',
            correctAnswer: 'VESSEL COUNT',
            explanation: 'Paragraph F confirms Ventris\'s phonetic matrix spelled out descriptions matching every pictured vessel count.'
          },
          {
            id: 'cd_reading_m20_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why did Pylos tablet Ta 641 serve as virtually decisive scientific verification rather than circular guesswork in Paragraph F?',
            options: [
              'A. Applying Ventris\'s previously published matrix onto an unseen tablet independently spelled out the exact vessels and handle counts drawn beside them',
              'B. Ventris had altered vowel rows intentionally after inspecting Carl Blegen\'s cauldron drawings beforehand',
              'C. Tablet Ta 641 preserved an Akkadian diplomatic gloss translating bronzesmith names side by side',
              'D. Three-legged Cretan tripods were uniquely absent anywhere outside Knossos island workshops'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph F emphasizes tablet Ta 641 was unseen by Ventris when he published his Grid, yet applying his values yielded exact vessel and handle counts.'
          },
          {
            id: 'cd_reading_m20_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What made Michael Ventris\'s unexpected discovery of archaic Greek in Paragraph E especially credible to linguists?',
            options: [
              'A. He had deliberately excluded Greek vocabulary while guessing Cretan city names in 1952',
              'B. BBC radio broadcasts solicited classical linguists worldwide to vote upon Knossos word pairs',
              'C. John Chadwick altered Kober\'s triplets beforehand to conceal lost initial w- consonants',
              'D. Structural Grid placements derived without assuming Greek—while still favoring Etruscan—nonetheless produced coherent Greek words when tested'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraphs C–E underscore Ventris expected non-Greek Etruscan yet watched unmistakable Greek trade words tumble naturally out of independent Grid logic.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Ephemeral Clay Ledgers, Selective Bureaucracy, and Silences in Mycenaean Records',
        subtitle: 'Weighing why fire-baked palace tallies preserve bronze rations yet withhold Bronze Age history and poetry',
        text: `Paragraph A: Celebratory popular accounts greeting Ventris's 1952 triumph occasionally imagined archaeologists opening Homer's lost Bronze Age library—anticipating forgotten Trojan War chronicles, epic hymns, royal letters, and sacred Cretan mythologies etched neatly across Mycenaean tablets. Instead, decoding thousands of Knossos, Pylos, Mycenae, and Thebes records delivered an astonishingly prosaic archival shock: Linear B never preserved a single line of poetry, legal code, diplomatic treaty, or historical narrative! Mycenaean scribes treated wet clay strictly as disposable scratchpad spreadsheets for one single fiscal accounting year.

Paragraph B: Every surviving Linear B tablet owes its three-millennia survival paradoxically to catastrophic Bronze Age violence. Scribes never deliberately kiln-fired clay accounts for royal archives; rather, dried gray mud receipts were erased, wetted, and kneaded fresh each harvest season once central palace books closed. Only when fiery Late Bronze Age palace destructions around 1400 BCE at Knossos and 1200 BCE across Pylos baked sun-dried bureau baskets instantaneously inside roaring timber roof infernos did final momentary year-end ledgers turn accidentally into indestructible terracotta stone!

Paragraph C: Within those narrow yearly snapshots gleams astonishing microeconomic granularity illuminating redistributive Bronze Age palace estates. Scribes recorded exact numbers of flax workers rationed barley and figs monthly, quantified bronze weight requisitions stripped off temple chests ("temple bronze") to forge emergency coastal spear-tips against looming sea raiders, cataloged dismantled chariot wheels awaiting repair inside Knossos arsenals, and documented livestock offerings assigned specifically toward Zeus, Hera, and Poseidon—proving classical Olympian deities already received Aegean worship half a millennium before Homer!

Paragraph D: Yet modern Aegean historians stress equally how fiercely selective palace bookkeeping distorts broader Bronze Age society. Linear B records illuminate exclusively central citadel workshops, tributary olive-oil stores, and tax quotas extracted by wanax kings and military lawagetas elites. Vast everyday spheres—free village barter outside palace corridors, domestic pottery exchanges, oral epic ballads sung around hearth fires, or international diplomatic dispatches penned probably upon perished leather parchments or wax-coated wooden diptychs like Egypt's Amarna letters—vanish cleanly past clay spreadsheets' horizon.

Paragraph E: Parallel scholarly mysteries endure across untranslated neighbor scripts haunting the exact same Aegean islands. Unlike Greek Linear B, earlier Minoan Linear A—spread broadly across Bronze Age palaces, hilltop sanctuaries, and silver pins—resists decipherment staunchly even today: plugging proven Linear B phonetic values straight onto shared Linear A characters yields completely unintelligible non-Greek, non-Semitic administrative totals whose language family remains stubbornly orphaned!

Paragraph F: Balancing archival exhilaration against historical silence defines modern Mycenaean epigraphy. Cracked purely through structural symmetry and lucky palace conflagrations, Linear B proved beyond doubt that Mycenaean Greeks governed Bronze Age Crete and sculpted administrative taxation long before the Iron Age alphabet—while reminding prehistorians humbly how much vibrant poetry, diplomacy, and unwritten village life burnt completely away beside unbaked clay.`,
        questions: [
          {
            id: 'cd_reading_m20_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains the paradoxical role of destructive fires in accidentally preserving temporary seasonal clay records?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains dried tablets were routinely kneaded fresh yearly until violent palace fires baked the final fiscal year\'s baskets into permanent terracotta.'
          },
          {
            id: 'cd_reading_m20_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph notes that substituting Linear B sounds onto an older Aegean script still produces unreadable words?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E describes Minoan Linear A remaining undeciphered because applying Linear B values yields unintelligible non-Greek, non-Semitic words.'
          },
          {
            id: 'cd_reading_m20_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph lists detailed emergency weapon bronze tallies and religious deity offerings tracked by citadel scribes?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C cites temple bronze stripped for coastal spear-tips, chariot wheels, flax workers\' barley, and offerings to Zeus, Hera, and Poseidon.'
          },
          {
            id: 'cd_reading_m20_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph suggests international Mycenaean letters may once have existed on vanished organic materials?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D mentions diplomatic correspondence likely written upon perished leather parchments or wax-coated wooden diptychs.'
          },
          {
            id: 'cd_reading_m20_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Linear B archives uncovered at Pylos preserved multiple complete royal battle chronicles and religious poetry lines.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A stresses Linear B never preserved a single line of poetry, legal code, diplomatic treaty, or historical narrative.'
          },
          {
            id: 'cd_reading_m20_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Mycenaean clerks normally fired wet clay accounting tablets deliberately in pottery kilns for permanent storage.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B clarifies scribes never deliberately kiln-fired accounts; dried mud tablets were wiped and reused yearly unless palace fires baked them accidentally.'
          },
          {
            id: 'cd_reading_m20_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Deciphered clay records prove classical Greek gods like Poseidon and Zeus were already worshipped centuries prior to Homer.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C highlights offerings assigned specifically to Zeus, Hera, and Poseidon half a millennium before Homer.'
          },
          {
            id: 'cd_reading_m20_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Pylos military clerks officially outlawed private ceramic pottery markets outside citadel palaces in 1210 BCE.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D states rural barter and pottery trade lay outside Linear B spreadsheets\' scope, not that officials banned them.'
          },
          {
            id: 'cd_reading_m20_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Translating Linear B has nonetheless failed to unlock the underlying spoken tongue behind older Minoan Linear A.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E emphasizes Linear A remains stubbornly orphaned and undeciphered even when Linear B phonetic values are tested.'
          },
          {
            id: 'cd_reading_m20_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why must historians guard against mistaking Linear B spreadsheets for complete portraits of Mycenaean life in Paragraphs A and D?',
            options: [
              'A. Destructive palace fires completely melted away all clay tablets naming flax rations and bronze spears',
              'B. Palace scribes recorded only central royal rations, military dues, and offerings—leaving non-palatial barter and perishable leather texts invisible',
              'C. Mycenaean wanax monarchs prohibited spoken poetry anywhere across Bronze Age villages',
              'D. Scribes used unintelligible Linear A symbols whenever counting temple livestock offerings'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraphs A and D warn clay archives cover strictly central citadel taxation and rations for one year, omitting rural trade, oral epics, and perished parchment letters.'
          },
          {
            id: 'cd_reading_m20_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What chilling political urgency shows up directly inside final Pylos tablets in Paragraph C?',
            options: [
              'A. Building brand-new clay firing kilns to preserve epic poetry forever',
              'B. Translating Akkadian diplomatic treaties cleanly onto wooden diptychs',
              'C. Exporting dismantled Knossos chariot wheels northward to Egypt\'s Amarna archives',
              'D. Melting sacred temple bronze reserves down into coastal spear-tips right before destruction struck'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C notes Pylos scribes recorded stripping bronze off temple chests ("temple bronze") to forge emergency coastal spear-tips against sea raiders.'
          },
          {
            id: 'cd_reading_m20_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why does Minoan Linear A remain undeciphered despite sharing dozens of visual characters with Linear B in Paragraph E?',
            options: [
              'A. Reading shared characters with Linear B sounds produces words belonging to an unknown isolated language family',
              'B. No surviving Linear A texts appear outside carved Cretan stone rings',
              'C. Sir Arthur Evans prohibited publishing any Linear A photographs until 1952',
              'D. Linear A contains more than two thousand non-phonetic ideograms without numbers'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph E explains plugging Linear B sounds onto Linear A produces unintelligible non-Greek, non-Semitic words from an orphaned language.'
          },
          {
            id: 'cd_reading_m20_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Mycenaean clerks treated soft clay solely as disposable single-year ______ rather than lasting chronicles.',
            correctAnswer: 'SCRATCHPAD SPREADSHEETS',
            explanation: 'Paragraph A states Mycenaean scribes treated wet clay strictly as disposable scratchpad spreadsheets for one fiscal year.'
          },
          {
            id: 'cd_reading_m20_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'International Mycenaean royal dispatches probably perished quickly because scribes wrote them on leather or ______.',
            correctAnswer: 'WOODEN DIPTYCHS',
            explanation: 'Paragraph D suggests international dispatches were penned upon perished leather parchments or wax-coated wooden diptychs.'
          }
        ]
      }
    ]
  })
];
