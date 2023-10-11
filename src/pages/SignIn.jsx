import './styles/SignIn.css';

export default function SignIn() {
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
            <input id="email" className="signin__input-email" type="text" />
          </label>
          <label htmlFor="password">
            <h3>Senha:</h3>
            <input id="password" className="signin__input-password" type="password" />
          </label>
        </div>
        <button className="signin__btn" type="submit">Cadastrar</button>
      </form>
    </main>
  )
}