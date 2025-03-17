import { Link } from "react-router-dom";
 import { formatDate } from "../../constants";
 
 const Post = ({ post }) => {
   console.log(post);
   const {
     creator: {
       $id: userId,
       name: userName,
       username: userUsername,
       imageUrl: userImageUrl,
     },
     caption,
     imageUrl: postImageUrl,
     location,
     tags,
     $createdAt: postCreatedAt,
   } = post;
 
   const postFormatedDate = formatDate(postCreatedAt);
 
   return (
     <div className="bg-dark-2 p-5 rounded-md max-w-screen-sm flex flex-col gap-5">
       <figure className="flex items-center gap-4">
         <Link to={`/profile/${userId}`}>
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
 
       <p>{caption}</p>
 
       <div className="rounded-md overflow-hidden text-center">
         <img src={postImageUrl} alt="post" />
       </div>
 
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