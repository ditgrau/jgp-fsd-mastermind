

// let elementoExistente = document.getElementById('FilaTablero');
// console.log (elementoExistente);

// let padresito = document.getElementById('contenedor');
// console.log (padresito);

// let numerodefilas = Math.floor(Math.random() * 11);
// for (let i = 0; i < numerodefilas; i++) {
//     let elementoClonado = elementoExistente.cloneNode(true);
//     padresito.appendChild(elementoClonado);
// }

let rowGameboard = document.getElementById('rowGameboard');
console.log(rowGameboard);

let gameBoard = document.getElementById('gameBoard');
console.log(gameBoard);

const cloneRows = (numberRows) => {
    for (let i = 0; i < numberRows; i++) {
        let clonedRow = rowGameboard.cloneNode(true);
        gameBoard.appendChild(clonedRow);
    }
}
let userLevel = 10 //acabr esta funcion

if (userLevel === "level") {
    cloneRows(10);
} else if (userLevel === "level++") {
    cloneRows(8);
} else {
    cloneRows(6);
}
