const CATEGORY_BAKING = {
  id: "baking",
  icon: "🥖",
  title: "Baking mishaps",
  description: "Dense cake, sunken, spread cookies, bread not rising, soggy pie, peaked muffins",
  hint: "Baking is less forgiving than stovetop — but many failures are fixable on the next batch or on the plate.",
  symptoms: [
    {
      id: "dense-cake",
      label: "Dense / brick-like cake",
      causes: [
        {
          title: "Overmixed batter or dead leavening",
          likelihood: "most-likely",
          explanation: "Gluten overdeveloped from excessive mixing, or baking powder/soda lost potency.",
          fixes: [
            "This batch: toast slices, use as trifle base, bread pudding, or French toast — density hides in custard.",
            "Test leavening: baking powder in warm water should fizz vigorously; soda needs acid to fizz.",
            "Mix dry + wet until just combined — lumps are fine, streaks are fine.",
            "Fold with spatula, not whisk, for final combine.",
            "Check expiration on baking powder/soda before blaming technique."
          ],
          tip: "Check expiration on baking powder/soda before you blame yourself.",
          ifNotFixed: "Dense cake + simple syrup soak + whipped cream = trifle. Nobody says 'brick.'"
        },
        {
          title: "Too much flour or wrong measuring",
          likelihood: "common",
          explanation: "Scooped flour packs extra — cup can be 30% heavier than spoon-and-level.",
          fixes: [
            "Spoon flour into cup, level with knife — don't scoop from bag.",
            "Weigh flour: ~120g per cup all-purpose.",
            "If batter looked thick like dough, flour was the culprit.",
            "Add splash more liquid only if batter was clearly too stiff before baking."
          ],
          tip: "A kitchen scale ends the dense cake mystery — $20, instant upgrade."
        },
        {
          title: "Oven too cool or opened too early",
          likelihood: "less-common",
          explanation: "Low temp = slow set = collapse and dense texture from falling before structure set.",
          fixes: [
            "Verify oven with thermometer — bake at true 350°F.",
            "Don't open door first 75% of bake time.",
            "If underbaked inside: return at 325°F until skewer clean.",
            "Use center rack for even heat."
          ],
          tip: "Dense + gooey center = underbaked. Dense + dry = overmixed or dead leavening."
        }
      ]
    },
    {
      id: "sunken",
      label: "Cake sank in the middle",
      causes: [
        {
          title: "Underbaked or oven door opened too early",
          likelihood: "most-likely",
          explanation: "Structure wasn't set before center collapsed — cold air shock from opening door.",
          fixes: [
            "If still wet: return to 325°F oven until skewer comes clean in center.",
            "If baked but sunk: fill crater with fruit, whipped cream, lemon curd — rustic trifle style.",
            "Cut around sunken center, flip, or serve upside-down.",
            "Never open oven first 75% of bake time for cakes.",
            "Check doneness with skewer in center, not edge."
          ],
          tip: "Sunken + gooey = underbaked. Sunken + dry = over-leavened or over-creamed butter.",
          ifNotFixed: "Poke holes in sunken cake, soak with syrup, layer cream and fruit — tres leches direction."
        },
        {
          title: "Too much leavening or over-creamed butter",
          likelihood: "common",
          explanation: "Excess air from baking powder or over-beaten butter-sugar collapses when heat hits.",
          fixes: [
            "Measure leavening level — don't heap spoons.",
            "Cream butter-sugar until light, not fluffy meringue — 2–3 min max.",
            "Follow recipe leavening exactly — more isn't better.",
            "Tap pan on counter before baking — releases oversized air bubbles."
          ],
          tip: "Over-creamed butter looks like whipped cream — stop at pale and fluffy, not volume doubled."
        },
        {
          title: "Wrong pan size or batter too wet",
          likelihood: "less-common",
          explanation: "Too much batter in small pan = undercooked center. Too much liquid = no structure.",
          fixes: [
            "Use pan size recipe specifies — 9-inch vs 8-inch matters.",
            "Reduce liquid slightly if batter was visibly runny.",
            "Bake longer at lower temp for thick layers.",
            "Split batter across two pans if overflow risk."
          ],
          tip: "Batter should mound in pan, not pour like soup — unless it's a sheet or genoise."
        }
      ]
    },
    {
      id: "cookies-spread",
      label: "Cookies spread too thin / flat",
      causes: [
        {
          title: "Butter too warm or over-creamed",
          likelihood: "most-likely",
          explanation: "Warm butter melts fast in oven — cookies lake out before setting.",
          fixes: [
            "Chill dough 30–60 min before baking — mandatory fix.",
            "Use cool room-temp butter (should indent, not smear).",
            "Cream butter-sugar 1–2 min, not 5.",
            "Bake on parchment, not greased sheet — grease encourages spread.",
            "This batch: crumble thin cookies over ice cream — still delicious."
          ],
          tip: "Chill the dough. If you remember one cookie rule, remember chill.",
          ifNotFixed: "Scoop melted-flat cookies into bowl, mix with cream cheese — instant cookie dip."
        },
        {
          title: "Too much sugar or not enough flour",
          likelihood: "common",
          explanation: "Sugar liquefies in heat; low flour can't hold shape.",
          fixes: [
            "Add 2–4 tbsp flour to remaining dough before rebaking.",
            "Balance sugar types — brown sugar spreads more than white.",
            "Measure flour by weight or spoon-and-level.",
            "One extra tbsp flour often fixes spread without dryness."
          ],
          tip: "Brown sugar cookies spread more — that's why they're chewy. Plan for it with chill."
        },
        {
          title: "Hot baking sheet or oven too low",
          likelihood: "less-common",
          explanation: "Reusing hot sheet without cooling = instant butter melt. Low oven = slow set = spread.",
          fixes: [
            "Cool baking sheets between batches — run under cold water, dry.",
            "Bake at recipe temp — 350°F standard, not 325°F unless recipe says.",
            "Room-temp sheet, chilled dough.",
            "Silicone mat or parchment reduces spread slightly."
          ],
          tip: "Hot sheet + room-temp dough = puddle. Cool sheet or chill dough more."
        }
      ]
    },
    {
      id: "bread-not-rising",
      label: "Bread didn't rise / dense loaf",
      causes: [
        {
          title: "Dead or mis-measured yeast",
          likelihood: "most-likely",
          explanation: "Old yeast, water too hot (killed yeast), or salt mixed directly with yeast.",
          fixes: [
            "Proof yeast: dissolve in warm water (105–110°F) with pinch sugar — should foam in 5–10 min.",
            "If no foam: new yeast, restart.",
            "This batch: dense loaf makes great toast, croutons, bread pudding, or panzanella.",
            "Salt on opposite side of bowl from yeast during mixing.",
            "Check yeast expiration — refrigerate after opening."
          ],
          tip: "If proof doesn't foam, no amount of waiting saves the loaf — new yeast.",
          ifNotFixed: "Flat dense bread: slice thin, toast hard, call it crostini — crunch rescues everything."
        },
        {
          title: "Under-kneaded or under-proofed",
          likelihood: "common",
          explanation: "Gluten not developed = no structure to hold gas. Short rise = no volume.",
          fixes: [
            "Knead until smooth and elastic — windowpane test for yeast bread.",
            "First rise until doubled — may take 1–2 hours in cool kitchen.",
            "Second rise until dough springs back slowly when poked.",
            "Warm draft-free spot: turned-off oven with bowl of warm water.",
            "If under-proofed before bake: let rise longer — patience beats oven."
          ],
          tip: "Dough doubles in volume, not time — clock is a guide, eyes are truth."
        },
        {
          title: "Too much flour added while kneading",
          likelihood: "common",
          explanation: "Sticky dough panic leads to flour overload — dense, dry, won't rise.",
          fixes: [
            "Dough should be tacky, not bone dry — oil hands instead of adding flour.",
            "Wet dough rises better than dry brick.",
            "Scrape board, use bench scraper, minimal extra flour.",
            "If already baked dense: toast and serve with lots of butter."
          ],
          tip: "Sticky is correct for high-hydration bread — dry is the mistake."
        }
      ]
    },
    {
      id: "soggy-pie-bottom",
      label: "Pie has soggy bottom",
      causes: [
        {
          title: "Wet filling or filling added to unbaked shell",
          likelihood: "most-likely",
          explanation: "Juicy fruit, custard, or unblind-baked crust saturates bottom before it can set.",
          fixes: [
            "Blind bake bottom crust 10–15 min at 375°F before filling.",
            "Brush blind-baked crust with egg wash — seals against moisture.",
            "Dust fruit filling with 1–2 tbsp flour or tapioca to absorb juice.",
            "Bake on lower rack or preheated baking stone — bottom heat.",
            "This batch: scoop filling, re-bake bottom crust alone 10 min, reassemble and serve."
          ],
          tip: "Blind bake + egg wash seal = soggy bottom prevention 101.",
          ifNotFixed: "Serve in bowls — call it deconstructed pie. Topping and filling still taste great."
        },
        {
          title: "Oven not hot enough on bottom",
          likelihood: "common",
          explanation: "Bottom crust needs aggressive bottom heat; center rack only = soft base.",
          fixes: [
            "Preheat baking stone or sheet on lowest rack.",
            "Start pie on bottom rack 15 min, move to center to finish.",
            "Metal pie pan conducts better than glass or ceramic.",
            "Don't use dark filling on cold dough without par-bake."
          ],
          tip: "Glass pie dish looks pretty but soggy bottom risk is higher — metal for fruit pies."
        },
        {
          title: "Pie cooled in pan while hot — steam trapped",
          likelihood: "less-common",
          explanation: "Filling steam re-absorbs into bottom crust as it cools in closed pan.",
          fixes: [
            "Cool on wire rack — airflow under crust.",
            "Vent top crust well for steam escape.",
            "Don't cover pie while still warm.",
            "Re-crisp bottom: return to 375°F oven 10 min on baking stone."
          ],
          tip: "Wire rack cooling isn't optional for pie — steam needs somewhere to go."
        }
      ]
    },
    {
      id: "muffins-peaked",
      label: "Muffins peaked / pointy tops",
      causes: [
        {
          title: "Oven too hot or too much leavening",
          likelihood: "most-likely",
          explanation: "Fast rise sets peak before spreading — volcano muffins from excess baking powder or hot oven.",
          fixes: [
            "Peaked muffins taste fine — trim tops for presentation or embrace rustic.",
            "Lower oven 25°F next batch.",
            "Measure baking powder level — 1–2 tsp per cup flour typical.",
            "Mix batter until just combined — 10 strokes max.",
            "Fill cups only ⅔ full."
          ],
          tip: "Peaked ≠ failed — it's over-enthusiastic leavening. Flavor is usually fine.",
          ifNotFixed: "Slice off peaks, flip upside down, dust with sugar — 'flat-top bakery style.'"
        },
        {
          title: "Overmixed muffin batter",
          likelihood: "common",
          explanation: "Muffins are quick bread — gluten development = peaks and tunnels, not tenderness.",
          fixes: [
            "Stir wet into dry with fork until shaggy — lumps required.",
            "Stop when no dry flour streaks remain.",
            "Use oil not softened butter for tenderest muffins.",
            "Rest batter 10 min before baking — hydrates flour without mixing."
          ],
          tip: "Muffin batter should look lumpy and wrong — smooth batter = peaked tough muffins."
        },
        {
          title: "Uneven oven heat or wrong rack",
          likelihood: "less-common",
          explanation: "Top element browns peaks before center sets; hot spots cause irregular rise.",
          fixes: [
            "Bake center rack, not top.",
            "Rotate tin halfway.",
            "Use oven thermometer.",
            "Tent foil if tops brown before skewer clean."
          ],
          tip: "If only some muffins peak, it's oven hot spots — rotate the tin."
        }
      ]
    }
  ]
};