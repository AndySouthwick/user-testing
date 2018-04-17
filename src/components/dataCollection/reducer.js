import {actionTypes} from './actions'

export const initialState = {
  id: null
}

export function reducer (state = initialState, action){
  console.log('from reducer')
  switch (action.type){
    case actionTypes.SET_ID:
      return{
        ...initialState,
        id: action.payload
      }
    default:
      return state
  }
}