import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import Toast from './components/ui/Toast';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import ErrorPage from './pages/ErrorPage';
import MyInstallationApps from './pages/MyInstallationApps';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Toast />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="apps" element={<AllApps />} />
            <Route path="installation" element={<MyInstallationApps />} />
            <Route path="app/:id" element={<AppDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;