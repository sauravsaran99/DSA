const treeRecursion = require("./Recursion/TreeRecursion/treeRecursion");
const indirectRecurson = require("./Recursion/IndirectRecursion/indirectRecursion");
const nestedRecursion = require("./Recursion/NestedRecursion/nestedRecursion");
const sumOfNNaturalNumber = require("./Recursion/SumOfNnaturalNumber");
const factorialOfaNumber = require("./Recursion/Factorial/factorial");

treeRecursion(3);
indirectRecurson(20);
let nestedRecursionResult = nestedRecursion(95);
console.log("nested", nestedRecursionResult);
let sumNaturalNumber = sumOfNNaturalNumber(5);
console.log("sum", sumNaturalNumber);
let num = 5;
let factorialResult = factorialOfaNumber(num);
console.log(`factorial of ${num} is ${factorialResult}`);
