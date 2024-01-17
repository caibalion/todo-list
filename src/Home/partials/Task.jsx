const Task = ({ text, onDelete }) => {
  return (
    <li className="w-11 text-xl text-yellow-300">
      {text}
      <button onClick={onDelete}></button>
    </li>
  );
};

export default Task;
