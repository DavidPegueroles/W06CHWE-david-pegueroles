import { useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import FormPage from "./pages/FormPage/FormPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RobotPage from "./pages/RobotPage/RobotPage";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 30px;
  }
  a {
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 10px;
    font-size: 20px;
    text-decoration: none;
    margin-right: 60px;
    padding: 5px 20px;
    cursor: pointer;
    &:visited {
      color: white;
    }
    &:active {
      background-color: #002f38;
    }
  }
`;

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header>
        <h1>Welcome to super robots</h1>

        {counter === 0 && (
          <Link
            to="/robots/create"
            onClick={() => {
              setCounter(1);
            }}
          >
            Create
          </Link>
        )}

        {counter === 1 && (
          <Link
            to="/robots"
            onClick={() => {
              setCounter(0);
            }}
          >
            Back
          </Link>
        )}
      </Header>

      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots">
          <Route index element={<HomePage />} />
          <Route path="/robots/:idRobot" element={<RobotPage />} />
          <Route path="/robots/create" element={<FormPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
