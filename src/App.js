import { Route, Switch } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Login from "./Components/Login";

import Signup from "./Components/Signup";
import Profile from "./Components/Profile";

// Route is used to navigate between pages

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/landingpage" component={Landingpage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </div>
);

export default App;
