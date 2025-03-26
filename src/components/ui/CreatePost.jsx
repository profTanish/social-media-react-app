import { Link } from "react-router-dom";
import Modal from "../../components/shared/Modal";
import CreatePostForm from "../../components/ui/CreatePostForm";
import { useUser } from "../../context/AuthContext";

const CreatePost = () => {
  const { user } = useUser();
  const { imageUrl, $id: id } = user;

  return (
    <div className="bg-dark-2 p-5 rounded-md max-w-screen-sm">
      <h1 className="font-medium text-lg">Post something</h1>
      <div className="flex items-center gap-4 p-5 border-b border-light-opacity-10 mb-5">
        <Link to={`/profile/${id}`}>
          <div className="flex items-center gap-4">
            <img src={imageUrl} alt="avatar" className="h-8 w-8 rounded-full" />
          </div>
        </Link>
        <Modal>
           <Modal.Open opens="post-form">
             <p className="cursor-pointer">Have something on your mind?</p>
           </Modal.Open>
           <Modal.Window name="post-form">
             <CreatePostForm />
           </Modal.Window>
         </Modal>
      </div>

      <Modal>
        <Modal.Open opens="post-form">
          <button className="btn btn-primary">New Add new post</button>
        </Modal.Open>
        <Modal.Window name="post-form">
          <CreatePostForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default CreatePost;