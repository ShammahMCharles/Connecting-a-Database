


// DEPENDENCIES
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const { MongoClient } = require("mongodb");

// MIDDLEWARE
const client = new MongoClient(uri);

// DATABASE
// MongoDB Connection
async function mongoDbConnection() {
    try{
        await client.connect();
        console.log("Database Connection Has Been Made!")
        const db = client.db("test")
        console.log(`Connected to the ${db.databaseName} database`)
    } catch(error){
        console.error("Mongodb Connection Error: ", error)
    }
}
mongoDbConnection();

const books = [
    {title: "Ultimate Star Wars Guide",
    author: "George Lucas",
    completed: true,
    },
    {title: "The Alchemist",
    author: "Paulo Coelho",
    completed: true,
    },
    {title: "Open Water",
    author: "Caleb Azumah Nelson",
    completed: false,
    },
    {title: "The Art of War",
    author: "Sun Tzu",
    completed: false,
    },
    {title: "The Circle of Fire",
    author: "Don Miguel Ruiz & Janet Mills",
    completed: false,
    },
]

// ROUTES
// I.N.D.U.C.E.S.

// Index - List
app.get("/books/", (req, res)=>{
    res.send(books)
})

// N
// D
// U
// C
// E

// Show - One Individual Book
app.get("/books/:indexOfBooksArray", (req, res)=>{
    res.send(books[req.params.indexOfBooksArray])
})

// PORT
app.listen(PORT, ()=>{
    console.log(`Sever is running on port: http://localhost:${PORT}`)
})