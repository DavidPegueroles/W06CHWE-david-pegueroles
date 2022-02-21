import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";
import RobotPage from "./RobotPage";

describe("Given a RobotDisplay component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with the text robot", () => {
      renderWithProviders(
        <BrowserRouter>
          <RobotPage />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: /robot/i });

      expect(title).toBeInTheDocument();
    });

    test("Thne it should have a button with text 'Back' to navigate to /robots", () => {
      renderWithProviders(
        <BrowserRouter>
          <RobotPage />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: /back/i });

      expect(button).toBeInTheDocument();
    });
  });
});
