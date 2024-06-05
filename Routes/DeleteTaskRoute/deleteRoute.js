import express from 'express'
import { Router } from 'express'
import Task from '../../Models/taskModel.js'
import { error } from 'console'

const router = express.Router()

router.delete('/delete-task/:id', async (req, res) => {
    try{
        const taskToDelete = await Task.findByIdAndDelete(req.params.id)
        if(!taskToDelete){
            return res.status(400).send("Task not found")
        }
        res.status(200).send(taskToDelete)
    }
    catch{
        res.status(400).send(error)
    }
})

export default router