import Events from "./Events";
import Header from "./Header";
import Members from "./Members";
import Comingsoon from "./Comingsoon";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Comingsoon />
        </Route>
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/members" exact>
          <Members />
        </Route>
        <Route path="/about" exact></Route>
        <Route path="/contact" exact></Route>
      </Switch>
    </div>
  );
}

export default App;
