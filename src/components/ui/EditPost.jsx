import Modal from "../../components/shared/Modal";
 import CreatePostForm from "./CreatePostForm";
 
 import { HiOutlinePencilSquare } from "react-icons/hi2";
 
 const EditPost = ({ post }) => {
   return (
     <Modal>
       <Modal.Open opens="edit">
         <button>
           <HiOutlinePencilSquare className="text-xl hover:text-primary-blue" />
         </button>
       </Modal.Open>
       <Modal.Window name="edit">
         <CreatePostForm postToEdit={post} />
       </Modal.Window>
     </Modal>
   );
 };
 
 export default EditPost;