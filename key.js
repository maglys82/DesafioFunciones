element1 = document.querySelector("#key");
element1.style.width = "200px";
element1.style.height = "200px";
element1.style.border = "1px solid black"
element1.style.backgroundColor = "white";

element2 = document.querySelector("#key2");
element2.style.width = "200px";
element2.style.height = "200px";
element2.style.border = "1px solid black"
element2.style.backgroundColor = "white";

function pintar(elemento, color = 'black') {
    elemento.style.backgroundColor = color;
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        pintar(element1, "pink")
    } else if (event.key === 's') {
        pintar(element1, "orange")
    }
    else if (event.key === 'd') {
        pintar(element1, "skyblue")
    }
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        pintar(element2, "purple")
    } else if (event.key === 'w') {
        pintar(element2, "gray")
    }
    else if (event.key === 'e') {
        pintar(element2, "brown")
    }
})

