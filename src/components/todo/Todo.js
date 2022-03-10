import "./todo.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, addTodos] = useState([]);
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
            onClick={() => {
              addTodos([
                {
                  task,
                },
              ]);
              setTask("");
            }}
          >
            Add
          </Button>
        </Form>
      </div>
      {!todos.length > 0 ? (
        <div className="display-section">No Data</div>
      ) : (
        <div className="display-section">
          <h1>
            {todos.map((ele) => {
              return <span className="tasks">{ele.task}</span>;
            })}
          </h1>
        </div>
      )}
    </>
  );
};

export default Todo;
