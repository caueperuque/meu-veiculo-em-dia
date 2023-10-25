import Header from "../components/Header/Header";
import whatsappIcon from '../assets/whatsapp.png'
import gitHubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import gitIcon from '../assets/git.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import viteIcon from '../assets/vite.png';
import cssIcon from '../assets/css.png';

import './styles/Contact.css';


export default function Contact() {
  return (
    <main>
      <Header />
      <section className="contact__main-container">
        <article>
          <h1 >Olá</h1>
          <h2>Esse site foi totalmente desenvolvido por mim (Cauê Peruque) 🙋</h2>
          <h2>Com ideias geradas por meu colega (Luca César)</h2>
          <h2>Espero que tenham gostado do resultado, foi um projeto um tanto desafiador,</h2>
          <h2>tanto pelas funcionalidades quanto o design.</h2>
          <h2>Estarei deixando meus meios de contato, caso se interesse pode mandar uma mensagem,</h2>
          <h2>Irei responder com o maior prazer do mundo.</h2>
        </article>
        <article className="contact__container-images">
          <div>
            <h1 style={{marginBottom: '20px'}}>Contato:</h1>
            <div className="contact__subcontainer-images">
              <a href="https://wa.me/+18996640040" target="_blank">
                <img className="contact__icons"  src={whatsappIcon} alt="WhatsApp Button" />
              </a>
              <a  href="https://github.com/caueperuque" target="_blank">
                <img className="contact__icons" src={gitHubIcon} alt="GitHub Button" />
              </a>
              <a  href="https://www.linkedin.com/in/caueperuque/" target="_blank">
                <img className="contact__icons" src={linkedinIcon} alt="LinkedIn Button" />
              </a>
            </div>
          </div>
        </article>
        <article className="contact__container-images">
          <div>
            <h1>Tecnologias Utilizadas:</h1>
            <div className="contact__subcontainer-tech">
              <img className="contact__icons" src={reactIcon} alt="" />
              <img className="contact__icons" src={jsIcon} alt="" />
              <img className="contact__icons" src={htmlIcon} alt="" />
              <img className="contact__icons" src={cssIcon} alt="" />
              <img className="contact__icons" src={gitIcon} alt="" />
              <img className="contact__icons" src={viteIcon} alt="" />
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}