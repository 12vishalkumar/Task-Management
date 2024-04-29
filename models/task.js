//******************************** Importing required libararies *****************************
import mongoose from 'mongoose';

//******************************** Required Schema *******************************************
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    creationDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' }
});

//********************************** Use export default for the model *************************
export default mongoose.model('Task', taskSchema);