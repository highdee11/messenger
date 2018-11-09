import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../assets/css/style.css";

class Login extends Component{
    

    render(){
        return(
            <div id="login">
                <div className="content">
                    <div className="box">
                        <div className="loginHead">
                            Messenger
                        </div>
                        <div className="loginBody">
                            <form action=""></form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapProp=(state)=>{
    return{
        message:state.sendMessageReducer.message
    }
}

const mapDispatch=(dispatch)=>{
    return{
        
    }
}

export default connect(mapProp,mapDispatch)(Login);