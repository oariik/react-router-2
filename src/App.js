import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './componnets/Home';
import About from './componnets/About';
import Contact from './componnets/Contact';
import Error from './componnets/Error';
import Navigation from './componnets/Navigation';



/* switch hata sayfaları için oluşturuldu , onun yerinde div vardı wrappers element olarak */
class App extends Component {
  render() {
    return (
      
      <BrowserRouter>

      <div> 
      <Navigation />
          <Switch>  
        <Route  path="/" component={Home} exact />
        <Route  path="/about" component={About}  exact />
        <Route  path="/contact" component={Contact} exact />
        <Route  component={Error}  />
          </Switch>
      </div>
    
      </BrowserRouter>

    );
  }
}

export default App;
