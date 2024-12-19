import mongoose  from 'mongoose'
// const mongouri='mongodb://mikejson7856:Xo29r4BIdGff5nFQ@ac-2mrpor8-shard-00-00.yqadcrk.mongodb.net:27017,ac-2mrpor8-shard-00-01.yqadcrk.mongodb.net:27017,ac-2mrpor8-shard-00-02.yqadcrk.mongodb.net:27017/skipdatabase?ssl=true&replicaSet=atlas-tx134a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'


// const mongouri='mongodb://emonabdullah445:0n7e2PF15uM2WLKR@cluster0-shard-00-00.kqp6e.mongodb.net:27017,cluster0-shard-00-01.kqp6e.mongodb.net:27017,cluster0-shard-00-02.kqp6e.mongodb.net:27017/mailhacks?ssl=true&replicaSet=atlas-4vensz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'


const mongouri='mongodb+srv://emonabdullah445:0n7e2PF15uM2WLKR@newback.f2mbp.mongodb.net/newdatabase?retryWrites=true&w=majority&appName=newback'

const connectDB = () => {

    mongoose.connect(mongouri
    ).then((result) => {
        console.log('mongo connected');
    })
        .catch((err) => { console.log(err) });
}

export default connectDB




