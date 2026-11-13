---
title: "Wi-Fi & Internet"
aliases: [u-setup-networking, networking-setup, networking, u-networking]
tags: [u-setup, networking, wifi]
status: evergreen
created: 2026-10-10
updated: 2026-11-07
---

[[index|← Back to Home Overview]]

# Wi-Fi & Internet

Master technical specification for whole-home low-voltage data infrastructure: 100% GL.iNet ecosystem using the owned GL.iNet Flint 2 gateway (OpenWrt, dual-WAN failover) + owned GL.iNet Beryl AX in 1-click Wired AP mode, direct utilization of builder pre-wired in-wall Cat6 room drops, zero external switches, zero ceiling cuts, and inline DC battery backup.

### Locked Architectural Constraints (Non-Negotiable)
* **Zero Ceiling Penetrations:** Prohibit cutting gypsum ceiling boards or pulling overhead conduits for ceiling APs. Ceiling cavities remain reserved exclusively for VRF copper, lighting, and fire sprinklers.
* **Builder In-Wall Cat6 Utilization:** Connect stationary endpoints (Study WFH dock, Master Beryl AX AP, Living Aqara Hub M3 / Apple TV) directly into the pre-installed Panasonic RJ45 wall plates at 1,000 Mbps.
* **Zero External Switches:** Ban standalone PoE and leaf switches. The owned Flint 2 router's 5 integrated LAN ports patch all 4 pre-wired rooms directly. At the Living TV console, the single wall port hardwires the Aqara Hub M3 (or Apple TV 4K), while the Sony 65" TV (whose RJ45 port is capped at 100 Mbps) and Sonos Arc Ultra run faster and cleaner over 5 GHz Wi-Fi 6 + HDMI eARC.
* **Local-First OpenWrt Standard:** Reject cloud-dependent mesh systems (Deco, Eero) requiring mandatory vendor cloud logins and telemetry. All routing, WireGuard VPN (900 Mbps), and AdGuard Home DNS run locally.

---

## Equipment & Infrastructure Matrix

| Need | Tier 1: High-Quality VFM | Tier 2: High-Quality Unconstrained | Top Failure Mode & Reddit Insight |
| :--- | :--- | :--- | :--- |
| **Wi-Fi Coverage & Nodes** | **[Recommended]** **Owned GL.iNet Flint 2 Gateway + Owned GL.iNet Beryl AX in Wired AP Mode** (₹0 cash outlay / ₹8,500 benchmark, 8.6 durability, 8.9 overall; wired Gigabit backhaul over builder Cat6) | **Owned GL.iNet Flint 2 Gateway + 2nd GL.iNet Flint 2 Wired AP** (4×4 MU-MIMO heatsink AP, 9.0 durability, 7.2 VFM at $1.71\times$ benchmark, 8.6 overall, ~₹14,500) / [Ubiquiti UniFi Cloud Gateway Ultra (`UCG-Ultra`) + Wired UniFi U6+ / U6 Mesh](https://store.ui.com/) (~₹26,500) | Consumer mesh pucks force cloud logins, and first-gen `UniFi Express (UX)` units run $>65^\circ\text{C}$ and lag under local controller load (`r/Ubiquiti`). Tier 1 (Owned Flint 2 + Beryl AX wired AP) wins at ₹0; upgrade to a 2nd Flint 2 only if a far-corner 5 GHz dip is observed. |
| **Network Switching** | **[Recommended] Direct GL.iNet Flint 2 Integrated 5-Port Switch (₹0, Zero External Switches)** / [TP-Link TL-SG105 5-Port Gigabit Switch](https://www.amazon.in/dp/B000BC7QMM) (₹1,399, optional) | [Netgear GS305 / GS308 Unmanaged Metal Gigabit Switch](https://www.amazon.in/dp/B07PFYM5MZ) (₹1,299–₹1,599) / [TP-Link TL-SG108 8-Port Gigabit](https://www.amazon.in/dp/B00A121WN6) (₹1,499) | Sony Bravia `X90CH` Ethernet is capped at 100 Mbps (slower than 5 GHz Wi-Fi), and wiring one Sonos speaker while others use Wi-Fi triggers STP broadcast loops on OpenWrt. Keep TV and Sonos on Wi-Fi 6 and plug the single Living wall port directly into the Aqara Hub M3. |
| **Network Backup UPS** | **[Recommended]** [Mean Well DRC-100A DIN-Rail DC-UPS](https://www.meanwell.com/webapp/product/search.aspx?prod=DRC-100) (Keep `SVR1` at **13.5V–13.6V float** so CH2 charges battery fully + inline 12V 5A buck regulator on CH1 if required, 4.5A continuous CH1 load, true 0ms DC transfer, 9.0 durability, ₹3,950) + 12V 7Ah SLA / LiFePO4 Battery (₹1,200, ₹5,150 total) | [TalentCell 12V LiFePO4 DC Power Bank & Buffer Supply](https://www.google.com/search?q=TalentCell+12V+LiFePO4) (~₹8,500; 3,000+ cycle life, 10-year lifespan, pure DC pass-through, 9.3 durability, 8.6 overall) / [APC Smart-UPS SMT750I Pure Sine Wave](https://www.apc.com/) (₹21,500) | Consumer 12V 2A/3A mini-UPS units (Cuzor/Resonate) trip internal BMS during peak 48W quad-core bursts on Flint 2 (requires 12V 4.0A). Disqualify DRC-60A (CH1 load capped at 2.8A). Mean Well DRC-100A delivers 4.5A continuous CH1 load, 0ms transfer, and hot-swappable external battery. |
| **Ethernet Patching** | **[Recommended] Builder Pre-Wired In-Wall Cat6 (₹0)** + [Cat6 Molded Patch Cords 0.5m ×6](https://www.amazon.in/dp/B00HEM613W) (₹900) | [Molex PowerCat 6 Patch Leads](https://www.google.com/search?q=Molex+PowerCat+6+Patch) (₹1,800) / [Ubiquiti UniFi Thin Patch Cables](https://www.google.com/search?q=Ubiquiti+UniFi+Thin+Patch) (₹1,500) | Bulk 305m drums are obsolete since rooms are already cabled. Punch down room drops into RJ45 plugs or a compact 6-port bracket inside the low-voltage DB. |
| **Primary Internet** | **[Recommended]** [ACT Fibernet 300–500 Mbps](https://www.google.com/search?q=ACT+Fibernet+300%E2%80%93500+Mbps) (Low latency routing in Kokapet/Financial District, ~₹1,050–1,500/mo) / [Airtel Xstream Fiber 300 Mbps](https://www.google.com/search?q=Airtel+Xstream+Fiber+300+Mbps) (Symmetric GPON, bridge-mode friendly ONT, ₹1,499/mo) | [Airtel Xstream Fiber 1 Gbps VIP](https://www.google.com/search?q=Airtel+Xstream+Fiber+1+Gbps+VIP) (Priority SLA, dedicated GPON port, ~₹3,999/mo) / [ACT GIGA 1 Gbps Fibernet](https://www.google.com/search?q=ACT+GIGA+1+Gbps+Fibernet) (1 Gbps wired throughput, 5TB FUP, ₹2,999/mo) | Single-ISP downtime halts work-from-home; verify physical fibre drop into Tower B distribution frame before move-in and request ISP bridge mode on ONT to avoid Double-NAT on Flint 2. |
| **Backup Internet Line** | **[Recommended]** [Airtel / Jio 5G Phone USB-Tethering Failover on Flint 2](https://www.google.com/search?q=Airtel+%2F+Jio+5G+Mobile+Hotspot+Failover) (₹0 hardware / ~₹250/mo data benchmark, native OpenWrt `mwan3` USB 3.0 failover, 8.6 overall) / [GL.iNet Beryl AX (Owned) as 5G Tethering Bridge](https://www.gl-inet.com/) (₹0) | [Secondary Wired ISP (Airtel 100 Mbps if ACT is Primary)](https://www.google.com/search?q=Secondary+Wired+ISP) (True diverse fiber path into Flint 2 WAN2, 3.7 VFM at $3.2\times$ monthly cost, 8.2 overall, ₹799/mo + GST) / [Airtel Xstream AirFiber / Jio AirFiber 5G External ODU](https://www.google.com/search?q=Airtel+Xstream+AirFiber) (~₹599–₹799/mo) | 5G USB tethering into Flint 2 handles rare fiber cuts at ₹0 recurring overhead; add a secondary ₹799/mo wired fiber line on WAN2 only if primary ACT uptime falls below SLA. |

---

## Port Map & Deployment Architecture

### 1. Hardware Port Mapping (Flint 2 Direct-Patch Architecture)
* **Flint 2 Router (GL-MT6000):**
  * *WAN 1 (2.5 GbE):* Primary ISP (ACT Fibernet GPON ONT in bridge mode).
  * *WAN 2 (2.5 GbE):* Secondary ISP failover (Airtel fiber line).
  * *LAN 1 (GbE):* Wall Drop — Living TV Console (Direct to Aqara Hub M3 or Apple TV 4K; Sony 65" TV & Sonos Arc Ultra run on 5 GHz Wi-Fi 6 + HDMI eARC).
  * *LAN 2 (GbE):* Wall Drop — Master Bedroom (Owned GL.iNet Beryl AX in 1-click Wired AP mode).
  * *LAN 3 (GbE):* Wall Drop — Study / Guest Room (WFH workstation dock; Brother `HL-L2440DW` laser printer connects via 5 GHz Wi-Fi).
  * *LAN 4 (GbE):* Wall Drop — Kabir Room (Study desk / future PC drop).

### 2. Network Commissioning & Quality Checklist
* **Central Media DB & Homz Linen Store Shelf Gate:** The Flint 2 ($280 \times 220 \times 180\text{ mm}$ with antennas), ISP GPON ONT, and 12V 4.5A DC-UPS (`Mean Well DRC-100A` + 12V 7Ah battery / `TalentCell LiFePO4`) cannot fit inside the shallow 100mm recessed metal `CJB` box in the lobby wall (and metal enclosures act as a Faraday cage). Instruct Homz to frame a **ventilated wooden equipment shelf ($450\text{ mm W} \times 350\text{ mm D} \times 350\text{ mm H}$ with louvered vents, a 50mm cable grommet into the `CJB`, and dual 6A sockets)** inside the adjacent Linen Store / Lobby cabinet. Terminate the 4 builder in-wall Cat6 home-runs into RJ45 plugs or a 6-port keystone bracket inside the `CJB` and patch directly into Flint 2 LAN ports 1–4.
* **8-Pin Gigabit Verification:** Builders often punch only 4 of the 8 pins (limiting speeds to 100 Mbps). Test each room's shuttered RJ45 jack with an 8-LED network tester to confirm 1000 Mbps Gigabit continuity. Verify cable jacket text reads pure copper Cat6.
* **Pre-Installed Room Outlets:** Each room features a builder-installed **2-module Panasonic combo plate (1× shuttered RJ45 Cat6 + 1× Coaxial TV)** in matching metallic silver / matte black finish. If streaming exclusively, the coaxial jack can be replaced with a second RJ45 module without altering wall masonry.
* **Fast Transition (802.11k/v/r) Roaming:** Match SSID, WPA2/WPA3-Personal security passphrase, and encryption cipher across both Flint 2 and the secondary AP. Enable 802.11k/v/r in OpenWrt / LuCI and configure non-overlapping 5 GHz channels (e.g., Channel 36 on Flint 2, Channel 149 on Master AP) to eliminate co-channel interference.