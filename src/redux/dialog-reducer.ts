const CREATE_NEW_MESSAGE = "dialog/CREATE-NEW-MESSAGE"
const CHANGE_MESSAGE_VALUE = "dialog/CHANGE-MESSAGE-VALUE"

type dialogsDateType = {
  id: number
  name: string
}
type messagesDateType = {
  id: number
  message: string
}

let initialState = {
  dialogsDate: [
    {id: 1, name: "sab zero",},
    {id: 2, name: "Goro",},
    {id: 3, name: "Шанг Цуно",},
    {id: 4, name: "Рептилія",},
    {id: 5, name: "Джарек",},
  ] as Array<dialogsDateType>,
  messagesDate: [
    {id: 1, message: "Hi",},
    {id: 2, message: "go fait",},
    {id: 3, message: "On the table",},
    {id: 4, message: "first post",},
    {id: 5, message: "Narutoooo",},
  ] as Array<messagesDateType>,
  newMessageValue: "",
}

export type initialStateType = typeof initialState

export const dialogReducer = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case CREATE_NEW_MESSAGE: {
      let newMes = {
        id: Math.round(Math.random() * 1000),
        message: state.newMessageValue,
      }
      return {
        ...state,
        messagesDate: [...state.messagesDate, newMes],
        newMessageValue: ""
      };
    }
    case CHANGE_MESSAGE_VALUE:
      return {
        ...state,
        newMessageValue: action.text
      }
    default:
      return state
  }
}


export const addMassageActionCreator = () => {
  return {type: CREATE_NEW_MESSAGE}
}

type changeTextACType = {
  type : typeof CHANGE_MESSAGE_VALUE
  text: string
}

export const changeTextActionCreator = (text: string): changeTextACType  => {
  return {
    type: CHANGE_MESSAGE_VALUE,
    text: text
  }
}