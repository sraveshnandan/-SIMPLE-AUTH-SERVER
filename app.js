const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const port = 3000;
const app = express();
app.use(express.json());

let users = [];

app.post('/users/', async(req, res)=>{
    try {
        const salt =  await bcrypt.genSalt()
        const hassedPassword = await bcrypt.hash(req.body.password, salt);
        const user= {
            name:req.body.name,
            password:hassedPassword
        }
        if (!user) {
            res.status(300).json({
                success:false,
            })
            
        }
        users.push(user);
        res.status(201).json({
            message:'User created successfully',
            users
        })
        
    } catch (error) {
        res.status(404).json({
            success:false,
            error:"Something went wrong"
        })
    }
    
})

app.get('/users',(req, res)=>{
    try {
        res.status(200).json({
            success:true,
            data:users
        })
    } catch (error) {
        res.status(405).json({
            success:false,
            error:"No Users found!"
        })
        
    }
})

app.post('/users/login', async(req, res)=>{
    try {
        const {username, password} = req.body;
       const user_data = users.find(user => user.name= req.body.name);
       const data = await bcrypt.compare(req.body.password, user_data.password);
       if (!data) {
        res.send(200).json({
            success:false,
            message:'Invalid credentials'
        })
        
       }else{
        res.status(200).json({
            success:true,
            message:"Auth Succesfull."
        })
       }

        
    } catch (error) {
        res.status(404).json({
            success:false,
            error:"No Users found!"
        })
        
    }

})

app.listen(port, ()=>{
    console.log(`Server running on http://127.0.0.1:${port}`);
})

