const fs = require ('fs');
const tareas = JSON.parse(fs.readFileSync('./database/tareas.json','utf-8'));
module.exports = {
    leerJson : function(){
        return tareas;

    },
    agregarTarea : function (titulo,estado){
        let nuevaTarea = {
            titulo,
            estado
        }
        tareas.push(nuevaTarea);
        this.guardarTarea(tareas);//guardo tarea
        this.listarTareas//con nueva tarea guardada
        console.log("La tarea fué guardada.");
    },
    listarTareas : function (){
        tareas.forEach(tarea =>{
            console.log(tarea);
        });
    
        },
    TareaPorEstado : function (filtro){
        let tareas = this.leerJson();
        let filtrado = tareas.filter(function(tareas){
            return tareas.estado === filtro;
        })
        console.log(filtrado);
    },
    guardarTarea: function(tareas){
        fs.writeFileSync('./database/tareas.json', JSON.stringify(tareas,null,2), 'utf-8');
    }
    }
