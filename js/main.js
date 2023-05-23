// Funcion para el logo, no queria meterlo en el html para que no se me moviese el diseño
const game = () => {
    window.location.href = "./game.html";
}

const comeBackHome = () => {
    window.location.href = "../index.html";
}

// session storage // recoger el nombre usuario

const saveName =() => {  
    let userPlayer = document.getElementById("userName").value; 
    if (userPlayer.length!==0){
    sessionStorage.setItem('user', userPlayer);
    window.location.href = "settings.html";
    }else {
        mmtypewriter("<-- Escribe tu nombre -->", 80, comment2)
    }
}

/* // session storage // recoger el nivel */

// const saveLevel =(textFromId) => {        
//     let userLevelText = document.getElementById(textFromId).textContent;
//     sessionStorage.setItem('userLevel',userLevelText);
//     console.log (userLevelText);
//     }
    

//Función para cambiar la Navbar de la pagina de nivel"

const changeNavbarLevel = () => {
    document.getElementById("nb-player").style.display = "none";
    document.getElementById("nb-level").style.display = "block";
};

// Funciones onclick para cambiar a la pantalla de elegir colores segun nivel //

const bubbles4 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelOneBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    // saveLevel("mm-levelEasy");
    sessionStorage.setItem('level', 'level1');
}

const bubbles5 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelTwoBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    // saveLevel("mm-levelMed");
    sessionStorage.setItem('level', 'level2');
}

const bubbles6 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelThreeBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    // saveLevel("mm-levelDif");
    sessionStorage.setItem('level', 'level3');
}

// funcion consola Git

const gitConsole = ()=> {
    document.getElementById("gitText").classList.remove("mm-hidden");
}

// Color-picker y arrays // deberia haber hecho un mapeo (?) mirarlo...

let arrayColorsEasy = Array.from(document.getElementsByName("pickerEasy"));
let arrayColorsMedium = Array.from(document.getElementsByName("pickerMedium"));
let arrayColorsDif = Array.from(document.getElementsByName("pickerDif"));

let emptyBubblesEasy = Array.from( document.getElementsByClassName("circleColorEasy"));
let emptyBubblesMedium = Array.from( document.getElementsByClassName("circleColorMedium"));
let emptyBubblesDif = Array.from( document.getElementsByClassName("circleColorDif"));

let arrayNewColors = [];

const loopGetColors = (arrayLevel, emptyBubblesLevel) => { 
for (let i = 0; i < arrayLevel.length; i++) {
    arrayLevel[i].addEventListener('change', () => { 
    emptyBubblesLevel[i].style.backgroundColor = arrayLevel[i].value;
    arrayNewColors[i] = arrayLevel[i].value;

    arrayLevel[i].disabled = true;

    let newColors = JSON.stringify(arrayNewColors);
    sessionStorage.setItem('newColors', newColors);
    });
}

return arrayNewColors;
}
    
loopGetColors(arrayColorsEasy, emptyBubblesEasy);
loopGetColors(arrayColorsMedium, emptyBubblesMedium);
loopGetColors(arrayColorsDif, emptyBubblesDif);

console.log (arrayNewColors);

// efecto maquina de escribir

const comment1 = document.getElementById("first-comment");
const comment2 = document.getElementById("second-comment");
const comment3 = document.getElementById("third-comment");


const mmtypewriter = (comment, time = 200, div)=>{
let arrayComent = comment.split("")
    div.innerHTML = ""
    let cont = 0
    let writeComment = setInterval (()=>{
        div.innerHTML += arrayComent[cont];
        cont ++
        if (cont === arrayComent.length) {
            clearInterval(writeComment);
        }
    }, time)
}

mmtypewriter("<-- Juego creado por Judit Grau -->", 100, comment1)


///////////////////////^^^^^^^^^^^ LIMPIO







/////////////////////////////////////////////////////////////////////////////////////////////////
// tendria que mapear el array del color picker y que haga esta funcion, pero deberia estar implicita en la funcion del loop (?)
//
// });
//////////////////////////////////////////////////////////////////////////////////////////////////



// ahora quiero que se desactive el colorpicker una vez haya cambiado de estado, para que no me entren ams datos en el array

// const colorPicker = document.getElementById('picker00');
// colorPicker.addEventListener('mouseup', function() {
//     
// });
// funciona con el primer clic, necesito con el segundo
//

// no se que he hecho aqui, me he empezado a liar...
// const disabledColorPicker = (arrayLevel) =>{
//     for (let i = 0; i < arrayLevel.length; i++) {
//         arrayLevel[i].oninput = () => { 
//             // cada vez que un elemento del array tenga un cambio .oninput :
//         emptyBubblesLevel[i].style.backgroundColor = arrayLevel[i].value;
//         arrayNewColors.push(arrayLevel[i].value);
//     }

// esto deberia hacerlo por cada elemento del array:



// entonces el array seria 
// arrayLevel = (Elementodelarray, i)=>{

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
 

// })
// }

// const loopGetColors = (arrayLevel, emptyBubblesLevel)=>{
//     let arrayNewColors = [];
//     for (let i = 0; i < arrayLevel.length; i++) {
//         arrayLevel[i].oninput = () => { 
//             // cada vez que un elemento del array tenga un cambio .oninput :
//         emptyBubblesLevel[i].style.backgroundColor = arrayLevel[i].value;
//         arrayNewColors.push(arrayLevel[i].value);
//         arrayLevel[i].addEventListener('change', function() {
//             arrayLevel[i].disabled = true;
//         })
//         }
//     return arrayNewColors;
//     }
// }

// const array = [null, null, null]; // Array inicialmente vacío

// function desactivarElemento(valor, indice) {
  // Desactivar el elemento que proporciona el valor
//   array[indice] = null;
// }

// Asignar valores y desactivar elementos utilizando map
// array.map((valor, indice) => {
//   if (valor === null) {
//     // Asignar el valor deseado
//     array[indice] = "Valor asignado";
//     desactivarElemento("Valor asignado", indice);
//   }
// });

// console.log(array); // Resultado: ["Valor asignado", null, null]






                // esto es HTML collection, en consola pone Node 
                // let colorsInputEasy = document.getElementsByName("pickerEasy");
                // let colorsInputMedium = document.getElementsByName("pickerMedium");
                // let colorsInputDif = document.getElementsByName("pickerDif");

                // lo convierto en array
                // let arrayColorsEasy = Array.from(colorsInputEasy);
                // let arrayColorsMedium = Array.from(colorsInputMedium);
                // let arrayColorsDif = Array.from(colorsInputDif);

// convierto en array las empty bubbles, juntando los dos pasos anteriores


// bucle for que recorre el array
// for (let i = 0; i < arrayDefaultColors.length; i++) {
//     arrayDefaultColors [i].oninput = () => { // cada vez que un elemento del array tenga un cambio .oninput :
//     emptyBubbles[i].style.backgroundColor = arrayDefaultColors[i].value;
//     arrayNewColors.push(arrayDefaultColors[i].value);
//     console.log(arrayNewColors);
//     };
// } 



//  esta es la funcion para el bucle que almacena los colores en un array, AQUI LA HE DEFINIDO, AHORA LA TENGO QUE INVOCAR CON ARRAYS







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






