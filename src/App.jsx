import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";


const App = () => {
  return (
    <BrowserRouter>
      <h1 style={{ backgroundColor: "navy", color: "white", textAlign: "center"}}>React App</h1>
      <ul style={{listStyle: "none"}}>
        <li>
          <Link to="/omikuji" style={{color: "black"}}>おみくじ</Link>
        </li>
        <li>
          <Link to="/janken" style={{color: "black"}}>Rock Paper Scissors Lizard Spock</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;