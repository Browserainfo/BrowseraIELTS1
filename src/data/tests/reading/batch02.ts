/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_02: TestItem[] = [
  // =========================================================================
  // TEST 6 (MODERATE): cd_reading_p6 (Microplastics in Deep-Sea Benthic Ecosystems)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p6',
    testNumber: 6,
    testType: 'practice',
    title: 'CD-IELTS Practice 6: Microplastics in Deep-Sea Benthic Ecosystems',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on deep-sea microplastic transport, benthic sediment accumulation, and filter-feeder ecology.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Vertical Transport of Synthetic Fibers to the Abyssal Plain',
        subtitle: 'How buoyant surface polymers reach ocean trenches miles beneath coastal cities',
        text: `Paragraph A: When researchers began surveying surface ocean gyres in the early 2000s, floating fragments of polyethylene and polypropylene dominated environmental concern because both polymers are naturally less dense than seawater. Yet marine sediment cores extracted from basins over four thousand meters deep soon challenged the assumption that plastic debris remained confined to sunlit upper waters. In repeated expeditions across the North Atlantic and Western Pacific, benthic grab samplers retrieved thousands of synthetic microfibers per square meter of abyssal mud, revealing the seafloor as the ocean's largest long-term plastic sink.

Paragraph B: Several biological and physical mechanisms explain why low-density plastics lose buoyancy and descend rapidly through the water column. Within days of entering coastal seas, microscopic fragments acquire a sticky coating of diatoms, bacteria, and dissolved organic molecules known as a biofilm. This biological colonization alters surface chemistry and increases overall particle density until fragments cross the neutral buoyancy threshold and begin sinking slowly toward deeper strata.

Paragraph C: Biological packaging accelerates vertical transport even further. Copepods and krill grazing near the ocean surface routinely ingest microfibers alongside natural phytoplankton cells. Although most ingested fibers pass harmlessly through crustacean digestive tracts, they emerge tightly bound inside dense fecal pellets. Whereas an unattached synthetic fiber might take weeks to drift a hundred meters downward, fecal pellets sink at rates exceeding two hundred meters per day, carrying surface polymers directly past midwater predators toward the seabed.

Paragraph D: Once synthetic debris reaches continental slopes, powerful submarine currents redistribute particles along bathymetric contours rather than leaving them evenly scattered beneath shipping lanes. Deep thermohaline flows—driven by cold, saline water sinking near polar latitudes—sweep sediment and fibers into sheltered submarine canyons and depositional troughs. A landmark Mediterranean survey showed that canyon floors contained nearly six times the fiber concentration measured on adjacent open slopes at identical depths.

Paragraph E: Laboratory analysis using Fourier-transform infrared spectroscopy indicates that nearly eighty percent of deep-sediment microplastics consist of polyester, polyamide, and acrylic fibers rather than shattered packaging fragments. Because domestic laundry effluent discharges millions of synthetic threads through municipal wastewater pipes daily, coastal rivers act as persistent conveyor belts feeding deep basins. Even fibrous material captured at rural treatment plants often re-enters watersheds when dried sewage sludge is spread as agricultural fertilizer on coastal farmland.`,
        questions: [
          {
            id: 'cd_reading_p6_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Early marine plastic surveys underestimated the amount of synthetic debris reaching deep ocean mud.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A explains that early concern focused on floating polymers, until deep sediment cores overturned the assumption that debris stayed in upper waters.'
          },
          {
            id: 'cd_reading_p6_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Biofilm growth makes floating plastic fragments lighter so they stay near sunlit coastal waters.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states biofilm colonization increases overall particle density until fragments sink toward deeper strata.'
          },
          {
            id: 'cd_reading_p6_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Most synthetic fibers eaten by copepods dissolve completely inside their stomachs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C notes most ingested fibers pass through digestive tracts intact and emerge bound inside dense fecal pellets.'
          },
          {
            id: 'cd_reading_p6_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Submarine canyons accumulate noticeably higher fiber densities than neighboring open slopes.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D reports canyon floors held nearly six times the fiber concentration of adjacent open slopes at identical depths.'
          },
          {
            id: 'cd_reading_p6_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Deep cores from over four thousand meters below the surface showed the seafloor acts as a long-term plastic ______.',
            correctAnswer: 'SINK',
            explanation: 'Paragraph A identifies the seafloor as the ocean\'s largest long-term plastic sink.'
          },
          {
            id: 'cd_reading_p6_q6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Diatoms and bacteria form a sticky surface layer called a ______ on drifting fragments.',
            correctAnswer: 'BIOFILM',
            explanation: 'Paragraph B defines this coating of diatoms, bacteria, and organic molecules as a biofilm.'
          },
          {
            id: 'cd_reading_p6_q7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Grazing krill and copepods expel synthetic threads packed inside fast-sinking ______.',
            correctAnswer: 'FECAL PELLETS',
            explanation: 'Paragraph C states ingested fibers emerge tightly bound inside dense fecal pellets.'
          },
          {
            id: 'cd_reading_p6_q8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Cold, salty polar water drives deep ______ flows that steer debris along seafloor contours.',
            correctAnswer: 'THERMOHALINE',
            explanation: 'Paragraph D names deep thermohaline flows driven by cold, saline polar water.'
          },
          {
            id: 'cd_reading_p6_q9',
            number: 9,
            type: 'fill_blank',
            questionText: 'Spread on coastal farms as fertilizer, treated ______ can release trapped laundry threads back into rivers.',
            correctAnswer: 'SEWAGE SLUDGE',
            explanation: 'Paragraph E explains dried sewage sludge applied as agricultural fertilizer reintroduces captured fibers to watersheds.'
          },
          {
            id: 'cd_reading_p6_q10',
            number: 10,
            type: 'multiple_choice',
            questionText: 'Why do synthetic fibers encased in crustacean waste reach deep water much faster than loose fibers?',
            options: [
              'A. Dense pellets fall more than two hundred meters each day',
              'B. Midwater fish actively carry pellets down to spawning reefs',
              'C. Digestive enzymes convert polyester into heavier lead salts',
              'D. Copepods swim straight to the abyssal plain before feeding'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C contrasts weeks-long slow drift of unattached fibers against fecal pellets sinking over 200 meters daily.'
          },
          {
            id: 'cd_reading_p6_q11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'What did infrared spectroscopy reveal about most deep-sea sediment microplastics?',
            options: [
              'A. They come largely from shattered coastal beverage bottles',
              'B. They originate mainly from lost deep-sea fishing cages',
              'C. Nearly four-fifths consist of textile fibers like polyester and acrylic',
              'D. Rural treatment plants destroy over ninety percent before river entry'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E notes nearly 80% (four-fifths) consist of polyester, polyamide, and acrylic textile fibers.'
          },
          {
            id: 'cd_reading_p6_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Exceeding how far vertically can fecal pellets drop in a single day according to Paragraph C?',
            correctAnswer: 'TWO HUNDRED METERS',
            explanation: 'Paragraph C states fecal pellets sink at rates exceeding two hundred meters per day.'
          },
          {
            id: 'cd_reading_p6_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which daily household activity releases millions of synthetic threads into municipal wastewater pipes?',
            correctAnswer: 'DOMESTIC LAUNDRY',
            explanation: 'Paragraph E identifies domestic laundry effluent discharging millions of synthetic threads daily.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Ecological Impacts on Benthic Suspension and Deposit Feeders',
        subtitle: 'Measuring energy depletion, chemical leaching, and trophic transfer in deep marine mud',
        text: `Paragraph A: Deep-sea organisms inhabit an energy-scarce environment where survival depends on extracting maximum nutrition from scarce organic snowfall descending from upper waters. Because benthic worms, brittle stars, and deep-water corals cannot easily distinguish indigestible polymer threads from natural marine snow under total darkness, microplastics routinely enter deep food webs. Field dissections from the Rockall Trough west of Scotland revealed synthetic particles inside nearly half of all sampled sea cucumbers and burrowing polychaete worms.

Paragraph B: Rather than causing immediate mass mortality, microplastic ingestion inflicts chronic energetic stress known as food dilution. Every synthetic fiber occupying space in a benthic invertebrate's gut displaces nutritious detritus without supplying calories, lipids, or amino acids. Controlled aquarium trials on Norway lobsters showed that animals fed diets containing five percent polypropylene fibers accumulated significantly smaller lipid reserves over twelve weeks, reducing winter egg production even though overall feeding rates appeared unchanged.

Paragraph C: Beyond physical gut obstruction, aged microplastics carry complex chemical burdens. Plastics manufactured with flame retardants, UV stabilizers, and plasticizers gradually release embedded additives into surrounding pore water and digestive fluids. Furthermore, weathered hydrophobic polymer surfaces adsorb persistent organic pollutants—including industrial polychlorinated biphenyls—from ambient seawater at concentrations thousands of times higher than surrounding water. When benthic predators consume contaminated prey, lipid-soluble toxins accumulate up the food chain.

Paragraph D: Cold-water corals face distinct vulnerabilities because they build vast calcareous reefs along current-swept ridges—precisely the hydrodynamic zones where suspended fibers concentrate. Tank experiments using Lophelia pertusa demonstrated that sharp synthetic filaments irritate delicate coral polyps, triggering excessive mucus secretion to sweep debris off feeding tentacles. Producing protective mucus demands substantial metabolic energy, leaving stressed colonies slower to repair broken skeletal branches.

Paragraph E: Yet marine toxicologists urge precision when interpreting laboratory data. Many early feeding studies exposed benthic animals to microplastic concentrations orders of magnitude higher than levels documented in undisturbed abyssal sediment, and often tested uniform spherical beads rather than irregular weathered fibers. Ongoing in-situ seafloor chamber experiments aim to verify whether real-world abyssal populations suffer measurable demographic decline over multi-year timescales.`,
        questions: [
          {
            id: 'cd_reading_p6_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why darkness and scarce food make deep animals vulnerable to eating plastics',
              'ii. Limitations of high-dose laboratory bead tests versus seafloor reality',
              'iii. Empty calories: how indigestible fibers weaken energy storage',
              'iv. Toxic additives and adsorbed pollutants entering marine food chains',
              'v. Extra mucus cleaning drains metabolic reserves in cold-water corals',
              'vi. Banning synthetic fishing nets across Scottish coastal harbors'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A links total darkness, scarce food, and the high proportion of deep-sea invertebrates ingesting synthetic debris.'
          },
          {
            id: 'cd_reading_p6_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why darkness and scarce food make deep animals vulnerable to eating plastics',
              'ii. Limitations of high-dose laboratory bead tests versus seafloor reality',
              'iii. Empty calories: how indigestible fibers weaken energy storage',
              'iv. Toxic additives and adsorbed pollutants entering marine food chains',
              'v. Extra mucus cleaning drains metabolic reserves in cold-water corals',
              'vi. Banning synthetic fishing nets across Scottish coastal harbors'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph B details food dilution, reduced lipid reserves, and lower reproduction in Norway lobsters.'
          },
          {
            id: 'cd_reading_p6_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why darkness and scarce food make deep animals vulnerable to eating plastics',
              'ii. Limitations of high-dose laboratory bead tests versus seafloor reality',
              'iii. Empty calories: how indigestible fibers weaken energy storage',
              'iv. Toxic additives and adsorbed pollutants entering marine food chains',
              'v. Extra mucus cleaning drains metabolic reserves in cold-water corals',
              'vi. Banning synthetic fishing nets across Scottish coastal harbors'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C focuses on leaching plasticizers/additives and adsorbed pollutants such as PCBs entering predators.'
          },
          {
            id: 'cd_reading_p6_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why darkness and scarce food make deep animals vulnerable to eating plastics',
              'ii. Limitations of high-dose laboratory bead tests versus seafloor reality',
              'iii. Empty calories: how indigestible fibers weaken energy storage',
              'iv. Toxic additives and adsorbed pollutants entering marine food chains',
              'v. Extra mucus cleaning drains metabolic reserves in cold-water corals',
              'vi. Banning synthetic fishing nets across Scottish coastal harbors'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph D explains how Lophelia pertusa corals expend energy producing mucus to clear irritating filaments.'
          },
          {
            id: 'cd_reading_p6_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Why darkness and scarce food make deep animals vulnerable to eating plastics',
              'ii. Limitations of high-dose laboratory bead tests versus seafloor reality',
              'iii. Empty calories: how indigestible fibers weaken energy storage',
              'iv. Toxic additives and adsorbed pollutants entering marine food chains',
              'v. Extra mucus cleaning drains metabolic reserves in cold-water corals',
              'vi. Banning synthetic fishing nets across Scottish coastal harbors'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph E critiques unrealistic doses and spherical beads in earlier lab trials and introduces in-situ chambers.'
          },
          {
            id: 'cd_reading_p6_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'Invertebrates mistake plastic threads for natural falling food called ______ in pitch-dark trenches.',
            correctAnswer: 'MARINE SNOW',
            explanation: 'Paragraph A notes deep organisms cannot easily distinguish polymer threads from natural marine snow.'
          },
          {
            id: 'cd_reading_p6_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Non-nutritive plastic fills digestive tracts in a harmful process scientists term ______.',
            correctAnswer: 'FOOD DILUTION',
            explanation: 'Paragraph B names this chronic energetic stress food dilution.'
          },
          {
            id: 'cd_reading_p6_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Weathered plastic surfaces attract surrounding industrial ______ from ambient seawater at elevated levels.',
            correctAnswer: 'POLLUTANTS',
            explanation: 'Paragraph C states hydrophobic polymers adsorb persistent organic pollutants from seawater.'
          },
          {
            id: 'cd_reading_p6_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Expelling filaments with protective mucus slows coral recovery of broken ______ structures.',
            correctAnswer: 'SKELETAL',
            explanation: 'Paragraph D notes extra mucus production leaves colonies slower to repair broken skeletal branches.'
          },
          {
            id: 'cd_reading_p6_q23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What did the twelve-week aquarium experiment on Norway lobsters reveal?',
            options: [
              'A. Lobsters completely refused to eat food mixed with plastic',
              'B. Overall food intake stayed normal, yet fat storage and egg output dropped',
              'C. Polypropylene filaments hardened lobster shells faster than usual',
              'D. Half of the lobsters died within the first forty-eight hours'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B notes feeding rates appeared unchanged while lipid reserves and winter egg production dropped significantly.'
          },
          {
            id: 'cd_reading_p6_q24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why do toxicologists question the direct ecological realism of some early microplastic feeding experiments?',
            options: [
              'A. They failed to include Scotland\'s Rockall Trough sediment samples',
              'B. They ran experiments only in tropical coral lagoons near the equator',
              'C. They used plastic doses far above real abyssal concentrations and smooth round beads instead of weathered fibers',
              'D. They excluded lipid measurements from fish predator studies'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E explains early tests used excessively high concentrations and uniform spherical beads rather than irregular weathered fibers.'
          },
          {
            id: 'cd_reading_p6_q25',
            number: 25,
            type: 'true_false_not_given',
            questionText: 'Field surveys in the Rockall Trough found synthetic particles in less than ten percent of sampled sea cucumbers.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states synthetic particles were found inside nearly half of all sampled sea cucumbers and polychaete worms.'
          },
          {
            id: 'cd_reading_p6_q26',
            number: 26,
            type: 'true_false_not_given',
            questionText: 'Seafloor chamber studies in the Pacific have already lasted thirty consecutive years.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E says in-situ seafloor chamber experiments are ongoing to test multi-year impacts without mentioning a 30-year Pacific run.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Upstream Prevention Versus Deep-Ocean Remediation',
        subtitle: 'Why cleaning abyssal plains is impractical and policy targets land-based filtration',
        text: `Paragraph A: Whenever dramatic photographs of seabed trash circulate online, engineering proposals quickly follow—ranging from autonomous seafloor vacuum drones to magnetic polymer skimmers. Yet oceanographers nearly unanimously dismiss physical deep-ocean cleanup as technologically futile and ecologically destructive. Attempting to dredge microscopic threads scattered across millions of square kilometers at crushing pressures of four hundred atmospheres would burn immense fossil fuel while obliterating delicate slow-growing sponge gardens and ancient cold-water corals.

Paragraph B: Consequently, environmental policy researchers advocate upstream interception long before fibers enter tidal estuaries. One of the lowest-cost, highest-leverage interventions targets domestic washing machines. When France enacted legislation mandating built-in microplastic filters on all newly manufactured washing machines starting in 2025, independent textile engineers demonstrated that stainless-steel mesh cartridges capture over eighty percent of detached synthetic lint before water leaves the household drain—provided consumers empty lint trays into solid waste rather than rinsing them down sinks.

Paragraph C: Textile design offers a complementary path forward. Abrasion tests reveal that loosely woven fleece garments shed up to seven times more fibers per wash cycle than tightly twisted continuous-filament yarns of identical polymer weight. By replacing brittle staple-spun fabrics with longer, smoother filaments or applying biodegradable plant-wax finishes at mills, manufacturers could halve shedding rates without compromising garment warmth or water resistance.

Paragraph D: Equally vital is addressing tire wear dust—an often overlooked source of marine micro-elastomers. As rubber tires abrade against asphalt highways, microscopic black particles wash through storm drains into coastal currents. Permeable roadside bioswales planted with deep-rooted reeds trap up to ninety percent of heavy tire grit during rainstorms before runoff reaches municipal rivers.

Paragraph E: Skeptics argue that shifting consumer clothing away from polyester toward natural cotton would eliminate marine synthetic pollution overnight. However, comparative life-cycle assessments caution against simplistic substitutions: conventional cotton requires vast irrigation water and pesticide inputs, and dyed cotton fibers also persist for months in anaerobic seafloor sediment. Sustainable mitigation therefore demands multi-layered engineering—combining low-shed fabrics, machine filtration, and urban stormwater traps—rather than banning one fiber blindly.`,
        questions: [
          {
            id: 'cd_reading_p6_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph outlines a legal requirement for new household laundry appliances?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B cites France\'s legislation requiring microplastic filters on new washing machines from 2025.'
          },
          {
            id: 'cd_reading_p6_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph compares the shedding behavior of two distinct fabric spinning structures?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C contrasts loosely woven fleece against tightly twisted continuous-filament yarns.'
          },
          {
            id: 'cd_reading_p6_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph highlights unintended ecological downsides of replacing polyester entirely with cotton?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E notes cotton\'s heavy water/pesticide footprint and persistence of dyed cotton in anaerobic sediment.'
          },
          {
            id: 'cd_reading_p6_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph describes roadside vegetation features used to filter highway rubber dust?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains how permeable roadside bioswales planted with reeds trap up to 90% of tire grit.'
          },
          {
            id: 'cd_reading_p6_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Autonomous seafloor vacuums represent a realistic, harmless method for removing deep-sea microfibers.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states oceanographers dismiss deep-ocean cleanup as technologically futile and ecologically destructive.'
          },
          {
            id: 'cd_reading_p6_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Built-in washing machine filters remain ineffective if households wash captured lint directly into kitchen or bathroom sinks.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B notes filters work provided consumers place lint into solid waste rather than rinsing trays down sinks.'
          },
          {
            id: 'cd_reading_p6_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'French laundry filter laws will raise retail prices of new washing machines by exactly fifteen percent.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B describes France\'s mandate without mentioning retail price increases.'
          },
          {
            id: 'cd_reading_p6_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Manufacturing fabrics from continuous-filament yarn inevitably ruins the thermal warmth of winter clothing.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C states mills can halve shedding with longer filaments or plant-wax finishes without compromising warmth or water resistance.'
          },
          {
            id: 'cd_reading_p6_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Dyed cotton threads break down instantaneously once they settle onto oxygen-poor deep seabed mud.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E points out dyed cotton fibers also persist for months in anaerobic seafloor sediment.'
          },
          {
            id: 'cd_reading_p6_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do marine scientists strongly oppose dredging abyssal mud to recover plastic fibers?',
            options: [
              'A. It would require massive energy while destroying slow-growing benthic habitats',
              'B. Plastic particles dissolve harmlessly before reaching 400 atmospheres',
              'C. Magnetic skimmers only attract aluminum cans near beaches',
              'D. Deep-sea sponges prefer consuming broken synthetic threads'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph A explains deep dredging burns immense fossil fuel while obliterating fragile sponge gardens and cold-water corals.'
          },
          {
            id: 'cd_reading_p6_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'According to Paragraph C, why does loose fleece pollute marine environments far faster than tightly spun synthetic wear?',
            options: [
              'A. Loose fleece always contains toxic heavy-metal pigments',
              'B. Continuous-filament fabrics cannot be washed in domestic machines',
              'C. Fleece dissolves completely in warm household tap water',
              'D. Loose fleece sheds up to seven times more fibers during laundering'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C notes abrasion tests show loosely woven fleece sheds up to seven times more fibers per wash cycle.'
          },
          {
            id: 'cd_reading_p6_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What overall conclusion does the author reach in Passage 3?',
            options: [
              'A. Only robotic ocean skimmers can protect marine ecosystems now',
              'B. Effective mitigation requires combining upstream textile redesign, machine filters, and stormwater traps',
              'C. Replacing all synthetic clothing globally with cotton solves marine pollution cleanly',
              'D. Tire abrasion particles never reach saltwater estuaries'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E concludes mitigation requires multi-layered engineering: low-shed fabrics, machine filtration, and urban stormwater traps.'
          },
          {
            id: 'cd_reading_p6_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'French regulations require newly sold washers to hold stainless-steel ______ trapping over four-fifths of detached lint.',
            correctAnswer: 'MESH CARTRIDGES',
            explanation: 'Paragraph B states stainless-steel mesh cartridges capture over 80% of detached synthetic lint.'
          },
          {
            id: 'cd_reading_p6_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Applying biodegradable ______ treatments during weaving can cut textile shedding substantially without reducing warmth.',
            correctAnswer: 'PLANT-WAX',
            explanation: 'Paragraph C refers to biodegradable plant-wax finishes applied at mills.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 7 (MODERATE): cd_reading_p7 (Biomimetic Architecture and Self-Cooling Structures)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p7',
    testNumber: 7,
    testType: 'practice',
    title: 'CD-IELTS Practice 7: Biomimetic Architecture and Self-Cooling Structures',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on termite-inspired ventilation, botanical hygroscopic facades, and passive thermal urbanism.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Termite Mounds and Passive Stack Ventilation in Harare',
        subtitle: 'Reinterpreting Macrotermes michaelseni mounds for low-energy commercial towers',
        text: `Paragraph A: In the subtropical climate of Harare, Zimbabwe, outdoor temperatures regularly fluctuate between chilly nights near eight degrees Celsius and scorching afternoon peaks exceeding thirty-five degrees. Modern glazed office towers in such regions customarily rely on mechanical chillers that consume nearly half of a building's lifetime electricity. Seeking a radically less energy-intensive alternative, architect Mick Pearce partnered with structural engineers in the mid-1990s to design Eastgate Centre—a sprawling commercial and retail complex modeled partly on the tall earthen chimneys built by Macrotermes michaelseni termites across southern Africa.

Paragraph B: For decades, textbooks popularized a simplified myth claiming termite mounds stayed cool solely because rising warm air exited steadily through a single tall summit chimney, drawing cool soil air inward. Subsequent fieldwork by physiologist Scott Turner using tracer gases revealed a subtler reality: termite mounds behave less like static chimneys and more like breathing lungs. Turbulent wind gusts pressing against porous outer walls drive rhythmic pressure oscillations that mix stale internal air with fresher exterior air through thousands of tiny surface conduits, regulating oxygen and moisture around underground fungus gardens.

Paragraph C: Despite refining the biological explanation, engineers still adapted the mound's overarching thermal philosophy—combining high thermal mass with continuous natural ventilation—to Eastgate Centre's two parallel concrete blocks flanking a seven-story glass atrium. Exposed high-density concrete slabs inside offices absorb heat released during daytime by computers, lighting, and hundreds of office workers, preventing indoor temperatures from climbing abruptly during midday business hours.

Paragraph D: After dusk, cool outside air is drawn through low intake vents near the ground floor by large low-speed fans consuming only a fraction of standard compressor power. As cooler night air sweeps underneath hollow precast concrete floor voids, it flushes stored daytime heat upward into central vertical exhaust stacks crowning the roof. By sunrise, the building's massive concrete frame has cooled down like a discharged thermal battery, ready to absorb another day of solar and human warmth.

Paragraph E: Post-occupancy energy audits spanning the building's first decade confirmed remarkable efficiency: Eastgate Centre consumed roughly thirty-five percent less total energy than six comparable mechanically air-conditioned office blocks nearby in Harare. Even though omitting central chillers saved an estimated three million dollars in upfront equipment expenses, Pearce cautioned later designers against copying shapes visually while ignoring local thermal climates—noting that passive night-flush strategies perform poorly in humid equatorial cities where nighttime air remains hot and muggy.`,
        questions: [
          {
            id: 'cd_reading_p7_q1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Conventional glass office towers in hot climates spend almost half of their lifetime ______ running cooling plants.',
            correctAnswer: 'ELECTRICITY',
            explanation: 'Paragraph A states mechanical chillers consume nearly half of a building\'s lifetime electricity.'
          },
          {
            id: 'cd_reading_p7_q2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Field studies with ______ showed termite mounds exchange gases through fluctuating wind pressure rather than simple chimney flow.',
            correctAnswer: 'TRACER GASES',
            explanation: 'Paragraph B explains physiologist Scott Turner used tracer gases to uncover wind-driven pressure oscillations.'
          },
          {
            id: 'cd_reading_p7_q3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Inside termites\' subterranean nests, intricate air regulation protects vital ______, which require stable humidity.',
            correctAnswer: 'FUNGUS GARDENS',
            explanation: 'Paragraph B states the ventilation regulates oxygen and moisture around underground fungus gardens.'
          },
          {
            id: 'cd_reading_p7_q4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Exposed precast ______ within Eastgate offices soak up daytime heat from occupants and electronics.',
            correctAnswer: 'CONCRETE SLABS',
            explanation: 'Paragraph C describes exposed high-density concrete slabs absorbing daytime indoor heat.'
          },
          {
            id: 'cd_reading_p7_q5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Omitting conventional chilling plants saved roughly three million dollars in initial ______ costs.',
            correctAnswer: 'EQUIPMENT',
            explanation: 'Paragraph E notes omitting central chillers saved an estimated three million dollars in upfront equipment expenses.'
          },
          {
            id: 'cd_reading_p7_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Harare experiences wide temperature differences between cold nights and hot afternoons.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A gives temperatures ranging between ~8°C nights and peaks over 35°C.'
          },
          {
            id: 'cd_reading_p7_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'Scott Turner\'s field experiments confirmed the classic textbook theory that termite nests operate solely as simple summit chimneys.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B calls the single-chimney explanation a simplified myth and shows mounds operate via wind-driven oscillations.'
          },
          {
            id: 'cd_reading_p7_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Eastgate Centre relies completely on natural wind without any electric fans moving air at night.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D explains large low-speed fans draw cool outside air through floor voids after dusk.'
          },
          {
            id: 'cd_reading_p7_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Retail tenants inside Eastgate Centre pay higher monthly rent than workers in surrounding Harare buildings.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E discusses energy audits and capital equipment savings without mentioning tenant rental prices.'
          },
          {
            id: 'cd_reading_p7_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'How many stories tall is the central glass atrium linking Eastgate Centre\'s two concrete blocks?',
            correctAnswer: 'SEVEN',
            explanation: 'Paragraph C specifies a seven-story glass atrium.'
          },
          {
            id: 'cd_reading_p7_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'Compared with six nearby air-conditioned office blocks, by what percentage did Eastgate cut total energy demand?',
            correctAnswer: 'THIRTY-FIVE PERCENT',
            explanation: 'Paragraph E states Eastgate consumed roughly thirty-five percent less total energy.'
          },
          {
            id: 'cd_reading_p7_q12',
            number: 12,
            type: 'multiple_choice',
            questionText: 'What is the key role of hollow floor voids in Eastgate Centre during nighttime hours?',
            options: [
              'A. They store emergency rainwater for rooftop sprinklers',
              'B. They house high-voltage backup generators during summer blackouts',
              'C. They channel cool exterior air beneath concrete slabs to purge accumulated heat',
              'D. They amplify office conversations downward to ground-floor retail shops'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states cool night air sweeps beneath hollow floor voids, flushing stored daytime heat upward into exhaust stacks.'
          },
          {
            id: 'cd_reading_p7_q13',
            number: 13,
            type: 'multiple_choice',
            questionText: 'Why did Mick Pearce warn architects against blindly replicating Eastgate\'s design in humid equatorial cities?',
            options: [
              'A. Termite species in equatorial jungles build wooden nests instead of earthen mounds',
              'B. Nighttime air in humid tropics stays too warm to cool thermal mass effectively',
              'C. Concrete slabs deteriorate rapidly when exposed to high ultraviolet light',
              'D. Local municipal building codes forbid glass atriums taller than four stories'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E warns passive night-flush cooling performs poorly where nighttime air remains hot and muggy.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Hygroscopic Skins and Botanical Adaptive Shading',
        subtitle: 'Programming wooden building facades that open and close without motors or sensors',
        text: `Paragraph A: Motorized sun-shading louvers mounted on modern skyscrapers effectively cut glare and solar heat gain, yet they rely on delicate electronic light sensors, wiring harnesses, and mechanical actuators that eventually jam or require expensive maintenance. Searching for zero-energy kinetic mechanisms, materials scientists at the University of Stuttgart examined an everyday woodland object: the fallen conifer cone. Even long after detaching from its parent branch and losing all living cellular activity, a pine cone tightly seals its woody scales during rainstorms and flares open under dry afternoon sun to disperse seeds.

Paragraph B: This autonomous movement stems from bilayer wood anatomy rather than living metabolic muscle. Each cone scale laminates two distinct microscopic layers whose cellulose fibers run at perpendicular angles. Because wood swells primarily across the width of cellulose fibers rather than along their length, rising atmospheric humidity expands the outer protective tissue significantly more than the stiff inner layer. Differential expansion forces the bi-layered scale to bend inward cleanly, sealing dormant seeds inside until dry air reverses the curvature.

Paragraph C: Translating botanical mechanics into architectural panels, researchers developed HygroSkin—lightweight pavilions clad in wafer-thin spruce and beech veneer tiles mounted across modular wooden frames. Rather than drawing grid power or digital weather feeds, each curved wooden aperture opens wide in arid afternoon sunshine—admitting diffuse daylight—and closes tightly within minutes when humidity rises ahead of rain showers. Laboratory fatigue cycling demonstrated that laminated spruce strips endured over ten thousand wet-dry opening cycles without structural delamination.

Paragraph D: Scaling botanical actuation from delicate exhibition pavilions to multi-story urban facades introduces demanding durability hurdles, however. Exterior timber exposed continuously to ultraviolet radiation, windborne grit, and cyclic fungal moisture gradually loses elastic responsiveness unless treated with breathable silicate mineral seals. Moreover, hygromorphic skins respond solely to relative humidity rather than solar intensity directly; on cold, dry winter mornings, open wooden pores could inadvertently accelerate indoor heat loss unless paired behind insulated double glazing.

Paragraph E: Architects therefore foresee hygroscopic veneers working best not as exposed outer weatherproofing, but within sealed double-skin curtain walls—sheltered cavities between exterior glass and interior windows where controlled micro-vents regulate airflow. Placed inside protected glass envelopes, moisture-driven timber shading balances passive seasonal responsiveness with multi-decade weather durability.`,
        questions: [
          {
            id: 'cd_reading_p7_q14',
            number: 14,
            type: 'matching_information',
            questionText: 'Which paragraph explains the microscopic fiber arrangement allowing dead pine cones to flex?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B explains perpendicular cellulose fiber orientations across laminated bilayer wood tissue.'
          },
          {
            id: 'cd_reading_p7_q15',
            number: 15,
            type: 'matching_information',
            questionText: 'Which paragraph describes an unwanted thermal drawback during dry winter weather?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D warns open pores on cold, dry winter mornings could inadvertently accelerate indoor heat loss.'
          },
          {
            id: 'cd_reading_p7_q16',
            number: 16,
            type: 'matching_information',
            questionText: 'Which paragraph proposes shielding kinetic timber veneers inside double glass walls?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E recommends placing hygroscopic veneers inside sealed double-skin curtain walls.'
          },
          {
            id: 'cd_reading_p7_q17',
            number: 17,
            type: 'matching_information',
            questionText: 'Which paragraph contrasts costly motorized building shutters with a passive biological model?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A contrasts motorized shading actuators/sensors against fallen conifer cones.'
          },
          {
            id: 'cd_reading_p7_q18',
            number: 18,
            type: 'summary_completion',
            questionText: 'Each scale in a conifer cone pairs two layers of wood whose ______ are oriented at right angles.',
            correctAnswer: 'CELLULOSE FIBERS',
            explanation: 'Paragraph B states each scale laminates two layers whose cellulose fibers run at perpendicular angles.'
          },
          {
            id: 'cd_reading_p7_q19',
            number: 19,
            type: 'summary_completion',
            questionText: 'In HygroSkin pavilions, curved tiles of ______ and beech veneer flex automatically with atmospheric moisture.',
            correctAnswer: 'SPRUCE',
            explanation: 'Paragraph C identifies wafer-thin spruce and beech veneer tiles.'
          },
          {
            id: 'cd_reading_p7_q20',
            number: 20,
            type: 'summary_completion',
            questionText: 'Repeated testing showed wooden strips withstood over ten thousand moisture cycles without suffering ______.',
            correctAnswer: 'DELAMINATION',
            explanation: 'Paragraph C states strips endured over 10,000 cycles without structural delamination.'
          },
          {
            id: 'cd_reading_p7_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Exposed exterior panels require breathable ______ coatings to resist fungal moisture and sunlight.',
            correctAnswer: 'SILICATE MINERAL',
            explanation: 'Paragraph D specifies breathable silicate mineral seals.'
          },
          {
            id: 'cd_reading_p7_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Because wooden tiles react to air dampness rather than ______ directly, winter cold snaps can trigger unwanted opening.',
            correctAnswer: 'SOLAR INTENSITY',
            explanation: 'Paragraph D notes hygromorphic skins respond solely to relative humidity rather than solar intensity directly.'
          },
          {
            id: 'cd_reading_p7_q23',
            number: 23,
            type: 'yes_no_not_given',
            questionText: 'A fallen pine cone needs living tree sap to close its scales during rainfall.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A explicitly notes pine cones open and close long after detaching and losing all living cellular activity.'
          },
          {
            id: 'cd_reading_p7_q24',
            number: 24,
            type: 'yes_no_not_given',
            questionText: 'HygroSkin facade tiles rely on solar micro-batteries concealed behind beech veneer panels.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C states HygroSkin requires neither grid power nor electronic weather feeds, operating via passive moisture changes.'
          },
          {
            id: 'cd_reading_p7_q25',
            number: 25,
            type: 'yes_no_not_given',
            questionText: 'Stuttgart researchers intend to sell HygroSkin pavilions commercially for residential garages next year.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'The passage discusses architectural research and facade integration without mentioning garage sales timelines.'
          },
          {
            id: 'cd_reading_p7_q26',
            number: 26,
            type: 'yes_no_not_given',
            questionText: 'Enclosing timber louvers behind exterior glass helps protect moisture-driven panels from outdoor weathering.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E explains protected glass envelopes give veneers multi-decade weather durability.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Desert Beetles, Radiative Coatings, and Fog-Harvesting Envelopes',
        subtitle: 'Engineering building surfaces that harvest atmospheric water and beam heat into space',
        text: `Paragraph A: Beyond ventilation and shading, arid cities confront twin resource stresses: oppressive daytime heat and acute freshwater scarcity. Engineers increasingly examine desert fauna and flora for dual-purpose surface microstructures. Along Namibia's hyper-arid Atlantic coast, the dark-winged Namib beetle (Stenocara gracilipes) collects morning drinking water from sparse coastal fog. Its wing covers combine microscopic water-attracting bumps capped with smooth glass-like peaks alongside waxy water-repelling valleys, funneling tiny suspended fog droplets cleanly toward the insect's mouth.

Paragraph B: Building-envelope researchers adapted this contrasting texture into dual-wetting polymer meshes mounted along rooftop wind towers and coastal greenhouse frames. Field trials along Peru's foggy Pacific foothills showed biomimetic dual-textured meshes captured up to forty percent more freshwater per square meter than smooth plastic fog nets—without needing electrical refrigeration coils to condense vapor artificially.

Paragraph C: Even in cloudless inland deserts lacking fog, physics offers another passive cooling principle inspired by the Saharan silver ant (Cataglyphis bombycina). Living across sunlit dunes reaching seventy degrees Celsius, this ant wears dense triangular silver hairs that reflect almost all incoming visible sunlight while simultaneously radiating internal body heat away rapidly as mid-infrared wavelengths. Crucially, Earth's atmosphere is nearly transparent within a narrow mid-infrared band between eight and thirteen micrometers, allowing heat emitted at those exact wavelengths to escape unimpeded straight into deep space.

Paragraph D: Applying the same optical trick, materials physicists fabricated daytime radiative cooling paints and multilayer polymer films embedded with microscopic barium sulfate and silica beads. Applied to warehouse roofs in Phoenix, radiative coatings reflected over ninety-five percent of incoming sunlight while continuously beaming infrared energy straight into outer space, keeping treated roofs roughly four to six degrees Celsius cooler than ambient shaded air even under blazing noon sunshine.

Paragraph E: Skeptics nonetheless identify real-world practical caveats preventing universal adoption. In dusty urban corridors or industrial ports, fine soot and airborne sand rapidly coat high-reflectivity roofs, absorbing solar heat and neutralizing sub-ambient radiative cooling within months unless washed routinely. Similarly, winter heating penalties can occur in temperate cities if ultra-reflective roofs reject welcome passive winter warmth. Designers must therefore tune biomimetic surfaces to specific regional climates—deploying fog meshes along arid coastlines and radiative films strictly in persistently hot sunbelts—rather than expecting any single natural template to cure every urban climate challenge.`,
        questions: [
          {
            id: 'cd_reading_p7_q27',
            number: 27,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. How coastal desert insects gather moisture using dual-surface wings',
              'ii. Limitations of soot buildup and seasonal climate mismatch',
              'iii. Mimicking silver ant optics to cool roofs below air temperature',
              'iv. Fog-capturing rooftop meshes outperform smooth coastal nets',
              'v. Why an ant\'s metallic coat escapes overheating through a sky window',
              'vi. Pumping underground ocean saltwater onto inland desert skyscrapers'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A introduces Stenocara gracilipes and its hydrophilic bumps and waxy channels that harvest fog.'
          },
          {
            id: 'cd_reading_p7_q28',
            number: 28,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. How coastal desert insects gather moisture using dual-surface wings',
              'ii. Limitations of soot buildup and seasonal climate mismatch',
              'iii. Mimicking silver ant optics to cool roofs below air temperature',
              'iv. Fog-capturing rooftop meshes outperform smooth coastal nets',
              'v. Why an ant\'s metallic coat escapes overheating through a sky window',
              'vi. Pumping underground ocean saltwater onto inland desert skyscrapers'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B reports Peruvian trials where biomimetic meshes collected up to 40% more water than smooth nets.'
          },
          {
            id: 'cd_reading_p7_q29',
            number: 29,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. How coastal desert insects gather moisture using dual-surface wings',
              'ii. Limitations of soot buildup and seasonal climate mismatch',
              'iii. Mimicking silver ant optics to cool roofs below air temperature',
              'iv. Fog-capturing rooftop meshes outperform smooth coastal nets',
              'v. Why an ant\'s metallic coat escapes overheating through a sky window',
              'vi. Pumping underground ocean saltwater onto inland desert skyscrapers'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C explains how the Saharan silver ant reflects sunlight and emits mid-infrared heat through Earth\'s transparent atmospheric window.'
          },
          {
            id: 'cd_reading_p7_q30',
            number: 30,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. How coastal desert insects gather moisture using dual-surface wings',
              'ii. Limitations of soot buildup and seasonal climate mismatch',
              'iii. Mimicking silver ant optics to cool roofs below air temperature',
              'iv. Fog-capturing rooftop meshes outperform smooth coastal nets',
              'v. Why an ant\'s metallic coat escapes overheating through a sky window',
              'vi. Pumping underground ocean saltwater onto inland desert skyscrapers'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D shows barium sulfate and silica paints cooling Phoenix roofs below shaded air temperature.'
          },
          {
            id: 'cd_reading_p7_q31',
            number: 31,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. How coastal desert insects gather moisture using dual-surface wings',
              'ii. Limitations of soot buildup and seasonal climate mismatch',
              'iii. Mimicking silver ant optics to cool roofs below air temperature',
              'iv. Fog-capturing rooftop meshes outperform smooth coastal nets',
              'v. Why an ant\'s metallic coat escapes overheating through a sky window',
              'vi. Pumping underground ocean saltwater onto inland desert skyscrapers'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph E evaluates dust/soot fouling and winter heating penalties that restrict where cooling films work well.'
          },
          {
            id: 'cd_reading_p7_q32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'How does the surface of the Namib beetle\'s wing cover capture water effectively?',
            options: [
              'A. Tiny pores inject cold refrigerant liquid into morning mist',
              'B. Microscopic electric static charges pull rain down from high clouds',
              'C. Water-attracting peaks collect droplets that roll along waxy repelling troughs',
              'D. Dense triangular hairs radiate visible sunlight toward ocean fog'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph A describes water-attracting bumps capped with smooth peaks alongside waxy water-repelling valleys.'
          },
          {
            id: 'cd_reading_p7_q33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'Why can mid-infrared heat between eight and thirteen micrometers cool objects below surrounding daytime air temperature?',
            options: [
              'A. The atmosphere is largely transparent at those wavelengths, letting heat escape straight to outer space',
              'B. Air molecules convert eight-micrometer waves into ice crystals',
              'C. Barium sulfate crystals pull cold ocean breezes directly across desert rooftops',
              'D. Mid-infrared waves push incoming visible light back onto neighboring dunes'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C states Earth\'s atmosphere is nearly transparent between 8 and 13 micrometers, releasing heat directly into deep space.'
          },
          {
            id: 'cd_reading_p7_q34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What maintenance problem threatens radiative cooling coatings in busy industrial cities?',
            options: [
              'A. Heavy winter snow strips barium sulfate paint off warehouse concrete',
              'B. Rooftop fog nets shade cooling paints from morning winds',
              'C. Local birds peck silica beads out of roof membranes for nests',
              'D. Accumulated fine soot and airborne sand absorb heat and block solar reflection'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E notes fine soot and airborne sand rapidly coat bright roofs, absorbing solar heat unless washed regularly.'
          },
          {
            id: 'cd_reading_p7_q35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'Why might ultra-reflective radiative coatings raise energy bills in cool temperate cities?',
            options: [
              'A. They draw excessive electricity to power silver roof antennae',
              'B. They bounce away beneficial passive winter solar warmth',
              'C. They freeze city water pipes inside indoor offices in July',
              'D. They block indoor Wi-Fi signals through metallic coatings'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E points out winter heating penalties occur if ultra-reflective roofs reject welcome passive winter warmth.'
          },
          {
            id: 'cd_reading_p7_q36',
            number: 36,
            type: 'true_false_not_given',
            questionText: 'Biomimetic fog meshes in Peru required small electric compressors to collect coastal freshwater.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states the meshes captured up to 40% more water without needing electrical refrigeration coils.'
          },
          {
            id: 'cd_reading_p7_q37',
            number: 37,
            type: 'true_false_not_given',
            questionText: 'Daytime temperatures on sunlit Saharan dunes inhabited by silver ants can reach seventy degrees Celsius.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C notes sunlit dunes reaching seventy degrees Celsius.'
          },
          {
            id: 'cd_reading_p7_q38',
            number: 38,
            type: 'true_false_not_given',
            questionText: 'Roof coatings tested in Phoenix were manufactured exclusively by Peruvian textile cooperatives.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D mentions materials physicists testing coatings in Phoenix without linking them to Peruvian cooperatives.'
          },
          {
            id: 'cd_reading_p7_q39',
            number: 39,
            type: 'short_answer',
            questionText: 'Up to how much more freshwater did dual-textured meshes harvest in Peru compared with smooth plastic nets?',
            correctAnswer: 'FORTY PERCENT',
            explanation: 'Paragraph B specifies up to forty percent more freshwater per square meter.'
          },
          {
            id: 'cd_reading_p7_q40',
            number: 40,
            type: 'short_answer',
            questionText: 'How many degrees Celsius cooler than shaded ambient air did treated Phoenix roofs remain at noon?',
            correctAnswer: 'FOUR TO SIX',
            explanation: 'Paragraph D states treated roofs stayed roughly four to six degrees Celsius cooler than ambient shaded air.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 8 (MODERATE): cd_reading_p8 (Silk Road Trade Networks & Central Asian Metallurgy)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p8',
    testNumber: 8,
    testType: 'practice',
    title: 'CD-IELTS Practice 8: Silk Road Trade Networks & Central Asian Metallurgy',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on Sogdian caravan logistics, crucible steelmaking in Merv, and oasis irrigation engineering.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Sogdian Merchant Diasporas and Multi-Tiered Caravan Networks',
        subtitle: 'Reframing Silk Road commerce as overlapping regional exchanges rather than single-trip journeys',
        text: `Paragraph A: Popular accounts often portray the ancient Silk Road as a solitary desert superhighway along which Roman aristocrats dispatched agents directly to Chang'an for silk robes. Historical texts and desert archaeology tell a far more decentralized story. Few merchants ever traversed the entire seven-thousand-kilometer expanse between the Mediterranean and northern China. Instead, long-distance trade functioned through relay networks connecting regional bazaars—from oasis towns in the Tarim Basin across Pamir mountain passes to Persia—with goods changing hands dozens of times along overlapping spurs.

Paragraph B: Between the fourth and eighth centuries CE, Iranian-speaking merchants from Sogdia—a fertile river basin centered near Samarkand and Bukhara in modern Uzbekistan—dominated this continental relay system. Excavations along dried riverbeds near Dunhuang uncovered woven mailbags containing Sogdian-language letters written on rag paper in 313 CE. Penned by traders stranded along China's frontier during political unrest, these remarkably intact letters provide intimate commercial intelligence: detailing silver exchange rates, wool shortages, unpaid debts, and instructions for relatives back in Samarkand.

Paragraph C: Crucially, Sogdian enterprise succeeded not through wandering nomads operating without oversight, but through tight-knit residential diasporas settled permanently inside foreign trade hubs. Dozens of walled merchant quarters flourished inside northern Chinese cities, Indian river ports, and steppe capitals. Settled diaspora families mastered host languages, hosted traveling kinsmen, provided secure warehousing, and verified creditworthiness using signed contracts stamped with carved stone seals.

Paragraph D: Archaeological evidence further clarifies what actually traveled in camel packs. While silk textiles served both as luxury currency and portable diplomatic tribute, bulk trade rested equally on everyday commodities: medicinal rhubarb, amber, lapis lazuli, glass beads, dried apricots, brass ewers, and trained horses. Moreover, ideas proved as mobile as metalwork; Sogdian caravan guides translated Buddhist sutras, spread waterwheel designs, and introduced West Asian stringed lutes to Tang dynasty court orchestras.

Paragraph E: When maritime shipping routes across the Indian Ocean grew safer and cheaper after the ninth century, overland caravan traffic between China and the Mediterranean contracted relative to oceanic hulls capable of hauling tons of porcelain at once. Yet Central Asian cities remained vital craft and scholarly crossroads for centuries afterward, demonstrating that Silk Road exchange was never dependent solely on transcontinental silk caravans.`,
        questions: [
          {
            id: 'cd_reading_p8_q1',
            number: 1,
            type: 'matching_information',
            questionText: 'Which paragraph mentions ancient commercial correspondence recovered in a preserved mailbag?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B describes Sogdian letters written in 313 CE uncovered in mailbags near Dunhuang.'
          },
          {
            id: 'cd_reading_p8_q2',
            number: 2,
            type: 'matching_information',
            questionText: 'Which paragraph explains how permanent immigrant communities provided lodging and financial trust for traders?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C details residential diasporas hosting kinsmen, warehousing goods, and verifying credit with stone seals.'
          },
          {
            id: 'cd_reading_p8_q3',
            number: 3,
            type: 'matching_information',
            questionText: 'Which paragraph lists non-textile goods alongside cultural innovations shared along caravan trails?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D lists rhubarb, lapis lazuli, brass ewers, Buddhist sutras, waterwheels, and stringed lutes.'
          },
          {
            id: 'cd_reading_p8_q4',
            number: 4,
            type: 'matching_information',
            questionText: 'Which paragraph attributes overland caravan decline partly to cheaper sea transport?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E explains maritime routes across the Indian Ocean became safer and cheaper for hauling heavy porcelain.'
          },
          {
            id: 'cd_reading_p8_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Individual Roman agents commonly walked straight from Italy to Chang\'an to purchase silk.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states few merchants ever traversed the entire 7,000-kilometer expanse directly; trade worked via relays.'
          },
          {
            id: 'cd_reading_p8_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Sogdia was located in a river valley overlapping present-day Uzbekistan.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B situates Sogdia near Samarkand and Bukhara in modern Uzbekistan.'
          },
          {
            id: 'cd_reading_p8_q7',
            number: 7,
            type: 'true_false_not_given',
            questionText: 'The Dunhuang letters were scratched onto thin strips of imported Egyptian papyrus.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explicitly states the Sogdian letters were written on rag paper.'
          },
          {
            id: 'cd_reading_p8_q8',
            number: 8,
            type: 'true_false_not_given',
            questionText: 'Tang dynasty court musicians banned Sogdian stringed lutes during periods of border conflict.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D mentions Sogdians introduced West Asian lutes to Tang orchestras with no mention of a ban.'
          },
          {
            id: 'cd_reading_p8_q9',
            number: 9,
            type: 'true_false_not_given',
            questionText: 'Overland Central Asian cities lost every trace of scholarly and craft activity as soon as ocean ships expanded.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E states Central Asian cities remained vital craft and scholarly crossroads for centuries afterward.'
          },
          {
            id: 'cd_reading_p8_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Long-distance commerce depended on segmented ______ linking oasis markets and mountain routes.',
            correctAnswer: 'RELAY NETWORKS',
            explanation: 'Paragraph A states long-distance trade functioned through relay networks connecting regional bazaars.'
          },
          {
            id: 'cd_reading_p8_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Merchant diasporas authenticated written credit agreements using engraved ______.',
            correctAnswer: 'STONE SEALS',
            explanation: 'Paragraph C notes contracts stamped with carved stone seals.'
          },
          {
            id: 'cd_reading_p8_q12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Alongside diplomatic use, fine silk fabrics frequently functioned as portable luxury ______.',
            correctAnswer: 'CURRENCY',
            explanation: 'Paragraph D specifies silk textiles served both as luxury currency and portable diplomatic tribute.'
          },
          {
            id: 'cd_reading_p8_q13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Oceanic vessels surpassed camel caravans in hauling dense cargoes such as Chinese ______.',
            correctAnswer: 'PORCELAIN',
            explanation: 'Paragraph E cites oceanic hulls capable of hauling tons of porcelain at once.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Crucible Steelmaking in Medieval Merv',
        subtitle: 'Uncovering high-temperature co-fusion furnaces along the Karakum Desert',
        text: `Paragraph A: Early medieval Islamic and European chronicles repeatedly praised "Damascus" blades for possessing razor-sharp edges, remarkable flexibility, and hypnotic watery surface patterns. Although Damascus served as the western clearinghouse where European buyers purchased finished swords, metallurgical investigations prove the raw metal ingots themselves were forged far eastward in Central Asian and South Asian workshops—notably inside the sprawling oasis metropolis of Merv, in modern Turkmenistan.

Paragraph B: Archaeometallurgical excavations in Merv's ancient industrial quarter uncovered workshops dating to the ninth and tenth centuries containing fragments of cylindrical clay vessels no wider than a drinking mug. These refractory crucibles held a precise mixture of low-carbon wrought iron and carbon-rich cast iron alongside small quantities of dried leaves or nutshells. Smiths sealed the lids with clay vents and packed dozens of crucibles inside charcoal-fired shaft furnaces forced with twin leather bellows.

Paragraph C: Raising furnace interiors above 1,350 degrees Celsius required extraordinary ceramic engineering. Ordinary pottery vessels slump or crack at such heat, ruining expensive iron batches. Merv potters blended local desert clay with crushed quartz sand and fine grog—pre-fired ceramic grit—producing refractory mullite-rich walls resilient enough to endure hours of roaring white-hot combustion without leaking molten slag.

Paragraph D: Once the furnace cooled slowly over several days, artisans shattered each single-use clay vessel to retrieve an egg-shaped ingot of homogeneous crucible steel containing roughly one point five percent carbon. Under slow solidification, dissolved carbon precipitated into microscopic bands of ultra-hard iron carbide embedded inside tougher, flexible steel layers. When bladesmiths carefully hammered ingots at moderate cherry-red heat rather than scorching orange temperatures, alternating hard and ductile bands survived—yielding the shimmering wavy bands prized by sword collectors.

Paragraph E: Why did Merv's celebrated steel foundries abandon production by the late twelfth century? Excavations reveal rising soil salinity, shifting river irrigation channels, and severe regional timber depletion caused by feeding charcoal kilns over three consecutive centuries. Even before Mongol invasions devastated Khorasan in 1221, ecological exhaustion of nearby pistachio and saxaul woodlands had sharply raised fuel costs across Central Asian smelting districts.`,
        questions: [
          {
            id: 'cd_reading_p8_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Distinguishing the western trading market from eastern steel-smelting centers',
              'ii. Ceramic mixtures engineered to survive extreme smelting temperatures',
              'iii. How controlled slow cooling created layered strength and surface waves',
              'iv. Sealed clay pots combining two iron forms inside bellows-driven kilns',
              'v. Woodland depletion and environmental pressures ending Merv metallurgy',
              'vi. Adapting Merv steel formulas for medieval Japanese armorers',
              'vii. Exporting European copper vessels eastward to Turkmenistan'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A distinguishes Damascus as the commercial clearinghouse from eastern production hubs like Merv.'
          },
          {
            id: 'cd_reading_p8_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Distinguishing the western trading market from eastern steel-smelting centers',
              'ii. Ceramic mixtures engineered to survive extreme smelting temperatures',
              'iii. How controlled slow cooling created layered strength and surface waves',
              'iv. Sealed clay pots combining two iron forms inside bellows-driven kilns',
              'v. Woodland depletion and environmental pressures ending Merv metallurgy',
              'vi. Adapting Merv steel formulas for medieval Japanese armorers',
              'vii. Exporting European copper vessels eastward to Turkmenistan'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B details cylindrical clay crucibles blending wrought and cast iron in bellows-forced shaft furnaces.'
          },
          {
            id: 'cd_reading_p8_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Distinguishing the western trading market from eastern steel-smelting centers',
              'ii. Ceramic mixtures engineered to survive extreme smelting temperatures',
              'iii. How controlled slow cooling created layered strength and surface waves',
              'iv. Sealed clay pots combining two iron forms inside bellows-driven kilns',
              'v. Woodland depletion and environmental pressures ending Merv metallurgy',
              'vi. Adapting Merv steel formulas for medieval Japanese armorers',
              'vii. Exporting European copper vessels eastward to Turkmenistan'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph C describes blending clay, crushed quartz sand, and grog to survive 1,350°C temperatures.'
          },
          {
            id: 'cd_reading_p8_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Distinguishing the western trading market from eastern steel-smelting centers',
              'ii. Ceramic mixtures engineered to survive extreme smelting temperatures',
              'iii. How controlled slow cooling created layered strength and surface waves',
              'iv. Sealed clay pots combining two iron forms inside bellows-driven kilns',
              'v. Woodland depletion and environmental pressures ending Merv metallurgy',
              'vi. Adapting Merv steel formulas for medieval Japanese armorers',
              'vii. Exporting European copper vessels eastward to Turkmenistan'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D explains slow solidification producing carbide bands and moderate-temperature forging retaining wavy patterns.'
          },
          {
            id: 'cd_reading_p8_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Distinguishing the western trading market from eastern steel-smelting centers',
              'ii. Ceramic mixtures engineered to survive extreme smelting temperatures',
              'iii. How controlled slow cooling created layered strength and surface waves',
              'iv. Sealed clay pots combining two iron forms inside bellows-driven kilns',
              'v. Woodland depletion and environmental pressures ending Merv metallurgy',
              'vi. Adapting Merv steel formulas for medieval Japanese armorers',
              'vii. Exporting European copper vessels eastward to Turkmenistan'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph E traces production decline to soil salinity, shifting canals, and fuel depletion of nearby woodlands.'
          },
          {
            id: 'cd_reading_p8_q19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'What misconception about "Damascus" steel does Paragraph A correct?',
            options: [
              'A. The blades were invented in medieval England before traveling east',
              'B. The steel was smelted primarily in Central and South Asia rather than Damascus itself',
              'C. Damascus smiths never sold finished swords to European merchants',
              'D. The wavy patterns were painted onto iron ingots with plant acid'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph A clarifies Damascus was the trading center, while raw ingots were smelted in places like Merv.'
          },
          {
            id: 'cd_reading_p8_q20',
            number: 20,
            type: 'multiple_choice',
            questionText: 'Why did Merv ceramicists mix crushed quartz sand and pre-fired grog into crucible clay?',
            options: [
              'A. To reduce the carbon content of finished blades below one percent',
              'B. To allow artisans to reuse identical unbroken pots for dozens of batches',
              'C. To prevent vessels from softening or leaking above 1,350 degrees Celsius',
              'D. To lower furnace temperatures below ordinary household oven ranges'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes quartz and grog created mullite-rich walls capable of withstanding white-hot combustion without slumping.'
          },
          {
            id: 'cd_reading_p8_q21',
            number: 21,
            type: 'multiple_choice',
            questionText: 'What happened if bladesmiths hammered Merv steel ingots at overly hot scorching orange temperatures?',
            options: [
              'A. The contrasting hard and flexible bands vanished rather than staying distinct',
              'B. Excess quartz sand fused permanently onto finished weapon grips',
              'C. Clay pots shattered prematurely inside cold cooling chambers',
              'D. Pistachio charcoal lost its chemical carbon content'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states alternating bands survived only when hammered at moderate cherry-red heat rather than scorching orange temperatures.'
          },
          {
            id: 'cd_reading_p8_q22',
            number: 22,
            type: 'short_answer',
            questionText: 'What percentage of carbon did homogeneous egg-shaped ingots from Merv typically hold?',
            correctAnswer: 'ONE POINT FIVE',
            explanation: 'Paragraph D mentions ingots containing roughly one point five percent carbon.'
          },
          {
            id: 'cd_reading_p8_q23',
            number: 23,
            type: 'short_answer',
            questionText: 'What two types of woodland were depleted around Merv by centuries of making charcoal?',
            correctAnswer: 'PISTACHIO AND SAXAUL',
            explanation: 'Paragraph E specifies ecological exhaustion of nearby pistachio and saxaul woodlands.'
          },
          {
            id: 'cd_reading_p8_q24',
            number: 24,
            type: 'short_answer',
            questionText: 'In what year did Mongol invasions strike the region of Khorasan according to Paragraph E?',
            correctAnswer: '1221',
            explanation: 'Paragraph E states Mongol invasions devastated Khorasan in 1221.'
          },
          {
            id: 'cd_reading_p8_q25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Furnace operators blended cast iron with low-carbon ______ and small plant fragments inside clay pots.',
            correctAnswer: 'WROUGHT IRON',
            explanation: 'Paragraph B states crucibles held a precise mixture of low-carbon wrought iron and carbon-rich cast iron.'
          },
          {
            id: 'cd_reading_p8_q26',
            number: 26,
            type: 'fill_blank',
            questionText: 'To maintain roaring shaft furnace drafts, metalworkers pumped air using twin ______.',
            correctAnswer: 'LEATHER BELLOWS',
            explanation: 'Paragraph B notes charcoal-fired shaft furnaces forced with twin leather bellows.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Subterranean Karez Aquifers Along the Taklamakan Edge',
        subtitle: 'Gravity-fed oasis irrigation sustaining desert caravan towns across Xinjiang',
        text: `Paragraph A: Caravan routes skirting the hyper-arid Taklamakan Desert could never have operated without densely provisioned oasis settlements such as Turpan, where annual rainfall averages barely sixteen millimeters while summer air temperatures frequently pass forty-five degrees Celsius. Surface canals laid across barren gravel plains under such harsh sun lose up to seventy percent of their flow to rapid evaporation before ever reaching orchard crops. Oasis farmers overcame desert heat using an ingenious subterranean engineering network known locally as the karez—closely related to Persian qanat gravity tunnels.

Paragraph B: Rather than lifting groundwater mechanically from village wells, karez builders dug gently sloping underground tunnels directly into sloping alluvial fans bordering snow-capped Tian Shan peaks. A team began by sinking a deep "mother well" high up on gravel foothills until striking reliable cool groundwater trapped beneath impermeable clay strata. From that uphill source, crews excavated slightly sloped underground channels—dropping less than two meters per kilometer—leading out onto low agricultural terraces miles away.

Paragraph C: Constructing deep subterranean tunnels safely through loose desert gravel required systematic vertical shafts spaced roughly every twenty to thirty meters. These shafts enabled miners to haul excavated gravel buckets aloft using wooden windlasses, circulate breathable air down to lamp-lit diggers, and descend later to clear occasional roof collapses. Viewed from airplanes today, chains of volcanic-looking ring mounds mark each vertical access shaft stretching continuously from mountain foothills to green date-palm gardens.

Paragraph D: Beyond suppressing evaporation, underground karez flow confers crucial hydrological advantages. Because tunnels sit below scorching surface air, water arrives cool and free of floating algae, while precise gentle slopes prevent sudden flash erosion. Most remarkably, karez systems cannot physically over-pump ancient aquifers: they tap only surplus gravity-fed mountain snowmelt, sustaining equilibrium across desert basins for centuries without draining deeper fossil water tables.

Paragraph E: Yet modern agricultural industrialization now threatens Turpan's ancient karez heritage. Over the past four decades, electric deep-bore tube wells driven by subsidized diesel and grid power have pumped groundwater aggressively to irrigate commercial cotton and melon plantations. As regional water tables drop rapidly below shallow mother-well depths, more than half of Turpan's historic karez channels have run completely dry—reminding water planners how delicate balance is easily broken once mechanical pumping outpaces natural snowmelt recharge.`,
        questions: [
          {
            id: 'cd_reading_p8_q27',
            number: 27,
            type: 'summary_completion',
            questionText: 'Open-air desert ditches in Turpan forfeit up to seventy percent of transported water through intense ______.',
            correctAnswer: 'EVAPORATION',
            explanation: 'Paragraph A notes surface canals lose up to 70% of their flow to rapid evaporation.'
          },
          {
            id: 'cd_reading_p8_q28',
            number: 28,
            type: 'summary_completion',
            questionText: 'Crews initially sank an uphill ______ along gravel foothills until tapping groundwater fed by mountain snow.',
            correctAnswer: 'MOTHER WELL',
            explanation: 'Paragraph B states a team began by sinking a deep "mother well" high up on gravel foothills.'
          },
          {
            id: 'cd_reading_p8_q29',
            number: 29,
            type: 'summary_completion',
            questionText: 'Miners hoisted buckets of gravel up vertical air shafts using simple ______.',
            correctAnswer: 'WOODEN WINDLASSES',
            explanation: 'Paragraph C states miners hauled gravel buckets aloft using wooden windlasses.'
          },
          {
            id: 'cd_reading_p8_q30',
            number: 30,
            type: 'summary_completion',
            questionText: 'Shaded underground channels keep arriving irrigation supplies cool and completely clear of floating ______.',
            correctAnswer: 'ALGAE',
            explanation: 'Paragraph D states water arrives cool and free of floating algae.'
          },
          {
            id: 'cd_reading_p8_q31',
            number: 31,
            type: 'summary_completion',
            questionText: 'Widespread electric ______ extracting groundwater for commercial melons and cotton have dried out historic channels.',
            correctAnswer: 'TUBE WELLS',
            explanation: 'Paragraph E cites electric deep-bore tube wells dropping regional water tables below mother-well depths.'
          },
          {
            id: 'cd_reading_p8_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Turpan relies on abundant summer rainfall to replenish open orchard ditches along the desert edge.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states annual rainfall averages barely sixteen millimeters while evaporation ruins open surface canals.'
          },
          {
            id: 'cd_reading_p8_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Karez channels rely entirely on gravity rather than fuel-powered mechanical pumps.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B and D state builders used gently sloping gravity tunnels rather than mechanical lifting.'
          },
          {
            id: 'cd_reading_p8_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Vertical karez shafts were permanently bricked shut as soon as initial digging concluded.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C notes crews used vertical shafts later to descend and clear occasional roof collapses.'
          },
          {
            id: 'cd_reading_p8_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Turpan municipal authorities have already dismantled every electric tube well constructed since 1990.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions electric tube wells running over the past four decades without stating they were dismantled.'
          },
          {
            id: 'cd_reading_p8_q36',
            number: 36,
            type: 'yes_no_not_given',
            questionText: 'Natural karez systems protect deep fossil water reserves by drawing only surplus mountain recharge.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D states karez systems cannot over-pump aquifers, tapping only surplus gravity-fed snowmelt.'
          },
          {
            id: 'cd_reading_p8_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do long lines of ring-shaped dirt mounds appear from overhead aircraft near Turpan?',
            options: [
              'A. Ancient caravan guards built circular watchtowers against desert storms',
              'B. Farmers piled harvested gravel rings to trap seasonal winter snowdrifts',
              'C. Abandoned copper mines collapsed inward across flat orchard terraces',
              'D. They mark the vertical access shafts dug every twenty to thirty meters along buried tunnels'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C states chains of ring mounds mark each vertical access shaft along underground karez lines.'
          },
          {
            id: 'cd_reading_p8_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What key geological feature prevents karez tunnels from washing away their own floors?',
            options: [
              'A. Tunnels are paved entirely with glazed Chinese porcelain tiles',
              'B. A carefully controlled gentle gradient drops under two meters per kilometer',
              'C. Water freezes solid inside mother wells during late spring',
              'D. Floating algae carpets slow moving mountain torrents naturally'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B gives the gentle slope (<2 meters/km) and Paragraph D confirms gentle slopes prevent flash erosion.'
          },
          {
            id: 'cd_reading_p8_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Why have more than half of Turpan\'s traditional karez tunnels dried up over recent decades?',
            options: [
              'A. Tian Shan glaciers stopped melting completely after 1970',
              'B. Earthquake tremors sealed every clay roof across Xinjiang',
              'C. Desert fruit merchants abandoned orchard farming in favor of steel smelting',
              'D. Subsidized mechanical wells have lowered water tables below shallow mother wells'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E attributes drying channels to electric deep-bore tube wells dropping regional water tables below mother-well depths.'
          },
          {
            id: 'cd_reading_p8_q40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What central engineering contrast shapes Passage 3?',
            options: [
              'A. Gravity-balanced traditional snowmelt harvesting versus unsustainable mechanized groundwater extraction',
              'B. Silk merchant caravans versus Buddhist monastic translation centers',
              'C. Open porcelain-lined lakes versus stone aqueduct bridges',
              'D. Pistachio charcoal burning versus wind-driven mill pumping'
            ],
            correctAnswer: 'A',
            explanation: 'Passage 3 contrasts equilibrium-preserving karez tunnels against subsidized electric tube wells over-pumping aquifers.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 9 (MODERATE): cd_reading_p9 (Cognitive Neuroscience of Bilingual Language Acquisition)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p9',
    testNumber: 9,
    testType: 'practice',
    title: 'CD-IELTS Practice 9: Cognitive Neuroscience of Bilingual Language Acquisition',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on infant phonetic attunement, neural language control, and debates surrounding bilingual executive function.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Acoustic Mapping and Phonetic Pruning in Bilingual Infants',
        subtitle: 'How young brains navigate dual sound systems without developmental delay',
        text: `Paragraph A: For much of the early twentieth century, educational psychologists widely feared that raising infants in households speaking two languages simultaneously would overload developing minds, produce lifelong linguistic confusion, and delay vocabulary acquisition. Longitudinal neuroimaging and behavioral eye-tracking experiments conducted over the past thirty years have decisively overturned that misconception. Even before uttering single words, babies raised in bilingual homes construct separated, systematically organized sound maps for each language they hear daily.

Paragraph B: Newborns arrive biologically equipped as universal phonetic listeners. Laboratory head-turn conditioning studies confirm that six-month-old infants raised strictly in English-speaking homes easily distinguish subtle consonant contrasts in Hindi or Mandarin that monolingual adults cannot perceive reliably. Between six and twelve months of age, however, brain networks undergo "perceptual narrowing": neural circuits sharpen sensitivity toward native phonemes frequently heard around the crib while pruning responsiveness to unused foreign contrasts.

Paragraph C: Infants exposed regularly to two languages maintain this dual sensitivity longer without blurring boundaries. Using functional near-infrared spectroscopy (fNIRS), cognitive neuroscientists observed nine-month-old Spanish-Catalan bilingual infants shifting focus naturally when researchers altered grammatical rhythm, vowel duration, and syllable stress cues. Babies track statistical probability distributions—noting which vowel clusters co-occur reliably—to sort incoming speech streams into distinct mental compartments rather than mixing vocabularies indiscriminately.

Paragraph D: Early vocabulary assessments initially led skeptics to worry that bilingual toddlers lagged behind monolingual peers when tested exclusively in one language. Yet when researchers calculate "conceptual vocabulary"—counting distinct ideas a child can express across both languages combined, whether saying "dog" in English or "perro" in Spanish—bilingual children match or exceed monolingual developmental benchmarks on schedule. Apparent single-language gaps merely reflect divided lexical exposure across two communicative contexts rather than cognitive weakness.

Paragraph E: Bilingual infants also display heightened visual vigilance during face-to-face interactions. Eye-tracking measurements show babies aged eight months growing up in dual-language households fixate noticeably longer on a speaker's mouth than eyes compared with monolingual peers. Lip-reading subtle articulatory motions provides extra visual anchoring to disentangle similarly sounding syllables between languages, demonstrating early adaptive flexibility across multisensory perception.`,
        questions: [
          {
            id: 'cd_reading_p9_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Early twentieth-century psychologists commonly assumed dual-language exposure harmed children\'s speech development.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states early twentieth-century psychologists widely feared bilingual upbringing would confuse developing minds and delay vocabulary.'
          },
          {
            id: 'cd_reading_p9_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Six-month-old monolingual English infants fail to detect Mandarin speech contrasts heard easily by adults.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states six-month-old English-exposed infants easily distinguish subtle Hindi or Mandarin contrasts that monolingual adults cannot reliably hear.'
          },
          {
            id: 'cd_reading_p9_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Counting combined words across both languages places bilingual toddlers on track with monolingual peers.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states conceptual vocabulary across both languages matches or exceeds monolingual developmental benchmarks.'
          },
          {
            id: 'cd_reading_p9_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Eight-month-old bilingual babies look at a speaker\'s mouth less often than monolingual infants do.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E shows eight-month-old bilingual babies fixate noticeably longer on a speaker\'s mouth than monolingual peers.'
          },
          {
            id: 'cd_reading_p9_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Researchers used fNIRS headsets exclusively inside hospital intensive care wards in Barcelona.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C mentions fNIRS experiments with Spanish-Catalan infants without specifying hospital intensive care wards.'
          },
          {
            id: 'cd_reading_p9_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What occurs during "perceptual narrowing" between six and twelve months of age?',
            options: [
              'A. Babies abruptly stop responding to visual cues from speakers\' lips',
              'B. Toddlers forget early concepts learned in one of their two family languages',
              'C. Infant brains strengthen responses to regularly heard native sounds while trimming unused foreign distinctions',
              'D. Monolingual children develop adult-level reading speed'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B defines perceptual narrowing as sharpening sensitivity to frequent native phonemes while pruning unused foreign contrasts.'
          },
          {
            id: 'cd_reading_p9_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'How do nine-month-old bilingual babies avoid blending two languages into one chaotic vocabulary?',
            options: [
              'A. Infants track statistical sound probabilities, stress patterns, and rhythm cues',
              'B. Parents must wear color-coded shirts when speaking different tongues',
              'C. Toddlers suppress all speech until age four until grammar stabilizes',
              'D. Bilingual children store their second language only after entering primary school'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C notes babies track statistical probability distributions, grammatical rhythm, vowel duration, and syllable stress.'
          },
          {
            id: 'cd_reading_p9_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Why did single-language vocabulary tests unfairly underestimate bilingual toddlers in early studies?',
            options: [
              'A. Evaluators administered written spelling exams to eighteen-month-old babies',
              'B. Sound maps in bilingual infants vanish during head-turn tests',
              'C. Bilingual toddlers deliberately refused to speak to unfamiliar examiners',
              'D. Single-language tests omitted words children already knew in their second home language'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains single-language testing overlooks divided exposure, whereas conceptual vocabulary across both languages equals monolingual levels.'
          },
          {
            id: 'cd_reading_p9_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why does watching a speaker\'s mouth aid infants learning two languages simultaneously?',
            options: [
              'A. Facial expressions indicate whether a speaker is angry or pleased',
              'B. Lip movements supply visual clues that separate similar-sounding words across languages',
              'C. Focusing on mouths strengthens baby eye muscles before preschool',
              'D. Infants mimic adult dental hygiene routines instinctively'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E explains lip-reading articulatory motions provides extra visual anchoring to disentangle similarly sounding syllables.'
          },
          {
            id: 'cd_reading_p9_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'What do researchers call the measure counting unique concepts expressed across both of a child\'s languages?',
            correctAnswer: 'CONCEPTUAL VOCABULARY',
            explanation: 'Paragraph D defines this combined metric as conceptual vocabulary.'
          },
          {
            id: 'cd_reading_p9_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'At what age did bilingual babies show heightened fixation on speakers\' mouths in eye-tracking trials?',
            correctAnswer: 'EIGHT MONTHS',
            explanation: 'Paragraph E specifies babies aged eight months.'
          },
          {
            id: 'cd_reading_p9_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which two languages were spoken around the nine-month-old infants monitored by fNIRS in Paragraph C?',
            correctAnswer: 'SPANISH-CATALAN',
            explanation: 'Paragraph C cites nine-month-old Spanish-Catalan bilingual infants.'
          },
          {
            id: 'cd_reading_p9_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Besides Hindi, which Asian language\'s consonant contrasts were tested on six-month-old English infants?',
            correctAnswer: 'MANDARIN',
            explanation: 'Paragraph B names Hindi or Mandarin consonant contrasts.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Neural Co-Activation and the Cortical Switching Network',
        subtitle: 'How the adult brain manages two active lexicons without cross-language slips',
        text: `Paragraph A: Early models of bilingual language processing assumed that fluent speakers possessed a neat mental toggle switch: activating French cleanly shut off German until a speaker deliberately switched modes. Psycholinguistic timing tasks using eye tracking and electroencephalography (EEG) have thoroughly refuted that isolation model. Even when a proficient Dutch-English bilingual reads an exclusively English paragraph in an English-speaking country, both languages remain simultaneously active in neural lexical memory.

Paragraph B: Evidence for constant co-activation comes from interlingual homographs—words spelled identically across languages with unrelated meanings, such as "room," which denotes living space in English yet means "cream" in Dutch. When Dutch-English speakers decide whether printed words belong to English, response latencies slow down significantly on "room" compared with purely English words like "brick." Unconscious parallel retrieval of the Dutch meaning momentarily competes for selection even though Dutch is irrelevant to the task.

Paragraph C: Preventing frequent accidental intrusions therefore demands constant executive inhibition. Functional magnetic resonance imaging (fMRI) reveals that bilingual language control recruits neural structures extending well beyond classic left-hemisphere language centers such as Broca's area. Whenever speakers switch languages or suppress a dominant translation equivalent, elevated blood oxygen flow appears inside the dorsolateral prefrontal cortex, anterior cingulate cortex, and subcortical basal ganglia—precisely the frontostriatal circuits governing general attention shifting and impulse inhibition.

Paragraph D: Intriguingly, inhibiting one's stronger native tongue during second-language conversation proves harder than silencing a weaker tongue. Classic switching experiments measure "asymmetrical switch costs": returning to one's native language after speaking a weaker second language takes measurably longer than switching from native speech into the second language. Neuroscientists attribute this paradox to persistent suppression: speakers must apply heavy cortical inhibition to hold back a fluent native tongue, so reactivating it milliseconds later requires overcoming lingering neural brakes.

Paragraph E: Bilingual experience also leaves measurable structural traces across cortical gray and white matter. Diffusion tensor imaging surveys report denser white-matter fiber tracts linking frontal control hubs to temporal vocabulary zones in lifelong bilinguals compared with age-matched monolinguals. Although brain imaging cannot dictate classroom pedagogy directly, such neural plasticity underscores how daily communicative demands reshape executive circuitry throughout adulthood.`,
        questions: [
          {
            id: 'cd_reading_p9_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Disproving the idea that an unused language switches completely off',
              'ii. Shared spellings expose unconscious competition between two vocabularies',
              'iii. White-matter restructuring across lifelong bilingual brains',
              'iv. Why switching back into a strong native language triggers unexpected delay',
              'v. General attention circuits recruited to control competing words',
              'vi. Designing translation software modeled on basal ganglia firing'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A refutes the toggle-switch isolation model, showing both languages stay active simultaneously.'
          },
          {
            id: 'cd_reading_p9_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Disproving the idea that an unused language switches completely off',
              'ii. Shared spellings expose unconscious competition between two vocabularies',
              'iii. White-matter restructuring across lifelong bilingual brains',
              'iv. Why switching back into a strong native language triggers unexpected delay',
              'v. General attention circuits recruited to control competing words',
              'vi. Designing translation software modeled on basal ganglia firing'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B uses interlingual homographs like "room" to demonstrate parallel retrieval competition.'
          },
          {
            id: 'cd_reading_p9_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Disproving the idea that an unused language switches completely off',
              'ii. Shared spellings expose unconscious competition between two vocabularies',
              'iii. White-matter restructuring across lifelong bilingual brains',
              'iv. Why switching back into a strong native language triggers unexpected delay',
              'v. General attention circuits recruited to control competing words',
              'vi. Designing translation software modeled on basal ganglia firing'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C identifies prefrontal, cingulate, and basal ganglia attention circuits recruited for language control.'
          },
          {
            id: 'cd_reading_p9_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Disproving the idea that an unused language switches completely off',
              'ii. Shared spellings expose unconscious competition between two vocabularies',
              'iii. White-matter restructuring across lifelong bilingual brains',
              'iv. Why switching back into a strong native language triggers unexpected delay',
              'v. General attention circuits recruited to control competing words',
              'vi. Designing translation software modeled on basal ganglia firing'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph D explains asymmetrical switch costs when overcoming lingering inhibition of a dominant native tongue.'
          },
          {
            id: 'cd_reading_p9_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Words looking identical in two tongues but carrying distinct meanings are termed interlingual ______.',
            correctAnswer: 'HOMOGRAPHS',
            explanation: 'Paragraph B defines these cross-language lookalikes as interlingual homographs.'
          },
          {
            id: 'cd_reading_p9_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Preventing unwanted intrusions relies on frontostriatal attention networks such as the subcortical ______.',
            correctAnswer: 'BASAL GANGLIA',
            explanation: 'Paragraph C names the dorsolateral prefrontal cortex, anterior cingulate cortex, and subcortical basal ganglia.'
          },
          {
            id: 'cd_reading_p9_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Returning into one\'s stronger native speech requires overriding lingering neural ______.',
            correctAnswer: 'BRAKES',
            explanation: 'Paragraph D notes reactivating a heavily suppressed native tongue requires overcoming lingering neural brakes.'
          },
          {
            id: 'cd_reading_p9_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Lifelong dual-language speakers develop denser ______ connecting frontal control areas with lexical storage.',
            correctAnswer: 'WHITE-MATTER',
            explanation: 'Paragraph E refers to denser white-matter fiber tracts linking frontal control hubs to temporal vocabulary zones.'
          },
          {
            id: 'cd_reading_p9_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Brain connectivity differences observed via ______ scanning reflect daily communicative effort.',
            correctAnswer: 'DIFFUSION TENSOR',
            explanation: 'Paragraph E specifies diffusion tensor imaging surveys.'
          },
          {
            id: 'cd_reading_p9_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph cautions against drawing direct classroom teaching rules straight from brain scans?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'E',
            explanation: 'Paragraph E notes brain imaging cannot dictate classroom pedagogy directly.'
          },
          {
            id: 'cd_reading_p9_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph mentions a classic left-hemisphere speech center outside frontostriatal control loops?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C refers to classic left-hemisphere language centers such as Broca\'s area.'
          },
          {
            id: 'cd_reading_p9_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph contrasts a shared English-Dutch spelling against an exclusively English control word?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B compares response delays on "room" against purely English "brick."'
          },
          {
            id: 'cd_reading_p9_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph names two diagnostic technologies used to show simultaneous lexical activity?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A cites eye tracking and electroencephalography (EEG).'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: The Bilingual Advantage Controversy and Cognitive Reserve',
        subtitle: 'Evaluating conflicting research on non-verbal executive control and dementia onset',
        text: `Paragraph A: If bilinguals continuously exercise prefrontal attention circuits whenever choosing words, does lifelong language management spill over into sharper non-verbal focus—such as filtering distractions in math tests or driving? Throughout the 2000s, pioneering psychologists led by Ellen Bialystok published studies indicating that bilingual adults and children outperformed monolinguals on non-verbal conflict tasks like the Stroop and flanker tests. Quickly popularized across parenting manuals, this "bilingual executive advantage" seemed an effortless cognitive bonus.

Paragraph B: After 2015, however, the hypothesis faced intense methodological scrutiny during psychology's wider replication crisis. Large-sample meta-analyses directed by Kenneth Paap found that when research teams controlled carefully for socioeconomic status, immigration history, and sample size, apparent bilingual advantages on reaction-time conflict tests frequently disappeared. Moreover, citation audits revealed serious publication bias: journals readily accepted small studies reporting dramatic positive bilingual scores while null studies sat unpublished in laboratory drawers.

Paragraph C: Reconciling these conflicting camps requires moving beyond binary labels comparing "monolingual" versus "bilingual." Sociolinguist Judith Kroll emphasizes that daily conversational context dictates how heavily executive networks are taxed. In dense code-switching communities where speakers freely blend two tongues mid-sentence with peers who know both, minimal inhibitory tension arises. Conversely, in compartmentalized settings—speaking Mandarin strictly at home and English solely at an office—speakers continuously suppress a competing lexicon, engaging control networks much more intensely.

Paragraph D: Even as debate continues over millisecond reaction advantages in healthy university students, medical studies on cognitive aging uncover a remarkably consistent clinical pattern. Across independent patient registries in Toronto, Hyderabad, and Edinburgh, lifelong bilinguals developed overt Alzheimer's symptoms roughly four to five years later than monolinguals bearing equivalent brain pathology. Importantly, post-mortem scans confirm bilingualism does not block physical amyloid plaque buildup; instead, enriched neural connectivity enables aging brains to compensate longer before behavioral dementia surfaces.

Paragraph E: Contemporary cognitive neuroscience therefore treats bilingualism neither as an educational miracle drug nor as mere linguistic decoration. While isolated laboratory flanker tests yield modest or inconsistent gains among young adults, managing multiple active tongues over decades remains one of the brain's richest natural workouts—forging redundant neural pathways that safeguard mental resilience well into late life.`,
        questions: [
          {
            id: 'cd_reading_p9_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'After 2015, large-scale reviews universally confirmed that bilinguals win every non-verbal conflict reaction test.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B reports large meta-analyses by Kenneth Paap found bilingual reaction-time advantages often disappeared when confounds were controlled.'
          },
          {
            id: 'cd_reading_p9_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Selective journal acceptance of positive findings distorted early scientific impressions of the bilingual advantage.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B describes publication bias where journals readily printed positive small studies while null studies went unpublished.'
          },
          {
            id: 'cd_reading_p9_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Mixing two languages freely within a single sentence exercises stronger executive suppression than keeping languages strictly separated by location.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C states free mid-sentence code-switching involves minimal inhibitory tension compared with compartmentalized contexts.'
          },
          {
            id: 'cd_reading_p9_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Ellen Bialystok and Kenneth Paap co-authored the Edinburgh medical patient registry in 2018.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No co-authored Edinburgh registry between Bialystok and Paap is mentioned in the passage.'
          },
          {
            id: 'cd_reading_p9_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Speaking two languages prevents physical amyloid plaques from forming in the aging brain.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D explicitly states bilingualism does not block physical amyloid plaque buildup; it helps brains compensate longer.'
          },
          {
            id: 'cd_reading_p9_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Early researchers tested non-verbal conflict inhibition using tasks such as Stroop and ______ experiments.',
            correctAnswer: 'FLANKER',
            explanation: 'Paragraph A names the Stroop and flanker tests.'
          },
          {
            id: 'cd_reading_p9_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Meta-analyses noted that controlling for ______ status and migration background often erased reaction-time differences.',
            correctAnswer: 'SOCIOECONOMIC',
            explanation: 'Paragraph B states controlling for socioeconomic status, immigration history, and sample size erased apparent gains.'
          },
          {
            id: 'cd_reading_p9_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Unpublished negative findings sitting in lab drawers contributed to scholarly ______.',
            correctAnswer: 'PUBLICATION BIAS',
            explanation: 'Paragraph B terms this pattern serious publication bias.'
          },
          {
            id: 'cd_reading_p9_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Lifelong bilinguals resisted clinical Alzheimer\'s symptoms roughly four to ______ years longer despite matching brain damage.',
            correctAnswer: 'FIVE',
            explanation: 'Paragraph D specifies roughly four to five years later.'
          },
          {
            id: 'cd_reading_p9_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'According to Judith Kroll in Paragraph C, why is a simple yes/no classification of bilingualism misleading?',
            options: [
              'A. Only medical brain surgeons can accurately measure vocabulary size',
              'B. Monolingual adults routinely score higher on English Stroop tests',
              'C. Mandarin speakers never participate in reaction-time testing',
              'D. Conversational habits like free code-switching versus strict separation impose very different demands on brain control circuits'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph C contrasts low-inhibition code-switching communities against high-suppression compartmentalized contexts.'
          },
          {
            id: 'cd_reading_p9_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What did independent clinical registries in Toronto, Hyderabad, and Edinburgh demonstrate?',
            options: [
              'A. Bilingualism delays visible Alzheimer\'s decline by allowing the brain to compensate around existing pathology',
              'B. Bilingual seniors never experience dementia symptoms at any age',
              'C. Bilingual brains shrink noticeably slower after retirement',
              'D. Hyderabad residents showed higher Stroop scores than Toronto university students'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains bilinguals exhibit symptoms 4–5 years later despite equivalent amyloid pathology through neural compensation.'
          },
          {
            id: 'cd_reading_p9_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Which best summarizes the author\'s concluding stance in Paragraph E?',
            options: [
              'A. Parenting books should promote bilingualism strictly to boost toddler math test speeds',
              'B. Bilingualism offers zero measurable neurological impact across the human lifespan',
              'C. While youthful reaction-speed gains remain uncertain, decades of bilingual control build vital late-life cognitive resilience',
              'D. Universities should discontinue teaching foreign languages after age twenty'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E balances modest/inconsistent young reaction-speed findings against strong long-term neural pathway resilience.'
          },
          {
            id: 'cd_reading_p9_q39',
            number: 39,
            type: 'true_false_not_given',
            questionText: 'Parenting publications quickly adopted the early 2000s idea of a universal bilingual executive advantage.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states the bilingual executive advantage was quickly popularized across parenting manuals.'
          },
          {
            id: 'cd_reading_p9_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Null studies on bilingual executive control always outnumbered positive findings by ten to one.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B states null studies went unpublished without giving a ten-to-one ratio.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 10 (MODERATE): cd_reading_p10 (Solid-State Lithium Batteries & Grid Storage)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p10',
    testNumber: 10,
    testType: 'practice',
    title: 'CD-IELTS Practice 10: Solid-State Lithium Batteries & Grid Storage',
    description:
      'Intermediate (Moderate) CD-IELTS Academic Reading test featuring 40 questions across three passages on ceramic electrolytes, lithium dendrite suppression, and stationary grid storage trade-offs.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Replacing Flammable Liquids with Solid Ceramic Electrolytes',
        subtitle: 'Why battery engineers are rethinking conventional lithium-ion architecture',
        text: `Paragraph A: Modern laptops and electric vehicles depend almost universally on conventional lithium-ion cells containing a porous polymer separator flooded with volatile liquid organic carbonates. When charging, lithium ions shuttle through that liquid electrolyte from a layered metal-oxide cathode into a bulky graphite anode. Although highly reliable under gentle use, liquid electrolytes possess low flashpoints; punctured separators or manufacturing defects can trigger runaway overheating, venting toxic smoke and fierce chemical fires.

Paragraph B: Solid-state batteries promise two transformative improvements simultaneously: eliminating flammable organic solvents while unlocking far greater energy density. Instead of pumping ions through liquid corridors, solid-state prototypes sandwich an ultra-thin sheet of non-combustible ceramic, glass, or solid polymer directly between electrodes. Removing volatile liquid immediately curbs thermal runaway risks, permitting engineers to streamline heavy cooling frames inside battery packs.

Paragraph C: Even larger energy gains emerge at the negative electrode. Conventional cells mix lithium into heavy graphite cages requiring six carbon atoms to hold just one lithium ion—wasting substantial battery weight and volume. By employing a rigid solid separator strong enough to withstand metallic anodes, engineers can replace bulky graphite altogether with pure lithium-metal foil, packing nearly twice as much energy into an equivalent chassis space.

Paragraph D: Yet trading liquid fluidity for crystal rigidity introduces subtle electrochemical bottlenecks. Liquid electrolytes wet microscopic crevices across porous electrodes effortlessly, ensuring broad contact zones for migrating ions. Solid ceramics, by contrast, meet rigid electrodes only across scattered microscopic points—creating high interfacial resistance unless stacks are clamped under heavy mechanical pressure. Worse still, electrodes expand and contract noticeably during every charge-discharge cycle, gradually opening microscopic voids that sever ion pathways.

Paragraph E: Promising early prototypes resolve interfacial cracking through two distinct chemistry strategies. Oxide ceramics such as lithium lanthanum zirconate (LLZO) offer extraordinary thermal stability yet demand energy-intensive kiln firing above one thousand degrees Celsius. Sulfide-based glass electrolytes, conversely, remain relatively malleable enough to press together smoothly at room temperature—though they react sharply with humid factory air to generate hazardous hydrogen sulfide gas, requiring ultra-dry assembly cleanrooms.`,
        questions: [
          {
            id: 'cd_reading_p10_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Conventional lithium-ion batteries rely on flammable organic solvents to transport ions between electrodes.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A describes liquid organic carbonates with low flashpoints capable of fierce chemical fires.'
          },
          {
            id: 'cd_reading_p10_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Graphite anodes store lithium ions with higher weight efficiency than pure lithium-metal foil.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states graphite requires six carbon atoms per lithium ion, wasting weight compared with pure lithium-metal foil.'
          },
          {
            id: 'cd_reading_p10_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Rigid solid electrolytes naturally flow into microscopic electrode pores just as smoothly as liquid solvents.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D explains solids touch electrodes only at scattered points, causing high interfacial resistance and cycling voids.'
          },
          {
            id: 'cd_reading_p10_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Sulfide electrolytes can be compacted at room temperature without thousand-degree furnace firing.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph E notes sulfide electrolytes remain malleable enough to press smoothly at room temperature.'
          },
          {
            id: 'cd_reading_p10_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Global lithium reserves will run out completely before solid-state manufacturing lines open.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'The passage compares electrolyte materials and interfacial behavior without discussing global lithium reserve depletion.'
          },
          {
            id: 'cd_reading_p10_q6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'Why does replacing graphite with pure lithium-metal foil roughly double cell energy storage?',
            options: [
              'A. Graphite anodes block hydrogen sulfide vapors inside cleanrooms',
              'B. Metallic foil burns liquid carbonates cleanly during fast highway charging',
              'C. Pure lithium metal removes the six-carbon-atom storage overhead required by graphite',
              'D. Solid ceramic sheets generate fresh electricity independently from sunlight'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes graphite needs six carbon atoms per lithium ion, whereas lithium-metal foil eliminates that bulky scaffold.'
          },
          {
            id: 'cd_reading_p10_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What mechanical problem develops at the electrode-electrolyte boundary after repeated charge cycles?',
            options: [
              'A. Electrode swelling and shrinking creates tiny gaps that interrupt ion flow',
              'B. Liquid carbonates boil over into neighboring battery compartments',
              'C. Polymer separators turn permanently magnetic above freezing temperatures',
              'D. Copper wiring dissolves into oxide ceramics during initial kiln firing'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states volume changes during cycling gradually open microscopic voids that sever ion pathways.'
          },
          {
            id: 'cd_reading_p10_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What major factory hazard complicates manufacturing with malleable sulfide electrolytes?',
            options: [
              'A. Ultra-high kiln temperatures melt surrounding aluminum frames',
              'B. Ceramic powders ignite immediately upon touching clean dry air',
              'C. Sulfide glass shatters spontaneously below twenty degrees Celsius',
              'D. Contact with humid room air emits dangerous hydrogen sulfide gas'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E warns sulfide electrolytes react with humid air to generate hazardous hydrogen sulfide gas.'
          },
          {
            id: 'cd_reading_p10_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What drawback limits manufacturing throughput for oxide ceramic separators like LLZO?',
            options: [
              'A. They react violently whenever exposed to clean nitrogen air',
              'B. They require costly furnace firing exceeding one thousand degrees Celsius',
              'C. They evaporate rapidly inside standard vehicle battery trays',
              'D. They hold ten times less energy than traditional graphite stacks'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E notes LLZO oxide ceramics demand energy-intensive kiln firing above 1,000°C.'
          },
          {
            id: 'cd_reading_p10_q10',
            number: 10,
            type: 'short_answer',
            questionText: 'How many carbon atoms does graphite need to trap a single lithium ion?',
            correctAnswer: 'SIX',
            explanation: 'Paragraph C specifies six carbon atoms per lithium ion.'
          },
          {
            id: 'cd_reading_p10_q11',
            number: 11,
            type: 'short_answer',
            questionText: 'What condition must be applied to rigid solid stacks to reduce interfacial resistance during operation?',
            correctAnswer: 'HEAVY MECHANICAL PRESSURE',
            explanation: 'Paragraph D notes stacks must be clamped under heavy mechanical pressure.'
          },
          {
            id: 'cd_reading_p10_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'What specialized environment is needed to assemble moisture-sensitive sulfide electrolytes safely?',
            correctAnswer: 'ULTRA-DRY ASSEMBLY CLEANROOMS',
            explanation: 'Paragraph E requires ultra-dry assembly cleanrooms.'
          },
          {
            id: 'cd_reading_p10_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which hazardous gas forms when sulfide electrolytes react with ambient factory moisture?',
            correctAnswer: 'HYDROGEN SULFIDE',
            explanation: 'Paragraph E names hazardous hydrogen sulfide gas.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Conquering Metallic Dendrites Inside Solid Separators',
        subtitle: 'Overturning early optimism that dense ceramics would automatically stop internal short circuits',
        text: `Paragraph A: When solid-state cells gained commercial momentum in the late 2010s, many early investors assumed hard ceramic membranes would effortlessly block lithium dendrites—needle-like metallic filaments that grow across battery separators during rapid recharging and trigger catastrophic internal short circuits. Classical elasticity models formulated by materials theorist Charles Monroe predicted that any solid electrolyte more than twice as stiff as soft lithium metal would physically crush emerging metal spikes at the interface.

Paragraph B: Surprisingly, real-world testing shattered that tidy mechanical assumption. Using in-situ X-ray tomography inside functioning cells, researchers watched narrow silvery dendrites spear straight through polished ceramic pellets rated fifty times stiffer than pure lithium—often at much lower charging currents than liquid electrolytes tolerate cleanly. Far from acting as impenetrable shields, rigid ceramic grains fractured under microscopic electrochemical stresses like brittle glass under a tiny wedge.

Paragraph C: Detailed electron microscopy revealed why stiff ceramics still fail. Ceramic separators consist of millions of microscopic sintered crystals pressed together along subtle interfaces called grain boundaries. Because tiny surface scratches and grain-boundary pores concentrate electric current intensely during fast charging, metallic lithium preferentially plates inside microscopic surface pits. As incoming lithium forces itself into a tiny wedge crack, immense localized tip pressure splits crystalline grains apart ahead of the growing metal needle.

Paragraph D: Rather than relying purely on rigid brute strength, modern electrolyte design attacks dendrite formation chemically and mechanically at the nanoscale. Inserting an ultra-thin silver-carbon interlayer between lithium anodes and solid separators guides metal atoms to deposit evenly across broad metallic planes instead of piling into sharp spikes. Elsewhere, compressive outer cell casings maintain gentle constant pressure so metal voids collapse smoothly during discharge rather than starving surface contacts.

Paragraph E: Controlling current density also proves essential. Even advanced interlayers crack when drivers demand five-minute ultra-fast charging at freezing temperatures, where sluggish solid-state ion mobility lags behind arriving electrons. Consequently, commercial solid-state vehicle packs integrate active thermal pre-heating alongside smart battery management software, restricting peak current until separators warm gently to optimal ionic conductivity.`,
        questions: [
          {
            id: 'cd_reading_p10_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why researchers initially trusted rigid ceramics to block metal needles',
              'ii. Real-time X-ray scans disprove early stiffness predictions',
              'iii. Thermal pre-heating and software limits keep winter charging safe',
              'iv. How current spikes at grain flaws wedge brittle crystals apart',
              'v. Thin buffer layers and mild external pressure promote flat plating',
              'vi. Abandoning solid ceramics entirely in favor of sodium seawater cells'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A presents early theoretical predictions (Monroe) assuming stiff ceramics would mechanically crush dendrites.'
          },
          {
            id: 'cd_reading_p10_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why researchers initially trusted rigid ceramics to block metal needles',
              'ii. Real-time X-ray scans disprove early stiffness predictions',
              'iii. Thermal pre-heating and software limits keep winter charging safe',
              'iv. How current spikes at grain flaws wedge brittle crystals apart',
              'v. Thin buffer layers and mild external pressure promote flat plating',
              'vi. Abandoning solid ceramics entirely in favor of sodium seawater cells'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph B reports in-situ X-ray tomography showing dendrites piercing ceramics 50 times stiffer than lithium.'
          },
          {
            id: 'cd_reading_p10_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why researchers initially trusted rigid ceramics to block metal needles',
              'ii. Real-time X-ray scans disprove early stiffness predictions',
              'iii. Thermal pre-heating and software limits keep winter charging safe',
              'iv. How current spikes at grain flaws wedge brittle crystals apart',
              'v. Thin buffer layers and mild external pressure promote flat plating',
              'vi. Abandoning solid ceramics entirely in favor of sodium seawater cells'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C details how grain-boundary pores concentrate current and wedge crystalline grains apart.'
          },
          {
            id: 'cd_reading_p10_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why researchers initially trusted rigid ceramics to block metal needles',
              'ii. Real-time X-ray scans disprove early stiffness predictions',
              'iii. Thermal pre-heating and software limits keep winter charging safe',
              'iv. How current spikes at grain flaws wedge brittle crystals apart',
              'v. Thin buffer layers and mild external pressure promote flat plating',
              'vi. Abandoning solid ceramics entirely in favor of sodium seawater cells'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph D introduces silver-carbon interlayers and compressive casings to flatten metal deposition.'
          },
          {
            id: 'cd_reading_p10_q18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Needle-like metallic growths causing dangerous internal shorts during recharging are called ______.',
            correctAnswer: 'DENDRITES',
            explanation: 'Paragraph A defines lithium dendrites as needle-like metallic filaments.'
          },
          {
            id: 'cd_reading_p10_q19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Microscopic gaps between sintered crystals, known as ______, focus electric current along tiny surface pits.',
            correctAnswer: 'GRAIN BOUNDARIES',
            explanation: 'Paragraph C identifies subtle interfaces called grain boundaries.'
          },
          {
            id: 'cd_reading_p10_q20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Placing a thin ______ buffer between metal foil and solid separators helps spread plating smoothly.',
            correctAnswer: 'SILVER-CARBON',
            explanation: 'Paragraph D specifies an ultra-thin silver-carbon interlayer.'
          },
          {
            id: 'cd_reading_p10_q21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Cold-weather prototypes employ active ______ before permitting rapid charging currents.',
            correctAnswer: 'THERMAL PRE-HEATING',
            explanation: 'Paragraph E describes integrating active thermal pre-heating with battery management software.'
          },
          {
            id: 'cd_reading_p10_q22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Sub-zero conditions degrade separator performance by slowing solid-state ______.',
            correctAnswer: 'ION MOBILITY',
            explanation: 'Paragraph E states freezing temperatures cause sluggish solid-state ion mobility.'
          },
          {
            id: 'cd_reading_p10_q23',
            number: 23,
            type: 'matching_information',
            questionText: 'Which paragraph mentions an imaging method watching inside operating cells in real time?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'B',
            explanation: 'Paragraph B cites in-situ X-ray tomography inside functioning cells.'
          },
          {
            id: 'cd_reading_p10_q24',
            number: 24,
            type: 'matching_information',
            questionText: 'Which paragraph cites Charles Monroe\'s mathematical elasticity prediction?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'A',
            explanation: 'Paragraph A describes Charles Monroe\'s classical elasticity model.'
          },
          {
            id: 'cd_reading_p10_q25',
            number: 25,
            type: 'matching_information',
            questionText: 'Which paragraph explains why external pack pressure prevents air voids during discharge?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'D',
            explanation: 'Paragraph D states compressive outer cell casings collapse voids smoothly during discharge.'
          },
          {
            id: 'cd_reading_p10_q26',
            number: 26,
            type: 'matching_information',
            questionText: 'Which paragraph describes microscopic pressure wedging solid crystal grains apart?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E'],
            correctAnswer: 'C',
            explanation: 'Paragraph C explains localized tip pressure splitting crystalline grains ahead of growing needles.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Why Stationary Electrical Grids Rarely Need Expensive Solid-State Cells',
        subtitle: 'Matching battery chemistry economics to weight-sensitive vehicles versus stationary power stations',
        text: `Paragraph A: Whenever headlines celebrate next-generation solid-state batteries, commentators frequently predict they will power every sector from smartphones to utility power grids. Energy economists, however, emphasize sharp physical distinctions between mobile transportation and stationary electricity storage. In an electric aircraft or family sedan, every surplus kilogram demands stronger motors and wastes kinetic energy during acceleration; ultra-dense, compact solid-state packs therefore command substantial price premiums.

Paragraph B: Inside a utility-scale battery farm parked beside a desert solar array, by contrast, footprint and weight carry comparatively minor cost penalties. Concrete warehouse pads easily hold heavy, bulky racks provided each kilowatt-hour of stored energy costs as little as possible over twenty years of daily cycling. Consequently, lithium iron phosphate (LFP)—an inexpensive, cobalt-free liquid-electrolyte chemistry offering lower volumetric density than solid-state lithium metal—currently dominates stationary grid installations worldwide.

Paragraph C: Even cheaper alternatives are emerging for multi-day renewable balancing. Sodium-ion batteries substitute abundant industrial soda ash for geographically concentrated lithium ore, tolerating deep zero-volt transport safely without copper foil degradation. For even longer durations—spanning cloudy autumn weeks when wind turbines stall—iron-air batteries reversibly oxidize common iron pellets with ambient oxygen, storing electricity for ten times less capital cost per kilowatt-hour than lithium-ion packs despite sluggish charge-discharge efficiency.

Paragraph D: Solid-state technology also confronts stubborn manufacturing economics before displacing liquid lithium-ion in mass-market passenger cars. Existing gigafactories roll coated liquid-cell sheets rapidly onto vast continuous spools using mature slurry mixers perfected over three decades. Solid ceramic sheets remain fragile to spool rapidly at high speeds, raising factory scrap rates and driving initial unit costs well above conventional LFP packs.

Paragraph E: Rather than a monolithic winner-take-all battery revolution, energy analysts project distinct specialized niches. Solid-state lithium-metal cells will likely capture premium long-range aviation, performance vehicles, and space hardware where extreme compactness and thermal safety outweigh factory expense—while robust LFP, sodium-ion, and iron-air systems anchor affordable stationary power grids.`,
        questions: [
          {
            id: 'cd_reading_p10_q27',
            number: 27,
            type: 'yes_no_not_given',
            questionText: 'Weight reduction matters far more for passenger vehicles and electric aircraft than for stationary solar storage farms.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A and B contrast weight-critical vehicles/aircraft against spacious stationary warehouse pads.'
          },
          {
            id: 'cd_reading_p10_q28',
            number: 28,
            type: 'yes_no_not_given',
            questionText: 'Lithium iron phosphate batteries contain expensive cobalt ore that makes them unsuitable for power grids.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B describes LFP as an inexpensive, cobalt-free chemistry dominating stationary grid installations.'
          },
          {
            id: 'cd_reading_p10_q29',
            number: 29,
            type: 'yes_no_not_given',
            questionText: 'Sodium-ion cells can be shipped safely completely discharged without damaging their metal foils.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states sodium-ion batteries tolerate deep zero-volt transport safely without copper foil degradation.'
          },
          {
            id: 'cd_reading_p10_q30',
            number: 30,
            type: 'yes_no_not_given',
            questionText: 'Iron-air power stations outperform lithium-ion batteries in round-trip charge-discharge speed and efficiency.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C notes iron-air stores electricity cheaply despite sluggish charge-discharge efficiency.'
          },
          {
            id: 'cd_reading_p10_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Germany mandated in 2024 that all wind farms replace LFP batteries with iron-air pellets within two years.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No German regulatory mandate or 2024 deadline appears in Passage 3.'
          },
          {
            id: 'cd_reading_p10_q32',
            number: 32,
            type: 'summary_completion',
            questionText: 'Heavy stationary grids prioritize minimal cost per ______ rather than lightweight compact packaging.',
            correctAnswer: 'KILOWATT-HOUR',
            explanation: 'Paragraph B notes utility farms prioritize low cost per kilowatt-hour over twenty years.'
          },
          {
            id: 'cd_reading_p10_q33',
            number: 33,
            type: 'summary_completion',
            questionText: 'Sodium-ion producers replace geographically scarce lithium minerals with plentiful industrial ______.',
            correctAnswer: 'SODA ASH',
            explanation: 'Paragraph C specifies abundant industrial soda ash.'
          },
          {
            id: 'cd_reading_p10_q34',
            number: 34,
            type: 'summary_completion',
            questionText: 'Multi-day grid backups utilize ______ units that oxidize and regenerate cheap metallic pellets using surrounding air.',
            correctAnswer: 'IRON-AIR',
            explanation: 'Paragraph C describes iron-air batteries reversibly oxidizing common iron pellets with ambient oxygen.'
          },
          {
            id: 'cd_reading_p10_q35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Fragile ceramic sheets tear easily on high-speed continuous factory rollers, inflating ______ rates.',
            correctAnswer: 'SCRAP',
            explanation: 'Paragraph D states fragility on continuous spools raises factory scrap rates.'
          },
          {
            id: 'cd_reading_p10_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do LFP batteries remain the dominant technology for utility-scale electricity grids?',
            options: [
              'A. They deliver higher weight-to-energy ratios than aerospace solid-state cells',
              'B. They rely on scarce cobalt mines that stabilize grid electricity voltage',
              'C. They store seasonal wind power for ten times less cost than iron-air pellets',
              'D. They combine low long-term capital cost and cobalt-free durability where physical size is unimportant'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph B shows stationary grids tolerate bulk while favoring LFP\'s low 20-year cost and cobalt-free affordability.'
          },
          {
            id: 'cd_reading_p10_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What limits iron-air technology to long multi-day backup roles rather than rapid vehicle propulsion?',
            options: [
              'A. Its charge-discharge efficiency is sluggish despite very low capital costs',
              'B. Iron-air pellets explode violently when exposed to normal desert humidity',
              'C. It requires pure silver interlayers to prevent dendritic shorting',
              'D. It only operates above one thousand degrees Celsius inside sealed kilns'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph C states iron-air systems have sluggish charge-discharge efficiency despite very low cost per kWh.'
          },
          {
            id: 'cd_reading_p10_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why have existing gigafactories struggled to match liquid-cell manufacturing speeds using solid ceramics?',
            options: [
              'A. Continuous slurry mixers have never been tested outside academic labs',
              'B. Liquid electrolytes cost twice as much per ton as purified LLZO oxide',
              'C. Brittle ceramic sheets cannot easily withstand rapid continuous spooling without higher scrap loss',
              'D. Copper collectors rust immediately when pressed against solid polymer films'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D contrasts mature continuous spooling of liquid-cell sheets against fragile ceramic sheets causing elevated scrap rates.'
          },
          {
            id: 'cd_reading_p10_q39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'Where do energy analysts expect solid-state lithium-metal packs to thrive commercially?',
            options: [
              'A. Exclusively in underground municipal water pumping stations',
              'B. Weight- and space-sensitive applications such as electric aircraft, long-range vehicles, and aerospace',
              'C. Replacing every concrete warehouse LFP rack by 2028',
              'D. Temporary multi-week autumn storage beside coastal wind farms'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E concludes solid-state cells fit premium long-range aviation, performance vehicles, and space hardware.'
          },
          {
            id: 'cd_reading_p10_q40',
            number: 40,
            type: 'true_false_not_given',
            questionText: 'Continuous slurry mixing techniques for liquid lithium-ion cells have been refined over roughly thirty years.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states existing gigafactories use mature slurry mixers perfected over three decades.'
          }
        ]
      }
    ]
  })
];
