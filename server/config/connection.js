const mongoose = require("mongoose");

// added new database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/book_search",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
