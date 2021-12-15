type ActionType = {
    type: string
}

export const Toggle_Constant = 'Toggle-collapsed';

type StateType = {
    collapsed: boolean
}

//

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case Toggle_Constant:
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Bad action tyoe')
    }
    return state
}