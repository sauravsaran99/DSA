const nestedRecursion = (n) => {
  if (n > 100) {
    return n - 10;
  } else {
    return nestedRecursion(nestedRecursion(n + 11));
  }
};

module.exports = nestedRecursion;
