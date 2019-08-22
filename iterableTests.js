class numIterator {
    constructor(numStore) {
        this.num1 = numStore.get().num1;
        this.num2 = numStore.get().num2;
    }
    next() {
        while (this.num1 < this.num2) {
            this.num1++;
            return { value: "hello", done: false };
        }
        return { done: true };
    }
}

class StoreNum {
    constructor(startNum, endNum) {
        this.num1 = startNum;
        this.num2 = endNum;
    }
    get() {
        return { num1: this.num1, num2: this.num2 };
    }

    set(startNum, endNum) {
        this.num1 = startNum;
        this.num2 = endNum;
    }
    
    [Symbol.iterator] () {
        return new numIterator(this);
    }

}

/*

StoreNum.prototype[Symbol.iterator] = function() {
    return new numIterator(this);
};

*/

let storeThisNum = new StoreNum(1, 2);
storeThisNum.set(2, 10);
console.log(storeThisNum.get());
for (let val of storeThisNum) {
    console.log(val);
}
console.log("break");
storeThisNum.set(1, 4);
for (let val of storeThisNum) {
    console.log(val);
}
console.log(StoreNum.prototype[Symbol.iterator]);