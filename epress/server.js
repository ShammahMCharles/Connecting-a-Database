

// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT
const landingRouter = require("./routes/index.js")

// MIDDLEWARE runs inbetween requires and response req, res
// app.use(express.json)
app.use("./", landingRouter)

// ROUTES
app.get("/home", (req, res)=>{
    res.send("This is the home page!")
})

app.get("/about", (req, res)=>{
    res.send("This is the about page")
})

app.get("/contact", (req, res)=>{
    res.send("This is the contact page")
})

app.get("/", (req, res)=>{
    res.send("This is the about page")
})



// PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
})


// // 1. Import the express library
// const express = require('express');
 
// // 2. Create an instance of an Express application
// const app = express();
 
// // 3. Define the port the server will run on
// const port = 3000;
 
// // 4. Define a route handler for GET requests to the root URL ('/')
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
 
// // 5. Start the server and have it listen for incoming connections
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

//server.js