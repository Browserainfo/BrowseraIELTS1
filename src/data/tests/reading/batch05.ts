/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildAcademicReadingTest } from './helpers';

export const READING_BATCH_05: TestItem[] = [
  // =========================================================================
  // TEST 21 (VERY DIFFICULT): cd_reading_p21 (Peatland Carbon Sequestration & Rewetting Ecology)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p21',
    testNumber: 21,
    testType: 'practice',
    title: 'CD-IELTS Practice 21: Peatland Carbon Sequestration & Rewetting Ecology',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on Sphagnum bog biogeochemistry, drainage subsidence, and hydrological rewetting trade-offs.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Acidic Anoxia and the Long-Term Carbon Economy of Ombrotrophic Bogs',
        subtitle: 'Why waterlogged Sphagnum moss mires lock away disproportionately vast terrestrial carbon despite sluggish growth',
        text: `Paragraph A: Occupying barely three percent of Earth's continental surface—roughly equivalent in footprint to the Indian subcontinent—peatlands nonetheless store more than five hundred billion metric tons of organic carbon, eclipsing the combined carbon reservoir of every living tropical, temperate, and boreal forest trunk on the planet. Explaining how soggy, nutrient-impoverished northern mires and tropical swamp forests out-sequester towering rainforest trees forces ecologists to shift focus away from rapid annual photosynthetic capture toward extreme suppression of microbial decomposition.

Paragraph B: Inside thriving upland forests, autumn leaf litter decomposes swiftly under aerobic fungal and bacterial oxidation, returning roughly ninety-five percent of captured carbon dioxide back to the atmosphere within a few decades. In raised ombrotrophic peat bogs fed exclusively by acidic rainfall rather than mineral groundwater, saturated soil pore spaces exclude atmospheric oxygen within centimeters of the living moss mat. Once water saturation forces decomposers to rely on far less efficient anaerobic respiration pathways, microbial enzyme kinetics stall dramatically, allowing partly preserved rootlets, sedge sheaths, and woody stems to accumulate year after year at barely half a millimeter annually—mounting steadily into ten-meter peat domes over millennia.

Paragraph C: Central to this biogeochemical preservation machinery are rootless mosses of the genus Sphagnum, often termed ecosystem engineers of boreal mires. Specialized hyaline dead water-holding cells woven throughout Sphagnum leaves routinely retain twenty times their dry weight in rainwater, elevating local water tables well above surrounding mineral sands. Simultaneously, Sphagnum cell walls actively scavenge scarce mineral cations like calcium and magnesium while releasing hydrogen ions, acidifying surrounding bog water below pH 4.0 and leaching antimicrobial phenolic compounds—collectively creating a pickled, oxygen-starved bath hostile to wood-rotting bacteria.

Paragraph D: Paradoxically, intact peatlands sustain a delicate atmospheric radiative balancing act rather than purely cooling global climate instantaneously. Because oxygen-starved deep catotelm layers support vigorous methanogenic archaea, pristine flooded bogs continuously release modest streams of methane—a greenhouse molecule roughly twenty-eight times stronger at trapping infrared heat over a century than carbon dioxide. Paleoclimatologist Steve Frolking and colleagues modeled this twin-gas budget across ten millennia, demonstrating that although newly formed mires exert net warming pressure during their initial centuries, steady unbroken carbon burial eventually outweighs decaying atmospheric methane after roughly one to two millennia—turning undisturbed peat domes into powerful net planetary refrigerators over geological timescales.

Paragraph E: Strikingly different ecological mechanics govern tropical peat swamp forests across Indonesia's Sumatra, Borneo, and Peru's Pastaza-Marañón foreland basin. Unlike cold treeless sub-Arctic Sphagnum domes, lowland tropical peatlands grow beneath towering dipterocarp rainforest canopies nourished by heavy equatorial rainfall. Here, high ambient soil temperatures nearing twenty-eight degrees Celsius accelerate chemical decay rates; peat builds up solely because dense tangled hardwood root mats resist breakdown through abundant structural lignin polymers rather than Sphagnum phenolics.

Paragraph F: Yet tropical and boreal peatlands share acute hydrological fragility. Because more than ninety percent of wet peat mass consists simply of suspended water rather than solid plant fibers, intact bogs behave biomechanically closer to gelatinous sponges than firm mineral clay—meaning modest shifts in regional drought seasonality or lateral ditching immediately threaten tens of thousands of years of accumulated organic deposits.`,
        questions: [
          {
            id: 'cd_reading_p21_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Global peatlands hold less total carbon than all standing tropical, temperate, and boreal forest trees combined.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states peatlands store over 500 billion metric tons, eclipsing the combined carbon reservoir of every living forest trunk on Earth.'
          },
          {
            id: 'cd_reading_p21_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Raised ombrotrophic bogs owe their vast carbon stocks primarily to faster annual plant growth than upland forests.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraphs A–B explain accumulation happens at barely half a millimeter yearly; dominance stems from suppressed microbial decomposition, not faster growth.'
          },
          {
            id: 'cd_reading_p21_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Sphagnum mosses intensify bog acidity chemically by exchanging captured mineral ions for released hydrogen ions.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C notes Sphagnum cell walls scavenge calcium and magnesium cations while releasing hydrogen ions, pushing pH below 4.0.'
          },
          {
            id: 'cd_reading_p21_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Newly established intact peatlands immediately cool global temperatures from their very first century onward.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D explains Frolking\'s modeling shows newly formed mires exert net warming pressure during initial centuries due to methane emissions before carbon burial overtakes them after 1,000–2,000 years.'
          },
          {
            id: 'cd_reading_p21_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Tropical peat formation beneath Indonesian dipterocarp forests relies mainly on high lignin resistance in woody root networks rather than moss acids.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph E contrasts boreal Sphagnum phenolics against tropical peat building up because hardwood root mats resist breakdown through abundant structural lignin polymers.'
          },
          {
            id: 'cd_reading_p21_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Peat domes across Peru\'s Pastaza-Marañón basin average deeper vertical peat columns than all Siberian Sphagnum bogs.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions Peru\'s Pastaza-Marañón foreland basin alongside Sumatra and Borneo without comparing maximum peat depth against Siberia.'
          },
          {
            id: 'cd_reading_p21_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why do undisturbed peatlands transition from net climate warmers to net coolers only after one to two millennia in Paragraph D?',
            options: [
              'A. Ancient methanogenic archaea permanently die out once peat columns exceed two meters',
              'B. Rising tropical temperatures shut down hyaline water-holding cells across boreal zones',
              'C. Upland leaf litter blows onto bog margins and accelerates aerobic oxidation',
              'D. Cumulative permanent CO2 burial progressively surpasses the warming impact of short-lived steady methane emissions'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D explains Frolking\'s twin-gas budget: methane breaks down over time while steady unbroken carbon burial accumulates across millennia, eventually outweighing methane warming.'
          },
          {
            id: 'cd_reading_p21_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Which combination of biochemical traits makes boreal Sphagnum mats hostile to decaying bacteria in Paragraph C?',
            options: [
              'A. High groundwater mineral alkalinity and fast lateral drainage',
              'B. Extreme water retention, sharp proton acidification below pH 4, and antimicrobial phenolic exudates',
              'C. Warm twenty-eight-degree subsurface mud and abundant dipterocarp lignin',
              'D. Deep woody root channels injecting oxygen continuously into catotelm layers'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C cites hyaline water retention excluding oxygen, hydrogen-ion acidification below pH 4.0, and antimicrobial phenolic compounds.'
          },
          {
            id: 'cd_reading_p21_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why does the author compare intact wet peatlands to gelatinous sponges in Paragraph F?',
            options: [
              'A. To suggest draining surface ditches stiffens peat domes without destroying deep carbon',
              'B. To prove boreal bogs absorb salty marine storm surges along Indonesian coastlines',
              'C. To argue clay soils store greater volumes of ancient carbon per square meter',
              'D. To emphasize that dry solid organic fibers compose under ten percent of peat volume, making them fragile to drainage'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F states >90% of wet peat mass is suspended water rather than solid fibers, rendering bogs biomechanically vulnerable to drought or lateral ditching.'
          },
          {
            id: 'cd_reading_p21_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Ombrotrophic bogs stay nutrient-poor because they receive moisture solely from ______ rather than mineral-rich groundwater.',
            correctAnswer: 'ACIDIC RAINFALL',
            explanation: 'Paragraph B states raised ombrotrophic bogs are fed exclusively by acidic rainfall rather than mineral groundwater.'
          },
          {
            id: 'cd_reading_p21_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Sphagnum foliage holds up to twenty times its dry mass inside specialized ______ cells.',
            correctAnswer: 'HYALINE',
            explanation: 'Paragraph C describes specialized hyaline dead water-holding cells.'
          },
          {
            id: 'cd_reading_p21_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Roughly what proportion of fallen carbon litter decays back to the air rapidly inside ordinary upland forests?',
            correctAnswer: 'NINETY-FIVE PERCENT',
            explanation: 'Paragraph B specifies upland forests return roughly ninety-five percent of captured carbon dioxide within decades.'
          },
          {
            id: 'cd_reading_p21_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which specific deep-peat microbes drive persistent natural methane output in flooded bogs?',
            correctAnswer: 'METHANOGENIC ARCHAEA',
            explanation: 'Paragraph D names deep catotelm layers supporting vigorous methanogenic archaea.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Drainage Subsidence, Smoldering Peat Fires, and the Mechanics of Land Collapse',
        subtitle: 'Why converting wet mires into dairy pastures and timber plantations creates runaway positive feedbacks',
        text: `Paragraph A: For centuries, European agrarian reformers and tropical plantation syndicates alike viewed saturated peat swamps as unproductive wastelands awaiting civilizing drainage. Excavating grids of deep herringbone canals across Dutch coastal fens, British East Anglian marshes, Belarusian polessie basins, and Bornean deltaic plains lowered subterranean water tables deliberately by one to two meters—converting soggy mires into high-value dairy pastures, vegetable soils, pulpwood eucalyptus estates, and oil-palm concessions.

Paragraph B: Lowering water tables transforms biogeochemistry catastrophically within months. As air infiltrates freshly drained peat pores, oxygen-starved anoxic preservation terminates abruptly. Aerobic heterotrophic bacteria and saprophytic fungi multiply explosively, devouring carbon deposited safely across four thousand to eight thousand years in a biological combustion process termed oxidative peat wastage—venting colossal invisible plumes of carbon dioxide and nitrous oxide continuously into regional skies even when no visible flames burn.

Paragraph C: Simultaneously, removing buoyant pore water triggers relentless physical collapse known as "peat subsidence." Deprived of internal hydrostatic support, compressed peat fibers shrink mechanically downward before oxidative microbial consumption literally vaporizes soil volume into gas. Measured benchmarks across drained Dutch polder farmlands and Indonesian palm plantations document terrifying surface sinking rates of two to five centimeters every single year—sinking agricultural landscapes steadily below adjacent river dikes and high ocean storm-surge levels.

Paragraph D: Subsidence locks drained delta communities onto a self-defeating hydrological treadmill. Whenever sinking peat plains approach waterlogged ditch levels, agricultural tractors bog down unless canal managers pump water even deeper down into underlying sand. Yet every twenty-centimeter drop in drainage pump depth exposes fresh unoxidized deep peat layers to air—reigniting faster oxidation, sharper coastal flood hazard, and spiraling dike maintenance debts stretching across centuries until every gram of organic peat vanishes down to sterile subsoil.

Paragraph E: Compounding slow biological wastage, parched surface peat creates terrifying wildfire fuel unlike conventional timber canopy blazes. During El Niño droughts across Indonesia in 1997 and 2015, plantation clearing sparks ignited dried tropical peat columns—launching stubborn subterranean "smoldering fires." Burning slowly without towering flames through oxygen-poor fissures meters underground, smoldering peat fires evade water bombers completely until monsoon floods return, emitting dense carcinogenic haze across Southeast Asia and releasing daily greenhouse bursts rivaling entire industrialized European economies.

Paragraph F: Crucially, draining nutrient-rich minerotrophic fens also unleashes hidden aquatic eutrophication downstream. When aerobic breakdown liberates centuries of bound organic nitrogen and dissolved organic carbon, heavy autumn storms flush brown tea-colored humic runoff and toxic ammonium plumes into coastal estuaries, elevating municipal drinking-water treatment costs and starving downstream fisheries of dissolved oxygen.

Paragraph G: Economic accounting exercises increasingly expose the fiscal illusion behind drained peat farming. Once full societal externalities—carbon emissions, emergency wildfire respiratory hospitalizations, perpetual pumping electricity, and collapsing rural bridge foundations—enter regional ledgers, draining fragile peatlands routinely destroys far greater public wealth per hectare than crop revenues ever generate.`,
        questions: [
          {
            id: 'cd_reading_p21_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A outlines historical drainage across Europe and Borneo turning swamps into dairy, vegetable, eucalyptus, and palm land.'
          },
          {
            id: 'cd_reading_p21_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph B explains air entering drained pores unleashes oxidative peat wastage venting CO2 and nitrous oxide even without visible flames.'
          },
          {
            id: 'cd_reading_p21_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C defines peat subsidence from lost buoyancy and microbial gas consumption sinking ground 2–5 cm per year.'
          },
          {
            id: 'cd_reading_p21_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph D describes the hydrological treadmill where deeper pumping to keep fields dry exposes fresh peat to rapid oxidation.'
          },
          {
            id: 'cd_reading_p21_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph E details deep subterranean smoldering fires during 1997 and 2015 El Niño droughts resisting water bombers.'
          },
          {
            id: 'cd_reading_p21_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph F notes autumn storms flush dark humic runoff and toxic ammonium downstream, harming municipal water and fisheries.'
          },
          {
            id: 'cd_reading_p21_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Historic ditching campaigns convert wet swamps into drained farmland and plantations',
              'ii. Comparing true public losses against private crop revenues on drained mires',
              'iii. Flushed nitrogen and dark carbon runoff contaminate downstream water supplies',
              'iv. Why mechanical compaction and microbial vaporization sink farm fields below sea level',
              'v. Deep underground blazes defy aerial firefighting during dry climate spikes',
              'vi. Reintroducing oxygen turns slow microbial breakdown into rapid invisible emissions',
              'vii. How deeper pumping to rescue wet tractors permanently worsens soil collapse',
              'viii. Replacing tropical palm concessions with submerged freshwater fish farms'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph G concludes that factoring carbon, fire healthcare, pumping, and bridge collapse destroys more public wealth than crops earn.'
          },
          {
            id: 'cd_reading_p21_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Oxygen entering drained channels triggers biological combustion known as oxidative ______, releasing carbon and nitrogen gases.',
            correctAnswer: 'PEAT WASTAGE',
            explanation: 'Paragraph B terms this biological combustion "oxidative peat wastage."'
          },
          {
            id: 'cd_reading_p21_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Draining groundwater removes upward ______ so soil columns pack tighter and sink centimeters annually.',
            correctAnswer: 'HYDROSTATIC SUPPORT',
            explanation: 'Paragraph C notes fibers deprived of internal hydrostatic support shrink mechanically before oxidizing.'
          },
          {
            id: 'cd_reading_p21_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Dried plantation soils feed stubborn ______ capable of surviving aerial water drops until monsoon rains arrive.',
            correctAnswer: 'SMOLDERING FIRES',
            explanation: 'Paragraph E describes stubborn subterranean "smoldering fires."'
          },
          {
            id: 'cd_reading_p21_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Heavy rains carry liberated organic carbon and ______ into rivers, raising coastal water purification expenses.',
            correctAnswer: 'AMMONIUM PLUMES',
            explanation: 'Paragraph F reports storms flush humic runoff and toxic ammonium plumes into coastal estuaries.'
          },
          {
            id: 'cd_reading_p21_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why does lowering drainage pumps in sinking farmland fail as a permanent remedy in Paragraph D?',
            options: [
              'A. Deeper pumping draws oxygen into untouched deeper organic strata, accelerating fresh subsidence and flood vulnerability',
              'B. Subsoil sand grains collapse instantly when groundwater falls twenty centimeters',
              'C. Agricultural tractors corrode twice as fast near dry sand aquifers',
              'D. River dikes expand upward whenever regional rainfall drops below annual means'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D explains deeper pumping exposes unoxidized deep peat to air, restarting faster oxidation and hiking coastal flood/dike costs until peat disappears.'
          },
          {
            id: 'cd_reading_p21_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What distinguishes peat fires during 1997 and 2015 droughts from standard forest canopy wildfires?',
            options: [
              'A. They strengthen structural dipterocarp root mats against coastal storm erosion',
              'B. They extinguish themselves spontaneously whenever morning humidity reaches sixty percent',
              'C. They burn meters underground without tall flames, resisting aircraft water drops while releasing heavy haze',
              'D. They occur solely inside cold Belarusian and British marshland pastures'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E explains smoldering peat fires burn slowly without towering flames meters underground, evading water bombers until monsoons arrive.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Hydrological Rewetting, Methane Spikes, and Paludiculture Compromises',
        subtitle: 'Navigating chemical trade-offs and rural livelihoods when plugging old peat drainage ditches',
        text: `Paragraph A: Recognizing that drained peatlands covering barely half a percent of Earth's landmass nonetheless emit nearly five percent of all anthropogenic greenhouse pollution, climate mitigation plans increasingly mandate urgent peatland "rewetting." Simply blocking historic drainage ditches with compacted peat dams, wooden sheet-piling, or corrugated plastic weirs allows seasonal rainwater to rebound back toward the soil surface—immediately arresting aerobic oxidation and halting destructive ground subsidence.

Paragraph B: Field biogeochemists nonetheless emphasize that rewetted degraded mires rarely snap instantaneously back into pristine low-emission carbon sponges. Years of aerobic farming drastically reorganize peat chemistry: drained topsoil compacts into dense crumbly muck enriched in leftover phosphorus fertilizers and depleted in live Sphagnum mats. When water suddenly floods nutrient-heavy degraded fields, invasive soft-stemmed rushes and cattails rapidly colonize shallow pools, delivering fresh sugary root exudates straight down into oxygen-poor mud where methanogenic archaea flourish—frequently unleashing transient multi-year spikes of methane gas.

Paragraph C: Crucially, atmospheric radiative modeling clarifies why methane spikes rarely negate rewetting's overwhelming net climate urgency. Whereas methane oxidizes rapidly out of Earth's atmosphere within roughly twelve years, carbon dioxide vented endlessly from an unrehabilitated drained pasture accumulates cumulatively for centuries. Comparative lifecycle balances confirm that flooding a drained agricultural bog normally delivers large net radiative cooling within decades—especially when restoration crews carefully keep final water tables hovering within ten centimeters below ground rather than creating meter-deep open eutrophic ponds.

Paragraph D: Even trickier than chemical methane spikes is rural socioeconomic resistance across dense European and Southeast Asian farming belts. Ordering dairy farmers in northern Germany or smallholder oil-palm cooperatives in Sumatra simply to flood productive fields invites fierce political backlash unless alternative wet-land livelihoods generate steady farm income. To bridge that economic gap, wetland agronomists pioneer "paludiculture"—cultivating commercially valuable flood-tolerant crops directly atop rewetted mires without lowering water tables.

Paragraph E: Promising paludiculture pilots span diverse markets. In Mecklenburg-Western Pomerania and Dutch polders, flooded cattail (Typha) and common reed crops yield lightweight insulated wallboard panels and roof thatch; elsewhere, farmed Sphagnum moss replaces unsustainable wild-mined peat substrates in commercial greenhouse horticulture, while flooded Indonesian jelutung latex and illipe nut forests supply sustainable agroforestry revenues without exposing dry peat to fire sparks.

Paragraph F: Critics nevertheless warn paludiculture faces classic "chicken-and-egg" supply bottlenecks: farmers refuse planting experimental wet reed meadows without nearby processing factories guaranteeing bulk contracts, while builders hesitate retooling mills without assured steady acreage. Bridging those gaps demands reorienting agricultural subsidies—redirecting public farm support away from unsustainable drained dairy toward verifiable carbon-water stewardship and climate-resilient wet farming.`,
        questions: [
          {
            id: 'cd_reading_p21_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains why suddenly flooding former fertilizer-enriched pastures often causes temporary methane surges?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B traces methane spikes to leftover phosphorus fertilizers, colonizing rushes/cattails, and sugary root exudates feeding methanogenic archaea.'
          },
          {
            id: 'cd_reading_p21_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph compares atmospheric lifetimes of methane and CO2 to justify rewetting despite initial gas bursts?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C contrasts methane\'s ~12-year atmospheric decay against centuries-long CO2 accumulation, proving net cooling within decades.'
          },
          {
            id: 'cd_reading_p21_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph gives concrete examples of flood-tolerant crops supplying construction panels, horticulture, and Asian agroforestry?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E cites Typha/reed wallboard, farmed Sphagnum horticulture substrates, and Indonesian jelutung latex and illipe nuts.'
          },
          {
            id: 'cd_reading_p21_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph highlights synchronized market coordination obstacles stalling commercial wetland crop expansion?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'F',
            explanation: 'Paragraph F describes the chicken-and-egg deadlock between wary farmers lacking factory contracts and mills lacking steady supply.'
          },
          {
            id: 'cd_reading_p21_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Rewetted degraded farmland immediately reproduces the exact chemical balance of an undisturbed ancient peat bog.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states rewetted degraded mires rarely snap instantaneously back into pristine sponges due to compacted muck, fertilizers, and missing Sphagnum.'
          },
          {
            id: 'cd_reading_p21_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Keeping restored water levels just below the surface rather than flooding fields into deep open lagoons helps curb excessive post-rewetting methane output.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C advises keeping water tables hovering within ten centimeters below ground rather than creating meter-deep open eutrophic ponds.'
          },
          {
            id: 'cd_reading_p21_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Drained peatlands represent over fifteen percent of global continental land surface.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states drained peatlands cover barely half a percent of Earth\'s landmass yet emit nearly 5% of anthropogenic greenhouse pollution.'
          },
          {
            id: 'cd_reading_p21_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'European dairy farmers in Mecklenburg-Western Pomerania earn triple profits selling Typha wallboard compared with conventional cattle milk.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph E mentions Mecklenburg-Western Pomerania Typha wallboard pilots without stating farmers earn triple dairy profits.'
          },
          {
            id: 'cd_reading_p21_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Replacing wild-dug potting peat with deliberately farmed Sphagnum moss offers one commercial market for paludiculture.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E states farmed Sphagnum moss replaces unsustainable wild-mined peat substrates in commercial greenhouse horticulture.'
          },
          {
            id: 'cd_reading_p21_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do climate modelers still endorse peatland rewetting even when restored fields emit fresh bursts of methane?',
            options: [
              'A. Methane remains permanently harmless at sub-zero Arctic latitudes',
              'B. Short-lived methane decays within roughly twelve years, whereas unstopped drained CO2 builds up cumulatively for centuries',
              'C. Cattail roots absorb atmospheric carbon dioxide ten times faster than dipterocarp trunks',
              'D. Corrugated plastic dams lock escaping methane securely underneath topsoil clay'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph C contrasts methane\'s ~12-year breakdown against continuous multi-century CO2 emissions from drained pasture.'
          },
          {
            id: 'cd_reading_p21_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What economic dilemma stalls wider adoption of paludiculture across rural regions in Paragraph F?',
            options: [
              'A. Commercial greenhouses strictly refuse using farmed moss instead of sandy compost',
              'B. Wooden sheet-piling rots completely within six months inside flooded European marshes',
              'C. Growers and processors wait cautiously for each other before risking capital on untested wet-crop supply chains',
              'D. Jelutung latex trees cannot survive without deep one-meter drainage ditches'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph F describes the "chicken-and-egg" bottleneck where farmers await guaranteed factory contracts while builders hesitate without guaranteed acreage.'
          },
          {
            id: 'cd_reading_p21_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How does the author propose breaking rural opposition to peatland rewetting across Paragraphs D and F?',
            options: [
              'A. Redirecting farm subsidies toward flood-tolerant paludiculture livelihoods and carbon-water stewardship',
              'B. Seizing all dairy farms by emergency decree without compensation',
              'C. Pumping deep eutrophic ponds down into dry Sumatran sand layers',
              'D. Abandoning all commercial horticulture nurseries across Europe'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraphs D and F advocate paludiculture farm income alongside redirecting agricultural subsidies toward carbon-water stewardship.'
          },
          {
            id: 'cd_reading_p21_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Plugging ditches with peat blocks or plastic ______ raises groundwater back toward surface mosses.',
            correctAnswer: 'WEIRS',
            explanation: 'Paragraph A names compacted peat dams, wooden sheet-piling, or corrugated plastic weirs.'
          },
          {
            id: 'cd_reading_p21_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'In northern Germany, harvested cattails serve as raw material for lightweight insulated ______.',
            correctAnswer: 'WALLBOARD PANELS',
            explanation: 'Paragraph E specifies lightweight insulated wallboard panels and roof thatch.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 22 (VERY DIFFICULT): cd_reading_p22 (Soft Robotics in Deep Marine Biosphere Sampling)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p22',
    testNumber: 22,
    testType: 'practice',
    title: 'CD-IELTS Practice 22: Soft Robotics in Deep Marine Biosphere Sampling',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on delicate gelatinous organism capture, fluidic hydraulic actuation, and deep-sea biomimetic locomotion.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: The Sampling Blindness of Rigid Steel Submersibles',
        subtitle: 'Why conventional deep-sea industrial claws destroy fragile midwater fauna before science can study them',
        text: `Paragraph A: Beneath two hundred meters of sunlit surface epipelagic water lies the ocean's twilight mesopelagic zone and pitch-black bathypelagic abyss—by volume Earth's largest living habitat. Far from sparse deserts, midwater sonar curtains and uncrewed optical gliders reveal teeming clouds of gelatinous zooplankton: siphonophores stretching longer than blue whales, translucent comb jellies pulsing with iridescent cilia, delicate glass sponges, and gossamer sea butterflies. Yet marine biodiversity catalogs remain starkly biased toward sturdy, calcified crabs, bony fishes, and armored clams because traditional oceanography's mechanical collection tools brutally shred fragile gelatinous life.

Paragraph B: Conventional remotely operated vehicles (ROVs) inherited their rugged manipulator architecture almost unaltered from offshore petroleum pipe-fitting and submarine cable repair industries. Driven by three-thousand-pound-per-square-inch mineral-oil hydraulics, heavyweight titanium claws exert clamping forces measured in hundreds of kilograms—engineered cleanly to shear corroded steel shackles or hoist basalt lava blocks off hydrothermal chimneys. When pilot operators peering through lag-prone two-dimensional cockpit monitors attempt delicately plucking a jelly-bodied octopod or transparent medusa whose tissue contains ninety-five percent seawater, bare metallic pinchers routinely slice specimens into unrecognizable mucus ribbons.

Paragraph C: Even classic plankton tow nets dragged astern of oceanographic vessels inflict severe sampling attrition. Forced at two knots against knotted nylon mesh panels under immense hydrostatic drag, fragile siphonophore chains disintegrate completely before reaching deck buckets—leaving net-based biodiversity counts systematically blind to delicate soft-bodied predators. Alternative rigid acrylic suction slurp-guns mounted on ROVs fare marginally better for solitary swimmers, yet still impart violent shear turbulence at intake nozzles that rips trailing feeding tentacles cleanly away from main bells.

Paragraph D: Loss of intact morphology carries profound scientific consequences extending beyond museum taxidermy aesthetics. Many midwater cnidarians and ctenophores possess virtually identical microscopic genetics while deploying wildly divergent multi-part colonial swimming bells, bioluminescent lures, and stinging tentacle curtains essential to resolving evolutionary phylogenies. Once mangled inside rigid steel jars or crushed through nylon mesh, vital diagnostic anatomy dissolves irreversibly inside formalin preservative baths, concealing whole pelagic food-web links from ecological models.

Paragraph E: Compounding fragility, abyssal depth imposes extreme thermodynamic obstacles against borrowing terrestrial factory robotics. Soft silicone actuators popular in dry warehouse fruit-pickers frequently rely on compressed pneumatic air tubes—completely unusable four kilometers down where crushing ambient seawater pressures exceeding four hundred atmospheres instantly collapse air-filled bladders flat unless pressurized dangerously beyond safe hull ratings. Furthermore, icy two-degree-Celsius bottom water stiffens ordinary natural rubber elastomers right past brittle glass-transition thresholds.

Paragraph F: Solving this collection paradox therefore forced marine roboticists to rethink materials from the molecular backbone up—trading rigid titanium pinchers and compressed air bladders for low-pressure hydraulic fluids, ultra-compliant cold-resilient polymers, and gentle enclosing geometries matched biomechanically to soft ocean tissue.`,
        questions: [
          {
            id: 'cd_reading_p22_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Traditional marine biodiversity databases accurately reflect the true ecological balance between soft-bodied jellies and armored crabs.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states catalogs remain starkly biased toward sturdy calcified crabs, bony fishes, and armored clams because traditional tools shred gelatinous life.'
          },
          {
            id: 'cd_reading_p22_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Most deep-sea ROV manipulator arms descended directly from heavy offshore oil and subsea cable maintenance tooling.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states conventional ROVs inherited rugged manipulator architecture almost unaltered from offshore petroleum and submarine cable repair industries.'
          },
          {
            id: 'cd_reading_p22_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Acrylic ROV suction slurp-guns reliably capture fragile siphonophores with every trailing tentacle intact.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states slurp-guns impart violent shear turbulence at intake nozzles that rips trailing feeding tentacles away.'
          },
          {
            id: 'cd_reading_p22_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Destroying soft outer anatomy during capture makes it difficult for biologists to classify evolutionary relationships between closely related species.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D explains midwater cnidarians share similar genetics yet rely on intact swimming bells and tentacle anatomy to resolve evolutionary phylogenies.'
          },
          {
            id: 'cd_reading_p22_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Dry warehouse pneumatic air grippers operate effortlessly four kilometers underwater if coated in protective titanium paint.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E explains 400-atmosphere ambient pressures collapse pneumatic air bladders flat and 2°C water stiffens ordinary rubbers.'
          },
          {
            id: 'cd_reading_p22_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Formalin preservative baths dissolve hard calcified clam shells faster than soft comb jelly tissues.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D mentions mangled jelly anatomy dissolving in formalin without comparing dissolution rates against hard clam shells.'
          },
          {
            id: 'cd_reading_p22_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why do human ROV pilots routinely damage soft octopods and medusae when operating titanium pinchers in Paragraph B?',
            options: [
              'A. Cockpits lack electrical lights capable of illuminating translucent tissues',
              'B. Heavy high-pressure oil claws lack delicate tactile softness against lag-prone 2D camera depth perception',
              'C. Titanium corrodes rapidly when touching seawater containing ninety-five percent salt',
              'D. Mineral oil leaks out of hydraulic hoses whenever claws approach living prey'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph B cites 3,000-psi hydraulics generating hundreds of kilograms of clamping force paired with lag-prone 2D cockpit monitors.'
          },
          {
            id: 'cd_reading_p22_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What limits terrestrial warehouse fruit-picking soft grippers from working in abyssal trenches according to Paragraph E?',
            options: [
              'A. Deep-sea crabs snap silicone fingers cleanly during plankton trawls',
              'B. Terrestrial silicone dissolves immediately upon contact with cold salty ocean currents',
              'C. Four-kilometer fiber-optic tethers block low-pressure hydraulic seawater pumps',
              'D. Pneumatic air channels buckle under 400-atmosphere water pressure while icy waters stiffen ordinary elastomers'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E explains 400-atmosphere pressures crush air-filled bladders and 2°C water pushes ordinary rubbers past glass-transition stiffening.'
          },
          {
            id: 'cd_reading_p22_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What scientific penalty arises beyond visual loss when nylon trawl nets shred jellyfish colonies in Paragraph D?',
            options: [
              'A. Key diagnostic structures needed to distinguish food-web roles and evolutionary trees are lost permanently',
              'B. Damaged nets become impossible to haul back aboard oceanographic vessels',
              'C. Sea butterflies stop emitting bioluminescent signals across upper sunlit waters',
              'D. Basalt lava samples crumble inside formalin deck buckets'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D notes vital colonial morphology needed to resolve phylogenies and pelagic food-web links vanishes once shredded.'
          },
          {
            id: 'cd_reading_p22_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Dragging knotted ______ nets at two knots disintegrates fragile siphonophores under fierce water resistance.',
            correctAnswer: 'NYLON MESH',
            explanation: 'Paragraph C specifies knotted nylon mesh panels.'
          },
          {
            id: 'cd_reading_p22_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Cold deep-ocean water pushes standard natural rubbers past brittle ______ thresholds.',
            correctAnswer: 'GLASS-TRANSITION',
            explanation: 'Paragraph E states icy 2°C water stiffens ordinary elastomers right past brittle glass-transition thresholds.'
          },
          {
            id: 'cd_reading_p22_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'What approximate percentage of water makes up the body tissue of fragile medusae and jelly octopods?',
            correctAnswer: 'NINETY-FIVE PERCENT',
            explanation: 'Paragraph B states tissue contains ninety-five percent seawater.'
          },
          {
            id: 'cd_reading_p22_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What specific glowing trait do midwater cnidarians use alongside stinging tentacles to attract prey?',
            correctAnswer: 'BIOLUMINESCENT LURES',
            explanation: 'Paragraph D names bioluminescent lures alongside colonial swimming bells and tentacle curtains.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Hydraulic Origami Enclosures, Jamming Grippers, and Non-Destructive Capture',
        subtitle: 'Engineering gentle ambient-water actuators and polyhedral traps for midwater biology',
        text: `Paragraph A: Over the past decade, interdisciplinary marine biologists and soft-matter engineers—spearheaded notably by David Gruber, Robert Wood, and Brennan Phillips—demonstrated how replacing air compression with incompressible ambient seawater solves deep-sea actuation cleanly. Because liquid seawater scarcely compresses even at eleven-kilometer Mariana Trench pressures, pumping surrounding ocean water softly through compact, low-pressure centrifugal pumps into elastomeric bellows eliminates explosive collapse failure completely while operating effortlessly at zero differential pressure overhead.

Paragraph B: One pioneering early breakthrough adapted soft "boa-constrictor" curling fingers cast from cold-compliant platinum-cure silicone embedded with inextensible Kevlar fiber braids. Rather than pinching prey painfully at razor-thin metal tips, asymmetrical strain-limiting Kevlar strips force curving soft fingers to curl smoothly inward when gently inflated with seawater at barely ten pounds per square inch above ambient sea pressure—cradling delicate branching gorgonian corals and fragile deep-sea sponges in broad cushioned contact arcs without snapping calcified stems.

Paragraph C: Yet even ultra-gentle curling fingers confront severe limitations inside open midwater columns lacking solid seafloor footing. Chasing neutrally buoyant swimming medusae in pitch blackness resembles trying to pinch floating soap bubbles in mid-air: advancing robot fingers push surrounding water ahead in bow-wake ripples that shove weightless jelly organisms safely out of reach milliseconds before soft rubber touches skin.

Paragraph D: Overcoming hydrodynamic bow-wave scattering inspired an astonishingly inventive origami device: the Rotary Actuated Dodecahedron (RAD) sampler. Modeled directly on folding paper polyhedra, the RAD trap integrates twelve lightweight triangular hinged panels driven simultaneously by a single low-torque hydraulic rotary actuator. When commanded open, panels flatten cleanly like blooming flower petals far outside a jellyfish's peripheral bell; as the single hydraulic motor turns smoothly, all twelve facets fold together seamlessly in under three seconds into a seamless hollow water-filled twelve-sided sanctuary—trapping delicate ctenophores unharmed inside calm still water without ever grazing a single tentacle.

Paragraph E: Complementing origami cages, engineers recently introduced ultra-soft "granular jamming" and suction-cupped adhesive pads inspired by octopus arms and clingfish bellies. Micro-grooved hydrogel disks conform passively onto irregular wet coral rubble or slick fish scales at minimal clamping loads, distributing holding stress uniformly rather than concentrating shear pressure on single points.

Paragraph F: Increasingly, soft robotic manipulators also carry embedded non-invasive optical and genomic sensors right inside soft cuffs. Fiber-optic Raman lasers, microfluidic environmental-DNA (eDNA) water syringes, and miniature hyperspectral cameras photograph, swab surface mucus, and sequence mitochondrial markers of delicate abyssal creatures directly in-situ—releasing fragile specimens safely back into black ocean currents without ever hauling them fatally through boiling tropical surface temperatures.

Paragraph G: Skeptical submersible mechanics nevertheless raise persistent practical durability complaints: sharp jagged volcanic basalt grains tear soft silicone bladders far more easily than anodized titanium plates, requiring rapid modular quick-swap cartridges aboard rolling research decks whenever delicate skins snag on deep hydrothermal chimneys.`,
        questions: [
          {
            id: 'cd_reading_p22_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A explains pumping incompressible ambient seawater into elastomeric bellows eliminates deep-sea collapse.'
          },
          {
            id: 'cd_reading_p22_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph B details Kevlar-embedded silicone fingers curling smoothly around gorgonian corals and sponges at low pressure.'
          },
          {
            id: 'cd_reading_p22_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph C uses the soap-bubble analogy to explain how advancing fingers push bow-wake ripples shoving neutrally buoyant swimmers away.'
          },
          {
            id: 'cd_reading_p22_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph D describes the folding 12-panel Rotary Actuated Dodecahedron enclosing ctenophores inside still water without grazing tentacles.'
          },
          {
            id: 'cd_reading_p22_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph E covers octopus- and clingfish-inspired granular jamming and micro-grooved hydrogel adhesion pads.'
          },
          {
            id: 'cd_reading_p22_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph F describes embedded Raman lasers, eDNA syringes, and cameras enabling non-lethal in-situ study and live release.'
          },
          {
            id: 'cd_reading_p22_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Why incompressible seawater pumps bypass crushing deep-sea air-bladder collapse',
              'ii. Field maintenance headaches caused by jagged basalt tearing delicate elastomers',
              'iii. Folding geometric shields trap swimming jellies without physical skin contact',
              'iv. Hydrodynamic water bow-waves shove weightless swimmers away from advancing fingers',
              'v. Micro-grooved hydrogel pads distribute gentle grip across slick wet surfaces',
              'vi. Analyzing genetics and lighting in-situ so captured animals survive release',
              'vii. Fiber-reinforced silicone fingers wrap soft curves around fragile benthic corals',
              'viii. Breeding giant deep-sea octopuses inside heated deck aquariums'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph G warns sharp volcanic basalt tears soft silicone bladders, requiring modular quick-swap deck cartridges.'
          },
          {
            id: 'cd_reading_p22_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Embedding tough ______ along one side of soft silicone fingers guides smooth inward curling under mild water pressure.',
            correctAnswer: 'KEVLAR STRIPS',
            explanation: 'Paragraph B cites inextensible Kevlar strips laminated along one side of hollow silicone chambers.'
          },
          {
            id: 'cd_reading_p22_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'A single hydraulic motor closes twelve triangular plates of the RAD enclosure in under ______.',
            correctAnswer: 'THREE SECONDS',
            explanation: 'Paragraph D states all twelve facets fold together seamlessly in under three seconds.'
          },
          {
            id: 'cd_reading_p22_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Scientists sample surrounding water for shed DNA fragments using compact microfluidic ______.',
            correctAnswer: 'WATER SYRINGES',
            explanation: 'Paragraph F mentions microfluidic environmental-DNA (eDNA) water syringes.'
          },
          {
            id: 'cd_reading_p22_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'To recover swiftly from basalt snags on ships, crews keep spare ______ ready on deck.',
            correctAnswer: 'QUICK-SWAP CARTRIDGES',
            explanation: 'Paragraph G specifies modular quick-swap cartridges.'
          },
          {
            id: 'cd_reading_p22_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why did the Rotary Actuated Dodecahedron succeed where soft curling silicone fingers failed in midwater trials?',
            options: [
              'A. Compressed pneumatic air inside origami joints freezes swimming ctenophores instantaneously',
              'B. Hard anodized dodecahedron panels slice coral stems cleanly before DNA sequencing',
              'C. Twelve folding facets enclose surrounding water from behind without pushing a bow-wave directly into floating jellies',
              'D. Hyperspectral cameras stun midwater predators with ultraviolet laser flashes'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraphs C–D contrast bow-wave pushing by fingers against RAD petals flattening outside the animal before folding into a calm twelve-sided still-water chamber.'
          },
          {
            id: 'cd_reading_p22_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What ethical and biological advantage does integrating eDNA syringes and optical scanners directly into soft cuffs offer in Paragraph F?',
            options: [
              'A. Submersibles can store five times more formalin jars inside ballast hulls',
              'B. Delicate deep creatures can be photographed, swabbed, and released alive without fatal thermal shock at the ocean surface',
              'C. Silicone bladders become completely tear-proof against volcanic basalt rocks',
              'D. Marine biologists never need shipboard laboratories to sequence mitochondrial genes'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph F notes sensors measure anatomy and genetic markers in-situ, releasing fragile specimens safely instead of hauling them fatally through warm surface waters.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Untethered Bio-Inspired Swimmers, Acoustic Quietness, and Control Limits',
        subtitle: 'Weighing flapping elastomeric fishes against propeller-driven autonomous gliders',
        text: `Paragraph A: Gentle organism capture solves only half of deep biological observation; approaching skittish squids, bioluminescent lanternfish, and giant vampire squids unobserved remains equally elusive. Conventional autonomous underwater vehicles (AUVs) rely on spinning metallic thrusters driven by noisy geared brushless motors—creating localized hydrodynamic turbulence and high-pitched acoustic cavitation buzzes detectable by lateral-line pressure organs of deep predators tens of meters away before dim LED camera spotlights even flicker on.

Paragraph B: Hoping to slip silently alongside midwater fauna, bio-robotics teams developed untethered soft robotic swimmers modeled on manta rays, moon jellyfish, and yellowfin tuna. Rather than spinning rigid bronze propellers, fluidic elastomeric tails oscillate smoothly via dielectric elastomer actuators (DEAs)—rubbery capacitor films that flex rapidly when brief electrical voltages squeeze conductive hydrogel electrodes—or miniaturized silent peristaltic water pumps embedded inside flexible silicone torsos.

Paragraph C: Field deployments in shallow Pacific reefs demonstrated striking behavioral camouflage. When researchers piloted "SoFi"—a soft-tailed silicone acoustic robotic fish—alongside wild damselfish and parrotfish off Fiji, untethered reef schools swam casually centimeters past the undulating tail without triggering standard flee-or-hide predator reflexes normally provoked by clanking aluminum ROV thrusters. Similarly, translucent silicone moon-jelly robots propelled by rhythmic water-jet bell contractions blended effortlessly amidst fragile plankton blooms.

Paragraph D: Scaling untethered soft swimmers down into crushing four-kilometer abyssal basins, however, encounters formidable thermodynamic and control-theory walls. Dielectric elastomers demanding multi-kilovolt excitation voltages suffer alarming electrical breakdown when microscopic seawater droplets seep through stretched polymer pores under cyclic fatigue. Worse still, fluid-structure interactions governing soft bendy tails defy neat linear differential control equations: slight eddies or rising thermal currents twist compliant fins unpredictably, demanding vastly heavier onboard artificial-intelligence feedback sensors simply to hold a straight survey line against cross-currents.

Paragraph E: Energy budgets present an equally sobering ceiling. Rigid streamlined aluminum torpedo AUVs slice efficiently across fifty-kilometer abyssal transects on compact lithium packs precisely because rigid wings generate minimal internal material hysteresis loss. Every flex of a soft silicone fish body wastes measurable mechanical energy heating internal viscoelastic polymer chains—restricting contemporary untethered soft robots mostly to modest multi-hour close-range inspection hops deployed off nearby heavy metal mother-ROVs rather than independent trans-oceanic migrations.

Paragraph F: Leading ocean roboticists consequently advocate hybrid "macro-rigid, distal-soft" expedition architectures rather than romanticized fully squishy submarines. Sturdy titanium pressure spheres and efficient low-drag rigid hulls excel at hauling batteries and acoustic sonar kilometers down through icy darkness, before silently deploying detachable origami cages, soft bio-fish scouts, and hydrogel fingers for the final decisive meters of fragile biological contact.`,
        questions: [
          {
            id: 'cd_reading_p22_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains why flexing soft elastomer bodies consumes more battery energy per kilometer than rigid hulls?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E explains viscoelastic polymer heating hysteresis steals mechanical energy during every body flex compared with rigid torpedo hulls.'
          },
          {
            id: 'cd_reading_p22_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph reports wild reef fish swimming peacefully beside an undulating robotic silicone swimmer?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C describes Fiji field deployments where wild damselfish and parrotfish swam calmly alongside "SoFi."'
          },
          {
            id: 'cd_reading_p22_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph identifies electrical shorting hazards and mathematical steering difficulty as major deep-water hurdles?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D cites kilovolt DEA breakdown from seawater seepage and unpredictable non-linear fluid-structure cross-current deflections.'
          },
          {
            id: 'cd_reading_p22_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph details how spinning traditional metal propellers alert deep ocean animals before lights even turn on?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'A',
            explanation: 'Paragraph A describes thruster turbulence and acoustic cavitation buzzes detected by lateral-line organs tens of meters away.'
          },
          {
            id: 'cd_reading_p22_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Rigid metallic AUV propellers emit water turbulence and noise loud enough to frighten sensitive deep animals before spotlights activate.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A confirms thruster turbulence and cavitation buzzes reach lateral-line organs tens of meters away prior to dim LED lights.'
          },
          {
            id: 'cd_reading_p22_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Soft dielectric elastomer actuators rely solely on low twelve-volt batteries immune to seawater seepage.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states DEAs demand multi-kilovolt excitation voltages and suffer electrical breakdown when seawater seeps through stretched pores.'
          },
          {
            id: 'cd_reading_p22_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Flexible silicone fish bodies conserve battery power far better than rigid torpedo AUVs over fifty-kilometer transects.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E explicitly reverses that: internal viscoelastic heating wastes energy, confining soft swimmers to multi-hour close-range hops.'
          },
          {
            id: 'cd_reading_p22_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Fijian reef fishers accidentally caught the SoFi robotic fish inside commercial tuna nets during 2019 trials.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C describes Fiji trials with damselfish and parrotfish with no commercial tuna net capture mentioned.'
          },
          {
            id: 'cd_reading_p22_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Most robotics specialists foresee deep-sea exploration pairing rigid heavy-duty carriers with soft terminal manipulators.',
            correctAnswer: 'YES',
            explanation: 'Paragraph F concludes roboticists advocate hybrid "macro-rigid, distal-soft" architectures rather than fully squishy submarines.'
          },
          {
            id: 'cd_reading_p22_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'How do fish detect approaching metallic ROVs in dark ocean depths even without bright visual spotlights in Paragraph A?',
            options: [
              'A. Sharp copper thruster blades release detectable mineral scents',
              'B. Aluminum cages reflect distant bioluminescent flashes from surface plankton',
              'C. Lateral-line sensory organs register wake turbulence and high-pitched acoustic cavitation noises from spinning propellers',
              'D. Geared brushless motors emit ultraviolet electric arcs across ocean water'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph A specifies lateral-line pressure organs of deep predators detect hydrodynamic turbulence and acoustic cavitation buzzes tens of meters away.'
          },
          {
            id: 'cd_reading_p22_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do soft flexible swimmer fins require heavier guidance computation than stiff aluminum rudders in Paragraph D?',
            options: [
              'A. Compliant fins deform unpredictably under eddies and currents, defeating simple linear control math',
              'B. Conductive hydrogel electrodes freeze permanently at two kilometers depth',
              'C. Wild reef parrotfish routinely bump soft tails off survey lines',
              'D. Dielectric films reflect optical camera signals backward into sensors'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states soft fluid-structure interactions defy neat linear control equations because eddies twist compliant fins unpredictably.'
          },
          {
            id: 'cd_reading_p22_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Which engineering philosophy does Paragraph F endorse for future abyssal biodiversity missions?',
            options: [
              'A. Replacing every titanium pressure hull permanently with soft silicone submarines',
              'B. Prohibiting battery-powered thrusters anywhere inside Pacific coral reefs',
              'C. Returning to traditional high-speed nylon nets paired with deck taxidermy',
              'D. Combining sturdy low-drag rigid transport craft for transit with detachable soft tools for gentle close-up sampling'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F advocates "macro-rigid, distal-soft" architectures: rigid hulls carry batteries/sonar down before deploying detachable origami/soft scouts.'
          },
          {
            id: 'cd_reading_p22_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'High-speed propeller blades generate noisy bubbles via acoustic ______ that scare shy ocean dwellers away.',
            correctAnswer: 'CAVITATION',
            explanation: 'Paragraph A notes high-pitched acoustic cavitation buzzes.'
          },
          {
            id: 'cd_reading_p22_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Repeated flexing inside elastomeric tails wastes battery energy as internal heat through polymer ______.',
            correctAnswer: 'HYSTERESIS LOSS',
            explanation: 'Paragraph E refers to internal material hysteresis loss heating viscoelastic chains.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 23 (VERY DIFFICULT): cd_reading_p23 (Hydrothermal Vent Extremophiles and Chemosynthesis)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p23',
    testNumber: 23,
    testType: 'practice',
    title: 'CD-IELTS Practice 23: Hydrothermal Vent Extremophiles and Chemosynthesis',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on Galápagos Rift chemosynthetic discovery, Riftia tubeworm physiology, and hydrothermal origin-of-life hypotheses.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Overturning Solar Monopoly at the 1977 Galápagos Rift',
        subtitle: 'Chemical electron donors and primary production two miles beneath sunlit waters',
        text: `Paragraph A: For more than a century following Charles Darwin and nineteenth-century deep-ocean dredging expeditions, biological oceanography operated under an almost unquestioned axiom: every complex food web on Earth ultimately harvested sunlight. Apart from trivial mineral dust, life across dark abyssal ocean trenches supposedly survived exclusively as frugal scavengers—awaiting faint drizzles of dead sunlit phytoplankton, whale carcasses, and fecal pellets sinking gently down from epipelagic surface waters miles overhead. Under that solar-monopoly dogma, abyssal biomass density had to remain chronically impoverished.

Paragraph B: That paradigm shattered permanently in February 1977 along the tectonic spreading zone of the Galápagos Rift northeast of Ecuador. Descending two and a half kilometers inside the cramped titanium sphere of the deep-diving submersible Alvin, marine geologists Jack Corliss and Robert Ballard expected merely to photograph cooling volcanic pillow basalts and lukewarm ocean-floor fractures. Instead, shipboard cameras transmitted astonishing visions of milky shimmering mineral plumes—and shortly afterward at neighboring East Pacific Rise sites, towering "black smoker" sulfide chimneys blasting superheated 350-degree-Celsius fluids—ringed densely by snow-white clams the size of dinner plates, ghostly blind shrimp, and towering crimson-plumed worm forests crowding together at biomass densities surpassing tropical rainforests.

Paragraph C: Crucially, the biologists aboard early geological cruises quickly realized no falling surface marine snow could remotely sustain thriving colonies packed cheek-by-jowl around volcanic fissures. Water sampling soon revealed the invisible energetic engine fueling this dark oasis: superheated seawater percolating kilometers beneath cracked oceanic crust stripped sulfur, iron, and manganese from molten basalt—emerging back into icy two-degree bottom currents heavily charged with dissolved hydrogen sulfide (H2S), dissolved hydrogen gas, and methane.

Paragraph D: Rather than relying on chlorophyll photons to split water molecules, specialized free-living chemolithoautotrophic bacteria and archaea blanketed surrounding rocks in slippery white mats, oxidizing escaping hydrogen sulfide with dissolved seawater oxygen (captured originally by distant surface photosynthesis) to harvest chemical bond energy. Those microbial chemotrophs channeled captured metabolic ATP energy through carbon-fixing enzymatic pathways—chiefly the classical Calvin-Benson cycle and ancient reductive tricarboxylic acid (rTCA) pathways—converting ambient seawater bicarbonate cleanly into living sugars, proteins, and lipids in total pitch darkness.

Paragraph E: Astonishingly, biochemical heat tolerance across vent microbes stretches biological viability far past conventional boiling limits. Because crushing 250-atmosphere abyssal hydrostatic pressure suppresses water vaporization violently, hydrothermal vent fluids remain wholly liquid past 350 degrees Celsius. Hyperthermophilic archaea such as Methanopyrus kandleri thrive and divide actively inside scorching porous chimney walls hovering around 110 to 122 degrees Celsius—deploying heat-resistant tetraether membrane lipids glued covalently across monolayer sheets alongside molecular chaperone heat-shock proteins and salt-stabilized DNA coils that resist thermal unraveling.

Paragraph F: Yet geobiologists carefully stress an overlooked energetic nuance tempering romantic notions of "alien sunlight-free life." Virtually every prominent giant vent animal—clams, tube worms, and shrimp alike—still depends indirectly on upper-ocean sunlight because their aerobic respiration and sulfide-oxidizing microbes burn free dissolved oxygen pumped downward from green surface algae via polar thermohaline circulation, leaving only purely anaerobic methanogens and sulfate reducers as genuinely sun-independent ecosystems.`,
        questions: [
          {
            id: 'cd_reading_p23_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Before 1977, mainstream oceanography assumed deep seafloor animals could survive solely on organic food sinking from sunlit surface zones.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A notes pre-1977 dogma held life across dark trenches survived exclusively as scavengers awaiting dead phytoplankton and pellets from sunlit waters.'
          },
          {
            id: 'cd_reading_p23_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Jack Corliss and Robert Ballard initially dove to the Galápagos Rift specifically expecting to discover giant white clams and red tube worms.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B states the marine geologists expected merely to photograph cooling volcanic pillow basalts and lukewarm ocean-floor fractures.'
          },
          {
            id: 'cd_reading_p23_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Water inside deep-ocean black smoker vents boils immediately into steam bubbles once heated above one hundred degrees Celsius.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E explains crushing 250-atmosphere pressure suppresses vaporization, keeping hydrothermal fluids wholly liquid past 350°C.'
          },
          {
            id: 'cd_reading_p23_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Chemically driven vent bacteria convert ambient seawater bicarbonate into carbohydrates without needing solar photons inside the trench.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D states chemolithoautotrophic microbes oxidize H2S and fix seawater bicarbonate into sugars, proteins, and lipids in total pitch darkness.'
          },
          {
            id: 'cd_reading_p23_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Large crimson-plumed tubeworms at the Galápagos Rift operate completely independently of oxygen produced by sunlit surface marine algae.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph F notes every prominent giant vent animal still depends indirectly on sunlight because aerobic respiration and sulfide oxidation burn oxygen pumped down from surface green algae.'
          },
          {
            id: 'cd_reading_p23_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Robert Ballard later donated preserved Galápagos Rift giant clams directly to Ecuadorian university collections.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Ecuador is named geographically in Paragraph B with no mention of specimen donations to Ecuadorian universities.'
          },
          {
            id: 'cd_reading_p23_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What cellular adaptation prevents hyperthermophilic archaea like Methanopyrus kandleri from melting apart inside 120°C chimney pores in Paragraph E?',
            options: [
              'A. Thick calcified clam-like calcium shields wrapping microbial outer walls',
              'B. Switching off metabolic ATP synthesis whenever water pressure climbs above 200 atmospheres',
              'C. Storing icy two-degree bottom seawater inside vacuole chambers',
              'D. Covalently linked tetraether membrane monolayers, chaperone proteins, and salt-stabilized DNA'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph E lists heat-resistant covalently glued tetraether monolayer lipids, molecular chaperone heat-shock proteins, and salt-stabilized DNA coils.'
          },
          {
            id: 'cd_reading_p23_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Why does Paragraph F qualify popular claims that black smoker communities live wholly free of solar energy?',
            options: [
              'A. Sulfide-oxidizing microbes and large vent animals require dissolved oxygen manufactured initially by sunlit surface plankton',
              'B. Faint sunlight penetrates past 2,500 meters during clear Ecuadorian summer noons',
              'C. Giant clams swim vertically once yearly to graze surface phytoplankton blooms',
              'D. Black smoker basalt contains fossilized chlorophyll pigments from Pleistocene algae'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph F points out aerobic vent animals and sulfide-oxidizers burn free dissolved oxygen captured by surface algae and sent downward via thermohaline circulation.'
          },
          {
            id: 'cd_reading_p23_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'How does hydrothermal vent seawater acquire rich loads of hydrogen sulfide and dissolved metals in Paragraph C?',
            options: [
              'A. Decaying whale bones release trapped sulfur minerals across rocky spreading zones',
              'B. Methanogenic archaea pump iron and manganese upward out of Earth\'s inner core',
              'C. Cold seawater seeping kilometers down through crust cracks leaches sulfur and metals from hot basalt before shooting back up',
              'D. Blind shrimp crush sulfide chimney rocks into fine suspended seawater pastes'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C states superheated seawater percolating kilometers beneath cracked crust strips sulfur, iron, and manganese from molten basalt.'
          },
          {
            id: 'cd_reading_p23_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Chemosynthetic vent microbes harvest energy by oxidizing escaping ______ alongside seawater oxygen.',
            correctAnswer: 'HYDROGEN SULFIDE',
            explanation: 'Paragraph D specifies oxidizing escaping hydrogen sulfide with dissolved seawater oxygen.'
          },
          {
            id: 'cd_reading_p23_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Alongside the Calvin-Benson cycle, dark microbial primary producers fix carbon through ancient ______ enzymatic pathways.',
            correctAnswer: 'RTCA',
            explanation: 'Paragraph D cites classical Calvin-Benson and ancient reductive tricarboxylic acid (rTCA) pathways.'
          },
          {
            id: 'cd_reading_p23_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'What is the name of the research submersible that carried Corliss and Ballard to the Galápagos Rift in 1977?',
            correctAnswer: 'ALVIN',
            explanation: 'Paragraph B names the deep-diving submersible Alvin.'
          },
          {
            id: 'cd_reading_p23_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'What temperature can black smoker hydrothermal fluids reach while staying fully liquid under abyssal pressure?',
            correctAnswer: '350 DEGREES CELSIUS',
            explanation: 'Paragraph B and E state superheated 350-degree-Celsius fluids remain liquid past 350 degrees Celsius.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Riftia Pogonophora—Anatomy of an Animal Without Mouth, Gut, or Anus',
        subtitle: 'Inside the extraordinary internal bacterial battery powering giant hydrothermal tubeworms',
        text: `Paragraph A: Among all bizarre creatures recovered from East Pacific black smoker fields, none baffled zoological anatomists more thoroughly than Riftia pachyptila—giant vestimentiferan tubeworms stretching over two meters tall inside flexible chitinous white parchment tubes crowned by vivid scarlet feather-like plumes. When Harvard marine physiologist Meredith Jones dissected pristine specimens brought aboard research ships in 1977, he encountered an anatomical shock: adult Riftia worms completely lack a mouth opening, digestive stomach, intestinal tract, or excretory anus—rendering conventional animal feeding physically impossible.

Paragraph B: How could a two-meter soft-bodied animal lacking any gut grow faster than almost any other known marine invertebrate, exploding from microscopic larvae to full meter-length colonies within eighteen months around freshly erupted basalt vents? Biochemical detectives led by doctoral researcher Colleen Cavanaugh solved the riddle in 1981 by peering microscopically into Riftia's spongy, mustard-brown central body organ—the trophosome, occupying more than half of the worm's body mass. Rather than empty fat tissue, trophosome lobules proved densely packed with billions of living intracellular sulfur-oxidizing bacteria (Candidatus Endoriftia persephone), numbering up to ten billion symbionts per gram of host tissue.

Paragraph C: Keeping ten billion sulfide-hungry bacteria alive inside solid body tissues confronts an extraordinarily dangerous biochemical dilemma. Hydrogen sulfide is notoriously lethal to animal mitochondria—blocking cellular cytochrome c oxidase respiration chains nearly as potently as cyanide gas—while seawater oxygen simultaneously poisons anaerobic enzymes unless controlled tightly. Moreover, oxygen and sulfide occur together only momentarily where hot vent plumes mix turbulently with icy ambient bottom water, demanding frantic simultaneous harvesting right at mixing eddies.

Paragraph D: Riftia's bright crimson gill plume solves both toxicity and transport simultaneously via specialized giant extracellular hemoglobin molecules circulating abundantly inside its vascular blood. Whereas ordinary human hemoglobin binds solely oxygen at iron-heme pockets, Riftia carries massive hexagonal protein complexes binding oxygen cleanly at heme sites while simultaneously latching toxic sulfide ions separately onto exposed zinc and cysteine amino-acid docks around outer hemoglobin rims. Bound safely inside hemoglobin carriers, lethal sulfide travels effortlessly through worm blood vessels without poisoning Riftia's own cells or spontaneously oxidizing prematurely on route to the trophosome.

Paragraph E: Upon reaching deep trophosome bacteria cells, specialized blood transporters unload both oxygen and sulfide cleanly into microbial symbionts—which oxidize sulfide to power carbon fixation and pass continuous waves of amino acids, succinate, and simple sugars directly across bacterial membranes to nourish their gutless worm host. Crucially, genetic analyses reveal juvenile Riftia larvae hatch in open ocean water entirely free of symbionts, possessing a tiny temporary mouth and gut before settling on warm basalt crevices, swallowing free-living environmental bacteria through outer skin layers, and absorbing their own gut completely into adulthood.

Paragraph F: Even immune defense demonstrates finely tuned evolutionary diplomacy: Riftia selectively digests surplus aging symbionts via controlled lysosomal enzymes inside outer trophosome rims to harvest proteins and regulate bacterial population density, while tolerating dividing interior symbionts peacefully without mounting destructive inflammatory rejection.

Paragraph G: Yet extreme metabolic specialization condemns tubeworms to fleeting ecological boom-and-bust cycles. Because tectonic magma chambers shift unpredictably, single black smoker chimneys routinely cool and choke off within years or decades—starving stationary two-meter Riftia beds overnight and leaving bare empty white tubes scattered like fossilized chimneys until microscopic drifting larvae colonize newly cracked seafloor miles away.`,
        questions: [
          {
            id: 'cd_reading_p23_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A details Meredith Jones\' 1977 shock discovering adult Riftia lack mouth, stomach, intestine, or anus.'
          },
          {
            id: 'cd_reading_p23_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph B reports Colleen Cavanaugh\'s 1981 discovery packing ten billion sulfide-oxidizing bacteria per gram inside the trophosome.'
          },
          {
            id: 'cd_reading_p23_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph C explains hydrogen sulfide poisons mitochondria like cyanide while reacting unpredictably with oxygen in turbulent vents.'
          },
          {
            id: 'cd_reading_p23_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph D explains how Riftia\'s hexagonal extracellular hemoglobin carries oxygen and sulfide on distinct binding sites cleanly.'
          },
          {
            id: 'cd_reading_p23_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph E traces symbiotic nutrient feeding alongside larvae hatching symbiont-free, engulfing skin bacteria, and absorbing their temporary gut.'
          },
          {
            id: 'cd_reading_p23_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph F shows selective lysosomal digestion at outer trophosome edges regulates bacterial density without rejecting internal symbionts.'
          },
          {
            id: 'cd_reading_p23_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. Dissections expose a giant fast-growing worm completely devoid of digestive organs',
              'ii. Sudden geological shifts leave specialized stationary colonies vulnerable to collapse',
              'iii. Balanced immune digestion harvests nutrients without destroying active partners',
              'iv. Modified giant blood proteins transport poison safely alongside vital oxygen',
              'v. Discovering billions of sulfur-burning bacteria packed inside a central host organ',
              'vi. How gutless adults acquire bacterial partners during brief larval transformations',
              'vii. Why delivering two reacting gases simultaneously risks lethal cyanide-like toxicity',
              'viii. Transplanting crimson tubeworm plumes into tropical coral lagoons'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph G concludes volcanic vent shutoffs starve stationary Riftia beds within years or decades.'
          },
          {
            id: 'cd_reading_p23_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Inside Riftia, bacteria live packed densely inside a central mustard-brown organ named the ______.',
            correctAnswer: 'TROPHOSOME',
            explanation: 'Paragraph B names the spongy mustard-brown central body organ—the trophosome.'
          },
          {
            id: 'cd_reading_p23_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Unless carefully isolated, escaping sulfide damages host respiration almost as severely as ______.',
            correctAnswer: 'CYANIDE GAS',
            explanation: 'Paragraph C notes hydrogen sulfide blocks cytochrome c oxidase nearly as potently as cyanide gas.'
          },
          {
            id: 'cd_reading_p23_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Riftia blood molecules neutralize sulfide toxicity by anchoring ions onto outer ______ and cysteine docking points.',
            correctAnswer: 'ZINC',
            explanation: 'Paragraph D states sulfide binds onto exposed zinc and cysteine amino-acid docks around outer hemoglobin rims.'
          },
          {
            id: 'cd_reading_p23_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Riftia maintains balanced microbe counts inside outer trophosome layers using controlled ______ enzymes.',
            correctAnswer: 'LYSOSOMAL',
            explanation: 'Paragraph F specifies controlled lysosomal enzymes inside outer trophosome rims.'
          },
          {
            id: 'cd_reading_p23_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'How do adult gutless Riftia worms initially obtain their symbiotic bacterial powerhouses according to Paragraph E?',
            options: [
              'A. Mother worms pack sulfur microbes inside every freshly fertilized egg yolk',
              'B. Free-swimming larvae acquire environmental bacteria through their skin upon settling near warm vents before losing their temporary gut',
              'C. Adult crimson feather plumes swallow floating bacteria directly into permanent intestines',
              'D. Drifting blind shrimp inject Endoriftia spores into white parchment tubes'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E explains juvenile larvae hatch symbiont-free, settle on basalt crevices, swallow environmental bacteria through outer skin layers, and absorb their gut into adulthood.'
          },
          {
            id: 'cd_reading_p23_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'What evolutionary vulnerability leaves specialized hydrothermal tubeworms prone to sudden local extinction in Paragraph G?',
            options: [
              'A. Extracellular hemoglobin proteins break down irreversibly after eighteen months',
              'B. Predatory white clams consume scarlet worm plumes whenever bottom temperatures rise two degrees',
              'C. Stationary colonies starve rapidly whenever shifting subterranean magma stops venting sulfide at a chimney',
              'D. Symbiotic Endoriftia bacteria mutate into fatal parasites inside older parchment tubes'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph G explains unpredictable magma shifts choke off individual black smoker chimneys within years or decades, starving stationary colonies.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Alkaline White Chimneys, Abiogenesis, and Extraterrestrial Ocean Worlds',
        subtitle: 'Evaluating hydrothermal vent hypotheses for Earth\'s earliest cells and icy moons',
        text: `Paragraph A: Discovering self-sustaining life thriving independently of solar heat along deep ocean trenches swiftly spilled beyond marine biology into evolutionary origin-of-life chemistry (abiogenesis). Throughout the 1950s, Stanley Miller and Harold Urey's famous electric-spark experiments championed Darwin's sunny "warm little pond" model, synthesizing amino acids inside lightning-struck surface flasks. Yet planetary geologists now point out that early Earth four billion years ago suffered relentless asteroid bombardments capable of boiling away sunlit surface puddles while bathing planetary oceans under intense sterilizing ultraviolet glare.

Paragraph B: Deep ocean hydrothermal vents offered prebiotic chemistry crucial sanctuary beneath protective kilometers of liquid water. Crucially, however, geochemists led by Michael Russell and Nick Lane sharply distinguish volcanic "black smokers" from far gentler, non-volcanic "alkaline hydrothermal vents"—exemplified strikingly by the towering sixty-meter white limestone spires of the Lost City hydrothermal field discovered off the Mid-Atlantic Ridge in 2000. Whereas scorching 350°C acidic black smokers shred delicate organic nucleotides in milliseconds, cooler alkaline vents circulate seawater calmly through iron-magnesium mantle rocks via chemical serpentinization—releasing hydrogen-rich alkaline fluids hovering gently between forty and ninety degrees Celsius.

Paragraph C: Astonishingly, Lost City's porous carbonate mineral chimneys form natural networks of microscopic iron-sulfur-lined mineral micro-cavities strikingly reminiscent of primitive microbial cells. Where warm alkaline vent water rich in hydrogen (pH 10) meets ancient acidic, carbon-dioxide-saturated primeval ocean water (pH 5), a natural cross-membrane proton voltage gradient arises automatically across thin mineral walls—precisely mimicking the universal chemiosmotic proton-motive force that drives ATP energy synthesis across every living bacterium, plant, and human mitochondrion today.

Paragraph D: Skeptical prebiotic organic chemists—most vocally John Sutherland and Jack Szostak—nevertheless contest the alkaline-vent abiogenesis scenario vigorously on chemical polymerization grounds. Synthesizing long stable RNA strands and fatty-acid vesicle membranes requires drying-wetting evaporation cycles to drive condensation reactions that eject water molecules—chemical dehydration impossible inside perpetually submerged deep-ocean pores where water relentlessly hydrolyzes fragile polymer chains apart before functional genetic codes emerge.

Paragraph E: Debates between sunlit volcanic hot-spring pond proponents and deep alkaline-vent champions now shape robotic astrobiology missions targeting icy outer solar system moons. Spacecraft gravity and plume flybys confirm vast liquid saltwater oceans locked beneath thick ice crusts on Jupiter's moon Europa and Saturn's moon Enceladus. Crucially, NASA's Cassini probe flying straight through Enceladus's south-polar geysers detected molecular hydrogen gas alongside silica nanograins—signature diagnostic fingerprints indicating ongoing rocky hydrothermal serpentinization reactions heating Enceladus's dark hidden seabed far from faint sunlight.

Paragraph F: Whether Earth's own first ancestral proto-cells sparked inside evaporating sunlit geothermal puddles or inside iron-sulfur alkaline ocean chimneys—or bridged both realms sequentially—studying hydrothermal extremophiles forever expanded science's definition of habitable real estate, proving darkness and crushing depth no longer disqualify distant worlds from harboring living chemistry.`,
        questions: [
          {
            id: 'cd_reading_p23_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph outlines chemical objections based on submerged water breaking apart long RNA polymers?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D summarizes John Sutherland and Jack Szostak\'s objection that wet-dry dehydration cycles needed for RNA polymerization cannot happen underwater.'
          },
          {
            id: 'cd_reading_p23_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph draws a parallel between mineral chimney cavities and universal biological ATP-generating proton gradients?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C shows pH 10 vent water meeting pH 5 ancient oceans creates a natural proton gradient mimicking universal ATP chemiosmosis.'
          },
          {
            id: 'cd_reading_p23_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph cites Cassini spacecraft measurements inside south-polar geysers on a distant moon?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E notes NASA\'s Cassini probe detected molecular hydrogen and silica nanograins in Enceladus\'s plumes.'
          },
          {
            id: 'cd_reading_p23_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph contrasts destructive 350°C black smokers against gentler limestone vents discovered in 2000?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B contrasts nucleotide-shredding 350°C acidic black smokers against cooler 40–90°C alkaline Lost City chimneys.'
          },
          {
            id: 'cd_reading_p23_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Fierce early planetary asteroid impacts and ultraviolet radiation cast doubt on whether life could easily survive in exposed surface ponds four billion years ago.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A notes relentless asteroid bombardments boiling shallow puddles and intense sterilizing UV glare challenged surface-pond safety.'
          },
          {
            id: 'cd_reading_p23_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Michael Russell and Nick Lane propose scorching 350-degree acidic black smokers were the ideal cradle for delicate RNA molecules.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B states Russell and Lane sharply distinguish gentler 40–90°C alkaline vents because 350°C black smokers shred organic nucleotides in milliseconds.'
          },
          {
            id: 'cd_reading_p23_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'John Sutherland and Jack Szostak agree deep seafloor hydrothermal pores effortlessly drive condensation reactions without drying.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D explains Sutherland and Szostak contest deep-vent abiogenesis specifically because continuous water hydrolyzes polymers and lacks drying-wetting dehydration.'
          },
          {
            id: 'cd_reading_p23_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Lost City carbonate spires contain larger adult Riftia tubeworms than East Pacific black smoker fields.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'No comparison of Riftia tubeworm size at Lost City appears anywhere in Passage 3.'
          },
          {
            id: 'cd_reading_p23_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Geyser samples from Saturn\'s moon Enceladus contain chemical signatures consistent with warm seafloor rock reactions.',
            correctAnswer: 'YES',
            explanation: 'Paragraph E notes Cassini detected molecular hydrogen and silica nanograins, diagnostic fingerprints of seafloor hydrothermal serpentinization.'
          },
          {
            id: 'cd_reading_p23_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do alkaline vents like Lost City fascinate origin-of-life bioenergetics theorists more than volcanic black smokers in Paragraph B and C?',
            options: [
              'A. Mild temperatures preserve fragile molecules while pH contrasts across porous mineral walls replicate biological proton gradients',
              'B. Alkaline spires erupt hotter molten basalt providing extra ATP lightning energy',
              'C. Alkaline seawater regularly evaporates cleanly into dry coastal puddles along the Mid-Atlantic Ridge',
              'D. Black smokers emit zero dissolved hydrogen sulfide or iron minerals'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraphs B–C explain mild 40–90°C temperatures preserve nucleotides while pH 10 vs pH 5 across porous iron-sulfur cavities mimics ATP proton gradients.'
          },
          {
            id: 'cd_reading_p23_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'What central chemical vulnerability do critics raise against underwater hydrothermal vents as RNA synthesis sites in Paragraph D?',
            options: [
              'A. Deep ocean floors lack carbon dioxide and hydrogen ions completely',
              'B. Early oceans remained frozen under thick Europa-style ice sheets',
              'C. Iron-sulfur cavity walls melt rapidly above forty degrees Celsius',
              'D. Surrounding seawater breaks apart growing genetic polymer chains unless periodic dry-wet cycles occur'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph D states water relentlessly hydrolyzes fragile polymer chains apart inside perpetually submerged pores lacking drying-wetting dehydration cycles.'
          },
          {
            id: 'cd_reading_p23_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Which best expresses the author\'s closing perspective in Paragraph F?',
            options: [
              'A. Alkaline deep vents have decisively disproved sunlit surface hot-spring hypotheses',
              'B. Regardless of Earth\'s exact starting pool, vent extremophiles prove habitable chemistry does not require planetary sunlight',
              'C. Enceladus missions must drill sixty meters through limestone chimneys before searching Europa',
              'D. Stanley Miller\'s electric-spark flasks remain valid only inside deep submarine chambers'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph F leaves Earth\'s exact origin open while concluding hydrothermal extremophiles proved darkness and crushing depth do not disqualify distant ocean worlds from life.'
          },
          {
            id: 'cd_reading_p23_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Cool alkaline Lost City fluids form when ocean water reacts chemically with mantle rocks via ______.',
            correctAnswer: 'SERPENTINIZATION',
            explanation: 'Paragraph B and E specify chemical serpentinization releasing hydrogen-rich alkaline fluids.'
          },
          {
            id: 'cd_reading_p23_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'On Enceladus, geyser plumes yielded hydrogen alongside ______ confirming warm rocky reactions beneath thick ice.',
            correctAnswer: 'SILICA NANOGRAINS',
            explanation: 'Paragraph E specifies molecular hydrogen gas alongside silica nanograins.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 24 (VERY DIFFICULT): cd_reading_p24 (John Harrison and the Marine Chronometer Longitude Solution)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p24',
    testNumber: 24,
    testType: 'practice',
    title: 'CD-IELTS Practice 24: John Harrison and the Marine Chronometer Longitude Solution',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on eighteenth-century celestial vs horological navigation, Harrison\'s H1–H4 engineering evolution, and Board of Longitude politics.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Dead Reckoning Blindness, Celestial Lunar Distances, and the 1714 Longitude Act',
        subtitle: 'Why determining east-west oceanic position resisted Europe\'s finest astronomers for two centuries',
        text: `Paragraph A: Across early modern transoceanic voyages, latitude—north-south angular distance from the equator—posed comparatively trivial navigational difficulty whenever skies cleared. Simply sighting Polaris altitude or measuring noon solar elevation with a cross-staff or backstaff yielded accurate latitude within a few miles. Longitude—east-west position around a rotating planet—remained an intractable nightmare. Without knowing exact home-port reference time simultaneously at sea, a captain watching local noon sun could determine when the sun stood overhead locally, never where that meridian lay globally relative to Greenwich or Lisbon.

Paragraph B: Forced to estimate longitudinal progress by crude "dead reckoning"—tossing knotted log lines overboard to guess hull speed while adjusting compass headings for invisible cross-currents and magnetic needle drift—eighteenth-century navigators accumulated terrifying errors across multi-week ocean crossings. Ships deliberately hugged dangerous fixed latitude corridors before turning blindly east or west until lookouts glimpsed shore breakers—frequently too late in Atlantic fog. When Admiral Sir Cloudesley Shovell's naval squadron struck treacherous reefs off England's Isles of Scilly in October 1707, drowning nearly two thousand sailors within home waters, maritime panic propelled London's Parliament to enact the celebrated 1714 Longitude Act, promising a staggering twenty-thousand-pound sterling bounty for any practical method fixing sea longitude within half a degree (roughly thirty nautical miles after a six-week West Indies passage).

Paragraph C: Virtually every distinguished natural philosopher of the Enlightenment—from Isaac Newton and Edmond Halley to Royal Astronomer Nevil Maskelyne—expected the twenty-thousand-pound prize to fall cleanly to astronomy rather than humble brass clockwork. Galileo Galilei had already demonstrated how eclipses of Jupiter's four bright Galilean moons ticked like a cosmic clock visible worldwide, though long unsteady brass spyglasses proved hopelessly impossible to steady on pitching wooden ship decks.

Paragraph D: More promising was the "lunar distance" method championed theoretically by Tobias Mayer and championed fiercely in Britain by Maskelyne. Because Earth's moon sweeps rapidly eastward across fixed background constellations roughly half a degree hourly, precisely measuring the angular gap between lunar limb and bright reference stars—then subtracting complex gravitational parallax distortions caused by viewing from Earth's surface rather than planetary center—permitted trained navigators consulting published Nautical Almanac tables to deduce exact Greenwich reference time from the night sky itself.

Paragraph E: Yet celestial elegance collapsed easily under messy seagoing realities. Accurate lunar sightings demanded calm horizons free of Atlantic cloud decks, razor-sharp sextant dexterity across rolling gangways, and nearly four hours of painstaking spherical trigonometry calculations per single position fix—yielding useless blanks across week-long overcast winter storms off Cape Horn.

Paragraph F: Horological timekeeping—simply carrying home Greenwich time steadily across months inside a self-contained mechanical clock losing under three seconds daily—offered instantaneous midday simplicity. Yet seventeenth-century pendulum clocks swung wildly out of beat on rolling decks, coil-spring pocket watches swelled or shrank wildly across tropical heat and Arctic frost, and thick lubricating whale oils froze solid into gummy tar—leading Isaac Newton himself to warn Parliament in 1714 that building a shock-proof maritime timepiece remained virtually unattainable.`,
        questions: [
          {
            id: 'cd_reading_p24_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Determining north-south latitude at sea proved equally impossible for eighteenth-century mariners as measuring east-west longitude.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states latitude posed comparatively trivial navigational difficulty via Polaris or noon solar elevation whenever skies cleared.'
          },
          {
            id: 'cd_reading_p24_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Because ships could establish latitude accurately, captains frequently sailed along known latitude lines until spotting coastlines blindly.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states ships deliberately hugged fixed latitude corridors before turning blindly east or west until lookouts glimpsed shore breakers.'
          },
          {
            id: 'cd_reading_p24_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Most prominent Enlightenment scientists immediately expected mechanical watchmakers rather than astronomers to claim the 1714 bounty.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states virtually every distinguished philosopher—Newton, Halley, Maskelyne—expected the prize to fall cleanly to astronomy.'
          },
          {
            id: 'cd_reading_p24_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Galileo\'s Jovian moon-eclipse method failed aboard eighteenth-century ships primarily because pitching decks rendered long spyglasses unsteady.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C notes long unsteady brass spyglasses proved hopelessly impossible to steady on pitching wooden ship decks.'
          },
          {
            id: 'cd_reading_p24_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Calculating Greenwich reference time through lunar distance sightings required barely five minutes of mental arithmetic.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph E specifies it required nearly four hours of painstaking spherical trigonometry calculations per single position fix.'
          },
          {
            id: 'cd_reading_p24_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Isaac Newton personally drafted Tobias Mayer\'s German lunar Nautical Almanac star tables before 1714.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraphs C–F mention Newton advising Parliament and Mayer developing lunar theory separately without claiming Newton drafted Mayer\'s tables.'
          },
          {
            id: 'cd_reading_p24_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'What immediate naval tragedy accelerated British Parliamentary passage of the 1714 Longitude Act in Paragraph B?',
            options: [
              'A. Admiral Sir Cloudesley Shovell\'s fleet wrecked off the Isles of Scilly, drowning nearly two thousand seamen',
              'B. Royal Astronomer Nevil Maskelyne lost his sextant equipment during a hurricane near Lisbon',
              'C. Dutch clockmakers refused to export whale-oil lubricants into English shipyards',
              'D. Tropical heat melted brass cross-staff instruments across the West Indies'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph B explicitly ties Shovell\'s October 1707 Scilly wreck (~2,000 dead) to maritime panic driving Parliament\'s 1714 Longitude Act.'
          },
          {
            id: 'cd_reading_p24_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'Why did early seagoing mechanical clocks fail Newton\'s expectations in Paragraph F?',
            options: [
              'A. Greenwich meridian clocks ran backward whenever vessels crossed the equator',
              'B. Magnetized compass needles jammed brass gear wheels inside wooden cases',
              'C. Rolling ship waves upset pendulums while swinging marine temperatures warped springs and thickened oil',
              'D. Sailors deliberately dismantled watch springs to repair broken log lines'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph F lists rolling motion breaking pendulum rhythm, temperature swings expanding/shrinking coil springs, and cold thickening whale oils into gum.'
          },
          {
            id: 'cd_reading_p24_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What severe practical drawback limited Tobias Mayer\'s lunar distance method compared with an accurate marine clock?',
            options: [
              'A. Earth\'s moon remains stationary against fixed stars for weeks',
              'B. Cloud-covered winter skies prevented sightings altogether and clear observations took hours of complex math',
              'C. Sextants lost magnetic accuracy near Lisbon and West Indies harbors',
              'D. Published Nautical Almanac tables cost more than twenty thousand pounds'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E explains lunar sightings demanded clear horizons, sharp sextant skill, and nearly four hours of spherical trigonometry per fix.'
          },
          {
            id: 'cd_reading_p24_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Without reliable clocks, captains guessed east-west distance via ______ using knotted trailing lines.',
            correctAnswer: 'DEAD RECKONING',
            explanation: 'Paragraph B describes estimating progress by crude "dead reckoning."'
          },
          {
            id: 'cd_reading_p24_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Mathematicians computing lunar distances had to correct optical sightings for gravitational ______ caused by viewing from Earth\'s surface.',
            correctAnswer: 'PARALLAX DISTORTIONS',
            explanation: 'Paragraph D mentions subtracting complex gravitational parallax distortions.'
          },
          {
            id: 'cd_reading_p24_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Within how many nautical miles of accuracy after a six-week West Indies trip did the top 1714 prize require longitude precision?',
            correctAnswer: 'THIRTY NAUTICAL MILES',
            explanation: 'Paragraph B states half a degree (roughly thirty nautical miles after a six-week West Indies passage).'
          },
          {
            id: 'cd_reading_p24_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'By how many seconds per day or less did a winning sea clock have to hold Greenwich time across months?',
            correctAnswer: 'UNDER THREE SECONDS',
            explanation: 'Paragraph F specifies losing under three seconds daily.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Wooden Gears, Grasshopper Escapements, and Harrison\'s Conceptual Leap from H1 to H4',
        subtitle: 'How a self-taught Yorkshire carpenter reinvented frictionless mechanics and high-frequency watches',
        text: `Paragraph A: Solutions to London's greatest scientific challenge emerged from an astonishingly unlikely quarter: Barrow-upon-Humber, a quiet Lincolnshire village far from Oxbridge observatories. Self-taught village carpenter John Harrison mastered clockmaking without formal guild apprenticeship by studying mechanics manuals borrowed from visiting clergymen. Designing towering church turret clocks completely out of self-lubricating Caribbean lignum vitae wood—eliminating sticky animal oils altogether by harnessing tropical hardwood's natural oily resin—Harrison eliminated watchmaking's chronic friction plague before ever stepping aboard an ocean warship.

Paragraph B: Applying wooden ingenuity to maritime navigation in 1735, Harrison unveiled "H1": a shimmering seventy-five-pound brass-and-wood sea clock governed not by gravity-bound swinging pendulums, but by twin coupled bar balances linked across helical springs. Because identical twin bars rocked symmetrically in opposing directions simultaneously, rolling pitching ocean swells pushed both weights evenly—canceling angular ship-roll shocks cleanly without disrupting beat timing. To eliminate oil-gumming tooth friction, Harrison invented his revolutionary "grasshopper escapement," lifting pallets cleanly off wooden wheel teeth rather than sliding across oiled surfaces.

Paragraph C: Impressed aboard a test voyage to Lisbon in 1736—during which H1 cleanly corrected ship officers' dead-reckoning error by nearly sixty coastal miles—England's Board of Longitude funded Harrison through nineteen painstaking years refining giant sea clocks H2 and H3. Incorporating bimetallic temperature-compensation strips pairing brass and steel to offset tropical thermal expansion alongside ingenious roller-caged ball bearings inside H3, Harrison pushed large rocking bar-balance clocks close to mechanical perfection—yet grew increasingly haunted by subtle timing drag whenever fierce Atlantic storms whipped ships through sudden yawing spirals.

Paragraph D: Around 1753, while commissioning a pocket watch from London artisan John Jefferys for personal wear, Harrison experienced a transformative kinematic revelation that stunned watching horologists. Abandoning giant heavy seventy-five-pound swinging balance frames completely, he realized tiny lightweight watch wheels beating at rapid high frequency—five ticks per second instead of H1's sluggish one-tick gait—possessed enormously greater gyroscopic momentum resilience per gram against sudden violent ship tosses.

Paragraph E: Six years later, Harrison unveiled his masterwork "H4": an oversized silver pocket watch scarcely thirteen centimeters across weighing under three pounds. H4 discarded wooden gears completely yet retained Harrison's temperature-curbing bimetallic strip, a remontoire spring governor feeding identical micro-bursts of torque every seven and a half seconds, and—to curb high-speed metal friction without viscous oil—miniature diamond-cut ruby pallets paired onto a polished steel balance wheel oscillating cleanly eighteen thousand times hourly.

Paragraph F: Put to severe oceanic test aboard HMS Deptford bound for Jamaica in late 1761—monitored nervously by Harrison's devoted son William—H4 lost a minuscule five point one seconds across an eighty-one-day tropical Atlantic crossing, equivalent to barely one nautical mile of longitude error at Jamaican landfall and shattering the 1714 Parliament requirement thirtyfold.

Paragraph G: Sadly, mathematical astronomers governing the Board of Longitude greeted Harrison's triumphant pocket watch not with celebration, but with skeptical institutional delay—demanding further arduous trials while tightening prize criteria in favor of Maskelyne's competing lunar Nautical Almanac calculations.`,
        questions: [
          {
            id: 'cd_reading_p24_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A chronicles carpenter John Harrison\'s self-education and church clocks built from oil-free lignum vitae wood.'
          },
          {
            id: 'cd_reading_p24_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph B describes H1\'s linked twin opposing bar balances neutralizing pitch/roll and its frictionless grasshopper escapement.'
          },
          {
            id: 'cd_reading_p24_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph C details 19 years building H2 and H3 with bimetallic temperature compensation and ball bearings while exposing storm yawing drag.'
          },
          {
            id: 'cd_reading_p24_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph D explains the 1753 pocket-watch insight that rapid five-tick-per-second small wheels outperform heavy 75-pound bar balances under ship motion.'
          },
          {
            id: 'cd_reading_p24_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph E specifies H4\'s silver pocket-watch architecture, remontoire torque stabilizer, and diamond-cut ruby pallets.'
          },
          {
            id: 'cd_reading_p24_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph F recounts HMS Deptford\'s 1761 Jamaica voyage losing only 5.1 seconds over 81 days (~1 nautical mile accuracy).'
          },
          {
            id: 'cd_reading_p24_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. A rural carpenter overcomes oil friction using natural resinous tropical hardwood',
              'ii. Institutional resistance greets triumphant Jamaican accuracy trials',
              'iii. Tiny diamond-fitted precision inside a three-pound silver pocket watch',
              'iv. Twin counter-rocking weights and non-sliding pallets conquer rolling waves',
              'v. Why small fast-ticking watches resist violent ship turns better than heavy clocks',
              'vi. Decades refining giant bimetallic frames reveal lingering storm yawing flaws',
              'vii. Crossing the Atlantic to Jamaica within roughly one nautical mile error',
              'viii. Replacing brass gear teeth entirely with cast-iron naval turret chains'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph G summarizes Board of Longitude skepticism, demands for extra trials, and shifting prize rules toward Maskelyne\'s tables.'
          },
          {
            id: 'cd_reading_p24_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'By building church gear wheels out of dense ______, young Harrison bypassed sticky animal lubricants completely.',
            correctAnswer: 'LIGNUM VITAE',
            explanation: 'Paragraph A highlights self-lubricating Caribbean lignum vitae wood.'
          },
          {
            id: 'cd_reading_p24_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Opposing linked bar frames on H1 balanced out ship motion while a clever ______ lifted wheel teeth without sliding friction.',
            correctAnswer: 'GRASSHOPPER ESCAPEMENT',
            explanation: 'Paragraph B identifies Harrison\'s revolutionary "grasshopper escapement."'
          },
          {
            id: 'cd_reading_p24_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Within H3, riveted ______ strips pairing brass and steel prevented changing climate temperatures from warping clock springs.',
            correctAnswer: 'BIMETALLIC',
            explanation: 'Paragraph C cites bimetallic temperature-compensation strips pairing brass and steel.'
          },
          {
            id: 'cd_reading_p24_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'To keep H4\'s miniature balance wheel fed steadily every few seconds, Harrison fitted an internal ______ torque governor.',
            correctAnswer: 'REMONTOIRE',
            explanation: 'Paragraph E specifies a remontoire spring governor feeding identical micro-bursts of torque every 7.5 seconds.'
          },
          {
            id: 'cd_reading_p24_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why did Harrison abandon his nineteen-year investment in heavy bar-balance clocks (H1–H3) in 1753?',
            options: [
              'A. Lignum vitae timber became legally unavailable across English docks',
              'B. HMS Deptford refused to load seventy-five-pound brass machines below decks',
              'C. Ordering a pocket watch convinced him small high-frequency wheels resist violent storm twisting far better than bulky frames',
              'D. The Board of Longitude forbade mechanical temperature-compensation strips on warships'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraphs C–D explain storm yawing drag plagued large clocks while commissioning Jefferys\' watch revealed small high-frequency wheels carry superior stability.'
          },
          {
            id: 'cd_reading_p24_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'How did H4\'s 1761 Jamaican trial compare against Parliament\'s official 1714 Longitude Act standard?',
            options: [
              'A. It beat the half-degree accuracy requirement thirtyfold, drifting barely one nautical mile across eighty-one days',
              'B. It narrowly missed the thirty-nautical-mile cutoff due to tropical spring shrinkage',
              'C. It relied on lunar sightings twice weekly to reset its ruby pallets',
              'D. It worked accurately only inside calm coastal English Channel ports'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph F notes H4 lost 5.1 seconds over 81 days—roughly one nautical mile error, beating the 30-mile 1714 threshold thirtyfold.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Industrialization, Kendall\'s K1 Replica, and the Birth of Mass Chronometry',
        subtitle: 'Why Harrison\'s handcrafted jewel was too expensive for ships until Larcum Kendall and John Arnold simplified it',
        text: `Paragraph A: Popular romantic biographies frequently portray the protracted conflict between John Harrison and Astronomer Royal Nevil Maskelyne purely as a crude class war between an arrogant aristocratic Establishment and a lone persecuted genius. Careful archival scrutiny of Board of Longitude minutes reveals genuine scientific and industrial dilemmas complicating Harrison's claim. The 1714 Longitude Act demanded not merely one dazzling handcrafted clock winning a single Atlantic race, but a method "generally practicable and useful at sea"—meaning ordinary British shipyards had to manufacture reliable replicas affordably for hundreds of naval frigates and merchantmen.

Paragraph B: Evaluated against mass replicability, Harrison's breathtaking H4 initially looked alarmingly unworkable. Packing hand-faceted diamond pallets, customized constant-force remontoire springs, and eccentric bespoke wheel trains requiring three years of master watchmaking artistry, H4 cost nearly four hundred and fifty pounds per watch—rivaling a small sailing schooner's hull price. Furthermore, stubbornly suspicious that rival mechanics might steal his secrets cheaply, Harrison resisted submitting exhaustive technical blueprint drawings for several anxious years, straining Board patience until Parliament mandated complete physical dismantling before independent artisans in 1765.

Paragraph C: Appointed by the Board to verify whether another craftsman could duplicate Harrison's genius cleanly, London watchmaker Larcum Kendall spent over two years constructing exact copy "K1" in 1769. Sailing continuously aboard Captain James Cook's second and third epic Pacific voyages across roaring Southern Ocean gales, scorching Tahiti reefs, and freezing Antarctic pack ice, Kendall's K1 performed faultlessly—prompting Cook to celebrate the watch warmly inside Admiralty logs as "our trusty friend the Watch" and settling horological practicality beyond dispute.

Paragraph D: Yet K1 still took two and a half years to hand-assemble at prohibitive cost. Transforming luxury royal observatory toys into standard shipboard navigation instruments required ruthless industrial simplification championed by brilliant younger horologists John Arnold and Thomas Earnshaw during the 1770s and 1780s. Dropping Harrison's intricate diamond pallets and finicky remontoire governors altogether, Earnshaw perfected the clean spring detent escapement alongside split bimetallic compensation balances—slashing unit clockmaker labor down from years to mere weeks while halving wholesale chronometer prices.

Paragraph E: Intriguingly, horology did not render celestial lunar tables obsolete overnight. Because even Earnshaw's simplified marine chronometers initially cost roughly sixty to eighty guineas—steep expenses for cash-strapped coastal tramps—and lacked radio time checks to detect unexpected spring breakage mid-ocean, prudent captains carried both a box chronometer and Maskelyne's printed Nautical Almanac through the mid-nineteenth century, cross-checking clock drift periodically against moon-star clearances during clear tropical nights.

Paragraph F: Following direct royal intervention by King George III—after testing Harrison's fifth watch H5 personally at Kew Observatory—Parliament finally voted Harrison an overdue eight-thousand-seven-hundred-fifty-pound balancing grant in 1773. Though no single clockmaker received the intact twenty-thousand-pound prize outright, Harrison's mechanical breakthrough seeded Britain's nineteenth-century marine chronometer monopoly—standardizing global Greenwich time zones long before electric telegraph cables spanned ocean floors.`,
        questions: [
          {
            id: 'cd_reading_p24_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph explains why prudent ship captains kept using printed astronomical moon tables alongside early chronometers?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E notes high initial chronometer costs and lack of mid-ocean radio time checks led captains to verify clock drift with Maskelyne\'s Nautical Almanac.'
          },
          {
            id: 'cd_reading_p24_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph attributes Board skepticism partly to Harrison\'s reluctance to share detailed assembly drawings?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B notes H4 cost £450 and Harrison resisted submitting technical blueprints until Parliament mandated dismantling in 1765.'
          },
          {
            id: 'cd_reading_p24_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph describes an exact replica surviving extreme Southern Ocean storms and Antarctic cold aboard a famous voyage?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C chronicles Larcum Kendall\'s K1 performing faultlessly across Tahiti and Antarctic pack ice on Captain James Cook\'s voyages.'
          },
          {
            id: 'cd_reading_p24_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph details specific mechanical shortcuts that converted artisanal chronometers into affordable fleet tools?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D credits John Arnold and Thomas Earnshaw with dropping diamond pallets/remontoires for the spring detent escapement.'
          },
          {
            id: 'cd_reading_p24_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Archival Board records confirm disputes with Harrison involved genuine manufacturing practicality concerns rather than sheer personal snobbery alone.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A cautions against reducing Board friction to pure class war, noting the 1714 Act required methods "generally practicable and useful at sea."'
          },
          {
            id: 'cd_reading_p24_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Larcum Kendall built his K1 replica in under four weeks at a fraction of H4\'s retail price.',
            correctAnswer: 'NO',
            explanation: 'Paragraphs C–D explicitly state Kendall spent over two years constructing K1 (two and a half years to hand-assemble) at prohibitive cost.'
          },
          {
            id: 'cd_reading_p24_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Thomas Earnshaw lowered chronometer costs partly by abandoning Harrison\'s expensive diamond pallets and remontoire spring governor.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D states Earnshaw dropped intricate diamond pallets and finicky remontoires while perfecting the spring detent escapement.'
          },
          {
            id: 'cd_reading_p24_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Captain James Cook dismissed Larcum Kendall\'s watch inside Admiralty logs after Antarctic cold stopped its gears.',
            correctAnswer: 'NO',
            explanation: 'Paragraph C reports K1 performed faultlessly across Antarctic pack ice, earning Cook\'s praise as "our trusty friend the Watch."'
          },
          {
            id: 'cd_reading_p24_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'King George III later presented Kendall\'s K1 watch as a royal gift to France\'s Paris Observatory.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph F describes King George III testing Harrison\'s H5 at Kew Observatory with no gift of K1 to Paris mentioned.'
          },
          {
            id: 'cd_reading_p24_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why did the Board of Longitude hesitate to award Harrison the full twenty-thousand-pound bounty immediately after HMS Deptford returned?',
            options: [
              'A. H4 lost nearly twenty minutes during tropical Atlantic crossings',
              'B. Parliament repealed the 1714 Longitude Act immediately after King George III inspected H5',
              'C. Captain Cook\'s voyages had already proved wooden watches failed in Pacific gales',
              'D. Statutory rules demanded a broadly reproducible, practical naval solution whereas H4 was an intricate costly one-off without shared plans'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraphs A–B explain the Act required a generally practicable sea method, yet H4 cost £450, took 3 years of artistry, and lacked submitted blueprints.'
          },
          {
            id: 'cd_reading_p24_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How did John Arnold and Thomas Earnshaw make chronometers commercially viable for British merchant ships?',
            options: [
              'A. Substituting Caribbean lignum vitae wood for expensive silver pocket cases',
              'B. Simplifying escapement and balance designs to cut assembly time from years to weeks and halve prices',
              'C. Installing telegraph wires inside ship masts to bypass spring mechanics',
              'D. Eliminating temperature-compensation balances completely from European watches'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D explains Earnshaw\'s spring detent escapement and split bimetallic balances slashed labor from years to weeks and halved wholesale prices.'
          },
          {
            id: 'cd_reading_p24_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What broader historical legacy does Paragraph F trace back to Harrison\'s mechanical breakthrough?',
            options: [
              'A. Complete disappearance of astronomical tables before 1780',
              'B. Awarding John Harrison twenty thousand pounds intact immediately in 1765',
              'C. Replacement of royal observatories with Barrow-upon-Humber clock guilds',
              'D. British chronometer dominance helping standardize global Greenwich time prior to ocean telegraph cables'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F notes Harrison seeded Britain\'s marine chronometer monopoly and global Greenwich time standardization long before telegraph cables.'
          },
          {
            id: 'cd_reading_p24_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Before Parliament intervened in 1765, Harrison\'s H4 watch cost nearly as much as building a small ______.',
            correctAnswer: 'SAILING SCHOONER',
            explanation: 'Paragraph B states H4 cost £450, rivaling a small sailing schooner\'s hull price.'
          },
          {
            id: 'cd_reading_p24_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'King George III personally inspected Harrison\'s fifth marine clock at ______ prior to Parliament\'s final 1773 grant.',
            correctAnswer: 'KEW OBSERVATORY',
            explanation: 'Paragraph F specifies King George III tested H5 personally at Kew Observatory.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // TEST 25 (VERY DIFFICULT): cd_reading_p25 (Urban Heat Islands and Microclimate Reflective Pavements)
  // =========================================================================
  buildAcademicReadingTest({
    id: 'cd_reading_p25',
    testNumber: 25,
    testType: 'practice',
    title: 'CD-IELTS Practice 25: Urban Heat Islands and Microclimate Reflective Pavements',
    description:
      'Advanced (Very Difficult) CD-IELTS Academic Reading test featuring 40 analytical questions across three long academic passages on urban canyon thermodynamics, cool-pavement pedestrian thermal backlash, and green-gray microclimate integration.',
    passages: [
      {
        passageNumber: 1,
        title: 'Passage 1: Surface Energy Budgets, Urban Canyons, and Nocturnal Thermal Retention',
        subtitle: 'Dissecting why dark asphalt cities heat unevenly between sunlit noon hours and humid midnight streets',
        text: `Paragraph A: First documented quantitatively by London chemist Luke Howard during the early 1810s, the Urban Heat Island (UHI) effect—where densely built metropolitan centers consistently register warmer air and surface temperatures than surrounding rural pastures—has intensified sharply into a critical twenty-first-century public-health threat. Far from a uniform blanket lifting city thermometers identically across twenty-four hours, urban microclimatology reveals stark diurnal asymmetry: while daytime surface skin temperatures atop sunlit dark rooftops can soar thirty degrees Celsius above rural grass meadows, canopy-layer urban air temperatures typically diverge most dramatically several hours after sunset on calm, cloudless summer nights.

Paragraph B: Explaining nocturnal UHI persistence requires auditing four interlocking urban thermodynamic alterations rather than blaming furnace exhaust alone. Foremost is solar albedo depression: conventional dark asphalt street paving and coal-tar flat roofing possess low reflectivity (albedo between 0.05 and 0.15), absorbing eighty-five to ninety-five percent of incoming shortwave solar irradiance rather than bouncing radiation skyward like pale rural limestone or vegetated soil. Because dense granite curbstones, poured concrete walls, and multi-layer asphalt slabs possess immense volumetric thermal inertia, daytime energy penetrates deeply into masonry matrices before radiating slowly outward as longwave infrared heat all night.

Paragraph C: Compounding thermal storage, soaring urban geometry traps escaping infrared energy inside narrow street "urban canyons." Across open flat countryside, cooling farmland soil radiates longwave thermal photons unimpeded straight toward cold black night skies—measured geometrically as a Sky View Factor (SVF) near 1.0. Inside tight Manhattan or Hong Kong high-rise corridors where SVF drops below 0.3, infrared photons emitted by cooling pavement strike opposing brick facades and glass towers repeatedly, locking radiant heat inside stagnant street-level boundary air. Simultaneously, tall building walls impose fierce aerodynamic friction—slashing nocturnal cooling breeze speeds compared with neighboring wind-swept farms.

Paragraph D: Equally decisive is hydrological stripping of evaporative cooling. Natural tree-lined meadows divert roughly forty to sixty percent of absorbed solar heat cleanly into latent heat of evapotranspiration—silently converting liquid soil water into cool invisible water vapor through leafy stomata without raising air temperature. Conversely, storm-sewered impermeable city pavements shunt summer thundershowers instantaneously underground, forcing virtually all retained solar radiation back upward as scorching dry "sensible heat" that drives indoor air-conditioning compressors harder.

Paragraph E: Anthropogenic waste heat further reinforces late-evening heat loops. As residents switch on residential air conditioners inside poorly insulated concrete apartments, exterior condenser units exhaust both removed indoor heat and compressor motor waste warmth straight out into stifling alleyways—raising ambient street temperatures outside open neighboring windows by up to one point five degrees Celsius during heatwaves and trapping unairconditioned households in spiraling physiological stress.

Paragraph F: Crucially, public health epidemiology highlights that nocturnal minimum temperatures—rather than dramatic daytime thermometer records—govern urban heatstroke mortality most fiercely. When dense masonry apartments fail to drop below twenty-six degrees Celsius overnight, human cardiovascular systems cannot shed accumulated daytime thermal strain during sleep, explaining why dense low-income inner districts experience steep excess nocturnal mortality during prolonged summer blocking highs.`,
        questions: [
          {
            id: 'cd_reading_p25_q1',
            number: 1,
            type: 'true_false_not_given',
            questionText: 'Urban air-temperature differences relative to surrounding countryside generally peak shortly after midday solar maximum.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states canopy-layer urban air temperatures diverge most dramatically several hours after sunset on calm cloudless nights.'
          },
          {
            id: 'cd_reading_p25_q2',
            number: 2,
            type: 'true_false_not_given',
            questionText: 'Conventional dark asphalt streets typically absorb more than four-fifths of incoming solar radiation.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states asphalt and coal-tar roofs possess low albedo (0.05–0.15), absorbing 85% to 95% of incoming shortwave solar irradiance.'
          },
          {
            id: 'cd_reading_p25_q3',
            number: 3,
            type: 'true_false_not_given',
            questionText: 'Narrow corridors framed by towering skyscrapers speed up overnight street breezes relative to open rural pastures.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states tall building walls impose fierce aerodynamic friction, slashing nocturnal cooling breeze speeds compared with open farms.'
          },
          {
            id: 'cd_reading_p25_q4',
            number: 4,
            type: 'true_false_not_given',
            questionText: 'Storm-drained impermeable city paving prevents rainfall from helping cool urban streets through natural evapotranspiration.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D explains sewers shunt rain underground, eliminating latent evapotranspiration and forcing solar energy into scorching dry sensible heat.'
          },
          {
            id: 'cd_reading_p25_q5',
            number: 5,
            type: 'true_false_not_given',
            questionText: 'Afternoon daytime peak temperatures predict summer heatwave death rates more strongly than lingering warm overnight lows.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph F specifies nocturnal minimum temperatures—rather than dramatic daytime peaks—govern urban heatstroke mortality most fiercely.'
          },
          {
            id: 'cd_reading_p25_q6',
            number: 6,
            type: 'true_false_not_given',
            questionText: 'Luke Howard originally mapped London\'s 1810s heat island using motorized hydrogen weather balloons.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph A credits Luke Howard with documenting UHI in the early 1810s without mentioning hydrogen balloons.'
          },
          {
            id: 'cd_reading_p25_q7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why does a low Sky View Factor (SVF) inside dense downtown street canyons slow nighttime city cooling in Paragraph C?',
            options: [
              'A. Narrow streets block midday sunlight from touching asphalt completely',
              'B. Open skyscrapers increase latent soil evaporation inside storm drains',
              'C. Surrounding tall facades intercept escaping infrared radiation and slow natural wind ventilation',
              'D. Glass towers reflect ninety-five percent of midnight starlight back onto masonry'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph C notes low SVF (<0.3) traps infrared heat bouncing repeatedly between opposing facades while building walls suppress wind speeds.'
          },
          {
            id: 'cd_reading_p25_q8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How does residential air-conditioning use worsen thermal hazard for neighboring residents without cooling units in Paragraph E?',
            options: [
              'A. Indoor thermostats draw cool breezes inward away from public green parks',
              'B. Exterior condenser fans expel extracted indoor warmth plus motor heat into surrounding narrow alleyways',
              'C. Concrete wall insulation traps rainwater inside basement storm drains',
              'D. Power-plant cooling towers block nocturnal Sky View Factors across downtown avenues'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph E explains exterior condenser units exhaust removed heat and compressor waste warmth straight into alleyways, raising neighboring street air up to 1.5°C.'
          },
          {
            id: 'cd_reading_p25_q9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why do leafy meadows remain cooler than concrete parking lots under identical sunshine in Paragraph D?',
            options: [
              'A. Tree leaves possess higher volumetric thermal inertia than poured concrete',
              'B. Vegetated roots push storm runoff rapidly down into subterranean stone conduits',
              'C. Leafy vegetation consumes roughly half of solar input converting liquid moisture into water vapor silently',
              'D. Grass blades maintain an albedo exceeding 0.90 throughout summer afternoons'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph D states meadows divert 40–60% of absorbed solar energy into latent evapotranspiration vapor without elevating air temperatures.'
          },
          {
            id: 'cd_reading_p25_q10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Slowly warming masonry and street asphalt retain daytime warmth through substantial volumetric ______ before releasing it overnight.',
            correctAnswer: 'THERMAL INERTIA',
            explanation: 'Paragraph B specifies immense volumetric thermal inertia.'
          },
          {
            id: 'cd_reading_p25_q11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Removing moist vegetation turns city surfaces into generators of dry ______ rather than evaporative coolness.',
            correctAnswer: 'SENSIBLE HEAT',
            explanation: 'Paragraph D notes impermeable pavements force retained solar radiation back upward as dry "sensible heat."'
          },
          {
            id: 'cd_reading_p25_q12',
            number: 12,
            type: 'short_answer',
            questionText: 'Up to how many degrees Celsius hotter can sunlit dark roofs become compared with nearby grassy countryside?',
            correctAnswer: 'THIRTY DEGREES',
            explanation: 'Paragraph A states daytime surface skin temperatures atop sunlit dark rooftops can soar thirty degrees Celsius above rural meadows.'
          },
          {
            id: 'cd_reading_p25_q13',
            number: 13,
            type: 'short_answer',
            questionText: 'Through which microscopic leaf pores do vegetated fields vent cooling moisture vapor?',
            correctAnswer: 'LEAFY STOMATA',
            explanation: 'Paragraph D mentions converting liquid soil water into cool vapor through leafy stomata.'
          }
        ]
      },
      {
        passageNumber: 2,
        title: 'Passage 2: Cool Pavements and the Unintended Glare Paradox for Pedestrians',
        subtitle: 'Why raising street reflectivity often lowers asphalt thermometer readings while roasting walkers overhead',
        text: `Paragraph A: Seeking rapid, scalable heat-island relief across sun-baked avenues lacking planting space for tall shade trees, municipal transportation bureaus in Los Angeles, Phoenix, Athens, and Tokyo enthusiastically rolled out "cool pavements" throughout the late 2010s. Substituting pale titanium-dioxide acrylic sealcoats, light limestone aggregate chip-seals, or bleached concrete washes over black asphalt increases roadway albedo cleanly from 0.08 up toward 0.35 or 0.45—prompting headlines celebrating twenty-degree pavement surface drops visible sharply on satellite thermal infrared cameras.

Paragraph B: Yet thermal-comfort field measurements conducted precisely at street-level human chest height soon exposed a startling microclimatic paradox—one missed entirely by satellite scans looking downward from space. While high-albedo white sealants unquestionably cool asphalt surface skin by reflecting incoming sunlight away rather than storing heat inside dark bitumen, all that bounced shortwave sunlight has to go somewhere. Inside unshaded desert boulevards, gleaming pale road coatings bounce intense visible and ultraviolet photons directly upward onto passing pedestrians' legs, torsos, and eyes, alongside adjacent ground-floor glass storefronts.

Paragraph C: To quantify real biological strain felt by city walkers accurately, urban biometeorologists measure "Mean Radiant Temperature" (MRT)—the aggregate radiative load striking a standing human body from sun overhead, glowing hot sidewalks below, and baking brick walls alongside—rather than shaded air temperature alone. Controlled pedestrian experiments along coated Phoenix residential loops led by Ariane Middel revealed that midday MRT standing atop reflective cool-pavement sealcoats actually spiked roughly four degrees Celsius HIGHER than over conventional black asphalt! Even though shielded air thermometers hovered marginally cooler by half a degree, pedestrians walking over sunlit white paint absorbed significantly heavier net radiative stress alongside painful optical glare.

Paragraph D: Equally troubling, reflective pavement photons frequently warm adjacent buildings inadvertently. When bright street lanes reflect shortwave sunshine directly against unshaded brick apartment facades and single-pane ground-floor shop windows, indoor solar heat gain rises noticeably—driving up cooling electricity consumption inside lower stories unless horizontal window overhangs shield interior rooms cleanly.

Paragraph E: Aging street traffic quickly erodes optical gains further. Within twelve to eighteen months of heavy automobile tire soot, dripping engine oil smears, and dusty summer grime, freshly painted pale road surfaces darken back toward weathered gray—slashing initial solar reflectivity nearly in half unless city crews schedule expensive high-pressure street washing that wastes scarce desert drinking water.

Paragraph F: Crucially, cool-roof coatings painted atop unobstructed flat warehouse and apartment roofs avoid pedestrian rebound pitfalls almost completely: bouncing solar photons upward from unobstructed fifth-story parapets vents excess radiation straight back toward open atmosphere with zero nearby sidewalks or facing storefronts to cook—making cool roofs dramatically cleaner microclimate winners than exposed unshaded cool streets.

Paragraph G: Consequently, urban physicists now sharply separate horizontal sky-facing roof surfaces from vertical street-level canyon pavements, advising municipalities never to paint narrow unshaded pedestrian streets bright white without pairing surfaces directly beneath cooling tree canopies.`,
        questions: [
          {
            id: 'cd_reading_p25_q14',
            number: 14,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph A:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'i',
            explanation: 'Paragraph A introduces cool-pavement sealcoats raising albedo and cutting satellite-measured asphalt skin temperatures.'
          },
          {
            id: 'cd_reading_p25_q15',
            number: 15,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph B:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'vii',
            explanation: 'Paragraph B explains satellite infrared views miss upward bounced shortwave and UV light hitting pedestrians and storefronts.'
          },
          {
            id: 'cd_reading_p25_q16',
            number: 16,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph C:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'v',
            explanation: 'Paragraph C cites Middel\'s Phoenix Mean Radiant Temperature experiments showing midday heat stress jumped 4°C higher over white coatings.'
          },
          {
            id: 'cd_reading_p25_q17',
            number: 17,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph D:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'iv',
            explanation: 'Paragraph D notes light bounced onto unshaded walls and single-pane windows drives up ground-floor cooling energy bills.'
          },
          {
            id: 'cd_reading_p25_q18',
            number: 18,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph E:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'iii',
            explanation: 'Paragraph E shows tire soot, oil smears, and grime slash reflectivity nearly in half within 12–18 months.'
          },
          {
            id: 'cd_reading_p25_q19',
            number: 19,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph F:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'vi',
            explanation: 'Paragraph F contrasts unobstructed fifth-story cool roofs venting sunlight straight to sky without roasting pedestrians or lower facades.'
          },
          {
            id: 'cd_reading_p25_q20',
            number: 20,
            type: 'matching_headings',
            questionText: 'Choose the correct heading for Paragraph G:',
            options: [
              'i. High-albedo road coatings win headlines by dropping measured asphalt skin temperatures',
              'ii. Separating exposed rooftops from street-level sidewalks in city cooling policy',
              'iii. Why tire grime and oil wash away reflective benefits within eighteen months',
              'iv. Reflected street sunshine penetrates nearby windows and inflates indoor cooling loads',
              'v. Measuring combined body radiation reveals walkers can actually feel hotter over white roads',
              'vi. Why elevated flat roofs avoid horizontal rebound penalties suffered at sidewalk height',
              'vii. Satellite scans overlook upward reflected sunshine striking walkers below',
              'viii. Banning dark limestone curbs across Los Angeles residential blocks'
            ],
            correctAnswer: 'ii',
            explanation: 'Paragraph G advises cities to distinguish open rooftops from narrow unshaded pedestrian streets unless paired with tree canopy shade.'
          },
          {
            id: 'cd_reading_p25_q21',
            number: 21,
            type: 'summary_completion',
            questionText: 'Municipal crews spread pale ______ coatings to elevate dark asphalt albedo toward 0.45.',
            correctAnswer: 'TITANIUM-DIOXIDE',
            explanation: 'Paragraph A notes substituting pale titanium-dioxide acrylic sealcoats or limestone chip-seals.'
          },
          {
            id: 'cd_reading_p25_q22',
            number: 22,
            type: 'summary_completion',
            questionText: 'Comprehensive human thermal strain indices track Mean ______ combining sun glare, glowing brick walls, and pavement rebound.',
            correctAnswer: 'RADIANT TEMPERATURE',
            explanation: 'Paragraph C defines Mean Radiant Temperature (MRT), summing direct sunlight, infrared emissions, and upward reflection.'
          },
          {
            id: 'cd_reading_p25_q23',
            number: 23,
            type: 'summary_completion',
            questionText: 'Automobile exhaust grime and leaking ______ darken pale streets noticeably inside eighteen months.',
            correctAnswer: 'ENGINE OIL',
            explanation: 'Paragraph E cites tire soot, dripping engine oil smears, and summer grime.'
          },
          {
            id: 'cd_reading_p25_q24',
            number: 24,
            type: 'summary_completion',
            questionText: 'Cleaning pale pavements rapidly wastes scarce municipal ______ across arid desert cities.',
            correctAnswer: 'DRINKING WATER',
            explanation: 'Paragraph E warns high-pressure washing wastes scarce desert drinking water.'
          },
          {
            id: 'cd_reading_p25_q25',
            number: 25,
            type: 'multiple_choice',
            questionText: 'Why did Phoenix residents walking across reflective pale roads suffer higher net midday heat stress despite slightly cooler air temperatures in Paragraph C?',
            options: [
              'A. Upward bounced visible and ultraviolet radiation struck bodies directly, elevating Mean Radiant Temperature by four degrees',
              'B. Pale acrylic sealants emit extra infrared heat overnight',
              'C. Air thermometers stood five stories above residential loops',
              'D. Cool pavements halted nearby residential air-conditioning fans completely'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraphs B–C explain reflected shortwave/UV photons hit pedestrians directly, pushing MRT ~4°C higher even while air temperature dipped 0.5°C.'
          },
          {
            id: 'cd_reading_p25_q26',
            number: 26,
            type: 'multiple_choice',
            questionText: 'Why do urban climate researchers strongly prefer cool-roof paint over unshaded cool-street sealants in Paragraph F and G?',
            options: [
              'A. Fifth-story rooftops accumulate heavy automobile tire soot far slower than alleys',
              'B. Sidewalk trees cannot survive anywhere near pale acrylic warehouse seals',
              'C. Rooftop titanium paint absorbs summer rainstorms directly into apartment walls',
              'D. Elevated flat roofs bounce solar light unimpeded back to space without heating pedestrians or storefront windows'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F explains unobstructed flat rooftops bounce radiation straight toward open atmosphere with zero sidewalks or facing storefronts to heat.'
          }
        ]
      },
      {
        passageNumber: 3,
        title: 'Passage 3: Blue-Green Canopies, Permeable Sponges, and Climate-Justice Retrofits',
        subtitle: 'Weighing structural urban forestry and porous street engineering against maintenance bottlenecks',
        text: `Paragraph A: Disillusioned by unexpected thermal rebound from paint-only quick fixes, contemporary urban climatology champions integrated "blue-green" infrastructure—weaving deep-rooted deciduous street trees, sunken vegetated bioswales, and water-retaining permeable stone pavers directly into metropolitan transport arteries. Unlike high-albedo chemical paint that simply redirects incoming photons onto surrounding bodies, living foliage intercepts solar radiation aloft before rays ever hit ground concrete, absorbing photons into woody photosynthesis and cool water transpiration while casting welcome deep shade underneath.

Paragraph B: Empirical thermal mapping across Melbourne, Singapore, and Madrid quantifies how radically tree canopies outperform pale paint on pedestrian comfort. Beneath mature interlocking elm and plane-tree street avenues, daytime surface asphalt cools by fifteen to twenty degrees Celsius while pedestrian Mean Radiant Temperature plunges simultaneously by twelve to eighteen degrees—transforming lethal afternoon walking corridors into genuinely tolerable shaded microclimates even when regional air thermometers top forty degrees.

Paragraph C: Pairing overhead shade trees with "permeable interlocking concrete pavements" (PICPs) amplifies cooling beyond midday hours. Engineered with wide gravel-filled spacer joints resting atop crushed granite storm beds rather than solid poured slab concrete, porous block walkways drink heavy summer cloudbursts directly downward—nourishing deep tree roots during arid spells while preserving wet sub-base moisture that slowly evaporates upward across hot afternoons.

Paragraph D: Yet idealistic urban forestry targets routinely collide violently with cramped subsurface utility labyrinths and stark municipal economics. Digging street-tree pits beneath historic downtown sidewalks confronts dense tangles of high-voltage fiber conduits, pressurized gas mains, and fiber-optic cables that restrict soil root volumes to suffocating concrete coffins—stunting street saplings within five years unless engineers install expensive structural load-bearing soil cells. Equally sobering, irrigated mature street trees demand substantial summer freshwater during droughts; if parched city parks shut off irrigation sprinklers during multi-year dry emergencies, stressed dry canopies close leaf stomata abruptly, dropping cooling transpiration straight to zero precisely when extreme heat spikes hit hardest.

Paragraph E: Compounding ecological limits is stark geographic inequity often labeled "thermal injustice." High-resolution urban heat maps across North American and European metropolises reveal stark neighborhood disparities: leafy affluent suburbs enjoy thirty to forty percent canopy cover alongside cool shaded parks, whereas densely paved working-class quarters—shaped historically by discriminatory zoning, highway cuts, and scarce municipal park budgets—endure sparse five-percent shade cover and six-degree warmer summer nights.

Paragraph F: Effective climate adaptation therefore refuses simple universal recipes. Sustainable cities combine unobstructed white cool roofs above industrial warehouses, targeted deciduous tree-pit soil cells watered with harvested storm runoff along transit corridors, and emergency shaded municipal cooling hubs in under-treed working-class blocks—recognizing urban heat resilience as simultaneously an engineering puzzle and a civic equity priority.`,
        questions: [
          {
            id: 'cd_reading_p25_q27',
            number: 27,
            type: 'matching_information',
            questionText: 'Which paragraph demonstrates that tree-lined streets reduce both ground asphalt heat and pedestrian body radiation load simultaneously?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'B',
            explanation: 'Paragraph B quantifies Melbourne, Singapore, and Madrid canopy streets cutting asphalt heat 15–20°C and pedestrian MRT 12–18°C simultaneously.'
          },
          {
            id: 'cd_reading_p25_q28',
            number: 28,
            type: 'matching_information',
            questionText: 'Which paragraph outlines underground engineering and water-scarcity barriers undermining urban tree cooling during droughts?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'D',
            explanation: 'Paragraph D warns buried cables/pipes suffocate roots without structural soil cells, and drought sprinkler cuts close stomata, dropping transpiration to zero.'
          },
          {
            id: 'cd_reading_p25_q29',
            number: 29,
            type: 'matching_information',
            questionText: 'Which paragraph links historical urban zoning and highway placement to dramatic canopy disparities between rich and poor blocks?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'E',
            explanation: 'Paragraph E traces 30–40% vs 5% canopy inequities ("thermal injustice") to historical discriminatory zoning, highway cuts, and park funding gaps.'
          },
          {
            id: 'cd_reading_p25_q30',
            number: 30,
            type: 'matching_information',
            questionText: 'Which paragraph explains how open-joint stone walkways replenish underground root moisture while absorbing storm cloudbursts?',
            options: ['A. Paragraph A', 'B. Paragraph B', 'C. Paragraph C', 'D. Paragraph D', 'E. Paragraph E', 'F. Paragraph F'],
            correctAnswer: 'C',
            explanation: 'Paragraph C describes permeable interlocking concrete pavements (PICPs) drinking storms through gravel joints to feed roots and afternoon evaporation.'
          },
          {
            id: 'cd_reading_p25_q31',
            number: 31,
            type: 'yes_no_not_given',
            questionText: 'Street trees outperform pale sealants partly because leaves intercept sunlight overhead before radiation warms ground paving.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states foliage intercepts solar radiation aloft before rays hit concrete, channeling energy into photosynthesis and transpiration while shading below.'
          },
          {
            id: 'cd_reading_p25_q32',
            number: 32,
            type: 'yes_no_not_given',
            questionText: 'Thirsty urban street trees continue cooling surrounding street air through leafy evaporation even during strict drought sprinkler shutoffs.',
            correctAnswer: 'NO',
            explanation: 'Paragraph D states parched trees close leaf stomata abruptly during drought sprinkler shutoffs, dropping cooling transpiration straight to zero.'
          },
          {
            id: 'cd_reading_p25_q33',
            number: 33,
            type: 'yes_no_not_given',
            questionText: 'Affluent suburbs routinely show higher nocturnal summer temperatures than densely paved working-class urban corridors.',
            correctAnswer: 'NO',
            explanation: 'Paragraph E reports working-class districts with 5% shade endure six-degree warmer summer nights than leafy 30–40% canopy suburbs.'
          },
          {
            id: 'cd_reading_p25_q34',
            number: 34,
            type: 'yes_no_not_given',
            questionText: 'Singapore municipal ordinances outlawed solid poured concrete driveways across every private home in 2021.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph B cites Singapore empirical canopy mapping; no 2021 Singapore residential driveway ban appears.'
          },
          {
            id: 'cd_reading_p25_q35',
            number: 35,
            type: 'yes_no_not_given',
            questionText: 'Load-bearing structural soil cells allow urban tree roots to expand safely beneath busy paved sidewalks.',
            correctAnswer: 'YES',
            explanation: 'Paragraph D notes stunted saplings survive only when engineers install expensive structural load-bearing soil cells beneath crowded cables.'
          },
          {
            id: 'cd_reading_p25_q36',
            number: 36,
            type: 'multiple_choice',
            questionText: 'Why do severe prolonged droughts threaten tree-cooling strategies precisely when heatwaves turn deadliest in Paragraph D?',
            options: [
              'A. Dry tree trunks ignite spontaneously beside permeable stone driveways',
              'B. Emergency irrigation cutoffs cause water-stressed leaves to seal stomata, halting evaporative cooling',
              'C. Subsurface fiber-optic lines absorb moisture away from crushed granite beds',
              'D. Mature elm canopies flip white undersides upward, blinding street pedestrians'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D explains that when cities cut irrigation in dry emergencies, stressed trees close stomata abruptly, dropping transpiration cooling to zero.'
          },
          {
            id: 'cd_reading_p25_q37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'How does Paragraph F reconcile reflective roofs, permeable canopies, and public cooling shelters?',
            options: [
              'A. By abandoning expensive permeable pavers solely in favor of downtown white paint',
              'B. By burying high-voltage cables inside shallow storm bioswales',
              'C. By tearing down working-class concrete flats to plant suburban grass meadows',
              'D. By deploying complementary toolkits—open warehouse cool roofs, runoff-fed shade corridors, and cooling hubs in neglected districts'
            ],
            correctAnswer: 'D',
            explanation: 'Paragraph F advocates combining unobstructed warehouse cool roofs, runoff-watered tree soil cells, and emergency cooling hubs in low-canopy working-class blocks.'
          },
          {
            id: 'cd_reading_p25_q38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What distinguishes Madrid and Melbourne street trees from Phoenix white-coated asphalt loops across Passages 2 and 3?',
            options: [
              'A. Tree canopies slash pedestrian Mean Radiant Temperature dramatically rather than raising radiative heat load',
              'B. Madrid elm trees raise asphalt skin temperatures while lowering surrounding air',
              'C. Phoenix cool seals reduce pedestrian heat load by eighteen degrees Celsius at noon',
              'D. Mature street trees eliminate all summer water use across hot cities'
            ],
            correctAnswer: 'A',
            explanation: 'Passage 2 Paragraph C showed white sealcoats spiked pedestrian MRT +4°C, whereas Passage 3 Paragraph B shows tree canopies slash MRT by 12–18°C.'
          },
          {
            id: 'cd_reading_p25_q39',
            number: 39,
            type: 'summary_completion',
            questionText: 'Replacing solid slabs with porous ______ lets summer cloudbursts soak straight down toward thirsty street roots.',
            correctAnswer: 'BLOCK WALKWAYS',
            explanation: 'Paragraph C states porous block walkways drink heavy summer cloudbursts directly downward to nourish deep roots.'
          },
          {
            id: 'cd_reading_p25_q40',
            number: 40,
            type: 'summary_completion',
            questionText: 'Historic zoning disparities leave poorer city neighborhoods enduring six-degree hotter nights in a pattern termed ______.',
            correctAnswer: 'THERMAL INJUSTICE',
            explanation: 'Paragraph E labels these stark neighborhood heat disparities "thermal injustice."'
          }
        ]
      }
    ]
  })
];
