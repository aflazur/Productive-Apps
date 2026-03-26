import { Outlet, useNavigation } from "react-router";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LoadingBar from "../Components/LoadingBar";

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FF]">
      <Navbar/>
      {isLoading && <LoadingBar/>}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}