import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlinePlay } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 px-4 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <HiOutlinePlay className="text-white text-lg" />
            </div>
            <span className="text-lg font-bold">HERO.IO</span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm font-medium text-gray-300">Social Links</p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaXTwitter className="text-sm" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaLinkedin className="text-sm" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebook className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;