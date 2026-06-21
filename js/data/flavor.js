const CATEGORY_FLAVOR = {
  id: "flavor",
  icon: "🧂",
  title: "Tastes wrong",
  description: "Salty, bland, bitter, sweet, sour, spicy, or off-flavors",
  hint: "Flavor problems are almost always fixable without starting over — taste, adjust, taste again.",
  symptoms: [
    {
      id: "too-salty",
      label: "Way too salty",
      causes: [
        {
          title: "Reduced too far or seasoned twice",
          likelihood: "most-likely",
          explanation: "Liquid cooked down and concentrated the salt, or salt was added at multiple stages without tasting between.",
          fixes: [
            "Dilute: add unsalted liquid (water, stock, coconut milk) in small splashes until it tastes right.",
            "Balance: stir in acid (lemon, vinegar) and a touch of fat (butter, cream) — salt tastes louder when the dish is flat.",
            "Bulk it up: add more unsalted base (rice, potatoes, beans, pasta) to spread salt across more volume.",
            "For soups/stews: float raw potato chunks 15–20 min, then remove — they absorb some salt (mild effect).",
            "Taste after every addition — you can always add more liquid, never subtract salt."
          ],
          tip: "Season in layers during cooking, but always do a final taste-and-adjust right before serving.",
          ifNotFixed: "If still inedibly salty after diluting, repurpose as a seasoning base for a much larger batch of unsalted food."
        },
        {
          title: "Used salted stock, soy sauce, or canned goods",
          likelihood: "common",
          explanation: "Store-bought broth, soy sauce, fish sauce, feta, capers, olives, and canned tomatoes bring hidden salt you didn't count.",
          fixes: [
            "Stop adding salty ingredients immediately — switch to unsalted liquid for the rest of the cook.",
            "Rinse canned beans or vegetables if they weren't drained and rinsed well.",
            "Counter with acid + sweetness: a splash of vinegar and pinch of sugar makes salt feel less aggressive.",
            "Add unsalted starch (plain rice, potatoes) directly to the pot to absorb and dilute.",
            "Write down which ingredients were salty — that's your root cause for next time."
          ],
          tip: "Check labels: 'low sodium' broth still has salt. Taste canned goods before adding them."
        },
        {
          title: "Salted pasta water or brined meat carried over",
          likelihood: "less-common",
          explanation: "Heavily salted pasta water or brined protein released salt into the sauce during finishing.",
          fixes: [
            "Finish the dish with unsalted pasta water only — skip additional salt entirely.",
            "Rinse pasta briefly if sauce is already seasoned (breaks tradition but saves the dish).",
            "Add a raw vegetable that releases water: grated zucchini, chopped tomatoes, or spinach.",
            "Serve with an intentionally bland side to balance each bite."
          ],
          tip: "Pasta water should taste like the sea — but if your sauce is already seasoned, use plain water to loosen it."
        }
      ]
    },
    {
      id: "too-bland",
      label: "Flat / boring — no flavor",
      causes: [
        {
          title: "Missing salt, acid, or fat",
          likelihood: "most-likely",
          explanation: "The flavor triangle: most dull food is missing at least one of these three, not more random spices.",
          fixes: [
            "Salt first: add in pinches, taste, repeat — salt wakes everything else up.",
            "Add acid: lemon juice, vinegar, or tomato — stops food from tasting one-note.",
            "Finish with fat: olive oil, butter, or cream rounds harsh edges and carries aroma.",
            "Umami boost: soy sauce, parmesan rind, miso paste, or a dash of fish sauce (won't taste fishy in small amounts).",
            "Fresh herbs or aromatics at the end: parsley, basil, scallion greens — brightness without more cooking."
          ],
          tip: "Season in layers during cooking, but always do a final taste-and-adjust right before serving.",
          ifNotFixed: "If still flat after salt/acid/fat, the dish may need longer simmering for flavors to meld — give it 10 more minutes."
        },
        {
          title: "Aromatics undercooked or never bloomed",
          likelihood: "common",
          explanation: "Garlic, onion, and spices need proper sweating in fat. Raw or rushed aromatics stay mute.",
          fixes: [
            "Simmer 5–10 more minutes so flavors meld — time fixes underdeveloped dishes.",
            "Bloom spices in a spoon of hot oil in a side pan, then stir into the dish.",
            "Add fresh garlic or ginger off heat for a brightness bump.",
            "Stir in a spoon of caramelized onions or tomato paste for instant depth.",
            "Finish with a splash of wine or vinegar to lift flat flavors."
          ],
          tip: "Smell the pan — toasted (good) vs. raw (sharp) tells you whether to cook longer or add fresh aromatics."
        },
        {
          title: "Diluted by too much water or bland add-ins",
          likelihood: "common",
          explanation: "Added liquid, ice, or watery vegetables without re-seasoning after each addition.",
          fixes: [
            "Reduce uncovered 5–10 min to concentrate flavors before adjusting seasoning.",
            "Re-salt and re-acid after every dilution — each splash of water resets the balance.",
            "Stir in concentrated flavor: tomato paste, miso, bouillon, or reduced stock.",
            "Mount with butter or olive oil off heat for richness that carries other flavors."
          ],
          tip: "Every time you add water, assume you need to re-season."
        }
      ]
    },
    {
      id: "too-bitter",
      label: "Bitter / harsh / unpleasant",
      causes: [
        {
          title: "Burnt garlic, spices, or fond scraped into the dish",
          likelihood: "most-likely",
          explanation: "Burnt alliums and scorched spices taste acrid. Scraping the pan bottom dragged bitter fond in.",
          fixes: [
            "Stop stirring from the bottom — transfer the top layers to a new pot immediately.",
            "Do NOT add sugar to 'fix' burnt flavor — it masks but doesn't remove acrid notes.",
            "Add fat and acid: butter and lemon can round mild bitterness but won't save heavy burn.",
            "If only slightly bitter: stir in dairy (cream, yogurt) and a pinch of sugar to balance.",
            "Taste the bottom layer separately — if it's acrid, discard it and work with the top."
          ],
          tip: "Garlic goes from golden to bitter in about 30 seconds. Pull the pan off heat the moment it smells toasted.",
          ifNotFixed: "Heavy burnt taste doesn't cook out. Transfer what you can to a clean pot or start a fresh base."
        },
        {
          title: "Too much of a bitter ingredient",
          likelihood: "common",
          explanation: "Excess kale stems, citrus pith, burnt paprika, old spices, or too much turmeric/oregano.",
          fixes: [
            "Dilute with more base: broth, tomatoes, cream, or additional unsalted ingredients.",
            "Balance with fat, salt, and sweetness: cream, butter, honey, or caramelized onion.",
            "Add umami counterweight: parmesan, soy sauce, or mushrooms.",
            "For greens: remove tough stems, use only leaves, and blanch next time.",
            "Strain out the bitter ingredient if identifiable (whole spices, herb stems, citrus peel)."
          ],
          tip: "Citrus zest = good. White pith underneath = bitter. Zest only the colored part."
        },
        {
          title: "Certain vegetables or coffee-based rubs",
          likelihood: "less-common",
          explanation: "Eggplant skin, olive pits, over-toasted nuts, or coffee-heavy dry rubs can read as bitter.",
          fixes: [
            "Peel or remove the bitter component if possible (eggplant skin, burnt nut pieces).",
            "Add sweetness and fat: coconut milk, cream, or a touch of maple syrup.",
            "Serve with something bright: fresh herb salad, yogurt sauce, or sweet chutney.",
            "Salt helps — bitterness and salt suppress each other on the palate."
          ],
          tip: "Salt and fat are your first moves against vegetable bitterness, not more cooking."
        }
      ]
    },
    {
      id: "too-sweet",
      label: "Too sweet",
      causes: [
        {
          title: "Sugar, honey, or sweet ingredient over-added",
          likelihood: "most-likely",
          explanation: "Ketchup, BBQ sauce, mirin, sweet wine, or caramelized onions pushed sweetness past balance.",
          fixes: [
            "Add acid: vinegar, lemon juice, or tamarind — sweetness shrinks when acid rises.",
            "Add salt: a pinch makes sweetness taste intentional instead of cloying.",
            "Add heat: black pepper, chili flakes, or hot sauce — capsicum counters sugar.",
            "Add bitterness/umami: coffee, soy sauce, Worcestershire, or cocoa powder (tiny amount).",
            "Dilute with unsalted savory base: stock, crushed tomatoes, or more vegetables."
          ],
          tip: "Fix sweet with acid and salt first — not more sugar.",
          ifNotFixed: "If it's a sauce, split into two batches: dilute the sweet half with a tart, unsalted second batch."
        },
        {
          title: "Reduced too far — sugars concentrated",
          likelihood: "common",
          explanation: "Tomato sauce, glazes, or braising liquid cooked down until natural sugars dominate.",
          fixes: [
            "Thin with unsalted stock or water, then re-balance with acid and salt.",
            "Stir in acidic ingredients: diced tomatoes, vinegar, or mustard.",
            "Add fat: butter or cream rounds sharp sweetness.",
            "Serve with something tart: pickles, lemon wedge, or vinegar-dressed salad."
          ],
          tip: "Tomato-based sauces get sweeter as they reduce — taste before every reduction step."
        },
        {
          title: "Wrong ingredient substitution",
          likelihood: "less-common",
          explanation: "Used sweetened coconut milk, vanilla oat milk, or dessert wine where savory was needed.",
          fixes: [
            "Identify the sweet source and stop adding more of it.",
            "Counter with acid and salt as above.",
            "If possible, strain out the sweet component and replace with unsalted version.",
            "Repurpose: sweet braising liquid can become a glaze for a different dish with enough acid."
          ],
          tip: "Always check whether your coconut milk, yogurt, or nondairy milk is sweetened."
        }
      ]
    },
    {
      id: "too-sour",
      label: "Too sour / acidic",
      causes: [
        {
          title: "Too much acid added or added too early",
          likelihood: "most-likely",
          explanation: "Vinegar, lemon, wine, or tomatoes added in excess or before other flavors developed.",
          fixes: [
            "Balance with fat: butter, cream, or olive oil mellows sharp acid.",
            "Tiny pinch of sugar or honey — not to sweeten, just to round the edges.",
            "Add depth: splash of soy sauce, miso, or caramelized onions for umami counterweight.",
            "Dilute with unsalted stock or cream if the dish can handle more volume.",
            "Simmer 5–10 min uncovered so raw vinegar/alcohol smell cooks off."
          ],
          tip: "Add acid at the end next time — it's the easiest thing to overdo early.",
          ifNotFixed: "Serve with a starchy, fatty side (rice with butter, creamy polenta) to buffer acid on the palate."
        },
        {
          title: "Wine or vinegar didn't cook long enough",
          likelihood: "common",
          explanation: "Raw alcohol or sharp vinegar bite means it was added late or not reduced.",
          fixes: [
            "Simmer uncovered 5–10 min to cook off harsh alcohol notes.",
            "Stir in a spoon of tomato paste or stock to integrate acid into the body.",
            "Add fat off heat: swirl in cold butter or cream.",
            "A pinch of baking soda (tiny!) can neutralize excess acid in large pots — use sparingly."
          ],
          tip: "Wine should smell cooked, not like a glass of Sauvignon Blanc in your stew."
        },
        {
          title: "Naturally acidic ingredients stacked",
          likelihood: "less-common",
          explanation: "Tomatoes + wine + lemon + vinegar in the same dish without balancing fat or sweetness.",
          fixes: [
            "Pick one acid source to dominate — you can't remove lemon, so stop adding more acid.",
            "Add fat and umami: cream, butter, parmesan, or mushrooms.",
            "Sweetness in small amounts: honey, grated carrot, or caramelized onion.",
            "Serve immediately — acid often tastes sharper as dishes cool."
          ],
          tip: "Count your acid sources before adding the last lemon squeeze."
        }
      ]
    },
    {
      id: "too-spicy",
      label: "Too hot / spicy",
      causes: [
        {
          title: "Fresh chiles or hot sauce added too aggressively",
          likelihood: "most-likely",
          explanation: "Capsaicin concentrates as liquid reduces. Heat also builds while the dish sits.",
          fixes: [
            "Dilute with more base: broth, coconut milk, cream, or plain crushed tomatoes.",
            "Add dairy or fat: yogurt, sour cream, butter, or cheese — capsaicin binds to fat.",
            "Sweet + acid: honey or sugar plus lime/vinegar makes heat feel less sharp.",
            "Serve over bland starch: rice, bread, or potatoes absorb heat per bite.",
            "Remove visible chile pieces or whole peppers if still in the pot."
          ],
          tip: "Never try to 'water down' with only water — you'll lose body. Match the diluent to the dish.",
          ifNotFixed: "Make a second mild batch double the size and combine — dilution is the only real fix for extreme heat."
        },
        {
          title: "Hot spice blend or chili powder over-measured",
          likelihood: "common",
          explanation: "Cayenne, gochugaru, Sichuan pepper, or hot curry powder don't scale linearly — a little extra hits hard.",
          fixes: [
            "Add dairy or coconut milk — the fastest capsaicin binder.",
            "Stir in nut butter or tahini for fat without thinning too much.",
            "Add acid and sugar: lime juice and a touch of honey.",
            "Bulk with potatoes, beans, or rice to spread capsaicin across more bites."
          ],
          tip: "Add dried chile in half-measures — you can always add more, not less."
        },
        {
          title: "Seeds and membranes left in fresh peppers",
          likelihood: "less-common",
          explanation: "Most heat lives in seeds and white membrane, not the flesh.",
          fixes: [
            "Fish out pepper pieces if still identifiable.",
            "Dilute and add dairy as above.",
            "Next time: remove seeds and ribs for flavor without nuclear heat.",
            "Serve with cooling sides: cucumber raita, sour cream, or avocado."
          ],
          tip: "Wear gloves when seeding hot peppers — capsaicin on fingers ends up in your eyes."
        }
      ]
    },
    {
      id: "smoky-burnt-taste",
      label: "Smoky or burnt taste in the dish",
      causes: [
        {
          title: "Scorched bottom transferred into food",
          likelihood: "most-likely",
          explanation: "Stew, soup, or sauce sat on high heat without stirring the bottom. Scraping dragged burnt fond throughout.",
          fixes: [
            "Stop stirring immediately — gently transfer everything above the burn line to a new pot.",
            "Do NOT scrape the bottom of the original pot.",
            "Taste the transferred portion — if still acrid, dilute with unsalted stock.",
            "If smoke-bitter is strong, discard — burnt flavor doesn't cook out.",
            "Lower heat and use a heavy-bottomed pot for the remainder."
          ],
          tip: "Burnt taste doesn't cook out. Transfer early or start a fresh base.",
          ifNotFixed: "If the whole pot tastes acrid, it's a loss — learn the lesson and don't mask with spices."
        },
        {
          title: "Smoked paprika, chipotle, or liquid smoke overdone",
          likelihood: "common",
          explanation: "Smoky ingredients read as 'burnt' when overused, especially in delicate sauces.",
          fixes: [
            "Dilute with more unsalted base ingredients.",
            "Add acid and freshness: lemon, vinegar, fresh herbs.",
            "Stir in cream or butter to mellow smoke.",
            "Balance with sweetness: touch of honey or grated carrot.",
            "If you added liquid smoke — it's potent; dilute aggressively."
          ],
          tip: "Liquid smoke is measured in drops, not teaspoons."
        },
        {
          title: "Pan-seared protein or fat burnt into the dish",
          likelihood: "common",
          explanation: "Blackened butter, over-charred meat, or burnt oil was incorporated into the final dish.",
          fixes: [
            "Strain sauce or soup to remove burnt bits and excess fat.",
            "If meat is only exterior-charred, scrape or trim burnt crust before serving.",
            "Deglaze with fresh stock — but discard if deglaze tastes bitter.",
            "Finish with fresh acid and herbs to push flavor forward."
          ],
          tip: "Burnt fat tastes acrid, not smoky — if it's acrid, trim or strain, don't just season over it."
        }
      ]
    },
    {
      id: "metallic",
      label: "Metallic / tinny taste",
      causes: [
        {
          title: "Reactive pan or utensil (tomato, acid, wine)",
          likelihood: "most-likely",
          explanation: "Tomatoes, vinegar, and wine react with aluminum, cast iron, or chipped enamel, leaching metallic flavor.",
          fixes: [
            "Transfer food to a non-reactive pot (stainless, glass) immediately.",
            "Add a pinch of sugar and splash of acid to partially mask mild metallic notes.",
            "Stir in dairy or fat: cream, butter — can round metallic edges.",
            "If taste is strong, discard — metallic off-flavors don't fade.",
            "Avoid storing acidic food in reactive cookware."
          ],
          tip: "Cook tomato sauce in stainless or enamel, not bare aluminum or unseasoned cast iron.",
          ifNotFixed: "Strong metallic taste means the food contacted reactive metal too long — safety and flavor both suffer."
        },
        {
          title: "Old or rancid oil",
          likelihood: "common",
          explanation: "Oxidized oil tastes metallic, soapy, or cardboard-like before you even see smoke.",
          fixes: [
            "Taste your oil before cooking — if it smells off, start with fresh oil.",
            "If dish is only mildly affected: add fresh aromatics cooked in new oil and fold in.",
            "Acid and fresh herbs can partially mask mild rancidity.",
            "When in doubt, discard — rancid oil isn't safe to eat."
          ],
          tip: "Store oils away from heat and light. Smell before every fry."
        },
        {
          title: "Certain fish or canned goods",
          likelihood: "less-common",
          explanation: "Some canned fish, old baking powder, or un-rinsed quinoa saponins can read as metallic.",
          fixes: [
            "Rinse canned fish and pat dry; add fresh lemon and herbs.",
            "For quinoa: rinse thoroughly before cooking next time.",
            "Check baking powder freshness — old leavening tastes tinny.",
            "Balance with acid, fat, and umami as masking layers."
          ],
          tip: "Quinoa needs rinsing until water runs clear — saponins taste bitter and metallic."
        }
      ]
    },
    {
      id: "greasy-mouthfeel",
      label: "Greasy / oily mouthfeel",
      causes: [
        {
          title: "Too much fat, not emulsified into the dish",
          likelihood: "most-likely",
          explanation: "Oil pooled on top or coats the tongue because fat wasn't incorporated or was added all at once off heat.",
          fixes: [
            "Skim visible oil with a ladle or lay paper towel on the surface to blot.",
            "Blend briefly with immersion blender to re-emulsify.",
            "Add splash of stock and whisk in cold butter off heat — one cube at a time.",
            "Stir in acid: lemon or vinegar cuts greasy perception.",
            "Add an emulsifier: mustard, tomato paste, or egg yolk whisked in off heat."
          ],
          tip: "Grease on top often means the sauce underneath is salvageable — skim first, taste second.",
          ifNotFixed: "Chill the dish, lift off the solidified fat cap, then reheat gently."
        },
        {
          title: "Low-quality or wrong cooking fat",
          likelihood: "common",
          explanation: "Cheap olive oil, unclarified butter, or chicken skin rendered without browning tastes heavy and greasy.",
          fixes: [
            "Skim excess fat from stews, braises, and soups.",
            "Add acid and fresh herbs to brighten heavy fat.",
            "Serve with something crisp: salad, pickles, or steamed vegetables.",
            "Blot fried food on wire rack, not paper towels (which steam and re-soak)."
          ],
          tip: "Finish with good olive oil off heat — cooking with low-quality oil is where greasiness starts."
        },
        {
          title: "Dairy or coconut cream split",
          likelihood: "common",
          explanation: "Fat separated from water phase — feels greasy even if flavor is fine.",
          fixes: [
            "Remove from heat. Whisk in ice cube or cold liquid to shock and rebind.",
            "Blend with immersion blender until smooth.",
            "Stir in starch slurry off heat, then warm gently — don't boil.",
            "Add mustard or tomato paste to help re-emulsify."
          ],
          tip: "Never boil coconut milk or cream sauces after dairy is added."
        }
      ]
    },
    {
      id: "soapy-perfume",
      label: "Soapy, perfumy, or 'cilantro soap' taste",
      causes: [
        {
          title: "Cilantro or certain herbs taste soapy to you",
          likelihood: "most-likely",
          explanation: "Genetics: some people perceive aldehydes in cilantro as soap. Coriander seed tastes different — it's not the same compound.",
          fixes: [
            "Pick out visible cilantro if the dish is otherwise fine.",
            "Substitute: parsley, basil, or mint for fresh green notes.",
            "Cook cilantro longer — heat breaks down some aldehydes (won't fix for everyone).",
            "Use cilantro stems only in cooked dishes — milder than leaves for some people.",
            "Finish with lime and a different herb instead of more cilantro."
          ],
          tip: "If you're cooking for guests, ask about cilantro — it's one of the most divisive herbs.",
          ifNotFixed: "For the cook who tastes soap: treat cilantro as optional garnish, never a structural ingredient."
        },
        {
          title: "Soap residue on hands, cutting board, or cookware",
          likelihood: "common",
          explanation: "Dish soap on a 'clean' board or pan can transfer perfumy, soapy taste to food, especially cold dishes.",
          fixes: [
            "Rinse cutting board and knife with water (no soap) before prep.",
            "If dish tastes soapy: transfer to a different bowl or plate.",
            "Add acid and salt — can partially mask mild soap residue.",
            "For salads: re-dress with fresh oil and acid only."
          ],
          tip: "Wood boards: scrape and rinse, don't soak in soapy water right before use."
        },
        {
          title: "Over-perfumed spices or extracts",
          likelihood: "less-common",
          explanation: "Too much rose water, orange blossom, lavender, or almond extract reads as soap or perfume.",
          fixes: [
            "Dilute with more base — double the batch without adding more extract.",
            "Add grounding flavors: vanilla, cinnamon, or toasted nuts.",
            "For savory dishes: acid, salt, and heat push perfume to the background.",
            "Next time: measure extracts with a dropper, not a pour."
          ],
          tip: "Rose water and orange blossom are background notes — if you taste them first, you used too much."
        }
      ]
    },
    {
      id: "raw-alcohol",
      label: "Raw alcohol / boozy taste",
      causes: [
        {
          title: "Wine or liquor added too late or not reduced",
          likelihood: "most-likely",
          explanation: "Alcohol needs time and heat to cook off. Added at the end, it stays harsh and boozy.",
          fixes: [
            "Simmer uncovered 10–15 min — alcohol burns off before water fully reduces.",
            "Stir in a spoon of tomato paste or stock to integrate flavor.",
            "Add fat: butter or cream mellows remaining alcohol bite.",
            "Balance with acid and salt once alcohol smell is gone.",
            "Taste and smell — it should smell cooked, not like a shot glass."
          ],
          tip: "Add wine after aromatics, before liquid — give it 2–3 min to reduce before adding stock.",
          ifNotFixed: "If still boozy after 15 min simmer, the dish may need more volume — add stock and reduce again."
        },
        {
          title: "Flambé didn't cook through or too much liqueur",
          likelihood: "common",
          explanation: "Grand Marnier, brandy, or rum in desserts and sauces tastes raw if flame dies too fast.",
          fixes: [
            "Return to heat and simmer gently until alcohol smell disappears.",
            "For desserts: cook custard or sauce base longer after adding liqueur.",
            "Add vanilla or citrus zest to redirect flavor perception.",
            "Serve warm — alcohol reads sharper when cold."
          ],
          tip: "Flambé is theater — the real work is the simmer afterward."
        },
        {
          title: "Beer or wine in wrong style for the dish",
          likelihood: "less-common",
          explanation: "Hoppy IPA or sweet dessert wine can leave bitter or cloying alcohol notes that don't integrate.",
          fixes: [
            "Simmer longer to reduce harsh hop bitterness from beer.",
            "Balance with acid, salt, and umami.",
            "Dilute with stock and re-season.",
            "Next time: use lagers or dry wine for cooking — save IPA for drinking."
          ],
          tip: "Cook with wine you'd drink — and dry wine reduces cleaner than sweet."
        }
      ]
    }
  ]
};