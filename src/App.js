import Routes from "./config/Routes";
import {BrowserRouter, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
        <BrowserRouter>
            <div className={"container mt-5"}>
                <Link to="/login">
                    <button className={"btn btn-outline-primary"}>Login</button>
                </Link>
                <Link to="/cadastro">
                    <button className={"btn btn-outline-primary"}>Cadastro de Usuário</button>
                </Link>
                <Link to="/recuperarsenha">
                    <button className={"btn btn-outline-primary"}>Recuperar Senha</button>
                </Link>
                <Link to="/permissoes">
                    <button className={"btn btn-outline-primary"}>Permissões de Usuário</button>
                </Link>
                <Link to="/">
                    <button className={"btn btn-outline-primary"}>Página Inicial</button>
                </Link>
                <Link to="/produtos">
                    <button className={"btn btn-outline-primary"}>Listar Produtos</button>
                </Link>
                <Link to="/teste">
                    <button className={"btn btn-outline-primary"}>Página Teste</button>
                </Link>
                <hr/>
                <Routes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
