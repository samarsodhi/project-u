import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, FullSlug } from "../util/path"

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

export default (() => DrawingsLink) as QuartzComponentConstructor
