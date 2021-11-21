import Header from "./components/Header";
import Events from "./components/pages/Events";
import About from "./components/pages/About";
import Comingsoon from "./components/pages/Comingsoon";
import Loginpage from "./components/pages/Loginpage";
import Errorpage from "./components/pages/404";
import Projects from "./components/pages/Projects";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Comingsoon} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Loginpage} />
        <Route path="" component={Errorpage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
