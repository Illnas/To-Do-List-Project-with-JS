

let sectionContainer = document.getElementById("section-container")
let submit = document.getElementById("submit");
let itemContainer = document.getElementsByClassName("item-container")
let paragraph = document.getElementsByClassName("paras");
let buttons = document.getElementsByClassName("buttons")
let inputVal = document.getElementById("inputVal")

let emptyArr = [];


submit.onclick = (e) => {
    e.preventDefault();
    console.log(inputVal.value)
    emptyArr.push(inputVal.value)
    console.log(emptyArr)
    inputVal.value = ""
}






sectionContainer.onclick = (e) => {
    let actions = e.target.dataset.action
    let sibling = e.target.parentNode.parentNode.previousElementSibling
    if(actions === "remove") {
        e.target.parentNode.parentNode.parentNode.remove();
    }

    if(actions === "finished") {
       sibling.classList.toggle("paras")     
    }
}