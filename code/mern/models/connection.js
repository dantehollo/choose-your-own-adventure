
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/db-al-yehn";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });

module.exports = mongoose
