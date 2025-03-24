import { Link } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";

import { useUser } from "../../context/AuthContext";
 
import PostOperations from "./PostOperations";
import EditPost from "../ui/EditPost";
import DeletePost from "../ui/DeletePost";
import ProfileMini from "../ui/ProfileMini";

 const Post = ({ post }) => {
   const {
    creator: { $id: creatorId },
    $id: postId,
     caption,
     imageUrl: postImageUrl,
     location,
     tags,
   } = post;

   const {
    user: { id: userId },
   } = useUser();
 
 
   return (
     <Link className="bg-dark-2 p-5 rounded-md flex flex-col gap-5">
       <div className="flex items-center justify-between">
        <ProfileMini post={post} />
 
           {userId === creatorId && (
           <div className="space-x-2">
             <EditPost post={post} />
             <DeletePost post={post} />
           </div>
         )}
</div>

       {location && (
         <div className="flex items-center gap-1 text-light-2">
           <HiOutlineMapPin className="text-xl" />
           {location}
         </div>
       )}
 
       <p>{caption}</p>

       <Link
         to={`posts/${postId}`}
         className="rounded-md overflow-hidden text-center"
       >
         <img src={postImageUrl} alt="post" />
       </Link>

       <PostOperations post={post} userId={userId} />
 
       <ul className="flex items-center gap-4">
         {tags.map((tag) => (
           <li key={tag} className="text-primary-blue text-sm">
             #{tag}
           </li>
         ))}
       </ul>
     </Link>
   );
 };
 
 export default Post;