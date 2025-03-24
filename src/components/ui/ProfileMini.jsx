import { Link } from "react-router-dom";
 import { formatDate } from "../../lib/utils";
 
 const ProfileMini = ({ post }) => {
   const {
     creator: { $id: id, name, imageUrl },
     $createdAt: postCreatedAt,
   } = post;
 
   const postFormatedDate = formatDate(postCreatedAt);
 
   return (
     <figure className="flex items-center gap-4">
       <Link to={`/profile/${id}`}>
         <div className="flex items-center gap-4">
           <img src={imageUrl} alt="avatar" className="h-12 w-12 rounded-full" />
         </div>
       </Link>
       <div>
         <p>{name}</p>
         <p className="text-sm text-light-2">{postFormatedDate}</p>
       </div>
     </figure>
   );
 };
 
 export default ProfileMini;