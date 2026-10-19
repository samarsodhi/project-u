import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import DrawingsLink from "./quartz/components/DrawingsLink"

const explorerConfig = {
  title: "Specifications",
  folderDefaultState: "open" as const,
  folderClickBehavior: "collapse" as const,
  filterFn: (node: any) => {
    return (
      node.slugSegment !== "plans-drawings" &&
      node.slugSegment !== "finalized-appliances-av" &&
      node.slugSegment !== "finalized-purchases"
    )
  },
  mapFn: (node: any) => {
    if (node.slugSegment === "rooms") {
      node.displayName = "Spaces & Rooms"
    }
  },
  sortFn: (a: any, b: any) => {
    const order: Record<string, number> = {
      // Phase 1: High-Rise Engineering & Irreversible Services
      "high-rise-engineering-gotchas": 10,
      "cabinetry-woodwork": 20,
      "kitchen-laundry": 30,
      "bathrooms-ventilation": 40,
      "lighting-ambience": 50,
      "smart-home-automation": 60,
      "wifi-internet": 70,

      // Phase 2: Spaces & Rooms
      "rooms": 80,
      "living-dining": 81,
      "master-bedroom": 82,
      "study-guest-room": 83,
      "kabir-room": 84,
      "home-gurudwara": 85,

      // Phase 3: Environmental Protection, Comfort & Safety
      "safety-security": 90,
      "air-water-cleaning": 100,
      "curtains-paint-finishes": 110,
      "audio-entertainment": 120,

      // Phase 4: Art & Styling
      "art-wall-decor": 130,

      // Separate bottom section: Floor plans & technical drawings
      "plans-drawings": 999,
    }

    const orderA = order[a.slugSegment] ?? 999
    const orderB = order[b.slugSegment] ?? 999

    if (orderA !== orderB) {
      return orderA - orderB
    }

    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerConfig),
    Component.DesktopOnly(Component.TableOfContents()),
    DrawingsLink(),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerConfig),
    DrawingsLink(),
  ],
  right: [],
}
