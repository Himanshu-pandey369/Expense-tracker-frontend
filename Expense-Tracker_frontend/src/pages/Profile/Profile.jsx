import { useEffect, useState } from "react";
import { Mail, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        <div className="bg-white rounded-2xl p-10 text-center">
          Loading Profile...
        </div>
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

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow border overflow-hidden">

          {/* Top Banner */}

          <div className="h-36 bg-gradient-to-r from-blue-600 to-indigo-600" />

          {/* Content */}

          <div className="px-8 pb-8">

            {/* Avatar */}

            <div className="-mt-16 flex justify-center">

              <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">

                <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white">

                  {initials}

                </div>

              </div>

            </div>

            <div className="text-center mt-5">

              <h1 className="text-3xl font-bold">

                {user.name}

              </h1>

              <p className="text-gray-500 mt-2">

                Welcome back 👋

              </p>

            </div>

            {/* Info */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 border rounded-xl p-4">

                <Mail className="text-blue-600" />

                <div>

                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">

                    {user.email}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 border rounded-xl p-4">

                <Calendar className="text-green-600" />

                <div>

                  <p className="text-sm text-gray-500">
                    Joined
                  </p>

                  <p className="font-semibold">

                    {new Date(
                      user.createdAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}

                  </p>

                </div>

              </div>

            </div>

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="mt-10 w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 flex items-center justify-center gap-3 text-lg font-medium transition"
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