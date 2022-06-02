import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";

const Navbar = ({ extraStyle, navState, setNavExpanded }) => {
  const { user, logout, setUserError } = useUser();
  const navigate = useNavigate();

  function logoutUser() {
    logout()
    .then()
    .catch((err) => setUserError(err));
  }

  useEffect(() => {
    if (!user) navigate("/", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <section
      className={` bg-light-blue-90 z-[1001] sm:relative sm:rounded-tr-[4rem] transition-all duration-300 ${extraStyle} ${navState ? "translate-x-0" : "translate-x-[-100%] sm:translate-x-0"}`}
    >
      <div className=" w-full justify-center my-8 hidden sm:flex ">
        <Link
          to="/"
          className={
            " text-2xl font-bold text-white w-fit "
          }
        >
          Kode Class
        </Link>
      </div>

      <div className="  sm:h-fit bg-light-blue-90 sm:bg-transparent flex flex-col pt-[10rem] fixed left-[50%] translate-x-[-50%] sm:pl-0 w-[14rem] ">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `  mb-8 px-4 py-2  ${
              isActive
                ? " bg-light-30 font-semibold text-light-green-30 rounded-full sm:rounded-none sm:rounded-l-full mx-4 sm:mr-0 "
                : " bg-light-30/10 hover:bg-light-30/50 rounded-full text-light-30 mx-4 "
            }  `
          }
          onClick={()=>setNavExpanded(false)}
        >
          <i className=" fa far fa-table-columns mr-4" />
          Dashboard
        </NavLink>

        <NavLink
          to={"/courses"}
          className={({ isActive }) =>
            `  mb-8 px-4 py-2  ${
              isActive
                ? " bg-light-30 font-semibold text-light-green-30 rounded-full sm:rounded-none sm:rounded-l-full mx-4 sm:mr-0 "
                : " bg-light-30/10 hover:bg-light-30/50 rounded-full text-light-30 mx-4 "
            }  `
          }
          onClick={()=>setNavExpanded(false)}
        >
          <i className=" fa far fa-book mr-4" />
          Courses
        </NavLink>

        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `  mb-8 px-4 py-2  ${
              isActive
                ? " bg-light-30 font-semibold text-light-green-30 rounded-full sm:rounded-none sm:rounded-l-full mx-4 sm:mr-0 "
                : " bg-light-30/10 hover:bg-light-30/50 rounded-full text-light-30 mx-4 "
            }  `
          }
          onClick={()=>setNavExpanded(false)}
        >
          <i className=" fa far fa-user mr-4" />
          Profile
        </NavLink>

        <button
          className="  mb-8 px-4 flex items-center py-2 bg-light-30/10 hover:bg-light-30/50 rounded-full text-light-30 mx-4  "
          onClick={() => logoutUser()}
        >
          <i className="fa far fa-sign-out mr-4 " />
          Log out
        </button>
      </div>
    </section>
  );
};

export default Navbar;
