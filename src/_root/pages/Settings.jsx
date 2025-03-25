import { HiOutlineChevronRight, HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="w-full">
      <Link to="/" className="block mb-12">
        <img
          src="/public/imgs/logo.svg"
          alt="logo"
          width="200px"
          className="mx-auto"
        />
      </Link>

      <ul className="max-w-xl mx-auto">
        <li className="bg-dark-2 p-5 rounded-md">
          <button className="flex items-center justify-between gap-4 text-xl w-full">
            <span className="flex items-center gap-4">
              <span className="p-2.5 bg-primary-blue rounded-full">
                <HiOutlineUser />
              </span>
              Account
            </span>
            <HiOutlineChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Settings;