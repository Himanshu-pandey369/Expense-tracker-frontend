import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-6">

        <h1 className="text-4xl font-bold text-blue-600">
          SpendWise
        </h1>

        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-gray-500">
          Loading your workspace...
        </p>

      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}