const express = require("express");
const treeRecursion = require("./Recursion/TreeRecursion/treeRecursion");
const indirectRecurson = require("./Recursion/IndirectRecursion/indirectRecursion");
const app = express();

treeRecursion(3);
indirectRecurson(20);
