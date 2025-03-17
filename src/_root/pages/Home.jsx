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
    </div>
  );
};

export default Home;