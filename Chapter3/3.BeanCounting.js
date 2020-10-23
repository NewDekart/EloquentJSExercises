/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.*/

const countBs = (string) => countChar(string, 'B')

/*Next, write a function called countChar that behaves like countBs,
except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.*/

function countChar(string, symbol) {
    let count = 0
    let currentIndex = string.indexOf(symbol)

    while (currentIndex !== -1) {
        count += 1
        const startFrom = currentIndex + 1
        currentIndex = string.indexOf(symbol, startFrom)
    }

    return count
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
