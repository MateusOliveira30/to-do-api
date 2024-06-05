import express from 'express'
import connectDB from './ConnectionDataBase/connection.js'
import bodyParser from 'body-parser'
import getRoute from './Routes/SeeAllTasksRoute/getRoute.js'

const app = express()

connectDB()

const baseRoute = '/to-do-list/api'

app.use(bodyParser.json())
app.use(baseRoute + '/', getRoute)




const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});