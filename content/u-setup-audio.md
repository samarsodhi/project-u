---
title: "11 · Audio & TV"
aliases: [ audio-setup]
tags: [u-setup, audio]
status: evergreen
created: 2026-10-10
updated: 2026-10-16
---

[[u-setup-index]]

### §3 Audio and TV

**Answer:** Keep the audio architecture wireless, centered on the owned Sony 65" X90CH 4K TV. No invasive false ceiling speaker drops. Retain the owned Sonos Era 300 in the Drawing room for spatial music. **Every line item presents High-Quality VFM first, followed by High-Quality Unconstrained.**

#### Audio & AV Equipment Matrix

| Need                         | Tier 1: High-Quality VFM                                                                                 | Tier 2: High-Quality Unconstrained                                                                               | Top Failure Mode & Reddit Insight                                                                                                                                                                           |
| :--------------------------- | :------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TV Soundbar (Living)**     | [Sonos Beam (Gen 2)](https://avstore.in/products/sonos-beam-gen-2) (Dolby Atmos, compact 651mm, ₹54,999) | [Sonos Arc Ultra](https://www.sonos.com/en-in/shop/arc-ultra) (Sound Motion architecture, 9.1.4 Atmos, ₹99,999)  | Arc Ultra is 1,178 mm wide; media console top must provide $\ge 1.2\text{ m}$ clear span. TV must route eARC via HDMI 3; Alexa music playback on Sonos is geo-blocked in India (use AirPlay 2 / Sonos app). |
| **Drawing Room Music**       | **Retain Owned Sonos Era 300** (₹0 / ₹44,999 value) standalone on sofa plinth                            | [Dual Sonos Era 300 Stereo Pair](https://avstore.in/products/sonos-era-300) (~₹89,998 for pair)                  | Pairing Era 300 as TV surrounds permanently disables Bluetooth and 3.5mm line-in; keep standalone in Drawing room for music fidelity.                                                                       |
| **BR-03 Sacred Kirtan**      | [Sonos Era 100](https://avstore.in/products/sonos-era-100) (Mic hardware toggle OFF, ₹29,999)            | [Sonos Era 100 Pair (Stereo)](https://avstore.in/products/sonos-era-100) (₹59,998)                               | Microphone privacy in prayer room; physical hardware switch on rear isolates mic. Mount on low East-wall shelf, never on Palki wall.                                                                        |
| **Balcony & Portable Sound** | [Sonos Roam 2](https://avstore.in/products/sonos-roam-2) (IP67 waterproof, USB-C + Qi, ₹14,999)          | [Sonos Move 2](https://avstore.in/products/sonos-move-2) (24-hr battery, stereo acoustic architecture, ₹44,999) | Roam battery drains rapidly on continuous standby; dock on Qi wireless puck when indoors.                                                                                                                   |
| **TV Cabling & Mounting**    | [Certified HDMI 2.1 eARC Cable](https://www.amazon.in/dp/B08M9HND4F) (48 Gbps, 1.5m, ₹1,299)             | [AudioQuest Pearl 48G HDMI 2.1](https://avstore.in) (Solid Long-Grain Copper eARC, ₹5,500)                       | Running HDMI through wall without a conduit traps cables during upgrades; mandate 50mm internal PVC conduit in Homz TV panel.                                                                               |

---

### Architectural & Site Integration Requirements

#### 1. Homz Living TV Unit (`424 1D` + `4929 LU`) Coordination
* **Backing & Conduit:** Reinforce the `4929 LU Blanco Gold Marble` panel with 18 mm BWP plywood backing and a 50 mm concealed smooth-bore PVC conduit down into the `424 1D Cinnamon Hickory` base cabinet so HDMI 2.1 eARC and power cords stay 100% invisible.
* **Atmos Acoustic Envelope:** Mount the 65" Sony TV with $\ge 150\text{ mm}$ clear vertical gap above the `424 1D` base deck, and position the Sonos Arc Ultra ($1,178\text{ mm}$ wide) near the front lip so the `4929 LU` panel overhang never blocks upward-firing height channels.

#### 2. Network & Voice Integration
* **Spectrum Allocation:** Sonos devices connect to 5 GHz Wi-Fi (supported by Omada AP-1 in Living room) to prevent competing with 2.4 GHz Matter lighting relays.
* **Control Protocol:** Direct AirPlay 2 streaming from iOS devices and native Spotify/Apple Music integration inside the Sonos S2 app.

**Skip List:** 6-zone in-ceiling speaker installations (~₹6L with amplifiers and ceiling coring), passive AV receiver racks, third-party subwoofers without true Sonos wireless integration.

**Detail →** [[u-setup-bom-detail]] · [[u-setup-networking]]