import { createContext, useContext, useEffect, useState } from "react";
 import { getCurrentUser } from "../lib/appwrite/api";
 import { useNavigate } from "react-router-dom";
 
 export const initialUser = {
   id: "",
   name: "",
   username: "",
   email: "",
   imageUrl: "",
   bio: "",
 };
 
 const initialState = {
   user: initialUser,
   isLoading: false,
   isAuthenticated: false,
   setUser: () => {},
   setIsAuthenticated: () => {},
   checkAuthUser: async () => false,
 };
 
 const AuthContext = createContext(initialState);
 
 const AuthProvider = ({ children }) => {
   const navigate = useNavigate();
 
   const [user, setUser] = useState(initialUser);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
 
   const checkAuthUser = async () => {
     setIsLoading(true);
     try {
       const curAccount = await getCurrentUser();
 
       if (curAccount) {
         setUser({
           id: curAccount.$id,
           name: curAccount.name,
           username: curAccount.username,
           email: curAccount.email,
           imageUrl: curAccount.imageUrl,
           bio: curAccount.bio,
         });
         setIsAuthenticated(true);
 
         return true;
       }
 
       return false;
     } catch (error) {
       console.log(error);
       return false;
     } finally {
       setIsLoading(false);
     }
   };
 
   useEffect(() => {
     const cookieFallback = localStorage.getItem("cookieFallback");
 
     if (
       cookieFallback === "[]" ||
       cookieFallback === null ||
       cookieFallback === undefined
     )
       navigate("/sign-in");
 
     checkAuthUser();
   }, []);
 
   return (
     <AuthContext.Provider
       value={{
         user,
         setUser,
         isAuthenticated,
         setIsAuthenticated,
         checkAuthUser,
         isLoading,
       }}
     ></AuthContext.Provider>
   );
 };
 
 export default AuthProvider;
 
 export const useUser = () => useContext(AuthContext);