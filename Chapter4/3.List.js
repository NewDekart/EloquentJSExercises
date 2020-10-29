/*Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3]
as argument. Also write a listToArray function that produces an array from a list.
Then add a helper function prepend, which takes an element and a list and creates a new list
that adds the element to the front of the input list, and nth, which takes a list and
a number and returns the element at the given position in the list (with zero referring
    to the first element) or undefined when there is no such element.*/

const arrayToList = (array) => {
    const arrayLength = array.length

    const getListItem = (index) => {
        if (index === arrayLength) {
            return null
        }

        return {
            value: array[index],
            rest: getListItem(index + 1)
        }
    }

    return getListItem(0)
}

const listToArray = (list) => {
    const iter = (listItem, array) => {
        const newArray = [...array, listItem.value]

        if (listItem.rest === null) {
            return newArray
        }

        return iter(listItem.rest, newArray)
    }

    return iter(list, [])
}

const prepend = (value, list) => {
    return {
        value,
        rest: list
    }
}

const nth = (list, index) => {
    const iter = (listItem, currentIndex) => {
        if (!listItem) {
            return
        }
        if (currentIndex === index) {
            return listItem.value
        }

        return iter(listItem.rest, currentIndex + 1)
    }

    return iter(list, 0)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
