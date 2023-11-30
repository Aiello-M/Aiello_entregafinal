import React from 'react';
import { TaskForm } from './Components/TaskForm/TaskForm.jsx';
import { TaskList } from './Components/TaskList/TaskList.jsx';
import Card from './Components/Tasks/Card/Card.jsx';
import useTareas from './Components/Tasks/useTareas.js';

function AppTareas() {
  const {
    listaTareas,
    agregarTarea,
    completarTarea,
    borrarTarea,
    borrarTodo,
  } = useTareas();

  return (
    <Card>
      <h1 className="text-3xl font-bold">App de Tareas</h1>
      <TaskForm agregarTarea={agregarTarea} />
      <h3 className="separator"> </h3>
      <TaskList
        listaTareas={listaTareas}
        completarTarea={completarTarea}
        borrarTarea={borrarTarea}
        borrarTodo={borrarTodo}
      />
    </Card>
  );
}

export default AppTareas;