import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const megaSchema = new Schema({

    site: {
        type: String,
    },
    email: {
        type: String,

        lowercase: true,

    },
   
    password: {
        type: String,


    },
 
 
    agent: {
        type: String,
    }
    

}, { timestamps: true })




const Mega = mongoose.model('Mega', megaSchema);

export default Mega



// 6558fca9d08567217d7b4cef