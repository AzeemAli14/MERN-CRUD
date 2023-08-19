import mongoose from 'mongoose';
const connectDB = async() => {
    const url = `mongodb+srv://azeemzaidi86:asdf1234@mern-crud.ngbcrbi.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
        // mongoose.connection.on('connected', () => {
        //     console.log('MongoDB connected');
        // });
    }
    catch (error) {
        console.log(error);
    }
}
export default connectDB;