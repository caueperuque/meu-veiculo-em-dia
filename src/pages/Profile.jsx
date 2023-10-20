import { useState } from "react"
import { Link } from "react-router-dom";
import './styles/Profile.css';
import Swal from "sweetalert2";


export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cepp: "",
    street: "",
    number: "",
    city: "",
    state: ""
  });

  const getStorage = JSON.parse(localStorage.getItem('login'));
  const { id, name: names, cepp, city, email, number, phone, state, street, type, passEncrypt } = getStorage;
  const ufs = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(passEncrypt);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      passEncrypt,
    }));
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...getStorage,
      ...formData
    };
    Object.keys(updatedFormData).forEach((key) => {
      if (updatedFormData[key] === "") {
        updatedFormData[key] = getStorage[key];
      }
    });


    Swal.fire({
      icon: "success",
      title: "Edição realizada!",
      text: "As alterações foram salvas com sucesso!"
    })

    setFormData({
      name: "",
      phone: "",
      email: "",
      cepp: "",
      street: "",
      number: "",
      city: "",
      state: ""
    })
    const getUserById = JSON.parse(localStorage.getItem('user'));
    const teste = getUserById.filter((user) => user.id !== id);
    console.log(teste);
    localStorage.setItem('user', JSON.stringify([...teste, updatedFormData]))
    localStorage.setItem('login', JSON.stringify(updatedFormData));
  };
  
  // $2a$10$CGfu0mfTyVyF3T6w4IyI2OC3Na3T8CnD4Uq3yPHHiARJxl2lAZ9BK
  

  return (
    <main className="profile__main">
      <form className="profile__form">
        <h1>Editar perfil</h1>
        <label>
          <h2>Nome:</h2>
          <input
            className="profile__input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={names}
          >
          </input>
        </label>
        <label>
          <h2>Celular:</h2>
          <input
            className="profile__input"
            placeholder={phone}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          >
          </input>
        </label>
        <label>
          <h3>Email:</h3>
          <input
            className="profile__input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={email}
          >
          </input>
        </label>
        <label>
          <h3>Cep:</h3>
          <input
            className="profile__input"
            name="cepp"
            value={formData.cepp}
            onChange={handleChange}
            placeholder={cepp}
          >
          </input>
        </label>
        <label>
          <h3>Endereço:</h3>
          <input
            className="profile__input"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder={street}
          >
          </input>
        </label>
        <label>
          <h3>Número:</h3>
          <input
            className="profile__input"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder={number}
          >
          </input>
        </label>
        <label>
          <h3>Cidade:</h3>
          <input
            className="profile__input"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder={city}
          >
          </input>
        </label>
        <label>
          <h3>UF:</h3>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="profile__select"
          >
            <option value={state}>{state}</option>
            { ufs.filter((uf) => uf !== state).map((uf) => (
                  <option value={uf} key={Math.random}>{uf}</option>
                )) }
          </select>
        </label>
        <button className="profile__btn" onClick={handleClick}>
          Editar
        </button>
        <Link to="/home">
          Voltar
        </Link>
      </form>
    </main>
  )
}
