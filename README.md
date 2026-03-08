[z3-playground](https://dirkarnez.github.io/z3-playground)
==========================================================
- [Z3Prover/z3: The Z3 Theorem Prover](https://github.com/Z3Prover/z3)
- [SMT-LIB The Satisfiability Modulo Theories Library](https://smt-lib.org/)
- [Freeform Editing | Online Z3 Guide](https://microsoft.github.io/z3guide/playground/Freeform%20Editing/)

### Notes
- Since z3 uses emscripten's threading, `crossOriginIsolated` should be allowed for z3 to leverage `SharedArrayBuffer`
  - [Window: crossOriginIsolated property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/crossOriginIsolated)
  - Using hack from [Allow setting COOP and COEP headers in Github Pages · community · Discussion #13309](https://github.com/orgs/community/discussions/13309)
    - [gzuidhof/coi-serviceworker: Cross-origin isolation (COOP and COEP) through a service worker for situations in which you can't control the headers (e.g. GH pages) · GitHub](https://github.com/gzuidhof/coi-serviceworker)
- The vite config is based on [chimenkamp/YAPNE-Yet-Another-Petri-Net-Editor at 6c1747e462a262bdc1d23d970716aa4f06be6799](https://github.com/chimenkamp/YAPNE-Yet-Another-Petri-Net-Editor/)

### C++
- [dirkarnez/z3-prebuilt](https://github.com/dirkarnez/z3-prebuilt)

### Step-by-step tutorial
- [Guess the Secret Formula | Online Z3 Guide](https://microsoft.github.io/z3guide/playground/Guess%20the%20Secret%20Formula/)

### Examples
- [Z3 JavaScript | Online Z3 Guide](https://microsoft.github.io/z3guide/programming/Z3%20JavaScript%20Examples/#using-z3-objects-wrapped-in-javascript)
  - [#integer-arithmetic](https://microsoft.github.io/z3guide/programming/Z3%20JavaScript%20Examples/#integer-arithmetic)

### Tutorials
- [Introduction to SMT with Z3](https://www.isec.tugraz.at/wp-content/uploads/2019/09/Introduction-to-SMT-with-Z3.pdf)
- [Programming Z3](https://theory.stanford.edu/~nikolaj/programmingz3.html#sec-proofs)
- [A Step-by-Step Guide to Harnessing the Power of Z3 Solver | by Mansoor Aldosari | Medium](https://aldosari.medium.com/a-step-by-step-guide-to-harnessing-the-power-of-z3-solver-a96c4aa1b619)
