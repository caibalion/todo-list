import { FiPlusCircle } from 'react-icons/fi';

import { addTask } from '../../common/helpers';
const AddButton = () => {
  return (
    <button
      onClick={addTask}
      className="bg-[#1E6F9F] text-[#F2F2F2] p-4 leading-[22.4px] h-14 rounded-lg ml-2 flex font-bold items-center gap-2"
    >
      Criar
      <FiPlusCircle />
    </button>
  );
};
export default AddButton;
