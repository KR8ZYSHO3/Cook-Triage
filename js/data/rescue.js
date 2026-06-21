const CATEGORY_RESCUE = {
  id: "rescue",
  icon: "🆘",
  title: "Emergency rescue",
  description: "Oversalted whole pot, dropped food, timing disasters",
  hint: "When everything feels wrong — isolate the damage, salvage what tastes OK, repurpose the rest.",
  symptoms: [
    {
      id: "whole-meal-wrong",
      label: "The whole dish tastes off — can't pinpoint it",
      causes: [
        {
          title: "Multiple small errors stacked",
          likelihood: "most-likely",
          explanation: "Slightly burnt aromatics + under-salted + overcooked protein = 'something's wrong' with no single fix.",
          fixes: [
            "Taste components separately if possible — isolate protein, sauce, starch.",
            "Reset flavor triangle: salt pinch → acid splash → fat finish. Taste between each.",
            "Fresh garnish changes perception: herbs, lemon zest, crunchy topping.",
            "Serve with contrasting side: bright salad, pickles, plain rice.",
            "If acrid/burnt undertone: transfer to new pot, leave bottom behind."
          ],
          tip: "When you can't name the problem, fix salt-acid-fat first before adding spices.",
          ifNotFixed: "Repurpose: soup → pasta sauce; dry meat → tacos with salsa; mushy veg → puree soup."
        },
        {
          title: "Stale spices or old oil in pantry",
          likelihood: "less-common",
          explanation: "Paprika, cumin, and nuts go flat or rancid — makes everything taste dusty or off.",
          fixes: [
            "Smell your spices and oil — rancid oil smells like crayon or cardboard.",
            "Boost with fresh garlic, ginger, or allium at the end.",
            "Add acid and umami to overpower flat spice: soy, fish sauce, parmesan.",
            "Replace suspect oil for next cook — can't fix rancid in the dish."
          ],
          tip: "Toast whole spices in dry pan 30 sec — revives some stale ground spice blends slightly."
        }
      ]
    },
    {
      id: "overshot-timing",
      label: "Guests arriving / everything's behind or early",
      causes: [
        {
          title: "Protein done too early",
          likelihood: "most-likely",
          explanation: "Meat rests and dries if held too long.",
          fixes: [
            "Wrap in foil + towel, rest in turned-off oven (warm not hot) max 30–45 min.",
            "Slice and hold in warm broth or jus — stays moist.",
            "If dried: sauce aggressively, serve as tacos or sandwich.",
            "Chicken: shred into warm salsa or BBQ sauce."
          ],
          tip: "Undercook slightly if early — carryover and reheat finishes safely."
        },
        {
          title: "Everything still raw and guests here",
          likelihood: "common",
          explanation: "Classic timing panic.",
          fixes: [
            "Serve apps/snacks, turn up one burner, park something in oven.",
            "Cut meat smaller — halves cook time.",
            "Microwave or boil starch while protein finishes — rice in 20 min.",
            "Honesty + drinks: 'Ten minutes out' while you plate something cold first.",
            "One-pot stretch: combine components into stew if separate parts failing."
          ],
          tip: "Pick one hero dish done right; simplify sides to salad + bread."
        }
      ]
    },
    {
      id: "dropped-or-contaminated",
      label: "Dropped on floor / unsure if safe",
      causes: [
        {
          title: "5-second rule doesn't apply to everything",
          likelihood: "most-likely",
          explanation: "Floor contact = bacteria. Hot food picks up less but risk remains.",
          fixes: [
            "Solid food on floor: discard — not worth food poisoning.",
            "If only edge touched clean counter: trim affected part if large piece.",
            "Raw meat on floor: always discard.",
            "If guests saw it: discard without debate — trust matters more than one breast."
          ],
          tip: "Keep backup frozen protein or pasta for exactly this scenario.",
          ifNotFixed: "When in doubt, throw it out — no triage fixes salmonella."
        }
      ]
    },
    {
      id: "too-much-chile",
      label: "Accidentally added way too much chile",
      causes: [
        {
          title: "Capsaicin concentrated — dish is inedible",
          likelihood: "most-likely",
          explanation: "One ghost pepper, tablespoon of cayenne, or reaper hot sauce changed the mission.",
          fixes: [
            "Do NOT add only water — dilute with full duplicate batch of unsalted base (double recipe).",
            "Dairy at serve: sour cream, yogurt, cheese on every bite.",
            "Sugar + acid: honey and lime — doesn't remove heat but rounds it.",
            "Serve tiny portions over huge rice mound.",
            "Extract whole chiles if still in pot — oils keep leaching."
          ],
          tip: "Add heat in micro amounts — you can always add, never subtract capsaicin.",
          ifNotFixed: "Freeze half as 'hot base' — use pea-sized amounts in future dishes."
        }
      ]
    },
    {
      id: "smoke-alarm",
      label: "Smoke alarm went off — house smells burnt",
      causes: [
        {
          title: "Oil past smoke point or food charred",
          likelihood: "most-likely",
          explanation: "Pan oil burned or food carbonized — acrid smell lingers.",
          fixes: [
            "Ventilate: fans, windows, oven hood on high.",
            "Discard charred food — carbon taste won't wash out.",
            "If food only lightly smoked: trim black, taste center — if acrid, toss.",
            "Wipe pan, fresh oil, lower heat, restart component if you have time.",
            "Open wine — psychological recovery counts."
          ],
          tip: "Match oil to heat: olive oil low, avocado/grapeseed higher.",
          ifNotFixed: "Order pizza. Seriously. Some nights the kitchen lost."
        }
      ]
    }
  ]
};