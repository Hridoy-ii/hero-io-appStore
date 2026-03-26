import { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';

export const useInstalledApps = (sortOption) => {
  const { installedApps, uninstallApp } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  const sortedApps = useMemo(() => {
    let result = [...installedApps];

    if (sortOption === 'size-high-low') {
      result.sort((a, b) => b.size - a.size);
    } else if (sortOption === 'size-low-high') {
      result.sort((a, b) => a.size - b.size);
    }

    return result;
  }, [installedApps, sortOption]);

  const handleUninstall = async (id, title) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 300));
    uninstallApp(id);
    setIsLoading(false);
  };

  return { installedApps: sortedApps, handleUninstall, isLoading };
};