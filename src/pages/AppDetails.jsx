import { useAppDetails } from '../hooks/useAppDetails';
import Loader from '../components/ui/Loader';
import AppInfo from '../components/appDetails/AppInfo';
import AppNotFound from '../components/appDetails/appNotFound';
import RatingChart from '../components/appDetails/RatingCharts';
import AppDescription from '../components/appDetails/AppDesccriptions';

const AppDetails = () => {
  const { app, isLoading, isNotFound } = useAppDetails();

  if (isLoading) {
    return <Loader />;
  }

  if (isNotFound) {
    return <AppNotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      {/* Top Section: Info & Image */}
      <AppInfo app={app} />
      

      {/* Middle Section: Chart */}
      <RatingChart ratings={app.ratings} />

      {/* Bottom Section: Description */}
      <AppDescription description={app.description} />
    </div>
  );
};

export default AppDetails;