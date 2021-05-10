import dialogReducer from "./dialog-reducer";
import postReducer from "./post-reducer";

let store = {
  _state: {
    post: {
      postDate: [
        {massage: "даров бик", id: 1, likes: 20},
        {massage: "i am write TodoList", id: 2, likes: 2124,},
        {massage: "i am the best", id: 3, likes: 91,},
      ],
      newPostValue: ""
    },
    dialog: {
      dialogsDate: [
        {id: 1, name: "sab zero",},
        {id: 2, name: "Goro",},
        {id: 3, name: "Шанг Цуно",},
        {id: 4, name: "Рептилія",},
        {id: 5, name: "Джарек",},
      ],
      masegsDate: [
        {id: 1, meseg: "Hi",},
        {id: 2, meseg: "go fait",},
        {id: 3, meseg: "On the table",},
        {id: 4, meseg: "first post",},
        {id: 5, meseg: "Narutoooo",},
      ],
      newMessageValue: "",
    },
  },

  RerenderApp() {
    console.log("ales good")
  },

  subscribe(observer) {
    this.RerenderApp = observer
  },

  dispatch(action) {
    this._state.post = postReducer(this._state.post, action)
    this._state.dialog = dialogReducer(this._state.dialog, action)

      this.RerenderApp(store)

  }
}





// export default store;