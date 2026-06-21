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
    },
    {
      id: "butter-burned",
      label: "Butter burned / brown specks in pan",
      causes: [
        {
          title: "Heat too high for butter alone",
          likelihood: "most-likely",
          explanation: "Milk solids in butter burn around 350°F — faster than oil. Brown specks = bitter fond.",
          fixes: [
            "If specks are light brown: strain butter through fine mesh, wipe pan, start fresh fat.",
            "If acrid black: wipe pan completely, don't scrape bitter fond into food.",
            "Finish dish with fresh butter off heat instead of burnt pan butter.",
            "Next time: use ghee or oil for high-heat sear, add butter at the end.",
            "Clarified butter (milk solids removed) handles higher heat."
          ],
          tip: "Butter for flavor at the end, oil for heat at the start — best of both.",
          ifNotFixed: "Bitter throughout: transfer protein/veg to new pan, rebuild sauce without burnt fat."
        },
        {
          title: "Butter browned on purpose but went too far",
          likelihood: "common",
          explanation: "Beurre noisette (brown butter) goes from nutty to burnt in seconds.",
          fixes: [
            "Pour immediately into cool bowl to stop cooking — residual pan heat continues browning.",
            "If smells nutty and hazelnut-colored, you're good — use fast.",
            "If smells sharp and looks black, discard and start over.",
            "Add squeeze of lemon to nutty brown butter — buys seconds of forgiveness.",
            "Lower heat once foaming subsides — that's when solids start to brown."
          ],
          tip: "Brown butter: pull when it smells like toffee, not when it looks perfect — it keeps cooking."
        },
        {
          title: "Garlic or spices burned in butter",
          likelihood: "less-common",
          explanation: "Butter + minced garlic on high = instant charcoal flecks.",
          fixes: [
            "Pick out black bits with spoon.",
            "Add fresh garlic to new knob of butter off heat.",
            "Garlic chips: slice thicker, lower heat, watch constantly.",
            "Infuse oil with garlic first, then add butter for finish."
          ],
          tip: "Garlic in butter needs medium heat max — or add garlic after butter stops foaming and cools slightly."
        }
      ]
    }
  ]
};