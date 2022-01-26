let sectionContainer = document.getElementById("section-container");
let submit = document.getElementById("submit");
let itemContainer = document.getElementsByClassName("item-container");
let paragraph = document.getElementsByClassName("paras");
let buttons = document.getElementsByClassName("buttons");
let inputVal = document.getElementById("inputVal");

let emptyArr = [];

submit.onclick = (e) => {
  e.preventDefault();
  console.log(inputVal.value);
  emptyArr.push(inputVal.value);
  console.log(emptyArr);
  inputVal.value = "";

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  sectionContainer.appendChild(itemContainer);

  const paragraphItem = document.createElement("p");
  paragraphItem.innerText = "Hello";
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
};

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
