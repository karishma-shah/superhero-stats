import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Components

// Pages
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {
    return(
        <Router>
            <Switch>
                <div className='container py-4 px-4 md:px-8 mx-auto'>
                    <Route exact path='/' component={LandingPage} />
                </div>
            </Switch>
        </Router>
    )
}

export default App;