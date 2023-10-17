import { useContext } from 'react';
import './styles/SignUp.css';
import Context from '../context/Context';
import { Link } from 'react-router-dom';

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
  } = useContext(Context);

  return (
    <main className="signup__main">
      <div className="signup__container">
        <form className="signup__form">
          <div>
            <h1 className="signup__title">Criar Conta</h1>
            <h3 className="signup__slogan">Falta pouco para deixar seu veículo em dia!</h3>
          </div>
          <div className="signup__container-fields">
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
            <label htmlFor="address">
              <h3>Endereço: </h3>
              <input
                id="address"
                className="signup__input-name"
                placeholder="ex: Av. Ademar de Barros"
                onChange={inputAddress}
                value={address}
              >
              </input>
            </label>
            
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