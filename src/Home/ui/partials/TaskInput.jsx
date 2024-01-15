import { FaCalendarPlus } from 'react-icons/fa';

const TaskInput = () => {
  return (
    <form action="" method="post">
      <input type="text" name="taskinput" placeholder="Adicione uma nova tarefa" />
      <input type="submit" value="Criar" className="bg-[#1E6F9F] text-[#F2F2F2]">
        {FaCalendarPlus}
      </input>
    </form>
  );
};

export default TaskInput;
