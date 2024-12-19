import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const linkSchema = new Schema({
    linkName: {
        type: String,
        trim: true

    },
    root: {
        type: mongoose.Schema.Types.ObjectId,

        ref: 'Poster'
    },

}, { timestamps: true })



const Link = mongoose.model('Link', linkSchema);
export default Link



