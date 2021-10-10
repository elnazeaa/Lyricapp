import "./App.css";
import HomePage from "./pages/homePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LyricPage from "./pages/lyricPage";
import { Navbar } from "./component";

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Lyricapp">
            <HomePage />
          </Route>
          <Route exact path="/:artistName/:songName">
            <LyricPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
