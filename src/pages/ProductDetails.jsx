import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProductDetails() {
  const { id } = useParams();

  const getProduct = JSON.parse(localStorage.getItem('products')).find((product) => product.id === Number(id));

  const getUser = JSON.parse(localStorage.getItem('login'))

  const numRequest = Math.floor(Math.random() * 10000);
  

  const handleClick = (e) => {
    e.preventDefault();

    const requestStorage = JSON.parse(localStorage.getItem('requests')) || [];

    const userRequest = requestStorage.find((request) => request.user === getUser.name)

    
    if (userRequest && userRequest.order === numRequest) {
      console.log(userRequest.order, numRequest);
      Swal.fire({
        icon: "info",
        title: 'Pedido já feito!',
        text: `Pedido #${numRequest} já foi realizado!`,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: 'Pedido realizado!',
      text: `Pedido realizado #${numRequest}`,
    });
    const myRequest = {
      ...getProduct,
      user: getUser.name,
      order: numRequest
    }

    localStorage.setItem('requests', JSON.stringify([...requestStorage, myRequest]))
    return;
  }
  
  return (
    <div>
      <h1 style={{color: 'black'}}>{getProduct.name}</h1>
      <h2 style={{color: 'black'}}>{`Fornecido por ${getProduct.fantasyName}`}</h2>
      <img src={getProduct.image}/>
      <h3 style={{color: 'black'}}>{getProduct.descriptionDetailed}</h3>
      <p style={{color: 'black'}}>Preço: {`R$ ${getProduct.price},00`}</p>
      <button onClick={handleClick}>
        <h2>Fazer pedido</h2>
      </button>
    </div>
  )
}
