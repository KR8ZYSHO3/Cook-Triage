const LESSONS_DATA = [
  {
    id: "mise-en-place",
    icon: "📋",
    title: "Mise en place",
    subtitle: "Prep one real dish before you turn on the stove",
    readTime: "12 min",
    tagline: "You'll set up a simple stir-fry. No cooking until everything is ready.",
    relatedTriage: [
      { catId: "flavor", symptomId: "smoky-burnt-taste", label: "Burnt / smoky taste" },
      { catId: "sauces", symptomId: "split", label: "Split sauce" },
      { catId: "meat", symptomId: "dry-chicken", label: "Dry chicken" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p><strong>Mise en place</strong> means "everything in its place." At home, that just means: <strong>read the recipe, pull your stuff, prep it, then cook.</strong></p>
        <p>Most burnt garlic and split sauces happen because someone started cooking while still chopping. This lesson fixes that with one practice dish — a basic stir-fry setup you can copy for any recipe.</p>
        <p>There's another reason this matters: most home cooks are used to keeping the burner on <strong>low or medium</strong> — and that's completely fine for weeknight dinners. But if you want to push yourself and actually <strong>build flavor</strong> (browning, sizzle, sauce that coats instead of pools), you sometimes need <strong>higher heat</strong>. You can't do that safely while you're still mincing garlic. Mise en place is what frees your hands and your attention so you can cook hotter when the dish calls for it — and <strong>control the heat</strong> by turning it down or <strong>lifting the pan off the burner</strong> when things move too fast.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "1 chicken breast or 8 oz firm tofu",
          "1 small onion",
          "2 cloves garlic",
          "2 tbsp soy sauce",
          "1 tbsp water",
          "1 tsp cornstarch (optional — helps sauce cling)",
          "Cooked rice for serving (microwave pouch is fine)",
          "Knife, cutting board, 2 small bowls, measuring spoons, wok or large skillet"
        ],
        ingredientsNote: "You are only prepping in this lesson. The stove stays off until the checklist is done."
      },
      {
        heading: "Do this now — step by step",
        walkthrough: [
          {
            title: "Read the whole recipe once",
            text: "Picture the order: protein first, then aromatics, then sauce, then rice. Note that garlic cooks in under 30 seconds — it cannot wait on the board.",
            watch: "Any step that says \"add immediately\" — that ingredient gets prepped early."
          },
          {
            title: "Pull everything onto the counter",
            text: "Chicken/tofu, onion, garlic, soy, water, cornstarch, rice, pan, spatula, oil. Missing something? Find it now, not mid-sizzle.",
            watch: "Empty counter space — you need room for bowls."
          },
          {
            title: "Cut the protein",
            text: "Chicken: bite-size pieces. Tofu: cubes. Pat very dry with paper towels. Put in a bowl.",
            watch: "Wet protein steams instead of browning later."
          },
          {
            title: "Prep aromatics",
            text: "Slice onion. Mince garlic into a separate small bowl. Never leave garlic in a pile on the board.",
            watch: "Garlic in its own bowl = it waits safely while onion cooks."
          },
          {
            title: "Mix the sauce",
            text: "In a cup: soy sauce + water + cornstarch. Stir until no starch lumps. Set next to the stove.",
            watch: "Sauce ready before heat — no fumbling bottles when the pan is hot."
          },
          {
            title: "Plan your heat",
            text: "Before you light the burner, decide: does this dish need a quick sear (medium-high) or a gentle simmer (low)? Stir-fry wants a hot pan — but you're in control. The knob isn't your only tool; sliding the pan off the heat buys you seconds when garlic threatens to burn.",
            watch: "Higher heat is only safe when prep is done. Low/medium forever is fine — but mise is what lets you level up when you're ready."
          },
          {
            title: "Final check",
            text: "Towel for spills. Garbage bowl. Salt within reach. Sticky note if you'll forget rice: \"RICE FIRST.\" Only now — turn on the burner.",
            watch: "If you feel rushed turning on the stove, something is still unprepped."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>Every ingredient is cut, measured, or in a bowl</li>
          <li>Garlic is not sitting on the cutting board</li>
          <li>Sauce is mixed and the pan is out</li>
          <li>You could cook the whole dish without opening a new cabinet</li>
        </ul>
        <p>That's mise en place. Same loop for pasta night, soup, or anything else.</p>`
      },
      {
        heading: "Checklist: save this for next time",
        interactive: true,
        checklist: [
          "Read recipe once — note fast steps (garlic, herbs, butter finish)",
          "All ingredients on counter",
          "Protein cut and patted dry",
          "Aromatics in bowls, not on the board",
          "Liquids measured in cups",
          "Pan and tools out",
          "Heat level decided (and pan-off-the-burner as backup)",
          "Only then: turn on heat"
        ]
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p>Kitchen disasters are usually <strong>timing failures</strong>, not skill failures. Your brain can only track so many tasks. When prep isn't done, you enter <strong>cognitive overload</strong> — garlic burns while you hunt for soy sauce.</p>
        <p>Separating prep from cooking also separates <strong>wet work</strong> (chopping, measuring) from <strong>dry heat work</strong> (browning). Dry surfaces need attention the moment they hit the pan. Mise en place guarantees that attention is available.</p>
        <p>Low and medium heat are forgiving — that's why so many home cooks stay there. Browning and wok-style sizzle need brief bursts of higher temperature. Without mise, your instinct is to keep heat low so nothing runs away from you. With everything prepped, you can run the pan hotter for the protein, then <strong>pull it off the heat</strong> or drop to low the second aromatics go in. Heat control isn't just the dial; it's <strong>pan on, pan off, lid on, lid off</strong>.</p>
        <p>Professional kitchens run on this for the same reason hospitals run on checklists: predictable order beats heroic panic.</p>`
      }
    ]
  },
  {
    id: "maillard-reaction",
    icon: "🥩",
    title: "The Maillard reaction",
    subtitle: "See browning happen — one pan, two pieces, big difference",
    readTime: "15 min",
    tagline: "Brown food tastes better. This lesson shows you exactly why drying matters.",
    relatedTriage: [
      { catId: "heat-pan", symptomId: "burnt-outside-raw-inside", label: "Burnt outside, raw inside" },
      { catId: "heat-pan", symptomId: "stuck", label: "Food stuck to pan" },
      { catId: "meat", symptomId: "dry-chicken", label: "Dry chicken" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>The <strong>Maillard reaction</strong> (my-YAR, named after a French scientist) is what creates brown crust on seared meat, roasted vegetables, and toast. It's the savory, roasty flavor people chase.</p>
        <p>It is <em>not</em> the same as burning — it's controlled browning. You need three things: <strong>dry surface, hot pan, and patience.</strong> This lesson proves it with a side-by-side test you can eat when you're done.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "2 chicken thighs (skin on) OR 2 large portobello mushroom caps",
          "1 tbsp neutral oil (vegetable, canola, avocado)",
          "Salt and pepper",
          "Paper towels",
          "Heavy skillet or cast iron pan",
          "Spatula"
        ],
        ingredientsNote: "Thighs are forgiving for beginners. Mushrooms work great if you don't eat meat — same lesson, same browning rules."
      },
      {
        heading: "Do this now — step by step",
        walkthrough: [
          {
            title: "Split your test pieces",
            text: "You need two similar pieces. Pat piece #1 completely dry with paper towels — really dry. Leave piece #2 damp (rinse and don't dry it). Salt both lightly.",
            watch: "Piece #1 should look matte. Piece #2 should look wet."
          },
          {
            title: "Heat the pan empty",
            text: "Medium-high heat for 2–3 minutes. Add oil — it should shimmer and move easily, not smoke wildly.",
            watch: "Cold pan + wet food = steam, not brown."
          },
          {
            title: "Add the dry piece first",
            text: "Lay piece #1 away from you. Do not move it for 3–4 minutes. Listen for sizzle — steady, not angry popping.",
            watch: "Golden brown edge creeping up the side. That's Maillard starting."
          },
          {
            title: "Flip once",
            text: "When #1 releases easily from the pan (gentle nudge with spatula), flip. Cook second side 3 minutes. Move to a plate.",
            watch: "If it fights the pan, it's not ready — wait 30 more seconds."
          },
          {
            title: "Add the wet piece",
            text: "Same pan, same heat. Lay piece #2 in. Notice: louder initial sizzle, then it goes quiet. Steam. Less color.",
            watch: "Pale, grey-ish look instead of deep gold. That's moisture blocking browning."
          },
          {
            title: "Compare and taste",
            text: "Finish cooking #2 through (chicken to 165°F internal). Taste both. Smell both. The dry-seared piece should taste deeper, nuttier, more savory.",
            watch: "Color difference = flavor difference. Your eyes are telling you the story."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>Piece #1 is noticeably darker than piece #2</li>
          <li>You can taste the difference — deeper flavor on the dry-seared one</li>
          <li>You understand: brown isn't luck, it's dry + heat + time</li>
        </ul>
        <p>From here, every sear, roast, and stir-fry uses the same rule: <strong>dry the food, hot the pan, don't crowd.</strong></p>`
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p>The Maillard reaction happens when <strong>amino acids</strong> (from protein) and <strong>reducing sugars</strong> react under dry heat, roughly 285–330°F / 140–165°C. Hundreds of new flavor compounds form — that's the roasty, meaty, coffee-like notes.</p>
        <p><strong>Water stops it.</strong> Until surface moisture evaporates, food stays near 212°F / 100°C (boiling). The pan spends its energy steaming, not browning. Patting dry shortcuts that step.</p>
        <p><strong>Don't confuse Maillard with caramelization.</strong> Caramelization is sugars alone breaking down (onions, carrots). Maillard needs protein. Both taste great — most roasted vegetables get both.</p>
        <p><strong>Crowding the pan</strong> drops temperature and traps steam — same effect as wet food. Leave space; work in batches if needed.</p>
        <p>Burnt black is past Maillard — acrid and bitter. Golden to deep brown is the target. If outside races ahead of inside, lower heat after the sear and finish gentler (oven, lid, lower burner).</p>`
      }
    ]
  },
  {
    id: "cooking-methods",
    icon: "🔥",
    title: "Cooking methods",
    subtitle: "Same broccoli, two ways — feel the difference",
    readTime: "18 min",
    tagline: "Dry heat browns. Wet heat softens. You'll cook both in one session.",
    relatedTriage: [
      { catId: "heat-pan", symptomId: "burnt-outside-raw-inside", label: "Burnt outside, raw inside" },
      { catId: "vegetables", symptomId: "mushy", label: "Mushy vegetables" },
      { catId: "frying", symptomId: "not-crispy", label: "Not crispy / soggy fry" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>Every recipe uses one of a few <strong>methods</strong>: dry heat (roast, sear), moist heat (steam, simmer), or both (sear then braise). The method tells you what to watch for and what "done" looks like.</p>
        <p>Instead of memorizing lists, you'll cook <strong>the same vegetable two ways</strong> and compare. Once you feel the difference, recipe instructions make sense.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "1 head broccoli (or 2 zucchini — your choice)",
          "2 tbsp oil",
          "Salt and pepper",
          "Pot with lid + steamer basket OR microwave-safe bowl with 2 tbsp water",
          "Baking sheet",
          "Oven or toaster oven"
        ],
        ingredientsNote: "Split the vegetable in half — same size florets on each side so the comparison is fair."
      },
      {
        heading: "Do this now — moist heat half",
        walkthrough: [
          {
            title: "Prep even pieces",
            text: "Cut broccoli into same-size florets. Divide into two equal piles — pile A and pile B.",
            watch: "Similar size = similar cook time."
          },
          {
            title: "Steam pile A",
            text: "Basket over boiling water, lid on, medium heat. Or microwave: pile A + 2 tbsp water, covered, 3–4 minutes.",
            watch: "Bright green color, tender when pierced with a fork, no browning."
          },
          {
            title: "Taste pile A",
            text: "Salt lightly. Notice: clean broccoli flavor, soft texture, watery mouthfeel. Hard to burn if you don't walk away for an hour.",
            watch: "Gentle, even cooking — that's moist heat's superpower."
          }
        ]
      },
      {
        heading: "Do this now — dry heat half",
        walkthrough: [
          {
            title: "Heat oven to 425°F / 220°C",
            text: "Toss pile B with oil, salt, pepper. Spread on baking sheet — not piled up.",
            watch: "Single layer with space between pieces."
          },
          {
            title: "Roast 18–22 minutes",
            text: "Flip once halfway. Edges should char slightly. Inside tender, outside crisp and brown.",
            watch: "Brown tips and nutty smell — Maillard + caramelization on the edges."
          },
          {
            title: "Taste pile B",
            text: "Compare to pile A. Roasted should taste sweeter, deeper, almost nutty. Texture firmer on the outside.",
            watch: "Same vegetable, completely different eating experience."
          }
        ]
      },
      {
        heading: "Name the method before you cook",
        body: `<p>Before any recipe, ask one question: <strong>Is this trying to brown, or gently cook through?</strong></p>
        <ul>
          <li><strong>Dry heat</strong> — sear, roast, bake, stir-fry: dry surface, color, crust</li>
          <li><strong>Moist heat</strong> — boil, simmer, steam, poach: gentle, even, hard to burn</li>
          <li><strong>Combo</strong> — brown chicken, then add stock and simmer covered: crust + tenderness</li>
        </ul>
        <p>Wrong method = wrong result. Mushy roasted veg? Too much steam in the oven (crowded pan). Bland steamed veg? That's normal — moist heat doesn't brown; add butter, acid, or roast finish.</p>`
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p><strong>Moist heat</strong> transfers energy through water or steam at roughly 212°F / 100°C (at sea level). Food cooks evenly; proteins denature gently; starches hydrate. Little browning because water keeps surface temperature capped until it boils off.</p>
        <p><strong>Dry heat</strong> lets surface temperature climb higher — enabling Maillard and caramelization. Air and metal conduct heat differently than steam: outside cooks faster than inside, which is why you get crust + tender center (or burnt outside / raw inside if heat is wrong).</p>
        <p><strong>Combination cooking</strong> uses dry heat first for flavor compounds (fond in the pan, browned exterior), then moist heat to dissolve collagen in tough cuts (braising) or cook through without drying out.</p>
        <p>Pick the method that matches what you want to eat, not what the recipe title says. A "healthy" steamed dinner that tastes flat? Finish with acid and fat. A "crispy" oven dish that's soggy? More heat, more space, drier surface.</p>`
      }
    ]
  },
  {
    id: "french-sauces",
    icon: "🥄",
    title: "French sauces made easy",
    subtitle: "Make a pan sauce from scratch — five ingredients, one pan",
    readTime: "20 min",
    tagline: "This is the mother of weeknight sauces. Do it once, use it forever.",
    relatedTriage: [
      { catId: "sauces", symptomId: "split", label: "Curdled / split sauce" },
      { catId: "sauces", symptomId: "grainy-flour", label: "Grainy flour sauce" },
      { catId: "flavor", symptomId: "too-salty", label: "Too salty after reducing" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>French sauce anxiety is real. At home you need <strong>one move</strong> first: the <strong>pan sauce</strong>. Brown something, splash liquid, scrape the pan, reduce, finish with butter. That's it.</p>
        <p>Roux and hollandaise come later. This lesson walks you through a pan sauce you can pour over chicken, pork, mushrooms, or tofu tonight.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "2 chicken thighs or 2 pork chops (bone-in is fine)",
          "1 tbsp oil",
          "½ cup chicken stock, wine, or even water",
          "1 tbsp cold butter, cut into cubes",
          "Salt, pepper",
          "Optional: 1 shallot or garlic clove, lemon wedge, teaspoon mustard"
        ],
        ingredientsNote: "Measure stock and butter before you sear — pan sauce happens fast at the end."
      },
      {
        heading: "Do this now — step by step",
        walkthrough: [
          {
            title: "Pat meat dry, salt it",
            text: "Dry surface = better browning (see Maillard lesson). Salt both sides.",
            watch: "Matte, not shiny."
          },
          {
            title: "Sear the protein",
            text: "Hot pan, oil shimmers. Lay meat in, don't move 3–4 minutes. Flip, sear second side. Cook through or finish in oven. Move meat to a plate to rest.",
            watch: "Brown stuck-on bits in the pan — that's fond. It's free flavor."
          },
          {
            title: "Pour off extra fat",
            text: "Leave a thin film in the pan. If there's a pool of grease, tip it out. Too much fat = greasy sauce.",
            watch: "Pan should look shiny, not swimming."
          },
          {
            title: "Deglaze",
            text: "Medium-high heat. Optional: sizzle shallot 30 seconds. Add stock/wine — it will steam and bubble. Scrape every brown bit with a wooden spoon.",
            watch: "Fond dissolving into the liquid — pan getting cleaner."
          },
          {
            title: "Reduce",
            text: "Simmer 2–4 minutes until slightly thicker than water. Taste. It should be savory, not watery.",
            watch: "Sauce coats the spoon lightly. It thickens more when butter goes in."
          },
          {
            title: "Finish off heat",
            text: "Remove pan from burner. Whisk in cold butter one cube at a time. Season: salt, pepper, squeeze of lemon. Pour over rested meat.",
            watch: "Sauce goes glossy. Butter off heat prevents splitting."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>Sauce is glossy and coats the back of a spoon</li>
          <li>It tastes savory, bright (lemon helps), not greasy</li>
          <li>You can name the four steps: fond → deglaze → reduce → butter</li>
        </ul>
        <p>Split or greasy? Open CookTriage → Sauces. Grainy flour sauce is a different path (roux) — try that next when you want mac-and-cheese thickness.</p>`
      },
      {
        heading: "Quick reference — three sauce types",
        interactive: true,
        checklist: [
          "Pan sauce: brown in pan → liquid → scrape → reduce → butter off heat",
          "Roux sauce: equal butter + flour → whisk liquid slowly → simmer thick",
          "Blender hollandaise: yolk + lemon → drizzle hot butter while blending"
        ]
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p><strong>Fond</strong> is concentrated Maillard product — proteins and sugars caramelized on the pan. Deglazing dissolves those into liquid, creating instant umami.</p>
        <p><strong>Reduction</strong> boils off water, concentrating flavor and thickening slightly. As water leaves, salt and acid taste stronger — season at the end.</p>
        <p><strong>Monter au beurre</strong> (whisking cold butter off heat) emulsifies fat into the sauce — tiny butter droplets suspended in liquid = glossy body. High heat breaks the emulsion → greasy or split sauce.</p>
        <p><strong>Roux</strong> (butter + flour cooked, then liquid) uses starch gelatinization to thicken — different physics, more stable for creamy soups. <strong>Hollandaise</strong> is a fat-in-water emulsion held by egg lecithin — temperature-sensitive.</p>
        <p>Escoffier's "mother sauces" are just templates for these reactions. Pan sauce is the useful descendant of espagnole. You're not skipping French technique — you're using the version that fits a Tuesday.</p>`
      }
    ]
  },
  {
    id: "rescue-mindset",
    icon: "🧠",
    title: "The rescue mindset",
    subtitle: "Fix oversalted soup — practice the loop on real food",
    readTime: "12 min",
    tagline: "Symptom → cause → fix. You'll taste your way out of a common disaster.",
    relatedTriage: [
      { catId: "rescue", symptomId: "whole-meal-wrong", label: "Whole meal feels wrong" },
      { catId: "flavor", symptomId: "too-salty", label: "Too salty" },
      { catId: "grains", symptomId: "rice-mushy", label: "Mushy rice" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>When dinner goes wrong, most people panic or start over. <strong>Rescue mindset</strong> means: name the symptom, guess the cause, try the smallest fix, taste again.</p>
        <p>You'll practice on <strong>oversalted soup</strong> — the most common "I ruined it" moment. If your soup is fine, deliberately add 1 tsp salt too much to a cup of it. Safe lab.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "2–3 cups soup, stew, or broth (homemade or canned)",
          "1 cup water or unsalted stock",
          "1 small potato (optional — for the myth test)",
          "Acid: lemon wedge or splash of vinegar",
          "Starch: cooked rice, pasta, or a raw potato diced small",
          "Spoon for tasting"
        ],
        ingredientsNote: "Practice on a portion, not the whole pot — easier to learn without risking dinner."
      },
      {
        heading: "Do this now — the rescue loop",
        walkthrough: [
          {
            title: "Name the symptom",
            text: "Taste the soup. Say it out loud: \"Too salty.\" Not \"it's ruined\" — specific words lead to specific fixes.",
            watch: "Salt hits the front of the tongue, makes you want water."
          },
          {
            title: "Guess the cause",
            text: "Reduced too long? Salty stock? Added salt before tasting? Causes matter for next time — right now, fix the symptom.",
            watch: "Reduction concentrates salt — same salt, less water."
          },
          {
            title: "Fix #1 — dilute",
            text: "Add unsalted liquid in small amounts: ¼ cup water/stock, stir, taste. Repeat until almost right.",
            watch: "Flavor gets milder but also thinner — that's the tradeoff."
          },
          {
            title: "Fix #2 — bulk (if dilute made it watery)",
            text: "Add absorbent bulk: cooked rice, pasta, diced potato, more vegetables. They take up salt in the bowl, not magically from the pot.",
            watch: "Per spoonful, it tastes less salty because there's more stuff."
          },
          {
            title: "Fix #3 — balance",
            text: "Tiny acid (lemon/vinegar) or fat (butter, cream) can make salt <em>feel</em> less aggressive. Does not remove salt — changes perception.",
            watch: "Small splash. Taste. Stop before it tastes sour."
          },
          {
            title: "Re-taste and decide",
            text: "Better? Serve. Still bad? Try next cause in CookTriage → Flavor → Too salty. Only discard if acrid burnt or unsafe — not because it's merely salty.",
            watch: "Most soups survive. Pride is usually what got oversalted."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>You ran dilute → bulk → balance without throwing the pot away</li>
          <li>You can explain the loop: symptom, cause, fix, re-taste</li>
          <li>You know a potato in the pot does <em>not</em> pull salt out (myth)</li>
        </ul>`
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p><strong>Perceived saltiness</strong> depends on sodium concentration in the liquid that touches your tongue. Dilution lowers that concentration — physics, not magic.</p>
        <p><strong>Potatoes in soup</strong> absorb seasoned liquid; they don't selectively extract sodium ions. Eating the potato tastes salty because the liquid it soaked up is salty. Bulk helps by increasing non-salty mass per bite.</p>
        <p><strong>Acid and fat</strong> don't remove NaCl — they shift flavor balance. Acid adds competing brightness; fat coats the palate. Both tricks make salt less dominant subjectively.</p>
        <p><strong>When to abandon:</strong> acrid burnt (volatile bitter compounds throughout), cross-contamination, or spoilage. Everything else is usually a salvage project — shredded dry meat into sauce, mushy rice into fried rice tomorrow, broken sauce strained and rebuilt.</p>`
      }
    ]
  },
  {
    id: "dropout-to-dinner",
    icon: "🎓",
    title: "Dropout to dinner",
    subtitle: "One complete meal that uses everything you've learned",
    readTime: "25 min",
    tagline: "Mise → sear → pan sauce. The Tuesday night version of culinary school.",
    relatedTriage: [
      { catId: "flavor", symptomId: "too-salty", label: "Too salty" },
      { catId: "sauces", symptomId: "split", label: "Split sauce" },
      { catId: "meat", symptomId: "dry-chicken", label: "Dry chicken" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>I went to culinary school. I didn't finish. What actually changed my cooking at home wasn't mother sauces on a test — it was <strong>one repeatable dinner</strong> I could nail while tired.</p>
        <p>This is that dinner: seared chicken (Maillard), pan sauce (French technique, home version), with mise en place so nothing burns. If you do one lesson meal, do this one.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "2 bone-in chicken thighs",
          "Salt, pepper",
          "1 tbsp oil",
          "½ cup chicken stock or water",
          "1 tbsp butter",
          "½ lemon",
          "Optional: 1 shallot, handful of green beans or broccoli",
          "Rice or bread for serving"
        ],
        ingredientsNote: "Read the walkthrough fully before prep — that's step zero of mise en place."
      },
      {
        heading: "Do this now — step by step",
        walkthrough: [
          {
            title: "Mise (10 minutes)",
            text: "Pat thighs dry. Salt them. Measure stock into a cup. Cut butter. Halve lemon. Shallot minced in a bowl if using. Veg prepped. Pan and spatula out.",
            watch: "Nothing left to chop once the pan is hot."
          },
          {
            title: "Sear — dry heat",
            text: "Medium-high pan, oil shimmers. Thighs skin-down, don't move 4 minutes. Flip, cook until 165°F internal (thermometer in thickest part). Rest on plate.",
            watch: "Golden skin, brown fond in pan — that's flavor waiting."
          },
          {
            title: "Pan sauce — same pan",
            text: "Pour off extra fat. Optional shallot 30 sec. Add stock, scrape fond. Simmer 3 minutes. Off heat: whisk butter, lemon, salt, pepper.",
            watch: "Glossy sauce. If it breaks, off heat + whisk harder or add splash of cold water."
          },
          {
            title: "Veg — pick a method",
            text: "Quick steam while chicken rests, or roast veg in oven before chicken if you planned ahead. Salt and butter on veg.",
            watch: "Moist heat veg + dry heat chicken = balanced plate."
          },
          {
            title: "Plate and taste",
            text: "Sauce over chicken. Taste everything. Adjust: more lemon? pinch salt? You fixed dinner with skills, not a new recipe.",
            watch: "If chicken is dry — next time pull at 160°F; it coasts to 165°F while resting."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>Chicken has golden skin and juicy interior</li>
          <li>Sauce is glossy and poured over the rest</li>
          <li>You prepped before heat and didn't burn garlic mid-panic</li>
          <li>You'd happily cook this again on a weekday</li>
        </ul>
        <p>Bookmark your triage paths for what actually goes wrong for <em>you</em> — too salty, split sauce, dry chicken. That's your personal curriculum.</p>`
      },
      {
        heading: "The science behind the whole plate",
        science: true,
        body: `<p>This meal chains three ideas: <strong>mise en place</strong> prevents timing errors; <strong>Maillard</strong> on dry chicken builds crust and fond; <strong>pan sauce</strong> dissolves fond and emulsifies butter for body.</p>
        <p><strong>Resting meat</strong> lets juices redistribute — muscle fibers relaxed, less juice on the board when you cut. Pull chicken slightly early because <strong>carryover cooking</strong> adds 5–10°F while it sits.</p>
        <p>Culinary school teaches the vocabulary. Home cooking teaches <strong>which failures matter</strong> and how to fix them without starting over. CookTriage is the second part — the part I needed after I left school.</p>`
      }
    ]
  },
  {
    id: "salt-acid-fat",
    icon: "🔺",
    title: "Salt, acid, fat",
    subtitle: "Fix bland food with three knobs — taste as you go",
    readTime: "10 min",
    tagline: "Most 'boring' dinners aren't missing a secret spice. They're missing one of three things.",
    relatedTriage: [
      { catId: "flavor", symptomId: "too-bland", label: "Flat / boring" },
      { catId: "flavor", symptomId: "too-salty", label: "Too salty" },
      { catId: "soups", symptomId: "too-salty", label: "Soup too salty" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>Professional cooks talk about <strong>salt, acid, and fat</strong> like a triangle — adjust any corner and the whole dish wakes up. Home recipes often say "season to taste" without teaching you what to reach for.</p>
        <p>You'll practice on a plain bowl of rice or noodles (or toast) so you can taste each addition in isolation. No recipe roulette — just three ingredients and a spoon.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "1 cup plain cooked rice, pasta, or buttered toast",
          "Salt (kosher or table — pick one and stick with it)",
          "Acid: lemon wedge or 1 tbsp vinegar (rice, white wine, or apple cider)",
          "Fat: 1 tbsp butter or olive oil",
          "3 small bowls or one plate divided mentally",
          "Spoon for tasting"
        ],
        ingredientsNote: "Bland base on purpose — you're learning the controls, not making a fancy dish."
      },
      {
        heading: "Do this now — step by step",
        walkthrough: [
          {
            title: "Taste the blank canvas",
            text: "Eat a spoonful plain. Notice: flat, starchy, nothing happening. Say it out loud: \"Needs something.\"",
            watch: "If it already tastes good, your base was seasoned — grab a blander batch or unsalted rice."
          },
          {
            title: "Add salt only",
            text: "Pinch of salt, toss, taste. Repeat in tiny amounts until food tastes like itself, just louder — not salty yet.",
            watch: "Salt should make you want another bite, not reach for water."
          },
          {
            title: "Add acid only (fresh portion)",
            text: "New spoonful: salt to almost-right, then 3–5 drops lemon or vinegar. Taste. Should feel brighter, not sour.",
            watch: "Acid lifts — it doesn't replace salt. You need both."
          },
          {
            title: "Add fat only (fresh portion)",
            text: "Salt + acid on a third spoonful, then a little butter or olive oil. Taste. Should feel round, not greasy.",
            watch: "Fat carries flavor and softens harsh edges — especially after acid."
          },
          {
            title: "Combine on the full bowl",
            text: "Salt the whole bowl in layers. Taste. Acid in small splashes. Taste. Fat at the end. Taste again.",
            watch: "Stop when it tastes complete — not when the recipe amount is used up."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>You can name which corner was missing on the bland spoonful</li>
          <li>You added each element in small amounts with tasting between</li>
          <li>The final bowl tastes balanced — not sharp, not greasy, not salty</li>
          <li>You'd apply the same loop to soup, stir-fry, or roasted veg tonight</li>
        </ul>
        <p>Too far on one corner? CookTriage has paths: too salty, too sour, greasy mouthfeel.</p>`
      },
      {
        heading: "Checklist: save this for next time",
        interactive: true,
        checklist: [
          "Taste before seasoning — know the starting point",
          "Salt in pinches until food wakes up",
          "Acid in drops until it brightens, not puckers",
          "Fat at the end until it feels round",
          "Taste after every single addition"
        ]
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p><strong>Salt</strong> ions interact with taste receptors and suppress bitterness — food reads as more flavorful overall, not just saltier.</p>
        <p><strong>Acid</strong> (low pH) balances richness and salt perception — why lemon on fish and vinegar on greens work. Too much and you get sour; just enough and the dish tastes awake.</p>
        <p><strong>Fat</strong> dissolves aroma compounds and coats the tongue — volatile flavors hit harder. It's also a texture fix: olive oil on dry pasta, butter on flat vegetables.</p>
        <p>Seasoning in layers works because each addition changes how the next tastes. That's why dump-and-stir fails — your brain can't track a three-corner triangle in one pour.</p>`
      }
    ]
  },
  {
    id: "eggs-at-home",
    icon: "🍳",
    title: "Eggs without rubber",
    subtitle: "One pan, two styles — learn when to go low vs when to go hot",
    readTime: "14 min",
    tagline: "Eggs punish the wrong heat. You'll cook scrambled and fried back-to-back to feel the difference.",
    relatedTriage: [
      { catId: "eggs", symptomId: "rubbery", label: "Rubbery eggs" },
      { catId: "eggs", symptomId: "scramble-watery", label: "Watery scramble" },
      { catId: "eggs", symptomId: "browned", label: "Brown crispy bits" }
    ],
    sections: [
      {
        heading: "What this is (plain English)",
        body: `<p>Eggs are the fastest way to ruin breakfast with the wrong heat. <strong>Scrambled</strong> wants low and slow. <strong>Fried</strong> wants a hot pan and patience before flipping. Same ingredient, opposite rules.</p>
        <p>You'll cook both in one session — mise en place first, because fried eggs don't wait while you find a spatula.</p>`
      },
      {
        heading: "What you need",
        ingredients: [
          "4 eggs",
          "2 tbsp butter divided",
          "1 tbsp milk or cream (optional, for scramble only)",
          "Salt, pepper",
          "Nonstick or well-seasoned skillet",
          "Silicone spatula",
          "2 small bowls"
        ],
        ingredientsNote: "Crack eggs into bowls before heat — fishing shell mid-cook is how scrambles turn rubber."
      },
      {
        heading: "Do this now — step by step",
        walkthrough: [
          {
            title: "Mise first",
            text: "Crack 2 eggs into a bowl for scramble, 2 for fry. Butter measured. Spatula out. Plate waiting.",
            watch: "Fried egg yolk breaks if you fumble tools — everything at hand."
          },
          {
            title: "Scrambled — low heat",
            text: "Pan on low. Half the butter melts. Whisk eggs with pinch salt + tiny splash milk. Pour in. Stir slowly with spatula, pushing curds. Off heat when 80% set — still glossy.",
            watch: "No brown on scrambled. If browning, heat too high."
          },
          {
            title: "Rest scramble, wipe pan",
            text: "Scramble on plate — carryover finishes. Wipe pan or quick rinse if brown flecks. Dry pan.",
            watch: "Scramble waits; fried egg needs clean fat."
          },
          {
            title: "Fried — medium-high heat",
            text: "Remaining butter, pan medium-high until foaming subsides. Slide egg in gently. Don't touch 2–3 min. White sets, edges crisp slightly. Optional flip 30 sec for over-easy.",
            watch: "If white spreads like water, egg was old or pan wasn't hot enough."
          },
          {
            title: "Compare and taste",
            text: "Eat scramble first — soft, creamy. Then fried — set white, runny or set yolk. Same eggs, different heat strategy.",
            watch: "Rubbery scramble = too hot or too long. Raw white on fried = flipped too soon."
          }
        ]
      },
      {
        heading: "You're done when…",
        body: `<ul>
          <li>Scramble is soft, no brown crust, slightly moist</li>
          <li>Fried white is set with golden edges, yolk how you like it</li>
          <li>You prepped before heat for both</li>
          <li>You know which mistake causes rubber (high heat on scramble)</li>
        </ul>`
      },
      {
        heading: "Checklist: save this for next time",
        interactive: true,
        checklist: [
          "Eggs cracked in bowls before pan goes on",
          "Scramble: low heat, slow stir, off heat while glossy",
          "Fried: hotter pan, don't move until white sets",
          "Wipe pan between styles if needed",
          "Pull scramble early — plate carryover cooks the rest"
        ]
      },
      {
        heading: "The science behind it",
        science: true,
        body: `<p>Egg white proteins (albumin) denature and tighten with heat. <strong>Low heat</strong> lets curds form gently — creamy scramble. <strong>High heat</strong> tightens proteins fast — rubber or tough whites.</p>
        <p><strong>Carryover cooking</strong> matters hugely for eggs because they're thin — residual heat in the pan finishes them after you pull. Scramble off heat at 80% set; yolk coasts to perfect if fried egg rests 1 min.</p>
        <p>Milk in scramble adds water and fat — small amount helps tenderness; too much + high heat = weeping water on the plate. Fat (butter) coats proteins and slows tightening — why diner scrambles use plenty of butter.</p>`
      }
    ]
  }
];