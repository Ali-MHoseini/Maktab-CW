const width = 5;

function area(width) {
    return width*width;
}

function squere(width,callback) {
    return callback(width);
}

console.log(squere(width,area));