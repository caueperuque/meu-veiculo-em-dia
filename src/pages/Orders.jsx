import CardOrders from "../components/CardOrders/CardOrders"
import MainHeader from "../components/MainHeader/MainHeader"

export default function Orders() {
  return(
    <main>
      <MainHeader />
      <h1 style={{color: 'black', marginTop: '200px', textAlign: 'center'}}>Pedidos</h1>
      <CardOrders />
    </main>
  )
}