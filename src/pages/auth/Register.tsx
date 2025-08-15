import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Logo from "../../assets/auth/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  RegisterFormData,
  RegisterSchema,
} from "../../validations/RegisterValidation";
import useTitle from "../../hooks/useChangePageTitle";
import GoogleIcon from "../../assets/auth/Google.png";
import MicrosoftIcon from "../../assets/auth/microsoft.png";
const Register = () => {
  useTitle("Register - Corelia");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
    // nav("/login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Banner */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center items-center p-8">
        <div className="text-center">
          <div className="mb-8">
            <img src={Logo} alt="Logo" className=" mx-auto mb-6" />
          </div>

          <Link
            className="text-secondary border-2 py-3 px-8 border-secondary hover:text-white hover:bg-secondary duration-200 rounded font-medium inline-block"
            to={"/about"}
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col rounded-lg overflow-hidden ">
        {/* Mobile Logo - Only visible on small screens */}
        <div className="lg:hidden bg-primary text-center py-6">
          <img src={Logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
        </div>

        {/* Main Form Area */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-8 bg-white ">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 shadow-md">
              <h1 className="text-center text-2xl lg:text-3xl text-gray-800 mb-6 font-semibold leading-tight italic">
                Sign Up and Start to <br />
                Chat
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                {" "}
                {/* Name Field */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">User Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Enter your User Name"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:primary focus:border-transparent transition"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                {/* Email Field */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your Email"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:primary focus:border-transparent transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Password Field */}
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon size={18} />
                      ) : (
                        <EyeIcon size={18} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition duration-300 font-medium text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Create
                </button>
              </form>

              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-gray-500 text-sm">OR</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
              {/* // i need to add here to static button to sign up with google and microsoft */}
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 hover:shadow-md transition">
                  <img src={GoogleIcon} alt="Google" className="w-5 h-5 mr-2" />
                  Continue with Google
                </button>
                <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 hover:shadow-md transition">
                  <img
                    src={MicrosoftIcon}
                    alt="Microsoft"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Microsoft Account
                </button>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <p className="text-center text-gray-700">
                Already have an account?{" "}
                <button
                  onClick={() => nav("/login")}
                  className="text-secondary hover:text-primary hover:underline cursor-pointer font-medium transition"
                >
                  Log In
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-primary text-center py-6 px-6">
          <div className="lg:hidden mb-4">
            <Link
              className="text-secondary border-2 py-2 px-6 border-secondary hover:text-white hover:bg-secondary duration-200 rounded font-medium inline-block"
              to={"/about"}
            >
              About Us
            </Link>
          </div>

          <p className="text-white text-sm lg:text-base">
            Looking to start your chat?{" "}
            <Link
              className="text-secondary hover:text-white duration-200 font-medium hover:underline"
              to={"/login"}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
