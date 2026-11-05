import { transponer } from './src/funciones.js';
import { ejecutarSiPrincipal, leerJSON, mostrar } from './src/cli.js';

export const ejemplo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
export const demostrar = (ruta) => {
  const matriz = leerJSON(ruta, ejemplo);
  console.log('PROBLEMA 3 - Matriz transpuesta');
  mostrar('Entrada', matriz);
  mostrar('Salida', transponer(matriz));
};
ejecutarSiPrincipal(import.meta.url, () => demostrar(process.argv[2]));
