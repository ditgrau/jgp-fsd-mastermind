
// level board - bubbles colored

let selectedColors = JSON.parse(sessionStorage.getItem('newColors'));
let selectedLevel = sessionStorage.getItem('level');
let divSelectedColors = document.getElementById('levelBoard');


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


const createRows = (userLevel) => {

    for (let i = 0; i < userLevel; i++) {
        let rowsGameboard = document.createElement("div");
        rowsGameboard.classList.add("row");
        // rowsGameboard.id = `rowGameboard-${i}`;
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
            }

        
    }
}
            //             let cellsgrid = document.createElement("div");
            // cellsgrid.classList.add("circleGrid");
            // rowsGameboard.appendChild(cellsgrid);

            // }
            // tablero.innerHTML += `<div id='fila${contador}' class='fila' onclick='pintaBola(${contador})'>${contador}</div>`;

            //     for (let k = 0; k < 4; k++) {


        
    

createRows(10);


const createCells = () => {

    
}




// .some, si algun elemento del array cumple la condicion: estar dentro del array dos

    




// const createSelectors = (selectedColors) => {
//     for (let i = 0; i < selectedColors.length; i++) {
//         let clonedSelector = document.createElement("div");
//         clonedSelector.classList.add('circleBoard');
//         divSelectedColors.appendChild(clonedSelector);
//     }
// }

// Paso 3: Actualiza el contenido del <div> con el nombre de usuario

// let elementoExistente = document.getElementById('FilaTablero');
// console.log (elementoExistente);

// let padresito = document.getElementById('contenedor');
// console.log (padresito);

// let numerodefilas = Math.floor(Math.random() * 11);
// for (let i = 0; i < numerodefilas; i++) {
//     let elementoClonado = elementoExistente.cloneNode(true);
//     padresito.appendChild(elementoClonado);
// }

// let rowGameboard = document.getElementById('rowGameboard');
// console.log(rowGameboard);

// let gameBoard = document.getElementById('gameBoard');
// console.log(gameBoard);

// const cloneRows = (numberRows) => {
//     for (let i = 0; i < numberRows; i++) {
//         let clonedRow = rowGameboard.cloneNode(true);
//         gameBoard.appendChild(clonedRow);
//     }
// }
// let userLevel = 10 //acabr esta funcion

// if (userLevel === "level") {
//     cloneRows(10);
// } else if (userLevel === "level++") {
//     cloneRows(8);
// } else {
//     cloneRows(6);
// }

// const saveLevel =(textFromId) => {        
//     let userLevelText = document.getElementById(textFromId).textContent;
//     sessionStorage.setItem('userLevel',userLevelText);
//     console.log (userLevelText);
//     }

// ////////// para crear las bolitas elegidas  en el tablero


// let userLevel = sessionStorage.getItem('level');
// let gameBoard = document.getElementById('gameBoard');


// createRows(3);

// if (userLevel === "level") {
//     createRows(10);
// } else if (userLevel === "level++") {
//     createRows(8);
// } else {
//     createRows(6);
// }


/* <div class="row m-0 p-0 " id="rowGameboard">
<div class="col circleBoard m-1 p-0" id="cell1"></div>
<div class="col circleBoard m-1 p-0" id="cell2"></div>
<div class="col circleBoard m-1 p-0" id="cell3"></div>
<div class="col circleBoard m-1 p-0" id="cell4"></div>
<div class="col circleBoardEmpty m-1 p-0 d-flex justify-content-center">
    <div class="row m-0 p-0 justify-content-between">
        <div class="circleGrid m-1 p-0" id="cell5"></div>
        <div class="circleGrid m-1 p-0" id="cell6"></div>
    </div>
    <div class="row m-0 p-0 justify-content-between">
        <div class="circleGrid m-1 p-0" id="cell7"></div>
        <div class="circleGrid m-1 p-0" id="cell8"></div>
    </div>
</div>
</div> */