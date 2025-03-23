import {
    HiBookmark,
    HiOutlineBookmark,
    HiHeart,
    HiOutlineHeart,
  } from "react-icons/hi2";
  import {
    useDeleteSavedPost,
    useGetCurrentUser,
    useLikePost,
    useSavePost,
  } from "../../lib/react-query/authQueriesAndMutations";
  import { useEffect, useState } from "react";
  import { isLiked } from "../../lib/utils";
  import Loader from "./Loader";
  
  const PostOperations = ({ post, userId }) => {
    const likesList = post?.likes?.map((user) => user.$id) || [];
  
    const { mutate: likePost } = useLikePost();
    const { mutate: savePost, isPending: isSavingPost } = useSavePost();
    const { mutate: deleteSavedPost, isPending: isDeletingSavedPost } =
      useDeleteSavedPost();
    const { data: curUser } = useGetCurrentUser();
  
    const [likes, setLikes] = useState(likesList);
    const [isSaved, setIsSaved] = useState(false);
  
    const savedPostRecord = curUser?.save.find(
      (record) => record.post.$id === post.$id
    );
  
    useEffect(() => {
      setIsSaved(!!savedPostRecord); // !! - automatic boolean assigment '' => !'' => !true => false
    }, [curUser, savedPostRecord]);
  
    const onLikePost = (e) => {
      e.stopPropagation();
      let newLikes = [...likes];
      const isLiked = newLikes.includes(userId);
  
      if (isLiked) {
        newLikes = newLikes.filter((id) => id !== userId);
      } else {
        newLikes.push(userId);
      }
  
      setLikes(newLikes);
      likePost({ postId: post.$id, likesArray: newLikes });
    };
  
    const onSavePost = (e) => {
      e.stopPropagation();
  
      if (savedPostRecord) {
        setIsSaved(false);
        deleteSavedPost(savedPostRecord.$id);
      } else {
        savePost({ userId: userId, postId: post.$id });
        setIsSaved(true);
      }
    };
  
    return (
      <div className="flex items-center justify-between text-xl gap-4">
        <div className="flex items-center gap-2.5">
          {isLiked(likes, userId) ? (
            <HiHeart
              className="cursor-pointer text-danger-1"
              onClick={onLikePost}
            />
          ) : (
            <HiOutlineHeart
             className="cursor-pointer hover:text-danger-1"
             onClick={onLikePost}
           />
          )}
          <p className="text-sm">{likes.length}</p>
        </div>
        {isDeletingSavedPost || isSavingPost ? (
          <Loader />
        ) : isSaved ? (
          <HiBookmark className="cursor-pointer" onClick={onSavePost} />
        ) : (
          <HiOutlineBookmark
           className="cursor-pointer hover:fill-light-1"
           onClick={onSavePost}
         />
        )}
      </div>
    );
  };
  
  export default PostOperations;