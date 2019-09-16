const mongoose = require('mongoose');

const URL = {
    mongoAtlas: "mongodb+srv://servi:servi123@cluster0-671id.mongodb.net/test?retryWrites=true&w=majority"
}

mongoose.connect(URL.mongoAtlas, {
    useNewUrlParser: true
})

    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));