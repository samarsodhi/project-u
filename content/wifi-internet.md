---
title: "Wi-Fi & Internet"
aliases: [u-setup-networking, networking-setup, networking, u-networking]
tags: [u-setup, networking, wifi]
status: evergreen
created: 2026-10-10
updated: 2026-10-24
---

[[index|← Back to Home Overview]]

# Wi-Fi & Internet

Master technical specification for whole-home low-voltage data infrastructure: owned GL.iNet Flint 2 router (OpenWrt, dual-WAN failover), secondary wired-backhaul node, 100% utilization of builder pre-wired in-wall Cat6 room drops, zero ceiling cuts, zero PoE switches, and battery backup.

### Locked Architectural Constraints (Non-Negotiable)
* **Zero Ceiling Penetrations:** Prohibit cutting gypsum ceiling boards or pulling overhead conduits for ceiling APs. Ceiling cavities remain reserved exclusively for VRF copper, lighting, and fire sprinklers.
* **Builder In-Wall Cat6 Utilization:** Connect stationary high-bandwidth devices (Living TV, Study WFH desk, Master AP) directly into the pre-installed Panasonic RJ45 wall plates at 1,000 Mbps.
* **Zero Dedicated PoE Switch Footprint:** Ban standalone PoE+ switches. The owned Flint 2 router's 5 integrated LAN ports (1× 2.5 GbE + 4× 1 GbE) patch all 4 pre-wired rooms directly.
* **Local-First OpenWrt Standard:** Reject cloud-dependent mesh systems (Deco, Eero) requiring mandatory vendor cloud logins and telemetry. All routing, WireGuard VPN (900 Mbps), and AdGuard Home DNS run locally.

---

## Equipment & Infrastructure Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Wi-Fi Coverage & Nodes** | **[Recommended] Owned Flint 2 (GL-MT6000) Gateway + 2nd Flint 2 / Beryl AX Wired AP** (~₹12,500 new for 2nd node / ₹0 test via owned Beryl AX) / [TP-Link Archer AX72 Pro in AP Mode](https://www.google.com/search?q=Archer+AX72+Pro) (₹8,999) | [TP-Link Deco XE75 Wi-Fi 6E 2-Pack in AP Mode](https://www.amazon.in/dp/B0B68L8XF9) (Triband 6GHz backhaul, ₹14,999) / [Ubiquiti UniFi Express Desktop Pair](https://www.google.com/search?q=UniFi+Express) (Managed layer-2 plane, ₹24,500) | Consumer mesh pucks (Deco/Eero) force cloud logins and hide channel controls. OpenWrt wired backhaul delivers unthrottled 1,000 Mbps throughput; enable 802.11k/v/r fast transition and calibrate 5GHz transmit power in LuCI to prevent sticky clients. |
| **Network Switching** | **[Recommended] Direct Flint 2 Integrated 5-Port LAN Switch (₹0)** / [TP-Link TL-SG105 5-Port Gigabit Unmanaged Switch](https://www.amazon.in/dp/B000BC7QMM) (₹899, fanless 2W metal case) | [Netgear GS308 8-Port Gigabit Unmanaged](https://www.amazon.in/dp/B07PFYM5MZ) (₹1,599) / [TP-Link TL-SG108 8-Port Gigabit](https://www.amazon.in/dp/B00A121WN6) (₹1,499) | PoE switches draw 15-20W idle heat and add ₹5k-11k unnecessary expense when every room has wall power. Flint 2's onboard 2.5G + 4x 1G LAN ports directly patch all 4 rooms without external hardware. |
| **Network Backup UPS** | [APC BX600C-IN 600VA](https://www.amazon.in/dp/B016XVRKZM) (Line-interactive, ₹3,599) / **[Recommended]** [Cuzor Pro 12V 3A + PoE Inline DC Mini-UPS Pair](https://www.google.com/search?q=Cuzor+Pro+12V+3A+%2B+PoE+Inline+DC+Mini-UPS+Pair) (Zero transfer lag during DG switchover, 6-hr Li-ion runtime, ₹2,199 ea) | [CyberPower CP1000EPFCLCD 1000VA](https://www.cyberpower.com/eu/en/product/sku/cp1000epfclcd) (Pure Sine Wave, active PFC, USB NUT monitoring, ₹12,990) / [APC Back-UPS Pro BR1000G-IN 1000VA/600W](https://www.google.com/search?q=APC+Back-UPS+Pro+BR1000G-IN+1000VA) (AVR voltage regulation, LCD runtime readout, ₹14,500) | Stepped sine-wave AC UPS units hum and waste 30% battery in DC-AC-DC conversion; pairing a Pure Sine Wave UPS or inline DC LiFePO4 UPS prevents router reboots during DG cutover. |
| **Ethernet Patching** | **[Recommended] Builder Pre-Wired In-Wall Cat6 (₹0)** + [Cat6 Molded Patch Cords 0.5m ×6](https://www.amazon.in/dp/B00HEM613W) (₹900) | [Molex PowerCat 6 Patch Leads](https://www.google.com/search?q=Molex+PowerCat+6+Patch) (₹1,800) / [Ubiquiti UniFi Thin Patch Cables](https://www.google.com/search?q=Ubiquiti+UniFi+Thin+Patch) (₹1,500) | Bulk 305m drums are obsolete since rooms are already cabled. Punch down room drops into RJ45 plugs or a compact 6-port bracket inside the low-voltage DB. |
| **Primary Internet** | **[Recommended]** [ACT Fibernet 300–500 Mbps](https://www.google.com/search?q=ACT+Fibernet+300%E2%80%93500+Mbps) (Low latency routing in Kokapet/Financial District, ~₹1,050–1,500/mo) / [Airtel Xstream Fiber 300 Mbps](https://www.google.com/search?q=Airtel+Xstream+Fiber+300+Mbps) (Symmetric GPON, bridge-mode friendly ONT, ₹1,499/mo) | [Airtel Xstream Fiber 1 Gbps VIP](https://www.google.com/search?q=Airtel+Xstream+Fiber+1+Gbps+VIP) (Priority SLA, dedicated GPON port, ~₹3,999/mo) / [ACT GIGA 1 Gbps Fibernet](https://www.google.com/search?q=ACT+GIGA+1+Gbps+Fibernet) (1 Gbps wired throughput, 5TB FUP, ₹2,999/mo) | Single-ISP downtime halts work-from-home; verify physical fibre drop into Tower B distribution frame before move-in and request ISP bridge mode on ONT to avoid Double-NAT on Flint 2. |
| **Backup Internet Line** | [Airtel / Jio 5G Mobile Hotspot Failover](https://www.google.com/search?q=Airtel+%2F+Jio+5G+Mobile+Hotspot+Failover) (₹0 manual failover via phone USB-tethering or repeater mode on Flint 2) / [GL.iNet Beryl AX (Owned) as 5G Phone Tethering Bridge](https://www.google.com/search?q=GL.iNet+Beryl+AX+as+5G+Phone+Tethering+Bridge) (₹0) | **[Recommended]** [Secondary Wired ISP (Airtel 100 Mbps if ACT is Primary)](https://www.google.com/search?q=Secondary+Wired+ISP) (True diverse fiber path into Flint 2 WAN2, ₹799/mo) / [Airtel Xstream AirFiber / Jio AirFiber 5G External ODU](https://www.google.com/search?q=Airtel+Xstream+AirFiber) (Dedicated 2nd WAN on Flint 2 with roof/balcony 5G receiver, ~₹599–₹799/mo) | 5G signal attenuates severely inside floor 42 double-glazed low-E windows; diverse dual-fiber (ACT + Airtel) on Flint 2 dual-WAN gives <1s automatic failover without manual tethering. |

---

## Port Map & Deployment Architecture

### 1. Hardware Port Mapping (Flint 2 Direct-Patch Architecture)
* **Flint 2 Router (GL-MT6000):**
  * *WAN 1 (2.5 GbE):* Primary ISP (ACT Fibernet GPON ONT in bridge mode).
  * *WAN 2 (2.5 GbE):* Secondary ISP failover (Airtel fiber line).
  * *LAN 1 (GbE):* Wall Drop — Living TV Console (Sony 65" / Apple TV 4K / Sonos Arc Ultra).
  * *LAN 2 (GbE):* Wall Drop — Master Bedroom (Secondary AP: Flint 2 / Beryl AX in wired AP mode).
  * *LAN 3 (GbE):* Wall Drop — Study / Guest Room (WFH workstation dock).
  * *LAN 4 (GbE):* Wall Drop — Kabir Room (Study desk / printer).

### 2. Network Commissioning & Quality Checklist
* **Central Media DB Patching:** Terminate the 4 builder in-wall Cat6 home-runs into RJ45 male plugs or a compact 6-port patch bracket inside the low-voltage DB, connecting them directly into Flint 2 LAN ports 1–4.
* **8-Pin Gigabit Verification:** Builders often punch only 4 of the 8 pins (limiting speeds to 100 Mbps). Test each room's shuttered RJ45 jack with an 8-LED network tester to confirm 1000 Mbps Gigabit continuity. Verify cable jacket text reads pure copper Cat6.
* **Pre-Installed Room Outlets:** Each room features a builder-installed **2-module Panasonic combo plate (1× shuttered RJ45 Cat6 + 1× Coaxial TV)** in matching metallic silver / matte black finish. If streaming exclusively, the coaxial jack can be replaced with a second RJ45 module without altering wall masonry.
* **Fast Transition (802.11k/v/r) Roaming:** Match SSID, WPA2/WPA3-Personal security passphrase, and encryption cipher across both Flint 2 and the secondary AP. Enable 802.11k/v/r in OpenWrt / LuCI and configure non-overlapping 5 GHz channels (e.g., Channel 36 on Flint 2, Channel 149 on Master AP) to eliminate co-channel interference.