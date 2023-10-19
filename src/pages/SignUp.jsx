import { useContext, useEffect } from 'react';
import './styles/SignUp.css';
import Context from '../context/Context';
import { Link } from 'react-router-dom';
import cep from 'cep-promise';

export default function SignUp() {
  const {
    inputEmail,
    inputPassword,
    email,
    password,
    saveSignUp,
    errorLogin,
    inputName,
    name,
    inputPhone,
    phone,
    inputAddress,
    address,
    inputType,
    type,
    inputCep,
    cepp,
    setState,
    state,
    city,
    setCity,
    street,
    setStreet,
    number,
    inputNumber,
    inputCityDefault,
    cityDefault,
    inputCnpj,
    cnpj,
    fantasyName,
    inputFantasyName,
    inputCpf,
    cpf
  } = useContext(Context);

  const ufs = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO"
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cep(cepp);
        setState(data.state);
        setCity(data.city);
        setStreet(data.street);        
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [cepp]);

  return (
    <main className="signup__main">
      <div className="signup__container">
        <form className="signup__form">
          <div>
            <h1 className="signup__title">Criar Conta</h1>
            <h3 className="signup__slogan">Falta pouco para deixar seu veículo em dia!</h3>
          </div>
          <div className="signup__container-fields">
              <label>
                <h3>Qual seu perfil:</h3>
                <select className="signup__select" onClick={inputType}>
                  <option value="cliente">Cliente</option>
                  <option value="fornecedor" onClick={inputType}>Fornecedor</option>
                </select>
              </label>
            <label htmlFor="name">
              <h3>Nome Completo: </h3>
              <input
                id="name"
                className="signup__input-name"
                placeholder="ex: Renato Augusto"
                onChange={inputName}
                value={name}
              >
              </input>
            </label>
            <label htmlFor="phone">
              <h3>Celular: </h3>
              <input
                id="phone"
                className="signup__input-name"
                placeholder="ex: 18998876654"
                onChange={inputPhone}
                value={phone}
              >
              </input>
            </label>
            <label>
              <h3>CEP:</h3>
              <input
                className="signup__input-name"
                placeholder="ex: 12345678"
                onChange={inputCep}
                value={cepp}
                maxLength={8}
              >
              </input>
            </label>
            <label>
              <h3>UF:</h3>
              <select className="signup__select uf">
              <option value={state ? state : ''}>{state ? state : ''}</option>
                { ufs.filter((uf) => uf !== state).map((uf) => (
                  <option value={uf} key={Math.random}>{uf}</option>
                )) }
              </select>
            </label>
            <label htmlFor="city">
              <h3>Cidade: </h3>
              <input
                id="city"
                className="signup__input-name"
                placeholder="ex: Av. Ademar de Barros"
                onChange={inputCityDefault}
                value={city ? city : cityDefault}
              >
              </input>
            </label>
            <label htmlFor="address">
              <h3>Endereço: </h3>
              <input
                id="address"
                className="signup__input-name"
                placeholder="ex: Av. Ademar de Barros"
                onChange={inputAddress}
                value={street ? street : address}
              >
              </input>
            </label>
            <label htmlFor="number">
              <h3>Número: </h3>
              <input
                id="number"
                className="signup__input-name"
                placeholder="ex: 668"
                maxLength={4}
                onChange={inputNumber}
                value={number}
              >
              </input>
            </label>
            <label htmlFor="complement">
              <h3>Complemento: </h3>
              <input
                id="complement"
                className="signup__input-name"
                placeholder="ex: Apto 801, bloco B"
              >
              </input>
            </label>

            { type === 'fornecedor' ?
              (
                <div>
                  <label htmlFor="cnpj">
                    <h3>CNPJ:</h3>
                    <input
                      id="cnpj"
                      className="signup__input-name"
                      placeholder="xxxxxxxxxxxxxx"
                      maxLength={14}
                      onChange={inputCnpj}
                      value={cnpj}
                    >
                    </input>
                  </label>
                  <label>
                    <h3>Razão Social</h3>
                    <input
                      className="signup__input-name"
                      placeholder="Zacarias Peças LTDA"
                      value={fantasyName}
                      onChange={inputFantasyName}
                    >
                    </input>
                  </label>
                </div>
              )
              : (
                <label htmlFor="cpf">
                  <h3>CPF:</h3>
                  <input
                    id="cpf"
                    className="signup__input-name"
                    placeholder="xxxxxxxxxxx"
                    maxLength={11}
                    value={cpf}
                    onChange={inputCpf}
                  >
                  
                  </input>
                </label>
              )
            }
            
            <label htmlFor="email">
              <h3>Email: </h3>
              <input
                id="email"
                className="signup__input-email" 
                type="text"
                onChange={inputEmail}
                value={email}
                placeholder='exemplo@exemplo.com'
              />
            </label>
            <label htmlFor="password">
              <h3>Senha:</h3>
              <input
                id="password"
                className="signup__input-password"
                type="password"
                onChange={inputPassword}
                value={password}
                placeholder='Mínimo 6 caracteres'
              />
            </label>
          </div>
          <Link to="/home" className="signup__btn" type="submit" onClick={saveSignUp}>
            Cadastrar
          </Link>
          { errorLogin && <p className="signup__error">Preencha os campos corretamente!</p> }
        </form>
      </div>
    </main>
  )
}