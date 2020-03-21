const ChannelsReducer = (state, action) => {
    if (state === undefined) {
        return [];
    } 


    switch(action.type){
        case 'SET_CHANNELS':
            return  [...state, action.payload ] 
        default:
            return state;
    }

}

export default ChannelsReducer;