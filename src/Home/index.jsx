import Header from './partials/Header';
import NewTask from './partials/NewTask';

const Home = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Header />
      <NewTask />
    </div>
  );
};

export default Home;
