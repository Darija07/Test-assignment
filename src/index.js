function capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);

}


function reverseString(str) {
    // str = "hello one" //split("")
    // ["hello", "one"] //array
    // ["one", "hello"] //reverse() array
    // str = "one hello" //join("")

    return (str.split(" ").reverse().join(" "));
}

const calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
}

function caesarCipher(str, shift) {
    let result = "";
    ///hello
    for (let i = 0; i < str.length; i++) {
        //convert string to code
        let alpCode = str.charCodeAt(i)
        // shifted the character 
        let codeIsShifted = shiftedCode(alpCode, shift)
        // from decimal to text 
        let encryptionChar = String.fromCharCode(codeIsShifted);
        //string 
        result += encryptionChar;
    }

    return result;
}


//retrun new unicode that represents the shifted character 
function shiftedCode(code, shift) {
    // The range 65-90 represents uppercase letters in the ASCII UTF-8  
    if (code >= 65 && code <= 90) {
        return shiftUpperCase(code, shift)
    } else if (code >= 97 && code <= 122) {//The range 97-122 represents lowercase letters in the ASCII base2 binary and =&&,  ||  = or 
        return shiftLowerCase(code, shift);
    } else {
        //non character and letter
        return code;
    }
}


function shiftUpperCase(code, shift) {
    return ((code - 65 + shift) % 26) + 65;
}

function shiftLowerCase(code, shift) {
    return ((code - 97 + shift) % 26) + 97
}

function analyzeArray(arr) {
    // 123 = sum/ arr.length
    const length = arr.length;
    //use reduce number to add everyone number in arr 
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / length;
    // ... = you spread operator the arr
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average,
        length,
        max,
        min
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }