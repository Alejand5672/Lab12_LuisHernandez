import { demostrar as p2 } from './problema2.js';
import { demostrar as p3 } from './problema3.js';
import { demostrar as p4 } from './problema4.js';

[p2, p3, p4].forEach((demostrar) => {
  demostrar();
  console.log();
});
