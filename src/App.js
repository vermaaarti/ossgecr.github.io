import Header from "./components/Header";
import Events from "./components/pages/Events";
import Members from "./components/pages/Members";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Comingsoon from "./components/pages/Comingsoon";
import Loginpage from "./components/pages/Loginpage";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Comingsoon} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Loginpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
