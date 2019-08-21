class numInterator {

}

class StoreNum {
    constructor(startNum, endNum) {
        this.num1 = startNum;
        this.num2 = endNum;
    }
    get () {
            return `${this.num1}, ${this.num2}`;
    }
    set(startNum, endNum) {
        this.num1 = startNum;
        this.num2 = endNum;
    }
}

let storeThisNum = new StoreNum(1, 2);
storeThisNum.set(3, 4);
console.log(storeThisNum.get());