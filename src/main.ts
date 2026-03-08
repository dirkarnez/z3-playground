// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


import { init, Z3_ast_print_mode } from 'z3-solver/build/browser';

const { Context } = await init();
const { Solver, Int, And, setPrintMode } = new Context('main');

setPrintMode(Z3_ast_print_mode.Z3_PRINT_SMTLIB_FULL);

  // // solve x > 2 and y < 10 and x + 2y = 7
  // // https://microsoft.github.io/z3guide/programming/Z3%20JavaScript%20Examples/#integer-arithmetic
const x = Int.const('x');
const y = Int.const('y');

const solver = new Solver();
solver.add(And(x.gt(2), y.lt(10), x.add(y.mul(2)).eq(7)));
if (await solver.check()) {
  console.log(await solver.model().toString());
  console.log(await solver.congruenceExplain(x, y).toString());
}
