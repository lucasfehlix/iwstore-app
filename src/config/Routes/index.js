import {Route, Switch} from "react-router-dom";
import Teste from "../../pages/Teste";
import Home from "../../pages/Home";
import ProductList from "../../pages/ProductList";
import ProductDatails from "../../pages/ProductDatails";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Roles from "../../pages/Roles";
import RecoverPassword from "../../pages/RecoverPassword";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/produtos"} component={ProductList}/>
            <Route exact path={"/produtos/:id"} component={ProductDatails}/>
            <Route exact path={"/teste"} component={Teste}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/cadastro"} component={Register}/>
            <Route exact path={"/permissoes"} component={Roles}/>
            <Route exact path={"/recuperarsenha"} component={RecoverPassword}/>
        </Switch>
    );
}