import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { propertyService } from "../services/api";
import type { Property } from "../types";

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperty();
  }, [id]);

  const loadProperty = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const response = await propertyService.getById(Number(id));
      setProperty(response.data);
    } catch (error) {
      console.error("Erro ao carregar imóvel:", error);
      alert("Imóvel não encontrado!");
      navigate("/properties");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!id || !confirm("Tem certeza que deseja deletar este imóvel?")) return;
    
    try {
      await propertyService.delete(Number(id));
      alert("Imóvel deletado com sucesso!");
      navigate("/properties");
    } catch (error) {
      console.error("Erro ao deletar imóvel:", error);
      alert("Erro ao deletar imóvel!");
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-100 p-8">Carregando...</div>;
  }

  if (!property) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <button
          onClick={() => navigate("/properties")}
          className="mb-4 text-blue-500 hover:text-blue-700"
        >
          ← Voltar
        </button>

        <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
        <p className="text-gray-600 mb-4">{property.address}</p>
        <p className="text-3xl font-bold text-blue-600 mb-6">
          R$ {property.price.toLocaleString("pt-BR")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Quartos</p>
            <p className="text-xl font-bold">{property.bedrooms}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Banheiros</p>
            <p className="text-xl font-bold">{property.bathrooms}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Área</p>
            <p className="text-xl font-bold">{property.squareMeters}m²</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Andares</p>
            <p className="text-xl font-bold">{property.floors}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Descrição</h2>
          <p className="text-gray-700">{property.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Amenidades</h2>
          <div className="flex gap-2 flex-wrap">
            {property.pool && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                🏊 Piscina
              </span>
            )}
            {property.garage > 0 && (
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded">
                🚗 {property.garage} vagas
              </span>
            )}
            {property.recreationArea && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
                🎾 Área de Lazer
              </span>
            )}
            {property.barbecue && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded">
                🍖 Churrasqueira
              </span>
            )}
            {property.airConditioning && (
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded">
                ❄️ Ar Condicionado
              </span>
            )}
            {property.furnished && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">
                🛋️ Mobiliado
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate(`/properties/edit/${id}`)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            ✏️ Editar
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            🗑️ Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
