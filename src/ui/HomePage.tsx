import { Outlet } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";

const HomePage = () => {
  const [dark, setDark] = useState(false);
  function handleTog() {
    setDark(!dark);
    toggleTheme();
  }

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="w-full flex flex-col h-screen bg-[hsl(0, 0%, 98%)]">
      <header className="navbar bg-base-100 shadow-lg justify-between px-6">
        <h3
          className={`text-lg ${dark ? "text-white" : "text-black"} font-bold`}
        >
          Where in the world?
        </h3>
        <div onClick={handleTog} className="theme-controller cursor-pointer">
          {dark ? <FaMoon /> : <IoMoonOutline />}
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;
