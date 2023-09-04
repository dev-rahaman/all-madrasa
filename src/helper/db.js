const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    const { connect } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "madrasaInformation",
    });
    console.log(connect);
    console.log("mongoDB is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongoDB;
