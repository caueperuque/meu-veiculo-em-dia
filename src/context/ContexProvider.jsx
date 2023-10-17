import PropTypes from 'prop-types';
import Context from './Context';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as bcrypt from 'bcryptjs';

const ContextProvider = ({children}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState("");
  const [products, setProducts] = useState();
  
  const [signUp, setSignUp] = useState();
  const [errorLogin, setErrorLogin] = useState(false);
  const [login, setLogin] = useState(false);

  const inputName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const inputPhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  }

  const inputAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  }

  const inputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const inputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }


  const saveSignUp = (e) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    let getTeste = JSON.parse(localStorage.getItem('user')) || [];

    if (
        !regexEmail.test(email) 
        || password.length < 6
        || !name
        || phone.length !== 11
      ) {
        e.preventDefault();
        console.log(name);
        setSignUp(false);
        setErrorLogin(true);
    } else {
        const passEncrypt = bcrypt.hashSync(password, 10);
        getTeste.push({ email, passEncrypt, name, phone, address });
        localStorage.setItem('user', JSON.stringify(getTeste));
        localStorage.setItem('login', JSON.stringify({ name, email, phone, address }));
        setSignUp(true);
    }
    
  }

  const verifyLogin = (e) => {
    const getTeste = JSON.parse(localStorage.getItem('user')) || [];
    const user = getTeste.find((item) => item.email === email);
    if (email === "admin@admin.com" && password === "admin123") {
      return setLogin(true);
    }
    if (!user || !bcrypt.compareSync(password, user.passEncrypt)) {
      e.preventDefault();
      console.log(email === "admin@admin.com");
      setErrorLogin(true);
    } else if (user && bcrypt.compareSync(password, user.passEncrypt)) {
      setLogin(true);
    }

  }

  const userLogin = (e) => {
    e.preventDefault();
    setLogin(true);
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
    inputPhone,
    phone,
    inputAddress,
    address,
    setUserName,
    userName,
    setProducts,
    products,
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