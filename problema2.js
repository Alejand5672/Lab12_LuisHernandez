import { ordenarPorClave } from './src/funciones.js';
import { ejecutarSiPrincipal, leerJSON, mostrar } from './src/cli.js';

export const ejemplo = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];
export const demostrar = (ruta, clave = 'model') => {
  const lista = leerJSON(ruta, ejemplo);
  console.log(`PROBLEMA 2 - Orden ascendente por "${clave}"`);
  mostrar('Entrada', lista);
  mostrar('Salida', ordenarPorClave(lista, clave));
};
ejecutarSiPrincipal(import.meta.url, () => demostrar(process.argv[2], process.argv[3]));
