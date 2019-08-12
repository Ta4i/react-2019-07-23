export const getUserId = (name, users) => {
	const user = Object.values(users).find(user => user.name === name)
	const id = (user) ? user.id : null

	return id
}