//matchers definitions
const matchers = (exp) => ({
  toEq: (assertion) => {
      resultMessage(exp, assertion)
  },
  toThrowError: (assertion) => {
    var exp;
    try {
      exp();
    }
    catch(error) {
      exp = error.message
    }
    finally{
      resultMessage(exp, assertion)
    }
  },
  toBeAnInstanceOf: (assertion) => {
    if (exp instanceof assertion) {
      console.log('%c Pass! Expected: ' + exp + ' Got: ' + assertion, 'color:#25A300')
      return true
    } else {
      console.log('%c Fail! Expected: ' + exp + ' Got: ' + assertion, 'color:#f75')
      return false
    }
  }
});

//takes in a description and code to execute in the form of a function
const describe = (description, fn)=> {
  console.log(description);
  fn();
};

// can function that is usually the it function. Takes in message and function to execute
const can = (message, fn) => {
  console.log(' -- ' + message);
  fn();
};

// expect function
const expect = (exp) => matchers(exp)

//result function
function resultMessage(exp, assert){
  if (exp === assert) {
    console.log('%c Pass! Expected: ' + exp + ' Got: ' + assert, 'color:#25A300')
    return true
  } else {
    console.log('%c Fail! Expected: ' + exp + ' Got: ' + assert, 'color:#f75')
    return false
  }
};
