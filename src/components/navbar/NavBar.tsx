import { Link } from 'react-router-dom';
import logo from '/src/assets/logos/logo.png';
import Gradient from "../colors/Gradient";

interface NavBarProps {
  brandName? : string;
  logoSrc? : string;
}

function NavBar({
  brandName = "Get Hired",
  logoSrc = logo,
}: NavBarProps) {
  return (
    <Gradient gradient="blueCyanTeal">
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              
              {/* Use Link instead */}
              <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logoSrc} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  {brandName}
                </span>
              </Link>
              
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  {/* Link 'to' points to the 'path' defined in App.tsx */}
                  <Link
                    to="/"
                    className="text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2"
                  >
                    Home
                  </Link>
                  <Link
                    to="/jobs"
                    className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
                  >
                    Jobs
                  </Link>
                  {/* Note: You will need to create routes for these later */}
                  <Link
                    to="/add-job"
                    className="text-white hover:bg-gray-900 rounded-md px-3 py-2"
                  >
                    Add Job
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Gradient>
  );
}

export default NavBar;