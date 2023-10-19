import { useContext, useState } from "react"
import Context from "../context/Context"
import { Link } from "react-router-dom";

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
  const { name: names, cepp, city, email, number, phone, state, street, type } = getStorage;
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  const handleClick = (e) => {
    // e.preventDefault();
    const updatedFormData = {
      ...getStorage,
      ...formData
    };
    Object.keys(updatedFormData).forEach((key) => {
      if (updatedFormData[key] === "") {
        updatedFormData[key] = getStorage[key];
      }
    });
    localStorage.setItem('login', JSON.stringify(updatedFormData));
  };
  
  

  return (
    <main>
      <form>
        <label>
          <h2 style={{color: 'black'}}>Nome:</h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={names}
          >
          </input>
        </label>
        <label>
          <h2 style={{color: 'black'}}>Celular:</h2>
          <input
            placeholder={phone}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: 'black'}}>Email:</h3>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={email}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: 'black'}}>Cep:</h3>
          <input
            name="cepp"
            value={formData.cepp}
            onChange={handleChange}
            placeholder={cepp}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: 'black'}}>Endereço:</h3>
          <input
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder={street}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: 'black'}}>Número:</h3>
          <input
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder={number}
          >
          </input>
        </label>
        <label>
          <h3 style={{color: 'black'}}>Cidade:</h3>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder={city}
          >
          </input>
        </label>
        <label>
          <h2 style={{color: 'black'}}>UF:</h2>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value={state}>{state}</option>
            { ufs.filter((uf) => uf !== state).map((uf) => (
                  <option value={uf} key={Math.random}>{uf}</option>
                )) }
          </select>
        </label>
        <button onClick={handleClick}>
          Editar
        </button>
        <Link to="/home">
          Voltar
        </Link>
      </form>
    </main>
  )
}
