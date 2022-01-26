let sectionContainer = document.getElementById("section-container");
let itemContainer = document.getElementsByClassName("item-container");
let buttons = document.getElementsByClassName("buttons");
let inputVal = document.getElementById("inputVal");
let main = document.getElementById("main")



function addingEelements(arr) {
  arr.map((e) => {
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
    buttonFinished.innerHTML = `<span class="material-icons" data-action="finished"> check </span>`;
    buttonRemoved.innerHTML = `<span class="material-icons" data-action="remove"> close </span>`;

    buttonContainer.appendChild(buttonFinished);
    buttonContainer.appendChild(buttonRemoved);
  });
}



main.onclick = (e) => {
  let actions = e.target.dataset.action;
  let sibling = e.target.parentNode.parentNode.previousElementSibling;
  if (actions === "remove") {
    e.target.parentNode.parentNode.parentNode.remove();
  }

  if (actions === "finished") {
    sibling.classList.toggle("paras");
  }

  if(actions === "clear") {
    sectionContainer.innerHTML = "";
  }

  if(actions === "submit") {
    e.preventDefault();
    let emptyArr = [];
    emptyArr.push(inputVal.value);
    if (emptyArr[0] !== "") {
      addingEelements(emptyArr);
    }
    inputVal.value = "";
    console.log(emptyArr);
  }
};
