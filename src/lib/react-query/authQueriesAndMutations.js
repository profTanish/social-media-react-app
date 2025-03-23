import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  EditProfile,
  createPost,
  createUserAccount,
  deletePost,
  deleteSavedPost,
  getCurrentUser,
  getPostById,
  getPosts,
  getPostsBySearch,
  getRecentPosts,
  getSavedPosts,
  getUserById,
  getUsers,
  likePost,
  loginAccount,
  logoutAccount,
  savePost,
  updatePost,
} from "../appwrite/api";
import toast from "react-hot-toast";
 
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
      queryClient.invalidateQueries({ queryKey: ["getRecentPosts"] });
       queryClient.invalidateQueries({
         queryKey: ["getPosts"],
       });
       queryClient.invalidateQueries({
         queryKey: ["getCurrentUser"],
       });
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
      queryClient.invalidateQueries({ queryKey: ["getRecentPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getPosts"] });
      queryClient.invalidateQueries({ queryKey: ["getCurrentUser"] });
    },
  });
};

export const useSavePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({userId, postId}) => savePost(userId, postId),
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

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post) => updatePost(post),
    onSuccess: () => {
      toast.success("Post successfully updated!");
      queryClient.invalidateQueries({
        queryKey: ["getRecentPosts"],
      });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, imageId }) => deletePost(postId, imageId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getRecentPosts"],
      });
    },
  });
};

export const useGetPosts = () => {
  return useInfiniteQuery({
    queryKey: ["getPosts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.documents.length === 0) return null;
      const lastId = lastPage.documents[lastPage.documents.length - 1].$id;

      return lastId;
    },
  });
};

export const useGetPostsBySearch = (query) => {
  return useQuery({
    queryKey: ["getSearchedPosts", query],
    queryFn: () => getPostsBySearch(query),
    enabled: !!query,
  });
};

export const useGetPostById = (postId) => {
  return useQuery({
    queryKey: ["getPostById", postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  });
};

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  });
};

export const useGetSavedPosts = () => {
  return useQuery({
    queryKey: ["getRecentPosts"],
    queryFn: getSavedPosts,
  });
};

export const useGetUserById = (userId) => {
  return useQuery({
    queryKey: ["getUserById", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });
};

export const useEditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user) => EditProfile(user),
    onSuccess: (data) => {
      toast.success("User profile successfully edited!");
      queryClient.invalidateQueries({
        queryKey: ["getCurrentUser"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getUserById", data?.$id],
      });
    },
    onError: () => {
      toast.error("Something went wrong...");
    },
  });
};