import { HiMagnifyingGlass } from "react-icons/hi2";
 import { useUser } from "../../context/AuthContext";
 import { Link, useLocation } from "react-router-dom";
 
 const Topbar = () => {
   const { user } = useUser();
 
   const { imageUrl, name, $id: id } = user;
 
   return (
    <section className="flex items-center justify-between p-5 bg-dark-2 border-b border-gray-800">
       <div>
         <img src="/public/imgs/logo.svg" alt="logo" width="120px" />
       </div>
 
       <div className="relative">
         <input
           type="text"
           placeholder="Search anything..."
           className="input bg-dark-1 pl-10"
         />
         <HiMagnifyingGlass className="absolute top-1/2 left-2.5 translate-y-[-50%] opacity-30 text-xl" />
       </div>
 
       <div>
        <Link to={`/profile/${id}`}>
           <div className="flex items-center gap-4">
             <p className="text-sm">{name}</p>
             <img src={imageUrl} alt="avatar" className="h-8 w-8 rounded-full" />
           </div>
         </Link>
       </div>
     </section>
   );
 };
 
 export default Topbar;