// import mongoose from "mongoose";

// const connectDb =
//   (handler: any) => async (req: any, res: any) => {
//     if (mongoose.connections[0].readyState) {
//       return handler(req, res);
//     }
//     await mongoose.connect("mongodb://localhost:27017");
//     return handler(req, res);
//   };

// export default connectDb;
// import mongoose from "mongoose";

// const connectDb = () => {
//   if (mongoose.connections[0].readyState) {
//     return;
//   }

//   mongoose
//     .connect("mongodb://localhost:27017")
//     .then(() => {
//       console.log("connected to mongodb");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export default connectDb;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(
        process.env.MONGO_URI || "mongodb://localhost:27017"
      );
      console.log(process.env.MONGODB_URI);
    }
  } catch (error) {
    console.log(error, "dberror", process.env.MONGO_URI);
  }
};

export default connectDB;
