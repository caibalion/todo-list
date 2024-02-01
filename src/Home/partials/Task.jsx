import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import { GoTrash } from 'react-icons/go';

const Task = ({ text, onDelete }) => {
  return (
    <li className="w-[100%] h-[4.5rem] p-4 mb-3 bg-[#262626] border border-[#333] rounded-lg text-[#F2F2F2] leading-5 shadow-md">
      <div className="flex gap-2">
        <button className="appearance-none m-[0.375rem] p-0 h-[1.125rem]">
          <FaRegCircle fill="#4EA8DE" className="w-[1.125rem] h-full" />
        </button>
        <span className="grow-[2]">{text}</span>
        <button className=" appearance-none m-[0.375rem] p-0 h-[1.125rem]" onClick={onDelete}>
          <GoTrash fill="#808080" className="w-[1.125rem] h-full" />
        </button>
      </div>
    </li>
  );
};

export default Task;
