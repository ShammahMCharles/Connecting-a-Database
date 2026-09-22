const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const uri = process.env.MONGO_URI
const {MongoClient} = require("mongodb")

const client = new MongoClient(uri)

async function mongoDbConnection() {
    try{
    await client.connect()
     console.log("Database Connection Has Been Made!")
        const db = client.db("test")
        console.log(`Connected to the ${db.databaseName} database`)
    } catch(error){
        console.error("Mongodb Connection Error: ", error)
        res.status(500).json({ message: 'Failed to create post.' });
    }
}
mongoDbConnection()

app.get("/",(req, res)=>{
    res.send("Successfully connected to database")
})

app.listen(PORT, ()=>{
    console.log(`Sever is running on port:http://localhost:${PORT}`)
})