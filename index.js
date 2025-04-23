const logsContainer = document.getElementById("log")

document.addEventListener("visibilitychange", () => {
  const p = document.createElement("p")
  
  if (document.hidden) {
      p.innerHTML = "Document is hidden"
      fetch("https://api.api-ninjas.com/v1/counter?id=become_hidden&hit=true", {
        method: "GET",
        headers: {
            "X-Api-Key": "n58t7xzI5s0/z6oOmzTRFw==UWqdyXHd03ufoYCJ"
        }
      }).then(() => console.log(success));
      logsContainer.appendChild(p)
  } else {
      p.innerHTML = "Document is visible"
      logsContainer.appendChild(p)
  }
});