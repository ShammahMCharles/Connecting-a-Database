//DEPENENCIES
const express = require("express")
const router = express.router()


// landing route
router.get("/",(req,res)=>{
    res.send("this is the new landing page")
})

module.exports = router
