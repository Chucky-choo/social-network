import {GitHubAPI} from "../API/UsersAPI";
import {setUsersProfile} from "./profile-reducer";
import {initializedAC} from "./app-reducer";
import defaultAva from '../assets/icons/iconUserBlac.png'


const LOG_IN = "header/LOG_IN"
const SET_USERS_AKAUNT = "header/SET_USERS_AKAUNT"
const DELETE_LOGIN = "header/DELETE_LOGIN"
const ERROR_MESSAGE = 'header/ERROR_MESSAGE'
const CHANGE_PHOTO_PROFILE = 'profile/CHANGE_PHOTO_PROFILE'
const SET_CAPTCHA = 'profile/SET_CAPTCHA'
const SET_ID = 'SET_ID'
const SET_ACTIVE_CONTENT = 'SET_ACTIVE_CONTENT'


const initialState = {
	id: null,
	login: null,
	email: null,
	isAuth: false,
	profileUserData: {
		aboutMe: "i am coldMan",
		contacts: {
			facebook: "facebook.com",
			website: null,
			vk: "vk.com/dimych",
			twitter: "https://twitter.com/@sdf",
			instagram: "instagra.com/sds",
			youtube: null,
			github: "github.com",
			mainLink: null
		},
		lookingForAJob: true,
		lookingForAJobDescription: "Учусь, БОМБИМ",
		fullName: "Sub Zero",
		userId: null,
		photos: {
			small: defaultAva,
			large: defaultAva
		}
	},
	errorMessage: null,
	captchaURL: null,
	activeContent: null,
}


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {...state, isAuth: action.boolean}
		case SET_USERS_AKAUNT:
			return {
				...state,
				profileUserData: {
					...action.profileUserData,
				}
			}
		case DELETE_LOGIN :
			return {...state, ...initialState}
		case ERROR_MESSAGE: {
			return {...state, errorMessage: action.message}
		}
		case SET_CAPTCHA:
			return {...state, captchaURL: action.captcha}
		case CHANGE_PHOTO_PROFILE: {
			return {...state, profileUserData: {...state.profileUserData, photos: action.photos}}
		}
		case SET_ID:
			return {...state, id: action.userId, isAuth: true}
		case SET_ACTIVE_CONTENT: {
			return {...state, activeContent: action.value}
		}
		default: return state
	}
}

export const authAC = (boolean) => ({type: LOG_IN, boolean})
export const setUsersAcauntAC = (data) => {
	return {
		type: SET_USERS_AKAUNT,
		profileUserData: {...data}
	}
}
const logOfAC = () => ({type: DELETE_LOGIN})
const errorMessageAC = (message) => ({type: ERROR_MESSAGE, message})
const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})
const setId = (userId) => ({type: SET_ID, userId})


export const setActiveContent = (value) => ({type: SET_ACTIVE_CONTENT, value})


export const postAuthLoginTC = ({login}) => {
	return async (dispatch) => {
		let response = await GitHubAPI.getProfile(login)
		dispatch(setUsersProfile(response.data))
		dispatch(setUsersAcauntAC(response.data))
		dispatch(authAC(true))
	}
}

export const deleteAuth = () => {
	return async (dispatch) => {
			dispatch(logOfAC())
		}
	}



export default authReducer