import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { HiOutlinePlay } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-8">
      <div className="navbar-start">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <HiOutlinePlay className="text-white text-xl" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/apps" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/installation" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive ? 'text-primary bg-primary/10' : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary gap-2 normal-case"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Navbar;