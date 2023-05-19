<<<<<<< Updated upstream

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
console.log (rowGameboard);

let gameBoard = document.getElementById('gameBoard');
console.log (gameBoard);

let numberRows = Math.floor(Math.random() * 11);
for (let i = 0; i < numberRows; i++) {
    let clonedRow = rowGameboard.cloneNode(true);
    gameBoard.appendChild(clonedRow);
}

// esta con bucle aleatorio, tengo que hacer un if para cada nivel

// codigo ejercicio de clase
// let numeroParrafos = Math.floor(Math.random() * 11);

// let padresito = document.getElementById('contenedor');

// for (let i = 0; i < numeroParrafos; i++) {
//     let hijito =  document.createElement("p");
//     hijito.innerHTML = `Somos una fokin famili`;
//     padresito.appendChild(hijito);  
// }


=======
// aqui la logica del juego

// 
>>>>>>> Stashed changes
