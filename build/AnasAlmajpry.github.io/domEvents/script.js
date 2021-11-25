const button = document.getElementById("add");
const data = document.getElementById("data");
const ul = document.getElementsByTagName("ul")[0];

function dataLength() {
  return data.value.length;
}
function createListItem() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data.value));
  ul.appendChild(li);
  data.value = "";
}
function addListAfterClick() {
  if (dataLength() > 0) {
    createListItem();
  }
}

function addListAfterKeyPress(e) {
  if (e.keyCode === 13 && dataLength() > 0) {
    createListItem();
  }
}

button.addEventListener("click", addListAfterClick);
data.addEventListener("keypress", addListAfterKeyPress);
