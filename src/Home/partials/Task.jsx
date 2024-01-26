import { GoTrash } from 'react-icons/go';

const Task = ({ text, onDelete }) => {
  return (
    <li className="w-[100%] h-[4.5rem] p-4 mb-3 bg-[#262626] border border-[#333] rounded-lg text-[#F2F2F2] leading-5 shadow-md">
      <div className="grid grid-flow-col grid-cols-[1fr, 7fr, 1fr]">
        <input
          className="appearance-none p-0 w-[18px] h-[18px] bg-no-repeat bg-unchecked checked:bg-checked"
          type="checkbox"
          maxLength="166"
        ></input>
        {text}
        <button className="text-[#808080] " onClick={onDelete}>
          <GoTrash />
        </button>
      </div>
    </li>
  );
};

export default Task;
