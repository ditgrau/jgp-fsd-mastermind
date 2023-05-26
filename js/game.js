

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


//  secret board - contains the secret combination

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



// Paint the cells of each row

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

// clicks of the check button

        // capture colours in an array


const rgbToHex = (rgb) => {
    let rgbArray = rgb.split(',').map(Number);
    let hexArray = rgbArray.map((value) => {
    let hex = value.toString(16);
        return hex.length === 1 
        ? '0' + hex 
        : hex;
        });
    return '#' + hexArray.join('');
};

const captureColors = () => {
    currentArray = clicablearray.map((e) => {
        let rgbColor = e.style.backgroundColor;
        let rgbNumbers = rgbColor.slice(4, 17);
        let hexNumbers = rgbToHex(rgbNumbers);
        return hexNumbers;
        });
    console.log (currentArray);
};




    // unblocking rows

const unblockRows = ()=>{
    console.log (clicablearray);
    rowContador++
    console.log (rowContador);
    clicablearray = Array.from(document.getElementsByClassName(`mirow-${rowContador}`));
    clicablearray.forEach((clicable)=> {
        clicable.addEventListener('click',() => pintarBolas(clicable));
    });
}





// // check button and delete

// let checkButton = document.getElementById('checkButton');
// let dismissButton = document.getElementById('dismissButton');



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