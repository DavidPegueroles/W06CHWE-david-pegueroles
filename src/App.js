import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <h1>Site under construction. Please come again later...</h1>
      <img src="favicon.png" alt="Sad Wall-E eyes" />

      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
