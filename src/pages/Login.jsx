import { Link } from 'react-router-dom';
import Context from '../context/Context';
import { useContext } from 'react';

export default function Login() {
  const {
    inputEmail,
    inputPassword,
    email,
    password,
    verifyLogin,
    errorLogin,
  } = useContext(Context);


  return (
    <main className="signup__main">
      <div className="signup__container">
        <form className="signup__form">
          <div>
            <h1 className="signup__title">Login</h1>
          </div>
          <div className="signup__container-fields">
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
          <Link to="/home" className="signup__btn" type="submit" onClick={verifyLogin}>
            Entrar
          </Link>
          { errorLogin && <p className="signup__error">Email ou senha inválidos</p> }
        </form>
      </div>
    </main>
  );
}