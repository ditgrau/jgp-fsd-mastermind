const changeToLevel = () => {
    // recoger el dato del user
    // let user = document.getElementById(userName).value;
    // sessionStorage.setItem('user', user);

    // cambiar a la pagina nivel
    document.getElementById("mm-character").style.display = "none";
    document.getElementById("mm-levels").style.display = "block";
};
// TODO  revisar esto en el codigo de Felipe


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