import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  User,
  X,
} from "lucide-react";

export default function Sidebar({
  isOpen,
  setIsOpen,
}) {
  const location = useLocation();

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
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`
        fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white z-50
        transform transition-transform duration-300

        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
      `}
      >
        {/* Header */}

        <div className="flex items-center justify-between p-6 border-b border-slate-700">

          <h1 className="text-3xl font-bold">
            SpendWise
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>

        </div>

        {/* Menu */}

        <nav className="mt-8 px-4 space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition

                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-gray-300"
                }`}
              >
                <Icon size={20} />

                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}