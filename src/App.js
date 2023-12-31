import "./App.css";
import Navigation from "./components/navigation";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import PageRenderer from "./page-renderer";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/:page" Component={PageRenderer} />
                    <Route path="/" render={() => <Navigate to="/home" />} />
                    <Route Component={() => 404} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
