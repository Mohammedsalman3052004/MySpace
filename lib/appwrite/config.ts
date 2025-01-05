export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_URL!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION_ID!,
  buckerCollectionId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_COLLECTION_ID!,
  secretKey: process.env.APPWRITE_API_KEY!,
};
