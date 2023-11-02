let initalState={text:''}
export function textReducer(state=initalState,action)
{
    switch (action.type) {
      case "SET_TEXT":
        return {...state,text:action.payload.target.value}
    
      default:
        return state
    }
}