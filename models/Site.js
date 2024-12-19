import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const siteSchema = new Schema({

    name: {
        type: String,
    },
}, { timestamps: true })



const Site = mongoose.model('Site', siteSchema);
export default Site
