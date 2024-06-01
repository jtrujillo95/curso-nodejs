const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
// usamos el promesas de readFile para que cuando termine muestre el texto
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => console.log('primer archivo', text))

console.log('---> Haciendo cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => console.log('segundo archivo', text))
