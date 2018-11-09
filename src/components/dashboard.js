import React, { Component } from 'react';
import { connect } from 'react-redux';
import sendText from '../actions/sendText';
import receiveText from '../actions/receiveText';
import "../assets/css/style.css";
import admin from '../assets/images/admin.jpg';
import  { NavLink } from 'react-router-dom';
class Dashboard extends Component{
    
    constructor(props){
        super(props);   
        // props.listenForMessage(); //listening for new message
        this.mychats=React.createRef();
        console.log(this.mychats);
    }

    state={
        text:''
    }

    updateText=(e)=>{
        this.setState({
            ...this.state,
            [e.target.id]:e.target.value
        });
    }

    send=(e)=>{
        e.preventDefault();

        if(this.state.text.trim() == '') { //checking if text to be sent is not empty

            return false;
        }

        //sending the message to the server
        this.props.sendMessage({text:this.state.text,date:new Date()});

        //initial textBox back to empty 
        this.setState({
            ...this.state,
            text:''
        }); 
    }

    render(){
        console.log(this.props.messages.length);
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
                    <NavLink to="/" >RECEIVER</NavLink>
                    <div className="col-md-6 offset-md-3 chats">
                        {/* <div className="chatHead">ADMIN MESSENGER</div> */}
                        <div className="chatBody bkChatBody">
                            <ul className="allchats"   ref={this.mychats} >
                                  {list}
                            </ul>
                        </div>
                        <div className="chatFoot">
                            <form onSubmit={this.send}>
                                <input type='text' id='text' onChange={this.updateText} value={this.state.text} placeholder="type something........"/>
                                <button className="btn btn-success" type="button" onClick={this.send} id="textBtn">SEND</button>
                            </form>
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
        sendMessage:(message)=>{ dispatch(sendText(message)) }, //dispatching the message to sendText action
        listenForMessage:()=>{ dispatch(receiveText()) }  //method helps to listen for new message from the serve
    }
}

export default connect(mapProp,mapDispatch)(Dashboard);