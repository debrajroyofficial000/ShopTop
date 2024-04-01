import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <div className="relative h-screen">
      <div className="bg-slate-500">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
