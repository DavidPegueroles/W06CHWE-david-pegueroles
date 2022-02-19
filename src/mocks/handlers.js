// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_ROBOTS, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "1",
          name: "Luis",
          url: "",
        },
        {
          characteristics: {
            velocity: 9,
            resistance: 7,
            creation_date: "",
          },
          _id: "2",
          name: "Marta",
          url: "",
        },
      ])
    )
  ),
];
