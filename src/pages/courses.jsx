import React from "react";
import { Link } from "react-router-dom";
import courses from "../utils/db";
const Courses = () => {
  return (
    <section className=" min-h-[calc(100vh-3.5rem)] sm:min-h-[100vh] relative flex flex-col ">
      <div className="text-light-blue-90 text-3xl mt-8 mb-4 mx-4">
        Courses
      </div>
      <div className=" flex w-full ">
        <div className=" mx-4 grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] grid-rows-[repeat(minmax(10rem,11rem))] auto-rows-[1fr] gap-3 w-full ">
          {courses.map(({ id, name }) => (
            <Link
              to={`/courses/${id}`}
              className=" bg-light-green-30 hover:bg-light-green-60/90 min-h-[8rem] rounded-lg flex flex-col justify-center max-w-[10rem] items-center mx-auto min-w-full text-light-blue-90 hover:text-light-30/80 font-semibold text-lg "
              key={id}
            >
              <i className="fa fal fa-book mb-4 p-4 rounded-full border border-light-green-60 "></i>
              <span className="">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
