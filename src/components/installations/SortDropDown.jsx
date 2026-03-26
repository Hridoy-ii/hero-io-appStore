import { HiSortDescending } from 'react-icons/hi';

const SortDropdown = ({ sortOption, setSortOption }) => {
  return (
    <div className="relative w-full sm:w-48">
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="select select-bordered w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="default">Sort By Default</option>
        <option value="size-high-low">Size: High-Low</option>
        <option value="size-low-high">Size: Low-High</option>
      </select>
      <HiSortDescending className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SortDropdown;