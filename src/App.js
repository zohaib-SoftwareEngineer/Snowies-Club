import React, { useEffect } from 'react';
import './App.css';

import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
