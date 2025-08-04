import { Outlet } from "react-router-dom";
import Header from "./_components/Header/header.jsx";
import Footer from "./_components/Footer/footer.jsx";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
