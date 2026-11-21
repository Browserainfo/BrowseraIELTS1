/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TestItem } from '../../../types';
import { buildListeningTest } from './helpers';

export const LISTENING_BATCH_03: TestItem[] = [
  // =========================================================================
  // PRACTICE 11: Local Heritage Museum Exhibition & Audio Guide
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p11',
    testNumber: 11,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 11: Local Heritage Museum Exhibition & Audio Guide',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Local Heritage Museum Exhibition & Audio Guide.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Heritage Museum Group Exhibition Inquiry',
        audioScenario:
          'A school history teacher phones the Town Heritage Museum front desk to reserve tickets and audio handsets for a weekend textile gallery visit.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Heritage Museum Booking Desk]
Receptionist: Good morning, Mercer Town Heritage Museum, Tariq speaking. How may I assist you?
Visitor: Hello Tariq, I would like to reserve exhibition passes and audio guides for a visiting adult adult-learning history club next weekend.
Receptionist: [[Q1]] Certainly. Could I start by taking your family name for the booking folio? Yes, it is Pendelton, spelled P-E-N-D-E-L-T-O-N.
Receptionist: [[Q2]] Got that. You are booking for the Weaving & Industrial Looms special showcase—adult concession tickets cost nine pounds fifty when bought as a group of ten or more.
Visitor: Wait—two attendees are blind and need sensory-tactile tours. Does your museum provide specialized headsets?
Receptionist: [[Q3]] Yes, our tactile audio descriptions come preloaded on yellow handsets free of charge, alongside raised-line relief booklets at no extra cost.
Visitor: [[Q4]] Wonderful. When is the last timed entry slot permitted on Sunday afternoons? Last exhibition admission enters promptly at 15:45 before galleries close at five.
Visitor: [[Q5]] Should we pick up our paper tickets at the West Cloister desk or the main marble rotunda? Please bring your reference email straight to Desk Two inside the main rotunda.
Visitor: [[Q6]] Are camera flashes allowed inside the historic wool-dyeing tapestries wing? Non-flash smartphone photographs are fine for personal use, though tripods and flashes remain banned to protect natural vegetable dyes.
Receptionist: [[Q7]] If any group members prefer sitting partway through the galleries, foldable lightweight stools hang on steel racks inside every corner archway.
Visitor: [[Q8]] Do you offer reserved café tables for a fifteen-person cream tea after the tour? Yes, the Courtyard Tearoom holds afternoon slots if booked by Wednesday midday—note they serve everything on vintage bone china.
Receptionist: [[Q9]] One gentle reminder: heavy umbrella stands sit inside the stone porch because damp umbrellas cannot be carried near exposed wooden spinning frames.
Visitor: [[Q10]] Thanks so much! What payment method covers the group deposit today? You can pay by corporate debit card over our secure phone terminal or request an electronic council invoice quoting HM-309.`,
        questions: [
          {
            id: 'cd_listening_p11_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Booking contact surname: ______',
            correctAnswer: 'PENDELTON',
            explanation: 'Spelled P-E-N-D-E-L-T-O-N.'
          },
          {
            id: 'cd_listening_p11_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Theme of special showcase: Weaving and Industrial ______',
            correctAnswer: 'LOOMS',
            explanation: 'Weaving & Industrial Looms showcase.'
          },
          {
            id: 'cd_listening_p11_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Colour of audio handsets carrying tactile descriptions: ______',
            correctAnswer: 'YELLOW',
            explanation: 'Tactile descriptions are loaded on yellow handsets.'
          },
          {
            id: 'cd_listening_p11_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Final timed exhibition entry slot on Sunday afternoon:',
            correctAnswer: '15:45',
            explanation: 'Last admission enters at 15:45.'
          },
          {
            id: 'cd_listening_p11_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Desk number inside the main rotunda for group ticket collection: Desk ______',
            correctAnswer: 'TWO',
            explanation: 'Collect tickets at Desk Two in the main rotunda.'
          },
          {
            id: 'cd_listening_p11_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Which colorants on the tapestries are protected by banning camera flashes?',
            correctAnswer: 'VEGETABLE DYES',
            explanation: 'Bans protect fragile natural vegetable dyes.'
          },
          {
            id: 'cd_listening_p11_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Portable seating stored near every gallery archway: foldable ______',
            correctAnswer: 'STOOLS',
            explanation: 'Lightweight foldable stools hang on steel racks.'
          },
          {
            id: 'cd_listening_p11_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'By when must Courtyard Tearoom group reservations be finalized?',
            options: [
              'A. Tuesday evening',
              'B. Friday morning',
              'C. Thursday afternoon',
              'D. Wednesday midday'
            ],
            correctAnswer: 'D',
            explanation: 'Afternoon slots must be booked by Wednesday midday.'
          },
          {
            id: 'cd_listening_p11_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why must visitors leave damp umbrellas in the porch racks?',
            options: [
              'A. Marble gallery tiles become dangerously slippery',
              'B. Moisture threatens uncovered wooden spinning machinery',
              'C. Security scanners flag metal umbrella ribs',
              'D. Narrow doorways catch protruding frames'
            ],
            correctAnswer: 'B',
            explanation: 'Damp umbrellas cannot enter near exposed wooden spinning frames.'
          },
          {
            id: 'cd_listening_p11_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Reference code required on an electronic council invoice: ______',
            correctAnswer: 'HM-309',
            explanation: 'Quote reference HM-309 on the invoice.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Curating the Medieval Silver & Civic Guild Wing',
        audioScenario:
          'A museum curator introduces visitors to newly restored gallery halls, audio guide triggers, and family craft rooms.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Museum Foyer Welcome]
Curator: Welcome visitors to our newly refurbished East Cloister Wing, reopening today after a two-year climate-control upgrade!
Curator: [[Q11]] Your infrared audio guide wand switches tracks automatically whenever you step inside two metres of brass floor studs beside each oak pedestal.
Curator: [[Q12]] Inside Gallery One, examine our centerpiece silver civic mace hallmarked in 1588—surviving intact only because town bakers hid it inside flour barrels during siege unrest.
Curator: [[Q13]] Notice the pale charcoal felt lining inside modern display cabinets contains specialized sulfur-absorbing zinc mesh preventing silver plates from darkening.
Curator: [[Q14]] Turning into Room Three brings you face-to-face with merchant wax seals carved in bone and boxwood alongside genuine parchment dockyard ledgers.
Curator: [[Q15]] Overhead, blackened oak roof rafters reveal subtle scorch marks traced by conservation dendrochronologists to a bakehouse chimney fire in 1642.
Curator: [[Q16]] In the Children’s Craft Attic upstairs, volunteer printmakers help families ink simple woodblock coat-of-arms stamps every Saturday afternoon between one and four.
Curator: [[Q17]] Do not miss our listening alcove beneath the belfry stairs, playing authentic reconstructed cathedral bell chimes recorded on bronze replicas.
Curator: [[Q18]] Watch out on the spiral stone stairs leading back down toward the shop—seventeenth-century steps slope gently inward and hold worn shallow treads.
Curator: [[Q19]] If your audio headset battery indicator blinks amber halfway through Room Five, swap it instantly at the curator booth beside the glass lift.
Curator: [[Q20]] Before walking outside, check the illuminated stone sundial embedded inside the courtyard lawn—calibrated precisely for local solar noon!`,
        questions: [
          {
            id: 'cd_listening_p11_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Floor marker that triggers audio guide tracks automatically: brass ______',
            correctAnswer: 'STUDS',
            explanation: 'Wands trigger near brass floor studs beside each pedestal.'
          },
          {
            id: 'cd_listening_p11_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Where did town bakers conceal the 1588 silver civic mace during siege unrest?',
            correctAnswer: 'FLOUR BARRELS',
            explanation: 'Bakers hid it inside flour barrels.'
          },
          {
            id: 'cd_listening_p11_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Chemical element trapped by zinc cabinet mesh to keep silver shiny: ______',
            correctAnswer: 'SULFUR',
            explanation: 'Sulfur-absorbing zinc mesh stops silver darkening.'
          },
          {
            id: 'cd_listening_p11_lq14',
            number: 14,
            type: 'summary_completion',
            questionText: 'Room Three pairs parchment dockyard ledgers with merchant seals carved in bone and ______.',
            correctAnswer: 'BOXWOOD',
            explanation: 'Merchant seals were carved in bone and boxwood.'
          },
          {
            id: 'cd_listening_p11_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Cause of historic 1642 burn marks on oak rafters: ______ chimney fire',
            correctAnswer: 'BAKEHOUSE',
            explanation: 'Dendrochronologists traced burns to a 1642 bakehouse chimney fire.'
          },
          {
            id: 'cd_listening_p11_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'What activity runs for families on Saturday afternoons in the Craft Attic?',
            options: [
              'A. Inking woodblock coat-of-arms stamps',
              'B. Brass sword polishing demonstrations',
              'C. Medieval quill calligraphy workshops',
              'D. Clay pottery wheel sessions'
            ],
            correctAnswer: 'A',
            explanation: 'Volunteers help families ink woodblock coat-of-arms stamps.'
          },
          {
            id: 'cd_listening_p11_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Sound featured inside the listening alcove below the belfry stairs: bell ______',
            correctAnswer: 'CHIMES',
            explanation: 'Alcove plays reconstructed bell chimes.'
          },
          {
            id: 'cd_listening_p11_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Why does the curator issue a safety caution near the shop exit?',
            options: [
              'A. Fresh varnish is drying on gallery benches',
              'B. Courtyard cobblestones turn slick after sprinklers run',
              'C. Low oak doorframes require taller visitors to duck',
              'D. Seventeenth-century spiral stone steps slope with worn treads'
            ],
            correctAnswer: 'D',
            explanation: 'Old spiral stone steps slope inward and have worn shallow treads.'
          },
          {
            id: 'cd_listening_p11_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Which visual signal warns that an audio headset battery needs swapping?',
            correctAnswer: 'BLINKS AMBER',
            explanation: 'Swap handsets if the battery light blinks amber.'
          },
          {
            id: 'cd_listening_p11_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Historic courtyard garden feature calibrated to solar noon: stone ______',
            correctAnswer: 'SUNDIAL',
            explanation: 'Inspect the illuminated stone sundial in the lawn.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Designing Museum Audio Guides for Diverse Visitors',
        audioScenario:
          'Museum studies students Hannah and Vikram discuss eye-tracking and audio-tour usability trials with tutor Dr. Bell.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Heritage Interpretation Seminar]
Dr. Bell: Good afternoon Hannah and Vikram. What insights emerged from observing eighty museum visitors using digital audio guides?
Hannah: [[Q21]] Contrary to curator expectations, audio clips exceeding ninety seconds caused seventy percent of listeners to wander toward the next case before narration finished.
Vikram: [[Q22]] Short forty-five-second layered stops—letting curious visitors press "two" only if they wanted metallurgical detail—boosted completion rates dramatically.
Dr. Bell: Crisp pacing lesson! Did handheld wands perform differently than QR codes scanned on guests’ personal phones?
Hannah: [[Q23]] Surprisingly, phone QR codes scored lower because underground stone vaults blocked mobile cellular signal and visitors struggled typing Wi-Fi passwords in dim corridors.
Dr. Bell: Crucial infrastructure detail! How did you capture engagement objectively beyond post-visit satisfaction surveys?
Vikram: [[Q24]] We used discreet stopwatches at two gallery corners to record exhibit dwell duration alongside anonymized headset button-press logs.
Dr. Bell: [[Q25]] When interpreting child visitors’ trails, distinguish solitary school pupils following worksheets from relaxed family groups chatting aloud.
Hannah: [[Q26]] Good point—parents consistently paused audio tracks to read simpler wall labels aloud to seven-year-olds rather than sharing single earpieces.
Vikram: [[Q27]] Speaking of sound bleed, museum docents disliked open speakerphone settings along narrow medieval rooms because overlapping voices spoiled quiet atmosphere.
Dr. Bell: [[Q28]] Have you looked into bone-conduction headsets, leaving ears uncovered so friends talk normally while hearing narration? Vikram tested two prototypes yesterday and wants to propose a six-month museum loan pilot.
Hannah: [[Q29]] For our final exhibition design brief, should we include cost breakdowns for cleaning wipes and charging cradles too?
Dr. Bell: [[Q30]] Definitely add operational maintenance costs alongside script-writing hours, then circulate your executive recommendation deck before Tuesday’s board meeting.`,
        questions: [
          {
            id: 'cd_listening_p11_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Duration limit past which 70% of museum guests walked away early: ______ seconds',
            correctAnswer: 'NINETY',
            explanation: 'Clips over ninety seconds caused listeners to move on.'
          },
          {
            id: 'cd_listening_p11_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Optional deeper commentary topic unlocked by pressing key two: ______ detail',
            correctAnswer: 'METALLURGICAL',
            explanation: 'Pressing "two" gave optional metallurgical detail.'
          },
          {
            id: 'cd_listening_p11_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'Why did smartphone QR code guides frustrate museum visitors?',
            options: [
              'A. Printed QR ink faded beneath spotlights',
              'B. Battery drain shut phones off within twenty minutes',
              'C. Thick stone vaults blocked mobile signal and dim halls hindered Wi-Fi login',
              'D. Older lenses failed to focus behind glass cases'
            ],
            correctAnswer: 'C',
            explanation: 'Vaults blocked phone signal and dim rooms complicated Wi-Fi setup.'
          },
          {
            id: 'cd_listening_p11_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'Besides headset logs, what direct behavior metric did Vikram time quietly?',
            correctAnswer: 'DWELL DURATION',
            explanation: 'Vikram timed exhibit dwell duration.'
          },
          {
            id: 'cd_listening_p11_lq25',
            number: 25,
            type: 'fill_blank',
            questionText: 'Group type Dr. Bell distinguishes from worksheet-driven school pupils: ______ groups',
            correctAnswer: 'FAMILY',
            explanation: 'Distinguish worksheet pupils from family groups.'
          },
          {
            id: 'cd_listening_p11_lq26',
            number: 26,
            type: 'summary_completion',
            questionText: 'Parents paused handsets to read simple ______ labels aloud to younger children.',
            correctAnswer: 'WALL',
            explanation: 'Parents read simpler wall labels aloud to children.'
          },
          {
            id: 'cd_listening_p11_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'Why did docents object to loudspeaker mode on museum handsets?',
            options: [
              'A. Batteries ran flat twice as quickly',
              'B. Overlapping echo voices ruined calm medieval gallery atmosphere',
              'C. Sound vibrations loosened plaster moldings',
              'D. Foreign languages confused nearby tour groups'
            ],
            correctAnswer: 'B',
            explanation: 'Overlapping voices spoiled quiet atmosphere in narrow rooms.'
          },
          {
            id: 'cd_listening_p11_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Prototype audio gear leaving ears uncovered for companion conversation: ______ headsets',
            correctAnswer: 'BONE-CONDUCTION',
            explanation: 'Testing bone-conduction headsets for a pilot.'
          },
          {
            id: 'cd_listening_p11_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which two physical maintenance items will appear in the cost breakdown?',
            correctAnswer: 'CLEANING WIPES AND CHARGING CRADLES',
            explanation: 'Include cleaning wipes and charging cradles.'
          },
          {
            id: 'cd_listening_p11_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Deadline day to share the executive slide deck: ______',
            correctAnswer: 'TUESDAY',
            explanation: 'Circulate before Tuesday’s board meeting.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Acoustic Conservation inside Historic Exhibition Buildings',
        audioScenario:
          'A heritage preservation architect lectures on balancing visitor acoustics, humidity stability, and structural authenticity inside historic palaces converted into museums.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Heritage Museum Conservation]
Lecturer: Converting historic castles, banks, and railway halls into public museums poses an acute paradox: preserving silent stone grandeur without drowning visitors in deafening echoes.
Lecturer: [[Q31]] Bare limestone walls, vaulted ceilings, and parquet oak floors reflect sound waves repeatedly, pushing background chatter past seventy decibels whenever tour coaches arrive.
Lecturer: [[Q32]] Unlike modern multiplexes, conservation charters strictly prohibit gluing perforated plastic acoustic tiles across gilded cornices or medieval murals.
Lecturer: [[Q33]] Clever acoustic engineers therefore hide sound traps inside reversible upholstery—draping heavy woven tapestries over discreet mineral-wool frames inches clear of stone walls.
Lecturer: [[Q34]] Underneath visitor feet, unsealed lime-mortar galleries benefit from breathable hand-tufted sisal runners that soften heel clatter without trapping rising damp moisture.
Lecturer: [[Q35]] Microclimate preservation demands parallel vigilance: winter heating spikes can crack seventeenth-century oak altarpieces within forty-eight hours of low humidity.
Lecturer: [[Q36]] Consequently, modern heritage installations enclose fragile wood carvings inside buffered silica-brick micro-cases holding steady fifty percent relative humidity passively.
Lecturer: [[Q37]] Lighting poses an equally delicate equation: sunlight streams fade silk banners irreversibly, measured cumulatively as total annual lux-hours across seasons.
Lecturer: [[Q38]] Motion-activated ultraviolet-filtered LED spotlights now illuminate display alcoves only as visitors walk inside sensor range, slashing cumulative textile light damage by sixty percent.
Lecturer: [[Q39]] Equally transformative are hidden structural steel trusses slipped behind decorative plaster arches, allowing heavy bronze cannons to stand safely above timber joists.
Lecturer: [[Q40]] Ultimately, the finest conservation engineering stays completely invisible—leaving guests absorbed wholly in craft and story rather than environmental machinery.`,
        questions: [
          {
            id: 'cd_listening_p11_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Decibel level reached by echoed crowd chatter inside bare stone halls: ______ decibels',
            correctAnswer: 'SEVENTY',
            explanation: 'Reverberation drives noise past seventy decibels.'
          },
          {
            id: 'cd_listening_p11_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which decorative wall features prevent gluing modern plastic acoustic tiles?',
            correctAnswer: 'GILDED CORNICES',
            explanation: 'Charters forbid gluing tiles onto gilded cornices or murals.'
          },
          {
            id: 'cd_listening_p11_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Hidden sound-absorbing core mounted behind woven wall tapestries: ______ frames',
            correctAnswer: 'MINERAL-WOOL',
            explanation: 'Heavy tapestries drape over discreet mineral-wool frames.'
          },
          {
            id: 'cd_listening_p11_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'Why do heritage conservators install breathable sisal floor runners instead of rubber mats?',
            options: [
              'A. Sisal matches medieval silk tapestry patterns',
              'B. Sisal costs half as much to vacuum weekly',
              'C. Rubber sheets trigger static sparks near paintings',
              'D. Sisal quiets footsteps without sealing rising damp under stones'
            ],
            correctAnswer: 'D',
            explanation: 'Breathable sisal runners absorb heel clatter without trapping rising damp.'
          },
          {
            id: 'cd_listening_p11_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Climate defect capable of cracking antique oak panels rapidly: low ______',
            correctAnswer: 'HUMIDITY',
            explanation: 'Heating spikes trigger cracking through low humidity.'
          },
          {
            id: 'cd_listening_p11_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Passive micro-cases lined with buffered ______ stabilize wooden exhibits at 50% humidity.',
            correctAnswer: 'SILICA-BRICK',
            explanation: 'Buffered silica-brick micro-cases hold steady humidity passively.'
          },
          {
            id: 'cd_listening_p11_lq37',
            number: 37,
            type: 'short_answer',
            questionText: 'What unit measures seasonal cumulative fading damage on silk banners?',
            correctAnswer: 'LUX-HOURS',
            explanation: 'Damage is tracked as annual cumulative lux-hours.'
          },
          {
            id: 'cd_listening_p11_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'How much light damage can motion-activated filtered LED spotlights prevent?',
            options: [
              'A. Sixty percent',
              'B. Forty percent',
              'C. Twenty-five percent',
              'D. Eighty-five percent'
            ],
            correctAnswer: 'A',
            explanation: 'Motion sensors slash cumulative textile light damage by sixty percent.'
          },
          {
            id: 'cd_listening_p11_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Concealed reinforcement letting fragile timber floors carry heavy bronze cannons: steel ______',
            correctAnswer: 'TRUSSES',
            explanation: 'Hidden structural steel trusses reinforce old timber joists.'
          },
          {
            id: 'cd_listening_p11_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What marks successful museum conservation architecture in the speaker’s conclusion?',
            options: [
              'A. Prominent digital humidity gauges beside every painting',
              'B. Technical safeguards remaining wholly invisible to visitors',
              'C. Removing historical roofs in favor of modern glass domes',
              'D. Restricting weekly guest numbers to small scholarly tours'
            ],
            correctAnswer: 'B',
            explanation: 'The finest engineering stays completely invisible.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 12: Renewable Energy Conference Registration & Lodging
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p12',
    testNumber: 12,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 12: Renewable Energy Conference Registration & Lodging',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Renewable Energy Conference Registration & Lodging.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Delegate Registration & Lodging Confirmation',
        audioScenario:
          'A graduate engineering delegate telephones the Nordic Clean Energy Symposium Secretariat to finalize badge options and hotel allocation.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Conference Secretariat Desk]
Agent: Good afternoon, European Renewable Energy Symposium Secretariat, Anders speaking. How can I assist?
Delegate: Hello Anders, I submitted an abstract on offshore wind gearbox sensors and now need to finalize delegate tickets and accommodation.
Agent: [[Q1]] Glad to help. Could you confirm your surname for the speaker roster? Yes, it is Lindstrom, spelled L-I-N-D-S-T-R-O-M.
Agent: [[Q2]] Thank you, Ms. Lindstrom. Your presenter abstract cleared peer review, qualifying you for the Early-Bird Academic rate of 245 euros instead of the commercial tariff.
Delegate: Terrific! Does that academic fee cover admission to Wednesday’s harbor wind-turbine field excursion?
Agent: [[Q3]] Morning keynote panels and lunches are included, while the chartered boat visit carries an optional supplement of 38 euros covering safety lifejackets.
Delegate: [[Q4]] Add me onto the boat list too, please. Which partner hotel still has walkable single rooms near the Congress Center? The Seaside Quay Inn sits four hundred metres away and holds conference rooms at ninety-two euros nightly including breakfast.
Delegate: [[Q5]] Perfect—book Tuesday through Friday nights there. Will I need steel-toed footwear or my own high-visibility vest for the harbor turbine pier? Our marine safety partner supplies hardhats and vests, though every guest must wear flat closed-toe walking shoes.
Agent: [[Q6]] Before your Thursday oral presentation in Hall D, drop your slide deck onto USB-C at the Speaker Ready Room by 08:15 sharp.
Delegate: [[Q7]] Understood. Also, I follow a strictly dairy-free vegan diet—do gala banquet caterers handle allergies separately? Yes, we assign green plate tokens at registration so kitchen stewards bring labeled meals straight to your table.
Agent: [[Q8]] Do you require an airport shuttle pass upon landing on Tuesday? Our zero-emission electric coach loop picks delegates up outside Arrival Terminal Two every thirty minutes using badge QR scans.
Delegate: [[Q9]] Helpful! If my airline shifts my departure back by one day, what is the hotel cancellation cutoff? Seaside Quay permits free room-date alterations until seventy-two hours prior to check-in.
Agent: [[Q10]] One last note: pick up your embossed bamboo delegate lanyard from Express Kiosk Four using registration pin RE-816.`,
        questions: [
          {
            id: 'cd_listening_p12_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Presenter surname: ______',
            correctAnswer: 'LINDSTROM',
            explanation: 'Spelled L-I-N-D-S-T-R-O-M.'
          },
          {
            id: 'cd_listening_p12_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Early-Bird Academic conference registration rate: € ______',
            correctAnswer: '245',
            explanation: 'Presenter fee is 245 euros.'
          },
          {
            id: 'cd_listening_p12_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Extra fee for Wednesday’s harbor boat excursion: € ______',
            correctAnswer: '38',
            explanation: 'Boat excursion supplement is thirty-eight euros.'
          },
          {
            id: 'cd_listening_p12_lq4',
            number: 4,
            type: 'fill_blank',
            questionText: 'Partner hotel within 400 metres of Congress Center: Seaside ______ Inn',
            correctAnswer: 'QUAY',
            explanation: 'Seaside Quay Inn holds conference rooms.'
          },
          {
            id: 'cd_listening_p12_lq5',
            number: 5,
            type: 'short_answer',
            questionText: 'What personal footwear is required on the harbor turbine boat?',
            correctAnswer: 'CLOSED-TOE WALKING SHOES',
            explanation: 'Guests must bring flat closed-toe walking shoes.'
          },
          {
            id: 'cd_listening_p12_lq6',
            number: 6,
            type: 'short_answer',
            questionText: 'Latest morning check-in time at the Speaker Ready Room on Thursday:',
            correctAnswer: '08:15',
            explanation: 'Upload slides by 08:15 sharp.'
          },
          {
            id: 'cd_listening_p12_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Dining table marker identifying allergy and vegan meals: ______ tokens',
            correctAnswer: 'GREEN',
            explanation: 'Green plate tokens signal special dietary meals.'
          },
          {
            id: 'cd_listening_p12_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'How often does the electric conference coach depart Airport Terminal Two?',
            options: [
              'A. Every fifteen minutes',
              'B. Hourly on the hour',
              'C. Every thirty minutes',
              'D. Only upon advance phone request'
            ],
            correctAnswer: 'C',
            explanation: 'Electric shuttle coaches arrive every thirty minutes.'
          },
          {
            id: 'cd_listening_p12_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Until when can Seaside Quay hotel bookings be altered without penalty?',
            options: [
              'A. Twenty-four hours before check-in',
              'B. Forty-eight hours before check-in',
              'C. Seventy-two hours before check-in',
              'D. Seven days before the symposium'
            ],
            correctAnswer: 'C',
            explanation: 'Free alterations apply until seventy-two hours prior.'
          },
          {
            id: 'cd_listening_p12_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Express Kiosk PIN for badge pickup: ______',
            correctAnswer: 'RE-816',
            explanation: 'Use registration pin RE-816 at Kiosk Four.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Guided Tour of the Tidal Turbine Testing Basin',
        audioScenario:
          'A senior marine engineer briefs symposium delegates visiting an indoor hydrodynamic testing facility.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Hydrodynamic Lab Briefing]
Engineer: Welcome delegates to our Coastal Wave & Tidal Research Basin! Keep yellow floor lines between yourselves and water channels at all times.
Engineer: [[Q11]] This concrete tank measures sixty metres long and circulates forty million litres of filtered seawater past submerged rotor models using four underwater thrusters.
Engineer: [[Q12]] Unlike breezy wind blades spinning in thin air, marine turbines harness water eight hundred times denser, allowing far smaller rotor diameters for equal kilowatt output.
Engineer: [[Q13]] Observe the glass viewing wall to your right—currently our team runs scale fatigue trials on composite tidal blades coated with copper-free silicone anti-fouling paint.
Engineer: [[Q14]] Conventional toxic tin paints once prevented barnacles from clinging onto slow underwater blades, yet leaching damaged coastal shellfish nurseries severely.
Engineer: [[Q15]] Overhead, high-speed optical cameras track tiny white plastic tracer spheres injected upstream to map swirling blade-tip turbulence safely.
Engineer: [[Q16]] Acoustic hydrophones bolted onto tank concrete walls check low-frequency gear hum so full-scale coastal reefs never confuse harbor seals or foraging porpoises.
Engineer: [[Q17]] At eleven thirty our wave-maker wall switches on briefly to simulate North Atlantic four-metre storm swells—hold railings securely if spray drifts over catwalks.
Engineer: [[Q18]] Next door sits the Grid Battery Simulator Bay housing commercial flywheel banks capable of smoothing thirty-second tidal slack intervals smoothly.
Engineer: [[Q19]] Remember: mobile phones stay inside zipped pockets near the water tank edge because dropped electronics cannot be retrieved from deep thruster grates safely.
Engineer: [[Q20]] Our thirty-minute walking circuit wraps up in the dry Telemetry Gallery where free Nordic cardamom coffee awaits on table banners!`,
        questions: [
          {
            id: 'cd_listening_p12_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Length of the hydrodynamic seawater test basin: ______ metres',
            correctAnswer: 'SIXTY',
            explanation: 'Concrete tank measures sixty metres long.'
          },
          {
            id: 'cd_listening_p12_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Factor by which seawater exceeds air density: ______ times',
            correctAnswer: 'EIGHT HUNDRED',
            explanation: 'Water is eight hundred times denser than air.'
          },
          {
            id: 'cd_listening_p12_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which eco-friendly coating prevents barnacles on composite tidal blades?',
            correctAnswer: 'SILICONE ANTI-FOULING PAINT',
            explanation: 'Blades carry copper-free silicone anti-fouling paint.'
          },
          {
            id: 'cd_listening_p12_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'Why were older tin-based hull coatings abandoned on marine turbines?',
            options: [
              'A. Toxic leaching harmed coastal shellfish beds',
              'B. Saltwater dissolved coatings within two weeks',
              'C. Thick paint added excessive weight to turbine hubs',
              'D. Regulations raised marine insurance tariffs'
            ],
            correctAnswer: 'A',
            explanation: 'Leaching toxic tin paints severely harmed coastal shellfish nurseries.'
          },
          {
            id: 'cd_listening_p12_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Upstream plastic tracer spheres allow high-speed cameras to map blade-tip ______.',
            correctAnswer: 'TURBULENCE',
            explanation: 'Cameras track tracer spheres to map swirling turbulence.'
          },
          {
            id: 'cd_listening_p12_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Marine mammals protected by underwater acoustic testing: seals and ______',
            correctAnswer: 'PORPOISES',
            explanation: 'Checks ensure gear hum does not confuse harbor seals or porpoises.'
          },
          {
            id: 'cd_listening_p12_lq17',
            number: 17,
            type: 'short_answer',
            questionText: 'Simulated height of North Atlantic storm waves triggered at 11:30:',
            correctAnswer: 'FOUR-METRE',
            explanation: 'Wave-maker simulates four-metre storm swells.'
          },
          {
            id: 'cd_listening_p12_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'What do industrial flywheel banks in the neighboring bay accomplish?',
            options: [
              'A. Desalinate seawater into cooling vapor',
              'B. Generate artificial underwater currents',
              'C. Power overhead building cranes during storms',
              'D. Smooth brief thirty-second dips between tidal flows'
            ],
            correctAnswer: 'D',
            explanation: 'Flywheels bridge thirty-second tidal slack intervals.'
          },
          {
            id: 'cd_listening_p12_lq19',
            number: 19,
            type: 'multiple_choice',
            questionText: 'Why must visitors pocket phones near the open tank wall?',
            options: [
              'A. Wi-Fi transmitters disturb telemetry cameras',
              'B. Dropped devices cannot be recovered from deep grates',
              'C. Magnetic crane rails erase smartphone screens',
              'D. Patent laws forbid photographs of turbine blades'
            ],
            correctAnswer: 'B',
            explanation: 'Dropped phones cannot be safely retrieved from thruster grates.'
          },
          {
            id: 'cd_listening_p12_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Room hosting Nordic coffee at the end of the tour: ______ Gallery',
            correctAnswer: 'TELEMETRY',
            explanation: 'Concludes in the dry Telemetry Gallery.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Assessing Microgrid Batteries in Island Communities',
        audioScenario:
          'Energy engineering postgraduates Tomas and Farah discuss battery degradation field measurements with supervisor Prof. Larsen.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Island Microgrid Review]
Prof. Larsen: Welcome back, Tomas and Farah. How did your autumn microgrid audit on the Outer Isles turn out?
Tomas: [[Q21]] Installing shared village lithium-iron-phosphate batteries alongside rooftop wind cut imported diesel generator fuel consumption by sixty-eight percent across winter storms.
Farah: [[Q22]] However, coastal salt fog corroded outdoor inverter cooling fans twice faster than manufacturer laboratory manuals ever predicted.
Prof. Larsen: Real-world weather beats spec sheets! How did household appliance habits change once villagers knew batteries reached full charge?
Tomas: [[Q23]] Interestingly, dynamic green amber lamps inside farmhouse kitchens encouraged families to run immersion water heaters and washing machines voluntarily during windy afternoons.
Prof. Larsen: Smart behavioral feedback! Did thermal efficiency drop sharply inside unheated battery sheds during February frosts?
Farah: [[Q24]] Bare shipping containers plunged near zero Celsius, cutting battery acceptance speed until island technicians lined walls with recycled sheep-wool insulation.
Prof. Larsen: [[Q25]] When modeling payback horizons in Chapter Six, separate upfront shipping-barge installation freight from recurring software telemetry fees.
Tomas: [[Q26]] Definitely—helicopters and crane barges added nearly twenty-two percent onto hardware invoices alone on outlying islands lacking deep-water piers.
Farah: [[Q27]] Regarding electric vehicle integration, residents asked whether idle fishing vans could supply emergency backup watts during blackouts via bidirectional chargers.
Prof. Larsen: [[Q28]] Test whether cold lithium-ion van warranties permit vehicle-to-grid discharge before recommending that policy blindly.
Tomas: [[Q29]] Good warning! Our comparison table already contrasts sodium-ion chemistry for stationary island storage because sodium survives freezing temperatures far better.
Prof. Larsen: [[Q30]] Expand that sodium-ion safety paragraph slightly, then email your formatted conference poster to Oslo by Friday noon.`,
        questions: [
          {
            id: 'cd_listening_p12_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Reduction in imported diesel fuel achieved across island winter storms: ______ percent',
            correctAnswer: 'SIXTY-EIGHT',
            explanation: 'Microgrid storage cut diesel fuel consumption by sixty-eight percent.'
          },
          {
            id: 'cd_listening_p12_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which natural coastal hazard damaged outdoor inverter cooling fans quickly?',
            correctAnswer: 'SALT FOG',
            explanation: 'Coastal salt fog corroded cooling fans twice faster.'
          },
          {
            id: 'cd_listening_p12_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'How did kitchen indicator lamps alter island residents’ energy behavior?',
            options: [
              'A. Families shifted laundry and water heating to windy surplus hours',
              'B. Households cooked dinner earlier at four o’clock',
              'C. Villagers switched off exterior porch security lights',
              'D. Residents stopped charging electric bicycles overnight'
            ],
            correctAnswer: 'A',
            explanation: 'Indicator lamps led villagers to run heaters and washing machines on windy afternoons.'
          },
          {
            id: 'cd_listening_p12_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Natural insulation material used to line freezing battery containers: ______',
            correctAnswer: 'SHEEP-WOOL',
            explanation: 'Technicians installed recycled sheep-wool insulation.'
          },
          {
            id: 'cd_listening_p12_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Financial payback models must split barge delivery freight from recurring software ______ fees.',
            correctAnswer: 'TELEMETRY',
            explanation: 'Separate shipping freight from recurring software telemetry fees.'
          },
          {
            id: 'cd_listening_p12_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Logistics premium charged where islands lack deep-water piers: ______ percent',
            correctAnswer: 'TWENTY-TWO',
            explanation: 'Helicopters and crane barges added twenty-two percent.'
          },
          {
            id: 'cd_listening_p12_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Charging technology proposed to let parked vans power village blackouts: ______ chargers',
            correctAnswer: 'BIDIRECTIONAL',
            explanation: 'Villagers asked about bidirectional vehicle-to-grid chargers.'
          },
          {
            id: 'cd_listening_p12_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'What legal constraint must Farah verify before recommending vehicle-to-grid power?',
            options: [
              'A. Harbour ferry fire rules on lithium loads',
              'B. Household electrical socket fuse standards',
              'C. Municipal road tax rules for electric trucks',
              'D. Commercial manufacturer van battery warranties'
            ],
            correctAnswer: 'D',
            explanation: 'Check whether van warranties allow vehicle-to-grid discharge.'
          },
          {
            id: 'cd_listening_p12_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which alternative battery chemistry handles freezing winter sheds best?',
            correctAnswer: 'SODIUM-ION',
            explanation: 'Sodium-ion chemistry tolerates freezing temperatures better.'
          },
          {
            id: 'cd_listening_p12_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Host city receiving the formatted conference poster by Friday noon: ______',
            correctAnswer: 'OSLO',
            explanation: 'Email the conference poster to Oslo by Friday noon.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: High-Voltage Direct Current Subsea Cables',
        audioScenario:
          'An electrical systems professor lectures on long-distance subsea transmission lines linking distant wind farms and solar deserts to metropolitan grids.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Subsea Grid Engineering Lecture]
Lecturer: Generating abundant clean wind or alpine hydro power solves only half our climate equation; moving gigawatts hundreds of kilometres across seas demands specialized cable physics.
Lecturer: [[Q31]] Standard household electricity runs on alternating current, where oscillating waves reverse direction fifty or sixty times every single second.
Lecturer: [[Q32]] Underground or beneath deep ocean floors, however, dense insulating shields around alternating cables create intense electrical capacitance, soaking up power before it ever arrives ashore.
Lecturer: [[Q33]] Past roughly eighty kilometres underwater, alternating current loses virtually every watt just charging and discharging its own cable jacket.
Lecturer: [[Q34]] Engineers solve that bottleneck using High-Voltage Direct Current—HVDC—which feeds steady one-way current through massive armoured copper conductors spanning over seven hundred kilometres.
Lecturer: [[Q35]] Notice the trade-off: colossal solid-state converter stations at each shoreline cost hundreds of millions to transform direct current back into city grid waves.
Lecturer: [[Q36]] Laying these heavy ropes across jagged seabed canyons requires specialized dynamic cable-laying vessels equipped with robotic water-jet trenchers.
Lecturer: [[Q37]] Where seabed granite prohibits burying cables safely, crews dump tons of protective graded quarry boulders over exposed conduits to shield against dragging fishing trawler anchors.
Lecturer: [[Q38]] Even well-armoured subsea interconnectors face a modern vulnerability: specialized cable-repair ships are scarce worldwide, meaning severed lines can wait four months for summer weather windows.
Lecturer: [[Q39]] Strategically, cross-border interconnectors unlock immense sharing benefits—letting sunny Mediterranean noon exports balance stormy North Sea evening wind lulls effortlessly.
Lecturer: [[Q40]] Future continental supergrids will rely on multi-terminal offshore hubs meshing wind clusters seamlessly with coastal battery parks across international waters.`,
        questions: [
          {
            id: 'cd_listening_p12_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Electrical format powering standard domestic sockets: ______ current',
            correctAnswer: 'ALTERNATING',
            explanation: 'Standard grids run on alternating current.'
          },
          {
            id: 'cd_listening_p12_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which physical effect makes long subsea alternating cables waste energy?',
            correctAnswer: 'ELECTRICAL CAPACITANCE',
            explanation: 'Insulation beneath water creates intense electrical capacitance.'
          },
          {
            id: 'cd_listening_p12_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Distance ceiling beyond which subsea alternating cables become inefficient: ______ kilometres',
            correctAnswer: 'EIGHTY',
            explanation: 'Past roughly eighty kilometres, AC cables waste power charging insulation.'
          },
          {
            id: 'cd_listening_p12_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Heavy conductor metal inside 700-kilometre HVDC marine ropes: ______',
            correctAnswer: 'COPPER',
            explanation: 'Feeds direct current through armoured copper conductors.'
          },
          {
            id: 'cd_listening_p12_lq35',
            number: 35,
            type: 'multiple_choice',
            questionText: 'What makes short HVDC coastal connections economically unattractive compared to long spans?',
            options: [
              'A. Direct current corrodes steel ship hulls nearby',
              'B. Ocean temperatures melt high-voltage rubber coatings',
              'C. Expensive onshore converter stations require huge capital',
              'D. Subsea compasses fail within fifty metres'
            ],
            correctAnswer: 'C',
            explanation: 'Shoreline converter stations cost hundreds of millions.'
          },
          {
            id: 'cd_listening_p12_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Seabed trenches along cable paths are carved using robotic ______ trenchers.',
            correctAnswer: 'WATER-JET',
            explanation: 'Vessels deploy robotic water-jet trenchers.'
          },
          {
            id: 'cd_listening_p12_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Marine hazard deflected by piling quarry rocks onto hard rocky bottoms: trawler ______',
            correctAnswer: 'ANCHORS',
            explanation: 'Boulders shield cables against dragging fishing trawler anchors.'
          },
          {
            id: 'cd_listening_p12_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'Why can fixing one damaged offshore power cable take four months?',
            options: [
              'A. Manufacturing copper joints takes twelve weeks',
              'B. Specialized repair ships are scarce and wait for calm weather',
              'C. International fishing treaties suspend repairs until autumn',
              'D. Diver decompression laws restrict deep-sea shifts'
            ],
            correctAnswer: 'B',
            explanation: 'Repair vessels are scarce globally and await favorable weather windows.'
          },
          {
            id: 'cd_listening_p12_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'Which northern weather event can Mediterranean solar exports offset via interconnectors?',
            correctAnswer: 'WIND LULLS',
            explanation: 'Balances stormy North Sea evening wind lulls.'
          },
          {
            id: 'cd_listening_p12_lq40',
            number: 40,
            type: 'fill_blank',
            questionText: 'Onshore storage paired with future multi-terminal offshore hubs: ______ parks',
            correctAnswer: 'BATTERY',
            explanation: 'Meshes wind clusters with coastal battery parks.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 13: Cycling Safety Campaign & City Bike Hire Scheme
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p13',
    testNumber: 13,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 13: Cycling Safety Campaign & City Bike Hire Scheme',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Cycling Safety Campaign & City Bike Hire Scheme.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Signing Up for City Bike-Share',
        audioScenario:
          'A commuting student telephones the municipal bike-share helpdesk to activate an annual student pass and report a broken docking station.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: MetroCycle Support Desk]
Advisor: Hello, MetroCycle City Bike Hire, Carmen speaking. How can I assist you?
Rider: Hi Carmen, I just started an evening architecture class across town and want to register for the annual student bike-share tariff.
Advisor: [[Q1]] Great choice! First, may I record your surname on the registration panel? Yes, it is Redford, spelled R-E-D-F-O-R-D.
Advisor: [[Q2]] Thank you, Mr. Redford. With a valid university email address, our annual Student Pedal Pass drops from ninety to 54 pounds per year.
Rider: Nice savings! How long may I ride each hired bike before per-minute overtime charges trigger?
Advisor: [[Q3]] Every unlocked trip includes the first forty-five minutes free, whether you ride standard mechanical three-speeds or step-through frames.
Rider: [[Q4]] What about the blue electric-assist bikes appearing near the train station racks? Electric-assist cycles add a flat surcharge of one pound fifty per trip on top of standard membership.
Rider: [[Q5]] Got it. What if the dock beside my architecture studio is completely full when I arrive at nine? Simply tap the touch-kiosk beside the rack and choose "Full Station" to get fifteen extra free minutes to ride to the nearest empty bay.
Advisor: [[Q6]] Watch out for red warning lights blinking along frame locks—if you accidentally undock a cycle with a soft tyre or crooked saddle, re-dock within two minutes and press the wrench button on the cradle so engineers inspect it free of charge.
Rider: [[Q7]] Speaking of safety, do the bikes carry front dynamo lights automatically? Yes, hub dynamos switch both front white beams and rear red beacons on automatically whenever wheels turn.
Rider: [[Q8]] And are cycling helmets available for student discount locally? Present your MetroCycle pass at Swift Spokes Shop on Guildhall Alley for twenty-five percent off certified urban helmets and reflective ankle bands.
Advisor: [[Q9]] One vital parking rule: always push the front steel triangle squarely into the dock until you hear a sharp double chime and see the solid green LED—never leave cycles leaning unlocked beside bushes.
Rider: [[Q10]] Thanks! Which customer reference code unlocks my complimentary two-hour weekend maintenance clinic? Enter promo code SPIN-902 under Workshops inside the app.`,
        questions: [
          {
            id: 'cd_listening_p13_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Applicant surname: ______',
            correctAnswer: 'REDFORD',
            explanation: 'Spelled R-E-D-F-O-R-D.'
          },
          {
            id: 'cd_listening_p13_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'Discounted annual Student Pedal Pass fee: £ ______',
            correctAnswer: '54',
            explanation: 'Student pass costs fifty-four pounds per year.'
          },
          {
            id: 'cd_listening_p13_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Free included ride allowance per trip: ______ minutes',
            correctAnswer: 'FORTY-FIVE',
            explanation: 'First forty-five minutes per trip are included.'
          },
          {
            id: 'cd_listening_p13_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Per-trip surcharge added when riding blue electric-assist hire bikes:',
            correctAnswer: 'ONE POUND FIFTY',
            explanation: 'E-bikes add one pound fifty per trip.'
          },
          {
            id: 'cd_listening_p13_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Touch-kiosk option extending ride time when destination racks are packed: ______ Station',
            correctAnswer: 'FULL',
            explanation: 'Tap "Full Station" to gain fifteen free extra minutes.'
          },
          {
            id: 'cd_listening_p13_lq6',
            number: 6,
            type: 'multiple_choice',
            questionText: 'What should a rider do after spotting a flat tyre on a freshly undocked cycle?',
            options: [
              'A. Leave it chained outside the nearest coffee shop',
              'B. Phone the highway patrol immediately',
              'C. Pump it up at a petrol station and request credit',
              'D. Re-dock within two minutes and press the cradle wrench button'
            ],
            correctAnswer: 'D',
            explanation: 'Re-dock within two minutes and press the wrench button.'
          },
          {
            id: 'cd_listening_p13_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Power mechanism lighting safety lamps automatically during movement: hub ______',
            correctAnswer: 'DYNAMOS',
            explanation: 'Hub dynamos power lights automatically.'
          },
          {
            id: 'cd_listening_p13_lq8',
            number: 8,
            type: 'fill_blank',
            questionText: 'Lane location of Swift Spokes partner shop offering helmet discounts: ______ Alley',
            correctAnswer: 'GUILDHALL',
            explanation: 'Shop sits on Guildhall Alley.'
          },
          {
            id: 'cd_listening_p13_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'How can riders confirm a hire bicycle has locked properly into its rack?',
            options: [
              'A. Audio double chime sounds with a solid green light',
              'B. Receipt email arrives five minutes later',
              'C. Rear red mudguard flaps lock stiffly',
              'D. Touch-kiosk prints a paper confirmation slip'
            ],
            correctAnswer: 'A',
            explanation: 'Wait for a double chime and solid green LED.'
          },
          {
            id: 'cd_listening_p13_lq10',
            number: 10,
            type: 'short_answer',
            questionText: 'App workshop promo code for a free weekend maintenance session:',
            correctAnswer: 'SPIN-902',
            explanation: 'Enter promo code SPIN-902.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Urban Cycling Safety & Lane Infrastructure Briefing',
        audioScenario:
          'A municipal road-safety officer briefs first-year cyclists on protected junction priorities, blind spots, and winter bike care.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Cycle Safety Roadshow]
Officer: Good afternoon riders! As autumn evenings turn darker, let us review key street hazards around our university district.
Officer: [[Q11]] First, never hug parked car doors closer than one full metre—sudden driver door swings account for one in five minor urban cycling tumbles.
Officer: [[Q12]] Along Castle Boulevard, our city installed concrete kerbs raising green cycle tracks directly flush with pedestrian walkways rather than sunken asphalt gutters.
Officer: [[Q13]] At major multi-lane traffic roundabouts, obey the special yellow signal cyclists phase, giving bikes a clean five-second head start ahead of turning lorries.
Officer: [[Q14]] On shared riverside towpaths, remember pedestrians hold absolute priority—sound one courteous brass bell ring rather than startling walkers at high speed.
Officer: [[Q15]] Heavy delivery vans carry lethal left-side blind spots along narrow corner curbs, so hang firmly back behind rear mudflaps whenever large vehicles indicate turns.
Officer: [[Q16]] For personal security, lock frames with a hardened steel D-lock passing through both rear triangle and immovable stand—thin braided cables get snipped in four seconds.
Officer: [[Q17]] Every Wednesday lunchtime during October, mechanics run free brake-pad and chain oiling checks inside the Science Courtyard marquee.
Officer: [[Q18]] Be mindful of autumn rain hazard one: wet cast-iron tram rails and glossy painted road arrows turn slicker than ice when braking abruptly upright.
Officer: [[Q19]] Register your frame serial number free at police security stalls today so recovered stolen cycles trace swiftly back to owners.
Officer: [[Q20]] Before walking off, test your trouser-leg visibility by holding your palm beside the fluorescent slap-band sampler bin near the north marquee post.`,
        questions: [
          {
            id: 'cd_listening_p13_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Safe clearance margin recommended past parked car doors: one ______',
            correctAnswer: 'METRE',
            explanation: 'Keep at least one full metre clear of car doors.'
          },
          {
            id: 'cd_listening_p13_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Barrier protecting Castle Boulevard’s raised green cycle lane: concrete ______',
            correctAnswer: 'KERBS',
            explanation: 'Concrete kerbs lift tracks flush with sidewalks.'
          },
          {
            id: 'cd_listening_p13_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'How long is cyclists’ early traffic-light head start ahead of turning lorries?',
            correctAnswer: 'FIVE-SECOND',
            explanation: 'Special signals grant a five-second head start.'
          },
          {
            id: 'cd_listening_p13_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'How should cyclists navigate shared riverside paths safely?',
            options: [
              'A. Maintain twenty km/h speeds along center lines',
              'B. Ring one polite bell and yield priority to walkers',
              'C. Flash front headlights continuously after dusk',
              'D. Dismount completely for the entire river stretch'
            ],
            correctAnswer: 'B',
            explanation: 'Pedestrians hold priority; ring one courteous bell.'
          },
          {
            id: 'cd_listening_p13_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Riders should stay well behind a lorry’s rear ______ whenever turn indicators flash.',
            correctAnswer: 'MUDFLAPS',
            explanation: 'Hang back behind rear mudflaps to stay out of blind spots.'
          },
          {
            id: 'cd_listening_p13_lq16',
            number: 16,
            type: 'fill_blank',
            questionText: 'Minimum lock style recommended instead of thin braided cables: steel ______',
            correctAnswer: 'D-LOCK',
            explanation: 'Secure frames with a hardened steel D-lock.'
          },
          {
            id: 'cd_listening_p13_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Campus site of October’s free Wednesday brake checks: ______ Courtyard',
            correctAnswer: 'SCIENCE',
            explanation: 'Mechanics wait inside the Science Courtyard marquee.'
          },
          {
            id: 'cd_listening_p13_lq18',
            number: 18,
            type: 'multiple_choice',
            questionText: 'Which wet-weather surfaces cause riders to skid abruptly if braking upright?',
            options: [
              'A. Rough granite bridge cobbles',
              'B. Newly laid gravel park loops',
              'C. Cast-iron tram rails and glossy painted road arrows',
              'D. Brick pedestrian crosswalk strips'
            ],
            correctAnswer: 'C',
            explanation: 'Wet tram rails and painted markings turn dangerously slick.'
          },
          {
            id: 'cd_listening_p13_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'Which bicycle code helps police return recovered stolen cycles?',
            correctAnswer: 'SERIAL NUMBER',
            explanation: 'Register your frame serial number at police stalls.'
          },
          {
            id: 'cd_listening_p13_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Reflective giveaway available beside the north marquee post: ______',
            correctAnswer: 'SLAP-BAND',
            explanation: 'Pick up a fluorescent slap-band from the sampler bin.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Urban Bike-Share Rebalancing Logistics',
        audioScenario:
          'Operations management students Mei and Leo discuss dock-emptying imbalance curves with supervisor Prof. Singh.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Transport Operations Seminar]
Prof. Singh: Hello Mei and Leo. Did your municipal telemetry files explain why bike-share racks keep overflowing downtown while hilltop suburbs stay barren?
Mei: [[Q21]] Overwhelmingly yes—commuters ride effortlessly downhill every morning toward waterfront offices, then refuse to pedal steep seven-percent hills home in evening rain, boarding buses instead.
Leo: [[Q22]] As a result, diesel flatbed vans burned hours hauling empty frames back uphill daily, erasing nearly a quarter of the scheme’s net carbon savings.
Prof. Singh: Irony at its clearest! Did introducing lightweight e-bikes reverse uphill abandonment?
Mei: [[Q23]] Dramatic shift—three months after adding fifty percent battery-assisted bikes, evening uphill returns climbed sixty-two percent as sweaty climbs vanished.
Prof. Singh: [[Q24]] Fascinating elasticity! How did operators motivate ordinary pedal riders to rebalance docks cheaply without dispatch trucks? Our app rolled out "Angel Credits," awarding free coffee vouchers whenever users moved a bike from a packed dock onto an empty hill stand.
Leo: [[Q25]] Unfortunately, clever commuters occasionally gamed incentives by riding two blocks simply to bounce bikes between adjacent crowded racks until engineers built minimum distance filters.
Prof. Singh: Classic principal-agent mischief! What about dockless bikes parked freely on pavements versus fixed solar-kiosk bays?
Mei: [[Q26]] Dockless scooters littered tactile paving slabs near hospital gates, prompting council fines, whereas painted virtual-geofence boxes kept sidewalks tidy without costly concrete digging.
Prof. Singh: [[Q27]] When charting fleet maintenance downtime in Appendix B, isolate summer flat-tyre peaks from cold winter battery decay.
Leo: [[Q28]] True—frozen December mornings shrank lithium range thirty percent until depots rotated warm batteries indoors overnight.
Mei: [[Q29]] For Friday’s transport authority presentation, should we simulate adding six extra hilltop racks or subsidising Angel Credit vouchers?
Prof. Singh: [[Q30]] Model both side by side over a five-year horizon—city treasurers decide quickly when capital hardware outlays contrast against variable rider nudges.`,
        questions: [
          {
            id: 'cd_listening_p13_lq21',
            number: 21,
            type: 'multiple_choice',
            questionText: 'Why did hillside suburban bike racks empty out each morning without afternoon returns?',
            options: [
              'A. Offices lacked covered commuter bike parking',
              'B. Suburban vandalism locked docking cradles offline',
              'C. Riders took buses uphill instead of climbing steep slopes home',
              'D. Evening traffic bans blocked suburban boulevards'
            ],
            correctAnswer: 'C',
            explanation: 'Riders coasted downhill mornings but boarded buses rather than pedaling up steep slopes.'
          },
          {
            id: 'cd_listening_p13_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Share of environmental savings wiped out by diesel van truck rebalancing: a ______',
            correctAnswer: 'QUARTER',
            explanation: 'Flatbed trucks erased nearly a quarter of net carbon savings.'
          },
          {
            id: 'cd_listening_p13_lq23',
            number: 23,
            type: 'fill_blank',
            questionText: 'Increase in evening uphill rides once e-bikes joined the fleet: ______ percent',
            correctAnswer: 'SIXTY-TWO',
            explanation: 'Uphill returns climbed sixty-two percent.'
          },
          {
            id: 'cd_listening_p13_lq24',
            number: 24,
            type: 'short_answer',
            questionText: 'What reward did "Angel Credits" give riders who redistributed bikes uphill?',
            correctAnswer: 'COFFEE VOUCHERS',
            explanation: 'Users earned free coffee vouchers.'
          },
          {
            id: 'cd_listening_p13_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Engineers blocked app credit gaming by adding minimum ______ checks between stations.',
            correctAnswer: 'DISTANCE',
            explanation: 'Minimum distance filters halted short hops between crowded racks.'
          },
          {
            id: 'cd_listening_p13_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Low-cost curb-painting solution keeping pavements uncluttered without digging concrete: ______ boxes',
            correctAnswer: 'GEOFENCE',
            explanation: 'Painted virtual-geofence boxes kept sidewalks clear.'
          },
          {
            id: 'cd_listening_p13_lq27',
            number: 27,
            type: 'short_answer',
            questionText: 'Which seasonal summer fault must be plotted separately from winter battery decline?',
            correctAnswer: 'FLAT-TYRE PEAKS',
            explanation: 'Separate summer flat-tyre peaks from winter battery decay.'
          },
          {
            id: 'cd_listening_p13_lq28',
            number: 28,
            type: 'fill_blank',
            questionText: 'Percentage loss in battery range during freezing December mornings: ______ percent',
            correctAnswer: 'THIRTY',
            explanation: 'December cold shrank lithium range thirty percent.'
          },
          {
            id: 'cd_listening_p13_lq29',
            number: 29,
            type: 'multiple_choice',
            questionText: 'How will Mei and Leo present operational choices to the city transport authority?',
            options: [
              'A. Comparing five-year costs of extra racks versus Angel Credit incentives',
              'B. Proposing immediate conversion to 100% private leasing',
              'C. Urging complete removal of dockless zones citywide',
              'D. Focusing exclusively on winter tyre rubber compounds'
            ],
            correctAnswer: 'A',
            explanation: 'Model both new hilltop racks and voucher subsidies side by side.'
          },
          {
            id: 'cd_listening_p13_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Projection timespan recommended for contrasting hardware versus rider nudges: ______ years',
            correctAnswer: 'FIVE',
            explanation: 'Model both over a five-year horizon.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Dutch Cycling Infrastructure Transformation',
        audioScenario:
          'An urban policy lecturer explains how Dutch cities reversed 1960s car dominance through street redesign, intersection geometry, and child safety campaigns.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Urban Cycling Design History]
Lecturer: Visitors walking through Utrecht or Delft often assume flat geography and lifelong cultural habits alone explain why cycles outnumber cars there.
Lecturer: [[Q31]] Historical archives prove otherwise: throughout the booming 1960s, Dutch municipalities demolished medieval canals and trees furiously to widen four-lane motor expressways straight through market squares.
Lecturer: [[Q32]] Cycling shares plunged steadily until 1971, when record street fatalities killed over three thousand citizens—among them hundreds of schoolchildren walking home.
Lecturer: [[Q33]] Outraged parents formed "Stop de Kindermoord," staging mass street picnics across narrow shopping alleys to demand traffic-calmed residential courtyards.
Lecturer: [[Q34]] Shortly afterward, the 1973 oil shock triggered car-free Sundays, letting millions experience how astonishingly quiet stone boulevards felt without roaring engines.
Lecturer: [[Q35]] Crucially, engineers rejected painted white lane stripes wedged between fast trucks, adopting instead continuous raised brick paths separated by planted tree verges.
Lecturer: [[Q36]] At signalized intersections, Dutch designers recessed car stop-lines five metres back behind sweeping corner islands, placing turning drivers perpendicular so cyclists sit unmistakably inside direct windshield sightlines.
Lecturer: [[Q37]] Residential side streets became "woonerf" living zones—eliminating tall curbs altogether while meandering flower planters force cars below brisk jogging pace.
Lecturer: [[Q38]] Even nationwide rail terminals transformed: Utrecht Central built an underground multi-tier bicycle vault cradling twelve thousand five hundred stalls connected smoothly onto escalators.
Lecturer: [[Q39]] Skeptics still note rainy winter hills challenge non-European cities, yet Zurich and San Francisco prove pedal-assist motors plus weatherproof rain capes overcome both slopes and drizzle rapidly.
Lecturer: [[Q40]] Ultimately, flourishing cycling cities stem not from national DNA, but from courageous street-space allocation valuing human life above maximum intersection car throughput.`,
        questions: [
          {
            id: 'cd_listening_p13_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Urban waterways filled in during 1960s Dutch highway expansions: ______',
            correctAnswer: 'CANALS',
            explanation: 'Municipalities filled medieval canals to widen motor roads.'
          },
          {
            id: 'cd_listening_p13_lq32',
            number: 32,
            type: 'fill_blank',
            questionText: 'Year when rising child street deaths triggered nationwide parent protests: ______',
            correctAnswer: '1971',
            explanation: 'Fatalities peaked in 1971, sparking protests.'
          },
          {
            id: 'cd_listening_p13_lq33',
            number: 33,
            type: 'short_answer',
            questionText: 'How did protesting parents highlight unsafe shopping alleys?',
            correctAnswer: 'STREET PICNICS',
            explanation: 'Parents staged mass street picnics.'
          },
          {
            id: 'cd_listening_p13_lq34',
            number: 34,
            type: 'multiple_choice',
            questionText: 'What unexpected cultural impact followed the 1973 car-free Sundays?',
            options: [
              'A. Suburban bus ticket sales dropped permanently',
              'B. Tourists avoided city-center hotels during autumn',
              'C. Bicycle factories collapsed from material shortages',
              'D. Citizens experienced quiet, car-free city boulevards firsthand'
            ],
            correctAnswer: 'D',
            explanation: 'Millions discovered how calm and quiet city streets felt without cars.'
          },
          {
            id: 'cd_listening_p13_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Buffer element separating raised Dutch bikeways from fast lanes: ______ verges',
            correctAnswer: 'TREE',
            explanation: 'Separated by planted tree verges rather than paint.'
          },
          {
            id: 'cd_listening_p13_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Corner islands angle turning cars ______ so cyclists remain squarely inside windshield sightlines.',
            correctAnswer: 'PERPENDICULAR',
            explanation: 'Drivers turn perpendicular, keeping riders visible ahead.'
          },
          {
            id: 'cd_listening_p13_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Dutch name for curb-free residential streets paced by winding flower boxes: ______',
            correctAnswer: 'WOONERF',
            explanation: 'Side streets adopted the curb-free "woonerf" model.'
          },
          {
            id: 'cd_listening_p13_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'How many bike spaces sit inside Utrecht Central’s underground rail terminal garage?',
            correctAnswer: 'TWELVE THOUSAND FIVE HUNDRED',
            explanation: 'Holds twelve thousand five hundred bicycle stalls.'
          },
          {
            id: 'cd_listening_p13_lq39',
            number: 39,
            type: 'multiple_choice',
            questionText: 'What combination helps hilly or wet non-European cities boost cycling rates?',
            options: [
              'A. Heated concrete bike lanes',
              'B. Pedal-assist electric motors paired with rain capes',
              'C. Covered glass overhead tunnels',
              'D. Lowering speed limits exclusively in downtown zones'
            ],
            correctAnswer: 'B',
            explanation: 'Pedal-assist motors and rain capes overcome hills and drizzle.'
          },
          {
            id: 'cd_listening_p13_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'According to the lecturer, what ultimately builds a successful cycling city?',
            options: [
              'A. Deliberate street allocation prioritizing human safety over car speed',
              'B. Flat coastal river geography',
              'C. Free bicycles issued to school leavers',
              'D. Historic cultural fondness for sports racing'
            ],
            correctAnswer: 'A',
            explanation: 'Rooted in courageous street-space allocation prioritizing human life.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 14: Marine Biology Field Trip Equipment Checklist
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p14',
    testNumber: 14,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 14: Marine Biology Field Trip Equipment Checklist',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Marine Biology Field Trip Equipment Checklist.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Coastal Field Station Gear Rental & Check-In',
        audioScenario:
          'A biology undergraduate phones the Northumbrian Marine Field Station steward to reserve waterproof kit and ferry transfers.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Marine Field Station Logistics]
Steward: Good morning, Seahouses Coastal Field Lab, Callum speaking. How can I help?
Student: Hi Callum, I am joining Dr. Patel’s second-year rocky shore ecology field week next Monday and need to confirm equipment hire.
Steward: [[Q1]] Certainly! Let me find your bunk and wet-gear allocation—what is your surname? It is McAllister, spelled M-C-A-L-L-I-S-T-E-R.
Steward: [[Q2]] Got you right here on Cabin Three’s list. First, check footwear: we supply ankle neoprene bootees, though you must state your European shoe size before Thursday so pairs match—I take size forty-two.
Student: [[Q3]] Noted—forty-two goes into your locker bag. Do students pay extra for five-millimetre intertidal chest waders and storm jackets? Full chest waders and oilskin smocks carry a refundable gear deposit of forty pounds paid on arrival.
Student: [[Q4]] Easy enough. Should I pack personal plastic quadrat sampling frames or plankton dip nets? Do not clutter your rucksack—every lab table supplies calibrated half-metre aluminum quadrats and hand refractometers.
Steward: [[Q5]] What you MUST pack privately is a bright waterproof headtorch for pre-dawn low-tide kelp surveys at 05:30 Tuesday morning.
Student: [[Q6]] Good reminder! Are laptops safe inside coastal wooden bunkhouses during Atlantic gales? Rooms stay bone dry, though bring a rigid waterproof dry-bag whenever ferrying tablets onto slippery basalt reefs.
Steward: [[Q7]] Also remember strict specimen ethics: digital macro rulers photograph crabs cleanly on location, since taking live shellfish off headland rocks is banned without special ministry tags.
Student: [[Q8]] When does our charter coach drop students at the Harbor Slipway next Monday? Our boat leaves Slipway West at 14:15 sharp, directly after the coastal weather forecast check.
Steward: [[Q9]] Should heavy swells halt ferry crossings altogether, we pivot seamlessly into our heated Indoor Seawater Mesocosm room for live urchin fertilization microscopy.
Student: [[Q10]] Thanks Callum! Which field station email handles dietary allergy notes for shared evening stews? Send food alerts directly to steward@seahouseslab.org quoting Trip ID MB-418.`,
        questions: [
          {
            id: 'cd_listening_p14_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname: ______',
            correctAnswer: 'MCALLISTER',
            explanation: 'Spelled M-C-A-L-L-I-S-T-E-R.'
          },
          {
            id: 'cd_listening_p14_lq2',
            number: 2,
            type: 'fill_blank',
            questionText: 'European size requested for ankle neoprene bootees: ______',
            correctAnswer: 'FORTY-TWO',
            explanation: 'Student takes European size forty-two.'
          },
          {
            id: 'cd_listening_p14_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Refundable arrival deposit for chest waders and storm smocks: £ ______',
            correctAnswer: 'FORTY',
            explanation: 'Carry a refundable deposit of forty pounds.'
          },
          {
            id: 'cd_listening_p14_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Which metal frame measuring tool is already provided at every lab table?',
            correctAnswer: 'ALUMINUM QUADRATS',
            explanation: 'Labs supply calibrated half-metre aluminum quadrats.'
          },
          {
            id: 'cd_listening_p14_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Essential personal lighting item for 05:30 low-tide surveys: ______',
            correctAnswer: 'HEADTORCH',
            explanation: 'Students must bring a waterproof headtorch.'
          },
          {
            id: 'cd_listening_p14_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Protective pouch needed when carrying tablets over basalt rocks: ______',
            correctAnswer: 'DRY-BAG',
            explanation: 'Pack a rigid waterproof dry-bag onto wet reefs.'
          },
          {
            id: 'cd_listening_p14_lq7',
            number: 7,
            type: 'multiple_choice',
            questionText: 'Why must crabs and shellfish stay on the rocky shore instead of going back to labs?',
            options: [
              'A. Saltwater aquarium tanks are under maintenance',
              'B. Rough ferry crossings injure delicate shells',
              'C. Boat storage lacks cooled specimen buckets',
              'D. Removing live specimens without ministry tags is prohibited'
            ],
            correctAnswer: 'D',
            explanation: 'Taking live shellfish is banned without ministry tags; macro photos record data.'
          },
          {
            id: 'cd_listening_p14_lq8',
            number: 8,
            type: 'short_answer',
            questionText: 'Afternoon departure time from Harbor Slipway West on Monday:',
            correctAnswer: '14:15',
            explanation: 'Ferry departs Slipway West at 14:15.'
          },
          {
            id: 'cd_listening_p14_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'What backup lab activity takes place if ocean swells halt boat launches?',
            options: [
              'A. Taxonomy card sorting inside the bunkhouse lounge',
              'B. Net mending workshops along the stone slipway',
              'C. Live urchin microscopy in the Indoor Seawater Mesocosm room',
              'D. Guest lectures at the harbor maritime museum'
            ],
            correctAnswer: 'C',
            explanation: 'Classes move to the Indoor Seawater Mesocosm for urchin microscopy.'
          },
          {
            id: 'cd_listening_p14_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'Trip reference code required when emailing dietary allergies: ______',
            correctAnswer: 'MB-418',
            explanation: 'Quote Trip ID MB-418.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Rocky Intertidal Field Safety Briefing',
        audioScenario:
          'A field station warden briefs arriving biology students on tidal hazard clocks, barnacle footing, and wet-lab microscope etiquette.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Slipway Field Briefing]
Warden: Welcome to Seahouses Station! Before stepping onto tomorrow’s glistening kelp beds, absorb five golden safety rules that prevent sprained ankles and stranded boats.
Warden: [[Q11]] Rule one: never turn your back toward breaking whitewater waves while kneeling beside deep gullies—one rogue Atlantic swell can sweep buckets away silently.
Warden: [[Q12]] Always check chalk tide clocks mounted by the boathouse exit; buddy pairs must begin walking shoreward precisely ninety minutes before predicted incoming flood slack.
Warden: [[Q13]] Notice black rubber seaweed covering lower reef shelves turns almost frictionless, whereas rough pale barnacle crusts provide dependable boot grip between boulders.
Warden: [[Q14]] Carry dry laminated field identification cards hooked onto brass neck lanyards so soggy wind gusts never scatter wet paper sheets across pools.
Warden: [[Q15]] Inside the wet sorting lab back indoors, rinse salt spray thoroughly off stainless dissection forceps in fresh tap water before locking drawers every afternoon.
Warden: [[Q16]] Microscopes sit strictly along the dry central bench—keep salty plankton trays inside drip-lip plastic aprons along perimeter sinks rather than resting wet glass near lenses.
Warden: [[Q17]] Any group spotting washed-up dead seabirds wearing aluminium ankle bands should photograph ring digits crisply and alert our ornithology logbook rather than handling carcasses barehanded.
Warden: [[Q18]] Check our drying shed hook tags: green pegs mark dripping wet-suits rinsed after freshwater baths, while orange pegs reserve gear needing urgent seam patching.
Warden: [[Q19]] Remember coastal mobile towers drop signal inside steep limestone coves—carry one whistle per pair and blow three sharp blasts if anyone twists an ankle.
Warden: [[Q20]] Meet your lab demonstrators beside the yellow painted depth-gauge pole after breakfast at seven sharp!`,
        questions: [
          {
            id: 'cd_listening_p14_lq11',
            number: 11,
            type: 'fill_blank',
            questionText: 'Hazard students must face rather than turning away beside rocky gullies: ______ waves',
            correctAnswer: 'WHITEWATER',
            explanation: 'Never turn away from breaking whitewater waves.'
          },
          {
            id: 'cd_listening_p14_lq12',
            number: 12,
            type: 'fill_blank',
            questionText: 'Minutes prior to incoming flood tide when pairs must retreat shoreward: ______ minutes',
            correctAnswer: 'NINETY',
            explanation: 'Walk shoreward ninety minutes before incoming flood slack.'
          },
          {
            id: 'cd_listening_p14_lq13',
            number: 13,
            type: 'short_answer',
            questionText: 'Which pale reef encrustation offers safer footing than wet rubber seaweed?',
            correctAnswer: 'BARNACLE CRUSTS',
            explanation: 'Rough pale barnacle crusts provide reliable boot grip.'
          },
          {
            id: 'cd_listening_p14_lq14',
            number: 14,
            type: 'multiple_choice',
            questionText: 'How are species identification sheets protected from ocean winds?',
            options: [
              'A. Stored inside zipped clipboard boxes',
              'B. Laminated and clipped to brass neck lanyards',
              'C. Installed as waterproof tablet apps',
              'D. Taped inside sample tray lids'
            ],
            correctAnswer: 'B',
            explanation: 'Dry laminated ID cards clip onto brass neck lanyards.'
          },
          {
            id: 'cd_listening_p14_lq15',
            number: 15,
            type: 'fill_blank',
            questionText: 'Routine daily maintenance on stainless dissection forceps: rinse in ______ water',
            correctAnswer: 'TAP',
            explanation: 'Rinse salt off forceps in fresh tap water daily.'
          },
          {
            id: 'cd_listening_p14_lq16',
            number: 16,
            type: 'summary_completion',
            questionText: 'Salty plankton trays remain at perimeter ______ rather than beside delicate dry-bench microscopes.',
            correctAnswer: 'SINKS',
            explanation: 'Salty trays stay along perimeter sinks.'
          },
          {
            id: 'cd_listening_p14_lq17',
            number: 17,
            type: 'multiple_choice',
            questionText: 'What should students do upon finding a tagged dead seabird?',
            options: [
              'A. Carry it carefully inside a spare plastic bucket',
              'B. Remove the aluminium ring for lab records',
              'C. Bury it above the high-tide pebble bank',
              'D. Photograph the metal ankle digits without barehanded contact'
            ],
            correctAnswer: 'D',
            explanation: 'Photograph ring digits without handling carcasses barehanded.'
          },
          {
            id: 'cd_listening_p14_lq18',
            number: 18,
            type: 'fill_blank',
            questionText: 'Drying shed peg colour indicating torn wetsuits needing seam repair: ______ pegs',
            correctAnswer: 'ORANGE',
            explanation: 'Orange pegs mark gear needing seam patching.'
          },
          {
            id: 'cd_listening_p14_lq19',
            number: 19,
            type: 'short_answer',
            questionText: 'What signal sounds three sharp blasts if mobile coverage fails inside coves?',
            correctAnswer: 'WHISTLE',
            explanation: 'Pairs carry a whistle for three-blast emergency alerts.'
          },
          {
            id: 'cd_listening_p14_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Yellow gathering landmark outside at 7 AM after breakfast: ______ pole',
            correctAnswer: 'DEPTH-GAUGE',
            explanation: 'Meet beside the yellow depth-gauge pole.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Analyzing Intertidal Limpet Grazing Patterns',
        audioScenario:
          'Marine zoology students Kieran and Anya review rocky reef transect statistics with supervisor Dr. Muir.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Intertidal Ecology Supervision]
Dr. Muir: Welcome back, Kieran and Anya. What stood out from mapping limpet abundance across exposed versus sheltered bays?
Kieran: [[Q21]] Exposed surf headlands carried nearly triple the adult shell density of quiet sheltered inlets, yet exposed limpets grew noticeably shorter conical heights to resist pounding waves.
Anya: [[Q22]] Also, red ink homing dots showed eighty-five percent of marked limpets grazed outward across algae overnight before returning precisely into custom rock home scars by dawn.
Dr. Muir: Classic behavioral plasticity! How did you measure algal film thickness consistently without scraping bare granite unevenly?
Kieran: [[Q23]] Dr. Muir’s lab lent us a portable chlorophyll fluorometer that reads live surface microalgae bounce optically without disturbing tiny barnacle recruits.
Dr. Muir: Neat non-destructive choice! Did weekend crab predation skew your marked shell counts along lower tide pools?
Anya: [[Q24]] Yes—velvet swimming crabs cracked nine smaller juveniles on sheltered ledges overnight, whereas heavy wave splash kept crabs away on exposed outer reefs.
Dr. Muir: [[Q25]] Good ecological insight. When writing your field methods section, record reef slope angles beside shore elevation rather than quoting horizontal distance from cliffs alone.
Kieran: [[Q26]] Understood—we measured inclinations using brass clinometers every five metres so gentler sunlit terraces separate cleanly from steep shaded rock faces.
Anya: [[Q27]] Regarding tide-pool temperature spikes, midday pools disconnected from sea splash surged past twenty-six Celsius while incoming surf stayed cool at eleven.
Dr. Muir: [[Q28]] Note any thermal stress deaths in isolated upper pools before jumping to predation conclusions inside Chapter Four.
Kieran: [[Q29]] For our statistical test selection, non-normal count clusters failed standard parametric variance checks, pushing us toward rank-based Kruskal-Wallis comparisons.
Dr. Muir: [[Q30]] Sound statistical judgement—trim redundant raw GPS coordinates into an appendix file and submit your clean report draft next Monday morning.`,
        questions: [
          {
            id: 'cd_listening_p14_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Physical shell adaptation on wave-exposed reefs: shorter ______ heights',
            correctAnswer: 'CONICAL',
            explanation: 'Exposed limpets grew shorter conical heights to resist surf.'
          },
          {
            id: 'cd_listening_p14_lq22',
            number: 22,
            type: 'fill_blank',
            questionText: 'Share of tagged limpets returning precisely to home rock scars by morning: ______ percent',
            correctAnswer: 'EIGHTY-FIVE',
            explanation: 'Eighty-five percent returned to custom rock home scars.'
          },
          {
            id: 'cd_listening_p14_lq23',
            number: 23,
            type: 'short_answer',
            questionText: 'Optical instrument measuring surface algae without scraping rocks:',
            correctAnswer: 'CHLOROPHYLL FLUOROMETER',
            explanation: 'Used a portable chlorophyll fluorometer.'
          },
          {
            id: 'cd_listening_p14_lq24',
            number: 24,
            type: 'multiple_choice',
            questionText: 'Why did sheltered bays suffer heavier overnight juvenile limpet mortality?',
            options: [
              'A. Velvet swimming crabs could hunt undisturbed without crashing surf',
              'B. Fresh rain diluted sheltered pool salinity',
              'C. Gull flocks nested beside sheltered ledges',
              'D. Thick kelp tangled juvenile shells underwater'
            ],
            correctAnswer: 'A',
            explanation: 'Swimming crabs hunted sheltered ledges where heavy surf did not deter them.'
          },
          {
            id: 'cd_listening_p14_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Field methods must record vertical elevation alongside reef ______ angles.',
            correctAnswer: 'SLOPE',
            explanation: 'Record reef slope angles beside shore elevation.'
          },
          {
            id: 'cd_listening_p14_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Handheld brass instrument measuring rock terrace inclination: ______',
            correctAnswer: 'CLINOMETERS',
            explanation: 'Measured inclinations using brass clinometers.'
          },
          {
            id: 'cd_listening_p14_lq27',
            number: 27,
            type: 'fill_blank',
            questionText: 'Midday temperature reached in isolated upper tide pools: ______ Celsius',
            correctAnswer: 'TWENTY-SIX',
            explanation: 'Pools surged past twenty-six Celsius.'
          },
          {
            id: 'cd_listening_p14_lq28',
            number: 28,
            type: 'multiple_choice',
            questionText: 'What warning does Dr. Muir give regarding empty shells in upper tide pools?',
            options: [
              'A. Exclude broken shells caused by tourist hikers',
              'B. Account for extreme thermal heat stress alongside predation',
              'C. Recalibrate fluorometers for salt deposits',
              'D. Re-tag juveniles with waterproof epoxy glue'
            ],
            correctAnswer: 'B',
            explanation: 'Consider thermal stress deaths before attributing all loss to predation.'
          },
          {
            id: 'cd_listening_p14_lq29',
            number: 29,
            type: 'short_answer',
            questionText: 'Which non-parametric test replaced standard parametric checks on skewed data?',
            correctAnswer: 'KRUSKAL-WALLIS',
            explanation: 'Shifted to rank-based Kruskal-Wallis comparisons.'
          },
          {
            id: 'cd_listening_p14_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Clean draft submission deadline: next ______ morning',
            correctAnswer: 'MONDAY',
            explanation: 'Submit clean report draft next Monday morning.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: Acoustic Mapping of Benthic Seafloor Habitats',
        audioScenario:
          'An oceanography professor lectures on how multibeam sonar transforms seabed conservation compared to blind physical grab-sampling.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: Marine Habitat Mapping Lecture]
Lecturer: Until recent decades, mapping temperate seafloors resembled surveying a foggy forest blindfolded by dangling a tiny claw down from a helicopter.
Lecturer: [[Q31]] Traditional oceanographers lowered heavy brass sediment grabs off ship sterns every two kilometres, missing dramatic rocky reefs hiding unnoticed right between sparse sampling coordinates.
Lecturer: [[Q32]] Multibeam echosounder sonar revolutionized seabed science by sweeping wide fans of high-frequency sound pings simultaneously across swaths hundreds of metres wide.
Lecturer: [[Q33]] Crucially, engineers inspect two separate returns per ping: acoustic travel delay maps three-dimensional bathymetry depth, while echo intensity—known as backscatter—distinguishes soft ooze mud from jagged bedrock.
Lecturer: [[Q34]] Hard reflective basalt boulders bounce sharp bright acoustic backscatter back to ship hulls, whereas velvety eelgrass meadows absorb acoustic waves gently.
Lecturer: [[Q35]] Yet sonar alone remains ambiguous between gravel shingle and oyster beds—forcing teams to deploy tethered drop-frame cameras for rapid visual ground-truthing.
Lecturer: [[Q36]] Where cold murky river plumes limit camera clarity below fifty centimetres, autonomous underwater vehicles—AUVs—glide centimetres above trenches carrying bright LED strobes.
Lecturer: [[Q37]] Integrating sonar topography with thermal bottom currents lets marine planners delineate hidden cold-water coral nurseries vulnerable to weighted deep-sea trawl nets.
Lecturer: [[Q38]] Astonishingly, high-resolution multibeam maps recently uncovered forgotten WWII sunken munitions alongside ancient submerged pine tree stumps drowned since the last ice age.
Lecturer: [[Q39]] Data volume poses a modern bottleneck: one survey ship captures terabytes weekly, demanding automated machine-learning textures to flag fragile worm-reef ridges cleanly.
Lecturer: [[Q40]] Standardized open-access seabed atlases now help offshore wind engineers route power cables respectfully around pristine kelp spawning corridors before construction starts.`,
        questions: [
          {
            id: 'cd_listening_p14_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Traditional heavy sampling tool dropped blindly from ship sterns: sediment ______',
            correctAnswer: 'GRABS',
            explanation: 'Lowered heavy brass sediment grabs every two kilometres.'
          },
          {
            id: 'cd_listening_p14_lq32',
            number: 32,
            type: 'multiple_choice',
            questionText: 'How did multibeam sonar improve seabed surveying over early techniques?',
            options: [
              'A. Divers verify every two hundred metres along ship wakes',
              'B. Laser beams penetrate salty coastal turbidity clearly',
              'C. Sound fans sweep continuous wide strips instead of sparse isolated points',
              'D. Satellites photograph deep-trench sand ripples directly'
            ],
            correctAnswer: 'C',
            explanation: 'Multibeam fans map continuous swaths hundreds of metres wide.'
          },
          {
            id: 'cd_listening_p14_lq33',
            number: 33,
            type: 'fill_blank',
            questionText: 'Acoustic intensity term distinguishing seabed mud from hard rock: ______',
            correctAnswer: 'BACKSCATTER',
            explanation: 'Echo intensity, called backscatter, separates mud from bedrock.'
          },
          {
            id: 'cd_listening_p14_lq34',
            number: 34,
            type: 'short_answer',
            questionText: 'Which living coastal habitat weakens returning acoustic echoes softly?',
            correctAnswer: 'EELGRASS MEADOWS',
            explanation: 'Velvety eelgrass meadows gently absorb acoustic waves.'
          },
          {
            id: 'cd_listening_p14_lq35',
            number: 35,
            type: 'summary_completion',
            questionText: 'Ambiguous sonar textures between gravel and oyster reefs are resolved using tethered ______ cameras.',
            correctAnswer: 'DROP-FRAME',
            explanation: 'Tethered drop-frame cameras perform visual ground-truthing.'
          },
          {
            id: 'cd_listening_p14_lq36',
            number: 36,
            type: 'fill_blank',
            questionText: 'Artificial lighting fitted to autonomous submersibles working in murky water: LED ______',
            correctAnswer: 'STROBES',
            explanation: 'AUVs glide low carrying bright LED strobes.'
          },
          {
            id: 'cd_listening_p14_lq37',
            number: 37,
            type: 'multiple_choice',
            questionText: 'Why do planners overlay bottom-current flow onto detailed seabed bathymetry?',
            options: [
              'A. To locate optimal oil rig anchor sites',
              'B. To accelerate municipal harbor dredging timetables',
              'C. To pinpoint fragile cold-water coral nurseries needing trawl protection',
              'D. To calculate ferry fuel consumption ratios'
            ],
            correctAnswer: 'C',
            explanation: 'Helps locate fragile cold-water coral nurseries threatened by trawls.'
          },
          {
            id: 'cd_listening_p14_lq38',
            number: 38,
            type: 'short_answer',
            questionText: 'Which prehistoric forest remnants appeared on modern seafloor maps?',
            correctAnswer: 'PINE TREE STUMPS',
            explanation: 'Maps revealed drowned ancient pine tree stumps.'
          },
          {
            id: 'cd_listening_p14_lq39',
            number: 39,
            type: 'fill_blank',
            questionText: 'Analytical hurdle raised by terabyte weekly ship captures: automated ______ flagging',
            correctAnswer: 'MACHINE-LEARNING',
            explanation: 'Automated machine-learning textures highlight worm-reef ridges.'
          },
          {
            id: 'cd_listening_p14_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'How do offshore wind cable planners use open seabed habitat atlases?',
            options: [
              'A. To steer cable trenches cleanly around spawning kelp zones',
              'B. To select cheap coastal dumping grounds',
              'C. To measure shoreline tidal storm surges',
              'D. To recruit civilian divers for inspection shifts'
            ],
            correctAnswer: 'A',
            explanation: 'Wind engineers route cables safely around kelp spawning corridors.'
          }
        ]
      }
    ]
  }),

  // =========================================================================
  // PRACTICE 15: Campus IT Helpdesk & Wireless Network Setup
  // =========================================================================
  buildListeningTest({
    id: 'cd_listening_p15',
    testNumber: 15,
    testType: 'practice',
    title: 'CD-IELTS Listening Practice 15: Campus IT Helpdesk & Wireless Network Setup',
    description:
      'Complete CD-IELTS Academic Listening test featuring 40 authentic questions across Sections 1, 2, 3, and 4 on Campus IT Helpdesk & Wireless Network Setup.',
    sections: [
      {
        sectionNumber: 1,
        title: 'Section 1: Resolving Campus Wi-Fi & Two-Factor Login',
        audioScenario:
          'A first-year computer engineering student calls the Campus IT Support Desk after switching phones and failing Eduroam Wi-Fi login.',
        audioDurationSeconds: 215,
        transcript: `[Audio Track 1 - Section 1: Campus IT Support Desk]
Technician: Campus IT Support Desk, Hannah speaking. How can I help you get back online?
Student: Hi Hannah, I dropped my phone in a puddle yesterday and bought a temporary replacement, so now both two-factor login and library Wi-Fi keep failing.
Technician: [[Q1]] Classic lockout situation—no worries, let me verify your record first. Could you spell your surname? Yes, it is Fernandez, spelled F-E-R-N-A-N-D-E-Z.
Technician: [[Q2]] Thanks. Before issuing a temporary authenticator token, please read out your six-digit student hall room code on your blue accommodation keyfob—mine is M-209.
Technician: [[Q3]] Perfect, identity verified! First let us fix Wi-Fi: never type your password directly onto Eduroam settings without installing our CampusNet onboarding profile first, because it installs our trusted security certificate.
Student: [[Q4]] Oh! Last time I tried bypassing that script, my laptop threw an encryption error. Where do I grab the installer safely offline? Connect briefly to the open "Campus-Setup" temporary network—it routes automatically onto setup.uni.edu without needing external internet.
Student: [[Q5]] Got it—do I type just my username or full institutional email on Eduroam? Always enter your full email ending in @uni.edu rather than your short eight-character login ID.
Technician: [[Q6]] Now for two-factor access: I have sent a single-use twelve-hour recovery SMS code to your spare backup number; scan the enrollment barcode inside Security Portal before midnight.
Student: [[Q7]] Also, my lab workstation requires virtual desktop streaming for CAD graphics packages—is campus broadband capped per day? Wired wall jacks inside dorm desks run uncapped gigabit speeds, whereas guest wireless portals throttle video uploads after fifty gigabytes monthly.
Technician: [[Q8]] Notice also our Walk-In Laptop Clinic in Turing Basement Room 04 repairs cracked hinges or cleans dusty cooling fans free of hardware-labour fees for enrolled students.
Student: [[Q9]] Helpful! What if I forget my Linux dual-boot password right before Friday’s practical coding exam? Bring photo ID directly to Counter Two before 16:30 weekdays—telephone staff cannot reset encrypted local machine passwords remotely.
Technician: [[Q10]] Before hanging up, jot down your support ticket reference IT-640 in case two-factor sync needs manual clearing after lunch.`,
        questions: [
          {
            id: 'cd_listening_p15_lq1',
            number: 1,
            type: 'fill_blank',
            questionText: 'Student surname: ______',
            correctAnswer: 'FERNANDEZ',
            explanation: 'Spelled F-E-R-N-A-N-D-E-Z.'
          },
          {
            id: 'cd_listening_p15_lq2',
            number: 2,
            type: 'short_answer',
            questionText: 'Student accommodation room code verified on the blue keyfob:',
            correctAnswer: 'M-209',
            explanation: 'Hall room code is M-209.'
          },
          {
            id: 'cd_listening_p15_lq3',
            number: 3,
            type: 'fill_blank',
            questionText: 'Missing credential installed automatically by the CampusNet onboarding profile: security ______',
            correctAnswer: 'CERTIFICATE',
            explanation: 'Onboarding installs the trusted security certificate.'
          },
          {
            id: 'cd_listening_p15_lq4',
            number: 4,
            type: 'short_answer',
            questionText: 'Temporary wireless network used offline to download the profile installer:',
            correctAnswer: 'CAMPUS-SETUP',
            explanation: 'Connect to temporary "Campus-Setup" network.'
          },
          {
            id: 'cd_listening_p15_lq5',
            number: 5,
            type: 'fill_blank',
            questionText: 'Required Eduroam login string instead of short username: full ______',
            correctAnswer: 'EMAIL',
            explanation: 'Enter full @uni.edu email rather than short ID.'
          },
          {
            id: 'cd_listening_p15_lq6',
            number: 6,
            type: 'fill_blank',
            questionText: 'Validity duration of the single-use two-factor recovery SMS token: ______ hours',
            correctAnswer: 'TWELVE',
            explanation: 'Issued a single-use twelve-hour recovery SMS token.'
          },
          {
            id: 'cd_listening_p15_lq7',
            number: 7,
            type: 'fill_blank',
            questionText: 'Monthly cap beyond which guest Wi-Fi throttles heavy uploads: ______ gigabytes',
            correctAnswer: 'FIFTY',
            explanation: 'Guest wireless throttles after fifty gigabytes monthly.'
          },
          {
            id: 'cd_listening_p15_lq8',
            number: 8,
            type: 'multiple_choice',
            questionText: 'What complimentary maintenance does Turing Room 04 provide students?',
            options: [
              'A. Free replacement solid-state hard drives',
              'B. Overnight laptop battery cell swaps',
              'C. Free annual antivirus tablet licenses',
              'D. Labour-free hinge repairs and dust-fan cleaning'
            ],
            correctAnswer: 'D',
            explanation: 'Repairs hinges or cleans cooling fans with zero labour fee.'
          },
          {
            id: 'cd_listening_p15_lq9',
            number: 9,
            type: 'multiple_choice',
            questionText: 'Why must encrypted local laptop password resets occur in person?',
            options: [
              'A. Students must pay a five-pound verification charge',
              'B. Telephone operators cannot reset local encrypted drives remotely',
              'C. Ethernet cables inside basements run faster',
              'D. Biometric thumbprints must be rescanned'
            ],
            correctAnswer: 'B',
            explanation: 'Phone staff cannot reset encrypted local passwords remotely.'
          },
          {
            id: 'cd_listening_p15_lq10',
            number: 10,
            type: 'fill_blank',
            questionText: 'IT ticket reference code provided before ending the call: ______',
            correctAnswer: 'IT-640',
            explanation: 'Support ticket reference is IT-640.'
          }
        ]
      },
      {
        sectionNumber: 2,
        title: 'Section 2: Campus Cybersecurity & Digital Hygiene Orientation',
        audioScenario:
          'A university chief information security officer warns incoming students against phishing campaigns, dorm router interference, and cloud sync gaps.',
        audioDurationSeconds: 210,
        transcript: `[Audio Track 2 - Section 2: Digital Induction Briefing]
CISO: Welcome incoming cohort! While campus IT keeps fiber networks racing at ten gigabits, everyday human habits dictate whether your thesis data stays safe until graduation.
CISO: [[Q11]] First rule across residential halls: do NOT plug personal domestic Wi-Fi routers into dormitory wall sockets—rogue broadcasts jam official radio channels and trigger automatic port blocks.
CISO: [[Q12]] If you own a smart speaker or games console lacking Eduroam login screens, register its hardware MAC address manually under our CampusDevices portal.
CISO: [[Q13]] Phishing alerts spiked sharply last October via bogus emails promising instant emergency energy rebates—always verify real senders end strictly in ".ac.uk" without sneaky extra hyphens.
CISO: [[Q14]] Never save thesis drafts exclusively onto one pocket thumb-drive: campus OneDrive vaults keep thirty days of version snapshots ready after accidental deletions or spills.
CISO: [[Q15]] Engineering students executing heavy Python simulations overnight should book High-Performance Computing cluster queues rather than running hot laptops smothered beneath wool blankets!
CISO: [[Q16]] Across shared computer labs, remember workstations wipe temporary desktop folders cleanly every time a user logs off, preserving zero local files between shifts.
CISO: [[Q17]] When borrowing free iPads from Library Desk Three for graphic design electives, confirm you wipe your private apple account cleanly before dropping tablets into return lockers.
CISO: [[Q18]] Every Thursday morning between four and five, routine security firewalls reboot briefly for twenty minutes—plan marathon dataset uploads around that quiet maintenance slot.
CISO: [[Q19]] Password hygiene tip: combine four unrelated memorable everyday words into passphrases instead of clever numeric substitutions, and store them safely inside our complimentary university password manager.
CISO: [[Q20]] Pick up silicone webcam privacy sliders at the red IT Information table beside the foyer lifts!`,
        questions: [
          {
            id: 'cd_listening_p15_lq11',
            number: 11,
            type: 'multiple_choice',
            questionText: 'Why are personal Wi-Fi routers banned inside student dormitory bedrooms?',
            options: [
              'A. Rogue signals jam campus channels and trigger port blocks',
              'B. Their power adapters trip sensitive hallway circuit breakers',
              'C. External hackers harvest dormitory MAC addresses',
              'D. They violate municipal broadcast tower licenses'
            ],
            correctAnswer: 'A',
            explanation: 'Rogue routers jam official radio channels and cause automatic port blocks.'
          },
          {
            id: 'cd_listening_p15_lq12',
            number: 12,
            type: 'short_answer',
            questionText: 'Which hardware identifier allows games consoles to connect via CampusDevices?',
            correctAnswer: 'MAC ADDRESS',
            explanation: 'Register the device hardware MAC address manually.'
          },
          {
            id: 'cd_listening_p15_lq13',
            number: 13,
            type: 'fill_blank',
            questionText: 'Fake inducement used in last October’s student phishing wave: energy ______',
            correctAnswer: 'REBATES',
            explanation: 'Fraudulent emails promised instant emergency energy rebates.'
          },
          {
            id: 'cd_listening_p15_lq14',
            number: 14,
            type: 'fill_blank',
            questionText: 'Days of file recovery snapshots retained inside campus OneDrive: ______ days',
            correctAnswer: 'THIRTY',
            explanation: 'OneDrive preserves thirty days of version snapshots.'
          },
          {
            id: 'cd_listening_p15_lq15',
            number: 15,
            type: 'summary_completion',
            questionText: 'Heavy overnight Python simulations belong on the High-Performance ______ cluster rather than bed-bound laptops.',
            correctAnswer: 'COMPUTING',
            explanation: 'Book High-Performance Computing cluster queues.'
          },
          {
            id: 'cd_listening_p15_lq16',
            number: 16,
            type: 'multiple_choice',
            questionText: 'What happens to files saved directly onto a shared lab PC desktop upon logout?',
            options: [
              'A. Files sync automatically to personal email',
              'B. Files lock visibly for the next student',
              'C. Administrators archive them for seven days',
              'D. Temporary local folders erase completely on sign-off'
            ],
            correctAnswer: 'D',
            explanation: 'Workstations wipe temporary local desktop folders cleanly at sign-off.'
          },
          {
            id: 'cd_listening_p15_lq17',
            number: 17,
            type: 'fill_blank',
            questionText: 'Stationery floor counter loaning free student iPads: Library Desk ______',
            correctAnswer: 'THREE',
            explanation: 'Loaned from Library Desk Three.'
          },
          {
            id: 'cd_listening_p15_lq18',
            number: 18,
            type: 'short_answer',
            questionText: 'On which weekday morning do routine 20-minute firewall updates run at 4 AM?',
            correctAnswer: 'THURSDAY',
            explanation: 'Security firewalls reboot Thursday mornings between four and five.'
          },
          {
            id: 'cd_listening_p15_lq19',
            number: 19,
            type: 'fill_blank',
            questionText: 'Recommended passphrase ingredient rather than trick digits: four unrelated ______',
            correctAnswer: 'WORDS',
            explanation: 'Combine four unrelated memorable words.'
          },
          {
            id: 'cd_listening_p15_lq20',
            number: 20,
            type: 'fill_blank',
            questionText: 'Silicone giveaway stacked on the red foyer IT table: webcam ______',
            correctAnswer: 'SLIDERS',
            explanation: 'Pick up silicone webcam privacy sliders.'
          }
        ]
      },
      {
        sectionNumber: 3,
        title: 'Section 3: Diagnosing Campus Wi-Fi Congestion Across Lecture Halls',
        audioScenario:
          'Network engineering students Jamal and Zoe inspect wireless packet-loss charts with Dr. Novak.',
        audioDurationSeconds: 220,
        transcript: `[Audio Track 3 - Section 3: Wireless Networks Tutorial]
Dr. Novak: Come in Jamal and Zoe. What did your packet-sniffing logs reveal inside our three-hundred-seat Chemistry Auditorium?
Jamal: [[Q21]] Interestingly, signal strength bars looked completely full across every corner, yet real download throughput collapsed ten minutes after noon because three hundred smartphones simultaneously polled legacy 2.4-gigahertz beacons.
Zoe: [[Q22]] Also, thick lead-lined acoustic walls beneath vintage wooden benches acted like Faraday shields, bouncing co-channel interference off ceiling domes endlessly.
Dr. Novak: Classic high-density stadium headache! Did lowering transmitter broadcast power counterintuitively boost classroom speeds?
Jamal: [[Q23]] Dramatic reversal—halving cell radius pushed client phones onto nearby quiet ceiling access points on five-gigahertz bands, cutting packet retries by seventy percent.
Dr. Novak: Beautiful radio engineering! How did you isolate genuine lecture video drops from noisy laptop operating-system background updates?
Zoe: [[Q24]] We filtered anonymized traffic headers by TCP port destination so cloud OS patch torrents stayed separate from live quiz streams.
Dr. Novak: [[Q25]] Clean methodology! Wait—when plotting latency percentiles in Figure Four, replace mean averages with ninety-fifth percentile tail bars because occasional five-second freezes ruin quizzes far worse than steady averages imply.
Jamal: [[Q26]] Spot on—half the hall reported smooth polling even while back-row tables endured twenty-second timeouts during timed exam clicks.
Zoe: [[Q27]] Regarding hardware roaming, older laptops stubbornly clung onto distant corridor access points instead of switching cleanly as students walked downstairs.
Dr. Novak: [[Q28]] Test enabling fast-transition roaming flags inside the test bench VLAN before proposing campus-wide firmware changes.
Jamal: For our final engineering showcase slide deck, should we map access point mounting heights above acoustic ceiling tiles too?
Dr. Novak: [[Q29]] Include one crisp cross-section photo showing steel ductwork blockage clearly.
Jamal: [[Q30]] Got it—we will prepare our live packet demo cleanly before Friday’s Industry Panel.`,
        questions: [
          {
            id: 'cd_listening_p15_lq21',
            number: 21,
            type: 'fill_blank',
            questionText: 'Congested legacy radio frequency overwhelmed by 300 devices at noon: ______ gigahertz',
            correctAnswer: '2.4',
            explanation: 'Devices clogged legacy 2.4-gigahertz beacons.'
          },
          {
            id: 'cd_listening_p15_lq22',
            number: 22,
            type: 'short_answer',
            questionText: 'Which hidden wall material reflected wireless interference repeatedly like a shield?',
            correctAnswer: 'LEAD-LINED ACOUSTIC WALLS',
            explanation: 'Lead-lined acoustic walls trapped and bounced signals.'
          },
          {
            id: 'cd_listening_p15_lq23',
            number: 23,
            type: 'multiple_choice',
            questionText: 'What surprising effect followed cutting transmitter broadcast power in half?',
            options: [
              'A. Back-row laptops lost signal completely',
              'B. Battery consumption doubled on classroom projectors',
              'C. Devices jumped onto cleaner 5 GHz nodes, slashing packet retries by 70%',
              'D. Corridor routers overheated during noon breaks'
            ],
            correctAnswer: 'C',
            explanation: 'Clients shifted to quieter 5 GHz ceiling points, cutting retries by 70%.'
          },
          {
            id: 'cd_listening_p15_lq24',
            number: 24,
            type: 'fill_blank',
            questionText: 'Network identifier filtered to separate OS update torrents from quiz packets: TCP ______',
            correctAnswer: 'PORT',
            explanation: 'Filtered traffic by TCP port destination.'
          },
          {
            id: 'cd_listening_p15_lq25',
            number: 25,
            type: 'summary_completion',
            questionText: 'Figure Four must swap simple averages for ninety-fifth ______ latency tail bars.',
            correctAnswer: 'PERCENTILE',
            explanation: 'Dr. Novak asks for 95th percentile bars to show brief freeze spikes.'
          },
          {
            id: 'cd_listening_p15_lq26',
            number: 26,
            type: 'fill_blank',
            questionText: 'Length of timeout freezes endured at back-row desks during timed quizzes: ______ seconds',
            correctAnswer: 'TWENTY',
            explanation: 'Back-row tables suffered twenty-second timeouts.'
          },
          {
            id: 'cd_listening_p15_lq27',
            number: 27,
            type: 'multiple_choice',
            questionText: 'What roaming flaw affected older laptops when students moved downstairs?',
            options: [
              'A. Laptops dropped DNS servers completely',
              'B. Devices stayed locked onto distant corridor access points',
              'C. Security certificates prompted hourly logins',
              'D. Bluetooth mice blocked internal Wi-Fi antennas'
            ],
            correctAnswer: 'B',
            explanation: 'Older laptops clung stubbornly onto distant corridor access points.'
          },
          {
            id: 'cd_listening_p15_lq28',
            number: 28,
            type: 'short_answer',
            questionText: 'Where should fast-transition roaming settings be tested prior to full deployment?',
            correctAnswer: 'TEST BENCH VLAN',
            explanation: 'Trial inside the test bench VLAN first.'
          },
          {
            id: 'cd_listening_p15_lq29',
            number: 29,
            type: 'fill_blank',
            questionText: 'Overhead building obstacle depicted in the cross-section photo: steel ______',
            correctAnswer: 'DUCTWORK',
            explanation: 'Photo shows steel ductwork blocking radio waves.'
          },
          {
            id: 'cd_listening_p15_lq30',
            number: 30,
            type: 'fill_blank',
            questionText: 'Day of the live packet demonstration for the Industry Panel: ______',
            correctAnswer: 'FRIDAY',
            explanation: 'Live packet demo runs before Friday’s Industry Panel.'
          }
        ]
      },
      {
        sectionNumber: 4,
        title: 'Section 4: The Evolution of Radio Spectrum Allocation & Wi-Fi',
        audioScenario:
          'A telecommunications historian lectures on how unused military radio bands unlocked global unlicensed wireless networking.',
        audioDurationSeconds: 225,
        transcript: `[Audio Track 4 - Section 4: History of Wireless Communications]
Lecturer: Today, wireless internet feels virtually invisible like breathable air—yet Wi-Fi almost died in regulatory red tape before its very first router shipped.
Lecturer: [[Q31]] Until 1985, virtually every crisp slice of electromagnetic radio spectrum required expensive exclusive government auctions reserved strictly for television networks or taxi dispatches.
Lecturer: [[Q32]] One tiny band around two point four gigahertz was mocked by broadcasters as useless "garbage spectrum," noisy because everyday microwave ovens leaked heat energy inside those same waves.
Lecturer: [[Q33]] Visionary regulators at the US Federal Communications Commission opened those messy leftover frequencies unlicensed, gambling that clever engineers might tame background static safely.
Lecturer: [[Q34]] Crucially, telecom pioneer Vic Hayes and international committees standardized IEEE 802.11 rules in 1997 using spread-spectrum hopping so neighboring offices wouldn’t jam one another.
Lecturer: [[Q35]] Early laboratory routers transferred barely two megabits per second—barely fast enough for plain text—yet the 1999 iBook laptop placed hidden loop antennas around its display lid, sparking mass consumer adoption.
Lecturer: [[Q36]] Notice a branding fluke: engineers despised clunky technical digits, hiring consultants who invented the catchy phrase "Wi-Fi" simply to echo nostalgic stereo "Hi-Fi" signage.
Lecturer: [[Q37]] Soon wireless demand overwhelmed shared streets, prompting regulators to unlock wider five- and six-gigahertz corridors offering dozens of non-overlapping channels.
Lecturer: [[Q38]] Higher frequencies carry exhilarating data payloads cleanly, yet physics imposes a strict catch: six-gigahertz waves bounce sharply off concrete pillars and wet leafy trees.
Lecturer: [[Q39]] Contemporary campus architects therefore pair multi-band ceiling antennas with sleek fiber backbones hidden inside corridor ceiling voids rather than expecting solitary lobby beacons to pierce thick walls.
Lecturer: [[Q40]] Ultimately, Wi-Fi proves that setting aside small commons of open unlicensed spectrum unleashes far wider economic innovation than auctioning every single frequency privately.`,
        questions: [
          {
            id: 'cd_listening_p15_lq31',
            number: 31,
            type: 'fill_blank',
            questionText: 'Mechanism controlling most radio frequencies prior to 1985: government ______',
            correctAnswer: 'AUCTIONS',
            explanation: 'Clean spectrum slices required costly exclusive government auctions.'
          },
          {
            id: 'cd_listening_p15_lq32',
            number: 32,
            type: 'short_answer',
            questionText: 'Which kitchen appliance leaked interference inside the 2.4 GHz "garbage band"?',
            correctAnswer: 'MICROWAVE OVENS',
            explanation: 'Everyday microwave ovens leaked radio energy at 2.4 GHz.'
          },
          {
            id: 'cd_listening_p15_lq33',
            number: 33,
            type: 'multiple_choice',
            questionText: 'What gamble did regulators take in 1985 with leftover noisy frequencies?',
            options: [
              'A. Selling bands exclusively to university hospitals',
              'B. Converting submarine sonar frequencies to FM radio',
              'C. Banning all residential cordless phones',
              'D. Opening bands unlicensed for engineers to innovate around interference'
            ],
            correctAnswer: 'D',
            explanation: 'Regulators opened leftover bands unlicensed for technical innovation.'
          },
          {
            id: 'cd_listening_p15_lq34',
            number: 34,
            type: 'fill_blank',
            questionText: 'Transmission technique in 1997 IEEE 802.11 preventing neighbor jamming: ______ hopping',
            correctAnswer: 'SPREAD-SPECTRUM',
            explanation: 'Standardized spread-spectrum hopping across channels.'
          },
          {
            id: 'cd_listening_p15_lq35',
            number: 35,
            type: 'fill_blank',
            questionText: 'Early 1999 laptop placing dual wireless antennas inside its screen bezel: ______',
            correctAnswer: 'IBOOK',
            explanation: 'The 1999 iBook sparked widespread consumer adoption.'
          },
          {
            id: 'cd_listening_p15_lq36',
            number: 36,
            type: 'summary_completion',
            questionText: 'Brand consultants coined "Wi-Fi" to mirror classic home-audio ______ terminology.',
            correctAnswer: 'HI-FI',
            explanation: 'Chosen to echo stereo "Hi-Fi" signage.'
          },
          {
            id: 'cd_listening_p15_lq37',
            number: 37,
            type: 'fill_blank',
            questionText: 'Key advantage added when opening five- and six-gigahertz radio bands: non-overlapping ______',
            correctAnswer: 'CHANNELS',
            explanation: 'Unlocked dozens of non-overlapping channels.'
          },
          {
            id: 'cd_listening_p15_lq38',
            number: 38,
            type: 'multiple_choice',
            questionText: 'What physical limitation affects fast six-gigahertz wireless waves?',
            options: [
              'A. Signals struggle to pierce concrete walls and dense wet foliage',
              'B. Waves cause static echoes inside metal elevators only',
              'C. Higher bands drain smartphone screens twice faster',
              'D. Satellite weather radar disrupts nocturnal downloads'
            ],
            correctAnswer: 'A',
            explanation: 'Six-gigahertz waves bounce sharply off concrete pillars and wet trees.'
          },
          {
            id: 'cd_listening_p15_lq39',
            number: 39,
            type: 'short_answer',
            questionText: 'What wired network runs hidden inside ceiling voids to feed modern antennas?',
            correctAnswer: 'FIBER BACKBONES',
            explanation: 'Antennas connect to sleek fiber backbones.'
          },
          {
            id: 'cd_listening_p15_lq40',
            number: 40,
            type: 'multiple_choice',
            questionText: 'What central economic lesson does Wi-Fi history teach regulators?',
            options: [
              'A. Private spectrum auctions maximize wireless broadband speed',
              'B. Shared unlicensed radio commons foster massive societal innovation',
              'C. Government satellites outperform ground Wi-Fi networks',
              'D. Lower-frequency radio waves should replace optical fiber'
            ],
            correctAnswer: 'B',
            explanation: 'Maintaining unlicensed commons drives broader economic innovation.'
          }
        ]
      }
    ]
  })
];
