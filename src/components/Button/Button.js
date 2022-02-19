const Button = ({ text, actionOnClick }) => {
  return <button onClick={actionOnClick}>{text}</button>;
};

export default Button;
