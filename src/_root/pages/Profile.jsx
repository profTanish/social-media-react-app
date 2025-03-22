import { useParams } from "react-router-dom";
import { useUser } from "../../context/AuthContext";
import { useGetUserById } from "../../lib/react-query/authQueriesAndMutations";
import Loader from "../../components/shared/Loader";
import PostsList from "../../components/shared/PostsList";


const Profile = () => {
  const { id } = useParams();
   const { user } = useUser();
 
   const { data: profile, isLoading } = useGetUserById(id || "");
 
   if (isLoading)
     return (
       <div className="flex items-center justify-center w-full h-full">
         <Loader />
       </div>
     );
 
   const {
     imageUrl: profileAvatarUrl,
     name: profileName,
     username: profileUsername,
     posts,
   } = profile;
   console.log(profile);
 
   return (
     <div className="w-full">
       <figure className="flex gap-8 mb-20">
         <div className="flex items-center gap-4">
           <img
             src={profileAvatarUrl}
             alt="avatar"
             className="h-40 w-40 rounded-full"
           />
         </div>
 
         <div className="flex flex-col py-5">
           <div className="space-y-2.5">
             <p className="text-4xl">{profileName}</p>
             <p className="text-sm text-light-2">@{profileUsername}</p>
           </div>
 
           <div className="flex items-center gap-4 text-lg mt-auto">
             <p>
               <span className="text-primary-blue">0</span> posts
             </p>
             <p>
               <span className="text-primary-blue">0</span> friends
             </p>
           </div>
         </div>
       </figure>
 
       <PostsList posts={posts} />
     </div>
   );
};

export default Profile;