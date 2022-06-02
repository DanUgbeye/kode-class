import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import courses from "../utils/db";

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const selection = courses.filter((course) => course.id === Number(id));
      selection ? setCourse(selection[0]) : setCourse({});
    }
    setIsLoading(false);

    return () => {
      setCourse({});
    };
  }, [id]);

  return (
    <section className=" min-h-[calc(100vh-3.5rem)] sm:min-h-[100vh] relative ">
      <div className=" mt-4 mb-0 mx-8 max-w-[5rem] flex justfy-end ">
        <button  className="text-lg text-light-blue-90 max-w-fit items-center flex " 
          onClick={(e)=>(navigate(-1))}
        >
          <i className=" fa far fa-angles-left mr-2 "></i>  
          <span className=" ">Back</span>
        </button>
      </div>

      {isLoading && (
        <i className="fa fat fa-spinner-third fa-4x fa-spin top-[50%] left-[50%] translate-y-[50%] translate-x-[-50%] absolute text-light-green-30 "></i>
      )}
      {!isLoading &&
        (!Object.keys(course).length > 0 ? (
          <div className="  ">Invalid course selected</div>
        ) : (
          <div className=" m-8 mt-4  ">
            {course.name && (
              <div className=" text-4xl text-light-green-60 rounded-lg mb-8 py-12 px-8 border-light-green-30 border bg-light-green-30 ">
                {course.name.toUpperCase()}
              </div>
            )}

            {course.details.intro && (
              <div className=" text-light-blue-90 mb-4 ">{course.details.intro}</div>
            )}
            {course.details.branches && (
              <div className="  ">
                <div className="text-2xl text-light-blue-90 mb-4 font-semibold ">Branches</div>
                {course.details.branches.map((branch, index) => (
                  <div className=" border-light-green-30 border h-12 flex items-center mb-4 px-4 text-light-blue-90 justify-between hover:bg-light-green-30/50 hover:font-semibold " key={index}>
                    <span className="">{branch}</span>
                    <i className="fa fas fa-plus "></i>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </section>
  );
};

export default Course;
