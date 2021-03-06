import {Route, Switch} from "react-router-dom";
import Teste from "../../pages/Teste";
import Home from "../../pages/Home";
import ProductList from "../../pages/ProductList";
import ProductDatails from "../../pages/ProductDatails";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/produtos"} component={ProductList}/>
            <Route exact path={"/produtos/:id"} component={ProductDatails}/>
            <Route exact path={"/teste"} component={Teste}/>
        </Switch>
    );
}