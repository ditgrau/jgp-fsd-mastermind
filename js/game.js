
//session
let selectedColors = JSON.parse(sessionStorage.getItem('newColors')); // mi array de colores del session
let selectedLevel = sessionStorage.getItem('level');
console.log ('este es el nivel seleccionado' + selectedLevel);

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
console.log (secretCombo);

// secret board - contains the secret combination /////////////////// TENGO QUE OCULTARLA CLASS 'HIDdEN'
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

// check btn //////////////////////////////////////////////////////////////////////

// Paint the cells of each row

let numeroClics = 0;
let rowContador = 0;
let clicableArray = Array.from(document.getElementsByClassName(`eachRow-${rowContador}`));
let snitchesArray = Array.from(document.getElementsByClassName(`snitches-${rowContador}`));


const paintBalls = (clicable) => {
    console.log("clic en el botón");
    if (numeroClics<selectedColors.length) {
        clicable.style.backgroundColor = selectedColors[numeroClics];
        numeroClics ++;
    }else {
        numeroClics = 0;
    }
}
clicableArray.forEach((clicable)=> {
clicable.addEventListener('click',() => paintBalls(clicable));
});

const captureColors = () => {
    currentArray = clicableArray.map((e) => {
        let rgbColor = e.style.backgroundColor;
        return rgbColor;
    });
    compareArray();
};

// unblocking rows

const unblockRows = ()=>{
    if (currentArray.every((element) => element !== "")) {
        rowContador++
        console.log (rowContador);
        clicableArray = Array.from(document.getElementsByClassName(`eachRow-${rowContador}`));
        clicableArray.forEach((clicable)=> {
        clicable.addEventListener('click',() => paintBalls(clicable));
    });
    }
}

let divsForArray = Array.from(divInsightColors.querySelectorAll('.circleColorBoard'));

const compareArray = () => {
    captureRandom = divsForArray.map((div) => {
        let rgbRandom = div.style.backgroundColor;
        return rgbRandom;
    });
};


// incluyendo posicion






// const firstMatch = () => {

//     console.log (captureRandom);
//     console.log (currentArray);

//     let blackWhiteElements = [];
//     let commonElements = [];

//     for (let i = 0; i < 5; i++) {
//     if (currentArray.includes(captureRandom[i]) && !commonElements.includes(captureRandom[i])) {
//         if (captureRandom[i] === currentArray[i]) {
//             blackWhiteElements.push('#FF0000');
//         }else {
//             blackWhiteElements.push('#FFFFFF');
//         }
//         }
//         console.log (blackWhiteElements);
//     }






    // const firstMatch = () => {

    //     console.log (captureRandom);
    //     console.log (currentArray);
    
    //     let blackWhiteElements = [];
    //     let commonElements = [];
    
    //     for (let i = 0; i < 5; i++) {
    //     if (currentArray.includes(captureRandom[i]) && (captureRandom[i] === currentArray[i])) {
    //         commonElements.push(captureRandom[i]);
    //         blackWhiteElements.push('#FFFFFF');
    //         }else if (currentArray.includes(captureRandom[i]) && !commonElements.includes(captureRandom[i])) {
    //             blackWhiteElements.push('#FF0000');
    //         }
    //         }
    //         console.log (blackWhiteElements);
    //     }
    
        


    // const firstMatch = () => {

    //     console.log (captureRandom);
    //     console.log (currentArray);
    
    //     let blackWhiteElements = [];
    //     let commonElements = [];
    
    //     for (let i = 0; i < 5; i++) {
    //     if (currentArray.includes(captureRandom[i]) && (captureRandom[i] === currentArray[i])) {
    //         currentArray[i] = null;
    //         blackWhiteElements.push('#FFFFFF');
    //         }else if (currentArray.includes(captureRandom[i])) {
    //             blackWhiteElements.push('#FF0000');
    //         }
    //         }
    //         console.log (blackWhiteElements);
    //     }
    
    // console.log (firstMatch());


    // const firstMatch = () => {
    //     let blackWhiteElements = [];
    //     let newCurrent = currentArray.slice();
    //     let newCapture = captureRandom.slice();

    //     for (let i = 0; i < newCapture.length; i++) {
    //     if (newCapture.includes(newCurrent[i]) && (newCurrent[i] === newCapture[i])) {
    //         blackWhiteElements.push('#FFFFFF');
    //         newCurrent[i] = null;
    //         newCapture[i] = null;
    //         console.log (newCurrent);
    //         console.log (newCapture);
         
    //         }else if (newCapture.includes(newCurrent[i])) {
    //         blackWhiteElements.push('#FF0000');
    //         newCurrent[i] = null;
    //         console.log (newCurrent);
    //         console.log (newCapture);
            
    //         }
    //     }
    //     console.log(blackWhiteElements);
    //     }

    //     firstMatch();


    const firstMatch = () => {
        let blackWhiteElements = [];
        let newCurrent = currentArray.slice();
        let newCapture = captureRandom.slice();

        for (let i = 0; i < 4; i++) {
        if (newCapture.includes(newCurrent[i]) && newCurrent[i] === newCapture[i]) {
            newCurrent[i] = null;
            newCapture[i] = null;
            blackWhiteElements.push('#FFFFFF');
            console.log(newCurrent);
            console.log(newCapture);
            }
        }

        for (let j = 0; j < 4; j++) {
        if (newCapture.includes(newCurrent[j]) && newCurrent[j] !== null) {
            const index = newCapture.indexOf(newCurrent[j]);
            if (index > -1) {
            newCapture[index] = null;
            }
            blackWhiteElements.push('#FF0000');
            newCurrent[j] = null;
            console.log(newCurrent);
            console.log(newCapture);
        }
        }

        console.log(blackWhiteElements);
    }

    firstMatch();










    

    // let getWhite = whiteElements.length - blackElements.length;
    // let blackWhite = blackElements.concat(getWhite);
    // console.log (blackWhite);
    // return blackWhite


// const unblockSnitches = ()=>{
//         console.log (rowContador);
//         clicableArray = Array.from(document.getElementsByClassName(`eachRow-${rowContador}`));
//         clicableArray.forEach((clicable)=> {
//         clicable.addEventListener('click',() => paintBalls(clicable));
//     });
//     }
