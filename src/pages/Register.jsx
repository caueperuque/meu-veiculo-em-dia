import { Link } from "react-router-dom";

export default function Register() {
  const getStorage = JSON.parse(localStorage.getItem('products'));
  const getLogin = JSON.parse(localStorage.getItem('login'));



  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    fantasyName: getLogin.fantasyName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData
    };
    const updatedProducts = [
      ...getStorage,
      updatedFormData
    ];
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <main>
      <form>
        <label>
          <h3 style={{color: "black"}}>Nome do Produto/Serviço:</h3>
          <input
            name="name"
            onChange={handleChange}
            value={formData.name}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: "black"}}>Preço:</h3>
          <input
            name="price"
            onChange={handleChange}
            value={formData.price}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: "black"}}>Descrição:</h3>
          <input
            name="description"
            onChange={handleChange}
            value={formData.description}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: "black"}}>Imagem:</h3>
          <input
            name="image"
            onChange={handleChange}
            value={formData.image}
          >
          </input>
        </label>
        <button onClick={handleClick}>
          Cadastrar Produto
        </button>
        <Link to="/home">
          Voltar
        </Link>
      </form>
    </main>
  )
}