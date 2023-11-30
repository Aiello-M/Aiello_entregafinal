import React from 'react';
import { TaskItem } from '../TaskItem/TaskItem';
import "./TaskList.css"
import borrarTodoIcono from '../../assets/icono-borrar.png';

export const TaskList = ({ listaTareas, completarTarea, borrarTarea, borrarTodo }) => {
  return (
    <ul className="lista-tareas">
      {listaTareas.length === 0 ? (
        <p className="mensaje-vacio">No hay tareas pendientes...</p>
      ) : (
        listaTareas.map((tarea) => (
          <TaskItem
            key={tarea.id}
            tarea={tarea}
            completarTarea={completarTarea}
            borrarTarea={borrarTarea}
          />
        ))
      )}

      <li className="borrar-todo">
        <button onClick={borrarTodo}>
          <img src={borrarTodoIcono} alt="borrar todo" />
        </button>
      </li>
    </ul>
  );
};
