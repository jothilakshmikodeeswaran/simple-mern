const mongoose = require('mongoose');

mongoose.connect(Process.env.MONGO_URL);

module.exports = mongoose;
