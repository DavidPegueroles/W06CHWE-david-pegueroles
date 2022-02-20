import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import RobotPage from "./pages/RobotPage/RobotPage";

const H1 = styled.h1`
  margin-left: 20px;
`;

function App() {
  return (
    <>
      <H1>Welcome to super robots</H1>

      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/robots/:idRobot" element={<RobotPage />} />
      </Routes>
    </>
  );
}

export default App;
