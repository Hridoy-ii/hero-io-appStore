import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const AppNotFound = ({ 
  showButton = true,
  onClearSearch = null
}) => {
  
  const handleClick = () => {
    if (onClearSearch) {
      onClearSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center px-4">
      <img 
        src="/App-Error.png" 
        alt="App Not Found" 
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">
        The App you are requesting is not found on our system. please try another apps
      </p>
      {showButton && (
        onClearSearch ? (
          <button onClick={handleClick} className="btn btn-primary gap-2">
            <HiOutlineArrowLeft /> Go Back!
          </button>
        ) : (
          <Link to="/apps" className="btn btn-primary gap-2">
            <HiOutlineArrowLeft /> Go Back!
          </Link>
        )
      )}
    </div>
  );
};

export default AppNotFound;