import styled from "styled-components";
import Button from "../Button/Button";

const LI = styled.li`
  background-color: #002f38;
  border: 15px solid #0088a3;
  border-radius: 20px;
  outline: 2px solid black;

  list-style: none;
  width: 85vw;
  height: 480px;
  margin: 20px;
  padding: 0;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 5px 10px 20px 3px rgba(0, 0, 0, 0.5);

  h3 {
    align-self: flex-start;
    margin: 0;
    padding: 0;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 80vw;

  box-shadow: 5px 10px 20px 3px rgba(0, 0, 0, 0.5);
`;

const RobotDisplay = ({
  robot: {
    url,
    name,
    characteristics: { velocity, resistance, creation_date },
  },
  actionOnClick,
}) => {
  return (
    <LI>
      <h3>ROBOT</h3>
      <Image src={url} alt={name} />
      <h4>{name}</h4>
      <ul>
        <li>Velocity: {velocity}</li>
        <li>Resistance: {resistance}</li>
        <li>Date of creation: {creation_date}</li>
      </ul>
      <Button actionOnClick={actionOnClick} text="Details" />
    </LI>
  );
};

export default RobotDisplay;
