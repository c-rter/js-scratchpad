function formatter(f) {
    return (...args) => {
      let result = f(...args);
      console.log(f + "called with", ...args, ", returned", result);
     return result;
    };
  }
  formatter(Math.max)(3, 2, 1, 5, 6, 2, 5);
  let formatTest = formatter(Math.max)(3, 2, 1, 5, 6, 2, 5);
