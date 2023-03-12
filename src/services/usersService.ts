import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_APP_ENDPOINT

interface IFormData {
	username: string
	password: string
}

export const UsersService = {
	async authUser(formData: IFormData) {
		try {
			const response = await axios.get(`/users?user=${formData.username}`)

			return response.data.length > 0 &&
				formData.password == response.data[0].password
				? response.data[0]
				: 'Неверный логин/пароль'
		} catch (error: any) {
			return error.message
		}
	},
}
