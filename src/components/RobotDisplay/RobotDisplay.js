import styled from "styled-components";
import Button from "../Button/Button";

const LI = styled.li`
  background-color: #002f38;
  border: 15px solid #0088a3;
  border-radius: 20px;
  outline: 2px solid black;

  list-style: none;
  width: 65vw;
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
    margin: 20px;
    padding: 0;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 25px;
    margin: 10px;
    padding: 0;
  }

  ul {
    padding: 0;
    margin-left: 50px;
    margin-right: 50px;
    li {
      margin: 0;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  width: 90%;

  margin-top: 10px;
  margin-bottom: 10px;

  box-shadow: 5px 10px 20px 3px rgba(0, 0, 0, 0.5);
`;

const RobotDisplay = ({
  robot: {
    url,
    name,
    characteristics: { velocity, resistance, creation_date },
  },
  actionOnClick,
  deleteOnClick,
}) => {
  return (
    <LI>
      <h3>ROBOT</h3>
      <Image src={url} alt={name} />
      <h4>{name}</h4>

      <div>
        <Button actionOnClick={actionOnClick} text="Details" type={"details"} />
        <Button actionOnClick={deleteOnClick} text="Delete" type={"delete"} />
      </div>
    </LI>
  );
};

export default RobotDisplay;
