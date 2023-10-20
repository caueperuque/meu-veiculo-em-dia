import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import './styles/ProductDetails.css';
import MainHeader from "../components/MainHeader/MainHeader";

export default function ProductDetails() {
  const { id } = useParams();

  const getProduct = JSON.parse(localStorage.getItem('products')).find((product) => product.id === Number(id));

  const getUser = JSON.parse(localStorage.getItem('login'))

  const numRequest = Math.floor(Math.random() * 10000);
  

  const handleClick = (e) => {
    e.preventDefault();

    const requestStorage = JSON.parse(localStorage.getItem('requests')) || [];

    const userRequest = requestStorage.find((request) => request.user === getUser.name)

    const payments = [
      "Pix",
      "Cartão de Crédito",
      "Cartão de Débito",
      "Na hora da entrega"
    ]

    if (userRequest && userRequest.order === numRequest) {
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
      idUser: getUser.id,
      order: numRequest,
      payment: payments[Math.floor(Math.random() * 4)]
    }

    localStorage.setItem('requests', JSON.stringify([...requestStorage, myRequest]))
    return;
  }
  
  return (
    <main className="productDetails__main">
      <MainHeader />
      <div className="productDetails__title">
        <h1>{getProduct.name}</h1>
        <h2>{`Fornecido por ${getProduct.fantasyName}`}</h2>
      </div>
      <div className="productDetails__container">
        <div className="productDetails__container-image">
          <img className="productDetails__image" src={getProduct.image}/>
        </div>
        <hr className="productDetails__bar"/>
        <div className="productDetails__container-about">
          <div>
            <h2>Descrição:</h2>
          <h3 className="productDetails__description">{getProduct.descriptionDetailed}</h3>
          </div>
          <div className="productDetails__finish">
            <h2 className="productDetails__price">Preço: {`R$ ${getProduct.price},00`}</h2>
            <button onClick={handleClick} className="productDetails__btn">
              <h2>Fazer pedido</h2>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
