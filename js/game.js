

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


let userLevel = sessionStorage.getItem('level');
let gameBoard = document.getElementById('gameBoard');

const createRows = (userLevel) => {

    for (let i = 0; i < userLevel; i++) {
        let rowsGameboard = document.createElement("div");
        rowsGameboard.classList.add("row");
        rowsGameboard.id = `rowGameboard-${i}`;
        gameBoard.appendChild(rowsGameboard);
        for (let j = 0; j < 5; j++) {
            let cellsrow = document.createElement("div");
            cellsrow.classList.add("circleBoard")
            cellsrow.id = `circleBoard-${i}`  
            rowsGameboard.appendChild(cellsrow); 
        }
    }

}

createRows(3);

// if (userLevel === "level") {
//     createRows(10);
// } else if (userLevel === "level++") {
//     createRows(8);
// } else {
//     createRows(6);
// }


{/* <div class="row m-0 p-0 " id="rowGameboard">
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
</div> */}