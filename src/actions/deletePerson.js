const deletePerson = (index) => {
    return{
        type: 'DELETE_PERSON',
        payload: {index}
    }
}

export default deletePerson