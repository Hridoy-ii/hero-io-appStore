import Banner from '../components/home/Banner';
import Stats from '../components/home/Stats';
import TopApps from '../components/home/TopApps';

const Home = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Banner />
      <Stats />
      <TopApps />
    </div>
  );
};

export default Home;