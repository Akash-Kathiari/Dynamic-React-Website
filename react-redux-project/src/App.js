import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import ProductComponent from "./containers/ProductComponent";
import LoginButton from "./containers/LoginButton";
import LogoutButton from "./containers/LogoutButton";
import Profile from "./containers/Profile";
import {useAuth0} from "@auth0/auth0-react";

function App() {
    const {isLoading}= useAuth0();
    if (isLoading) return <div>Loading...</div>
  return (
    <div className="App">
        <Header/>
        {/*<LoginButton/>*/}
        {/*<LogoutButton/>*/}
      <Router>
          {/*<Header />*/}
          <Switch>
          <Route path={"/"} exact component = {ProductListing}/>
          <Route path={"/product/:productId"} exact component = {ProductDetail}/>
          <Route>404 Not Found!</Route>

          </Switch>
      </Router>
        <div id={"hideMe"}>Loading...</div>
    </div>
  );
}

export default App;
