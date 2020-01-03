
const main = () => {
  // Get the body element, assume there is only one.
  // TODO: Fail fast if there is no body element found;
  const bodyElement = document.getElementsByTagName("body")[0]

  // TODO: Merge filter style as to not override (use classes)
  bodyElement.style.filter = "grayscale(100%)"
}

main()
