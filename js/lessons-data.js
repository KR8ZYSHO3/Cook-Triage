const LESSONS_DATA = [
  {
    id: "mise-en-place",
    icon: "📋",
    title: "Mise en place",
    subtitle: "Everything in its place — the habit that changed everyday cooking",
    readTime: "8 min",
    tagline: "Prep is not chef theater. It's troubleshooting before anything goes wrong.",
    sections: [
      {
        heading: "What it actually means at home",
        body: `<p><strong>Mise en place</strong> (mees ahn plahs) literally means "everything in its place." In culinary school they make it look like monk-like precision. At home it means something simpler:</p>
        <p><strong>Before heat touches the pan, you already know what happens next.</strong></p>
        <p>That's it. You're not racing the clock while garlic burns because you were still chopping onions. You read the recipe like a procedure, pull what you need, prep in the order things hit the pan — and <em>then</em> you cook.</p>`
      },
      {
        heading: "Why it felt like a cheat code",
        body: `<p>Most kitchen disasters aren't mystery failures — they're <strong>timing failures</strong>. Mise en place fixes timing before it breaks:</p>
        <ul>
          <li><strong>Less panic</strong> — your hands know what's next</li>
          <li><strong>Less burnt aromatics</strong> — garlic waits in a bowl, not on the cutting board</li>
          <li><strong>Better seasoning</strong> — you taste because you're not juggling six tasks</li>
          <li><strong>Actual troubleshooting</strong> — when something goes wrong, you have brain space to fix it</li>
        </ul>
        <p>Culinary school dropout or not — this one idea took cooking from survival mode to something you can repeat on a Tuesday night.</p>`
      },
      {
        heading: "The 10-minute home version",
        body: `<p>You don't need 40 bowls. You need a system:</p>`
      },
      {
        heading: "Checklist: before you turn on the stove",
        checklist: [
          "Read the full recipe once — note when things get added and how long each step takes",
          "Pull every ingredient and tool onto the counter (if it's not there, you find out now)",
          "Prep wet and dry separately — pat meat dry, drain tofu, measure spices",
          "Cut in order of cook time: onions first if they sweat 10 min; herbs last",
          "Put sauces and liquids in measuring cups — no fumbling bottles mid-sear",
          "Set a garbage bowl and a clean towel — messy board = slow board",
          "Salt, pepper, acid, and fat within arm's reach for final adjustment",
          "Ask: what's the one step I'll forget? (Wine? Butter finish? Rest meat?) — put a sticky note on the stove"
        ]
      },
      {
        heading: "Mise en place + CookTriage",
        body: `<p>Prep <em>is</em> triage upstream. Burnt garlic? Often no mise. Split sauce? Often added dairy while scrambling something else. Dry chicken? Often no thermometer ready because you were still trimming.</p>
        <p>When a dish fails, ask: <strong>would prep have prevented this?</strong> If yes, update your checklist for that dish — that's how you build personal recipes that actually work.</p>`
      }
    ]
  },
  {
    id: "cooking-methods",
    icon: "🔥",
    title: "Cooking methods",
    subtitle: "Know the method, know what \"done\" looks like — and what went wrong",
    readTime: "10 min",
    tagline: "Recipes are examples. Methods are the rules.",
    sections: [
      {
        heading: "The unlock",
        body: `<p>Once you name the <strong>method</strong> you're using, cooking stops being guesswork. You know what heat does, what texture you're chasing, and which CookTriage path to open when it fails.</p>`
      },
      {
        heading: "Dry heat — browning is the point",
        body: `<p><strong>Sauté, sear, roast, bake, broil, stir-fry</strong></p>
        <p>Goal: evaporate surface moisture, trigger Maillard browning (that savory crust), cook through with hot air or contact.</p>
        <ul>
          <li><strong>When to use:</strong> vegetables you want caramelized, meat with a crust, anything that should taste "roasty"</li>
          <li><strong>Done looks like:</strong> golden to deep brown exterior; interior hits safe temp (use a thermometer on meat)</li>
          <li><strong>Common fails:</strong> crowded pan (steams instead of browns), wet food, heat too high (burnt outside, raw inside)</li>
        </ul>`
      },
      {
        heading: "Moist heat — gentle and forgiving",
        body: `<p><strong>Boil, simmer, poach, steam, braise (wet stage)</strong></p>
        <p>Goal: cook with water or steam — even, gentle, hard to burn if you pay attention.</p>
        <ul>
          <li><strong>When to use:</strong> tough cuts (braise), delicate fish (poach/steam), grains, soups, blanching veg</li>
          <li><strong>Done looks like:</strong> tender bite, not mush; fish flakes; liquid reduced to intended thickness</li>
          <li><strong>Common fails:</strong> rolling boil when simmer asked (mushy veg), lid off too long (reduced to nothing)</li>
        </ul>`
      },
      {
        heading: "Combination — restaurant tricks at home",
        body: `<p><strong>Sear then braise, roast then glaze, stir-fry with splash of stock</strong></p>
        <p>Goal: crust + tenderness, or color + sauce in one pan.</p>
        <ul>
          <li><strong>Pattern:</strong> dry heat for color → add liquid → moist heat until done → reduce or finish with fat/acid</li>
          <li><strong>Example:</strong> brown chicken thighs → wine + stock → simmer covered → reduce sauce → butter finish</li>
          <li><strong>Common fails:</strong> skipping the sear (flat flavor), sauce never reduced (watery)</li>
        </ul>`
      },
      {
        heading: "Fat as the medium",
        body: `<p><strong>Deep fry, shallow fry, confit-style low fry</strong></p>
        <p>Goal: crisp shell or rich texture; fat carries flavor and heat fast.</p>
        <ul>
          <li><strong>Key rule:</strong> dry surface + right oil temp (350°F zone for most frying)</li>
          <li><strong>Common fails:</strong> soggy (oil too cool), greasy (oil too cool or crowded), splatter (wet food)</li>
        </ul>`
      },
      {
        heading: "Pick the method first",
        body: `<p>Before you follow a recipe, ask: <strong>which method is this really?</strong> That tells you what to watch, when to stir, and when to leave it alone. Pair that with mise en place and you're cooking from principles — not hoping the recipe author guessed your stove right.</p>`
      }
    ]
  },
  {
    id: "french-sauces",
    icon: "🥄",
    title: "French sauces made easy",
    subtitle: "Mother sauces without the fear — formulas you can actually use tonight",
    readTime: "14 min",
    tagline: "Classical French isn't about fancy. It's about knowing three moves.",
    sections: [
      {
        heading: "Forget what culinary school did to you",
        body: `<p>French sauce lore sounds intimidating: mother sauces, daughter sauces, roux ratios, clarifying butter. Most home cooks need <strong>three ideas</strong>, not a textbook:</p>
        <ol>
          <li><strong>Pan sauce</strong> — fond + liquid + finish (your weeknight MVP)</li>
          <li><strong>Roux sauces</strong> — fat + flour + liquid (creamy soups, mac, gravies)</li>
          <li><strong>Emulsions</strong> — fat + water held together by whisking or blender (hollandaise, vinaigrette)</li>
        </ol>
        <p>Everything else is a variation. Seriously.</p>`
      },
      {
        heading: "The mother sauce secret (home cook translation)",
        body: `<p>Escoffier's "mothers" — béchamel, velouté, espagnole, hollandaise, tomato — are just <strong>templates</strong>:</p>
        <ul>
          <li><strong>Béchamel:</strong> roux + milk → Mornay adds cheese, you add nutmeg</li>
          <li><strong>Velouté:</strong> roux + light stock → mushroom sauce adds reduction</li>
          <li><strong>Espagnole:</strong> brown stock + brown roux → home version is pan gravy</li>
          <li><strong>Hollandaise:</strong> butter emulsified into yolk + acid → blender method below</li>
          <li><strong>Tomato:</strong> reduced tomato + aromatics → you already make this as "pasta sauce"</li>
        </ul>
        <p>You're not failing French cuisine if you make a pan sauce instead of espagnole. You're making the <em>useful</em> version.</p>`
      },
      {
        heading: "Pan sauce — learn this one first",
        body: `<p><strong>The 5-minute restaurant move in one pan:</strong></p>
        <ol>
          <li>Cook protein or veg — leave the brown bits (fond) in the pan. Pour off excess fat if there's a pool.</li>
          <li><strong>Deglaze:</strong> medium-high heat, splash wine, stock, or even water — scrape fond with wooden spoon.</li>
          <li><strong>Reduce:</strong> simmer until it coats the back of a spoon (thinner than you think — it thickens as it cools).</li>
          <li><strong>Finish off heat:</strong> cold butter whisked in, or cream, or mustard — season with salt, pepper, lemon.</li>
        </ol>
        <p>Variations: shallots in step 2, herbs at finish, capers for brightness, soy + butter for fusion. Same skeleton every time.</p>
        <p><strong>Split or greasy?</strong> → Open CookTriage → Sauces → pick your symptom.</p>`
      },
      {
        heading: "Roux — the thickener that doesn't lump (if you're patient)",
        body: `<p><strong>Equal parts fat + flour, cooked, then liquid added slowly.</strong></p>
        <ul>
          <li><strong>White roux</strong> (cooked 1–2 min): béchamel, cheese sauce, chowder base</li>
          <li><strong>Blond roux</strong> (3–5 min): velouté-style, lighter gravies</li>
          <li><strong>Brown roux</strong> (8+ min, stir): deeper gravy — nutty, less thickening power per spoon</li>
        </ul>
        <p><strong>Home formula:</strong> 2 tbsp butter + 2 tbsp flour in pan → whisk 1 cup liquid (milk or stock) in streams → simmer until thick → season.</p>
        <p>Grainy? Flour hit boiling liquid without roux first, or you didn't whisk enough. Fix in CookTriage → Sauces → grainy.</p>`
      },
      {
        heading: "Hollandaise without fear (blender method)",
        body: `<p>Classic double-boiler hollandaise punishes you for looking away. Blender version forgives:</p>
        <ol>
          <li>Blend 3 egg yolks + 1 tbsp lemon juice + pinch salt 10 seconds</li>
          <li>Melt 1 stick butter until hot and foaming (clarified-ish is fine, not required)</li>
          <li>With blender on <strong>low</strong>, pour butter in thin stream — sauce thickens in 30 seconds</li>
          <li>Taste. Lemon, salt, cayenne if you want</li>
        </ol>
        <p>Keep warm, not hot. Broken? Cool shock + blend again, or new yolk + drip broken sauce in. Eggs Benedict night: saved.</p>`
      },
      {
        heading: "Reduction — sauce by concentration",
        body: `<p><strong>Simmer until flavor intensifies.</strong> Wine, balsamic, cream, stock — same physics.</p>
        <ul>
          <li>Wide pan = faster reduction (more surface area)</li>
          <li>Taste as you go — reduces = saltier and sweeter</li>
          <li>Finish with cold butter for gloss (monté)</li>
        </ul>
        <p>Too salty after reducing? You concentrated the salt too — dilute with unsalted stock (CookTriage → flavor → too salty).</p>`
      },
      {
        heading: "The French finish (what makes it taste restaurant-level)",
        body: `<p>Three finishes that elevate any sauce — classical technique, zero snobbery:</p>
        <ul>
          <li><strong>Monter au beurre:</strong> whisk cold butter off heat — gloss + body</li>
          <li><strong>Liaison:</strong> cream or egg yolk tempered in (never boil after)</li>
          <li><strong>Acid at the end:</strong> lemon or vinegar — wakes everything up</li>
        </ul>
        <p>Mise en place your sauce components before you sear the protein. Pan sauce happens in the 3 minutes while meat rests — if butter and lemon are already measured, you look like you went to school. You just went to CookTriage.</p>`
      },
      {
        heading: "Quick reference card",
        checklist: [
          "Pan sauce: fond → deglaze → reduce → butter off heat",
          "Roux sauce: equal butter + flour → whisk liquid slowly → simmer thick",
          "Emulsion: blender hollandaise or vinaigrette 3:1 oil to acid, drizzle while whisking",
          "Never boil cream or egg sauces after they're in",
          "Split sauce? Off heat, blend or cold shock — don't panic",
          "Taste at every stage — French sauce is seasoning in layers"
        ]
      }
    ]
  },
  {
    id: "rescue-mindset",
    icon: "🧠",
    title: "The rescue mindset",
    subtitle: "Symptom → cause → fix — how to think when dinner is going sideways",
    readTime: "6 min",
    tagline: "You don't need a new recipe. You need a diagnosis.",
    sections: [
      {
        heading: "Stop, don't panic-scrap",
        body: `<p>The instinct is to throw it out or start over. First: <strong>name the symptom.</strong> Too salty? Mushy? Split? Burnt smell but top looks OK? Each has a different fix path — and most don't require a full restart.</p>`
      },
      {
        heading: "The troubleshooting loop",
        body: `<ol>
          <li><strong>Symptom</strong> — what do you taste, see, or smell?</li>
          <li><strong>Cause</strong> — what step likely created this? (heat, timing, ingredient, method)</li>
          <li><strong>Fix</strong> — smallest intervention first (dilute, balance, transfer off burnt bottom, re-crisp)</li>
          <li><strong>Re-taste</strong> — did it work? If not, try next cause</li>
        </ol>
        <p>That's CookTriage in one loop. Culinary school teaches mother sauces; real kitchens teach <em>this</em>.</p>`
      },
      {
        heading: "When to actually abandon ship",
        body: `<p>Discard when: acrid burnt through the whole pot, raw meat cross-contamination, or fish that's turned. Repurpose when: dry meat (shred into sauce), mushy rice (fried rice tomorrow), broken sauce (strain and rebuild).</p>
        <p>Knowing the difference saves money and ego.</p>`
      }
    ]
  }
];