import { AuthProvider } from "./hooks/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <h1>Sistema de Imóveis</h1>
      </div>
    </AuthProvider>
  );
}

export default App;
