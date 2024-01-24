function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++){
        line += "#";
    }
    return line;
}

//console.log(makeLine(5));

function makeSquare(size){
    //////////////////////////////////////////////////////////////
    // let square = [];
    // for (let i = 0; i < size; i++){
    //     square.push(makeLine(size));
    // }
    // return square.join("\n");
    /////////////////////////////////////////////////////////////
    return makeRectangle(size, size);
}

// console.log(makeSquare(4));

function makeRectangle(width, height){
    let rectangle = [];
    for (let i = 0; i < height; i++){
        rectangle.push(makeLine(width));
    }
    return rectangle.join("\n");
}

// console.log(makeRectangle(5, 3));

function makeDownwardStairs(height){
    let downwardStairs = [];
    for (let i = 0; i < height; i++){
        downwardStairs.push(makeLine(i + 1));
    }
    return downwardStairs.join("\n");
}

// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let spaceLine = makeLine(numChars);
    for (let i = 0; i < numSpaces; i++){
        spaceLine = " " + spaceLine + " ";
    }
    return spaceLine;
}

//console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height){
    let isoscelesTriangle = [];
    for (let i = 0; i < height; i++){
        isoscelesTriangle.push(makeSpaceLine(height - i - 1, 2 * i + 1));
    }
    return isoscelesTriangle.join("\n");
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    let top = makeIsoscelesTriangle(height);
    let bottom = makeIsoscelesTriangle(height).split("\n").reverse().join("\n");
    return top + "\n" + bottom;
}

//console.log(makeDiamond(5));

// function makeReverseTriangle(height){
//     let reverseTriangle = makeIsoscelesTriangle(height);
//     for (let i = 0; i < reverseTriangle.length; i++) {
//         reverseTriangle = reverseTriangle[i] + reverseTriangle;
//     }

//     return reverseTriangle;
// }

// console.log(makeReverseTriangle(5));