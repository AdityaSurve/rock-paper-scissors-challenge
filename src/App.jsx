import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Classic } from "./pages";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#1f3656] to-[#15193c]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classic" element={<Classic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
