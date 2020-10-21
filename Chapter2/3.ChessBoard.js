const size = 8

const getLineBySize = (number) => {
    const isEven = number % 2;
    const sign =  isEven ? ' #' : '# '

    return String().padStart(size, sign);
}

const evenLine = getLineBySize(2)
const oddLine = getLineBySize(1)

const getLine = (number) => number % 2 === 0 ? evenLine : oddLine

for (let i = 1; i <= size; i += 1) {
    console.log(getLine(i))
}
