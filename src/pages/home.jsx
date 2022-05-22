import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/heading";

const Home = () => {
  return (
    <main className=" bg-base-blue min-h-[100vh]  ">
      <header className=" flex justify-between px-4 py-4 items-center ">
        <h1 className=" text-2xl font-bold text-base-blue px-2 bg-gradient-to-r from-light-blue-30 to-light-green-30 rounded ">kode-class /></h1>
        <Link to={"/login"} className={" h-8 grid place-items-center hover:bg-light-green-60 px-4 bg-light-green-30 mr-12 text-white rounded-md "}>
          Login
        </Link>
      </header>

      <section className=" absolute mx-12 left-0 right-0 top-[50%] translate-y-[-50%] " >
        <Heading
          heading={'Learn on your class schedule'}
          supportText={'Learn at your own pace, anytime you want, anywhere you want. We will always continue to put you first'}
          extraStyle={'max-w-sm'}
          headingStyle={'text-5xl text-left '}
          supportTextStyle={'text-left text-light-blue-30'}
        />
      </section>
    </main>
  );
};

export default Home;
