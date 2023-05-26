

//level board // chosen colors

let divSelectedColors = document.getElementById('levelBoard');
let selectedColors = JSON.parse(sessionStorage.getItem('newColors'));

const createLevelBoard = () => {
    for (let i = 0; i < selectedColors.length; i++) {
        let clonedSelector = document.createElement("div");
        clonedSelector.classList.add('circleColorBoard');
        clonedSelector.style.backgroundColor = selectedColors[i];
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
}
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


// GAMEBOARD 

let selectedLevel = sessionStorage.getItem('level');
let gameBoard = document.getElementById ("gameBoard");

// Create rows // cells // snitches

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
                cellsrow.id = `cell-${j}-row-${i}`;
                cellsrow.classList.add (`mirow-${i}`)
            }
    }
}
createRows (selectedLevel);




// esta funcion recorre el array de colores, ME SIRVE!!



// let numeroClics = 0;

// const pintarBolas = () => {
//     console.log("clic en el botón");
//     if (numeroClics<selectedColors.length) {
//         clicable.style.backgroundColor = selectedColors[numeroClics];
//         numeroClics ++;
//     }else {
//         numeroClics = 0;
//     }
// }

// let clicable = document.getElementById("cell-0-row-0")
// clicable.addEventListener('click', pintarBolas);


// 




//////////////////// esta funcion recorre con todas las bolitas de la msima fila

// let numeroClics = 0;
// let clicablearray = Array.from(document.getElementsByClassName("mirow-6"));

// const pintarBolas = (clicable) => {
//     console.log("clic en el botón");
//     if (numeroClics<selectedColors.length) {
//         clicable.style.backgroundColor = selectedColors[numeroClics];
//         numeroClics ++;
//     }else {
//         numeroClics = 0;
//     }
// }

// clicablearray.forEach((clicable)=> {
//     clicable.addEventListener('click',() => pintarBolas(clicable));
// });


/////////////////////////////////////

let numeroClics = 0;
let rowContador = 0;
let clicablearray = Array.from(document.getElementsByClassName(`mirow-${rowContador}`));

const pintarBolas = (clicable) => {
    console.log("clic en el botón");
    if (numeroClics<selectedColors.length) {
        clicable.style.backgroundColor = selectedColors[numeroClics];
        numeroClics ++;
    }else {
        numeroClics = 0;
    }
}
clicablearray.forEach((clicable)=> {
            clicable.addEventListener('click',() => pintarBolas(clicable));
        });
console.log(rowContador);


const desbloquearFila = ()=>{
    rowContador++
    console.log (rowContador);
    clicablearray = Array.from(document.getElementsByClassName(`mirow-${rowContador}`));
    clicablearray.forEach((clicable)=> {
        clicable.addEventListener('click',() => pintarBolas(clicable));
    });
}



// const checkCombi = () => {
    
//     //// aqui tengo que meter mmi codigo de comprobacion de colores o invocar a la funcion
//     console.log("estoy aqui");
//     rowContador++
//     clicableArray = Array.from(document.getElementsByClassName(`mirow-${rowContador}`));
//     numeroClics = 0;
//    
// }

// do {
//     clicablearray.forEach((clicable)=> {
//         clicable.addEventListener('click',() => pintarBolas(clicable));
//     });
    
// } while (false);



// let rowContador = 0;










// // check button and delete

// let checkButton = document.getElementById('checkButton');
// let dismissButton = document.getElementById('dismissButton');


// const saveCombi = ()=> {
//     let arrayToCompare = [];
//     for (var clicable of clicablearray) {
//     var colorToCompare = clicable.style.backgroundColor;
//     arrayToCompare.push(colorToCompare);
//     console.log(arrayToCompare);
//     }
//     console.log(arrayToCompare);
// }

// saveCombi ()
// checkCombi ()
// dismissCombi()
// /////////////////////////////////


// function tienenElementoComun(array1, array2) {
//     return array1.some(elemento => array2.includes(elemento));
//   }
  
//   // Ejemplo de uso
//   const array1 = [1, 2, 3, 4];
//   const array2 = [5, 6, 3, 8];
  
//   if (tienenElementoComun(array1, array2)) {
//     console.log("Los arrays tienen al menos un elemento en común.");
//   } else {
//     console.log("Los arrays no tienen elementos en común.");
//   }
  
