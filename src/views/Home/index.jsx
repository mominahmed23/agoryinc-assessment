import "./styles.css";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../../components/AddTodoForm";
import TodoItem from "../../components/TodoItem";
import logo from "../../assets/images/white_logo.webp";
import {
  addTodoAction,
  deleteTodoAction,
  markDoneUndone,
} from "../../redux/actions/todoList";
import { editTodoAction } from "./../../redux/actions/todoList/index";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [todoToBeEditedId, setTodoToBeEditedId] = useState(null);

  const { todoList, filterStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(addTodoAction(inputText));
    setInputText("");
  };

  const onUpdate = () => {
    dispatch(editTodoAction(todoToBeEditedId, inputText));
    setInputText("");
    setTodoToBeEditedId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToBeEditedId) {
      onUpdate();
    } else {
      onAdd();
    }
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodoAction(todo.id));
  };

  const handleEdit = (todo) => {
    setInputText(todo.name);
    setTodoToBeEditedId(todo.id);
  };

  const mark = (todo) => {
    dispatch(markDoneUndone(todo.id));
  };

  const filteredList = useMemo(() => {
    return todoList.filter((x) => {
      if (filterStatus === 1) {
        return true;
      }
      if (filterStatus === 2) {
        return x.completed;
      }
      if (filterStatus === 3) {
        return !x.completed;
      } else {
        return false;
      }
    });
  }, [filterStatus, todoList]);

  return (
    <>
      <div className="main">
        <div className="logo-container">
          <img src={logo} alt="logo" width={130} />
        </div>

        <h2 className="heading">Task List</h2>
        <AddTodoForm
          handleSubmit={handleSubmit}
          inputText={inputText}
          setInputText={setInputText}
          todoToBeEditedId={todoToBeEditedId}
          filterStatus={filterStatus}
        />
        <div>
          {filteredList.map((item) => (
            <TodoItem
              key={item.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              mark={mark}
              todo={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
