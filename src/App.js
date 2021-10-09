import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
