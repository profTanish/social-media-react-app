import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createPost,
  createUserAccount,
  deleteSavedPost,
  getCurrentUser,
  getRecentPosts,
  likePost,
  loginAccount,
  logoutAccount,
  savePost,
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
  return useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: getRecentPosts,
  });
};

export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, likesArray }) => likePost(postId, likesArray),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getPostById", data.$id] });
      queryClient.invalidateQueries({ queryKey: ["getRecentPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getCurrentUser"] });
    },
  });
};

export const useSavePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId, postId) => savePost(userId, postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRecentPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getCurrentUser"] });
    },
  });
};

export const useDeleteSavedPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (savedId) => deleteSavedPost(savedId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRecentPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getCurrentUser"] });
    },
  });
};

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["getCurrentUser"],
    queryFn: getCurrentUser,
  });
};