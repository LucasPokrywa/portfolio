import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Parcours from "./pages/parcours";
import Projects from "./pages/projects";
import Header from "./assets/components/header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parcours" element={<Parcours />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
