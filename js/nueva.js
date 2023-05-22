const cadena = "Hola, mundo";

const caracteresVisibles = cadena.split('').map((caracter) => {
  return caracter === ' ' ? ' ' : '_'; // Muestra un espacio en blanco directamente y reemplaza otros caracteres por guiones bajos (_)
});

console.log(caracteresVisibles.join('hola mundo')); // Imprime los caracteres visibles separados por espacios
