import { useAuthContext } from "../hooks";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuthContext();
  
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo, {user?.name}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate("/properties")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg"
          >
            Ver Imóveis
          </button>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
