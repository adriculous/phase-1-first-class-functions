// take a callback as an argument, call the callback function, doesn't matter what this function returns, as long as it's a callback function

function receivesAFunction(callback) {
  callback();
}

// takes no arguments, returns a named function

function returnsANamedFunction() {
  const myGreetings = function () {
    console.log("Greetings, world!");
  };
  return myGreetings;
}

// takes no arguments, returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm a no-named function!");
  };
}
