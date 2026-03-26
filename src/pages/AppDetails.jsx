import { useAppDetails } from '../hooks/useAppDetails';
import Loader from '../components/ui/Loader';
import AppInfo from '../components/appDetails/AppInfo';
import AppDescription from '../components/appDetails/AppDesccriptions';
import RatingChart from '../components/appDetails/RatingChart';
import ErrorPage from './ErrorPage';

const AppDetails = () => {
  const { app, isLoading, isNotFound } = useAppDetails();

  if (isLoading) {
    return <Loader />;
  }

  if (isNotFound) {
    return <ErrorPage showButton={true} />;
  }

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <AppInfo app={app} />
      <RatingChart ratings={app.ratings} />
      <AppDescription description={app.description} />
    </div>
  );
};

export default AppDetails;