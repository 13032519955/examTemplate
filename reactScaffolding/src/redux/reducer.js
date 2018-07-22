export default (initState,types)=>{
    return (state=initState,action)=>{
        if(types[action.type]){
            return types[action.type](state,action)
        };
        return state;
    };
};