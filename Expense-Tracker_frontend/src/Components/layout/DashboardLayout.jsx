import { useState } from "react";
import { Menu } from "lucide-react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}) {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="lg:ml-64">

        {/* Mobile Header */}

        <div className="lg:hidden bg-white shadow-sm h-16 flex items-center px-4">

          <button
            onClick={() =>
              setIsSidebarOpen(true)
            }
          >
            <Menu size={28} />
          </button>

          <h1 className="ml-4 text-xl font-bold">
            SpendWise
          </h1>

        </div>

        <Navbar />

        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}