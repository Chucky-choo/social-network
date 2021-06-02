import {getAuthMeThunkCreator} from "./header-reducer";

const INITIALIZED_USERS: string= 'app/INITIALS_USERS'

type appInitialState = {
  initializedChecked: boolean
}

const initialState: appInitialState = {
  initializedChecked: false
}

let appReducer = (state = initialState, action: any) => {

  switch (action.type) {

    case INITIALIZED_USERS: {
      return {
        ...state,
        initializedChecked: action.value
      }
    }
    default:
      return state
  }
}

type initializedType = {
  type: typeof INITIALIZED_USERS
  value: boolean
}

export const initializedAC = (value: boolean): initializedType => ({type: INITIALIZED_USERS, value})



export const initializedTC = (value: boolean) => {
  return (dispatch: Function) => {
    let promise = dispatch(getAuthMeThunkCreator())
    promise.then(() => {
      dispatch(initializedAC(value))
    })
  }
}


export default appReducer