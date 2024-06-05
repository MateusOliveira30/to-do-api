import express from 'express'
import { Router } from 'express'
import Task from '../../Models/taskModel.js'
import { error } from 'console'

const router = express.Router()

router.put('/update-task/:id', async (req, res) => {
    try{
        const taskToUpdate = await Task.findByIdAndUpdate(req.params.id, req.body)
        if(!taskToUpdate){
            return res.status(400).send("Task not found")
        }
        res.status(200).send(taskToUpdate)
    }
    catch{
        res.status(400).send(error)
    }
})

export default router