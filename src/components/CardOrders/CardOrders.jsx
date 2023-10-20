import { Link } from "react-router-dom";
import './CardOrders.css'

export default function CardOrders() {
  const getOrders = JSON.parse(localStorage.getItem('requests')) || [];

  const getUser = JSON.parse(localStorage.getItem('login'));

  const orderFiltered = getOrders.filter((order) => order.idUser === getUser.id);

  const { street, number, state, city } = getUser

  console.log(orderFiltered);

  return (
    <div className="cardOrders__container">
      {orderFiltered.length > 0 ? (
        orderFiltered.map((order, index) => (
          <div key={index} className="cardOrders__card">
              <h3 style={{color: "black"}}>Pedido: #{order.order}</h3>
              <h3 style={{color: "black"}}>Nome do Produto/Serviço: {order.name}</h3>
              <h3 style={{color: "black"}}>Forma de pagamento: {order.payment} </h3>
              <h3 style={{color: "black"}}>Endereço: {street} nº{number}, {city} - {state}</h3>
              <h3 style={{color: "black"}}>Status: <span id="status">Finalizado</span></h3>
          </div>
        ))
      ) : (
        <h1 style={{color: "black", padding: "50px"}}>Nenhum pedido feito</h1>
      )}
      <Link to="/home" className="cardOrders__btn">Voltar</Link>
    </div>
  );
}
