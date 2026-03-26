import { useState } from 'react';
import appsData from '../data/appsData.json';
import { useAppFilter } from '../hooks/useAppFilter';
import AppFilter from '../components/apps/AppFilter';
import AppCard from '../components/apps/AppCard';
import AppNotFound from '../components/ui/AppNotFound';

const AllApps = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const { filteredApps, isLoading } = useAppFilter(appsData, searchQuery, sortOption);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Our All Applications</h1>
        <p className="text-gray-600 mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <AppFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
        totalCount={filteredApps.length}
      />

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredApps.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <AppNotFound 
              showButton={true}
              onClearSearch={handleClearSearch}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AllApps;