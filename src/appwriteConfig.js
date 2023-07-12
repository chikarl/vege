import { Client, Account } from 'appwrite'

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '64a3dec104227aa71a0e'

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID)

export const account = new Account(client)

export default client
