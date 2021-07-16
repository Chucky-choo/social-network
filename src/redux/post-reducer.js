import akuma from '../assets/imeges/akuma.png'
import kage from '../assets/imeges/kage.png'
import cloud from '../assets/imegesForAudio/cloud-5946381_1920.jpg'
import cosmos from '../assets/imegesForAudio/cosmos-5809271_1920.png'
import man from '../assets/imegesForAudio/man-6253257_1920.jpg'
import walls from '../assets/imegesForAudio/walls-6157947_1920.jpg'
import {usersAPI} from "../API/UsersAPI";
import {blockFollowAC, observeSub} from "./users-reducer";

const MyFakePhotoArr = [akuma, kage, cloud, cosmos, man, walls]

const POPUP_DATA = 'POPUP_DATA'
const ACTIVE_POPUP = 'ACTIVE_POPUP'
const ADD_POST = 'ADD_POST'


const arrFacePosts = (arrPhoto) => {
  const rand = num => Math.round(Math.random() * num) + 10;

  return arrPhoto.map(photo => {
      return ({
        photo: photo,
        id: rand(100) + "abc",
        likes: rand(150),
        comments: rand(30)
      })
    }
  )
}

const initialState = {
  imgTemaData: {
    winter: 'https://pm1.narvii.com/6685/19e561f0332f5a270f9d96a63ffcfc2231b9d82c_hq.jpg',
    spring: 'https://www.tui.ru/getmedia/a948242d-a830-43a1-ab3c-11576e4e4b49/japan-visa-main',
    summer: 'https://media.nomadicmatt.com/japanguide.jpg',
    autumn: 'https://s2.best-wallpaper.net/wallpaper/1920x1080/1301/Japan-Kyoto-Daigo-autumn-landscape_1920x1080.jpg'
  },
  postDate: arrFacePosts(MyFakePhotoArr),
  newPostValue: "",
  isActivePopup: false,
  popupInfo: arrFacePosts([MyFakePhotoArr[0]]),
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_DATA: {
      return {...state, popupInfo: action.element}
    }

    case ACTIVE_POPUP: {
      return {...state, isActivePopup: action.value}
    }

    case ADD_POST: {
      return {...state, postDate: arrFacePosts(action.newPostData)}
    }

    default:
      return state
  }
}


export const setPopupInfo = (element) => {return {type: POPUP_DATA, element}}
export const setActivePopup = (value) => {return {type: ACTIVE_POPUP, value}}
export const putPostPhoto = (newPostData) => {return {type: ADD_POST, newPostData}}

export const addPhotoToData = (photoFile) => {
  return async (dispatch) => {

    const reader = new FileReader()

    reader.readAsDataURL(photoFile)

    reader.onload = ev => {
      console.log(ev.target.result);
      MyFakePhotoArr.push(ev.target.result)
      dispatch(putPostPhoto(MyFakePhotoArr))
    }
  }
}
export default postReducer