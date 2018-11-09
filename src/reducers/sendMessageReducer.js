const initState={
    messages:[]
}

const sendMessageReducer=(state=initState,action)=>{
    switch(action.type){
        case 'send_text':{
            return state;
        }
        case 'received_text':{
            return {
                ...state,
                messages:[action.data.message,...state.messages]
            }
        }
    }

    return state
}

export default sendMessageReducer;