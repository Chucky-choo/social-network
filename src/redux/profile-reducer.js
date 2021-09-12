import {GitHubAPI, statusApi, usersAPI} from "../API/UsersAPI";
import {photosDataType, ProfileUserType, setPhotoAuthUser, setUsersAcauntAC} from "./header-reducer";
import {initializedTC} from "./app-reducer";


const SET_USERS_PROFILE = "profile/SET_USERS_PROFILE"
const CHANGE_STATUS = 'profile/CHANGE_STATUS'
export const CHANGE_PHOTO_PROFILE = 'profile/CHANGE_PHOTO_PROFILE'
const LOADING_PROFILE = 'profile/LOADING_PROFILE'

const initialState = {
	profileUserData: {
		avatar_url: "https://avatars.githubusercontent.com/u/72217414?v=4",
		bio: null,
		blog: "",
		company: null,
		created_at: "2020-10-01T16:10:15Z",
		email: null,
		events_url: "https://api.github.com/users/Chucky-choo/events{/privacy}",
		followers: 0,
		followers_url: "https://api.github.com/users/Chucky-choo/followers",
		following: 0,
		following_url: "https://api.github.com/users/Chucky-choo/following{/other_user}",
		gists_url: "https://api.github.com/users/Chucky-choo/gists{/gist_id}",
		gravatar_id: "",
		hireable: null,
		html_url: "https://github.com/Chucky-choo",
		id: 72217414,
		location: null,
		login: "Chucky-choo",
		name: "Pavlo Kavulych",
		node_id: "MDQ6VXNlcjcyMjE3NDE0",
		organizations_url: "https://api.github.com/users/Chucky-choo/orgs",
		public_gists: 0,
		public_repos: 2,
		received_events_url: "https://api.github.com/users/Chucky-choo/received_events",
		repos_url: "https://api.github.com/users/Chucky-choo/repos",
		site_admin: false,
		starred_url: "https://api.github.com/users/Chucky-choo/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/Chucky-choo/subscriptions",
		twitter_username: null,
		type: "User",
		updated_at: "2021-09-09T10:15:06Z",
		url: "https://api.github.com/users/Chucky-choo",
	},
	isLoading: false,
	statusValue: "Test 1",
}

const profileReducer = (state = initialState, action) => {
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
			return {...state, profileUserData: {...state.profileUserData, avatar_url: action.photo}}
		}
		case LOADING_PROFILE: {
			return {...state, isLoading: action.status}
		}

		default:
			return state
	}
}

export const setUsersProfile = (data) => ({
	type: SET_USERS_PROFILE,
	profileUserData: {...data}
})


const setLoading = (status) => ({type: LOADING_PROFILE, status})


export const getProfileThunkKreator = (login) => {
	return async (dispatch) => {
		dispatch(setLoading(true))
		let response = await GitHubAPI.getProfile(login)
		dispatch(setUsersProfile(response.data))
		dispatch(setLoading(false))
	}
}

export const putPhoto = (photoFile) => {
	return async (dispatch) => {
		const reader = new FileReader()
		reader.readAsDataURL(photoFile)
		reader.onload = ev => {
			dispatch(setPhotoAuthUser(ev.target.result))
		}
	}
}


export default profileReducer