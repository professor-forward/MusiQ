const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const URL = "mongodb://localhost:27017";
// Database Name
const dbName = "MusiQDB";

// Function to initialize and create the database.
async function createDB(URL, dbName) {
  const client = await MongoClient.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(err => {
    console.log(err);
  });

  try {
    console.log("Successfully Connect...");
    const db = client.db(dbName);
    console.log(`Creating database: ${dbName} ...`);

    var collectionList = ["user", "song", "favourite"];
    console.log("Creating Collections...");
    db.createCollection("user", function(err, res) {
      if (err) console.log(err);
      if (client.isConnected()) client.close();
    });
    console.log(`Database running at: ${URL}`);
  } catch (exception) {
    console.log(`Exception: ${exception}`);
  }
}

// Inserts a user in the database collection
async function insertUser(userObj) {
  (async () => {
    const client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    let db = client.db(dbName);
    try {
      const res = await db.collection("user").insertOne(userObj);
      console.log(`Inserted:  ${JSON.stringify(res["ops"])}`);
      client.close();
    } catch (err) {
      console.log(err);
    } finally {
      if (!client) client.close();
    }
  })().catch(err => console.error(err));
}

// Given a user obj, finds and retrieves the user matching the query
async function findUser(userObj) {
  console.log("finding User", userObj);
  (async () => {
    const client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = client.db(dbName);
    try {
      const res = await db.collection("user").findOne(userObj);
      console.log(`Found:  ${JSON.stringify(res)}`);
      client.close();
    } catch (err) {
      console.log(err);
    } finally {
      if (!client) client.close();
    }
  })().catch(err => console.error(err));
}

// Creates the database when the file is loaded
try {
  createDB(URL, dbName);
} catch (err) {
  console.log("damn");
}

// Exports modules and functions to be used by the api...
module.exports = { insertUser, findUser, createDB };
