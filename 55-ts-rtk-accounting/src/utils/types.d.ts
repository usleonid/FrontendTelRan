export enum UpdateMode {
    default = '',
    editUser = 'editUser',
    changePassword = 'changePassword'
}

export interface UserRegister {
    firstName: string,
    lastName: string,
    login: string,
    password: string
}

export interface UserProfile {
    firstName: string,
    lastName: string,
    login: string,
    roles: string[]
}