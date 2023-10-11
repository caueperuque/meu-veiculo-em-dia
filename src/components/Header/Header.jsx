import { useContext } from 'react';
import logo from '../../assets/logo.png';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';

export default function Header() {
  const { signIn } = useContext(Context);

  return (
    <header className="header__container">
      <nav className="header__navbar">
        <img src={logo} className="header__logo"/>
        <h1 className="header__title">Meu Veículo em Dia</h1>
        <div className="header__btns">
          <Link to="/signin" className="header__btn-sign">
            Criar Conta
          </Link>
          <button className="header__btn-login">
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}