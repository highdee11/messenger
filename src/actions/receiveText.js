const receiveText=()=>{
    return(dispatch,getState,{socket})=>{
        socket.on('new_msg',(data)=>{
            dispatch({type:'received_text',data});
        });
    }
}

export default receiveText;