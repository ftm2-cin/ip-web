import { Switch, Route, Redirect } from "react-router-dom";

function Routes({ allRoutes }) {
  return (
    <Switch>
      {allRoutes.map(({ Comp, path, includeRoute }) => ( 
       includeRoute && <Route path={path} render={(props) => <Comp {...props} />} />
      ))}
      <Redirect from="/" to="/home" />
      <Route render={(props) => <h1>404 - Essa não existe</h1>} />
    </Switch>
  );
}

export default Routes;
