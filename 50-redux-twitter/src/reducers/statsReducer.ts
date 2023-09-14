import { CHANGE_STATS } from '../actions/statsAction';
import { Action, StatsType, UserStats } from './../utils/types.d';

export const defaultStats = {
    followers: 0,
    following: 0
}

export const statsReducer = (state: UserStats = defaultStats, action: Action) => {
    switch (action.payload) {
        case CHANGE_STATS:
            const res = state[action.payload.statsType as StatsType] + action.payload.sum;
            return { ...state, [action.payload.statsType] : res >= 0 ? res : 0 }
        default:
            return state
    }
}