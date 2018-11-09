const sendText=(message)=>{
    return(dispatch,getState,{socket})=>{
        socket.emit('client-data',{message});
        dispatch({type:'send_text',message});
    }
}


export default sendText;