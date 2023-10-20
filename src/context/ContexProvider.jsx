import PropTypes from 'prop-types';
import Context from './Context';
import { useState, useEffect } from 'react';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const ContextProvider = ({ children }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [userName, setUserName] = useState("");
  const [products, setProducts] = useState();
  const [type, setType] = useState("cliente");
  const [cepp, setCep] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [cityDefault, setCityDefault] = useState();
  const [cnpj, setCnpj] = useState();
  const [fantasyName, setFantasyName] = useState();
  const [cpf, setCpf] = useState();
  const [existEmail, setExistEmail] = useState();

  const [signUp, setSignUp] = useState();
  const [errorLogin, setErrorLogin] = useState(false);
  const [login, setLogin] = useState(false);

  const inputCityDefault = (e) => {
    e.preventDefault();
    setCityDefault(e.target.value);
  };

  const inputFantasyName = (e) => {
    e.preventDefault();
    setFantasyName(e.target.value);
  };

  const inputCnpj = (e) => {
    e.preventDefault();
    setCnpj(e.target.value);
  };

  const inputCpf = (e) => {
    e.preventDefault();
    setCpf(e.target.value);
  };

  const inputNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const inputCep = (e) => {
    e.preventDefault();
    setCep(e.target.value);
  };

  const inputType = (e) => {
    setType(e.target.value);
  };

  const inputName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const inputPhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const inputAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const inputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const inputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkEmailExists = (email) => {
    const users = JSON.parse(localStorage.getItem('user')) || [];
    return users.some((user) => user.email === email);
  };

  const saveSignUp = (e) => {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    let getTeste = JSON.parse(localStorage.getItem('user')) || [];

    const emailExists = checkEmailExists(email);

    if (type === "fornecedor") {
      if (
        !regexEmail.test(email) ||
        String(password).length < 6 ||
        !password ||
        !name ||
        !phone ||
        String(phone).length !== 11 ||
        !city ||
        !state ||
        !number ||
        !cepp ||
        !cnpj ||
        !fantasyName ||
        emailExists
      ) {
        e.preventDefault();
        setSignUp(false);
        setErrorLogin(true);
        return;
      }
    }

    if (type === "cliente") {
      if (
        !regexEmail.test(email) ||
        String(password).length < 6 ||
        !password ||
        !name ||
        !phone ||
        phone.length !== 11 ||
        !city ||
        !state ||
        !number ||
        !cepp ||
        !cpf ||
        emailExists
      ) {
        e.preventDefault();
        setSignUp(false);
        setErrorLogin(true);
        return;
      }
    }

    const id = uuidv4();
    const passEncrypt = bcrypt.hashSync(password, 10);
    getTeste.push({
      id,
      email,
      passEncrypt,
      name,
      phone,
      address,
      city,
      state,
      number,
      cepp,
      type,
    });
    localStorage.setItem('user', JSON.stringify(getTeste));
    localStorage.setItem(
      'login',
      JSON.stringify({ id, name, email, phone, address, street, city, state, number, cepp, type, fantasyName })
    );
    setSignUp(true);
    setUserName(name); // Atualize o nome do usuário no contexto
  };

  const verifyLogin = (e) => {
    // e.preventDefault();
    const getTeste = JSON.parse(localStorage.getItem('user')) || [];
    const user = getTeste.find((item) => item.email === email);
    console.log(user);

    if (email === "admin@admin.com" && password === "admin123") {
      return setLogin(true);
    }
    if (!user || !bcrypt.compareSync(password, user.passEncrypt)) {
      e.preventDefault();
      setErrorLogin(true);
    } else if (user && bcrypt.compareSync(password, user.passEncrypt)) {
      localStorage.setItem(
        'login',
        JSON.stringify(user)
      );
      setUserName(user.name); // Atualize o nome do usuário no contexto
      setLogin(true);
    }
  };

  const userLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

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
    type,
    inputType,
    cepp,
    inputCep,
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    number,
    inputNumber,
    inputCityDefault,
    cityDefault,
    cnpj,
    inputCnpj,
    fantasyName,
    inputFantasyName,
    cpf,
    inputCpf,
  };

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    if (login) {
      const splitName = login.name.split(" ");
      setUserName(splitName[0]);
    }
  }, []); // Certifique-se de atualizar o nome do usuário ao montar o componente

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
