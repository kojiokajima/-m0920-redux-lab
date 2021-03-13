const initState = [
    {
        id: Math.random(), // not really unique but good enough here!
        name: 'William',
        age: Math.floor( Math.random() * 40 )
    },
]

const personReducer = (state = initState, action) => {
    // console.log('state: ', state)
    // console.log('action: ', action)
    // console.log('action.type: ', action.type)
    // console.log('action.payload: ', action.payload)

    const newState = [...state]
    // console.log('newState: ', [...state])

    if (action.type === 'ADD_PERSON') {
        newState.push(action.payload.newPerson)
        // console.log('RETURED STATE: ', newState)
        return newState

    } else if(action.type === 'DELETE_PERSON') {
        newState.splice(action.payload.index, 1)
        return newState
    } else {
        return state
    }
}

export default personReducer