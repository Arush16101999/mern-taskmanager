import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import TaskManagement from "./containers/TaskManagement";
import AddTask from "./containers/AddTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toaster position="bottom-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={TaskManagement} />
            <Route path="/addTask" Component={AddTask} />
            <Route path="/updateTask/:id" Component={AddTask} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
