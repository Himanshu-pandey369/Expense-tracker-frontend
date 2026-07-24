import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        SpendWise
      </h1>

      <nav className="space-y-4">

        <Link
          to="/dashboard"
          className="block hover:text-blue-400"
        >
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="block hover:text-blue-400"
        >
          Transactions
        </Link>

        <Link
          to="/budgets"
          className="block hover:text-blue-400"
        >
          Budgets
        </Link>

        <Link
          to="/profile"
          className="block hover:text-blue-400"
        >
          Profile
        </Link>

      </nav>
    </aside>
  );
}