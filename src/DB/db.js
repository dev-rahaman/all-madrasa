const { USER_NAME, PASSWORD } = process.env;
export const MONGODB_URI =
  "mongodb+srv://" +
  USER_NAME +
  ":" +
  PASSWORD +
  "@cluster0.aooblrm.mongodb.net/allmadrasa?retryWrites=true&w=majority";
