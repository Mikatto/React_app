import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import Albums from './components/Albums/Albums';
import Posts from './components/Posts/Posts.jsx';

const App = () => (
  <Router>
      <div className='wrapper'>
          <Header />
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/users' component={Users} />
              <Route exact path='/albums' component={Albums} />
              <Route exact path='/posts' component={Posts} />
          </Switch>
          <Footer />
      </div>
  </Router>
)

export default App;
