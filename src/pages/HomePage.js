import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  gap: 5px;
`;
function HomePage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:gabriel/login', form)
    .then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token)
    })
    .catch(error => {
      console.log(error);
    })
    // console.log(form);
  };

  return (
    <main>
      <Header />
      <h1>Página Inicial</h1>
      <Form onSubmit={submitForm}>
        <label htmlFor="email">Login</label>
        <input
          id="email"
          name="email"
          type="text"
          value={form.email}
          onChange={onChange}
          placeholder="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <button>Login</button>
      </Form>
    </main>
  );
}

export default HomePage;
