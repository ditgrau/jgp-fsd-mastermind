
let elementoExistente = document.getElementById('FilaTablero');
console.log (elementoExistente);

let padresito = document.getElementById('contenedor');
console.log (padresito);

let numerodefilas = Math.floor(Math.random() * 11);
for (let i = 0; i < numerodefilas; i++) {
    let elementoClonado = elementoExistente.cloneNode(true);
    padresito.appendChild(elementoClonado);
}

// codigo ejercicio de clase
// let numeroParrafos = Math.floor(Math.random() * 11);

// let padresito = document.getElementById('contenedor');

// for (let i = 0; i < numeroParrafos; i++) {
//     let hijito =  document.createElement("p");
//     hijito.innerHTML = `Somos una fokin famili`;
//     padresito.appendChild(hijito);  
// }


