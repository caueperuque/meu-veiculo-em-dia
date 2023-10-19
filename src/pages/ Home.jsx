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
        descriptionDetailed: `O alinhamento é um procedimento essencial para manter a segurança e o conforto do seu carro. Com o tempo, o alinhamento do seu carro pode se desajustar, o que pode causar desgaste prematuro dos pneus, perda de controle do veículo e até mesmo acidentes.

        A Stock Car Auto Center oferece um serviço de alinhamento computadorizado de alta qualidade, realizado com equipamentos de última geração. Nossos profissionais são altamente qualificados e experientes, e estão sempre prontos para atender às suas necessidades.
        
        Vantagens do alinhamento computadorizado:
        
        Melhora a dirigibilidade do carro: O alinhamento correto ajuda a manter o carro estável na estrada, mesmo em curvas e manobras.
        Aumenta a vida útil dos pneus: Um alinhamento correto reduz o desgaste prematuro dos pneus, economizando dinheiro.
        Reduz o consumo de combustível: Um carro alinhado corretamente usa menos combustível, pois não precisa trabalhar tanto para manter o controle.
        Garante a segurança do motorista e dos passageiros: Um carro alinhado corretamente é mais seguro, pois diminui o risco de acidentes.
        Agende seu alinhamento computadorizado na Stock Car Auto Center hoje mesmo e garanta a segurança e o conforto do seu carro.`,
        image: 'https://www.veluplast.com.br/wp-content/uploads/2022/10/2022-11-21-alinhamento-3d.jpg',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 2,
        name: 'Balanceamento',
        price: 50,
        description: 'Venha fazer o balanceamento com a gente, usamos as tecnologias e equipamentos mais atuais do mercado!',
        descriptionDetailed: `O balanceamento é um procedimento essencial para manter o conforto e a segurança do seu carro. Com o tempo, o balanceamento dos pneus pode ficar desregulado, o que pode causar desgaste prematuro dos pneus, vibrações no volante e até mesmo acidentes.

        A Stock Car Auto Center oferece um serviço de balanceamento computadorizado de alta qualidade, realizado com equipamentos de última geração. Nossos profissionais são altamente qualificados e experientes, e estão sempre prontos para atender às suas necessidades.
        
        Vantagens do balanceamento computadorizado:
        
        Melhora o conforto do carro: O balanceamento correto ajuda a eliminar as vibrações no volante, tornando a condução mais agradável.
        Aumenta a vida útil dos pneus: Um balanceamento correto reduz o desgaste prematuro dos pneus, economizando dinheiro.
        Garante a segurança do motorista e dos passageiros: Um carro balanceado corretamente é mais seguro, pois diminui o risco de acidentes.
        Agende seu balanceamento computadorizado na Stock Car Auto Center hoje mesmo e mantenha o conforto e a segurança do seu carro.`,
        image: 'https://dpaschoal.vteximg.com.br/arquivos/ids/157074-1000-1000/Balanceamento-De-Roda-Aco-9901124-01-Hires.jpg?v=637462445168700000',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 3,
        name: 'Pneus',
        price: 300,
        description: 'Temos pneus de melhor qualidade no mercado.',
        descriptionDetailed: `Pneus aro 13/14/15 todos pelos mesmos valores. O chefe ficou maluco!
          Medidas:
          
          Aro 13:

          175/70 R13
          185/70 R13
          155/80 R13
          165/70 R13
          195/60 R13
          
          Aro 14:

          185/65 R14
          195/70 R14
          205/60 R14
          185/60 R14
          215/65 R14

          Aro 15:

          195/65 R15
          205/60 R15
          215/70 R15
          225/60 R15
          185/55 R15

          (valor unitário)
        `,
        image: 'https://a-static.mlcdn.com.br/450x450/jogo-de-4-pneus-michelin-aro-15-ltx-force-205-70r15-96t/pneustore/mi10110077/947e2301502909b02e77571d49f06254.jpeg',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 4,
        name: 'Kit Pastilha de freio',
        price: 100,
        description: 'Kit com as 4 pastilhas de freio',
        descriptionDetailed: `Este kit de pastilhas de freio é uma escolha segura e confiável para manter o sistema de freios do seu veículo em perfeitas condições. Composto por quatro pastilhas de freio de alta qualidade, este conjunto é projetado para garantir uma frenagem eficaz e suave.

        Características Principais:
        
        Desempenho Confiável: As pastilhas de freio são fabricadas com materiais de qualidade que proporcionam um excelente desempenho de frenagem, garantindo a segurança durante a condução.
        
        Durabilidade: Este kit é construído para resistir ao desgaste diário, prolongando a vida útil das pastilhas e reduzindo a necessidade de manutenção frequente.
        
        Frenagem Silenciosa: O design especial das pastilhas minimiza o ruído e as vibrações durante a frenagem, proporcionando uma experiência de direção mais tranquila.
        
        Compatibilidade Universal: Este kit é compatível com uma ampla variedade de veículos, tornando-o uma escolha versátil para proprietários de carros, caminhões e utilitários esportivos.
        
        Instalação Fácil: A instalação destas pastilhas é simples e direta, o que economiza tempo e dinheiro em custos de mão de obra.
        
        Este kit com 4 pastilhas de freio é a escolha ideal para motoristas que buscam qualidade, durabilidade e segurança em suas frenagens. Mantenha a sua tranquilidade na estrada com este conjunto confiável de pastilhas de freio. Seu veículo e sua segurança merecem o melhor.`,
        image: 'https://a-static.mlcdn.com.br/450x450/kit-pastilha-freio-nissan-sentra-2007-a-2018-dianteiro-akebono-willtec/lojahipervarejo/cbaad2bbbd27d1dcdb4d55787e832e2b/979fd6b0ed6a32ef466f20e80f2931c9.jpg',
        fantasyName: 'Aurélio Auto Peças'
      },
      {
        id: 5,
        name: 'Filtro de ar',
        price: 51,
        description: 'Filtro de ar resistente e duradouro',
        descriptionDetailed: `Este filtro de ar é projetado para maximizar o desempenho do seu veículo, permitindo uma entrada de ar mais limpa e eficiente. Fabricado com materiais de qualidade e tecnologia avançada, este filtro oferece uma série de benefícios para o seu motor.

        Recursos Destacados:
        
        Eficiência Aumentada: Com a capacidade de filtrar partículas minúsculas do ar, este filtro mantém o motor funcionando suavemente, reduzindo o desgaste e prolongando sua vida útil.
        
        Melhora na Resposta do Acelerador: O aumento do fluxo de ar proporciona uma resposta mais rápida do acelerador, resultando em uma condução mais ágil e emocionante.
        
        Economia de Combustível: Ao otimizar a mistura ar/combustível, este filtro ajuda a economizar combustível e reduzir as emissões, tornando-o amigo do meio ambiente.
        
        Fácil Instalação: A substituição do filtro de ar é simples e direta, não exigindo ferramentas especiais ou habilidades mecânicas avançadas.
        
        Design Durável: Construído para resistir às condições mais exigentes, este filtro mantém seu desempenho mesmo em ambientes adversos.
        
        Melhore o desempenho do seu veículo e proteja o seu motor com este filtro de ar de alto desempenho. Desfrute de uma condução suave, uma economia de combustível aprimorada e uma resposta ágil do acelerador com este componente de qualidade. Seu veículo merece o melhor, e este filtro oferece precisamente isso.`,
        image: 'https://8694.cdn.simplo7.net/static/8694/sku/filtros-filtro-de-ar-filtro-ar-motor-chevrolet-cruze-16v-1-4-wr150-wega-1619183945101.png',
        fantasyName: 'Zacarias Peças LTDA'
      },
      {
        id: 6,
        name: 'Parabrisa GOL',
        price: 700,
        description: 'Parabrisa Premium VOLKSWAGEN GOL',
        descriptionDetailed: `Este parabrisa foi projetado sob medida para o Volkswagen Gol, oferecendo uma solução de reposição confiável e de alta qualidade. Se você precisa substituir o parabrisa danificado do seu veículo, este produto é a escolha ideal.

        Recursos Destacados:
        
        Compatibilidade Perfeita: Este parabrisa é especificamente projetado para se encaixar perfeitamente no seu Volkswagen Gol, garantindo uma instalação simples e sem problemas.
        
        Qualidade Premium: Fabricado com vidro de alta qualidade, este parabrisa oferece resistência excepcional a impactos, durabilidade e clareza óptica para garantir uma visibilidade nítida.
        
        Segurança Aprimorada: Um parabrisa em boas condições é crucial para a segurança no trânsito, ajudando a manter a estrutura do veículo e a eficácia dos sistemas de airbag.
        
        Instalação Profissional: Recomendamos a instalação profissional por um mecânico qualificado para garantir um ajuste perfeito e a vedação adequada.
        
        Garantia de Satisfação: Com este parabrisa, você pode ter a confiança de que seu veículo estará equipado com um componente que atende aos padrões mais rigorosos de qualidade.
        
        Substituir o parabrisa do seu Volkswagen Gol por este produto confiável é a garantia de uma visão clara da estrada e da segurança do veículo. Conte com a compatibilidade perfeita e a qualidade superior deste parabrisa para manter o seu Gol em ótimas condições.`,
        image: 'https://pontualparabrisas.com.br/wp-content/uploads/2021/09/gol-800x802.jpg',
        fantasyName: 'Aurélio Auto Peças'
      },
      {
        id: 7,
        name: 'Parachoque Strada',
        price: 214,
        description: 'Parachoque Dianteiro Strada 2014/2020',
        descriptionDetailed: `Este para-choque dianteiro é uma escolha excepcional para a reposição ou upgrade do seu Fiat Strada. Desenvolvido com foco na durabilidade e na estética, este componente se encaixa perfeitamente no seu veículo, garantindo uma combinação de funcionalidade e estilo.

        Recursos Destacados:
        
        Design Específico: Este para-choque foi projetado exclusivamente para o Fiat Strada, proporcionando um ajuste perfeito sem a necessidade de modificações.
        
        Construção Durável: Fabricado com materiais de alta qualidade, este para-choque é resistente a impactos e às condições rodoviárias adversas, garantindo uma longa vida útil.
        
        Proteção Aprimorada: Além de aprimorar a aparência do veículo, o para-choque desempenha um papel crucial na absorção de impactos e na proteção de componentes críticos do veículo.
        
        Estilo Moderno: O design combina forma e função, acrescentando um toque de estilo ao visual do seu Fiat Strada.
        
        Instalação Descomplicada: Compatível com os pontos de fixação originais, a instalação é rápida e sem complicações.
        
        Garantia de Qualidade: Este para-choque atende a padrões rigorosos de qualidade e é apoiado por uma garantia de satisfação.
        
        Atualize o visual e a proteção do seu Fiat Strada com este para-choque dianteiro de alta qualidade. Compatível e projetado sob medida, este produto proporcionará uma combinação excepcional de funcionalidade e estilo para o seu veículo.`,
        image: 'https://connectparts.vteximg.com.br/arquivos/ids/663615-1000-1000/Para-Choque-Strada-Working-1416-Dianteiro-Cinza-connectparts--1-.jpg?v=636475627443830000',
        fantasyName: 'Irmãos Castros LTDA'
      },
      {
        id: 8,
        name: 'Calota Ford Ka',
        price: 45,
        description: 'Calotas Grid Aro 14 Ford Modelo Ka 19/ Prata Cubo Baixo',
        descriptionDetailed: `Esta calota é uma escolha excepcional para a reposição ou upgrade do seu Ford Ka. Desenvolvida com foco na durabilidade e na estética, esta peça se encaixa perfeitamente no seu veículo, garantindo uma combinação de funcionalidade e estilo.

        Recursos destacados:
        
        Design específico: Esta calota foi projetada exclusivamente para o Ford Ka, proporcionando um ajuste perfeito sem a necessidade de modificações.
        Construção durável: Fabricada com materiais de alta qualidade, esta calota é resistente a impactos e às condições climáticas adversas, garantindo uma longa vida útil.
        Proteção aprimorada: Além de aprimorar a aparência do veículo, a calota desempenha um papel crucial na proteção das rodas contra danos causados por impactos e arranhões.
        Estilo moderno: O design combina forma e função, acrescentando um toque de estilo ao visual do seu Ford Ka.
        Instalação descomplicada: Compatível com os pontos de fixação originais, a instalação é rápida e sem complicações.
        Atualize o visual e a proteção do seu Ford Ka com esta calota de alta qualidade. Compatível e projetada sob medida, esta peça proporcionará uma combinação excepcional de funcionalidade e estilo para o seu veículo.`,
        image: 'https://m.media-amazon.com/images/I/61AumhP2GnL.__AC_SX300_SY300_QL70_ML2_.jpg',
        fantasyName: 'StockCar AutoCenter'
      },
      {
        id: 9,
        name: 'Farol nova S10',
        price: 653,
        description: 'FAROL NOVA S10 LTZ 2013 2014 2015 2016 PROJETOR LE FLY',
        descriptionDetailed: `Este farol é uma escolha excepcional para a reposição ou upgrade do seu Chevrolet S10. Desenvolvido com foco na segurança e na estética, este componente se encaixa perfeitamente no seu veículo, garantindo uma combinação de funcionalidade e estilo.

        Recursos destacados:
        
        Tecnologia LED: Oferece uma iluminação mais eficiente e de maior alcance, proporcionando maior segurança e conforto para o motorista.
        Design moderno: O design combina forma e função, acrescentando um toque de estilo ao visual do seu Chevrolet S10.
        Construção durável: Fabricado com materiais de alta qualidade, este farol é resistente a impactos e às condições climáticas adversas, garantindo uma longa vida útil.
        Instalação descomplicada: Compatível com os pontos de fixação originais, a instalação é rápida e sem complicações.
        Atualize a iluminação e o visual do seu Chevrolet S10 com este farol de alta qualidade. Compatível e projetado sob medida, este produto proporcionará uma combinação excepcional de funcionalidade e estilo para o seu veículo.`,
        image: 'https://www.ecompletocdn.com.br/i/fp/17/809536_1_1479052842.jpg',
        fantasyName: 'Prudente Distribuidora LTDA'
      },
      {
        id: 10,
        name: 'Porta Celta',
        price: 400,
        description: 'PORTA TRASEIRA DIREITA CELTA PRISMA 2006 A 2014 ORIGINAL',
        descriptionDetailed: `Esta porta traseira é uma escolha excepcional para a reposição ou upgrade do seu Celta/Prisma. Desenvolvida com foco na durabilidade e na estética, esta peça se encaixa perfeitamente no seu veículo, garantindo uma combinação de funcionalidade e estilo.

        Recursos destacados:
        
        Design específico: Esta porta foi projetada exclusivamente para o Celta/Prisma, proporcionando um ajuste perfeito sem a necessidade de modificações.
        Construção durável: Fabricada com materiais de alta qualidade, esta porta é resistente a impactos e às condições climáticas adversas, garantindo uma longa vida útil.
        Proteção aprimorada: Além de aprimorar a aparência do veículo, a porta desempenha um papel crucial na proteção dos ocupantes e do conteúdo do porta-malas contra danos causados por impactos e arranhões.
        Estilo moderno: O design combina forma e função, acrescentando um toque de estilo ao visual do seu Celta/Prisma.
        Instalação descomplicada: Compatível com os pontos de fixação originais, a instalação é rápida e sem complicações.`,
        image: 'https://images.tcdn.com.br/img/img_prod/834811/porta_traseira_direita_celta_prisma_2006_a_2014_original_6367_1_ce347c30900833dffc08b6bfbbf34785.jpg',
        fantasyName: 'Fox Auto Peças'
      },
      {
        id: 11,
        name: 'Suspenção Corsa',
        price: 1150,
        description: 'Suspensão Regulável Slim Corsa Maxx KIT Completo',
        descriptionDetailed: `A suspensão é um dos componentes mais importantes do seu carro, pois é responsável por garantir a estabilidade, o conforto e a segurança do veículo. Com o tempo, a suspensão do seu Corsa pode se desgastar e precisar ser reparada ou substituída.

        Esta suspensão é uma ótima opção para quem procura melhorar o desempenho e o conforto do seu Corsa. Fabricada com materiais de alta qualidade, esta suspensão é resistente a impactos e às condições climáticas adversas, garantindo uma longa vida útil.
        
        Recursos destacados:
        
        Melhor desempenho: A suspensão nova melhora a estabilidade e a manobrabilidade do seu Corsa, tornando-o mais seguro e prazeroso de dirigir.
        Maior conforto: A suspensão nova reduz o impacto das irregularidades da estrada, proporcionando um passeio mais confortável.
        Longa vida útil: Fabricada com materiais de alta qualidade, esta suspensão é resistente a impactos e às condições climáticas adversas, garantindo uma longa vida útil.`,
        image: 'https://www.macaulay.com.br/img/produtos/Susp-Rosca-Slim-MACAULAY-kit-IT02-M1.jpg',
        fantasyName: 'Fox Auto Peças'
      },      
      {
        id: 12,
        name: 'Funilaria',
        price: 1200,
        description: 'Funilaria de qualidade é Hernani Funilaria! Orçamentos de 1200 reais',
        descriptionDetailed: `A Hernani Funilaria é uma empresa especializada em funilaria e pintura automotiva, com mais de 20 anos de experiência. Oferecemos uma ampla gama de serviços para todos os tipos de veículos, desde pequenos reparos até grandes restaurações.

        Nossos serviços incluem:
        
        Reparos de colisão
        Pintura de veículos
        Reparos de carroceria
        Reparos de para-choques
        Reparos de peças plásticas
        Pintura de rodas
        Pintura de peças cromadas
        Polimento`,
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