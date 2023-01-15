const mongoose = require("mongoose")

mongoose.connect("mongodb://user:2gyb06JiQg6488Zd@ac-jbsd9uh-shard-00-00.bso2hy1.mongodb.net:27017,ac-jbsd9uh-shard-00-01.bso2hy1.mongodb.net:27017,ac-jbsd9uh-shard-00-02.bso2hy1.mongodb.net:27017/?ssl=true&replicaSet=atlas-qg2pmx-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})