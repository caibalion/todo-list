export const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '') {
    alert('Insira uma tarefa válida');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Limpar o campo de entrada após adicionar a tarefa
  taskInput.value = '';
};
