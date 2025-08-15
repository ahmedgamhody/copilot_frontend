import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/header/mainlogo.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  const location = useLocation();
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  return (
    <div className=" border-b border-gray-100 fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/chat">
          <div>
            <img src={mainLogo} alt="CAMEL logo" className="h-10 w-auto" />
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          {currentUrl === "/chat" && (
            <Link
              to="/login"
              className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-slate-600 transition duration-300 font-medium text-sm"
            >
              Log in
            </Link>
          )}

          {currentUrl === "/about" && (
            <Link
              to="/chat"
              className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-slate-600 transition duration-300 font-medium text-sm"
            >
              Start Now
            </Link>
          )}

          <Link
            to="/register"
            className="border-2 border-secondary text-slate-700 px-6 py-2 rounded-md hover:bg-primary hover:text-white transition duration-300 font-medium text-sm"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
