import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useLocalStorage('installed_apps', []);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const installApp = (app) => {
    if (!installedApps.find((item) => item.id === app.id)) {
      setInstalledApps([...installedApps, app]);
      showToast(`${app.title} installed successfully!`, 'success');
    }
  };

  const uninstallApp = (id) => {
    setInstalledApps(installedApps.filter((app) => app.id !== id));
    showToast('App uninstalled successfully', 'error');
  };

  const isInstalled = (id) => {
    return installedApps.some((app) => app.id === id);
  };

  return (
    <AppContext.Provider value={{ installedApps, installApp, uninstallApp, isInstalled, toast }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);