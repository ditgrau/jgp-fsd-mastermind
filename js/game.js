

//level board // chosen colors

let divSelectedColors = document.getElementById('levelBoard');
let selectedColors = JSON.parse(sessionStorage.getItem('newColors'));

const createLevelBoard = () => {
    for (let i = 0; i < selectedColors.length; i++) {
        let clonedSelector = document.createElement("div");
        clonedSelector.classList.add('circleColorBoard');
        clonedSelector.style.backgroundColor = selectedColors[i];
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
}
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


// GAMEBOARD 

let selectedLevel = sessionStorage.getItem('level');
let gameBoard = document.getElementById ("gameBoard");

// Create rows // cells // snitches

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
            }
    }
}
createRows (selectedLevel);




// esta funcion recorre el array de colores, ME SIRVE!!



let contador = 0;
const pintarBolas = () => {
    console.log("clic en el botón");
    if (contador<selectedColors.length) {
        clicable.style.backgroundColor = selectedColors[contador];
        contador ++;
    }else {
        contador = 0;
    }
    
    }

let clicable = document.getElementById("cell-0-row-0")
clicable.addEventListener('click', pintarBolas);


