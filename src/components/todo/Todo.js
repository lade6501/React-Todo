import "./todo.scss";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, addTodos] = useState([]);
  const handleAddTodo = () => {
    const newTask = {
      id: 1 + Math.random(),
      task,
    };

    const todos = [...todo];
    todos.push(newTask);
    addTodos(todos);
    setTask("");
  };
  return (
    <>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              Add task to be on schedule
            </Form.Text>
          </Form.Group>

          <Button
            variant="outline-secondary"
            size="lg"
            onClick={() => handleAddTodo()}
          >
            Add
          </Button>
        </Form>
      </div>
      {!todo.length > 0 ? (
        <div className="display-section">No Data</div>
      ) : (
        <div className="display-section">
          <h1>
            {todo.map((ele) => {
              return (
                <>
                  <div className="flex-container">
                    <div className="tasknumber">
                      <input type="checkbox" id='task'/>
                      
                    </div>
                    <div className="userdetails">
                      {" "}
                      {/* <p className="tasks">{ele.task}</p>{" "} */}
                      <label for='task'>{ele.task}</label>
                    </div>
                    <div className="donebutton">
                      <MdOutlineDone className="done" />
                    </div>
                  </div>
                </>
              );
            })}
          </h1>
        </div>
      )}
    </>
  );
};

export default Todo;
