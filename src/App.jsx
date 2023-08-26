import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main/Main";
import VideoDetail from "./components/main/VideoDetail";


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/video/:videoId" component={VideoDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
