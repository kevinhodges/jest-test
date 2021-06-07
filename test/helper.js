// this module defines a list of generic tests to be executed from a number of contexts (i.e. objectToTest)

module.exports = {
 runTests: function runTests(objectToTest, testData ) {
    
    console.log('objectToTest', objectToTest)
    console.log('testData', testData)

    describe('a and b = 3', () => {
      it('does something to a and b and equal 3', () => {
        expect(objectToTest(testData['test1'][0], testData['test1'][1])).toBe(3);
      });
    })

    describe('a and b = 5', () => {
      it('does something to a and b and equal 5', () => {
        expect(objectToTest(testData['test2'][0], testData['test2'][1])).toBe(5);
      });
    })
  } 
}