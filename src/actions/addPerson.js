const addPerson = (newPerson) => {
    return {
        type: 'ADD_PERSON',
        payload: {newPerson}
    }
}

export default addPerson