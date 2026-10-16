import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"
import Slugger from "github-slugger"

export interface Options {
  maxDepth: 1 | 2 | 3 | 4 | 5 | 6
  minEntries: number
  showByDefault: boolean
  collapseByDefault: boolean
}

const defaultOptions: Options = {
  maxDepth: 3,
  minEntries: 1,
  showByDefault: true,
  collapseByDefault: false,
}

interface TocEntry {
  depth: number
  text: string
  slug: string
}

function shortenTocText(raw: string): string {
  let s = raw
    .replace(/^(?:§\d+(?:\.\d+)?|A\d+\.)\s*/i, "")
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/^Phase \d+:\s*/i, "")
    .trim()
  const map: Record<string, string> = {
    "Master Task & Decision State Machine": "State Machine",
    "Related Documentation": "Documentation",
    "Domain Execution Map": "1. Domain Map",
    "Master Budget Ledger": "2. Budget Ledger",
    "Immediate Milestones & Trade Gates": "3. Milestones",
    "Master Navigation Links": "4. Quick Links",
    "Household Profile & Room Programme": "2. Rooms",
    "Locked Owner Decisions": "3. Locked Decisions",
    "Owned Gear & Budget Framework": "4. Owned & Budget",
    "Agent Defaults to Confirm": "5. Defaults",
    "Site Measurement Gates": "6. Site Gates",
    "Open Lifestyle Inputs": "7. Open Inputs",
    "Vault Links": "8. Links",
    "Plumbing, Hydrostatic Pressure & Wet Services": "1. Plumbing & Pressure",
    "Electrical, Grid Surges & Inverter PCB Protection": "2. Electrical & Surges",
    "False Ceiling, HVAC & Acoustic Coordination": "3. Ceiling & HVAC",
    "Kitchen & Millwork Structural Integrity": "4. Kitchen & Millwork",
    "High-Rise Wind & Fall Safety": "5. Wind & Fall Safety",
    "Room by Room Loose Furniture & Millwork": "Room Schedules",
    "1. Drawing Room + Foyer": "1. Drawing Room",
    "2. Living & Family Room": "2. Living Room",
    "3. Dining Space": "3. Dining",
    "4. Master Bedroom Suite": "4. Master Suite",
    "5. BR-01: WFH Study & Guest Room": "5. Study (BR-01)",
    "6. BR-02: Kabir's Room": "6. Kabir's Room",
    "7. BR-03: The Home Gurudwara": "7. Gurudwara",
    "Millwork Sourcing & Structural Safety": "Millwork & Safety",
    "Interior Finishes, Window Treatments & Solar Control": "Curtains & Glazing",
    "Architectural Pelmet & Measurement Protocol": "Pelmet Protocol",
    "Interior Wall Paint & Color Palette": "Wall Paint & Palette",
    "Locked Homz Laminate Schedule, Mirrors & Wall Textures": "Laminates & Mirrors",
    "Joinery, Core Substrates & Hardware Specifications": "Substrates & Hardware",
    "Site Quality Control Protocol": "Site QC Protocol",
    "Kitchen and laundry appliances": "Appliance Matrix",
    "Kitchen worktop, sinks and taps": "Worktop & Sinks",
    "Engineering & Materials Decision Guide": "Engineering Guide",
    "Geysers, shower glass, ventilation and mesh": "Bathroom Matrix",
    "Engineering Sizing & Operational Best Practices": "Sizing & Wet Zone",
    "Air and Water Quality": "Air & Water",
    "Robot Vacuum & Floor Care": "Robot Vacuum",
    "Smart home and smart switches": "Relays & Switches",
    "BLDC Ceiling Fan Specifications & Siting Rules": "BLDC Fans",
    "Local-First Survivability & Offline Architecture": "Offline Survivability",
    "Electrical Pre-Wire & Site Requirements": "Pre-Wire Rules",
    "Networking and Wi-Fi": "Wi-Fi Matrix",
    "Port Map & Deployment Architecture": "Port Map & Cabling",
    "Audio and TV": "Audio & TV Matrix",
    "Architectural & Site Integration Requirements": "Site Integration",
    "Lamps and art lighting": "Lighting Matrix",
    "Architectural Coordination & Lux Limits": "Lux & Coordination",
    "Safety, security and child-safety": "Safety Matrix",
    "Monthly Life Safety Inspection Schedule": "Monthly Checks",
    "High-Rise Egress & Childproofing Protocol": "Egress & Childproofing",
    "Turnkey Execution, Contractual Controls & Material Sourcing Detail": "Material Matrix",
    "Contract Rider: Twelve Non-Negotiable Clauses": "12-Point Contract Rider",
    "Site Quality Protocols": "Site QC Protocols",
    "Master Procurement Summary & Dual-Tier Budget Envelopes": "Procurement Matrix",
    "Procurement Governance & Standing Rules": "Standing Rules",
  }
  if (map[s]) return map[s]
  const strippedNum = s.replace(/^\d+\.\s*/, "")
  if (map[strippedNum]) return map[strippedNum]
  return s
}

const slugAnchor = new Slugger()
export const TableOfContents: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "TableOfContents",
    markdownPlugins() {
      return [
        () => {
          return async (tree: Root, file) => {
            const display = file.data.frontmatter?.enableToc ?? opts.showByDefault
            if (display) {
              slugAnchor.reset()
              const rawHeadings: { depth: number; text: string; slug: string }[] = []
              visit(tree, "heading", (node) => {
                const text = toString(node)
                const slug = slugAnchor.slug(text)
                if (node.depth > 1) {
                  rawHeadings.push({ depth: node.depth, text, slug })
                }
              })

              if (rawHeadings.length > 0) {
                const topDepth = Math.min(...rawHeadings.map((h) => h.depth))
                const isRooms = String(file.data.slug ?? "").includes("u-setup-rooms")
                const filtered = rawHeadings.filter((h) =>
                  isRooms ? h.depth <= topDepth + 1 : h.depth === topDepth,
                )
                if (filtered.length >= opts.minEntries) {
                  file.data.toc = filtered.map((entry) => ({
                    depth: entry.depth - topDepth,
                    text: shortenTocText(entry.text),
                    slug: entry.slug,
                  }))
                  file.data.collapseToc = opts.collapseByDefault
                }
              }
            }
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    toc: TocEntry[]
    collapseToc: boolean
  }
}
