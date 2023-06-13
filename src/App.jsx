import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Mod, Classic } from "./pages";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#1f3656] to-[#15193c]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/mod" element={<Mod />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
