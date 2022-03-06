import "./todo.css";
import { Form, Button } from "react-bootstrap";
const Todo = () => {
  return (
    <>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add Task</Form.Label>
            <Form.Control type="text" placeholder="Enter task" />
            <Form.Text className="text-muted">
              Add task to be on schedule
            </Form.Text>
          </Form.Group>

          <Button variant="outline-secondary" size="lg">
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Todo;
