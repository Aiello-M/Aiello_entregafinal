import React, { useState } from "react"
import "./TaskForm.css"

export const TaskForm = ({ agregarTarea }) => {

    const[nuevaTarea, setNuevaTarea] = useState("");
    const [error, setError] = useState("");

    
    const manejarCambio = (e) => {
        setNuevaTarea(e.target.value);
        setError("");
    }

    const manejarIngreso =(e) => {
        e.preventDefault();

        if (nuevaTarea.trim() !== "") {
            agregarTarea(nuevaTarea);
            setNuevaTarea("");
          } else {
            setError("Campo vacío. Por favor, ingrese una tarea.");
          }
    }
  
    return (
    <>
        <form onSubmit={manejarIngreso}>
            <button type="submit" className="btn-agregar" > ➕ </button>
            <input
                type="text"
                placeholder="Ingrese una nueva Tarea"
                name="nuevaTarea"
                value={nuevaTarea}
                onChange={manejarCambio}
            />

        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
    
    </>
  )
}

