
function betweenTwoNumbers(n1, n2) {

    //  return m => m > n;
    let returnFunction = (m) => {

        if ((m > n1) && (m < n2)) {
            return true;
        } else {
            return false;
        }
    }
    return returnFunction;

}
let between2And8 = betweenTwoNumbers(2, 8);
console.log(between2And8(10));
