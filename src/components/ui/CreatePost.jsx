import Modal from "../../components/shared/Modal";
import CreatePostForm from "../../components/ui/CreatePostForm";

const CreatePost = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="post-form">
          <button>Add new post</button>
        </Modal.Open>
        <Modal.Window name="post-form">
          <CreatePostForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default CreatePost;