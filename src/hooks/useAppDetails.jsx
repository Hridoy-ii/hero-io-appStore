import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import appsData from '../data/appsData.json';

export const useAppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const foundApp = appsData.find((app) => app.id === parseInt(id));
      
      if (foundApp) {
        setApp(foundApp);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [id]);

  return { app, isLoading, isNotFound };
};