import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <section className=" bg-light-30 relative  ">
      <div className=" z-[1002] text-light-blue-90 sticky top-0 left-0 right-0 items-center flex border-b border-light-blue-90 w-full sm:hidden h-14  ">
        <Link
          to="/"
          className={" text-xl font-bold text-primary-red-60 my-8 w-fit ml-6  "}
        >
          Kode Class
        </Link>
      </div>

      <button
        className={` fixed z-[1003] w-fit h-fit right-6 top-[0.3rem] sm:hidden p-2 cursor-pointer `}
        onClick={() => setNavExpanded(!navExpanded)}
      >
        <i
          className={`a fal ${
            !navExpanded ? "fa-bars" : "fa-close"
          }  text-3xl text-light-blue-90 `}
        />
      </button>

      <div className=" grid sm:grid-cols-[14rem_auto] relative ">
        <Navbar
          extraStyle=" absolute sm:block top-0 w-[16rem] min-h-[calc(100vh-3.5rem)] sm:min-h-[100vh] sm:w-[14rem] sm:col-start-1 sm:col-end-2 "
          navState={navExpanded}
          setNavExpanded={setNavExpanded}
        />

        <div className=" sm:col-start-2 sm:col-end-3 ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
