import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {

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
          <Link to="/contact" className="header__btn-login">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}