const CATEGORY_EGGS = {
  id: "eggs",
  icon: "🥚",
  title: "Egg problems",
  description: "Rubbery, browned, runny, watery scramble, broken yolk",
  hint: "Eggs punish heat — low and slow wins for most styles, fast and hot for others.",
  symptoms: [
    {
      id: "rubbery",
      label: "Eggs rubbery / tough",
      causes: [
        {
          title: "Heat too high or cooked too long",
          likelihood: "most-likely",
          explanation: "Egg proteins tighten aggressively above gentle heat — rubber is overcooked albumin.",
          fixes: [
            "This batch: chop into fried rice, sandwich, or salad — sauce and mix-ins soften perception.",
            "Next time: pull eggs when slightly wet — carryover finishes.",
            "Scrambled: low heat, constant slow stir, off heat while still glossy.",
            "Hard-boiled: ice bath immediately when timer ends.",
            "Poached: 3 min for runny yolk, not 5."
          ],
          tip: "Eggs are done when they still look slightly under — plate carryover does the rest.",
          ifNotFixed: "Rubbery hard-boiled: make egg salad with plenty of mayo and mustard — texture masked."
        },
        {
          title: "Added milk or water incorrectly to scramble",
          likelihood: "common",
          explanation: "Too much liquid + high heat = water steams out leaving dry curds. No liquid + high heat = rubber.",
          fixes: [
            "Use 1 tbsp milk or cream per 2 eggs max.",
            "Whisk until uniform, cook low and slow.",
            "Add butter off heat for silkiness.",
            "Constant stir with silicone spatula — push curds, don't chop.",
            "Remove from heat when 80% set."
          ],
          tip: "Creamy scramble = low heat + fat + patience. Not more time on burner."
        },
        {
          title: "Old eggs or overcooked hard-boil",
          likelihood: "less-common",
          explanation: "Older eggs boil fine but can have looser whites; 12+ min boil = green ring and rubber.",
          fixes: [
            "Ice bath stops cooking instantly.",
            "Peel under running water.",
            "Next time: boil 9–11 min large eggs, not 15.",
            "Steaming eggs 12 min is more forgiving than boiling.",
            "Use fresher eggs for soft boil; older for hard boil (peels easier)."
          ],
          tip: "Green-grey ring around yolk = overcooked, not rotten. Still edible."
        }
      ]
    },
    {
      id: "browned",
      label: "Eggs browned / crispy brown bits",
      causes: [
        {
          title: "Pan too hot or butter browned before eggs set",
          likelihood: "most-likely",
          explanation: "Brown eggs taste of browned butter or burnt milk solids — heat was too aggressive.",
          fixes: [
            "Brown bits taste bitter — scrape off or eat around if mild.",
            "Next time: medium-low heat, add eggs when butter stops foaming.",
            "Use neutral oil for high-heat fried eggs; butter only for low heat.",
            "Wipe pan, lower heat, finish remaining eggs fresh.",
            "Nonstick on medium, not high."
          ],
          tip: "Butter eggs want whisper heat — brown butter is for pasta, not scrambled eggs.",
          ifNotFixed: "If acrid burnt taste: discard those bits, don't scrape fond into eggs."
        },
        {
          title: "Left in pan after cooking",
          likelihood: "common",
          explanation: "Residual pan heat keeps cooking and browning eggs after you stopped paying attention.",
          fixes: [
            "Slide eggs to plate the instant they're set.",
            "Off heat 30 sec before they look done.",
            "Warm plate, not hot pan, for holding.",
            "For omelets: plate when center is still slightly wet."
          ],
          tip: "Eggs cook after the heat — the pan is still a burner even off."
        }
      ]
    },
    {
      id: "runny-when-shouldnt",
      label: "Runny when it shouldn't be",
      causes: [
        {
          title: "Undercooked — heat too low or removed too early",
          likelihood: "most-likely",
          explanation: "Scramble still wet, frittata center jiggles, French toast eggy — center didn't set.",
          fixes: [
            "Return to low heat, stir or cover until set.",
            "Frittata/omelet: finish under broiler 1–2 min or cover pan 2 min.",
            "Microwave 15-sec bursts for scramble emergency finish.",
            "Bake egg dishes to 160°F / 71°C internal if unsure.",
            "Cover fried eggs 1 min for over-easy to firm whites while yolk stays runny."
          ],
          tip: "Low heat undercooks slow; cover is the cheat code for tops that won't set.",
          ifNotFixed: "Wet scramble: drain in colander briefly (yes, really) or cook into omelet wrap."
        },
        {
          title: "Wrong egg size or extra whites added",
          likelihood: "common",
          explanation: "More volume = longer set time. Egg beaters or extra whites stay runny longer.",
          fixes: [
            "Cook longer on low — don't rush with high heat (makes rubber outside).",
            "Reduce batch size for even cooking.",
            "Stir more consistently for even heat distribution.",
            "Use lid for set-top dishes."
          ],
          tip: "Thicker egg mix needs lower heat and more time, not more flame."
        }
      ]
    },
    {
      id: "scramble-watery",
      label: "Scrambled eggs watery / weeping",
      causes: [
        {
          title: "Salted too early or overcooked then wept",
          likelihood: "most-likely",
          explanation: "Salt draws moisture from eggs if mixed and left. Overcooked curds squeeze water out as they tighten.",
          fixes: [
            "Drain excess water from pan with tilt — push eggs aside, soak with paper towel.",
            "Stir in pat of butter off heat — fat coats curds, reduces weeping.",
            "Salt eggs right before they hit pan, not during whisking 10 min earlier.",
            "Pull off heat while still slightly wet — overcooking causes weep.",
            "Add ½ tsp cornstarch per 3 eggs (restaurant trick) for stable creamy curds."
          ],
          tip: "Watery scramble = overcooked or pre-salted. Pull early, salt late.",
          ifNotFixed: "If pool of water in pan: drain it, don't stir it back in — that's expelled moisture, not undercooked."
        },
        {
          title: "Too much milk or water added",
          likelihood: "common",
          explanation: "Liquid that doesn't emulsify into curds cooks out as water on the plate.",
          fixes: [
            "Use 1 tbsp dairy per 2 eggs, not ¼ cup.",
            "Whisk in cream cheese or mascarpone off heat for creaminess without weep.",
            "Cook until just set — extra liquid needs evaporation time without overcooking.",
            "Butter beats water for fluff — fat, not volume."
          ],
          tip: "Gordon's 'don't add milk' rule exists because water weeps — use butter instead."
        },
        {
          title: "Tomatoes or vegetables added too early",
          likelihood: "less-common",
          explanation: "Watery veg (tomatoes, mushrooms, spinach) bleed into eggs.",
          fixes: [
            "Sauté vegetables until dry before adding beaten eggs.",
            "Salt veg separately and drain.",
            "Fold tomatoes in at the very end off heat.",
            "Use sun-dried tomatoes instead of fresh for scramble."
          ],
          tip: "Every watery veg needs dry sauté before eggs join the pan."
        }
      ]
    },
    {
      id: "broken-yolk",
      label: "Fried egg yolk broke / spread",
      causes: [
        {
          title: "Dropped from too high or cold eggs in hot pan",
          likelihood: "most-likely",
          explanation: "Impact cracks yolk; cold egg hitting hot surface can rupture delicate membrane.",
          fixes: [
            "Crack into small bowl first, slide gently into pan.",
            "Lower heat — violent bubbling tears whites and yolks.",
            "For broken yolk: scramble in pan or make egg in hole of toast.",
            "Cover pan 1 min — set whites even if yolk broke.",
            "Use fresh eggs — older yolk membranes weaken."
          ],
          tip: "Crack into a cup, not the pan — the cup catches broken yolks before they hit grease.",
          ifNotFixed: "Broken yolk fried egg = diner-style 'scrambled fried' — fold and serve on sandwich."
        },
        {
          title: "Flipped too aggressively",
          likelihood: "common",
          explanation: "Over-easy flip with spatula speared yolk or pan shake cracked it.",
          fixes: [
            "Practice flip with confidence — hesitant flip breaks yolks.",
            "Use lid and steam instead of flip for sunny-side up with set whites.",
            "Add splash of water, cover 1 min — no flip needed.",
            "Spatula slide-under should be one smooth motion."
          ],
          tip: "Steam-set tops beat flipping for sunny-side up — no broken yolk risk."
        },
        {
          title: "Pan not enough oil or sticking",
          likelihood: "less-common",
          explanation: "Egg sticks, yolk ruptures when you force spatula under.",
          fixes: [
            "Enough oil to coat — about 1 tbsp.",
            "Nonstick or well-seasoned cast iron.",
            "Wait until whites set before attempting move.",
            "Slide under gently with thin spatula."
          ],
          tip: "If whites stick, yolk breaks when you pry — proper oil and patience."
        }
      ]
    }
  ]
};