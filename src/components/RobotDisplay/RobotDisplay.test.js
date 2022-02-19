import { render, screen } from "@testing-library/react";
import RobotDisplay from "./RobotDisplay";

describe("Given a RobotDisplay component", () => {
  describe("When it receives a robot", () => {
    let robot;

    beforeAll(() => {
      robot = {
        characteristics: {
          velocity: 9,
          resistance: 7,
          creation_date: "",
        },
        _id: "1",
        name: "Luis",
        url: "",
      };
    });

    test("Then it should display a heading with the text robot", () => {
      render(<RobotDisplay robot={robot} />);

      const title = screen.getByRole("heading", { name: /robot/i });

      expect(title).toBeInTheDocument();
    });

    test("Then it should display a heading with the text 'Luis'", () => {
      render(<RobotDisplay robot={robot} />);

      const title = screen.getByRole("heading", { name: /luis/i });

      expect(title).toBeInTheDocument();
    });
  });
});
