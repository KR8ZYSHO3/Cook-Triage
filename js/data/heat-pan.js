const CATEGORY_HEAT_PAN = {
  id: "heat-pan",
  icon: "🔥",
  title: "Pan & heat",
  description: "Stuck, burnt outside raw inside, scorched stew, smoking oil, uneven heat",
  hint: "Pan problems are heat management — fix the process, usually save the food.",
  symptoms: [
    {
      id: "stuck",
      label: "Food stuck / won't release",
      causes: [
        {
          title: "Flipped too early or pan not hot enough",
          likelihood: "most-likely",
          explanation: "Proteins form bonds with metal until they naturally release when properly seared.",
          fixes: [
            "Wait — if stuck, it's not ready. Give 30–60 more seconds, then nudge gently.",
            "Deglaze: splash wine, stock, or water to loosen fond without forcing.",
            "If tearing: lower heat, cover, steam-finish — presentation suffers, taste often fine.",
            "Next time: dry surface, preheat pan until oil shimmers, don't move until release.",
            "Use fish spatula or thin offset for delicate items."
          ],
          tip: "If it releases cleanly with a gentle nudge, you timed it right.",
          ifNotFixed: "Scrape stuck bits into pan sauce — fond is flavor if not burnt."
        },
        {
          title: "Pan not seasoned or wrong surface for the food",
          likelihood: "common",
          explanation: "Eggs and fish on bare stainless without enough fat; sticky marinade with sugar.",
          fixes: [
            "More fat: oil should coat, not just slick.",
            "Flour or starch dredge creates release layer.",
            "Nonstick for eggs and delicate fish.",
            "Pat meat dry — moisture is glue.",
            "Don't use sugary marinade in hot dry pan — burns and sticks."
          ],
          tip: "Sugar in marinade = caramel glue. Wipe excess, or sauce after sear."
        },
        {
          title: "Pan temperature crashed from overcrowding",
          likelihood: "common",
          explanation: "Too much food at once drops temp — food steams and bonds instead of searing.",
          fixes: [
            "Cook in batches — keep finished food warm in low oven.",
            "Smaller pieces cook faster with better sear.",
            "Let pan reheat between batches.",
            "Blot moisture — wet food kills heat."
          ],
          tip: "Sizzle should be constant when food hits — silence means overcrowded or cold pan."
        }
      ]
    },
    {
      id: "burnt-outside-raw-inside",
      label: "Burnt outside, raw inside",
      causes: [
        {
          title: "Pan too hot",
          likelihood: "most-likely",
          explanation: "Maillard went to charcoal before heat penetrated center.",
          fixes: [
            "Move to 350°F / 175°C oven to finish gently — don't keep blasting stovetop.",
            "Lower heat, cover, steam-finish center 3–5 min.",
            "Scrape burnt exterior off individual pieces if taste is acrid.",
            "Cut thick pieces in half to reduce center distance.",
            "Next time: medium-high, not max — oil shimmers, doesn't smoke heavily."
          ],
          tip: "Smoke billowing = pan too hot. Pull heat back before fat burns.",
          ifNotFixed: "If outside is charcoal: trim burnt crust, oven-finish center, sauce heavily."
        },
        {
          title: "Meat too cold or too thick for stovetop-only",
          likelihood: "common",
          explanation: "Ice-cold 2-inch steak or chicken breast — outside chars while center stays raw.",
          fixes: [
            "Temper meat 30 min on counter.",
            "Pound to even thickness.",
            "Reverse sear: oven to temp, quick sear at end.",
            "Use thermometer — don't guess doneness by outside color."
          ],
          tip: "Anything over 1.5 inches thick wants oven finish — stovetop alone isn't enough."
        },
        {
          title: "Sugar or marinade burning",
          likelihood: "less-common",
          explanation: "Honey, BBQ sauce, or soy-heavy marinade chars before meat cooks.",
          fixes: [
            "Sear plain, add sauce last 2 min only.",
            "Lower heat when saucing.",
            "Brush sauce in layers, not one thick coat early.",
            "Scrape burnt sauce, reapply fresh glaze at end."
          ],
          tip: "Sauce is makeup — put it on at the end, not the beginning."
        }
      ]
    },
    {
      id: "scorched-stew",
      label: "Stew / soup has burnt taste",
      causes: [
        {
          title: "Scorched bottom — didn't stir",
          likelihood: "most-likely",
          explanation: "Thick contents sitting on high heat without scraping bottom. One burnt spot flavors whole pot.",
          fixes: [
            "Stop stirring from bottom — transfer everything above burn line to new pot immediately.",
            "Do NOT scrape burnt layer into new pot.",
            "Taste transferred portion — if acrid, dilute with unsalted stock.",
            "If smoke-bitter is strong: discard — burnt taste doesn't cook out.",
            "Lower heat, heavy pot, stir bottom every few minutes going forward."
          ],
          tip: "Burnt taste doesn't cook out. Transfer early or start fresh base.",
          ifNotFixed: "Mild scorch: transfer top, add acid and fresh aromatics — only works if you caught it early."
        },
        {
          title: "Heat too high during simmer",
          likelihood: "common",
          explanation: "Full boil instead of gentle simmer — contents bounce on bottom and scorch.",
          fixes: [
            "Simmer = occasional bubble, not rolling boil.",
            "Use diffuser ring on electric stoves.",
            "Stir bottom every 5 min during reduction.",
            "Add splash of liquid if stew thickened and sticks."
          ],
          tip: "If you hear aggressive bubbling, it's boiling — lower the heat."
        },
        {
          title: "Tomato or dairy scorched on bottom",
          likelihood: "common",
          explanation: "Tomato paste and milk solids stick and burn fast on unscraped bottom.",
          fixes: [
            "Bloom tomato paste in oil 1 min, then immediately add liquid.",
            "Add dairy off heat or at very low simmer.",
            "Deglaze bottom every time you add tomato or cream.",
            "Transfer if burnt — see above."
          ],
          tip: "Tomato paste burns in 60 seconds on high dry heat — liquid follows fast."
        }
      ]
    },
    {
      id: "smoking-oil",
      label: "Oil smoking / kitchen full of smoke",
      causes: [
        {
          title: "Oil past its smoke point or pan too hot",
          likelihood: "most-likely",
          explanation: "Olive oil, butter, or unrefined oils smoke at moderate heat. Empty pan overheated before oil.",
          fixes: [
            "Pull pan off heat immediately. Ventilate — open window, run fan.",
            "Wipe out smoking oil, start fresh with higher smoke-point oil (avocado, grapeseed, refined canola).",
            "Lower heat to medium-high, not max.",
            "Add oil to pan, then food — don't heat empty dry too long.",
            "If food not yet added: let pan cool 2 min, fresh oil, lower heat."
          ],
          tip: "Smoke before food goes in = pan too hot or wrong oil. Not a 'seasoning' moment.",
          ifNotFixed: "If oil is black and acrid, wipe pan completely — burnt oil flavors everything."
        },
        {
          title: "Old or contaminated oil",
          likelihood: "common",
          explanation: "Reused frying oil, dirty pan residue, or rancid oil smokes at lower temps.",
          fixes: [
            "Fresh oil for each high-heat cook.",
            "Clean pan — burnt fond lowers smoke point.",
            "Strain and store fry oil properly; discard when dark or smelly.",
            "Butter + oil mix raises smoke point slightly — butter alone smokes fast."
          ],
          tip: "Smoking reused fry oil means it's done — discard, don't push through."
        },
        {
          title: "Food moisture causing violent splatter and smoke",
          likelihood: "less-common",
          explanation: "Wet meat or ice crystals hit hot oil — splatter burns, smokes, sets off alarms.",
          fixes: [
            "Pat food bone-dry with paper towels.",
            "Temper frozen food — don't drop ice-cold into hot oil.",
            "Use splatter screen.",
            "Lower food gently away from you.",
            "Less oil depth for wet items — shallow sear, not shallow fry."
          ],
          tip: "Paper towel should be clean after patting — if wet, keep patting."
        }
      ]
    },
    {
      id: "uneven-heat",
      label: "Uneven cooking / hot spots",
      causes: [
        {
          title: "Pan too thin or wrong size for burner",
          likelihood: "most-likely",
          explanation: "Thin aluminum warps; small pan on large burner scorches center ring.",
          fixes: [
            "Match pan base to burner — flame shouldn't lick pan sides.",
            "Use heavy-bottomed stainless, cast iron, or clad.",
            "Rotate pan 90° halfway through cook on known hot-spot burners.",
            "Stir/stir-fry in batches from center to edges.",
            "Preheat longer on lower heat for even soak."
          ],
          tip: "If one half of your pan always burns, it's the pan-burner match — not you.",
          ifNotFixed: "Move food from hot zone to cool zone on same pan — shuffle pieces like chess."
        },
        {
          title: "Cold food or uneven piece sizes",
          likelihood: "common",
          explanation: "Thick and thin pieces in same pan finish at different times.",
          fixes: [
            "Cut uniform pieces.",
            "Start thick pieces first, add thin later.",
            "Pound chicken to even thickness.",
            "Room-temp meat cooks more evenly than fridge-cold."
          ],
          tip: "Uniformity is free insurance — same size, same time."
        },
        {
          title: "Oven hot spots or wrong rack position",
          likelihood: "common",
          explanation: "Back of oven hotter; one rack side browns faster.",
          fixes: [
            "Rotate pan 180° halfway through bake.",
            "Use center rack unless recipe says otherwise.",
            "Oven thermometer — many ovens run 25–50°F off.",
            "Double-pan (sheet under dish) insulates bottom from hot spot."
          ],
          tip: "Get an oven thermometer — '350' on the dial is often a lie."
        },
        {
          title: "Electric coil or induction zone mismatch",
          likelihood: "less-common",
          explanation: "Coil smaller than pan = cold edges. Induction needs ferrous pan contact.",
          fixes: [
            "Use pan that fully covers burner.",
            "On electric: preheat extra 5 min for even coil heat.",
            "Cast iron on induction — verify pan is induction-compatible.",
            "Finish in oven for even heat penetration."
          ],
          tip: "Pan bigger than burner = cold edges forever — size down or oven finish."
        }
      ]
    }
  ]
};