import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/Home"
//comp
import Header from "../componentes/fixed/Header"
import Nav from "../componentes/fixed/Nav";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route path="home" index element={<Home />} />
                <Route path="portifolio/animations" element={<Home />} />
            </Routes>
        </BrowserRouter >
    );
}

export default Rotas;
