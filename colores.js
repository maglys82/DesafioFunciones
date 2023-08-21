element1 = document.querySelector("#ele1");
element1.style.width = "200px";
element1.style.height = "200px";
element1.style.backgroundColor= "blue";
element2 = document.querySelector("#ele2");
element2.style.width = "200px";
element2.style.height = "200px";
element2.style.backgroundColor= "red";
element3 = document.querySelector("#ele3");
element3.style.width = "200px";
element3.style.height = "200px";
element3.style.backgroundColor= "green";
element4 = document.querySelector("#ele4");
element4.style.width = "200px";
element4.style.height = "200px";
element4.style.backgroundColor= "yellow";

function pintar(elemento, color = 'black') {
    elemento.style.backgroundColor = color;
}


element1.addEventListener("click", function () {
    pintar(element1);
});

element2.addEventListener("click", function () {
    pintar(element2);
});

element3.addEventListener("click", function () {
    pintar(element3);
});

element4.addEventListener("click", function () {
    pintar(element4);
});


