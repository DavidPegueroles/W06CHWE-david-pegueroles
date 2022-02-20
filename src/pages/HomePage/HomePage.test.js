import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../setupTests";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a heading with the text robots list", () => {
      renderWithProviders(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: /robots list/i });

      expect(title).toBeInTheDocument();
    });

    test("Then it should display a heading with the text robot", () => {
      renderWithProviders(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: /robot/i });

      expect(title).toBeInTheDocument();
    });
  });
});
