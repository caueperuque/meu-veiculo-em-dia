import CarouselComponent from "../components/Carousel/CarouselComponent";
import Header from "../components/Header/Header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // const myLocalStorage = localStorage.getItem('meuItem') || [];
    let myValuesStorage = JSON.parse(localStorage.getItem('user'));
    let products = JSON.parse(localStorage.getItem('products'));
    let login = JSON.parse(localStorage.getItem('login'));

    const objProducts = [
      {
        id: 1,
        name: 'Alinhamento',
        price: 60,
        description: 'Alinhamento computadorizado, por um preço preço justo!',
        image: 'https://www.veluplast.com.br/wp-content/uploads/2022/10/2022-11-21-alinhamento-3d.jpg',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 2,
        name: 'Balanceamento',
        price: 50,
        description: 'Venha fazer o balanceamento com a gente, usamos as tecnologias e equipamentos mais atuais do mercado!',
        image: 'https://dpaschoal.vteximg.com.br/arquivos/ids/157074-1000-1000/Balanceamento-De-Roda-Aco-9901124-01-Hires.jpg?v=637462445168700000',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 3,
        name: 'Pneus',
        price: 300,
        description: 'Temos pneus de melhor qualidade no mercado.',
        image: 'https://a-static.mlcdn.com.br/450x450/jogo-de-4-pneus-michelin-aro-15-ltx-force-205-70r15-96t/pneustore/mi10110077/947e2301502909b02e77571d49f06254.jpeg',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 4,
        name: 'Kit Pastilha de freio',
        price: 100,
        description: 'Kit com as 4 pastilhas de freio',
        image: 'https://a-static.mlcdn.com.br/450x450/kit-pastilha-freio-nissan-sentra-2007-a-2018-dianteiro-akebono-willtec/lojahipervarejo/cbaad2bbbd27d1dcdb4d55787e832e2b/979fd6b0ed6a32ef466f20e80f2931c9.jpg',
        fantasyName: 'Aurélio Auto Peças'
      },
      {
        id: 5,
        name: 'Filtro de ar',
        price: 51,
        description: 'Filtro de ar resistente e duradouro',
        image: 'https://8694.cdn.simplo7.net/static/8694/sku/filtros-filtro-de-ar-filtro-ar-motor-chevrolet-cruze-16v-1-4-wr150-wega-1619183945101.png',
        fantasyName: 'Zacarias Peças LTDA'
      },
      {
        id: 6,
        name: 'Parabrisa GOL',
        price: 700,
        description: 'Parabrisa VOLKSWAGEN GOL /Saveiro/Parati G2/G3/G4',
        image: 'https://pontualparabrisas.com.br/wp-content/uploads/2021/09/gol-800x802.jpg',
        fantasyName: 'Aurélio Auto Peças'
      },
      {
        id: 7,
        name: 'Parachoque Strada',
        price: 214,
        description: 'Parachoque Dianteiro Strada 2014/2020',
        image: 'https://connectparts.vteximg.com.br/arquivos/ids/663615-1000-1000/Para-Choque-Strada-Working-1416-Dianteiro-Cinza-connectparts--1-.jpg?v=636475627443830000',
        fantasyName: 'Irmãos Castros LTDA'
      },
      {
        id: 8,
        name: 'Calota Ford Ka',
        price: 45,
        description: 'Calota Grid Aro 14 Ford Modelo Ka 19/ Prata Cubo Baixo',
        image: 'https://m.media-amazon.com/images/I/61AumhP2GnL.__AC_SX300_SY300_QL70_ML2_.jpg',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 9,
        name: 'Farol nova S10',
        price: 653,
        description: 'FAROL NOVA S10 LTZ 2013 2014 2015 2016 PROJETOR LE FLY',
        image: 'https://www.ecompletocdn.com.br/i/fp/17/809536_1_1479052842.jpg',
        fantasyName: 'Prudente Distribuidora LTDA'
      },
      {
        id: 10,
        name: 'Porta Celta',
        price: 400,
        description: 'PORTA TRASEIRA DIREITA CELTA PRISMA 2006 A 2014 ORIGINAL',
        image: 'https://images.tcdn.com.br/img/img_prod/834811/porta_traseira_direita_celta_prisma_2006_a_2014_original_6367_1_ce347c30900833dffc08b6bfbbf34785.jpg',
        fantasyName: 'Fox Auto Peças'
      },
      {
        id: 11,
        name: 'Suspenção Corsa',
        price: 1150,
        description: 'Suspensão Regulável Slim Corsa Maxx KIT Completo',
        image: 'https://www.macaulay.com.br/img/produtos/Susp-Rosca-Slim-MACAULAY-kit-IT02-M1.jpg',
        fantasyName: 'Fox Auto Peças'
      },      
      {
        id: 12,
        name: 'Funilaria',
        price: 1200,
        description: 'Funilaria de qualidade é Hernani Funilaria! Orçamentos de 1200 reais',
        image: 'https://www.casadoalinhador.com/images/bl/pintura-e-funilaria-automotiva.jpg',
        fantasyName: 'Hernani Funelaria LTDA'
      }
    ]

    if (!myValuesStorage || !products || !login) {
        myValuesStorage = [];
        products = [];
        login = {};
    }
    const userExists = myValuesStorage.some(user => user.email === 'admin@admin.com');
    const productsExists = products.length > 0;
    if (!userExists || !productsExists || !login.name) {
        localStorage.setItem('user', JSON.stringify([...myValuesStorage, {email: 'admin@admin.com', passEncrypt: 'admin123'}]));
        localStorage.setItem('products', JSON.stringify([...products, ...objProducts ]));
        localStorage.setItem('login', JSON.stringify({name: 'Admin', email:'admin@admin.com', phone: '99999999999', address: 'Av. Tao Tao Distante', type: 'fornecedor' }));
    }
}, [])
  return (
    <main>
      <Header />
      <CarouselComponent />
    </main>
  )
}