import Loader from "../../components/shared/Loader";
import Post from "../../components/shared/Post";
import CreatePost from "../../components/ui/CreatePost";
import { useGetRecentPosts } from "../../lib/react-query/authQueriesAndMutations";

const Home = () => {
  const {
    data: posts,
    isPending: isLoadingPost,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  return (
    <div className="w-full">
      <CreatePost />
      {isLoadingPost && !posts ? (
        <Loader />
      ) : (
        <ul className="flex flex-col flex-1 gap-9 w-full mt-8">
          {posts?.documents.map((post) => (
            <Post key={post.$id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;