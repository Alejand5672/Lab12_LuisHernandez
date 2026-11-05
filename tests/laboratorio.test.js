import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { ordenarPorClave, transponer, eliminarElementos } from '../src/funciones.js';
import { ejemplo as telefonos } from '../problema2.js';

test('P2: ejemplo del enunciado y entrada intacta', () => {
  const entrada = Object.freeze(telefonos.map((x) => Object.freeze({ ...x })));
  assert.deepEqual(ordenarPorClave(entrada, 'model').map((x) => x.model), [2, 7, 216]);
  assert.deepEqual(entrada.map((x) => x.model), [216, 2, 7]);
});
test('P2: orden por texto y por números negativos', () => {
  assert.deepEqual(ordenarPorClave(telefonos, 'make').map((x) => x.make), ['Mi Max', 'Nokia', 'Samsung']);
  assert.deepEqual(ordenarPorClave([{ k: 10 }, { k: -1 }, { k: 2 }], 'k'), [{ k: -1 }, { k: 2 }, { k: 10 }]);
});
test('P2: vacío y empates estables', () => {
  assert.deepEqual(ordenarPorClave([], 'k'), []);
  const datos = [{ k: 1, id: 'a' }, { k: 0, id: 'b' }, { k: 1, id: 'c' }];
  assert.deepEqual(ordenarPorClave(datos, 'k').map((x) => x.id), ['b', 'a', 'c']);
});
test('P2: clave ausente, tipos incompatibles y valores inválidos', () => {
  [null, [null], [{}], [{ k: true }], [{ k: Infinity }], [{ k: 1 }, { k: '2' }]]
    .forEach((lista) => assert.throws(() => ordenarPorClave(lista, 'k'), TypeError));
  assert.throws(() => ordenarPorClave([], ''), TypeError);
});
test('P3: ejemplo del enunciado', () => {
  assert.deepEqual(transponer([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
});
test('P3: rectangular, doble transposición y entrada intacta', () => {
  const x = Object.freeze([Object.freeze([1, 2, 3]), Object.freeze([4, 5, 6])]);
  assert.deepEqual(transponer(x), [[1, 4], [2, 5], [3, 6]]);
  assert.deepEqual(transponer(transponer(x)), x);
});
test('P3: vacía, cero columnas, una fila y una columna', () => {
  assert.deepEqual(transponer([]), []);
  assert.deepEqual(transponer([[], []]), []);
  assert.deepEqual(transponer([[1, 2]]), [[1], [2]]);
  assert.deepEqual(transponer([[1], [2]]), [[1, 2]]);
});
test('P3: rechaza matrices irregulares y tipos incorrectos', () => {
  [null, [1, 2], [[1], [2, 3]]].forEach((x) => assert.throws(() => transponer(x), TypeError));
});
test('P4: ejemplo, valor ausente ignorado y entrada intacta', () => {
  const lista = Object.freeze(['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro']);
  assert.deepEqual(eliminarElementos(lista, ['amarillo', 'cafe', 'blanco']), ['rojo', 'verde', 'azul', 'gris', 'negro']);
  assert.equal(lista.length, 7);
});
test('P4: borra todas las ocurrencias y conserva duplicados restantes', () => {
  assert.deepEqual(eliminarElementos([1, 2, 1, 3, 3], [1, 1, 9]), [2, 3, 3]);
  assert.deepEqual(eliminarElementos([], [1]), []);
  assert.deepEqual(eliminarElementos([1, 2], []), [1, 2]);
  assert.deepEqual(eliminarElementos([1], [1]), []);
});
test('P4: igualdad estricta por tipo y validación', () => {
  assert.deepEqual(eliminarElementos([1, '1'], [1]), ['1']);
  assert.throws(() => eliminarElementos(null, []), TypeError);
  assert.throws(() => eliminarElementos([], 'rojo'), TypeError);
});
test('CLI: los tres programas y la demo se ejecutan', () => {
  for (const archivo of ['problema2.js', 'problema3.js', 'problema4.js', 'demo.js']) {
    const r = spawnSync(process.execPath, [archivo], { cwd: fileURLToPath(new URL('..', import.meta.url)), encoding: 'utf8' });
    assert.equal(r.status, 0, `${archivo}: ${r.stderr}`);
    assert.match(r.stdout, /PROBLEMA/);
  }
});
test('CLI: archivos JSON personalizados y errores con salida no cero', () => {
  const cwd = fileURLToPath(new URL('..', import.meta.url));
  for (const args of [
    ['problema2.js', 'datos/diccionarios.json', 'make'],
    ['problema3.js', 'datos/matriz.json'],
    ['problema4.js', 'datos/eliminar.json'],
  ]) {
    const r = spawnSync(process.execPath, args, { cwd, encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    assert.match(r.stdout, /Salida/);
  }
  for (const args of [['problema3.js', 'no-existe.json'], ['problema2.js', 'datos/diccionarios.json', 'inexistente'], ['problema3.js', 'package.json']]) {
    const r = spawnSync(process.execPath, args, { cwd, encoding: 'utf8' });
    assert.equal(r.status, 1);
    assert.match(r.stderr, /Error:/);
  }
});
