---
title: "Wi-Fi & Internet"
aliases: [u-setup- networking-setup,  u-networking]
tags: [u-setup, networking, wifi]
status: evergreen
created: 2026-10-10
updated: 2026-10-17
---

[[index|← Back to Home Overview]]

# Structured Cabling, Low-Voltage Infrastructure & Wi-Fi

Master technical specification for whole-home low-voltage data infrastructure: GL.iNet Flint 2 router (OpenWrt, dual-WAN failover), 3 ceiling PoE access points (deploying 2 at move-in), pure copper Cat6 home runs, and battery backup.

---

## Equipment & Infrastructure Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Ceiling Access Points ×2** | [TP-Link Omada EAP650](https://www.amazon.in/dp/B0B12R9CYH) (Ultra-slim Wi-Fi 6 AX3000, 160MHz HE160, ₹14,999 ea) / [Grandstream GWN7660 / GWN7664](https://www.amazon.in/s?k=Grandstream+GWN7660) (Enterprise Wi-Fi 6, built-in controller with zero cloud/hardware key needed, ₹10,500–₹15,500 ea) / [TP-Link Omada EAP670](https://www.amazon.in/s?k=TP-Link+Omada+EAP670) (AX5400 4×4 MIMO, 2.5GbE PoE+ port, ₹16,499 ea) | [Ubiquiti UniFi U6-Pro](https://www.amazon.in/s?k=Ubiquiti+UniFi+U6-Pro) (Qualcomm 4×4 MIMO, 5.3 Gbps, enterprise 802.11r/k/v seamless roaming, ₹18,500 ea) / [Ubiquiti UniFi U7-Pro (Wi-Fi 7)](https://www.amazon.in/s?k=Ubiquiti+UniFi+U7-Pro) (Tri-band 6GHz MLO, 2.5GbE uplink, ₹24,500 ea) / [Ruckus Unleashed R550 / Aruba Instant On AP25](https://www.amazon.in/s?k=Ruckus+Unleashed+R550) (Patented BeamFlex+ antenna array, controller-less mesh, ~₹26,000 ea) | Mounting on walls instead of ceiling creates dead zones; Omada/UniFi cloud lock-in is avoided by running local Docker controller on Flint 2 or PC. |
| **PoE+ Switch** | [TP-Link LS105GP 5-Port Full Gigabit](https://www.amazon.in/dp/B0CHFFKF4F) (4 PoE+ ports, 65W budget, metal fanless, ₹3,049) / [Netgear GS305PP 5-Port PoE+ Unmanaged](https://www.amazon.in/s?k=Netgear+GS305PP+5-Port+PoE%2B+Unmanaged) (83W total PoE budget, rugged steel chassis, ₹5,499) / [D-Link DGS-1008P 8-Port Gigabit PoE+](https://www.amazon.in/s?k=D-Link+DGS-1008P+8-Port+Gigabit+PoE%2B) (68W budget, fanless, ₹5,200) | [TP-Link TL-SG2210P Omada JetStream Smart Managed](https://www.amazon.in/dp/B08J82F72P) (8 PoE+ + 2 SFP, 61W, 802.1Q IoT VLANs, fanless, ₹8,499) / [Ubiquiti UniFi Lite 8 PoE (USW-Lite-8-PoE)](https://www.amazon.in/s?k=Ubiquiti+UniFi+Lite+8+PoE) (4 PoE+ ports, 52W budget, layer-2 VLAN management, ₹11,500) / [Netgear GS308EPP 8-Port Smart Managed Plus PoE+](https://www.amazon.in/s?k=Netgear+GS308EPP+8-Port+Smart+Managed+Plus+PoE%2B) (123W high-power budget, VLANs & QoS, ₹10,999) | High PoE draws overheat unventilated joinery niches; fanless unmanaged switches lack IoT VLAN segmentation if smart relays misbehave. |
| **Network Backup UPS** | [APC BX600C-IN 600VA](https://www.amazon.in/dp/B016XVRKZM) (Line-interactive, ₹3,599) / [Cuzor Pro 12V 3A + PoE Inline DC Mini-UPS Pair](https://www.amazon.in/s?k=Cuzor+Pro+12V+3A+%2B+PoE+Inline+DC+Mini-UPS+Pair) (Zero transfer lag during DG switchover, 6-hr Li-ion runtime, ₹2,199 ea) / [Oakter / Resonate RouterUPS Pro](https://www.amazon.in/s?k=Oakter) (Plug-and-play DC backup for ONT + Flint 2, ₹1,899) | [CyberPower CP1000EPFCLCD 1000VA](https://www.cyberpower.com/eu/en/product/sku/cp1000epfclcd) (Pure Sine Wave, active PFC, USB NUT monitoring, ₹12,990) / [APC Back-UPS Pro BR1000G-IN 1000VA/600W](https://www.amazon.in/s?k=APC+Back-UPS+Pro+BR1000G-IN+1000VA) (AVR voltage regulation, LCD runtime readout, ₹14,500) / [TalentCell / Custom 12V 24Ah LiFePO4 DC UPS Station](https://www.amazon.in/s?k=TalentCell) (2,000+ charge cycles, zero inverter conversion heat, ~₹9,500) | Stepped sine-wave AC UPS units hum and waste 30% battery in DC-AC-DC conversion; pairing a Pure Sine Wave UPS or inline DC LiFePO4 UPS prevents router reboots during DG cutover. |
| **Ethernet Cabling** | [D-Link Cat6 UTP Solid Bare Copper 305m](https://www.amazon.in/dp/B00939MYQ2) (23 AWG pure copper, ~₹50/m) / [Molex PowerCat 6 UTP LSZH (Low Smoke Zero Halogen)](https://www.amazon.in/s?k=Molex+PowerCat+6+UTP+LSZH) (Fire-safe non-toxic jacket, ~₹65/m) / [Finolex Cat6 23 AWG Solid Electrolytic Copper](https://www.amazon.in/s?k=Finolex+Cat6+23+AWG+Electrolytic+Copper) (~₹48/m) | [CommScope / Systimax GigaSPEED XL Cat6 / Cat6A](https://www.amazon.in/s?k=CommScope) (10 Gbps certified, 550MHz, ~₹95/m) / [Panduit TX6A 10Gig Shielded S/FTP LSZH](https://www.amazon.in/s?k=Panduit+TX6A+10Gig+Shielded+S) (Zero alien crosstalk, ~₹120/m) / [Belden 2412 / 10GX Cat6A Bonded-Pair](https://www.amazon.in/s?k=Belden+2412) (Maintains pair twist geometry around sharp conduit bends, ~₹130/m) | Electricians substituting cheap Copper-Clad Aluminum (CCA); CCA breaks under conduit pulling and melts under continuous PoE current. |
| **Primary Internet** | [ACT Fibernet 300–500 Mbps](https://www.amazon.in/s?k=ACT+Fibernet+300%E2%80%93500+Mbps) (Low latency routing in Kokapet/Financial District, ~₹1,050–1,500/mo) / [Airtel Xstream Fiber 300 Mbps](https://www.amazon.in/s?k=Airtel+Xstream+Fiber+300+Mbps) (Symmetric GPON, bridge-mode friendly ONT, ₹1,499/mo) / [JioFiber 300 Mbps](https://www.amazon.in/s?k=JioFiber+300+Mbps) (₹1,499/mo) | [Airtel Xstream Fiber 1 Gbps VIP](https://www.amazon.in/s?k=Airtel+Xstream+Fiber+1+Gbps+VIP) (Priority SLA, dedicated GPON port, ~₹3,999/mo) / [ACT GIGA 1 Gbps Fibernet](https://www.amazon.in/s?k=ACT+GIGA+1+Gbps+Fibernet) (1 Gbps wired throughput, 5TB FUP, ₹2,999/mo) / [Tata Play Fiber 1 Gbps (Where Available in Tower B)](https://www.amazon.in/s?k=Tata+Play+Fiber+1+Gbps) (Uncontended backhaul, ₹3,600/mo) | Single-ISP downtime halts work-from-home; verify physical fibre drop into Tower B distribution frame before move-in and request ISP bridge mode on ONT to avoid Double-NAT on Flint 2. |
| **Backup Internet Line** | [Airtel / Jio 5G Mobile Hotspot Failover](https://www.amazon.in/s?k=Airtel) (₹0 manual failover via phone USB-tethering or repeater mode on Flint 2) / [GL.iNet Beryl AX (Owned) as 5G Phone Tethering Bridge](https://www.amazon.in/s?k=GL.iNet+Beryl+AX+as+5G+Phone+Tethering+Bridge) (₹0) | [Airtel Xstream AirFiber / Jio AirFiber 5G External ODU](https://www.amazon.in/s?k=Airtel+Xstream+AirFiber) (Dedicated 2nd WAN on Flint 2 with roof/balcony 5G receiver, ~₹599–₹799/mo) / [Secondary Wired ISP (Airtel 100 Mbps if ACT is Primary)](https://www.amazon.in/s?k=Secondary+Wired+ISP) (True diverse fiber path into Flint 2 WAN2, ₹799/mo) / [TP-Link Archer NX200 5G CPE Router (Bridge Mode to WAN2)](https://www.amazon.in/s?k=TP-Link+Archer+NX200+5G+CPE+Router) (Takes any 5G SIM, external antenna ports, ₹21,999) | 5G signal attenuates severely inside floor 42 double-glazed low-E windows; diverse dual-fiber (ACT + Airtel) on Flint 2 dual-WAN gives <1s automatic failover without RF drop. |

---

## Port Map & Deployment Architecture

### 1. Hardware Port Mapping (Fibre Entry Shelf)
* **Flint 2 Router (GL-MT6000):**
  * *WAN 1 (2.5 GbE):* ACT Fibernet GPON ONT.
  * *WAN 2 (2.5 GbE):* Secondary backup line (auto-failover in OpenWrt multi-WAN).
  * *LAN 1 (GbE):* Uplink to PoE+ Switch.
* **PoE+ Switch (LS105GP):**
  * *Port 1:* Uplink from Flint 2 LAN.
  * *Port 2 (PoE+):* AP-1 Ceiling Run (Living/Drawing space).
  * *Port 3 (PoE+):* AP-2 Ceiling Run (Dining/Corridor space).
  * *Port 4 (PoE+):* AP-3 Ceiling Run (Master Suite — terminate cable now, fit AP only if speed < 200 Mbps).

### 2. Pre-Boarding Quality Checklist
* **Conduit Separation:** Ensure Cat6 network conduit maintains $\ge 200\text{ mm}$ physical separation from high-voltage 230V AC conduits to eliminate EMI induced packet drops.
* **Fire Code Clearance:** Ceiling APs must sit $\ge 500\text{ mm}$ away from fire sprinkler heads and HVAC return grilles.
* **8-Pin Gigabit Verification:** Builders often punch only 4 of the 8 pins (limiting speeds to 100 Mbps). Test each room jack with an 8-LED network tester to confirm 1000 Mbps Gigabit continuity. Verify cable jacket text reads pure copper Cat6.