//session
let selectedColors = JSON.parse(sessionStorage.getItem('newColors')); 
let selectedLevel = sessionStorage.getItem('level');

//dom
let gameBoard = document.getElementById("gameBoard");
let divSelectedColors = document.getElementById('levelBoard');
let divInsightColors = document.getElementById('insightCombo');
let dismissBtn = document.getElementById('dismissBtn');
let checkBtn = document.getElementById('checkBtn');

//variables 
let secretCombo = [];
let currentArray = [];
let captureRandom = [];


goWinner = () => {
    window.location.href = 'final.html';
}

// creacion de la combinacion secreta
const colorsRandom = () => {
for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * selectedColors.length);
    secretCombo.push(selectedColors[randomIndex]);
    }
}
colorsRandom();
console.log(secretCombo);

// secret board - contiene la combinacion secreta
const createInsightBoard = () => {
    for (let i = 0; i < 4; i++) {
        let insightBubble = document.createElement("div");
        insightBubble.classList.add('circleColorBoard');
        insightBubble.style.backgroundColor = secretCombo[i];
        divInsightColors.appendChild(insightBubble);
    }
}
createInsightBoard();

// level board - con los colores elegidos
const createLevelBoard = () => {
    for (let i = 0; i < selectedColors.length; i++) {
        let clonedSelector = document.createElement("div");
        clonedSelector.classList.add('circleColorBoard');
        clonedSelector.style.backgroundColor = selectedColors[i];
        divSelectedColors.appendChild(clonedSelector);
    }
}
createLevelBoard();

// Creacion del tablero a partir del nivel almacenado
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
            snitch.classList.add(`snitches-${i}`);
        }
        for (let j = 0; j < 4; j++) {
            let cellsrow = document.createElement("div");
            cellsrow.classList.add("circleColorBoard");
            rowsGameboard.appendChild(cellsrow);
            cellsrow.classList.add (`eachRow-${i}`)
        }
    }
}
createRows (selectedLevel);

// dismiss btn //
dismissBtn.addEventListener("click", () => {
    clicableArray.forEach((clicable) => {
    clicable.style.backgroundColor = "";
    });
});

// check btn ////////////////
// Pinta las celdas de cada fila con el click
let numeroClics = 0;
let rowContador = 0;
let clicableArray = Array.from(document.getElementsByClassName(`eachRow-${rowContador}`));
let snitchesArray = Array.from(document.getElementsByClassName(`snitches-${rowContador}`));

const paintBalls = (clicable) => {
    if (numeroClics<selectedColors.length) {
        clicable.style.backgroundColor = selectedColors[numeroClics];
        numeroClics ++;
    }else {
        numeroClics = 0;
    }
}

// invoca a la funcion
clicableArray.forEach((clicable)=> {
clicable.addEventListener('click',() => paintBalls(clicable));
});

// array para comparaciones
const captureColors = () => {
    currentArray = clicableArray.map((e) => {
    let rgbColor = e.style.backgroundColor;
    return rgbColor;
    });
    compareArray();
};

// Consola final del juego, redireccion para los que pierden
const printConsole = () =>{
    console.log ("aqui estoy");
    let i= 0;
    document.getElementById("gitConsole").classList.remove("mm-hidden");
    const loopConsole = () => {
    if (i<8) {
        console.log ("aqui tmbe");
        document.getElementById(`quotesConsole-${i}`).classList.remove("mm-hidden"); 
        i ++;
        setTimeout(loopConsole,1000);
        }
    }
    loopConsole ();
}

// desbloquea filas de una en una
const unblockRows = ()=>{

    if (currentArray.every((element) => element !== "") && rowContador < (parseInt(selectedLevel)-1)) {
        rowContador++
        clicableArray = Array.from(document.getElementsByClassName(`eachRow-${rowContador}`));
        snitchesArray = Array.from(document.getElementsByClassName(`snitches-${rowContador-1}`));
        clicableArray.forEach((clicable)=> {
        clicable.addEventListener('click',() => paintBalls(clicable));
        });
    } else {
            document.getElementById("mastermindHead").style.display = "none";
            document.getElementById("insightCombo").classList.remove("mm-hidden");
            printConsole(); 
    } 
}

// de hexadecimal a rgb
let divsForArray = Array.from(divInsightColors.querySelectorAll('.circleColorBoard'));

const compareArray = () => {
    captureRandom = divsForArray.map((div) => {
        let rgbRandom = div.style.backgroundColor;
        return rgbRandom;
    });
};

// funcion de comprobacion - sin fallos en las fichas blancas
    const firstMatch = () => {
        
        let blackWhiteElements = [];
        let newCurrent = currentArray.slice();
        let newCapture = captureRandom.slice();
        for (let i = 0; i < 4; i++) {
        if (newCapture.includes(newCurrent[i]) && newCurrent[i] === newCapture[i]) {
            newCurrent[i] = null;
            newCapture[i] = null;
            blackWhiteElements.push("#000000");
            }
        }
        for (let j = 0; j < 4; j++) {
        if (newCapture.includes(newCurrent[j]) && newCurrent[j] !== null) {
            const index = newCapture.indexOf(newCurrent[j]);
            if (index > -1) {
            newCapture[index] = null;
            }
            blackWhiteElements.push('#FFFFFF');
            newCurrent[j] = null;
        }
        }
        const snitchesBoard = () => {
            let colorSnitches = blackWhiteElements.sort();
            for (let i = 0; i < colorSnitches.length; i++) {
            let snitches = snitchesArray[i];
            let colorBn = colorSnitches[i];
            snitches.style.backgroundColor = colorBn;
        }
    };
    snitchesBoard();
    
// para los ganadores
    if (blackWhiteElements.length === 4 && blackWhiteElements.every(element => element === "#000000") ){
        document.getElementById("mastermindHead").style.display = "none";
        document.getElementById("insightCombo").classList.remove("mm-hidden");
        setTimeout(goWinner(),1500);
    }
};

firstMatch();



