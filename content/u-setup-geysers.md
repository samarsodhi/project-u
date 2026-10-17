---
title: "06 · Bathrooms & Geysers"
aliases: [ geysers-setup]
tags: [u-setup, geysers]
status: evergreen
created: 2026-10-10
updated: 2026-10-17
---

[[u-setup-index]]

### §11 Geysers, shower glass, ventilation and mesh

**Answer:** Deploy 10 L Wi-Fi geysers in all four bathrooms. Glass partitions are removed to prevent bathrooms from feeling cramped; install heavy-duty **SS 304 flanged shower curtain rods** (in Homz scope if included, else direct) paired with glued floor water threshold bars. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.**

#### Geysers, Glass & Ventilation Matrix

| Need                        | Tier 1: High-Quality VFM                                                                                               | Tier 2: High-Quality Unconstrained                                                                                          | Top Failure Mode & Reddit Insight                                                                                                                                                                                               |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Geyser ×4 (10L Storage)** | [Racold Omnis DG Wi-Fi 10L](https://www.racold.com) (Titanium Plus enamel, Alexa/app scheduling, BEE 5★, ~₹11,999 ea) / [Havells Adonia Spin / Puro Plus 10L](https://www.havells.com) (Feroglas hard-water tank, Incoloy 800 element, ₹10,490 ea) / [Crompton Solarium Care / Arno Neo 10L](https://www.crompton.co.in) (Nano Polybond tank, 8-bar pressure rating, ₹7,999 ea) | [AO Smith Finesse / HeatBot Wi-Fi 10L](https://www.aosmithindia.com) (Blue Diamond glass-lined, 2× corrosion resistance, ~₹14,500 ea) / [Jaquar Elena Digital Smart 10L](https://www.jaquar.com) (Twin tank enamel, cordless remote + digital thermostat, ₹15,800 ea) / [Stiebel EltronSHZ / ESH 10L German Storage Heater](https://www.stiebel-eltron.in) (Direct German anti-scale element, ~₹18,500 ea) | Cheap mechanical timers or smart plugs trip safety cutouts and conceal thermostat failures; geysers must retain unswitched lines and run native app logic. Hard bore water erodes anode; replace magnesium rod every 18 months. |
| **Shower Separation**       | **Wall-Flanged SS 304 Curtain Rod (25mm OD)** + Weighted Mildew-Resistant PEVA/Linen Curtain + Glued Floor Water Bar (₹2,500–4,500/bath, or via Homz scope) / [IKEA BOTAREN + BJÖRKÅSEN Heavy-Duty Flanged Rod & Weighted Drape](https://www.ikea.com/in/en/cat/shower-curtains-18908/) (~₹2,800/bath) / [Kohler Exalt Flanged SS304 Curved Shower Rod](https://www.kohler.co.in) (Adds 15cm elbow room, ₹4,900/bath) | [Silent Gliss 6100 / 3840 Recessed Ceiling Curtain Track](https://www.silentgliss.com) + Hydrophobic Weighted Hotel Drape (₹12k–18k/bath) / [Forest KS Ceiling-Recessed Powder-Coated Aluminum Track + Sunbrella/Teflon Drape](https://www.forestgroup.com) (Zero rust, ₹11,500/bath) / [Jaquar / Ozone Minimalist Fixed Half-Shield Walk-In Toughened Glass (Optional Future Upgrade)](https://www.jaquar.com) (10mm Saint-Gobain glass with ClearShield nano-coat, ~₹22k/bath) | Spring tension rods slip off glazed tiles when wet curtains are tugged; drill flanged SS 304 brackets into masonry with silicone seal. Bond a 25mm acrylic/stone floor threshold bar so shower spray does not flood the dry area. |
| **Bathroom Ventilation**    | [atomberg Studio / Efficio 150mm BLDC Exhaust](https://www.amazon.in/dp/B0D35VCL3W) (Backdraft shutter, 6.5W, ₹1,799 ea) / [Kuhl Inspira L1 150mm BLDC Exhaust Fan](https://www.kuhl.in) (Whisper-quiet 7W BLDC motor, rust-proof ABS, ₹1,699 ea) / [Havells Ventil Air DSP 150mm](https://www.havells.com) (Metal blade, bird guard, ₹1,850 ea) | [Panasonic FV-24CD8 / FV-15TGU WhisperCeiling](https://www.panasonic.com/in) (Ultra-quiet <26dB ducted Sirocco fan, ₹8,500 ea) / [Soler & Palau (S&P) Silent-100 / Silent-200 CZ Design](https://www.solerpalau.com) (Spanish elastic silent-block motor mounts, backdraft membrane, ~₹11,500 ea) / [Cata E-100 GTH Glass Front Hygrostat Exhaust](https://www.cata.es) (Built-in humidity sensor auto-trigger, digital display, ~₹12,800 ea) | Discharging exhaust directly into false ceiling voids rots gypsum boards and breeds black mold; ducting must terminate outside through the service shaft louvre.                                                                |
| **Insect & Mosquito Mesh**  | [Glide-Fit Sash in Window Outer Track](https://mrmosquito.in) (SS 304 mesh, hole $\le 0.9\text{ mm}$, ~₹160–350/sq ft) / [Saint-Gobain ADFORS Charcoal Fiberglass Sliding Screen](https://www.adfors.com) (Zero glare, UV stabilized, ~₹180/sq ft) / [Tostem / Fenesta Factory-Fitted Sliding SS304 Mesh Sash](https://www.fenesta.com) (Matched aluminum profile, ~₹320/sq ft) | [Phifer India TuffScreen / Security SS304 Black Epoxy Mesh](https://www.phifer.com) (Heavy-duty tear-proof vinyl-coated polyester or black-oxidized SS304, zero optical haze, ~₹450–650/sq ft) / [Phantom Screens Retractable Motorized / Executive Mesh](https://www.phantomscreens.com) (Concealed roller cassette, ~₹850–1,200/sq ft) / [freedomScreens / Neher German Transpatec Fine-Weave Mesh](https://www.neher.de) (80% airflow + invisible 0.13mm filament, ~₹750/sq ft) | Magnetic pleated mesh sags and rips under strong balcony wind pressure on floor 42; rigid sliding sashes on secondary sill tracks prevent deformation. Black-coated SS304 reduces glare vs bright silver wire. |

---

### Engineering Sizing & Operational Best Practices

#### 1. Geyser Recovery Time Benchmark
* 10 L at 2.0 kW heats from 20 °C to 55 °C in ~12 minutes.
* Provides ~3.5–4 minutes of continuous hot shower flow at 6 L/min, recovering rapidly between family members across 4 dedicated bathrooms.
* Stagger wake-up heating schedules by 15 minutes across bathrooms to keep concurrent electrical load within DG backup caps.

#### 2. Shower Curtain & Wet-Zone Containment Protocol
* **Hardware Mandate:** Screw-mounted AISI 304 stainless steel flanged rods (1.2 mm wall thickness); reject spring-tension rods and chrome-plated mild steel.
* **Floor Barrier:** Bond a solid stone/acrylic water threshold bar using epoxy; do not core drill through bathroom floor waterproofing membranes.
* **Curtain Drop:** Hem curtain 15 mm above shower floor and weight bottom seam so drafts do not blow wet fabric against the user.

**Skip List:** 15L and 25L bulky tanks, instant geysers for showers (<2 L/min in winter), magnetic pleated mosquito nets, un-ducted false ceiling exhaust dumps.

**Detail →** [[u-setup-bom-detail]] · [[u-setup-rooms]]