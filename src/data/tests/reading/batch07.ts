/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_07: TestItem[] = [
  // =========================================================================
  // MOCK TEST 1 (EASY): cd_reading_m1 (The Great Barrier Reef & Ocean Conservation)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m1',
    testNumber: 1,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 1: The Great Barrier Reef Ocean Acidification & Calcification',
    description:
      'Beginner-friendly CD-IELTS Official Mock Reading test featuring 40 clear questions on coral reef structure, seawater chemistry, coral bleaching, and reef protection.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Building the World\'s Largest Coral Wall',
        subtitle: 'How tiny marine animals create underwater limestone cities off Australia',
        text: `Paragraph A: Stretching for more than two thousand three hundred kilometers along Australia's northeastern coast, the Great Barrier Reef is the largest living structure on Earth. Even astronauts orbiting far above our planet can see its bright turquoise chains from space. Rather than being one single flat rock, the reef actually consists of nearly three thousand separate coral reefs and hundreds of small sandy islands built slowly over thousands of years.

Paragraph B: Most people think corals are colorful ocean plants or smooth sea stones, yet each coral branch is built by millions of tiny soft-bodied animals called polyps. Related closely to sea anemones and jellyfish, a single polyp looks like a tiny open tube crowned with stinging arms that catch drifting plankton at night. To protect its soft body from fish and waves, each polyp builds a hard white cup around itself out of natural limestone minerals called aragonite.

Paragraph C: Over centuries, young polyps build fresh limestone homes directly on top of empty old coral cups left behind by earlier generations. Gradually, these stacked rocky homes form giant underwater mountains, caves, and sandy lagoons. Although coral reefs cover less than one percent of Earth's ocean floor, they provide safe hiding spaces and feeding grounds for roughly one quarter of all sea fish species on the planet.

Paragraph D: Beyond feeding ocean wildlife, healthy coral barriers protect human towns along Queensland's coast. When powerful summer storms send tall ocean waves racing toward shore, wide outer reef walls absorb most of the wave energy before water reaches beaches, harbors, and coastal roads. Without these natural limestone breakwaters, tropical cyclones would flood towns and wash away sandy beaches much faster.`,
        questions: [
          {
            id: 'cd_reading_m1_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'The Great Barrier Reef stretches more than two thousand three hundred kilometers along Australia\'s coast.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states the Great Barrier Reef stretches more than two thousand three hundred kilometers along Australia\'s northeastern coast.'
          },
          {
            id: 'cd_reading_m1_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Corals are classified scientifically as ocean plants rather than animals.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explains that each coral branch is built by tiny soft-bodied animals called polyps, related to jellyfish.'
          },
          {
            id: 'cd_reading_m1_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Individual coral polyps catch drifting food at night using tiny stinging arms.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B notes polyps use stinging arms to catch drifting plankton at night.'
          },
          {
            id: 'cd_reading_m1_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Coral reefs cover more than half of the entire ocean floor on Earth.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C specifies that coral reefs cover less than one percent of Earth\'s ocean floor.'
          },
          {
            id: 'cd_reading_m1_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Australian fishermen caught three million tuna near Brisbane beaches in 2021.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs C and D describe marine fish shelter and storm protection, with no mention of 2021 tuna numbers.'
          },
          {
            id: 'cd_reading_m1_q6',
            number: 6,
            type: 'fill_blank',
            questionText: 'The Great Barrier Reef includes almost ______ thousand separate coral reefs.',
            correctAnswer: 'THREE',
            explanation: 'Paragraph A states the reef consists of nearly three thousand separate coral reefs.'
          },
          {
            id: 'cd_reading_m1_q7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Polyps construct protective white cups from a mineral called ______.',
            correctAnswer: 'ARAGONITE',
            explanation: 'Paragraph B names the natural limestone mineral as aragonite.'
          },
          {
            id: 'cd_reading_m1_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Coral habitats shelter nearly one ______ of all sea fish species worldwide.',
            correctAnswer: 'QUARTER',
            explanation: 'Paragraph C states reefs support roughly one quarter of all sea fish species.'
          },
          {
            id: 'cd_reading_m1_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'During tropical ______, outer reefs absorb heavy wave power before it hits beaches.',
            correctAnswer: 'CYCLONES',
            explanation: 'Paragraph D warns tropical cyclones would flood towns much faster without reefs.'
          },
          {
            id: 'cd_reading_m1_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Who can see the Great Barrier Reef clearly from high above Earth?',
            correctAnswer: 'ASTRONAUTS',
            explanation: 'Paragraph A says astronauts orbiting far above our planet can see its turquoise chains.'
          },
          {
            id: 'cd_reading_m1_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Which Australian state\'s coastal towns are shielded by outer reef barriers?',
            correctAnswer: 'QUEENSLAND',
            explanation: 'Paragraph D refers to human towns along Queensland\'s coast.'
          },
          {
            id: 'cd_reading_m1_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why do coral polyps build hard white cups around their bodies?',
            options: [
              'A. To protect their soft bodies from fish and ocean waves',
              'B. To help baby sea turtles lay eggs safely',
              'C. To store sweet rainwater during winter tides',
              'D. To reflect bright sunlight back toward astronauts'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B states polyps build hard white cups to protect their soft bodies from fish and waves.'
          },
          {
            id: 'cd_reading_m1_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'How do large coral reef mountains grow taller over hundreds of years?',
            options: [
              'A. Volcanoes push gray rock up from deep ocean mud',
              'B. Strong tides pile broken seashells onto coastal highways',
              'C. Young polyps build fresh homes on top of empty older limestone cups',
              'D. Beach sand turns slowly into green underwater glass'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C explains young polyps build fresh limestone homes directly on top of empty old coral cups.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: How Acidic Water and Warm Summers Stress Corals',
        subtitle: 'Two threats hurting coral color and shell strength',
        text: `Paragraph A: Healthy shallow reefs glow in rich shades of brown, green, and amber gold. Corals do not make those colors by themselves. Instead, microscopic golden algae live safely inside clear coral polyp skin. During sunny afternoons, these tiny plant-like guests capture daylight to turn carbon dioxide and water into sugars, supplying corals with almost ninety percent of their daily food energy. In return, the coral polyp shields the algae from hungry grazing fish.

Paragraph B: This helpful partnership breaks down whenever summer oceans stay unusually hot for several weeks. Even a modest rise of one or two degrees Celsius above normal summer heat overwhelms the tiny algae inside coral tissue. Damaged by heat and strong light, the algae start leaking harmful chemicals. To stay alive, stressed corals push their golden guests out into the sea, leaving behind bare chalk-white skeletons. Scientists call this dramatic color loss coral bleaching.

Paragraph C: A bleached white coral is hungry, yet not immediately dead. If cooler ocean water returns within a couple of weeks, surviving polyps can invite fresh algae back into their skin and slowly regain healthy color. However, if hot summer waves linger for two months or more, starved corals run out of energy and die, allowing fuzzy green seaweeds to coat the empty rock.

Paragraph D: Alongside ocean warming, rising air carbon dioxide causes a second quieter problem known as ocean acidification. Oceans absorb roughly a quarter of the carbon dioxide released by power plants and cars. When extra gas dissolves into seawater, it lowers natural mineral ingredients called carbonate ions. Without plenty of carbonate bricks floating nearby, corals must work much harder to grow strong skeletons, leaving new coral branches thin, brittle, and easier for storms to snap.`,
        questions: [
          {
            id: 'cd_reading_m1_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. How extra carbon dioxide makes coral skeletons weaker',
              'ii. Why bleached reefs sometimes recover when water cools down',
              'iii. A friendly partnership feeding corals with sunshine',
              'iv. How small summer heatwaves force algae out of polyps',
              'v. Painting white rocks green to attract harbor fish'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph A describes how microscopic algae supply corals with ninety percent of daily food while living safely inside polyp skin.'
          },
          {
            id: 'cd_reading_m1_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. How extra carbon dioxide makes coral skeletons weaker',
              'ii. Why bleached reefs sometimes recover when water cools down',
              'iii. A friendly partnership feeding corals with sunshine',
              'iv. How small summer heatwaves force algae out of polyps',
              'v. Moving tropical fish into cold southern lakes'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B explains how a 1–2°C summer heat rise causes corals to expel golden algae, producing coral bleaching.'
          },
          {
            id: 'cd_reading_m1_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. How extra carbon dioxide makes coral skeletons weaker',
              'ii. Why bleached reefs sometimes recover when water cools down',
              'iii. A friendly partnership feeding corals with sunshine',
              'iv. How small summer heatwaves force algae out of polyps',
              'v. Freezing bleached coral branches inside hospital labs'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph C contrasts fast recovery when cool water returns against starvation during two-month heatwaves.'
          },
          {
            id: 'cd_reading_m1_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. How extra carbon dioxide makes coral skeletons weaker',
              'ii. Why bleached reefs sometimes recover when water cools down',
              'iii. A friendly partnership feeding corals with sunshine',
              'iv. How small summer heatwaves force algae out of polyps',
              'v. Cleaning car exhaust pipes with saltwater basins'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph D explains how dissolved carbon dioxide reduces carbonate ions and leaves new coral branches thin and brittle.'
          },
          {
            id: 'cd_reading_m1_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Tiny golden ______ living inside polyp skin turn sunlight into sugars for the host coral.',
            correctAnswer: 'ALGAE',
            explanation: 'Paragraph A identifies microscopic golden algae living safely inside coral polyp skin.'
          },
          {
            id: 'cd_reading_m1_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'When hot water persists, corals push out their guests, revealing bright ______ skeletons underneath.',
            correctAnswer: 'WHITE',
            explanation: 'Paragraph B states stressed corals leave behind bare chalk-white skeletons.'
          },
          {
            id: 'cd_reading_m1_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'If heatwaves last more than two ______, starved corals die and seaweeds take over.',
            correctAnswer: 'MONTHS',
            explanation: 'Paragraph C states prolonged heatwaves lasting two months or more starve corals into death.'
          },
          {
            id: 'cd_reading_m1_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Ocean acidification reduces free ______ ions needed by corals to build strong skeletons.',
            correctAnswer: 'CARBONATE',
            explanation: 'Paragraph D notes extra dissolved gas lowers natural carbonate ions.'
          },
          {
            id: 'cd_reading_m1_q22',
            number: 22,
            type: 'matching_information',
            questionText: 'Which paragraph tells what happens to bare coral rocks after dead reefs starve?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C states fuzzy green seaweeds coat empty rock when starved corals die.'
          },
          {
            id: 'cd_reading_m1_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph notes how much of a coral\'s daily food comes from its tiny guests?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A states algae supply corals with almost ninety percent of their daily food energy.'
          },
          {
            id: 'cd_reading_m1_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'What makes a bleached coral appear bright white instead of colorful?',
            options: [
              'A. Passing cruise boats cover rocks with white chalk paint',
              'B. It has lost its colorful algae partners, showing its clean limestone skeleton',
              'C. Cold currents freeze saltwater onto coral tips',
              'D. Grazing fish scrape off all clear skin overnight'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B states pushing golden algae out leaves bare chalk-white skeletons showing.'
          },
          {
            id: 'cd_reading_m1_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Corals always die immediately on the first day they lose their color.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C clearly states a bleached white coral is hungry, yet not immediately dead.'
          },
          {
            id: 'cd_reading_m1_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'Roughly what fraction of human carbon dioxide emissions do Earth\'s oceans absorb?',
            correctAnswer: 'A QUARTER',
            explanation: 'Paragraph D states oceans absorb roughly a quarter of released carbon dioxide.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Saving Reefs With Science and Smarter Coast Care',
        subtitle: 'Why restoring baby corals works best alongside cleaner rivers and cooler seas',
        text: `Paragraph A: Marine biologists around Townsville and Cairns are not sitting idle while reefs struggle. During warm spring nights after a full moon, healthy corals release millions of pink egg and sperm bundles into quiet waters in a magical yearly spawning event. Conservation teams skim floating eggs gently off the surface using fine cloth nets, raise baby larvae safely inside cool floating pools, and guide young corals back onto damaged reef patches.

Paragraph B: Scientists are also testing ways to breed stronger heat-tolerant corals. Just as crop farmers select drought-resistant wheat seeds, reef researchers carefully crossbreed adult corals collected from naturally warmer shallow pools with colonies from cooler waters. Early indoor tank studies show some crossbred young corals survive two degrees higher water heat without losing their algae partners as quickly.

Paragraph C: On shore, Queensland farmers and city councils play a huge hidden role in coral health. Heavy tropical rainstorms can sweep muddy topsoil and farm nitrogen fertilizers down coastal rivers straight onto inner reefs. Cloudy muddy water blocks bright sunshine that coral algae need, while extra nutrients trigger outbreaks of coral-eating crown-of-thorns starfish. Planting grassy strips along riverbanks filters mud out early and keeps coastal sea water crystal clear.

Paragraph D: Still, reef scientists speak honestly about limits. Hand-planting baby corals can help rebuild popular dive bays and tourist gardens, yet human divers could never replant three thousand separate reefs by hand across two thousand kilometers of ocean. True long-term safety for the Great Barrier Reef depends on cutting global carbon emissions quickly while keeping local rivers clean and fishing rules fair.`,
        questions: [
          {
            id: 'cd_reading_m1_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Australian reef teams collect floating coral eggs after spring full-moon nights.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A explains corals spawn on warm spring nights after a full moon and conservation teams collect eggs with nets.'
          },
          {
            id: 'cd_reading_m1_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Scientists only use corals taken from deep icy seas when breeding heat-tolerant babies.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states researchers crossbreed adult corals from naturally warmer shallow pools with cooler-water colonies.'
          },
          {
            id: 'cd_reading_m1_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Muddy river water washing off farmland can harm coral reefs even miles offshore.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C shows muddy water blocks sunshine needed by algae and extra nutrients trigger starfish outbreaks.'
          },
          {
            id: 'cd_reading_m1_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Queensland banned all tourists from visiting Cairns diving boats in 2024.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs A and D mention Cairns and tourist gardens without mentioning any 2024 boat ban.'
          },
          {
            id: 'cd_reading_m1_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Grassy riverbank strips help stop muddy soil from clouding coastal seawater.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states planting grassy strips along riverbanks filters mud out early and keeps coastal water clear.'
          },
          {
            id: 'cd_reading_m1_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Human divers can easily replant the entire Great Barrier Reef by hand in ten years.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states human divers could never replant three thousand separate reefs by hand.'
          },
          {
            id: 'cd_reading_m1_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What problem does extra farm fertilizer washing down rivers trigger on inner reefs?',
            options: [
              'A. It turns pink coral eggs black overnight',
              'B. It freezes shallow waters near river mouths',
              'C. It sparks outbreaks of coral-eating starfish',
              'D. It breaks fiberglass tourist boats'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C states extra nutrients trigger outbreaks of coral-eating crown-of-thorns starfish.'
          },
          {
            id: 'cd_reading_m1_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why does Paragraph B compare coral scientists to crop farmers?',
            options: [
              'A. Both groups selectively breed stronger varieties able to handle tougher heat',
              'B. Both groups plow wet sand during full moons',
              'C. Both groups sell wheat seeds along Townsville streets',
              'D. Both groups depend on wooden fences to stop windstorms'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B compares selecting drought-resistant wheat seeds to breeding heat-tolerant adult corals.'
          },
          {
            id: 'cd_reading_m1_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'According to Paragraph D, what is the biggest requirement for protecting the whole reef long term?',
            options: [
              'A. Removing every sand island from northern beaches',
              'B. Keeping all baby corals permanently inside aquarium pools',
              'C. Planting underwater grass across three thousand kilometers of deep sea',
              'D. Cutting global carbon emissions alongside clean rivers and fair fishing rules'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D concludes long-term safety depends on cutting global carbon emissions quickly plus clean rivers and fair fishing rules.'
          },
          {
            id: 'cd_reading_m1_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Which statement best summarizes Passage 3?',
            options: [
              'A. Coral spawning happens only inside city aquariums',
              'B. Hand-replanting helps local reefs, yet global climate action and cleaner rivers remain essential',
              'C. Farm mud has no effect on coastal reefs',
              'D. Divers now prefer counting starfish rather than raising coral larvae'
            ],
            correctAnswer: 'B',
            explanation: 'Passage 3 covers larval seeding and breeding while emphasizing river care and global emission cuts.'
          },
          {
            id: 'cd_reading_m1_q37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Teams skim floating pink coral eggs gently using fine ______ nets.',
            correctAnswer: 'CLOTH',
            explanation: 'Paragraph A specifies fine cloth nets.'
          },
          {
            id: 'cd_reading_m1_q38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Crossbred baby corals in tank tests survived water up to ______ degrees warmer.',
            correctAnswer: 'TWO',
            explanation: 'Paragraph B states some crossbred young corals survive two degrees higher water heat.'
          },
          {
            id: 'cd_reading_m1_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Cloudy storm water blocks bright ______ required by coral algae.',
            correctAnswer: 'SUNSHINE',
            explanation: 'Paragraph C notes cloudy muddy water blocks bright sunshine.'
          },
          {
            id: 'cd_reading_m1_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'What is the full name of the coral-eating sea creature mentioned in Paragraph C?',
            correctAnswer: 'CROWN-OF-THORNS STARFISH',
            explanation: 'Paragraph C names coral-eating crown-of-thorns starfish.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 2 (EASY): cd_reading_m2 (Paleolithic Cave Art & Ochre Pigment Chronology)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m2',
    testNumber: 2,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 2: Paleolithic Cave Art & Ochre Pigment Chronology in Lascaux',
    description:
      'Beginner-friendly CD-IELTS Official Mock Reading test featuring 40 clear questions on the discovery of Lascaux Cave, Stone Age paint recipes, and protecting fragile cave walls.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Four Boys and a Hidden Underground Gallery',
        subtitle: 'The lucky 1940 discovery of prehistoric animal paintings in France',
        text: `Paragraph A: On a sunny afternoon in September 1940, four teenage boys walked through woods near the village of Montignac in southwestern France. According to local stories, their small dog chased a rabbit and disappeared into a narrow hole left beneath an uprooted pine tree. Curious to rescue their pet and search for old castle treasure, the boys widened the muddy opening and slid carefully down into a dark underground limestone chamber.

Paragraph B: Lighting a small smoky oil lamp, the teenagers gasped at what covered the smooth white cave ceiling. Hundreds of large red, yellow, and black paintings of wild bulls, running horses, deer, and bison filled the rock walls. Some bulls measured more than five meters long from horns to hooves. Realizing the pictures looked far older than medieval castles, the boys hurried back to inform their retired schoolteacher, Leon Laval, who soon contacted top French prehistorians.

Paragraph C: Careful study showed that Ice Age hunter-gatherers painted Lascaux Cave roughly seventeen thousand years ago during the late Stone Age. Remarkably, archaeologists did not find smoky campfire kitchens or sleeping beds inside the main painted halls. Instead, explorers found over one hundred tiny carved stone lamps filled with burned animal grease, suggesting visitors walked deep into the pitch-black hill specifically for special art gatherings rather than daily cooking.

Paragraph D: Notice too what Ice Age artists chose to paint—and what they left out. Almost two thousand animal figures cover Lascaux\'s walls, including stags swimming across rivers and horses leaping near wooden fences. Yet human portraits are almost totally missing, and artists practically never drew green trees, flowers, or mountain landscapes around the herds.`,
        questions: [
          {
            id: 'cd_reading_m2_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'The teenagers found the narrow cave opening beneath an uprooted ______ tree.',
            correctAnswer: 'PINE',
            explanation: 'Paragraph A states the narrow hole sat beneath an uprooted pine tree.'
          },
          {
            id: 'cd_reading_m2_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Some painted wild bulls on the ceiling measured over ______ meters in length.',
            correctAnswer: 'FIVE',
            explanation: 'Paragraph B notes some bulls measured more than five meters long.'
          },
          {
            id: 'cd_reading_m2_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Scientists date the Ice Age paintings at Lascaux to roughly ______ thousand years ago.',
            correctAnswer: 'SEVENTEEN',
            explanation: 'Paragraph C dates the paintings to roughly seventeen thousand years ago.'
          },
          {
            id: 'cd_reading_m2_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Tiny stone lamps found inside Lascaux burned animal ______ for light.',
            correctAnswer: 'GREASE',
            explanation: 'Paragraph C states explorers found tiny carved stone lamps filled with burned animal grease.'
          },
          {
            id: 'cd_reading_m2_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Roughly two ______ animal pictures cover the underground walls of Lascaux.',
            correctAnswer: 'THOUSAND',
            explanation: 'Paragraph D states almost two thousand animal figures cover Lascaux\'s walls.'
          },
          {
            id: 'cd_reading_m2_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Four teenagers discovered Lascaux Cave during September 1940.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A dates the boys\' discovery to September 1940.'
          },
          {
            id: 'cd_reading_m2_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Archaeologists found large everyday family kitchens inside Lascaux\'s main painted rooms.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C notes archaeologists did not find smoky campfire kitchens or sleeping beds inside the main painted halls.'
          },
          {
            id: 'cd_reading_m2_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Leon Laval was the mayor of Paris when the cave was opened.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B identifies Leon Laval as their retired schoolteacher, saying nothing about Paris.'
          },
          {
            id: 'cd_reading_m2_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Ice Age painters frequently decorated Lascaux\'s herds with bright green trees and flowers.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states artists practically never drew green trees, flowers, or mountain landscapes.'
          },
          {
            id: 'cd_reading_m2_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why did archaeologists think Lascaux was NOT an ordinary daily living home?',
            options: [
              'A. Only small rabbits could squeeze past the stone entrance',
              'B. Deep river water flooded every cave chamber every morning',
              'C. The main painted halls lacked everyday cooking fires and sleeping beds',
              'D. Written signs outside banned hunters from resting inside'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C cites the absence of smoky campfire kitchens and sleeping beds inside the main halls.'
          },
          {
            id: 'cd_reading_m2_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'Which animal subject is NOT mentioned as appearing inside Lascaux\'s paintings?',
            options: [
              'A. Wild bulls',
              'B. Arctic penguins',
              'C. Swimming stags',
              'D. Running horses'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraphs B and D list wild bulls, horses, deer, bison, and stags, never Arctic penguins.'
          },
          {
            id: 'cd_reading_m2_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Near which French village did the four boys find Lascaux Cave?',
            correctAnswer: 'MONTIGNAC',
            explanation: 'Paragraph A locates the woods near the village of Montignac.'
          },
          {
            id: 'cd_reading_m2_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Who did the boys hurry back to tell about the paintings?',
            correctAnswer: 'LEON LAVAL',
            explanation: 'Paragraph B states they informed their retired schoolteacher, Leon Laval.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: How Stone Age Painters Mixed Natural Colors',
        subtitle: 'Making durable mineral paints and checking their age safely',
        text: `Paragraph A: Modern painters buy bright tubes of paint in art stores, whereas Ice Age artists dug every single color straight from rocky earth. To make warm reds, oranges, and yellows, Lascaux artists gathered natural iron-rich clay minerals called ochre. By gently roasting yellow ochre pieces over a campfire, painters turned the yellow clay deep brick-red before grinding it into fine dust between heavy smooth stones.

Paragraph B: Black outlines came from two different sources: wood charcoal left inside cooled fires or dark black manganese rocks dug from nearby hills. Instead of mixing powder with tree oil, cave artists stirred mineral dust into clean cave drip water rich in calcium. Some painters used soft animal-hair brushes, while others blew watered-down red pigment through hollow bird bones directly onto the wall to coat broad areas smoothly—like early spray paint.

Paragraph C: Telling the exact age of an ancient cave painting is much harder than dating an old wooden spear. Carbon dating works on things that were once alive, such as wood charcoal or animal bones, because living plants absorb trace amounts of radioactive carbon. However, red ochre and black manganese are pure ground rocks that never lived, so normal carbon testing cannot read their age at all.

Paragraph D: Fortunately, thin rocky water crusts help scientists read cave timelines indirectly. Over thousands of years, slow dripping cave water leaves shiny white mineral layers called flowstone right across older paintings. Using careful laser tools, researchers date tiny grains locked inside the white stone covering a drawing—giving a safe minimum age for the artwork resting untouched underneath without scraping off a single speck of paint.`,
        questions: [
          {
            id: 'cd_reading_m2_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph explains why red ochre pigment cannot be tested directly with carbon dating?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C states red ochre and manganese are pure rocks that never lived, so normal carbon testing cannot date them.'
          },
          {
            id: 'cd_reading_m2_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph describes blowing liquid paint through hollow bird bones?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains artists blew watered-down red pigment through hollow bird bones like spray paint.'
          },
          {
            id: 'cd_reading_m2_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph describes heating yellow clay over fire to change its color to red?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A notes roasting yellow ochre pieces over a campfire turned the yellow clay deep brick-red.'
          },
          {
            id: 'cd_reading_m2_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph shows how white mineral drips let scientists date paintings without touching the paint?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains researchers date white flowstone layers covering a painting without scraping off paint.'
          },
          {
            id: 'cd_reading_m2_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Prehistoric painters ground iron-rich clay called ______ between smooth stones to create red and yellow paints.',
            correctAnswer: 'OCHRE',
            explanation: 'Paragraph A names iron-rich clay minerals called ochre.'
          },
          {
            id: 'cd_reading_m2_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Black outlines were made either from campfire ______ or dark manganese stones.',
            correctAnswer: 'CHARCOAL',
            explanation: 'Paragraph B specifies wood charcoal or dark black manganese rocks.'
          },
          {
            id: 'cd_reading_m2_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Scientists test mineral layers called ______ that slowly formed on top of ancient cave pictures.',
            correctAnswer: 'FLOWSTONE',
            explanation: 'Paragraph D refers to shiny white mineral layers called flowstone.'
          },
          {
            id: 'cd_reading_m2_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Using precision ______ tools lets researchers date thin stone crusts without harming artwork.',
            correctAnswer: 'LASER',
            explanation: 'Paragraph D mentions using careful laser tools to date tiny grains.'
          },
          {
            id: 'cd_reading_m2_q22',
            number: 22,
            type: 'true_false_not_given',
            questionText: 'Cave artists stirred powdered minerals into cave drip water rather than tree oil.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B confirms artists stirred mineral dust into clean cave drip water instead of tree oil.'
          },
          {
            id: 'cd_reading_m2_q23',
            number: 23,
            type: 'true_false_not_given',
            questionText: 'Carbon dating works accurately on all types of non-living rock pigments.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states carbon dating works on things once alive, not pure ground rocks.'
          },
          {
            id: 'cd_reading_m2_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'How did prehistoric artists create broad, smooth red backgrounds without modern sprayers?',
            options: [
              'A. By rubbing warm grass leaves across damp rocks',
              'B. By pouring buckets of red water down ceiling cracks',
              'C. By blowing watery red paint through hollow bird bones',
              'D. By stamping red clay pots across limestone roofs'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B describes blowing watered-down red pigment through hollow bird bones to coat broad areas smoothly.'
          },
          {
            id: 'cd_reading_m2_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'What does dating a white flowstone layer over a cave horse tell researchers?',
            options: [
              'A. That the painting underneath must be at least as old as the stone covering it',
              'B. The exact birthday of the painter',
              'C. How many animals lived outside Montignac woods',
              'D. Which bird bone brushed the red lines'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D notes dating white stone covering a drawing gives a safe minimum age for the artwork underneath.'
          },
          {
            id: 'cd_reading_m2_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'Which natural mineral was dissolved inside Lascaux\'s cave drip water?',
            correctAnswer: 'CALCIUM',
            explanation: 'Paragraph B states cave drip water was rich in calcium.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Closing the Real Cave and Building Exact Copies',
        subtitle: 'How crowds harmed Lascaux—and how digital models saved it for visitors',
        text: `Paragraph A: Soon after World War II ended, French authorities turned Lascaux Cave into a public museum. Electric lights warmed the dark halls, concrete stairs replaced slippery mud slopes, and by the late 1950s more than one thousand tourists squeezed through the narrow underground rooms every single day. For a decade, guides noticed no harm, and Lascaux became one of the proudest cultural sights in Europe.

Paragraph B: By 1962, however, serious trouble appeared across the ceilings. Each daily crowd of warm visitors breathed out damp moisture and carbon dioxide gas, while bright electric spotlights warmed stone walls smoothly enough for bright green algae and fuzzy white fungi to bloom directly over Ice Age bulls. Worse still, warm breath slowly began eating away the delicate rock skin. Realizing the paintings faced irreversible damage, the French government closed Lascaux Cave permanently to tourists in 1963.

Paragraph C: Closing the real cave saved the art, yet left millions of eager students and travelers disappointed. Rather than locking history away unseen, craftspeople and scientists built Lascaux II—a full-scale concrete replica standing two hundred meters away from the real hillside cave—followed later by Lascaux IV in 2016. Using millimeter-accurate 3D laser scans, modern painters matched every single crack, rock bump, and mineral paint line cleanly with natural ochre and charcoal.

Paragraph D: Inside Lascaux IV today, cool gallery halls welcome hundreds of thousands of curious guests every year while the real original cave rests quietly sealed in dark protection nearby. Caretakers monitor temperature and air moisture remotely using sensors, showing how smart replica museums let the public enjoy fragile treasures safely without damaging ancient heritage.`,
        questions: [
          {
            id: 'cd_reading_m2_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Over a thousand visitors per day toured the real Lascaux Cave by the late 1950s.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A confirms more than one thousand tourists squeezed through daily by the late 1950s.'
          },
          {
            id: 'cd_reading_m2_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Bright electric lamps and tourist breath helped green algae grow on the cave art.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B notes visitor moisture, carbon dioxide, and bright spotlights caused green algae and white fungi to bloom over the bulls.'
          },
          {
            id: 'cd_reading_m2_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'France reopened the original Lascaux Cave to daily tourist buses in 2016.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B and D explain the original cave closed permanently in 1963 and rests quietly sealed while tourists visit Lascaux IV.'
          },
          {
            id: 'cd_reading_m2_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Modern painters at Lascaux II charged visitors twenty euros per paper ticket.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs C and D describe building Lascaux II and IV, with no mention of ticket prices.'
          },
          {
            id: 'cd_reading_m2_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: '3D laser scanning helped craftspeople copy exact rock shapes inside the modern cave copies.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states millimeter-accurate 3D laser scans helped copy every crack, rock bump, and paint line.'
          },
          {
            id: 'cd_reading_m2_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Modern painters used bright plastic acrylic paints instead of natural ochre inside the replica caves.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C states modern painters matched lines cleanly with natural ochre and charcoal.'
          },
          {
            id: 'cd_reading_m2_q33',
            number: 33,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Opening the cave smoothly to large tourist crowds',
              'ii. Building faithful full-size copies for future visitors',
              'iii. Protecting the silent original cave while welcoming guests nearby',
              'iv. How damp visitor breath and warm spotlights threatened the art',
              'v. Moving Lascaux boulders to Paris by train'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A describes converting Lascaux into a popular public museum after World War II.'
          },
          {
            id: 'cd_reading_m2_q34',
            number: 34,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Opening the cave smoothly to large tourist crowds',
              'ii. Building faithful full-size copies for future visitors',
              'iii. Protecting the silent original cave while welcoming guests nearby',
              'iv. How damp visitor breath and warm spotlights threatened the art',
              'v. Washing cave bulls clean using soap brushes'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B explains how moisture, carbon dioxide, lights, algae, and fungi forced France to close Lascaux in 1963.'
          },
          {
            id: 'cd_reading_m2_q35',
            number: 35,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Opening the cave smoothly to large tourist crowds',
              'ii. Building faithful full-size copies for future visitors',
              'iii. Protecting the silent original cave while welcoming guests nearby',
              'iv. How damp visitor breath and warm spotlights threatened the art',
              'v. Painting wooden schools near Montignac hills'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph C covers constructing accurate replicas Lascaux II and Lascaux IV using 3D scans and natural pigments.'
          },
          {
            id: 'cd_reading_m2_q36',
            number: 36,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Opening the cave smoothly to large tourist crowds',
              'ii. Building faithful full-size copies for future visitors',
              'iii. Protecting the silent original cave while welcoming guests nearby',
              'iv. How damp visitor breath and warm spotlights threatened the art',
              'v. Selling old spotlights from 1963 online'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D highlights how sensor monitoring guards the original cave while replicas satisfy public curiosity.'
          },
          {
            id: 'cd_reading_m2_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did France close Lascaux Cave permanently in 1963?',
            options: [
              'A. An earthquake blocked the concrete steps',
              'B. Heavy winter snow filled the entrance with ice',
              'C. Local schoolteachers protested against foreign visitors',
              'D. Crowds and lights were encouraging destructive fungi and damaging rock surfaces'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B links closure directly to moisture, carbon dioxide, spotlights, algae, fungi, and rock skin damage.'
          },
          {
            id: 'cd_reading_m2_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How far from the real cave did builders place Lascaux II?',
            options: [
              'A. Two hundred kilometers away in Paris',
              'B. Two hundred meters away',
              'C. Two kilometers beneath the river',
              'D. Two thousand meters higher up the mountain'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C specifies Lascaux II stands two hundred meters away from the real hillside cave.'
          },
          {
            id: 'cd_reading_m2_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Inside the sealed real cave, caretakers track temperature and moisture remotely using ______.',
            correctAnswer: 'SENSORS',
            explanation: 'Paragraph D states caretakers monitor temperature and air moisture remotely using sensors.'
          },
          {
            id: 'cd_reading_m2_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'In what year did Lascaux IV open to showcase 3D-scanned replicas?',
            correctAnswer: '2016',
            explanation: 'Paragraph C dates Lascaux IV to 2016.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 3 (EASY): cd_reading_m3 (Stratospheric Ozone Depletion & Montreal Protocol)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m3',
    testNumber: 3,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 3: Stratospheric Ozone Depletion and Montreal Protocol Chemistry',
    description:
      'Beginner-friendly CD-IELTS Official Mock Reading test featuring 40 clear questions on Earth\'s ozone sunshield, CFC spray cans, the Antarctic hole, and the Montreal Protocol.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Earth\'s Invisible Sunscreen High Above the Clouds',
        subtitle: 'How helpful refrigerator chemicals accidentally harmed the upper sky',
        text: `Paragraph A: About twenty-five kilometers above Earth\'s surface lies a thin layer of gas called the ozone layer. Ordinary oxygen gas that people breathe has two oxygen atoms joined together, whereas ozone molecules hold three oxygen atoms. Even though this layer would be thinner than a coin if squashed down to ground level, upper-sky ozone plays a vital protective role: it absorbs harsh ultraviolet (UV) sunlight before those burning rays reach crops, ocean plankton, and human skin.

Paragraph B: Back in 1928, industrial chemists cheered the invention of new man-made gases called chlorofluorocarbons, or CFCs for short. Earlier home refrigerators used smelly, poisonous, or explosive cooling liquids that sometimes leaked in kitchens. By contrast, CFCs could not catch fire, stayed completely odorless, and felt harmless to breathe. Factories quickly put CFC gases into millions of refrigerators, car air conditioners, foam food cups, and aerosol hairspray cans worldwide.

Paragraph C: Unfortunately, the exact quality that made CFCs safe in kitchens turned dangerous high overhead. Because CFC gases refused to react with rain or lower-sky oxygen, escaping gas from broken fridges floated steadily upward for years into the cold stratosphere. High above clouds, raw solar ultraviolet rays smashed CFC molecules open, breaking loose single chlorine atoms.

Paragraph D: In 1974, chemists Mario Molina and Sherwood Rowland shocked the world with a bold warning. One freed chlorine atom floating in the upper sky acts like a restless destroyer, breaking up tens of thousands of protective ozone molecules before falling out years later. Their study earned them the Nobel Prize and began an urgent global search for cleaner cooling gases.`,
        questions: [
          {
            id: 'cd_reading_m3_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'An ozone molecule contains three oxygen atoms rather than two.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes ordinary oxygen has two atoms whereas ozone molecules hold three oxygen atoms.'
          },
          {
            id: 'cd_reading_m3_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'CFC gases quickly caught fire when used inside home refrigerators.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states CFCs could not catch fire, stayed odorless, and replaced dangerous earlier liquids.'
          },
          {
            id: 'cd_reading_m3_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Rainstorms easily washed escaping CFC gas back down to the ground before it climbed high.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states CFCs refused to react with rain or lower-sky oxygen and floated steadily upward.'
          },
          {
            id: 'cd_reading_m3_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Mario Molina worked at a refrigerator repair workshop in Chicago during 1974.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D names chemists Mario Molina and Sherwood Rowland without mentioning Chicago or a repair shop.'
          },
          {
            id: 'cd_reading_m3_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'A single chlorine atom high in the sky can destroy tens of thousands of ozone molecules.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states one freed chlorine atom breaks up tens of thousands of protective ozone molecules.'
          },
          {
            id: 'cd_reading_m3_q6',
            number: 6,
            type: 'fill_blank',
            questionText: 'The protective ozone layer sits roughly ______-five kilometers above Earth\'s surface.',
            correctAnswer: 'TWENTY',
            explanation: 'Paragraph A states the ozone layer lies about twenty-five kilometers above Earth.'
          },
          {
            id: 'cd_reading_m3_q7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Ozone acts as a natural shield blocking harsh ______ sunlight from harming skin and crops.',
            correctAnswer: 'ULTRAVIOLET',
            explanation: 'Paragraph A explains ozone absorbs harsh ultraviolet (UV) sunlight.'
          },
          {
            id: 'cd_reading_m3_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Chemists invented helpful cooling gases known as CFCs back in the year ______.',
            correctAnswer: '1928',
            explanation: 'Paragraph B dates the invention of CFCs to 1928.'
          },
          {
            id: 'cd_reading_m3_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'High above clouds, strong solar rays break CFCs apart and release ______ atoms.',
            correctAnswer: 'CHLORINE',
            explanation: 'Paragraph C states raw solar rays smash CFCs open, breaking loose single chlorine atoms.'
          },
          {
            id: 'cd_reading_m3_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why did factories eagerly put CFCs into fridges and spray cans after 1928?',
            options: [
              'A. CFCs smelled strongly like fresh pine trees',
              'B. CFCs were fireproof, odorless, and did not poison people indoors',
              'C. CFCs cooled ice blocks ten times faster without electricity',
              'D. CFCs helped repair old copper hairspray valves'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B highlights that unlike earlier cooling liquids, CFCs did not catch fire, smelled of nothing, and felt safe indoors.'
          },
          {
            id: 'cd_reading_m3_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'What prize did Mario Molina and Sherwood Rowland later receive for their 1974 warning?',
            options: [
              'A. A clean-air medal from car makers',
              'B. A European refrigerator design award',
              'C. The Nobel Prize',
              'D. An Antarctic flying trophy'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states their study earned them the Nobel Prize.'
          },
          {
            id: 'cd_reading_m3_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which everyday foam products used CFC gases alongside refrigerators and spray cans?',
            correctAnswer: 'FOOD CUPS',
            explanation: 'Paragraph B lists refrigerators, car air conditioners, foam food cups, and aerosol hairspray cans.'
          },
          {
            id: 'cd_reading_m3_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'If pushed together down at ground level, what small object would the whole ozone layer be thinner than?',
            correctAnswer: 'A COIN',
            explanation: 'Paragraph A notes the layer would be thinner than a coin if squashed down to ground level.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Discovering the Surprising Springtime Hole Over Antarctica',
        subtitle: 'Why icy polar clouds sped up ozone loss above frozen ground',
        text: `Paragraph A: Even after Molina and Rowland published their paper in 1974, some chemical companies doubted real damage would happen soon. Ten years later, British scientist Joe Farman and his team at Halley Bay station in Antarctica checked daily sky measurements recorded by an old ground instrument. Expecting routine seasonal numbers, the researchers stared in disbelief: every southern spring between September and November, almost half the protective ozone layer over Antarctica was vanishing cleanly within weeks.

Paragraph B: At first, Farman worried his old sky meter had broken in the polar frost, so his team replaced the machine and re-checked every measurement by hand. When the new instrument reported the exact same plunge in 1985, NASA satellite teams checked their own computers. Shockingly, satellite cameras had also seen the giant thinning patch, yet automated computer filters had automatically thrown away the weird low readings thinking they were machine errors!

Paragraph C: Why did severe ozone thinning strike far above frozen Antarctica rather than directly over noisy northern factories? Researchers soon traced the culprit to freezing winter winds swirling in a giant circular ring around the South Pole. Inside that bitter cold sky—dropping below minus eighty degrees Celsius—tiny frozen ice clouds formed high above normal weather.

Paragraph D: Those sparkling frozen ice clouds acted like tiny chemical workbenches. Ordinarily quiet chlorine gases stuck onto freezing ice crystal surfaces throughout the dark polar winter. The moment bright spring sunshine returned in September, sunlight triggered fast reactions across those crystals, unleashing massive bursts of active chlorine that carved a continent-sized thin spot—popularly named the Ozone Hole.`,
        questions: [
          {
            id: 'cd_reading_m3_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why computer checks hid satellite proof at first',
              'ii. Shocking ground measurements in Antarctica\'s spring',
              'iii. Freezing winter ice clouds acting as chemical triggers',
              'iv. Building warmer weather planes near Halley Bay',
              'v. Swirling south polar winds trapping extreme cold'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph A describes Joe Farman discovering half of Antarctica\'s spring ozone disappearing at Halley Bay.'
          },
          {
            id: 'cd_reading_m3_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why computer checks hid satellite proof at first',
              'ii. Shocking ground measurements in Antarctica\'s spring',
              'iii. Freezing winter ice clouds acting as chemical triggers',
              'iv. Replacing old refrigerators in London offices',
              'v. Swirling south polar winds trapping extreme cold'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph B explains how Farman checked his device and why NASA software discarded low satellite readings.'
          },
          {
            id: 'cd_reading_m3_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why computer checks hid satellite proof at first',
              'ii. Shocking ground measurements in Antarctica\'s spring',
              'iii. Freezing winter ice clouds acting as chemical triggers',
              'iv. Selling clean ground meters to NASA engineers',
              'v. Swirling south polar winds trapping extreme cold'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C points to freezing circular winds forming ultra-cold ice clouds above the South Pole.'
          },
          {
            id: 'cd_reading_m3_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why computer checks hid satellite proof at first',
              'ii. Shocking ground measurements in Antarctica\'s spring',
              'iii. Freezing winter ice clouds acting as chemical triggers',
              'iv. Measuring winter rainfall along European coasts',
              'v. Swirling south polar winds trapping extreme cold'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains how ice clouds acted as chemical workbenches once spring sunshine arrived.'
          },
          {
            id: 'cd_reading_m3_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'At ______ Bay station, Joe Farman noticed half the spring ozone layer disappearing.',
            correctAnswer: 'HALLEY',
            explanation: 'Paragraph A names Halley Bay station in Antarctica.'
          },
          {
            id: 'cd_reading_m3_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Automated ______ computer filters ignored low ozone readings as machine mistakes.',
            correctAnswer: 'NASA',
            explanation: 'Paragraph B notes NASA satellite computers threw away weird low readings.'
          },
          {
            id: 'cd_reading_m3_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Circular polar winds cooled the high sky below minus ______ degrees Celsius.',
            correctAnswer: 'EIGHTY',
            explanation: 'Paragraph C states temperatures dropped below minus eighty degrees Celsius.'
          },
          {
            id: 'cd_reading_m3_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'In September, returning ______ sparked rapid chlorine reactions upon frozen cloud crystals.',
            correctAnswer: 'SUNSHINE',
            explanation: 'Paragraph D states bright spring sunshine triggered fast reactions in September.'
          },
          {
            id: 'cd_reading_m3_q22',
            number: 22,
            type: 'multiple_choice',
            questionText: 'Why did Joe Farman replace his sky instrument before trusting the crazy readings?',
            options: [
              'A. He worried the old machine might simply have broken in the polar cold',
              'B. Penguins knocked over his wooden table',
              'C. NASA ordered British teams to ship machines home',
              'D. Heavy summer clouds blocked satellite views'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B states Farman worried his old sky meter had broken in the polar frost.'
          },
          {
            id: 'cd_reading_m3_q23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did NASA satellites miss reporting the ozone thinning before 1985?',
            options: [
              'A. Their cameras only filmed northern cities',
              'B. Satellites had run out of solar battery power',
              'C. Polar windstorms blew clouds over the lenses',
              'D. Computer filters automatically discarded unusually low values as errors'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B explains automated computer filters threw away weird low readings assuming machine errors.'
          },
          {
            id: 'cd_reading_m3_q24',
            number: 24,
            type: 'true_false_not_given',
            questionText: 'Antarctic ozone loss was strongest during the southern spring months of September to November.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states ozone vanished cleanly every southern spring between September and November.'
          },
          {
            id: 'cd_reading_m3_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Frozen polar ice clouds acted passively and slowed down chlorine chemical reactions.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D explains ice clouds acted like chemical workbenches unleashing massive bursts of active chlorine.'
          },
          {
            id: 'cd_reading_m3_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'In which year did Farman\'s new instrument confirm the shocking ozone plunge?',
            correctAnswer: '1985',
            explanation: 'Paragraph B dates the confirmation to 1985.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: How the World Worked Together to Heal the Sky',
        subtitle: 'Why the 1987 Montreal Protocol succeeded where many treaties fail',
        text: `Paragraph A: Once undeniable measurements from Antarctica proved the ozone shield was thinning fast, world leaders acted with unusual speed. In September 1987, diplomats from twenty-four countries met in Canada to sign the Montreal Protocol. Under this historic agreement, nations promised to cut production of ozone-harming CFCs step by step and eventually stop making them altogether. Eventually, every single country on Earth signed the treaty.

Paragraph B: Three practical features helped the Montreal Protocol succeed smoothly. First, major chemical makers quickly invented safe replacement gases—meaning companies did not lose customers when switching refrigerator factories away from CFCs. Second, the treaty kept a flexible scientific rule: as sky measurements got sharper, nations updated their deadlines quickly to ban harmful chemicals even earlier.

Paragraph C: Third, rich nations created a special shared cash fund to help developing countries buy newer factory equipment so nobody got left behind financially. Even better, scientists soon realized stopping CFCs helped global temperatures too, because CFCs also trap large amounts of heat like strong greenhouse gases.

Paragraph D: Because upper-sky CFC molecules break down very slowly, healing Earth\'s sky takes patience. Still, modern satellite records bring cheerful news: chlorine levels in the high stratosphere peaked around 2000 and are slowly dropping every decade. If nations keep obeying the treaty, scientists expect the Antarctic Ozone Hole to close almost completely around the 2060s—proving that global teamwork can solve even planetary environmental crises.`,
        questions: [
          {
            id: 'cd_reading_m3_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Every nation in the world eventually joined the Montreal Protocol.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states every single country on Earth eventually signed the treaty.'
          },
          {
            id: 'cd_reading_m3_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Chemical manufacturers failed to invent any substitutes for CFC cooling gases.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B explains major chemical makers quickly invented safe replacement gases.'
          },
          {
            id: 'cd_reading_m3_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Developing countries received financial support through a shared fund to upgrade factories.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states rich nations created a shared cash fund to help developing countries buy newer equipment.'
          },
          {
            id: 'cd_reading_m3_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Canada paid double the treaty fee compared with European countries in 1990.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs A and C mention signing in Canada and the cash fund, with no mention of 1990 contribution splits.'
          },
          {
            id: 'cd_reading_m3_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Banning CFCs helped slow global warming as well as protecting the ozone shield.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C notes stopping CFCs helped global temperatures because CFCs also act like strong greenhouse gases.'
          },
          {
            id: 'cd_reading_m3_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Scientists expect the Antarctic Ozone Hole to heal completely by next summer.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D notes healing takes patience and scientists expect the hole to close almost completely around the 2060s.'
          },
          {
            id: 'cd_reading_m3_q33',
            number: 33,
            type: 'matching_information',
            questionText: 'Which paragraph mentions how many countries first signed the Montreal agreement in 1987?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A states diplomats from twenty-four countries signed the Montreal Protocol in 1987.'
          },
          {
            id: 'cd_reading_m3_q34',
            number: 34,
            type: 'matching_information',
            questionText: 'Which paragraph notes the peak year when stratospheric chlorine began slowly declining?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'D',
            explanation: 'Paragraph D states chlorine levels peaked around 2000 and are slowly dropping.'
          },
          {
            id: 'cd_reading_m3_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'Why did the Montreal Protocol allow countries to speed up chemical bans over time?',
            options: [
              'A. Old fridge shops closed permanently after 1987',
              'B. It included flexible scientific rules that updated deadlines as data grew clearer',
              'C. Satellite teams stopped measuring northern factories',
              'D. Spray cans became too expensive to ship across oceans'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B highlights the flexible scientific rule allowing nations to update deadlines earlier.'
          },
          {
            id: 'cd_reading_m3_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why does the Antarctic Ozone Hole need several decades to disappear completely?',
            options: [
              'A. Winter penguins keep breaking polar cloud meters',
              'B. Modern airplanes burn extra oxygen near Antarctica',
              'C. Ocean water creates fresh CFCs every winter',
              'D. Upper-sky CFC molecules break down very slowly'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains healing takes patience because upper-sky CFC molecules break down very slowly.'
          },
          {
            id: 'cd_reading_m3_q37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Diplomats met in ______ in September 1987 to sign the historic ozone treaty.',
            correctAnswer: 'CANADA',
            explanation: 'Paragraph A states diplomats met in Canada.'
          },
          {
            id: 'cd_reading_m3_q38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Chlorine levels high in the stratosphere reached their highest point around the year ______.',
            correctAnswer: '2000',
            explanation: 'Paragraph D notes chlorine levels peaked around 2000.'
          },
          {
            id: 'cd_reading_m3_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Experts predict the Antarctic Ozone Hole should almost close during the ______.',
            correctAnswer: '2060S',
            explanation: 'Paragraph D projects closure around the 2060s.'
          },
          {
            id: 'cd_reading_m3_q40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What encouraging lesson does the author draw at the end of Passage 3?',
            options: [
              'A. Global teamwork can successfully repair serious planetary damage',
              'B. Only rich nations should measure sky chemistry',
              'C. Refrigerators must never use cooling gases again',
              'D. Antarctica will remain snow-free by 2060'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D concludes the treaty proves global teamwork can solve even planetary environmental crises.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 4 (EASY): cd_reading_m4 (Ancient Indus Valley Water Cities)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m4',
    testNumber: 4,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 4: Ancient Indus Valley Water Harvesting and Sanitary Urbanism',
    description:
      'Beginner-friendly CD-IELTS Official Mock Reading test featuring 40 clear questions on brick wells in Mohenjo-daro, desert reservoirs in Dholavira, and shifting Bronze Age rivers.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Brick Wells and Street Drains of Mohenjo-daro',
        subtitle: 'Clean city water inside a four-thousand-year-old neighborhood',
        text: `Paragraph A: Over four thousand five hundred years ago, long before Rome built its stone aqueducts, people of the Indus Valley Civilization built tidy, well-planned cities across modern-day Pakistan and northwestern India. The famous city of Mohenjo-daro housed nearly forty thousand residents along straight brick streets arranged neatly like a modern city map. Unlike ancient towns made of fragile mud tents, Mohenjo-daro builders used millions of uniform oven-baked clay bricks that resisted floods and daily wear.

Paragraph B: Clean drinking water stood at the heart of Mohenjo-daro's street design. Archaeologists digging through the city have counted more than seven hundred deep circular brick wells—an astonishing number giving almost every block easy walking access to fresh groundwater. Builders used clever wedge-shaped bricks shaped like slices of pie so well walls locked tightly together like stone rings without collapsing into wet sand.

Paragraph C: Even more remarkable were Mohenjo-daro's indoor bathrooms. Nearly every average two-room brick house contained a sloped, waterproof tiled bathing floor connected cleanly to an outside wall drain. Residents poured bucketfuls of fresh well water over themselves, letting dirty bathwater flow cleanly down terracotta wall pipes into covered brick gutters running neatly beneath street sidewalks.

Paragraph D: City caretakers kept those street drains from clogging with smart engineering details. Covered gutters met small square brick catch-pits along corners where heavy sand and leaves sank safely to the bottom, letting clearer water flow onward out of town toward open fields. Workers could easily lift heavy stone lids over the catch-pits to scoop out trapped mud—making Mohenjo-daro one of history's cleanest early cities.`,
        questions: [
          {
            id: 'cd_reading_m4_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'The ancient city of Mohenjo-daro held roughly ______ thousand residents.',
            correctAnswer: 'FORTY',
            explanation: 'Paragraph A states Mohenjo-daro housed nearly forty thousand residents.'
          },
          {
            id: 'cd_reading_m4_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Builders used uniform oven-baked clay ______ to construct sturdy city streets and houses.',
            correctAnswer: 'BRICKS',
            explanation: 'Paragraph A notes builders used millions of uniform oven-baked clay bricks.'
          },
          {
            id: 'cd_reading_m4_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Mohenjo-daro contained over seven hundred circular wells providing fresh ______.',
            correctAnswer: 'GROUNDWATER',
            explanation: 'Paragraph B states wells gave nearly every block access to fresh groundwater.'
          },
          {
            id: 'cd_reading_m4_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Dirty household bathwater moved down ______ wall pipes into street gutters.',
            correctAnswer: 'TERRACOTTA',
            explanation: 'Paragraph C states dirty bathwater flowed down terracotta wall pipes.'
          },
          {
            id: 'cd_reading_m4_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Workers lifted heavy ______ lids along street corners to clean mud out of catch-pits.',
            correctAnswer: 'STONE',
            explanation: 'Paragraph D says workers could lift heavy stone lids over catch-pits.'
          },
          {
            id: 'cd_reading_m4_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Indus Valley cities were built earlier than Roman stone aqueducts.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A opens by stating Indus people built cities over 4,500 years ago, long before Rome built aqueducts.'
          },
          {
            id: 'cd_reading_m4_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Only royal palace owners in Mohenjo-daro had tiled bathing floors.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C explicitly states nearly every average two-room brick house contained a waterproof tiled bathing floor.'
          },
          {
            id: 'cd_reading_m4_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Mohenjo-daro builders exported wedge-shaped well bricks to Egyptian cities by ship.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B describes wedge-shaped bricks for local wells with no mention of exporting them to Egypt.'
          },
          {
            id: 'cd_reading_m4_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Street gutters in Mohenjo-daro were left completely uncovered beside houses.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C and D refer to covered brick gutters running neatly beneath street sidewalks.'
          },
          {
            id: 'cd_reading_m4_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why did well builders make special wedge-shaped bricks shaped like slices of pie?',
            options: [
              'A. They were cheaper to paint bright red',
              'B. They held twice as much rainwater on flat rooftops',
              'C. They locked tightly into circular rings so walls would not cave into wet sand',
              'D. They prevented children from climbing down ladders'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B explains wedge-shaped bricks locked tightly together like stone rings without collapsing into wet sand.'
          },
          {
            id: 'cd_reading_m4_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'What purpose did square catch-pits along street corners serve?',
            options: [
              'A. They filtered heavy sand and leaves out so gutters stayed clear',
              'B. They stored extra rainwater for cooking bread',
              'C. They cooled warm well water during dry summers',
              'D. They guided donkey carts around straight intersections'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states heavy sand and leaves sank to the bottom of catch-pits so clearer water flowed onward without clogging.'
          },
          {
            id: 'cd_reading_m4_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'How many modern countries share the core lands of Pakistan and northwestern India described in Paragraph A?',
            correctAnswer: 'TWO',
            explanation: 'Paragraph A names modern-day Pakistan and northwestern India (two countries).'
          },
          {
            id: 'cd_reading_m4_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Under which part of Mohenjo-daro streets did covered brick gutters run?',
            correctAnswer: 'SIDEWALKS',
            explanation: 'Paragraph C specifies covered brick gutters running neatly beneath street sidewalks.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Saving Monsoon Rain in Desert Dholavira',
        subtitle: 'Giant stone tanks built on a dry island along India\'s western coast',
        text: `Paragraph A: While Mohenjo-daro sat beside a giant river plain rich in groundwater, not every Indus city enjoyed easy river access. Further south, in Gujarat's salty desert plains, lies the ancient island city of Dholavira. Here, summers stayed blisteringly dry for nine months of every year, and shallow underground wells quickly turned too salty to drink. To survive, Dholavira's engineers turned their whole town into a giant rainwater collector.

Paragraph B: Every July and August, short intense monsoon storms swept across the dry island, dumping heavy rain onto nearby hills before running down two seasonal dry streambeds flanking the city walls. Builders constructed strong stone dams across both rocky streams to slow rushing floodwater down safely. Channel gates then directed muddy monsoon torrents along stone ditches straight into massive storage tanks wrapping nearly one-third of the city.

Paragraph C: Archaeologists uncovered sixteen huge rectangular reservoirs in Dholavira—several carved cleanly straight out of solid bedrock using copper chisels and stone hammers! The largest single stone tank stretched nearly seventy-three meters long and held enough fresh rain to supply thousands of households through long rainless seasons. Smooth stone steps ran down the tank walls so residents could walk down safely to fill clay water jars as water levels dropped.

Paragraph D: Cleverly, Dholavira engineers even placed small settling basins right before the main stone tanks. Heavy desert sand dropped to the bottom in the first quiet pool, allowing cleaner rain water to spill gently over a low wall into the primary drinking reservoirs—giving an island desert town fresh water year-round.`,
        questions: [
          {
            id: 'cd_reading_m4_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why Dholavira could not rely on salty underground wells',
              'ii. Carving giant water steps straight into solid rock',
              'iii. Letting sand settle cleanly before water entered drinking tanks',
              'iv. Catching brief July and August monsoon floods with dams',
              'v. Sailing salt boats between Dholavira and Rome'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A contrasts Mohenjo-daro\'s river wells against Dholavira\'s dry climate and salty wells.'
          },
          {
            id: 'cd_reading_m4_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why Dholavira could not rely on salty underground wells',
              'ii. Carving giant water steps straight into solid rock',
              'iii. Letting sand settle cleanly before water entered drinking tanks',
              'iv. Catching brief July and August monsoon floods with dams',
              'v. Digging deeper desert oil wells along coastal hills'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B describes damming two seasonal streambeds during July and August monsoons.'
          },
          {
            id: 'cd_reading_m4_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why Dholavira could not rely on salty underground wells',
              'ii. Carving giant water steps straight into solid rock',
              'iii. Letting sand settle cleanly before water entered drinking tanks',
              'iv. Catching brief July and August monsoon floods with dams',
              'v. Covering city roofs with clay pottery jars'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph C details sixteen bedrock-carved reservoirs, stone steps, and the 73-meter tank.'
          },
          {
            id: 'cd_reading_m4_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why Dholavira could not rely on salty underground wells',
              'ii. Carving giant water steps straight into solid rock',
              'iii. Letting sand settle cleanly before water entered drinking tanks',
              'iv. Catching brief July and August monsoon floods with dams',
              'v. Painting copper tools bright blue every spring'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains how settling basins trapped heavy desert sand before water entered drinking reservoirs.'
          },
          {
            id: 'cd_reading_m4_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'In Gujarat\'s salty plains, Dholavira experienced dry conditions for ______ months each year.',
            correctAnswer: 'NINE',
            explanation: 'Paragraph A notes summers stayed dry for nine months of every year.'
          },
          {
            id: 'cd_reading_m4_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Carved storage tanks took up almost one-______ of Dholavira\'s walled city area.',
            correctAnswer: 'THIRD',
            explanation: 'Paragraph B states tanks wrapped nearly one-third of the city.'
          },
          {
            id: 'cd_reading_m4_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Ancient stonecutters carved rectangular tanks straight out of solid bedrock using ______ chisels.',
            correctAnswer: 'COPPER',
            explanation: 'Paragraph C states workers used copper chisels and stone hammers.'
          },
          {
            id: 'cd_reading_m4_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Smooth stone ______ allowed residents to reach lower water levels safely with clay jars.',
            correctAnswer: 'STEPS',
            explanation: 'Paragraph C notes smooth stone steps ran down the tank walls.'
          },
          {
            id: 'cd_reading_m4_q22',
            number: 22,
            type: 'true_false_not_given',
            questionText: 'Dholavira builders ignored seasonal floodwater and depended solely on shallow salty wells.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraphs A and B show wells turned salty so engineers built dams and channels to catch monsoon floodwater.'
          },
          {
            id: 'cd_reading_m4_q23',
            number: 23,
            type: 'true_false_not_given',
            questionText: 'Archaeologists found sixteen giant rectangular water tanks inside Dholavira.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C confirms archaeologists uncovered sixteen huge rectangular reservoirs in Dholavira.'
          },
          {
            id: 'cd_reading_m4_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'How did settling basins keep drinking water cleaner inside Dholavira\'s big stone reservoirs?',
            options: [
              'A. Boiling sun rays turned seawater into salt blocks',
              'B. Wooden lids kept summer dust out of mountain streams',
              'C. Green river plants trapped floating copper chips',
              'D. Quiet first pools let heavy sand sink before clearer water spilled into main tanks'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D states heavy sand dropped to the bottom in the first quiet pool so cleaner water spilled over into main tanks.'
          },
          {
            id: 'cd_reading_m4_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'How long was the single largest rock-cut storage tank discovered in Dholavira?',
            options: [
              'A. Sixteen meters',
              'B. Nearly seventy-three meters',
              'C. Thirty meters',
              'D. Five hundred meters'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C notes the largest single tank stretched nearly seventy-three meters long.'
          },
          {
            id: 'cd_reading_m4_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'Which two summer months brought intense monsoon storms to Dholavira?',
            correctAnswer: 'JULY AND AUGUST',
            explanation: 'Paragraph B states intense monsoon storms swept across the island every July and August.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Why Great Brick Cities Slowly Emptied',
        subtitle: 'New climate clues replace old stories of sudden war',
        text: `Paragraph A: Around 1900 BCE, after thriving peacefully for over seven centuries, large Indus Valley cities such as Mohenjo-daro and Harappa slowly stopped repairing their famous brick drains. Fewer fine stone seals were carved, long-distance trade boats stopped sailing to Mesopotamia, and families gradually packed up and walked eastward toward smaller farming villages along the Ganges river plains.

Paragraph B: For decades, early twentieth-century textbooks blamed sudden violent wars for the fall of Mohenjo-daro. However, modern excavations overturned that dramatic theory. Archaeologists found no ruined fortress walls crushed by battering rams, no burned royal palaces, and almost no warrior weapons inside city rubble. Instead, buildings simply grew crowded and crumbly over several slow generations.

Paragraph C: Today, earth scientists reading ancient lake mud and dried riverbeds point to shifting weather and wandering rivers. Satellite photos reveal traces of a huge ancient river network that dried gradually as monsoon summer rains weakened for two centuries across northwestern India and Pakistan. When reliable summer floods faded away, sandy river channels shifted sideways, drying out farmlands that once fed forty thousand city dwellers.

Paragraph D: Notice that the Indus people themselves did not vanish overnight; they adapted wisely to changing water supplies. Leaving huge brick cities that needed abundant river grain, farming families planted tougher dry-weather millet crops across smaller northern villages—reminding modern planners how strongly even great cities depend on steady water and predictable rains.`,
        questions: [
          {
            id: 'cd_reading_m4_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Indus cities thrived for more than seven hundred years before declining around 1900 BCE.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A says cities thrived peacefully for over seven centuries before changing around 1900 BCE.'
          },
          {
            id: 'cd_reading_m4_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Modern excavations found hundreds of burned war palaces and broken weapons across Mohenjo-daro.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B clearly states archaeologists found no burned royal palaces, crushed fortress walls, or warrior weapons.'
          },
          {
            id: 'cd_reading_m4_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Satellite pictures show old riverbeds that shifted and dried up as monsoon rains weakened.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states satellite photos reveal traces of a huge river network drying as monsoon rains weakened.'
          },
          {
            id: 'cd_reading_m4_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Harappan village leaders invented iron wheelbarrows in 1850 BCE.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'The passage discusses Harappa declining and families moving to smaller villages without mentioning wheelbarrows.'
          },
          {
            id: 'cd_reading_m4_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Indus residents disappeared completely rather than adapting to smaller villages.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states the Indus people did not vanish overnight; they moved to smaller villages and grew tougher millet crops.'
          },
          {
            id: 'cd_reading_m4_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Families leaving large cities switched toward drier-weather crops like millet.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D confirms farming families planted tougher dry-weather millet crops.'
          },
          {
            id: 'cd_reading_m4_q33',
            number: 33,
            type: 'matching_information',
            questionText: 'Which paragraph notes trade boats stopping journeys between the Indus Valley and Mesopotamia?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'A',
            explanation: 'Paragraph A mentions long-distance trade boats stopping sailing to Mesopotamia.'
          },
          {
            id: 'cd_reading_m4_q34',
            number: 34,
            type: 'matching_information',
            questionText: 'Which paragraph mentions reading clues inside ancient lake mud?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'C',
            explanation: 'Paragraph C opens with earth scientists reading ancient lake mud and dried riverbeds.'
          },
          {
            id: 'cd_reading_m4_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'Why did archaeologists reject the older textbook story of sudden war destroying Mohenjo-daro?',
            options: [
              'A. Indus traders burned their own stone wells voluntarily',
              'B. Written clay letters proved kings gave cities away to Mesopotamia',
              'C. Ocean tides covered every brick ruin quickly',
              'D. They uncovered no crushed fortresses, burned palaces, or battlefield weapons'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B states excavations found no crushed fortress walls, burned palaces, or warrior weapons.'
          },
          {
            id: 'cd_reading_m4_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Where did many Indus city families gradually move around 1900 BCE?',
            options: [
              'A. Eastward toward smaller villages near the Ganges river plains',
              'B. West across salty Persian mountains',
              'C. South onto small rocky sea islands',
              'D. North into snowy Himalayan glaciers'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A states families gradually walked eastward toward smaller farming villages along the Ganges river plains.'
          },
          {
            id: 'cd_reading_m4_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What modern lesson does Passage 3 draw from the peaceful decline of Indus cities?',
            options: [
              'A. Oven-baked clay bricks always crumble within one century',
              'B. Small farming villages cannot grow hardy grain crops',
              'C. Even well-planned cities remain vulnerable if stable water and rains fail',
              'D. Trade ships cause big river floods every two centuries'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D concludes the story reminds modern planners how strongly great cities depend on steady water and rains.'
          },
          {
            id: 'cd_reading_m4_q38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Beside Mohenjo-daro, another huge Indus city named ______ gradually fell into disrepair.',
            correctAnswer: 'HARAPPA',
            explanation: 'Paragraph A names Mohenjo-daro and Harappa.'
          },
          {
            id: 'cd_reading_m4_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Weakened monsoon summer rains lasted roughly ______ centuries across the region.',
            correctAnswer: 'TWO',
            explanation: 'Paragraph C notes monsoon summer rains weakened for two centuries.'
          },
          {
            id: 'cd_reading_m4_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'Which tough dry-weather grain crop helped villagers adapt after leaving large river cities?',
            correctAnswer: 'MILLET',
            explanation: 'Paragraph D mentions planting tougher dry-weather millet crops.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK TEST 5 (EASY): cd_reading_m5 (Quantum Computing Basics & Superconducting Chips)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m5',
    testNumber: 5,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 5: Quantum Computing and Superconducting Qubit Coherence',
    description:
      'Beginner-friendly CD-IELTS Official Mock Reading test featuring 40 clear questions explaining quantum bits (qubits), ultra-cold golden fridges, and error limits.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Inside the Golden Chandelier of a Quantum Lab',
        subtitle: 'Why quantum computers look completely different from desktop laptops',
        text: `Paragraph A: Open an ordinary desktop computer or smartphone, and you will find flat green circuit boards working warmly at room temperature. Walk into a modern quantum computer laboratory, however, and you will spot a gleaming golden chandelier hanging silently inside a thick white metal tank. This shiny gold machine is actually a giant super-fridge designed to keep a tiny silicon chip near the coldest temperature allowed by physics.

Paragraph B: Every classical computer builds music, video games, and websites out of tiny electrical switches called bits. Each ordinary bit works like a simple bedroom light switch: at any instant, it sits cleanly either OFF (zero) or ON (one). Quantum computers replace those ordinary switches with quantum bits, called qubits. Thanks to strange atomic behavior called superposition, a single qubit can represent combinations of zero and one at the same time until scientists measure its final value.

Paragraph C: Even stranger is a second rule called entanglement, which links multiple qubits into a shared partnership. Adding just one extra ordinary bit to a phone barely boosts its speed, yet adding each entangled qubit doubles how many paths a quantum chip can explore together. Because of this explosive teamwork, researchers hope future quantum machines will simulate new medicines, battery chemicals, and clean fertilizers in hours rather than waiting centuries on normal supercomputers.

Paragraph D: Notice, though, that quantum chips do not speed up ordinary chores like checking email or watching films. Writing a message or saving a photo still runs fastest and cheapest on familiar laptop chips. Scientists therefore view quantum processors as specialized laboratory helpers working alongside regular computers rather than replacing phones on everyone's desk.`,
        questions: [
          {
            id: 'cd_reading_m5_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Inside a quantum lab, the cooling machine looks like a shiny golden ______.',
            correctAnswer: 'CHANDELIER',
            explanation: 'Paragraph A describes a gleaming golden chandelier hanging inside a white metal tank.'
          },
          {
            id: 'cd_reading_m5_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Ordinary computers build files and programs using simple electrical switches called ______.',
            correctAnswer: 'BITS',
            explanation: 'Paragraph B states every classical computer builds programs out of tiny switches called bits.'
          },
          {
            id: 'cd_reading_m5_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'A qubit can hold combinations of zero and one simultaneously through ______.',
            correctAnswer: 'SUPERPOSITION',
            explanation: 'Paragraph B names this atomic behavior superposition.'
          },
          {
            id: 'cd_reading_m5_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'The rule linking several qubits into shared teamwork is called ______.',
            correctAnswer: 'ENTANGLEMENT',
            explanation: 'Paragraph C defines entanglement as linking multiple qubits into a shared partnership.'
          },
          {
            id: 'cd_reading_m5_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Scientists expect quantum machines to act as specialized ______ helpers beside regular computers.',
            correctAnswer: 'LABORATORY',
            explanation: 'Paragraph D calls them specialized laboratory helpers working alongside regular computers.'
          },
          {
            id: 'cd_reading_m5_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'An ordinary computer bit can be zero and one at the exact same moment.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B compares an ordinary bit to a light switch sitting either OFF (zero) or ON (one).'
          },
          {
            id: 'cd_reading_m5_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Adding entangled qubits allows quantum chips to explore exponentially more paths together.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states adding each entangled qubit doubles how many paths a chip can explore together.'
          },
          {
            id: 'cd_reading_m5_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Smartphones will all contain golden helium fridges by 2030.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs A and D mention smartphones and laptops without predicting 2030 phone hardware.'
          },
          {
            id: 'cd_reading_m5_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Checking email and saving family photos work faster and cheaper on regular laptops than quantum chips.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states everyday tasks run fastest and cheapest on familiar laptop chips.'
          },
          {
            id: 'cd_reading_m5_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'What is the real job of the shiny gold structure shown in quantum computer photos?',
            options: [
              'A. Cooling a small chip near the coldest temperature possible',
              'B. Holding extra wireless antennas for high-speed video',
              'C. Storing old battery chemicals inside metal shelves',
              'D. Decorating clean university entrances with precious metal'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A explains the golden chandelier is a giant super-fridge keeping a tiny chip near the coldest temperature.'
          },
          {
            id: 'cd_reading_m5_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'Which task is mentioned as well suited for future quantum computers?',
            options: [
              'A. Typing daily school emails',
              'B. Saving holiday camera pictures',
              'C. Playing simple mobile arcade games',
              'D. Modeling new medicines and clean fertilizers'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C lists simulating new medicines, battery chemicals, and clean fertilizers.'
          },
          {
            id: 'cd_reading_m5_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'At what temperature do ordinary desktop circuit boards usually work?',
            correctAnswer: 'ROOM TEMPERATURE',
            explanation: 'Paragraph A states ordinary circuit boards work warmly at room temperature.'
          },
          {
            id: 'cd_reading_m5_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What household object does Paragraph B compare to an ordinary computer bit?',
            correctAnswer: 'LIGHT SWITCH',
            explanation: 'Paragraph B compares an ordinary bit to a simple bedroom light switch.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Keeping Delicate Qubits Cold and Quiet',
        subtitle: 'Why even tiny vibrations or faint radio waves disturb quantum memory',
        text: `Paragraph A: If qubits are so powerful, why cannot engineers build a million-qubit processor right away? The biggest hurdle is fragility. A superconducting qubit stores its quantum memory inside tiny electric currents bouncing smoothly across microscopic loops of cooled metal. Unfortunately, even the tiniest bump of heat, magnetic hum, or passing phone signal destroys that delicate balance within a fraction of a second—a breakdown scientists call decoherence.

Paragraph B: To shield chips from heat noise, engineers chill superconducting processors down to roughly fifteen millikelvins—nearly minus two hundred seventy-three degrees Celsius! That cold chamber is over a hundred times colder than empty deep space between stars. Copper wires and shiny gold-plated brass discs step temperatures smoothly downward stage by stage using circulating liquid helium gas.

Paragraph C: Heat is not the only enemy creeping into the fridge. Heavy building floors shake lightly whenever subway trains pass underground or lab air conditioners hum nearby, so engineers suspend the entire golden chandelier from thick spring-cushioned ceiling frames. Multi-layered dark magnetic metal shields wrap completely around the outside tank to block stray fields from Earth and nearby motors.

Paragraph D: Even invisible cosmic rays flying through outer space occasionally punch straight through concrete laboratory roofs and strike silicon chips, scrambling dozens of neighboring qubits simultaneously. Some research teams are now testing quantum computers inside deep abandoned underground mines where thick layers of solid rock naturally block space radiation cleanly.`,
        questions: [
          {
            id: 'cd_reading_m5_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why tiny heat or vibration destroys fragile qubit memory',
              'ii. Building colder spaceships for deep-star travel',
              'iii. Going deep underground to block cosmic rays from space',
              'iv. Stopping floor shaking and magnetic interference outside tanks',
              'v. Reaching temperatures colder than outer space using helium'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A defines decoherence—how tiny heat bumps, magnetic hum, or phone signals ruin fragile qubits.'
          },
          {
            id: 'cd_reading_m5_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why tiny heat or vibration destroys fragile qubit memory',
              'ii. Hanging gold disks from kitchen lamps',
              'iii. Going deep underground to block cosmic rays from space',
              'iv. Stopping floor shaking and magnetic interference outside tanks',
              'v. Reaching temperatures colder than outer space using helium'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph B describes cooling chips to 15 millikelvins (colder than deep space) using liquid helium.'
          },
          {
            id: 'cd_reading_m5_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why tiny heat or vibration destroys fragile qubit memory',
              'ii. Buying quiet subway trains for city labs',
              'iii. Going deep underground to block cosmic rays from space',
              'iv. Stopping floor shaking and magnetic interference outside tanks',
              'v. Reaching temperatures colder than outer space using helium'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C details spring ceiling frames for vibration and dark metal shields blocking magnetic interference.'
          },
          {
            id: 'cd_reading_m5_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why tiny heat or vibration destroys fragile qubit memory',
              'ii. Replacing silicon chips with heavy underground stones',
              'iii. Going deep underground to block cosmic rays from space',
              'iv. Stopping floor shaking and magnetic interference outside tanks',
              'v. Reaching temperatures colder than outer space using helium'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains how cosmic rays pierce lab roofs and why teams test quantum chips inside deep mines.'
          },
          {
            id: 'cd_reading_m5_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Scientists use the term ______ when tiny disturbances erase delicate qubit states.',
            correctAnswer: 'DECOHERENCE',
            explanation: 'Paragraph A calls this breakdown decoherence.'
          },
          {
            id: 'cd_reading_m5_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Chilled quantum chambers circulate cold liquid ______ gas down brass stages.',
            correctAnswer: 'HELIUM',
            explanation: 'Paragraph B states stages step downward using circulating liquid helium gas.'
          },
          {
            id: 'cd_reading_m5_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Engineers hang quantum fridges from spring-cushioned ______ frames to stop floor shakes.',
            correctAnswer: 'CEILING',
            explanation: 'Paragraph C mentions thick spring-cushioned ceiling frames.'
          },
          {
            id: 'cd_reading_m5_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Testing labs inside old underground ______ shields chips naturally from space radiation.',
            correctAnswer: 'MINES',
            explanation: 'Paragraph D notes teams test quantum computers inside deep abandoned underground mines.'
          },
          {
            id: 'cd_reading_m5_q22',
            number: 22,
            type: 'true_false_not_given',
            questionText: 'Inside a quantum fridge, chips become colder than empty space between stars.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B says the cold chamber is over a hundred times colder than empty deep space between stars.'
          },
          {
            id: 'cd_reading_m5_q23',
            number: 23,
            type: 'true_false_not_given',
            questionText: 'Ordinary concrete laboratory roofs block every cosmic ray from reaching silicon chips.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D notes invisible cosmic rays occasionally punch straight through concrete laboratory roofs.'
          },
          {
            id: 'cd_reading_m5_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why do engineers wrap dark metal layers around the outer quantum tank?',
            options: [
              'A. To trap bright golden lamp reflections',
              'B. To keep stray magnetic fields away from the qubits',
              'C. To warm helium gas faster after tests',
              'D. To hide private wires from visiting reporters'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C explains dark magnetic metal shields block stray fields from Earth and nearby motors.'
          },
          {
            id: 'cd_reading_m5_q25',
            number: 25,
            type: 'short_answer',
            questionText: 'At roughly how many millikelvins do engineers chill superconducting quantum chips?',
            correctAnswer: 'FIFTEEN',
            explanation: 'Paragraph B specifies roughly fifteen millikelvins.'
          },
          {
            id: 'cd_reading_m5_q26',
            number: 26,
            type: 'short_answer',
            questionText: 'What passing city transport is given as an example that shakes laboratory floors?',
            correctAnswer: 'SUBWAY TRAINS',
            explanation: 'Paragraph C cites heavy building floors shaking lightly whenever subway trains pass underground.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Fixing Mistakes and Separating Fact From Hype',
        subtitle: 'How quantum error correction turns noisy parts into steady calculators',
        text: `Paragraph A: Because real-world qubits stay noisy and make frequent mistakes—sometimes failing once in every few hundred steps—early quantum machines are much too inaccurate for big medical or financial calculations. To fix this, computer scientists invented clever teamwork called quantum error correction. Instead of trusting one fragile physical qubit with an important number, a machine spreads that information safely across dozens or hundreds of extra helper qubits.

Paragraph B: Think of error correction like checking a message sent over a crackly phone call. Rather than reading every qubit directly—which would ruin its fragile superposition—special "watcher" qubits gently peek at neighbor pairs to check whether any pair flipped out of step. Whenever a small glitch hits one member of the group, the helper team quietly spots the odd one out and nudges it back cleanly without erasing the shared calculation.

Paragraph C: Because grouping hundreds of physical qubits to guard one reliable "logical qubit" consumes huge chip space, today\'s prototype processors—with roughly fifty to one thousand raw physical qubits—are still early stepping stones. Practical error-corrected machines capable of solving major industrial problems will likely require tens of thousands or even millions of clean cooperating physical qubits.

Paragraph D: Newspaper headlines sometimes claim quantum computers will instantly break every internet password tomorrow morning. Leading physicists quickly urge calm perspective: building massive fault-tolerant machines remains a tough multi-year engineering climb. Still, major labs recently demonstrated error correction actually making logical qubits last longer as groups grow larger—proving steady scientific progress rather than empty science fiction.`,
        questions: [
          {
            id: 'cd_reading_m5_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Single physical qubits currently make too many errors to solve huge industrial problems on their own.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states real-world qubits make frequent mistakes, making early machines too inaccurate for big calculations.'
          },
          {
            id: 'cd_reading_m5_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Watcher qubits directly read the main stored answer every second to fix errors.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B explains reading every qubit directly would ruin its fragile superposition, so watchers peek at neighbor pairs instead.'
          },
          {
            id: 'cd_reading_m5_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Current 1,000-qubit prototypes already provide enough logical qubits for massive industrial problems.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C calls 50-to-1,000 qubit prototypes early stepping stones, noting major problems will require tens of thousands or millions.'
          },
          {
            id: 'cd_reading_m5_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Three European banks lost all internet passwords to quantum hackers last winter.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D discusses newspaper headlines about passwords without mentioning three banks or a winter hack.'
          },
          {
            id: 'cd_reading_m5_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Physicists believe breaking internet passwords with quantum computers will happen easily tomorrow.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states leading physicists urge calm perspective because massive fault-tolerant machines remain a tough multi-year climb.'
          },
          {
            id: 'cd_reading_m5_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Recent laboratory tests showed that larger error-corrected groups helped logical qubits last longer.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D notes major labs demonstrated error correction making logical qubits last longer as groups grow larger.'
          },
          {
            id: 'cd_reading_m5_q33',
            number: 33,
            type: 'matching_information',
            questionText: 'Which paragraph compares checking noisy qubits to reading over a crackly telephone call?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'B',
            explanation: 'Paragraph B compares error correction to checking a message sent over a crackly phone call.'
          },
          {
            id: 'cd_reading_m5_q34',
            number: 34,
            type: 'matching_information',
            questionText: 'Which paragraph warns readers not to believe exaggerated newspaper fears about online passwords?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D'],
            correctAnswer: 'D',
            explanation: 'Paragraph D addresses newspaper headlines about internet passwords and calls for calm perspective.'
          },
          {
            id: 'cd_reading_m5_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'How does quantum error correction protect important data without ruining superposition?',
            options: [
              'A. By shutting off electricity inside helium tanks',
              'B. By keeping chips warm at room temperature',
              'C. By copying data onto regular green desktop disks',
              'D. By spreading information across many helper qubits and checking neighbor pairs indirectly'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraphs A and B explain spreading data across helper qubits and letting watcher qubits peek at neighbor pairs.'
          },
          {
            id: 'cd_reading_m5_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What is a "logical qubit" in Paragraph C?',
            options: [
              'A. One reliable protected unit built by grouping many noisy physical qubits together',
              'B. A regular light switch inside an office wall',
              'C. A plastic wire connecting helium pumps',
              'D. A computer rule used only for checking daily emails'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C states grouping hundreds of physical qubits guards one reliable "logical qubit."'
          },
          {
            id: 'cd_reading_m5_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What is the main message of Passage 3?',
            options: [
              'A. Quantum computers are worthless toys that fail every test',
              'B. Quantum chips cannot ever fix noisy atomic errors',
              'C. Quantum error correction is making real progress, though large practical machines will take years',
              'D. Every internet site must shut down tomorrow morning'
            ],
            correctAnswer: 'C',
            explanation: 'Passage 3 balances steady progress in error correction against realistic multi-year engineering timelines.'
          },
          {
            id: 'cd_reading_m5_q38',
            number: 38,
            type: 'fill_blank',
            questionText: 'Early physical qubits sometimes make an error once in every few ______ steps.',
            correctAnswer: 'HUNDRED',
            explanation: 'Paragraph A notes physical qubits fail sometimes once in every few hundred steps.'
          },
          {
            id: 'cd_reading_m5_q39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Special ______ qubits watch neighbor pairs to detect sudden single-qubit glitches.',
            correctAnswer: 'WATCHER',
            explanation: 'Paragraph B names these monitoring units "watcher" qubits.'
          },
          {
            id: 'cd_reading_m5_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'What is the upper number of raw physical qubits mentioned for today\'s prototype processors?',
            correctAnswer: 'ONE THOUSAND',
            explanation: 'Paragraph C states today\'s prototype processors hold roughly fifty to one thousand raw physical qubits.'
          }
        ]
      }
    ]
  })
];
