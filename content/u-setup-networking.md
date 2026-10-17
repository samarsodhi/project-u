---
title: "09 · Wi-Fi & Cabling"
aliases: [ networking-setup]
tags: [u-setup, networking]
status: evergreen
created: 2026-10-10
updated: 2026-10-17
---

[[u-setup-index]]

### §2 Networking and Wi-Fi

**Answer:** Retain the owned GL.iNet Flint 2 router (OpenWrt, multi-WAN failover). Run Cat6 UTP through dedicated conduits to three ceiling access-point (AP) positions before gypsum boarding. Fit **two APs at move-in** (Living and Dining); add the third in the Master suite only if Wi-Fi 5 GHz drops below 200 Mbps. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.**

#### Equipment & Infrastructure Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Ceiling Access Points ×2** | [TP-Link Omada EAP650](https://www.amazon.in/dp/B0B12R9CYH) (Ultra-slim Wi-Fi 6 AX3000, 160MHz HE160, ₹14,999 ea) / [Grandstream GWN7660 / GWN7664](https://www.grandstream.com) (Enterprise Wi-Fi 6, built-in controller with zero cloud/hardware key needed, ₹10,500–₹15,500 ea) / [TP-Link Omada EAP670](https://www.tp-link.com/in/) (AX5400 4×4 MIMO, 2.5GbE PoE+ port, ₹16,499 ea) | [Ubiquiti UniFi U6-Pro](https://ui.com) (Qualcomm 4×4 MIMO, 5.3 Gbps, enterprise 802.11r/k/v seamless roaming, ₹18,500 ea) / [Ubiquiti UniFi U7-Pro (Wi-Fi 7)](https://ui.com) (Tri-band 6GHz MLO, 2.5GbE uplink, ₹24,500 ea) / [Ruckus Unleashed R550 / Aruba Instant On AP25](https://www.hpe.com) (Patented BeamFlex+ antenna array, controller-less mesh, ~₹26,000 ea) | Mounting on walls instead of ceiling creates dead zones; Omada/UniFi cloud lock-in is avoided by running local Docker controller on Flint 2 or PC. |
| **PoE+ Switch** | [TP-Link LS105GP 5-Port Full Gigabit](https://www.amazon.in/dp/B0CHFFKF4F) (4 PoE+ ports, 65W budget, metal fanless, ₹3,049) / [Netgear GS305PP 5-Port PoE+ Unmanaged](https://www.netgear.com/in/) (83W total PoE budget, rugged steel chassis, ₹5,499) / [D-Link DGS-1008P 8-Port Gigabit PoE+](https://in.dlink.com) (68W budget, fanless, ₹5,200) | [TP-Link TL-SG2210P Omada JetStream Smart Managed](https://www.amazon.in/dp/B08J82F72P) (8 PoE+ + 2 SFP, 61W, 802.1Q IoT VLANs, fanless, ₹8,499) / [Ubiquiti UniFi Lite 8 PoE (USW-Lite-8-PoE)](https://ui.com) (4 PoE+ ports, 52W budget, layer-2 VLAN management, ₹11,500) / [Netgear GS308EPP 8-Port Smart Managed Plus PoE+](https://www.netgear.com/in/) (123W high-power budget, VLANs & QoS, ₹10,999) | High PoE draws overheat unventilated joinery niches; fanless unmanaged switches lack IoT VLAN segmentation if smart relays misbehave. |
| **Network Backup UPS** | [APC BX600C-IN 600VA](https://www.amazon.in/dp/B016XVRKZM) (Line-interactive, ₹3,599) / [Cuzor Pro 12V 3A + PoE Inline DC Mini-UPS Pair](https://www.cuzorlabs.com) (Zero transfer lag during DG switchover, 6-hr Li-ion runtime, ₹2,199 ea) / [Oakter / Resonate RouterUPS Pro](https://oakter.com) (Plug-and-play DC backup for ONT + Flint 2, ₹1,899) | [CyberPower CP1000EPFCLCD 1000VA](https://www.cyberpower.com/eu/en/product/sku/cp1000epfclcd) (Pure Sine Wave, active PFC, USB NUT monitoring, ₹12,990) / [APC Back-UPS Pro BR1000G-IN 1000VA/600W](https://www.se.com/in) (AVR voltage regulation, LCD runtime readout, ₹14,500) / [TalentCell / Custom 12V 24Ah LiFePO4 DC UPS Station](https://www.amazon.in) (2,000+ charge cycles, zero inverter conversion heat, ~₹9,500) | Stepped sine-wave AC UPS units hum and waste 30% battery in DC-AC-DC conversion; pairing a Pure Sine Wave UPS or inline DC LiFePO4 UPS prevents router reboots during DG cutover. |
| **Ethernet Cabling** | [D-Link Cat6 UTP Solid Bare Copper 305m](https://www.amazon.in/dp/B00939MYQ2) (23 AWG pure copper, ~₹50/m) / [Molex PowerCat 6 UTP LSZH (Low Smoke Zero Halogen)](https://www.molex.com) (Fire-safe non-toxic jacket, ~₹65/m) / [Finolex Cat6 23 AWG Solid Electrolytic Copper](https://www.finolex.com) (~₹48/m) | [CommScope / Systimax GigaSPEED XL Cat6 / Cat6A](https://www.commscope.com) (10 Gbps certified, 550MHz, ~₹95/m) / [Panduit TX6A 10Gig Shielded S/FTP LSZH](https://www.panduit.com) (Zero alien crosstalk, ~₹120/m) / [Belden 2412 / 10GX Cat6A Bonded-Pair](https://www.belden.com) (Maintains pair twist geometry around sharp conduit bends, ~₹130/m) | Electricians substituting cheap Copper-Clad Aluminum (CCA); CCA breaks under conduit pulling and melts under continuous PoE current. |
| **Primary Internet** | [ACT Fibernet 300–500 Mbps](https://www.actcorp.in/broadband/hyderabad) (Low latency routing in Kokapet/Financial District, ~₹1,050–1,500/mo) / [Airtel Xstream Fiber 300 Mbps](https://www.airtel.in) (Symmetric GPON, bridge-mode friendly ONT, ₹1,499/mo) / [JioFiber 300 Mbps](https://www.jio.com/fiber) (₹1,499/mo) | [Airtel Xstream Fiber 1 Gbps VIP](https://www.airtel.in) (Priority SLA, dedicatedGPON port, ~₹3,999/mo) / [ACT GIGA 1 Gbps Fibernet](https://www.actcorp.in/broadband/hyderabad) (1 Gbps wired throughput, 5TB FUP, ₹2,999/mo) / [Tata Play Fiber 1 Gbps (Where Available in Tower B)](https://www.tataplayfiber.com) (Uncontended backhaul, ₹3,600/mo) | Single-ISP downtime halts work-from-home; verify physical fibre drop into Tower B distribution frame before move-in and request ISP bridge mode on ONT to avoid Double-NAT on Flint 2. |
| **Backup Internet Line** | [Airtel / Jio 5G Mobile Hotspot Failover](https://www.airtel.in) (₹0 manual failover via phone USB-tethering or repeater mode on Flint 2) / [GL.iNet Beryl AX (Owned) as 5G Phone Tethering Bridge](https://www.gl-inet.com) (₹0) | [Airtel Xstream AirFiber / Jio AirFiber 5G External ODU](https://www.jio.com) (Dedicated 2nd WAN on Flint 2 with roof/balcony 5G receiver, ~₹599–₹799/mo) / [Secondary Wired ISP (Airtel 100 Mbps if ACT is Primary)](https://www.airtel.in) (True diverse fiber path into Flint 2 WAN2, ₹799/mo) / [TP-Link Archer NX200 5G CPE Router (Bridge Mode to WAN2)](https://www.tp-link.com/in/) (Takes any 5G SIM, external antenna ports, ₹21,999) | 5G signal attenuates severely inside floor 42 double-glazed low-E windows; diverse dual-fiber (ACT + Airtel) on Flint 2 dual-WAN gives <1s automatic failover without RF drop. |

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