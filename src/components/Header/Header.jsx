import teste from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="header__container">
      <nav className="header__navbar">
        <img src={teste} className="header__logo"/>
        <h1 className="header__title">Meu Veículo em Dia</h1>
        <div className="header__btns">
          <button className="header__btn-sign">
            Criar Conta
          </button>
          <button className="header__btn-login">
            Login
          </button>
        </div>
      </nav>
    </header>
  )
}