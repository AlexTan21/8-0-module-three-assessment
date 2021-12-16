import "./App.css";
import Home from "./components/Home.js";
import Locations from "./components/Locations.js";
import Movies from "./components/Movies.js";
import Navbar from "./components/Navbar.js";
import People from "./components/People.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path='/locations' component={Locations} />
        </Switch>
    </div>
  );
}

export default App;