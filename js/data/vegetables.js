const CATEGORY_VEGETABLES = {
  id: "vegetables",
  icon: "🥦",
  title: "Vegetable problems",
  description: "Mushy, raw, grey, bitter, watery stir fry, burnt garlic",
  hint: "Vegetables fail from heat timing and water — most fixes are pull early or add more heat.",
  symptoms: [
    {
      id: "mushy",
      label: "Vegetables mushy / collapsed",
      causes: [
        {
          title: "Overcooked or overcrowded steaming",
          likelihood: "most-likely",
          explanation: "Vegetables go from tender to mush fast — especially broccoli, zucchini, green beans.",
          fixes: [
            "Mushy veg in soup or stew: acceptable — flavor still there.",
            "Mushy roast veg: blend into soup or mash with butter as side.",
            "Shock in ice water next batch immediately when tender-crisp.",
            "Next time: pull when bright colored and fork offers slight resistance.",
            "Roast at 425°F / 220°C — high heat browns before mush."
          ],
          tip: "Bright color = still has structure. Dull olive green = mush incoming.",
          ifNotFixed: "Puree mushy veg into sauce, soup, or baby food — nobody knows it started as a side dish."
        },
        {
          title: "Started in cold pan or too much liquid",
          likelihood: "common",
          explanation: "Vegetables steamed in their own water instead of sautéed — soft and waterlogged.",
          fixes: [
            "Sauté in hot pan with oil first — sear before steaming.",
            "Don't cover unless intentionally steaming.",
            "Cook in batches so pan stays hot.",
            "Salt at end — early salt draws water out."
          ],
          tip: "Hot pan, oil first, veg second — not everything in cold pan at once."
        },
        {
          title: "Wrong veg for long cook time",
          likelihood: "less-common",
          explanation: "Zucchini, spinach, peas added early to stew dissolve by serving time.",
          fixes: [
            "Add delicate veg last 5–10 min of cook.",
            "Roast sturdy veg (carrots, potatoes) longer; add tender veg after.",
            "If already mush: blend into stew body for thickness.",
            "Frozen veg cook faster — add later than fresh."
          ],
          tip: "Peas and spinach are garnish timing — not hour-one ingredients."
        }
      ]
    },
    {
      id: "still-raw",
      label: "Vegetables still raw / crunchy",
      causes: [
        {
          title: "Pieces too large or heat too low",
          likelihood: "most-likely",
          explanation: "Big chunks of carrot, potato, or squash won't soften before outside burns or sauce reduces.",
          fixes: [
            "Cut smaller — uniform ½-inch pieces cook evenly.",
            "Cover pan 3–5 min to steam-finish after initial sauté.",
            "Add splash of water or stock, cover, medium heat until tender.",
            "Par-boil dense veg (potatoes, carrots) 5 min before stir-fry or roast.",
            "Raise oven temp for roast — 400°F+ for browning and softening."
          ],
          tip: "Dense veg need small cuts or par-cook — there's no shortcut for a whole potato in a stir-fry.",
          ifNotFixed: "Transfer raw pieces out, finish separately in microwave with splash of water, recombine."
        },
        {
          title: "Crowded pan — steaming not cooking",
          likelihood: "common",
          explanation: "Too much veg drops pan temp — edges barely cook, centers stay raw.",
          fixes: [
            "Cook in batches, combine at end.",
            "Use larger pan or wider Dutch oven.",
            "Don't stir constantly — let heat recover between tosses.",
            "Preheat pan and oil before veg goes in."
          ],
          tip: "If you hear sizzle stop when veg hits pan, you overcrowded."
        },
        {
          title: "Added to dish too late",
          likelihood: "less-common",
          explanation: "Stir-fry or pasta dish pulled before veg had time — especially broccoli florets.",
          fixes: [
            "Blanch broccoli 2 min in boiling water before stir-fry.",
            "Return dish to heat 3–5 min with lid.",
            "Microwave stubborn pieces separately, fold in.",
            "Cut florets smaller — thick stems cook slower."
          ],
          tip: "Broccoli stems need more time than florets — split them or start stems first."
        }
      ]
    },
    {
      id: "grey-broccoli",
      label: "Broccoli turned grey / dull",
      causes: [
        {
          title: "Overcooked or covered too long",
          likelihood: "most-likely",
          explanation: "Chlorophyll breaks down to grey-green when broccoli cooks too long, especially covered.",
          fixes: [
            "Grey broccoli still nutritious — sauce and cheese help presentation.",
            "Shock next batch in ice water the instant it's tender-crisp.",
            "Steam 4–5 min max; roast 15–20 min at high heat.",
            "Uncover during last minute — trapped steam dulls color.",
            "Salt after cooking — preserves color slightly."
          ],
          tip: "Ice bath is the pro move for bright green — 30 seconds changes everything.",
          ifNotFixed: "Cheese sauce, cheddar soup, or puree — grey disappears in orange cheese."
        },
        {
          title: "Acid added too early",
          likelihood: "common",
          explanation: "Lemon or vinegar on hot broccoli turns it army green-grey.",
          fixes: [
            "Add acid at the table, not in the pot.",
            "Dress with oil and salt while hot; lemon at serve.",
            "If already grey: bright garnish (pomegranate, red pepper) distracts eye."
          ],
          tip: "Acid + hot green veg = color death. Acid at the end only."
        },
        {
          title: "Hard water or old broccoli",
          likelihood: "less-common",
          explanation: "Alkaline water and aging florets dull faster.",
          fixes: [
            "Pinch of baking soda in blanch water (tiny!) — keeps green; don't overdo or mush results.",
            "Use fresh tight florets — yellow flowers mean old.",
            "Cook same day as purchase.",
            "Roast instead of boil — browning masks dullness."
          ],
          tip: "Yellow flowering broccoli is past prime — grey is guaranteed."
        }
      ]
    },
    {
      id: "bitter-greens",
      label: "Greens taste bitter",
      causes: [
        {
          title: "Stems, old leaves, or wrong prep",
          likelihood: "most-likely",
          explanation: "Kale stems, collard ribs, and old spinach taste bitter. Undercooked mustard greens stay harsh.",
          fixes: [
            "Remove tough stems and ribs — use leaves only.",
            "Blanch bitter greens 2 min, drain, then sauté — removes some bitterness.",
            "Balance with fat, acid, and salt: olive oil, lemon, garlic.",
            "Add pinch of sugar or caramelized onion.",
            "Young baby greens are milder — swap if available."
          ],
          tip: "Massage kale with salt and oil 2 min — breaks down toughness and bitterness.",
          ifNotFixed: "Bitter greens in soup with cream and potatoes — bitterness fades in dairy and starch."
        },
        {
          title: "Brassicas burnt or scorched",
          likelihood: "common",
          explanation: "Burnt broccoli, Brussels sprouts, or charred kale taste acrid-bitter.",
          fixes: [
            "Trim burnt bits.",
            "Add acid and fat to round.",
            "Lower roast temp to 400°F — char is good, black is bitter.",
            "Steam then sear — ensures tender inside before high-heat char."
          ],
          tip: "Char = caramelized. Black = bitter. Know the difference on roasted sprouts."
        },
        {
          title: "Chemical compounds in raw crucifers",
          likelihood: "less-common",
          explanation: "Raw kale and Brussels can taste bitter/soapy to some — cooking mellows.",
          fixes: [
            "Cook longer than you think — 15+ min braise mellows collards.",
            "Roast Brussels cut-side down until deeply golden.",
            "Blanch before sauté.",
            "Pair with bacon fat, parmesan, or balsamic."
          ],
          tip: "If raw kale salad tastes bitter, massage + acid + salt + time (marinate 30 min)."
        }
      ]
    },
    {
      id: "watery-stir-fry",
      label: "Stir fry watery / steaming not searing",
      causes: [
        {
          title: "Pan not hot enough or overcrowded",
          likelihood: "most-likely",
          explanation: "Veg releases water when crowded in lukewarm pan — you get boil, not wok hei.",
          fixes: [
            "Cook in batches — protein first, remove, veg in batches, combine at end.",
            "Highest heat, oil shimmering before veg enters.",
            "Don't cover — ever, unless intentionally steaming.",
            "Sauce goes in last 30 sec — not at start.",
            "Cornstarch-velvet protein — keeps moisture in meat, not in pan."
          ],
          tip: "Wok needs screaming heat and room to breathe — home burners need smaller batches.",
          ifNotFixed: "If already watery: crank heat, reduce uncovered 2 min, thicken sauce with cornstarch slurry."
        },
        {
          title: "Frozen or wet vegetables added",
          likelihood: "common",
          explanation: "Ice crystals and washing water become steam pool in pan.",
          fixes: [
            "Thaw and drain frozen veg on paper towels.",
            "Pat all washed veg completely dry.",
            "Cook frozen veg separately first to evaporate water, then proceed.",
            "Don't add sauced veg to hot oil — water in sauce causes splatter and steam."
          ],
          tip: "Wet veg in a wok is a swimming pool — dry veg is a stir-fry."
        },
        {
          title: "Too much sauce or added too early",
          likelihood: "common",
          explanation: "Liquid sauce at start steams everything instead of searing.",
          fixes: [
            "Sear veg and protein dry, sauce last 30–60 sec.",
            "Thicken sauce with cornstarch before adding.",
            "Use less liquid — 2–3 tbsp max for home stir-fry.",
            "Reduce sauce separately until glossy, then toss."
          ],
          tip: "Stir-fry sauce is a finish, not a cooking medium."
        }
      ]
    },
    {
      id: "garlic-burnt",
      label: "Garlic burnt / bitter",
      causes: [
        {
          title: "Added too early or heat too high",
          likelihood: "most-likely",
          explanation: "Garlic burns in 30 seconds on high heat — goes from golden to acrid instantly.",
          fixes: [
            "If lightly burnt: pick out black bits, don't scrape fond.",
            "If acrid throughout: transfer food to new pan, leave burnt garlic behind.",
            "Add fresh garlic off heat or as finishing oil (garlic oil).",
            "Next time: add garlic after onion softens, lower heat.",
            "Slice thicker — thin slices burn faster than crushed."
          ],
          tip: "Garlic goes in when onion is translucent, not when oil first hits pan.",
          ifNotFixed: "Heavy burnt garlic: start fresh aromatics in new pan, fold in salvaged protein/veg."
        },
        {
          title: "Minced too fine or pre-minced jar garlic",
          likelihood: "common",
          explanation: "Fine mince burns faster. Jar garlic has water — spits and burns.",
          fixes: [
            "Slice or crush instead of micro-mince for longer cook dishes.",
            "Add minced garlic last 60 sec of cook.",
            "Use fresh cloves — jar garlic burns easier.",
            "Garlic chips: slice, add to warm (not screaming) oil."
          ],
          tip: "The finer the garlic, the faster it burns — match cut to cook time."
        },
        {
          title: "Dry rub or roast garlic scorched",
          likelihood: "less-common",
          explanation: "Garlic on roast veg or in oven hits hot pan surface and chars.",
          fixes: [
            "Tent foil over garlic-heavy roast for first half.",
            "Add garlic halfway through roast, not at start.",
            "Roast whole garlic head wrapped in foil — different technique, forgiving.",
            "Remove burnt chips before serving."
          ],
          tip: "Whole roasted garlic head = forgiving. Minced on sheet pan = burns."
        }
      ]
    }
  ]
};