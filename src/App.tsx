import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Parcours from "./pages/parcours";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parcours" element={<Parcours />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;