import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

const PurchasesLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const purchasesHref = resolveRelative(fileData.slug!, "finalized-purchases" as FullSlug)
  const isPurchasesActive =
    fileData.slug === "finalized-purchases" || fileData.slug === "finalized-appliances-av"

  return (
    <div class="sidebar-purchases-link">
      <a
        href={purchasesHref}
        class={`purchases-link-btn ${isPurchasesActive ? "active" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
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
    </div>
  )
}

export default (() => PurchasesLink) as QuartzComponentConstructor
