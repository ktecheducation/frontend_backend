const express=require("express")
// import express from "express"
require('dotenv').config()


const app=express()
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/login",(req,res)=>{
    res.send("login page")
})
app.get("/signup",(req,res)=>{
    res.send("signup page")
})
app.get("/api/user",(req,res)=>{
    const user=[
        {
            userid:1,
            username:"karan",
            course:"webdev",
            stream:"javascript"
        },
        {
            userid:2,
            username:"hemant",
            course:"mca",
            stream:"ai & ml"
        },
        {
            userid:3,
            username:"ayush",
            course:"bca",
            stream:"general"
        },
        {
            userid:4,
            username:"manish",
            course:"mtch",
            stream:"crypto"
        }
    ]

    res.send(user)
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on the port no ${process.env.PORT}`)
})