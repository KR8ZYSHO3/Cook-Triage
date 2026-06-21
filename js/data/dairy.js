const CATEGORY_DAIRY = {
  id: "dairy",
  icon: "🧀",
  title: "Dairy & cheese",
  description: "Won't melt, grainy, curdled, or greasy cheese",
  hint: "Dairy is heat-sensitive — low and slow, add late, temper before boiling.",
  symptoms: [
    {
      id: "cheese-wont-melt",
      label: "Cheese won't melt / stays clumpy",
      causes: [
        {
          title: "Aged or low-moisture cheese + too high heat",
          likelihood: "most-likely",
          explanation: "Parmesan, pecorino, and pre-shredded cheese with anti-caking agents resist smooth melting.",
          fixes: [
            "Grate finer — surface area melts faster.",
            "Remove from heat, stir cheese in off heat — residual heat melts gently.",
            "Add splash of milk or white wine to loosen.",
            "Use sodium citrate pinch (modernist pantry) for ultra-smooth melt.",
            "Swap to younger cheese (mozzarella, fontina, cheddar) for meltability."
          ],
          tip: "Pre-shredded bag cheese has cellulose — grate your own for sauces."
        },
        {
          title: "Added cheese to boiling sauce",
          likelihood: "common",
          explanation: "Heat seized proteins into rubbery clumps before they could emulsify.",
          fixes: [
            "Pull off heat. Whisk in cheese in handfuls.",
            "Blend smooth with immersion blender.",
            "Make bechamel first, then melt cheese into warm (not boiling) base."
          ],
          tip: "Mac sauce: make roux → milk → off heat → cheese. Never reverse."
        }
      ]
    },
    {
      id: "grainy-cheese-sauce",
      label: "Mac & cheese / fondue grainy or oily",
      causes: [
        {
          title: "Overheated cheese — fat leaked out",
          likelihood: "most-likely",
          explanation: "Cheese emulsion broke; you see greasy puddle and sandy texture.",
          fixes: [
            "Add warm milk or beer, whisk vigorously off heat.",
            "Stir in lemon juice or white wine — acid helps rebind (counterintuitive but works).",
            "Blend with immersion blender 15 seconds.",
            "Start over with fresh cheese into cool bechamel if totally broken."
          ],
          tip: "Fondue: keep heat low, add acid (wine), don't let it bubble."
        }
      ]
    },
    {
      id: "curdled-cream",
      label: "Cream sauce curdled in the pan",
      causes: [
        {
          title: "Boiled after cream was added",
          likelihood: "most-likely",
          explanation: "Milk proteins coagulated above ~180°F / 82°C.",
          fixes: [
            "Remove from heat. Blend until smooth if flavor is OK.",
            "Strain if lumps persist, whisk strained liquid with fresh cold cream off heat.",
            "Mount with cold butter off heat for gloss without more dairy heat shock."
          ],
          tip: "Simmer cream gently — small bubbles at edges only."
        }
      ]
    },
    {
      id: "yogurt-split",
      label: "Yogurt or sour cream split in curry",
      causes: [
        {
          title: "Stirred cold yogurt into hot pot",
          likelihood: "most-likely",
          explanation: "Thermal shock curdles yogurt instantly.",
          fixes: [
            "Temper: whisk hot liquid into bowl of yogurt gradually, then stir tempered mix back in off heat.",
            "Stir in at the very end, heat through without boiling.",
            "Use full-fat yogurt — low-fat splits easier.",
            "Substitute coconut cream if already split — different direction but saves dinner."
          ],
          tip: "Always temper yogurt like you'd temper eggs."
        }
      ]
    }
  ]
};