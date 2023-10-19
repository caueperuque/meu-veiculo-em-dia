import { Link } from "react-router-dom";

export default function CardOrders() {
  const getOrders = JSON.parse(localStorage.getItem('requests'));

  const getUser = JSON.parse(localStorage.getItem('login'));

  const orderFiltered = getOrders.filter((order) => order.user === getUser.name);

  const { street, number, state, city } = getUser

  console.log(orderFiltered);

  return (
    <div>
      {getOrders ? (
        orderFiltered.map((order, index) => (
          <div key={index}>
              <h3 style={{color: "black"}}>Pedido: #{order.order}</h3>
              <h3 style={{color: "black"}}>Nome do Produto/Serviço: {order.name}</h3>
              <h3 style={{color: "black"}}>Endereço: {street} nº{number}, {city} - {state}</h3>
              <h3 style={{color: "black"}}>Status: Finalizado</h3>
          </div>
        ))
      ) : (
        <h1 style={{color: "black"}}>Nenhum pedido feito</h1>
      )}
      <Link to="/home">Voltar</Link>
    </div>
  );
}
