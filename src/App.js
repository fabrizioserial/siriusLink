import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home/components/Home/Home';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div>
      <Switch>
        <Route path={'/'} component={Home}/>
      </Switch>
    </div>
  );
}


export default App;
