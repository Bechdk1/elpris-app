import { Outlet } from "react-router-dom";
import { Header } from "../layout/Header/Header.tsx";
import { Footer } from "../layout/Footer/Footer.tsx";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
