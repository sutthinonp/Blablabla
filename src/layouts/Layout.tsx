import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f5f5]">
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        <main className="flex-1 overflow-hidden p-4">
          <Outlet />
          <Toaster richColors position="top-right" />
        </main>
      </div>
    </div>
  );
}


