import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="bg-white flex-shrink-0">
          <Navbar />
        </div>
        <main className="flex-1 overflow-hidden bg-gray-100 p-4">
          <Outlet />
          <Toaster richColors position="top-right" />
        </main>
      </div>
    </div>
  );
}


