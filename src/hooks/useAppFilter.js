import { useState, useEffect, useMemo } from 'react';

export const useAppFilter = (apps, searchQuery, sortOption) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredApps, setFilteredApps] = useState(apps);

  useEffect(() => {
    // Simulate loading delay only when searching
    if (searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // 500ms delay
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    let result = [...apps];

    // 1. Filter by Search Query
    if (searchQuery) {
      result = result.filter((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 2. Sort by Downloads
    if (sortOption === 'high-low') {
      result.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOption === 'low-high') {
      result.sort((a, b) => a.downloads - b.downloads);
    }

    setFilteredApps(result);
  }, [apps, searchQuery, sortOption]);

  return { filteredApps, isLoading };
};