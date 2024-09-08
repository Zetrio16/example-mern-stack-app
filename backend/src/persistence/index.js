const { MongoClient } = require('mongodb');

let client, db, collection;

async function init() {
  const host = process.env.MONGO_HOST || "localhost";
  const url = `mongodb://${host}:27017/`;
  
  client = new MongoClient(url);
  const dbName = 'todo';

  console.log(`Attempting to connect to mongo using host ${host}`);

  await client.connect();
  db = client.db(dbName);
  collection = db.collection('todo');

  console.log(`Connected successfully to mongo using host ${host}`);
}

async function teardown() {
  await client.close();
}

async function getItems() {
  return collection.find({}).toArray();
}

async function getItem(id) {
  return collection.findOne({ _id: id });
}

async function storeItem(item) {
  const result = await collection.insertOne({ ...item, _id: item.id });
  return { ...item };
}

async function updateItem(id, item) {
  const update = {
    $set: {
      name: item.name,
      completed: item.completed
    }
  };

  await collection.updateOne({ _id: id }, update);
} 

async function removeItem(id) {
  await collection.deleteOne({ _id: id });
}

module.exports = {
  init,
  teardown,
  getItems,
  getItem,
  storeItem,
  updateItem,
  removeItem,
};