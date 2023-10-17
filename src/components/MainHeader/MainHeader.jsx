import './MainHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';



export default function MainHeader() {
  return (
    <header className="header__container">
      <nav className="header__navbar">
        <img src={logo} className="header__logo"/>
        <h1 className="header__title">Meu Veículo em Dia</h1>
        <div className="header__btns">
          <Link to="/signup" className="header__btn-signup">
            teste
          </Link>
          <Link to="/login" className="header__btn-login">
            teste
          </Link>
        </div>
      </nav>
    </header>
  )
}