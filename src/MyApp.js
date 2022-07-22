import { useState } from "react";
import Authentication from "./Authentication";
import Budget from "./Budget";
import Login from "./components/budget/Login";
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import { 
   BrowserRouter as Router,
   Route,
   Switch
   } from "react-router-dom";
import "./MyApp.css"
import { Provider } from "react-redux";
import store from "./redux/store";
const MyApp = () => {
    const [isSubmited, setIsSubmited] = useState(false)


    return ( 
        <Provider store ={store}>
           <div className="myapp-container">
       
            <Router>
               <Switch>
                  <Route exact path="/">
                     <Authentication/>
                  </Route>
               

                  <Route path="/budget/:identity">
                     <Budget/>
                  </Route>
               </Switch>

            </Router>

     
      </div>
        </Provider>
     );
}
 
export default MyApp;