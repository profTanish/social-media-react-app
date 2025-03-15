import { useMutation } from "@tanstack/react-query";
 import { createUserAccount, loginAccount } from "../appwrite/api";
 
 export const useCreateUserAccount = () => {
   return useMutation({
     mutationFn: (user) => createUserAccount(user),
   });
 };
 
 export const useLoginAccount = () => {
   return useMutation({
     mutationFn: (user) => loginAccount(user),
   });
 };