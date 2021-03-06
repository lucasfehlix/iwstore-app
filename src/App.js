import Routes from "./config/Routes";
import {BrowserRouter, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <div className={"container mt-5"}>
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
