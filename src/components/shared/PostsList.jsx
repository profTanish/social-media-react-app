import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PostListItem from "./PostListItem";

const PostsList = ({ posts }) => {
  console.log(posts);
  return (
    <ResponsiveMasonry>
      <Masonry gutter="1rem">
        {posts.map((post) => (
          <PostListItem key={post.$id} post={post} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default PostsList;