//TIC TAC TOE
const prompt = require('prompt-sync')();

// Create rules
const rules = "Please select a slot to place your input: \ntop left | top | top right\nmiddle left | middle | middle right\nbottom left | bottom | bottom right"
console.log(rules)

//create board
let gameboard = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
let isOver = false;

// Create the slots



//function to check if there a winner
const printBoard = () => {
    gameboard.forEach(el => {console.log(el)})
}

printBoard()

while(!isOver) {

    

//log empty board


//prompt user input

let userInput = prompt('Enter the slot you\'d like? ').toLowerCase()

let tl = gameboard[0][0]
    let t = gameboard[0][1]
    let tr = gameboard[0][2]
    let ml = gameboard[1][0]
    let m = gameboard[1][1]
    let mr = gameboard[1][2]
    let bl = gameboard[2][0]
    let b = gameboard[2][1]
    let br = gameboard[2][2]

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

console.log(t)

//is the user a winner?

if((tl == 'X') && (t == 'X') && (tr == 'X')) {
    console.log("You won!");
    isOver = true;    
} else if(ml == 'X' && m == 'X' && mr == 'X') {
    console.log("You won!");
    isOver = true;
} else if(bl == 'X' && b == 'X' && br == 'X') {
    console.log("You won!");
    isOver = true;
} else if(tl == 'X' && ml == 'X' && bl == 'X') {
    console.log("You won!");
    isOver = true;
} else if((t == 'X') && (m == 'X') && (b == 'X')) {
    console.log("You won!");
    isOver = true;
} else if(tr == 'X' && mr == 'X' && br == 'X') {
    console.log("You won!");
    isOver = true;
} else if(tl == 'X' && m == 'X' && br == 'X') {
    console.log("You won!");
    isOver = true;
} else if(bl == 'X' && m == 'X' && tr == 'X') {
    console.log("You won!");
    isOver = true;
} 

//is the computer a winner?

if(tl == 'O' && t == 'O' && tr == 'O') {
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
}


//log user's input


//computer chooses (random)


//is the spot available


//is there a winner


//log computer's choice


//winning row/column highlighted in different colour
//newest input always bold



}
