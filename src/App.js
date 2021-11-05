import Header from "./Header";
import Events from "./Events";
import Members from "./Members";
import About from "./About";
import Contact from "./Contact";
import Comingsoon from "./Comingsoon";
// import Loginpage from "./Loginpage";
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
        {/* <Route exact path="/login" component={Loginpage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
