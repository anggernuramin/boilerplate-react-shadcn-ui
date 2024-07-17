import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "@/components/molecules/Navbar";
// import Header from "../../../components/organisms/Header";
// import Aside from "../../../components/organisms/Aside";

function Layout() {
  // mengambil nilai dari store
  const isLogin = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (!isLogin) {
      // navigate("/login");
    } else {
      // navigate("/");
    }
  }, [isLogin]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col ">
        {/* Header */}
        <section>
          {/* Content */}
          <Outlet />
        </section>
        {/* Footer */}
      </main>
    </>
  );
}

export default Layout;
