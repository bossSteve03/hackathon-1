//TIC TAC TOE
const prompt = require('prompt-sync')();

// Create rules
const rules = "Please select a slot to place your input: \ntop left | top | top right\nmiddle left | middle | middle right\nbottom left | bottom | bottom right"
console.log(rules)

//create board
let gameboard = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
let isOver = false;
function computerInputFunction() {
    let wrongChoice = true

    while(wrongChoice = true){
        const computerInput = () => {
        let c = Math.floor(Math.random()*9)+1
        return c
        }
        switch(computerInput()){
            case '1':
                tl === '-' ? ((gameboard[0][0] = 'O'), wrongChoice = false) : wrongChoice = true;
                break;
            case '2':
                t === '-' ? ((gameboard[0][1] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '3':
                tr === '-' ? ((gameboard[0][2] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '4':
                ml === '-' ? ((gameboard[1][0] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '5':
                m === '-' ? ((gameboard[1][1] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '6':
                mr === '-' ? ((gameboard[1][2] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '7':
                bl === '-' ? ((gameboard[2][0] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '8':
                b === '-' ? ((gameboard[2][1] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
            case '9':
                br === '-' ? ((gameboard[2][2] = 'O'), wrongChoice = false) : wrongChoice = true
                break;
        }
    
    }
}

// Create the slots



//function to check if there a winner

const printBoard = () => {
    gameboard.forEach(el => {console.log(el)})
}

printBoard()

while(!isOver) {

    const computerWin = () => {if(tl == 'O' && t == 'O' && tr == 'O') {
        console.log("The computer won!");
        isOver = true;    
    } else if(ml == 'O' && m == 'O' && mr == 'O') {
        console.log("The computer won!");
        isOver = true;
    } else if(bl == 'O' && b == 'O' && br == 'O') {
        console.log("The computer won!");
        isOver = true;
    } else if(tl == 'O' && ml == 'O' && bl == 'O') {
        console.log("The computer won!");
        isOver = true;
    } else if(t == 'O' && m == 'O' && b == 'O') {
        console.log("The computer won!");
        isOver = true;
    } else if(tr == 'O' && mr == 'O' && br == 'O') {
        console.log("The computer won!");
        isOver = true;
    } else if(tl == 'O' && m == 'O' && br == 'O') {
        console.log("The computer won!");
        isOver = true;
    } else if(bl == 'O' && m == 'O' && tr == 'O') {
        console.log("The computer won!");
        isOver = true;
    }}

    const win = () => {
        if((tl == 'X') && (t == 'X') && (tr == 'X')) {
            console.log("You won!");
            isOver = true;
            return    
        } else if(ml == 'X' && m == 'X' && mr == 'X') {
            console.log("You won!");
            isOver = true;
            return
        } else if(bl == 'X' && b == 'X' && br == 'X') {
            console.log("You won!");
            isOver = true;
            return
        } else if(tl == 'X' && ml == 'X' && bl == 'X') {
            console.log("You won!");
            isOver = true;
            return
        } else if((t == 'X') && (m == 'X') && (b == 'X')) {
            console.log("You won!");
            isOver = true;
            return
        } else if(tr == 'X' && mr == 'X' && br == 'X') {
            console.log("You won!");
            isOver = true;
            return
        } else if(tl == 'X' && m == 'X' && br == 'X') {
            console.log("You won!");
            isOver = true;
            return
        } else if(bl == 'X' && m == 'X' && tr == 'X') {
            console.log("You won!");
            isOver = true;
            return
        } else isOver = false; return
    }
    
    let tl = gameboard[0][0]
    let t = gameboard[0][1]
    let tr = gameboard[0][2]
    let ml = gameboard[1][0]
    let m = gameboard[1][1]
    let mr = gameboard[1][2]
    let bl = gameboard[2][0]
    let b = gameboard[2][1]
    let br = gameboard[2][2]
    

//log empty board


//prompt user input
win()
computerWin()
if(isOver == true){
    break
}
let userInput = prompt('Enter the slot you\'d like? ').toLowerCase()

//is the spot available + error handling
switch (userInput) {
    case 'top left':
        tl === '-' ? (gameboard[0][0] = 'X') : console.log("Choose again.")
        break;
    case 'top':
        t === '-' ? (gameboard[0][1] = 'X') : console.log("Choose again.")
        break;
    case 'top right':
        tr === '-' ? (gameboard[0][2] = 'X') : console.log("Choose again.")
        break;
    case 'middle left':
        ml === '-' ? (gameboard[1][0] = 'X') : console.log("Choose again.")
        break;
    case 'middle':
        m === '-' ? (gameboard[1][1] = 'X') : console.log("Choose again.")
        break;
    case 'middle right':
        mr === '-' ? (gameboard[1][2] = 'X') : console.log("Choose again.")
        break;
    case 'bottom left':
        bl === '-' ? (gameboard[2][0] = 'X') : console.log("Choose again.")
        break;
    case 'bottom':
        b === '-' ? (gameboard[2][1] = 'X') : console.log("Choose again.")
        break;
    case 'bottom right':
        br === '-' ? (gameboard[2][2] = 'X') : console.log("Choose again.")
        break;
    default:
        console.log("Choose again.");
}

printBoard()

//computer chooses (random)
computerInputFunction();

printBoard()

//is the spot available


//is there a winner


//log computer's choice


//winning row/column highlighted in different colour
//newest input always bold



}
