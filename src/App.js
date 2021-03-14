import Routes from "./config/Routes";
import {BrowserRouter, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
        <BrowserRouter>
            <div className={"container mt-5"}>
                <Routes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
