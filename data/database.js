import { MongoClient } from 'mongodb';

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;
//mongodb+srv://sanjeevkumartiwari:<db_password>@cluster0.ws6hcna.mongodb.net/?appName=Cluster0
//dhI4DZLNgFGaOuxL
const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?appName=Cluster0&retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
