// import express, cors, and mongoose
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TaskModel = require("./models/Task");

const app = express();

// allows to use json data in express
app.use(express.json());
app.use(cors());

// mongodb://localhost:27017/

mongoose.connect("mongodb://127.0.0.1:27017/task");

app.get("/getAllTasks", (req, res) => {
  TaskModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.post("/createTask", (req, res) => {
  TaskModel.create(req.body)
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.put("/updateTask/:id", (req, res) => {
  //   const id = req.params.id;
  //   TaskModel.findByIdAndUpdate(
  //     { _id: id },
  //     {
  //       title: req.body.title,
  //       description: req.body.description,
  //       status: req.body.status,
  //     }
  //   )
  //     .then((task) => res.json(task))
  //     .catch((err) => res.json(err));
  TaskModel.findByIdAndUpdate(req.params.id, req.body)
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.delete("/deleteTask/:id", (req, res) => {
  TaskModel.findByIdAndDelete(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.get("/getTaskById/:id", (req, res) => {
  TaskModel.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.get("/getTaskByStatus/:status", (req, res) => {
  TaskModel.find({ status: req.params.status })
    .then((task) => res.json(task))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.json("hello this is Arushan from backend");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
