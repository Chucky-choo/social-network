import {GitHubAPI, usersAPI} from "../API/UsersAPI";
import {photosDataType} from "./header-reducer";


const CHANGE_FOLLOW = "my_app/users/CHANGE-FOLLOW"
const SET_USERS = "my_app/users/SET-USERS"
const CHANGE_PAGE = "my_app/users/CHANGE-PAGE"
const SET_TOTAL_USERS = "my_app/users/SET-TOTAL-USERS"
const TOGGLE_IS_FETCHING = "my_app/users/TOGGLE_IS_FETCHING"
const BLOCKED_FOLLOWING = 'my_app/users/BLOCKED_FOLLOWING'
const FILTER_USER_DATA = 'FILTER_USER_DATA'

const initialState = {
	usersData: [],
	totalCount: 0,
	pageSize: 25,
	currentPage: 1,
	term: '',
	friend: '',
	isFetching: false,
	blockFollow: [],

}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_FOLLOW: {
			const idx = state.usersData.findIndex((el) => el.id === action.id);
			const changeEll = {...state.usersData[idx], followed: !state.usersData[idx].followed}

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
				usersData: action.items
			}
		}
		case CHANGE_PAGE: {
			return {...state, currentPage: action.numbPage}
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
		case FILTER_USER_DATA: {
			return {
				...state, friend: action.friend, term: action.term,
				pageSize: action.pageSize
			}
		}
		default:
			return state
	}
}


export const observeSub = (id) => ({type: CHANGE_FOLLOW, id})

export const setUsers = (items) => ({type: SET_USERS, items})

export const changPage = (numbPage) => ({type: CHANGE_PAGE, numbPage})
export const setUsersCount = (totalCount) => ({type: SET_TOTAL_USERS, totalCount})
export const toggleChang = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const filterUsersData = (term, pageSize) => ({type: FILTER_USER_DATA, term, pageSize})


export const getUsersThunkCreators = (currentPage, pageSize, term) => {
	return (dispatch) => {
		dispatch(toggleChang(true))
		dispatch(filterUsersData(term, pageSize));
		dispatch(changPage(currentPage))
		GitHubAPI.getUsers(currentPage, pageSize, term)
			.then(response => {
				dispatch(setUsersCount(response.total_count))
				dispatch(setUsers(response.items))
				dispatch(toggleChang(false))
			})
	}
}

export default usersReducer