import express from 'express'
import { Router } from 'express'
import Task from '../../Models/taskModel.js'
import { error } from 'console'

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find()
        res.status(200).send(tasks)
    }
    catch{
        res.status(400).send({error: error.message})
    }

})

export default router