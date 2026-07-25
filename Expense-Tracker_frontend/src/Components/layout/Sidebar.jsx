import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  User,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../../Context/ThemeContext";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: Receipt,
    },
    {
      name: "Budgets",
      path: "/budgets",
      icon: Wallet,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-64 flex-col
          border-r border-slate-800 bg-slate-900 text-white
          transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-6">
          <h1 className="text-3xl font-bold tracking-tight">SpendWise</h1>

          <button
            className="text-slate-300 transition hover:text-white lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex-1 px-4 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${active
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <div className="border-t border-slate-800 p-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-800 px-4 py-3 text-slate-200 transition hover:bg-slate-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}

            <span className="font-medium">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}