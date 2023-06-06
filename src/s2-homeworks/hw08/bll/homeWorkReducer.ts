import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
    switch (action.type) {
        case 'sort': { // by name

            return [...state].sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return action.payload === 'up' ? -1 : 1;
                }
                if (nameA > nameB) {
                    return action.payload === 'up' ? 1 : -1;
                }
                return 0;
            });

        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
