import { useContext } from 'react';
import './styles/SignIn.css';
import Context from '../context/Context';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const {
    inputEmail,
    inputPassword,
    email,
    password,
    saveSignIn,
    errorLogin,
  } = useContext(Context);

  return (
    <main className="signin__container">
      <form className="signin__form">
        <div>
          <h1 className="signin__title">Criar Conta</h1>
          <h3 className="signin__slogan">Falta pouco para deixar seu veículo em dia!</h3>
        </div>
        <div className="signin__container-fields">
          <label htmlFor="email">
            <h3>Email: </h3>
            <input
              id="email"
              className="signin__input-email" 
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
              className="signin__input-password"
              type="password"
              onChange={inputPassword}
              value={password}
              placeholder='Mínimo 6 caracteres'
            />
          </label>
        </div>
        <Link to="/home" className="signin__btn" type="submit" onClick={saveSignIn}>
          Cadastrar
        </Link>
        { errorLogin && <p className="signin__error">Preencha os campos corretamente</p> }
      </form>
    </main>
  )
}