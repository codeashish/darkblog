const express=require('express')
const router=express.Router();


const Post=require('./../models/Post')
const User=require('./../models/User')
const Profile=require('./../models/Profile')


router.get('/',(req,res)=>{
    res.send('Hiii')
})
module.exports=router