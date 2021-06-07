#### Problem

I want to create a suite of tests ([/test/helper.js](https://github.com/kevinhodges/jest-test/blob/master/test/helper.js)) that can be executed from a [number](https://github.com/kevinhodges/jest-test/blob/master/test/minus.test.js) of [contexts](https://github.com/kevinhodges/jest-test/blob/master/test/sum.test.js). Each context however needs to [build a variable](https://github.com/kevinhodges/jest-test/blob/master/test/sum.test.js#L12) at execution time and pass it to the test suite. Is that possible?
