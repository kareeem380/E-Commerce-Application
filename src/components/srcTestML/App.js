import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductPage from './components/ProductPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={ProductPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
  }
}

export default App;