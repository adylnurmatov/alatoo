const imgElement = document.querySelector("img");
const img = "img/alatoo.jpg";
const img2 = "img/auca.jpg";

function change(event) {
    let current = imgElement.getAttribute("src");
    if (current == img) {
        imgElement.setAttribute("src", img2);
    }
    else {
        imgElement.setAttribute("src", img);
    }
}

imgElement.addEventListener("click", change)


function changeHeaderText() {
    var name = prompt("Please enter your name:");
    if (name != null && name != "") {
        document.getElementById("headerText").innerText = "Welcome " + name;
    }
}