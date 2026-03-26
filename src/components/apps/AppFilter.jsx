import { HiSearch, HiSortDescending } from 'react-icons/hi';

const AppFilter = ({ searchQuery, setSearchQuery, sortOption, setSortOption, totalCount }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      {/* App Count */}
      <h3 className="text-xl font-bold text-gray-800">
        ({totalCount}) Apps Found
      </h3>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search Apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-48">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="default">Sort By Default</option>
            <option value="high-low">Downloads: High-Low</option>
            <option value="low-high">Downloads: Low-High</option>
          </select>
          <HiSortDescending className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default AppFilter;