const express = require("express")

const user = require("../models/User")

const router = express.Router()

router.get('/',async (req,res)=>{
    const usersData = await user.find()
    res.json(usersData)
})

router.get('/check-user/:id',async (req, res)=>{
    const uid = req.params.id
    try{
        console.log("Check user called")
        const userExistOrNot = await user.find({ "uid" : uid })
        console.log("Check user after called")
        console.log(userExistOrNot)
        if(userExistOrNot.length > 0){
            res.json({ message : "User already Existed" , exist : true})
        }else{
            res.json({ message : "User not Existed" , exist :false })
        }
    }catch(err){
        res.json({ message : err.message })
    }
})

router.post('/create-user',(req,res)=>{
    const userObject = req.body.userObject
    try{
        const newUser = new user(userObject)
        newUser.save()
        res.json(newUser)
    }catch(err){
        res.json({message : err.message })
    }
})

module.exports = router