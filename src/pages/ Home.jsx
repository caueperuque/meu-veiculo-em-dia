import CarouselComponent from "../components/Carousel/CarouselComponent";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";

export default function Home() {
  return (
    <main>
      <Header />
      <CarouselComponent />
    </main>
  )
}