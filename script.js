const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

// Add Event Listener

// When you click the "closed face", if an "open face" appears, "active" class is added to "open face"

closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});

// When you click the "open face", if an "closed face" appears, "active" class is added to "closed face"

openFace.addEventListener("click", () => {
  if (closedFace.classList.contains("closed")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
});
