const CATEGORY_SOUPS = {
  id: "soups",
  icon: "🍲",
  title: "Soups & stews",
  description: "Greasy, thin, curdled, foamy, or scorched pots",
  hint: "Soups forgive a lot — dilute, skim, transfer off burnt bottom, simmer and taste.",
  symptoms: [
    {
      id: "too-greasy",
      label: "Oil slick on top / feels greasy",
      causes: [
        {
          title: "Fat rendered but never skimmed or emulsified",
          likelihood: "most-likely",
          explanation: "Meat stews, chili, and long simmers release fat that floats if you don't deal with it.",
          fixes: [
            "Skim now: drag paper towel or ladle across surface to lift oil.",
            "Chill trick if you have time: refrigerate until fat solidifies, scrape off, reheat.",
            "Stir in a spoon of tomato paste or mustard — emulsifies some surface fat back in.",
            "Blot each bowl with bread crust at serve — guests won't know.",
            "Add acid (vinegar, lemon) — cuts greasy mouthfeel even if oil remains."
          ],
          tip: "Skim during the first 20 minutes of simmer — most fat releases early.",
          ifNotFixed: "Ladle stew from the top, leave the oil pool at the bottom of the pot."
        },
        {
          title: "Added cream or coconut milk too hot",
          likelihood: "common",
          explanation: "Fat broke out of dairy when boiled.",
          fixes: [
            "Remove from heat. Immersion blend 10 seconds to re-emulsify.",
            "Whisk cold cream in off heat — never boil after adding.",
            "Stir in starch slurry off heat, warm gently without bubbling."
          ],
          tip: "Finish creamy soups off heat — heat through, don't hard boil."
        }
      ]
    },
    {
      id: "too-thin-soup",
      label: "Watery — no body",
      causes: [
        {
          title: "Not reduced or enough gelatin/starch",
          likelihood: "most-likely",
          explanation: "Broth-forward soups need reduction, puree, or starch to feel like a meal.",
          fixes: [
            "Simmer uncovered 15–30 min to reduce.",
            "Blend a cup of solids + liquid, stir back in.",
            "Mash some beans/potatoes against the pot side.",
            "Cornstarch or flour slurry: 1 tsp starch + 1 tbsp cold water per cup of soup.",
            "Stir in cooked rice, orzo, or barley — instant body."
          ],
          tip: "Save pasta water — loosens AND thickens slightly."
        }
      ]
    },
    {
      id: "curdled-soup",
      label: "Curdled / grainy / cottage-cheese bits",
      causes: [
        {
          title: "Dairy or egg added to boiling liquid",
          likelihood: "most-likely",
          explanation: "Proteins seized from too much heat or acid hit hot cream.",
          fixes: [
            "Pull off heat immediately — stop the damage.",
            "Immersion blend smooth if taste isn't burnt.",
            "Strain through fine mesh, return liquid to pot, add fresh cream off heat.",
            "If egg-based (avgolemono): whisk fresh egg + cold broth, temper slowly, never boil."
          ],
          tip: "Temper dairy: warm cream separately, stir into soup off heat.",
          ifNotFixed: "Serve strained broth, discard curds — still edible."
        }
      ]
    },
    {
      id: "scorched-stew",
      label: "Smells scorched / burnt bottom worry",
      causes: [
        {
          title: "Thick stew sat on high heat without stirring bottom",
          likelihood: "most-likely",
          explanation: "The bottom layer carbonized while top looks fine.",
          fixes: [
            "STOP stirring from the bottom — you'll mix burnt flavor through everything.",
            "Transfer everything above the burn line to a new pot immediately.",
            "Taste: if acrid/smoky-bitter, discard — burnt doesn't cook out.",
            "If only faint: add acid, fresh aromatics, splash of wine — may mask light scorch.",
            "Lower heat, stir bottom every few minutes going forward."
          ],
          tip: "Heavy pot + low simmer + occasional bottom scrape prevents 90% of scorches.",
          ifNotFixed: "When in doubt, don't serve acrid stew — food safety and flavor both lose."
        }
      ]
    },
    {
      id: "foam-pot",
      label: "Weird foam / scum on top",
      causes: [
        {
          title: "Protein scum from bones or meat — normal but ugly",
          likelihood: "most-likely",
          explanation: "Impurity foam from boiling stock or beans — not dangerous, just unsightly.",
          fixes: [
            "Skim with spoon or ladle while simmering.",
            "Drop ice cube in — scum clumps for easier removal.",
            "For beans: rinse, soak, discard soak water, use fresh water.",
            "Add splash of vinegar to bone broth — helps scum rise for skimming."
          ],
          tip: "Start stock at a gentle simmer, not rolling boil — less scum."
        }
      ]
    },
    {
      id: "separated-stew",
      label: "Looks broken / watery layer separated",
      causes: [
        {
          title: "Emulsion broke under heat or acid shock",
          likelihood: "most-likely",
          explanation: "Fat and liquid divorced — common in tomato-cream or coconut curries.",
          fixes: [
            "Whisk vigorously off heat.",
            "Blend 1 cup stew smooth, stir back in.",
            "Whisk cold butter or cream in off heat one piece at a time.",
            "Add spoon of tomato paste or miso — emulsifiers."
          ],
          tip: "Add acid at the end, not during hard simmer with cream."
        }
      ]
    }
  ]
};