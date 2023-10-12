import { useContext } from 'react';
import logo from '../../assets/logo.png';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';

export default function Header() {
  // const { signUp } = useContext(Context);

  return (
    <header className="header__container">
      <nav className="header__navbar">
        <img src={logo} className="header__logo"/>
        <h1 className="header__title">Meu Veículo em Dia</h1>
        <div className="header__btns">
          <Link to="/signup" className="header__btn-signup">
            Criar Conta
          </Link>
          <Link to="/login" className="header__btn-login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}