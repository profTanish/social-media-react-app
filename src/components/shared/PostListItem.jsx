import { Link } from "react-router-dom";
import { formatDate } from "../../lib/utils";
import PostOperations from "./PostOperations";
import { useUser } from "../../context/AuthContext";

const PostListItem = ({ post, showUser  }) => {
  const {
    user: { id: userId },
  } = useUser();

  const { $id: postId, imageUrl, $updatedAt: postUpdatedAt } = post;

  const postFormatedDate = formatDate(postUpdatedAt);

  return (
    <li className="list-none">
      <Link to={`/posts/${postId}`}>
        <img src={imageUrl} alt="thumbnail" className="rounded-md" />
      </Link>

      <div className="flex items-center justify-between py-4">
      {showUser && (
           <figure className="flex items-center gap-4">
             <Link to={`/profile/${post.creator.$id}`}>
               <div className="flex items-center gap-4">
                 <img
                   src={post.creator.imageUrl}
                   alt="avatar"
                   className="h-8 w-8 rounded-full"
                 />
               </div>
             </Link>
             <div>
               <p className="text-sm">{post.creator.name}</p>
               <p className="text-xs text-light-2">{postFormatedDate}</p>
            </div>
            </figure>
         )}

        <PostOperations post={post} userId={userId} />
      </div>
    </li>
  );
};

export default PostListItem;