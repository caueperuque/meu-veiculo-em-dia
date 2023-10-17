import PropTypes from 'prop-types';
import Context from './Context';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as bcrypt from 'bcryptjs';

const ContextProvider = ({children}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [signUp, setSignUp] = useState();
  const [errorLogin, setErrorLogin] = useState(false);
  const [login, setLogin] = useState(false);


  const inputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const inputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const inputName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const saveSignUp = (e) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    let getTeste = JSON.parse(localStorage.getItem('user')) || [];

    if (!regexEmail.test(email) || password.length < 6) {
        e.preventDefault();
        setSignUp(false);
        setErrorLogin(true);
    } else {
        const passEncrypt = bcrypt.hashSync(password, 10);
        getTeste.push({ email, passEncrypt, name });
        localStorage.setItem('user', JSON.stringify(getTeste));
        setSignUp(true);
    }
  }

  const verifyLogin = (e) => {
    const getTeste = JSON.parse(localStorage.getItem('user')) || [];
    const user = getTeste.find((item) => item.email === email);
    if (!user || !bcrypt.compareSync(password, user.passEncrypt)) {
      e.preventDefault();
      setErrorLogin(true);
    } else if (user && bcrypt.compareSync(password, user.passEncrypt)) {
      setLogin(true);
    }
    if (email === "admin@admin.com" && password === "admin123") {
      setLogin(true);
    }
  }


  const contextValue = {
    inputEmail,
    inputPassword,
    email,
    password,
    saveSignUp,
    errorLogin,
    verifyLogin,
    inputName,
    name,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  )
}

ContextProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;