import {authAPI, captchaAPI, usersAPI} from "../API/UsersAPI";
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

export type contactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export type photosDataType = {
    small: string | null
    large: string | null
}
export type ProfileUserType = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    userId: null | number
    photos: photosDataType
}

let initialState = {
    id: null as null | number,
    login: null as null | string,
    email: null as null | string,
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
    } as null | ProfileUserType,
    errorMessage: null as null | string,
    captchaURL: null as null | string,
    activeContent: null as null | string,
}

type initialStateType = typeof initialState


let authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case LOG_IN:
            return {...state, ...action.data, isAuth: true}
        case SET_USERS_AKAUNT:
            return {
                ...state,
                profileUserData: {
                    ...action.profileUserData,
                    contacts: {...action.profileUserData.contacts},
                    photos: {...action.profileUserData.photos}
                }
            }
        case DELETE_LOGIN :
            return {...state, ...initialState, isAuth: false,}
        case ERROR_MESSAGE: {
            return {...state, errorMessage: action.message}
        }
        case SET_CAPTCHA:
            return {...state, captchaURL: action.captcha}
        case CHANGE_PHOTO_PROFILE: {
            return {...state, profileUserData: {...state.profileUserData, photos: action.photos} as ProfileUserType}
        }
        case SET_ID:
            return {...state, id: action.userId, isAuth: true}
        case SET_ACTIVE_CONTENT: {
            return {...state, activeContent: action.value}
        }
        default:
            return state
    }
}
type AuthDataType = { id: number, email: string, login: string }
type AuthACType = { type: typeof LOG_IN, data: AuthDataType }
export const authAC = (data: AuthDataType): AuthACType => ({type: LOG_IN, data})


type SetUserType = { type: typeof SET_USERS_AKAUNT, profileUserData: ProfileUserType }
export const setUsersAcauntAC = (data: ProfileUserType): SetUserType => {
    return {
        type: SET_USERS_AKAUNT,
        profileUserData: {...data, contacts: {...data.contacts}, photos: {...data.photos}}
    }
}
const logOfAC = () => ({type: DELETE_LOGIN})

type ErrorMessageType = { type: typeof ERROR_MESSAGE, message: string }
const errorMessageAC = (message: string): ErrorMessageType => ({type: ERROR_MESSAGE, message})

const setCaptcha = (captcha: string) => ({type: SET_CAPTCHA, captcha})

const setId = (userId: number) => ({type: SET_ID, userId})


export const setActiveContent = (value: string) => ({type: SET_ACTIVE_CONTENT, value})


export const getAuthMeThunkCreator = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.getAuthMe()
        if (response.data.resultCode === 0) {
            dispatch(authAC(response.data.data))
            let res = await usersAPI.getProfile(response.data.data.id)
            dispatch(setUsersProfile(res.data))
            return dispatch(setUsersAcauntAC(res.data))

        }
    }
}

export const postAuthLoginTC = (login: any) => {
    return async (dispatch: any) => {
        dispatch(initializedAC(false))
        let response = await authAPI.authLogin(login)
        if (response.resultCode === 0) {
            dispatch(setId(response.data.userId))
            let res = await usersAPI.getProfile(response.data.userId)
            dispatch(setUsersProfile(res.data))
            dispatch(setUsersAcauntAC(res.data))
            dispatch(initializedAC(true))
        } else if (response.resultCode === 10) {
            dispatch(errorMessageAC(response.messages[0]))
            let captcha = await captchaAPI.getCaptcha()
            dispatch(setCaptcha(captcha.url))
            dispatch(initializedAC(true))
        } else {
            dispatch(errorMessageAC(response.messages[0]))
            dispatch(initializedAC(true))
        }
    }
}

export const deleteAuth = () => {
    return async (dispatch: any) => {
        let response = await authAPI.deleteLogin()
        if (response.resultCode === 0) {
            dispatch(logOfAC())
        }
    }
}


export default authReducer