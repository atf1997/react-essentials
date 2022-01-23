import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, Support } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home login="AbdoTareq" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
