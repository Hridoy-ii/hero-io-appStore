import { useAppContext } from '../../context/AppContext';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Toast = () => {
  const { toast } = useAppContext();

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
          toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
        {toast.type === 'success' ? (
          <FaCheckCircle className="text-xl" />
        ) : (
          <FaExclamationCircle className="text-xl" />
        )}
        <p className="font-medium">{toast.message}</p>
      </div>
    </div>
  );
};

export default Toast;