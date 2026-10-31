---
title: "Wi-Fi & Internet"
aliases: [u-setup-networking, networking-setup, networking, u-networking]
tags: [u-setup, networking, wifi]
status: evergreen
created: 2026-10-10
updated: 2026-10-31
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
| **Wi-Fi Coverage & Nodes** | **[Recommended] Owned GL.iNet Flint 2 (GL-MT6000) Gateway + Owned GL.iNet Beryl AX (GL-MT3000) in Wired AP Mode (₹0)** | **Owned GL.iNet Flint 2 Gateway + 2nd GL.iNet Flint 2 Wired AP** (~₹12,500) / [Ubiquiti UniFi Express Desktop Pair](https://www.google.com/search?q=UniFi+Express) (₹24,500) | Consumer mesh pucks (Deco/Eero) force cloud logins. Setting the owned Beryl AX to 1-click "Wired Access Point" mode in the GL.iNet UI delivers 1,000 Mbps wired backhaul in the Master Suite for ₹0; upgrade to a 2nd Flint 2 only if 4×4 MIMO is desired later. |
| **Network Switching** | **[Recommended] Direct GL.iNet Flint 2 Integrated 5-Port Switch (₹0, Zero External Switches)** / [TP-Link TL-SG105 5-Port Gigabit Switch](https://www.amazon.in/dp/B000BC7QMM) (₹899, optional) | [Netgear GS305 / GS308 Unmanaged Metal Gigabit Switch](https://www.amazon.in/dp/B07PFYM5MZ) (₹1,299–₹1,599) / [TP-Link TL-SG108 8-Port Gigabit](https://www.amazon.in/dp/B00A121WN6) (₹1,499) | Sony Bravia `X90CH` Ethernet is capped at 100 Mbps (slower than 5 GHz Wi-Fi), and wiring one Sonos speaker while others use Wi-Fi triggers STP broadcast loops on OpenWrt. Keep TV and Sonos on Wi-Fi 6 and plug the single Living wall port directly into the Aqara Hub M3. |
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
  * *LAN 1 (GbE):* Wall Drop — Living TV Console (Direct to Aqara Hub M3 or Apple TV 4K; Sony 65" TV & Sonos Arc Ultra run on 5 GHz Wi-Fi 6 + HDMI eARC).
  * *LAN 2 (GbE):* Wall Drop — Master Bedroom (Owned GL.iNet Beryl AX in 1-click Wired AP mode).
  * *LAN 3 (GbE):* Wall Drop — Study / Guest Room (WFH workstation dock).
  * *LAN 4 (GbE):* Wall Drop — Kabir Room (Study desk / printer).

### 2. Network Commissioning & Quality Checklist
* **Central Media DB Patching:** Terminate the 4 builder in-wall Cat6 home-runs into RJ45 male plugs or a compact 6-port patch bracket inside the low-voltage DB, connecting them directly into Flint 2 LAN ports 1–4.
* **8-Pin Gigabit Verification:** Builders often punch only 4 of the 8 pins (limiting speeds to 100 Mbps). Test each room's shuttered RJ45 jack with an 8-LED network tester to confirm 1000 Mbps Gigabit continuity. Verify cable jacket text reads pure copper Cat6.
* **Pre-Installed Room Outlets:** Each room features a builder-installed **2-module Panasonic combo plate (1× shuttered RJ45 Cat6 + 1× Coaxial TV)** in matching metallic silver / matte black finish. If streaming exclusively, the coaxial jack can be replaced with a second RJ45 module without altering wall masonry.
* **Fast Transition (802.11k/v/r) Roaming:** Match SSID, WPA2/WPA3-Personal security passphrase, and encryption cipher across both Flint 2 and the secondary AP. Enable 802.11k/v/r in OpenWrt / LuCI and configure non-overlapping 5 GHz channels (e.g., Channel 36 on Flint 2, Channel 149 on Master AP) to eliminate co-channel interference.