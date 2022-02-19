import RobotDisplay from "../components/RobotDisplay/RobotDisplay";
import { useEffect } from "react";
import { getRobotsThunk } from "../redux/thunks/robotsThunks";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const robots = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(getRobotsThunk);
  }, [dispatch]);

  return (
    <>
      <h2>Robots List</h2>
      <ul>
        {robots.map((robot) => (
          <RobotDisplay key={robot._id} robot={robot} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
