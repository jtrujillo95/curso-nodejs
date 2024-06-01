// const { promisify } = require('node:util')


// convierte una versión de un modulo nativo que solo tiene callbacks a promesas
// const readFilePromises = promisify(fs.readFile)

const { readFile } = require('node:fs/promises')

// IIFE - Inmediatly Invoked Function Expression
;(async () => {
  console.log('Leyendo el primer archivo...')
  const text1 = await readFile('./archivo.txt', 'utf-8')
  console.log('text1', text1)
  console.log('---> Haciendo cosas mientras lee el archivo')
  console.log('Leyendo el segundo archivo...')
  const text2 = await readFile('./archivo2.txt', 'utf-8')
  console.log('text2', text2)
})()
