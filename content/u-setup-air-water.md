---
title: Air, water quality, and robot vacuum
aliases: [u-setup-air-water, air-water-setup]
tags: [u-setup, air-water]
status: evergreen
created: 2026-10-10
updated: 2026-10-14
---

[[u-setup-index]]

### §5 Air and Water Quality

**Answer:** Deploy 5 dedicated HEPA purifiers at move-in (Master, BR-01, BR-02, Drawing, Living/Dining). Test both water lines (municipal and borewell) before selecting whole-flat treatment; hardness decides the softener. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.**

#### Air Quality & Purification Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Purifiers ×5 (Bedrooms & Public)** | [Coway Airmega 150](https://www.amazon.in/dp/B08GJ57MKL) (CADR 303 m³/h, 8500-hr Green HEPA H13, ₹14,999 ea) | [Dyson Purifier Hot+Cool HP1](https://www.amazon.in/dp/B0FCYF1NT7) (3-in-1 HEPA H13, ₹56,900 ea) | Coway 7-yr motor warranty and 8500-hr H13 cartridge are Reddit gold standard for Indian dust; vacuum pre-filter every 15 days. Dyson replacement filters exceed ₹6,000/yr with lower CADR per rupee. |
| **CO₂ Monitor (Master BR)** | [Qingping Air Monitor Lite](https://www.amazon.in/dp/B08SC4Q7NQ) (SenseAir S8 NDIR CO₂, PM2.5, HomeKit/Wi-Fi, ₹8,499) · *(Alt)* [INKBIRDPLUS NDIR](https://www.amazon.in/dp/B0CG348YS1) (Standalone, ₹2,898) | [Airveda Pulse PM2.5+CO₂](https://www.airveda.com) (Wi-Fi calibrated, Made-in-India, ₹23,999) | Cheap chemical/MOX sensors estimate CO₂ from VOCs and drift wildly; mandate true NDIR optical sensor (SenseAir S8). Calibrate outdoors at an open balcony on day 1. |
| **Dehumidifier (Walk-in Closet)** | [Sharp DW-P10M-W 10L](https://www.amazon.in/dp/B0BH2V48P6) (Plasmacluster ionizer, continuous drain, ₹21,450) | [Sharp DW-J20FM-W 20L Inverter](https://store.sharpappliances.in) (HEPA + Plasmacluster, 4.6L tank, ₹39,990) | Plasmacluster destroys airborne mold and mildew spores on leather shoes/jackets in monsoons; continuous gravity drain hose prevents premature tank auto-cutoff. |

*(Deploy dehumidifier only if indoor relative humidity exceeds 60% for 7 consecutive days during monsoon).*

#### Water Quality & Treatment Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Water Quality Testing** | [IHS Lab Hyderabad: GPT (Borewell ₹2,400)](https://ihs.org.in/lab/wqt.html) | [IHS Lab Full Physical + Chemical + Bacterial Panel](https://ihs.org.in/lab/wqt.html) (₹5,200) | Sampling stagnant plumbing sediment skews test; run taps for 5 minutes before bottle collection to sample true high-rise reservoir chemistry. |
| **Water Softening (Hardness)** | [KENT Bathroom Softener 5.5L](https://www.kent.co.in/products/water-softener-kent-bathroom-water-softener) (Point-of-use manual salt regen, ₹14,949) · *(Alt)* [WaterScience CLEO Tap/Shower](https://www.waterscience.in) (KDF media, ₹2,495 ea) | [3M SFT-200 Fully Automatic Whole-Flat](https://www.3mindia.in) (~₹1,50,000) | Manual salt recharge neglected on point-of-use units; whole-flat unit requires replumbing dual plumbing shafts from utility (verify HOA rules before purchase). |

---

### §6 Robot Vacuum & Floor Care

**Answer:** One automated vacuum-mop robot with self-cleaning hot-air dock handles daily vitrified tile maintenance; the owned **Dyson V15 Detect** handles spot-cleaning and upholstery.

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Robot Vacuum & Mop (Dock)** | [Dreame L10s Ultra](https://www.amazon.in/dp/B0CS2SVZWC) (5300 Pa, hot-air drying, dual spinning mops, ₹54,999) | [Dreame X40 Ultra](https://www.amazon.in/dp/B0GX5HFRHZ) (12,000 Pa, robotic swing-arm, 70°C wash, mop detaching, ₹1,29,999) | Borewell hard water scales dock boiler and solenoid valves; always fill clean tank with RO water. Buy 3rd-party consumable packs (brushes, mops, bags) on Amazon to bypass high OEM markups. |
| **Spot Cleaning (Owned)** | **Dyson V15 Detect** (₹0 / owned, laser optic fluffy head + 3 spare HEPA filters) | [Dyson Gen5detect Absolute](https://www.dyson.in) (280 AW suction, HEPA 0.1 micron, ₹64,900) | Continuous wall trickle-charging cooks lithium pouch cells in warm climates; unplug once battery reaches 100%. Wash cyclone pre-filter monthly and dry 24 hours. |

#### Trade Touchpoints & Site Requirements
* **Air & Purifiers:**
  * Cleanable mesh pre-filters must be vacuumed every 15 days using the owned Dyson V15 brush tool to prevent early HEPA saturation.
  * Keep purifiers $\ge 30\text{ cm}$ away from walls for unobstructed $360^\circ$ intake.
* **Plumbing & Water Testing:**
  * Collect samples only after running taps for 5 minutes to flush stagnation debris.
  * If total hardness $< 200\text{ mg/L}$, no softener is required. If $200–350\text{ mg/L}$, deploy point-of-use Kent units only to bathrooms with exposed plumbing tiles.
* **Joinery & Robot Dock (Homz Scope):**
  * Dry living/corridor niche: minimum $100\text{ cm H} \times 55\text{ cm W} \times 60\text{ cm D}$ with dedicated 6A/16A socket and water-resistant base laminate.
  * Threshold transitions across balconies and bathrooms must remain $\le 20\text{ mm}$ with a $45^\circ$ bevel.
  * Always fill the clean water tank with RO water to prevent internal heater scaling and pump failure.

**Skip List:** Dedicated plumbing auto-drain kits (drilling through high-rise walls risks hidden riser pipes), Energy Recovery Ventilators (ERV / HRV — VRF fresh air handled via balcony cross-ventilation), magnetic/electronic "descalers" (zero ion-exchange efficacy).

**Detail →** [[u-setup-bom-detail]]