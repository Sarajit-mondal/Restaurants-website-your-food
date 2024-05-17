import { Outlet } from "react-router-dom";
import Footer from "../components/shareComponents/Footer";
import Navbar from "../components/shareComponents/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header>
        <Navbar></Navbar>
      </header>
      {/* main  */}
      <main className="px-20">
        <Outlet></Outlet>
      </main>
      {/* footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default MainLayout;
