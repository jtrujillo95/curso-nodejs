// const { promisify } = require('node:util')


// convierte una versión de un modulo nativo que solo tiene callbacks a promesas
// const readFilePromises = promisify(fs.readFile)

const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log('primer archivo', text1)
  console.log('segundo archivo', text2)
})
