import AddButton from '../components/AddButton';
import TaskInput from '../components/TaskInput';

const NewTask = () => {
  return (
    <div className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
      <TaskInput />
      <AddButton />
    </div>
  );
};

export default NewTask;
