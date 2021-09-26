import './App.css';
import Navbar from './components/Navbar';
import Countrieslist from './components/Countrieslist';
import Countrydetails from './components/Countrydetails';
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
 

  <div className="container">
    <div className="row">
    <Navbar />

       <div class="col-5 countriesListDiv">
			   <div class="list-group">
      <Countrieslist  />

        </div>
      </div>
      <Switch>
  
      <Route exact path="/:id" component = {Countrydetails} />
  
      </Switch>
      
    </div>
  </div>
</div>

  );
}

export default App;
