import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './styles/Register.css';


export default function Register() {
  const getStorage = JSON.parse(localStorage.getItem('products'));
  const getLogin = JSON.parse(localStorage.getItem('login'));

  const nextId = getStorage ? getStorage.length + 1 : 1;

  const [formData, setFormData] = useState({
    id: nextId,
    name: "",
    price: "",
    description: "",
    descriptionDetailed: "",
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

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.description || !formData.image || !formData.descriptionDetailed) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Preencha todos os campos antes de cadastrar o produto.",
      });
      return;
    }

    const updatedFormData = {
      ...formData
    };
    const updatedProducts = [
      ...(getStorage || []),
      updatedFormData
    ];
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    Swal.fire({
      icon: "success",
      title: "Sucesso",
      text: "Produto cadastrado!",
    });

    setFormData({
      id: nextId + 1,
      name: "",
      price: "",
      description: "",
      descriptionDetailed: "",
      image: "",
      fantasyName: getLogin.fantasyName,
    });

    // window.location.href = "/home";
  };

  return (
    <main className="register__main">
      <form className="register__form">
        <h1 className="register__title">Cadastrar novo produto/serviço</h1>
        <label>
          <h3 style={{ color: "black" }}>Nome do Produto/Serviço:</h3>
          <input
            name="name"
            className="register__input"
            onChange={handleChange}
            value={formData.name}
          ></input>
        </label>
        <label>
          <h3 style={{ color: "black" }}>Preço:</h3>
          <input
            name="price"
            className="register__input"
            onChange={handleChange}
            value={formData.price}
          ></input>
        </label>
        <label>
          <h3 style={{ color: "black" }}>Descrição Prévia:</h3>
          <input
            name="description"
            className="register__input"
            onChange={handleChange}
            value={formData.description}
          ></input>
        </label>
        <label>
          <h3 style={{ color: "black" }}>Descrição Detalhada:</h3>
          <input
            name="descriptionDetailed"
            className="register__input"
            onChange={handleChange}
            value={formData.descriptionDetailed}
          ></input>
        </label>
        <label>
          <h3 style={{ color: "black" }}>Imagem:</h3>
          <input
            name="image"
            className="register__input"
            onChange={handleChange}
            value={formData.image}
          ></input>
        </label>
        <button onClick={handleAddProduct} className="register__btn">Cadastrar Produto</button>
        <Link to="/home">Voltar</Link>
      </form>
    </main>
  );
}
