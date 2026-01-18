import { useState } from "react";
import { useAuthContext } from "../hooks";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");

  const { register, loading } = useAuthContext();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(email, password, name, cellphone);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Registrar
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Registrando..." : "Registrar"}
          </button>
          <p className="text-center mt-4 text-gray-600">
            Já tem conta?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Faça login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
