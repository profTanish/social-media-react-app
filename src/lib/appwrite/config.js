import { Client, Account, Databases, Storage, Avatars } from "appwrite";
 
 export const appwriteConfig = {
   url: import.meta.env.VITE_APPWRITE_URL,
   projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
   databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
   storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
   storageFilesId: import.meta.env.VITE_APPWRITE_STORAGE_FILES_ID,
   userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
   postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
   savedCollectionId: import.meta.env.VITE_APPWRITE_SAVED_COLLECTION_ID,
 };
 
 export const client = new Client();
 
 client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);
 
 export const account = new Account(client);
 export const databases = new Databases(client);
 export const storage = new Storage(client);
 export const avatars = new Avatars(client);