const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 40,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avataar: {
        type: Buffer
    }

})


userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})


userSchema.methods.createjwttoken = async function () {

    const user = this
    const token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email,
        avtaar: user.avtaar
    }, process.env.SECRET_KEY, {
        expiresIn: '14d'
    })
    await user.save()
    return token
}


const User = mongoose.model('User', userSchema)
module.exports = User