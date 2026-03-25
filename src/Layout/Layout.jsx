import { Outlet } from "react-router";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FF]">
      <Navbar/>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}