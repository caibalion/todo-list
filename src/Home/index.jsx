import Header from './ui/partials/Header';
import NewTask from './ui/partials/NewTask';
import Tasks from './ui/partials/Tasks';

const Home = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />
      <NewTask />
      <Tasks />
    </div>
  );
};

export default Home;
