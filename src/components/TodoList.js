import React, { useState, useEffect } from 'react';
import TaskModal from './TaskModal';

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const [filter, setFilter] = useState('all');
    const [modalOpen, setModalOpen] = useState(false);
    const [taskInput, setTaskInput] = useState({ name: '', description: '', status: 'pending' });
    const [error, setError] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!taskInput.name.trim() || !taskInput.description.trim()) {
            setError('Los campos "Nombre" y "Descripción" son obligatorios.');
            return;
        }
        const newTasks = [...tasks, { ...taskInput, id: Date.now() }];
        setTasks(newTasks);
        setModalOpen(false);
        setTaskInput({ name: '', description: '', status: 'pending' });
    };

    const toggleTaskStatus = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'all'
            ? true
            : filter === 'pending'
                ? task.status === 'pending'
                : task.status === 'completed'
    );

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Lista de Tareas</h2>
                    <select
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value="all">Todas las tareas</option>
                        <option value="pending">Tareas Pendientes</option>
                        <option value="completed">Tareas Finalizadas</option>
                    </select>
                </div>
                <ul className="space-y-4">
                    {filteredTasks.map(task => (
                        <li
                            key={task.id}
                            className={`p-4 rounded-md ${task.status === 'completed' ? 'bg-green-500' : 'bg-gray-50'
                                }`}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold">{task.name}</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => toggleTaskStatus(task.id)}
                                        className="bg-lime-600 text-white px-2 py-1 rounded-md"
                                    >
                                        {task.status === 'pending' ? 'Completar' : 'Pendiente'}
                                    </button>
                                    <button
                                        onClick={() => deleteTask(task.id)}
                                        className="bg-red-600 text-white px-2 py-1 rounded-md"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-700">{task.description}</p>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4"
                >
                    Agregar Tarea
                </button>
            </div>
            <TaskModal
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false);
                    setError('');
                }}
                onSave={addTask}
                taskInput={taskInput}
                setTaskInput={setTaskInput}
                error={error}  // Pasamos el error al modal
            />
        </div>
    );
}

export default TodoList;
