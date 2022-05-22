import { useState} from "react";
import Heading from "../components/heading";
import googleSVG from "../assets/svg/google-original.svg";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwHidden, setPwHidden] = useState(true);


  return (
    <main className=" relative w-full bg-base-blue min-h-[100vh] flex lg:grid lg:grid-cols-[1fr_1.5fr] p-8 gap-8 ">
      <div className=" hidden lg:block lg:relative lg:self-center w-full max-w-[50rem] aspect-square bg-light-green-30 rounded-full ">
        
      </div>

      <section className=" z-[1000] w-full h-fit self-center ">
        <Heading
          heading={"Login"}
          supportText={"sign in to access your kode class account"}
          headingStyle={"font-light text-center"}
          supportTextStyle={"text-center"}
        />

        <form className=" w-full max-w-md mx-auto ">
          <fieldset className=" relative text-light-green-30 mb-8 flex items-center ">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full bg-light-blue-90 p-2 pl-12 outline-none h-12 overflow-hidden border-b border-light-blue-30 placeholder-light-green-60 "
              placeholder="email"
            />
            <i className="fa-user fas absolute text-lg text-light-green-60 left-4 top-[50%] translate-y-[-50%] pointer-events-none " />
          </fieldset>

          <fieldset className=" relative text-light-green-30 mb-8 ">
            <input
              type={pwHidden ? "password" : "text"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className=" w-full bg-light-blue-90 p-2 pl-12 outline-none h-12 overflow-hidden border-b border-light-blue-30 placeholder-light-green-60 "
              placeholder="password"
            />
            {
              password && (
                <i className={` fal ${pwHidden ? 'fa-eye' : 'fa-eye-slash'} absolute text-lg text-light-green-60 right-4 top-[50%] translate-y-[-50%] cursor-pointer `} onClick={() => setPwHidden(!pwHidden)} />
              )
            }
            <i className="fa-lock fas absolute text-lg text-light-green-60 left-4 top-[50%] translate-y-[-50%] pointer-events-none " />
          </fieldset>

          <button className=" w-full h-12 bg-light-blue-30 hover:bg-light-blue-60 rounded-md text-base-blue text-lg tracking-wider hover:tracking-widest ">
            Login
          </button>
        </form>

        <div className=" text-light-blue-30 flex justify-center items-center my-8 ">
          <div className=" max-w-[10rem] w-full h-[1px] bg-light-blue-30 inline-block mx-3 "></div>
          OR
          <div className=" max-w-[10rem] w-full h-[1px] bg-light-blue-30 inline-block mx-3 "></div>
        </div>

        <button className=" relative px-4 h-16 rounded-md border-2 border-white max-w-md justify-center mx-auto flex gap-4 items-center text-white ">
          <img className=" w-12 h-8  " src={googleSVG} alt="google" />
          Sign in with Google
        </button>
      </section>
    </main>
  );
};

export default Login;
