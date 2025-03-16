import {
  HiOutlineBookmark,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineSquares2X2,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="bg-dark-2 p-5 max-w-60 border-r border-gray-800">
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
              <NavLink to="/users" className="nav-link">
                <HiOutlineUsers className="text-2xl" />
                <span>Users</span>
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