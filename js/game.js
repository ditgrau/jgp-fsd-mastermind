
// level board - bubbles colored

let selectedColors = JSON.parse(sessionStorage.getItem('newColors'));
let divSelectedColors = document.getElementById('levelBoard');
let selectedLevel = sessionStorage.getItem('level');
console.log (selectedColors);

const createLevelBoard = () => {
    for (let i = 0; i < selectedColors.length; i++) {
        let clonedSelector = document.createElement("div");
        clonedSelector.classList.add('circleColorBoard');
        clonedSelector.style.backgroundColor = selectedColors[i];
        // clonedSelector[i].addEventListener('click', clickSelector());
        divSelectedColors.appendChild(clonedSelector); 
    }
}

createLevelBoard();

// secret combination

let secretCombo = [];

const colorsRandom = () => {
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * selectedColors.length);
        secretCombo.push(selectedColors[randomIndex]);
    }
    console.log (secretCombo);
    console.log (selectedColors);
    
};
colorsRandom();

//  secret board

let divInsightColors = document.getElementById('insightCombo');

const createInsightBoard = () => {
    for (let i = 0; i < 4; i++) {
        let insightBubble = document.createElement("div");
        insightBubble.classList.add('circleColorBoard');
        insightBubble.style.backgroundColor = secretCombo[i];
        // clonedSelector[i].addEventListener('click', clickSelector());
        divInsightColors.appendChild(insightBubble); 
    }
} 

createInsightBoard();



const createRows = (numberRows) => {

    for (let i = 0; i < numberRows; i++) {
        let rowsGameboard = document.createElement("div");
        rowsGameboard.classList.add("row");
        rowsGameboard.id = `rowGameboard-${i}`;
        gameBoard.appendChild(rowsGameboard);


        let snitchDiv = document.createElement("div");
        snitchDiv.classList.add("grid");
        rowsGameboard.appendChild(snitchDiv);
        
        for (let k = 0; k < 4; k++) {
            let snitch = document.createElement("div");
            snitch.classList.add("circleGrid");
            snitchDiv.appendChild(snitch);
        }

        for (let j = 0; j < 4; j++) {
                let cellsrow = document.createElement("div");
                cellsrow.classList.add("circleColorBoard");
                rowsGameboard.appendChild(cellsrow);
                cellsrow.classList.add(`celda${i}`);
                cellsrow.dataset.row = i;
            }
    }
}

createRows (selectedLevel);

const firstRow = document.getElementById("rowGameboard-0");
console.log(firstRow.id);
firstRow.style.backgroundColor = "red";
const firstCell = document.getElementsByClassName(`celda0`);
// es un html collection // convertir a array
let arrayRow = Array.from(document.getElementsByClassName('celda0'));
// les tengo que dar la porpiedad de clicar
// miElemento.addEventListener("click", function() {
//     alert("¡Has hecho clic en el elemento!");
//   });
arrayRow[i].addEventListener('click', (mostrarColorArray)=>{})

// selectedColors mi array de los colores elegidos
// si utilizo bucle no me saldria con cada clic, tengo que utilizar if .
let numeroClic = 0;
const mostrarColorArray = () => {
    if (numeroClic>selectedColors.lenght) {
        return;
    }
    selectedColors[numeroClic];
    numeroClic++;
};
// tengo dos arrays, clicando sobre el primer elemento del primer array tengo que recorrer el segundno.



// Agregar el evento de clic al botón
boton.addEventListener('click', mostrarSiguienteElemento);





// .some, si algun elemento del array cumple la condicion: estar dentro del array dos

// const array = [1, 2, 3, 4, 5];
// let currentIndex = 0;

// function mostrarSiguienteElemento() {
//   if (currentIndex < array.length) {
//     const elementoActual = array[currentIndex];
//     console.log(elementoActual);
//     currentIndex++;
//   } else {
//     console.log("Se han mostrado todos los elementos del array.");
//   }
// }

// // Agrega un evento onclick al documento o a un elemento específico
// document.onclick = mostrarSiguienteElemento;

// let 

// selectedColors // es mi array que recorre el click
// let contador = 0;

// const clickIteratesColors = () => {
//     if (contador < selectedColors.length) {
//         contador ++
//         let colorShown = selectedColors[contador];

//     }
// }




let arrayVacio = [];
let arraylleno = ['pep', 'tom', 'mara', 'marta'];

const clearArray = () => {
    arraylleno = arrayVacio;
    return 
};