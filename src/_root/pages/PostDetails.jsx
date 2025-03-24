import { Link, useParams } from "react-router-dom";
 import { useGetPostById } from "../../lib/react-query/queriesAndMutations";
 import { useUser } from "../../context/AuthContext";
 import Loader from "../../components/shared/Loader";
 import {
    HiOutlineArrowUturnLeft,
    HiOutlineArrowsPointingOut,
  } from "react-icons/hi2";
 import EditPost from "../../components/ui/EditPost";
 import DeletePost from "../../components/ui/DeletePost";
 import { formatDate } from "../../lib/utils";
 import Tags from "../../components/shared/Tags";
 import PostOperations from "../../components/shared/PostOperations";
 import Modal from "../../components/shared/Modal";
 
const PostDetails = () => {
    const { id } = useParams();
   const { data: post, isLoading } = useGetPostById(id);
   const {
     user: { id: userId },
   } = useUser();
 
   if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    );
 
   const {
     imageUrl,
     $createdAt: createdAt,
     caption,
     tags,
     creator: { $id: creatorId, imageUrl: creatorAvatarUrl, name },
   } = post;
   const postFormatedDate = formatDate(createdAt);
 
   return (
     <div className="w-full">
       <Link to={-1} className="flex items-center gap-2 text-primary-blue mb-5">
         <HiOutlineArrowUturnLeft className="text-xl" />
         Back
       </Link>
 
       <div className="grid grid-cols-[1fr_2fr] p-5 rounded-md bg-dark-2 gap-5 max-w-4xl">
         <div className="h-80 relative">
           <img
             src={imageUrl}
             alt="post"
             className="object-cover w-full h-full"
           />
           <Modal>
             <Modal.Open opens="image">
               <button className="text-xl absolute top-4 right-4 cursor-pointer p-1 bg-primary-blue-50 rounded-full">
                 <HiOutlineArrowsPointingOut />
               </button>
             </Modal.Open>
             <Modal.Window name="image">
               <img src={imageUrl} alt="post" />
             </Modal.Window>
           </Modal>
         </div>
 
         <div className="flex flex-col">
           <div className="flex items-center justify-between">
             <figure className="flex items-center gap-4">
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
                 <p>{name}</p>
                 <p className="text-sm text-light-2">{postFormatedDate}</p>
               </div>
             </figure>
 
             {userId === creatorId && (
               <div className="space-x-2">
                 <EditPost post={post} />
                 <DeletePost post={post} />
               </div>
             )}
           </div>
 
           <div className="mt-5">
             <p>{caption}</p>
             <Tags tags={tags} />
           </div>
 
           <div className="mt-auto">
             <PostOperations post={post} userId={userId} />
           </div>
         </div>
       </div>
     </div>
   );
};

export default PostDetails;