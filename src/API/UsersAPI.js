import * as axios from "axios";

// const instance = axios.create({
// 	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
// 	headers: {"API-KEY": "a188b859-d862-4f7b-90ec-f9559f88989b"},
// 	withCredentials: true,
// });


// export const usersAPI = {
// 	// async getUsers(pageSize = 25, currentPage = 1, term = '', friend = '') {
// 	// 	const response = await instance
// 	// 		.get(`users?count=${pageSize}&page=${currentPage}&term=${term}&friend=${friend}`)
// 	// 	return response.data
// 	// },
//
// 	async getProfile(userId) {
// 		return await instance.get(`profile/` + userId)
// 	},
//
// 	async postFollow(id) {
// 		const response = await instance.post(`follow/` + id, {})
// 		return response.data.resultCode
// 	},
//
// 	async deleteFollow(id) {
// 		const response = await instance.delete(`follow/` + id)
// 		return response.data.resultCode
// 	},
//
// 	async getAuthMe() {
// 		return await instance.get(`auth/me`)
// 	},
//
// 	async putProfilePhoto(photoFile) {
// 		const formData = new FormData();
// 		formData.append("image", photoFile);
// 		let res = await instance.put('profile/photo', formData, {
// 			headers: {
// 				'Content-Type': 'multipart/form-data'
// 			}
// 		})
// 		return res.data
// 	},
// 	async putProfile(obg) {
// 		let res = await instance.put(`profile`, {...obg})
// 		return res.data
// 	}
// }

// export const statusApi = {
// 	async putStatus(status) {
// 		let res = await instance.put(`profile/status`, {status})
// 		return res.data
// 	},
//
// 	async getStatus(userId) {
// 		return await instance.get(`profile/status/` + userId)
// 	}
// }
//
// export const authAPI = {
// 	async authLogin(login) {
// 		const response = await instance.post(`auth/login`, {...login})
// 		return response.data
// 	},
//
// 	async deleteLogin() {
// 		let response = await instance.delete(`auth/login`)
// 		return response.data
// 	},

	// async tryRegister(tryRegisterData) {
	// 	let response = await instance.post(`Auth/Auth/TryRegister`, {...tryRegisterData})
	// 	return response.data
	// }
// }

// export const captchaAPI = {
// 	async getCaptcha() {
// 		const res = await instance.get(`security/get-captcha-url`)
// 		return res.data
// 	}
// }


// const instanceGit = axios.create({
// 	baseURL: `https://api.github.com/`,
// 	headers: {"token ": "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"},
// 	// withCredentials: true,
// });


// gitHub tokem: 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

export const GitHubAPI = {
	async getUsers(currentPage = 1, per_page = 25, term = '',) {
		const response = await axios.get(`https://api.github.com/search/users?q=${term}&per_page=${per_page}&page=${currentPage}`)
		return response.data
	},

	async getProfile(login) {
		debugger
		return await axios.get(`https://api.github.com/users/` + login)
	},
}