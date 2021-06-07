// function I want to test
const sum = require('../src/index');

// utilties
const helper = require('./helper')

let objectToTest;

beforeAll(async () => {
  console.log('beforeAll()')
  // simulate doing something to sum object i.e. initialising it, potentially with an await
  objectToTest = sum
});

describe('MATH!', () => {
  
  const testData = {
    test1: [1, 2],
    test2: [2, 3]
  }

  // problem: this code gets called in Jest's "collection phase" and so variables built in beforeAll for example, don't exist in this scope yet
  // is there a way I can organise this too allow for the tests to be defined entirely in the helper (as they are in this failing example)?
  helper.runTests(objectToTest, testData)

});
