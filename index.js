//TIC TAC TOE
const prompt = require('prompt-sync')();

// Create rules
const rules = "Please select a slot to place your input: \ntop left | top | top right\nmiddle left | middle | middle right\nbottom left | bottom | bottom right"
console.log(rules)

//create board
let gameboard = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]


// Create the slots

let tl = gameboard[0][0]
let t = gameboard[0][1]
let tr = gameboard[0][2]
let ml = gameboard[1][0]
let m = gameboard[1][1]
let mr = gameboard[1][2]
let bl = gameboard[2][0]
let b = gameboard[2][1]
let br = gameboard[2][2]

//function to check if there a winner
const printBoard = () => {
    gameboard.forEach(el => {console.log(el)})
}

//log empty board
printBoard()

//prompt user input

let userInput = prompt('Enter the slot you\'d like? ').toLowerCase()

console.log(t)
//is the spot available + error handling
switch (userInput) {
    case 'top left':
        tl === '-' ? gameboard[0][0] = 'X' : console.log("Choose again.")
        break;
    case 'top':
        t === '-' ? gameboard[0][1] = 'X' : console.log("Choose again.")
        break;
    case 'top left':
        tr === '-' ? gameboard[0][2] = 'X' : console.log("Choose again.")
        break;
    case 'middle left':
        ml === '-' ? gameboard[1][0] = 'X' : console.log("Choose again.")
        break;
    case 'middle':
        m === '-' ? gameboard[1][1] = 'X' : console.log("Choose again.")
        break;
    case 'middle right':
        mr === '-' ? gameboard[1][2] = 'X' : console.log("Choose again.")
        break;
    case 'bottom left':
        bl === '-' ? gameboard[2][0] = 'X' : console.log("Choose again.")
        break;
    case 'bottom':
        b === '-' ? gameboard[2][1] = 'X' : console.log("Choose again.")
        break;
    case 'bottom right':
        br === '-' ? gameboard[2][2] = 'X' : console.log("Choose again.")
        break;
    default:
        console.log("Choose again.");
}

printBoard()

//is there a winner?


//log user's input


//computer chooses (random)


//is the spot available


//is there a winner


//log computer's choice


//winning row/column highlighted in different colour
//newest input always bold
