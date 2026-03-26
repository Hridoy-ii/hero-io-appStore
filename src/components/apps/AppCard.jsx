import { Link } from 'react-router-dom';
import { HiDownload } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-2 border border-gray-100">
      <figure className="px-4 pt-4 rounded-2xl bg-gray-50">
        <img 
          src={app.image} 
          alt={app.title} 
          className="rounded-sm max-w-[100%] h-48 object-cover" 
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-sm lg:text-base text-gray-800 line-clamp-1">
          {app.title}
        </h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 text-green-700 bg-green-50 px-2 py-1 border-[1.5px] rounded-sm border-green-800  text-xs font-medium">
            <HiDownload />
            <span>{(app.downloads / 1000000).toFixed(1)}M</span>
          </div>
          <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-1 border-[1.5px] rounded-sm border-orange-500 text-xs font-medium">
            <FaStar />
            <span>{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;