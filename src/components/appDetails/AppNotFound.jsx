import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const AppNotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <img 
        src="https://placehold.co/400x300/FEF3C7/D97706?text=Cat+Not+Found" 
        alt="App Not Found" 
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">
        The App you are requesting is not found on our system. please try another apps
      </p>
      <Link to="/apps" className="btn btn-primary gap-2">
        <HiOutlineArrowLeft /> Go Back!
      </Link>
    </div>
  );
};

export default AppNotFound;