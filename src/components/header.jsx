import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiTwotoneShopping } from "react-icons/ai";

function Header() {
  const [timeLeft, setTimeLeft] = useState(15 * 60 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="bg-black text-white text-center py-2 text-sm flex justify-center items-center space-x-4">
        <span>Get 25% Off This Summer Sale! Grab it Fast!</span>
        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
          {formatTime(timeLeft)}
        </span>
      </header>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium text-gray-800">
          <li>
            <a href="#" className="hover:text-gray-600">Men</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">Women</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">Kids</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">New & Featured</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600">Gift</a>
          </li>
        </ul>

        {/* Logo */}
        <div>
          <p className="text-3xl text-black font-extrabold">TULOS</p>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-800">
          <IoSearchOutline size={20} className="hover:text-gray-600 cursor-pointer" />
          <AiTwotoneShopping size={20} className="hover:text-gray-600 cursor-pointer" />
          <button>Login</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
