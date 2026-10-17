---
title: "Overview & State"
aliases: [sumadhura-olympus, the-olympus, u-workspace, olympus-project, U, u-setup- u- olympus-setup-index]
tags:
  - project
  - olympus
  - real-estate
created: 2026-08-01
updated: 2026-10-17
status: evergreen
---

# U — The Olympus (Unit B4206) `[STATE: ACTIVE]`

**Alias:** U  
**Project:** The Olympus — Ultra-luxury dual-tower apartment in the Financial District, Hyderabad  
**Unit:** B4206, Tower B (Floor 42 of 44)  
**Location:** Near Amazon Hyderabad office, Nanakramguda / Kokapet  
**RERA Number:** P02400003072 (Sumadhura Infracom / Eureka Group)  
**Possession & Registration:** Registered 31 Aug 2026; Handover Sep 2026. Target move-in: Mid-April 2027.

---

## 1. Master Task & Decision State Machine

| Plan ID | Component | Status | Owner | Notes / Decision | Target Date |
|---|---|---|---|---|---|
| OLY-01 | **Purchase & Registration** | `[STATE: COMPLETED]` | Samar | Registered 31 Aug 2026 | 2026-08-31 |
| OLY-02 | **Turnkey Interior Contractor** | `[STATE: DECIDED]` | Samar & Sonia | Homz Interio (₹18L incl. GST with contract rider) | 2026-10-15 |
| OLY-03 | **Modular Kitchen & Built-Ins** | `[STATE: DECIDED]` | Samar & Sonia | Light granite (owner-sourced), `3174 LU` / `#F4F2EB` off-white, 9 tandem drawers, no dishwasher | 2026-11-15 |
| OLY-04 | **Smart Home & Automation** | `[STATE: PLANNED]` | Samar | Sonoff MINIR4M Matter relays + Shelly Gen3 in 43mm boxes + Echo Dot Max | 2026-11-15 |
| OLY-05 | **Whole-Home Wi-Fi & Audio** | `[STATE: PLANNED]` | Samar | Cat6 home runs to 3 ceiling AP spots (2 at move-in) + Sonos Arc Ultra | 2026-12-01 |
| OLY-06 | **Loose Furniture & Rooms** | `[STATE: PLANNED]` | Samar & Sonia | Drawing (Spin/Orange Tree vs Magari/d'Interio) + Teak Jhoola + Ergo WFH desk | 2026-12-15 |

---

## 2. Master Budget Ledger

Procurement operates within a doubled quality envelope (~₹41.00–64.00 Lakh) beyond Homz's ₹18.00 Lakh turnkey fit-out. All prices include 18% GST.

| Category | Must (₹) | Should (₹) | Optional (₹) | Scope & Key Picks |
| :--- | :--- | :--- | :--- | :--- |
| **Drawing Room** | 4,13,500–5,00,500 | 64,000 | 1,25,700 | Magari Porto sofa, 2 Rhodes chairs, wool rug, Era 300 |
| **Master Suite** | 2,10,600–2,29,900 | 56,300 | 49,200 | Teak / Ottoman king bed, bedside lighting, balcony seating |
| **BR-01 (Study / Guest)** | 60,500 | 26,000 | 27,000 | Owned desk/chair setup, sofa-cum-bed, library joinery |
| **BR-02 (Kabir's Study)** | 45,900 | 20,000 | 34,600 | IKEA BERGLÄRKA crank desk, daybed, toy storage |
| **BR-03 (Baba ji's Room)** | 47,000 | 20,000 | 5,000 | Palki Sahib, sangat seating mats, respectful storage |
| **Kitchen & Laundry** | 2,88,000–3,22,000 | 1,28,500 | 46,800–77,700 | Light granite + Akemi seal, Häfele Domino hob, Bosch washer |
| **Bathrooms & Geysers** | 52,000–58,000 | 12,000 | 12,000 | 4× Racold 10L Wi-Fi geysers, SS304 shower curtain rods + water bars |
| **Smart Home & Lighting** | 27,900–29,000 | 51,700 | — | Sonoff MINIR4M Matter relays, Echo controllers |
| **Networking & Wi-Fi** | 51,000 | — | 15,000 | Gateway Flint 2, 2× TP-Link EAP650 APs, Cat6 cabling |
| **Audio & Media** | 1,00,000 | 22,000 | 1,32,000 | Sonos Arc Ultra for Living TV; optional ceiling pairs |
| **Air, Water & Robot** | 86,600 | 15,000–85,000 | 1,29,999 | 5× Coway Airmega 150, owned Roomba 505X in dining vanity, scale control |
| **Safety & Fall Protection** | 95,100–1,87,600 | 43,100–49,100 | 22,600 | SS316 balcony grilles, Aqara leak and smoke sensors |
| **Admin, Moving & Cloud** | 39,000–94,900 | 61,400–95,800 | 5,700–14,800 | Transit insurance, RWA move-in deposit, subscription |
| **Subtotal (Procurement)** | **~₹20.2–25.9L** | **~₹9.8–13.2L** | **~₹5.1–5.6L** | **Must + Should Envelope: ~₹30.0–39.1L** |
| **Homz Interio Turnkey** | **₹18,00,000** | — | — | Fixed contract rider baseline (incl. GST) |
| **Grand Total** | **~₹38.2–43.9L** | **~₹48.0–57.1L** (with Should) | **~₹53.1–62.7L** (Full) | **Comfortably inside ₹59–82L total cap** |

*Excluded from ledger:* Art collection, king mattress, refundable RWA move-in deposit (~₹25k–1L), and recurring filter maintenance (~₹20k/year).

---

## 3. Master Workspace Directory

### 🏛️ Governance, Safety & Engineering
- [[governance]] — Supreme charter: locked owner decisions, household profile, site gates, maker hierarchy
- [[engineering-gotchas]] — High-rise physics: PRV water pressure, SPD surge arresters, DG harmonics
- [[evacuation]] — Floor 42 evacuation protocol, grab-bag inventory, DG switchover plan

### 🛋️ Spaces & Rooms (Loose Furniture, Ergo & Layouts)
- [[rooms/living-dining|Living, Drawing & Dining Spaces]] — Sofas, solid wood dining, bidirectional jhoola, foyer storage
- [[rooms/master-suite|Master Bedroom Suite]] — King bed, gas-strut storage, full-height dome mirror, bedside units
- [[rooms/br01-study-guest|BR-01 WFH Study & Guest Suite]] — Standing desk, Steelcase chair, 5-zone sofa-bed, library
- [[rooms/br02-kabir|BR-02 Kabir's Study & Playroom]] — BERGLÄRKA manual crank desk, growth chair, child daybed
- [[rooms/br03-gurudwara|BR-03 The Home Gurudwara]] — Palki Sahib, sangat seating durries, sacred storage

### 🛠️ Home Systems & Finishes (Permanent Architecture & Craft)
- [[kitchen-services]] — Modular kitchen, granite worktop, undermount sinks, domino hob, laundry stack
- [[bathrooms-ventilation]] — 10L smart geysers, SS304 shower curtain rods, exhaust fans, mosquito mesh
- [[joinery]] — Core plywood grades (Century 710/Club Prime), laminate schedule, Blum/Hettich hardware
- [[lighting]] — Architectural COBs, 24V mirror halos, bedside reading lamps, fine art spots
- [[automation]] — In-wall Matter relays, switchbox depths, Alexa controllers, BLDC ceiling fans
- [[networking]] — Structured Cat6 cabling, ceiling APs, PoE switches, DC UPS
- [[air-water]] — 5× Coway HEPA purifiers, NDIR CO₂, water softener, Roomba 505X vanity bay
- [[life-safety]] — Full-height SS316 balcony grilles, interlinked smoke alarms, gas cutoff, smart locks
- [[soft-furnishings]] — Recessed double drapery, 3M Prestige 70 solar film, Royale Luxury paint
- [[art-styling]] — Swamimalai Chola bronzes, Persian wall carpet, Gurmukhi calligraphy

### 📋 Project Setup & Execution (Procurement & Contracts)
- [[setup/procurement|Procurement Ledger & Capital Envelopes]] — Master summary linking to [`assets/u-setup-bom.csv`](file:///Users/samar/My%20Drive/GenAI/assets/u-setup-bom.csv)
- [[setup/contract-rider-homz|Homz Contract Rider]] — 12-point legally binding annexure, milestone gates, penalty clauses
- [[u-handover]] — Builder snag checklist and statutory 30-day rectification tracker