const TRIAGE_DATA = [
  {
    id: "flavor",
    icon: "🧂",
    title: "Tastes wrong",
    description: "Too salty, bland, sour, or spicy",
    hint: "Flavor problems are almost always fixable without starting over.",
    symptoms: [
      {
        id: "too-salty",
        label: "Way too salty",
        causes: [
          {
            title: "Reduced too far or seasoned twice",
            explanation: "Liquid cooked down and concentrated the salt, or salt was added at multiple stages without tasting.",
            fixes: [
              "Dilute: add unsalted liquid (water, stock, coconut milk) until it tastes right.",
              "Balance: stir in acid (lemon, vinegar) and a touch of fat (butter, cream) — salt tastes louder when flat.",
              "Bulk it up: add more unsalted base (rice, potatoes, beans, pasta) to spread the salt across more volume.",
              "Last resort for soups/stews: float potato chunks 15–20 min, then remove — they absorb some salt (mild effect)."
            ],
            tip: "Fix in small steps. Taste after every addition — you can always add more liquid, not less salt."
          },
          {
            title: "Used salted stock or canned goods",
            explanation: "Store-bought broth, soy sauce, feta, capers, and canned tomatoes bring hidden salt.",
            fixes: [
              "Switch to unsalted liquid for the rest of the cook — don't add more salty ingredients.",
              "Rinse canned beans or vegetables if they weren't drained well.",
              "Counter with acid + sweetness: a splash of vinegar and pinch of sugar can make salt feel less aggressive."
            ],
            tip: "Write down which ingredients were salty — that's your root cause for next time."
          }
        ]
      },
      {
        id: "too-bland",
        label: "Flat / boring — no flavor",
        causes: [
          {
            title: "Missing salt, acid, or fat",
            explanation: "The 'flavor triangle': most dull food is missing at least one of these, not more random spices.",
            fixes: [
              "Salt first: add in pinches, taste, repeat — salt wakes everything up.",
              "Add acid: lemon juice, vinegar, or tomato — stops food from tasting one-note.",
              "Finish with fat: olive oil, butter, or cream rounds harsh edges and carries aroma.",
              "Umami boost: soy sauce, parmesan rind, miso paste, or a dash of fish sauce (won't taste fishy in small amounts)."
            ],
            tip: "Season in layers during cooking, but always do a final taste-and-adjust right before serving."
          },
          {
            title: "Aromatics undercooked or burnt",
            explanation: "Garlic/onion/spices need proper sweating. Burnt aromatics taste bitter and mute everything else.",
            fixes: [
              "If not burnt: simmer 5 more minutes so flavors meld — time fixes underdeveloped dishes.",
              "If slightly burnt: transfer good top layer to a new pot; don't scrape the bottom.",
              "Add fresh garlic or herbs at the end (off heat) for a brightness bump."
            ],
            tip: "Smell the pan — toasted (good) vs. acrid (burnt) tells you which path to take."
          }
        ]
      },
      {
        id: "too-spicy",
        label: "Too hot / spicy",
        causes: [
          {
            title: "Fresh chiles or hot sauce added too aggressively",
            explanation: "Capsaicin concentrates as liquid reduces. Heat also builds while sitting.",
            fixes: [
              "Dilute with more base: broth, coconut milk, cream, or plain tomatoes.",
              "Add dairy or fat: yogurt, sour cream, butter, or cheese — capsaicin binds to fat.",
              "Sweet + acid: honey or sugar plus lime/vinegar makes heat feel less sharp.",
              "Serve over bland starch: rice, bread, or potatoes absorb heat per bite."
            ],
            tip: "Never try to 'water down' with only water — you'll lose body. Match the diluent to the dish."
          }
        ]
      },
      {
        id: "too-sour",
        label: "Too sour / acidic",
        causes: [
          {
            title: "Too much acid or wine didn't cook off",
            explanation: "Vinegar, lemon, wine, or tomatoes added late or in excess.",
            fixes: [
              "Balance with fat: butter, cream, or olive oil mellows sharp acid.",
              "Tiny pinch of sugar or honey — not to sweeten, just to round.",
              "Add depth: splash of soy sauce or caramelized onions for umami counterweight.",
              "If it's a sauce: simmer 5–10 min uncovered so raw alcohol/vinegar smell cooks off."
            ],
            tip: "Add acid at the end next time — it's the easiest thing to overdo early."
          }
        ]
      }
    ]
  },
  {
    id: "rice",
    icon: "🍚",
    title: "Rice problems",
    description: "Mushy, crunchy, burnt, or gummy",
    hint: "Rice fails are usually ratio, heat, or lid issues — all diagnosable.",
    symptoms: [
      {
        id: "mushy",
        label: "Mushy / porridge texture",
        causes: [
          {
            title: "Too much water or stirred while cooking",
            explanation: "Excess water breaks grains. Stirring releases starch and turns rice gluey.",
            fixes: [
              "Right now: drain excess water, spread rice on a sheet pan, bake at 300°F / 150°C 5–10 min to dry out.",
              "Repurpose: fried rice (day-old works best), rice pudding, or add to soup as thickener.",
              "Next time: rinse until water runs clearer; use 1:1.5 ratio for white rice; don't stir once simmering."
            ],
            tip: "Mushy rice isn't poison — it's a different dish waiting to happen."
          }
        ]
      },
      {
        id: "crunchy",
        label: "Still hard / crunchy inside",
        causes: [
          {
            title: "Not enough water or lid lifted too early",
            explanation: "Steam escaped before grains fully hydrated.",
            fixes: [
              "Add 2–3 tbsp hot water, cover tightly, low heat 10 min, then rest off heat 10 min — don't peek.",
              "If bottom is fine but top is hard: poke holes with a chopstick, sprinkle water on top, cover, steam 5 min.",
              "If mostly raw: add enough water to cover by ½ inch, simmer covered until absorbed."
            ],
            tip: "The rest period is not optional — rice finishes cooking off heat in trapped steam."
          }
        ]
      },
      {
        id: "burnt-bottom",
        label: "Burnt on the bottom (top might be fine)",
        causes: [
          {
            title: "Heat too high or pot too thin",
            explanation: "Bottom scorched while top looks OK — classic thin-pot problem.",
            fixes: [
              "Do NOT scrape the bottom — transfer top layers to a new bowl, leave burnt layer behind.",
              "If smell is smoky but rice tastes OK: serve top portion; discard bottom.",
              "Soak burnt pot with baking soda + water overnight — don't fight it while cooking."
            ],
            tip: "A tight lid + lowest simmer prevents 90% of rice burn cases."
          }
        ]
      }
    ]
  },
  {
    id: "sauce",
    icon: "🥄",
    title: "Sauce issues",
    description: "Split, greasy, too thin, or too thick",
    hint: "Sauces fail from heat shock, emulsion breaks, or wrong thickness — each has a fix.",
    symptoms: [
      {
        id: "split",
        label: "Curdled / split / grainy",
        causes: [
          {
            title: "Dairy overheated or acid added to hot cream",
            explanation: "Milk proteins seize above ~180°F / 82°C or when acid hits boiling dairy.",
            fixes: [
              "Remove from heat immediately. Blend with immersion blender or whisk in ice cube to shock cool.",
              "Rescue: whisk slurry of cornstarch + cold milk, add off heat, warm gently — don't boil.",
              "If completely broken: strain out solids, use liquid as base for a new sauce with fresh cream (off heat)."
            ],
            tip: "Temper dairy: add hot liquid to cold cream slowly, or stir cream in off heat."
          },
          {
            title: "Butter/emulsion sauce broke",
            explanation: "Hollandaise, pan sauce, or butter sauce separated from too much heat or cold shock.",
            fixes: [
              "Warm bowl over simmering water. Whisk in a teaspoon of cold water drop by drop until smooth.",
              "Or: blend 1 egg yolk + 1 tbsp water, slowly whisk broken sauce into it over low heat.",
              "Pan sauce shortcut: whisk in cold butter off heat, one cube at a time."
            ],
            tip: "Low and slow wins. Broken emulsions are chemistry problems — temperature is the lever."
          }
        ]
      },
      {
        id: "too-thin",
        label: "Too watery / won't coat",
        causes: [
          {
            title: "Not reduced or no thickener",
            explanation: "High water content, low gelatin, or skipped reduction step.",
            fixes: [
              "Simmer uncovered on medium until it coats the back of a spoon.",
              "Slurry: 1 tsp cornstarch + 1 tbsp cold water, whisk in, simmer 1 min.",
              "Mount with cold butter off heat for glossy body without cornstarch.",
              "Add reduction helpers: tomato paste, mashed beans, or cream."
            ],
            tip: "Reduce before you thicken — cornstarch on watery bland sauce = bland glue."
          }
        ]
      },
      {
        id: "too-thick",
        label: "Too thick / gluey",
        causes: [
          {
            title: "Over-reduced or too much starch",
            explanation: "Cooked too long uncovered or too much flour/cornstarch added.",
            fixes: [
              "Thin with warm stock, milk, or pasta water — add splash by splash.",
              "Whisk vigorously while reheating to break up starch clumps.",
              "If salty now too: dilute with unsalted liquid only."
            ],
            tip: "Pasta water is the cheat code — thins and adds body at once."
          }
        ]
      },
      {
        id: "greasy",
        label: "Pool of oil on top",
        causes: [
          {
            title: "Fat separated from sauce",
            explanation: "Too much fat added, or sauce broke under heat.",
            fixes: [
              "Skim oil with ladle or paper towel laid on surface.",
              "Blend briefly with immersion blender to re-emulsify.",
              "Add splash of stock + whisk in cold butter off heat.",
              "Stir in spoon of mustard or tomato paste — emulsifiers that bring fat back in."
            ],
            tip: "Grease on top often means the sauce is salvageable underneath — skim first, taste second."
          }
        ]
      }
    ]
  },
  {
    id: "protein",
    icon: "🍗",
    title: "Meat & protein",
    description: "Dry, tough, undercooked, or overcooked",
    hint: "Protein mistakes are timing and heat — some can be rescued, some become lesson #2.",
    symptoms: [
      {
        id: "dry",
        label: "Dry (especially chicken / pork)",
        causes: [
          {
            title: "Overcooked past safe temp",
            explanation: "Lean cuts have little fat — a few degrees past target and moisture plummets.",
            fixes: [
              "Slice and serve with pan sauce, gravy, or yogurt sauce — moisture on the plate helps.",
              "Toss shredded dry meat into soup, curry, or fried rice where broth carries it.",
              "Brine or marinade next time; pull chicken at 160°F / 71°C — carryover hits 165°F."
            ],
            tip: "A thermometer costs less than one ruined dinner. It's the highest-ROI kitchen tool."
          }
        ]
      },
      {
        id: "tough",
        label: "Chewy / tough",
        causes: [
          {
            title: "Wrong cut for method or not rested",
            explanation: "Fast cooking on tough cuts, or sliced immediately so juices ran out.",
            fixes: [
              "Slice thin against the grain — shortens chewy muscle fibers.",
              "Braise rescue: return to liquid, low simmer 30–60 min if cut allows (chuck, shoulder, thighs).",
              "Rest meat 5–10 min before cutting — juices redistribute instead of flooding the board."
            ],
            tip: "Tough and dry are different problems. Tough = technique/cut; dry = temperature."
          }
        ]
      },
      {
        id: "undercooked",
        label: "Raw / pink inside (you need it done)",
        causes: [
          {
            title: "Heat too high outside, cold center",
            explanation: "Seared the exterior before center reached safe temp.",
            fixes: [
              "Finish in oven at 350°F / 175°C until center hits safe temp — don't blast stovetop.",
              "Cut thick pieces in half to finish cooking faster without burning outside.",
              "Add splash of liquid, cover, low heat — steam-finish the center."
            ],
            tip: "Safe temps: poultry 165°F, ground meat 160°F, whole cuts beef/pork 145°F with rest."
          }
        ]
      }
    ]
  },
  {
    id: "pan",
    icon: "🔥",
    title: "Pan & heat",
    description: "Stuck, burnt, or uneven cooking",
    hint: "Pan problems are usually heat management — fix the process, save the food.",
    symptoms: [
      {
        id: "stuck",
        label: "Food stuck / won't release",
        causes: [
          {
            title: "Flipped too early or pan not hot enough",
            explanation: "Proteins form bonds with metal until they naturally release when seared.",
            fixes: [
              "Wait — if it's stuck, it's not ready. Give it 30–60 more seconds, then try again.",
              "Deglaze: splash wine, stock, or water to loosen fond without forcing.",
              "If tearing: lower heat, cover, steam-finish — presentation suffers, taste often fine."
            ],
            tip: "If it releases cleanly with a gentle nudge, you timed it right."
          }
        ]
      },
      {
        id: "burnt-outside",
        label: "Burnt outside, raw inside",
        causes: [
          {
            title: "Pan too hot",
            explanation: "Maillard went to charcoal before heat penetrated.",
            fixes: [
              "Move to oven to finish gently, or lower heat and cover to steam the center.",
              "Scrape burnt exterior off individual pieces if taste is acrid.",
              "Next time: medium-high, not max — oil should shimmer, not smoke heavily."
            ],
            tip: "Smoke billowing = pan too hot. Pull heat back before fat burns."
          }
        ]
      },
      {
        id: "stew-stuck",
        label: "Stew/soup burnt taste",
        causes: [
          {
            title: "Scorched bottom — didn't stir",
            explanation: "Thick contents sitting on high heat without scraping the bottom.",
            fixes: [
              "Stop stirring from bottom — transfer everything above the burn line to a new pot immediately.",
              "Taste: if acrid, don't mask with spices — discard if smoke-bitter is strong.",
              "Prevention: lower heat, stir bottom every few minutes, use heavy pot."
            ],
            tip: "Burnt taste doesn't cook out. Transfer early or start fresh base."
          }
        ]
      }
    ]
  },
  {
    id: "bread-bake",
    icon: "🥖",
    title: "Baking mishaps",
    description: "Dense, sunken, salty dough, cracked tops",
    hint: "Baking is less forgiving than stovetop — but many failures are fixable on the next batch.",
    symptoms: [
      {
        id: "dense",
        label: "Dense / brick-like",
        causes: [
          {
            title: "Overmixed or dead leavening",
            explanation: "Gluten overdeveloped (muffins/quick bread) or baking powder too old.",
            fixes: [
              "This batch: toast slices, use as croutons, bread pudding, or French toast — density hides in custard.",
              "Test leavening: baking powder in water should fizz vigorously.",
              "Mix dry + wet until just combined — lumps are fine."
            ],
            tip: "Check expiration on baking powder/soda before you blame yourself."
          }
        ]
      },
      {
        id: "sunken",
        label: "Cake sank in the middle",
        causes: [
          {
            title: "Underbaked or oven door opened too early",
            explanation: "Structure wasn't set before center collapsed.",
            fixes: [
              "If slightly under: cut around sunken center, flip, or fill crater with fruit/cream and call it rustic.",
              "Return to oven if still wet — low 325°F until skewer clean.",
              "Never open oven first 75% of bake time for cakes."
            ],
            tip: "Sunken + gooey = underbaked. Sunken + dry = over-leavened or over-creamed."
          }
        ]
      }
    ]
  }
];