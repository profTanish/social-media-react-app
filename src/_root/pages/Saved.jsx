import Loader from "../../components/shared/Loader";
 import PostListItem from "../../components/shared/PostListItem";
 import PostsList from "../../components/shared/PostsList";
 import { useGetSavedPosts } from "../../lib/react-query/authQueriesAndMutations";

const Saved = () => {
  const { data: savedPosts } = useGetSavedPosts();
   console.log(savedPosts);
 
   if (!savedPosts)
     return (
       <div className="flex items-center justify-center w-full h-full">
         <Loader />
       </div>
     );
 
   return (
     <div>
       <h3 className="text-lg font-medium mb-5">Posts you've saved:</h3>
 
       <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {savedPosts.documents.map((post) => (
           <PostListItem post={post.post} />
         ))}
       </ul>
     </div>
   );
  };
  
  export default Saved;