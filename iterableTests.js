class numInterator {
    constructor(numStore) {
        this.passedObjectVal1 = numStore.get().num1;
    }
    get () {
        return this.passedObjectVal1;
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
}

let storeThisNum = new StoreNum(1, 2);
storeThisNum.set(2, 10);
console.log(storeThisNum.get());
let iteratorTest = new numInterator (storeThisNum);
console.log(iteratorTest.get());