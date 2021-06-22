const moduloTareas = require('./modulo/funcionDeTareas');

const process = require('process');

switch(process.argv[2]){
    case 'AGREGAR':
        let titulo = process.argv[3];
        if(!titulo){
            console.log('Tenes que escribir una tarea');
            break;
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo,estado)
        break;
    case 'LISTAR': 
        console.log('Listado de TAREAS:');
        moduloTareas.listarTareas()
        break;
    case 'FILTRAR':
        moduloTareas.TareaPorEstado(process.argv[3])
        break;
    case undefined: console.log('No indicaste ninguna opción');
    break;
    default: 
    console.log('La tarea es incorrecta.');
}