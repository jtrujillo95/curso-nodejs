const path = require('node:path')

// Saber que barra separadora de carpetas utiliza el SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename('/tmp/some/password.txt')

console.log(base)


// remover extensión
const filename = path.basename('/tmp/some/password.txt', '.txt')
console.log(filename)

// obtener extensión de fichero
const extension = path.extname('image.jpg')
console.log(extension)
