const mongoose = require("mongoose");

module.exports= () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.MONGO_URI, connectionParams);
        console.log('connected to database successfully');
    } catch (error) {
        console.log(error);
        console.log('could not connect database');
        
    }
};


// mongodb+srv://nodeAuth:nodeAuth@cluster0.shqkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority