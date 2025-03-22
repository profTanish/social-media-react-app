import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PostListItem from "./PostListItem";

const PostsList = ({ posts, showUser = true  }) => {
  return (
    <ResponsiveMasonry>
      <Masonry gutter="1rem">
        {posts.map((post) => (
          <PostListItem key={post.$id} post={post} showUser={showUser} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default PostsList;