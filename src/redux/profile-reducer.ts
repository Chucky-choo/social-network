import {statusApi, usersAPI} from "../API/UsersAPI";
import {photosDataType, ProfileUserType, setUsersAcauntAC} from "./header-reducer";
import {initializedTC} from "./app-reducer";


const SET_USERS_PROFILE = "profile/SET_USERS_PROFILE"
const CHANGE_STATUS = 'profile/CHANGE_STATUS'
const CHANGE_PHOTO_PROFILE = 'profile/CHANGE_PHOTO_PROFILE'
const LOADING_PROFILE = 'profile/LOADING_PROFILE'


let initialState = {
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
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c8bec71-cdc3-43cd-a782-9db62157a7cf/d7kqa5o-7a0f0af6-373c-4157-96d0-c8d7f6c2a759.jpg/v1/fill/w_1024,h_576,q_75,strp/mortal_kombat_x_scorpion_1080p_by_sakis25_d7kqa5o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC80YzhiZWM3MS1jZGMzLTQzY2QtYTc4Mi05ZGI2MjE1N2E3Y2ZcL2Q3a3FhNW8tN2EwZjBhZjYtMzczYy00MTU3LTk2ZDAtYzhkN2Y2YzJhNzU5LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.NM1lVU_WdAmMz9nII2aBXGZK4zku_SRG3ETL2Av7d6Q"
        }
    } as ProfileUserType,
    statusValue: "Test 1" as null | string,
    isLoading: false,
}

let profileReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case SET_USERS_PROFILE:
            return {
                ...state,
                profileUserData: {
                    ...action.profileUserData,
                    contacts: {...action.profileUserData.contacts},
                    photos: {...action.profileUserData.photos}
                }
            }
        case CHANGE_STATUS: {
            return {...state, statusValue: action.status}
        }
        case CHANGE_PHOTO_PROFILE: {
            return {...state, profileUserData: {...state.profileUserData, photos: action.photos}}
        }
        case LOADING_PROFILE: {
            return {...state, isLoading: action.status}
        }

        default:
            return state
    }
}

type setUsersProfileType = { type: typeof SET_USERS_PROFILE, profileUserData: ProfileUserType }
export const setUsersProfile = (data: ProfileUserType): setUsersProfileType => ({
    type: SET_USERS_PROFILE,
    profileUserData: {...data, contacts: {...data.contacts}, photos: {...data.photos}}
})

type ChangeStatusType = { type: typeof CHANGE_STATUS, status: string }
const changeStatusAC = (status: string): ChangeStatusType => ({type: CHANGE_STATUS, status})

type SetNewPhotoType = { type: typeof CHANGE_PHOTO_PROFILE, photos: photosDataType }
const setNewPhoto = (photos: photosDataType): SetNewPhotoType => ({type: CHANGE_PHOTO_PROFILE, photos})


type SetLoadingType = { type: typeof LOADING_PROFILE, status: boolean }
const setLoading = (status: boolean): SetLoadingType => ({type: LOADING_PROFILE, status})


export const getProfileThunkKreator = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        let response = await usersAPI.getProfile(userId)
        dispatch(setUsersProfile(response.data))
        dispatch(setLoading(false))
    }
}

export const putStatusTС = (status: string) => {
    return async (dispatch: any) => {
        let response = await statusApi.putStatus(status)
        if (response.resultCode === 0) {
            dispatch(changeStatusAC(status))
        }
    }
}

export const getStatusTC = (userId: number) => {
    return async (dispatch: any) => {
        let response = await statusApi.getStatus(userId)
        dispatch(changeStatusAC(response.data))
    }
}

export const putPhoto = (photoFile: any) => {
    return async (dispatch: any) => {
        let response = await usersAPI.putProfilePhoto(photoFile)
        if (response.resultCode === 0) {
            dispatch(setNewPhoto(response.data.photos))
        }
    }
}

export const putProfile = ({
                               aboutMe, userId, lookingForAJob,
                               lookingForAJobDescription, fullName, contacts
                           }: ProfileUserType ) => {
    return async (dispatch: any) => {
        let obg = {AboutMe: aboutMe, userId, lookingForAJob, lookingForAJobDescription, fullName, contacts}
        let res = await usersAPI.putProfile(obg)
        if (res.resultCode === 0) {
            let response = await usersAPI.getProfile(userId)
            dispatch(setUsersAcauntAC(response.data))
            dispatch(initializedTC(true))
        }
        return res
    }
}


export default profileReducer