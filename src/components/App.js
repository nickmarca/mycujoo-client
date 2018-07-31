import React, {Component} from 'react';
import Header from "./Header";
import {BrowserRouter, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Entities from "./pages/Entities/Entities";


class App extends Component {

  render() {
    return (
      <div style={{maxWidth: '80vw', margin: '0 auto'}}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/entities"} component={Entities}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;