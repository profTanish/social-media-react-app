import { ID, Query } from "appwrite";
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
       username: user.username,
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
       ID.unique(),
       user
     );
 
     return newUser;
   } catch (error) {
     console.log(error);
   }
 }
 
 export async function loginAccount(user) {
  try {
    const session = await account.createEmailSession(user.email, user.password);

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function logoutAccount() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccount() {
  try {
    const curAccount = await account.get();

    return curAccount;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const curAccount = await getAccount();  
    if (!curAccount) throw Error;

    const curUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", curAccount.$id)]
    );

    if (!curUser) throw Error;

    return curUser.documents.at(0);
  } catch (error) {
    console.log(error);
  }
}