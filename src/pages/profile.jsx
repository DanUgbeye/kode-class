import {useState, useEffect} from "react";
import { useUser } from "../contexts/userContext";

const Profile = () => {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");


  useEffect(() => {
    if(user) {
      setEmail(user.email);
      setName(user.displayName);
      setPhoto(user.photoURL);
    }
  }, [user]);  

  return (
    <section className=" min-h-[calc(100vh-3.5rem)] sm:min-h-[100vh] relative flex flex-col ">
      <div className="text-light-blue-90 text-3xl my-4 mx-8">Profile</div>

      <div className=" m-4 mt-12 flex flex-col items-center gap-6 ">
       {  
         <div id="profile-img" className=" bg-light-green-60 outline-light-green-30 outline outline-offset-4 outline-2 rounded-full aspect-square w-full max-w-[8rem] grid place-items-center overflow-hidden ">
           {photo && (
             <img src={photo} alt="profile-img" className=" w-full " />
           )}
         </div>
       }

        <div id="profile-details" className=" flex flex-col sm:flex-row gap-8 justify-evenly px-4 tracking-wider my-4 text-lg w-full max-w-lg mx-auto text-light-blue-90 ">
          <p id="name" className=" border-b-2 border-light-green-30 w-full pr-4 mb-4 ">
            <span className=" text-sm mr-2 block">Name </span>
            <span className=" font-semibold mb-4  ">{name}</span>
          </p>

          <p id="email" className=" border-b-2 border-light-green-30 w-full pr-4 mb-4 ">
            <span className=" text-sm mr-2 block">Email </span>
            <span className=" font-semibold mb-4 ">{email}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
