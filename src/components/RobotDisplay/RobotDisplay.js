import styled from "styled-components";

const Image = styled.img`
  width: 80vw;
`;

const RobotDisplay = ({
  robot: {
    url,
    name,
    characteristics: { velocity, resistance, creation_date },
  },
}) => {
  return (
    <li>
      <h3>ROBOT</h3>
      <Image src={url} alt={name} />
      <h4>{name}</h4>
      <ul>
        <li>Velocity: {velocity}</li>
        <li>Resistance: {resistance}</li>
        <li>Date of creation: {creation_date}</li>
      </ul>
    </li>
  );
};

export default RobotDisplay;
