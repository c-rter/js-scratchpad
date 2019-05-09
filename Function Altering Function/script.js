function formatter(f) {
    return (...args) => {
      let result = f(...args);
      console.log(typeof args);
      console.log(args);
      console.log(args[3]);
      console.log(f + "called with", ...args, ", returned", result);
     return result;
    };
  }
  formatter(Math.max)(3, 2, 1, 5, 6, 2, 5);
  let formatTest = formatter(Math.max)(3, 2, 1, 5, 6, 2, 5);
  console.log(formatTest);
  console.log(typeof formatTest);
  // → calling with [3, 2, 1]
  // → called with [3, 2, 1] , returned 1