import React from "react";
import { Dashboard, Error } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
        </Route>
        {/* <Route path="/login" exact>
          <Login />
        </Route> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
