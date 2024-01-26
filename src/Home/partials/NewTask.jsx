import { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import Task from './Task';

export default function NewTask() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') {
      alert('Insira uma tarefa válida.');
      return;
    }

    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
        <div>
          <input
            type="text"
            name="tasks"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Adicione uma nova tarefa"
            className="text-[#808080] bg-[#262626] w-[39rem] h-14 rounded-lg border border-[#0D0D0D] p-4 leading-[22.4px]"
          />
        </div>
        <button
          onClick={addTask}
          className="bg-[#1E6F9F] text-[#F2F2F2] p-4 leading-[22.4px] h-14 rounded-lg ml-2 flex font-bold items-center gap-2"
        >
          Criar
          <FiPlusCircle />
        </button>
      </div>

      <div className="grow basis-auto bg-[#1A1A1A] flex">
        <div className="m-auto mt-20 w-[736px]">
          <div className="flex justify-between mb-6">
            <div className="text-[#4EA8DE]">
              Tarefas criadas
              <span className="ml-2 rounded-full bg-[#333333] text-[#D9D9D9] py-[2px] px-2">0</span>
            </div>
            <div className="text-[#8284FA]">
              Concluídas
              <span className="ml-2 rounded-full bg-[#333333] text-[#D9D9D9] py-[2px] px-2">0</span>
            </div>
          </div>
          <div className="h-[60dvh]">
            <ul>
              {tasks.map((task, index) => (
                <Task key={index} text={task} onDelete={() => deleteTask(index)} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
