import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "./../index";
import store from "../../../redux/storeConfig/store";

describe("Home component", () => {
  it("sholud render home page heading component correctly", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const headingElement = screen.getByText(/Task List/i);
    expect(headingElement).toBeInTheDocument();
  });
  it("sholud render todo form correctly", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(
      /What do you need to do?/i
    );
    expect(inputElement).toBeInTheDocument();
  });
});
