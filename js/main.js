

// Funciones para la seleccion de colores segun nivel //
const bubbles4 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelOneBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
}

const bubbles5 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelTwoBubbles").classList.remove("mm-hidden");
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


//Función seleccion de color 

    // esta es la funcion basica que me pinta el background

// let input = document.getElementById("picker01");

//     input.oninput = () => {
//     document.body.style.backgroundColor = input.value;
//     };

    // esta ya me pinta el div circleColor

// let input = document.getElementById("picker01");

//     input.oninput = () => {
//     document.getElementById("bub-picker01").style.backgroundColor = input.value;
//     };

    // almaceno el dato en un array

// let colorSelected = document.getElementById("picker01");
// let arrayColors = [];  

//     colorSelected.oninput = () => {
//     document.getElementById("bub-picker01").style.backgroundColor = input.value;
//     arrayColors.push(colorSelected.value);
//     console.log(arrayColors);
//     };

// console.log (arrayColors);


// if (arrayColors.lenght===4) {
    // que aparezca el boton de seguir

// en este array quiero guardar los colores nuevos
let arrayNewColors = [];
// esto es HTML collection, en consola pone Node 
let colorsInput = document.getElementsByName("pickerEasy");
// lo convierto en array
let arrayDefaultColors = Array.from(colorsInput);
// convierto en array las empty bubbles, juntando los dos pasos anteriores
let emptyBubbles = Array.from( document.getElementsByClassName("circleColor1"));

// bucle for que recorre el array
for (let i = 0; i < arrayDefaultColors.length; i++) {
    // cada vez que un elemento del array tenga un cambio .oninput :
    arrayDefaultColors [i].oninput = () => {
    emptyBubbles[i].style.backgroundColor = arrayDefaultColors[i].value;
    arrayNewColors.push(arrayDefaultColors[i].value);
    console.log(arrayNewColors);
    };
}

// let colorsInput = document.getElementsByName("pickerMedium");
// let colorsInput = document.getElementsByName("pickerDif");




// el array con los colores de partida
// let colorsito = document.getElementsByName("head");
// let arrayColorsito = Array.from(colorsito);
// arrayColorsito.map (head =>{
//     console.log (head.value);

// })


// console.log (arrayColorsito);
// console.log (colorsito);
// let contenedores = document.getElementsByClassName('container');
// console.log(contenedores);

// let arrayContenedores = Array.from(contenedores);
// console.log(arrayContenedores);

// codigo de clase de David
// arrayContenedores.map(
//     elementoArray => {
        // el parentesis azul son las variables de la funcion .addEventListener (que hago?, cuando lo hago?) POR ESO LA COMA!
        // elementoArray.addEventListener('mouseover', ()=> {elementoArray.classList.add('cercle');})
//         elementoArray.addEventListener('mouseover', () => {
//             elementoArray.classList.add('cercle');
//         })

//         elementoArray.addEventListener ('mouseout', () => {
//             elementoArray.classList.remove('cercle');
//         })

//     }
// )

// esta funcion almacena el dato del nombre //
// let changeToLevel = () => {
//     let user = document.getElementById("userName").value;
//     sessionStorage.setItem('user', user);

// 





// revisar esto que he hecho con mara


// const changeToLevel = (id1, id2) => {
    // con event lostener
//     let user = document.getElementById("userName").value;
//     sessionStorage.setItem('user', user);

    // cambiar a la pagina nivel
//     document.getElementById(id1).style.display = "none";
//     document.getElementById(id2).style.display = "block";
// };



// recoger el dato del user
    

    
// let user = document.getElementById("userName").value;
//   console.log("Nombre del jugador: " + user);
// {/* <input type="submit"></input> */} metinedo el submit en el form?
