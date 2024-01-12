import Header from './ui/partials/Header';
import Tasks from './ui/partials/Tasks';

const Home = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />
      <Tasks />
    </div>
  );
};

export default Home;
