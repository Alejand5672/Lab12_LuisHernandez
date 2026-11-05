# Luis Alejandro Hernandez Marquez (241424)
# Teoria de la computacion 
# Prof. Pablo Koch
# Laboratorio 12 - Teoría de la computación

Solución en **JavaScript**, con funciones flecha (`=>`) como funciones lambda.
No requiere paquetes externos. Se recomienda Node.js 18 o posterior.

## Ejecutar

Desde PowerShell:

```powershell
cd C:\TeoriaC\Lab12
node demo.js
node --test
```

También se puede ejecutar `npm run demo` y `npm test`. No es necesario `npm install`.

Para cada problema:

```powershell
node problema2.js
node problema3.js
node problema4.js
```

Sin argumentos se usan exactamente los ejemplos del enunciado para los problemas 2, 3 y 4.

## Usar otras entradas

Edita los JSON de `datos/` o proporciona otro archivo. Las rutas son relativas al directorio actual.

```powershell
node problema2.js datos/diccionarios.json model
node problema2.js datos/diccionarios.json make
node problema3.js datos/matriz.json
node problema4.js datos/eliminar.json
```

- Problema 2: recibe una lista de objetos y el nombre de la clave (por defecto `model`).
  Orden ascendente, numérico para números y lexicográfico por unidades UTF-16 para textos,
  sensible a mayúsculas y acentos. Los valores deben ser todos textos o todos números finitos.
  Los empates conservan el orden original. No modifica la lista de entrada.
- Problema 3: recibe una matriz rectangular como lista de listas. `[]` y matrices sin columnas
  producen `[]`; en listas anidadas vacías no se puede preservar la dimensión original.
  También admite matrices rectangulares y no cambia la entrada.
- Probleman 4: recibe un objeto con `lista` y `eliminar`, ambas listas. Elimina todas las
  ocurrencias indicadas, ignora valores ausentes y conserva el orden del resto.
  Usa `includes`: distingue `1` de `"1"`, distingue acentos y mayúsculas, y compara
  objetos por identidad, no por contenido. Los ejemplos usan valores primitivos.
- Los archivos JSON inválidos, archivos ausentes o entradas incompatibles producen
  un mensaje de error y código de salida 1.

## Video y entrega

**Enlace de YouTube no listado: https://youtu.be/Lk5FPwj6_5o .**
