import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TaskTable from "../../components/Table";
import toast from "react-hot-toast";
import StatusSelect from "../../components/Select";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    try {
      const data = await axios.get("http://localhost:5001/getAllTasks");
      if (data) {
        console.log(data);
        setTasks(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/deleteTask/${id}`);
      toast.success("Successfully Deleted!");
      getAllTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredTasks = tasks.filter((track) => {
    return track.status.toLowerCase().includes(filterStatus.toLowerCase());
  });

  const handleChange = (event) => {
    setFilterStatus(event.target.value);
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/addTask">
              <Button variant="outline-light" size="lg">
                Add Task
              </Button>{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            {/* <Form.Select
              name="status"
              size="lg"
              required
              onChange={handleChange}
              value={filterStatus}
            >
              <option value="">All Status </option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </Form.Select> */}

            <StatusSelect
              name="status"
              size="lg"
              required
              handleChange={handleChange}
              value={filterStatus}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <br />
        <Row>
          <Col>
            <h3>Task Management System</h3>
          </Col>
        </Row>
        <br />
        <Row>
          <TaskTable
            filteredTasks={filteredTasks}
            handleDeleteTask={handleDeleteTask}
          />
        </Row>
      </Container>
    </div>
  );
};

export default TaskManagement;
