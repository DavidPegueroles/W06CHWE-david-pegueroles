import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import RobotPage from "./RobotPage";

describe("Given a RobotDisplay component", () => {
  describe("When it receives a robot", () => {
    test("Then it should display a heading with the text robot", () => {
      renderWithProviders(<RobotPage />);

      const title = screen.getByRole("heading", { name: /robot/i });

      expect(title).toBeInTheDocument();
    });
  });
});
