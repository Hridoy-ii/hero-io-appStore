import { useAppContext } from '../../context/AppContext';

const AppInfo = ({ app }) => {
  const { installApp, uninstallApp, isInstalled } = useAppContext();
  const installed = isInstalled(app.id);

  const handleInstallClick = () => {
    if (installed) {
      uninstallApp(app.id);
    } else {
      installApp(app);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
      {/* App Image */}
      <div className="w-full md:w-1/4 flex justify-center">
        <img 
          src={app.image} 
          alt={app.title} 
          className="w-48 h-48 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* App Details */}
      <div className="w-full md:w-3/4">
        <h1 className="text-3xl font-bold text-gray-900">{app.title}</h1>
        <p className="text-gray-500 mt-1">Developed by <span className="text-primary font-medium">{app.companyName}</span></p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6 py-6 border-t border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <img src="/icon-downloads.png" alt="" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-1">{(app.downloads / 1000000).toFixed(1)}M</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <img src="/icon-ratings.png" alt="" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-1">{app.ratingAvg}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <img src="/icon-review.png" alt="" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-1">{(app.reviews / 1000).toFixed(0)}K</p>
          </div>
        </div>

        {/* Install Button */}
        <div className="mt-6">
          <button 
            onClick={handleInstallClick}
            disabled={installed}
            className={`btn normal-case px-8  font-medium ${
              installed 
                ? 'border-[1.5px] border-green-500 cursor-not-allowed text-gray-500' 
                : 'btn-success hover:bg-green-800 text-white'
            }`}
          >
            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;