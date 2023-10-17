import CarouselComponent from "../components/Carousel/CarouselComponent";
import Header from "../components/Header/Header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // const myLocalStorage = localStorage.getItem('meuItem') || [];
    let myValuesStorage = JSON.parse(localStorage.getItem('user'));
    if (!myValuesStorage) {
        myValuesStorage = [];
    }
    const userExists = myValuesStorage.some(user => user.email === 'admin@admin.com');
    if (!userExists) {
        localStorage.setItem('user', JSON.stringify([...myValuesStorage, {email: 'admin@admin.com', passEncrypt: 'admin123'}]));
    }
}, [])
  return (
    <main>
      <Header />
      <CarouselComponent />
    </main>
  )
}