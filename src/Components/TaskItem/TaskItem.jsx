import React from 'react';
import "./TaskItem.css"

export const TaskItem = ( {tarea, completarTarea, borrarTarea} ) => {
  
    const {id, nombre, done} = tarea;
  
    const completar = () => {
          completarTarea(id)
    }
  
    const borrar = ()=> {
          borrarTarea(id)
    }
    
    
    return (
    <>
      <li className={`tarea-item ${done ? 'completed' : ''}`} key={id}>
        <div className="tarea-background"></div>

        <input type="checkbox" checked={done} />

        <div
          className={`nombre-item flex-1 ${done ? 'completed' : ''}`}
          style={{
            textDecoration: done ? 'line-through' : 'none',
            color: done && 'purple',
          }}
        >
          {nombre}
        </div>

        <div className="botones-item">
          <button
            className={`btn-completar ${done ? 'completed' : ''}`}
            onClick={completar}
          >
            ✔️
          </button>

          <button className="btn-borrar" onClick={borrar}>
            ✖️
          </button>
        </div>
      </li>
    </>
  );
};