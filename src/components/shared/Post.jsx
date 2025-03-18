import { Link } from "react-router-dom";
import { formatDate } from "../../lib/utils";
import PostOperations from "./PostOperations";
import { useUser } from "../../context/AuthContext";
import { HiOutlineMapPin } from "react-icons/hi2";
import EditPost from "../ui/EditPost";

 const Post = ({ post }) => {
   const {
    creator: { $id: creatorId, name: userName, imageUrl: userImageUrl },
     caption,
     imageUrl: postImageUrl,
     location,
     tags,
     $createdAt: postCreatedAt,
   } = post;

   const { user } = useUser();
 
   const postFormatedDate = formatDate(postCreatedAt);
 
   return (
     <div className="bg-dark-2 p-5 rounded-md max-w-screen-sm flex flex-col gap-5">
       <div className="flex items-center justify-between">
         <figure className="flex items-center gap-4">
           <Link to={`/profile/${creatorId}`}>
             <div className="flex items-center gap-4">
               <img
                 src={userImageUrl}
                 alt="avatar"
                 className="h-12 w-12 rounded-full"
               />
             </div>
          </Link>
           <div>
             <p>{userName}</p>
             <p className="text-sm text-light-2">{postFormatedDate}</p>
           </div>
           </figure>
 
 {user.id === creatorId && <EditPost post={post} />}
</div>

       {location && (
         <div className="flex items-center gap-1 text-light-2">
           <HiOutlineMapPin className="text-xl" />
           {location}
         </div>
       )}
 
       <p>{caption}</p>

       <div className="rounded-md overflow-hidden text-center">
         <img src={postImageUrl} alt="post" />
       </div>

       <PostOperations post={post} userId={user.id} />
 
       <ul className="flex items-center gap-4">
         {tags.map((tag) => (
           <li key={tag} className="text-primary-blue text-sm">
             #{tag}
           </li>
         ))}
       </ul>
     </div>
   );
 };
 
 export default Post;