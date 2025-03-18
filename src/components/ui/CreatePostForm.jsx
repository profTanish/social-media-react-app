import { useForm } from "react-hook-form";
import Button from "./Button";
import {
  useCreatePost,
  useUpdatePost,
} from "../../lib/react-query/authQueriesAndMutations";
import { useUser } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";

const CreatePostForm = ({ postToEdit = {}, onClose }) => {
    const { user } = useUser();
    const { mutateAsync: createPost, isPending: isCreatingPost } =
        useCreatePost();
    const { mutateAsync: updatePost, isPending: isUpdatingPost } =
    useUpdatePost();
    
    const isWorking = isCreatingPost || isUpdatingPost;

    const { $id: editId } = postToEdit;
    const isEditSession = Boolean(editId);

    const { register, formState, handleSubmit, reset } = useForm({
        defaultValues: isEditSession
       ? {
           description: postToEdit?.caption,
           location: postToEdit?.location,
           image: [],
           tags: postToEdit?.tags,
         }
       : {
           description: "",
           location: "",
           image: [],
           tags: "",
         },
    });
    const { errors } = formState;

    async function onSubmit(data) {
        if (isEditSession) {
            const updatedPost = await updatePost({
              ...data,
              postId: postToEdit.$id,
              imageId: postToEdit.imageId,
              imageUrl: postToEdit.imageUrl,
            });
      
            if (!updatePost) toast.error("Error updating a post!");

            reset();
            onClose?.();
          } else {
            const newPost = await createPost({
              userId: user.id,
              ...data,
            });

            if (!newPost) toast.error("Please try again!");
 
            reset();
            onClose?.();
          }
    }

    return (
        <form
            className="text-sm text-light-1 flex flex-col gap-5 w-96"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <h3 className="text-2xl font-medium mb-5">
                {isEditSession ? "Edit a post:" : "Create a post:"}
                </h3>

                <label htmlFor="description" className="block mb-2.5">
                    Description
                </label>
                <textarea
                    placeholder="Write a description for your post..."
                    id="description"
                    {...register("description", {
                        required: "This field is required.",
                    })}
                    className="textarea bg-dark-3"
                    disabled={isWorking}
                />
                {errors?.description?.message && (
                    <p className="text-danger-1 text-sm">
                        {errors?.description?.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="location" className="block mb-2.5">
                    Location
                </label>
                <input
                    type="text"
                    placeholder="Belgrade, Serbia"
                    id="location"
                    {...register("location")}
                    className="input bg-dark-3"
                    disabled={isWorking}
                />
                {errors?.location?.message && (
                    <p className="text-danger-1 text-sm">{errors?.location?.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="image" className="block mb-2.5">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    {...register("image")}
                    accept="image/*"
                    className="file:px-5 file:py-3.5 file:mr-5 file:rounded-sm file:border-none file:bg-primary-blue file:text-light-1 file:cursor-pointer file:hover:bg-primary-blue-light file:transition-all file:duration-300"
                    disabled={isWorking}
                />
                {errors?.image?.message && (
                    <p className="text-danger-1 text-sm">{errors?.image?.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="tags" className="block mb-2.5">
                    Tags (separated by " , ")
                </label>
                <input
                    type="text"
                    placeholder="React, JavaScript, API"
                    id="tags"
                    {...register("tags", {
                        required: "This field is required.",
                    })}
                    className="input bg-dark-3"
                    disabled={isWorking}
                />
                {errors?.tags?.message && (
                    <p className="text-danger-1 text-sm">{errors?.tags?.message}</p>
                )}
            </div>

            <div className="flex items-center gap-2 justify-end mt-5">
                <button
                    type="reset"
                    className="btn btn-secondary"
                    onClick={() => onClose?.()}
                    disabled={isWorking}
                >
                    Cancel
                </button>
                <Button>
                    {isWorking ? (
                        <div className="flex justify-center items-center gap-2">
                            <Loader /> Loading...
                        </div>
                        ) : isEditSession ? (
             "Edit a post"
                    ) : (
                        "Create a Post"
                    )}
                </Button>
            </div>
        </form>
    );
};

export default CreatePostForm;