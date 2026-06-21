const CATEGORY_GRAINS = {
  id: "grains",
  icon: "🍚",
  title: "Grains & starches",
  description: "Rice, quinoa, couscous, oatmeal, polenta gone wrong",
  hint: "Grain fails are usually ratio, heat, or stirring — all diagnosable mid-cook or for next time.",
  symptoms: [
    {
      id: "rice-mushy",
      label: "Rice is mushy / porridge-like",
      variants: [
        {
          id: "white-rice",
          label: "White rice (jasmine, basmati, long-grain)",
          causes: [
            {
              title: "Too much water or stirred while cooking",
              likelihood: "most-likely",
              explanation: "Excess water breaks grains. Stirring releases starch and turns rice gluey.",
              fixes: [
                "Drain excess water through a fine mesh strainer if still soupy.",
                "Spread rice on a sheet pan, bake at 300°F / 150°C 5–10 min to dry out.",
                "Repurpose: fried rice (works even fresh if you dry it first), rice pudding, or soup thickener.",
                "Next time: rinse until water runs clearer; use 1:1.25–1.5 ratio; don't stir once simmering.",
                "Rest covered off heat 10 min — carryover steam finishes without adding water."
              ],
              tip: "Mushy rice isn't poison — it's a different dish waiting to happen.",
              ifNotFixed: "Spread on a pan and refrigerate — day-old dried rice makes the best fried rice."
            },
            {
              title: "Wrong rice for the method",
              likelihood: "common",
              explanation: "Short-grain or sushi rice is meant to be sticky. Long-grain cooked like risotto goes mushy.",
              fixes: [
                "Accept stickiness for sushi or rice balls — add rice vinegar and repurpose.",
                "For fluffy rice: rinse more aggressively and reduce water by ¼ cup next batch.",
                "Toast rinsed rice in oil 1–2 min before adding water — helps grains stay separate.",
                "Use absorption method with tight lid, not excess water boil-off."
              ],
              tip: "Match rice variety to the dish — sticky rice is a feature in Japanese food, a bug in pilaf."
            }
          ]
        },
        {
          id: "brown-rice",
          label: "Brown or wild rice",
          causes: [
            {
              title: "Too much water plus long simmer",
              likelihood: "most-likely",
              explanation: "Brown rice needs more water but also longer rest — overcooking after absorption turns it mushy.",
              fixes: [
                "Drain and spread on sheet pan to dry, or bake briefly to firm up.",
                "Use in grain bowls, soups, or casseroles where texture matters less.",
                "Next time: use 1:2 ratio, simmer covered 45 min, then rest 15 min off heat without peeking.",
                "Toast rice in pot before adding water — firmer final texture."
              ],
              tip: "Brown rice keeps cooking in residual steam — pull it when slightly chewy, not soft."
            }
          ]
        }
      ],
      causes: [
        {
          title: "Too much water or stirred while cooking",
          likelihood: "most-likely",
          explanation: "Excess water breaks grains. Stirring releases starch and turns rice gluey.",
          fixes: [
            "Drain excess water, spread on sheet pan, bake at 300°F / 150°C 5–10 min to dry.",
            "Repurpose: fried rice, rice pudding, or add to soup as thickener.",
            "Next time: rinse until water runs clearer; don't stir once simmering.",
            "Use correct ratio for your rice type — check the bag."
          ],
          tip: "Mushy rice isn't poison — repurpose it."
        }
      ]
    },
    {
      id: "rice-hard",
      label: "Rice still hard / crunchy",
      causes: [
        {
          title: "Not enough water or lid lifted too early",
          likelihood: "most-likely",
          explanation: "Steam escaped before grains fully hydrated. Peeking releases the steam you need.",
          fixes: [
            "Add 2–3 tbsp hot water, cover tightly, low heat 10 min, then rest off heat 10 min — don't peek.",
            "If bottom is fine but top is hard: poke holes with chopstick, sprinkle water on top, cover, steam 5 min.",
            "If mostly raw: add enough water to cover by ½ inch, simmer covered until absorbed.",
            "Check that lid fits tight — foil under lid helps on loose pots."
          ],
          tip: "The rest period is not optional — rice finishes cooking off heat in trapped steam.",
          ifNotFixed: "If grains are still chalky after a second steam, the ratio was way off — add more water and simmer again."
        },
        {
          title: "Heat too high — water gone before rice hydrated",
          likelihood: "common",
          explanation: "Water boiled off fast while center of grains stayed dry.",
          fixes: [
            "Add hot water, cover, lowest possible heat.",
            "Turn off heat and let residual steam work 15 min.",
            "Stir only if making a creamy dish — otherwise keep grains intact.",
            "Next time: bring to boil, then immediately drop to lowest simmer."
          ],
          tip: "Rice should barely bubble — if you hear active boiling, heat is too high."
        },
        {
          title: "Old or very dry rice",
          likelihood: "less-common",
          explanation: "Aged rice absorbs more water. Bag may not account for how long it's been open.",
          fixes: [
            "Soak rinsed rice 20–30 min before cooking — grains hydrate before heat.",
            "Add extra ¼ cup water per cup of rice.",
            "Extend steam rest to 15–20 min off heat.",
            "Store rice in airtight container — dry pantry air toughens grains."
          ],
          tip: "If rice from an open bag keeps failing, soak it — that's the tell."
        }
      ]
    },
    {
      id: "rice-burnt",
      label: "Rice burnt on the bottom",
      causes: [
        {
          title: "Heat too high or thin pot",
          likelihood: "most-likely",
          explanation: "Bottom scorched while top looks fine — classic thin-pot or high-heat problem.",
          fixes: [
            "Do NOT scrape the bottom — transfer top layers to a new bowl, leave burnt layer behind.",
            "If smell is smoky but rice tastes OK: serve top portion only; discard bottom.",
            "Soak burnt pot with baking soda + water overnight — don't fight it mid-meal.",
            "Next time: tight lid + lowest simmer; use heavy-bottomed pot."
          ],
          tip: "A tight lid + lowest simmer prevents 90% of rice burn cases.",
          ifNotFixed: "If burnt smell permeated all the rice, discard — acrid flavor won't rinse out."
        },
        {
          title: "Insufficient liquid — dry burn before done",
          likelihood: "common",
          explanation: "Water fully absorbed and rice kept cooking on heat without steam.",
          fixes: [
            "As soon as you smell toast (not smoke), pull from heat and transfer top layer.",
            "Add splash of water only if rice is also undercooked — steam, don't fry.",
            "Use timer: when water is absorbed, off heat immediately for rest.",
            "Never leave rice on burner during rest — residual heat burns."
          ],
          tip: "That golden crust (tahdig) is intentional in Persian cooking — everywhere else, it's a mistake."
        }
      ]
    },
    {
      id: "quinoa-bitter",
      label: "Quinoa tastes bitter",
      causes: [
        {
          title: "Saponins not rinsed off",
          likelihood: "most-likely",
          explanation: "Natural coating on quinoa tastes bitter and soapy. 'Pre-rinsed' on the bag isn't always enough.",
          fixes: [
            "This batch: rinse cooked quinoa under hot water in fine strainer — mild help only.",
            "Dress aggressively: acid, salt, fat, and strong herbs mask bitterness.",
            "Toast rinsed dry quinoa in pot 1–2 min before adding water — nuttier, less bitter.",
            "Next time: rinse uncooked quinoa 30–60 sec until water runs clear, rubbing grains.",
            "If still bitter after rinse: switch brands — some are more saponin-heavy."
          ],
          tip: "Rinse until water runs clear — that's the whole fix for most quinoa bitterness.",
          ifNotFixed: "Use bitter batch in heavily seasoned salads or soups where acid and salt dominate."
        },
        {
          title: "Burnt bottom or scorched pot",
          likelihood: "common",
          explanation: "Bitter fond from scorched quinoa reads as bitter grain.",
          fixes: [
            "Transfer top layer to new bowl — don't scrape bottom.",
            "Rinse top layer briefly if smoky smell present.",
            "Lower heat next time; use 2:1 water ratio and simmer covered.",
            "Rest off heat 5 min before fluffing."
          ],
          tip: "Quinoa cooks fast — 15 min simmer is usually enough."
        }
      ]
    },
    {
      id: "quinoa-soggy",
      label: "Quinoa mushy / soggy",
      causes: [
        {
          title: "Too much water or overcooked",
          likelihood: "most-likely",
          explanation: "Quinoa should be fluffy with visible spirals (germs). Overcooking bursts grains.",
          fixes: [
            "Drain in fine mesh strainer — quinoa is small and passes large holes.",
            "Spread on sheet pan to steam off excess moisture.",
            "Use in salads or stuffed peppers where slight mush is hidden.",
            "Next time: 1:1.75 water ratio, simmer 15 min covered, rest 5 min, fluff.",
            "Don't stir while cooking — breaks grains."
          ],
          tip: "When you see the little tail (germ) pop, quinoa is done — more cooking = mush."
        },
        {
          title: "Cooked like rice with wrong technique",
          likelihood: "common",
          explanation: "Excess stirring or boiling vigorously instead of gentle simmer.",
          fixes: [
            "Drain and dry as above.",
            "Toast dry quinoa before liquid — firmer texture.",
            "Reduce liquid by ¼ cup per cup of quinoa.",
            "Fluff with fork, not spoon."
          ],
          tip: "Quinoa needs less water than you think — closer to 1:1.5 once you nail the rinse."
        }
      ]
    },
    {
      id: "couscous-clumpy",
      label: "Couscous clumpy / glued together",
      causes: [
        {
          title: "Liquid poured over instead of proper steaming",
          likelihood: "most-likely",
          explanation: "Pouring boiling water and walking away without forking leaves wet clumps and dry pockets.",
          fixes: [
            "Fluff with fork immediately — separate grains while still warm.",
            "If clumped: break apart with fingers or fork, sprinkle 1 tbsp water, microwave 30 sec, fluff again.",
            "Stir in olive oil or butter while fluffing — coats grains and prevents re-clumping.",
            "Next time: equal volume liquid to couscous, cover tightly, rest 5 min, then fork-fluff.",
            "Never stir with a spoon — only a fork."
          ],
          tip: "Couscous isn't rice — it's pasta. It needs fluffing, not stirring.",
          ifNotFixed: "Toss clumpy couscous with oil and roast at 400°F / 200°C 10 min for crispy texture salad."
        },
        {
          title: "Wrong couscous type for method",
          likelihood: "common",
          explanation: "Israeli (pearl) couscous is toasted pasta — needs boiling, not just soaking. Instant couscous needs only soaking.",
          fixes: [
            "Israeli couscous: boil like pasta 8–10 min, drain, toss with oil.",
            "Moroccan instant: off heat soak only — boiling makes mush.",
            "Read the package — methods aren't interchangeable.",
            "Oil after cooking for both types."
          ],
          tip: "Pearl couscous is a different product — if it says 10 min boil, don't soak it."
        }
      ]
    },
    {
      id: "oatmeal-gluey",
      label: "Oatmeal gluey / cement-like",
      causes: [
        {
          title: "Over-stirred or too much liquid cooked too long",
          likelihood: "most-likely",
          explanation: "Stirring releases starch. Long cooking on high breaks oats into paste.",
          fixes: [
            "Stir in splash of cold milk or cream off heat to loosen.",
            "Add toppings with texture: nuts, seeds, fresh fruit — distracts from glue.",
            "Repurpose: bake into oatmeal bars or pancakes.",
            "Next time: simmer gently, stir minimally; add oats to boiling water, reduce heat immediately.",
            "Steel-cut: toast before liquid; rolled oats: 5 min max on heat."
          ],
          tip: "Rolled oats need minutes, not half an hour — set a timer.",
          ifNotFixed: "Spread gluey oats in a pan, chill, slice, and pan-fry — oatmeal cakes are a real rescue."
        },
        {
          title: "Wrong oat type for expected texture",
          likelihood: "common",
          explanation: "Instant oats dissolve fast. Steel-cut needs 20–30 min. Swapping them changes everything.",
          fixes: [
            "Instant glue: add milk and eat as porridge — won't fix to chewy.",
            "Steel-cut still hard: keep simmering with splash of water, covered.",
            "Match oat type to recipe on the canister.",
            "Toast steel-cut oats in butter 2 min before liquid — nuttier, less gluey."
          ],
          tip: "Old-fashioned rolled oats are the middle ground — instant is for microwave speed, not texture."
        },
        {
          title: "Dairy added too early",
          likelihood: "less-common",
          explanation: "Milk proteins can make oats stickier and more prone to scorching than water-based cook.",
          fixes: [
            "Cook in water or half water, add milk at the end.",
            "Stir in butter or cream off heat for richness without glue.",
            "Lower heat when using milk — scorches faster than water.",
            "Use a heavy pot and stir the bottom to prevent burn."
          ],
          tip: "Water first, dairy finish — standard restaurant oatmeal trick."
        }
      ]
    },
    {
      id: "polenta-lumpy",
      label: "Polenta has lumps",
      causes: [
        {
          title: "Polenta added too fast to liquid",
          likelihood: "most-likely",
          explanation: "Cornmeal clumps when dumped in — outer starch gels before inside hydrates.",
          fixes: [
            "Whisk vigorously — lumps often break with persistent whisking.",
            "Pour through fine strainer back into pot to catch dry lumps, whisk again.",
            "Immersion blender (careful with splatter) smooths remaining lumps.",
            "Next time: rain cornmeal in slowly with one hand while whisking with the other.",
            "Bring liquid to boil, lower heat, then add polenta in steady stream."
          ],
          tip: "Slow rain + constant whisk = lump-free polenta. No shortcuts.",
          ifNotFixed: "If still lumpy, blend smooth — creamy polenta hides texture sins."
        },
        {
          title: "Heat too low during incorporation",
          likelihood: "common",
          explanation: "Cornmeal needs active simmer to hydrate — cold or lukewarm liquid makes clumps.",
          fixes: [
            "Bring back to gentle bubble while whisking.",
            "Add splash of hot water to loosen dry pockets.",
            "Cook 30–40 min low simmer, whisking every 5–10 min.",
            "Add butter and parmesan off heat — helps smoothness."
          ],
          tip: "Polenta wants patience — low and slow with occasional whisk."
        },
        {
          title: "Coarse grind or old cornmeal",
          likelihood: "less-common",
          explanation: "Coarse polenta takes longer to hydrate; stale cornmeal absorbs unevenly.",
          fixes: [
            "Soak cornmeal in cold water 15 min before cooking (traditional trick).",
            "Extend cook time — coarse needs 45+ min.",
            "Add more liquid if mixture is stiff before grains soften.",
            "Buy fresh cornmeal — it goes rancid and clumps oddly."
          ],
          tip: "Soaking coarse polenta in cold water first is the pro move for zero lumps."
        }
      ]
    }
  ]
};