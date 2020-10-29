/*Write a function deepEqual that takes two values and returns true only if they are the same value
or are objects with the same properties, where the values of the properties are equal when compared
with a recursive call to deepEqual.*/


// whithout arrays and functions

const deepEqual = (value1, value2) => {
    if (value1 !== null
        && value2 !== null
        && typeof (value1) === 'object'
        && typeof (value2) === 'object'
    ) {
        return Object.keys(value1).every((el) => {
            return deepEqual(value1[el], value2[el])
        })
    }

    return value1 === value2
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
