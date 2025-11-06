import type { Metadata } from "next";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Blablabla",
  description: "Blablabla Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="bg-white flex-shrink-0">
              <Navbar />
            </div>
            <main className="flex-1 overflow-hidden bg-gray-100 p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}


