import React, { useState } from 'react';
import { useInstalledApps } from '../hooks/useInstalledApps';
import AppNotFound from '../components/ui/AppNotFound';
import InstallationItem from '../components/installations/InstallationItem';
import SortDropdown from '../components/installations/SortDropDown';

const MyInstallationApps = () => {
    const [sortOption, setSortOption] = useState('default');
  const { installedApps, handleUninstall, isLoading } = useInstalledApps(sortOption);

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Your Installed Apps</h1>
        <p className="text-gray-600 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Header: Count + Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          {installedApps.length} Apps Found
        </h3>
        <SortDropdown 
          sortOption={sortOption} 
          setSortOption={setSortOption} 
        />
      </div>

      {/* App List */}
      {installedApps.length > 0 ? (
        <div className="space-y-4">
          {installedApps.map((app) => (
            <InstallationItem 
              key={app.id} 
              app={app} 
              onUninstall={handleUninstall}
              isLoading={isLoading}
            />
          ))}
        </div>
      ) : (
        /* Empty State - No Installed Apps */
        <AppNotFound 
          showButton={false}
          message="You haven't installed any apps yet. Browse our apps and install your favorites!"
        />
      )}
    </div>
  );
};

export default MyInstallationApps;