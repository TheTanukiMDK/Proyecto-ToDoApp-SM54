import React from 'react';
import ReactDOM from 'react-dom';

function TaskModal({ isOpen, onClose, onSave, taskInput, setTaskInput, error }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h3 className="text-lg font-bold mb-4">Agregar Tarea</h3>
        
        <input
          type="text"
          placeholder="Nombre"
          value={taskInput.name}
          onChange={(e) => setTaskInput({ ...taskInput, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        
        <textarea
          placeholder="Descripción"
          value={taskInput.description}
          onChange={(e) => setTaskInput({ ...taskInput, description: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        ></textarea>

        {/* Mostrar error si existe */}
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <button
          onClick={onSave}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Guardar
        </button>

        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
        >
          Cancelar
        </button>
      </div>
    </div>,
    document.body
  );
}

export default TaskModal;
