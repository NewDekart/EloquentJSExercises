const { Group } = require('./2.Group')

class GroupIterator {
    constructor(group) {
        this.index = 0
        this.group = group
    }

    next() {
        if (this.index === this.group.length) return {done: true}

        const value = this.group.getElementByIndex(this.index)
        this.index +=1

        return {value, done: false}
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this)
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
