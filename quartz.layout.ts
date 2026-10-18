import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./quartz/components/types"
import { resolveRelative, FullSlug } from "./quartz/util/path"

const DrawingsLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const href = resolveRelative(fileData.slug!, "builder-drawings" as FullSlug)
  return (
    <div class="sidebar-drawings-link">
      <a href={href} class="drawings-link-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
        <span>Plans & Drawings</span>
      </a>
    </div>
  )
}
const DrawingsLinkComponent: QuartzComponentConstructor = () => DrawingsLink

const explorerConfig = {
  title: "Specifications",
  folderDefaultState: "open" as const,
  folderClickBehavior: "collapse" as const,
  filterFn: (node: any) => {
    return node.slugSegment !== "builder-drawings"
  },
  mapFn: (node: any) => {
    if (node.slugSegment === "rooms") {
      node.displayName = "Spaces & Rooms"
    }
  },
  sortFn: (a: any, b: any) => {
    const order: Record<string, number> = {
      // Phase 1: High-Rise Engineering & Irreversible Services
      "engineering-gotchas": 10,
      "millwork-hardware": 20,
      "kitchen-services": 30,
      "bathrooms-ventilation": 40,
      "lighting": 50,
      "automation": 60,
      "networking": 70,

      // Phase 2: Spaces & Rooms
      "rooms": 80,
      "living-dining": 81,
      "master-suite": 82,
      "br01-study-guest": 83,
      "br02-kabir": 84,
      "br03-gurudwara": 85,

      // Phase 3: Environmental Protection, Comfort & Safety
      "life-safety": 90,
      "air-water": 100,
      "soft-furnishings": 110,
      "audio": 120,

      // Phase 4: Art & Styling
      "art-styling": 130,

      // Separate bottom section: Floor plans & technical drawings
      "builder-drawings": 999,
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
    DrawingsLinkComponent(),
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
    DrawingsLinkComponent(),
  ],
  right: [],
}
