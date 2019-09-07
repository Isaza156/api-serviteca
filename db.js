const mongoose = require('mongoose');

const URL = {
    mongoAtlas: "mongodb+srv://jonathan:isaza156@cluster0-gjsoe.mongodb.net/test?retryWrites=true&w=majority"
}

mongoose.connect(URL.mongoAtlas, {
    useNewUrlParser: true
})

    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));
