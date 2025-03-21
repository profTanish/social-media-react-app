import { useForm } from "react-hook-form";
 import { useUser } from "../../context/AuthContext";
 import Button from "../../components/ui/Button";
 import Loader from "../../components/shared/Loader";
 
 const EditProfile = () => {
   const { user } = useUser();
   console.log(user);
   const isWorking = false;
 
   const { register, formState, handleSubmit, reset } = useForm({
     name: user?.name,
     username: user?.username,
     image: [],
     email: user?.email,
     bio: user?.bio,
   });
   const { errors } = formState;
 
   function onSubmit(data) {
     console.log(data);
   }
 
   const { imageUrl } = user;
 
   return (
     <div>
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
           />
           {errors?.image?.message && (
             <p className="text-danger-1 text-sm">{errors?.image?.message}</p>
           )}
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
             />
             {errors?.name?.message && (
               <p className="text-danger-1 text-sm">{errors?.name?.message}</p>
             )}
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
             />
             {errors?.username?.message && (
               <p className="text-danger-1 text-sm">
                 {errors?.username?.message}
               </p>
             )}
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
           />
           {errors?.email?.message && (
             <p className="text-danger-1 text-sm">{errors?.email?.message}</p>
           )}
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
           />
           {errors?.bio?.message && (
             <p className="text-danger-1 text-sm">{errors?.bio?.message}</p>
           )}
         </div>
 
         <div className="flex items-center gap-2 justify-end mt-5">
           <button
             type="reset"
             className="btn btn-secondary"
             disabled={isWorking}
           >
             Clear
           </button>
           <Button>
             {isWorking ? (
               <div className="flex justify-center items-center gap-2">
                 <Loader /> Loading...
               </div>
             ) : (
               "Edit Profile"
             )}
           </Button>
         </div>
       </form>
     </div>
   );
 };
 
 export default EditProfile;