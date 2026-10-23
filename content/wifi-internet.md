---
title: "Wi-Fi & Internet"
aliases: [u-setup-networking, networking-setup, networking, u-networking]
tags: [u-setup, networking, wifi]
status: evergreen
created: 2026-10-10
updated: 2026-10-23
---

[[index|← Back to Home Overview]]

# Wi-Fi & Internet

Master technical specification for whole-home low-voltage data infrastructure: GL.iNet Flint 2 router (OpenWrt, dual-WAN failover), 3 ceiling PoE access points (deploying 2 at move-in), pure copper Cat6 home runs, and battery backup.

---

## Equipment & Infrastructure Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Ceiling Access Points ×2** | **[Recommended]** [Grandstream GWN7660 / GWN7664](https://www.google.com/search?q=Grandstream+GWN7660) (Enterprise Wi-Fi 6, embedded local master controller for controller-less 802.11k/v/r fast roaming, ₹10,500–₹15,500 ea) / [TP-Link Omada EAP650](https://www.amazon.in/dp/B0B12R9CYH) (AX3000, ₹14,999 ea + mandatory [OC200 Controller](https://www.amazon.in/dp/B07GX6G87S) ₹7,499 for fast roaming) | **[Recommended]** [Ubiquiti UniFi U6-Pro](https://www.google.com/search?q=Ubiquiti+UniFi+U6-Pro) (Fanless Qualcomm 4×4 MIMO, 5.3 Gbps, bulletproof 2.4GHz IoT stability, ₹18,500 ea) | EAP650 disables 802.11k/v/r fast roaming in standalone mode (causes sticky clients unless OC200/Docker controller runs 24/7); GWN7660 embeds a local master controller inside the AP. Prefer fanless U6-Pro over U7-Pro for 2.4GHz smart-home IoT stability. |
| **PoE+ Switch** | **[Recommended]** [TP-Link LS105GP 5-Port Full Gigabit](https://www.amazon.in/dp/B0CHFFKF4F) (4 PoE+ ports, 65W budget, metal fanless, ₹3,049) / [Netgear GS305PP 5-Port PoE+ Unmanaged](https://www.google.com/search?q=Netgear+GS305PP+5-Port+PoE%2B+Unmanaged) (83W total PoE budget, ₹5,499) | **[Recommended]** [Ubiquiti UniFi Lite 8 PoE (USW-Lite-8-PoE)](https://www.google.com/search?q=Ubiquiti+UniFi+Lite+8+PoE) (4 PoE+ ports, 52W budget, unified layer-2 VLAN plane with U6-Pro, ₹11,500) / [TP-Link TL-SG2210P Omada Smart Managed](https://www.amazon.in/dp/B08J82F72P) (Pair only if selecting Omada EAP650 APs, ₹8,499) | Do not mix UniFi APs with an Omada managed switch (forces split-brain management UIs). Match switch ecosystem to AP vendor or use an unmanaged fanless PoE+ switch behind Flint 2 OpenWrt VLANs. |
| **Network Backup UPS** | [APC BX600C-IN 600VA](https://www.amazon.in/dp/B016XVRKZM) (Line-interactive, ₹3,599) / **[Recommended]** [Cuzor Pro 12V 3A + PoE Inline DC Mini-UPS Pair](https://www.google.com/search?q=Cuzor+Pro+12V+3A+%2B+PoE+Inline+DC+Mini-UPS+Pair) (Zero transfer lag during DG switchover, 6-hr Li-ion runtime, ₹2,199 ea) | [CyberPower CP1000EPFCLCD 1000VA](https://www.cyberpower.com/eu/en/product/sku/cp1000epfclcd) (Pure Sine Wave, active PFC, USB NUT monitoring, ₹12,990) / [APC Back-UPS Pro BR1000G-IN 1000VA/600W](https://www.google.com/search?q=APC+Back-UPS+Pro+BR1000G-IN+1000VA) (AVR voltage regulation, LCD runtime readout, ₹14,500) | Stepped sine-wave AC UPS units hum and waste 30% battery in DC-AC-DC conversion; pairing a Pure Sine Wave UPS or inline DC LiFePO4 UPS prevents router reboots during DG cutover. |
| **Ethernet Cabling** | **[Recommended]** [D-Link Cat6 UTP Solid Bare Copper 305m](https://www.amazon.in/dp/B00939MYQ2) (23 AWG pure copper, ~₹50/m) / [Molex PowerCat 6 UTP LSZH (Low Smoke Zero Halogen)](https://www.google.com/search?q=Molex+PowerCat+6+UTP+LSZH) (Fire-safe non-toxic jacket, ~₹65/m) | [CommScope / Systimax GigaSPEED XL Cat6 / Cat6A](https://www.google.com/search?q=CommScope+%2F+Systimax+GigaSPEED+XL+Cat6+%2F+Cat6A) (10 Gbps certified, 550MHz, ~₹95/m) / [Panduit TX6A 10Gig Shielded S/FTP LSZH](https://www.google.com/search?q=Panduit+TX6A+10Gig+Shielded+S) (Zero alien crosstalk, ~₹120/m) | Electricians substituting cheap Copper-Clad Aluminum (CCA); CCA breaks under conduit pulling and melts under continuous PoE current. |
| **Primary Internet** | **[Recommended]** [ACT Fibernet 300–500 Mbps](https://www.google.com/search?q=ACT+Fibernet+300%E2%80%93500+Mbps) (Low latency routing in Kokapet/Financial District, ~₹1,050–1,500/mo) / [Airtel Xstream Fiber 300 Mbps](https://www.google.com/search?q=Airtel+Xstream+Fiber+300+Mbps) (Symmetric GPON, bridge-mode friendly ONT, ₹1,499/mo) | [Airtel Xstream Fiber 1 Gbps VIP](https://www.google.com/search?q=Airtel+Xstream+Fiber+1+Gbps+VIP) (Priority SLA, dedicated GPON port, ~₹3,999/mo) / [ACT GIGA 1 Gbps Fibernet](https://www.google.com/search?q=ACT+GIGA+1+Gbps+Fibernet) (1 Gbps wired throughput, 5TB FUP, ₹2,999/mo) | Single-ISP downtime halts work-from-home; verify physical fibre drop into Tower B distribution frame before move-in and request ISP bridge mode on ONT to avoid Double-NAT on Flint 2. |
| **Backup Internet Line** | [Airtel / Jio 5G Mobile Hotspot Failover](https://www.google.com/search?q=Airtel+%2F+Jio+5G+Mobile+Hotspot+Failover) (₹0 manual failover via phone USB-tethering or repeater mode on Flint 2) / [GL.iNet Beryl AX (Owned) as 5G Phone Tethering Bridge](https://www.google.com/search?q=GL.iNet+Beryl+AX+as+5G+Phone+Tethering+Bridge) (₹0) | **[Recommended]** [Secondary Wired ISP (Airtel 100 Mbps if ACT is Primary)](https://www.google.com/search?q=Secondary+Wired+ISP) (True diverse fiber path into Flint 2 WAN2, ₹799/mo) / [Airtel Xstream AirFiber / Jio AirFiber 5G External ODU](https://www.google.com/search?q=Airtel+Xstream+AirFiber) (Dedicated 2nd WAN on Flint 2 with roof/balcony 5G receiver, ~₹599–₹799/mo) | 5G signal attenuates severely inside floor 42 double-glazed low-E windows; diverse dual-fiber (ACT + Airtel) on Flint 2 dual-WAN gives <1s automatic failover without manual tethering. |

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