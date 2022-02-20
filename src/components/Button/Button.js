import styled from "styled-components";

const DetailsButton = styled.button`
  background-color: transparent;
  color: white;
  border: 5px solid #0088a3;
  border-radius: 10px;
  font-size: 20px;

  width: 150px;
  height: 40px;

  margin: 25px;
  margin-bottom: 10px;

  cursor: pointer;
`;

const Button = ({ type, text, actionOnClick }) => {
  if (type === "details") {
    return <DetailsButton onClick={actionOnClick}>{text}</DetailsButton>;
  }
  return <button onClick={actionOnClick}>{text}</button>;
};

export default Button;
