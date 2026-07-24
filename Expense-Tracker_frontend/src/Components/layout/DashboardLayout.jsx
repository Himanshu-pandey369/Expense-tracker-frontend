import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <div className="lg:ml-64">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}