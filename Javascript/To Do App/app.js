let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

//let delBtns = document.querySelector(".delete");
//for(delBtn of delBtns) {
//    delBtn.addEventListener("click",function() {
//        //console.log("element deleted");
//        let par = this.parentElement;
//        console.log(par);
//        par.remove();
//    });
//}               //this delete was not work for newly added list

ul.addEventListener("click", function (event) {
     if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
     }
    //console.dir(event.target.nodeName);
    //console.log("Button Clicked");
}); // here delegation concept was used to delete element or task through parent written delete code 