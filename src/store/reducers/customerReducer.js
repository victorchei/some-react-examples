const defaultState = {
  customers: [{
    name:'my',
    id: '0',
  }],
};

const ADD_CUSTOMER ='ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'DEl_LAST_CUSTOMER';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';


export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
		return {...state, customers: [...state.customers, ...action.payload] }
    case ADD_CUSTOMER:
		return {...state, customers: [...state.customers, action.payload] }
    case REMOVE_CUSTOMER:
		return {...state, customers: state.customers.filter(c => String(c.id) !== String(action.payload.id))}
    default:
      return state;
  }
};

export const addManyCustomersAction = (payload) => ({type:  ADD_MANY_CUSTOMERS, payload});
export const addCustomerAction = (payload) => ({type:  ADD_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type:  REMOVE_CUSTOMER, payload});