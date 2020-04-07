const MongoClient = require("mongodb").MongoClient;

// Connection URL
const URL = "mongodb://localhost:27017";
// Database Name
const dbName = "MusiQDB";

// Function to initialize and create the database.
async function createDB(URL, dbName) {
  const client = await MongoClient.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    console.log(err);
  });

  try {
    console.log("Successfully Connect...");
    const db = client.db(dbName);
    console.log(`Creating database: ${dbName} ...`);

    var collectionList = ["user", "song", "favourite"];
    console.log("Creating Collections...");
    // db.createCollection("user", function (err, res) {
    //   if (err) console.log(err);
    //   // if (client.isConnected()) client.close();
    // });

    // db.createCollection("song", function (err, res) {
    //   if (err) console.log(err);
    //   // if (client.isConnected()) client.close();
    // });

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
      useUnifiedTopology: true,
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
  })().catch((err) => console.error(err));
}

async function insertSong(songObj) {
  (async () => {
    const client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    let db = client.db(dbName);
    try {
      const res = await db.collection("song").insertMany(songObj);
      console.log(`Inserted:  ${JSON.stringify(res["ops"])}`);
      client.close();
    } catch (err) {
      console.log(err);
    } finally {
      if (!client) client.close();
    }
  })().catch((err) => console.error(err));
}

// Given a user obj, finds and retrieves the user matching the query
async function findUser(userObj) {
  console.log("finding User", userObj);
  (async () => {
    const client = await MongoClient.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
  })().catch((err) => console.error(err));
}

// Creates the database when the file is loaded
try {
  createDB(URL, dbName);
  console.log(`${dbName} creation complete`);
} catch (err) {
  console.log("damn");
}

// Seed and insert sample user and songs
user1 = { username: "admin", password: "admin" };
user2 = { username: "feroz", password: "feroz123" };
insertUser(user1);
insertUser(user2);

song1 = {
  artistName: "Will Carpenter",
  trackName: "Weird Singing Noise",
  albumCover:
    "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-1.jpeg",
  URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-1.mp3",
};

song2 = {
  artistName: "Erik Conta",
  trackName: "All Time Low",
  albumCover:
    "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-2.jpeg",
  URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-2.mp3",
};

song3 = {
  artistName: "Tiny Wayne",
  trackName: "I Can't Sing",
  albumCover:
    "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-3.jpeg",
  URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-3.mp3",
};

song4 = {
  artistName: "Big Daddy",
  trackName: "Tiny Son Noises",
  albumCover:
    "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-4.jpeg",
  URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-4.mp3",
};

song5 = {
  artistName: "Wanye Kest",
  trackName: "Confused Man",
  albumCover:
    "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-5.jpeg",
  URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-5.mp3",
};

song6 = {
  artistName: "Alabama Man",
  trackName: "Weird Country Noises",
  albumCover:
    "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/album-6.jpeg",
  URL: "https://s3.ca-central-1.amazonaws.com/audio.musiq.com/audio-6.mp3",
};

insertSong([song1, song2, song3, song4, song5, song6]);
console.log("objects added");

// Exports modules and functions to be used by the api...
module.exports = { insertUser, findUser, createDB };
