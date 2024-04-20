let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    console.log("ul was clicked");
    event.stopPropagation();
});

for(li of lis) {
li.addEventListener("click", function(event) {
    console.log("li was clicked");
    event.stopPropagation();
});
}