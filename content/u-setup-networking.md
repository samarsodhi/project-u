---
title: "09 · Wi-Fi & Cabling"
aliases: [ networking-setup]
tags: [u-setup, networking]
status: evergreen
created: 2026-10-10
updated: 2026-10-14
---

[[u-setup-index]]

### §2 Networking and Wi-Fi

**Answer:** Retain the owned GL.iNet Flint 2 router (OpenWrt, multi-WAN failover). Run Cat6 UTP through dedicated conduits to three ceiling access-point (AP) positions before gypsum boarding. Fit **two APs at move-in** (Living and Dining); add the third in the Master suite only if Wi-Fi 5 GHz drops below 200 Mbps. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.**

#### Equipment & Infrastructure Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Ceiling Access Points ×2** | [TP-Link Omada EAP650](https://www.amazon.in/dp/B0B12R9CYH) (Wi-Fi 6 AX3000, 160MHz, ₹14,999 ea) | [Ubiquiti UniFi U6-Pro](https://ui.com) (4×4 MIMO, enterprise roaming, ₹18,500 ea) | Mounting on walls instead of ceiling creates dead zones; Omada cloud controller lock-in avoided by running software controller on Flint 2 / PC. |
| **PoE+ Switch** | [TP-Link LS105GP 5-Port](https://www.amazon.in/dp/B0CHFFKF4F) (4 PoE+ ports, 65W budget, fanless, ₹3,049) | [TP-Link TL-SG2210P Omada Managed](https://www.amazon.in/dp/B08J82F72P) (8 PoE+ + 2 SFP, 61W, 802.1Q VLANs, ₹8,499) | High PoE draws overheat unventilated joinery niches; fanless unmanaged switches lack IoT VLAN segmentation if smart relays misbehave. |
| **Network Backup UPS** | [APC BX600C-IN 600VA](https://www.amazon.in/dp/B016XVRKZM) (Line-interactive, ₹3,599) | [CyberPower CP1000EPFCLCD 1000VA](https://www.cyberpower.com/eu/en/product/sku/cp1000epfclcd) (Pure Sine Wave, USB monitoring, ₹12,990) | Stepped sine-wave UPS hums under inductive router power bricks; lead-acid battery degrades in 24 months in unvented network cabinet. |
| **Ethernet Cabling** | [D-Link Cat6 UTP Solid Bare Copper 305m](https://www.amazon.in/dp/B00939MYQ2) (23 AWG, ~₹50/m) | [Panduit / CommScope Cat6A Shielded S/FTP](https://www.panduit.com) (10 Gbps certified, ~₹120/m) | Electricians substituting cheap Copper-Clad Aluminum (CCA); CCA breaks under conduit pulling and melts under continuous PoE current. |
| **Primary Internet** | [ACT Fibernet 300–500 Mbps](https://www.actcorp.in/broadband/hyderabad) (~₹1,050–1,500/mo) | [Airtel Xstream Fiber 1 Gbps VIP](https://www.airtel.in) (~₹3,999/mo) | Single-ISP downtime halts work-from-home; verify physical fibre drop into Tower B distribution frame before move-in. |
| **Backup Internet Line** | [Airtel / Jio 5G Mobile Hotspot Failover](https://www.airtel.in) (₹0 manual failover via phone) | [Jio AirFiber / Airtel 5G External ODU](https://www.jio.com) (Dedicated 2nd WAN on Flint 2, ~₹799/mo) | 5G signal attenuates severely inside floor 42 double-glazed low-E windows; test indoor 5G reception before paying outdoor ODU deposit. |

---

### Port Map & Deployment Architecture

#### 1. Hardware Port Mapping (Fibre Entry Shelf)
* **Flint 2 Router (GL-MT6000):**
  * *WAN 1 (2.5 GbE):* ACT Fibernet GPON ONT.
  * *WAN 2 (2.5 GbE):* Secondary 5G backup line (auto-failover in OpenWrt multi-WAN).
  * *LAN 1 (GbE):* Uplink to PoE+ Switch.
* **PoE+ Switch (LS105GP):**
  * *Port 1:* Uplink from Flint 2 LAN.
  * *Port 2 (PoE+):* AP-1 Ceiling Run (Living/Drawing space).
  * *Port 3 (PoE+):* AP-2 Ceiling Run (Dining/Corridor space).
  * *Port 4 (PoE+):* AP-3 Ceiling Run (Master Suite — terminate cable now, fit AP only if speed < 200 Mbps).
  * *Power Consumption:* ~31 W total PoE draw against 65 W budget (52% safety headroom).

#### 2. Cross-Protocol Smart Home Coexistence
* **2.4 GHz Spectrum Isolation:**
  * Dedicate a single unhidden SSID for all 21 Sonoff Matter/Wi-Fi relays (MINIR4M + MINI-DIM).
  * Pin the 2.4 GHz channel permanently to Channel 1, 6, or 11 (20 MHz channel width only) to avoid Bluetooth/Zigbee overlapping.
* **Thread & Zigbee Mesh:**
  * Alexa Echo Dot Max acts as primary Thread border router.
  * Aqara Hub M2 handles offline Zigbee child devices independently of Wi-Fi router reboots.

#### 3. Site Touchpoints & Pre-Boarding Protocol
* **Builder In-Wall Cabling & Panasonic Plates:** Unit B4206 features pre-installed **Panasonic Vision / Roma modular plates** with dual RJ-45 and coaxial TV ports in every room. All drops home-run to the central telecom enclosure near the main distribution board.
* **Conduit Separation:** Ensure Cat6 network conduit maintains $\ge 200\text{ mm}$ physical separation from high-voltage 230V AC electrical conduits to eliminate EMI induced packet drops.
* **Fire Code Clearance:** Ceiling APs must sit $\ge 500\text{ mm}$ away from fire sprinkler heads and HVAC return grilles.
* **8-Pin Gigabit Verification:** Builders often punch only 4 of the 8 pins (limiting speeds to 100 Mbps). Test each room jack with an 8-LED network tester to confirm 1000 Mbps Gigabit continuity. Verify cable jacket text reads pure copper Cat6.

**Skip List:** Wi-Fi 6E/7 consumer mesh pods (Deco/Orbi without Ethernet backhaul), powerline adapters, 19" enclosed server racks in utility.

**Detail →** [[u-setup-bom-detail]] · [[u-setup-smart-home]]