const Task = ({ text, onDelete }) => {
  return (
    <li className="w-[100%] h-[4.5rem] p-4 mb-3 gap-3 bg-[#262626] border border-[#333] rounded-lg text-[#F2F2F2] shadow-md ">
      <label>
        <input type="checkbox"></input>
        {text}
        <button onClick={onDelete}></button>
      </label>
    </li>
  );
};

export default Task;
