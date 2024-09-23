const express = require("express")
const router = express.Router()
const Todo = require("../models/Todo")

//create a new todo
router.post("/todos",async(req,res)=>{
    const{text}=req.body;
    try{
        const newTodo = new Todo({
            text:text
        })
       const savedTodo= await newTodo.save()
       res.json(savedTodo)
    } catch(error){
        res.status(500).json({error:`Server Error`})
    }  
})

//get all todos

router.get("/todos",async(req,res)=>{
    try{
        const todos = await Todo.find()
        res.json(todos)
    } catch(error){
        res.status(500).json({error:"Server error"})
    }
})

//update a todo

router.put("/todos/:id",async(req,res)=>{
    const {text,completed}=req.body;
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,{text,completed},{new:true});
        res.json(updatedTodo)
    } catch(error){
        res.status(500).json({error:"Server Error"})
    }
})

//delete a todo


router.delete("/todos/:id",async(req,res)=>{
    try{
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTodo)
    }catch(error){
        res.status(500).json({error:"Server error"})
    }
})

module.exports = router;