const os = require('node:os')

console.log('Información del sistema operativo')
console.log('----------------------------------')
console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
console.log('Cpus del sistema operativo', os.cpus()) // <---- Vamos a poder escalar procesos en Node
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('Uptime', os.uptime() / 60 / 60)