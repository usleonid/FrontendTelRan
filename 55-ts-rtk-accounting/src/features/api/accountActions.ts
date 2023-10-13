import { AppDispatch, RootState, store } from "../../app/store"
import { baseUrl, createToken } from "../../utils/constants"
import { UserRegister } from "../../utils/types"
import { putToken } from "../slices/tokenSlice"
import { putUser } from "../slices/userSlice"

export const registerUser = (user: UserRegister) => {
        return async (dispatch: AppDispatch) => {
            try {
            const response = await fetch(`${baseUrl}/user`, {
                method: 'Post',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status != 200) {
                throw new Error(`wrong response from server (${response.status})`)
            }
            const data = await response.json();
            dispatch(putUser(data));
            dispatch(putToken(createToken(user.login, user.password)));
        } catch (e: any) {
            alert(e.message)
        }
    }
}

export const fetchUser = (token: string) => {
    
        return async (dispatch: AppDispatch) => {
            try {
            const response = await fetch (`${baseUrl}/login`, {
                method: 'Post',
                headers: {
                    Authorization: token
                }
            });
            if (!response.ok) {
                throw new Error(`wrong response from server (${response.status})`)
            }
            const data = await response.json();
            dispatch(putUser(data));
            dispatch(putToken(token));
        } catch (e: any) {
            alert(e.message)
        }
    }
}

export const updateUser = (firstName: string, lastName: string) => {
    return async (dispatch: AppDispatch, getState: typeof store.getState) => {
        try {
            const response = await fetch (`${baseUrl}/user`, {
                method: 'Put',
                body: JSON.stringify({
                    firstName,
                    lastName
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getState().token
                }
            })
            if (!response.ok) {
                throw new Error(`wrong response from server (${response.status})`)
            }
            const data = await response.json();
            dispatch(putUser(data));
        } catch (e: any) {
            alert(e.message)
        }
    }
}

export const changePassword = (newPassword: string) => {
    return async (dispatch: AppDispatch, getState: typeof store.getState) => {
        try {
            const response = await fetch (`${baseUrl}/user/password`, {
                method: 'Put',
                headers: {
                    Authorization: getState().token,
                    'X-Password': newPassword
                }
            })
            if (!response.ok) {
                throw new Error(`wrong response from server (${response.status})`)
            }
            dispatch(putToken(createToken(getState().user.login, newPassword)));
        } catch (e: any) {
            alert(e.message)
        }
    }
}