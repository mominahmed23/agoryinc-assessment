import "./styles.scss";
import { useDispatch } from "react-redux";
import { FILTER_STATUS_MAPPING } from "../../constants";
import { changeFilterAction } from "../../redux/actions/filterStatus";
import Button from "../Button";
import Input from "../Input";

const AddTodoForm = ({
  handleSubmit,
  inputText,
  todoToBeEditedId,
  filterStatus,
  setInputText,
}) => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(changeFilterAction(Number(e.target.value)));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <Input
          placeholder="What do you need to do?"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="actions">
          <Button type="submit" variant="large" disabled={!inputText.length}>
            {todoToBeEditedId ? "Update" : "Add"}
          </Button>
        </div>
      </div>
      <div className="select-container">
        <Input type="select" value={filterStatus} onChange={handleFilter}>
          {Object.keys(FILTER_STATUS_MAPPING).map((item) => (
            <option key={item} value={Number(item)}>
              {FILTER_STATUS_MAPPING[item]}
            </option>
          ))}
        </Input>
      </div>
    </form>
  );
};

export default AddTodoForm;
