// src/appwriteConfig.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('6678ff77002ce0574a48'); // Your project ID

const account = new Account(client);
const databases = new Databases(client);

export { account, databases };
