import { HiOutlineDownload, HiOutlineStar } from 'react-icons/hi';

const InstallationItem = ({ app, onUninstall, isLoading }) => {
  return (
    <div className="card bg-white shadow-sm border border-gray-100 p-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* App Image */}
        <div className="w-full sm:w-20 flex-shrink-0">
          <img 
            src={app.image} 
            alt={app.title} 
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>

        {/* App Info */}
        <div className="flex-1 w-full text-center sm:text-left">
          <h3 className="text-lg font-bold text-gray-900">{app.title}</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2">
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <HiOutlineDownload />
              <span>{(app.downloads / 1000000).toFixed(1)}M</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500 text-sm">
              <HiOutlineStar />
              <span>{app.ratingAvg}</span>
            </div>
            <div className="text-gray-500 text-sm">
              {app.size} MB
            </div>
          </div>
        </div>

        {/* Uninstall Button */}
        <div className="w-full sm:w-auto">
          <button
            onClick={() => onUninstall(app.id, app.title)}
            disabled={isLoading}
            className="btn btn-error btn-sm normal-case w-full sm:w-auto text-white"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallationItem;