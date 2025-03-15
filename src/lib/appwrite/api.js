import { ID } from "appwrite";
 import { account, appwriteConfig, avatars, databases } from "./config";
 
 export async function createUserAccount(user) {
   try {
     const newAccount = await account.create(
       ID.unique(),
       user.email,
       user.password,
       user.name
     );
 
     if (!newAccount) throw Error;
 
     const avatarUrl = avatars.getInitials(user.name);
 
     const newUser = await saveUserToDatabase({
       accountId: newAccount.$id,
       name: newAccount.name,
       email: newAccount.email,
       username: newAccount.username,
       imageUrl: avatarUrl,
     });
 
     return newUser;
   } catch (error) {
     console.log(error);
     return error;
   }
 }
 
 export async function saveUserToDatabase(user) {
   try {
     const newUser = await databases.createDocument(
       appwriteConfig.databaseId,
       appwriteConfig.userCollectionId,
       ID.unique,
       user
     );
 
     return newUser;
   } catch (error) {
     console.log(error);
   }
 }