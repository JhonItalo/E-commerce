import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/Home"
//comp
import Header from "../componentes/Header"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="home/" index element={<Home />} />
                {/*<Route path="portifolio/animations" element={<Animations />} />*/}
            </Routes>
        </BrowserRouter >
    );
}

export default Rotas;
