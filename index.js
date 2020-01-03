const main = doc => {
  // Ensure the document and all provided elements exist before progressing
  if (!doc || !doc.head) {
    return console.warn("Monochrome: could not make page monochrome")
  }
  
  // Generate style tag for head
  const styleTag = doc.createElement("style")

  // Add style tag to the document head
  doc.head.appendChild(styleTag)

  // Create a specific class
  styleTag.type = "text/css"
  styleTag.appendChild(document.createTextNode("body { filter: grayscale(100%); }"))
}

// Provide document as a parameter to avoid global access in function
main(document)

