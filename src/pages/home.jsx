import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/heading";

const Home = () => {
  return (
    <main className=" bg-light-blue-90 min-h-[100vh]  ">
      <header className=" flex justify-between px-4 py-4 items-center ">
        <h1 className=" text-2xl font-bold text-light-30 rounded ">{"Kode Class"}</h1>

        <div className=" flex gap-2 w-fit lg:mr-12 ">
          <Link to={"/signup"} className={"text-sm h-8 grid place-items-center border-2 border-solid hover:border-light-green-60 px-2 text-light-30 border-light-green-30 tracking-wider rounded-sm "}>
            SIGNUP
          </Link>

          <Link to={"/login"} className={"text-sm  h-8 grid place-items-center hover:text-light-30/80 hover:underline hover:underline-offset-4 px-2 text-light-30 border-light-green-30 tracking-wider rounded-md "}>
            LOGIN
          </Link>
        </div>
      </header>

      <section className=" absolute mx-12 left-0 right-0 top-[50%] translate-y-[-50%] " >
        <Heading
          heading={'Learn on your own schedule'}
          supportText={'Learn at your own pace, anytime you want, anywhere you want. We will always continue to put you first'}
          extraStyle={'text-light-green-30 max-w-sm mx-auto'}
          headingStyle={'text-5xl text-center '}
          supportTextStyle={'text-center text-light-30/90'}
        />
      </section>
    </main>
  );
};

export default Home;
