import { Link } from "react-router-dom";
 
 const ProfileListItem = ({ user }) => {
   const { $id: id, username, name, imageUrl } = user;
 
   return (
     <div className="flex items-center justify-between max-w-md py-5 border-b border-light-opacity-10">
       <figure className="flex items-center gap-4">
         <Link to={`/profile/${id}`}>
           <div className="flex items-center gap-4">
             <img src={imageUrl} alt="avatar" className="h-8 w-8 rounded-full" />
           </div>
         </Link>
         <div>
           <p className="text-sm">{name}</p>
           <p className="text-xs text-light-2">{username}</p>
         </div>
       </figure>
 
       <button className="border-2 border-primary-blue text-sm px-4 py-1 rounded-md hover:bg-primary-blue">
         Follow
       </button>
     </div>
   );
 };
 
 export default ProfileListItem;