import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">E-Commerce Store</h3>
            <p className="text-gray-400 text-sm">Your one-stop shop for quality products with a great shopping experience.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#/" className="hover:text-white transition cursor-pointer">Home</a></li>
              <li><a href="#/" className="hover:text-white transition cursor-pointer">Products</a></li>
              <li><a href="mailto:contact@ecommerce.com" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/potlanaveen" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/naveenpotla27/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition text-xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 E-Commerce Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
