const express = require('express')
// const cors = require("cors")
const fileUpload = require("express-fileupload")
require('dotenv').config()
const connection = require("./utils/dbConnection.js")
const logger = require("./utils/logger.js")

// Routes Import
const userRoutes = require('./routes/userRoutes.js')
const storeRoutes = require("./routes/storeRoutes.js")
const bookRoutes = require("./routes/bookRoutes.js")
const reviewRoutes = require("./routes/reviewRoutes.js")

const app = express()
const port = process.env.PORT || 8080
if(process.env.DEBUG == "true"){
    app.use(logger)
}
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// Serving Multer saved image
app.use(express.static("./uploads"))
app.use(fileUpload({useTempFiles : true}))


app.use("/user",userRoutes)
app.use('/store',storeRoutes)
app.use('/book', bookRoutes)
app.use('/review', reviewRoutes)

connection().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening at port http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})