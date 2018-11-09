import React, { Component } from 'react';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import receiveText from './actions/receiveText';
import { BrowserRouter , Switch ,Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props){
    super(props);
    this.props.listenForMessage();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}


const mapDispatch=(dispatch)=>{
  return{
      listenForMessage:()=>{ dispatch(receiveText()) }  //method helps to listen for new message from the serve
  }
}
export default connect(null,mapDispatch)(App);
