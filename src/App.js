import {
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchRepo from './SearchRepo';
import Favourites from './Favourites';
import NavBar from './NavBar';
import { v4 } from 'uuid';

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch, 
//  } from "react-router-dom";

// const App=() => {

//   const [search, setSearch] = useState('');

//   const filterRepo = (name) => {
//     name ? setSearch(name) : setSearch('');
// };

//   return (
//     <div className="App">
//       <Search onFilterRepo={filterRepo} />
//     </div>
//   );
// };

  const App = () => {
    

    

    

      return(
        
        

        <div className="App">
          <Router>
          <Routes>
            <Route exact path="/" element={<SearchRepo />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Router>
          
          
          {/* <Router>
          <Switch>
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </Router> */}

          {/* <Link to="/Favourites">Favourites</Link> */}
          


          {/* <Router>
                <Routes>
                    <Route path="/favourites" component={Favourites} />
                </Routes>
          </Router>           */}
        </div>
        
        
      );
          
    }

export default App;
