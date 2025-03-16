import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../../context/AuthContext";
import { useLogoutAccount } from "../../lib/react-query/authQueriesAndMutations";
 
import {
  HiMagnifyingGlass,
  HiOutlineArrowRightStartOnRectangle,
} from "react-icons/hi2";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { mutate: logoutAccount, isSuccess } = useLogoutAccount();

  const { imageUrl, name, $id: id } = user;

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess, navigate]);

  return (
   <section className="flex items-center justify-between p-5 bg-dark-2 border-b border-gray-800">
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything..."
          className="input bg-dark-1 pl-10"
        />
        <HiMagnifyingGlass className="absolute top-1/2 left-2.5 translate-y-[-50%] opacity-30 text-xl" />
      </div>

      <div className="flex items-center gap-4">
       <Link to={`/profile/${id}`}>
          <div className="flex items-center gap-4">
            <p className="text-sm">{name}</p>
            <img src={imageUrl} alt="avatar" className="h-8 w-8 rounded-full" />
          </div>
        </Link>

        <button
           className="p-2.5 hover:bg-primary-blue-30 rounded-full"
           onClick={() => logoutAccount()}
         >
           <HiOutlineArrowRightStartOnRectangle className="text-primary-blue text-2xl" />
         </button>
      </div>
    </section>
  );
};

export default Topbar;