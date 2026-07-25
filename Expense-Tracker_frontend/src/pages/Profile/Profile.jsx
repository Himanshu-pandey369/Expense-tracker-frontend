import { useEffect, useState } from "react";
import { Mail, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileSkeleton from "../../Components/Profile/ProfileSkeleton";
import DashboardLayout from "../../components/layout/DashboardLayout";

import { getProfile } from "../../services/userService";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setUser(response.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return (
      <DashboardLayout>
        <ProfileSkeleton />
      </DashboardLayout>
    );
  }

  const initials = user.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* Banner */}
          <div className="h-36 bg-linear-to-r from-blue-600 to-indigo-600" />

          {/* Content */}
          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="-mt-16 flex justify-center">
              <div className="h-32 w-32 rounded-full bg-white p-2 shadow-lg dark:bg-slate-800">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
                  {initials}
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="mt-5 text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Welcome back 👋
              </p>
            </div>

            {/* Details */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 dark:border-slate-700 dark:bg-slate-800">
                <Mail className="text-blue-600" />

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>

                  <p className="font-semibold text-gray-900 dark:text-white">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 dark:border-slate-700 dark:bg-slate-800">
                <Calendar className="text-green-600" />

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Joined
                  </p>

                  <p className="font-semibold text-gray-900 dark:text-white">
                    {new Date(user.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 text-lg font-medium text-white transition hover:bg-red-700 dark:hover:bg-red-500"
            >
              <LogOut size={22} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}