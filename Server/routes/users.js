const express = require("express");
const router = express.Router();
const { USERS, TODOS } = require("../db/database");
const { SECRET, configLogin } = require("../config/config")
const jwt = require("jsonwebtoken");


router.post('/signup', async (req, res) => {
    const userdata = req.body;
    const user = await USERS.findOne({ username: userdata.username });
    if (user){
        res.status(404).json({message: "Username Already Exist"});
    }
    else{
        const token = jwt.sign({ userdata}, SECRET, { expiresIn: "1h" });
        const newUser = new USERS(userdata);
        newUser.save();
        res.json({ message: 'User created successfully', token: token });
    }
});

router.post('/login', configLogin, async (req, res) => {
    try {
        const { username } = req.headers;

        // Ensure that the collection name is correctly specified (e.g., "Users")
        const user = await USERS.findOne({ username: username });
        if (user) {
            res.json({ message: "User logged in successfully" });
        } else {
            res.status(404).json({ message: "User does not exist" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


router.get('/home',async(req,res) =>{
    try {
        const todos = await TODOS.find(); // Retrieve all todos from the database
        res.json({ todos }); // Respond with the list of todos
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

router.post("/todo", async (req, res) => {
    try {
      let todoitem = req.body;
  
      // Check if a todo with the same title and description already exists
      const existingTodo = await TODOS.findOne({
        title: todoitem.title,
        description: todoitem.description
      });
  
      if (existingTodo) {
        res.status(409).json({ message: "Todo already exists" });
      } else {
        const newTodo = new TODOS(todoitem);
        await newTodo.save();
        res.status(201).json({ message: "Todo created successfully", todoId: newTodo._id });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
router.put('/todo/:id', async(req,res)=>{
    let todo = await TODOS.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(todo){
        res.status(200).json({message:"Todo updated Successfully"});
    }
    else{
        res.status(404).json({message: "Todo not found!"})
    }
});

router.delete('/todo/:id',async (req, res) => {
    try {
      const todoId = req.params.id;
  
      // Use Mongoose's findByIdAndDelete to remove the todo by its ID
      const deletedTodo = await TODOS.findByIdAndDelete(todoId);
  
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo deleted successfully' });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router