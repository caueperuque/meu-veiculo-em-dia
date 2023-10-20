import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import './Card.css';
import { Link } from "react-router-dom";

export default function Card() {
  const { products, setProducts } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, []);

  const filteredProducts = products
  ? products
      .filter((product) => {
        const productName = (product.name || '').toLowerCase(); // Verifique se name está definido
        const fantasyName = (product.fantasyName || '').toLowerCase(); // Verifique se fantasyName está definido
        const query = searchQuery.toLowerCase();

        return productName.includes(query) || fantasyName.includes(query);
      })
      .sort((a, b) => {
        if (filter === 'maisCaro') {
          return Number(b.price) - Number(a.price);
        }

        if (filter === 'maisBarato') {
          return Number(a.price) - Number(b.price);
        }

        return 0;
      })
  : [];

  

  return (
    <main className="card__main">
      <h1 className="card__title">Produtos e Serviços</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Pesquise pelo produto ou nome do fornecedor"
        className="card__input-search"
      />
      <div className="card__filter">
        <label className="card__label-filter">
          <input
            className="card__radio-filter"
            type="radio"
            value=""
            checked={filter === ''}
            onChange={() => setFilter('')}
          />
          <h6 style={{color: 'black'}}>Todos</h6>
        </label>
        <label className="card__label-filter">
          <input
            className="card__radio-filter"
            type="radio"
            value="maisCaro"
            checked={filter === 'maisCaro'}
            onChange={() => setFilter('maisCaro')}
          />
          <h6 style={{color: 'black'}}>Mais Caro</h6>
        </label>
        <label className="card__label-filter">
          <input
            className="card__radio-filter"
            type="radio"
            value="maisBarato"
            checked={filter === 'maisBarato'}
            onChange={() => setFilter('maisBarato')}
          />
          <h6 style={{color: 'black'}}>Mais Barato</h6>
        </label>
      </div>
      <section className="card__container">
        <article className="card__subcontainer">
          {filteredProducts.map(({ id, name, price, description, image, fantasyName }) => (
            <div className="card__individual" key={Math.random()}>
              <h3>{`Fornecido por: ${fantasyName}`}</h3>
              <div className="card__container-image">
                <h2>{name}</h2>
                <img className="card__image" src={image} alt={name} />
              </div>
              <h3>{`R$ ${price}`}</h3>
              <p>{description}</p>
              <Link to={`/details/${id}`} className="card__btn">
                Adquirir
              </Link>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
