import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from './components/pages/HomePage';
import {DetailsPage} from './components/pages/DetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={< HomePage />}/>
                <Route exact path="/Plant/:Name" element={< DetailsPage />}/>
            </Routes>
        </Router>
    );
} 
export default App;
