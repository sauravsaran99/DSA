const sumOfNNaturalNumber = (n) => {
  if (n === 0) {
    return 0;
  } else {
    return sumOfNNaturalNumber(n - 1) + n;
  }
};

module.exports = sumOfNNaturalNumber;
