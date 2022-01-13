import "./styles.css";
import Button from "../Button";
import editSvg from "../../assets/icons/icons8-edit.svg";
import deleteSvg from "../../assets/icons/icons8-delete.svg";
import checkSvg from "../../assets/icons/icons8-tick-box.svg";

const TodoItem = ({ todo, handleEdit, handleDelete, mark }) => {
  return (
    <div className="todo-item">
      <div className="title" onClick={() => mark(todo)}>
        {todo.completed ? <strike>{todo.name}</strike> : todo.name}
        {todo.completed && <img src={checkSvg} alt="check mark" />}
      </div>
      <div className="actions">
        <Button onClick={() => handleEdit(todo)}>
          <img src={editSvg} alt="edit" />
        </Button>
        <Button onClick={() => handleDelete(todo)}>
          <img src={deleteSvg} alt="delete" />
        </Button>
      </div>

      {/* <Button onClick={() => mark(todo)}>
        {todo.completed ? "Mark incomplete" : "Mark complete"}
      </Button> */}
    </div>
  );
};

export default TodoItem;
