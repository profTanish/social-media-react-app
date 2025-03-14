import { Link } from "react-router-dom";
 
 const SignupForm = () => {
   return (
     <div className="flex items-center justify-center">
       <form className="w-1/2">
         <div>
           <label htmlFor="name" className="block mb-2.5">
             Name
           </label>
           <input
             type="text"
             placeholder="Your name"
             id="name"
             className="input"
           />
         </div>
 
         <div className="mt-5">
           <label htmlFor="username" className="block mb-2.5">
             Email
           </label>
           <input
             type="text"
             placeholder="Your username"
             id="username"
             className="input"
           />
         </div>
 
         <div className="mt-5">
           <label htmlFor="email" className="block mb-2.5">
             Email
           </label>
           <input
             type="email"
             placeholder="Your email"
             id="email"
             className="input"
           />
         </div>
 
         <div className="mt-5">
           <label htmlFor="password" className="block mb-2.5">
             Password
           </label>
           <input
             type="password"
             placeholder="Your password"
             id="password"
             className="input"
             />
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