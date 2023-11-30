import { useState, useEffect } from 'react';
import swal from 'sweetalert2';


const useTareas = () => {

    const [listaTareas, setTareas] = useState([]);
    const [tareaAgregada, setTareaAgregada] = useState(false);
    const [confirmarBorrarTodo, setConfirmarBorrarTodo] = useState(false);

    const agregarTarea = (nuevaTarea) => {
        setTareas((t) => [...t, { id: t.length + 1, nombre: nuevaTarea, done: false }]);
        setTareaAgregada(true);
        setConfirmarBorrarTodo(false);
    };

    const completarTarea = (id) => {
        const nuevasTareas = listaTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, done: !tarea.done } : tarea
        );
        setTareas(nuevasTareas);
    };

    const borrarTarea = (id) => {
        const nuevasTareas = listaTareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    const borrarTodo = () => {
        setConfirmarBorrarTodo(true);
    };


    useEffect(() => {
        if (tareaAgregada) {
        swal
            .fire({
            position: 'top',
            icon: 'success',
            title: 'Tarea agregada!',
            showConfirmButton: false,
            timer: 1300,
            heightAuto: false,
            })
            .then(() => setTareaAgregada(false));
        }
    }, [tareaAgregada]);


    useEffect(() => {
        if (listaTareas.length > 0) {
        const allDone = listaTareas.every((tarea) => tarea.done);

        if (allDone) {
            swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has completado todas las tareas!',
            icon: 'success',
            position: 'top',
            timer: 2000,
            showConfirmButton: false,
            customClass: {
                htmlContainer: 'custom-container',
            },
            });
        }
        }
    }, [listaTareas]);


    useEffect(() => {
        if (confirmarBorrarTodo && listaTareas.length > 0) {
          swal
            .fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!',
            })
            .then((result) => {
              if (result.isConfirmed) {
                setTareas([]);
                swal.fire({
                  title: 'Deleted!',
                  text: 'Your tasks have been deleted.',
                  icon: 'success',
                });
              }
            })
            .finally(() => setConfirmarBorrarTodo(false));
        }
      }, [confirmarBorrarTodo, listaTareas]);
      

    return {
        listaTareas,
        agregarTarea,
        completarTarea,
        borrarTarea,
        borrarTodo,
    };
};

export default useTareas;
