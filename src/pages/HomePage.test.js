import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a RobotDisplay component", () => {
  describe("When it receives a robot", () => {
    test("Then it should display a heading with the text robot", () => {
      render(<HomePage />);

      const title = screen.getByRole("heading", { name: /robots list/i });

      expect(title).toBeInTheDocument();
    });
  });
});
