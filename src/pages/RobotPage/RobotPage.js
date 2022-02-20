import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getARobotThunk } from "../../redux/thunks/robotsThunks";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3,
  h4,
  ul {
    margin-left: 5vw;
  }
`;

const Image = styled.img`
  align-self: center;
  width: 90%;

  margin-top: 10px;
  margin-bottom: 10px;

  box-shadow: 5px 10px 20px 3px rgba(0, 0, 0, 0.5);
`;

const RobotPage = () => {
  const id = useParams();

  const dispatch = useDispatch();

  const { robot, characteristics } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getARobotThunk(id.idRobot));
  }, [dispatch, id]);

  return (
    <Section>
      <h3>ROBOT</h3>
      <Image src={robot.url} alt={robot.name} />
      <h4>{robot.name}</h4>
      <ul>
        <li>Velocity: {characteristics.velocity}</li>
        <li>Resistance: {characteristics.resistance}</li>
        <li>Date of creation: {characteristics.creation_date}</li>
      </ul>
    </Section>
  );
};

export default RobotPage;
