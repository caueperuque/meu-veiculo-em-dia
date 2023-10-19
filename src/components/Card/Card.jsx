import { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import './Card.css';

export default function Card() {
  const { products, setProducts } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')));
  }, []);

  const filteredProducts = products ? products
  .filter((product) => {
    const productName = product.name.toLowerCase();
    const fantasyName = product.fantasyName.toLowerCase();
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
  }) : [];

  

  return (
    <main className="card__main">
      <h1 style={{marginTop: '200px', color: 'black'}}>Produtos</h1>
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
          {filteredProducts.map(({ name, price, description, image, fantasyName }) => (
            <div className="card__individual">
              <h3>{`Fornecido por: ${fantasyName}`}</h3>
              <h2>{name}</h2>
              <img className="card__image" src={image} alt={name} />
              <h3>{`R$ ${price}`}</h3>
              <p>{description}</p>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}
