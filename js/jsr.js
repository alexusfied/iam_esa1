const itemsList = document.getElementsByTagName("ul")[0];
const refreshIcon = document.getElementById("refresh-icon");

async function fetchListItems() {
  const url = "http://192.168.178.20:8395/data/listitems.json";
  try {
    console.log("Fetching list items...");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`List items could not be loaded: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error(e.message);
  }
}

function createListItem(listItemObject) {
  const newItem = document.createElement("li");
  const imgContainer = document.createElement("div");
  const containerCenter = document.createElement("div");
  const containerRight = document.createElement("div");
  const img = document.createElement("img");
  const imgSrc = document.createElement("p");
  const imgTitle = document.createElement("p");
  const availableTagsContainer = document.createElement("div");
  const tagsIcon = document.createElement("img");
  const tagsCount = document.createElement("p");
  const date = document.createElement("p");
  const optionsIcon = document.createElement("button");

  // Assign inner container classes
  imgContainer.className = "main-list-item-inner-container";
  containerCenter.className = "main-list-item-inner-container";
  containerRight.className = "main-list-item-inner-container main-list-item-inner-container-right"
  availableTagsContainer.className = "available-tags-container"

  // Build item image
  img.src = listItemObject.src;
  img.width = 125;
  img.height = 125;
  img.alt = "A random image";
  img.className = "main-list-item-img";
  imgContainer.appendChild(img);

  // Prepare available tags container
  tagsIcon.src = "./css/img/png/tag_FILL0_wght400_GRAD0_opsz24.png";
  tagsIcon.width = 20;
  tagsIcon.height = 20;
  tagsIcon.alt = "Available tags arrow icon";
  tagsIcon.className = "icon";
  tagsCount.textContent = listItemObject.numOfTags;
  tagsCount.className = "available-tags-count";
  availableTagsContainer.append(tagsIcon, tagsCount);

  // Build item inner container center
  imgSrc.textContent = listItemObject.owner;
  imgSrc.className = "main-list-item-img-src";
  imgTitle.textContent = listItemObject.title;
  imgTitle.className = "main-list-item-img-title";
  containerCenter.append(imgSrc, imgTitle, availableTagsContainer);

  // Build item inner container right
  date.textContent = listItemObject.added;
  date.className = "main-list-item-date";
  optionsIcon.className = "standard-button icon options-icon";
  containerRight.append(date, optionsIcon);

  // Build list item
  newItem.className = "main-list-item";
  newItem.append(imgContainer, containerCenter, containerRight);

  return newItem;
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

async function renderItemList() {
  const listItemData = await fetchListItems();
  listItemData.forEach((item) => {
    const newListItem = createListItem(item);
    newListItem.addEventListener("click", (e) => handleListItemClick(e, newListItem));
    itemsList.appendChild(newListItem);
  });
}

function refreshItemsList() {
  itemsList.replaceChildren();
  renderItemList();
}

// Register event listeners
refreshIcon.addEventListener("click", refreshItemsList);

// Main
renderItemList();
