import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test("Render initial text", () => {
    // Arrange
    render(<Greeting />);
    // Act
    //nothing here
    // Assert
    const helloWorld = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(helloWorld).toBeInTheDocument();
  });
  test("Render changed text", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const changedText = screen.getByText("Changed");
    expect(changedText).toBeInTheDocument;
  });

  test("Render text not display text", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const greetingText = screen.queryByText("It's good to see you!");
    expect(greetingText).toBeNull();
  });
});
