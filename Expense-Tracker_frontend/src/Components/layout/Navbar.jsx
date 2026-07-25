import { useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../Context/ThemeContext";

export default function Navbar() {
  const { user } = useAuth();
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/transactions": "Transactions",
    "/budgets": "Budgets",
    "/profile": "Profile",
  };

  return (
    <header className="hidden lg:flex bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-8 py-5 justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {titles[location.pathname] || "Dashboard"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
          Welcome back, {user?.name}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>

        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
          {user?.name
            ?.split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()}
        </div>
      </div>
    </header>
  );
}