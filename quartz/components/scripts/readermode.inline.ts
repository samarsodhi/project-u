let isReaderMode = false

const emitReaderModeChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const updateButtons = (mode: "on" | "off") => {
    for (const btn of document.getElementsByClassName("readermode")) {
      btn.setAttribute("title", mode === "on" ? "Exit Reader Mode" : "Reader Mode (Distraction-Free)")
      btn.setAttribute("aria-label", mode === "on" ? "Exit Reader Mode" : "Reader Mode (Distraction-Free)")
    }
  }

  const switchReaderMode = () => {
    isReaderMode = !isReaderMode
    const newMode = isReaderMode ? "on" : "off"
    document.documentElement.setAttribute("reader-mode", newMode)
    localStorage.setItem("readerMode", newMode)
    updateButtons(newMode)
    emitReaderModeChangeEvent(newMode)
  }

  for (const readerModeButton of document.getElementsByClassName("readermode")) {
    readerModeButton.addEventListener("click", switchReaderMode)
    window.addCleanup(() => readerModeButton.removeEventListener("click", switchReaderMode))
  }

  // Restore saved state or set initial
  const saved = localStorage.getItem("readerMode")
  isReaderMode = saved === "on"
  const initialMode = isReaderMode ? "on" : "off"
  document.documentElement.setAttribute("reader-mode", initialMode)
  updateButtons(initialMode)
})

