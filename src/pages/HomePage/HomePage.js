import RobotDisplay from "../../components/RobotDisplay/RobotDisplay";
import { useEffect } from "react";
import { getRobotsThunk } from "../../redux/thunks/robotsThunks";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const robots = useSelector((state) => state.robots);

  const robotDetails = (id) => {
    navigate(`/robots/${id}`);
  };

  useEffect(() => {
    dispatch(getRobotsThunk);
  }, [dispatch]);

  return (
    <>
      <H2>Robots List</H2>
      <UL>
        {robots.map((robot) => (
          <RobotDisplay
            key={robot._id}
            robot={robot}
            actionOnClick={() => {
              robotDetails(robot._id);
            }}
          />
        ))}
      </UL>
    </>
  );
};

export default HomePage;
