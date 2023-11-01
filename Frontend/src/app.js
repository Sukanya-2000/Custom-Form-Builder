import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormEditor from './components/FormEditor.js';
import FormPreview from './components/FormPreview.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:formId" component={FormEditor} />
        <Route path="/preview/:formId" component={FormPreview} />
      </Switch>
    </Router>
  );
};

export default App;
