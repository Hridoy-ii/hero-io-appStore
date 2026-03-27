import { Atom } from 'react-loading-indicators';

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Atom color={["#31cc72", "#313dcc", "#cc318b", "#ccbf31"]} />
    </div>
  );
};

export default Loader;