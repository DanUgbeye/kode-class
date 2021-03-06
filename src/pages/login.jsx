import { useState, useEffect } from "react";
import Heading from "../components/heading";
import googleSVG from "../assets/svg/google-original.svg";
import { useUser } from "../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pwHidden, setPwHidden] = useState(true);
  const navigate = useNavigate();

  const { login, user, loginWithGoogle } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    login(email, password)
      .then((userdetails) => {
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      navigate("/dashboard");
    }
    return () => {};
  }, [user]);

  return (
    <main className=" relative w-full bg-light-30 min-h-[100vh] px-8 pt-4 ">
      <div className=" -ml-4 mb-4 lg:ml-8 max-w-[9rem] flex ">
        <button
          className="text-sm text-light-blue-90 max-w-fit items-center flex "
          onClick={(e) => navigate("/")}
        >
          <i className=" fa far fa-angles-left mr-2 "></i>
          <span className=" ">Back to home</span>
        </button>
      </div>

      <div className=" flex lg:grid lg:grid-cols-[1fr_1.5fr] ">
        <div className=" hidden lg:grid w-full max-w-[25rem] aspect-square text-light-green-30 rounded-full place-items-center h-full ">
          <div className="">
            <div className=" py-4 px-6  mb-8 rounded-md bg-gradient-to-br from-light-green-30 via-light-green-30 via-light-blue-30 to-light-blue-60 w-fit text-8xl text-light-30/60 font-semibold mx-auto ">
              K
            </div>

            <div className="  ">
              <span className=" text-7xl text-bold block mb-4">Kode Class</span>
              <span className=" text-xl text-light-blue-90 ">
                Redefining the future of learning
              </span>
            </div>
          </div>
        </div>

        <section className=" z-[1000] text-light-blue-90 w-full max-w-sm mx-auto mb-4 h-fit mt-8 min-w-0 self-center ">
          <Heading
            heading={"Login"}
            supportText={"sign in to access your kode class account"}
            extraStyle={"mb-5"}
            headingStyle={"font-light text-6xl text-center"}
            supportTextStyle={"text-center text-light-green-30"}
          />

          <form className=" w-full" onSubmit={(e) => handleLogin(e)}>
            {error && (
              <div className=" text-sm text-red-500 border-red-500 border my-4 p-2 ">
                {error}
              </div>
            )}
            <fieldset className=" relative mb-8 flex items-center ">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required={true}
                className=" w-full bg-light-30/90 p-2 pl-12 outline-none h-12 overflow-hidden border-b border-light-blue-90  "
                placeholder="email"
              />
              <i className="fa-user fas absolute text-lg left-4 top-[50%] translate-y-[-50%] pointer-events-none " />
            </fieldset>

            <fieldset className=" relative mb-8 ">
              <input
                type={pwHidden ? "password" : "text"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required={true}
                className=" w-full bg-light-30/90 p-2 pl-12 outline-none h-12 overflow-hidden border-b border-light-blue-90  "
                placeholder="password"
              />
              {password && (
                <i
                  className={` fal ${
                    !pwHidden ? "fa-eye" : "fa-eye-slash"
                  } absolute text-lg right-4 top-[50%] translate-y-[-50%] cursor-pointer `}
                  onClick={() => setPwHidden(!pwHidden)}
                />
              )}
              <i className="fa-lock fas absolute text-lg left-4 top-[50%] translate-y-[-50%] pointer-events-none " />
            </fieldset>

            <button
              className=" w-full h-12 bg-light-blue-90 hover:bg-light-blue-90/80 rounded-md text-light-30 text-lg tracking-wider hover:tracking-widest "
              disabled={loading}
            >
              {loading ? (
                <i className="fa fat fa-spinner-third fa-2x fa-spin text-light-30 "></i>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className=" text-light-blue-90 text-sm mx-8 flex justify-end mt-4 ">
            Don't have an account ?{" "}
            <span className=" ml-2">
              <Link
                to="/signup"
                className=" text-light-green-30 hover:underline "
              >
                Sign up
              </Link>
            </span>
          </div>

          <div className=" text-light-green-30 flex justify-center items-center my-8 ">
            <div className=" max-w-[10rem] w-full h-[1px] bg-light-green-30 inline-block mx-3 "></div>
            OR
            <div className=" max-w-[10rem] w-full h-[1px] bg-light-green-30 inline-block mx-3 "></div>
          </div>

          <button
            className=" relative px-4 h-16 rounded-md border-2 border-light-blue-90 max-w-md justify-center mx-auto flex gap-4 items-center text-light-blue-90 "
            onClick={() => loginWithGoogle()}
          >
            <img className=" w-12 h-8  " src={googleSVG} alt="google" />
            Sign in with Google
          </button>
        </section>
      </div>
    </main>
  );
};

export default Login;
