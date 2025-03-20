import { Link } from "react-router-dom";
import { useUser } from "../../context/AuthContext";
import { formatDate } from "../../lib/utils";
import PostOperations from "./PostOperations";

const PostListItem = ({ post }) => {
  const {
    user: { id: creatorId, name: creatorName, imageUrl: creatorAvatarUrl },
  } = useUser();

  const { imageUrl, $updatedAt: postUpdatedAt } = post;

  const postFormatedDate = formatDate(postUpdatedAt);

  return (
    <li className="list-none">
      <Link to="/">
        <img src={imageUrl} alt="thumbnail" className="rounded-md" />
      </Link>

      <div className="flex items-center justify-between py-4">
        <figure className="flex items-center gap-4">
          <Link to={`/profile/${creatorId}`}>
            <div className="flex items-center gap-4">
              <img
                src={creatorAvatarUrl}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </Link>
          <div>
            <p className="text-sm">{creatorName}</p>
            <p className="text-xs text-light-2">{postFormatedDate}</p>
          </div>
        </figure>

        <PostOperations post={post} userId={creatorId} />
      </div>
    </li>
  );
};

export default PostListItem;