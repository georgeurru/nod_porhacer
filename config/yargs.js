const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca por completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado de una tarea', opts)
    .command('borrar', 'Elimina una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}