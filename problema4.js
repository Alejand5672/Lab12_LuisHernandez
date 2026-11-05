import { eliminarElementos } from './src/funciones.js';
import { ejecutarSiPrincipal, leerJSON, mostrar } from './src/cli.js';

export const ejemplo = {
  lista: ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'],
  eliminar: ['amarillo', 'cafe', 'blanco'],
};
export const demostrar = (ruta) => {
  const datos = leerJSON(ruta, ejemplo);
  if (datos === null || typeof datos !== 'object') {
    throw new TypeError('Se requiere un objeto con "lista" y "eliminar".');
  }
  console.log('PROBLEMA 4 - Eliminar elementos');
  mostrar('Entrada', datos.lista);
  mostrar('Elementos a borrar', datos.eliminar);
  mostrar('Salida', eliminarElementos(datos.lista, datos.eliminar));
};
ejecutarSiPrincipal(import.meta.url, () => demostrar(process.argv[2]));
