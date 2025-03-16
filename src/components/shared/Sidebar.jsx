import { Link, NavLink } from "react-router-dom";

import {
  HiOutlineBookmark,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineSquares2X2,
  HiOutlineUsers,
} from "react-icons/hi2";

const Sidebar = () => {
    return (
    <aside className="bg-dark-2 p-5 border-r border-gray-800 row-span-full">
       <Link to="/" className="block mt-5 mb-24">
         <img
           src="/public/imgs/logo.svg"
           alt="logo"
           width="200px"
           className="mx-auto"
         />
       </Link>

          <ul className="flex flex-col gap-4">
            <li>
              <NavLink to="/" className="nav-link">
                <HiOutlineHome className="text-2xl" />
                <span>Home</span>
              </NavLink>
            </li>
    
            <li>
              <NavLink to="/explore" className="nav-link">
                <HiOutlineSquares2X2 className="text-2xl" />
                <span>Explore</span>
              </NavLink>
            </li>
    
            <li>
              <NavLink to="/profiles" className="nav-link">
                <HiOutlineUsers className="text-2xl" />
                <span>Profiles</span>
              </NavLink>
            </li>
    
            <li>
              <NavLink to="/saved" className="nav-link">
                <HiOutlineBookmark className="text-2xl" />
                <span>Saved</span>
              </NavLink>
            </li>
    
            <li>
              <NavLink to="/settings" className="nav-link">
                <HiOutlineCog6Tooth className="text-2xl" />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </aside>
    );
};
    
export default Sidebar;