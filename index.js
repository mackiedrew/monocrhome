const applyStyles = (doc, className) => {
  if (!doc || !doc.body || !doc.head) console.warn("Monochrome: could not make page monochrome")
  const css = "body." + className + " { filter: grayscale(100%); }"
  const styleTag = doc.createElement("style")
  doc.head.appendChild(styleTag)
  styleTag.type = "text/css"
  styleTag.appendChild(document.createTextNode(css))
  doc.body.classList.add(className)
}

const className = "monochrome"
applyStyles(document, className)

