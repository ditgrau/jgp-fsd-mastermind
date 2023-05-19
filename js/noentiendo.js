// Funciones para la seleccion de colores segun nivel //


let coloresPosibles = 0;

const bubbles4 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelOneBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    coloresPosibles = 4;
    console.log (coloresPosibles);
}

const bubbles5 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelTwoBubbles").classList.remove("mm-hidden");
    let levelTwoBubbles = document.getElementById("mm-levelTwoBubbles")
    levelTwoBubbles.style.display = "block";
    changeNavbarLevel();
}

const bubbles6 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelThreeBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
}

//Función para cambiar la Navbar de la pagina de nivel"

const changeNavbarLevel = () => {
    document.getElementById("nb-player").style.display = "none";
    document.getElementById("nb-level").style.display = "block";
};

///////////////////////^^^^^^^^^^^ LIMPIO


// en este array quiero guardar los colores nuevos
let arrayNewColors = [];
// esto es HTML collection, en consola pone Node 
let colorsInput = document.getElementsByName("pickerEasy");
// lo convierto en array
let arrayDefaultColors = Array.from(colorsInput);
// convierto en array las empty bubbles, juntando los dos pasos anteriores
let emptyBubbles = Array.from( document.getElementsByClassName("circleColor1"));

// bucle for que recorre el array
for (let i = 0; i < coloresPosibles; i++) {
    // cada vez que un elemento del array tenga un cambio .oninput :
    arrayDefaultColors [i].oninput = () => {
    emptyBubbles[i].style.backgroundColor = arrayDefaultColors[i].value;
    arrayNewColors.push(arrayDefaultColors[i].value);
    console.log(arrayNewColors);
    };
} 
