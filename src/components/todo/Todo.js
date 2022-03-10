import "./todo.css";
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
                  <p className="tasks">{ele.task}  <MdOutlineDone className='done'/></p> 
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
