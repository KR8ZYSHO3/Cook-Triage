const CATEGORY_MEAT = {
  id: "meat",
  icon: "🍗",
  title: "Meat problems",
  description: "Dry, tough, raw inside, grey band, ground meat, sausage",
  hint: "Meat mistakes are timing and heat — some rescues happen on the plate, some on the next batch.",
  symptoms: [
    {
      id: "dry-chicken",
      label: "Dry chicken",
      causes: [
        {
          title: "Overcooked past safe temp",
          likelihood: "most-likely",
          explanation: "Chicken breast has almost no fat — a few degrees past 165°F / 74°C and moisture plummets.",
          fixes: [
            "Slice and serve with pan sauce, gravy, or yogurt sauce — moisture on the plate helps.",
            "Shred dry breast into soup, curry, or fried rice where broth carries it.",
            "Butter-baste next time; pull at 160°F / 71°C — carryover hits 165°F during rest.",
            "Brine 30 min (¼ cup salt per quart water) before cooking next batch.",
            "Pound to even thickness so thin edges don't overcook while center cooks."
          ],
          tip: "A thermometer costs less than one ruined dinner. Pull chicken early, rest 5 min.",
          ifNotFixed: "Slice thin, toss with warm broth and butter — 'chicken au jus' saves dry breast."
        },
        {
          title: "Cooked too long on too-low heat",
          likelihood: "common",
          explanation: "Slow drying without browning — moisture left over long gentle cook.",
          fixes: [
            "Sauce rescue as above.",
            "Next time: higher initial heat for sear, then moderate finish.",
            "Cover and steam-finish with splash of stock if center is done but dry outside.",
            "Use thighs instead of breast — more forgiving."
          ],
          tip: "Low and slow works for tough cuts, not lean breast — different rules."
        }
      ]
    },
    {
      id: "dry-pork",
      label: "Dry pork",
      causes: [
        {
          title: "Overcooked — old fear of pink pork",
          likelihood: "most-likely",
          explanation: "Modern pork is safe at 145°F / 63°C with rest. Cooking to 165°F+ dries loin and chops.",
          fixes: [
            "Slice thin, serve with applesauce, mustard cream, or pan gravy.",
            "Shred into carnitas-style dish with extra fat and acid.",
            "Brine chops 1–4 hours before cooking.",
            "Pull loin/chops at 140°F / 60°C, rest 5 min — blush pink is correct.",
            "Butter-baste while resting."
          ],
          tip: "Pink pork at 145°F is safe and juicy — grey pork is overcooked.",
          ifNotFixed: "Cut into strips, quick sauté with butter and garlic, serve over rice — second cook is brief."
        },
        {
          title: "Lean cut cooked like shoulder",
          likelihood: "common",
          explanation: "Loin and tenderloin need fast high-heat — braising lean cuts dries them.",
          fixes: [
            "Rescue with sauce.",
            "Next time: sear 2–3 min per side, finish in 400°F / 200°C oven to temp.",
            "Don't skip rest — juices redistribute.",
            "Use shoulder/butt for low-and-slow; loin for hot-and-fast."
          ],
          tip: "Match cut to method — loin is not shoulder."
        }
      ]
    },
    {
      id: "dry-beef",
      label: "Dry beef (steak, roast)",
      causes: [
        {
          title: "Overcooked past desired doneness",
          likelihood: "most-likely",
          explanation: "Well-done steak or roast has expelled most moisture — irreversible but plateable.",
          fixes: [
            "Slice thin against grain, serve with compound butter or pan sauce.",
            "Chop for tacos, stir-fry, or steak salad with creamy dressing.",
            "Pull steaks 5°F below target — carryover finishes.",
            "Rest 5–10 min tented loosely in foil before cutting.",
            "Use thermometer: 125°F rare, 135°F medium-rare, 145°F medium."
          ],
          tip: "You can't uncook steak — sauce and thin slicing are the rescue.",
          ifNotFixed: "Steak Diane or peppercorn cream sauce — classic rescues for overcooked beef."
        },
        {
          title: "Wrong cut or not enough fat",
          likelihood: "common",
          explanation: "Round, eye of round, or well-trimmed cuts dry out without basting or marbling.",
          fixes: [
            "Braise overcooked roast in stock 30 min — only works if not already bone-dry.",
            "Serve with fatty sauce: béarnaise, blue cheese butter.",
            "Next time: choose ribeye, strip, or chuck for roasting; baste with butter.",
            "Marinate lean cuts 4+ hours."
          ],
          tip: "Lean beef needs fat on the plate if not in the meat."
        }
      ]
    },
    {
      id: "tough",
      label: "Chewy / tough",
      causes: [
        {
          title: "Wrong cut for fast cooking",
          likelihood: "most-likely",
          explanation: "Chuck, round, or brisket need low slow heat to break collagen. Grilling them = chewy.",
          fixes: [
            "Slice thin against the grain — shortens muscle fibers dramatically.",
            "Braise rescue: return to liquid, cover, low simmer 1–3 hours until fork-tender.",
            "Pressure cooker: 45–60 min can salvage some tough braising cuts.",
            "Marinate with acid overnight next time — tenderizes surface.",
            "Mechanical tenderize with mallet if cut allows."
          ],
          tip: "Tough and dry are different problems. Tough = cut/method; dry = temperature.",
          ifNotFixed: "If fast-cooked tough cut won't braise (steak): slice paper-thin for tacos — knife is the tenderizer."
        },
        {
          title: "Not rested before slicing",
          likelihood: "common",
          explanation: "Juices flood out immediately when hot meat is cut — meat feels drier and tougher.",
          fixes: [
            "Rest 5–10 min before cutting — juices redistribute.",
            "Tent loosely with foil — tight wrap steams and softens crust.",
            "Slice against visible grain lines.",
            "Pour resting juices back over sliced meat."
          ],
          tip: "Resting is free tenderness — don't skip it."
        },
        {
          title: "Overworked ground meat or wrong grind",
          likelihood: "less-common",
          explanation: "Kneading burger mix or over-mixing meatballs develops gluten-like binding = dense chew.",
          fixes: [
            "For current batch: serve with sauce, chop fine for tacos.",
            "Next time: mix ground meat until just combined — cold hands, minimal handling.",
            "Add breadcrumb + milk panade to burgers for tenderness.",
            "Don't press burgers while cooking — squeezes juice."
          ],
          tip: "Mix burgers until it just holds together, then stop — overmixing is the #1 burger sin."
        }
      ]
    },
    {
      id: "raw-inside",
      label: "Raw / cold inside",
      causes: [
        {
          title: "Heat too high outside, cold center",
          likelihood: "most-likely",
          explanation: "Seared the exterior before center reached safe temp — classic thick steak or chicken problem.",
          fixes: [
            "Finish in 350°F / 175°C oven until center hits safe temp — don't blast stovetop.",
            "Cut thick pieces in half horizontally to reduce thickness, finish on stove.",
            "Add splash of liquid, cover, low heat — steam-finish the center.",
            "Use thermometer in thickest part — don't guess.",
            "Lower stovetop heat after initial sear."
          ],
          tip: "Safe temps: poultry 165°F, ground meat 160°F, whole cuts beef/pork 145°F with rest.",
          ifNotFixed: "If outside is burning before center cooks: transfer to oven immediately, don't keep scorching the pan."
        },
        {
          title: "Meat straight from fridge, too thick",
          likelihood: "common",
          explanation: "Ice-cold center takes too long to heat — outside overcooks while inside lags.",
          fixes: [
            "Temper meat 30–45 min on counter (not longer for safety).",
            "Pound chicken to even ¾-inch thickness.",
            "Butterfly thick pork chops.",
            "Use oven finish for anything over 1.5 inches thick."
          ],
          tip: "Room-temp meat cooks more evenly — 30 min on counter is standard pro move."
        },
        {
          title: "Crowded pan dropped temperature",
          likelihood: "less-common",
          explanation: "Too much meat at once steams instead of sears — never develops heat penetration pattern.",
          fixes: [
            "Cook in batches, keep finished pieces warm in low oven.",
            "Dry surface thoroughly — moisture kills pan heat.",
            "Use larger pan or work in batches.",
            "Don't move meat until ready to flip."
          ],
          tip: "If you hear sizzle die when meat hits pan, pan was too full or too cold."
        }
      ]
    },
    {
      id: "grey-band",
      label: "Grey band around edge (overcooked outside)",
      causes: [
        {
          title: "Pan too hot or cooked entirely on stovetop",
          likelihood: "most-likely",
          explanation: "Aggressive sear cooked outer ¼ inch past done before center finished — grey ring is overcooked meat.",
          fixes: [
            "Finish in oven after 1-min sear per side — gentler heat penetration.",
            "Use reverse sear: low oven to temp, then 30-sec hard sear at end.",
            "Slice and serve with sauce — grey band still tastes fine, just less pretty.",
            "Lower stovetop to medium after sear for thick cuts.",
            "Pull 5°F early, rest — carryover stops grey growth."
          ],
          tip: "Grey band = outside overcooked. Oven finish or reverse sear fixes it next time.",
          ifNotFixed: "For dinner tonight: slice, fan on plate, sauce over — presentation hides the band."
        },
        {
          title: "Flipped too often or pressed meat",
          likelihood: "common",
          explanation: "Constant flipping and pressing extends total cook time on the surface.",
          fixes: [
            "Flip once (or twice max) for steaks.",
            "Never press burgers or chops — pushes juice out and extends surface cook.",
            "Use timer: 3–4 min first side, flip once.",
            "Thinner cuts = less grey band risk."
          ],
          tip: "Leave it alone — one flip, no press, thermometer in center."
        }
      ]
    },
    {
      id: "ground-crumbly",
      label: "Ground meat crumbly / won't hold (burgers, meatballs)",
      causes: [
        {
          title: "Too lean or not enough binder",
          likelihood: "most-likely",
          explanation: "93/7 beef or turkey breast falls apart without fat or panade to glue fibers.",
          fixes: [
            "For mix still raw: add 1 egg per pound + ¼ cup breadcrumbs soaked in milk.",
            "Add 1–2 tbsp olive oil or grated butter to lean mix.",
            "Chill formed patties 30 min in fridge — firms up before cooking.",
            "Handle gently — don't over-compress.",
            "If already cooking and falling apart: treat as loose meat sauce or taco filling."
          ],
          tip: "Panade (breadcrumb + milk) is the secret to juicy burgers that hold shape.",
          ifNotFixed: "Scramble broken burgers in pan with taco seasoning — nobody knows it started as a patty."
        },
        {
          title: "Under-mixed or wrong grind texture",
          likelihood: "common",
          explanation: "Loose grind falls apart; also meat too cold can shatter fat structure when forming.",
          fixes: [
            "Mix until just homogeneous — about 1 min with hands.",
            "Use 80/20 beef for burgers — fat is structure.",
            "Form patties slightly larger than bun, indent center (prevents puff, helps even cook).",
            "Salt mix just before cooking — early salting extracts moisture."
          ],
          tip: "Salt burgers when formed, not when mixed — timing matters."
        }
      ]
    },
    {
      id: "ground-dense",
      label: "Ground meat dense / rubbery (meatballs, burgers)",
      causes: [
        {
          title: "Overworked the mix",
          likelihood: "most-likely",
          explanation: "Aggressive kneading develops myosin — meat binds into sausage texture, tough and springy.",
          fixes: [
            "This batch: serve with sauce, slice thin, chop into sauce.",
            "Next time: mix with fork until just combined — 30–60 seconds max.",
            "Add panade (soaked breadcrumb) to loosen texture.",
            "Use cold meat, cold hands, minimal passes.",
            "Scoop with ice cream scoop instead of packing tight."
          ],
          tip: "If your burgers bounce, you overmixed.",
          ifNotFixed: "Crumble dense meatballs into marinara — they'll soften in sauce 20 min."
        },
        {
          title: "Compressed too tight when forming",
          likelihood: "common",
          explanation: "Packing patties and meatballs like snowballs squeezes out air and juice.",
          fixes: [
            "Form loosely — mix should barely hold together.",
            "Indent burger centers — don't press edges tight.",
            "Roll meatballs gently, not packed.",
            "Don't flatten with spatula while cooking."
          ],
          tip: "Loose pack, gentle flip — burgers should look slightly rough, not smooth."
        }
      ]
    },
    {
      id: "sausage-burst",
      label: "Sausage casing burst / split open",
      causes: [
        {
          title: "Pricked casing or too much heat too fast",
          likelihood: "most-likely",
          explanation: "Steam builds inside casing — high heat or fork holes cause explosive splits.",
          fixes: [
            "Burst sausage is still edible — finish cooking, serve as-is or chop into dish.",
            "Lower heat immediately when split happens — finish gently.",
            "Poach in shallow water or beer 10 min, then sear briefly — gentler cook.",
            "Never prick fresh sausage — fat loss causes splits and dryness.",
            "Turn with tongs, not fork."
          ],
          tip: "Low heat, patience, no poking — sausages are self-contained pressure vessels.",
          ifNotFixed: "Remove from casing, cook as loose sausage meat for pasta or eggs."
        },
        {
          title: "Frozen or cold sausage hit hot pan",
          likelihood: "common",
          explanation: "Thermal shock — outside seizes before inside expands evenly.",
          fixes: [
            "Thaw fully before cooking.",
            "Start in cold pan, bring up together (works for some sausages).",
            "Simmer in ½ inch liquid first, brown after.",
            "Room-temp sausage cooks more evenly."
          ],
          tip: "Simmer-then-sear is the most split-proof method for fresh sausage."
        },
        {
          title: "Overstuffed homemade sausage",
          likelihood: "less-common",
          explanation: "Too much filling pressure in natural casing — splits at weakest point.",
          fixes: [
            "Leave air pockets when stuffing — don't pack tight.",
            "Prick only homemade overstuffed ones before cook — trade-off.",
            "Use twist links to relieve pressure.",
            "Cook low and slow."
          ],
          tip: "Homemade sausage: stuff 80% full, not tennis-ball tight."
        }
      ]
    },
    {
      id: "pink-but-done",
      label: "Chicken looks pink but thermometer says done",
      causes: [
        {
          title: "Myoglobin near bone — safe, not raw",
          likelihood: "most-likely",
          explanation: "Young chicken often has pink tint near the thigh bone even at 165°F. Color lies; temperature doesn't.",
          fixes: [
            "Trust the thermometer in the thickest part, not near bone.",
            "If 165°F and juices run clear (not red), it's safe to eat.",
            "Let rest 5 minutes — carryover can add a few degrees.",
            "If pink only at bone, serve — it's cosmetic, not undercooked meat.",
            "Next time: cook to 160°F, rest to 165°F for juicier result."
          ],
          tip: "USDA safe temp for chicken is 165°F. Pink near bone ≠ undercooked.",
          ifNotFixed: "If thermometer reads under 165°F in the thickest meat (away from bone), back in the oven — appearance doesn't matter."
        },
        {
          title: "Marinade with paprika, tomato, or cure made it look red",
          likelihood: "common",
          explanation: "Red spices and smoke can stain cooked meat pink. Nitrites in cured meats stay pink by design.",
          fixes: [
            "Check temp anyway — stain is not blood if fully cooked.",
            "Wipe surface — sometimes it's sauce, not meat color.",
            "White meat with pink only at surface from marinade = normal.",
            "Learn your marinade — tomato-based marinades always look 'rare'."
          ],
          tip: "Thermometer beats eyes every time, especially with spiced or smoked chicken."
        },
        {
          title: "Actually undercooked near bone — verify placement",
          likelihood: "less-common",
          explanation: "Thermometer hit a hot pocket or thin edge instead of thickest meat.",
          fixes: [
            "Re-insert thermometer parallel to grain in the thickest breast or thigh meat.",
            "Avoid touching bone — reads falsely high.",
            "Cut at thickest point if unsure — if any translucent flesh, cook more.",
            "Dark meat needs same 165°F — takes longer than breast on same bird.",
            "Return to oven covered with foil until temp hits target."
          ],
          tip: "Two readings beat one — check breast and thigh separately on whole birds."
        }
      ]
    }
  ]
};