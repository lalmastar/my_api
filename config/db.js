import mongoose from 'mongoose';

const connectDB = async () => {
  console.log("DB Connected Successfully")
    mongoose.connect("mongodb+srv://lalmastar12:Alex321@getdoctors.rmq6wj7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useCreateIndex: true
})
};

export default connectDB;
