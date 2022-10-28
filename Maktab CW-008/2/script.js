const array = ["Ali","Morteza","Alireza"];

function calcLength (name)  {
    return name.length;
}

function cloneMap(array,inpFunction) {
    let newArray = new Array;
    array.forEach(item => {
        newArray.push(inpFunction(item));
    });
    return newArray;
}

console.log(cloneMap(array,calcLength));
