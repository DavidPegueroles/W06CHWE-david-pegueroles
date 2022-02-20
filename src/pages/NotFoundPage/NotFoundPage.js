import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  margin-left: 30px;

  h2 {
    font-size: 50px;
  }
  p {
    font-size: 30px;
  }
  a {
    color: #0088a3;
    text-decoration: none;

    &:visited {
      color: #0088a3;
      text-decoration: none;
    }
  }
`;

const NotFoundPage = () => {
  return (
    <Section>
      <h2>404</h2>
      <img src="favicon.png" alt="Sad Wall-e Eyes" />
      <p>
        Sorry, this page does not exist. Return back{" "}
        <Link to="/robots">home</Link>.
      </p>
    </Section>
  );
};

export default NotFoundPage;
