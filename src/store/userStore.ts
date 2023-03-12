import { IUser, IRole } from '@interfaces/IUser'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
	const role = ref<IRole>()
	const username = ref<IUser['name']>(undefined)
	const isAuth = ref<boolean>(false)

	function setUser(payload: IUser) {
		role.value = payload.role
		username.value = payload.name
		isAuth.value = !!payload.password
	}
	function logout() {
		role.value = undefined
		username.value = undefined
		isAuth.value = false
	}

	return { role, username, isAuth, setUser, logout }
})
