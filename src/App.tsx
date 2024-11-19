import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { StartPage } from "./components/startPage/StartPage";
import { GamePage } from "./components/GamePage/GamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
