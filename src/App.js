import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Import components */
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

/* Import CSS */
import './App.css';

export default function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={ Home } exact />
                <Route path="/about" component= { About } />
                <Route path="/projects" component={ Projects } />
            </Switch>
        </main>
    );
}
