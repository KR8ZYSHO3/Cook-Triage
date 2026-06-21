const CATEGORY_SEAFOOD = {
  id: "seafood",
  icon: "🐟",
  title: "Seafood problems",
  description: "Fishy smell, rubbery texture, stuck to pan, shellfish issues",
  hint: "Seafood cooks fast and smells loud when something's wrong — diagnose early, act quickly.",
  symptoms: [
    {
      id: "fishy-smell",
      label: "Fish smells too fishy / off",
      causes: [
        {
          title: "Fish not fresh or improperly stored",
          likelihood: "most-likely",
          explanation: "Fresh fish smells like clean ocean or cucumber — sharp ammonia or sour fishiness means spoilage.",
          fixes: [
            "If smell is ammonia or rotten: do not eat — discard.",
            "If mildly fishy but fresh: rinse, pat bone-dry, rub with salt 1 min, rinse again.",
            "Soak 20 min in milk or buttermilk — binds compounds that cause fishiness.",
            "Cook immediately with high heat — raw fishiness worsens with time.",
            "Acid finish: lemon, vinegar, or tomato sauce masks mild fishiness in cooked fish."
          ],
          tip: "When in doubt, throw it out — fish spoilage isn't a flavor problem, it's a safety problem.",
          ifNotFixed: "Strong ammonia smell = not fixable. Mild fishiness in fresh fish = milk soak + acid + herbs."
        },
        {
          title: "Trim not removed or skin left on when inappropriate",
          likelihood: "common",
          explanation: "Dark bloodline and belly fat are fishiest parts — leaving them amplifies smell.",
          fixes: [
            "Trim dark red bloodline along the spine with sharp knife.",
            "Remove skin if pan-searing delicate white fish — skin can hold fishy oils.",
            "Scrape any dark flesh from tuna or swordfish steaks.",
            "Rinse cavity of whole fish thoroughly.",
            "Season aggressively with garlic, ginger, and acid."
          ],
          tip: "The bloodline is the fishiest line on the fillet — trim it every time."
        },
        {
          title: "Cooking method concentrates smell",
          likelihood: "less-common",
          explanation: "Overcooked fish, old pan residue, or reheated fish amplifies fishiness.",
          fixes: [
            "Don't overcook — fish smells stronger as it dries out.",
            "Ventilate kitchen — open window, run fan.",
            "Poach in court bouillon (wine, lemon, herbs) instead of dry sear.",
            "Serve immediately — fishy smell builds as it cools."
          ],
          tip: "Fish should be cooked to just opaque — every minute past that increases smell."
        }
      ]
    },
    {
      id: "rubbery",
      label: "Fish is rubbery / tough",
      causes: [
        {
          title: "Overcooked past opaque",
          likelihood: "most-likely",
          explanation: "Fish proteins tighten and expel moisture fast — rubbery texture means you went too long.",
          fixes: [
            "This batch: flake into fish cakes, chowder, or tacos with creamy sauce.",
            "Break into salad with mayo dressing — moisture restored on fork.",
            "Next time: pull when center is just opaque and flakes with gentle pressure.",
            "Use thermometer: 120–130°F / 49–54°C for most fish = silky.",
            "Carryover cooking continues off heat — pull early."
          ],
          tip: "Fish is done when it barely flakes — if it shatters, it's over.",
          ifNotFixed: "Flake rubbery fish into curry or stew — long simmer in liquid rehydrates somewhat."
        },
        {
          title: "Cooked from frozen or uneven thickness",
          likelihood: "common",
          explanation: "Outside overcooks while center thaws, or thin tail overcooks while thick loin cooks.",
          fixes: [
            "Thaw fully in fridge before cooking.",
            "Fold thin tail under fillet for even thickness.",
            "Score thick portions.",
            "Lower heat, cover briefly to steam center without scorching outside."
          ],
          tip: "Even thickness = even cook — fold the tail, it's a standard restaurant trick."
        },
        {
          title: "Wrong fish for the method",
          likelihood: "less-common",
          explanation: "Delicate sole or tilapia on high grill heat; tuna cooked to well-done.",
          fixes: [
            "Match method: delicate fish = gentle pan or poach; tuna/swordfish = high heat, rare center.",
            "Use fish basket or foil for fragile fillets on grill.",
            "Oil fish and grate well before high-heat methods."
          ],
          tip: "Tuna is beef rules — rare center. Cod is chicken rules — opaque throughout."
        }
      ]
    },
    {
      id: "stuck-pan",
      label: "Fish stuck to pan / fell apart",
      causes: [
        {
          title: "Flipped too early or pan not hot enough",
          likelihood: "most-likely",
          explanation: "Fish releases when sear is set — forcing it tears flesh. Cold pan = glue.",
          fixes: [
            "Wait — if stuck, give 30–60 more seconds on medium-high, then nudge gently.",
            "If tearing: lower heat, cover, steam-finish — presentation suffers, taste often fine.",
            "Deglaze with splash of wine or stock to loosen stuck bits.",
            "Next time: dry fish thoroughly, oil the fish not just pan, preheat until oil shimmers.",
            "Use fish spatula — thin edge slides under better."
          ],
          tip: "If it releases cleanly with a gentle nudge, you timed it right.",
          ifNotFixed: "Broken fish: flake in pan, toss with butter and herbs — call it 'fish scramble' over toast."
        },
        {
          title: "Pan not nonstick-ready or wrong oil temp",
          likelihood: "common",
          explanation: "Stainless without proper preheat, or wet fish dropped in lukewarm oil.",
          fixes: [
            "Heat pan empty until water droplet dances (stainless) or oil shimmers.",
            "Coat fish in light flour or rice flour for crust that releases easier.",
            "Enough oil to coat pan — fish is not dry-sear like steak.",
            "Don't move fish until crust forms — usually 3–4 min first side."
          ],
          tip: "Wet fish in cold pan = guaranteed stick. Pat dry until paper towel is clean."
        },
        {
          title: "Skin-side technique wrong",
          likelihood: "common",
          explanation: "Skin-on fish needs skin side down first, pressed flat, most of cook time on skin.",
          fixes: [
            "Score skin lightly — prevents curling and ensures contact.",
            "Press fillet flat first 30 sec with spatula.",
            "Cook 75% of time skin-side down.",
            "Flip only once when skin is crispy and releases."
          ],
          tip: "Crispy skin = patience on one side. Flip once."
        }
      ]
    },
    {
      id: "shellfish-not-opening",
      label: "Mussels / clams won't open",
      causes: [
        {
          title: "Dead before cooking or overcooked",
          likelihood: "most-likely",
          explanation: "Shells that stay clamped shut after 5–7 min cooking were dead before heat — discard them. Overcooked shells gape and dry out.",
          fixes: [
            "Discard any shell that doesn't open after 5–7 min of steaming — do not force open.",
            "Before cooking: tap open shells — if they close, alive. Open and don't close = dead, discard.",
            "Steam covered on medium 5–7 min — check early.",
            "Pull as they open — staggered opening means staggered removal.",
            "Serve opened ones; toss closed ones — no negotiation."
          ],
          tip: "Rule: if it doesn't open, it doesn't go on the plate. Ever.",
          ifNotFixed: "If most opened and few didn't — discard the closed ones, enjoy the rest. Never eat forced-open shells."
        },
        {
          title: "Not enough liquid or heat too low",
          likelihood: "common",
          explanation: "Shellfish steam open — dry pan or weak heat stalls the process.",
          fixes: [
            "Add ½ cup wine, stock, or water — enough steam, not a boil.",
            "Cover tightly — steam escapes = no opening.",
            "Medium-high heat until steam builds, then medium.",
            "Shake pot once to redistribute heat.",
            "Don't overcrowd — one layer max."
          ],
          tip: "Mussels need steam, not boil — wine + garlic + lid + 5 min."
        },
        {
          title: "Dirty or farm debris blocking hinge",
          likelihood: "less-common",
          explanation: "Beard not pulled, barnacles on hinge — prevents shell from flexing.",
          fixes: [
            "Scrub shells, debeard mussels (pull beard toward hinge).",
            "Discard cracked or broken shells before cooking.",
            "Soak in cold salted water 20 min so they purge sand.",
            "Cook anyway — if still closed after proper time, discard."
          ],
          tip: "Debeard before cooking — yanking after cooking tears the meat."
        }
      ]
    },
    {
      id: "shrimp-overcooked",
      label: "Shrimp rubbery / overcooked",
      causes: [
        {
          title: "Cooked too long — shrimp cook in minutes",
          likelihood: "most-likely",
          explanation: "Shrimp go from perfect to rubber in about 60 seconds. C-shaped and opaque = done. O-shaped = over.",
          fixes: [
            "Rubbery shrimp: chop into fried rice, pasta, or tacos — sauce and veg mask texture.",
            "Cool immediately in ice bath if just overcooked — stops cooking.",
            "Next time: pull when pink and C-shaped, not tight O.",
            "Add shrimp last 2–3 min of stir-fry or pasta sauce.",
            "Poach in simmering liquid 2–3 min, drain fast."
          ],
          tip: "Shrimp tell you when they're done — C shape good, O shape bad.",
          ifNotFixed: "Mince rubbery shrimp fine for dumpling filling or shrimp toast — texture hidden."
        },
        {
          title: "Added to hot dish that kept cooking",
          likelihood: "common",
          explanation: "Shrimp in paella, jambalaya, or curry kept on heat after pink = rubber.",
          fixes: [
            "Pull dish off heat the moment shrimp turn pink.",
            "Cook shrimp separately, add at serve.",
            "Ice bath stop for shrimp in soups.",
            "Reheat shrimp dishes gently, not boiling."
          ],
          tip: "Shrimp are a finisher protein — add last, heat off."
        },
        {
          title: "Boiled from frozen or in rolling boil",
          likelihood: "common",
          explanation: "Frozen shrimp dropped in hard boil — outside overcooks while inside catches up.",
          fixes: [
            "Thaw in fridge or quick cold water.",
            "Simmer, don't rage-boil — gentle bubble only.",
            "Remove immediately when pink.",
            "Butterfly large shrimp for even cook."
          ],
          tip: "Shrimp in soup: add when soup is done, turn off heat, let residual cook 2 min."
        }
      ]
    }
  ]
};