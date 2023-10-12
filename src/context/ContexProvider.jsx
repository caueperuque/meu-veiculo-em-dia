import PropTypes from 'prop-types';
import Context from './Context';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as bcrypt from 'bcryptjs';

const ContextProvider = ({children}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signIn, setSignIn] = useState();
  const [errorLogin, setErrorLogin] = useState(false);


  const inputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const inputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const saveSignIn = (e) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (regexEmail.test(email) && password.length > 6) {
      setSignIn(true);
      const passEncrypt = bcrypt.hashSync(password, 10);
      localStorage.setItem('user', JSON.stringify({ email, passEncrypt }));
    } else {
      e.preventDefault();
      console.log('Email ou senha inválidos');
      setSignIn(false);
      setErrorLogin(true);
    }
  }

  const contextValue = {
    inputEmail,
    inputPassword,
    email,
    password,
    saveSignIn,
    errorLogin,
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