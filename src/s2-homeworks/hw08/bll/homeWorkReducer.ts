import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
               return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            }
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}
