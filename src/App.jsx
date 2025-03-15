import { BrowserRouter, Route, Routes } from "react-router-dom";
 
 import AuthLayout from "./_auth/AuthLayout";
 import SigninForm from "./_auth/forms/SigninForm";
 import SignupForm from "./_auth/forms/SignupForm";
 import RootLayout from "./_root/RootLayout";
 import { Home } from "./_root/pages";
 import { Toaster } from "react-hot-toast";
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 
 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       staleTime: 60 * 1000,
     },
   },
 });

 const App = () => {
   return (
     <main>
       <QueryClientProvider client={queryClient}>
         <BrowserRouter>
           <Routes>
             <Route element={<AuthLayout />}>
               <Route path="/sign-in" element={<SigninForm />} />
               <Route path="/sign-up" element={<SignupForm />} />
             </Route>
 
             <Route element={<RootLayout />}>
               <Route index element={<Home />} />
             </Route>
           </Routes>
         </BrowserRouter>
         <Toaster
           position="top-center"
           gutter={12}
           containerStyle={{ margin: "8px" }}
           toastOptions={{
             success: {
               duration: 3000,
             },
             error: {
               duration: 5000,
             },
             style: {
               fontSize: "16px",
               maxWidth: "500px",
               padding: "16px 24xp",
               backgroundColor: "#1E1E23",
               color: "#F9FAFD",
             },
           }}
         />

         <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     </main>
   );
 };

 export default App;