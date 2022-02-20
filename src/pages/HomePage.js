import RobotDisplay from "../components/RobotDisplay/RobotDisplay";
import { useEffect } from "react";
import { getRobotsThunk } from "../redux/thunks/robotsThunks";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const H2 = styled.h2`
  margin-left: 30px;
`;

const UL = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const dispatch = useDispatch();

  const robots = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(getRobotsThunk);
  }, [dispatch]);

  return (
    <>
      <H2>Robots List</H2>
      <UL>
        {robots.map((robot) => (
          <RobotDisplay key={robot._id} robot={robot} />
        ))}
      </UL>
    </>
  );
};

export default HomePage;
