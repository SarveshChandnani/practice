const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : String,
    password :String,
    confirmPassword: String,
    companyname : String,
    companyspocname:String,
    companyspocemail : String,
    companyspocphone : Number,
})

userSchema.pre('save' , async function(next){
    console.log("hiiiiiiiiiiiii");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next();
});



const User = mongoose.model('users' ,userSchema);
module.exports = User;