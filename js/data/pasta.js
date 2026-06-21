const CATEGORY_PASTA = {
  id: "pasta",
  icon: "🍝",
  title: "Pasta problems",
  description: "Mushy, stuck, saucy disasters, bad pasta water",
  hint: "Pasta mistakes usually happen in the last 5 minutes — water, timing, and sauce marriage.",
  symptoms: [
    {
      id: "mushy",
      label: "Pasta is mushy / falling apart",
      causes: [
        {
          title: "Overcooked past safe al dente",
          likelihood: "most-likely",
          explanation: "Pasta keeps cooking after draining. A minute too long in water plus sauce time = mush.",
          fixes: [
            "Drain immediately and rinse briefly with cold water only if not going into hot sauce (stops cooking).",
            "For baked dishes: undercook by 2 min before baking — oven finishes it.",
            "Mushy pasta in soup: acceptable — call it thick soup.",
            "Sauté drained pasta in hot pan 1–2 min to firm up slightly before saucing.",
            "Next time: taste 2 min before package time; pull when center has tiny firm dot."
          ],
          tip: "Package time is a suggestion — start tasting early.",
          ifNotFixed: "Repurpose as pasta bake or frittata — mush hides in eggs and cheese."
        },
        {
          title: "Not enough water or pot too small",
          likelihood: "common",
          explanation: "Crowded pasta releases starch into cramped water and cooks unevenly — soft outside, or all gluey.",
          fixes: [
            "Use 4–6 qt water per pound of pasta — sounds like a lot, isn't optional.",
            "Stir immediately after adding pasta and again at 1 min — prevents sticking clumps.",
            "Don't put lid on boiling pasta — boil-overs and uneven heat.",
            "Upgrade pot size before blaming the brand."
          ],
          tip: "Pasta needs room to swim — crowded pot is the silent mush maker."
        },
        {
          title: "Wrong pasta for the sauce",
          likelihood: "less-common",
          explanation: "Thin fragile pasta (angel hair, fresh egg pasta) overcooks fast in heavy slow-cooked sauces.",
          fixes: [
            "Match shapes: thick sauces need ridged pasta (rigatoni, penne); delicate sauces need thin pasta.",
            "Add fragile pasta directly to sauce and finish there — control the clock.",
            "Fresh pasta cooks in 2–4 min — set a timer, not the dry pasta habit.",
            "If mushy: bake with breadcrumb topping — texture contrast saves it."
          ],
          tip: "Fresh pasta and dried pasta are different animals — never use the same timing."
        }
      ]
    },
    {
      id: "stuck-together",
      label: "Pasta stuck together in clumps",
      causes: [
        {
          title: "Didn't stir early or drained without oiling/saucing",
          likelihood: "most-likely",
          explanation: "Starch glues pasta seconds after draining if it sits naked in a colander.",
          fixes: [
            "If still hot: toss immediately with sauce or splash of pasta water + olive oil.",
            "For cold pasta salad: rinse with cold water, drain well, toss with oil.",
            "Clumped in pot: add splash of hot water, stir vigorously to loosen.",
            "Next time: have sauce ready before pasta finishes; marry them within 30 seconds of draining.",
            "Stir pasta at 0 min and 1 min after adding to water."
          ],
          tip: "Never let drained pasta sit alone — it's social, it needs sauce immediately.",
          ifNotFixed: "Break clumps apart with tongs in hot sauce over medium heat — add pasta water to loosen."
        },
        {
          title: "Insufficient water or water not at full boil",
          likelihood: "common",
          explanation: "Lukewarm or cramped water lets pasta stick before it sets.",
          fixes: [
            "Wait for rolling boil before adding pasta.",
            "Use enough water — at least 4 qt per pound.",
            "Salted water helps but doesn't prevent sticking — stirring does.",
            "Don't add oil to cooking water — it prevents sauce adhesion later."
          ],
          tip: "Oil in the pot is a myth that ruins sauce cling — stir instead."
        }
      ]
    },
    {
      id: "watery-sauce",
      label: "Sauce is watery / won't cling",
      causes: [
        {
          title: "Pasta water not reduced or too much added",
          likelihood: "most-likely",
          explanation: "Finishing pasta in sauce needs reduction — loose sauce means too much water, not enough simmer.",
          fixes: [
            "Transfer pasta to sauce with slotted spoon; simmer together 1–2 min — sauce should coat, not pool.",
            "Add pasta water splash by splash while tossing — stop when glossy, not soupy.",
            "Finish with knob of butter or parmesan — emulsifies water into silky coat.",
            "If still thin: simmer sauce alone 5 min to reduce before adding more pasta water.",
            "Toss off heat — evaporation slows but emulsification still works."
          ],
          tip: "Pasta water is a seasoning tool, not a substitute for reduced sauce.",
          ifNotFixed: "Serve with slotted spoon, not ladle — leave pooled liquid in the pot."
        },
        {
          title: "Sauce never built body",
          likelihood: "common",
          explanation: "Tomato sauce from can without reduction, or cream sauce thinned with too much milk.",
          fixes: [
            "Simmer tomato sauce uncovered 15–20 min before pasta goes in.",
            "Stir tomato paste into base — instant body.",
            "Cornstarch slurry (1 tsp + 1 tbsp cold water) for cream sauces — simmer 1 min.",
            "Mount cream sauces with cold butter off heat."
          ],
          tip: "Reduce before you thicken — cornstarch on watery bland sauce = bland glue."
        },
        {
          title: "Vegetables released water into sauce",
          likelihood: "less-common",
          explanation: "Zucchini, mushrooms, or frozen spinach bleed water when cooked.",
          fixes: [
            "Sauté watery vegetables separately until moisture evaporates, then add to sauce.",
            "Salt vegetables and drain liquid before combining.",
            "Reduce sauce longer after adding vegetables.",
            "Use less pasta water when finishing."
          ],
          tip: "Mushrooms need dry sauté — watery mushrooms mean watery sauce."
        }
      ]
    },
    {
      id: "broken-sauce",
      label: "Sauce broke / curdled / greasy",
      causes: [
        {
          title: "Cream or cheese overheated",
          likelihood: "most-likely",
          explanation: "Dairy proteins seize above ~180°F / 82°C. Parmesan in boiling sauce clumps and oils out.",
          fixes: [
            "Pull off heat immediately. Add splash of cold pasta water and whisk hard.",
            "Blend briefly with immersion blender if lumps persist.",
            "Stir in cold butter off heat to re-emulsify.",
            "Add cheese off heat, tossing constantly — never boil after cheese.",
            "If completely broken: strain, use liquid, toss pasta with fresh cheese and butter off heat."
          ],
          tip: "Cheese and cream are finishers — add them when the heat is off or barely whispering.",
          ifNotFixed: "Separate pasta, make fresh pan sauce (butter + pasta water + parmesan), toss again."
        },
        {
          title: "Acid hit hot dairy",
          likelihood: "common",
          explanation: "Lemon or wine dumped into boiling cream causes curdling.",
          fixes: [
            "Remove from heat before adding acid.",
            "Whisk in acid slowly after sauce cooled 30 seconds.",
            "Temper: mix acid with small amount of sauce first, then whisk back in.",
            "Add zest instead of juice for lemon flavor without curdle risk."
          ],
          tip: "Acid and boiling cream are enemies — cool first, acid second."
        },
        {
          title: "Butter or oil separated",
          likelihood: "common",
          explanation: "Too much fat, too much heat — oil pools on top of tomato or wine sauce.",
          fixes: [
            "Skim excess oil with spoon.",
            "Whisk in cold pasta water to re-emulsify.",
            "Stir in spoon of tomato paste or starchy pasta water.",
            "Toss pasta in pan — starch helps bind fat."
          ],
          tip: "Finish with pasta water + toss — the starch emulsifies what heat broke."
        }
      ]
    },
    {
      id: "under-salted-water",
      label: "Pasta tastes bland (water under-salted)",
      causes: [
        {
          title: "Forgot salt or used too little",
          likelihood: "most-likely",
          explanation: "Pasta absorbs cooking water — it's your only chance to season the noodle itself.",
          fixes: [
            "Compensate in sauce: salt sauce more aggressively and finish with salty cheese (parmesan, pecorino).",
            "Reduce sauce more — concentration boosts flavor.",
            "Add umami: anchovy, miso, or soy in sauce.",
            "Toss with salted butter and herbs at the end.",
            "Next time: water should taste like pleasant sea water — roughly 1–2 tbsp salt per gallon."
          ],
          tip: "You can't fix unsalted pasta after the fact perfectly — but aggressive sauce helps.",
          ifNotFixed: "Salt the finished dish at the table and add acid — salt + lemon wakes it up."
        },
        {
          title: "Rinsed pasta after draining",
          likelihood: "common",
          explanation: "Rinsing washes away surface starch AND any salt absorbed — only do for cold salads.",
          fixes: [
            "Never rinse hot pasta going into sauce.",
            "Season sauce to carry the dish.",
            "Add pasta water (which is salted) while tossing.",
            "Extra cheese and herbs at finish."
          ],
          tip: "Rinsing pasta is for cold salads only — hot pasta needs starch and salt."
        }
      ]
    },
    {
      id: "over-salted-water",
      label: "Pasta / dish too salty (water over-salted)",
      causes: [
        {
          title: "Salted water like the ocean — literally",
          likelihood: "most-likely",
          explanation: "'Salt like the sea' is guidance, not a dare. Over-salted pasta water seasons the whole dish.",
          fixes: [
            "Rinse pasta briefly after draining — breaks rules but removes surface salt.",
            "Make sauce with unsalted ingredients only — no parmesan, no salted butter.",
            "Add unsalted pasta water or plain water to sauce to dilute.",
            "Bulk with unsalted vegetables or plain bread on the side.",
            "Next time: taste the water — it should be pleasantly salty, not wince-worthy."
          ],
          tip: "Salt pasta water in pinches, taste, adjust — you can't unsalt.",
          ifNotFixed: "Double the sauce volume without adding salt and toss with half the pasta — split the meal."
        },
        {
          title: "Stacked salt: water + sauce + cheese",
          likelihood: "common",
          explanation: "Properly salted water plus salty sauce ingredients = sodium bomb.",
          fixes: [
            "Use unsalted butter and low-sodium stock in sauce.",
            "Skip or reduce parmesan — it's salty.",
            "Balance with acid: lemon cuts salty perception.",
            "Dilute sauce with crushed tomatoes or cream."
          ],
          tip: "Count every salty ingredient before salting pasta water to full sea level."
        }
      ]
    }
  ]
};