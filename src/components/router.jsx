import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Plays from '../pages/plays';
import Play from '../pages/play';
import Predictor from "../pages/predictor";
import Settings from "../pages/settings";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () =>{  

  const [ fancy, setFancy ] = React.useState(false);

  const toggleFancy = () => {
    setFancy(prev => !prev);
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/plays">
        <Plays />
      </Route>
      <Route path="/predictor" component={Predictor} />
      <Route path="/play/:play_id/:act/:scene">
        {params => <Play font={ fancy } play_id={params.play_id} act={Number(params.act)} scene={Number(params.scene)} />}
      </Route>
      <Route path="/settings">
        <Settings fancyToggled={ fancy } toggleFont={ toggleFancy } />
      </Route>
    </Switch>
)
};
