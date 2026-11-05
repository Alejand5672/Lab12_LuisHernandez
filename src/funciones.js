// Las funciones flecha son las funciones lambda de JavaScript.
export const ordenarPorClave = (lista, clave) => {
  if (!Array.isArray(lista)) throw new TypeError('La entrada debe ser una lista.');
  if (typeof clave !== 'string' || clave.length === 0) {
    throw new TypeError('La clave debe ser un texto no vacío.');
  }
  const valores = lista.map((objeto) => {
    if (objeto === null || typeof objeto !== 'object' || Array.isArray(objeto)
      || !Object.hasOwn(objeto, clave)) {
      throw new TypeError(`Cada diccionario debe contener la clave "${clave}".`);
    }
    const valor = objeto[clave];
    if (typeof valor !== 'string' && !(typeof valor === 'number' && Number.isFinite(valor))) {
      throw new TypeError('Los valores a ordenar deben ser textos o números finitos.');
    }
    return valor;
  });
  if (valores.some((valor) => typeof valor !== typeof valores[0])) {
    throw new TypeError('Los valores de la clave deben tener el mismo tipo.');
  }
  // Copiar antes de sort evita modificar el arreglo recibido. Empates conservan orden.
  return [...lista].sort((a, b) => a[clave] < b[clave] ? -1 : a[clave] > b[clave] ? 1 : 0);
};

export const transponer = (matriz) => {
  if (!Array.isArray(matriz) || !matriz.every((fila) => Array.isArray(fila))) {
    throw new TypeError('La matriz debe ser una lista de listas.');
  }
  if (matriz.length === 0) return [];
  const columnas = matriz[0].length;
  if (!matriz.every((fila) => fila.length === columnas)) {
    throw new TypeError('La matriz debe ser rectangular: todas las filas de igual longitud.');
  }
  // Cada columna j de la entrada se convierte en una fila de la salida.
  return matriz[0].map((_, j) => matriz.map((fila) => fila[j]));
};

export const eliminarElementos = (lista, elementos) => {
  if (!Array.isArray(lista) || !Array.isArray(elementos)) {
    throw new TypeError('La lista original y los elementos a borrar deben ser listas.');
  }
  return lista.filter((elemento) => !elementos.includes(elemento));
};
