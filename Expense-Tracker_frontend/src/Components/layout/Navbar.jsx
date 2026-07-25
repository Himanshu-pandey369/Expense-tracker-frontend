import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const location = useLocation();

  const titles = {
    "/dashboard": "Dashboard",
    "/transactions": "Transactions",
    "/budgets": "Budgets",
    "/profile": "Profile",
  };

  return (
    <header className="hidden lg:flex bg-white border-b px-8 py-5 justify-between items-center">

      <div>

        <h2 className="text-2xl font-bold">
          {titles[location.pathname] || "Dashboard"}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Welcome back, {user?.name}
        </p>

      </div>

      <div className="flex items-center gap-4">

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