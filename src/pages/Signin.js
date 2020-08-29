import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [form, setForm] = useState({});
  const history = useHistory();

  useEffect(() => console.log(form), [form]);

  const handleFormSubmit = async () => {
    console.log("Sending request");
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signin",
        form
      );

      console.log("Response: ", response);

      const user = JSON.stringify(response.data);

      localStorage.setItem("line::user", user);
      localStorage.setItem("line::token", response.data.token);

      history.push("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div class="max-w mt-20 flex justify-center">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Usuário
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={form.email}
              onChange={event =>
                setForm({ ...form, email: event.target.value })
              }
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
              onChange={event =>
                setForm({ ...form, password: event.target.value })
              }
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleFormSubmit}
            >
              Log In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Esqueceu a senha?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
