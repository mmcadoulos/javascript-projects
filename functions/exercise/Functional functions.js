function makeLine(size, symbol = "#"){
    let line = "";
    for (let i = 0; i < size; i++){
        line += symbol;
    }
    return line;
}

//console.log(makeLine(5, "Q"));

function makeSquare(size, symbol = "#"){
    //////////////////////////////////////////////////////////////
    // let square = [];
    // for (let i = 0; i < size; i++){
    //     square.push(makeLine(size));
    // }
    // return square.join("\n");
    /////////////////////////////////////////////////////////////
    return makeRectangle(size, size, symbol);
}

// console.log(makeSquare(4, "Q"));

function makeRectangle(width, height, symbol = "#"){
    let rectangle = [];
    for (let i = 0; i < height; i++){
        rectangle.push(makeLine(width, symbol));
    }
    return rectangle.join("\n");
}

// console.log(makeRectangle(5, 3, "ω"));

function makeDownwardStairs(height, symbol = "#"){
    let downwardStairs = [];
    for (let i = 0; i < height; i++){
        downwardStairs.push(makeLine(i + 1, symbol));
    }
    return downwardStairs.join("\n");
}

// console.log(makeDownwardStairs(5, "ע"));

function makeSpaceLine(numSpaces, numChars, symbol = "#"){
    let spaceLine = makeLine(numChars, symbol);
    for (let i = 0; i < numSpaces; i++){
        spaceLine = " " + spaceLine + " ";
    }
    return spaceLine;
}

// console.log(makeSpaceLine(3, 5, "Δ"));

function makeIsoscelesTriangle(height, symbol = "#"){
    let isoscelesTriangle = [];
    for (let i = 0; i < height; i++){
        isoscelesTriangle.push(makeSpaceLine(height - i - 1, 2 * i + 1, symbol));
    }
    return isoscelesTriangle.join("\n");
}

// console.log(makeIsoscelesTriangle(5, "Ω"));

function makeDiamond(height, symbol = "#"){
    let top = makeIsoscelesTriangle(height, symbol);
    let bottom = makeIsoscelesTriangle(height, symbol).split("\n").reverse().join("\n");
    return top + "\n" + bottom;
}

console.log(makeDiamond(5, "א"));

// function makeReverseTriangle(height){
//     let reverseTriangle = makeIsoscelesTriangle(height);
//     for (let i = 0; i < reverseTriangle.length; i++) {
//         reverseTriangle = reverseTriangle[i] + reverseTriangle;
//     }

//     return reverseTriangle;
// }

// console.log(makeReverseTriangle(5));