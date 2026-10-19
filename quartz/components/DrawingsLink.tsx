import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

const DrawingsLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const purchasesHref = resolveRelative(fileData.slug!, "finalized-appliances-av" as FullSlug)
  const drawingsHref = resolveRelative(fileData.slug!, "plans-drawings" as FullSlug)

  const isPurchasesActive =
    fileData.slug === "finalized-appliances-av" || fileData.slug === "finalized-purchases"
  const isDrawingsActive =
    fileData.slug === "plans-drawings" || fileData.slug === "builder-drawings"

  return (
    <div class="sidebar-special-links">
      <a
        href={purchasesHref}
        class={`sidebar-special-btn ${isPurchasesActive ? "active" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <span>Finalized Purchases</span>
      </a>
      <a
        href={drawingsHref}
        class={`sidebar-special-btn ${isDrawingsActive ? "active" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
        <span>Plans & Drawings</span>
      </a>
    </div>
  )
}

export default (() => DrawingsLink) as QuartzComponentConstructor
