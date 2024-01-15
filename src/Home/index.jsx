import Header from './ui/partials/Header';
import TaskInput from './ui/partials/TaskInput';
import Tasks from './ui/partials/Tasks';

const Home = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />
      <TaskInput />
      <Tasks />
    </div>
  );
};

export default Home;
