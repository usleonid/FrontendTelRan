export interface User {
    name: string,
    avatar: string
}

export interface UserStats {
    followers: number,
    following: number
}

export interface State {
    user: User,
    stats: Stats
}

export interface Action {
    type: string,
    payload: any
}

export type StatsType = 'followers' | 'following';