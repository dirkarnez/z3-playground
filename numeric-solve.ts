// solve x > 2 and y < 10 and x + 2y = 7
// microsoft.github.io/z3guide/programming/Z3%20JavaScript%20Examples/#integer-arithmetic
const x = Z3.Int.const('x');
const y = Z3.Int.const('y');
Z3.solve(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7))
