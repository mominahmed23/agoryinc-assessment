import { fireEvent, render, screen } from "@testing-library/react";
import AddTodoForm from "../index";
import { Provider } from "react-redux";
import store from "../../../redux/storeConfig/store";

const mockFn = jest.fn();

describe("AddTodoform", () => {
  it("search feild value render correclty", async () => {
    render(
      <Provider store={store}>
        <AddTodoForm
          handleSubmit={mockFn}
          inputText={"go to gym"}
          setInputText={mockFn}
          todoToBeEditedId={null}
          filterStatus={null}
        />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /What do you need to do?/i
    );
    fireEvent.change(inputElement, { target: { value: "go to gym" } });
    expect(inputElement.value).toBe("go to gym");
  });

  it("button should be disabled when input is empty", () => {
    render(
      <Provider store={store}>
        <AddTodoForm
          handleSubmit={mockFn}
          inputText={""}
          setInputText={mockFn}
          todoToBeEditedId={null}
          filterStatus={null}
        />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /What do you need to do?/i
    );
    const button = screen.getByText("Add");
    fireEvent.change(inputElement, { target: { value: "" } });
    expect(button).toBeDisabled();
  });

  it("button should be enabled when input is not empty", () => {
    render(
      <Provider store={store}>
        <AddTodoForm
          handleSubmit={mockFn}
          inputText={"go to gym"}
          setInputText={mockFn}
          todoToBeEditedId={null}
          filterStatus={null}
        />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /What do you need to do?/i
    );
    const button = screen.getByText("Add");
    fireEvent.change(inputElement, { target: { value: "go to gym" } });
    expect(button).not.toBeDisabled();
  });
});
