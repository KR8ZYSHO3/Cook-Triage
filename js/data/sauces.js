const CATEGORY_SAUCES = {
  id: "sauces",
  icon: "🥄",
  title: "Sauce issues",
  description: "Split, thin, thick, greasy, grainy, pesto gone wrong",
  hint: "Sauces fail from heat shock, broken emulsions, or wrong thickness — each has a rescue path.",
  symptoms: [
    {
      id: "split",
      label: "Curdled / split / separated",
      variants: [
        {
          id: "dairy-sauce",
          label: "Cream, milk, or cheese sauce",
          causes: [
            {
              title: "Dairy overheated or acid added to hot cream",
              likelihood: "most-likely",
              explanation: "Milk proteins seize above ~180°F / 82°C or when acid hits boiling dairy.",
              fixes: [
                "Remove from heat immediately. Blend with immersion blender or whisk in ice cube to shock cool.",
                "Rescue: whisk slurry of cornstarch + cold milk, add off heat, warm gently — don't boil.",
                "If completely broken: strain out solids, use liquid as base for new sauce with fresh cream off heat.",
                "Add cheese only off heat, stirring constantly.",
                "Temper dairy: add hot liquid to cold cream slowly, not the reverse."
              ],
              tip: "Temper dairy: add hot liquid to cold cream slowly, or stir cream in off heat.",
              ifNotFixed: "Start fresh base with butter + flour roux, whisk in warm milk slowly, then add broken sauce gradually."
            },
            {
              title: "Low-fat dairy or reduced-fat cheese",
              likelihood: "common",
              explanation: "Less fat = less buffer against curdling. Skim milk and pre-shredded cheese split easier.",
              fixes: [
                "Whisk in full-fat cream or butter off heat to stabilize.",
                "Add starch: cornstarch slurry binds proteins.",
                "Grate real cheese from block — anti-caking agents in pre-shredded cause graininess.",
                "Never boil after dairy is in."
              ],
              tip: "Pre-shredded cheese has cellulose — it will never melt silky."
            }
          ]
        },
        {
          id: "butter-sauce",
          label: "Butter / hollandaise / pan sauce",
          causes: [
            {
              title: "Emulsion broke from heat or cold shock",
              likelihood: "most-likely",
              explanation: "Hollandaise, beurre blanc, or pan sauce separated from too much heat or adding butter too fast.",
              fixes: [
                "Warm bowl over simmering water. Whisk in teaspoon of cold water drop by drop until smooth.",
                "New base: blend 1 egg yolk + 1 tbsp water, slowly whisk broken sauce into it over low heat.",
                "Pan sauce: deglaze, reduce, pull off heat, whisk cold butter one cube at a time.",
                "Keep hollandaise warm, not hot — 120–140°F / 49–60°C max."
              ],
              tip: "Low and slow wins. Broken emulsions are chemistry problems — temperature is the lever.",
              ifNotFixed: "For hollandaise: start completely fresh yolk base, drip old sauce in like making it new."
            }
          ]
        }
      ],
      causes: [
        {
          title: "Dairy overheated or emulsion broke",
          likelihood: "most-likely",
          explanation: "Heat or acid broke the bond between fat and water in your sauce.",
          fixes: [
            "Remove from heat. Whisk in cold water or ice cube.",
            "Blend with immersion blender.",
            "Add fresh dairy off heat and whisk.",
            "Strain and rebuild if needed."
          ],
          tip: "Never boil cream sauces after dairy is added."
        }
      ]
    },
    {
      id: "too-thin",
      label: "Too watery / won't coat",
      causes: [
        {
          title: "Not reduced enough",
          likelihood: "most-likely",
          explanation: "High water content from stock, wine, or vegetables without adequate reduction.",
          fixes: [
            "Simmer uncovered on medium until it coats the back of a spoon.",
            "Skim surface so reduction concentrates flavor, not foam.",
            "Add reduction helpers: tomato paste, mashed beans, or simmered-down wine.",
            "Reduce in wider pan — more surface area = faster evaporation.",
            "Taste after reducing — salt concentration rises as water leaves."
          ],
          tip: "Reduce before you thicken — cornstarch on watery bland sauce = bland glue.",
          ifNotFixed: "If reduction isn't working, slurry (below) — but fix flavor first with salt and acid."
        },
        {
          title: "No thickener when one was needed",
          likelihood: "common",
          explanation: "Flour, cornstarch, or reduction step skipped in gravy, stir-fry sauce, or pan sauce.",
          fixes: [
            "Slurry: 1 tsp cornstarch + 1 tbsp cold water, whisk in, simmer 1 min until glossy.",
            "Beurre manié: equal parts soft butter + flour kneaded, whisk pea-size pieces in off boil.",
            "Roux route: cook 1 tbsp butter + 1 tbsp flour 1 min, whisk in thin sauce gradually.",
            "Mount with cold butter off heat for glossy body without starch."
          ],
          tip: "Cornstarch needs 1 min simmer to cook off chalkiness — flour needs longer."
        },
        {
          title: "Too much pasta water or stock added",
          likelihood: "common",
          explanation: "Loosened sauce with liquid and didn't simmer it back.",
          fixes: [
            "Simmer 3–5 min after any pasta water addition.",
            "Add less liquid next splash — you can always add more.",
            "Finish with parmesan or butter to emulsify remaining liquid.",
            "Use slotted spoon for serving — leave pool behind."
          ],
          tip: "Pasta water thins AND seasons — account for both when adjusting."
        }
      ]
    },
    {
      id: "too-thick",
      label: "Too thick / gluey / stiff",
      causes: [
        {
          title: "Over-reduced or too much starch",
          likelihood: "most-likely",
          explanation: "Cooked too long uncovered or too much flour/cornstarch added at once.",
          fixes: [
            "Thin with warm stock, milk, or pasta water — add splash by splash.",
            "Whisk vigorously while reheating to break up starch clumps.",
            "If salty now too: dilute with unsalted liquid only.",
            "Add acid (lemon, vinegar) — thins perception and brightens.",
            "Off heat: stir in cream or butter to loosen."
          ],
          tip: "Pasta water is the cheat code — thins and adds body at once.",
          ifNotFixed: "If gluey from cornstarch overload, blend with immersion blender and thin with stock."
        },
        {
          title: "Flour roux not cooked long enough before liquid",
          likelihood: "common",
          explanation: "Undercooked flour roux thickens aggressively and tastes raw/floury.",
          fixes: [
            "Cook roux 2–3 min until blonde before adding liquid.",
            "If already gluey: thin gradually and simmer 10+ min to cook out flour taste.",
            "Strain if lumps persist.",
            "Switch to cornstarch slurry next time for easier control."
          ],
          tip: "Roux should smell nutty, not like raw flour, before liquid goes in."
        },
        {
          title: "Cold sauce thickened in fridge",
          likelihood: "less-common",
          explanation: "Starch and gelatin set when cold — sauce that was perfect hot seems thick when reheated.",
          fixes: [
            "Reheat gently with splash of liquid while whisking.",
            "Add liquid before reheating, not after it's already clumping.",
            "Stir constantly over medium-low — don't microwave without stirring.",
            "Adjust seasoning after thinning — dilution flattens flavor."
          ],
          tip: "Sauces always need a splash of liquid when reheating — plan for it."
        }
      ]
    },
    {
      id: "greasy",
      label: "Pool of oil on top / greasy sauce",
      causes: [
        {
          title: "Fat separated from sauce",
          likelihood: "most-likely",
          explanation: "Too much fat added, sauce boiled after butter, or emulsion broke under heat.",
          fixes: [
            "Skim oil with ladle or lay paper towel on surface to blot.",
            "Blend briefly with immersion blender to re-emulsify.",
            "Add splash of stock + whisk in cold butter off heat.",
            "Stir in spoon of mustard or tomato paste — natural emulsifiers.",
            "Toss with starchy pasta water if finishing pasta."
          ],
          tip: "Grease on top often means the sauce underneath is salvageable — skim first, taste second.",
          ifNotFixed: "Chill sauce, lift solidified fat cap, reheat gently and whisk."
        },
        {
          title: "Rendered fat from meat not skimmed",
          likelihood: "common",
          explanation: "Braises, chili, and pan sauces accumulate fat that rises when simmering stops.",
          fixes: [
            "Skim with spoon while simmering — easier when bubbles push fat to edges.",
            "Chill and remove fat cap — most thorough method.",
            "Blot surface with paper towel.",
            "Add acid and stock to balance heavy fat perception."
          ],
          tip: "Degrease as you go — waiting until the end means greasy leftovers too."
        },
        {
          title: "Oil-based sauce not emulsified",
          likelihood: "less-common",
          explanation: "Vinaigrette-style sauce on hot food separates instantly.",
          fixes: [
            "Whisk in Dijon mustard or honey — emulsifiers.",
            "Add starchy pasta water drop by drop while whisking.",
            "Use immersion blender for 5 seconds.",
            "Serve sauce on side if it won't hold."
          ],
          tip: "Hot food breaks vinaigrettes — emulsify with mustard or serve cold sauce alongside."
        }
      ]
    },
    {
      id: "grainy-flour",
      label: "Grainy / floury taste (flour sauce)",
      causes: [
        {
          title: "Roux undercooked or flour added dry to hot liquid",
          likelihood: "most-likely",
          explanation: "Raw flour taste means flour didn't cook long enough in fat before liquid hit.",
          fixes: [
            "Simmer sauce 15–20 min on low, stirring — raw taste fades with time.",
            "If lumpy: strain through fine mesh, return to pot, simmer.",
            "Blend smooth with immersion blender.",
            "Next time: cook roux 2–3 min until light golden and nutty-smelling.",
            "Rain flour into fat while whisking — never dump dry flour into boiling liquid."
          ],
          tip: "If it tastes like flour, it needs more time, not more flour.",
          ifNotFixed: "Strain, discard lumps, simmer liquid 20 min — if still floury, start a cornstarch-thickened side sauce."
        },
        {
          title: "Cornstarch not fully cooked",
          likelihood: "common",
          explanation: "Cornstarch needs 1 min at simmer to lose chalky texture — added to boiling then served immediately.",
          fixes: [
            "Simmer 1–2 min after adding slurry until glossy and clear.",
            "Whisk constantly during simmer.",
            "Don't add slurry to raging boil — temper heat first.",
            "If chalky: simmer longer or add tiny more slurry and cook again."
          ],
          tip: "Cornstarch goes from cloudy to translucent when done — watch for that shift."
        },
        {
          title: "Cheese seized into grains",
          likelihood: "common",
          explanation: "Parmesan or cheddar added to boiling liquid clumps into grainy bits, not smooth melt.",
          fixes: [
            "Pull off heat. Add cheese gradually while stirring.",
            "Add splash of cream or pasta water to loosen.",
            "Use freshly grated cheese — pre-shredded has anti-caking agents.",
            "Low heat only — cheese melts at body temperature if you're patient."
          ],
          tip: "Cheese is a finisher, not a boiler — off heat or bare simmer."
        }
      ]
    },
    {
      id: "pesto-dark-bitter",
      label: "Pesto turned dark / bitter",
      causes: [
        {
          title: "Basil bruised or oxidized",
          likelihood: "most-likely",
          explanation: "Over-blending heats basil and oxidizes it brown. Bruised leaves taste bitter.",
          fixes: [
            "Still usable if dark: taste — if bitter, add more cheese, nuts, and olive oil to dilute.",
            "Stir in fresh raw basil leaves at the end without blending.",
            "Add lemon juice — acid brightens and slows browning.",
            "Next time: pulse don't puree; ice cube in blender keeps basil cool.",
            "Hand chop or mortar-and-pestle for best color."
          ],
          tip: "Pulse pesto — the motor heats basil and kills the green.",
          ifNotFixed: "Dark bitter pesto: mix with plenty of pasta water, butter, and extra parmesan off heat — call it rustic."
        },
        {
          title: "Old basil, stems, or brown leaves used",
          likelihood: "common",
          explanation: "Brown spots on leaves and heavy stems taste bitter and grassy.",
          fixes: [
            "Pick only bright green leaves — no stems except tiny tender tops.",
            "Add pinch of sugar to balance bitterness.",
            "More nuts and cheese shift flavor away from bitter herb.",
            "Use within hours — pesto doesn't keep color long."
          ],
          tip: "Basil stems go in stock, not pesto — they're bitter."
        },
        {
          title: "Nuts or garlic over-toasted",
          likelihood: "less-common",
          explanation: "Burnt pine nuts or over-roasted garlic turn pesto bitter and brown.",
          fixes: [
            "Add fresh raw garlic clove and fresh basil — rebalance without re-blending long.",
            "More olive oil and cheese to dilute.",
            "Toast nuts lightly next time — golden, not brown.",
            "Substitute walnuts if pine nuts tasted rancid (they go off fast)."
          ],
          tip: "Toast pine nuts in dry pan 2 min max — they burn while you look away."
        }
      ]
    }
  ]
};