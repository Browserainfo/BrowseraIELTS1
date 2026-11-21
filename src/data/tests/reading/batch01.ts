/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_01: TestItem[] = [
  // =========================================================================
  // TEST 1 (EASY): cd_practice_1 (Roman Engineering & Hydraulic Aqueducts)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_practice_1',
    testNumber: 1,
    testType: 'practice',
    title: 'CD-IELTS Practice 1: Roman Engineering & Hydraulic Aqueducts',
    description:
      'Beginner-friendly CD-IELTS Academic Reading test featuring 40 clear questions across Passages 1, 2, and 3 on Roman water channels, waterproof mortar, and public fountains.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Bringing Fresh Water to Ancient Rome',
        subtitle: 'How Roman builders carried spring water across hills and valleys',
        text: `Paragraph A: Between 312 BCE and the third century CE, Roman builders constructed eleven major aqueducts to supply their growing capital with fresh water. Every day, these stone channels delivered more than one million cubic meters of clean spring water to baths, homes, and street fountains. Unlike modern city water networks that use electric pumps and steel pressure pipes, Roman aqueducts worked simply by gravity. Water flowed gently downhill inside a covered stone channel lined with smooth waterproof plaster.

Paragraph B: Getting the slope right was the hardest job for Roman builders. If a water channel dropped too steeply down a hillside, fast water damaged the stone floor and wore away the inner lining. On the other hand, if the channel was too flat, mud and sand settled at the bottom and blocked the flow. To keep the water moving steadily, surveyors built channels with a gentle drop of only about fifteen centimeters for every kilometer of distance.

Paragraph C: To measure such small slopes accurately without modern laser tools or glass lenses, surveyors used a simple wooden instrument called a chorobates. This instrument looked like a long wooden bench, about six meters from end to end, standing on sturdy legs. Along the top edge was a narrow groove filled with water. When the water in the groove stayed completely level, the surveyor knew the bench was flat, even when a light breeze was blowing. Two hanging weights on strings at the ends helped check vertical lines on calm mornings.

Paragraph D: Hills and valleys created major obstacles along the route. Instead of building a long winding channel around a steep ridge, crews often dug straight tunnels through the rock. Workers sank vertical shafts every thirty meters from the surface down to the tunnel level. This allowed several teams to dig underground at the same time and lift broken rocks out in woven baskets. Once the tunnel opened, those vertical shafts brought fresh air underground and served as entry holes for cleaners.

Paragraph E: Deep river valleys required different solutions. Where a valley was moderately deep, engineers built tall stone bridges with rows of arches, like the famous Pont du Gard in southern France. When a valley dropped more than fifty meters below the water line, building a stone bridge became too expensive. Instead, builders sent the water down one valley wall and back up the other inside sealed clay or lead pipes. Water pressure pushed the liquid back up to almost its starting height.`,
        questions: [
          {
            id: 'cd_practice_1_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Roman aqueducts supplied more than one million cubic meters of water per day.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states that the eleven aqueducts delivered more than one million cubic meters of clean spring water every day.'
          },
          {
            id: 'cd_practice_1_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Most Roman aqueducts used metal pumps to push water uphill.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A explains that unlike modern pressurized networks, Roman aqueducts worked simply by gravity flowing gently downhill.'
          },
          {
            id: 'cd_practice_1_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Water flowing too slowly caused mud and sand to build up inside the channel.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B notes that if the channel was too flat, mud and sand settled at the bottom and blocked the flow.'
          },
          {
            id: 'cd_practice_1_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'The Aqua Appia was the longest of all eleven Roman aqueducts.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A mentions eleven aqueducts built from 312 BCE onward, but never names the Aqua Appia or compares lengths.'
          },
          {
            id: 'cd_practice_1_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Vertical tunnel shafts were filled with concrete as soon as digging finished.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states that after construction, the shafts brought fresh air underground and served as entry holes for cleaners.'
          },
          {
            id: 'cd_practice_1_q6',
            number: 6,
            type: 'fill_blank',
            questionText: 'The standard gentle slope of a Roman channel dropped roughly ______ centimeters per kilometer.',
            correctAnswer: 'FIFTEEN',
            explanation: 'Paragraph B states surveyors used a gentle drop of about fifteen centimeters for every kilometer.'
          },
          {
            id: 'cd_practice_1_q7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Surveyors checked horizontal level using a six-meter wooden bench known as a ______.',
            correctAnswer: 'CHOROBATES',
            explanation: 'Paragraph C identifies the six-meter wooden instrument as a chorobates.'
          },
          {
            id: 'cd_practice_1_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'A narrow ______ along the top of the measuring bench held water to test flatness.',
            correctAnswer: 'GROOVE',
            explanation: 'Paragraph C mentions a narrow groove filled with water along the top edge.'
          },
          {
            id: 'cd_practice_1_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Tunnel workers removed broken stones from vertical shafts using ______ baskets.',
            correctAnswer: 'WOVEN',
            explanation: 'Paragraph D states crews lifted broken rocks out in woven baskets.'
          },
          {
            id: 'cd_practice_1_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'When crossing valleys deeper than ______ meters, builders preferred sealed pipes over stone bridges.',
            correctAnswer: 'FIFTY',
            explanation: 'Paragraph E specifies that stone bridges became too expensive when valleys dropped more than fifty meters.'
          },
          {
            id: 'cd_practice_1_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Which modern country contains the famous Roman bridge called the Pont du Gard?',
            correctAnswer: 'FRANCE',
            explanation: 'Paragraph E locates the Pont du Gard in southern France.'
          },
          {
            id: 'cd_practice_1_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why did Roman builders dig vertical shafts every thirty meters above underground tunnels?',
            options: [
              'A. To allow several digging teams to work simultaneously and remove rock',
              'B. To collect rainwater from mountain storms',
              'C. To measure the temperature of deep spring water',
              'D. To store food supplies for traveling soldiers'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains vertical shafts allowed several teams to dig at the same time and lift broken rocks out.'
          },
          {
            id: 'cd_practice_1_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'What materials were used to make the sealed pipes that carried water across very deep valleys?',
            options: [
              'A. Iron and copper',
              'B. Oak and pine wood',
              'C. Marble and granite',
              'D. Clay or lead'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E states builders sent water across deep valleys inside sealed clay or lead pipes.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Waterproof Plaster and Long-Lasting Ancient Concrete',
        subtitle: 'Why Roman stone harbors and water channels survive for thousands of years',
        text: `Paragraph A: Any wall that touches flowing water every day slowly wears down. Normal lime plaster quickly softens, cracks, and lets water leak into the soil. To stop leaks inside aqueduct channels, Roman craftspeople developed a special pink waterproof plaster. They crushed broken red clay pots and roof tiles into coarse powder and mixed the crumbs with slaked lime and water. The baked clay reacted with the lime to create a hard, watertight surface that kept drinking water clean.

Paragraph B: When Roman engineers built stone piers and sea walls directly in ocean harbors, ordinary mortar could not dry underwater. Builders solved this problem by collecting fine gray volcanic ash from near Mount Vesuvius in southern Italy. When mixed with lime and broken rock, this volcanic powder hardened solidly even while covered by ocean waves. Modern concrete sea walls reinforced with steel bars often begin cracking after sixty years when salty water rusts the metal inside. By contrast, solid unreinforced Roman harbor blocks have stood unbroken in Italian ports for nearly two thousand years.

Paragraph C: For many decades, scientists wondered why Roman concrete rarely broke apart from small temperature cracks. In 2023, researchers examined ancient wall fragments under powerful microscopes. They noticed tiny white specks of pure lime scattered evenly through the gray mixture. Early historians had guessed these white lumps came from careless workers who forgot to stir the wet cement properly. However, chemical testing showed that Roman masons actually mixed unslaked quicklime with dry ash before adding water, generating high heat during mixing.

Paragraph D: This "hot mixing" technique left small reactive lime pockets trapped safely inside the cured concrete. Whenever rain or leaking canal water enters a tiny new crack, it dissolves the nearby white lime pocket. The calcium-rich water quickly forms fresh limestone crystals that fill and close the crack naturally within a few weeks. Because of this simple self-healing reaction, ancient water channels repaired themselves quietly long before small leaks could grow into major collapses.`,
        questions: [
          {
            id: 'cd_practice_1_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. How hot mixing trapped helpful lime pockets',
              'ii. Making waterproof lining from crushed clay tiles',
              'iii. Natural crack repair triggered by rainwater',
              'iv. Volcanic ash that lets concrete harden in the sea',
              'v. Painting red decorations onto harbor walls'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph A explains how crushed clay pots and roof tiles created a pink waterproof plaster for water channels.'
          },
          {
            id: 'cd_practice_1_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. How hot mixing trapped helpful lime pockets',
              'ii. Making waterproof lining from crushed clay tiles',
              'iii. Natural crack repair triggered by rainwater',
              'iv. Volcanic ash that lets concrete harden in the sea',
              'v. Replacing Roman bridges with modern steel bars'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B describes using Italian volcanic ash so harbor concrete could harden underwater and outlast modern steel concrete.'
          },
          {
            id: 'cd_practice_1_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. How hot mixing trapped helpful lime pockets',
              'ii. Making waterproof lining from crushed clay tiles',
              'iii. Natural crack repair triggered by rainwater',
              'iv. Volcanic ash that lets concrete harden in the sea',
              'v. Why Roman workers abandoned microscope studies'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph C shows that tiny white specks in ancient concrete resulted from deliberate hot mixing rather than sloppy stirring.'
          },
          {
            id: 'cd_practice_1_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. How hot mixing trapped helpful lime pockets',
              'ii. Making waterproof lining from crushed clay tiles',
              'iii. Natural crack repair triggered by rainwater',
              'iv. Volcanic ash that lets concrete harden in the sea',
              'v. Removing limestone dust from public fountains'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D details how water entering cracks dissolves lime pockets and forms crystals that seal the opening automatically.'
          },
          {
            id: 'cd_practice_1_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'To make waterproof plaster, Roman craftspeople mixed lime with crushed clay pots and roof ______.',
            correctAnswer: 'TILES',
            explanation: 'Paragraph A states craftspeople crushed broken clay pots and roof tiles.'
          },
          {
            id: 'cd_practice_1_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Builders gathered volcanic ______ near Mount Vesuvius so harbor walls could solidify underwater.',
            correctAnswer: 'ASH',
            explanation: 'Paragraph B states builders collected fine gray volcanic ash near Mount Vesuvius.'
          },
          {
            id: 'cd_practice_1_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Modern coastal concrete often cracks within ______ years when saltwater rusts internal steel rods.',
            correctAnswer: 'SIXTY',
            explanation: 'Paragraph B notes modern concrete sea walls often begin cracking after sixty years.'
          },
          {
            id: 'cd_practice_1_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Water entering a crack dissolves white lime specks and forms new ______ crystals that plug the gap.',
            correctAnswer: 'LIMESTONE',
            explanation: 'Paragraph D states calcium-rich water quickly forms fresh limestone crystals to seal the crack.'
          },
          {
            id: 'cd_practice_1_q22',
            number: 22,
            type: 'matching_information',
            questionText: 'Which paragraph mentions a new scientific study published in 2023?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C opens with researchers examining ancient wall fragments under microscopes in 2023.'
          },
          {
            id: 'cd_practice_1_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph explains why rust harms modern reinforced concrete in seawater?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'B',
            explanation: 'Paragraph B states salty water rusts internal steel bars in modern concrete sea walls.'
          },
          {
            id: 'cd_practice_1_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'What did early historians mistakenly think about the white lime specks in Roman concrete?',
            options: [
              'A. That workers added white shells for decoration',
              'B. That careless workers had failed to stir the cement properly',
              'C. That ocean fish left calcium marks on the walls',
              'D. That rain washed white paint into the mix'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C states early historians guessed these white lumps came from careless workers forgetting to stir properly.'
          },
          {
            id: 'cd_practice_1_q25',
            number: 25,
            type: 'short_answer',
            questionText: 'What color was the special waterproof plaster used inside Roman aqueducts?',
            correctAnswer: 'PINK',
            explanation: 'Paragraph A describes it as a special pink waterproof plaster.'
          },
          {
            id: 'cd_practice_1_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'How quickly could dissolved lime crystals seal a fresh hairline crack naturally?',
            correctAnswer: 'A FEW WEEKS',
            explanation: 'Paragraph D notes crystals fill and close the crack naturally within a few weeks.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Managing City Water and Fair Distribution',
        subtitle: 'How Rome checked water theft and kept street fountains running',
        text: `Paragraph A: Building strong aqueducts was only half the task; keeping city water flowing fairly required honest management. In 97 CE, the emperor appointed a respected official named Frontinus as Rome's chief water commissioner. When Frontinus checked the city pipes and stone tanks, he discovered widespread cheating. Some maintenance workers had secretly drilled holes into main water lines and sold the stolen water to wealthy garden owners and commercial cloth-washing shops.

Paragraph B: To stop illegal tapping, Frontinus wrote a detailed guidebook and introduced stamped bronze pipe fittings to control how much water entered private homes. Under his rules, wealthy citizens could no longer attach pipes directly to a main aqueduct. Instead, every private pipe had to connect to a local brick distribution tank supervised by inspectors. Excavations in cities like Pompeii show that whenever summer droughts lowered water levels, public street fountains stayed full while private household taps were shut off first.

Paragraph C: Modern historians generally praise Frontinus for organizing inspection crews and keeping clear public maps of underground pipes. However, some researchers point out that cheating did not vanish completely after his reforms. Diggers outside Rome still find old unstamped private pipes buried next to official stamped ones, showing that local bribes continued in outer neighborhoods. Furthermore, Frontinus measured water allowance only by pipe width without checking how fast water moved downhill. As a result, homes in low valleys received much more water per hour than hilltop houses paying the exact same tax.

Paragraph D: Even with those measurement mistakes, urban planners today still admire how Roman distribution tanks balanced safety and sanitation. Public fountains poured continuously into stone street basins, and the extra clean overflow automatically washed mud and waste out of street drains. By relying on steady gravity tanks instead of high-pressure electric stations, Roman neighborhoods avoided sudden pipe bursts and maintained reliable public water for everyday residents.`,
        questions: [
          {
            id: 'cd_practice_1_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Frontinus found that some workers were illegally selling public water to private buyers.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A reports maintenance workers drilled secret holes and sold stolen water to garden owners and cloth-washing shops.'
          },
          {
            id: 'cd_practice_1_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Private homeowners were allowed to connect pipes directly to main aqueduct channels under Frontinus.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states wealthy citizens could no longer attach pipes directly to a main aqueduct.'
          },
          {
            id: 'cd_practice_1_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'During dry summers in Pompeii, public street fountains received priority over private house taps.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B states public street fountains stayed full during summer droughts while private taps were shut off first.'
          },
          {
            id: 'cd_practice_1_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Frontinus received a gold medal from the Roman Senate after five years in office.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs A–C describe his appointment, guidebook, and maps, with no mention of a gold medal.'
          },
          {
            id: 'cd_practice_1_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Water theft disappeared completely across all Roman suburbs following Frontinus\'s reforms.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C notes unstamped pipes near stamped ones show local bribes continued in outer neighborhoods.'
          },
          {
            id: 'cd_practice_1_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Houses in lower valleys received more water than hilltop houses despite paying the same fee.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C confirms valley homes received much more water per hour while paying the exact same tax.'
          },
          {
            id: 'cd_practice_1_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What did Frontinus stamp onto bronze pipe fittings to fight illegal water use?',
            options: [
              'A. Directions showing paths to local springs',
              'B. Price lists for buying stone garden fountains',
              'C. Warnings listing the names of punished workers',
              'D. Official seals to standardize permitted flow into private homes'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B explains he introduced stamped bronze pipe fittings to control how much water entered private homes.'
          },
          {
            id: 'cd_practice_1_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why was Frontinus\'s way of calculating private water quotas unfair between hills and valleys?',
            options: [
              'A. He measured only pipe width and ignored how fast water flowed downhill',
              'B. Bronze nozzles melted faster in low-lying neighborhoods',
              'C. Hilltop houses were made from porous wooden beams',
              'D. Valley residents owned more commercial bathhouses'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C notes he measured allowance only by pipe width without checking water speed downhill.'
          },
          {
            id: 'cd_practice_1_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'How did extra water spilling from Roman street fountains help city cleanliness?',
            options: [
              'A. It cooled stone roofs during autumn droughts',
              'B. It watered wheat fields outside city gates',
              'C. It continuously washed mud and waste out of street drains',
              'D. It supplied water directly to private hilltop villas'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states continuous fountain overflow automatically washed mud and waste out of street drains.'
          },
          {
            id: 'cd_practice_1_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What is the main topic of Passage 3?',
            options: [
              'A. Why Roman emperors abandoned underground water pipes in 97 CE',
              'B. How Rome managed water rules, solved leaks, and kept public supplies fair',
              'C. How archaeologists rebuilt Pompeii\'s stone bathhouses',
              'D. Why modern electric pumps work worse than wooden buckets'
            ],
            correctAnswer: 'B',
            explanation: 'Passage 3 covers Frontinus\'s water administration, reforms, remaining flaws, and benefits of gravity distribution tanks.'
          },
          {
            id: 'cd_practice_1_q37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Frontinus became chief water commissioner of Rome in the year ______ CE.',
            correctAnswer: '97',
            explanation: 'Paragraph A states he was appointed in 97 CE.'
          },
          {
            id: 'cd_practice_1_q38',
            number: 38,
            type: 'fill_blank',
            questionText: 'All licensed private pipes had to connect to a local ______ distribution tank.',
            correctAnswer: 'BRICK',
            explanation: 'Paragraph B specifies connecting to a local brick distribution tank.'
          },
          {
            id: 'cd_practice_1_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Historians praise Frontinus for keeping clear public ______ of Rome\'s underground pipes.',
            correctAnswer: 'MAPS',
            explanation: 'Paragraph C notes he kept clear public maps of underground pipes.'
          },
          {
            id: 'cd_practice_1_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'Besides wealthy garden owners, which businesses bought stolen water from dishonest workers?',
            correctAnswer: 'CLOTH-WASHING SHOPS',
            explanation: 'Paragraph A states workers sold stolen water to garden owners and commercial cloth-washing shops.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 2 (EASY): cd_reading_p2 (Urban Vertical Farming Innovations)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p2',
    testNumber: 2,
    testType: 'practice',
    title: 'CD-IELTS Practice 2: Urban Vertical Farming Innovations',
    description:
      'Beginner-friendly CD-IELTS Academic Reading test featuring 40 clear questions on indoor city farms, LED plant lights, and food transport savings.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Growing Food Inside City Buildings',
        subtitle: 'How empty warehouses are becoming year-round indoor farms',
        text: `Paragraph A: In major cities such as London, Tokyo, and New York, old brick warehouses and unused factory halls are finding a surprising new purpose. Companies are turning these buildings into indoor vertical farms. Instead of planting rows of vegetables across wide open fields, indoor farmers grow salad greens, basil, and strawberries on tall metal shelves stacked twelve meters toward the ceiling. Because crops grow inside clean closed rooms, snowstorms, summer droughts, and garden pests cannot harm the harvest.

Paragraph B: Soil is heavy and messy inside multi-story buildings, so vertical farms usually grow plants without dirt. The most common method is called hydroponics. In a hydroponic system, plant roots sit in shallow plastic trays filled with flowing water and liquid plant food. Pumps gently move the water past the roots every hour so plants get exact amounts of minerals without wasting water into dry ground.

Paragraph C: A newer technique called aeroponics uses even less water than hydroponics. Instead of sitting in pools of water, plants hang inside dark plastic frames with bare roots dangling in open air. Fine spray nozzles mist the hanging roots with vitamin-rich water droplets every few minutes. Because open air surrounds the roots, plants absorb oxygen easily and grow up to thirty percent faster than crops grown in regular outdoor soil.

Paragraph D: Vertical farms also protect local rivers and lakes. On traditional outdoor farms, heavy rain often washes chemical fertilizers and soil off fields into nearby streams. Indoor systems catch and reuse almost ninety-five percent of their water. Any leftover mist drains back into a holding tank, gets filtered cleanly, and sprays the roots again the next day. For dry regions short on fresh river water, recycling water inside buildings offers clear environmental benefits.`,
        questions: [
          {
            id: 'cd_reading_p2_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Indoor farmers grow crops on tall metal ______ up to twelve meters high.',
            correctAnswer: 'SHELVES',
            explanation: 'Paragraph A states farmers grow vegetables on tall metal shelves stacked twelve meters high.'
          },
          {
            id: 'cd_reading_p2_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Closed growing rooms protect indoor crops from droughts, snowstorms, and garden ______.',
            correctAnswer: 'PESTS',
            explanation: 'Paragraph A lists snowstorms, summer droughts, and garden pests.'
          },
          {
            id: 'cd_reading_p2_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'In hydroponic systems, plant roots sit inside shallow plastic ______ of nutrient water.',
            correctAnswer: 'TRAYS',
            explanation: 'Paragraph B states plant roots sit in shallow plastic trays.'
          },
          {
            id: 'cd_reading_p2_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Aeroponic systems use fine ______ nozzles to feed bare hanging roots.',
            correctAnswer: 'SPRAY',
            explanation: 'Paragraph C states fine spray nozzles mist the hanging roots.'
          },
          {
            id: 'cd_reading_p2_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Extra indoor water collects in a holding tank and is ______ before being reused.',
            correctAnswer: 'FILTERED',
            explanation: 'Paragraph D states leftover mist drains into a holding tank and gets filtered cleanly.'
          },
          {
            id: 'cd_reading_p2_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Vertical farms can only produce vegetables during warm summer months.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A notes indoor farms operate inside closed rooms protected from snowstorms and seasonal weather.'
          },
          {
            id: 'cd_reading_p2_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Hydroponics avoids using heavy outdoor soil inside city buildings.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states vertical farms usually grow plants without dirt using flowing water.'
          },
          {
            id: 'cd_reading_p2_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Aeroponic plants grow slower than outdoor plants because they receive less oxygen.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C says aeroponic roots absorb oxygen easily and grow up to thirty percent faster.'
          },
          {
            id: 'cd_reading_p2_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Tokyo now has more vertical farms than London and New York combined.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A mentions London, Tokyo, and New York as examples, without comparing how many farms each city has.'
          },
          {
            id: 'cd_reading_p2_q10',
            number: 10,
            type: 'true_false_not_given',
            questionText: 'Indoor vertical farms reuse roughly ninety-five percent of their water supply.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D confirms indoor systems catch and reuse almost ninety-five percent of their water.'
          },
          {
            id: 'cd_reading_p2_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Besides salad greens and basil, what fruit is mentioned as growing in indoor vertical farms?',
            correctAnswer: 'STRAWBERRIES',
            explanation: 'Paragraph A lists salad greens, basil, and strawberries.'
          },
          {
            id: 'cd_reading_p2_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'How much faster can aeroponic plants grow compared with plants in regular soil?',
            correctAnswer: 'THIRTY PERCENT',
            explanation: 'Paragraph C states aeroponic plants grow up to thirty percent faster.'
          },
          {
            id: 'cd_reading_p2_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why do indoor vertical farms cause less river pollution than traditional farms?',
            options: [
              'A. Rain does not wash fertilizers off indoor trays into streams',
              'B. Indoor lettuce produces oxygen that cleans nearby fish ponds',
              'C. City buildings filter rainwater through metal shelves',
              'D. Aeroponic plants do not need any liquid minerals'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains that outdoor rain washes fertilizers into streams, whereas indoor farms reuse water inside closed tanks.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Replacing Sunlight With Smart LED Lamps',
        subtitle: 'How purple indoor lighting helps plants taste better and save energy',
        text: `Paragraph A: Plants growing inside windowless warehouses never feel real sunshine, so farmers must provide artificial light. Early indoor growers used hot glass bulbs similar to streetlights. Those old lamps wasted large amounts of electricity and burned delicate lettuce leaves if hung too close. Modern vertical farms use cool-running Light Emitting Diodes (LEDs) instead. Because LEDs stay cool to the touch, farmers can place lamps just centimeters above leaves, fitting many more plant shelves into one room.

Paragraph B: Not all colors of light help plants equally. Sunlight looks white, yet it contains every color of the rainbow. Green leaves reflect green light away—which is why plants look green to human eyes—while soaking up blue and red rays to make plant food. Rather than burning electricity on useless green light, smart farm fixtures shine mostly deep blue and bright red LEDs, giving closed rooms a glowing pink-purple appearance.

Paragraph C: Farmers can also tune light colors like dials on a radio to change how food tastes. Blue light keeps basil leaves thick, dark, and crisp, while extra red light encourages long stems and wide leafy growth. Some growers shine gentle ultraviolet rays for two days right before harvest. In response to the mild light stress, red oak-leaf lettuce makes extra natural plant pigments that boost both deep color and peppery flavor.

Paragraph D: Computer sensors control the indoor climate throughout the day and night. Tiny wall meters monitor temperature, room humidity, and carbon dioxide gas every second. When leaves grow quickly, the computer gently blows extra carbon dioxide across the shelves so photosynthesis stays fast. Still, lighting remains expensive, so most profitable vertical farms link their lamps to cheap off-peak night electricity rates whenever possible.`,
        questions: [
          {
            id: 'cd_reading_p2_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph explains why indoor growing rooms often look pink-purple?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains that LEDs shine mostly blue and red light instead of green, giving rooms a pink-purple glow.'
          },
          {
            id: 'cd_reading_p2_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph describes why old streetlight-style bulbs damaged tender leaves?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A states old hot glass bulbs burned delicate lettuce leaves if hung too close.'
          },
          {
            id: 'cd_reading_p2_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph mentions using cheap nighttime power to cut farm electricity costs?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'D',
            explanation: 'Paragraph D states profitable vertical farms link their lamps to cheap off-peak night electricity rates.'
          },
          {
            id: 'cd_reading_p2_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph explains how light recipes improve leaf taste right before picking?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C describes shining ultraviolet rays for two days before harvest to boost color and peppery flavor.'
          },
          {
            id: 'cd_reading_p2_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Because modern ______ lamps stay cool, growers can mount them very close to plant leaves.',
            correctAnswer: 'LED',
            explanation: 'Paragraph A explains LEDs stay cool to the touch, allowing close shelf spacing.'
          },
          {
            id: 'cd_reading_p2_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Green leaves absorb blue and ______ light strongly while reflecting green wavelengths away.',
            correctAnswer: 'RED',
            explanation: 'Paragraph B states leaves reflect green light while soaking up blue and red rays.'
          },
          {
            id: 'cd_reading_p2_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Extra blue light helps ______ plants develop thick, crisp dark leaves.',
            correctAnswer: 'BASIL',
            explanation: 'Paragraph C notes blue light keeps basil leaves thick, dark, and crisp.'
          },
          {
            id: 'cd_reading_p2_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Wall sensors track temperature, room ______, and carbon dioxide levels continuously.',
            correctAnswer: 'HUMIDITY',
            explanation: 'Paragraph D mentions monitoring temperature, room humidity, and carbon dioxide gas.'
          },
          {
            id: 'cd_reading_p2_q22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'Why do vertical farm lamps usually skip producing bright green light?',
            options: [
              'A. Green LEDs break quickly in damp rooms',
              'B. Green light makes plant stems bend sideways',
              'C. City laws ban green lighting inside warehouses',
              'D. Plant leaves mostly bounce green light away instead of using it'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B explains green leaves reflect green light away, so spending electricity on green light is wasteful.'
          },
          {
            id: 'cd_reading_p2_q23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How does shining brief ultraviolet light before harvest help red oak-leaf lettuce?',
            options: [
              'A. It dries out soil inside heavy wooden pots',
              'B. It encourages extra pigments that enrich color and peppery taste',
              'C. It prevents wall sensors from cooling down too fast',
              'D. It doubles the height of strawberry stems'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C states mild ultraviolet stress causes lettuce to make pigments boosting color and peppery flavor.'
          },
          {
            id: 'cd_reading_p2_q24',
            number: 24,
            type: 'true_false_not_given',
            questionText: 'Computer sensors adjust indoor carbon dioxide levels to match faster plant growth.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states when leaves grow quickly, the computer blows extra carbon dioxide across the shelves.'
          },
          {
            id: 'cd_reading_p2_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Glass greenhouse bulbs stayed cool enough to touch without gloves.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A describes old glass bulbs as hot and able to burn leaves, contrasting them with cool-running LEDs.'
          },
          {
            id: 'cd_reading_p2_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'For how many days before harvest do some growers apply gentle ultraviolet rays?',
            correctAnswer: 'TWO DAYS',
            explanation: 'Paragraph C specifies shining ultraviolet rays for two days right before harvest.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Food Miles, Costs, and What Indoor Farms Cannot Replace',
        subtitle: 'Why warehouse vegetables work best alongside outdoor wheat and corn fields',
        text: `Paragraph A: Supporters of vertical farming often point to the long journey made by ordinary supermarket salad. In northern Europe and Canada, winter lettuce frequently rides inside chilled diesel trucks or cargo airplanes for three thousand kilometers before reaching kitchen tables. Along that slow journey, delicate leaves lose vitamins, wilt in plastic bags, and go to waste. By harvesting greens just blocks away from city supermarkets, indoor growers cut delivery trucks to tiny local trips and put fresher food on store shelves within hours of picking.

Paragraph B: Despite these freshness gains, vertical farming faces serious financial limits. Renting heated city buildings, buying metal racking, and paying monthly electric bills for thousands of LED bulbs cost far more than renting sunny farmland in the countryside. Several high-profile indoor farming companies lost money and closed factories between 2022 and 2024 because their electricity expenses remained too high to match cheap outdoor lettuce prices.

Paragraph C: Another clear limit involves what kinds of crops make economic sense indoors. Fast-growing, high-price foods such as salad leaves, cooking herbs, and microgreens grow well on vertical shelves because almost the entire plant can be sold and eaten. By contrast, staple calorie foods such as wheat, rice, corn, and potatoes need huge amounts of light energy to produce small edible grains. Supplying enough artificial light to feed a whole city with indoor bread wheat would demand as much electricity as running an extra power station.

Paragraph D: Because of these practical facts, agricultural experts generally agree that indoor vertical farms will never replace outdoor farmland. Instead, the smartest future food system combines both approaches cleanly. Sunny open fields will continue growing grains, beans, and root crops cheaply under free daylight, while compact city farms quietly supply nearby neighborhoods with fresh, pesticide-free salad greens all winter long.`,
        questions: [
          {
            id: 'cd_reading_p2_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Fresh greens harvested inside cities reach stores much sooner than imported winter lettuce.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states city growers put fresher food on store shelves within hours of picking instead of traveling 3,000 kilometers.'
          },
          {
            id: 'cd_reading_p2_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Renting urban warehouse space is usually cheaper than farming sunny countryside land.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states renting city buildings and paying LED electric bills cost far more than renting countryside farmland.'
          },
          {
            id: 'cd_reading_p2_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Some vertical farming companies shut down between 2022 and 2024 due to high energy costs.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B reports several indoor farming companies closed factories between 2022 and 2024 because electricity expenses stayed too high.'
          },
          {
            id: 'cd_reading_p2_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Canadian supermarkets banned winter lettuce imports from warmer southern countries in 2023.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A mentions winter lettuce traveling 3,000 kilometers to Canada and Europe, with no mention of an import ban.'
          },
          {
            id: 'cd_reading_p2_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Growing wheat and rice under artificial LED lamps is a cheap way to feed large cities.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C states wheat and rice need huge light energy and would demand as much electricity as an extra power station.'
          },
          {
            id: 'cd_reading_p2_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Agricultural experts expect outdoor fields and indoor farms to work together rather than one replacing the other.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D explains vertical farms will never replace farmland, and the smartest food system combines both approaches.'
          },
          {
            id: 'cd_reading_p2_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why are salad herbs and microgreens better suited to indoor shelves than corn or potatoes?',
            options: [
              'A. Corn roots break plastic hydroponic trays',
              'B. Potatoes need winter frost to form thick skins',
              'C. Salad herbs do not need water or mineral food',
              'D. Herbs grow fast and almost every part of the plant can be sold'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C explains fast-growing herbs and microgreens succeed because almost the entire plant can be sold and eaten.'
          },
          {
            id: 'cd_reading_p2_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What happens to winter salad greens during long 3,000-kilometer truck journeys?',
            options: [
              'A. They lose vitamins, droop, and create food waste',
              'B. They grow sweeter inside cooled diesel trucks',
              'C. They gain extra green pigments from air vents',
              'D. They double in shelf weight before arrival'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A states delicate leaves lose vitamins, wilt in plastic bags, and go to waste.'
          },
          {
            id: 'cd_reading_p2_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'According to Paragraph D, what role will traditional outdoor farms keep playing in the future?',
            options: [
              'A. Growing expensive microgreens inside plastic tunnels',
              'B. Providing warehouse space for winter strawberry racks',
              'C. Producing affordable grains, beans, and root crops using free sun',
              'D. Supplying power stations with leftover lettuce stems'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states sunny open fields will keep growing grains, beans, and root crops cheaply under free daylight.'
          },
          {
            id: 'cd_reading_p2_q36',
            number: 36,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why outdoor fields and city buildings complement each other',
              'ii. High rents and utility bills forcing factory closures',
              'iii. Shorter delivery routes keeping city greens fresher',
              'iv. Why heavy grain crops fail under artificial lights',
              'v. Shipping winter tomatoes from Tokyo to London'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph A highlights cutting 3,000-km food trips to put fresher food on local store shelves.'
          },
          {
            id: 'cd_reading_p2_q37',
            number: 37,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why outdoor fields and city buildings complement each other',
              'ii. High rents and utility bills forcing factory closures',
              'iii. Shorter delivery routes keeping city greens fresher',
              'iv. Why heavy grain crops fail under artificial lights',
              'v. Paying store workers higher wages in 2024'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B focuses on high building rents, racking costs, and electricity expenses causing company closures.'
          },
          {
            id: 'cd_reading_p2_q38',
            number: 38,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why outdoor fields and city buildings complement each other',
              'ii. High rents and utility bills forcing factory closures',
              'iii. Shorter delivery routes keeping city greens fresher',
              'iv. Why heavy grain crops fail under artificial lights',
              'v. Building extra city power plants for corn fields'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C contrasts profitable leafy crops against calorie crops like wheat and rice that need excessive artificial light.'
          },
          {
            id: 'cd_reading_p2_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Imported winter lettuce often travels inside cooled diesel trucks or cargo ______.',
            correctAnswer: 'AIRPLANES',
            explanation: 'Paragraph A mentions chilled diesel trucks or cargo airplanes.'
          },
          {
            id: 'cd_reading_p2_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'How far can imported winter salad travel to northern Europe and Canada?',
            correctAnswer: 'THREE THOUSAND KILOMETERS',
            explanation: 'Paragraph A states winter lettuce travels for three thousand kilometers.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 3 (EASY): cd_reading_p3 (Cetacean Navigation & Marine Bioacoustics)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p3',
    testNumber: 3,
    testType: 'practice',
    title: 'CD-IELTS Practice 3: Cetacean Navigation & Marine Bioacoustics',
    description:
      'Beginner-friendly CD-IELTS Academic Reading test featuring 40 clear questions on whale songs, dolphin echolocation, and quieter ocean shipping.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Why Sound Rules the Underwater World',
        subtitle: 'How whales and dolphins use sound to travel, hunt, and stay together',
        text: `Paragraph A: Deep ocean water is a dark, murky place where eyesight helps very little. Bright midday sunshine disappears almost completely less than two hundred meters below the ocean surface. Even in clear tropical seas, a swimmer can rarely see more than thirty meters ahead. Because eyes are nearly useless in deep water, whales and dolphins rely on hearing as their primary sense for finding food, staying with family groups, and crossing wide ocean basins.

Paragraph B: Sound behaves differently underwater than it does in open air. Because seawater is much denser than air, sound waves travel more than four times faster beneath the waves—moving roughly 1,500 meters every second. Low, booming calls made by blue whales and fin whales fade slowly over distance, letting family members hear each other across hundreds of kilometers of open ocean.

Paragraph C: Different whale species produce completely different types of sounds. Male humpback whales sing long, complex songs during winter breeding months off Hawaii and Tonga. Each song lasts up to twenty minutes and repeats set musical themes, which neighboring males copy and gently update from one winter to the next. Female humpbacks do not join the long winter concerts; instead, mothers use soft low grunts to keep newborn calves close beside them in rough waves.

Paragraph D: Toothed whales such as sperm whales and bottlenose dolphins use sharp, rapid clicking noises instead of musical songs. Their clicks last only a fraction of a millisecond and travel forward through a fatty organ in the forehead called the melon. Like a built-in flashlight made of sound, this beam helps dolphins scan dark seafloors accurately and communicate during fast group hunts.`,
        questions: [
          {
            id: 'cd_reading_p3_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Sunlight reaches more than five hundred meters down into clear ocean water.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states bright sunshine disappears almost completely less than two hundred meters below the surface.'
          },
          {
            id: 'cd_reading_p3_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Sound moves over four times faster in seawater than in open air.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states sound waves travel more than four times faster beneath the waves.'
          },
          {
            id: 'cd_reading_p3_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Blue whales have bigger brains than any other marine animal.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B describes blue whale calls traveling long distances, with no mention of brain size.'
          },
          {
            id: 'cd_reading_p3_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Both male and female humpback whales sing twenty-minute winter songs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C notes male humpbacks sing the twenty-minute songs, while mothers use soft low grunts for calves.'
          },
          {
            id: 'cd_reading_p3_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Bottlenose dolphins send sharp clicks through a fatty organ located in their forehead.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D explains clicks travel forward through a fatty organ in the forehead called the melon.'
          },
          {
            id: 'cd_reading_p3_q6',
            number: 6,
            type: 'short_answer',
            questionText: 'Roughly how far do sound waves move every second through seawater?',
            correctAnswer: '1,500 METERS',
            explanation: 'Paragraph B specifies sound moves roughly 1,500 meters every second.'
          },
          {
            id: 'cd_reading_p3_q7',
            number: 7,
            type: 'short_answer',
            questionText: 'What is the name of the fatty organ in a dolphin\'s forehead?',
            correctAnswer: 'MELON',
            explanation: 'Paragraph D calls this fatty organ the melon.'
          },
          {
            id: 'cd_reading_p3_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Even in clear ocean water, a swimmer can seldom see further than ______ meters.',
            correctAnswer: 'THIRTY',
            explanation: 'Paragraph A notes a swimmer can rarely see more than thirty meters ahead.'
          },
          {
            id: 'cd_reading_p3_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Male humpback whales perform winter breeding songs lasting up to ______ minutes.',
            correctAnswer: 'TWENTY',
            explanation: 'Paragraph C states each humpback song lasts up to twenty minutes.'
          },
          {
            id: 'cd_reading_p3_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Humpback mothers keep track of young calves in waves using gentle low ______.',
            correctAnswer: 'GRUNTS',
            explanation: 'Paragraph C says mothers use soft low grunts to keep newborn calves close.'
          },
          {
            id: 'cd_reading_p3_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Unlike humpback whales, sperm whales hunt using sharp rapid ______.',
            correctAnswer: 'CLICKS',
            explanation: 'Paragraph D explains toothed whales such as sperm whales use sharp, rapid clicking noises (clicks).'
          },
          {
            id: 'cd_reading_p3_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why do humpback whale songs change slightly from one winter to the next?',
            options: [
              'A. Newborn calves invent new sounds for mothers',
              'B. Female humpbacks choose higher notes every summer',
              'C. Cold ocean currents bend low sound waves',
              'D. Neighboring males copy and gradually update shared musical themes'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C notes neighboring males copy the themes and gently update them from one winter to the next.'
          },
          {
            id: 'cd_reading_p3_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'How does Paragraph D compare a dolphin\'s clicking sound beam to a human tool?',
            options: [
              'A. Like an underwater radio dish',
              'B. Like a flashlight made of sound',
              'C. Like a deep sea anchor',
              'D. Like a pair of dark sunglasses'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D compares the directional beam to a built-in flashlight made of sound.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: How Dolphins "See" With Sound',
        subtitle: 'Testing echolocation abilities inside research tanks and wild seas',
        text: `Paragraph A: When a dolphin sends out a click, the sound wave bounces off nearby rocks, boats, or fish and returns as a faint echo. This natural biological sonar is called echolocation. Scientists first confirmed how accurate dolphin echolocation is during blindfold tests in coastal pools. Researchers placed soft rubber suction cups gently over a dolphin's eyes so it could not see anything at all. Even completely blindfolded, the dolphin swam straight across the pool, dodged thin plastic poles, and picked out a tiny fish from three empty targets.

Paragraph B: Inside the dolphin's head, incoming echoes do not enter the tiny ear holes on the sides of its face. Instead, returning vibrations travel through thin fat-filled channels inside the lower jawbone directly up to the inner ear. By measuring the tiny split-second gap between sending a click and receiving its echo, the dolphin's brain calculates exactly how far away a fish is swimming.

Paragraph C: Even more remarkably, echolocation reveals what an object is made of inside. Soft rubber cups, hollow aluminum cans, and solid lead weights look similar on the outside, yet they bounce sound back differently. In laboratory trials, blindfolded dolphins easily learned to spot the difference between a metal cylinder filled with air and an identical cylinder filled with water, even from twenty meters away. Because fish have air-filled swim bladders inside their bodies, sound waves reveal hidden prey buried safely under loose seabed sand.

Paragraph D: As a dolphin swims closer to catch a fast fish, it speeds up its clicking rate dramatically. Far away, a dolphin sends only five or ten clicks per second while scanning open water. Once it closes in within the final two meters, the clicks speed up into a rapid continuous buzz—more than two hundred clicks every second—giving the hunter a crystal-clear moving picture of its meal's final turn.`,
        questions: [
          {
            id: 'cd_reading_p3_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Proving sonar accuracy using blindfolded pool experiments',
              'ii. How echoes enter through the lower jawbone',
              'iii. Increasing click speed just before catching prey',
              'iv. Telling hollow targets apart from solid objects',
              'v. Teaching dolphins to jump through metal hoops'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A describes blindfolded dolphin experiments dodging poles and locating a fish.'
          },
          {
            id: 'cd_reading_p3_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Proving sonar accuracy using blindfolded pool experiments',
              'ii. How echoes enter through the lower jawbone',
              'iii. Increasing click speed just before catching prey',
              'iv. Telling hollow targets apart from solid objects',
              'v. Why dolphin side ears work best in deep mud'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B explains that echoes travel along fat channels in the lower jawbone to the inner ear.'
          },
          {
            id: 'cd_reading_p3_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Proving sonar accuracy using blindfolded pool experiments',
              'ii. How echoes enter through the lower jawbone',
              'iii. Increasing click speed just before catching prey',
              'iv. Telling hollow targets apart from solid objects',
              'v. Building plastic tanks for Atlantic whales'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C shows echolocation identifies internal materials, distinguishing water-filled vs. air-filled cylinders.'
          },
          {
            id: 'cd_reading_p3_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Proving sonar accuracy using blindfolded pool experiments',
              'ii. How echoes enter through the lower jawbone',
              'iii. Increasing click speed just before catching prey',
              'iv. Telling hollow targets apart from solid objects',
              'v. Why dolphins stop clicking in shallow water'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains how click rates jump from 5–10 per second to over 200 per second during final pursuit.'
          },
          {
            id: 'cd_reading_p3_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Scientists covered dolphins\' eyes with soft ______ suction cups to test navigation without sight.',
            correctAnswer: 'RUBBER',
            explanation: 'Paragraph A states researchers placed soft rubber suction cups over the dolphin\'s eyes.'
          },
          {
            id: 'cd_reading_p3_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Returning sound vibrations travel through fat-filled channels inside the lower ______.',
            correctAnswer: 'JAWBONE',
            explanation: 'Paragraph B specifies returning vibrations travel through channels inside the lower jawbone.'
          },
          {
            id: 'cd_reading_p3_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Dolphins can detect hidden fish buried under loose sand because of their air-filled swim ______.',
            correctAnswer: 'BLADDERS',
            explanation: 'Paragraph C explains fish have air-filled swim bladders inside their bodies.'
          },
          {
            id: 'cd_reading_p3_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Within two meters of prey, dolphin clicks merge into a rapid continuous ______.',
            correctAnswer: 'BUZZ',
            explanation: 'Paragraph D says clicks speed up into a rapid continuous buzz.'
          },
          {
            id: 'cd_reading_p3_q22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'How does a dolphin know the exact distance to a swimming fish?',
            options: [
              'A. By measuring water pressure against its back fin',
              'B. By smelling fish scales in nearby currents',
              'C. By watching shadows move across the seabed',
              'D. By timing the brief delay between sending a click and receiving its echo'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B states the dolphin\'s brain measures the split-second gap between sending a click and receiving its echo.'
          },
          {
            id: 'cd_reading_p3_q23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What surprised scientists during the metal cylinder experiment in Paragraph C?',
            options: [
              'A. Dolphins distinguished air-filled and water-filled cylinders from twenty meters off',
              'B. Blindfolded dolphins swam away from hollow cans',
              'C. Dolphins broke open lead weights using their jaws',
              'D. Sound waves disappeared inside metal tanks'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C notes dolphins easily spotted the difference between air-filled and water-filled cylinders at twenty meters.'
          },
          {
            id: 'cd_reading_p3_q24',
            number: 24,
            type: 'short_answer',
            questionText: 'More than how many clicks per second does a dolphin make during the final two meters of a hunt?',
            correctAnswer: 'TWO HUNDRED',
            explanation: 'Paragraph D states clicks accelerate to more than two hundred clicks every second.'
          },
          {
            id: 'cd_reading_p3_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Dolphins hear returning sonar echoes mainly through the small holes on the sides of their heads.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B clearly states incoming echoes do not enter the tiny ear holes on the sides of its face.'
          },
          {
            id: 'cd_reading_p3_q26',
            number: 26,
            type: 'true_false_not_given',
            questionText: 'While searching open water from far away, dolphins usually produce fewer than fifteen clicks per second.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states a dolphin sends only five or ten clicks per second while scanning open water from far away.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Noise Pollution and Simple Solutions for Quieter Seas',
        subtitle: 'Helping marine wildlife hear again along busy shipping lanes',
        text: `Paragraph A: For millions of years, the deep ocean echoed mainly with breaking waves, cracking polar ice, and animal calls. Over the past seventy years, however, global sea trade has filled busy coastal lanes with thousands of huge cargo vessels. Spinning ship propellers and roaring diesel engines create continuous low-frequency background noise. In crowded waters like the North Atlantic, underwater noise levels have roughly doubled every ten years since 1960.

Paragraph B: This constant mechanical roar shrinks the world of whales that depend on sound. Before noisy motor ships arrived, a fin whale's low song could reach companions five hundred kilometers away. Today, passing container ships mask those soft frequencies like loud traffic drowning out a quiet conversation across a street. Biologists call this communication loss "acoustic masking," which makes it harder for mothers to stay in touch with calves and forces whales to call louder just to be heard.

Paragraph C: Sharp underwater blasts cause even more immediate trouble. Energy companies tow loud air guns behind survey boats to bounce sound bursts into rocky seafloors while searching for hidden oil fields. Military submarines also switch on powerful sonar pings to scan ocean depths. When startled by sudden intense sonar pulses, shy deep-diving beaked whales sometimes swim upward far too fast, suffering fatal internal gas-bubble injuries similar to a human diver getting "the bends."

Paragraph D: Fortunately, ocean noise differs from spilled oil or plastic trash: the moment noise stops, the water clears instantly. Simple design updates help dramatically. Slowing cargo vessels down by just ten percent cuts propeller noise sharply while also saving expensive fuel. Better-shaped quiet propellers and cushioned engine mounts further hush large ships. Because quieter ports save shipping companies money on fuel bills, protecting marine ears turns out to be practical for commerce as well as wildlife.`,
        questions: [
          {
            id: 'cd_reading_p3_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Busy shipping lanes have become noticeably noisier since the 1960s.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states underwater noise in crowded North Atlantic waters has roughly doubled every ten years since 1960.'
          },
          {
            id: 'cd_reading_p3_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Fin whale calls can travel farther through noisy shipping routes today than in the past.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B explains ship roar shrinks their communication range and masks low frequencies.'
          },
          {
            id: 'cd_reading_p3_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Seabed oil surveys use loud air guns that send sound bursts toward ocean rocks.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states energy companies tow loud air guns to bounce sound bursts into rocky seafloors.'
          },
          {
            id: 'cd_reading_p3_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'All international cargo companies replaced noisy propellers before 2020.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D mentions quiet propellers as helpful updates, without saying every company installed them before 2020.'
          },
          {
            id: 'cd_reading_p3_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Beaked whales can suffer fatal injuries if sudden loud sonar forces them to surface rapidly.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C explains startled beaked whales swim upward too fast and suffer fatal internal gas-bubble injuries.'
          },
          {
            id: 'cd_reading_p3_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Ocean noise remains trapped in seawater for decades after ships leave an area.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D stresses that unlike oil or plastic, the moment noise stops, the water clears instantly.'
          },
          {
            id: 'cd_reading_p3_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What does "acoustic masking" mean in Paragraph B?',
            options: [
              'A. Covering whale ears with marine seaweed',
              'B. Echoes bouncing off rocky coral tunnels',
              'C. Loud ship noise drowning out natural whale calls',
              'D. Placing quiet rubber mounts around boat engines'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B compares ships drowning out whale frequencies to traffic masking a quiet street conversation.'
          },
          {
            id: 'cd_reading_p3_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why do shipping companies also gain a direct financial benefit from slowing cargo ships down by 10%?',
            options: [
              'A. Slower boats carry extra fishing nets',
              'B. Driving slightly slower cuts expensive ship fuel consumption',
              'C. Ports charge zero harbor fees to small boats',
              'D. Slower propellers last twice as long without paint'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D states slowing ships by ten percent cuts propeller noise while saving expensive fuel.'
          },
          {
            id: 'cd_reading_p3_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Spinning propellers and diesel engines produce steady low-______ ship noise.',
            correctAnswer: 'FREQUENCY',
            explanation: 'Paragraph A describes continuous low-frequency background noise.'
          },
          {
            id: 'cd_reading_p3_q36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Before busy shipping, fin whales could hear companions up to ______ hundred kilometers away.',
            correctAnswer: 'FIVE',
            explanation: 'Paragraph B notes a fin whale\'s low song could reach five hundred kilometers.'
          },
          {
            id: 'cd_reading_p3_q37',
            number: 37,
            type: 'summary_completion',
            questionText: 'Loud underwater pulses can frighten deep-diving ______ whales into surfacing too quickly.',
            correctAnswer: 'BEAKED',
            explanation: 'Paragraph C identifies deep-diving beaked whales.'
          },
          {
            id: 'cd_reading_p3_q38',
            number: 38,
            type: 'summary_completion',
            questionText: 'Quiet boat upgrades include redesigned propellers and ______ engine mounts.',
            correctAnswer: 'CUSHIONED',
            explanation: 'Paragraph D mentions quiet propellers and cushioned engine mounts.'
          },
          {
            id: 'cd_reading_p3_q39',
            number: 39,
            type: 'matching_information',
            questionText: 'Which paragraph mentions natural ocean sounds such as cracking ice before modern trade?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A opens by noting breaking waves, cracking polar ice, and animal calls.'
          },
          {
            id: 'cd_reading_p3_q40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What is the overall tone of Passage 3 toward fixing ocean noise?',
            options: [
              'A. Angry, demanding all cargo trade stop forever',
              'B. Hopeless, because ships can never travel quietly across seas',
              'C. Hopeful, because simple speed and engine fixes cut noise immediately while saving fuel',
              'D. Unconcerned, because whales ignore passing vessels completely'
            ],
            correctAnswer: 'C',
            explanation: 'Passage 3 highlights that ocean noise clears instantly when stopped and simple speed/propeller changes benefit both wildlife and commerce.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 4 (EASY): cd_reading_p4 (Early Antarctic Exploration & Glaciology)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p4',
    testNumber: 4,
    testType: 'practice',
    title: 'CD-IELTS Practice 4: Early Antarctic Exploration & Glaciology',
    description:
      'Beginner-friendly CD-IELTS Academic Reading test featuring 40 clear questions on the 1911 South Pole race, ancient trapped air in ice cores, and subglacial lakes.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: The Race to the Geographic South Pole',
        subtitle: 'Why Amundsen\'s planning beat Scott\'s expedition across frozen Antarctica',
        text: `Paragraph A: Antarctica is the coldest, driest, and windiest continent on Earth. Covered by an ice sheet up to four kilometers thick, the interior plateau stayed largely unknown to mapmakers until the start of the twentieth century. Between 1900 and 1914, wooden sailing ships carried teams of European explorers southward during the famous Heroic Age of Antarctic Exploration, hoping to become the first people to stand at the Geographic South Pole.

Paragraph B: In late 1911, two rival teams set out across the white ice almost at the same time. The Norwegian explorer Roald Amundsen led a small, fast group using skilled Greenland sled dogs and experienced skiers. Meanwhile, the British Royal Navy captain Robert Falcon Scott commanded a larger expedition that tried a mix of experimental motor tractors, short Siberian ponies, and men pulling heavy sleds on foot.

Paragraph C: The contrast in transport and clothing decided the race quickly. Amundsen's team wore loose reindeer fur parkas adapted from Arctic Indigenous peoples, allowing warm sweat to dry safely instead of freezing inside tight wool coats. His dogs pulled loads swiftly across flat sea ice and climbed steep mountain glaciers reliably. Scott's motor sledges broke down almost immediately in bitter cold, and his ponies sank belly-deep into soft powdery snow before dying early on the trail.

Paragraph D: Amundsen reached the Geographic South Pole on December 14, 1911, planted a small Norwegian tent and flag, and returned safely to his coastal camp without losing a single teammate. Scott's exhausted five-man team reached the same spot thirty-four days later only to discover Amundsen's tent waiting in the wind. Trapped by an unusually fierce autumn blizzard on their walk back, Scott and all four companions sadly died just eleven miles short of their next food depot.`,
        questions: [
          {
            id: 'cd_reading_p4_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Parts of Antarctica\'s frozen ice sheet reach up to four kilometers in thickness.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states Antarctica is covered by an ice sheet up to four kilometers thick.'
          },
          {
            id: 'cd_reading_p4_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Roald Amundsen relied mainly on motor tractors to haul supplies up glaciers.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explains Amundsen used Greenland sled dogs and skiers, while Scott tried motor tractors.'
          },
          {
            id: 'cd_reading_p4_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Loose reindeer fur parkas helped Norwegian explorers stay dry in extreme cold.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C notes loose reindeer fur parkas allowed sweat to dry safely instead of freezing.'
          },
          {
            id: 'cd_reading_p4_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Scott\'s expedition carried more boxes of chocolate biscuits than Amundsen\'s camp.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'The passage compares sleds, ponies, clothing, and depots without mentioning chocolate biscuits.'
          },
          {
            id: 'cd_reading_p4_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Every member of Amundsen\'s South Pole team returned alive to their base.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states Amundsen returned safely to his coastal camp without losing a single teammate.'
          },
          {
            id: 'cd_reading_p4_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What happened to Captain Scott\'s motor sledges during the 1911 expedition?',
            options: [
              'A. They reached the South Pole ahead of Amundsen',
              'B. They broke down quickly in the freezing weather',
              'C. They carried all five men safely back to shore',
              'D. They sank through melted summer sea ice'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C states Scott\'s motor sledges broke down almost immediately in bitter cold.'
          },
          {
            id: 'cd_reading_p4_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'How many days after Amundsen did Scott\'s five-man team arrive at the South Pole?',
            options: [
              'A. Eleven days later',
              'B. Fourteen days later',
              'C. Ninety days later',
              'D. Thirty-four days later'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D specifies Scott\'s team reached the spot thirty-four days later.'
          },
          {
            id: 'cd_reading_p4_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Wooden sailing ships carried teams south during the Heroic ______ of Antarctic Exploration.',
            correctAnswer: 'AGE',
            explanation: 'Paragraph A refers to the Heroic Age of Antarctic Exploration.'
          },
          {
            id: 'cd_reading_p4_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Alongside motor tractors, Scott used Siberian ______ that struggled in deep powdery snow.',
            correctAnswer: 'PONIES',
            explanation: 'Paragraph B and C note Scott used short Siberian ponies that sank into soft snow.'
          },
          {
            id: 'cd_reading_p4_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Amundsen stood at the Geographic South Pole on December 14, ______.',
            correctAnswer: '1911',
            explanation: 'Paragraph D dates Amundsen\'s arrival to December 14, 1911.'
          },
          {
            id: 'cd_reading_p4_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Scott and his four companions were stopped on their return march by a fierce autumn ______.',
            correctAnswer: 'BLIZZARD',
            explanation: 'Paragraph D states they were trapped by an unusually fierce autumn blizzard.'
          },
          {
            id: 'cd_reading_p4_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'How close was Scott\'s team to their next food depot when they perished?',
            correctAnswer: 'ELEVEN MILES',
            explanation: 'Paragraph D says they died just eleven miles short of their next food depot.'
          },
          {
            id: 'cd_reading_p4_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'From which island did Amundsen obtain his strong sled dogs?',
            correctAnswer: 'GREENLAND',
            explanation: 'Paragraph B notes Amundsen used skilled Greenland sled dogs.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Reading Ancient Weather From Deep Antarctic Ice',
        subtitle: 'How tiny trapped air bubbles act like a history book of Earth\'s sky',
        text: `Paragraph A: Today, Antarctica welcomes peaceful research scientists instead of flags and sled races. At high inland stations like Dome C, winter air stays far below zero all year round. Because fresh snow never melts there, new snowflakes pile gently onto older winter layers every single year. Over tens of thousands of years, the weight of upper snow presses bottom layers into clear, rock-hard glacier ice, stacking ancient years neatly like pages inside a giant cold book.

Paragraph B: Using special hollow metal drills, glaciologists pull long tubes of ice—called ice cores—from three kilometers below the snow surface. Each slice of ice preserves tiny clues from the exact year that snow fell. Dark gray ash streaks mark powerful volcanic eruptions from long ago, while tiny flecks of sea salt blow inland during ancient windstorms. Even traces of Sahara desert dust have turned up inside Antarctic ice layers.

Paragraph C: The most valuable treasures inside deep ice cores are microscopic pockets of ancient air. As soft snow slowly packs down into solid ice, tiny open air spaces between snowflakes seal shut into millions of round gas bubbles. Back in clean university laboratories, scientists crush small ice samples inside air-free glass jars so those untouched bubbles pop out safely, letting machines measure how much carbon dioxide and methane filled Earth's atmosphere hundreds of thousands of years ago.

Paragraph D: By comparing gas bubbles with nearby frozen water molecules, researchers discovered a clear historical pattern. Whenever ancient Earth cooled into deep ice ages, atmospheric carbon dioxide levels stayed low. Whenever warm periods returned, carbon dioxide and air temperatures climbed closely together. Ice cores drilled in eastern Antarctica currently allow scientists to read Earth's climate record clearly back eight hundred thousand years.`,
        questions: [
          {
            id: 'cd_reading_p4_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. How unmelted annual snow builds neatly stacked ice layers',
              'ii. Volcanic ash and distant desert dust found in drilled tubes',
              'iii. Checking carbon dioxide links across ancient warm and cold cycles',
              'iv. Extracting tiny sealed air bubbles inside university labs',
              'v. Building tourist hotels near Dome C station'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A explains how unmelted annual snow piles up and presses into neatly stacked ice layers.'
          },
          {
            id: 'cd_reading_p4_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. How unmelted annual snow builds neatly stacked ice layers',
              'ii. Volcanic ash and distant desert dust found in drilled tubes',
              'iii. Checking carbon dioxide links across ancient warm and cold cycles',
              'iv. Extracting tiny sealed air bubbles inside university labs',
              'v. Why wooden drills melt deep below the surface'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B describes drilling three-kilometer ice cores containing volcanic ash, sea salt, and Sahara dust.'
          },
          {
            id: 'cd_reading_p4_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. How unmelted annual snow builds neatly stacked ice layers',
              'ii. Volcanic ash and distant desert dust found in drilled tubes',
              'iii. Checking carbon dioxide links across ancient warm and cold cycles',
              'iv. Extracting tiny sealed air bubbles inside university labs',
              'v. Freezing glass jars during summer storms'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C details how trapped air bubbles are released inside air-free glass jars to measure ancient gases.'
          },
          {
            id: 'cd_reading_p4_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. How unmelted annual snow builds neatly stacked ice layers',
              'ii. Volcanic ash and distant desert dust found in drilled tubes',
              'iii. Checking carbon dioxide links across ancient warm and cold cycles',
              'iv. Extracting tiny sealed air bubbles inside university labs',
              'v. Predicting heavy windstorms for polar airplanes'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D summarizes the 800,000-year record linking warm/cold cycles closely with carbon dioxide levels.'
          },
          {
            id: 'cd_reading_p4_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Scientists drill long tubes called ice ______ from up to three kilometers below Antarctica\'s surface.',
            correctAnswer: 'CORES',
            explanation: 'Paragraph B refers to long tubes of ice called ice cores.'
          },
          {
            id: 'cd_reading_p4_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Even particles of wind-blown ______ desert dust appear inside deep polar ice slices.',
            correctAnswer: 'SAHARA',
            explanation: 'Paragraph B cites traces of Sahara desert dust inside ice layers.'
          },
          {
            id: 'cd_reading_p4_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Researchers crush ice samples inside sealed ______ jars to capture untouched air bubbles safely.',
            correctAnswer: 'GLASS',
            explanation: 'Paragraph C notes scientists crush samples inside air-free glass jars.'
          },
          {
            id: 'cd_reading_p4_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'East Antarctic ice cores stretch Earth\'s climate record clearly back ______ hundred thousand years.',
            correctAnswer: 'EIGHT',
            explanation: 'Paragraph D gives the figure eight hundred thousand years.'
          },
          {
            id: 'cd_reading_p4_q22',
            number: 22,
            type: 'matching_information',
            questionText: 'Which paragraph names a high inland research base called Dome C?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A names high inland stations like Dome C.'
          },
          {
            id: 'cd_reading_p4_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph mentions measuring methane alongside carbon dioxide?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C states machines measure how much carbon dioxide and methane filled Earth\'s atmosphere.'
          },
          {
            id: 'cd_reading_p4_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why do yearly snow layers remain neatly preserved at inland Antarctic camps like Dome C?',
            options: [
              'A. Winter air stays freezing cold so fresh snow never melts',
              'B. Scientists cover every layer with metal sheets',
              'C. Ocean salt locks snow crystals permanently into granite',
              'D. Deep ice caves protect snowflakes from dark winters'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A explains air stays below zero year-round so fresh snow never melts and stacks neatly.'
          },
          {
            id: 'cd_reading_p4_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Dark gray streaks in ice cores give scientists clues about past volcanic eruptions.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states dark gray ash streaks mark powerful volcanic eruptions from long ago.'
          },
          {
            id: 'cd_reading_p4_q26',
            number: 26,
            type: 'true_false_not_given',
            questionText: 'During ancient ice ages, carbon dioxide levels in air bubbles rose to record highs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states whenever Earth cooled into ice ages, atmospheric carbon dioxide levels stayed low.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Hidden Lakes and Life Beneath Kilometers of Ice',
        subtitle: 'Exploring Lake Vostok while keeping underground waters completely clean',
        text: `Paragraph A: For a long time, geographers assumed the bottom of Antarctica\'s thick ice sheet was frozen solid onto bare rock. In the 1970s, aircraft carrying ice-penetrating radar flew across East Antarctica and recorded an astonishing echo: flat, mirror-smooth reflections deep beneath the ice. Scientists soon realized they had discovered hidden freshwater lakes buried completely under nearly four kilometers of solid glacier ice.

Paragraph B: The largest of these underground waters is Lake Vostok, roughly the size of Lake Ontario in North America. How can water stay liquid in the coldest desert on Earth? Two natural factors prevent Lake Vostok from freezing. First, slight natural heat warming upward from rocks deep inside the planet softens the bottom of the ice sheet. Second, the massive weight of four thousand meters of heavy ice lowers the freezing temperature of water slightly, acting like an enormous warm winter blanket over the lake.

Paragraph C: Lake Vostok has likely stayed cut off from sunlight, rain, and surface winds for more than fifteen million years. Astrobiologists are eager to study it because similar ice-covered dark oceans exist today on icy moons such as Jupiter\'s moon Europa and Saturn\'s moon Enceladus. Discovering tiny bacteria living inside dark, freezing Antarctic lakes shows that life does not always require warm surface sunshine to survive.

Paragraph D: However, reaching Lake Vostok poses a tough practical dilemma. If drillers bore straight down into a sealed ancient lake using dirty oil-lubricated drill bits, modern surface bacteria could rush into the water and ruin a pristine environment forever. Today, polar engineers carefully design hot-water drills and robotic sterile probes so researchers can sample Antarctica\'s hidden lakes—and eventually icy moons—without leaving a single drop of contamination behind.`,
        questions: [
          {
            id: 'cd_reading_p4_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Radar flights in the 1970s proved that liquid lakes existed beneath Antarctica\'s thick ice.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A describes 1970s aircraft using ice-penetrating radar discovering flat reflections from hidden freshwater lakes.'
          },
          {
            id: 'cd_reading_p4_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Lake Vostok is filled with salty seawater rather than fresh water.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A identifies these underground reservoirs as hidden freshwater lakes.'
          },
          {
            id: 'cd_reading_p4_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Heavy weight from overhead ice helps keep Lake Vostok from freezing solid.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B states the massive weight of 4,000 meters of ice lowers the freezing temperature slightly and acts like a warm blanket.'
          },
          {
            id: 'cd_reading_p4_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Researchers found large blind fish swimming across Lake Vostok in 2018.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C discusses tiny bacteria and icy moons, with no mention of blind fish or 2018.'
          },
          {
            id: 'cd_reading_p4_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Studying sealed Antarctic lakes helps space scientists prepare to search icy moons for life.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C links Lake Vostok to icy moons Europa and Enceladus, and Paragraph D links sterile probes to exploring icy moons.'
          },
          {
            id: 'cd_reading_p4_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Using dirty oil-lubricated drill bits is a safe way to protect ancient underground water.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D warns dirty oil-lubricated bits could carry modern surface bacteria and ruin the pristine lake.'
          },
          {
            id: 'cd_reading_p4_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why was Lake Ontario mentioned in Paragraph B?',
            options: [
              'A. To explain where the first radar airplanes took off',
              'B. To compare warm summer lakes in Canada with Arctic snow',
              'C. To show the rough size of underground Lake Vostok',
              'D. To prove Lake Vostok holds salty ocean tides'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B states Lake Vostok is roughly the size of Lake Ontario in North America.'
          },
          {
            id: 'cd_reading_p4_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why do astrobiologists care deeply about tiny bacteria found in dark polar lakes?',
            options: [
              'A. Those bacteria clean rusty ship engines quickly',
              'B. They show that living organisms can survive under thick ice without sunlight',
              'C. They melt four-kilometer glaciers faster every winter',
              'D. They produce fresh drinking water for desert cities'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C notes discovering bacteria in dark freezing lakes proves life does not always need warm surface sunlight.'
          },
          {
            id: 'cd_reading_p4_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'How are engineers avoiding contamination when sampling subglacial lakes?',
            options: [
              'A. By dropping heavy diesel generators through wide ice tunnels',
              'B. By freezing the entire lake solid before drilling',
              'C. By designing clean hot-water drills and sterile robotic probes',
              'D. By pouring clean sea salt down radar boreholes'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states engineers design hot-water drills and robotic sterile probes to avoid contamination.'
          },
          {
            id: 'cd_reading_p4_q36',
            number: 36,
            type: 'fill_blank',
            questionText: 'In the 1970s, polar scientists spotted hidden lakes using ______ mounted on aircraft.',
            correctAnswer: 'RADAR',
            explanation: 'Paragraph A refers to aircraft carrying ice-penetrating radar.'
          },
          {
            id: 'cd_reading_p4_q37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Gentle natural warmth rising from underground ______ helps keep deep lake water liquid.',
            correctAnswer: 'ROCKS',
            explanation: 'Paragraph B mentions slight natural heat warming upward from rocks deep inside the planet.'
          },
          {
            id: 'cd_reading_p4_q38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Lake Vostok has remained cut off from surface sun and wind for over ______ million years.',
            correctAnswer: 'FIFTEEN',
            explanation: 'Paragraph C states Lake Vostok has likely stayed cut off for more than fifteen million years.'
          },
          {
            id: 'cd_reading_p4_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which icy moon of Saturn is compared to Antarctica\'s buried lakes?',
            correctAnswer: 'ENCELADUS',
            explanation: 'Paragraph C names Jupiter\'s moon Europa and Saturn\'s moon Enceladus.'
          },
          {
            id: 'cd_reading_p4_q40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What is the main subject of Passage 3?',
            options: [
              'A. How deep lakes survive beneath Antarctic ice and why scientists explore them carefully',
              'B. Building tourist submarines to visit Jupiter',
              'C. Why 1970s radar aircraft stopped flying over East Antarctica',
              'D. How North American lakes froze fifteen million years ago'
            ],
            correctAnswer: 'A',
            explanation: 'Passage 3 traces the radar discovery of Lake Vostok, how it stays liquid, its value to space science, and clean drilling.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 5 (EASY): cd_reading_p5 (The Evolution of Cuneiform Script & Written Records)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p5',
    testNumber: 5,
    testType: 'practice',
    title: 'CD-IELTS Practice 5: The Evolution of Cuneiform Script & Written Records',
    description:
      'Beginner-friendly CD-IELTS Academic Reading test featuring 40 clear questions on early Mesopotamian counting tokens, wedge-shaped clay writing, and ancient scribal schools.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: From Clay Counting Tokens to Wedge Writing',
        subtitle: 'How busy temple storehouses invented the world\'s earliest writing system',
        text: `Paragraph A: Over five thousand years ago, busy farming towns grew along the fertile rivers of southern Mesopotamia, in modern-day Iraq. Large temples and city storehouses collected barley grain, jars of olive oil, sheep wool, and silver every harvest season. At first, managers kept track of deliveries simply by remembering names and quantities, yet as cities expanded to tens of thousands of citizens, human memory was no longer reliable enough to stop arguments or mistakes.

Paragraph B: To count goods accurately, early merchants molded small baked clay shapes called tokens. A small clay cone stood for one basket of wheat, while a flat clay disk represented one sheep. Before long, traders sealed groups of clay tokens inside hollow clay balls—almost like envelopes—so nobody could open a shipment and steal tokens along the road. To show what was hidden inside the sealed ball, scribes pressed the tokens lightly onto the soft wet outside surface before baking it.

Paragraph C: Clever recordkeepers soon noticed an easier shortcut: if they simply drew clear pictures of grain stalks, jars, and sheep onto flat hand-sized pillows of damp river clay, they did not need to carry heavy clay tokens inside hollow balls anymore! Using a sharpened river reed, early writers drew simple little pictures on wet clay tablets and let them dry in the hot desert sun.

Paragraph D: Over the next few centuries, drawing round curves in soft mud proved slow and clumsy, so scribes began pressing the straight triangular tip of a cut reed straight into wet clay instead. Each quick press left a crisp wedge-shaped mark. Scholars later named this script cuneiform, from the Latin word cuneus meaning "wedge." Because wedge marks could be stamped quickly in neat horizontal rows, cuneiform became fast enough to record full spoken sentences, laws, and letters.`,
        questions: [
          {
            id: 'cd_reading_p5_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'The first cities to use clay counting records grew along rivers in southern ______.',
            correctAnswer: 'MESOPOTAMIA',
            explanation: 'Paragraph A locates these early towns in southern Mesopotamia (modern-day Iraq).'
          },
          {
            id: 'cd_reading_p5_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'A flat baked clay ______ stood for one sheep in early merchant accounting.',
            correctAnswer: 'DISK',
            explanation: 'Paragraph B states a flat clay disk represented one sheep.'
          },
          {
            id: 'cd_reading_p5_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Early scribes drew simple pictures onto damp clay using a sharpened river ______.',
            correctAnswer: 'REED',
            explanation: 'Paragraph C notes early writers used a sharpened river reed.'
          },
          {
            id: 'cd_reading_p5_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Completed early picture tablets dried hard naturally in the desert ______.',
            correctAnswer: 'SUN',
            explanation: 'Paragraph C says writers let tablets dry in the hot desert sun.'
          },
          {
            id: 'cd_reading_p5_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'The name cuneiform comes from the Latin word cuneus, which means ______.',
            correctAnswer: 'WEDGE',
            explanation: 'Paragraph D translates the Latin word cuneus as "wedge."'
          },
          {
            id: 'cd_reading_p5_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Mesopotamian writing was invented mainly to compose religious poems at first.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraphs A–C show writing began for storehouse accounting of barley, wool, sheep, and deliveries.'
          },
          {
            id: 'cd_reading_p5_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Hollow clay balls stopped traders from secretly removing counting tokens during trips.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B explains tokens were sealed inside hollow clay balls so nobody could steal tokens along the road.'
          },
          {
            id: 'cd_reading_p5_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Royal soldiers carried cuneiform reeds made from solid gold.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs C and D mention river reeds, with no mention of gold reeds for soldiers.'
          },
          {
            id: 'cd_reading_p5_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Stamping straight wedge marks was faster than drawing curved pictures in damp mud.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states drawing curves proved slow and clumsy, whereas wedge marks could be stamped quickly in neat rows.'
          },
          {
            id: 'cd_reading_p5_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why did ancient merchants press clay tokens onto the outside of hollow clay envelopes?',
            options: [
              'A. To decorate gifts for royal weddings',
              'B. To sharpen wooden reed tips before writing',
              'C. To make heavy clay balls dry faster in winter rain',
              'D. To show what counting tokens were locked inside without breaking the ball'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B explains scribes pressed tokens on the wet outside surface to show what was hidden inside the sealed ball.'
          },
          {
            id: 'cd_reading_p5_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'What eventually happened to hollow clay token balls once scribes started using flat clay tablets?',
            options: [
              'A. People stopped needing to carry heavy tokens inside hollow balls',
              'B. Scribes used them as temple coins',
              'C. Kings ordered all clay tablets to be crushed into jars',
              'D. River floods washed clay balls toward Egypt'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C states scribes realized they did not need to carry heavy clay tokens inside hollow balls anymore.'
          },
          {
            id: 'cd_reading_p5_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which grain did a small baked clay cone token represent?',
            correctAnswer: 'WHEAT',
            explanation: 'Paragraph B notes a small clay cone stood for one basket of wheat.'
          },
          {
            id: 'cd_reading_p5_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Besides laws and letters, what could fast horizontal wedge marks finally capture?',
            correctAnswer: 'SPOKEN SENTENCES',
            explanation: 'Paragraph D states cuneiform became fast enough to record full spoken sentences, laws, and letters.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Life Inside an Ancient Tablet School',
        subtitle: 'How young students memorized hundreds of signs in the edubba',
        text: `Paragraph A: Because cuneiform eventually grew to include more than six hundred different wedge signs, very few people in ancient Mesopotamia could read or write. Parents who wanted their children to earn respectful jobs as government clerks, tax accountants, or temple secretaries sent them to special writing schools called edubba—a Sumerian word meaning "tablet house."

Paragraph B: Archaeological digs in the ancient city of Ur uncovered several tablet houses packed with thousands of discarded student homework disks. At the start of each school day, a pupil shaped a round lump of fresh wet clay, smoothed it flat like a pancake, and practiced copying simple wedges. On round exercise tablets excavated from classrooms, the teacher pressed a neat model line across the top half, and the student copied that exact line repeatedly on the lower half until the teacher approved.

Paragraph C: Learning to write well took several strict years of study. Beginners started by stamping single vertical and horizontal wedges cleanly without smearing soft mud. Next, students memorized long word lists naming local trees, wooden boats, copper tools, wild birds, and legal jobs. Older students moved on to copying royal proverbs, land sales contracts, and mathematical tables showing how to measure grain fields.

Paragraph D: School life left little time for laziness. Clay school stories written by former students describe waking at sunrise, rushing down dusty lanes with freshly packed lunches, and hoping not to arrive late. Strict headmasters punished messy handwriting or talking in class, though friendly advanced pupils—known as "big brothers"—helped younger learners shape clay cleanly and check spelling mistakes before homework dried.`,
        questions: [
          {
            id: 'cd_reading_p5_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph gives the Sumerian meaning of the word edubba?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A translates edubba as "tablet house."'
          },
          {
            id: 'cd_reading_p5_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph mentions older students who helped younger beginners check their work?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'D',
            explanation: 'Paragraph D mentions helpful advanced pupils known as "big brothers."'
          },
          {
            id: 'cd_reading_p5_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph describes round pancake-shaped homework tablets found in the city of Ur?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'B',
            explanation: 'Paragraph B describes round exercise disks found in Ur.'
          },
          {
            id: 'cd_reading_p5_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph explains the step-by-step order of topics taught from wedges to contracts?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C traces learning single wedges, word lists, proverbs, contracts, and field math.'
          },
          {
            id: 'cd_reading_p5_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Cuneiform grew to contain over ______ hundred wedge signs, keeping reading rare.',
            correctAnswer: 'SIX',
            explanation: 'Paragraph A notes cuneiform grew to include more than six hundred signs.'
          },
          {
            id: 'cd_reading_p5_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Young students flattened lumps of wet clay like a ______ before copying lines.',
            correctAnswer: 'PANCAKE',
            explanation: 'Paragraph B states pupils smoothed fresh wet clay flat like a pancake.'
          },
          {
            id: 'cd_reading_p5_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Mid-level pupils memorized long lists covering trees, tools, birds, and wooden ______.',
            correctAnswer: 'BOATS',
            explanation: 'Paragraph C mentions local trees, wooden boats, copper tools, and birds.'
          },
          {
            id: 'cd_reading_p5_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Older pupils practiced mathematical tables used to measure agricultural ______ fields.',
            correctAnswer: 'GRAIN',
            explanation: 'Paragraph C states math tables showed how to measure grain fields.'
          },
          {
            id: 'cd_reading_p5_q22',
            number: 22,
            type: 'true_false_not_given',
            questionText: 'Almost every citizen living in Mesopotamian cities could read cuneiform tablets.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A explicitly says very few people in ancient Mesopotamia could read or write.'
          },
          {
            id: 'cd_reading_p5_q23',
            number: 23,
            type: 'true_false_not_given',
            questionText: 'On round classroom exercise tablets, the teacher wrote the top line and the student copied below.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B describes teachers pressing a neat model line across the top half for students to copy below.'
          },
          {
            id: 'cd_reading_p5_q24',
            number: 24,
            type: 'true_false_not_given',
            questionText: 'Only girls from wealthy royal palaces were allowed to enter the edubba in Ur.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'The passage speaks of parents sending children to earn clerk jobs without mentioning gender restrictions or royal-only rules.'
          },
          {
            id: 'cd_reading_p5_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why did students have to practice lines before their clay tablets dried?',
            options: [
              'A. Teachers burned any dry tablet brought to school',
              'B. Dry tablets dissolved in classroom water buckets',
              'C. Wet clay could still be smoothed and corrected cleanly',
              'D. River reeds could only write on baked stone'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraphs B and D show students pressed fresh wet clay and checked mistakes before homework dried hard.'
          },
          {
            id: 'cd_reading_p5_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'What nickname was given to friendly advanced pupils who guided younger students?',
            correctAnswer: 'BIG BROTHERS',
            explanation: 'Paragraph D calls helpful advanced pupils "big brothers."'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Why Clay Tablets Survived Better Than Paper',
        subtitle: 'Uncovering kings\' libraries, everyday recipes, and personal complaints',
        text: `Paragraph A: Modern readers might guess that writing on heavy baked mud sounds awkward compared to smooth paper or animal parchment. Surprisingly, clay tablets gave historians one giant lucky gift: durability. Paper scrolls rot quickly in damp earth, and wood burns into ash during war. When enemies set fire to ancient Mesopotamian palaces, flames accidentally baked thousands of sun-dried clay tablets rock-hard inside collapsed storage rooms, saving whole libraries untouched beneath desert sand.

Paragraph B: One famous treasure came from the Assyrian king Ashurbanipal in Nineveh around 650 BCE. King Ashurbanipal sent trained scribes across neighboring kingdoms to copy every important text they could find—including ancient flood stories, star charts, medical herb books, and dictionary lists matching Sumerian and Akkadian words. Today, more than thirty thousand clay fragments from his royal library rest safely inside museum collections.

Paragraph C: Beyond royal palaces, archaeologists love cuneiform because ordinary baked tablets capture daily human voices often missing from grand stone monuments. Museum drawers hold four-thousand-year-old kitchen recipes for lamb stew, wedding gift inventories, angry letters from wool merchants waiting on late boat shipments, and even a boy's grumpy note begging his mother to send nicer clothes to boarding school.

Paragraph D: Over time, however, simpler alphabets using just twenty-two letters replaced complex six-hundred-sign wedge writing. Around two thousand years ago, the last astronomers in Babylon stopped stamping reed marks into mud. Even so, cuneiform served human civilization successfully for more than three millennia, leaving behind the oldest detailed window into early cities, science, and family life.`,
        questions: [
          {
            id: 'cd_reading_p5_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Ancient palace fires often destroyed paper scrolls while accidentally baking clay tablets hard.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A notes wood and paper rot or burn, whereas fires baked thousands of clay tablets rock-hard.'
          },
          {
            id: 'cd_reading_p5_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'King Ashurbanipal\'s library in Nineveh focused solely on military battle victories.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states his scribes copied flood stories, star charts, medical herb books, and dictionary lists.'
          },
          {
            id: 'cd_reading_p5_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'More than thirty thousand clay tablet fragments survive from King Ashurbanipal\'s collection.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B confirms over thirty thousand clay fragments from his library sit in museum collections.'
          },
          {
            id: 'cd_reading_p5_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'A scholar from London paid three million pounds for Ashurbanipal\'s flood tablet in 1995.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B mentions museums holding the fragments without mentioning any 1995 purchase price.'
          },
          {
            id: 'cd_reading_p5_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Clay tablets teach historians about everyday people as well as kings and temples.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C highlights cooking recipes, merchant complaints, wedding lists, and a schoolboy\'s letter to his mother.'
          },
          {
            id: 'cd_reading_p5_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Shorter twenty-two-letter alphabets eventually replaced the complicated cuneiform system.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D explains simpler twenty-two-letter alphabets replaced the complex six-hundred-sign script.'
          },
          {
            id: 'cd_reading_p5_q33',
            number: 33,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. How palace fires saved ancient mud records',
              'ii. Everyday recipes and ordinary voices on baked clay',
              'iii. Why shorter alphabets brought cuneiform to an end',
              'iv. Collecting star charts and dictionaries for a royal library',
              'v. Shipping fresh clay pots across Mediterranean ports'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A explains how damp earth rots paper while palace fires baked clay tablets permanently hard.'
          },
          {
            id: 'cd_reading_p5_q34',
            number: 34,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. How palace fires saved ancient mud records',
              'ii. Everyday recipes and ordinary voices on baked clay',
              'iii. Why shorter alphabets brought cuneiform to an end',
              'iv. Collecting star charts and dictionaries for a royal library',
              'v. Teaching young Assyrian merchants to sail boats'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B profiles King Ashurbanipal\'s grand Nineveh library of stories, dictionaries, and star charts.'
          },
          {
            id: 'cd_reading_p5_q35',
            number: 35,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. How palace fires saved ancient mud records',
              'ii. Everyday recipes and ordinary voices on baked clay',
              'iii. Why shorter alphabets brought cuneiform to an end',
              'iv. Collecting star charts and dictionaries for a royal library',
              'v. Rebuilding Nineveh\'s burnt mud walls in museums'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph C showcases everyday records including lamb stew recipes, wool trades, and a boy\'s note.'
          },
          {
            id: 'cd_reading_p5_q36',
            number: 36,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. How palace fires saved ancient mud records',
              'ii. Everyday recipes and ordinary voices on baked clay',
              'iii. Why shorter alphabets brought cuneiform to an end',
              'iv. Collecting star charts and dictionaries for a royal library',
              'v. Why modern computers use wedge symbols'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D summarizes the rise of 22-letter alphabets and the final end of cuneiform around 2,000 years ago.'
          },
          {
            id: 'cd_reading_p5_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Who were among the very last people still writing in cuneiform two thousand years ago?',
            options: [
              'A. Wool boat builders',
              'B. Astronomers in Babylon',
              'C. Royal kitchen cooks',
              'D. Greek pottery painters'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D identifies the last astronomers in Babylon stopping cuneiform roughly two thousand years ago.'
          },
          {
            id: 'cd_reading_p5_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What personal item did the ancient boarding-school boy ask his mother to send?',
            options: [
              'A. Fresh river reeds',
              'B. Baked lamb stew',
              'C. Nicer clothes',
              'D. Silver counting tokens'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C cites a boy\'s grumpy note begging his mother to send nicer clothes.'
          },
          {
            id: 'cd_reading_p5_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'King Ashurbanipal\'s dictionary tablets matched Sumerian with ______ words.',
            correctAnswer: 'AKKADIAN',
            explanation: 'Paragraph B states dictionaries matched Sumerian and Akkadian words.'
          },
          {
            id: 'cd_reading_p5_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'For roughly how long did cuneiform serve human civilization?',
            correctAnswer: 'THREE MILLENNIA',
            explanation: 'Paragraph D states cuneiform served civilization successfully for more than three millennia.'
          }
        ]
      }
    ]
  })
];
