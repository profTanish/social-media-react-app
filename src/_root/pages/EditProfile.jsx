import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";

import {
  useEditProfile,
  useGetUserById,
} from "../../lib/react-query/queriesAndMutations";

import { useUser } from "../../context/AuthContext";
import Loader from "../../components/shared/Loader";
import Button from "../../components/ui/Button";
import FormError from "../../components/ui/FormError";
import LoaderCentered from "../../components/ui/LoaderCentered";

const EditProfile = () => {
  const { id } = useParams();
  const { user, setUser } = useUser();

  const { mutateAsync: editProfile, isLoading: isEditing } = useEditProfile();
  const { data: currentUser } = useGetUserById(id || "");

  const { register, formState, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      username: user.username,
      image: [],
      email: user.email,
      bio: user.bio,
    },
  });
  const { errors } = formState;

  const { imageUrl } = user;

  if (!currentUser) return <LoaderCentered />;

  async function onSubmit(data) {
    const editedProfile = await editProfile({
      userId: currentUser.$id,
      name: data.name,
      username: data.username,
      bio: data.bio,
      image: data.image,
      imageUrl: currentUser.imageUrl,
      imageId: currentUser.imageId,
    });

    setUser({
      ...user,
      name: editedProfile?.name,
      username: editedProfile?.username,
      bio: editedProfile?.bio,
      imageUrl: editedProfile?.imageUrl,
    });
  }

  return (
    <div>
      <Link to={-1} className="flex items-center gap-2 text-primary-blue mb-5">
        <HiOutlineArrowUturnLeft className="text-xl" />
        Back
      </Link>

      <h1 className="text-2xl font-medium">Edit Profile</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col gap-5"
      >
        <div className="flex gap-5 items-center">
          <div>
            <img
              src={imageUrl}
              alt="avatar"
              className="h-24 w-24 rounded-full"
            />
          </div>
          <label
            htmlFor="image"
            className="block text-primary-blue font-medium cursor-pointer"
          >
            Click to change profile photo
          </label>
          <input
            type="file"
            id="image"
            {...register("image")}
            accept="image/*"
            className="hidden"
            disabled={isEditing}
          />
          <FormError errors={errors} fieldName="image" />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <label htmlFor="name" className="block mb-2.5">
              Name
            </label>
            <input
              type="text"
              placeholder="New full name"
              id="name"
              {...register("name")}
              className="input bg-dark-3"
              disabled={isEditing}
            />
             <FormError errors={errors} fieldName="name" />
          </div>

          <div>
            <label htmlFor="username" className="block mb-2.5">
              Username
            </label>
            <input
              type="text"
              placeholder="New username"
              id="username"
              {...register("username")}
              className="input bg-dark-3"
              disabled={isEditing}
            />
            <FormError errors={errors} fieldName="username" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2.5">
            Email
          </label>
          <input
            type="email"
            placeholder="New email"
            id="email"
            {...register("email")}
            className="input bg-dark-3"
            disabled={isEditing}
          />
          <FormError errors={errors} fieldName="email" />
        </div>

        <div>
          <label htmlFor="bio" className="block mb-2.5">
            Bio
          </label>
          <textarea
            placeholder="Write a description about yourself..."
            id="bio"
            {...register("bio")}
            className="textarea bg-dark-3"
            disabled={isEditing}
          />
          <FormError errors={errors} fieldName="bio" />
        </div>

        <div className="flex items-center gap-2 justify-end mt-5">
          <button
            type="reset"
            className="btn btn-secondary"
            disabled={isEditing}
          >
            Clear
          </button>
          <button className="btn btn-primary">
            {isEditing ? (
              <div className="flex justify-center items-center gap-2">
                <Loader /> Loading...
              </div>
            ) : (
              "Edit Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;