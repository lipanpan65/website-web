const tokenAdmin = "adminToken"

export const setToken = (value) => sessionStorage.setItem(tokenAdmin, value)

export const getToken = (value) => sessionStorage.getItem(value)