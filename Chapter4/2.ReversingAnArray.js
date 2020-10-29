/*For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements
in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument by reversing its elements.
Neither may use the standard reverse method.*/

const reverseArray = (initialArray) => {
    const initialArrayLastIndex = initialArray.length - 1
    const result = []

    for (let i = initialArrayLastIndex; i >= 0; i -= 1) {
        result.push(initialArray[i])
    }

    return result
}

const reverseArrayInPlace = (array) => {
    const initialLastIndex = array.length - 1

    for (let i = 0; i < array.length; i += 2) {
        const elem = array[i]
        array.unshift(elem)
    }

    for (let i = initialLastIndex; i >=0; i -= 1) {
        array.pop()
    }

    return array
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
