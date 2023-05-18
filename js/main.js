/* esta funcion almacena el dato del nombre 
y cambia la pantalla por la de seleccionar nivel */

// const changeToLevel = () => {
//     let user = document.getElementById("userName").value;
//     sessionStorage.setItem('user', user);

//     // cambiar a la pagina nivel
//     document.getElementById("mm-character").style.display = "none";
//     document.getElementById("mm-levels").style.display = "block";
// };

/* Funciones para la seleccion de colores segun nivel */
const bubbles4 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelOneBubbles").classList.remove("mm-hidden");
}

const bubbles5 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelTwoBubbles").classList.remove("mm-hidden");
}

const bubbles6 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelThreeBubbles").classList.remove("mm-hidden");
}



// const modePVP = () => {
//     document.getElementById("electionMode-p").classList.add("hidden");
//     document.getElementById("electionMode-cpu").classList.add("hidden");
//     document.getElementById("nombres-home-vampires").classList.remove("hidden");
//     document.getElementById("nombres-home-werewolves").classList.remove("hidden");
//     document.getElementById("botonPlayers").classList.remove("hidden")
// TODO  revisar esto en el codigo de Felipe

/* estas constantes identifican los botones de nivel*/

// let level1 = document.getElementById('levelOne');
// let level2 = document.getElementById('levelTwo');
// let level3 = document.getElementById('levelThree');


// const bubblesLevel = () => {
//     let level = document.getElementById("userName").value;
//     sessionStorage.setItem('level', level);

//     document.getElementById("mm-levelOneBubbles").style.display = "none";
//     document.getElementById("mm-levelTwoBubbles").style.display = "block";
// }

// mm-levelBubbles
// mm-levelTwoBubbles
// mm-levelThreeBubbles
// estan todas hidden 

// Agrega un controlador de eventos a cada botón
// boton1.addEventListener('click', handleClick);
// boton2.addEventListener('click', handleClick);
// boton3.addEventListener('click', handleClick);

// Función manejadora del evento de clic
// function handleClick(event) {
  // Obtén el id del botón en el que se hizo clic
//   const botonId = event.target.id;
  
  // Imprime el id del botón en la consola
//   console.log('Se hizo clic en el botón con id:', botonId);






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


/* En la esquina superior derecha, se mostrarán los colores disponibles, 
los cuales serán variables y dependerán del nivel elegido por el jugador 
(por defecto, serán 4). Para esto, se utilizará un procedimiento llamado 
"crear_colores" que generará dinámicamente los elementos llamados "bolacolores". 
Cada uno de estos elementos obtendrá su color de un vector previamente 
creado e inicializado llamado "Colores".

En la esquina inferior derecha, se mostrará la solución del juego. 
Inicialmente, este panel no será visible. Se implementará un procedimiento 
único llamado "crear_solucion" que creará en tiempo de ejecución los elementos 
"bolasolucion" necesarios. El color de cada uno de estos elementos se seleccionará 
aleatoriamente del vector "Colores" mencionado anteriormente. Es importante destacar 
que los colores de la solución podrán repetirse. Sería recomendable almacenar 
la solución en un vector aparte. */


/* Cada vez que se inicie una nueva partida, se mostrarán los componentes vacíos 
para que el jugador pueda ingresar su combinación. Para esto, se implementará un 
procedimiento único llamado "crear_linea_bola" que generará dinámicamente los 
elementos llamados "bola" según sea necesario. El número de estos componentes será 
una constante con valor 4.*/

// También será necesario implementar un procedimiento llamado "borrar_componentes" que permita eliminar todos los componentes creados durante el juego cuando se seleccione la opción de Nuevo Juego.