// //******************************** Importing required libararies **************************
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import taskRoutes from './routes/taskRoutes.js';
import connectDB from './config/mongoose.js'

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);  //middleware


const PORT = process.env.PORT || 3000;
connectDB()

 
//************************** Add this right before the app.listen call **********************
app.get('/', (req, res) => {
  try{
    res.send('Welcome to my App Please! use /api to access the endpoints.');
  }catch (e) {
    console.error(e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//***************************** Listen app **********************************
app.listen(PORT, function(err){
  if(err){
   console.log("Error in running the server:", err);
  }
  console.log("Server is running on port:", PORT);
});