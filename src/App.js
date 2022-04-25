// import { AuthButton } from "./components/AuthButton";
// import Logo from "./components/Logo";
import "./App.css"
import Budget from "./Budget";
import Login from "./components/budget/Login";



function App() {
  // const links = [
  //   {
  //     buttonName: "Reviews",
  //   },
  //   {
  //     buttonName: "Tips",
  //   },
  //   {
  //     buttonName: "Alerts",
  //   },
  //   {
  //     buttonName: "Blogs",
  //   },
  // ]
  return (
    <div className="app-container">
      {/* <div className="header-container">
        <div className="header">
                <Logo/>
                <div style={{display:"flex", 
                justifyContent:"space-between", 
                width:"40%", color:"white"}}>
                    {links.map(link=>
                      <p className="">{link.buttonName}</p>
                    )}
                </div>
                <AuthButton/>
        </div>
        <div className="main-text-holder">
            <h1>Discover a beautiful <br/> place with us</h1>
            <p>Would you enjoy nature paradise in the world, let's find the <br/>best destination in the world with us</p>
        </div>
     </div> */}

     <Login/>
     <Budget/>
    </div>
  );
}

export default App;
