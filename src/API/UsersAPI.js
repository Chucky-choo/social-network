import * as axios from "axios";

// const instance = axios.create({
// 	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
// 	headers: {"API-KEY": "a188b859-d862-4f7b-90ec-f9559f88989b"},
// 	withCredentials: true,
// });



// gitHub tokem: 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

export const GitHubAPI = {
	async getUsers(currentPage = 1, per_page = 25, term = '',) {
		const response = await axios.get(`https://api.github.com/search/users?q=${term}&per_page=${per_page}&page=${currentPage}`)
		return response.data
	},

	async getProfile(login) {
		return await axios.get(`https://api.github.com/users/` + login)
	},
}