import { Client, Databases, Storage, Account } from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";

export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  // const session = (await cookies()).get("appwrite-session");
  // if (!session || !session.value) throw new Error("No session found");
  // client.setSession(session.value);

  // const account = new Account(client);
  // const databases = new Databases(client);

  // return { account, databases };

  async function initializeAppwriteClient() {
    // Ensure the cookies function exists and works as expected
    const cookiesData = await cookies();
    const session = cookiesData.get("appwrite-session");
  
    if (!session || !session.value) {
      throw new Error("No session found");
    }
  
    // Validate session value
    if (typeof session.value !== "string" || session.value.trim() === "") {
      throw new Error("Invalid session value");
    }
  
    // Initialize the Appwrite client
    const client = new Client();
    client
      .setEndpoint("https://your-appwrite-endpoint.com") // Set your Appwrite endpoint
      .setProject("your-project-id") // Set your Appwrite project ID
      .setSession(session.value); // Set the session
  
    // Create instances of Account and Databases
    const account = new Account(client);
    const databases = new Databases(client);
  
    return { account, databases };
  }
  

};

export const createAdminClient = () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  const databases = new Databases(client);
  const storage = new Storage(client);
  const account = new Account(client);

  return { databases, storage, account };
};
