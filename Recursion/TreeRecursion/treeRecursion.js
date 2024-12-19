const treeRecursion = (n) => {
  //   console.log("This is tree recursion...!");
  if (n > 0) {
    console.log("%d ", n);
    treeRecursion(n - 1);
    treeRecursion(n - 1);
  }
};

module.exports = treeRecursion;
