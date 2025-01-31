import React from 'react'

function TodoList() {
    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Lista de Tareas</h2>
                        <select className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            <option>Todas las tareas</option>
                            <option>Tareas por terminar</option>
                            <option>Tareas pendientes</option>
                        </select>
                    </div>
                    <ul className="space-y-4">
                        <li className="p-4 bg-gray-50 rounded-md">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold">Tarea 1</span>
                                <button className="bg-lime-600 text-white px-2 py-1 rounded-md">Completar</button>
                                
                            </div>
                            <p className="text-gray-700">Descripción de la tarea 1.</p>
                        </li>
                        <li className="p-4 bg-green-500 rounded-md">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold">Tarea 2</span>
                                
                            </div>
                            <p className="text-gray-700">Descripción de la tarea 2.</p>
                        </li>
                    </ul>
                    <div class="mt-4">
            <button class="bg-blue-500 text-white px-4 py-2 rounded w-full">Agregar Tarea</button>
        </div>
                </div>
            </div>

        </>
    )
}

export default TodoList