import LoginForm from './Components/LoginForm/LoginForm';
import DashBoard from './Components/DashBoard/DashBoard';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<LoginForm />}
                />
                <Route
                    path="/dashboard"
                    element={<DashBoard />}
                />
            </Routes>
        </Router>
    </>
);
}

export default App;
