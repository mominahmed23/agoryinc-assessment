import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/storeConfig/store";
import Home from "./../../../views/Home/index";

describe("todo list", () => {
  it("adding a todo", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /What do you need to do?/i
    );
    const buttonElement = screen.getByText("Add");
    fireEvent.change(inputElement, { target: { value: "go to gym" } });
    fireEvent.click(buttonElement);

    const divElements = screen.getByText(/go to gym/i);
    expect(divElements).toBeInTheDocument();
  });
});
