const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength: [3, "First name must be atleast 3 characters long"]
        },
        lastname:{
            type:String,
            minlength: [3, "Last name must be atleast 3 characters long"]
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength: [5, "Email must be atleast 5 characters long"]
    },
    password:{
        type:String,
        required:true,
        // Whenever I find user I dont want to send password of it to prevent this select : false
        select:false
    },
    // for live tracking so user can track live location of driver or captain.
    socketId:{
        type:String
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    return token;
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);  
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;1