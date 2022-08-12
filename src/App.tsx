import React, {useEffect, useState} from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емейл не має бути пустим');
    const [passwordError, setPasswordError] = useState('Пароль не має бути пустим');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(value).toLowerCase())) {
            setEmailError('Некоректний емейл');
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPassword(value);
        if(value.length < 3 || value.length > 8 ) {
            setPasswordError('Пароль має бути більше 3 і мекнеше 8');
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e:  React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true);
                break;
            case 'password' :
                setPasswordDirty(true);
                break;
        }
    }

  return (
    <div className='app'>
          <form>
              <h1>Регістрація</h1>
              {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
              <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email...' />
              {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
              <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Enter your password...' />
              <button disabled={!formValid} type='submit'>Registration</button>
          </form>
    </div>
  );
}

export default App;
