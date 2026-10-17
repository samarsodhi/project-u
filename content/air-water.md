---
title: "Air, Water & Cleaning"
aliases: [u-setup- air-water-setup,  u-air-water]
tags: [u-setup, air-water, robotics]
status: evergreen
created: 2026-10-10
updated: 2026-10-17
---

[[index|← Back to Home Overview]]

# Air, Water Quality, Dehumidification & Floor Robotics

Master technical specification for whole-home environmental wellness: 5 dedicated True HEPA purifiers, optical NDIR CO₂ monitoring, walk-in closet dehumidification, water hardness treatment, and the owned Roomba 505X vanity garage.

---

## 1. Air Quality & Purification Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Purifiers ×5 (Bedrooms & Public)** | [Coway Airmega 150](https://www.amazon.in/dp/B08GJ57MKL) (CADR 303 m³/h, 8500-hr Green HEPA H13, 7-yr motor warranty, ₹14,999 ea) / [Philips Smart Air Purifier AC1711 / Series 2000](https://www.philips.co.in) (CADR 300–380 m³/h, NanoProtect HEPA, pan-India filters, ₹13,999–₹18,990 ea) / [Xiaomi Smart Air Purifier 4](https://www.mi.com/in/product/xiaomi-smart-air-purifier-4/) (CADR 400 m³/h, OLED PM2.5 display, Alexa/Matter via Home Assistant, ₹13,999 ea) | [Coway Airmega 250 / Pro](https://www.cowayindia.in) (CADR 400+ m³/h, dual-suction H13, ₹34,900 ea) / [Blueair HealthProtect 7470i / Blue Pure 211i Max](https://www.blueair.com/in) (HEPASilent dual filtration, whisper-quiet high CADR 455–635 m³/h, ₹38,990–₹54,000 ea) / [IQAir HealthPro 250](https://www.iqair.com/in) (Swiss HyperHEPA H14 0.003 micron + 2.5kg V5-Cell gas carbon, ~₹1.15L ea) | Coway 150 is the undisputed Reddit India benchmark; vacuum removable pre-filter every 15 days. Avoid Dyson 3-in-1 towers (weak ~140 m³/h CADR, bearing whine, ₹6k/yr proprietary filters). |
| **CO₂ Monitor (Master BR)** | [Qingping Air Monitor Lite (CGDN1)](https://www.amazon.in/dp/B08SC4Q7NQ) (SenseAir S8 NDIR CO₂, PM2.5, HomeKit/Wi-Fi, ₹8,499) / [INKBIRDPLUS IAM-T1 Smart Indoor CO₂ Monitor](https://www.amazon.in/dp/B0CG348YS1) (SenseAir NDIR sensor, 4-year e-ink battery life, Bluetooth app, ₹4,299) / [Temptop M10 / LKC-1000S+ AQI & NDIR Monitor](https://www.amazon.in) (Laser particle + NDIR, ₹6,999) | [Aranet4 HOME Wireless Indoor CO₂ Monitor](https://aranet.com/en/home/products/aranet4-home) (Latvian NDIR laboratory precision, E-Ink display, 2-yr AA battery, ~₹22,500) / [AirGradient ONE Open-Source Indoor Monitor (I-9PSL)](https://www.airgradient.com) (SenseAir S8 CO₂ + Plantower PM2.5 + Sensirion TVOC/NOx, native Home Assistant, ~₹18,500) / [Airveda Pulse PM2.5+CO₂](https://www.airveda.com) (Made-in-India Wi-Fi calibrated, ₹23,999) | Cheap chemical/MOX sensors estimate CO₂ from VOCs and drift wildly; mandate true NDIR optical sensor (SenseAir S8). Calibrate outdoors at an open balcony on day 1. |
| **Dehumidifier (Walk-in Closet)** | [Sharp DW-P10M-W 10L](https://www.amazon.in/dp/B0BH2V48P6) (Plasmacluster ionizer, continuous drain, ₹21,450) / [Origin Novita ND 298 / ND 200 (10L–12L)](https://www.origindehumidifiers.com) (Semi-permanent ABS build, continuous hose port, pan-India service, ₹19,500) / [White Westinghouse / Kuhl 12L Compressor Dehumidifier](https://www.amazon.in) (Auto-humidistat, laundry mode, ₹17,990) | [Sharp DW-J20FM-W 20L Inverter](https://store.sharpappliances.in) (True HEPA + Carbon + Plasmacluster, 4.6L tank, ₹39,990) / [Origin Novita ND 328 (20L Heavy-Duty)](https://www.origindehumidifiers.com) (Rotary compressor, digital RH% control, ₹32,500) / [MeacoDry Arete One 20L Dehumidifier & HEPA Purifier](https://www.meaco.com) (UK-engineered whisper-quiet 38dB medical-grade H13 dehumidifier, ~₹42,000) | Plasmacluster and HEPA destroy airborne mold and mildew spores on leather shoes/jackets in monsoons; continuous gravity drain hose prevents premature tank auto-cutoff. |

---

## 2. Water Quality & Treatment Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Water Quality Testing** | [IHS Lab Hyderabad: General Potability Test (Borewell ₹2,400)](https://ihs.org.in/lab/wqt.html) / [Equinox Labs Basic Drinking Water IS 10500 Panel](https://www.equinoxlab.com) (Doorstep pickup, NABL accredited, ₹2,200) / [Vimta Labs Hyderabad Water Chemistry Panel](https://www.vimta.com) (Hardness, TDS, Iron, Chloride, ₹2,500) | [IHS Lab Full Physical + Chemical + Bacterial Panel](https://ihs.org.in/lab/wqt.html) (₹5,200) / [Eurofins / SGS India Comprehensive Heavy Metals & Pesticides Suite](https://www.eurofins.in) (ICP-MS trace metal analysis, ₹6,800) / [Vimta Labs Full IS 10500 Potability + Microbiological Assay](https://www.vimta.com) (₹5,500) | Sampling stagnant plumbing sediment skews test; run taps for 5 minutes before bottle collection to sample true high-rise reservoir chemistry. |
| **Water Softening & Scale Control** | [3M ScaleGard Pro / Polyphosphate Inline Dosing](https://www.3mindia.in) on Washer + Geysers + [WaterScience CLEO SFU-717 Shower Filters](https://www.waterscience.in) (₹12,500 total) / [AO Smith Water Softener Salt-Free Scale Reducer + RiverSoft Shower Filters](https://www.aosmithindia.com) (~₹10,500) / [3M AP420 / Scale Prevention Whole-Bathroom Inline Cartridge](https://www.3mindia.in) (Food-grade polyphosphate sequestering, ₹14,500) | [3M WFS-100 / SFT-150 Automatic Ion-Exchange Softener](https://www.3mindia.in) (Volumetric auto-regeneration valve, ~₹85,000–1,15,000) / [Pentair Fleck 5600SXT Digital Metered FRP Softener](https://www.pentair.com) (Industry-benchmark US piston valve, Purolite C100E food-grade resin, ~₹65,000) / [ZeroB AutoSoft AS2 / AS3 (Ion Exchange India)](https://www.zerobonline.com) (Automated brine draw, purple resin indicator, ~₹98,000) | Manual bathroom salt softeners (Kent 5.5L) become dead weight within 2 months due to tedious bucket regeneration; use zero-maintenance polyphosphate dosing for appliances or a fully automatic metered valve unit. |

---

## 3. Floor Robotics & Spot Care Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Robot Vacuum & Mop (Dining Vanity Bay)** | **Retain Owned iRobot Roomba Plus 505X** (₹0 / owned) + [Maxine 1500VA 230V-to-110V Heavy-Duty Step-Down Transformer](https://www.amazon.in) (~₹3,800 if dock evacuation motor is 110V-locked) / *(230V Upgrade Alt)* [Dreame L10s Ultra / L10s Pro Ultra Heat](https://www.amazon.in/dp/B0CYZ237GC) (7,000 Pa, hot water mop wash, ₹54,999–₹69,999) | [Dreame X40 Ultra](https://www.amazon.in/dp/B0GX5HFRHZ) (230V native, 12,000 Pa, MopExtend RoboSwing, 70°C mop wash, auto-detaching mops, ₹84,999–₹99,999) / [Roborock S8 MaxV Ultra / Qrevo Master](https://roborockindia.com) (10,000 Pa, FlexiArm edge mopping, RockDock Ultra, Matter support, ~₹1.15L–1.35L) / [Ecovacs Deebot X5 Pro Omni](https://ecovacsindia.in) (12,800 Pa, D-shape corner reach, 70°C hot mop wash, ₹89,999) | **Critical US-Relocation Gotcha:** While Roomba charging bricks support 100–240V, US auto-empty dock suction motors are 110V 1200W and fry instantly on 230V. Check dock label before plugging into Dining vanity socket; fill water tank strictly with RO water. |
| **Spot Cleaning (Owned)** | **Retain Owned Dyson V15 Detect Total Clean Extra** (₹0 / owned, Fluffy Optic laser head + Hair Screw tool + 3 spare HEPA filters) / [Kärcher WD 3 V-17/4/20 Wet & Dry Utility Vacuum](https://www.kaercher.com/in/) (For heavy balcony soil/water spills, ₹6,999) | [Dyson Gen5detect Absolute](https://www.dyson.in) (280 AW suction, Piezo dust counter, HEPA H13 0.1 micron, built-in crevice wand, ₹64,900) / [Miele Triflex HX2 Pro Cordless](https://www.miele.in) (German Vortex tech, dual VARTA removable batteries for 120-min runtime, ₹68,990) / [Dyson WashG1 Wet Floor Cleaner](https://www.dyson.in) (Counter-rotating microfiber rollers, solid/liquid separation, ₹64,900) | Continuous wall trickle-charging cooks lithium pouch cells in warm climates; unplug once battery reaches 100%. Wash cyclone pre-filter monthly and dry 24 hours. |