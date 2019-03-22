import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"

let Tables = () => <div>Tables Stuff</div>

let Charts = () =><div>Charts Stuff</div>
//these are components!

let Things = () =><div>Things Stuff</div>
let thingsNTables = ()=> <div><Things/><Tables/></div>

function App() {
  return (
    <Router>
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          {/* PUT YOUR ROUTES HERE */}

          <Route path="/" exact component={Dashboard} />
          {/* need to have exact^^^ can use in all Routes */}
          <Route path="/charts" component={Charts} />
          <Route path="/tables" component={Tables} />
          {/* the Routes are the if statements! */}
        </div>
      </div>
    </div>
    </Router>
  );
}


export default App;
