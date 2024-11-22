import React from "react";
import { Code, Terminal, Coffee } from "lucide-react";

const HeaderBlog = () => {
  return (
    <header className="bg-secondary py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code className="text-gold-300 mr-2" size={32} />
            <h1 className="text-gold-300 text-2xl font-bold">DevBlog</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gold-300 hover:text-gold-100">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gold-300 hover:text-gold-100">
                  Tutoriales
                </a>
              </li>
              <li>
                <a href="#" className="text-gold-300 hover:text-gold-100">
                  Sobre mí
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderBlog;
