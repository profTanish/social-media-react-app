import { HiOutlineTrash } from "react-icons/hi2";
 import Modal from "../shared/Modal";
 import ConfirmDelete from "./ConfirmDelete";
 import { useDeletePost } from "../../lib/react-query/authQueriesAndMutations";
 import toast from "react-hot-toast";
 
 const DeletePost = ({ post }) => {
   const { mutateAsync: deletePost, isPending: isDeletingPost } =
     useDeletePost();
 
   const { $id: postId, imageId } = post;
   console.log(postId, imageId);
 
   async function handleConfirm() {
     const statusCode = await deletePost({ postId, imageId });
 
     if (!statusCode) toast.error("Error while deleting a post!");
   }
 
   return (
     <Modal>
       <Modal.Open opens="edit">
         <button>
           <HiOutlineTrash className="text-xl hover:text-danger-1" />
         </button>
       </Modal.Open>
       <Modal.Window name="edit">
         <ConfirmDelete
           name="post"
           disabled={isDeletingPost}
           onConfirm={handleConfirm}
         />
       </Modal.Window>
     </Modal>
   );
 };
 
 export default DeletePost;