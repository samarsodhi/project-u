import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

const DrawingsLink: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const href = resolveRelative(fileData.slug!, "plans-drawings" as FullSlug)
  const isDrawingsActive =
    fileData.slug === "plans-drawings" || fileData.slug === "builder-drawings"

  return (
    <div class="sidebar-drawings-link">
      <a
        href={href}
        class={`drawings-link-btn ${isDrawingsActive ? "active" : ""}`}
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
      <a
        href="https://samarsodhi.github.io/project-u/static/visualizer/b4206-model.html?v=11"
        target="_blank"
        rel="noopener noreferrer"
        class="drawings-link-btn"
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
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
        <span>Interactive Model</span>
      </a>
    </div>
  )
}

export default (() => DrawingsLink) as QuartzComponentConstructor
