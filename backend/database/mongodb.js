const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const URL = "mongodb://localhost:27017";
// Database Name
const dbName = "MusiQDB";

async function createDB(URL, dbName) {
  const client = await MongoClient.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    console.log("Connected successfully to server...");
    const db = client.db(dbName);
    console.log(`Database ${dbName} created...`);

    var collectionList = ["user", "song", "favourite"];
    console.log("Creating Collections...");
    collectionList.forEach(function(collectionName) {
      db.createCollection(collectionName, function(err, res) {
        if (err) throw err;
        console.log(`Creating ${collectionName}`);
        client.close();
      });
    });
  } catch (err) {
    console.log(err);
  } finally {
    if (!client) client.close();
  }
}

function insertUser(userObj) {
  (async () => {
    const client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    let db = client.db(dbName);
    try {
      const res = await db.collection("user").insertOne(userObj);
      console.log(`Inserted:  ${JSON.stringify(res)}`);
      client.close();
    } finally {
      if (!client) client.close();
    }
  })().catch(err => console.error(err));
}

function findUser(userObj) {
  (async () => {
    const client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    let db = client.db(dbName);
    try {
      const res = await db.collection("user").findOne(userObj);
      console.log(`Found:  ${JSON.stringify(res)}`);
      client.close();
    } finally {
      if (!client) client.close();
    }
  })().catch(err => console.error(err));
}

createDB(URL, dbName);
var myobj = { name: "Feroz Alizada", password: "feroz123" };
insertUser(myobj);

findUser(myobj);
