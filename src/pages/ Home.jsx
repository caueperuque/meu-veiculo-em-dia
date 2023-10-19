import CarouselComponent from "../components/Carousel/CarouselComponent";
import Header from "../components/Header/Header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // const myLocalStorage = localStorage.getItem('meuItem') || [];
    let myValuesStorage = JSON.parse(localStorage.getItem('user'));
    let products = JSON.parse(localStorage.getItem('products'));
    let login = JSON.parse(localStorage.getItem('login'));

    if (!myValuesStorage || !products || !login) {
        myValuesStorage = [];
        products = [];
        login = {};
    }
    const userExists = myValuesStorage.some(user => user.email === 'admin@admin.com');
    const productsExists = products.length > 0;
    if (!userExists || !productsExists || !login.name) {
        localStorage.setItem('user', JSON.stringify([...myValuesStorage, {email: 'admin@admin.com', passEncrypt: 'admin123'}]));
        localStorage.setItem('products', JSON.stringify([...products, {name: 'Cadeira Gamer', price: 1200, description: 'Cadeira Gamer', image: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-hrtc-bl023.jpg', fantasyName: 'Zacarias Peças LTDA'}, {name: 'Cadeira Gamer', price: 1200, description: 'Cadeira Gamer', image: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-hrtc-bl023.jpg', fantasyName: 'Zacarias Peças LTDA'}, {name: 'Cadeira Gamer', price: 1200, description: 'Cadeira Gamer', image: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-hrtc-bl023.jpg', fantasyName: 'Zacarias Peças LTDA'}, {name: 'Cadeira Gamer', price: 1200, description: 'Cadeira Gamer', image: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-hrtc-bl023.jpg', fantasyName: 'Zacarias Peças LTDA'}]));
        localStorage.setItem('login', JSON.stringify({name: 'Admin', email:'admin@admin.com', phone: '99999999999', address: 'Av. Tao Tao Distante' }));
    }
}, [])
  return (
    <main>
      <Header />
      <CarouselComponent />
    </main>
  )
}