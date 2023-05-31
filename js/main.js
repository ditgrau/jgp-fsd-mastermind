const game = () => {

let selectedLevel = sessionStorage.getItem('level');
console.log ('este es el nivel seleccionado' + selectedLevel);
    
    console.log (selectedLevel);
    switch (selectedLevel) {
        case '10':
            checkForGame(4);
            break;
        case '8':
            checkForGame(5);
            break;
        case '6':
            checkForGame(6);
            break;
        default:
            break;
    }
};

// funcion para comprobar que todos los color picker se han rellenado
const checkForGame = (data) => {
    let saveArray = JSON.parse(sessionStorage.getItem('newColors')); 
    if (saveArray && saveArray.length === data) {
        window.location.href = "./game.html";
    }else {
        mmtypewriter("<-- Rellena todos los colores -->", 90, comment4);
        mmtypewriter("<-- Rellena todos los colores -->", 90, comment5);
        mmtypewriter("<-- Rellena todos los colores -->", 90, comment6);
    }
}

// funcion de retorno a la home
const comeBackHome = () => {
    window.location.href = "../index.html";
}

// session storage // recoger el nivel
const saveLevel = (levelRows) => {
    sessionStorage.setItem('level', levelRows);
}

// refrescar el juego sin perder session storage
const playAgain = () => {
    window.location.reload();
}
// session storage // recoger el nombre usuario
const saveName = () => {  
    let userPlayer = document.getElementById("userName").value; 
    if (userPlayer.length!==0){
    sessionStorage.setItem('user', userPlayer);
    window.location.href = "settings.html";
    }else {
        mmtypewriter("<-- Escribe tu nombre -->", 80, comment2)
    }
}

//Función para cambiar la Navbar de la pagina de nivel"
const changeNavbarLevel = () => {
    document.getElementById("nb-player").style.display = "none";
    document.getElementById("nb-level").style.display = "block";
};

// Funciones onclick para cambiar a la pantalla de elegir colores segun nivel //
const bubbles4 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelOneBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    saveLevel(10);
}

const bubbles5 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelTwoBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    saveLevel(8);
}

const bubbles6 = () => {
    document.getElementById("mm-levels").style.display = "none";
    document.getElementById("mm-levelThreeBubbles").classList.remove("mm-hidden");
    changeNavbarLevel();
    saveLevel(6);
}

// // funcion consola Git
// const gitConsole = ()=> {
//     document.getElementById("gitText").classList.remove("mm-hidden");
// }

// Color-picker y arrays // deberia haber hecho un mapeo (?) mirarlo...
let arrayColorsEasy = Array.from(document.getElementsByName("pickerEasy"));
let arrayColorsMedium = Array.from(document.getElementsByName("pickerMedium"));
let arrayColorsDif = Array.from(document.getElementsByName("pickerDif"));

let emptyBubblesEasy = Array.from( document.getElementsByClassName("circleColorEasy"));
let emptyBubblesMedium = Array.from( document.getElementsByClassName("circleColorMedium"));
let emptyBubblesDif = Array.from(document.getElementsByClassName("circleColorDif"));

let arrayNewColors = [];

const loopGetColors = (arrayLevel, emptyBubblesLevel) => { 

for (let i = 0; i < arrayLevel.length; i++) {
    arrayLevel[i].addEventListener('change', () => { 
    emptyBubblesLevel[i].style.backgroundColor = arrayLevel[i].value;
    arrayNewColors[i] = arrayLevel[i].value;
    
    let newColors = JSON.stringify(arrayNewColors);
    sessionStorage.setItem('newColors', newColors);
    }); 
}
return arrayNewColors;
}

loopGetColors(arrayColorsEasy, emptyBubblesEasy);
loopGetColors(arrayColorsMedium, emptyBubblesMedium);
loopGetColors(arrayColorsDif, emptyBubblesDif);


// efecto maquina de escribir

    // declaracion de variables
const comment1 = document.getElementById("first-comment");
const comment2 = document.getElementById("second-comment");
const comment3 = document.getElementById("third-comment");
const comment4 = document.getElementById("fourth-comment");
const comment5 = document.getElementById("fifth-comment");
const comment6 = document.getElementById("sixth-comment");

    // funcion
const mmtypewriter = (comment, time, div)=>{
    let arrayComent = comment.split("");
    div.innerHTML = "";
    let cont = 0
    let writeComment = setInterval (()=>{
        div.innerHTML += arrayComent[cont];
        cont ++
        if (cont === arrayComent.length) {
            clearInterval(writeComment);
        }
    }, time)
}

mmtypewriter("<-- Juego creado por Judit Grau -->", 90, comment1)

// datos jugador
let nameFinal = document.getElementById('userNameFinal');
nameFinal.innerHTML = `${sessionStorage.getItem('user')}`;
console.log(`${sessionStorage.getItem('user')}`);