import { addManyCustomersAction } from "../store/reducers/customerReducer"

export const fetchCustomewrs = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json)))
    }
};