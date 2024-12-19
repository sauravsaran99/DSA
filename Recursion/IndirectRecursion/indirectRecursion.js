const indirectRecurson = (n) => {
  function a(c) {
    if (c > 0) {
      console.log("a n", c);
      b(c - 1);
    }
  }

  function b(d) {
    if (d > 1) {
      console.log("b n", d);
      a(d / 2);
    }
  }

  a(n);
};

module.exports = indirectRecurson;
