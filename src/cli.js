import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

export const leerJSON = (ruta, ejemplo) => ruta === undefined
  ? ejemplo
  : JSON.parse(readFileSync(ruta, 'utf8').replace(/^\uFEFF/, ''));

export const mostrar = (etiqueta, valor) =>
  console.log(`${etiqueta}:\n${JSON.stringify(valor, null, 2)}`);

export const ejecutarSiPrincipal = (url, accion) => {
  if (process.argv[1] && url === pathToFileURL(resolve(process.argv[1])).href) {
    try {
      accion();
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exitCode = 1;
    }
  }
};
