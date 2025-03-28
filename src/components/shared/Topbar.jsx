import { Link, useNavigate } from "react-router-dom";

import { initialUser, useUser } from "../../context/AuthContext";
import { useLogoutAccount } from "../../lib/react-query/queriesAndMutations";
 
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import ConfirmLogout from "../ui/ConfirmLogout";
import Modal from "../shared/Modal";

const Topbar = () => {
  const navigate = useNavigate();
  const { user, setUser, setIsAuthenticated } = useUser();
  const { mutate: logoutAccount, isPending } = useLogoutAccount();

  const { imageUrl, name, id } = user;

  const handleLogout = () => {
    logoutAccount();
    setIsAuthenticated(false);
    setUser(initialUser);
    navigate("/sign-in");
  };

  return (
    <section className="flex items-center justify-end p-5 bg-dark-2 border-b border-gray-800">
      <div className="flex items-center gap-4">
       <Link to={`/profile/${id}`}>
          <div className="flex items-center gap-4">
            <p className="text-sm">{name}</p>
            <img src={imageUrl} alt="avatar" className="h-8 w-8 rounded-full" />
          </div>
        </Link>
 
         <Modal>
           <Modal.Open opens="logout">
             <button className="p-2.5 hover:bg-primary-blue-30 rounded-full">
               <HiOutlineArrowRightStartOnRectangle className="text-primary-blue text-2xl" />
             </button>
           </Modal.Open>
           <Modal.Window name="logout">
             <ConfirmLogout disabled={isPending} onConfirm={handleLogout} />
           </Modal.Window>
         </Modal>
      </div>
    </section>
  );
};

export default Topbar;