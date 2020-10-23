/*Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

const isEven = (originNum) => {
    const positiveNum = Math.abs(originNum)

    const iter = (number) => {
        if (number === 0)
            return true
        if (number === 1)
            return false
        return iter(number - 2)
    }

    return iter(positiveNum)
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-2));
