import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">

      <div>
        <h2 className="text-xl font-bold">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome back, {user?.name}
        </p>
      </div>

    </header>
  );
}