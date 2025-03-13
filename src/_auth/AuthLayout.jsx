import { Outlet, Navigate } from "react-router-dom";
 
 const AuthLayout = () => {
   const isAuthenticated = false;
 
   return (
     <>
       {isAuthenticated ? (
         <Navigate to="/" />
       ) : (
         <>
           <section className="grid grid-cols-2 p-5">
             <div className="relative">
               <div className="overflow-hidden rounded-md relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark-1 after:opacity-60">
                 <img
                   src="/public/imgs/auth-bg.jpg"
                   alt="background"
                   className="hidden xl:block w-full h-[95vh] object-cover bg-no-repeat"
                 />
               </div>
               <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                 <img src="/public/imgs/logo.svg" alt="logo" width="200px" />
                 <h1 className="text-3xl font-bold tracking-widest mt-5">
                   Welcome Back!
                 </h1>
                 <p className="opacity-70">Please enter your details.</p>
               </div>
             </div>
 
             <Outlet />
           </section>
         </>
       )}
     </>
   );
 };
 
 export default AuthLayout;