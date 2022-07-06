import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type:"ADD_CASH", payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash});
  }

  const addCustomer = (name) => {
    const id = new Date().getTime();
    dispatch(addCustomerAction({name, id}));
  }

  const getCustomer = ({target}) => {
    const id = target.closest('p').id;
    console.log(id);
    dispatch(removeCustomerAction({id}));
  }

  return (
          <>
              <div>
                <p>{cash}</p>  
                    <button onClick={() => addCash(Number(prompt()))}>Пововнить</button>
                    <button onClick={() => getCash(Number(prompt()))}>Зняти гроші</button>
                    <br/>
                    <br/>
                    <button onClick={() => addCustomer(prompt())}>Добавити меседж</button>                    
              </div>
              {customers.length > 0 ?
                <div>
                  {customers.map(c => <p key={c.id} id={c.id}>{c.name}<button onClick={getCustomer}>-</button></p>)}
                </div>
                :
                <div>emply list</div>
              }
          </>);
}

export default App;
