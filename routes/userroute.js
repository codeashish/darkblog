const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const validateRegisterInput = require('./../validations/register')
const validateLoginInput = require('./../validations/login')
const User = require('./../models/User')






router.post('/register', async (req, res) => {
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body)

    if (!isValid) {
        
        return res.status(400).send(errors)
    }
    const usernameexist = await User.findOne({
        username: req.body.username
    })
    console.log(usernameexist==true)
    if (usernameexist) {
        errors.username = 'Username already taken'
        return res.status(400).send(errors)
    }
    const emailexist = await User.findOne({
        email: req.body.email
    })
    if (emailexist) {
        errors.email = 'Email already exist try Login'
        return res.status(400).send(errors)
    }

    try {

        const user = new User(req.body)
        const token = await user.createjwttoken();
        await user.save()
        res.send({
            user,
            token
        })
    } catch (e) {
        res.status(500).send({
            error: e
        })
    }

})



router.post('/login', async (req, res) => {
    const {
        errors,
        isValid
    } = validateLoginInput(req.body)
    if (!isValid) {
        return res.send(errors)
    }


    const user = await User.findOne({
        username: req.body.username
    })

    if (!user) {
        errors.username = 'User not Found'
        return res.send(errors)
    }
    const isMatched = await bcrypt.compare(req.body.password, user.password)
    console.log(isMatched)
    if (!isMatched) {
        errors.password = 'Password not matched'
        return res.send(errors)
    }
    const token = await user.createjwttoken()

    res.send({
        user,
        token
    })

})

module.exports = router