const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const TaskModel = mongoose.model("task", TaskSchema);
module.exports = TaskModel;
