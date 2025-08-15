import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Logo from "../../assets/auth/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { LoginFormData, LoginSchema } from "../../validations/LoginValidation";
import useTitle from "../../hooks/useChangePageTitle";

const Login = () => {
  useTitle("Login - Corelia");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
    // nav("/");
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
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* Mobile Logo - Only visible on small screens */}
        <div className="lg:hidden bg-primary text-center py-6">
          <img src={Logo} alt="Logo" className="w-20 h-20 mx-auto mb-4" />
        </div>

        {/* Main Form Area */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-8 bg-gray-50">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-center text-2xl lg:text-3xl text-gray-800 mb-6 font-semibold leading-tight italic">
                Sign In and Start to <br />
                Chat
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition pr-12"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary hover:text-primary transition"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon size={20} />
                      ) : (
                        <EyeIcon size={20} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="text-end mb-6">
                  <a
                    href="#/"
                    className="text-secondary text-sm hover:text-primary hover:underline transition"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition duration-300 font-medium text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Log in
                </button>
              </form>

              <div className="border-t border-gray-200 my-6"></div>

              <p className="text-center text-gray-700">
                Don't have an account?{" "}
                <button
                  onClick={() => nav("/register")}
                  className="text-secondary hover:text-primary hover:underline cursor-pointer font-medium transition"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-primary text-center py-6 px-6">
          {/* Mobile About Button - Only visible on small screens */}
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
              to={"/register"}
            >
              Create an Account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
