import { Link, useParams } from "react-router-dom";
import { useUser } from "../../context/AuthContext";
import { useGetUserById } from "../../lib/react-query/queriesAndMutations";
import Loader from "../../components/shared/Loader";
import PostsList from "../../components/shared/PostsList";
import { HiOutlinePencilSquare } from "react-icons/hi2";


const Profile = () => {
  const { id } = useParams();
  const {
    user: { id: userId },
  } = useUser();
 
   const { data: profile, isLoading } = useGetUserById(id || "");
 
   if (isLoading)
     return (
       <div className="flex items-center justify-center w-full h-full">
         <Loader />
       </div>
     );
 
   const {
    $id: profileId,
     imageUrl: profileAvatarUrl,
     name: profileName,
     username: profileUsername,
     bio,
     posts,
   } = profile;

   const numPosts = posts.length;
 
   return (
     <div className="w-full">
       <figure className="flex gap-8 mb-10">
         <div className="flex items-center gap-4">
           <img
             src={profileAvatarUrl}
             alt="avatar"
             className="h-40 w-40 rounded-full"
           />
         </div>
 
         <div className="flex flex-col py-5 gap-4">
           <div className="space-y-2.5">
             <p className="text-4xl">{profileName}</p>
             <p className="text-sm text-light-2">@{profileUsername}</p>
           </div>
 
           <div className="flex items-center gap-4 text-lg mt-auto">
             <p>
               <span className="text-primary-blue">{numPosts}</span> posts
             </p>
             <p>
               <span className="text-primary-blue">0</span> friends
             </p>
           </div>

           <p className="text-light-2 max-w-md">{bio}</p>
         </div>

         {profileId === userId && (
           <Link to={`/edit-profile/${userId}`} className="flex gap-2.5 mt-5">
             <HiOutlinePencilSquare className="text-xl text-primary-blue" />
             <p>Edit Profile</p>
           </Link>
         )}
       </figure>

 
       <PostsList posts={posts} showUser={false} />
     </div>
   );
};

export default Profile;