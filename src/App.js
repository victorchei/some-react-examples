import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({type:"ADD_CASH", payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash});
  }

  return (
    <div>   
      <p>{cash}</p>  
          <button onClick={() => addCash(Number(prompt()))}>Пововнить</button>
          <button onClick={() => getCash(Number(prompt()))}>Зняти гроші</button>
    </div>
  );
}

export default App;
