import { useAuthContext } from "../hooks";

export default function Dashboard() {
  const { user, logout } = useAuthContext();

  return (
    <div className="min-h-screen bg-gray-100">
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user?.name}!</p>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
