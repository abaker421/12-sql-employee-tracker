const apiRoutes= require('./routes/apiRoutes')
const express= require('express')
const app= express()
const PORT= 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use(apiRoutes)

app.listen(PORT, () => console.log(`API listening at ${PORT}`))