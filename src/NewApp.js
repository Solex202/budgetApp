import { useState } from "react";
import Authentication from "./Authentication";
import Budget from "./Budget"
import BudgetLoginPage from "./components/budget/BudgetLoginPage";
import "./NewApp.css"
import {BrowserRouter as Router} from "react-router-dom"
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function NewApp(){

 return(

       <Provider store={store}>
            <div className="app-container">
            <Router>
                <switch>
                    <Route exact path="/">
                        <Authentication/>
                    </Route>

                    <Route path="/dashboard/:identity">
                        <Budget/>
                    </Route>
                </switch>
            </Router>

        </div>
       </Provider>

    );
}

export default NewApp;