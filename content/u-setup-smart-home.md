---
title: "08 · Smart Home & Fans"
aliases: [ smart-home-setup]
tags: [u-setup, smart-home]
status: evergreen
created: 2026-10-10
updated: 2026-10-16
---

[[u-setup-index]]

### §1 Smart home and smart switches

**Answer:** Hybrid relay architecture behind existing builder switch plates. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.** Critical high-reliability circuits (Kitchen, Living, Master Bedroom, Study) use local-first Shelly Gen3 relays (ESP32-S3, power monitoring, persistent state across power outages). Non-critical circuits use Sonoff MINIR4M Matter-over-Wi-Fi relays (₹618 ea). Alexa controls the ecosystem over Matter/Thread via an Echo Dot Max in the Living space.

#### Smart Home Hardware Matrix

| Need                                     | Tier 1: High-Quality VFM                                                                                              | Tier 2: High-Quality Unconstrained                                                                                      | Top Failure Mode & Reddit Insight                                                                                                                                    |
| :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Critical Relays (Kitchen/Living/Bed)** | [Shelly 1 Gen3](https://www.shelly.com/products/shelly-1-gen3) (16A, ESP32-S3, dry contact, power monitoring, ~₹2,200 ea)  | [Wozart WSCM01 Matter-over-Thread](https://wozart.com) (Dual-channel, zero-latency Thread mesh, ₹3,999 ea)              | Frequent Indian power cuts scramble state on cheap Wi-Fi relays; Shelly remembers last state natively. Shallow 25mm backboxes crush relays; mandate 43mm-deep boxes. |
| **Non-Critical Relays (Balcony/Store)**  | [Sonoff MINIR4M Matter-over-Wi-Fi](https://www.sonoff.in/shop) (Matter 1.3, detachable switch, ₹618 ea)               | [Shelly Plus 1 Mini Gen3](https://www.shelly.com/products/shelly-plus-1-mini) (Ultra-compact 8A, Wi-Fi+BLE, ~₹1,850 ea)                            | Matter-over-Wi-Fi drops on busy router channels; lock 2.4 GHz to channels 1, 6, or 11. Never place on geyser/HVAC circuits (16A+ continuous loads).                  |
| **No-Neutral Switch Boards**             | [Sonoff ZBMINI-L2 Zigbee 3.0](https://www.sonoff.in/shop) (No neutral required, ₹1,034 ea)                            | [Aqara Single Switch Module T1 No-Neutral](https://in.modo.store) (Zigbee 3.0, overload protection, ₹2,800 ea)          | No-neutral relays leak micro-current through low-wattage LED downlights causing ghost flickering; fit bypass capacitor across load.                                  |
| **Phase Dimming (Art Spots / Pendants)** | [Sonoff MINI-DIM Trailing-Edge](https://www.sonoff.in/shop) (Trailing edge, 200W, ₹3,539 ea)                          | [Shelly Dimmer 2](https://www.shelly.com/products/shelly-dimmer-2) (Leading/trailing edge auto-detect, calibration, ₹3,990 ea)                  | Non-dimmable LED drivers buzz loudly or strobe below 30%; ensure Homz fits dimmable constant-current drivers.                                                        |
| **Voice & Border Controller (Living)**   | [Amazon Echo Dot Max (2nd Gen)](https://www.amazon.in/dp/B0DKLJ1PSF) (Matter + Thread + Zigbee border router, ₹8,999) | [Home Assistant Green + SkyConnect ZBT-1](https://www.home-assistant.io) (Local-first, zero-cloud dependency, ~₹16,500) | Cloud outage disables voice commands; local wall switches retain 100% mechanical bypass functionality.                                                               |
| **Kitchen Smart Display**                | [Amazon Echo Show 8 (2025)](https://www.amazon.in/dp/B0DYBPWQNZ) (Camera shutter, spatial audio, ₹24,499)             | [Apple iPad 10.9" Dedicated Wall Mount](https://www.apple.com/in) (HomeKit + Home Assistant dashboard, ~₹42,000)        | Camera privacy concerns; keep physical shutter closed. Wall tablets suffer lithium battery swelling if charged continuously.                                         |
| **Secondary Voice (Study)**              | [Amazon Echo Dot 5th Gen](https://www.amazon.in/dp/B09B8XJDW5) (Compact, tap gesture, ₹4,499)                         | [Amazon Echo Studio](https://www.amazon.in/dp/B07G9Y3ZMC) (Hi-res audio, spatial 3D, ₹22,999)                           | Mute during sensitive client calls; owner rule: no microphones in Master, BR-02, or BR-03 prayer room.                                                               |
| **Sensor Hub (Curtain & Safety)**        | [Aqara Hub M2](https://in.modo.store/products/aqara-hub-m2) (Zigbee 3.0, IR blaster, Ethernet, ₹7,400)                | [Aqara Hub M3](https://in.modo.store) (Matter controller, local automation engine, Thread, ₹14,999)                     | Wi-Fi hub disconnects during router reboot; plug Aqara M2 directly via Ethernet to Flint 2 LAN.                                                                      |
| **Video Doorbell**                       | [Tapo D230S1 Battery + H200 Chime](https://www.amazon.in/dp/B0C8BFXFN6) (2K 5MP, color night vision, ₹9,699)          | [Ring Video Doorbell Plus](https://www.amazon.in) (Head-to-toe 1536p, quick-release battery, ₹18,999)                   | High-rise floor 42 corridor wind triggers false PIR events; configure activity zones and low PIR sensitivity.                                                        |
| **Ceiling Fans (BLDC Smart)**             | [atomberg Renesa Smart+ BLDC (1200mm / 900mm)](https://www.amazon.in/dp/B0DV5CT8NH) (Alexa/Wi-Fi, 28W, RF remote + app, ~₹4,499 ea) | [Orient Aeroslim Smart / Haiku L-Series](https://www.orientelectric.com) (Aerodynamic aerofoil, integrated LED, ~₹11,990–38,000)   | Bypassing analog wall regulators is non-negotiable (chopped voltage fries BLDC inverter PCBs); unprotected grid surges cause 3-yr capacitor failure (requires DB Type 2 SPD); downrods must be sized to finished gypsum drop to avoid 2.1m head-strike; keep blades ≥600mm clear of recessed LED cones to prevent strobe flicker. |

---

### BLDC Ceiling Fan Specifications & Siting Rules (Designer & Reddit Standard)
Single-source specification across all rooms and common zones:
* **Electrical & Regulator Protocol:**
  * **Zero Analog Regulators:** Conventional rheostat wall regulators must be completely bypassed in the switchboard. BLDC electronics require constant 230V; feeding chopped voltage from an analog dial destroys the internal inverter PCB.
  * **Wall Control:** Wire fan power through a standard mechanical toggle switch or Sonoff relay for hard power cuts; daily speed control runs via Alexa or RF remote.
* **Structural Anchoring & Vibration Isolation:**
  * Never hang fans from false ceiling gypsum or GI framing. Anchor downrods directly to the RCC slab J-hook via heavy-duty MS extensions.
  * Fit a dense rubber isolation grommet at the hook shackle to prevent motor vibration from reverberating through the false ceiling cavity as a drum echo.
* **False Ceiling Clearances & Anti-Strobe Rules:**
  * **Height:** Maintain 2.45–2.60 m finished floor-to-blade clearance. Size downrods specifically to finished false ceiling drop (standard 12-inch downrods hang too low in lowered ceilings; 150–200 mm custom downrods typically required).
  * **Top Clearance:** Maintain $\ge 250\text{ mm}$ clearance between blades and false ceiling face to avoid air starvation and low air delivery (CMM).
  * **Anti-Strobe Lighting Gate:** Maintain $\ge 600\text{ mm}$ horizontal distance between fan blade tips and any recessed LED downlight cone. Never position ceiling downlights above or within blade sweep radius.
* **Room-by-Room Sizing & Placement:**
  * **Kitchen & Utility (900 mm sweep):** Position over prep counter / sink zone. Strictly offset from the hob/chimney axis to prevent turbulent flame flicker and chimney suction disturbance. Specify smooth non-ribbed, easy-wipe polyurethane blades to resist cooking oil vapor.
  * **Dining Area (1200 mm sweep):** Offset from the center of dining table if hanging a statement pendant; or align on a separate lighting circuit so fan does not cause pendant swaying or rapid cooling of hot food.
  * **Drawing & Living Rooms (1200 mm sweep):** Symmetrical placement centered on main seating conversational axis.
  * **Bedrooms (Master, BR-01, BR-02, BR-03 - 1200 mm sweep):** Whisper-quiet $<32\text{ dB}$ operation centered over bed mattress footprint.
* **High-Value Operational Safeguards (Reddit Field Wisdom):**
  * **DB-Level Surge Protection:** Fit a Type 2 40kA Surge Protection Device (SPD) at the primary distribution board; this single ₹3,500 investment protects all 7 BLDC inverter PCBs against Indian grid transients and the dreaded 3-year board blowout.
  * **Wall Cradles for Remotes:** Mount magnetic wall cradles at 1.2 m switchboard height in every room; prevents misplaced remotes and liquid spill damage. Atomberg remotes are cross-compatible; keep one spare in utility.
  * **Kitchen Interlock Rule:** Never run the kitchen ceiling fan during active frying or tadka; turbulent cross-drafts disrupt chimney suction and disperse aerosolized grease onto overhead cabinets.
  * **Quarterly Micro-Balance Cleaning:** Wipe leading blade edges quarterly with dry microfiber. Atmospheric dust on high-RPM aerodynamic blades causes rotational unbalance and premature motor bearing hum.

---

### Local-First Survivability & Offline Architecture
* **Shelly 1 Gen3:** Functions 100% offline via wall switch and local LAN HTTP/MQTT API. Remembers state across Indian grid outages.
* **Sonoff MINIR4M:** Physical wall switch operates mechanically even if Wi-Fi crashes; Matter controls operate via local LAN without eWeLink cloud.
* **Aqara M2 + Sensors:** 85 dB local siren triggers autonomously on water leak or gas detection without internet.
* **Tapo Doorbell:** Indoor H200 chime rings locally via sub-1GHz radio; stores events to local microSD.

### Electrical Pre-Wire & Site Requirements (Homz Scope)
* **Backbox Depth:** Mandate **43 mm deep GI concealed switch boxes** across all rooms. Standard 25 mm shallow builder boxes cannot house relays behind mechanical plates.
* **Neutral Wire & RCCB Loop Isolation:** Pull a certified neutral wire to every switch gang from that exact room's MCB circuit. Never borrow a neutral from an adjacent room or lighting loop, or the 30mA RCCB will nuisance-trip immediately.
* **Conduit Infrastructure:** 20 mm dedicated PVC conduits from switch boxes to distribution board to facilitate future wire pulls.
* **Surge Protection:** Equip primary distribution board with Type 2 SPD (Surge Protection Device) to safeguard sensitive micro-relays from grid spikes.

**Skip List:** Brand-locked proprietary touch panels (Schneider Wiser, Legrand Myrius, Havells), Tuya Wi-Fi glass switches, European round backboxes, Z-Wave hardware.

**Detail →** [[u-setup-bom-detail]] · [[u-setup-networking]]