import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "../src";

//1.testing have description func 
describe("capitalize fucntion", () => {

    test("takes a string and returns it with the first character capitalized", () => {
        expect(capitalize("darija")).toBe("Darija")
    })

    test("handle empty str", () => {
        expect(capitalize("")).toBe("")
    })

    test("handle string with only one character", () => {
        expect(capitalize("d")).toBe("D")
    })

    test("handle string with space in front and end of string", () => {
        expect(capitalize("darija ")).toBe("Darija ")
    })
})


describe("reverse string function", () => {

    test("handle our string and reverse it.", () => {
        expect(reverseString("hello world")).toBe("world hello");
    })

    test("handle empty string", () => {
        expect(reverseString(" ")).toBe(" ");
    })

    test("handle number", () => {
        expect(reverseString("1 2 3")).toBe("3 2 1");
    })

    test("handle space in beginning and in the end of string", () => {
        expect(reverseString(" universe one ")).toBe(" one universe ");
    })

    test("can't handle one word in string", () => {
        expect(reverseString("universeworld")).toEqual("dlrowesrevinu");
    })
})


describe("calculate 4 different opertions", () => {
    test("handling addition num1 + num2", () => {
        expect(calculator.add(1, 2)).toEqual(3)
    })

    test("handling subtraction num1 - num2", () => {
        expect(calculator.subtract(1, 2)).toEqual(-1)
    })

    test("handling dividen num1 / num2", () => {
        expect(calculator.divide(1, 2)).toEqual(0.5)
    })

    test("handling multiplication num1 * num2", () => {
        expect(calculator.multiply(1, 2)).toEqual(2)
    })

    test("doesn't handle divsion zero with num1 / num2", () => {
        expect(calculator.multiply(1, 0)).toEqual()
    })

})


describe("caesarCipher encryption", () => {

    test("shift the lower case string by 5 step", () => {
        expect(caesarCipher("world", 5)).toBe("btwqi")
    })

    test("shift the upper case string by 5 step", () => {
        expect(caesarCipher("WORLD", 5)).toBe("BTWQI")
    })

    test("shift the upper case string by 5 step", () => {
        expect(caesarCipher("WORLD", 5)).toBe("BTWQI")
    })

    test("testing doesn't handle any character outside the range a-z ", () => {
        expect(caesarCipher(".:.:.:")).toBe(".:.:.:")
    })

    test("testing doesn't handle empty string", () => {
        expect(caesarCipher("")).toBe("")
    })
})



describe("analyzeArray function", () => {

    test("test for average, min, max, length", () => {
        const arr =  [1, 8, 3, 4, 2, 6];
        const expectedOut = {average: 4, length: 6, max: 8, min: 1};
        expect(analyzeArray(arr)).toEqual(expectedOut)
    })

    test("test for max", () => {
        const arr = [1, 3, 4, 8]
        const expectedOut = 8;
        expect(analyzeArray(arr).max).toBe(expectedOut)
    })
    test("test for length", () => {
        expect(analyzeArray([1, 3, 4, 2, 6]).length).toBe(5)
    })

    test("test empty str", () => {
        expect(analyzeArray([])).toEqual({average: NaN, length: 0, max: -Infinity, min: Infinity})
    })

    test("test min str", () => {
        expect(analyzeArray([1,2,4,6]).min).toEqual(1)
    })

    test.only("test average str", () => {
        expect(analyzeArray([1,3,4,6]).average).toEqual(3.5)
    })

})
