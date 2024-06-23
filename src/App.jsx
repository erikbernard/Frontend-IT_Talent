import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aluno from "./pages/Aluno";
import Alunos from "./pages/Alunos";
import Create from "./pages/Create";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/create" element={<Create />} />
            <Route path="/aluno/:id" element={<Aluno />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
