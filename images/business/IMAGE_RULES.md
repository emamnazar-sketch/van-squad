# Van Squads business images — HARD RULES (Amam, 2026-10-15)

Two rules govern every business image. Both are non-negotiable.

## Rule 1 — Unique (set 2026-10-15, morning)
Every image is created for ONE business alone. Never reused, never a shared
category cover. Registry: REGISTRY.json in this folder. Check it before
generating anything; a registered file belongs to its business forever.

## Rule 2 — Logical and high quality (set 2026-10-15, after the Issiah reject)
An image that exists but is illogical is WORSE than no image. Every image
must pass the visual checklist below — by a human-style review of the actual
pixels, not a file-exists check.

### Generation prompt rules
- ONE continuous scene, one moment, one photograph. Never brief a
  transformation: no "half cleaned", "before/after", split, collage, or
  comparison compositions — the model will fuse two scenes into one object.
- Wide establishing shot by default. The main subject (vehicle, room, pool,
  dog) sits fully inside the frame with margin around it; nothing being
  worked on may be sliced by the frame edge.
- One object = one consistent thing: one car has ONE interior (one color,
  one material), one room is one room, doors and panels line up.
- The worker's position and tools must match the task physically (a person
  steam-cleaning a seat is beside that seat, tool touching the surface).
- Photorealistic, bright and sunlit, real working scene at a customer's home.
- NO text, NO logos, NO readable branding; vehicles and clothing unbranded.

### Visual QA checklist — view EVERY generated image; ANY fail = reject + regenerate
1. Single coherent scene — no fused/split/collage look, no mismatched halves.
2. Internal consistency — one object's colors/materials/parts all agree.
3. Framing — main subject whole and logical in frame; no mid-action slicing.
4. Physical logic — action, posture, tool contact, and setting all make sense.
5. Anatomy — hands, limbs, faces natural; no extras, warping, or melted tools.
6. Clean of text/logos/gibberish branding.
7. Taste — bright, light, enjoyable, premium; looks like a real photo.

Process: the generator views its own output against this checklist and
regenerates on any fail (max 2 retries, then escalates). The coordinator
personally views every image before it is set in the database, and reports
the reject count honestly. A count of files is never a quality claim.
