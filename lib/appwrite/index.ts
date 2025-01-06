import { Client, Databases } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";
import { Account } from "node-appwrite";

export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) throw new Error("No session found");
  client.setSession(session.value);

  const account = new Account(client);
  const databases = new Databases(client);

  return { account, databases };
};

export const createAdminClient = () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  const databases = new Databases(client);
  const account = new Account(client);

  return { databases, account };
};
