import React, {Component} from 'react';
import axios from "axios";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from "../../components/About/About";
import Home from "../../components/Home/Home";
import People from "../../components/People/People";
import NotFound from "../../components/NotFound/NotFound";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      isLoading: true,
      error: false
    }
  }
  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
         .then(response => {this.setState({people: response.data.results, isLoading: false})})
         .catch(error => this.setState({error: true, isLoading:false}))
  }
  render() {
    let {people, isLoading, error} = this.state;
    return (
      <Router>
        <div className="row">
          <div className="col-lg-3 col-md-4 bg-info d-flex align-items-center">
            <ul id="nav">
              <li>
                <Link to="/" className="router-link">Home</Link>
              </li>
              <li>
                <Link to="/people" className="router-link">People</Link>
              </li>
              <li>
                <Link to="/about" className="router-link">About</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-8">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/people" render={() => <People people={people} isLoading={isLoading} error={error}/>} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
