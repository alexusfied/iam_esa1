window.onload = function() {
  const mainContainer = document.getElementById("main-container");
  const viewStyleButton = document.getElementById("view-type-icon");
  let currentViewStyle = "list-view";

  function toggleCurrentViewStyle() {
    mainContainer.classList.remove(currentViewStyle);
    if (currentViewStyle === "list-view") {
      mainContainer.classList.add("tile-view");
      currentViewStyle = "tile-view";
    } else {
      mainContainer.classList.add("list-view");
      currentViewStyle = "list-view";
    }
  }
  viewStyleButton.addEventListener("click", toggleCurrentViewStyle);
};