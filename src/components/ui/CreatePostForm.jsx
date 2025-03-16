import { useForm } from "react-hook-form";
import Button from "./Button";
import { useCreatePost } from "../../lib/react-query/authQueriesAndMutations";
import { useUser } from "../../context/AuthContext";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";

const CreatePostForm = ({ onClose }) => {
    const { mutateAsync: createPost, isPending: isCreatingPost } =
        useCreatePost();
    console.log(isCreatingPost);
    const { user } = useUser();

    const { register, formState, handleSubmit, reset } = useForm({
        defaultValues: {
            description: "",
            location: "",
            image: [],
            tags: "",
        },
    });
    const { errors } = formState;

    async function onSubmit(data) {
        console.log(data);
        const newPost = await createPost({
            userId: user.id,
            ...data,
        });

        if (!newPost) toast.error("Please try again!");

        reset();
        onClose?.();
    }

    return (
        <form
            className="text-sm text-light-1 flex flex-col gap-5 w-96"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className="text-2xl font-medium">Creating a post:</h3>

            <div>
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
                    disabled={isCreatingPost}
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
                    disabled={isCreatingPost}
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
                    {...register("image", {
                        required: "This field is required.",
                    })}
                    accept="image/*"
                    className="file:px-5 file:py-3.5 file:mr-5 file:rounded-sm file:border-none file:bg-primary-blue file:text-light-1 file:cursor-pointer file:hover:bg-primary-blue-light file:transition-all file:duration-300"
                    disabled={isCreatingPost}
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
                    disabled={isCreatingPost}
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
                    disabled={isCreatingPost}
                >
                    Cancel
                </button>
                <Button>
                    {isCreatingPost ? (
                        <div className="flex justify-center items-center gap-2">
                            <Loader /> Loading...
                        </div>
                    ) : (
                        "Create a new post"
                    )}
                </Button>
            </div>
        </form>
    );
};

export default CreatePostForm;