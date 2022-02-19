import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import renderWithProviders from "./setupTests";

describe("Given App component", () => {
  describe("When it's rendered", () => {
    test("Then it should contain a heading with text 'Robots list'", () => {
      renderWithProviders(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", {
        name: /robots list/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
