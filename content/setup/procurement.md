---
title: "18 · Procurement Ledger"
aliases: [u-setup-bom-detail, bom-detail,  u-procurement]
tags: [u-setup, bom, procurement, setup]
status: evergreen
created: 2026-10-10
updated: 2026-10-17
---

[[index|← Back to U Workspace]] · [[governance]]

# Master Procurement Summary & Dual-Tier Budget Envelopes

Master capital allocation index across all project domains. **Every domain follows High-Quality VFM first, followed by High-Quality Unconstrained.** Individual line-item specifications, model numbers, verified live links, and failure modes live in their respective domain notes.

*Exported CSV:* Full 144 line-item Bill of Materials with quantities and seller SKUs is maintained in [`assets/u-setup-bom.csv`](file:///Users/samar/My%20Drive/GenAI/assets/u-setup-bom.csv).

---

## Domain Procurement & Capital Allocation Matrix

| Domain | Tier 1: High-Quality VFM Envelope | Tier 2: High-Quality Unconstrained Envelope | Definitive Note |
| :--- | :--- | :--- | :--- |
| **Turnkey Contractor** | **₹18,00,000** (Homz locked scope: Kitchen, 5 Wardrobes, TV unit, Vanity, Dresser, Loft, Mirrors) | **~₹35,00,000** (Custom architectural millwork studio) | [[contract-rider-homz]] |
| **Loose Furniture** | **~₹5,60,000** (Solid teak makers + IKEA KIVIK/HYLTARP/BERGLÄRKA; TV unit/dresser in Homz scope) | **~₹11,80,000** (Phantom Hands + Alankaram + Magari artisan solid wood sets) | [[rooms/living-dining\|Living & Dining]] · [[rooms/master-suite\|Master Suite]] |
| **Kitchen & Laundry** | **~₹2,45,000** (Häfele domino hybrid, Bosch washer, Samsung fridge) | **~₹4,85,000** (Electrolux 4-zone hybrid, Miele W1/T1 stack, Bosch Serie 8) | [[kitchen-services]] |
| **Air & Water Quality** | **~₹89,000** (Coway Airmega 150 ×5, 3M inline scale control, IHS testing) | **~₹2,60,000** (Coway Airmega 250 ×5, 3M WFS-100/SFT-200 auto softener) | [[air-water]] |
| **Robot Floor Cleaning** | **₹0–₹3,800** (Owned Roomba Plus 505X in Dining Vanity bay + 1.5kVA step-down if 110V dock) | **₹1,29,999** (Dreame X40 Ultra, 230V native, 70°C mop wash) | [[air-water]] |
| **Audio & AV** | **₹69,998** (Sonos Beam Gen 2 + owned Era 300 standalone) | **~₹1,85,000** (Sonos Arc Ultra + Move 2 + Era 100 prayer room) | [[lighting#audio-media]] |
| **Networking & Wi-Fi** | **~₹36,000** (Flint 2 + TP-Link Omada EAP650 ×2 + PoE+ switch) | **~₹58,000** (Flint 2 + Ubiquiti UniFi U6-Pro ×2 + Managed VLAN switch) | [[networking]] |
| **Smart Home Relays** | **~₹21,000** (Shelly 1 Gen3 critical + Sonoff MINIR4M non-critical) | **~₹48,000** (Wozart Thread relays + Home Assistant Green hub) | [[automation]] |
| **Life Safety & Grilles** | **~₹95,000** (SS 316 invisible grilles + Aqara linked smoke/gas) | **~₹2,20,000** (PVB laminated glass balustrades + Nest Protect) | [[life-safety]] |
| **Geysers & Showers** | **~₹56,000** (Racold Omnis Wi-Fi 10L ×4 + SS304 flanged curtain rods & water bars) | **~₹1,20,000** (AO Smith HeatBot 10L ×4 + Silent Gliss recessed hotel tracks) | [[bathrooms-ventilation]] |
| **Worktop & Sinks** | **~₹36,000** (Light-shade Indian granite + Akemi Nano sealer + Nirali SS 304 sink) | **~₹95,000** (Caesarstone light quartz + Carysil composite sink + Kohler) | [[kitchen-services#worktops-sinks--mixers]] |
| **Lamps & Art Lighting** | **~₹42,000** (IKEA floor/desk lamps + WiZ E27 bulbs + 5W CRI 90 spots) | **~₹1,25,000** (Fos turned brass downlights + Artemide + Erco projectors) | [[lighting]] |
| **Curtains & Glazing** | **~₹1,20,000** (Sarom/D'Decor 2.25× pinch pleat + 3-pass blackout) | **~₹2,80,000** (Pure European linen + Somfy motorized 230V tracks) | [[soft-furnishings]] |

---

## Procurement Governance & Standing Rules
1. **GST Baseline:** All retail appliance, lighting, and electronic pricing figures are GST-inclusive. Contractor civil/joinery quotes must explicitly specify GST inclusion to prevent post-award surprises.
2. **First-Party Warranty Enforceability:** Strictly avoid grey-market parallel imports for mission-critical hardware (geysers, smart locks, robot vacuums) lacking official Indian RMA service centers.
3. **No Blind Substitutions:** Every site delivery must match approved manufacturer part numbers and mill certificates before carpenter cutting or contractor installation.