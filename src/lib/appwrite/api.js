import { ID, Query } from "appwrite";
import { account, appwriteConfig, avatars, databases, storage } from "./config";
 
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

export async function createPost(post) {
  try {
    const uploadedImageFile = await uploadFile(post.image[0]);

    if (!uploadedImageFile) throw Error;

    const imagePath = await getFilePreview(uploadedImageFile.$id);

    if (!imagePath) {
      await deleteFile(uploadedImageFile.$id);
      throw Error;
    }

    const tags = post.tags?.split(",") || [];

    const newPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postCollectionId,
      ID.unique(),
      {
        creator: post.userId,
        caption: post.caption,
        imageUrl: imagePath,
        imageId: uploadedImageFile.$id,
        location: post.location,
        tags: tags,
      }
    );

    if (!newPost) {
      await deleteFile(uploadedImageFile.$id);
      throw Error;
    }

    return newPost;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(file) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );

    return uploadedFile;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilePreview(fileId) {
  try {
    const filePath = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      "top"
    );

    return filePath;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteFile(fileId) {
  try {
    await storage.deleteFile(appwriteConfig.storageId, fileId);

    return { status: "ok" };
  } catch (error) {
    console.log(error);
  }
}