import express from 'express'
import { Router } from 'express'
import Task from '../../Models/taskModel.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const newTask = new Task(req.body)
    await newTask.save()
    if(newTask === ''){
        res.status(400).send("Add a task first")
        return
    }
    res.status(201).send(newTask)
})

export default router