import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {HomePage} from './components/pages/HomePage';

function App() {
    return (
        <div className="App">
            <Router>
                <HomePage/>
            </Router>
        </div>
    );
}

export default App;
