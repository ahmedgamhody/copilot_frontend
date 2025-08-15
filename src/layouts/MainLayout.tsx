import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
