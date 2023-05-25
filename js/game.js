
// level board - bubbles colored

let selectedColors = JSON.parse(sessionStorage.getItem('newColors'));
let divSelectedColors = document.getElementById('levelBoard');
let selectedLevel = sessionStorage.getItem('level');

const createLevelBoard = () => {
    for (let i = 0; i < selectedColors.length; i++) {
        let clonedSelector = document.createElement("div");
        clonedSelector.classList.add('circleColorBoard');
        clonedSelector.style.backgroundColor = selectedColors[i];
        // clonedSelector[i].addEventListener('click', clickSelector());
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
    console.log (secretCombo);
    console.log (selectedColors);
    
};
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



const createRows = (numberRows) => {

    for (let i = 0; i < numberRows; i++) {
        let rowsGameboard = document.createElement("div");
        rowsGameboard.classList.add("row");
        // rowsGameboard.id = `rowGameboard-${i}`;
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
            }
    }
}

createRows (selectedLevel);

// .some, si algun elemento del array cumple la condicion: estar dentro del array dos

