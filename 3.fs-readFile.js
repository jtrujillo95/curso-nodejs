const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
// usamos el callback de readFile para que cuando termine muestre el texto
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log('primer archivo')
  console.log(text)
})
console.log('---> Haciendo cosas mientras lee el archivo')
console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo archivo')
  console.log(text);
})
