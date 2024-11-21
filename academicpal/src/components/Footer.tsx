import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { RiShieldCheckFill, RiCodeLine } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-extrabold text-yellow-500">Academic Pal</h1>
            <p className="mt-2 text-gray-400 text-center md:text-left">
              Empowering students with curated resources and tools for success.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
            <div>
              <h2 className="text-yellow-500 font-bold mb-2">Resources</h2>
              <ul>
                <li className="hover:text-yellow-400">
                  <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">
                    MIT License
                  </a>
                </li>
                <li className="hover:text-yellow-400">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-yellow-500 font-bold mb-2">Connect</h2>
              <ul>
                <li className="hover:text-yellow-400">
                  <a href="mailto:nnm23cs256@nmamit.in">Contact Us</a>
                </li>
                <li className="hover:text-yellow-400">
                  <a href="https://hariharanath.is-cod.in/" target="_blank" rel="noopener noreferrer">
                    Developer Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/Hari-hara7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/hari-hara-nath-a13583282/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
            <a
              href="mailto:nnm23cs256@nmamit.in"
              className="text-gray-300 hover:text-yellow-500 transition-all"
              aria-label="Email"
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2024 Academic Pal. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            <RiCodeLine /> Designed and Developed by{" "}
            <a
              href="https://hariharanath.is-cod.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400"
            >
              Hari Hara Nath
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
