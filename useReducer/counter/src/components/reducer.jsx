export const reducer = (state, action) => {
    if(action.type==="+increase"){
      return (state={count: state.count+1})
    }  
    if(action.type==="-decrease"){
      return (state={count:state.count-1})
    }   
    if(action.type==="0reset"){
      return (state={count:0})
    }   



return state
}