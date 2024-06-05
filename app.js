import express from 'express'
import connectDB from './ConnectionDataBase/connection.js'
import bodyParser from 'body-parser'
import getRoute from './Routes/SeeAllTasksRoute/getRoute.js'
import postRoute from './Routes/CreateTaskRoute/postRoute.js'
import deleteRoute from './Routes/DeleteTaskRoute/deleteRoute.js'

const app = express()

connectDB()

const baseRoute = '/to-do-list/api'

app.use(bodyParser.json())
app.use(baseRoute + '/', getRoute)
app.use(baseRoute + '/create-task', postRoute)
app.use(baseRoute, deleteRoute)




const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});