import {usersAPI} from "../API/UsersAPI";
import {photosDataType} from "./header-reducer";


const CHANGE_FOLLOW = "my_app/users/CHANGE-FOLLOW"
const SET_USERS = "my_app/users/SET-USERS"
const CHANGE_PAGE = "my_app/users/CHANGE-PAGE"
const SET_TOTAL_USERS = "my_app/users/SET-TOTAL-USERS"
const TOGGLE_IS_FETCHING = "my_app/users/TOGGLE_IS_FETCHING"
const BLOCKED_FOLLOWING = 'my_app/users/BLOCKED_FOLLOWING'


type UserType = {
    name: string
    id: number
    photos: photosDataType
    status: string
    followed: boolean
}

let initialState = {
    usersData: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 25,
    currentPage: 1,
    isFetching: false,
    blockFollow: [] as Array<any>, // реба взнати
}

let usersReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case CHANGE_FOLLOW: {
            const idx = state.usersData.findIndex((el) => el.id === action.id);
            let changeEll = {...state.usersData[idx], followed: !state.usersData[idx].followed}

            return {
                ...state,
                usersData: [
                    ...state.usersData.slice(0, idx),
                    changeEll,
                    ...state.usersData.slice(idx + 1)]
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: [...action.data]
            }
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.numbPage
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case BLOCKED_FOLLOWING: {
            return {
                ...state,
                blockFollow: action.isFetching
                    ? [...state.blockFollow, action.usersId]
                    : state.blockFollow.filter(el => el !== action.usersId)
            }
        }
        default:
            return state
    }
}


type ObserveSubType = { type: typeof CHANGE_FOLLOW, id: number }
export const observeSub = (id: number): ObserveSubType => ({type: CHANGE_FOLLOW, id})

type SetUsersType = { type: typeof SET_USERS, data: UserType }
export const setUsers = (data: UserType): SetUsersType => ({type: SET_USERS, data})

type ChangePageType = { type: typeof CHANGE_PAGE, numbPage: number }
export const changPage = (numbPage: number): ChangePageType => ({type: CHANGE_PAGE, numbPage})

type SetUsersCountType = { type: typeof SET_TOTAL_USERS, totalCount: number }
export const setUsersCount = (totalCount: number): SetUsersCountType => ({
    type: SET_TOTAL_USERS, totalCount
})

type ToggleChangType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleChang = (isFetching: boolean): ToggleChangType => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

type BlockFollowType = { type: typeof BLOCKED_FOLLOWING, usersId: number, isFetching: boolean }
export const blockFollowAC = (usersId: number, isFetching: boolean): BlockFollowType => ({
    type: BLOCKED_FOLLOWING, usersId, isFetching
})


export const getUsersThunkCreators = (pageSize: number, currentPage: number) => {
    return (dispatch: any) => {
        dispatch(toggleChang(true))
        usersAPI.getUsers(pageSize, currentPage)
            .then(response => {
                dispatch(toggleChang(false))
                dispatch(setUsersCount(response.totalCount))
                dispatch(setUsers(response.items))
            })
    }
}

export const changeFollowThunkCreators = (id: number, followed: boolean) => {
    return async (dispatch: any) => {
        dispatch(blockFollowAC(id, true))
        if (followed === true) {
            const response = await usersAPI.deleteFollow(id)
            if (response === 0) {
                dispatch(observeSub(id))
                dispatch(blockFollowAC(id, false))
            }
        } else {
            const response = await usersAPI.postFollow(id)
            if (response === 0) {
                dispatch(observeSub(id))
                dispatch(blockFollowAC(id, false))
            }
        }
    }
}


export default usersReducer