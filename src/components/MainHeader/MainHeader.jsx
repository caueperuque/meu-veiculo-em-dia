import './MainHeader.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useContext, useEffect } from 'react';
import Context from '../../context/Context';



export default function MainHeader() {
  const { userName, setUserName } = useContext(Context)
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    const splitName = login.name.split(" ");
    setUserName(splitName[0]);
  })
  return (
    <header className="header__container">
      <nav className="header__navbar">
        <h3 className="header__welcome">{`Bem vindo, ${userName} !`}</h3>
        <img src={logo} className="header__logo"/>
        <h1 className="header__title">Meu Veículo em Dia</h1>
        <div className="header__btns">
          <Link to="/register" className="header__btn-signup">
            teste
          </Link>
          <Link to="/register" className="header__btn-login">
            Cadastrar Produto
          </Link>
        </div>
      </nav>
    </header>
  )
}