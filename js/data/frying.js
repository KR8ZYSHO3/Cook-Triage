const CATEGORY_FRYING = {
  id: "frying",
  icon: "🍟",
  title: "Frying & crisping",
  description: "Soggy, greasy, not browning, or splattering chaos",
  hint: "Crisp needs dry surface, right oil temp, and don't crowd the pan.",
  symptoms: [
    {
      id: "not-crispy",
      label: "Supposed to be crispy but it's soggy",
      variants: [
        {
          id: "fried-chicken",
          label: "Fried chicken / breaded meat",
          causes: [
            {
              title: "Oil temp too low or crowded pan",
              likelihood: "most-likely",
              explanation: "Steam builds instead of fry when heat drops or pieces touch.",
              fixes: [
                "Oil should be 350–375°F — water should sizzle aggressively on contact.",
                "Fry in batches with space between pieces.",
                "Dry meat thoroughly before breading — moisture is enemy #1.",
                "Double-dip breading (flour → egg → flour) for thicker crust that holds crunch.",
                "Rest on wire rack, not paper towels — steam softens bottom."
              ],
              tip: "If you don't have a thermometer: wooden spoon bubble test or single test piece first."
            }
          ]
        },
        {
          id: "roast-veg",
          label: "Roasted vegetables / fries in oven",
          causes: [
            {
              title: "Overcrowded pan or too much moisture",
              likelihood: "most-likely",
              explanation: "Vegetables steam each other instead of roasting.",
              fixes: [
                "Spread single layer with air gaps — use second sheet pan if needed.",
                "Pat vegetables bone dry after washing.",
                "Toss with enough oil to coat — not swimming, not bare.",
                "Oven 425°F+ for roast veg; flip halfway.",
                "Preheat sheet pan before adding veg — instant sear on contact."
              ],
              tip: "Crowding is the #1 roast vegetable sin."
            }
          ]
        }
      ],
      causes: [
        {
          title: "Generic: wet surface or low heat",
          likelihood: "most-likely",
          explanation: "Crisp needs water to evaporate fast — wet food or cool oil fails that.",
          fixes: [
            "Pat food dry with towels.",
            "Heat oil until shimmering or thermometer reads 350°F.",
            "Don't cover while cooling — traps steam.",
            "Re-crisp in 400°F oven or air fryer 3–5 min before serving."
          ],
          tip: "Pick the branch above that matches what you're making for targeted fixes."
        }
      ]
    },
    {
      id: "too-greasy-fried",
      label: "Greasy / oil-soaked",
      causes: [
        {
          title: "Oil temp too low during frying",
          likelihood: "most-likely",
          explanation: "Food sits in oil too long absorbing fat instead of forming quick crust.",
          fixes: [
            "Raise oil temp before next batch — wait for recovery between batches.",
            "Drain on wire rack 2–3 minutes.",
            "Blot lightly with paper towel at serve — don't crush crust.",
            "Bread with cornstarch in mix — absorbs less oil than flour-only."
          ],
          tip: "Oil temp drops 30–50°F when you add food — pause between batches."
        }
      ]
    },
    {
      id: "splatter",
      label: "Violent splatter / oil jumping",
      causes: [
        {
          title: "Water on food or in wet marinade",
          likelihood: "most-likely",
          explanation: "Water hits hot oil and explodes into steam.",
          fixes: [
            "Dry food completely — even 10 seconds extra pat-down matters.",
            "Shake off marinade; dredge in flour to absorb surface moisture.",
            "Use deeper pot — oil only 1/3 full max.",
            "Lower heat slightly if splatter is extreme — temp may be too high for wet food.",
            "Add food away from you, gently."
          ],
          tip: "Never fry ice-cold wet food straight from marinade."
        }
      ]
    },
    {
      id: "not-browning",
      label: "Pale — won't brown",
      causes: [
        {
          title: "Pan not hot enough or too much food",
          likelihood: "most-likely",
          explanation: "Maillard reaction needs 300°F+ surface — crowded cool pan stalls browning.",
          fixes: [
            "Wait until oil shimmers or pan smokes faintly before adding food.",
            "Cook in batches.",
            "Don't move food for 2–3 min — let crust form.",
            "Add pinch of sugar or honey to marinade — promotes browning (watch burn).",
            "Use cast iron or heavy pan — thin pans lose heat."
          ],
          tip: "If it doesn't release with gentle nudge, it's not ready to flip."
        }
      ]
    },
    {
      id: "burnt-breading",
      label: "Breading burnt before inside cooks",
      causes: [
        {
          title: "Heat too high or sugar in rub/marinade",
          likelihood: "most-likely",
          explanation: "Exterior chars while center stays raw — common with BBQ rubs.",
          fixes: [
            "Lower heat, finish in 350°F oven if thick piece.",
            "Cover pan briefly to steam-cook center, uncover to re-crisp.",
            "Scrape burnt breading off, finish cooking, sauce over ugly side.",
            "Next time: move sugary rubs to last 5 min only."
          ],
          tip: "Finish chicken in oven after quick pan sear — best of both worlds."
        }
      ]
    }
  ]
};