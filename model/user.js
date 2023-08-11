const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    favourites: {
            type: Map,
            of: String,
            default: {}
    }
        
    }
);
  

const users = mongoose.model('Users', userSchema);
module.exports = users;