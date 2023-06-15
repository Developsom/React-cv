import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './pages/Auth';
import Motivation from './pages/Motivation';
import Portfolio from './pages/Portfolio';


function App() {
    return (
        <Router>
            <div>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/motivation" component={Motivation} />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
