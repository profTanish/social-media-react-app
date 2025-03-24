import { useGetRecentPosts } from "../../lib/react-query/queriesAndMutations";

import Loader from "../../components/shared/Loader";
import Post from "../../components/shared/Post";
import CreatePost from "../../components/ui/CreatePost";

const Home = () => {
  const { data: posts, isPending: isLoadingPost } = useGetRecentPosts();

  return (
    <div className="w-full">
      <CreatePost />
      <div className="max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9 mt-8">
         {isLoadingPost && !posts ? (
           <Loader />
         ) : (
           <ul className="flex flex-col flex-1 gap-9 w-full">
             {posts?.documents.map((post) => (
               <Post key={post.$id} post={post} />
             ))}
           </ul>
         )}
       </div>
    </div>
  );
};

export default Home;