import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  createUserAccount,
  getRecentPosts,
  loginAccount,
  logoutAccount,
} from "../appwrite/api";
 
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

export const useLogoutAccount = () => {
  return useMutation({
    mutationFn: logoutAccount,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "getRecentPosts" });
    },
  });
};

export const useGetRecentPosts = () => {
  return useQueryClient({
    queryKey: "getRecentPosts",
    queryFn: getRecentPosts,
  });
};