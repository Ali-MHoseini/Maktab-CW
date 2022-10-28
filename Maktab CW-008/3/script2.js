const input = prompt("");
const regex = /\w+\*\d+/;

function checkRegex(regex,input) {

    if (regex.test(input)){
        return true;

    }else {
        alert("Sss");
        return false;
    }
    
}

function creating(element) {
    return `<${element}></${element}>`;
        
}

function createElem(regex,input,callback,callabck2) {
    let i = 0;
    let output = "";
    if (callback(regex,input)) {
        input = input.split("*");
        const element = input[0];
        const repNumber = input[1];
        while (i < repNumber){
        output += callabck2(element);
        i++;
    }
        return output; 
    }

}

console.log(createElem(regex,input,checkRegex,creating));