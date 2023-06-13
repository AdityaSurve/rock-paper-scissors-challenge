import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Mod, Classic } from "./pages";

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-sky-600 to-blue-900">
      <BrowserRouter>
        <Navbar />
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
