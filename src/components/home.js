import React, { Component } from 'react';
import { connect } from 'react-redux';
import sendText from '../actions/sendText';
import admin from '../assets/images/admin.jpg';
import "../assets/css/style.css"; 
import receiveText from '../actions/receiveText';
import { NavLink } from 'react-router-dom';
class Home extends Component{
    
    constructor(props){
        super(props);
        // props.listenForMessage(); //listening for new message
    }

    render(){ 
        var list=(<p className="nochats">No messages yet</p>);
        
        //rendering the messages to the view
        if(this.props.messages.length > 0){
           
             list=this.props.messages.map(item=>{
                var time=new Date(item.date);
                return (
                        <li className="msg" key={Math.random() *1000}> 
                            <div className="col-2 col col1">
                                <img src={admin} />
                            </div>
                            <div className="col-10 col col2">
                                <p className="">
                                    {item.text}
                                </p>

                                <small>{time.getMonth()+' '+time.getDate()+' '+time.getFullYear()+' '+time.getHours()+':'+time.getMinutes() +' '+ (time.getHours>=12 ? 'PM':'AM') }</small>
                            </div>
                        </li>
                )
            });
        }
        return(
            <div id="admin">    
                    <NavLink to="/admin" >GO TO SENDER</NavLink>

                    <div className="col-md-6 offset-md-3 chats">
                        {/* <div className="chatHead">MESSENGER</div> */}
                        <div className="chatBody chatBody2">
                            <ul className="allchats">
                                {list}
                            </ul>
                        </div> 
                    </div>
            </div>
        )
    }
}

const mapProp=(state)=>{
    return{
        messages:state.sendMessageReducer.messages //Array of messages
    }
}

const mapDispatch=(dispatch)=>{
    return{
        listenForMessage:()=>{ dispatch(receiveText()) }  //method helps to listen for new message from the serve
    }
}

export default connect(mapProp,mapDispatch)(Home);