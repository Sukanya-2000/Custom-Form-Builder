import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb+srv://<bhattacharyyasukanya5>:<kSgkVn5$jF7Mc5E>@cluster0.mongodb.net/<database>
    ', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
