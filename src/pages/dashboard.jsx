import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/userContext";

const Dashboard = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <section className=" min-h-[calc(100vh-3.5rem)] sm:min-h-[100vh] relative  ">
      {loading && (
        <i className="fa fat fa-spinner-third fa-4x fa-spin top-[50%] left-[50%] translate-y-[50%] translate-x-[-50%] absolute text-light-green-30 "></i>
      )}

      {!loading && (
        <div className=" absolute left-[50%] translate-x-[-50%] top-[30%] translate-y-[-50%] flex flex-col md:flex-row gap-4 w-[90%] max-w-2xl rounded-xl min-h-[15rem] h-[15rem] p-8 bg-gradient-to-r from-light-green-30 via-light-green-30 to-light-green-60 text-light-blue-90 font-bold ">
          <div className="w-full gap-2 flex flex-col ">
            <div className=" text-4xl ">
              <span className=" mr-2 ">Welcome </span>
              <span className="  ">{currentUser.displayName} </span>
            </div>
            <div className="  text-sm font-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              magni tenetur officia eius, odit doloremque?
            </div>
            <Link
              to="/courses"
              className=" bg-light-30 hover:font-semibold text-sm w-fit py-3 px-3 my-4 rounded-full text-light-blue-90 hover:bg-light-blue-30/30 hover:shadow-lg  "
            >
              Check out your courses
            </Link>
          </div>
          <div className=" w-fit min-h-full relative hidden grid place-items-center lg:block ">
            <i className="fa fas fa-book-open-cover fa-8x p-4 "></i>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
