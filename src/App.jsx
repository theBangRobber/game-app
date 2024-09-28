import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ScoreContextProvider } from "./store/ScoreContext";
import GuessNumberGame from "./pages/GuessNumberGame";

function App() {
  return (
    <ScoreContextProvider>
      <BrowserRouter>
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Default component to show in the Outlet of RootLayout */}
            <Route index element={<Welcome />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="game" element={<GuessNumberGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ScoreContextProvider>
  );
}

export default App;
