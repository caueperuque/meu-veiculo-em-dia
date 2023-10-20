import CardOrders from "../components/CardOrders/CardOrders";
import MainHeader from "../components/MainHeader/MainHeader";
import './styles/Orders.css';

export default function Orders() {
  return(
    <main>
      <MainHeader />
      <h1 className="orders__title">Pedidos</h1>
      <CardOrders />
    </main>
  )
}