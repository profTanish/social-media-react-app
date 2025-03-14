import { useForm } from "react-hook-form";
 import { Link } from "react-router-dom";
 
 const SignupForm = () => {
   const { register, formState, handleSubmit } = useForm();
   const { errors } = formState;
 
   function onSubmit(data) {
     console.log(data);
   }
 
   return (
     <div className="flex items-center justify-center">
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
         <div>
           <label htmlFor="name" className="block mb-2.5">
             Name
           </label>
           <input
             type="text"
             placeholder="John Doe"
             id="name"
             {...register("name", {
               required: "This field is required.",
             })}
             className="input"
           />
           {errors?.name?.message && (
             <p className="text-danger-1 text-sm">{errors?.name?.message}</p>
           )}
         </div>
 
         <div className="mt-5">
           <label htmlFor="username" className="block mb-2.5">
           Username
           </label>
           <input
             type="text"
             placeholder="johndoe"
             id="username"
             {...register("username", {
              required: "This field is required.",
            })}
            className="input"
          />
          {errors?.username?.message && (
            <p className="text-danger-1 text-sm">{errors?.username?.message}</p>
          )}
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block mb-2.5">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@yahoo.com"
             id="email"
             {...register("email", {
               required: "This field is required.",
               pattern: {
                 value: /\S+@\S+\.\S+/,
                 message: "Please provide a valid email address.",
               },
             })}
             className="input"
           />
           {errors?.email?.message && (
             <p className="text-danger-1 text-sm">{errors?.email?.message}</p>
           )}
         </div>
 
         <div className="mt-5">
         <label htmlFor="password" className="block mb-2.5">
             Password
           </label>
           <input
             type="password"
             placeholder="Your password"
             id="password"
             {...register("password", {
               required: "This field is required.",
               minLength: {
                 value: 8,
                 message: "Password needs a minimum of 8 characters.",
               },
             })}
             className="input"
           />
           {errors?.password?.message && (
             <p className="text-danger-1 text-sm">{errors?.password?.message}</p>
           )}
         </div>
         <p className="text-xs opacity-40 mt-5 mb-2.5">
           By clicking Sign Up you agree to Terms, Data Policy and Cookie Policy.{" "}
           </p>
         <button className="btn-form">Sign Up</button>
         <p className="mt-2.5 text-sm">
           Already have an account?{" "}
           <Link to="/sign-in" className="text-primary-blue">
             Sign in
           </Link>
         </p>
       </form>
     </div>
   );
 };
 
 export default SignupForm;