const logsContainer = document.getElementById("log")

document.addEventListener("visibilitychange", () => {
  const p = document.createElement("p")
  
  if (document.hidden) {
      p.innerHTML = "Document is hidden"
      logsContainer.appendChild(p)
  } else {
      p.innerHTML = "Document is visible"
      logsContainer.appendChild(p)
  }
});