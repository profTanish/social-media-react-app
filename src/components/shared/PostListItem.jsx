import { Link } from "react-router-dom";
 import { useUser } from "../../context/AuthContext";
 
 const PostListItem = ({ post }) => {
   const {
     user: { id: creatorId, name: creatorName, imageUrl: creatorAvatarUrl },
   } = useUser();
 
   const { imageUrl, tags, caption } = post;
 
   return (
     <li>
       <>
         <Link to="/">
           <img
             src={imageUrl}
             alt="thumbnail"
             className="rounded-md w-full object-cover max-h-80"
           />
         </Link>
 
         <div className="bg-dark-2 py-3 px-4">
           <figure className="flex items-center gap-4 pt-2.5">
             <Link to={`/profile/${creatorId}`}>
               <div className="flex items-center gap-4">
                 <img
                   src={creatorAvatarUrl}
                   alt="avatar"
                   className="h-12 w-12 rounded-full"
                 />
               </div>
             </Link>
             <div>
               <p>{creatorName}</p>
             </div>
           </figure>
           <div className="flex items-center gap-2.5 mt-5 mb-2.5">
             {tags.map((tag) => (
               <p key={tag} className="text-primary-blue text-sm">
                 #{tag}
               </p>
             ))}
           </div>
           <p className="text-light-2 text-sm">{caption}</p>
         </div>
       </>
     </li>
   );
 };
 
 export default PostListItem;