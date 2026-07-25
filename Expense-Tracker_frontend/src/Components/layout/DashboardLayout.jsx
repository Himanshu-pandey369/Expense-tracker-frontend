import { useState } from "react";
import { Menu } from "lucide-react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="lg:ml-64">
        <div className="lg:hidden bg-white dark:bg-slate-900 shadow-sm h-16 flex items-center px-4 border-b border-gray-200 dark:border-slate-700">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu size={28} className="text-gray-900 dark:text-white" />
          </button>

          <h1 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
            SpendWise
          </h1>
        </div>

        <Navbar />

        <main className="p-6 text-gray-900 dark:text-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}