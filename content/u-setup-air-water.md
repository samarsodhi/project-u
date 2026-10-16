---
title: "07 · Air, Water & Robot"
aliases: [ air-water-setup]
tags: [u-setup, air-water]
status: evergreen
created: 2026-10-10
updated: 2026-10-16
---

[[u-setup-index]]

### §5 Air and Water Quality

**Answer:** Deploy 5 dedicated HEPA purifiers at move-in (Master, BR-01, BR-02, Drawing, Living/Dining). Test both water lines (municipal and borewell) before selecting whole-flat treatment; hardness decides the softener. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.**

#### Air Quality & Purification Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Purifiers ×5 (Bedrooms & Public)** | [Coway Airmega 150](https://www.amazon.in/dp/B08GJ57MKL) (CADR 303 m³/h, 8500-hr Green HEPA H13, 7-yr motor warranty, ₹14,999 ea) | [Coway Airmega 250 / Pro](https://www.cowayindia.in) (CADR 400+ m³/h, dual-suction H13, ₹34,900 ea) · *(Alt)* [IQAir HealthPro 250](https://www.iqair.com/in) (HyperHEPA H14, ~₹1.15L) | Coway 150 is the undisputed Reddit India benchmark; vacuum removable pre-filter every 15 days. Avoid Dyson 3-in-1 towers (weak ~140 m³/h CADR, bearing whine, ₹6k/yr proprietary filters). |
| **CO₂ Monitor (Master BR)** | [Qingping Air Monitor Lite](https://www.amazon.in/dp/B08SC4Q7NQ) (SenseAir S8 NDIR CO₂, PM2.5, HomeKit/Wi-Fi, ₹8,499) · *(Alt)* [INKBIRDPLUS NDIR](https://www.amazon.in/dp/B0CG348YS1) (Standalone, ₹2,898) | [Airveda Pulse PM2.5+CO₂](https://www.airveda.com) (Wi-Fi calibrated, Made-in-India, ₹23,999) | Cheap chemical/MOX sensors estimate CO₂ from VOCs and drift wildly; mandate true NDIR optical sensor (SenseAir S8). Calibrate outdoors at an open balcony on day 1. |
| **Dehumidifier (Walk-in Closet)** | [Sharp DW-P10M-W 10L](https://www.amazon.in/dp/B0BH2V48P6) (Plasmacluster ionizer, continuous drain, ₹21,450) | [Sharp DW-J20FM-W 20L Inverter](https://store.sharpappliances.in) (HEPA + Plasmacluster, 4.6L tank, ₹39,990) | Plasmacluster destroys airborne mold and mildew spores on leather shoes/jackets in monsoons; continuous gravity drain hose prevents premature tank auto-cutoff. |

*(Deploy dehumidifier only if indoor relative humidity exceeds 60% for 7 consecutive days during monsoon).*

#### Water Quality & Treatment Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Water Quality Testing** | [IHS Lab Hyderabad: GPT (Borewell ₹2,400)](https://ihs.org.in/lab/wqt.html) | [IHS Lab Full Physical + Chemical + Bacterial Panel](https://ihs.org.in/lab/wqt.html) (₹5,200) | Sampling stagnant plumbing sediment skews test; run taps for 5 minutes before bottle collection to sample true high-rise reservoir chemistry. |
| **Water Softening & Scale Control** | [3M ScaleGard Pro / Polyphosphate Inline Dosing](https://www.3mindia.in) on Washer + Geysers + [WaterScience CLEO Shower Filters](https://www.waterscience.in) (₹12,500 total) | [3M WFS-100 / SFT-200 Automatic Ion-Exchange Softener](https://www.3mindia.in) (Volumetric auto-regeneration valve, ~₹85,000–1,50,000) | Manual bathroom salt softeners (Kent 5.5L) become dead weight within 2 months due to tedious bucket regeneration; use zero-maintenance polyphosphate dosing for appliances or a fully automatic valve unit. |

---

### §6 Robot Vacuum & Floor Care

**Answer:** Deploy the **owned iRobot Roomba Plus 505X** inside the finalized Homz **Dining Common Vanity robot garage** (`≥150 mm` bottom clearance + internal 6A socket), paired with the owned **Dyson V15 Detect** for upholstery and spot cleaning.

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Robot Vacuum & Mop (Dining Vanity Bay)** | **Retain Owned iRobot Roomba Plus 505X** (₹0 / owned) + [Maxine 1500VA 230V-to-110V Step-Down](https://www.amazon.in) (~₹3,800 if dock evacuation motor is 110V-locked) | [Dreame X40 Ultra / Roborock S8 MaxV Ultra](https://www.amazon.in/dp/B0GX5HFRHZ) (230V native, 12,000 Pa, 70°C mop wash, auto-detaching mops, ₹1,29,999) | **Critical US-Relocation Gotcha:** While Roomba charging bricks support 100–240V, US auto-empty dock suction motors are 110V 1200W and fry instantly on 230V. Check dock label before plugging into Dining vanity socket; fill water tank strictly with RO water. |
| **Spot Cleaning (Owned)** | **Dyson V15 Detect** (₹0 / owned, laser optic fluffy head + 3 spare HEPA filters) | [Dyson Gen5detect Absolute](https://www.dyson.in) (280 AW suction, HEPA 0.1 micron, ₹64,900) | Continuous wall trickle-charging cooks lithium pouch cells in warm climates; unplug once battery reaches 100%. Wash cyclone pre-filter monthly and dry 24 hours. |

#### Trade Touchpoints & Site Requirements
* **Air & Purifiers:**
  * Cleanable mesh pre-filters must be vacuumed every 15 days using the owned Dyson V15 brush tool to prevent early HEPA saturation.
  * Keep purifiers $\ge 30\text{ cm}$ away from walls for unobstructed $360^\circ$ intake.
* **Plumbing & Water Testing:**
  * Collect samples only after running taps for 5 minutes to flush stagnation debris.
  * If total hardness $< 200\text{ mg/L}$, no softener is required. If $200–350\text{ mg/L}$, deploy inline polyphosphate scale cartridges on geysers/washer and CLEO shower heads.
* **Dining Common Vanity Robot Garage (Homz Scope):**
  * Vanity bottom bay: omit toe-kick skirting ($\ge 150\text{ mm}$ clear entry height, or $\ge 500\text{ mm}$ internal bay height for auto-empty tower + service lid access) with an internal 6A socket and waterproof PVC base mat.
  * Threshold transitions across balconies and bathrooms must remain $\le 20\text{ mm}$ with a $45^\circ$ bevel.
  * Always fill the clean water tank with RO water to prevent internal scaling and pump failure.

**Skip List:** Dedicated plumbing auto-drain kits (drilling through high-rise walls risks hidden riser pipes), Energy Recovery Ventilators (ERV / HRV — VRF fresh air handled via balcony cross-ventilation), magnetic/electronic "descalers" (zero ion-exchange efficacy).

**Detail →** [[u-setup-bom-detail]]