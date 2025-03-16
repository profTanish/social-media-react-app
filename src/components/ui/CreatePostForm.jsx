import Button from "./Button";

const CreatePostForm = ({ onClose }) => {
    return (
        <form className="text-sm text-light-1 flex flex-col gap-5 w-96">
          <h3 className="text-2xl font-medium">Creating a post:</h3>
    
          <div>
            <label htmlFor="email" className="block mb-2.5">
              Description
            </label>
            <textarea
              placeholder="Write a description for your post..."
              id="description"
              className="textarea bg-dark-3"
            />
            {/* {errors?.email?.message && (
                <p className="text-danger-1 text-sm">{errors?.email?.message}</p>
              )} */}
          </div>
    
          <div>
            <label htmlFor="location" className="block mb-2.5">
              Location
            </label>
            <input
              type="text"
              placeholder="Provide a location for your post"
              id="location"
              className="input bg-dark-3"
            />
          </div>
    
          <div>
            <label htmlFor="image" className="block mb-2.5">
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="file:px-5 file:py-3.5 file:mr-5 file:rounded-sm file:border-none file:bg-primary-blue file:text-light-1 file:cursor-pointer file:hover:bg-primary-blue-light file:transition-all file:duration-300"
            />
          </div>
    
          <div>
            <label htmlFor="tags" className="block mb-2.5">
              Tags (separated by " , ")
            </label>
            <input
              type="text"
              placeholder="React, JavaScript, API"
              id="tags"
              className="input bg-dark-3"
            />
          </div>
    
          <div className="flex items-center gap-2 justify-end mt-5">
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() => onClose?.()}
            >
              Cancel
            </button>
            <Button>Create new post</Button>
          </div>
        </form>
      );
};

export default CreatePostForm;