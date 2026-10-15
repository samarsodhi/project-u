---
title: BOM and Appendices A0-A5 Detail
aliases: [ bom-detail]
tags: [u-setup, bom, appendices]
status: evergreen
created: 2026-10-10
updated: 2026-10-14
---

[[u-setup-index]]

### A0. Master Procurement Summary & Dual-Tier Budget Envelopes

**Answer:** Master procurement index across all project domains. **Every domain follows High-Quality VFM first, followed by High-Quality Unconstrained.** Individual line-item specifications, model numbers, verified live links, and failure modes live in their respective domain notes.

*Exported CSV:* Full 144 line-item Bill of Materials with quantities and seller SKUs is maintained in [`assets/u-setup-bom.csv`](file:///Users/samar/My%20Drive/GenAI/assets/u-setup-bom.csv).

---

#### Domain Procurement & Capital Allocation Matrix

| Domain | Tier 1: High-Quality VFM Envelope | Tier 2: High-Quality Unconstrained Envelope | Definitive Note |
| :--- | :--- | :--- | :--- |
| **Turnkey Contractor** | **₹18,00,000** (Homz fixed scope: BWP ply, laminate, Blum/Hettich) | **~₹35,00,000** (Custom architectural millwork studio) | [[u-setup-interiors-detail]] |
| **Loose Furniture** | **~₹6,50,000** (Solid teak makers + IKEA washable slipcovers) | **~₹12,50,000** (Alankaram + Magari artisan solid wood sets) | [[u-setup-rooms]] |
| **Kitchen & Laundry** | **~₹2,45,000** (Häfele domino hybrid, Bosch washer, Samsung fridge) | **~₹4,85,000** (Electrolux 4-zone hybrid, Miele W1/T1 stack, Bosch Serie 8) | [[u-setup-kitchen]] |
| **Air & Water Quality** | **~₹82,000** (Coway Airmega 150 ×5, Kent softener, IHS testing) | **~₹3,20,000** (Dyson HP1 ×5, 3M SFT-200 automatic whole-flat) | [[u-setup-air-water]] |
| **Robot Floor Cleaning** | **₹54,999** (Dreame L10s Ultra, dual spinning mops, hot-air dock) | **₹1,29,999** (Dreame X40 Ultra, robotic swing-arm, 70°C wash) | [[u-setup-air-water]] |
| **Audio & AV** | **₹69,998** (Sonos Beam Gen 2 + owned Era 300 standalone) | **~₹1,85,000** (Sonos Arc Ultra + Move 2 + Era 100 prayer room) | [[u-setup-audio]] |
| **Networking & Wi-Fi** | **~₹36,000** (Flint 2 + TP-Link Omada EAP650 ×2 + PoE+ switch) | **~₹58,000** (Flint 2 + Ubiquiti UniFi U6-Pro ×2 + Managed VLAN switch) | [[u-setup-networking]] |
| **Smart Home Relays** | **~₹21,000** (Shelly 1 Gen3 critical + Sonoff MINIR4M non-critical) | **~₹48,000** (Wozart Thread relays + Home Assistant Green hub) | [[u-setup-smart-home]] |
| **Life Safety & Grilles** | **~₹95,000** (SS 316 invisible grilles + Aqara linked smoke/gas) | **~₹2,20,000** (PVB laminated glass balustrades + Nest Protect) | [[u-setup-safety]] |
| **Geysers & Glass** | **~₹1,40,000** (Racold Omnis Wi-Fi 10L ×4 + 10mm Ozone toughened glass) | **~₹2,50,000** (AO Smith Finesse/HeatBot 10L ×4 + Dorma frameless PVD) | [[u-setup-geysers]] |
| **Worktop & Sinks** | **~₹38,000** (Steel Grey granite worktop + Nirali SS 304 sink) | **~₹95,000** (Caesarstone quartz + Carysil Nera composite sink + Kohler) | [[u-setup-worktop]] |
| **Lamps & Art Lighting** | **~₹42,000** (IKEA floor/desk lamps + WiZ E27 bulbs + 5W CRI 90 spots) | **~₹1,25,000** (Fos turned brass downlights + Artemide + Erco projectors) | [[u-setup-lamps]] |
| **Curtains & Glazing** | **~₹1,20,000** (Sarom/D'Decor 2.25× pinch pleat + 3-pass blackout) | **~₹2,80,000** (Pure European linen + Somfy motorized 230V tracks) | [[u-setup-interiors]] |

---

### Procurement Governance & Standing Rules
1. **GST Baseline:** All retail appliance, lighting, and electronic pricing figures are GST-inclusive. Contractor civil/joinery quotes must explicitly specify GST inclusion to prevent post-award surprises.
2. **First-Party Warranty Enforceability:** Strictly avoid grey-market parallel imports for mission-critical hardware (geysers, smart locks, robot vacuums) lacking official Indian RMA service centers.
3. **No Blind Substitutions:** Every site delivery must match approved manufacturer part numbers and mill certificates before carpenter cutting or contractor installation.

**Detail →** [[u-setup-index]]