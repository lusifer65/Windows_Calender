import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Card from "./Card"; // Adjust the path as necessary
import { DisplayType } from "../../redux/action";

const mockStore = configureStore([]);

describe("Card Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      isOpen: true,
      pageType: "date",
      month: 5, // June (0-indexed)
      year: 2025,
    });

    store.dispatch = jest.fn(); // To spy on dispatched actions
  });

  it("should render the card and allow month navigation", () => {
    render(
      <Provider store={store}>
        <Card />
      </Provider>
    );

    // Check if current month/year is rendered
    expect(screen.getByText(/June, 2025/i)).toBeInTheDocument();

    // Simulate previous month button click
    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(store.dispatch).toHaveBeenCalled();

    // Simulate "month" view toggle
    fireEvent.click(screen.getByText(/June, 2025/i));
    expect(store.dispatch).toHaveBeenCalledWith(DisplayType("month"));
  });
});
