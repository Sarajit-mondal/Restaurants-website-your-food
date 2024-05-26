import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authenticationImage from "../../assets/others/authentication.gif";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import {
  FaFacebook,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../provider/AuthProvider";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { LogInWithSocial, LogInWithEOrP } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state || "/";
  const [loading, setLoading] = useState(true);
  console.log(location.state);
  // captcha
  const inputRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidate = () => {
    const user = document.querySelector(".userCapture").value;
    if (validateCaptcha(user) == true) {
      toast.success("Captchar match");
      setDisabled(false);
    } else {
      setDisabled(false);
    }
  };
  /// signIn button condition disabled

  const onSubmit = (data) => {
    LogInWithEOrP(data.email, data.password)
      .then((result) => {
        swal(
          "LogIn Successfull",
          "You click the button! go your page",
          "success"
        );
        navigate(form);
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  ////Social login
  const socialLogin = (social) => {
    LogInWithSocial(social)
      .then((result) => {
        console.log(result.user);
        swal(
          social + " LogIn Successfull",
          "You click the button! go your page",
          "success"
        );
        navigate(form);
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error.code);
      });
  };

  return (
    <div className="lg:m-20 mt-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full text-center items-center border-2 border-sky-100  mx-auto rounded-2xl  shadow-xl overflow-hidden">
        <div className="animate__animated animate__bounceInLeft bg-sky-200 h-full flex flex-col space-y-5 items-center justify-center p-10 text-light bg-authentication bg-center">
          <h2 className="text-3xl text-grayLight font-extrabold">
            Hellow, Friend!
          </h2>
          <p>Enter your personal details and start journey with us</p>
          {/* <p>please stay connected with us please login with your info</p> */}
          <Link
            to="/signUp"
            className="py-3 px-10 bg-transparent border-2 border-white rounded-full font-semibold"
          >
            SIGN UP
          </Link>
        </div>

        {/* Form section */}
        <div className="p-10 animate__animated animate__bounceInRight">
          {/* login with social */}
          <div>
            <h2 className="text-3xl font-extrabold">Create Account</h2>
            <div className="flex gap-6 justify-center my-4 [&>span]:cursor-pointer">
              <span
                onClick={() => socialLogin("google")}
                className="bg-sky-200 p-2 active:scale-95 rounded-full"
              >
                <FaGoogle></FaGoogle>
              </span>
              <span
                onClick={() => socialLogin("gitHub")}
                className="bg-sky-200 p-2 active:scale-95 rounded-full"
              >
                <FaGithub></FaGithub>
              </span>
              <span
                onClick={() => socialLogin("facebook")}
                className="bg-sky-200 p-2 active:scale-95 rounded-full"
              >
                <FaFacebook></FaFacebook>
              </span>
            </div>
            <p className="mt-3 mb-1">or use your email for registration</p>
          </div>
          <form
            className="flex flex-col [&>input]:border-2 [&>input]:border-sky-200 [&>input]:m-2 [&>input]:p-3 [&>input]:rounded-lg rounded-xl bg-gray-200 h-full w-full [&>input]:bg-transparent "
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input
              autoFocus
              {...register("firstName", { required: true })}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-left ml-3">Must give Frist Name</p>
            )}

            <input
              {...register("photoURl", { required: true })}
              placeholder="photoURL"
            />
            {errors.firstName && (
              <p className="text-left ml-3">Must give photoURL</p>
            )} */}
            <input
              type="email"
              autoFocus
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-left ml-3 text-red">
                This field must be a valid email address.
              </p>
            )}
            {/* password */}
            <div className="box-border w-full  flex justify-center relative ">
              <input
                className="border-2 bg-transparent  border-sky-200 m-2 p-3 rounded-lg w-full"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                placeholder="Enter your password"
              />
              {/* show and hide password */}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2/4 -translate-y-2/4 right-6 text-xl cursor-pointer active:scale-95"
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
            </div>
            {errors.password && (
              <p className="text-left ml-3 text-red">
                you give must length six.
              </p>
            )}

            {/* captcha */}
            <div>
              <LoadCanvasTemplate />
            </div>
            <input
              className="userCapture"
              ref={inputRef}
              {...register("photoURl", {
                required: true,
              })}
              placeholder="Type captcha here"
            />
            <p onClick={handleValidate}> valided</p>
            <button
              className={`cursor-pointer  
              ${
                disabled ? "bg-transparent" : "bg-gold-500"
              } font-bold box-border  flex justify-center relative border-2 border-sky-200 m-2 p-3 rounded-lg`}
              type="submit"
              disabled={disabled}
            >
              {" "}
              LogIn
            </button>
          </form>
          <p className="underline text-right cursor-pointer active:opacity-85 font-semibold">
            ForgetPassword
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
