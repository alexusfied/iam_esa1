window.onload = function() {
  const mainContainer = document.getElementById("main-container");
  const mainView = document.querySelector("main");
  const viewStyleButton = document.getElementById("view-type-icon");
  const listItems = document.getElementsByClassName("main-list-item");
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

  function handleListItemClick(e, listItem) {
    const itemTitle = listItem.getElementsByClassName("main-list-item-img-title")[0].textContent;
    const imgUrl = listItem.getElementsByClassName("main-list-item-img-src")[0].textContent;
    if (e.target.classList.contains("options-icon")) {
      alert(`
        Title: ${itemTitle}
        URL: ${imgUrl}
      `);
    } else {
      alert(itemTitle);
    }
  }

  viewStyleButton.addEventListener("click", toggleCurrentViewStyle);
  for (let i = 0; i < listItems.length; i++) {
    listItems.item(i).addEventListener("click", (e) => {
      handleListItemClick(e, listItems.item(i));
    });
  }
};