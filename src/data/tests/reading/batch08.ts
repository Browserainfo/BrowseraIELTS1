/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_08: TestItem[] = [
  // =========================================================================
  // MOCK 6 (MODERATE): cd_reading_m6 (The Economics of Circular Textile Recycling & Microfiber Shedding)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m6',
    testNumber: 6,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 6: The Economics of Circular Textile Recycling & Microfiber Shedding',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading mock test featuring 40 questions across three passages on garment collection economics, mechanical versus chemical fiber recycling, and apparel microfiber mitigation.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Reverse Logistics and the Global Second-Hand Clothing Trade',
        subtitle: 'Why collecting discarded garments cheaply still leaves massive sorting bottlenecks',
        text: `Paragraph A: Over the past two decades, fast-fashion business models accelerated global clothing production to more than one hundred billion garments annually while slashing average wear counts per item by over a third. Concerned consumers increasingly deposit unwanted shirts and jackets into municipal charity bins or retail take-back boxes assuming donated garments move straight onto second-hand shop racks or back into pristine yarn spools. In practice, textile recovery follows a far messier, economically fragile supply chain.

Paragraph B: Sorting discarded apparel into grades suitable for resale or fiber recycling remains fiercely labor-intensive. Unlike homogeneous aluminum beverage cans crushed effortlessly by automated magnets and eddy-current drums, clothing arrives tangled in unpredictable blends of cotton, elastane, wool, polyester, metal zippers, and layered screen prints. Trained sorters at European hubs handle thousands of kilograms daily, visually inspecting fabric stretch, seam wear, and brand tags to classify garments into more than one hundred distinct resale grades.

Paragraph C: Only the cleanest, trendiest ten to fifteen percent of donated garments—often labeled "cream" grade—recover enough value in domestic vintage boutiques to finance warehouse sorting wages. Another forty to fifty percent travels across global shipping networks in compressed bales to wholesale markets across sub-Saharan Africa, South Asia, and Latin America, where vibrant local tailoring ecosystems mend, resize, and resell durable garments at affordable prices.

Paragraph D: Unfortunately, declining fast-fashion fabric quality has progressively flooded export bales with flimsy, unwearable polyester items known informally in Ghanaian markets as "dead white man's clothes." Up to forty percent of clothing shipped into Accra's sprawling Kantamanto market arrives torn, stained, or poorly stitched—overwhelming municipal drainage ditches and coastal lagoons when vendors cannot profitably mend or sell worthless bundles.

Paragraph E: Meanwhile, garments graded unfit even for international resale typically suffer "downcycling": shredded coarsely into low-value industrial carpet underlay, car door acoustic insulation, or furniture stuffing rather than re-entering apparel looms. Bridging this circularity deficit requires automated optical sorting scanners capable of reading fiber composition in milliseconds alongside strict producer responsibility fees penalizing fragile, non-recyclable fabric blends.`,
        questions: [
          {
            id: 'cd_reading_m6_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Global clothing production exceeds one hundred billion items per year while individual garments are worn less often.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states production tops 100 billion garments annually while average wear counts dropped by over a third.'
          },
          {
            id: 'cd_reading_m6_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Automated magnetic drums already sort mixed donated textiles cleanly without human inspection.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B contrasts automated aluminum-can sorting against labor-intensive human textile inspection across 100+ grades.'
          },
          {
            id: 'cd_reading_m6_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'High-value vintage resale inside domestic markets accounts for roughly half of collected charity clothes.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C notes only the cleanest ten to fifteen percent ("cream" grade) reach domestic vintage boutiques.'
          },
          {
            id: 'cd_reading_m6_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Large amounts of unusable clothing exported to Accra end up polluting local waterways.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D explains up to 40% of shipped bales arrive damaged or worthless, overwhelming drainage ditches and coastal lagoons.'
          },
          {
            id: 'cd_reading_m6_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Trained warehouse workers divide unsorted apparel into over a hundred different ______.',
            correctAnswer: 'RESALE GRADES',
            explanation: 'Paragraph B notes sorters classify garments into more than one hundred distinct resale grades.'
          },
          {
            id: 'cd_reading_m6_q6',
            number: 6,
            type: 'fill_blank',
            questionText: 'The finest ten to fifteen percent of donated apparel—called ______ grade—earns high domestic shop prices.',
            correctAnswer: 'CREAM',
            explanation: 'Paragraph C identifies the cleanest 10–15% as "cream" grade.'
          },
          {
            id: 'cd_reading_m6_q7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Apparel unsuitable for resale is routinely shredded into car door ______ or carpet underlay.',
            correctAnswer: 'ACOUSTIC INSULATION',
            explanation: 'Paragraph E specifies low-value carpet underlay, car door acoustic insulation, or furniture stuffing.'
          },
          {
            id: 'cd_reading_m6_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Turning worn shirts into lower-grade industrial stuffing rather than fresh yarn is known as ______.',
            correctAnswer: 'DOWNCYCLING',
            explanation: 'Paragraph E terms this shredding process "downcycling."'
          },
          {
            id: 'cd_reading_m6_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Rapid infrared ______ can determine fiber chemistry instantaneously to reduce manual sorting costs.',
            correctAnswer: 'OPTICAL SORTING',
            explanation: 'Paragraph E calls for automated optical sorting scanners reading fiber composition in milliseconds.'
          },
          {
            id: 'cd_reading_m6_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why is textile recycling inherently more difficult to automate than recycling metal cans?',
            options: [
              'A. Metal recyclers refuse to share eddy-current patent licenses with garment charities',
              'B. Local tailors in Ghana forbid mechanical shredding machines near ports',
              'C. Fast-fashion garments spontaneously dissolve during damp shipping voyages',
              'D. Clothing combines tangled blended yarns, metal zippers, and diverse surface prints requiring nuanced inspection'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B explains clothing mixes unpredictable blends of cotton, elastane, wool, polyester, zippers, and prints.'
          },
          {
            id: 'cd_reading_m6_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'What sustains European charity sorting warehouses financially according to Paragraph C?',
            options: [
              'A. Government subsidies paid per kilogram of shredded carpet underlay',
              'B. High boutique prices earned by the top 10–15% cream-grade garments',
              'C. Taxes levied directly on Ghanaian port authorities in Accra',
              'D. Selling raw metal zippers extracted from damaged winter coats'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C notes the cleanest 10–15% cream-grade garments recover enough value to finance sorting wages.'
          },
          {
            id: 'cd_reading_m6_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'In which Ghanaian market does up to forty percent of imported clothing arrive damaged or unwearable?',
            correctAnswer: 'KANTAMANTO MARKET',
            explanation: 'Paragraph D names Accra\'s sprawling Kantamanto market.'
          },
          {
            id: 'cd_reading_m6_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'By roughly what fraction has average garment wear count fallen alongside surging annual production?',
            correctAnswer: 'OVER A THIRD',
            explanation: 'Paragraph A states production surged while slashing average wear counts per item by over a third.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Mechanical Shredding Versus Chemical Depolymerization',
        subtitle: 'Comparing cost, fiber strength, and blended-fabric separation in closed-loop recycling',
        text: `Paragraph A: Achieving genuine "fiber-to-fiber" circularity—converting worn shirts back into clothing as durable as virgin textiles—requires overcoming severe physical limits inside current recycling factories. Today, fewer than one percent of discarded garments globally become fresh apparel fibers. Most existing recovery relies on straightforward mechanical shredding, a mature process constrained sharply by fiber breakage and dye contamination.

Paragraph B: Inside a mechanical recycling mill, clean pre-sorted cotton sweaters pass through high-speed rotating drums lined with steel teeth that rip woven cloth back into loose fluff. Although economical and water-thrifty, tearing tightly spun yarn physically snaps cellulose polymers roughly in half, shortening average staple fiber lengths. Short, fragile recycled cotton breaks easily on high-speed spinning frames unless manufacturers dilute recycled fluff with seventy to eighty percent strong virgin cotton—limiting true circular displacement.

Paragraph C: Chemical recycling promises pristine, virgin-grade polymers by breaking worn textiles down to the molecular level rather than tearing threads brutally with steel pins. In chemical cellulose regeneration—pioneered industrially for cotton garments—solvents dissolve frayed cotton into viscous liquid pulp while stripping away dyes, buttons, and synthetic elastane impurities, then extrude continuous silky lyocell-style filaments completely indistinguishable from tree-pulp fibers.

Paragraph D: Parallel depolymerization plants handle synthetic polyesters cleanly through glycolysis or enzymatic hydrolysis, cleaving long polyethylene terephthalate (PET) chains back into pure monomer building blocks. Re-polymerized chemically from recycled shirts rather than plastic soda bottles, closed-loop textile polyester avoids competing with food-grade bottle recyclers who currently siphon away clear PET flakes before apparel mills can bid.

Paragraph E: Economically, however, chemical plants demand colossal upfront refinery investments, concentrated solvent recovery loops, and uninterrupted purity guarantees. Because a tiny five-percent trace of unseparated spandex ruins entire chemical cotton reactors, chemical plants charge steep feedstock quality premiums—keeping chemically regenerated fibers substantially costlier than cheap virgin fossil polyester or subsidized agricultural cotton.`,
        questions: [
          {
            id: 'cd_reading_m6_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why less than one percent of used clothing currently returns to new apparel',
              'ii. Dissolving cotton down to pure pulp to remove dyes and restore length',
              'iii. High capital costs and strict purity rules keep chemical yarns expensive',
              'iv. How mechanical tearing weakens yarn strength and forces virgin dilution',
              'v. Breaking down polyester shirts separately from food bottle streams',
              'vi. Banning synthetic soda bottles from European garment factories'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A introduces the <1% fiber-to-fiber baseline and the limits of mechanical shredding.'
          },
          {
            id: 'cd_reading_m6_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why less than one percent of used clothing currently returns to new apparel',
              'ii. Dissolving cotton down to pure pulp to remove dyes and restore length',
              'iii. High capital costs and strict purity rules keep chemical yarns expensive',
              'iv. How mechanical tearing weakens yarn strength and forces virgin dilution',
              'v. Breaking down polyester shirts separately from food bottle streams',
              'vi. Banning synthetic soda bottles from European garment factories'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B explains rotating steel drums shorten fiber lengths, forcing 70–80% virgin cotton blending.'
          },
          {
            id: 'cd_reading_m6_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why less than one percent of used clothing currently returns to new apparel',
              'ii. Dissolving cotton down to pure pulp to remove dyes and restore length',
              'iii. High capital costs and strict purity rules keep chemical yarns expensive',
              'iv. How mechanical tearing weakens yarn strength and forces virgin dilution',
              'v. Breaking down polyester shirts separately from food bottle streams',
              'vi. Banning synthetic soda bottles from European garment factories'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph C details chemical cellulose regeneration dissolving dyed cotton into clean lyocell-grade filaments.'
          },
          {
            id: 'cd_reading_m6_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why less than one percent of used clothing currently returns to new apparel',
              'ii. Dissolving cotton down to pure pulp to remove dyes and restore length',
              'iii. High capital costs and strict purity rules keep chemical yarns expensive',
              'iv. How mechanical tearing weakens yarn strength and forces virgin dilution',
              'v. Breaking down polyester shirts separately from food bottle streams',
              'vi. Banning synthetic soda bottles from European garment factories'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph D covers polyester depolymerization breaking shirts back to monomers without competing for clear PET soda bottles.'
          },
          {
            id: 'cd_reading_m6_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Why less than one percent of used clothing currently returns to new apparel',
              'ii. Dissolving cotton down to pure pulp to remove dyes and restore length',
              'iii. High capital costs and strict purity rules keep chemical yarns expensive',
              'iv. How mechanical tearing weakens yarn strength and forces virgin dilution',
              'v. Breaking down polyester shirts separately from food bottle streams',
              'vi. Banning synthetic soda bottles from European garment factories'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph E explains how reactor costs and sensitivity to 5% spandex make chemical yarns pricier than virgin fibers.'
          },
          {
            id: 'cd_reading_m6_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Mechanical recycling drums shred woven cotton cleanly yet cut ______ in half, weakening spun yarn.',
            correctAnswer: 'CELLULOSE POLYMERS',
            explanation: 'Paragraph B states tearing yarn physically snaps cellulose polymers roughly in half.'
          },
          {
            id: 'cd_reading_m6_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Chemical regeneration spins dissolved cotton pulp into silky ______ filaments matching wood-derived fibers.',
            correctAnswer: 'LYOCELL-STYLE',
            explanation: 'Paragraph C describes extruding continuous silky lyocell-style filaments.'
          },
          {
            id: 'cd_reading_m6_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Glycolysis and enzymatic hydrolysis break worn polyester back down into clean ______ units.',
            correctAnswer: 'MONOMER',
            explanation: 'Paragraph D states depolymerization cleaves PET chains back into pure monomer building blocks.'
          },
          {
            id: 'cd_reading_m6_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Even small amounts of unseparated ______ inside cotton batches can spoil entire chemical reactors.',
            correctAnswer: 'SPANDEX',
            explanation: 'Paragraph E notes a tiny five-percent trace of unseparated spandex ruins entire chemical cotton reactors.'
          },
          {
            id: 'cd_reading_m6_q23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why must mechanically recycled cotton usually be blended with seventy to eighty percent virgin cotton?',
            options: [
              'A. Steel teeth stain recycled cotton bright blue during shredding',
              'B. Consumers legally demand eighty-percent fresh crop labels on sweaters',
              'C. Virgin cotton lowers the melting point of polyester buttons',
              'D. Shortened recycled fibers snap easily on fast industrial spinning frames'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B explains torn fibers are short and fragile, breaking on high-speed spinning frames unless heavily diluted with virgin cotton.'
          },
          {
            id: 'cd_reading_m6_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'How does chemical polyester depolymerization help avoid conflict with beverage companies?',
            options: [
              'A. It recycles worn garments instead of relying on clear food-grade PET plastic bottles',
              'B. It turns beverage soda cans directly into cotton jeans',
              'C. It lowers plastic bottle demand across North American supermarkets',
              'D. It eliminates synthetic polyester from athletic apparel entirely'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D notes garment depolymerization uses recycled shirts rather than competing with food-grade bottle recyclers for clear PET flakes.'
          },
          {
            id: 'cd_reading_m6_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Currently, more than twenty-five percent of discarded global clothing is spun back into new garments.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A explicitly reports fewer than one percent of discarded garments globally become fresh apparel fibers.'
          },
          {
            id: 'cd_reading_m6_q26',
            number: 26,
            type: 'true_false_not_given',
            questionText: 'Mechanical textile shredding uses less water than wet chemical cellulose dissolution plants.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B characterizes mechanical recycling as economical and water-thrifty compared with chemical solvent plants.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Pricing Circularity, Microfiber Shedding, and Extended Producer Responsibility',
        subtitle: 'Evaluating regulatory tools capable of shifting apparel economics beyond voluntary pledges',
        text: `Paragraph A: Even if optical sorters and chemical depolymerization refineries mature technically, pure market forces continue favoring disposable linear clothing. Virgin polyester derived from subsidized petrochemical refineries consistently sells cheaper per ton than recycled monomer yarns, while fast-fashion brands face zero direct disposal invoices when torn garments clog municipal landfills or African drainage canals. Economists term these unpaid cleanup burdens "negative externalities."

Paragraph B: To correct skewed apparel pricing, European regulators increasingly turn toward Extended Producer Responsibility (EPR)—legislation requiring clothing brands to finance collection, sorting, and recycling infrastructure through mandatory fees scaled to garment volume and recyclability. Pioneered in France under the Refashion scheme and scheduled across European Union member states, EPR frameworks invert traditional incentives by charging substantially lower eco-fees on mono-material garments lacking tricky glued linings or stretchy elastane blends.

Paragraph C: Simultaneously, apparel policy debates extend beyond end-of-life bins toward shedding behavior during ordinary consumer ownership. Laboratory wash audits confirm that garments made from mechanically recycled polyester occasionally shed more microscopic fibers during early home wash cycles than smooth virgin filament yarns—because chopped fibers contain more exposed frayed ends unless tightly heat-set. Addressing microfiber release therefore demands tighter yarn twisting alongside household washer filtration rather than assuming "recycled" tags automatically guarantee lower pollution.

Paragraph D: Skeptics nonetheless warn that mandatory eco-fees totaling merely a few euro cents per t-shirt cannot alone transform shopping habits among budget consumers chasing ultra-cheap online drops. True systemic deceleration likely requires pairing strict minimum durability standards—mandating seam tear resistance and pilling thresholds—with transparent repairability scores and curbs on destroying unsold seasonal inventory.

Paragraph E: Ultimately, circular textiles hinge less on discovering a single miracle chemical solvent than on realigning industry rules so durable, repairable mono-material garments cost less over their useful lives than disposable synthetic blends.`,
        questions: [
          {
            id: 'cd_reading_m6_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph defines unpaid environmental cleanup burdens placed on cities and waterways?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A defines unpaid disposal burdens as "negative externalities."'
          },
          {
            id: 'cd_reading_m6_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph cautions that mechanically recycled garments can release extra microfibers unless tightly finished?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C explains mechanically recycled polyester can shed more fibers due to exposed frayed ends unless heat-set.'
          },
          {
            id: 'cd_reading_m6_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph introduces French fee schedules rewarding single-fiber designs free of elastane or glue?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B cites France\'s Refashion EPR scheme charging lower fees on mono-material garments lacking glued linings or elastane.'
          },
          {
            id: 'cd_reading_m6_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph doubts tiny per-shirt fees alone will change budget shopping without strength rules and unsold-stock bans?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D warns tiny eco-fees alone cannot shift shopping without minimum durability standards and curbs on destroying unsold stock.'
          },
          {
            id: 'cd_reading_m6_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Fashion brands currently pay full municipal landfill costs whenever discarded polyester clothing enters city trash.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states fast-fashion brands face zero direct disposal invoices when torn garments clog landfills or canals.'
          },
          {
            id: 'cd_reading_m6_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Extended Producer Responsibility fees encourage designers to avoid complex glued linings and blended elastane.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B notes EPR charges substantially lower eco-fees on mono-material garments lacking glued linings or elastane blends.'
          },
          {
            id: 'cd_reading_m6_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Every garment carrying a "recycled" store label automatically sheds fewer microplastics in home laundry than virgin polyester.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C warns mechanically recycled polyester can shed more fibers in early washes due to exposed frayed ends.'
          },
          {
            id: 'cd_reading_m6_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'French clothing retailers voted unanimously in 2022 to quadruple Refashion eco-fees on cotton coats.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No 2022 unanimous retailer vote quadrupling fees is mentioned.'
          },
          {
            id: 'cd_reading_m6_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Achieving circular apparel depends primarily on shifting industry economics rather than inventing one miracle chemical.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E states circular textiles hinge less on one miracle solvent than on realigning industry rules.'
          },
          {
            id: 'cd_reading_m6_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do clothing manufacturers normally continue preferring virgin polyester over chemically recycled fibers?',
            options: [
              'A. Chemical monomers turn bright neon orange after a single rainfall',
              'B. Virgin polyester can never burn or melt inside hot dryer drums',
              'C. Virgin polyester from subsidized refineries sells cheaper per ton than recycled monomers',
              'D. European regulators outlawed all chemically recycled clothing in 2021'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph A notes virgin polyester from subsidized petrochemical refineries consistently sells cheaper per ton.'
          },
          {
            id: 'cd_reading_m6_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do mechanically recycled polyester shirts sometimes shed more microfibers in early laundry cycles?',
            options: [
              'A. Washing machines heat recycled polyester until fabric glue dissolves',
              'B. Chopped recycled strands expose more frayed fiber ends unless carefully heat-set',
              'C. Petrochemical oil leaks out of recycled buttons during spinning',
              'D. Mono-material labels repel normal household laundry detergent'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C states chopped fibers contain more exposed frayed ends unless tightly heat-set.'
          },
          {
            id: 'cd_reading_m6_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'According to Paragraph D, what measures should supplement per-garment EPR fees to curb disposable clothing?',
            options: [
              'A. Lowering import tariffs on cheap seasonal polyester shirts',
              'B. Closing all municipal charity collection boxes across Europe',
              'C. Minimum durability standards, transparent repair scores, and curbs on destroying unsold stock',
              'D. Requiring consumers to weigh dirty laundry before every store visit'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D specifies minimum durability standards, repairability scores, and curbs on destroying unsold seasonal inventory.'
          },
          {
            id: 'cd_reading_m6_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Under France\'s ______ system, garment producers pay mandatory collection fees scaled to fabric recyclability.',
            correctAnswer: 'REFASHION',
            explanation: 'Paragraph B cites France\'s EPR framework under the Refashion scheme.'
          },
          {
            id: 'cd_reading_m6_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Proposed durability metrics test fabric resistance to early ______ as well as seam tearing.',
            correctAnswer: 'PILLING',
            explanation: 'Paragraph D mentions mandating seam tear resistance and pilling thresholds.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 7 (MODERATE): cd_reading_m7 (Forest Canopy Fungal Networks & Nutrient Sharing Ecology)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m7',
    testNumber: 7,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 7: Forest Canopy Fungal Networks & Nutrient Sharing Ecology',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on mycorrhizal carbon exchange, Douglas-fir shading trials, and scientific debates over biological markets.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Mycorrhizal Threads Beneath Temperate Conifer Stands',
        subtitle: 'Exploring root-fungal trading partnerships across sunlit canopies and shadowed seedlings',
        text: `Paragraph A: Walk across a cool Pacific Northwest forest floor and visible tree trunks tell less than half the ecological story. Beneath fallen cedar needles, tree roots intertwine densely with miles of microscopic fungal threads—called hyphae—forming ancient symbiotic structures known as mycorrhizae ("fungus-roots"). Dating back roughly four hundred million years to the earliest terrestrial plants, this subterranean alliance links nearly ninety percent of land plant species with specialized fungal partners.

Paragraph B: Neither partner participates out of selfless charity. Trees capture abundant atmospheric carbon dioxide through sunlit canopy leaves, synthesizing excess simple sugars that drip downward along phloem vessels into subterranean root tips. Mycorrhizal fungi—incapable of photosynthesis themselves—trade for that solar sugar by deploying ultra-fine hyphae thinner than spider silk through mineral soil crevices inaccessible to clumsy coarse tree roots, mining scarce phosphorus, nitrogen, and trace zinc.

Paragraph C: Crucially, single fungal individuals rarely restrict connections to one solitary tree host. One mycelial network may colonize dozens of neighboring trees simultaneously, stitching roots of towering canopy elders and shaded understory saplings into continuous Common Mycorrhizal Networks (CMNs). Forest ecologist Suzanne Simard famously popularized field isotope tracing during the 1990s showing carbon atoms assimilated by sun-bathed paper birch leaves turning up days later inside shaded Douglas-fir seedlings nearby.

Paragraph D: Beyond seasonal carbon movement, subterranean fungal strands redistribute critical mineral water during summer droughts. Deeply rooted old trees reaching moist glacial subsoils absorb water overnight and leak moisture outward into shallow dry soil layers—a phenomenon termed hydraulic lift—allowing fungal conduits to hydrate thirsty shallow seedlings clustered around mature root zones.

Paragraph E: Chemical signaling adds an equally intriguing defensive dimension. When defoliating caterpillars or spruce budworms chew leaves on one Douglas-fir sapling, electrical and chemical stress warnings travel along fungal links within hours, prompting connected neighboring seedlings to boost defensive bitter resin compounds proactively before insects migrate onto adjacent branches.`,
        questions: [
          {
            id: 'cd_reading_m7_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Microscopic fungal filaments called ______ weave around forest roots to expand mineral absorption.',
            correctAnswer: 'HYPHAE',
            explanation: 'Paragraph A defines microscopic fungal threads as hyphae.'
          },
          {
            id: 'cd_reading_m7_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Photosynthesizing canopies pipe surplus sugars downward through ______ channels to reward root fungi.',
            correctAnswer: 'PHLOEM VESSELS',
            explanation: 'Paragraph B states excess sugars drip downward along phloem vessels into root tips.'
          },
          {
            id: 'cd_reading_m7_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Ecologist Suzanne Simard used ______ tracking to follow carbon shifting from birch toward Douglas-fir saplings.',
            correctAnswer: 'ISOTOPE',
            explanation: 'Paragraph C notes field isotope tracing during the 1990s.'
          },
          {
            id: 'cd_reading_m7_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Overnight deep-root moisture release into dry topsoil is known as ______.',
            correctAnswer: 'HYDRAULIC LIFT',
            explanation: 'Paragraph D names this phenomenon hydraulic lift.'
          },
          {
            id: 'cd_reading_m7_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'After caterpillar damage on one tree, linked neighbors ramp up protective ______ defenses proactively.',
            correctAnswer: 'RESIN',
            explanation: 'Paragraph E explains neighbors boost defensive bitter resin compounds proactively.'
          },
          {
            id: 'cd_reading_m7_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Mycorrhizal root partnerships evolved alongside the earliest land plants hundreds of millions of years ago.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A dates the symbiotic structure back roughly 400 million years to the earliest terrestrial plants.'
          },
          {
            id: 'cd_reading_m7_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Mycorrhizal fungi generate most of their own energy by running photosynthesis inside sunlit surface mushrooms.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explicitly describes mycorrhizal fungi as incapable of photosynthesis themselves.'
          },
          {
            id: 'cd_reading_m7_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Single fungal mycelia exclusively attach to one mature tree trunk at a time.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states one mycelial network may colonize dozens of neighboring trees simultaneously.'
          },
          {
            id: 'cd_reading_m7_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Paper birch trees always outlive neighboring Douglas-fir conifers by two centuries.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C mentions carbon shifting from paper birch to Douglas-fir seedlings without comparing tree lifespans.'
          },
          {
            id: 'cd_reading_m7_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Roughly what percentage of land plant species partner with mycorrhizal fungi?',
            correctAnswer: 'NEARLY NINETY PERCENT',
            explanation: 'Paragraph A states nearly ninety percent of land plant species.'
          },
          {
            id: 'cd_reading_m7_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Besides phosphorus and nitrogen, which trace soil mineral do fungal hyphae mine for host trees?',
            correctAnswer: 'ZINC',
            explanation: 'Paragraph B lists scarce phosphorus, nitrogen, and trace zinc.'
          },
          {
            id: 'cd_reading_m7_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'Why do trees benefit by giving fungal hyphae carbon sugars instead of harvesting all soil nutrients alone?',
            options: [
              'A. Tree roots lack phloem vessels capable of absorbing rainfall underground',
              'B. Fungal filaments are narrow enough to extract phosphorus and nitrogen from tiny mineral crevices tree roots cannot reach',
              'C. Shedding extra sugars prevents maple caterpillars from eating bark in winter',
              'D. Fungi convert nitrogen straight into solid calcium limestone ridges'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains hyphae thinner than spider silk enter mineral soil crevices inaccessible to coarse tree roots.'
          },
          {
            id: 'cd_reading_m7_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'How does deep root "hydraulic lift" help young forest seedlings survive dry summer conditions?',
            options: [
              'A. Senior trees bend lower canopy trunks downward to shade saplings from noon glare',
              'B. Dead spruce needles trap melting snow inside shallow tree holes until August',
              'C. Fungal caps condense morning mountain fog directly onto sapling stems',
              'D. Moisture drawn from deep subsoil leaks into shallow layers where fungal links hydrate nearby seedlings'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D states old trees leak deep groundwater into dry upper soil layers so fungal conduits hydrate shallow seedlings.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Biological Markets, Fungal Hoarding, and the "Mother Tree" Debate',
        subtitle: 'Testing cooperative altruism headlines against competitive resource economics',
        text: `Paragraph A: Popular books and nature documentaries frequently celebrate Common Mycorrhizal Networks as benevolent "Mother Trees" intentionally nursing sick offspring through underground charity pipelines. Yet evolutionary biologists led by Toby Kiers and Justine Karst urge sober caution against projecting human family motives onto fungal ecosystems. Rather than passive copper wires carrying selfless gifts from big trees to tiny saplings, soil fungi act as self-interested market brokers maximizing their own evolutionary fitness.

Paragraph B: Clever root-microcosm experiments demonstrate classic supply-and-demand bargaining underground. When biologists connected multiple host roots sharing one mycorrhizal fungus and artificially shaded certain plants so they supplied less carbon, fungal partners systematically diverted extra phosphorus toward sunlit plants paying richer sugar rewards. Furthermore, fungi frequently hoard valuable phosphorus inside vacuole storage granules until local mineral scarcity boosts the carbon "price" host trees are willing to pay.

Paragraph C: Careful re-examination of classic carbon-transfer isotope experiments raises equally sharp methodological doubts. In many early field studies, researchers traced radioactive or stable carbon isotopes moving from donor leaves into neighboring saplings—yet forgot that traced carbon atoms frequently stop inside fungal tissue sheathing recipient roots without ever entering tree wood or fueling genuine seedling growth. Other molecules travel freely through soil pore water by simple diffusion even after fungal bridges are severed completely with fine mesh barriers.

Paragraph D: Large-scale field reviews compiled by Karst and colleagues in 2023 surveyed hundreds of published forest experiments testing whether intact fungal connections consistently improve seedling survival. Across natural forest stands, seedling growth outcomes varied starkly: roughly one-fifth of experiments revealed positive benefits, nearly half showed neutral results, and over a quarter actually documented stunted sapling growth near large adults due to fierce shade, water competition, and fungal pathogens shared via roots.

Paragraph E: Debating Mother Tree metaphors does not invalidate underground fungal ecology—it sharpens scientific precision. Mycorrhizal networks clearly structure forest recovery, store vast soil carbon, and transfer biochemical cues; understanding them accurately as dynamic biological markets rather than romantic woodland charities allows foresters to predict when thinning or preserving old canopy trees genuinely helps new saplings thrive.`,
        questions: [
          {
            id: 'cd_reading_m7_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph outlines a 2023 synthesis showing negative or neutral sapling outcomes in most surveyed trials?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D reviews Karst\'s 2023 survey showing ~50% neutral and >25% negative sapling growth outcomes.'
          },
          {
            id: 'cd_reading_m7_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph describes fungi rewarding sunlit roots and stockpiling phosphorus in storage granules?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B reports supply-and-demand trials where fungi shift phosphorus to sunlit payers and hoard reserves inside vacuoles.'
          },
          {
            id: 'cd_reading_m7_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph points out technical flaws where traced carbon remains inside outer fungal coats or diffuses via soil water?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes isotopes often stay inside fungal root sheaths or diffuse via soil pore water even across mesh barriers.'
          },
          {
            id: 'cd_reading_m7_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph warns against reading human parenting altruism into fungal behavior?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A critiques "Mother Tree" human family metaphors, portraying fungi as self-interested market brokers.'
          },
          {
            id: 'cd_reading_m7_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Rather than altruistic wiring, evolutionary biologists describe mycorrhizal fungi as independent ______.',
            correctAnswer: 'MARKET BROKERS',
            explanation: 'Paragraph A labels soil fungi self-interested market brokers.'
          },
          {
            id: 'cd_reading_m7_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Fungi stockpile scarce minerals inside microscopic ______ until hosts pay higher carbohydrate prices.',
            correctAnswer: 'VACUOLE STORAGE',
            explanation: 'Paragraph B states fungi hoard phosphorus inside vacuole storage granules.'
          },
          {
            id: 'cd_reading_m7_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Critics note traced carbon often lodges inside ______ covering recipient roots rather than feeding sapling wood.',
            correctAnswer: 'FUNGAL TISSUE',
            explanation: 'Paragraph C states traced carbon frequently stops inside fungal tissue sheathing recipient roots.'
          },
          {
            id: 'cd_reading_m7_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Experiments separating fungal strands with ______ showed water diffusion alone could explain some nutrient transfer.',
            correctAnswer: 'MESH BARRIERS',
            explanation: 'Paragraph C notes diffusion occurs even when fungal bridges are severed with fine mesh barriers.'
          },
          {
            id: 'cd_reading_m7_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Under dense adult canopies, shared root ______ alongside shade and thirst sometimes stunt seedling growth.',
            correctAnswer: 'PATHOGENS',
            explanation: 'Paragraph D names fierce shade, water competition, and fungal pathogens shared via roots.'
          },
          {
            id: 'cd_reading_m7_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'Fungi automatically route the largest phosphorus supplies toward the weakest, most heavily shaded host plants.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B shows fungal partners diverted extra phosphorus toward sunlit plants paying richer sugar rewards.'
          },
          {
            id: 'cd_reading_m7_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'Karst\'s 2023 survey found that intact fungal links boosted sapling growth in over eighty percent of natural trials.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states roughly one-fifth (20%) showed positive benefits, nearly half neutral, and over a quarter stunted growth.'
          },
          {
            id: 'cd_reading_m7_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'Toby Kiers conducted her root-microcosm bargaining experiments inside northern Canadian spruce plantations.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No geographic location for Toby Kiers\' microcosm experiments is specified in Passage 2.'
          },
          {
            id: 'cd_reading_m7_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Viewing fungal links as dynamic markets instead of woodland charities helps foresters design wiser stand management.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E concludes accurate market understanding helps predict when thinning or keeping canopy trees genuinely aids saplings.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Silviculture, Soil Disturbance, and Inoculation Failures in Reforestation',
        subtitle: 'Translating subterranean fungal science into practical timber harvesting and restoration policies',
        text: `Paragraph A: Commercial clear-cutting—removing every mature canopy trunk simultaneously before plowing soil furrows—traditionally boosted rapid tree-planting logistics for timber corporations. Soil microbiologists surveying cutover Pacific plantations discovered severe collateral damage beneath bulldozer treads: tearing out living stumps and broadcasting synthetic nitrogen fertilizers breaks up delicate native mycorrhizal webs, forcing nursery-grown conifer seedlings to struggle through barren mineral earth lacking natural phosphorus bridges.

Paragraph B: Shifting toward variable-retention forestry preserves ecological memory directly inside logged stands. By leaving small clusters of living legacy trees standing every few hectares rather than stripping hillsides bare, timber crews shield pockets of intact shaded topsoil carrying diverse resident fungal species. Newly planted nursery saplings stationed within roughly fifteen meters of legacy root zones tap established fungal webs rapidly, raising early survival noticeably during dry summers compared with open clear-cuts.

Paragraph C: Tempted by booming global carbon-offset pledges, restoration startups frequently skip preserving intact soils and instead scatter mail-order packets of commercial "mycorrhizal booster dust" into every freshly dug sapling hole. Multi-site field audits reveal dismal commercial inoculation results: mass-produced foreign laboratory spores—often dominated by one single aggressive generalist species—frequently die within weeks when pitted against harsh native soil chemistry or locally adapted microbes.

Paragraph D: Worse still, introducing fast-spreading non-native fungal strains into fragile wildlands carries unstudied biosecurity hazards. Once aggressive greenhouse strains colonize native woodland roots, biologists fear they could displace rare endemic soil fungi adapted over millennia to subtle local moisture regimes, altering forest nutrient cycling irreversibly much like invasive surface weeds.

Paragraph E: Sustainable forest restoration therefore begins with soil humility rather than bottled microbial miracles. Where intact woodlands survive, minimizing heavy machinery compaction and retaining patchy legacy canopy pockets preserves priceless native fungal architecture cheaply; where barren mined land must be rebuilt from zero, transplanting small scoops of living topsoil salvaged carefully from nearby healthy reference forests vastly outperforms factory-packaged spore powders.`,
        questions: [
          {
            id: 'cd_reading_m7_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. How conventional clear-cutting and fertilizer runoff damage root webs',
              'ii. Risks of invasive biosecurity harm from foreign fungal strains',
              'iii. Disappointing survival rates of factory-packaged soil spore powders',
              'iv. Retaining pockets of living legacy trees helps young saplings recover',
              'v. Favoring native topsoil transfers and low-impact logging over bottled spores',
              'vi. Breeding timber trees immune to all forest fungi'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A outlines soil damage caused by commercial clear-cutting, soil plowing, and synthetic fertilizers.'
          },
          {
            id: 'cd_reading_m7_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. How conventional clear-cutting and fertilizer runoff damage root webs',
              'ii. Risks of invasive biosecurity harm from foreign fungal strains',
              'iii. Disappointing survival rates of factory-packaged soil spore powders',
              'iv. Retaining pockets of living legacy trees helps young saplings recover',
              'v. Favoring native topsoil transfers and low-impact logging over bottled spores',
              'vi. Breeding timber trees immune to all forest fungi'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B explains variable-retention forestry keeping legacy tree clusters to preserve intact fungal inocula.'
          },
          {
            id: 'cd_reading_m7_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. How conventional clear-cutting and fertilizer runoff damage root webs',
              'ii. Risks of invasive biosecurity harm from foreign fungal strains',
              'iii. Disappointing survival rates of factory-packaged soil spore powders',
              'iv. Retaining pockets of living legacy trees helps young saplings recover',
              'v. Favoring native topsoil transfers and low-impact logging over bottled spores',
              'vi. Breeding timber trees immune to all forest fungi'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph C documents dismal field failure of commercial mail-order mycorrhizal booster dust.'
          },
          {
            id: 'cd_reading_m7_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. How conventional clear-cutting and fertilizer runoff damage root webs',
              'ii. Risks of invasive biosecurity harm from foreign fungal strains',
              'iii. Disappointing survival rates of factory-packaged soil spore powders',
              'iv. Retaining pockets of living legacy trees helps young saplings recover',
              'v. Favoring native topsoil transfers and low-impact logging over bottled spores',
              'vi. Breeding timber trees immune to all forest fungi'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph D warns imported aggressive strains could displace rare endemic fungi like invasive weeds.'
          },
          {
            id: 'cd_reading_m7_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. How conventional clear-cutting and fertilizer runoff damage root webs',
              'ii. Risks of invasive biosecurity harm from foreign fungal strains',
              'iii. Disappointing survival rates of factory-packaged soil spore powders',
              'iv. Retaining pockets of living legacy trees helps young saplings recover',
              'v. Favoring native topsoil transfers and low-impact logging over bottled spores',
              'vi. Breeding timber trees immune to all forest fungi'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph E prioritizes protecting intact soils and transplanting nearby living topsoil over commercial powders.'
          },
          {
            id: 'cd_reading_m7_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why do commercial "mycorrhizal booster dust" packets routinely underperform in restoration planting trials?',
            options: [
              'A. Single laboratory-grown generalist strains often perish quickly against local soil chemistry and native microbes',
              'B. Bulldozers wash synthetic nitrogen dust deep into rivers before rain falls',
              'C. Carbon-offset buyers strictly prohibit planting nursery-grown saplings near legacy stumps',
              'D. Factory spores eat sapling roots within days of planting'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C states mass-produced foreign lab spores dominated by one generalist species die rapidly in harsh native soils.'
          },
          {
            id: 'cd_reading_m7_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What ecological risk arises when non-native commercial soil fungi DO survive inside wild forests?',
            options: [
              'A. They shade newly planted saplings by growing ten-meter mushrooms',
              'B. Legacy tree stumps catch wildfire more rapidly during dry winters',
              'C. Aggressive strains may crowd out rare native soil fungi adapted to local moisture cycles',
              'D. Synthetic fertilizer prices spike across regional agricultural co-ops'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D warns aggressive greenhouse strains could displace rare endemic fungi and alter nutrient cycling irreversibly.'
          },
          {
            id: 'cd_reading_m7_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'How can restoration crews best rebuild fungal diversity on completely barren former mining sites?',
            options: [
              'A. Doubling chemical nitrogen dosages across open gravel beds',
              'B. Transplanting small amounts of living topsoil salvaged from neighboring healthy forests',
              'C. Clearing nearby old-growth stands so sunlit weeds spread fast',
              'D. Importing mail-order greenhouse spores from overseas labs'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E recommends transplanting small scoops of living topsoil salvaged from nearby healthy reference forests.'
          },
          {
            id: 'cd_reading_m7_q35',
            number: 35,
            type: 'true_false_not_given',
            questionText: 'Leaving clusters of living legacy trees helps young saplings planted nearby connect quickly to native fungal networks.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states saplings within ~15 meters of legacy root zones tap established fungal webs rapidly, boosting summer survival.'
          },
          {
            id: 'cd_reading_m7_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Synthetic nitrogen fertilizers strengthen and protect native mycorrhizal networks inside logged stands.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A explains removing stumps and broadcasting synthetic nitrogen fertilizers breaks up delicate native mycorrhizal webs.'
          },
          {
            id: 'cd_reading_m7_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'International timber treaties banned all clear-cutting across Pacific North America starting in 2020.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No 2020 international treaty banning clear-cutting is mentioned in Passage 3.'
          },
          {
            id: 'cd_reading_m7_q38',
            number: 38,
            type: 'short_answer',
            questionText: 'Within roughly how many meters of legacy tree root zones can planted saplings readily join established fungal webs?',
            correctAnswer: 'FIFTEEN METERS',
            explanation: 'Paragraph B specifies within roughly fifteen meters of legacy root zones.'
          },
          {
            id: 'cd_reading_m7_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'What forestry practice preserves small clusters of living trees across logged sites instead of stripping land bare?',
            correctAnswer: 'VARIABLE-RETENTION FORESTRY',
            explanation: 'Paragraph B names "variable-retention" forestry.'
          },
          {
            id: 'cd_reading_m7_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'To what familiar surface threat does Paragraph D compare invasive commercial fungal strains?',
            correctAnswer: 'INVASIVE SURFACE WEEDS',
            explanation: 'Paragraph D likens their irreversible spread to invasive surface weeds.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 8 (MODERATE): cd_reading_m8 (Medieval Windmills and Tidal Mills in Northwestern Europe)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m8',
    testNumber: 8,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 8: Medieval Windmills and Tidal Mills in Northwestern Europe',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on horizontal-axle post mills, coastal tidal mill impoundments, and medieval estate economies.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: The Emergence of the European Vertical-Sail Post Mill',
        subtitle: 'Solving wind-direction shifts across flat northern European grain plains',
        text: `Paragraph A: Long before steam pistons hummed inside nineteenth-century brick factories, medieval northern Europe underwent a quiet mechanical transformation powered purely by flowing rivers, ocean tides, and Atlantic breezes. While horizontal-wheeled wind devices had pumped well water and spun small millstones across arid ninth-century Persian plateaus—trapped behind directional stone walls channeling steady seasonal winds—those vertical-axis designs delivered weak mechanical torque across shifting coastal breezes in Britain, Flanders, and northern Germany.

Paragraph B: Around the 1180s, medieval European carpenters unveiled a distinctly different machine: the vertical-sail "post mill." Unlike Persian vertical-shaft rotors rotating flat like carousel merry-go-rounds, the European post mill mounted four tall wooden lattice sails onto a slightly tilted horizontal windshaft piercing the upper gable of an elevated timber millhouse. Converting horizontal shaft spin downward through massive oak crown gears drove heavy basalt millstones smoothly inside the wooden body below.

Paragraph C: Crucially, Atlantic winds rarely blow reliably from one fixed compass quadrant. Because fixed mill walls would fall idle whenever winds turned southward, post-mill builders balanced the entire elevated wooden mill cabin—often weighing twenty metric tons complete with heavy millstones and grain hoppers—atop a colossal central vertical oak upright known as the main post, anchored securely inside crossed timber trestle beams raised off damp soil to prevent fungal rot.

Paragraph D: Extending out behind the wooden stairs projected a stout thirty-foot oak tailpole. Whenever wind direction shifted across open wheat fields, the miller walked down the steps, hitched a draft horse or braced his own shoulder against the tailpole lever, and physically pushed the whole elevated timber house around its central oak pivot until the canvas sails faced squarely into the fresh wind.

Paragraph E: Post mills rapidly colonized flat lowlands lacking steep river waterfalls—particularly windy coastal marshes in Flanders, eastern England, and Denmark. Monastic chroniclers noted how furiously rival manorial lords argued over wind rights: erecting new oak trees or tall barns upwind of a neighbor's mill provoked furious medieval lawsuits accusing landowners of illegally stealing wind velocity.`,
        questions: [
          {
            id: 'cd_reading_m8_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Medieval Persian vertical-axis windmills relied on fixed walls guiding steady directional winds.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes ninth-century Persian devices stood behind directional stone walls channeling steady seasonal winds.'
          },
          {
            id: 'cd_reading_m8_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'European post mills used horizontal merry-go-round sails tucked inside thick stone walls.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states the European post mill mounted vertical lattice sails onto an exposed tilted horizontal windshaft.'
          },
          {
            id: 'cd_reading_m8_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Builders lifted post-mill foundation trestles clear of damp ground to prevent timber decay.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C notes crossed timber trestle beams were raised off damp soil to prevent fungal rot.'
          },
          {
            id: 'cd_reading_m8_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Millers rotated post-mill cabins using automated iron weathervane gears starting in 1185.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D explains the miller walked outside and physically pushed a stout oak tailpole by hand or draft horse.'
          },
          {
            id: 'cd_reading_m8_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Danish kings collected special gold tariffs on every canvas sail imported from Flanders.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions Flanders, eastern England, and Denmark with no gold tariffs on Flemish canvas.'
          },
          {
            id: 'cd_reading_m8_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Why did ninth-century Persian windmill architecture perform poorly in northern European grain plains?',
            options: [
              'A. Persian stones dissolved quickly in Atlantic coastal frost',
              'B. European rivers froze solid year-round across Flanders',
              'C. Basalt millstones were unknown in England before 1400',
              'D. Its fixed-wall vertical-axis design delivered weak torque under frequently shifting northern winds'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph A states vertical-axis Persian designs delivered weak mechanical torque across shifting northern coastal breezes.'
          },
          {
            id: 'cd_reading_m8_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What mechanical purpose did the colossal central oak main post serve inside a European post mill?',
            options: [
              'A. It served as a balanced pivot letting the entire elevated millhouse rotate into shifting winds',
              'B. It funneled harvested grain downward from canvas sails to horse carts',
              'C. It vented hot millstone friction smoke upward above steep marshes',
              'D. It powered coastal drainage pumps beneath monastic barns'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraphs C–D show the entire twenty-ton cabin balanced on the central oak post so a tailpole could turn sails squarely into wind.'
          },
          {
            id: 'cd_reading_m8_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Where did medieval post mills spread most rapidly across Europe?',
            options: [
              'A. Steep Alpine valleys filled with cascading glacier waterfalls',
              'B. Urban fortress towers inside southern Italian walled cities',
              'C. Flat wind-swept lowlands lacking fast-falling streams for watermills',
              'D. High arid plateaus resembling central Persia'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E explains post mills colonized flat lowlands lacking steep river waterfalls in Flanders, eastern England, and Denmark.'
          },
          {
            id: 'cd_reading_m8_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What legal disputes emerged between rival medieval landowners regarding windmills in Paragraph E?',
            options: [
              'A. Disagreements over importing basalt stones from Norwegian volcanoes',
              'B. Lawsuits accusing neighbors of blocking wind by planting trees or raising tall barns upwind',
              'C. Strikes by draft horses over excessive tailpole weights',
              'D. Monastic bans against grinding wheat flour on windy Sundays'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E notes lawsuits accusing neighbors of stealing wind velocity by building barns or planting oak trees upwind.'
          },
          {
            id: 'cd_reading_m8_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Roughly in which decade did the European vertical-sail post mill first appear?',
            correctAnswer: 'THE 1180S',
            explanation: 'Paragraph B dates its unveiling around the 1180s.'
          },
          {
            id: 'cd_reading_m8_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Approximately how heavy could a fully loaded rotating post-mill cabin be?',
            correctAnswer: 'TWENTY METRIC TONS',
            explanation: 'Paragraph C states twenty metric tons complete with millstones and hoppers.'
          },
          {
            id: 'cd_reading_m8_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'How long was the stout oak tailpole extending from the rear stairs of a post mill?',
            correctAnswer: 'THIRTY-FOOT',
            explanation: 'Paragraph D specifies a stout thirty-foot oak tailpole.'
          },
          {
            id: 'cd_reading_m8_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'From which tough volcanic stone were heavy interior grinding millstones cut?',
            correctAnswer: 'BASALT',
            explanation: 'Paragraph B names heavy basalt millstones.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Tidal Mill Impoundments Along Atlantic Estuaries',
        subtitle: 'Harnessing predictable lunar ocean cycles where inland rivers froze or slowed',
        text: `Paragraph A: While inland watermills required steep hillsides and windmills stalled completely during still autumn calm, medieval coastal engineers tapped a remarkably clockwork alternative: daily ocean tides. Along rugged sheltered estuaries stretching from Ireland's Nendrum Monastery (dated by dendrochronology to 619 CE) across Brittany, England's southern creeks, and coastal Iberia, communities built sturdy stone tidal mills harnessing lunar tidal swings exceeding four meters.

Paragraph B: Operating a tidal mill demanded clever hydraulic timing around low and high water rather than continuous round-the-clock grinding. Engineers selected a natural tidal creek mouth and closed it off with a thick stone-and-clay causeway pierced by massive oak flap-valves known as sea gates. During rising incoming flood tides, surging ocean water pushed hinged gates gently inward, filling a broad sheltered tidal pond behind the dam without requiring human labor.

Paragraph C: Moments after high tide peaked and ocean levels began ebbing seaward, inward water pressure eased and heavy oak sea gates slammed tightly shut automatically, trapping acres of elevated seawater behind the dike. The miller waited roughly two to three hours until the outside estuary dropped well below the trapped pond surface, exposing a steep vertical waterfall drop right beneath the stone millhouse arch.

Paragraph D: Opening wooden sluice paddles then released impounded pond water violently down a narrow stone trough, spinning an undershot oak waterwheel steadily for four to five uninterrupted hours until pond and sea equilibrated near low water. Because lunar tides advance roughly fifty minutes later every twenty-four hours, tidal millers lived strictly by astronomical moonlight schedules rather than church bells—rising cheerfully at three in the morning when peak ebb falls coincided with pre-dawn darkness.

Paragraph E: Despite demanding massive upfront causeway stonework and patient daily maintenance clearing marine barnacles and shifting silt mudflats, well-sited tidal mills boasted enviable reliability: coastal water seldom froze solid even during bitter medieval winters, guaranteeing steady grain milling regardless of drought or windless fog.`,
        questions: [
          {
            id: 'cd_reading_m8_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Early archaeological evidence of European coastal tidal power',
              'ii. Why trapping incoming tides depended on automatic one-way sea gates',
              'iii. Living by shifting lunar clocks rather than fixed village hours',
              'iv. Waiting for ebbing ocean water to create a sharp grinding drop',
              'v. Comparing cold-weather reliability against heavy dike maintenance',
              'vi. Abandoning timber wheels in favor of coastal coal furnaces'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A introduces early estuarine tidal mills from Nendrum (619 CE) to Brittany and Iberia.'
          },
          {
            id: 'cd_reading_m8_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Early archaeological evidence of European coastal tidal power',
              'ii. Why trapping incoming tides depended on automatic one-way sea gates',
              'iii. Living by shifting lunar clocks rather than fixed village hours',
              'iv. Waiting for ebbing ocean water to create a sharp grinding drop',
              'v. Comparing cold-weather reliability against heavy dike maintenance',
              'vi. Abandoning timber wheels in favor of coastal coal furnaces'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B details damming creek mouths with automatic hinged oak sea gates that admit floodwater.'
          },
          {
            id: 'cd_reading_m8_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Early archaeological evidence of European coastal tidal power',
              'ii. Why trapping incoming tides depended on automatic one-way sea gates',
              'iii. Living by shifting lunar clocks rather than fixed village hours',
              'iv. Waiting for ebbing ocean water to create a sharp grinding drop',
              'v. Comparing cold-weather reliability against heavy dike maintenance',
              'vi. Abandoning timber wheels in favor of coastal coal furnaces'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C explains waiting two to three hours post-high-tide until falling sea levels expose a waterfall drop.'
          },
          {
            id: 'cd_reading_m8_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Early archaeological evidence of European coastal tidal power',
              'ii. Why trapping incoming tides depended on automatic one-way sea gates',
              'iii. Living by shifting lunar clocks rather than fixed village hours',
              'iv. Waiting for ebbing ocean water to create a sharp grinding drop',
              'v. Comparing cold-weather reliability against heavy dike maintenance',
              'vi. Abandoning timber wheels in favor of coastal coal furnaces'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains how 50-minute daily lunar tidal shifts governed irregular grinding work shifts.'
          },
          {
            id: 'cd_reading_m8_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Tree-ring ______ dated timber remains of Ireland\'s Nendrum tidal mill cleanly to 619 CE.',
            correctAnswer: 'DENDROCHRONOLOGY',
            explanation: 'Paragraph A states Nendrum Monastery was dated by dendrochronology to 619 CE.'
          },
          {
            id: 'cd_reading_m8_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Surging incoming ocean tides swung hinged ______ open effortlessly to refill the sheltered holding basin.',
            correctAnswer: 'SEA GATES',
            explanation: 'Paragraph B specifies hinged oak flap-valves known as sea gates.'
          },
          {
            id: 'cd_reading_m8_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Releasing stored water spun an undershot wooden ______ continuously for four to five hours.',
            correctAnswer: 'WATERWHEEL',
            explanation: 'Paragraph D describes spinning an undershot oak waterwheel steadily.'
          },
          {
            id: 'cd_reading_m8_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'High-tide mill operations moved forward roughly ______ minutes later every calendar day.',
            correctAnswer: 'FIFTY',
            explanation: 'Paragraph D specifies lunar tides advance roughly fifty minutes later every twenty-four hours.'
          },
          {
            id: 'cd_reading_m8_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Caretakers regularly scraped encrusting ______ and cleared shifting mud along masonry causeways.',
            correctAnswer: 'MARINE BARNACLES',
            explanation: 'Paragraph E notes patient daily maintenance clearing marine barnacles and shifting silt mudflats.'
          },
          {
            id: 'cd_reading_m8_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph gives the exact duration of uninterrupted milling per tidal cycle?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D states water spun the waterwheel steadily for four to five uninterrupted hours.'
          },
          {
            id: 'cd_reading_m8_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph contrasts tidal resilience during bitter winter freezes and summer droughts?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E notes coastal water seldom froze solid in winter and ignored drought or windless fog.'
          },
          {
            id: 'cd_reading_m8_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph mentions a tidal range exceeding four meters in sheltered European bays?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A describes communities harnessing lunar tidal swings exceeding four meters.'
          },
          {
            id: 'cd_reading_m8_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph explains why millers waited up to three hours after peak tide before lifting sluices?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes waiting two to three hours until the outer estuary fell far below the pond surface.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Tower Mills, Fulling Cloth, and the Feudal Milling Economy',
        subtitle: 'Social monopolies, labor savings, and late-medieval transition to automated brick towers',
        text: `Paragraph A: Beyond coastal grain flour, mechanical mills transformed medieval textile production, iron forging, and rural labor hierarchies across northwestern Europe. Using simple wooden cams pinned onto horizontal waterwheel axles, artisans converted smooth rotary spin into rhythmic vertical hammering—creating "fulling mills" that mechanically pounded raw woolen cloth in soapy fuller's earth baths, replacing exhausting hours of barefoot human treading with water-powered mallets by the thirteenth century.

Paragraph B: Meanwhile, wind engineering evolved past fragile wooden post mills toward taller masonry "tower mills" by the fourteenth century. Instead of pivoting an entire heavy wooden storage barn atop one oak trunk whenever wind shifted, masons erected stationary circular brick or stone towers topped merely by a lightweight rotating wooden roof cap carrying the sails—permitting towering heights that caught cleaner upper winds while housing spacious multi-story grain silos below.

Paragraph C: Controlling mechanical mills conferred immense political leverage upon medieval abbeys and feudal nobles. Under strict manorial rules known as "soke rights," villagers were legally barred from grinding barley or wheat at home with portable stone hand-querns; peasants had to haul sacks exclusively to the lord's central wind or tidal mill, surrendering a fixed toll—typically one-sixteenth of finished flour—to the estate bailiff.

Paragraph D: Predictably, peasant households resented compulsory tolls and routinely hid illicit stone hand-mills beneath cottage floorboards. When St Albans Abbey's fourteenth-century bailiffs raided homes and confiscated buried hand-querns to pave the monastery's courtyard floor as a triumphant monument, furious tenants stormed the abbey during the Peasants' Revolt of 1381—literally prying up the paving stones to reclaim their domestic milling tools.

Paragraph E: Yet over centuries, spreading wind and tidal mechanization steadily rewrote European productivity. By transferring monotonous grain pounding and cloth beating from aching human muscles onto predictable wind and lunar currents, medieval technicians laid practical mechanical traditions—precision wooden gearing, braking levers, and rotating tower caps—that later underpinned Britain's early Industrial Revolution.`,
        questions: [
          {
            id: 'cd_reading_m8_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Medieval fulling mills automated woolen cloth pounding that previously required barefoot human treading.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states mechanical wooden mallets replaced exhausting hours of barefoot human treading.'
          },
          {
            id: 'cd_reading_m8_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Fourteenth-century tower mills still rotated their entire heavy brick storage body whenever wind shifted.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B specifies tower mills stood stationary while only a lightweight rotating wooden roof cap turned.'
          },
          {
            id: 'cd_reading_m8_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Feudal soke regulations permitted English villagers to grind wheat freely at home whenever estate windmills stood idle.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C states villagers were legally barred from grinding grain at home with portable hand-querns.'
          },
          {
            id: 'cd_reading_m8_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Dutch engineers invented circular brick tower mills exclusively inside Amsterdam dockyards in 1310.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B mentions fourteenth-century masonry tower mills without specifying Amsterdam dockyards or 1310.'
          },
          {
            id: 'cd_reading_m8_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Mechanical gearing and braking ideas from medieval mills influenced later industrial engineering.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E notes wooden gearing, braking levers, and rotating caps laid traditions underpinning the early Industrial Revolution.'
          },
          {
            id: 'cd_reading_m8_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Simple ______ mounted onto turning waterwheel shafts lifted heavy hammers inside cloth-pounding workshops.',
            correctAnswer: 'WOODEN CAMS',
            explanation: 'Paragraph A notes artisans pinned simple wooden cams onto horizontal waterwheel axles.'
          },
          {
            id: 'cd_reading_m8_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Fixed stone tower mills revolved only a light wooden ______ to face changing gusts.',
            correctAnswer: 'ROOF CAP',
            explanation: 'Paragraph B describes a lightweight rotating wooden roof cap carrying the sails.'
          },
          {
            id: 'cd_reading_m8_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Under legal ______ monopolies, estates charged roughly one-sixteenth of processed flour as a milling fee.',
            correctAnswer: 'SOKE RIGHTS',
            explanation: 'Paragraph C refers to strict manorial rules known as "soke rights."'
          },
          {
            id: 'cd_reading_m8_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Villagers at St Albans hid illegal stone ______ underneath cottage flooring to escape estate tolls.',
            correctAnswer: 'HAND-QUERNS',
            explanation: 'Paragraphs C and D mention portable stone hand-querns hidden beneath floorboards.'
          },
          {
            id: 'cd_reading_m8_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'What major architectural advantage did fourteenth-century tower mills gain over older post mills?',
            options: [
              'A. Tower mills removed the need for wooden sails or internal gears',
              'B. Masons built tower mills directly atop submerged ocean causeways',
              'C. Only the light roof cap turned while fixed masonry walls held larger grain silos and caught brisk high winds',
              'D. Brick walls eliminated every estate grain tax overnight'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B explains stationary brick/stone towers supported tall heights catching cleaner upper winds plus multi-story silos.'
          },
          {
            id: 'cd_reading_m8_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did St Albans tenants tear up monastery paving stones during the 1381 Peasants\' Revolt?',
            options: [
              'A. To reclaim confiscated domestic hand-mills that the abbey had mortared into its floor',
              'B. To uncover fresh basalt blocks for Flemish sea dikes',
              'C. To search for hidden silver coins buried beneath oak windshafts',
              'D. To drain winter marsh mud flooding the monastery grain silos'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states bailiffs paved the courtyard with confiscated hand-querns, which angry tenants pried up in 1381.'
          },
          {
            id: 'cd_reading_m8_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How did water-powered fulling mills change thirteenth-century cloth production?',
            options: [
              'A. They dyed raw sheep wool purple using Atlantic sea snails',
              'B. They ended all sheep grazing across rural British estates',
              'C. They wove finished silk robes directly aboard river barges',
              'D. Rotating cams drove heavy mallets to pound soapy cloth faster than human foot-treading'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph A explains wooden cams converted rotary spin into vertical mallet pounding in soapy fuller\'s earth baths.'
          },
          {
            id: 'cd_reading_m8_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Which best captures the author\'s concluding evaluation of medieval wind and water mechanization?',
            options: [
              'A. Rural mills slowed technological progress until coal steam engines arrived',
              'B. Shifting grueling muscle tasks to wind and water fostered mechanical traditions vital to later industry',
              'C. Estate tolls completely prevented tower mills from spreading beyond St Albans',
              'D. Tidal mills proved too fragile to survive beyond the seventh century'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E highlights labor relief and precision gearing/braking traditions underpinning Britain\'s Industrial Revolution.'
          },
          {
            id: 'cd_reading_m8_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Estate bailiffs typically demanded one-quarter of a villager\'s ground wheat as a compulsory milling toll.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states peasants surrendered typically one-sixteenth of finished flour, not one-quarter.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 9 (MODERATE): cd_reading_m9 (Neuroplasticity in Stroke Recovery and Motor Cortex Remapping)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m9',
    testNumber: 9,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 9: Neuroplasticity in Stroke Recovery and Motor Cortex Remapping',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on cortical reorganization, constraint-induced movement therapy, and non-invasive brain stimulation trials.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Cortical Map Plasticity Following Focal Ischemic Stroke',
        subtitle: 'Overturning rigid adult brain localization models through functional mapping',
        text: `Paragraph A: Well into the late twentieth century, clinical neurology textbooks depicted the mature adult human brain as largely hardwired once childhood ended. Under that static view, when an ischemic blood clot blocked a cerebral artery and starved neurons of oxygen—an event known as focal stroke—functional territories lost inside the motor cortex were presumed gone forever. Any partial physical recovery observed months later was attributed merely to reduced swelling or patients learning clumsy workarounds with their healthy limb.

Paragraph B: Groundbreaking microelectrode animal experiments conducted during the 1990s by neurophysiologist Randolph Nudo dismantled that fatalistic consensus. Mapping motor cortices of adult squirrel monkeys trained to pluck tiny food pellets from narrow wells, Nudo induced miniature controlled strokes destroying the exact finger-control region. Without structured rehabilitation afterward, surviving adjacent hand representations actually shrank further as injured monkeys stopped trying to use their stiff impaired fingers.

Paragraph C: Crucially, when Nudo gently fitted cotton jackets restraining monkeys' intact arms—forcing daily intensive pellet-retrieval practice solely with the stroke-affected hand—astonishing neural reorganization unfolded within weeks. Fine microelectrode maps revealed surviving elbow and shoulder zones immediately bordering the scarred stroke core had expanded dramatically, taking over delicate finger-pinching commands previously executed exclusively inside the dead tissue zone.

Paragraph D: Subsequent human neuroimaging using functional MRI and transcranial magnetic stimulation (TMS) confirmed parallel "perilesional remapping" in stroke survivors. Brain scans captured week-by-week showed intact cortex surrounding an infarct lighting up strongly whenever recovering patients practiced repetitive wrist extensions, alongside recruitment of supplementary premotor networks and mirror-image circuits across the undamaged opposite hemisphere.

Paragraph E: Neurologists now emphasize a crucial temporal window of heightened biological plasticity following stroke injury. During the first one to three months post-stroke, surviving neurons sprout fresh dendritic spines and release permissive growth factors—creating a fertile yet fleeting period when targeted intensive physiotherapy produces dramatically greater cortical reorganization than equivalent practice delayed years later.`,
        questions: [
          {
            id: 'cd_reading_m9_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'When a cerebral clot interrupts blood oxygen delivery, doctors diagnose an ______ stroke.',
            correctAnswer: 'ISCHEMIC',
            explanation: 'Paragraph A explains an ischemic blood clot blocks a cerebral artery and starves neurons.'
          },
          {
            id: 'cd_reading_m9_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'In Nudo\'s early control group without practice, adjacent hand brain maps ______ further after injury.',
            correctAnswer: 'SHRANK',
            explanation: 'Paragraph B states without structured rehabilitation, surviving adjacent hand representations actually shrank further.'
          },
          {
            id: 'cd_reading_m9_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Following intensive practice, neighboring ______ and shoulder brain areas adapted to guide lost finger movements.',
            correctAnswer: 'ELBOW',
            explanation: 'Paragraph C reports surviving elbow and shoulder zones expanded to take over delicate finger-pinching commands.'
          },
          {
            id: 'cd_reading_m9_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'MRI studies track intact cortical zones bordering scars lighting up in a shift termed ______ remapping.',
            correctAnswer: 'PERILESIONAL',
            explanation: 'Paragraph D calls this human reorganization "perilesional remapping."'
          },
          {
            id: 'cd_reading_m9_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'During the initial post-stroke quarter, surviving cells grow new ______ to reconnect neural pathways.',
            correctAnswer: 'DENDRITIC SPINES',
            explanation: 'Paragraph E specifies surviving neurons sprout fresh dendritic spines during the first one to three months.'
          },
          {
            id: 'cd_reading_m9_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Classic late-twentieth-century neurology assumed mature adult cortical maps could never reassign lost motor jobs.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states textbooks depicted the adult brain as hardwired, assuming lost motor cortex territories were gone forever.'
          },
          {
            id: 'cd_reading_m9_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Monkeys allowed to eat freely using their uninjured hand spontaneously restored full finger maps without restraint.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states adjacent hand representations shrank further when monkeys stopped trying to use impaired fingers.'
          },
          {
            id: 'cd_reading_m9_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Human stroke recovery involves solely the damaged hemisphere without activating the opposite healthy side of the brain.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D mentions recruitment of mirror-image circuits across the undamaged opposite hemisphere.'
          },
          {
            id: 'cd_reading_m9_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Randolph Nudo won a European pharmaceutical prize for designing stroke-dissolving blood thinners.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs B–C focus on Nudo\'s motor-mapping monkey studies with no pharmaceutical prize or blood thinners mentioned.'
          },
          {
            id: 'cd_reading_m9_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'Which primate species did Randolph Nudo study in his 1990s pellet-picking experiments?',
            correctAnswer: 'SQUIRREL MONKEYS',
            explanation: 'Paragraph B specifies adult squirrel monkeys.'
          },
          {
            id: 'cd_reading_m9_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'What light garments restrained monkeys\' healthy arms to compel injured-hand practice?',
            correctAnswer: 'COTTON JACKETS',
            explanation: 'Paragraph C notes Nudo fitted cotton jackets restraining the intact arms.'
          },
          {
            id: 'cd_reading_m9_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'How did early neurology textbooks explain minor physical improvements months after a severe stroke?',
            options: [
              'A. Fading brain swelling and patients compensating clumsily with their uninjured side',
              'B. Rapid regrowth of broken blood arteries inside primary motor cores',
              'C. Spontaneous electrical boosts from premotor growth supplements',
              'D. Complete transplantation of healthy elbow neurons into damaged finger slots'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A attributes early recovery theories to reduced swelling or patients learning clumsy workarounds with their healthy limb.'
          },
          {
            id: 'cd_reading_m9_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why do rehabilitation clinics prioritize structured physiotherapy within the first three months post-stroke?',
            options: [
              'A. Insurance companies refuse to pay for gym equipment after four months',
              'B. Transcranial magnetic stimulation stops working altogether after ninety days',
              'C. Dendritic spine sprouting and growth-factor release make neural rewiring far more responsive early on',
              'D. Premotor cortex tissue turns completely rigid immediately after hospital discharge'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E explains that in months 1–3, sprouting dendritic spines and permissive growth factors create heightened plasticity.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Overcoming "Learned Non-Use" Through Constraint-Induced Therapy',
        subtitle: 'Translating laboratory primate restraint lessons into human neurorehabilitation clinics',
        text: `Paragraph A: Anyone visiting a hospital stroke ward notices a puzzling clinical paradox: patients with moderate physical movement remaining in an arm frequently abandon using that limb entirely during everyday dressing or eating. Behavioral neuroscientist Edward Taub termed this self-reinforcing spiral "learned non-use." During the acute swollen weeks right after stroke, every attempt to lift a cup with the weak hand ends in painful drops or frustration—teaching the nervous system subconsciously that trying fails, while compensating rapidly with the strong arm feels instantly rewarding.

Paragraph B: Even after brain swelling subsides and severed nerves partially stabilize months later, the deeply conditioned avoidance habit endures. Because sparse nerve signals never practice firing together, residual cortical hand pathways wither further from chronic disuse. Taub argued that breaking learned non-use requires temporarily blocking the patient's habitual crutch while compelling sustained graded effort from the neglected limb.

Paragraph C: Formalized as Constraint-Induced Movement Therapy (CIMT), the intensive clinical protocol restricts a stroke survivor's healthy arm inside a padded resting mitt for roughly ninety percent of waking hours across two consecutive weeks. Simultaneously, physical therapists guide the patient through six hours daily of structured "shaping" tasks—progressively stacking wooden blocks, flipping playing cards, or turning doorknobs with calibrated feedback celebrating tiny gains in speed and grip smoothness.

Paragraph D: Landmark multi-center randomized trials—most famously the US-based EXCITE study spanning over two hundred stroke survivors three to nine months after injury—validated CIMT's real-world effectiveness. Participants completing two weeks of intensive constraint therapy demonstrated significantly larger, longer-lasting improvements in daily arm function compared with patients receiving standard low-intensity outpatient stretching—gains persisting reliably twelve months afterward.

Paragraph E: Clinicians nevertheless recognize strict patient eligibility limits preventing universal CIMT prescription. Severely paralyzed patients lacking minimal baseline wrist or finger extension cannot complete active shaping drills safely, while six-hour daily therapist supervision demands intense clinical staffing and high patient stamina. Modern clinics increasingly distribute gentler "modified CIMT" sessions across six to ten weeks using wearable activity sensors that remind survivors at home whenever their weaker arm sits forgotten.`,
        questions: [
          {
            id: 'cd_reading_m9_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph cites a large multi-hospital clinical study tracking survivors for a full year?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D highlights the EXCITE study spanning 200+ patients with functional gains persisting 12 months later.'
          },
          {
            id: 'cd_reading_m9_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph outlines why full six-hour clinic protocols exclude patients with severe paralysis?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E notes severely paralyzed patients lacking baseline wrist/finger extension cannot do active shaping drills.'
          },
          {
            id: 'cd_reading_m9_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph defines how early clumsiness conditions patients to abandon an impaired hand permanently?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A defines Edward Taub\'s concept of "learned non-use."'
          },
          {
            id: 'cd_reading_m9_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph details wearing a padded glove for ninety percent of waking time during two-week clinic drills?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C describes the padded resting mitt worn 90% of waking hours alongside six-hour daily shaping.'
          },
          {
            id: 'cd_reading_m9_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Early failures encourage patients to rely swiftly on their intact limb, locking in ______.',
            correctAnswer: 'LEARNED NON-USE',
            explanation: 'Paragraph A names this conditioned avoidance spiral "learned non-use."'
          },
          {
            id: 'cd_reading_m9_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Even after swelling clears, neglected motor nerves weaken further due to chronic ______.',
            correctAnswer: 'DISUSE',
            explanation: 'Paragraph B states residual cortical hand pathways wither further from chronic disuse.'
          },
          {
            id: 'cd_reading_m9_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'During two-week CIMT clinics, therapists guide patients through progressive daily ______ exercises like card flipping.',
            correctAnswer: 'SHAPING',
            explanation: 'Paragraph C identifies structured "shaping" tasks.'
          },
          {
            id: 'cd_reading_m9_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Patients in the multi-center ______ trial retained superior arm mobility twelve months following therapy.',
            correctAnswer: 'EXCITE',
            explanation: 'Paragraph D cites the landmark US-based EXCITE study.'
          },
          {
            id: 'cd_reading_m9_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Less exhausting outpatient schedules stretch therapy over weeks supported by home ______ prompting neglected limb use.',
            correctAnswer: 'ACTIVITY SENSORS',
            explanation: 'Paragraph E notes wearable activity sensors reminding survivors at home.'
          },
          {
            id: 'cd_reading_m9_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'Using one\'s healthy arm easily right after stroke reinforces avoidance of the weaker limb.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A explains painful failure with the weak hand contrasted with instant reward using the strong arm breeds learned non-use.'
          },
          {
            id: 'cd_reading_m9_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'EXCITE clinical researchers enrolled patients immediately during their first twenty-four hours in intensive care.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D specifies EXCITE enrolled stroke survivors three to nine months after injury.'
          },
          {
            id: 'cd_reading_m9_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'Patients completely paralyzed in wrist and fingers recover full card-flipping speed after standard two-week CIMT.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E states severely paralyzed patients lacking minimal wrist or finger extension cannot safely perform CIMT shaping.'
          },
          {
            id: 'cd_reading_m9_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Edward Taub personally invented wearable digital activity watches in 2015.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions wearable sensors used in modern clinics without crediting Taub with inventing them in 2015.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Robotic Exoskeletons, Brain Stimulation, and Rebalancing Interhemispheric Inhibition',
        subtitle: 'Weighing high-tech neuro-modulation adjuncts against active repetitive task practice',
        text: `Paragraph A: Watching severely paralyzed survivors struggle inside standard physiotherapy gyms inspired bioengineers to develop motorized upper-limb exoskeletons, virtual-reality gloves, and scalp-mounted electrical brain stimulators. Hailed across technology exhibitions as future fast tracks to stroke recovery, emerging neuro-technologies raise a critical clinical question: do passive robotic devices and electrical currents genuinely boost cortical rewiring, or merely deliver expensive mechanical assistance?

Paragraph B: Clinical trials of motorized gait trainers and arm robots reveal a crucial neurological distinction between passive stretching and active effort. Earlier robots that moved a patient's paralyzed limb smoothly along fixed rails regardless of mental effort yielded disappointing functional gains; without conscious motor intent firing descending cortical commands, muscles flexed passively while motor cortex maps remained dormant. Modern "assist-as-needed" robotics wait patiently until subtle muscle electrical signals confirm the patient initiated movement first before assisting completion.

Paragraph C: Non-invasive brain stimulation attempts to tilt recovery chemistry even more directly. Normally, healthy left and right motor cortices regulate each other via cross-callosal inhibitory signals preventing unwanted mirror movements. After unilateral stroke, however, the overactive intact hemisphere often bombards the weakened damaged side with excessive braking inhibition—further muffling surviving perilesional circuits.

Paragraph D: Applying mild direct current via sponge scalp electrodes—known as transcranial direct current stimulation (tDCS)—or magnetic coil pulses via repetitive TMS seeks either to excite surviving circuits around the lesion or gently dampen overbearing signals from the healthy opposite side prior to physiotherapy. Yet large-scale controlled hospital trials have yielded frustratingly mixed results: while small single-center studies showed modest gains, multi-center trials often found real stimulation matched sham placebo pads once structured physical therapy was equalized.

Paragraph E: Most rehabilitation scientists therefore view robotics and brain modulation strictly as potential amplifiers—never standalone cures replacing active, task-specific repetition. True motor cortex remapping still depends fundamentally on an engaged human patient attempting meaningful movements thousands of times, guided carefully by skilled therapists.`,
        questions: [
          {
            id: 'cd_reading_m9_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Debating whether futuristic rehabilitation tools genuinely enhance brain rewiring',
              'ii. Why passive robots failed until smart sensors waited for user intent',
              'iii. How an overactive healthy hemisphere can suppress injured brain tissue',
              'iv. Large trials cast doubt on standalone benefits of scalp electrical stimulation',
              'v. Active repetitive patient effort stays essential alongside technological aids',
              'vi. Replacing all human physical therapists with wireless VR helmets'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A poses the central clinical question regarding robotic and electrical neuro-technology.'
          },
          {
            id: 'cd_reading_m9_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Debating whether futuristic rehabilitation tools genuinely enhance brain rewiring',
              'ii. Why passive robots failed until smart sensors waited for user intent',
              'iii. How an overactive healthy hemisphere can suppress injured brain tissue',
              'iv. Large trials cast doubt on standalone benefits of scalp electrical stimulation',
              'v. Active repetitive patient effort stays essential alongside technological aids',
              'vi. Replacing all human physical therapists with wireless VR helmets'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B contrasts ineffective passive robots against "assist-as-needed" robotics triggered by muscle signals.'
          },
          {
            id: 'cd_reading_m9_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Debating whether futuristic rehabilitation tools genuinely enhance brain rewiring',
              'ii. Why passive robots failed until smart sensors waited for user intent',
              'iii. How an overactive healthy hemisphere can suppress injured brain tissue',
              'iv. Large trials cast doubt on standalone benefits of scalp electrical stimulation',
              'v. Active repetitive patient effort stays essential alongside technological aids',
              'vi. Replacing all human physical therapists with wireless VR helmets'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph C explains interhemispheric braking inhibition where the healthy side suppresses the weakened damaged cortex.'
          },
          {
            id: 'cd_reading_m9_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Debating whether futuristic rehabilitation tools genuinely enhance brain rewiring',
              'ii. Why passive robots failed until smart sensors waited for user intent',
              'iii. How an overactive healthy hemisphere can suppress injured brain tissue',
              'iv. Large trials cast doubt on standalone benefits of scalp electrical stimulation',
              'v. Active repetitive patient effort stays essential alongside technological aids',
              'vi. Replacing all human physical therapists with wireless VR helmets'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph D reviews tDCS/TMS trials where multi-center outcomes often matched sham placebo pads.'
          },
          {
            id: 'cd_reading_m9_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Debating whether futuristic rehabilitation tools genuinely enhance brain rewiring',
              'ii. Why passive robots failed until smart sensors waited for user intent',
              'iii. How an overactive healthy hemisphere can suppress injured brain tissue',
              'iv. Large trials cast doubt on standalone benefits of scalp electrical stimulation',
              'v. Active repetitive patient effort stays essential alongside technological aids',
              'vi. Replacing all human physical therapists with wireless VR helmets'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph E concludes robotics and stimulation are at best amplifiers alongside active patient repetition.'
          },
          {
            id: 'cd_reading_m9_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'Why did early motorized arm robots fail to drive substantial motor cortex reorganization?',
            options: [
              'A. Sponge scalp electrodes blocked descending nerve signals along steel frames',
              'B. Guiding arms passively along tracks lacked the patient\'s active mental effort to fire cortical commands',
              'C. Mechanical gait rails always bruised healthy limbs during recovery',
              'D. Patients refused to enter noisy robotic training rooms'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B states moving limbs passively without conscious motor intent leaves motor cortex maps dormant.'
          },
          {
            id: 'cd_reading_m9_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'How can the undamaged side of a patient\'s brain inadvertently hinder stroke recovery in Paragraph C?',
            options: [
              'A. By consuming all oxygen arriving through main cerebral arteries',
              'B. By blocking visual feedback inside virtual-reality headsets',
              'C. By flooding damaged perilesional areas with excessive inhibitory braking signals',
              'D. By erasing childhood speech memories inside temporal lobes'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C explains an overactive intact hemisphere bombards the weakened damaged side with excessive braking inhibition.'
          },
          {
            id: 'cd_reading_m9_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What did larger multi-center clinical trials often reveal about scalp tDCS brain stimulation?',
            options: [
              'A. Outcomes often differed little from fake placebo pads when physical therapy hours matched',
              'B. Real current doubled finger strength in every patient within forty-eight hours',
              'C. Magnetic pulses eliminated the need for any physiotherapy stretching completely',
              'D. Sponge electrodes permanently injured surviving perilesional circuits'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states multi-center trials often found real stimulation matched sham placebo pads once physical therapy was equalized.'
          },
          {
            id: 'cd_reading_m9_q35',
            number: 35,
            type: 'true_false_not_given',
            questionText: 'Modern assist-as-needed exoskeletons wait for slight patient muscle initiation before assisting limb motion.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B notes assist-as-needed robots wait until subtle electrical signals confirm the patient initiated movement.'
          },
          {
            id: 'cd_reading_m9_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Normally, cross-callosal inhibitory communication between brain hemispheres prevents unwanted mirror movements.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states healthy left and right motor cortices regulate each other via inhibitory signals preventing mirror movements.'
          },
          {
            id: 'cd_reading_m9_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'Virtually all US rehabilitation hospitals have replaced human therapists with robotic arm trains since 2021.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E actually emphasizes therapists remain essential; no 2021 hospital replacement claim exists.'
          },
          {
            id: 'cd_reading_m9_q38',
            number: 38,
            type: 'short_answer',
            questionText: 'Through what simple scalp attachments is mild electrical direct current delivered during tDCS?',
            correctAnswer: 'SPONGE SCALP ELECTRODES',
            explanation: 'Paragraph D mentions sponge scalp electrodes.'
          },
          {
            id: 'cd_reading_m9_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'What kind of placebo control pads matched active tDCS performance in several multi-center studies?',
            correctAnswer: 'SHAM PLACEBO PADS',
            explanation: 'Paragraph D states real stimulation often matched sham placebo pads.'
          },
          {
            id: 'cd_reading_m9_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'How many times must patients typically attempt meaningful movements to drive authentic cortical remapping?',
            correctAnswer: 'THOUSANDS OF TIMES',
            explanation: 'Paragraph E concludes remapping depends on attempting meaningful movements thousands of times.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // MOCK 10 (MODERATE): cd_reading_m10 (Deep-Sea Manganese Nodule Mining and Seabed Protection)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_m10',
    testNumber: 10,
    testType: 'mock',
    title: 'CD-IELTS Reading Mock 10: Deep-Sea Manganese Nodule Mining and Seabed Protection',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on abyssal polymetallic nodule genesis, Clarion-Clipperton ecological risks, and International Seabed Authority governance.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Potato-Sized Metallic Nodules on the Clarion-Clipperton Plain',
        subtitle: 'Geological formation rates versus growing electric-vehicle mineral demand',
        text: `Paragraph A: Roughly four thousand to five thousand meters beneath the sunlit eastern Pacific Ocean, stretching over six million square kilometers between Hawaii and Mexico, lies a cold abyssal sediment plain known as the Clarion-Clipperton Zone (CCZ). Littered loosely across silky brown pelagic clay sit trillions of blackened, potato-sized metallic lumps called polymetallic nodules—concentrated naturally with manganese, nickel, copper, and cobalt critical for wind turbines and vehicle batteries.

Paragraph B: First dredged accidentally by Britain's pioneering HMS Challenger scientific voyage in 1873, abyssal nodules grow with astonishing geological slowness. Dissolved metal ions drifting through cold bottom seawater or leaching slowly upward from mud pore fluids precipitate layer by microscopic layer around tiny nucleation cores—such as weathered shark teeth, whale ear bones, or basalt pebbles. Radiometric dating reveals an average radial growth rate of barely two to ten millimeters per million years.

Paragraph C: Unlike terrestrial open-pit copper mines that blast deeply through solid granite mountain ridges and generate towering piles of acid-leaching waste rock, proponents of marine harvesting emphasize that CCZ nodules sit unburied atop soft bottom ooze like scattered pebbles awaiting collection. Prototype tracked harvester vehicles designed by mining consortia crawl across soft mud sucking nodules gently upward via water-jet jets, leaving heavy clay behind while piping ore slurry four kilometers upward through steel riser tubes to surface support ships.

Paragraph D: Economically, proponents note rich polymetallic ore concentration makes marine deposits alluring as high-grade terrestrial mines deplete. Single CCZ nodules frequently pack over twenty-five percent manganese alongside roughly two to three percent combined nickel, copper, and cobalt—all co-located in one surface deposit without requiring child labor risks or clearing tropical rainforest canopies in Indonesia or Congo.

Paragraph E: Skeptical marine geologists immediately counter that clean engineering brochures gloss over vast ecological timelines. Removing nodules grown across five to ten million years erases hard rocky anchor points from an ocean floor otherwise composed purely of shifting soup-like ooze—eliminating irreplaceable benthic habitat across geological epochs far outlasting human civilization.`,
        questions: [
          {
            id: 'cd_reading_m10_q1',
            number: 1,
            type: 'matching_information',
            questionText: 'Which paragraph mentions 1873 scientific ocean exploration uncovering deep metallic lumps?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B cites HMS Challenger dredging nodules in 1873 and details their slow precipitation around shark teeth or pebbles.'
          },
          {
            id: 'cd_reading_m10_q2',
            number: 2,
            type: 'matching_information',
            questionText: 'Which paragraph outlines prototype crawling machines using water jets and long riser pipes?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C describes tracked crawler vehicles lifting nodules via water jets and four-kilometer steel riser tubes.'
          },
          {
            id: 'cd_reading_m10_q3',
            number: 3,
            type: 'matching_information',
            questionText: 'Which paragraph highlights environmental and social drawbacks avoided relative to land mines?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D contrasts concentrated nodule ores against rainforest clearing and child-labor risks in land mining.'
          },
          {
            id: 'cd_reading_m10_q4',
            number: 4,
            type: 'matching_information',
            questionText: 'Which paragraph argues removing million-year-old rocks destroys rare solid habitats in mud plains?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E warns removing nodules grown over millions of years erases hard anchor points across soup-like ooze.'
          },
          {
            id: 'cd_reading_m10_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Polymetallic nodules in the Clarion-Clipperton Zone must be blasted from deep solid granite bedrock.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C explicitly states nodules sit unburied atop soft bottom ooze without blasting through solid granite.'
          },
          {
            id: 'cd_reading_m10_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Abyssal metallic nodules expand rapidly, reaching potato size within roughly five decades.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B gives radiometric radial growth rates of barely two to ten millimeters per million years.'
          },
          {
            id: 'cd_reading_m10_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Nodule layers frequently form around ancient shark teeth or whale ear bones.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B cites weathered shark teeth, whale ear bones, or basalt pebbles as nucleation cores.'
          },
          {
            id: 'cd_reading_m10_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'HMS Challenger carried electric tracked harvesters across the Clarion-Clipperton plain in 1873.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B notes HMS Challenger dredged nodules accidentally; prototype tracked crawlers are modern mining machines in Paragraph C.'
          },
          {
            id: 'cd_reading_m10_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Mexican naval patrol vessels escort prototype mining ships continuously inside the eastern CCZ.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Mexico is named solely as an eastern geographic boundary of the CCZ in Paragraph A; no naval escorts are mentioned.'
          },
          {
            id: 'cd_reading_m10_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Nodules rest thinly over smooth abyssal plains carpeted in silky brown ______.',
            correctAnswer: 'PELAGIC CLAY',
            explanation: 'Paragraph A identifies silky brown pelagic clay across the CCZ.'
          },
          {
            id: 'cd_reading_m10_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Harvesters pump collected nodules upward four kilometers aboard surface vessels through steel ______.',
            correctAnswer: 'RISER TUBES',
            explanation: 'Paragraph C states ore slurry moves upward through steel riser tubes.'
          },
          {
            id: 'cd_reading_m10_q12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Proponents emphasize CCZ deposits hold over a quarter ______ plus battery-grade nickel, copper, and cobalt.',
            correctAnswer: 'MANGANESE',
            explanation: 'Paragraph D states single nodules pack over twenty-five percent manganese.'
          },
          {
            id: 'cd_reading_m10_q13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Once harvested, missing nodules strip scarce solid ______ from endless abyssal silt flats.',
            correctAnswer: 'ANCHOR POINTS',
            explanation: 'Paragraph E warns removing nodules erases hard rocky anchor points from soup-like ooze.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Sediment Plumes, Filter Feeders, and the DISCOL Legacy',
        subtitle: 'Measuring persistent seabed scarring and midwater acoustic disturbance',
        text: `Paragraph A: Deep-sea ecosystems were once mischaracterized as lifeless deserts barely affected by industrial scraping. Modern biological sampling inside the Clarion-Clipperton Zone overturned that view completely: biologists identified over five thousand marine species across the plain—nearly ninety percent previously unknown to science—including stalked glass sponges, delicate sea fans, octopuses laying eggs exclusively on sponge stalks rooted onto solid nodules, and bioluminescent worms.

Paragraph B: Beyond scraping away solid rocky footholds, seabed collector crawlers generate twin underwater dust storms. First, heavy caterpillar tracks stir up billowing bottom sediment plumes creeping tens of kilometers outward along sluggish deep-ocean currents before settling gently onto surrounding undisturbed mud—potentially suffocating slow-growing filter-feeding corals and sponges whose feeding pores clog easily under fine clay silt.

Paragraph C: Second, once surface ships strain metallic ore out of ascending slurry, return pipes discharge cold muddy seawater mixed with crushed rock dust back into intermediate ocean depths—the "midwater plume." Scientists fear turbid discharge clouds hovering several hundred meters below sunlit waters could scatter bioluminescent mating signals, gum up gelatinous jellyfish nets, and contaminate commercial tuna food webs through suspended heavy-metal particles.

Paragraph D: Fortunately, ecologists possess real long-term evidence documenting how sluggishly abyssal mud recovers from mechanical disturbance. In 1989, German marine researchers conducted the famous DISCOL experiment off Peru—plowing shallow tracks across an abyssal nodule patch four thousand meters deep and revisiting the site twenty-six years later in 2015. High-resolution camera surveys shocked observers: nearly three-decade-old plow marks remained crisp and sharply etched in mud, while suspension-feeding organisms and oxygen-producing microbes inside scarred tracks showed almost zero measurable recovery.

Paragraph E: Acoustic disruption compounds sediment injury. Unlike quiet natural abyssal darkness interrupted chiefly by distant whale clicks, continuous hydraulic pumping, heavy crawler treads, and surface ship propellers project relentless low-frequency noise across hundreds of kilometers—potentially disorienting deep-diving beaked whales and disrupting mysterious abyssal soundscapes before baseline biology is even cataloged.`,
        questions: [
          {
            id: 'cd_reading_m10_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Unexpected biodiversity thriving across apparently barren abyssal clay',
              'ii. Unhealed decades-old seabed scars documented by the 1989 DISCOL study',
              'iii. Bottom mud clouds threatening delicate stationary filter feeders',
              'iv. Constant industrial noise traveling across dark whale habitats',
              'v. Surface ship return pipes clouding intermediate fish and plankton zones',
              'vi. Rebuilding artificial sponge reefs using concrete blocks'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A highlights 5,000+ species—nearly 90% new to science—including octopuses dependent on nodule-rooted sponges.'
          },
          {
            id: 'cd_reading_m10_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Unexpected biodiversity thriving across apparently barren abyssal clay',
              'ii. Unhealed decades-old seabed scars documented by the 1989 DISCOL study',
              'iii. Bottom mud clouds threatening delicate stationary filter feeders',
              'iv. Constant industrial noise traveling across dark whale habitats',
              'v. Surface ship return pipes clouding intermediate fish and plankton zones',
              'vi. Rebuilding artificial sponge reefs using concrete blocks'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph B explains crawler tracks stir up bottom plumes that choke corals and sponges tens of kilometers away.'
          },
          {
            id: 'cd_reading_m10_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Unexpected biodiversity thriving across apparently barren abyssal clay',
              'ii. Unhealed decades-old seabed scars documented by the 1989 DISCOL study',
              'iii. Bottom mud clouds threatening delicate stationary filter feeders',
              'iv. Constant industrial noise traveling across dark whale habitats',
              'v. Surface ship return pipes clouding intermediate fish and plankton zones',
              'vi. Rebuilding artificial sponge reefs using concrete blocks'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C details midwater discharge plumes affecting bioluminescence, jellyfish, and commercial tuna food chains.'
          },
          {
            id: 'cd_reading_m10_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Unexpected biodiversity thriving across apparently barren abyssal clay',
              'ii. Unhealed decades-old seabed scars documented by the 1989 DISCOL study',
              'iii. Bottom mud clouds threatening delicate stationary filter feeders',
              'iv. Constant industrial noise traveling across dark whale habitats',
              'v. Surface ship return pipes clouding intermediate fish and plankton zones',
              'vi. Rebuilding artificial sponge reefs using concrete blocks'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph D reports 2015 revisits to 1989 DISCOL tracks showing crisp unhealed scars after 26 years.'
          },
          {
            id: 'cd_reading_m10_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Unexpected biodiversity thriving across apparently barren abyssal clay',
              'ii. Unhealed decades-old seabed scars documented by the 1989 DISCOL study',
              'iii. Bottom mud clouds threatening delicate stationary filter feeders',
              'iv. Constant industrial noise traveling across dark whale habitats',
              'v. Surface ship return pipes clouding intermediate fish and plankton zones',
              'vi. Rebuilding artificial sponge reefs using concrete blocks'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph E describes relentless low-frequency noise disrupting whales and deep acoustic environments.'
          },
          {
            id: 'cd_reading_m10_q19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Why do deep-sea octopuses in the Clarion-Clipperton Zone rely indirectly on metallic nodules?',
            options: [
              'A. They attach egg clutches onto sponge stalks anchored solely upon hard nodules',
              'B. Octopuses grind manganese ore for defensive shell armor',
              'C. Warm volcanic nodules hatch octopus eggs faster than icy seawater',
              'D. Mud clouds scare commercial tuna predators away from octopuses'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A states octopuses lay eggs exclusively on sponge stalks rooted onto solid nodules.'
          },
          {
            id: 'cd_reading_m10_q20',
            number: 20,
            type: 'multiple_choice',
            questionText: 'What did the 2015 return expedition to the 1989 DISCOL plow tracks demonstrate?',
            options: [
              'A. New glassy sponges fully regrew across scarred ocean trenches within ten years',
              'B. Passing bottom currents buried every 1989 track beneath clean white coral sand',
              'C. Bottom plow lines stayed sharp after twenty-six years with virtually zero animal or microbial recovery',
              'D. Mining ships accidentally erased German marker buoys off Peru'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D reports 26-year-old marks remained crisp and suspension-feeders/microbes showed almost zero measurable recovery.'
          },
          {
            id: 'cd_reading_m10_q21',
            number: 21,
            type: 'multiple_choice',
            questionText: 'How might midwater discharge plumes interfere with open-ocean species far above the seabed?',
            options: [
              'A. Warm slurry water instantly boils surface plankton clouds',
              'B. Suspended clay dust dims light signals, clogs gelatinous nets, and introduces heavy metals to tuna prey',
              'C. Return pipes pump frozen icebergs up toward Hawaiian tourist beaches',
              'D. Crushed rock sinks instantaneously without drifting outward'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C warns midwater clouds scatter bioluminescent mating signals, gum jellyfish nets, and pass heavy metals into tuna webs.'
          },
          {
            id: 'cd_reading_m10_q22',
            number: 22,
            type: 'short_answer',
            questionText: 'Roughly what proportion of species found inside the CCZ were previously unknown to science?',
            correctAnswer: 'NEARLY NINETY PERCENT',
            explanation: 'Paragraph A states nearly ninety percent of over 5,000 identified species were previously unknown.'
          },
          {
            id: 'cd_reading_m10_q23',
            number: 23,
            type: 'short_answer',
            questionText: 'How many years elapsed between Germany\'s 1989 DISCOL plowing test and its 2015 resurvey?',
            correctAnswer: 'TWENTY-SIX',
            explanation: 'Paragraph D states twenty-six years later in 2015.'
          },
          {
            id: 'cd_reading_m10_q24',
            number: 24,
            type: 'short_answer',
            questionText: 'Which deep-diving marine mammals face acoustic disorientation from low-frequency mining ship noise?',
            correctAnswer: 'BEAKED WHALES',
            explanation: 'Paragraph E specifies deep-diving beaked whales.'
          },
          {
            id: 'cd_reading_m10_q25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Fine clay pushed outward by crawlers easily clogs feeding pores inside stationary ______.',
            correctAnswer: 'FILTER-FEEDING',
            explanation: 'Paragraph B states plumes clog slow-growing filter-feeding corals and sponges (or sponge/coral pores).'
          },
          {
            id: 'cd_reading_m10_q26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Discharged ship waste returning muddy water below upper sunlit zones forms a ______.',
            correctAnswer: 'MIDWATER PLUME',
            explanation: 'Paragraph C labels this intermediate discharge cloud the "midwater plume."'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: International Seabed Governance and Battery Chemistry Alternatives',
        subtitle: 'Balancing UN legal deadlines against evolving mineral recycling and LFP innovation',
        text: `Paragraph A: Because the Clarion-Clipperton Zone lies far beyond any coastal nation's two-hundred-nautical-mile exclusive jurisdiction, international mineral rights fall under the United Nations Convention on the Law of the Sea (UNCLOS). Declaring the deep seabed "the common heritage of humankind," UNCLOS established the Kingston-based International Seabed Authority (ISA) in 1994—tasked simultaneously with licensing seabed exploration and safeguarding marine ecosystems from serious ecological harm.

Paragraph B: That dual mandate plunged the ISA into historic legal gridlock during the 2020s. Under an obscure procedural clause—the "two-year rule"—triggered by tiny island nation Nauru sponsoring a commercial mining contractor in 2021, the Authority faced formal pressure to finalize binding environmental exploitation regulations by July 2023. Missing that deadline opened divisive debates over whether private firms could legally submit commercial mining applications under incomplete draft environmental codes.

Paragraph C: Amid regulatory stalemate, an international coalition exceeding thirty sovereign nations—joined by major automakers and electronics brands including BMW, Volvo, and Google—endorsed an explicit precautionary moratorium halting commercial seabed harvesting until baseline ecological impact studies and independent recovery standards exist. These corporate pledges reflect acute reputational sensitivity: clean-energy buyers recoil from financing pristine ocean extinction to build green electric vehicles.

Paragraph D: Meanwhile, rapid battery innovation quietly undermines mining companies' central economic claim that deep-sea cobalt and nickel are indispensable to climate decarbonization. Carmakers globally are pivoting dramatically away from cobalt-heavy chemistries toward cobalt-free, nickel-free lithium iron phosphate (LFP) and emerging sodium-ion packs, slashing projected ocean-metal deficits. Expanding urban battery recycling refineries could further reclaim vast quantities of pure lithium, cobalt, and nickel directly from retired smartphones and electric vehicles.

Paragraph E: Rather than rushing industrial harvesters onto unmapped abyssal plains, marine policy specialists contend the decade ahead offers rare breathing room—allowing independent deep-ocean mapping alongside circular urban metal recovery to supply clean transport technologies without scarring five-million-year seabed nurseries.`,
        questions: [
          {
            id: 'cd_reading_m10_q27',
            number: 27,
            type: 'summary_completion',
            questionText: 'Under UNCLOS, deep international seabeds belong legally to the ______ rather than single states.',
            correctAnswer: 'COMMON HERITAGE',
            explanation: 'Paragraph A quotes UNCLOS declaring the deep seabed "the common heritage of humankind."'
          },
          {
            id: 'cd_reading_m10_q28',
            number: 28,
            type: 'summary_completion',
            questionText: 'Nauru triggered an obscure ______ in 2021 pressuring the ISA to rush final mining regulations.',
            correctAnswer: 'TWO-YEAR RULE',
            explanation: 'Paragraph B cites the procedural "two-year rule" triggered by Nauru in 2021.'
          },
          {
            id: 'cd_reading_m10_q29',
            number: 29,
            type: 'summary_completion',
            questionText: 'Over thirty states and prominent corporations back a temporary ______ until solid ecological data exist.',
            correctAnswer: 'MORATORIUM',
            explanation: 'Paragraph C states nations and brands endorsed an explicit precautionary moratorium.'
          },
          {
            id: 'cd_reading_m10_q30',
            number: 30,
            type: 'summary_completion',
            questionText: 'Shifting carmakers toward ______ batteries drastically lowers automotive dependence on scarce cobalt.',
            correctAnswer: 'LFP',
            explanation: 'Paragraph D cites cobalt-free, nickel-free lithium iron phosphate (LFP) packs.'
          },
          {
            id: 'cd_reading_m10_q31',
            number: 31,
            type: 'summary_completion',
            questionText: 'Recovering metals from retired electronics inside urban ______ further shrinks demand for ocean digging.',
            correctAnswer: 'RECYCLING REFINERIES',
            explanation: 'Paragraph D highlights expanding urban battery recycling refineries reclaiming lithium, cobalt, and nickel.'
          },
          {
            id: 'cd_reading_m10_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'The International Seabed Authority oversees both mineral permitting and deep marine environmental protection.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A explains the ISA has the dual mandate of licensing exploration and safeguarding marine ecosystems.'
          },
          {
            id: 'cd_reading_m10_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Automakers like BMW and Volvo eagerly invested billions to start immediate nodule mining in 2023.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C explicitly lists BMW, Volvo, and Google endorsing an explicit precautionary moratorium halting harvesting.'
          },
          {
            id: 'cd_reading_m10_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Advances in LFP and sodium-ion batteries weaken arguments that deep-sea cobalt is strictly unavoidable.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D notes cobalt-free, nickel-free LFP and sodium-ion packs slash projected ocean-metal deficits.'
          },
          {
            id: 'cd_reading_m10_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Kingston port authorities in Jamaica own fifty percent of all polymetallic nodules retrieved from the CCZ.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Kingston is mentioned only as the headquarters city of the ISA in Paragraph A.'
          },
          {
            id: 'cd_reading_m10_q36',
            number: 36,
            type: 'yes_no_not_given',
            questionText: 'Mining contractors unanimously agreed inside Kingston in 2023 to cancel all deep-sea exploration permits forever.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states the missed July 2023 deadline opened divisive debates over submitting commercial applications.'
          },
          {
            id: 'cd_reading_m10_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why did the 2021 invocation of the "two-year rule" generate fierce controversy inside the ISA?',
            options: [
              'A. It permanently banned all United Nations scientific research boats from the Pacific',
              'B. It transferred ownership of every Clarion-Clipperton trench directly to private automakers',
              'C. Missing the 2023 deadline raised legal disputes over allowing commercial mining applications before final protective rules existed',
              'D. It forced Nauru to abandon all renewable solar projects nationwide'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B explains missing the July 2023 deadline sparked disputes over approving commercial applications under incomplete draft codes.'
          },
          {
            id: 'cd_reading_m10_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why have major consumer corporations joined governments in opposing hasty seabed extraction?',
            options: [
              'A. Environmentally conscious buyers reject green-labeled vehicles linked to irreversible ocean habitat harm',
              'B. Recycled aluminum cans provide sufficient cobalt for every smartphone battery',
              'C. Deep-sea nodules contain zero usable manganese or copper',
              'D. Kingston regulations forbid car sales across nations sponsoring mining'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C cites reputational sensitivity because clean-energy buyers recoil from ocean extinction for green vehicles.'
          },
          {
            id: 'cd_reading_m10_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'How does the author characterize alternative mineral strategies in Paragraph D and E?',
            options: [
              'A. Marine mapping will finish completely within six months of 2023',
              'B. Sodium-ion batteries require twice as much deep-sea nickel as existing packs',
              'C. Seabed harvesting remains the sole pathway to decarbonizing city buses',
              'D. Urban recycling and cobalt-free chemistries reduce urgency for immediate abyssal mining'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraphs D–E emphasize LFP/sodium-ion shifts and urban battery recycling buy time before risking million-year seabed nurseries.'
          },
          {
            id: 'cd_reading_m10_q40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'In what year was the Kingston-based International Seabed Authority established?',
            options: [
              'A. 1873',
              'B. 1994',
              'C. 1989',
              'D. 2021'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph A specifies UNCLOS established the Kingston-based International Seabed Authority in 1994.'
          }
        ]
      }
    ]
  })
];
