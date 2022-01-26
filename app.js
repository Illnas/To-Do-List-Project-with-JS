let sectionContainer = document.getElementById("section-container");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear")
let itemContainer = document.getElementsByClassName("item-container");
let paragraph = document.getElementsByClassName("paras");
let buttons = document.getElementsByClassName("buttons");
let inputVal = document.getElementById("inputVal");



submit.onclick = (e) => {
  e.preventDefault();
  let emptyArr = [];
  console.log(inputVal.value);
  emptyArr.push(inputVal.value);
  console.log(emptyArr);
  inputVal.value = ""

  emptyArr.map(e => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  sectionContainer.appendChild(itemContainer);

  const paragraphItem = document.createElement("p");
  paragraphItem.innerText = `${e}`;
  itemContainer.appendChild(paragraphItem);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttons");
  itemContainer.appendChild(buttonContainer);

  const buttonFinished = document.createElement("button");
  const buttonRemoved = document.createElement("button");
  buttonFinished.innerHTML = `<span class="material-icons" data-action="finished"> check </span>`
  buttonRemoved.innerHTML = `<span class="material-icons" data-action="remove"> close </span>`


  buttonContainer.appendChild(buttonFinished);
  buttonContainer.appendChild(buttonRemoved);
  })
};

clear.onclick = () => {
    sectionContainer.innerHTML = ""
}



sectionContainer.onclick = (e) => {
  let actions = e.target.dataset.action;
  let sibling = e.target.parentNode.parentNode.previousElementSibling;
  if (actions === "remove") {
    e.target.parentNode.parentNode.parentNode.remove();
  }

  if (actions === "finished") {
    sibling.classList.toggle("paras");
  }
};
