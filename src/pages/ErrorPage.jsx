import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';

const ErrorPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 mt-16 mb-12">
      <img 
        src="/error-404.png" 
        alt="404 Not Found" 
        className="w-full max-w-3xs mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        Oops, page not found!
      </h1>
      <p className="text-gray-600 mb-6 max-w-lg">
        The page you are looking for is not available.
      </p>
      <Link to="/" className="btn btn-primary gap-2">
        <HiOutlineHome /> Go Home!
      </Link>
    </div>
  );
};

export default ErrorPage;