window.onload = function() {
  const mainContainer = document.getElementById("main-container");
  const mainView = document.querySelector("main");
  const viewStyleButton = document.getElementById("view-type-icon");
  let currentViewStyle = "list-view";

  function toggleCurrentViewStyle() {
    mainView.style.opacity = "0";
    setTimeout(() => {
      mainContainer.classList.remove(currentViewStyle);
      if (currentViewStyle === "list-view") {
        mainContainer.classList.add("tile-view");
        currentViewStyle = "tile-view";
      } else {
        mainContainer.classList.add("list-view");
        currentViewStyle = "list-view";
      }
      mainView.style.opacity = "100";
    }, 2000);
  }
  viewStyleButton.addEventListener("click", toggleCurrentViewStyle);
};