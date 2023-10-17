import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import './Card.css';


export default function Card() {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
    // console.log(products);
  }, [])

  return (
    <main className="card__main">
      <h1 style={{marginTop: '200px', color: 'black'}}>Card</h1>
      <section className="card__container">
        <article className="card__subcontainer">
          { products && (
            products.map(({ name, price, description, image }) => (
              <div className="card__individual">
                <h2>{name}</h2>
                <img className="card__image" src={image}/>
                <h3>{`R$ ${price}`}</h3>
                <p>{description}</p>
              </div>
            ))
          ) }
        </article>
      </section>
    </main>
  )
}