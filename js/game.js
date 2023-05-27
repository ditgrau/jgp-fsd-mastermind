
//session
let selectedColors = JSON.parse(sessionStorage.getItem('newColors')); // mi array de colores del session
let selectedLevel = sessionStorage.getItem('level');

//dom
let gameBoard = document.getElementById("gameBoard");
let divSelectedColors = document.getElementById('levelBoard');
let divInsightColors = document.getElementById('insightCombo');
let dismissBtn = document.getElementById('dismissBtn');
let checkBtn = document.getElementById('checkBtn');

//variables 
let secretCombo = [];

// create secret and random combination
const colorsRandom = () => {
for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * selectedColors.length);
    secretCombo.push(selectedColors[randomIndex]);
    }
}
colorsRandom();
console.log (colorsRandom);

// secret board - contains the secret combination /////////////////// TENGO QUE OCULTARLA CLASS 'HIDEN'
const createInsightBoard = () => {
    for (let i = 0; i < 4; i++) {
        let insightBubble = document.createElement("div");
        insightBubble.classList.add('circleColorBoard');
        insightBubble.style.backgroundColor = secretCombo[i];
        divInsightColors.appendChild(insightBubble);
    }
}
createInsightBoard();

// level board - with chosen colors
const createLevelBoard = () => {
    for (let i = 0; i < selectedColors.length; i++) {
        let clonedSelector = document.createElement("div");
        clonedSelector.classList.add('circleColorBoard');
        clonedSelector.style.backgroundColor = selectedColors[i];
        divSelectedColors.appendChild(clonedSelector);
    }
}
createLevelBoard();

// Create gameboard from chosen level

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

// dismiss btn - ////////////////////////////////////// REVISAR SI FUNCIONA BIEN!

dismissBtn.addEventListener("click", () => {
    clicablearray.forEach((clicable) => {
    clicable.style.backgroundColor = "";
    });
});

// check btn //////////////////////////////////////////////////////////////////////

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

        // const rgbToHex = (rgb) => {
        //     let rgbArray = rgb.split(',').map(Number);
        //     let hexArray = rgbArray.map((value) => {
        //     let hex = value.toString(16);
        //         return hex.length === 1 
        //         ? '0' + hex 
        //         : hex;
        //         });
        //     return '#' + hexArray.join('');
        // };
        
const captureColors = () => {
    currentArray = clicablearray.map((e) => {
        let rgbColor = e.style.backgroundColor;
        // let rgbNumbers = rgbColor.slice(4, 17);
        // let hexNumbers = rgbToHex(rgbNumbers);
        return rgbColor;
    });
    console.log (currentArray);
};

// unblocking rows
        
const unblockRows = ()=>{
    console.log (currentArray);
    if (currentArray.every((element) => element !== "")) {
        rowContador++
        console.log (rowContador);
        clicablearray = Array.from(document.getElementsByClassName(`mirow-${rowContador}`));
        clicablearray.forEach((clicable)=> {
        clicable.addEventListener('click',() => pintarBolas(clicable));
    });
    }
}
